
import { AxiosInstance } from 'axios';
import { ApiHeader } from './api';
import { SseClient } from '@maioradv/client-core';
import { Entity } from '@maioradv/types';

export type TiDelizioEvents = {
  reservations: {
    action: 'create';
    id: number;
  };
  campaigns:{
    action:'update',
    id:number,
    status?:string,
  };
  batch:{
    entity:Entity<'tidelizio'>,
    status:'completed',
    description?:string
  };
}

export type TiDelizioEvent<K extends keyof TiDelizioEvents = keyof TiDelizioEvents> =  
  K extends keyof TiDelizioEvents 
    ? {
        event: K;
        data: TiDelizioEvents[K];
        timestamp: number;
      }
    : never;

export type SseHandlerCallbacks = {
  message: (event: TiDelizioEvent) => void;
  error: (err: unknown) => void;
  open: () => void;
  close: () => void;
}

export class SseHandler {
  private sseClient = new SseClient();
  private debounceTimeout: ReturnType<typeof setTimeout> | null = null;
  private callbacks: Partial<SseHandlerCallbacks> = {};

  constructor(private client: AxiosInstance) {}

  on<T extends keyof SseHandlerCallbacks>(event: T, fn: SseHandlerCallbacks[T]) {
    this.callbacks[event] = fn;
    return this;
  }

  private getHeaders(): Record<string, string> {
    const axiosHeaders = this.client.defaults.headers.common;
    return {
      [ApiHeader.Authorization]: axiosHeaders[ApiHeader.Authorization] as string ?? '',
    };
  }

  private isReady(): boolean {
    return !!this.getHeaders()[ApiHeader.Authorization] && !!this.callbacks.message;
  }

  connect() {
    if (!this.isReady()) return;
    if (this.debounceTimeout) clearTimeout(this.debounceTimeout);

    this.debounceTimeout = setTimeout(() => {
      this.debounceTimeout = null;
      this.sseClient.disconnect();
      this.sseClient = new SseClient();
      this.sseClient.connect({
        url: `${this.client.defaults.baseURL}/sse`,
        headers: this.getHeaders(),
        onMessage: (event) => this.callbacks.message?.(JSON.parse(event.data)),
        onError: (err) => this.callbacks.error?.(err),
        onOpen: () => this.callbacks.open?.(),
        onClose: () => this.callbacks.close?.(),
      });
    }, 100);
  }

  disconnect() {
    if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
    this.debounceTimeout = null;
    this.sseClient.disconnect();
  }
}