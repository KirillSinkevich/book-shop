type TryInfer<T extends object> = T extends infer R ? R[keyof R] : never;
