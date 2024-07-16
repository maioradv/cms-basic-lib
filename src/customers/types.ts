export type Customer = {
  id: number;
  email: string;
  password: string;
  name: string|null;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}