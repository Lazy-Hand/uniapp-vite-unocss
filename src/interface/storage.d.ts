export type StorageKeys = 'token' | 'User' | 'URL'

export type ObjectType<T> = T extends 'token' ? string : T extends 'User' ? object : never
