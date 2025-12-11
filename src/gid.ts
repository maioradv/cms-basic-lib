export type GlobalEntities = {
  tidelizio: 'Product' | 'ProductVariant' | 'Bundle' | 'BundleVariant' | 'Collection';
  accounts: 'Customer' | 'Dashboard';
};

export type Namespace = keyof GlobalEntities;

export type Entity<N extends Namespace> = GlobalEntities[N];

export type Gid<N extends Namespace> = `gid://${N}/${Entity<N>}/${number}`;

export function toGlobalId<
  N extends Namespace,
  E extends Entity<N>
>(namespace: N, entity: E, id: number): Gid<N> {
  return `gid://${namespace}/${entity}/${id}`;
}

export function fromGlobalId<T extends Gid<Namespace>>(gid: T) {
  const [, , namespace, entity, id] = gid.split("/");

  return {
    namespace: namespace as Namespace,
    entity: entity as GlobalEntities[Namespace],
    id: id as string,
  };
}
