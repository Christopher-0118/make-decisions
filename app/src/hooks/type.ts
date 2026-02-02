// hooks
export type useRandomizerArgs<T> = {
  seed: number;
  values: T[];
  unique?: boolean;
};
