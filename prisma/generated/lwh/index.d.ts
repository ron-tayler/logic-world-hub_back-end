
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  nick: string
  createDate: Date
  is_active: boolean
  avatar: string
}

/**
 * Model User_Auth
 * 
 */
export type User_Auth = {
  userId: number
  email: string
  password: string
  is_active: boolean
}

/**
 * Model Mods_Collection
 * 
 */
export type Mods_Collection = {
  id: number
  avatar: string
  name: string
  description: string
  createDate: Date
  is_active: boolean
  author_id: number
}

/**
 * Model Mod
 * 
 */
export type Mod = {
  id: number
  avatar: string
  name: string
  description: string
  createDate: Date
  is_active: boolean
  collection_id: number
  views: number
  readme_type: number
  readme: string
  change_list_type: number
  change_list: string
  repository: string
  docs_url: string
}

/**
 * Model Mod_Author
 * 
 */
export type Mod_Author = {
  mod_id: number
  user_id: number
  type: number
}

/**
 * Model Mod_Image
 * 
 */
export type Mod_Image = {
  id: number
  mod_id: number
  url: string
}

/**
 * Model Mod_Tag
 * 
 */
export type Mod_Tag = {
  id: number
  name: string
}

/**
 * Model Mod_Version
 * 
 */
export type Mod_Version = {
  id: number
  mod_id: number
  version: string
  game_version: string
  releaseDate: Date
}

/**
 * Model Mod_Issue
 * 
 */
export type Mod_Issue = {
  id: number
  mod_id: number
  name: string
  type: Mod_Issue_Type
  author_id: number
  createDate: Date
}

/**
 * Model Mod_Issue_Post
 * 
 */
export type Mod_Issue_Post = {
  id: number
  issue_id: number
  author_id: number
  createDate: Date
  text: string
}

/**
 * Model Mods_List
 * 
 */
export type Mods_List = {
  id: number
  author_id: number
  is_public: boolean
  name: string
}

/**
 * Model Mods_Favorits
 * 
 */
export type Mods_Favorits = {
  user_id: number
  mod_id: number
}

/**
 * Model Mod_Subscribers
 * 
 */
export type Mod_Subscribers = {
  user_id: number
  mod_id: number
}

/**
 * Model Mod_Download
 * 
 */
export type Mod_Download = {
  user_id: number
  mod_id: number
  version_id: number
}

/**
 * Model User_Session
 * 
 */
export type User_Session = {
  id: number
  userId: number
  userAgent: string
  userAgentName: string
  osName: string
  deviceName: string
  name: string
  uuid: string
  ipv4: string
  fingerprint_id: string
  is_active: boolean
  createDate: Date
}

/**
 * Model User_Token
 * 
 */
export type User_Token = {
  id: number
  sessionId: number
  access_token: string
  refresh_token: string
  createDate: Date
  is_enable: boolean
  is_super_access: boolean
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Mod_Issue_Type: {
  GENERAL: 'GENERAL',
  BUGS: 'BUGS',
  ANNOUNCEMENTS: 'ANNOUNCEMENTS',
  IDEAS: 'IDEAS'
};

export type Mod_Issue_Type = (typeof Mod_Issue_Type)[keyof typeof Mod_Issue_Type]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.user_Auth`: Exposes CRUD operations for the **User_Auth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_Auths
    * const user_Auths = await prisma.user_Auth.findMany()
    * ```
    */
  get user_Auth(): Prisma.User_AuthDelegate<GlobalReject>;

  /**
   * `prisma.mods_Collection`: Exposes CRUD operations for the **Mods_Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mods_Collections
    * const mods_Collections = await prisma.mods_Collection.findMany()
    * ```
    */
  get mods_Collection(): Prisma.Mods_CollectionDelegate<GlobalReject>;

  /**
   * `prisma.mod`: Exposes CRUD operations for the **Mod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mods
    * const mods = await prisma.mod.findMany()
    * ```
    */
  get mod(): Prisma.ModDelegate<GlobalReject>;

  /**
   * `prisma.mod_Author`: Exposes CRUD operations for the **Mod_Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mod_Authors
    * const mod_Authors = await prisma.mod_Author.findMany()
    * ```
    */
  get mod_Author(): Prisma.Mod_AuthorDelegate<GlobalReject>;

  /**
   * `prisma.mod_Image`: Exposes CRUD operations for the **Mod_Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mod_Images
    * const mod_Images = await prisma.mod_Image.findMany()
    * ```
    */
  get mod_Image(): Prisma.Mod_ImageDelegate<GlobalReject>;

  /**
   * `prisma.mod_Tag`: Exposes CRUD operations for the **Mod_Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mod_Tags
    * const mod_Tags = await prisma.mod_Tag.findMany()
    * ```
    */
  get mod_Tag(): Prisma.Mod_TagDelegate<GlobalReject>;

  /**
   * `prisma.mod_Version`: Exposes CRUD operations for the **Mod_Version** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mod_Versions
    * const mod_Versions = await prisma.mod_Version.findMany()
    * ```
    */
  get mod_Version(): Prisma.Mod_VersionDelegate<GlobalReject>;

  /**
   * `prisma.mod_Issue`: Exposes CRUD operations for the **Mod_Issue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mod_Issues
    * const mod_Issues = await prisma.mod_Issue.findMany()
    * ```
    */
  get mod_Issue(): Prisma.Mod_IssueDelegate<GlobalReject>;

  /**
   * `prisma.mod_Issue_Post`: Exposes CRUD operations for the **Mod_Issue_Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mod_Issue_Posts
    * const mod_Issue_Posts = await prisma.mod_Issue_Post.findMany()
    * ```
    */
  get mod_Issue_Post(): Prisma.Mod_Issue_PostDelegate<GlobalReject>;

  /**
   * `prisma.mods_List`: Exposes CRUD operations for the **Mods_List** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mods_Lists
    * const mods_Lists = await prisma.mods_List.findMany()
    * ```
    */
  get mods_List(): Prisma.Mods_ListDelegate<GlobalReject>;

  /**
   * `prisma.mods_Favorits`: Exposes CRUD operations for the **Mods_Favorits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mods_Favorits
    * const mods_Favorits = await prisma.mods_Favorits.findMany()
    * ```
    */
  get mods_Favorits(): Prisma.Mods_FavoritsDelegate<GlobalReject>;

  /**
   * `prisma.mod_Subscribers`: Exposes CRUD operations for the **Mod_Subscribers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mod_Subscribers
    * const mod_Subscribers = await prisma.mod_Subscribers.findMany()
    * ```
    */
  get mod_Subscribers(): Prisma.Mod_SubscribersDelegate<GlobalReject>;

  /**
   * `prisma.mod_Download`: Exposes CRUD operations for the **Mod_Download** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mod_Downloads
    * const mod_Downloads = await prisma.mod_Download.findMany()
    * ```
    */
  get mod_Download(): Prisma.Mod_DownloadDelegate<GlobalReject>;

  /**
   * `prisma.user_Session`: Exposes CRUD operations for the **User_Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_Sessions
    * const user_Sessions = await prisma.user_Session.findMany()
    * ```
    */
  get user_Session(): Prisma.User_SessionDelegate<GlobalReject>;

  /**
   * `prisma.user_Token`: Exposes CRUD operations for the **User_Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_Tokens
    * const user_Tokens = await prisma.user_Token.findMany()
    * ```
    */
  get user_Token(): Prisma.User_TokenDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Prisma Client JS version: 3.15.2
   * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    User_Auth: 'User_Auth',
    Mods_Collection: 'Mods_Collection',
    Mod: 'Mod',
    Mod_Author: 'Mod_Author',
    Mod_Image: 'Mod_Image',
    Mod_Tag: 'Mod_Tag',
    Mod_Version: 'Mod_Version',
    Mod_Issue: 'Mod_Issue',
    Mod_Issue_Post: 'Mod_Issue_Post',
    Mods_List: 'Mods_List',
    Mods_Favorits: 'Mods_Favorits',
    Mod_Subscribers: 'Mod_Subscribers',
    Mod_Download: 'Mod_Download',
    User_Session: 'User_Session',
    User_Token: 'User_Token'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;


  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    ModsCollections: number
    ModAuthors: number
    ModIssues: number
    ModIssuePosts: number
    ModsLists: number
    ModsFavorits: number
    ModSubscribers: number
    ModDownloads: number
    UserSession: number
  }

  export type UserCountOutputTypeSelect = {
    ModsCollections?: boolean
    ModAuthors?: boolean
    ModIssues?: boolean
    ModIssuePosts?: boolean
    ModsLists?: boolean
    ModsFavorits?: boolean
    ModSubscribers?: boolean
    ModDownloads?: boolean
    UserSession?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type Mods_CollectionCountOutputType
   */


  export type Mods_CollectionCountOutputType = {
    Mods: number
  }

  export type Mods_CollectionCountOutputTypeSelect = {
    Mods?: boolean
  }

  export type Mods_CollectionCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Mods_CollectionCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Mods_CollectionCountOutputType
    : S extends undefined
    ? never
    : S extends Mods_CollectionCountOutputTypeArgs
    ?'include' extends U
    ? Mods_CollectionCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Mods_CollectionCountOutputType ? Mods_CollectionCountOutputType[P] : never
  } 
    : Mods_CollectionCountOutputType
  : Mods_CollectionCountOutputType




  // Custom InputTypes

  /**
   * Mods_CollectionCountOutputType without action
   */
  export type Mods_CollectionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Mods_CollectionCountOutputType
     * 
    **/
    select?: Mods_CollectionCountOutputTypeSelect | null
  }



  /**
   * Count Type ModCountOutputType
   */


  export type ModCountOutputType = {
    Images: number
    Authors: number
    Tags: number
    Versions: number
    Lists: number
    Issues: number
    Favorits: number
    Subscribers: number
    Downloads: number
  }

  export type ModCountOutputTypeSelect = {
    Images?: boolean
    Authors?: boolean
    Tags?: boolean
    Versions?: boolean
    Lists?: boolean
    Issues?: boolean
    Favorits?: boolean
    Subscribers?: boolean
    Downloads?: boolean
  }

  export type ModCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ModCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ModCountOutputType
    : S extends undefined
    ? never
    : S extends ModCountOutputTypeArgs
    ?'include' extends U
    ? ModCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ModCountOutputType ? ModCountOutputType[P] : never
  } 
    : ModCountOutputType
  : ModCountOutputType




  // Custom InputTypes

  /**
   * ModCountOutputType without action
   */
  export type ModCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ModCountOutputType
     * 
    **/
    select?: ModCountOutputTypeSelect | null
  }



  /**
   * Count Type Mod_TagCountOutputType
   */


  export type Mod_TagCountOutputType = {
    Mod: number
  }

  export type Mod_TagCountOutputTypeSelect = {
    Mod?: boolean
  }

  export type Mod_TagCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Mod_TagCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Mod_TagCountOutputType
    : S extends undefined
    ? never
    : S extends Mod_TagCountOutputTypeArgs
    ?'include' extends U
    ? Mod_TagCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Mod_TagCountOutputType ? Mod_TagCountOutputType[P] : never
  } 
    : Mod_TagCountOutputType
  : Mod_TagCountOutputType




  // Custom InputTypes

  /**
   * Mod_TagCountOutputType without action
   */
  export type Mod_TagCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Mod_TagCountOutputType
     * 
    **/
    select?: Mod_TagCountOutputTypeSelect | null
  }



  /**
   * Count Type Mod_VersionCountOutputType
   */


  export type Mod_VersionCountOutputType = {
    Downloads: number
  }

  export type Mod_VersionCountOutputTypeSelect = {
    Downloads?: boolean
  }

  export type Mod_VersionCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Mod_VersionCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Mod_VersionCountOutputType
    : S extends undefined
    ? never
    : S extends Mod_VersionCountOutputTypeArgs
    ?'include' extends U
    ? Mod_VersionCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Mod_VersionCountOutputType ? Mod_VersionCountOutputType[P] : never
  } 
    : Mod_VersionCountOutputType
  : Mod_VersionCountOutputType




  // Custom InputTypes

  /**
   * Mod_VersionCountOutputType without action
   */
  export type Mod_VersionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Mod_VersionCountOutputType
     * 
    **/
    select?: Mod_VersionCountOutputTypeSelect | null
  }



  /**
   * Count Type Mod_IssueCountOutputType
   */


  export type Mod_IssueCountOutputType = {
    ModIssuePost: number
  }

  export type Mod_IssueCountOutputTypeSelect = {
    ModIssuePost?: boolean
  }

  export type Mod_IssueCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Mod_IssueCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Mod_IssueCountOutputType
    : S extends undefined
    ? never
    : S extends Mod_IssueCountOutputTypeArgs
    ?'include' extends U
    ? Mod_IssueCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Mod_IssueCountOutputType ? Mod_IssueCountOutputType[P] : never
  } 
    : Mod_IssueCountOutputType
  : Mod_IssueCountOutputType




  // Custom InputTypes

  /**
   * Mod_IssueCountOutputType without action
   */
  export type Mod_IssueCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Mod_IssueCountOutputType
     * 
    **/
    select?: Mod_IssueCountOutputTypeSelect | null
  }



  /**
   * Count Type Mods_ListCountOutputType
   */


  export type Mods_ListCountOutputType = {
    Mods: number
  }

  export type Mods_ListCountOutputTypeSelect = {
    Mods?: boolean
  }

  export type Mods_ListCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Mods_ListCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Mods_ListCountOutputType
    : S extends undefined
    ? never
    : S extends Mods_ListCountOutputTypeArgs
    ?'include' extends U
    ? Mods_ListCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Mods_ListCountOutputType ? Mods_ListCountOutputType[P] : never
  } 
    : Mods_ListCountOutputType
  : Mods_ListCountOutputType




  // Custom InputTypes

  /**
   * Mods_ListCountOutputType without action
   */
  export type Mods_ListCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Mods_ListCountOutputType
     * 
    **/
    select?: Mods_ListCountOutputTypeSelect | null
  }



  /**
   * Count Type User_SessionCountOutputType
   */


  export type User_SessionCountOutputType = {
    Tokens: number
  }

  export type User_SessionCountOutputTypeSelect = {
    Tokens?: boolean
  }

  export type User_SessionCountOutputTypeGetPayload<
    S extends boolean | null | undefined | User_SessionCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? User_SessionCountOutputType
    : S extends undefined
    ? never
    : S extends User_SessionCountOutputTypeArgs
    ?'include' extends U
    ? User_SessionCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof User_SessionCountOutputType ? User_SessionCountOutputType[P] : never
  } 
    : User_SessionCountOutputType
  : User_SessionCountOutputType




  // Custom InputTypes

  /**
   * User_SessionCountOutputType without action
   */
  export type User_SessionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the User_SessionCountOutputType
     * 
    **/
    select?: User_SessionCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nick: string | null
    createDate: Date | null
    is_active: boolean | null
    avatar: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nick: string | null
    createDate: Date | null
    is_active: boolean | null
    avatar: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nick: number
    createDate: number
    is_active: number
    avatar: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nick?: true
    createDate?: true
    is_active?: true
    avatar?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nick?: true
    createDate?: true
    is_active?: true
    avatar?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nick?: true
    createDate?: true
    is_active?: true
    avatar?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    nick: string
    createDate: Date
    is_active: boolean
    avatar: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    nick?: boolean
    createDate?: boolean
    is_active?: boolean
    avatar?: boolean
    UserAuth?: boolean | User_AuthArgs
    ModsCollections?: boolean | Mods_CollectionFindManyArgs
    ModAuthors?: boolean | Mod_AuthorFindManyArgs
    ModIssues?: boolean | Mod_IssueFindManyArgs
    ModIssuePosts?: boolean | Mod_Issue_PostFindManyArgs
    ModsLists?: boolean | Mods_ListFindManyArgs
    ModsFavorits?: boolean | Mods_FavoritsFindManyArgs
    ModSubscribers?: boolean | Mod_SubscribersFindManyArgs
    ModDownloads?: boolean | Mod_DownloadFindManyArgs
    UserSession?: boolean | User_SessionFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    UserAuth?: boolean | User_AuthArgs
    ModsCollections?: boolean | Mods_CollectionFindManyArgs
    ModAuthors?: boolean | Mod_AuthorFindManyArgs
    ModIssues?: boolean | Mod_IssueFindManyArgs
    ModIssuePosts?: boolean | Mod_Issue_PostFindManyArgs
    ModsLists?: boolean | Mods_ListFindManyArgs
    ModsFavorits?: boolean | Mods_FavoritsFindManyArgs
    ModSubscribers?: boolean | Mod_SubscribersFindManyArgs
    ModDownloads?: boolean | Mod_DownloadFindManyArgs
    UserSession?: boolean | User_SessionFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'UserAuth' ? User_AuthGetPayload<S['include'][P]> | null :
        P extends 'ModsCollections' ? Array < Mods_CollectionGetPayload<S['include'][P]>>  :
        P extends 'ModAuthors' ? Array < Mod_AuthorGetPayload<S['include'][P]>>  :
        P extends 'ModIssues' ? Array < Mod_IssueGetPayload<S['include'][P]>>  :
        P extends 'ModIssuePosts' ? Array < Mod_Issue_PostGetPayload<S['include'][P]>>  :
        P extends 'ModsLists' ? Array < Mods_ListGetPayload<S['include'][P]>>  :
        P extends 'ModsFavorits' ? Array < Mods_FavoritsGetPayload<S['include'][P]>>  :
        P extends 'ModSubscribers' ? Array < Mod_SubscribersGetPayload<S['include'][P]>>  :
        P extends 'ModDownloads' ? Array < Mod_DownloadGetPayload<S['include'][P]>>  :
        P extends 'UserSession' ? Array < User_SessionGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'UserAuth' ? User_AuthGetPayload<S['select'][P]> | null :
        P extends 'ModsCollections' ? Array < Mods_CollectionGetPayload<S['select'][P]>>  :
        P extends 'ModAuthors' ? Array < Mod_AuthorGetPayload<S['select'][P]>>  :
        P extends 'ModIssues' ? Array < Mod_IssueGetPayload<S['select'][P]>>  :
        P extends 'ModIssuePosts' ? Array < Mod_Issue_PostGetPayload<S['select'][P]>>  :
        P extends 'ModsLists' ? Array < Mods_ListGetPayload<S['select'][P]>>  :
        P extends 'ModsFavorits' ? Array < Mods_FavoritsGetPayload<S['select'][P]>>  :
        P extends 'ModSubscribers' ? Array < Mod_SubscribersGetPayload<S['select'][P]>>  :
        P extends 'ModDownloads' ? Array < Mod_DownloadGetPayload<S['select'][P]>>  :
        P extends 'UserSession' ? Array < User_SessionGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    UserAuth<T extends User_AuthArgs = {}>(args?: Subset<T, User_AuthArgs>): CheckSelect<T, Prisma__User_AuthClient<User_Auth | null >, Prisma__User_AuthClient<User_AuthGetPayload<T> | null >>;

    ModsCollections<T extends Mods_CollectionFindManyArgs = {}>(args?: Subset<T, Mods_CollectionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mods_Collection>>, PrismaPromise<Array<Mods_CollectionGetPayload<T>>>>;

    ModAuthors<T extends Mod_AuthorFindManyArgs = {}>(args?: Subset<T, Mod_AuthorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod_Author>>, PrismaPromise<Array<Mod_AuthorGetPayload<T>>>>;

    ModIssues<T extends Mod_IssueFindManyArgs = {}>(args?: Subset<T, Mod_IssueFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod_Issue>>, PrismaPromise<Array<Mod_IssueGetPayload<T>>>>;

    ModIssuePosts<T extends Mod_Issue_PostFindManyArgs = {}>(args?: Subset<T, Mod_Issue_PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod_Issue_Post>>, PrismaPromise<Array<Mod_Issue_PostGetPayload<T>>>>;

    ModsLists<T extends Mods_ListFindManyArgs = {}>(args?: Subset<T, Mods_ListFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mods_List>>, PrismaPromise<Array<Mods_ListGetPayload<T>>>>;

    ModsFavorits<T extends Mods_FavoritsFindManyArgs = {}>(args?: Subset<T, Mods_FavoritsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mods_Favorits>>, PrismaPromise<Array<Mods_FavoritsGetPayload<T>>>>;

    ModSubscribers<T extends Mod_SubscribersFindManyArgs = {}>(args?: Subset<T, Mod_SubscribersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod_Subscribers>>, PrismaPromise<Array<Mod_SubscribersGetPayload<T>>>>;

    ModDownloads<T extends Mod_DownloadFindManyArgs = {}>(args?: Subset<T, Mod_DownloadFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod_Download>>, PrismaPromise<Array<Mod_DownloadGetPayload<T>>>>;

    UserSession<T extends User_SessionFindManyArgs = {}>(args?: Subset<T, User_SessionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User_Session>>, PrismaPromise<Array<User_SessionGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model User_Auth
   */


  export type AggregateUser_Auth = {
    _count: User_AuthCountAggregateOutputType | null
    _avg: User_AuthAvgAggregateOutputType | null
    _sum: User_AuthSumAggregateOutputType | null
    _min: User_AuthMinAggregateOutputType | null
    _max: User_AuthMaxAggregateOutputType | null
  }

  export type User_AuthAvgAggregateOutputType = {
    userId: number | null
  }

  export type User_AuthSumAggregateOutputType = {
    userId: number | null
  }

  export type User_AuthMinAggregateOutputType = {
    userId: number | null
    email: string | null
    password: string | null
    is_active: boolean | null
  }

  export type User_AuthMaxAggregateOutputType = {
    userId: number | null
    email: string | null
    password: string | null
    is_active: boolean | null
  }

  export type User_AuthCountAggregateOutputType = {
    userId: number
    email: number
    password: number
    is_active: number
    _all: number
  }


  export type User_AuthAvgAggregateInputType = {
    userId?: true
  }

  export type User_AuthSumAggregateInputType = {
    userId?: true
  }

  export type User_AuthMinAggregateInputType = {
    userId?: true
    email?: true
    password?: true
    is_active?: true
  }

  export type User_AuthMaxAggregateInputType = {
    userId?: true
    email?: true
    password?: true
    is_active?: true
  }

  export type User_AuthCountAggregateInputType = {
    userId?: true
    email?: true
    password?: true
    is_active?: true
    _all?: true
  }

  export type User_AuthAggregateArgs = {
    /**
     * Filter which User_Auth to aggregate.
     * 
    **/
    where?: User_AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Auths to fetch.
     * 
    **/
    orderBy?: Enumerable<User_AuthOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: User_AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Auths from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Auths.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_Auths
    **/
    _count?: true | User_AuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_AuthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_AuthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_AuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_AuthMaxAggregateInputType
  }

  export type GetUser_AuthAggregateType<T extends User_AuthAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_Auth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_Auth[P]>
      : GetScalarType<T[P], AggregateUser_Auth[P]>
  }




  export type User_AuthGroupByArgs = {
    where?: User_AuthWhereInput
    orderBy?: Enumerable<User_AuthOrderByWithAggregationInput>
    by: Array<User_AuthScalarFieldEnum>
    having?: User_AuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_AuthCountAggregateInputType | true
    _avg?: User_AuthAvgAggregateInputType
    _sum?: User_AuthSumAggregateInputType
    _min?: User_AuthMinAggregateInputType
    _max?: User_AuthMaxAggregateInputType
  }


  export type User_AuthGroupByOutputType = {
    userId: number
    email: string
    password: string
    is_active: boolean
    _count: User_AuthCountAggregateOutputType | null
    _avg: User_AuthAvgAggregateOutputType | null
    _sum: User_AuthSumAggregateOutputType | null
    _min: User_AuthMinAggregateOutputType | null
    _max: User_AuthMaxAggregateOutputType | null
  }

  type GetUser_AuthGroupByPayload<T extends User_AuthGroupByArgs> = PrismaPromise<
    Array<
      PickArray<User_AuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_AuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_AuthGroupByOutputType[P]>
            : GetScalarType<T[P], User_AuthGroupByOutputType[P]>
        }
      >
    >


  export type User_AuthSelect = {
    userId?: boolean
    email?: boolean
    password?: boolean
    is_active?: boolean
    User?: boolean | UserArgs
  }

  export type User_AuthInclude = {
    User?: boolean | UserArgs
  }

  export type User_AuthGetPayload<
    S extends boolean | null | undefined | User_AuthArgs,
    U = keyof S
      > = S extends true
        ? User_Auth
    : S extends undefined
    ? never
    : S extends User_AuthArgs | User_AuthFindManyArgs
    ?'include' extends U
    ? User_Auth  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof User_Auth ? User_Auth[P] : never
  } 
    : User_Auth
  : User_Auth


  type User_AuthCountArgs = Merge<
    Omit<User_AuthFindManyArgs, 'select' | 'include'> & {
      select?: User_AuthCountAggregateInputType | true
    }
  >

  export interface User_AuthDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User_Auth that matches the filter.
     * @param {User_AuthFindUniqueArgs} args - Arguments to find a User_Auth
     * @example
     * // Get one User_Auth
     * const user_Auth = await prisma.user_Auth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends User_AuthFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, User_AuthFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User_Auth'> extends True ? CheckSelect<T, Prisma__User_AuthClient<User_Auth>, Prisma__User_AuthClient<User_AuthGetPayload<T>>> : CheckSelect<T, Prisma__User_AuthClient<User_Auth | null >, Prisma__User_AuthClient<User_AuthGetPayload<T> | null >>

    /**
     * Find the first User_Auth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_AuthFindFirstArgs} args - Arguments to find a User_Auth
     * @example
     * // Get one User_Auth
     * const user_Auth = await prisma.user_Auth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends User_AuthFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, User_AuthFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User_Auth'> extends True ? CheckSelect<T, Prisma__User_AuthClient<User_Auth>, Prisma__User_AuthClient<User_AuthGetPayload<T>>> : CheckSelect<T, Prisma__User_AuthClient<User_Auth | null >, Prisma__User_AuthClient<User_AuthGetPayload<T> | null >>

    /**
     * Find zero or more User_Auths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_AuthFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Auths
     * const user_Auths = await prisma.user_Auth.findMany()
     * 
     * // Get first 10 User_Auths
     * const user_Auths = await prisma.user_Auth.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const user_AuthWithUserIdOnly = await prisma.user_Auth.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends User_AuthFindManyArgs>(
      args?: SelectSubset<T, User_AuthFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User_Auth>>, PrismaPromise<Array<User_AuthGetPayload<T>>>>

    /**
     * Create a User_Auth.
     * @param {User_AuthCreateArgs} args - Arguments to create a User_Auth.
     * @example
     * // Create one User_Auth
     * const User_Auth = await prisma.user_Auth.create({
     *   data: {
     *     // ... data to create a User_Auth
     *   }
     * })
     * 
    **/
    create<T extends User_AuthCreateArgs>(
      args: SelectSubset<T, User_AuthCreateArgs>
    ): CheckSelect<T, Prisma__User_AuthClient<User_Auth>, Prisma__User_AuthClient<User_AuthGetPayload<T>>>

    /**
     * Create many User_Auths.
     *     @param {User_AuthCreateManyArgs} args - Arguments to create many User_Auths.
     *     @example
     *     // Create many User_Auths
     *     const user_Auth = await prisma.user_Auth.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends User_AuthCreateManyArgs>(
      args?: SelectSubset<T, User_AuthCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User_Auth.
     * @param {User_AuthDeleteArgs} args - Arguments to delete one User_Auth.
     * @example
     * // Delete one User_Auth
     * const User_Auth = await prisma.user_Auth.delete({
     *   where: {
     *     // ... filter to delete one User_Auth
     *   }
     * })
     * 
    **/
    delete<T extends User_AuthDeleteArgs>(
      args: SelectSubset<T, User_AuthDeleteArgs>
    ): CheckSelect<T, Prisma__User_AuthClient<User_Auth>, Prisma__User_AuthClient<User_AuthGetPayload<T>>>

    /**
     * Update one User_Auth.
     * @param {User_AuthUpdateArgs} args - Arguments to update one User_Auth.
     * @example
     * // Update one User_Auth
     * const user_Auth = await prisma.user_Auth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends User_AuthUpdateArgs>(
      args: SelectSubset<T, User_AuthUpdateArgs>
    ): CheckSelect<T, Prisma__User_AuthClient<User_Auth>, Prisma__User_AuthClient<User_AuthGetPayload<T>>>

    /**
     * Delete zero or more User_Auths.
     * @param {User_AuthDeleteManyArgs} args - Arguments to filter User_Auths to delete.
     * @example
     * // Delete a few User_Auths
     * const { count } = await prisma.user_Auth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends User_AuthDeleteManyArgs>(
      args?: SelectSubset<T, User_AuthDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_AuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Auths
     * const user_Auth = await prisma.user_Auth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends User_AuthUpdateManyArgs>(
      args: SelectSubset<T, User_AuthUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User_Auth.
     * @param {User_AuthUpsertArgs} args - Arguments to update or create a User_Auth.
     * @example
     * // Update or create a User_Auth
     * const user_Auth = await prisma.user_Auth.upsert({
     *   create: {
     *     // ... data to create a User_Auth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Auth we want to update
     *   }
     * })
    **/
    upsert<T extends User_AuthUpsertArgs>(
      args: SelectSubset<T, User_AuthUpsertArgs>
    ): CheckSelect<T, Prisma__User_AuthClient<User_Auth>, Prisma__User_AuthClient<User_AuthGetPayload<T>>>

    /**
     * Count the number of User_Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_AuthCountArgs} args - Arguments to filter User_Auths to count.
     * @example
     * // Count the number of User_Auths
     * const count = await prisma.user_Auth.count({
     *   where: {
     *     // ... the filter for the User_Auths we want to count
     *   }
     * })
    **/
    count<T extends User_AuthCountArgs>(
      args?: Subset<T, User_AuthCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_AuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_AuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_AuthAggregateArgs>(args: Subset<T, User_AuthAggregateArgs>): PrismaPromise<GetUser_AuthAggregateType<T>>

    /**
     * Group by User_Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_AuthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_AuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_AuthGroupByArgs['orderBy'] }
        : { orderBy?: User_AuthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_AuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_AuthGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_Auth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__User_AuthClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User_Auth findUnique
   */
  export type User_AuthFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User_Auth
     * 
    **/
    select?: User_AuthSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_AuthInclude | null
    /**
     * Throw an Error if a User_Auth can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User_Auth to fetch.
     * 
    **/
    where: User_AuthWhereUniqueInput
  }


  /**
   * User_Auth findFirst
   */
  export type User_AuthFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User_Auth
     * 
    **/
    select?: User_AuthSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_AuthInclude | null
    /**
     * Throw an Error if a User_Auth can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User_Auth to fetch.
     * 
    **/
    where?: User_AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Auths to fetch.
     * 
    **/
    orderBy?: Enumerable<User_AuthOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Auths.
     * 
    **/
    cursor?: User_AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Auths from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Auths.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Auths.
     * 
    **/
    distinct?: Enumerable<User_AuthScalarFieldEnum>
  }


  /**
   * User_Auth findMany
   */
  export type User_AuthFindManyArgs = {
    /**
     * Select specific fields to fetch from the User_Auth
     * 
    **/
    select?: User_AuthSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_AuthInclude | null
    /**
     * Filter, which User_Auths to fetch.
     * 
    **/
    where?: User_AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Auths to fetch.
     * 
    **/
    orderBy?: Enumerable<User_AuthOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_Auths.
     * 
    **/
    cursor?: User_AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Auths from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Auths.
     * 
    **/
    skip?: number
    distinct?: Enumerable<User_AuthScalarFieldEnum>
  }


  /**
   * User_Auth create
   */
  export type User_AuthCreateArgs = {
    /**
     * Select specific fields to fetch from the User_Auth
     * 
    **/
    select?: User_AuthSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_AuthInclude | null
    /**
     * The data needed to create a User_Auth.
     * 
    **/
    data: XOR<User_AuthCreateInput, User_AuthUncheckedCreateInput>
  }


  /**
   * User_Auth createMany
   */
  export type User_AuthCreateManyArgs = {
    /**
     * The data used to create many User_Auths.
     * 
    **/
    data: Enumerable<User_AuthCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User_Auth update
   */
  export type User_AuthUpdateArgs = {
    /**
     * Select specific fields to fetch from the User_Auth
     * 
    **/
    select?: User_AuthSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_AuthInclude | null
    /**
     * The data needed to update a User_Auth.
     * 
    **/
    data: XOR<User_AuthUpdateInput, User_AuthUncheckedUpdateInput>
    /**
     * Choose, which User_Auth to update.
     * 
    **/
    where: User_AuthWhereUniqueInput
  }


  /**
   * User_Auth updateMany
   */
  export type User_AuthUpdateManyArgs = {
    /**
     * The data used to update User_Auths.
     * 
    **/
    data: XOR<User_AuthUpdateManyMutationInput, User_AuthUncheckedUpdateManyInput>
    /**
     * Filter which User_Auths to update
     * 
    **/
    where?: User_AuthWhereInput
  }


  /**
   * User_Auth upsert
   */
  export type User_AuthUpsertArgs = {
    /**
     * Select specific fields to fetch from the User_Auth
     * 
    **/
    select?: User_AuthSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_AuthInclude | null
    /**
     * The filter to search for the User_Auth to update in case it exists.
     * 
    **/
    where: User_AuthWhereUniqueInput
    /**
     * In case the User_Auth found by the `where` argument doesn't exist, create a new User_Auth with this data.
     * 
    **/
    create: XOR<User_AuthCreateInput, User_AuthUncheckedCreateInput>
    /**
     * In case the User_Auth was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<User_AuthUpdateInput, User_AuthUncheckedUpdateInput>
  }


  /**
   * User_Auth delete
   */
  export type User_AuthDeleteArgs = {
    /**
     * Select specific fields to fetch from the User_Auth
     * 
    **/
    select?: User_AuthSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_AuthInclude | null
    /**
     * Filter which User_Auth to delete.
     * 
    **/
    where: User_AuthWhereUniqueInput
  }


  /**
   * User_Auth deleteMany
   */
  export type User_AuthDeleteManyArgs = {
    /**
     * Filter which User_Auths to delete
     * 
    **/
    where?: User_AuthWhereInput
  }


  /**
   * User_Auth without action
   */
  export type User_AuthArgs = {
    /**
     * Select specific fields to fetch from the User_Auth
     * 
    **/
    select?: User_AuthSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_AuthInclude | null
  }



  /**
   * Model Mods_Collection
   */


  export type AggregateMods_Collection = {
    _count: Mods_CollectionCountAggregateOutputType | null
    _avg: Mods_CollectionAvgAggregateOutputType | null
    _sum: Mods_CollectionSumAggregateOutputType | null
    _min: Mods_CollectionMinAggregateOutputType | null
    _max: Mods_CollectionMaxAggregateOutputType | null
  }

  export type Mods_CollectionAvgAggregateOutputType = {
    id: number | null
    author_id: number | null
  }

  export type Mods_CollectionSumAggregateOutputType = {
    id: number | null
    author_id: number | null
  }

  export type Mods_CollectionMinAggregateOutputType = {
    id: number | null
    avatar: string | null
    name: string | null
    description: string | null
    createDate: Date | null
    is_active: boolean | null
    author_id: number | null
  }

  export type Mods_CollectionMaxAggregateOutputType = {
    id: number | null
    avatar: string | null
    name: string | null
    description: string | null
    createDate: Date | null
    is_active: boolean | null
    author_id: number | null
  }

  export type Mods_CollectionCountAggregateOutputType = {
    id: number
    avatar: number
    name: number
    description: number
    createDate: number
    is_active: number
    author_id: number
    _all: number
  }


  export type Mods_CollectionAvgAggregateInputType = {
    id?: true
    author_id?: true
  }

  export type Mods_CollectionSumAggregateInputType = {
    id?: true
    author_id?: true
  }

  export type Mods_CollectionMinAggregateInputType = {
    id?: true
    avatar?: true
    name?: true
    description?: true
    createDate?: true
    is_active?: true
    author_id?: true
  }

  export type Mods_CollectionMaxAggregateInputType = {
    id?: true
    avatar?: true
    name?: true
    description?: true
    createDate?: true
    is_active?: true
    author_id?: true
  }

  export type Mods_CollectionCountAggregateInputType = {
    id?: true
    avatar?: true
    name?: true
    description?: true
    createDate?: true
    is_active?: true
    author_id?: true
    _all?: true
  }

  export type Mods_CollectionAggregateArgs = {
    /**
     * Filter which Mods_Collection to aggregate.
     * 
    **/
    where?: Mods_CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods_Collections to fetch.
     * 
    **/
    orderBy?: Enumerable<Mods_CollectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Mods_CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods_Collections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods_Collections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mods_Collections
    **/
    _count?: true | Mods_CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mods_CollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mods_CollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mods_CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mods_CollectionMaxAggregateInputType
  }

  export type GetMods_CollectionAggregateType<T extends Mods_CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateMods_Collection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMods_Collection[P]>
      : GetScalarType<T[P], AggregateMods_Collection[P]>
  }




  export type Mods_CollectionGroupByArgs = {
    where?: Mods_CollectionWhereInput
    orderBy?: Enumerable<Mods_CollectionOrderByWithAggregationInput>
    by: Array<Mods_CollectionScalarFieldEnum>
    having?: Mods_CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mods_CollectionCountAggregateInputType | true
    _avg?: Mods_CollectionAvgAggregateInputType
    _sum?: Mods_CollectionSumAggregateInputType
    _min?: Mods_CollectionMinAggregateInputType
    _max?: Mods_CollectionMaxAggregateInputType
  }


  export type Mods_CollectionGroupByOutputType = {
    id: number
    avatar: string
    name: string
    description: string
    createDate: Date
    is_active: boolean
    author_id: number
    _count: Mods_CollectionCountAggregateOutputType | null
    _avg: Mods_CollectionAvgAggregateOutputType | null
    _sum: Mods_CollectionSumAggregateOutputType | null
    _min: Mods_CollectionMinAggregateOutputType | null
    _max: Mods_CollectionMaxAggregateOutputType | null
  }

  type GetMods_CollectionGroupByPayload<T extends Mods_CollectionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mods_CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mods_CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mods_CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], Mods_CollectionGroupByOutputType[P]>
        }
      >
    >


  export type Mods_CollectionSelect = {
    id?: boolean
    avatar?: boolean
    name?: boolean
    description?: boolean
    createDate?: boolean
    is_active?: boolean
    author_id?: boolean
    Author?: boolean | UserArgs
    Mods?: boolean | ModFindManyArgs
    _count?: boolean | Mods_CollectionCountOutputTypeArgs
  }

  export type Mods_CollectionInclude = {
    Author?: boolean | UserArgs
    Mods?: boolean | ModFindManyArgs
    _count?: boolean | Mods_CollectionCountOutputTypeArgs
  }

  export type Mods_CollectionGetPayload<
    S extends boolean | null | undefined | Mods_CollectionArgs,
    U = keyof S
      > = S extends true
        ? Mods_Collection
    : S extends undefined
    ? never
    : S extends Mods_CollectionArgs | Mods_CollectionFindManyArgs
    ?'include' extends U
    ? Mods_Collection  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Author' ? UserGetPayload<S['include'][P]> :
        P extends 'Mods' ? Array < ModGetPayload<S['include'][P]>>  :
        P extends '_count' ? Mods_CollectionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Author' ? UserGetPayload<S['select'][P]> :
        P extends 'Mods' ? Array < ModGetPayload<S['select'][P]>>  :
        P extends '_count' ? Mods_CollectionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Mods_Collection ? Mods_Collection[P] : never
  } 
    : Mods_Collection
  : Mods_Collection


  type Mods_CollectionCountArgs = Merge<
    Omit<Mods_CollectionFindManyArgs, 'select' | 'include'> & {
      select?: Mods_CollectionCountAggregateInputType | true
    }
  >

  export interface Mods_CollectionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Mods_Collection that matches the filter.
     * @param {Mods_CollectionFindUniqueArgs} args - Arguments to find a Mods_Collection
     * @example
     * // Get one Mods_Collection
     * const mods_Collection = await prisma.mods_Collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Mods_CollectionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Mods_CollectionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mods_Collection'> extends True ? CheckSelect<T, Prisma__Mods_CollectionClient<Mods_Collection>, Prisma__Mods_CollectionClient<Mods_CollectionGetPayload<T>>> : CheckSelect<T, Prisma__Mods_CollectionClient<Mods_Collection | null >, Prisma__Mods_CollectionClient<Mods_CollectionGetPayload<T> | null >>

    /**
     * Find the first Mods_Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_CollectionFindFirstArgs} args - Arguments to find a Mods_Collection
     * @example
     * // Get one Mods_Collection
     * const mods_Collection = await prisma.mods_Collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Mods_CollectionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Mods_CollectionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mods_Collection'> extends True ? CheckSelect<T, Prisma__Mods_CollectionClient<Mods_Collection>, Prisma__Mods_CollectionClient<Mods_CollectionGetPayload<T>>> : CheckSelect<T, Prisma__Mods_CollectionClient<Mods_Collection | null >, Prisma__Mods_CollectionClient<Mods_CollectionGetPayload<T> | null >>

    /**
     * Find zero or more Mods_Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_CollectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mods_Collections
     * const mods_Collections = await prisma.mods_Collection.findMany()
     * 
     * // Get first 10 Mods_Collections
     * const mods_Collections = await prisma.mods_Collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mods_CollectionWithIdOnly = await prisma.mods_Collection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Mods_CollectionFindManyArgs>(
      args?: SelectSubset<T, Mods_CollectionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Mods_Collection>>, PrismaPromise<Array<Mods_CollectionGetPayload<T>>>>

    /**
     * Create a Mods_Collection.
     * @param {Mods_CollectionCreateArgs} args - Arguments to create a Mods_Collection.
     * @example
     * // Create one Mods_Collection
     * const Mods_Collection = await prisma.mods_Collection.create({
     *   data: {
     *     // ... data to create a Mods_Collection
     *   }
     * })
     * 
    **/
    create<T extends Mods_CollectionCreateArgs>(
      args: SelectSubset<T, Mods_CollectionCreateArgs>
    ): CheckSelect<T, Prisma__Mods_CollectionClient<Mods_Collection>, Prisma__Mods_CollectionClient<Mods_CollectionGetPayload<T>>>

    /**
     * Create many Mods_Collections.
     *     @param {Mods_CollectionCreateManyArgs} args - Arguments to create many Mods_Collections.
     *     @example
     *     // Create many Mods_Collections
     *     const mods_Collection = await prisma.mods_Collection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Mods_CollectionCreateManyArgs>(
      args?: SelectSubset<T, Mods_CollectionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mods_Collection.
     * @param {Mods_CollectionDeleteArgs} args - Arguments to delete one Mods_Collection.
     * @example
     * // Delete one Mods_Collection
     * const Mods_Collection = await prisma.mods_Collection.delete({
     *   where: {
     *     // ... filter to delete one Mods_Collection
     *   }
     * })
     * 
    **/
    delete<T extends Mods_CollectionDeleteArgs>(
      args: SelectSubset<T, Mods_CollectionDeleteArgs>
    ): CheckSelect<T, Prisma__Mods_CollectionClient<Mods_Collection>, Prisma__Mods_CollectionClient<Mods_CollectionGetPayload<T>>>

    /**
     * Update one Mods_Collection.
     * @param {Mods_CollectionUpdateArgs} args - Arguments to update one Mods_Collection.
     * @example
     * // Update one Mods_Collection
     * const mods_Collection = await prisma.mods_Collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Mods_CollectionUpdateArgs>(
      args: SelectSubset<T, Mods_CollectionUpdateArgs>
    ): CheckSelect<T, Prisma__Mods_CollectionClient<Mods_Collection>, Prisma__Mods_CollectionClient<Mods_CollectionGetPayload<T>>>

    /**
     * Delete zero or more Mods_Collections.
     * @param {Mods_CollectionDeleteManyArgs} args - Arguments to filter Mods_Collections to delete.
     * @example
     * // Delete a few Mods_Collections
     * const { count } = await prisma.mods_Collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Mods_CollectionDeleteManyArgs>(
      args?: SelectSubset<T, Mods_CollectionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mods_Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mods_Collections
     * const mods_Collection = await prisma.mods_Collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Mods_CollectionUpdateManyArgs>(
      args: SelectSubset<T, Mods_CollectionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mods_Collection.
     * @param {Mods_CollectionUpsertArgs} args - Arguments to update or create a Mods_Collection.
     * @example
     * // Update or create a Mods_Collection
     * const mods_Collection = await prisma.mods_Collection.upsert({
     *   create: {
     *     // ... data to create a Mods_Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mods_Collection we want to update
     *   }
     * })
    **/
    upsert<T extends Mods_CollectionUpsertArgs>(
      args: SelectSubset<T, Mods_CollectionUpsertArgs>
    ): CheckSelect<T, Prisma__Mods_CollectionClient<Mods_Collection>, Prisma__Mods_CollectionClient<Mods_CollectionGetPayload<T>>>

    /**
     * Count the number of Mods_Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_CollectionCountArgs} args - Arguments to filter Mods_Collections to count.
     * @example
     * // Count the number of Mods_Collections
     * const count = await prisma.mods_Collection.count({
     *   where: {
     *     // ... the filter for the Mods_Collections we want to count
     *   }
     * })
    **/
    count<T extends Mods_CollectionCountArgs>(
      args?: Subset<T, Mods_CollectionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mods_CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mods_Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mods_CollectionAggregateArgs>(args: Subset<T, Mods_CollectionAggregateArgs>): PrismaPromise<GetMods_CollectionAggregateType<T>>

    /**
     * Group by Mods_Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_CollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mods_CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mods_CollectionGroupByArgs['orderBy'] }
        : { orderBy?: Mods_CollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mods_CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMods_CollectionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mods_Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Mods_CollectionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Mods<T extends ModFindManyArgs = {}>(args?: Subset<T, ModFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod>>, PrismaPromise<Array<ModGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Mods_Collection findUnique
   */
  export type Mods_CollectionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Mods_Collection
     * 
    **/
    select?: Mods_CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_CollectionInclude | null
    /**
     * Throw an Error if a Mods_Collection can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mods_Collection to fetch.
     * 
    **/
    where: Mods_CollectionWhereUniqueInput
  }


  /**
   * Mods_Collection findFirst
   */
  export type Mods_CollectionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Mods_Collection
     * 
    **/
    select?: Mods_CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_CollectionInclude | null
    /**
     * Throw an Error if a Mods_Collection can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mods_Collection to fetch.
     * 
    **/
    where?: Mods_CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods_Collections to fetch.
     * 
    **/
    orderBy?: Enumerable<Mods_CollectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mods_Collections.
     * 
    **/
    cursor?: Mods_CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods_Collections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods_Collections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mods_Collections.
     * 
    **/
    distinct?: Enumerable<Mods_CollectionScalarFieldEnum>
  }


  /**
   * Mods_Collection findMany
   */
  export type Mods_CollectionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mods_Collection
     * 
    **/
    select?: Mods_CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_CollectionInclude | null
    /**
     * Filter, which Mods_Collections to fetch.
     * 
    **/
    where?: Mods_CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods_Collections to fetch.
     * 
    **/
    orderBy?: Enumerable<Mods_CollectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mods_Collections.
     * 
    **/
    cursor?: Mods_CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods_Collections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods_Collections.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mods_CollectionScalarFieldEnum>
  }


  /**
   * Mods_Collection create
   */
  export type Mods_CollectionCreateArgs = {
    /**
     * Select specific fields to fetch from the Mods_Collection
     * 
    **/
    select?: Mods_CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_CollectionInclude | null
    /**
     * The data needed to create a Mods_Collection.
     * 
    **/
    data: XOR<Mods_CollectionCreateInput, Mods_CollectionUncheckedCreateInput>
  }


  /**
   * Mods_Collection createMany
   */
  export type Mods_CollectionCreateManyArgs = {
    /**
     * The data used to create many Mods_Collections.
     * 
    **/
    data: Enumerable<Mods_CollectionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mods_Collection update
   */
  export type Mods_CollectionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mods_Collection
     * 
    **/
    select?: Mods_CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_CollectionInclude | null
    /**
     * The data needed to update a Mods_Collection.
     * 
    **/
    data: XOR<Mods_CollectionUpdateInput, Mods_CollectionUncheckedUpdateInput>
    /**
     * Choose, which Mods_Collection to update.
     * 
    **/
    where: Mods_CollectionWhereUniqueInput
  }


  /**
   * Mods_Collection updateMany
   */
  export type Mods_CollectionUpdateManyArgs = {
    /**
     * The data used to update Mods_Collections.
     * 
    **/
    data: XOR<Mods_CollectionUpdateManyMutationInput, Mods_CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Mods_Collections to update
     * 
    **/
    where?: Mods_CollectionWhereInput
  }


  /**
   * Mods_Collection upsert
   */
  export type Mods_CollectionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mods_Collection
     * 
    **/
    select?: Mods_CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_CollectionInclude | null
    /**
     * The filter to search for the Mods_Collection to update in case it exists.
     * 
    **/
    where: Mods_CollectionWhereUniqueInput
    /**
     * In case the Mods_Collection found by the `where` argument doesn't exist, create a new Mods_Collection with this data.
     * 
    **/
    create: XOR<Mods_CollectionCreateInput, Mods_CollectionUncheckedCreateInput>
    /**
     * In case the Mods_Collection was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Mods_CollectionUpdateInput, Mods_CollectionUncheckedUpdateInput>
  }


  /**
   * Mods_Collection delete
   */
  export type Mods_CollectionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mods_Collection
     * 
    **/
    select?: Mods_CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_CollectionInclude | null
    /**
     * Filter which Mods_Collection to delete.
     * 
    **/
    where: Mods_CollectionWhereUniqueInput
  }


  /**
   * Mods_Collection deleteMany
   */
  export type Mods_CollectionDeleteManyArgs = {
    /**
     * Filter which Mods_Collections to delete
     * 
    **/
    where?: Mods_CollectionWhereInput
  }


  /**
   * Mods_Collection without action
   */
  export type Mods_CollectionArgs = {
    /**
     * Select specific fields to fetch from the Mods_Collection
     * 
    **/
    select?: Mods_CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_CollectionInclude | null
  }



  /**
   * Model Mod
   */


  export type AggregateMod = {
    _count: ModCountAggregateOutputType | null
    _avg: ModAvgAggregateOutputType | null
    _sum: ModSumAggregateOutputType | null
    _min: ModMinAggregateOutputType | null
    _max: ModMaxAggregateOutputType | null
  }

  export type ModAvgAggregateOutputType = {
    id: number | null
    collection_id: number | null
    views: number | null
    readme_type: number | null
    change_list_type: number | null
  }

  export type ModSumAggregateOutputType = {
    id: number | null
    collection_id: number | null
    views: number | null
    readme_type: number | null
    change_list_type: number | null
  }

  export type ModMinAggregateOutputType = {
    id: number | null
    avatar: string | null
    name: string | null
    description: string | null
    createDate: Date | null
    is_active: boolean | null
    collection_id: number | null
    views: number | null
    readme_type: number | null
    readme: string | null
    change_list_type: number | null
    change_list: string | null
    repository: string | null
    docs_url: string | null
  }

  export type ModMaxAggregateOutputType = {
    id: number | null
    avatar: string | null
    name: string | null
    description: string | null
    createDate: Date | null
    is_active: boolean | null
    collection_id: number | null
    views: number | null
    readme_type: number | null
    readme: string | null
    change_list_type: number | null
    change_list: string | null
    repository: string | null
    docs_url: string | null
  }

  export type ModCountAggregateOutputType = {
    id: number
    avatar: number
    name: number
    description: number
    createDate: number
    is_active: number
    collection_id: number
    views: number
    readme_type: number
    readme: number
    change_list_type: number
    change_list: number
    repository: number
    docs_url: number
    _all: number
  }


  export type ModAvgAggregateInputType = {
    id?: true
    collection_id?: true
    views?: true
    readme_type?: true
    change_list_type?: true
  }

  export type ModSumAggregateInputType = {
    id?: true
    collection_id?: true
    views?: true
    readme_type?: true
    change_list_type?: true
  }

  export type ModMinAggregateInputType = {
    id?: true
    avatar?: true
    name?: true
    description?: true
    createDate?: true
    is_active?: true
    collection_id?: true
    views?: true
    readme_type?: true
    readme?: true
    change_list_type?: true
    change_list?: true
    repository?: true
    docs_url?: true
  }

  export type ModMaxAggregateInputType = {
    id?: true
    avatar?: true
    name?: true
    description?: true
    createDate?: true
    is_active?: true
    collection_id?: true
    views?: true
    readme_type?: true
    readme?: true
    change_list_type?: true
    change_list?: true
    repository?: true
    docs_url?: true
  }

  export type ModCountAggregateInputType = {
    id?: true
    avatar?: true
    name?: true
    description?: true
    createDate?: true
    is_active?: true
    collection_id?: true
    views?: true
    readme_type?: true
    readme?: true
    change_list_type?: true
    change_list?: true
    repository?: true
    docs_url?: true
    _all?: true
  }

  export type ModAggregateArgs = {
    /**
     * Filter which Mod to aggregate.
     * 
    **/
    where?: ModWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods to fetch.
     * 
    **/
    orderBy?: Enumerable<ModOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ModWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mods
    **/
    _count?: true | ModCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModMaxAggregateInputType
  }

  export type GetModAggregateType<T extends ModAggregateArgs> = {
        [P in keyof T & keyof AggregateMod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMod[P]>
      : GetScalarType<T[P], AggregateMod[P]>
  }




  export type ModGroupByArgs = {
    where?: ModWhereInput
    orderBy?: Enumerable<ModOrderByWithAggregationInput>
    by: Array<ModScalarFieldEnum>
    having?: ModScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModCountAggregateInputType | true
    _avg?: ModAvgAggregateInputType
    _sum?: ModSumAggregateInputType
    _min?: ModMinAggregateInputType
    _max?: ModMaxAggregateInputType
  }


  export type ModGroupByOutputType = {
    id: number
    avatar: string
    name: string
    description: string
    createDate: Date
    is_active: boolean
    collection_id: number
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    _count: ModCountAggregateOutputType | null
    _avg: ModAvgAggregateOutputType | null
    _sum: ModSumAggregateOutputType | null
    _min: ModMinAggregateOutputType | null
    _max: ModMaxAggregateOutputType | null
  }

  type GetModGroupByPayload<T extends ModGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ModGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModGroupByOutputType[P]>
            : GetScalarType<T[P], ModGroupByOutputType[P]>
        }
      >
    >


  export type ModSelect = {
    id?: boolean
    avatar?: boolean
    name?: boolean
    description?: boolean
    createDate?: boolean
    is_active?: boolean
    collection_id?: boolean
    views?: boolean
    readme_type?: boolean
    readme?: boolean
    change_list_type?: boolean
    change_list?: boolean
    repository?: boolean
    docs_url?: boolean
    Collection?: boolean | Mods_CollectionArgs
    Images?: boolean | Mod_ImageFindManyArgs
    Authors?: boolean | Mod_AuthorFindManyArgs
    Tags?: boolean | Mod_TagFindManyArgs
    Versions?: boolean | Mod_VersionFindManyArgs
    Lists?: boolean | Mods_ListFindManyArgs
    Issues?: boolean | Mod_IssueFindManyArgs
    Favorits?: boolean | Mods_FavoritsFindManyArgs
    Subscribers?: boolean | Mod_SubscribersFindManyArgs
    Downloads?: boolean | Mod_DownloadFindManyArgs
    _count?: boolean | ModCountOutputTypeArgs
  }

  export type ModInclude = {
    Collection?: boolean | Mods_CollectionArgs
    Images?: boolean | Mod_ImageFindManyArgs
    Authors?: boolean | Mod_AuthorFindManyArgs
    Tags?: boolean | Mod_TagFindManyArgs
    Versions?: boolean | Mod_VersionFindManyArgs
    Lists?: boolean | Mods_ListFindManyArgs
    Issues?: boolean | Mod_IssueFindManyArgs
    Favorits?: boolean | Mods_FavoritsFindManyArgs
    Subscribers?: boolean | Mod_SubscribersFindManyArgs
    Downloads?: boolean | Mod_DownloadFindManyArgs
    _count?: boolean | ModCountOutputTypeArgs
  }

  export type ModGetPayload<
    S extends boolean | null | undefined | ModArgs,
    U = keyof S
      > = S extends true
        ? Mod
    : S extends undefined
    ? never
    : S extends ModArgs | ModFindManyArgs
    ?'include' extends U
    ? Mod  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Collection' ? Mods_CollectionGetPayload<S['include'][P]> :
        P extends 'Images' ? Array < Mod_ImageGetPayload<S['include'][P]>>  :
        P extends 'Authors' ? Array < Mod_AuthorGetPayload<S['include'][P]>>  :
        P extends 'Tags' ? Array < Mod_TagGetPayload<S['include'][P]>>  :
        P extends 'Versions' ? Array < Mod_VersionGetPayload<S['include'][P]>>  :
        P extends 'Lists' ? Array < Mods_ListGetPayload<S['include'][P]>>  :
        P extends 'Issues' ? Array < Mod_IssueGetPayload<S['include'][P]>>  :
        P extends 'Favorits' ? Array < Mods_FavoritsGetPayload<S['include'][P]>>  :
        P extends 'Subscribers' ? Array < Mod_SubscribersGetPayload<S['include'][P]>>  :
        P extends 'Downloads' ? Array < Mod_DownloadGetPayload<S['include'][P]>>  :
        P extends '_count' ? ModCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Collection' ? Mods_CollectionGetPayload<S['select'][P]> :
        P extends 'Images' ? Array < Mod_ImageGetPayload<S['select'][P]>>  :
        P extends 'Authors' ? Array < Mod_AuthorGetPayload<S['select'][P]>>  :
        P extends 'Tags' ? Array < Mod_TagGetPayload<S['select'][P]>>  :
        P extends 'Versions' ? Array < Mod_VersionGetPayload<S['select'][P]>>  :
        P extends 'Lists' ? Array < Mods_ListGetPayload<S['select'][P]>>  :
        P extends 'Issues' ? Array < Mod_IssueGetPayload<S['select'][P]>>  :
        P extends 'Favorits' ? Array < Mods_FavoritsGetPayload<S['select'][P]>>  :
        P extends 'Subscribers' ? Array < Mod_SubscribersGetPayload<S['select'][P]>>  :
        P extends 'Downloads' ? Array < Mod_DownloadGetPayload<S['select'][P]>>  :
        P extends '_count' ? ModCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Mod ? Mod[P] : never
  } 
    : Mod
  : Mod


  type ModCountArgs = Merge<
    Omit<ModFindManyArgs, 'select' | 'include'> & {
      select?: ModCountAggregateInputType | true
    }
  >

  export interface ModDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Mod that matches the filter.
     * @param {ModFindUniqueArgs} args - Arguments to find a Mod
     * @example
     * // Get one Mod
     * const mod = await prisma.mod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mod'> extends True ? CheckSelect<T, Prisma__ModClient<Mod>, Prisma__ModClient<ModGetPayload<T>>> : CheckSelect<T, Prisma__ModClient<Mod | null >, Prisma__ModClient<ModGetPayload<T> | null >>

    /**
     * Find the first Mod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModFindFirstArgs} args - Arguments to find a Mod
     * @example
     * // Get one Mod
     * const mod = await prisma.mod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mod'> extends True ? CheckSelect<T, Prisma__ModClient<Mod>, Prisma__ModClient<ModGetPayload<T>>> : CheckSelect<T, Prisma__ModClient<Mod | null >, Prisma__ModClient<ModGetPayload<T> | null >>

    /**
     * Find zero or more Mods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mods
     * const mods = await prisma.mod.findMany()
     * 
     * // Get first 10 Mods
     * const mods = await prisma.mod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modWithIdOnly = await prisma.mod.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModFindManyArgs>(
      args?: SelectSubset<T, ModFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Mod>>, PrismaPromise<Array<ModGetPayload<T>>>>

    /**
     * Create a Mod.
     * @param {ModCreateArgs} args - Arguments to create a Mod.
     * @example
     * // Create one Mod
     * const Mod = await prisma.mod.create({
     *   data: {
     *     // ... data to create a Mod
     *   }
     * })
     * 
    **/
    create<T extends ModCreateArgs>(
      args: SelectSubset<T, ModCreateArgs>
    ): CheckSelect<T, Prisma__ModClient<Mod>, Prisma__ModClient<ModGetPayload<T>>>

    /**
     * Create many Mods.
     *     @param {ModCreateManyArgs} args - Arguments to create many Mods.
     *     @example
     *     // Create many Mods
     *     const mod = await prisma.mod.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModCreateManyArgs>(
      args?: SelectSubset<T, ModCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mod.
     * @param {ModDeleteArgs} args - Arguments to delete one Mod.
     * @example
     * // Delete one Mod
     * const Mod = await prisma.mod.delete({
     *   where: {
     *     // ... filter to delete one Mod
     *   }
     * })
     * 
    **/
    delete<T extends ModDeleteArgs>(
      args: SelectSubset<T, ModDeleteArgs>
    ): CheckSelect<T, Prisma__ModClient<Mod>, Prisma__ModClient<ModGetPayload<T>>>

    /**
     * Update one Mod.
     * @param {ModUpdateArgs} args - Arguments to update one Mod.
     * @example
     * // Update one Mod
     * const mod = await prisma.mod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModUpdateArgs>(
      args: SelectSubset<T, ModUpdateArgs>
    ): CheckSelect<T, Prisma__ModClient<Mod>, Prisma__ModClient<ModGetPayload<T>>>

    /**
     * Delete zero or more Mods.
     * @param {ModDeleteManyArgs} args - Arguments to filter Mods to delete.
     * @example
     * // Delete a few Mods
     * const { count } = await prisma.mod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModDeleteManyArgs>(
      args?: SelectSubset<T, ModDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mods
     * const mod = await prisma.mod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModUpdateManyArgs>(
      args: SelectSubset<T, ModUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mod.
     * @param {ModUpsertArgs} args - Arguments to update or create a Mod.
     * @example
     * // Update or create a Mod
     * const mod = await prisma.mod.upsert({
     *   create: {
     *     // ... data to create a Mod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mod we want to update
     *   }
     * })
    **/
    upsert<T extends ModUpsertArgs>(
      args: SelectSubset<T, ModUpsertArgs>
    ): CheckSelect<T, Prisma__ModClient<Mod>, Prisma__ModClient<ModGetPayload<T>>>

    /**
     * Count the number of Mods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModCountArgs} args - Arguments to filter Mods to count.
     * @example
     * // Count the number of Mods
     * const count = await prisma.mod.count({
     *   where: {
     *     // ... the filter for the Mods we want to count
     *   }
     * })
    **/
    count<T extends ModCountArgs>(
      args?: Subset<T, ModCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModAggregateArgs>(args: Subset<T, ModAggregateArgs>): PrismaPromise<GetModAggregateType<T>>

    /**
     * Group by Mod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModGroupByArgs['orderBy'] }
        : { orderBy?: ModGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Collection<T extends Mods_CollectionArgs = {}>(args?: Subset<T, Mods_CollectionArgs>): CheckSelect<T, Prisma__Mods_CollectionClient<Mods_Collection | null >, Prisma__Mods_CollectionClient<Mods_CollectionGetPayload<T> | null >>;

    Images<T extends Mod_ImageFindManyArgs = {}>(args?: Subset<T, Mod_ImageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod_Image>>, PrismaPromise<Array<Mod_ImageGetPayload<T>>>>;

    Authors<T extends Mod_AuthorFindManyArgs = {}>(args?: Subset<T, Mod_AuthorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod_Author>>, PrismaPromise<Array<Mod_AuthorGetPayload<T>>>>;

    Tags<T extends Mod_TagFindManyArgs = {}>(args?: Subset<T, Mod_TagFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod_Tag>>, PrismaPromise<Array<Mod_TagGetPayload<T>>>>;

    Versions<T extends Mod_VersionFindManyArgs = {}>(args?: Subset<T, Mod_VersionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod_Version>>, PrismaPromise<Array<Mod_VersionGetPayload<T>>>>;

    Lists<T extends Mods_ListFindManyArgs = {}>(args?: Subset<T, Mods_ListFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mods_List>>, PrismaPromise<Array<Mods_ListGetPayload<T>>>>;

    Issues<T extends Mod_IssueFindManyArgs = {}>(args?: Subset<T, Mod_IssueFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod_Issue>>, PrismaPromise<Array<Mod_IssueGetPayload<T>>>>;

    Favorits<T extends Mods_FavoritsFindManyArgs = {}>(args?: Subset<T, Mods_FavoritsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mods_Favorits>>, PrismaPromise<Array<Mods_FavoritsGetPayload<T>>>>;

    Subscribers<T extends Mod_SubscribersFindManyArgs = {}>(args?: Subset<T, Mod_SubscribersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod_Subscribers>>, PrismaPromise<Array<Mod_SubscribersGetPayload<T>>>>;

    Downloads<T extends Mod_DownloadFindManyArgs = {}>(args?: Subset<T, Mod_DownloadFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod_Download>>, PrismaPromise<Array<Mod_DownloadGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Mod findUnique
   */
  export type ModFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Mod
     * 
    **/
    select?: ModSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModInclude | null
    /**
     * Throw an Error if a Mod can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod to fetch.
     * 
    **/
    where: ModWhereUniqueInput
  }


  /**
   * Mod findFirst
   */
  export type ModFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Mod
     * 
    **/
    select?: ModSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModInclude | null
    /**
     * Throw an Error if a Mod can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod to fetch.
     * 
    **/
    where?: ModWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods to fetch.
     * 
    **/
    orderBy?: Enumerable<ModOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mods.
     * 
    **/
    cursor?: ModWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mods.
     * 
    **/
    distinct?: Enumerable<ModScalarFieldEnum>
  }


  /**
   * Mod findMany
   */
  export type ModFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mod
     * 
    **/
    select?: ModSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModInclude | null
    /**
     * Filter, which Mods to fetch.
     * 
    **/
    where?: ModWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods to fetch.
     * 
    **/
    orderBy?: Enumerable<ModOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mods.
     * 
    **/
    cursor?: ModWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ModScalarFieldEnum>
  }


  /**
   * Mod create
   */
  export type ModCreateArgs = {
    /**
     * Select specific fields to fetch from the Mod
     * 
    **/
    select?: ModSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModInclude | null
    /**
     * The data needed to create a Mod.
     * 
    **/
    data: XOR<ModCreateInput, ModUncheckedCreateInput>
  }


  /**
   * Mod createMany
   */
  export type ModCreateManyArgs = {
    /**
     * The data used to create many Mods.
     * 
    **/
    data: Enumerable<ModCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mod update
   */
  export type ModUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mod
     * 
    **/
    select?: ModSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModInclude | null
    /**
     * The data needed to update a Mod.
     * 
    **/
    data: XOR<ModUpdateInput, ModUncheckedUpdateInput>
    /**
     * Choose, which Mod to update.
     * 
    **/
    where: ModWhereUniqueInput
  }


  /**
   * Mod updateMany
   */
  export type ModUpdateManyArgs = {
    /**
     * The data used to update Mods.
     * 
    **/
    data: XOR<ModUpdateManyMutationInput, ModUncheckedUpdateManyInput>
    /**
     * Filter which Mods to update
     * 
    **/
    where?: ModWhereInput
  }


  /**
   * Mod upsert
   */
  export type ModUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mod
     * 
    **/
    select?: ModSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModInclude | null
    /**
     * The filter to search for the Mod to update in case it exists.
     * 
    **/
    where: ModWhereUniqueInput
    /**
     * In case the Mod found by the `where` argument doesn't exist, create a new Mod with this data.
     * 
    **/
    create: XOR<ModCreateInput, ModUncheckedCreateInput>
    /**
     * In case the Mod was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ModUpdateInput, ModUncheckedUpdateInput>
  }


  /**
   * Mod delete
   */
  export type ModDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mod
     * 
    **/
    select?: ModSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModInclude | null
    /**
     * Filter which Mod to delete.
     * 
    **/
    where: ModWhereUniqueInput
  }


  /**
   * Mod deleteMany
   */
  export type ModDeleteManyArgs = {
    /**
     * Filter which Mods to delete
     * 
    **/
    where?: ModWhereInput
  }


  /**
   * Mod without action
   */
  export type ModArgs = {
    /**
     * Select specific fields to fetch from the Mod
     * 
    **/
    select?: ModSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModInclude | null
  }



  /**
   * Model Mod_Author
   */


  export type AggregateMod_Author = {
    _count: Mod_AuthorCountAggregateOutputType | null
    _avg: Mod_AuthorAvgAggregateOutputType | null
    _sum: Mod_AuthorSumAggregateOutputType | null
    _min: Mod_AuthorMinAggregateOutputType | null
    _max: Mod_AuthorMaxAggregateOutputType | null
  }

  export type Mod_AuthorAvgAggregateOutputType = {
    mod_id: number | null
    user_id: number | null
    type: number | null
  }

  export type Mod_AuthorSumAggregateOutputType = {
    mod_id: number | null
    user_id: number | null
    type: number | null
  }

  export type Mod_AuthorMinAggregateOutputType = {
    mod_id: number | null
    user_id: number | null
    type: number | null
  }

  export type Mod_AuthorMaxAggregateOutputType = {
    mod_id: number | null
    user_id: number | null
    type: number | null
  }

  export type Mod_AuthorCountAggregateOutputType = {
    mod_id: number
    user_id: number
    type: number
    _all: number
  }


  export type Mod_AuthorAvgAggregateInputType = {
    mod_id?: true
    user_id?: true
    type?: true
  }

  export type Mod_AuthorSumAggregateInputType = {
    mod_id?: true
    user_id?: true
    type?: true
  }

  export type Mod_AuthorMinAggregateInputType = {
    mod_id?: true
    user_id?: true
    type?: true
  }

  export type Mod_AuthorMaxAggregateInputType = {
    mod_id?: true
    user_id?: true
    type?: true
  }

  export type Mod_AuthorCountAggregateInputType = {
    mod_id?: true
    user_id?: true
    type?: true
    _all?: true
  }

  export type Mod_AuthorAggregateArgs = {
    /**
     * Filter which Mod_Author to aggregate.
     * 
    **/
    where?: Mod_AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Authors to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Mod_AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Authors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mod_Authors
    **/
    _count?: true | Mod_AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mod_AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mod_AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mod_AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mod_AuthorMaxAggregateInputType
  }

  export type GetMod_AuthorAggregateType<T extends Mod_AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateMod_Author]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMod_Author[P]>
      : GetScalarType<T[P], AggregateMod_Author[P]>
  }




  export type Mod_AuthorGroupByArgs = {
    where?: Mod_AuthorWhereInput
    orderBy?: Enumerable<Mod_AuthorOrderByWithAggregationInput>
    by: Array<Mod_AuthorScalarFieldEnum>
    having?: Mod_AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mod_AuthorCountAggregateInputType | true
    _avg?: Mod_AuthorAvgAggregateInputType
    _sum?: Mod_AuthorSumAggregateInputType
    _min?: Mod_AuthorMinAggregateInputType
    _max?: Mod_AuthorMaxAggregateInputType
  }


  export type Mod_AuthorGroupByOutputType = {
    mod_id: number
    user_id: number
    type: number
    _count: Mod_AuthorCountAggregateOutputType | null
    _avg: Mod_AuthorAvgAggregateOutputType | null
    _sum: Mod_AuthorSumAggregateOutputType | null
    _min: Mod_AuthorMinAggregateOutputType | null
    _max: Mod_AuthorMaxAggregateOutputType | null
  }

  type GetMod_AuthorGroupByPayload<T extends Mod_AuthorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mod_AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mod_AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mod_AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], Mod_AuthorGroupByOutputType[P]>
        }
      >
    >


  export type Mod_AuthorSelect = {
    mod_id?: boolean
    user_id?: boolean
    type?: boolean
    User?: boolean | UserArgs
    Mod?: boolean | ModArgs
  }

  export type Mod_AuthorInclude = {
    User?: boolean | UserArgs
    Mod?: boolean | ModArgs
  }

  export type Mod_AuthorGetPayload<
    S extends boolean | null | undefined | Mod_AuthorArgs,
    U = keyof S
      > = S extends true
        ? Mod_Author
    : S extends undefined
    ? never
    : S extends Mod_AuthorArgs | Mod_AuthorFindManyArgs
    ?'include' extends U
    ? Mod_Author  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'Mod' ? ModGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'Mod' ? ModGetPayload<S['select'][P]> :  P extends keyof Mod_Author ? Mod_Author[P] : never
  } 
    : Mod_Author
  : Mod_Author


  type Mod_AuthorCountArgs = Merge<
    Omit<Mod_AuthorFindManyArgs, 'select' | 'include'> & {
      select?: Mod_AuthorCountAggregateInputType | true
    }
  >

  export interface Mod_AuthorDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Mod_Author that matches the filter.
     * @param {Mod_AuthorFindUniqueArgs} args - Arguments to find a Mod_Author
     * @example
     * // Get one Mod_Author
     * const mod_Author = await prisma.mod_Author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Mod_AuthorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Mod_AuthorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mod_Author'> extends True ? CheckSelect<T, Prisma__Mod_AuthorClient<Mod_Author>, Prisma__Mod_AuthorClient<Mod_AuthorGetPayload<T>>> : CheckSelect<T, Prisma__Mod_AuthorClient<Mod_Author | null >, Prisma__Mod_AuthorClient<Mod_AuthorGetPayload<T> | null >>

    /**
     * Find the first Mod_Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_AuthorFindFirstArgs} args - Arguments to find a Mod_Author
     * @example
     * // Get one Mod_Author
     * const mod_Author = await prisma.mod_Author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Mod_AuthorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Mod_AuthorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mod_Author'> extends True ? CheckSelect<T, Prisma__Mod_AuthorClient<Mod_Author>, Prisma__Mod_AuthorClient<Mod_AuthorGetPayload<T>>> : CheckSelect<T, Prisma__Mod_AuthorClient<Mod_Author | null >, Prisma__Mod_AuthorClient<Mod_AuthorGetPayload<T> | null >>

    /**
     * Find zero or more Mod_Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_AuthorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mod_Authors
     * const mod_Authors = await prisma.mod_Author.findMany()
     * 
     * // Get first 10 Mod_Authors
     * const mod_Authors = await prisma.mod_Author.findMany({ take: 10 })
     * 
     * // Only select the `mod_id`
     * const mod_AuthorWithMod_idOnly = await prisma.mod_Author.findMany({ select: { mod_id: true } })
     * 
    **/
    findMany<T extends Mod_AuthorFindManyArgs>(
      args?: SelectSubset<T, Mod_AuthorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Mod_Author>>, PrismaPromise<Array<Mod_AuthorGetPayload<T>>>>

    /**
     * Create a Mod_Author.
     * @param {Mod_AuthorCreateArgs} args - Arguments to create a Mod_Author.
     * @example
     * // Create one Mod_Author
     * const Mod_Author = await prisma.mod_Author.create({
     *   data: {
     *     // ... data to create a Mod_Author
     *   }
     * })
     * 
    **/
    create<T extends Mod_AuthorCreateArgs>(
      args: SelectSubset<T, Mod_AuthorCreateArgs>
    ): CheckSelect<T, Prisma__Mod_AuthorClient<Mod_Author>, Prisma__Mod_AuthorClient<Mod_AuthorGetPayload<T>>>

    /**
     * Create many Mod_Authors.
     *     @param {Mod_AuthorCreateManyArgs} args - Arguments to create many Mod_Authors.
     *     @example
     *     // Create many Mod_Authors
     *     const mod_Author = await prisma.mod_Author.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Mod_AuthorCreateManyArgs>(
      args?: SelectSubset<T, Mod_AuthorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mod_Author.
     * @param {Mod_AuthorDeleteArgs} args - Arguments to delete one Mod_Author.
     * @example
     * // Delete one Mod_Author
     * const Mod_Author = await prisma.mod_Author.delete({
     *   where: {
     *     // ... filter to delete one Mod_Author
     *   }
     * })
     * 
    **/
    delete<T extends Mod_AuthorDeleteArgs>(
      args: SelectSubset<T, Mod_AuthorDeleteArgs>
    ): CheckSelect<T, Prisma__Mod_AuthorClient<Mod_Author>, Prisma__Mod_AuthorClient<Mod_AuthorGetPayload<T>>>

    /**
     * Update one Mod_Author.
     * @param {Mod_AuthorUpdateArgs} args - Arguments to update one Mod_Author.
     * @example
     * // Update one Mod_Author
     * const mod_Author = await prisma.mod_Author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Mod_AuthorUpdateArgs>(
      args: SelectSubset<T, Mod_AuthorUpdateArgs>
    ): CheckSelect<T, Prisma__Mod_AuthorClient<Mod_Author>, Prisma__Mod_AuthorClient<Mod_AuthorGetPayload<T>>>

    /**
     * Delete zero or more Mod_Authors.
     * @param {Mod_AuthorDeleteManyArgs} args - Arguments to filter Mod_Authors to delete.
     * @example
     * // Delete a few Mod_Authors
     * const { count } = await prisma.mod_Author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Mod_AuthorDeleteManyArgs>(
      args?: SelectSubset<T, Mod_AuthorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mod_Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mod_Authors
     * const mod_Author = await prisma.mod_Author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Mod_AuthorUpdateManyArgs>(
      args: SelectSubset<T, Mod_AuthorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mod_Author.
     * @param {Mod_AuthorUpsertArgs} args - Arguments to update or create a Mod_Author.
     * @example
     * // Update or create a Mod_Author
     * const mod_Author = await prisma.mod_Author.upsert({
     *   create: {
     *     // ... data to create a Mod_Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mod_Author we want to update
     *   }
     * })
    **/
    upsert<T extends Mod_AuthorUpsertArgs>(
      args: SelectSubset<T, Mod_AuthorUpsertArgs>
    ): CheckSelect<T, Prisma__Mod_AuthorClient<Mod_Author>, Prisma__Mod_AuthorClient<Mod_AuthorGetPayload<T>>>

    /**
     * Count the number of Mod_Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_AuthorCountArgs} args - Arguments to filter Mod_Authors to count.
     * @example
     * // Count the number of Mod_Authors
     * const count = await prisma.mod_Author.count({
     *   where: {
     *     // ... the filter for the Mod_Authors we want to count
     *   }
     * })
    **/
    count<T extends Mod_AuthorCountArgs>(
      args?: Subset<T, Mod_AuthorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mod_AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mod_Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mod_AuthorAggregateArgs>(args: Subset<T, Mod_AuthorAggregateArgs>): PrismaPromise<GetMod_AuthorAggregateType<T>>

    /**
     * Group by Mod_Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mod_AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mod_AuthorGroupByArgs['orderBy'] }
        : { orderBy?: Mod_AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mod_AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMod_AuthorGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mod_Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Mod_AuthorClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Mod<T extends ModArgs = {}>(args?: Subset<T, ModArgs>): CheckSelect<T, Prisma__ModClient<Mod | null >, Prisma__ModClient<ModGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Mod_Author findUnique
   */
  export type Mod_AuthorFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Mod_Author
     * 
    **/
    select?: Mod_AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_AuthorInclude | null
    /**
     * Throw an Error if a Mod_Author can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod_Author to fetch.
     * 
    **/
    where: Mod_AuthorWhereUniqueInput
  }


  /**
   * Mod_Author findFirst
   */
  export type Mod_AuthorFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Mod_Author
     * 
    **/
    select?: Mod_AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_AuthorInclude | null
    /**
     * Throw an Error if a Mod_Author can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod_Author to fetch.
     * 
    **/
    where?: Mod_AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Authors to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mod_Authors.
     * 
    **/
    cursor?: Mod_AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Authors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mod_Authors.
     * 
    **/
    distinct?: Enumerable<Mod_AuthorScalarFieldEnum>
  }


  /**
   * Mod_Author findMany
   */
  export type Mod_AuthorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mod_Author
     * 
    **/
    select?: Mod_AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_AuthorInclude | null
    /**
     * Filter, which Mod_Authors to fetch.
     * 
    **/
    where?: Mod_AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Authors to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mod_Authors.
     * 
    **/
    cursor?: Mod_AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Authors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mod_AuthorScalarFieldEnum>
  }


  /**
   * Mod_Author create
   */
  export type Mod_AuthorCreateArgs = {
    /**
     * Select specific fields to fetch from the Mod_Author
     * 
    **/
    select?: Mod_AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_AuthorInclude | null
    /**
     * The data needed to create a Mod_Author.
     * 
    **/
    data: XOR<Mod_AuthorCreateInput, Mod_AuthorUncheckedCreateInput>
  }


  /**
   * Mod_Author createMany
   */
  export type Mod_AuthorCreateManyArgs = {
    /**
     * The data used to create many Mod_Authors.
     * 
    **/
    data: Enumerable<Mod_AuthorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mod_Author update
   */
  export type Mod_AuthorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mod_Author
     * 
    **/
    select?: Mod_AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_AuthorInclude | null
    /**
     * The data needed to update a Mod_Author.
     * 
    **/
    data: XOR<Mod_AuthorUpdateInput, Mod_AuthorUncheckedUpdateInput>
    /**
     * Choose, which Mod_Author to update.
     * 
    **/
    where: Mod_AuthorWhereUniqueInput
  }


  /**
   * Mod_Author updateMany
   */
  export type Mod_AuthorUpdateManyArgs = {
    /**
     * The data used to update Mod_Authors.
     * 
    **/
    data: XOR<Mod_AuthorUpdateManyMutationInput, Mod_AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Mod_Authors to update
     * 
    **/
    where?: Mod_AuthorWhereInput
  }


  /**
   * Mod_Author upsert
   */
  export type Mod_AuthorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mod_Author
     * 
    **/
    select?: Mod_AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_AuthorInclude | null
    /**
     * The filter to search for the Mod_Author to update in case it exists.
     * 
    **/
    where: Mod_AuthorWhereUniqueInput
    /**
     * In case the Mod_Author found by the `where` argument doesn't exist, create a new Mod_Author with this data.
     * 
    **/
    create: XOR<Mod_AuthorCreateInput, Mod_AuthorUncheckedCreateInput>
    /**
     * In case the Mod_Author was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Mod_AuthorUpdateInput, Mod_AuthorUncheckedUpdateInput>
  }


  /**
   * Mod_Author delete
   */
  export type Mod_AuthorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mod_Author
     * 
    **/
    select?: Mod_AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_AuthorInclude | null
    /**
     * Filter which Mod_Author to delete.
     * 
    **/
    where: Mod_AuthorWhereUniqueInput
  }


  /**
   * Mod_Author deleteMany
   */
  export type Mod_AuthorDeleteManyArgs = {
    /**
     * Filter which Mod_Authors to delete
     * 
    **/
    where?: Mod_AuthorWhereInput
  }


  /**
   * Mod_Author without action
   */
  export type Mod_AuthorArgs = {
    /**
     * Select specific fields to fetch from the Mod_Author
     * 
    **/
    select?: Mod_AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_AuthorInclude | null
  }



  /**
   * Model Mod_Image
   */


  export type AggregateMod_Image = {
    _count: Mod_ImageCountAggregateOutputType | null
    _avg: Mod_ImageAvgAggregateOutputType | null
    _sum: Mod_ImageSumAggregateOutputType | null
    _min: Mod_ImageMinAggregateOutputType | null
    _max: Mod_ImageMaxAggregateOutputType | null
  }

  export type Mod_ImageAvgAggregateOutputType = {
    id: number | null
    mod_id: number | null
  }

  export type Mod_ImageSumAggregateOutputType = {
    id: number | null
    mod_id: number | null
  }

  export type Mod_ImageMinAggregateOutputType = {
    id: number | null
    mod_id: number | null
    url: string | null
  }

  export type Mod_ImageMaxAggregateOutputType = {
    id: number | null
    mod_id: number | null
    url: string | null
  }

  export type Mod_ImageCountAggregateOutputType = {
    id: number
    mod_id: number
    url: number
    _all: number
  }


  export type Mod_ImageAvgAggregateInputType = {
    id?: true
    mod_id?: true
  }

  export type Mod_ImageSumAggregateInputType = {
    id?: true
    mod_id?: true
  }

  export type Mod_ImageMinAggregateInputType = {
    id?: true
    mod_id?: true
    url?: true
  }

  export type Mod_ImageMaxAggregateInputType = {
    id?: true
    mod_id?: true
    url?: true
  }

  export type Mod_ImageCountAggregateInputType = {
    id?: true
    mod_id?: true
    url?: true
    _all?: true
  }

  export type Mod_ImageAggregateArgs = {
    /**
     * Filter which Mod_Image to aggregate.
     * 
    **/
    where?: Mod_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Images to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Mod_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mod_Images
    **/
    _count?: true | Mod_ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mod_ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mod_ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mod_ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mod_ImageMaxAggregateInputType
  }

  export type GetMod_ImageAggregateType<T extends Mod_ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateMod_Image]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMod_Image[P]>
      : GetScalarType<T[P], AggregateMod_Image[P]>
  }




  export type Mod_ImageGroupByArgs = {
    where?: Mod_ImageWhereInput
    orderBy?: Enumerable<Mod_ImageOrderByWithAggregationInput>
    by: Array<Mod_ImageScalarFieldEnum>
    having?: Mod_ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mod_ImageCountAggregateInputType | true
    _avg?: Mod_ImageAvgAggregateInputType
    _sum?: Mod_ImageSumAggregateInputType
    _min?: Mod_ImageMinAggregateInputType
    _max?: Mod_ImageMaxAggregateInputType
  }


  export type Mod_ImageGroupByOutputType = {
    id: number
    mod_id: number
    url: string
    _count: Mod_ImageCountAggregateOutputType | null
    _avg: Mod_ImageAvgAggregateOutputType | null
    _sum: Mod_ImageSumAggregateOutputType | null
    _min: Mod_ImageMinAggregateOutputType | null
    _max: Mod_ImageMaxAggregateOutputType | null
  }

  type GetMod_ImageGroupByPayload<T extends Mod_ImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mod_ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mod_ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mod_ImageGroupByOutputType[P]>
            : GetScalarType<T[P], Mod_ImageGroupByOutputType[P]>
        }
      >
    >


  export type Mod_ImageSelect = {
    id?: boolean
    mod_id?: boolean
    url?: boolean
    Mod?: boolean | ModArgs
  }

  export type Mod_ImageInclude = {
    Mod?: boolean | ModArgs
  }

  export type Mod_ImageGetPayload<
    S extends boolean | null | undefined | Mod_ImageArgs,
    U = keyof S
      > = S extends true
        ? Mod_Image
    : S extends undefined
    ? never
    : S extends Mod_ImageArgs | Mod_ImageFindManyArgs
    ?'include' extends U
    ? Mod_Image  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Mod' ? ModGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Mod' ? ModGetPayload<S['select'][P]> :  P extends keyof Mod_Image ? Mod_Image[P] : never
  } 
    : Mod_Image
  : Mod_Image


  type Mod_ImageCountArgs = Merge<
    Omit<Mod_ImageFindManyArgs, 'select' | 'include'> & {
      select?: Mod_ImageCountAggregateInputType | true
    }
  >

  export interface Mod_ImageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Mod_Image that matches the filter.
     * @param {Mod_ImageFindUniqueArgs} args - Arguments to find a Mod_Image
     * @example
     * // Get one Mod_Image
     * const mod_Image = await prisma.mod_Image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Mod_ImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Mod_ImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mod_Image'> extends True ? CheckSelect<T, Prisma__Mod_ImageClient<Mod_Image>, Prisma__Mod_ImageClient<Mod_ImageGetPayload<T>>> : CheckSelect<T, Prisma__Mod_ImageClient<Mod_Image | null >, Prisma__Mod_ImageClient<Mod_ImageGetPayload<T> | null >>

    /**
     * Find the first Mod_Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_ImageFindFirstArgs} args - Arguments to find a Mod_Image
     * @example
     * // Get one Mod_Image
     * const mod_Image = await prisma.mod_Image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Mod_ImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Mod_ImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mod_Image'> extends True ? CheckSelect<T, Prisma__Mod_ImageClient<Mod_Image>, Prisma__Mod_ImageClient<Mod_ImageGetPayload<T>>> : CheckSelect<T, Prisma__Mod_ImageClient<Mod_Image | null >, Prisma__Mod_ImageClient<Mod_ImageGetPayload<T> | null >>

    /**
     * Find zero or more Mod_Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mod_Images
     * const mod_Images = await prisma.mod_Image.findMany()
     * 
     * // Get first 10 Mod_Images
     * const mod_Images = await prisma.mod_Image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mod_ImageWithIdOnly = await prisma.mod_Image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Mod_ImageFindManyArgs>(
      args?: SelectSubset<T, Mod_ImageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Mod_Image>>, PrismaPromise<Array<Mod_ImageGetPayload<T>>>>

    /**
     * Create a Mod_Image.
     * @param {Mod_ImageCreateArgs} args - Arguments to create a Mod_Image.
     * @example
     * // Create one Mod_Image
     * const Mod_Image = await prisma.mod_Image.create({
     *   data: {
     *     // ... data to create a Mod_Image
     *   }
     * })
     * 
    **/
    create<T extends Mod_ImageCreateArgs>(
      args: SelectSubset<T, Mod_ImageCreateArgs>
    ): CheckSelect<T, Prisma__Mod_ImageClient<Mod_Image>, Prisma__Mod_ImageClient<Mod_ImageGetPayload<T>>>

    /**
     * Create many Mod_Images.
     *     @param {Mod_ImageCreateManyArgs} args - Arguments to create many Mod_Images.
     *     @example
     *     // Create many Mod_Images
     *     const mod_Image = await prisma.mod_Image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Mod_ImageCreateManyArgs>(
      args?: SelectSubset<T, Mod_ImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mod_Image.
     * @param {Mod_ImageDeleteArgs} args - Arguments to delete one Mod_Image.
     * @example
     * // Delete one Mod_Image
     * const Mod_Image = await prisma.mod_Image.delete({
     *   where: {
     *     // ... filter to delete one Mod_Image
     *   }
     * })
     * 
    **/
    delete<T extends Mod_ImageDeleteArgs>(
      args: SelectSubset<T, Mod_ImageDeleteArgs>
    ): CheckSelect<T, Prisma__Mod_ImageClient<Mod_Image>, Prisma__Mod_ImageClient<Mod_ImageGetPayload<T>>>

    /**
     * Update one Mod_Image.
     * @param {Mod_ImageUpdateArgs} args - Arguments to update one Mod_Image.
     * @example
     * // Update one Mod_Image
     * const mod_Image = await prisma.mod_Image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Mod_ImageUpdateArgs>(
      args: SelectSubset<T, Mod_ImageUpdateArgs>
    ): CheckSelect<T, Prisma__Mod_ImageClient<Mod_Image>, Prisma__Mod_ImageClient<Mod_ImageGetPayload<T>>>

    /**
     * Delete zero or more Mod_Images.
     * @param {Mod_ImageDeleteManyArgs} args - Arguments to filter Mod_Images to delete.
     * @example
     * // Delete a few Mod_Images
     * const { count } = await prisma.mod_Image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Mod_ImageDeleteManyArgs>(
      args?: SelectSubset<T, Mod_ImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mod_Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mod_Images
     * const mod_Image = await prisma.mod_Image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Mod_ImageUpdateManyArgs>(
      args: SelectSubset<T, Mod_ImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mod_Image.
     * @param {Mod_ImageUpsertArgs} args - Arguments to update or create a Mod_Image.
     * @example
     * // Update or create a Mod_Image
     * const mod_Image = await prisma.mod_Image.upsert({
     *   create: {
     *     // ... data to create a Mod_Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mod_Image we want to update
     *   }
     * })
    **/
    upsert<T extends Mod_ImageUpsertArgs>(
      args: SelectSubset<T, Mod_ImageUpsertArgs>
    ): CheckSelect<T, Prisma__Mod_ImageClient<Mod_Image>, Prisma__Mod_ImageClient<Mod_ImageGetPayload<T>>>

    /**
     * Count the number of Mod_Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_ImageCountArgs} args - Arguments to filter Mod_Images to count.
     * @example
     * // Count the number of Mod_Images
     * const count = await prisma.mod_Image.count({
     *   where: {
     *     // ... the filter for the Mod_Images we want to count
     *   }
     * })
    **/
    count<T extends Mod_ImageCountArgs>(
      args?: Subset<T, Mod_ImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mod_ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mod_Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mod_ImageAggregateArgs>(args: Subset<T, Mod_ImageAggregateArgs>): PrismaPromise<GetMod_ImageAggregateType<T>>

    /**
     * Group by Mod_Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mod_ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mod_ImageGroupByArgs['orderBy'] }
        : { orderBy?: Mod_ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mod_ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMod_ImageGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mod_Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Mod_ImageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Mod<T extends ModArgs = {}>(args?: Subset<T, ModArgs>): CheckSelect<T, Prisma__ModClient<Mod | null >, Prisma__ModClient<ModGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Mod_Image findUnique
   */
  export type Mod_ImageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Mod_Image
     * 
    **/
    select?: Mod_ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_ImageInclude | null
    /**
     * Throw an Error if a Mod_Image can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod_Image to fetch.
     * 
    **/
    where: Mod_ImageWhereUniqueInput
  }


  /**
   * Mod_Image findFirst
   */
  export type Mod_ImageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Mod_Image
     * 
    **/
    select?: Mod_ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_ImageInclude | null
    /**
     * Throw an Error if a Mod_Image can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod_Image to fetch.
     * 
    **/
    where?: Mod_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Images to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mod_Images.
     * 
    **/
    cursor?: Mod_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mod_Images.
     * 
    **/
    distinct?: Enumerable<Mod_ImageScalarFieldEnum>
  }


  /**
   * Mod_Image findMany
   */
  export type Mod_ImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mod_Image
     * 
    **/
    select?: Mod_ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_ImageInclude | null
    /**
     * Filter, which Mod_Images to fetch.
     * 
    **/
    where?: Mod_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Images to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mod_Images.
     * 
    **/
    cursor?: Mod_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Images.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mod_ImageScalarFieldEnum>
  }


  /**
   * Mod_Image create
   */
  export type Mod_ImageCreateArgs = {
    /**
     * Select specific fields to fetch from the Mod_Image
     * 
    **/
    select?: Mod_ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_ImageInclude | null
    /**
     * The data needed to create a Mod_Image.
     * 
    **/
    data: XOR<Mod_ImageCreateInput, Mod_ImageUncheckedCreateInput>
  }


  /**
   * Mod_Image createMany
   */
  export type Mod_ImageCreateManyArgs = {
    /**
     * The data used to create many Mod_Images.
     * 
    **/
    data: Enumerable<Mod_ImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mod_Image update
   */
  export type Mod_ImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mod_Image
     * 
    **/
    select?: Mod_ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_ImageInclude | null
    /**
     * The data needed to update a Mod_Image.
     * 
    **/
    data: XOR<Mod_ImageUpdateInput, Mod_ImageUncheckedUpdateInput>
    /**
     * Choose, which Mod_Image to update.
     * 
    **/
    where: Mod_ImageWhereUniqueInput
  }


  /**
   * Mod_Image updateMany
   */
  export type Mod_ImageUpdateManyArgs = {
    /**
     * The data used to update Mod_Images.
     * 
    **/
    data: XOR<Mod_ImageUpdateManyMutationInput, Mod_ImageUncheckedUpdateManyInput>
    /**
     * Filter which Mod_Images to update
     * 
    **/
    where?: Mod_ImageWhereInput
  }


  /**
   * Mod_Image upsert
   */
  export type Mod_ImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mod_Image
     * 
    **/
    select?: Mod_ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_ImageInclude | null
    /**
     * The filter to search for the Mod_Image to update in case it exists.
     * 
    **/
    where: Mod_ImageWhereUniqueInput
    /**
     * In case the Mod_Image found by the `where` argument doesn't exist, create a new Mod_Image with this data.
     * 
    **/
    create: XOR<Mod_ImageCreateInput, Mod_ImageUncheckedCreateInput>
    /**
     * In case the Mod_Image was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Mod_ImageUpdateInput, Mod_ImageUncheckedUpdateInput>
  }


  /**
   * Mod_Image delete
   */
  export type Mod_ImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mod_Image
     * 
    **/
    select?: Mod_ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_ImageInclude | null
    /**
     * Filter which Mod_Image to delete.
     * 
    **/
    where: Mod_ImageWhereUniqueInput
  }


  /**
   * Mod_Image deleteMany
   */
  export type Mod_ImageDeleteManyArgs = {
    /**
     * Filter which Mod_Images to delete
     * 
    **/
    where?: Mod_ImageWhereInput
  }


  /**
   * Mod_Image without action
   */
  export type Mod_ImageArgs = {
    /**
     * Select specific fields to fetch from the Mod_Image
     * 
    **/
    select?: Mod_ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_ImageInclude | null
  }



  /**
   * Model Mod_Tag
   */


  export type AggregateMod_Tag = {
    _count: Mod_TagCountAggregateOutputType | null
    _avg: Mod_TagAvgAggregateOutputType | null
    _sum: Mod_TagSumAggregateOutputType | null
    _min: Mod_TagMinAggregateOutputType | null
    _max: Mod_TagMaxAggregateOutputType | null
  }

  export type Mod_TagAvgAggregateOutputType = {
    id: number | null
  }

  export type Mod_TagSumAggregateOutputType = {
    id: number | null
  }

  export type Mod_TagMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Mod_TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Mod_TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Mod_TagAvgAggregateInputType = {
    id?: true
  }

  export type Mod_TagSumAggregateInputType = {
    id?: true
  }

  export type Mod_TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Mod_TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Mod_TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Mod_TagAggregateArgs = {
    /**
     * Filter which Mod_Tag to aggregate.
     * 
    **/
    where?: Mod_TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_TagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Mod_TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Tags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mod_Tags
    **/
    _count?: true | Mod_TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mod_TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mod_TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mod_TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mod_TagMaxAggregateInputType
  }

  export type GetMod_TagAggregateType<T extends Mod_TagAggregateArgs> = {
        [P in keyof T & keyof AggregateMod_Tag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMod_Tag[P]>
      : GetScalarType<T[P], AggregateMod_Tag[P]>
  }




  export type Mod_TagGroupByArgs = {
    where?: Mod_TagWhereInput
    orderBy?: Enumerable<Mod_TagOrderByWithAggregationInput>
    by: Array<Mod_TagScalarFieldEnum>
    having?: Mod_TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mod_TagCountAggregateInputType | true
    _avg?: Mod_TagAvgAggregateInputType
    _sum?: Mod_TagSumAggregateInputType
    _min?: Mod_TagMinAggregateInputType
    _max?: Mod_TagMaxAggregateInputType
  }


  export type Mod_TagGroupByOutputType = {
    id: number
    name: string
    _count: Mod_TagCountAggregateOutputType | null
    _avg: Mod_TagAvgAggregateOutputType | null
    _sum: Mod_TagSumAggregateOutputType | null
    _min: Mod_TagMinAggregateOutputType | null
    _max: Mod_TagMaxAggregateOutputType | null
  }

  type GetMod_TagGroupByPayload<T extends Mod_TagGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mod_TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mod_TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mod_TagGroupByOutputType[P]>
            : GetScalarType<T[P], Mod_TagGroupByOutputType[P]>
        }
      >
    >


  export type Mod_TagSelect = {
    id?: boolean
    name?: boolean
    Mod?: boolean | ModFindManyArgs
    _count?: boolean | Mod_TagCountOutputTypeArgs
  }

  export type Mod_TagInclude = {
    Mod?: boolean | ModFindManyArgs
    _count?: boolean | Mod_TagCountOutputTypeArgs
  }

  export type Mod_TagGetPayload<
    S extends boolean | null | undefined | Mod_TagArgs,
    U = keyof S
      > = S extends true
        ? Mod_Tag
    : S extends undefined
    ? never
    : S extends Mod_TagArgs | Mod_TagFindManyArgs
    ?'include' extends U
    ? Mod_Tag  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Mod' ? Array < ModGetPayload<S['include'][P]>>  :
        P extends '_count' ? Mod_TagCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Mod' ? Array < ModGetPayload<S['select'][P]>>  :
        P extends '_count' ? Mod_TagCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Mod_Tag ? Mod_Tag[P] : never
  } 
    : Mod_Tag
  : Mod_Tag


  type Mod_TagCountArgs = Merge<
    Omit<Mod_TagFindManyArgs, 'select' | 'include'> & {
      select?: Mod_TagCountAggregateInputType | true
    }
  >

  export interface Mod_TagDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Mod_Tag that matches the filter.
     * @param {Mod_TagFindUniqueArgs} args - Arguments to find a Mod_Tag
     * @example
     * // Get one Mod_Tag
     * const mod_Tag = await prisma.mod_Tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Mod_TagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Mod_TagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mod_Tag'> extends True ? CheckSelect<T, Prisma__Mod_TagClient<Mod_Tag>, Prisma__Mod_TagClient<Mod_TagGetPayload<T>>> : CheckSelect<T, Prisma__Mod_TagClient<Mod_Tag | null >, Prisma__Mod_TagClient<Mod_TagGetPayload<T> | null >>

    /**
     * Find the first Mod_Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_TagFindFirstArgs} args - Arguments to find a Mod_Tag
     * @example
     * // Get one Mod_Tag
     * const mod_Tag = await prisma.mod_Tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Mod_TagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Mod_TagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mod_Tag'> extends True ? CheckSelect<T, Prisma__Mod_TagClient<Mod_Tag>, Prisma__Mod_TagClient<Mod_TagGetPayload<T>>> : CheckSelect<T, Prisma__Mod_TagClient<Mod_Tag | null >, Prisma__Mod_TagClient<Mod_TagGetPayload<T> | null >>

    /**
     * Find zero or more Mod_Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_TagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mod_Tags
     * const mod_Tags = await prisma.mod_Tag.findMany()
     * 
     * // Get first 10 Mod_Tags
     * const mod_Tags = await prisma.mod_Tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mod_TagWithIdOnly = await prisma.mod_Tag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Mod_TagFindManyArgs>(
      args?: SelectSubset<T, Mod_TagFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Mod_Tag>>, PrismaPromise<Array<Mod_TagGetPayload<T>>>>

    /**
     * Create a Mod_Tag.
     * @param {Mod_TagCreateArgs} args - Arguments to create a Mod_Tag.
     * @example
     * // Create one Mod_Tag
     * const Mod_Tag = await prisma.mod_Tag.create({
     *   data: {
     *     // ... data to create a Mod_Tag
     *   }
     * })
     * 
    **/
    create<T extends Mod_TagCreateArgs>(
      args: SelectSubset<T, Mod_TagCreateArgs>
    ): CheckSelect<T, Prisma__Mod_TagClient<Mod_Tag>, Prisma__Mod_TagClient<Mod_TagGetPayload<T>>>

    /**
     * Create many Mod_Tags.
     *     @param {Mod_TagCreateManyArgs} args - Arguments to create many Mod_Tags.
     *     @example
     *     // Create many Mod_Tags
     *     const mod_Tag = await prisma.mod_Tag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Mod_TagCreateManyArgs>(
      args?: SelectSubset<T, Mod_TagCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mod_Tag.
     * @param {Mod_TagDeleteArgs} args - Arguments to delete one Mod_Tag.
     * @example
     * // Delete one Mod_Tag
     * const Mod_Tag = await prisma.mod_Tag.delete({
     *   where: {
     *     // ... filter to delete one Mod_Tag
     *   }
     * })
     * 
    **/
    delete<T extends Mod_TagDeleteArgs>(
      args: SelectSubset<T, Mod_TagDeleteArgs>
    ): CheckSelect<T, Prisma__Mod_TagClient<Mod_Tag>, Prisma__Mod_TagClient<Mod_TagGetPayload<T>>>

    /**
     * Update one Mod_Tag.
     * @param {Mod_TagUpdateArgs} args - Arguments to update one Mod_Tag.
     * @example
     * // Update one Mod_Tag
     * const mod_Tag = await prisma.mod_Tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Mod_TagUpdateArgs>(
      args: SelectSubset<T, Mod_TagUpdateArgs>
    ): CheckSelect<T, Prisma__Mod_TagClient<Mod_Tag>, Prisma__Mod_TagClient<Mod_TagGetPayload<T>>>

    /**
     * Delete zero or more Mod_Tags.
     * @param {Mod_TagDeleteManyArgs} args - Arguments to filter Mod_Tags to delete.
     * @example
     * // Delete a few Mod_Tags
     * const { count } = await prisma.mod_Tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Mod_TagDeleteManyArgs>(
      args?: SelectSubset<T, Mod_TagDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mod_Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mod_Tags
     * const mod_Tag = await prisma.mod_Tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Mod_TagUpdateManyArgs>(
      args: SelectSubset<T, Mod_TagUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mod_Tag.
     * @param {Mod_TagUpsertArgs} args - Arguments to update or create a Mod_Tag.
     * @example
     * // Update or create a Mod_Tag
     * const mod_Tag = await prisma.mod_Tag.upsert({
     *   create: {
     *     // ... data to create a Mod_Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mod_Tag we want to update
     *   }
     * })
    **/
    upsert<T extends Mod_TagUpsertArgs>(
      args: SelectSubset<T, Mod_TagUpsertArgs>
    ): CheckSelect<T, Prisma__Mod_TagClient<Mod_Tag>, Prisma__Mod_TagClient<Mod_TagGetPayload<T>>>

    /**
     * Count the number of Mod_Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_TagCountArgs} args - Arguments to filter Mod_Tags to count.
     * @example
     * // Count the number of Mod_Tags
     * const count = await prisma.mod_Tag.count({
     *   where: {
     *     // ... the filter for the Mod_Tags we want to count
     *   }
     * })
    **/
    count<T extends Mod_TagCountArgs>(
      args?: Subset<T, Mod_TagCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mod_TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mod_Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mod_TagAggregateArgs>(args: Subset<T, Mod_TagAggregateArgs>): PrismaPromise<GetMod_TagAggregateType<T>>

    /**
     * Group by Mod_Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mod_TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mod_TagGroupByArgs['orderBy'] }
        : { orderBy?: Mod_TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mod_TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMod_TagGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mod_Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Mod_TagClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Mod<T extends ModFindManyArgs = {}>(args?: Subset<T, ModFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod>>, PrismaPromise<Array<ModGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Mod_Tag findUnique
   */
  export type Mod_TagFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Mod_Tag
     * 
    **/
    select?: Mod_TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_TagInclude | null
    /**
     * Throw an Error if a Mod_Tag can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod_Tag to fetch.
     * 
    **/
    where: Mod_TagWhereUniqueInput
  }


  /**
   * Mod_Tag findFirst
   */
  export type Mod_TagFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Mod_Tag
     * 
    **/
    select?: Mod_TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_TagInclude | null
    /**
     * Throw an Error if a Mod_Tag can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod_Tag to fetch.
     * 
    **/
    where?: Mod_TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_TagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mod_Tags.
     * 
    **/
    cursor?: Mod_TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Tags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mod_Tags.
     * 
    **/
    distinct?: Enumerable<Mod_TagScalarFieldEnum>
  }


  /**
   * Mod_Tag findMany
   */
  export type Mod_TagFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mod_Tag
     * 
    **/
    select?: Mod_TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_TagInclude | null
    /**
     * Filter, which Mod_Tags to fetch.
     * 
    **/
    where?: Mod_TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_TagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mod_Tags.
     * 
    **/
    cursor?: Mod_TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Tags.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mod_TagScalarFieldEnum>
  }


  /**
   * Mod_Tag create
   */
  export type Mod_TagCreateArgs = {
    /**
     * Select specific fields to fetch from the Mod_Tag
     * 
    **/
    select?: Mod_TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_TagInclude | null
    /**
     * The data needed to create a Mod_Tag.
     * 
    **/
    data: XOR<Mod_TagCreateInput, Mod_TagUncheckedCreateInput>
  }


  /**
   * Mod_Tag createMany
   */
  export type Mod_TagCreateManyArgs = {
    /**
     * The data used to create many Mod_Tags.
     * 
    **/
    data: Enumerable<Mod_TagCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mod_Tag update
   */
  export type Mod_TagUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mod_Tag
     * 
    **/
    select?: Mod_TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_TagInclude | null
    /**
     * The data needed to update a Mod_Tag.
     * 
    **/
    data: XOR<Mod_TagUpdateInput, Mod_TagUncheckedUpdateInput>
    /**
     * Choose, which Mod_Tag to update.
     * 
    **/
    where: Mod_TagWhereUniqueInput
  }


  /**
   * Mod_Tag updateMany
   */
  export type Mod_TagUpdateManyArgs = {
    /**
     * The data used to update Mod_Tags.
     * 
    **/
    data: XOR<Mod_TagUpdateManyMutationInput, Mod_TagUncheckedUpdateManyInput>
    /**
     * Filter which Mod_Tags to update
     * 
    **/
    where?: Mod_TagWhereInput
  }


  /**
   * Mod_Tag upsert
   */
  export type Mod_TagUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mod_Tag
     * 
    **/
    select?: Mod_TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_TagInclude | null
    /**
     * The filter to search for the Mod_Tag to update in case it exists.
     * 
    **/
    where: Mod_TagWhereUniqueInput
    /**
     * In case the Mod_Tag found by the `where` argument doesn't exist, create a new Mod_Tag with this data.
     * 
    **/
    create: XOR<Mod_TagCreateInput, Mod_TagUncheckedCreateInput>
    /**
     * In case the Mod_Tag was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Mod_TagUpdateInput, Mod_TagUncheckedUpdateInput>
  }


  /**
   * Mod_Tag delete
   */
  export type Mod_TagDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mod_Tag
     * 
    **/
    select?: Mod_TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_TagInclude | null
    /**
     * Filter which Mod_Tag to delete.
     * 
    **/
    where: Mod_TagWhereUniqueInput
  }


  /**
   * Mod_Tag deleteMany
   */
  export type Mod_TagDeleteManyArgs = {
    /**
     * Filter which Mod_Tags to delete
     * 
    **/
    where?: Mod_TagWhereInput
  }


  /**
   * Mod_Tag without action
   */
  export type Mod_TagArgs = {
    /**
     * Select specific fields to fetch from the Mod_Tag
     * 
    **/
    select?: Mod_TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_TagInclude | null
  }



  /**
   * Model Mod_Version
   */


  export type AggregateMod_Version = {
    _count: Mod_VersionCountAggregateOutputType | null
    _avg: Mod_VersionAvgAggregateOutputType | null
    _sum: Mod_VersionSumAggregateOutputType | null
    _min: Mod_VersionMinAggregateOutputType | null
    _max: Mod_VersionMaxAggregateOutputType | null
  }

  export type Mod_VersionAvgAggregateOutputType = {
    id: number | null
    mod_id: number | null
  }

  export type Mod_VersionSumAggregateOutputType = {
    id: number | null
    mod_id: number | null
  }

  export type Mod_VersionMinAggregateOutputType = {
    id: number | null
    mod_id: number | null
    version: string | null
    game_version: string | null
    releaseDate: Date | null
  }

  export type Mod_VersionMaxAggregateOutputType = {
    id: number | null
    mod_id: number | null
    version: string | null
    game_version: string | null
    releaseDate: Date | null
  }

  export type Mod_VersionCountAggregateOutputType = {
    id: number
    mod_id: number
    version: number
    game_version: number
    releaseDate: number
    _all: number
  }


  export type Mod_VersionAvgAggregateInputType = {
    id?: true
    mod_id?: true
  }

  export type Mod_VersionSumAggregateInputType = {
    id?: true
    mod_id?: true
  }

  export type Mod_VersionMinAggregateInputType = {
    id?: true
    mod_id?: true
    version?: true
    game_version?: true
    releaseDate?: true
  }

  export type Mod_VersionMaxAggregateInputType = {
    id?: true
    mod_id?: true
    version?: true
    game_version?: true
    releaseDate?: true
  }

  export type Mod_VersionCountAggregateInputType = {
    id?: true
    mod_id?: true
    version?: true
    game_version?: true
    releaseDate?: true
    _all?: true
  }

  export type Mod_VersionAggregateArgs = {
    /**
     * Filter which Mod_Version to aggregate.
     * 
    **/
    where?: Mod_VersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Versions to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_VersionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Mod_VersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Versions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Versions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mod_Versions
    **/
    _count?: true | Mod_VersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mod_VersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mod_VersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mod_VersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mod_VersionMaxAggregateInputType
  }

  export type GetMod_VersionAggregateType<T extends Mod_VersionAggregateArgs> = {
        [P in keyof T & keyof AggregateMod_Version]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMod_Version[P]>
      : GetScalarType<T[P], AggregateMod_Version[P]>
  }




  export type Mod_VersionGroupByArgs = {
    where?: Mod_VersionWhereInput
    orderBy?: Enumerable<Mod_VersionOrderByWithAggregationInput>
    by: Array<Mod_VersionScalarFieldEnum>
    having?: Mod_VersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mod_VersionCountAggregateInputType | true
    _avg?: Mod_VersionAvgAggregateInputType
    _sum?: Mod_VersionSumAggregateInputType
    _min?: Mod_VersionMinAggregateInputType
    _max?: Mod_VersionMaxAggregateInputType
  }


  export type Mod_VersionGroupByOutputType = {
    id: number
    mod_id: number
    version: string
    game_version: string
    releaseDate: Date
    _count: Mod_VersionCountAggregateOutputType | null
    _avg: Mod_VersionAvgAggregateOutputType | null
    _sum: Mod_VersionSumAggregateOutputType | null
    _min: Mod_VersionMinAggregateOutputType | null
    _max: Mod_VersionMaxAggregateOutputType | null
  }

  type GetMod_VersionGroupByPayload<T extends Mod_VersionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mod_VersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mod_VersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mod_VersionGroupByOutputType[P]>
            : GetScalarType<T[P], Mod_VersionGroupByOutputType[P]>
        }
      >
    >


  export type Mod_VersionSelect = {
    id?: boolean
    mod_id?: boolean
    version?: boolean
    game_version?: boolean
    releaseDate?: boolean
    Mod?: boolean | ModArgs
    Downloads?: boolean | Mod_DownloadFindManyArgs
    _count?: boolean | Mod_VersionCountOutputTypeArgs
  }

  export type Mod_VersionInclude = {
    Mod?: boolean | ModArgs
    Downloads?: boolean | Mod_DownloadFindManyArgs
    _count?: boolean | Mod_VersionCountOutputTypeArgs
  }

  export type Mod_VersionGetPayload<
    S extends boolean | null | undefined | Mod_VersionArgs,
    U = keyof S
      > = S extends true
        ? Mod_Version
    : S extends undefined
    ? never
    : S extends Mod_VersionArgs | Mod_VersionFindManyArgs
    ?'include' extends U
    ? Mod_Version  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Mod' ? ModGetPayload<S['include'][P]> :
        P extends 'Downloads' ? Array < Mod_DownloadGetPayload<S['include'][P]>>  :
        P extends '_count' ? Mod_VersionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Mod' ? ModGetPayload<S['select'][P]> :
        P extends 'Downloads' ? Array < Mod_DownloadGetPayload<S['select'][P]>>  :
        P extends '_count' ? Mod_VersionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Mod_Version ? Mod_Version[P] : never
  } 
    : Mod_Version
  : Mod_Version


  type Mod_VersionCountArgs = Merge<
    Omit<Mod_VersionFindManyArgs, 'select' | 'include'> & {
      select?: Mod_VersionCountAggregateInputType | true
    }
  >

  export interface Mod_VersionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Mod_Version that matches the filter.
     * @param {Mod_VersionFindUniqueArgs} args - Arguments to find a Mod_Version
     * @example
     * // Get one Mod_Version
     * const mod_Version = await prisma.mod_Version.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Mod_VersionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Mod_VersionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mod_Version'> extends True ? CheckSelect<T, Prisma__Mod_VersionClient<Mod_Version>, Prisma__Mod_VersionClient<Mod_VersionGetPayload<T>>> : CheckSelect<T, Prisma__Mod_VersionClient<Mod_Version | null >, Prisma__Mod_VersionClient<Mod_VersionGetPayload<T> | null >>

    /**
     * Find the first Mod_Version that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_VersionFindFirstArgs} args - Arguments to find a Mod_Version
     * @example
     * // Get one Mod_Version
     * const mod_Version = await prisma.mod_Version.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Mod_VersionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Mod_VersionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mod_Version'> extends True ? CheckSelect<T, Prisma__Mod_VersionClient<Mod_Version>, Prisma__Mod_VersionClient<Mod_VersionGetPayload<T>>> : CheckSelect<T, Prisma__Mod_VersionClient<Mod_Version | null >, Prisma__Mod_VersionClient<Mod_VersionGetPayload<T> | null >>

    /**
     * Find zero or more Mod_Versions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_VersionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mod_Versions
     * const mod_Versions = await prisma.mod_Version.findMany()
     * 
     * // Get first 10 Mod_Versions
     * const mod_Versions = await prisma.mod_Version.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mod_VersionWithIdOnly = await prisma.mod_Version.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Mod_VersionFindManyArgs>(
      args?: SelectSubset<T, Mod_VersionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Mod_Version>>, PrismaPromise<Array<Mod_VersionGetPayload<T>>>>

    /**
     * Create a Mod_Version.
     * @param {Mod_VersionCreateArgs} args - Arguments to create a Mod_Version.
     * @example
     * // Create one Mod_Version
     * const Mod_Version = await prisma.mod_Version.create({
     *   data: {
     *     // ... data to create a Mod_Version
     *   }
     * })
     * 
    **/
    create<T extends Mod_VersionCreateArgs>(
      args: SelectSubset<T, Mod_VersionCreateArgs>
    ): CheckSelect<T, Prisma__Mod_VersionClient<Mod_Version>, Prisma__Mod_VersionClient<Mod_VersionGetPayload<T>>>

    /**
     * Create many Mod_Versions.
     *     @param {Mod_VersionCreateManyArgs} args - Arguments to create many Mod_Versions.
     *     @example
     *     // Create many Mod_Versions
     *     const mod_Version = await prisma.mod_Version.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Mod_VersionCreateManyArgs>(
      args?: SelectSubset<T, Mod_VersionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mod_Version.
     * @param {Mod_VersionDeleteArgs} args - Arguments to delete one Mod_Version.
     * @example
     * // Delete one Mod_Version
     * const Mod_Version = await prisma.mod_Version.delete({
     *   where: {
     *     // ... filter to delete one Mod_Version
     *   }
     * })
     * 
    **/
    delete<T extends Mod_VersionDeleteArgs>(
      args: SelectSubset<T, Mod_VersionDeleteArgs>
    ): CheckSelect<T, Prisma__Mod_VersionClient<Mod_Version>, Prisma__Mod_VersionClient<Mod_VersionGetPayload<T>>>

    /**
     * Update one Mod_Version.
     * @param {Mod_VersionUpdateArgs} args - Arguments to update one Mod_Version.
     * @example
     * // Update one Mod_Version
     * const mod_Version = await prisma.mod_Version.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Mod_VersionUpdateArgs>(
      args: SelectSubset<T, Mod_VersionUpdateArgs>
    ): CheckSelect<T, Prisma__Mod_VersionClient<Mod_Version>, Prisma__Mod_VersionClient<Mod_VersionGetPayload<T>>>

    /**
     * Delete zero or more Mod_Versions.
     * @param {Mod_VersionDeleteManyArgs} args - Arguments to filter Mod_Versions to delete.
     * @example
     * // Delete a few Mod_Versions
     * const { count } = await prisma.mod_Version.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Mod_VersionDeleteManyArgs>(
      args?: SelectSubset<T, Mod_VersionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mod_Versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_VersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mod_Versions
     * const mod_Version = await prisma.mod_Version.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Mod_VersionUpdateManyArgs>(
      args: SelectSubset<T, Mod_VersionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mod_Version.
     * @param {Mod_VersionUpsertArgs} args - Arguments to update or create a Mod_Version.
     * @example
     * // Update or create a Mod_Version
     * const mod_Version = await prisma.mod_Version.upsert({
     *   create: {
     *     // ... data to create a Mod_Version
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mod_Version we want to update
     *   }
     * })
    **/
    upsert<T extends Mod_VersionUpsertArgs>(
      args: SelectSubset<T, Mod_VersionUpsertArgs>
    ): CheckSelect<T, Prisma__Mod_VersionClient<Mod_Version>, Prisma__Mod_VersionClient<Mod_VersionGetPayload<T>>>

    /**
     * Count the number of Mod_Versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_VersionCountArgs} args - Arguments to filter Mod_Versions to count.
     * @example
     * // Count the number of Mod_Versions
     * const count = await prisma.mod_Version.count({
     *   where: {
     *     // ... the filter for the Mod_Versions we want to count
     *   }
     * })
    **/
    count<T extends Mod_VersionCountArgs>(
      args?: Subset<T, Mod_VersionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mod_VersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mod_Version.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_VersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mod_VersionAggregateArgs>(args: Subset<T, Mod_VersionAggregateArgs>): PrismaPromise<GetMod_VersionAggregateType<T>>

    /**
     * Group by Mod_Version.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_VersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mod_VersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mod_VersionGroupByArgs['orderBy'] }
        : { orderBy?: Mod_VersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mod_VersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMod_VersionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mod_Version.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Mod_VersionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Mod<T extends ModArgs = {}>(args?: Subset<T, ModArgs>): CheckSelect<T, Prisma__ModClient<Mod | null >, Prisma__ModClient<ModGetPayload<T> | null >>;

    Downloads<T extends Mod_DownloadFindManyArgs = {}>(args?: Subset<T, Mod_DownloadFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod_Download>>, PrismaPromise<Array<Mod_DownloadGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Mod_Version findUnique
   */
  export type Mod_VersionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Mod_Version
     * 
    **/
    select?: Mod_VersionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_VersionInclude | null
    /**
     * Throw an Error if a Mod_Version can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod_Version to fetch.
     * 
    **/
    where: Mod_VersionWhereUniqueInput
  }


  /**
   * Mod_Version findFirst
   */
  export type Mod_VersionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Mod_Version
     * 
    **/
    select?: Mod_VersionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_VersionInclude | null
    /**
     * Throw an Error if a Mod_Version can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod_Version to fetch.
     * 
    **/
    where?: Mod_VersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Versions to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_VersionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mod_Versions.
     * 
    **/
    cursor?: Mod_VersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Versions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Versions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mod_Versions.
     * 
    **/
    distinct?: Enumerable<Mod_VersionScalarFieldEnum>
  }


  /**
   * Mod_Version findMany
   */
  export type Mod_VersionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mod_Version
     * 
    **/
    select?: Mod_VersionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_VersionInclude | null
    /**
     * Filter, which Mod_Versions to fetch.
     * 
    **/
    where?: Mod_VersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Versions to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_VersionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mod_Versions.
     * 
    **/
    cursor?: Mod_VersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Versions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Versions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mod_VersionScalarFieldEnum>
  }


  /**
   * Mod_Version create
   */
  export type Mod_VersionCreateArgs = {
    /**
     * Select specific fields to fetch from the Mod_Version
     * 
    **/
    select?: Mod_VersionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_VersionInclude | null
    /**
     * The data needed to create a Mod_Version.
     * 
    **/
    data: XOR<Mod_VersionCreateInput, Mod_VersionUncheckedCreateInput>
  }


  /**
   * Mod_Version createMany
   */
  export type Mod_VersionCreateManyArgs = {
    /**
     * The data used to create many Mod_Versions.
     * 
    **/
    data: Enumerable<Mod_VersionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mod_Version update
   */
  export type Mod_VersionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mod_Version
     * 
    **/
    select?: Mod_VersionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_VersionInclude | null
    /**
     * The data needed to update a Mod_Version.
     * 
    **/
    data: XOR<Mod_VersionUpdateInput, Mod_VersionUncheckedUpdateInput>
    /**
     * Choose, which Mod_Version to update.
     * 
    **/
    where: Mod_VersionWhereUniqueInput
  }


  /**
   * Mod_Version updateMany
   */
  export type Mod_VersionUpdateManyArgs = {
    /**
     * The data used to update Mod_Versions.
     * 
    **/
    data: XOR<Mod_VersionUpdateManyMutationInput, Mod_VersionUncheckedUpdateManyInput>
    /**
     * Filter which Mod_Versions to update
     * 
    **/
    where?: Mod_VersionWhereInput
  }


  /**
   * Mod_Version upsert
   */
  export type Mod_VersionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mod_Version
     * 
    **/
    select?: Mod_VersionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_VersionInclude | null
    /**
     * The filter to search for the Mod_Version to update in case it exists.
     * 
    **/
    where: Mod_VersionWhereUniqueInput
    /**
     * In case the Mod_Version found by the `where` argument doesn't exist, create a new Mod_Version with this data.
     * 
    **/
    create: XOR<Mod_VersionCreateInput, Mod_VersionUncheckedCreateInput>
    /**
     * In case the Mod_Version was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Mod_VersionUpdateInput, Mod_VersionUncheckedUpdateInput>
  }


  /**
   * Mod_Version delete
   */
  export type Mod_VersionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mod_Version
     * 
    **/
    select?: Mod_VersionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_VersionInclude | null
    /**
     * Filter which Mod_Version to delete.
     * 
    **/
    where: Mod_VersionWhereUniqueInput
  }


  /**
   * Mod_Version deleteMany
   */
  export type Mod_VersionDeleteManyArgs = {
    /**
     * Filter which Mod_Versions to delete
     * 
    **/
    where?: Mod_VersionWhereInput
  }


  /**
   * Mod_Version without action
   */
  export type Mod_VersionArgs = {
    /**
     * Select specific fields to fetch from the Mod_Version
     * 
    **/
    select?: Mod_VersionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_VersionInclude | null
  }



  /**
   * Model Mod_Issue
   */


  export type AggregateMod_Issue = {
    _count: Mod_IssueCountAggregateOutputType | null
    _avg: Mod_IssueAvgAggregateOutputType | null
    _sum: Mod_IssueSumAggregateOutputType | null
    _min: Mod_IssueMinAggregateOutputType | null
    _max: Mod_IssueMaxAggregateOutputType | null
  }

  export type Mod_IssueAvgAggregateOutputType = {
    id: number | null
    mod_id: number | null
    author_id: number | null
  }

  export type Mod_IssueSumAggregateOutputType = {
    id: number | null
    mod_id: number | null
    author_id: number | null
  }

  export type Mod_IssueMinAggregateOutputType = {
    id: number | null
    mod_id: number | null
    name: string | null
    type: Mod_Issue_Type | null
    author_id: number | null
    createDate: Date | null
  }

  export type Mod_IssueMaxAggregateOutputType = {
    id: number | null
    mod_id: number | null
    name: string | null
    type: Mod_Issue_Type | null
    author_id: number | null
    createDate: Date | null
  }

  export type Mod_IssueCountAggregateOutputType = {
    id: number
    mod_id: number
    name: number
    type: number
    author_id: number
    createDate: number
    _all: number
  }


  export type Mod_IssueAvgAggregateInputType = {
    id?: true
    mod_id?: true
    author_id?: true
  }

  export type Mod_IssueSumAggregateInputType = {
    id?: true
    mod_id?: true
    author_id?: true
  }

  export type Mod_IssueMinAggregateInputType = {
    id?: true
    mod_id?: true
    name?: true
    type?: true
    author_id?: true
    createDate?: true
  }

  export type Mod_IssueMaxAggregateInputType = {
    id?: true
    mod_id?: true
    name?: true
    type?: true
    author_id?: true
    createDate?: true
  }

  export type Mod_IssueCountAggregateInputType = {
    id?: true
    mod_id?: true
    name?: true
    type?: true
    author_id?: true
    createDate?: true
    _all?: true
  }

  export type Mod_IssueAggregateArgs = {
    /**
     * Filter which Mod_Issue to aggregate.
     * 
    **/
    where?: Mod_IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Issues to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_IssueOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Mod_IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Issues from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Issues.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mod_Issues
    **/
    _count?: true | Mod_IssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mod_IssueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mod_IssueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mod_IssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mod_IssueMaxAggregateInputType
  }

  export type GetMod_IssueAggregateType<T extends Mod_IssueAggregateArgs> = {
        [P in keyof T & keyof AggregateMod_Issue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMod_Issue[P]>
      : GetScalarType<T[P], AggregateMod_Issue[P]>
  }




  export type Mod_IssueGroupByArgs = {
    where?: Mod_IssueWhereInput
    orderBy?: Enumerable<Mod_IssueOrderByWithAggregationInput>
    by: Array<Mod_IssueScalarFieldEnum>
    having?: Mod_IssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mod_IssueCountAggregateInputType | true
    _avg?: Mod_IssueAvgAggregateInputType
    _sum?: Mod_IssueSumAggregateInputType
    _min?: Mod_IssueMinAggregateInputType
    _max?: Mod_IssueMaxAggregateInputType
  }


  export type Mod_IssueGroupByOutputType = {
    id: number
    mod_id: number
    name: string
    type: Mod_Issue_Type
    author_id: number
    createDate: Date
    _count: Mod_IssueCountAggregateOutputType | null
    _avg: Mod_IssueAvgAggregateOutputType | null
    _sum: Mod_IssueSumAggregateOutputType | null
    _min: Mod_IssueMinAggregateOutputType | null
    _max: Mod_IssueMaxAggregateOutputType | null
  }

  type GetMod_IssueGroupByPayload<T extends Mod_IssueGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mod_IssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mod_IssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mod_IssueGroupByOutputType[P]>
            : GetScalarType<T[P], Mod_IssueGroupByOutputType[P]>
        }
      >
    >


  export type Mod_IssueSelect = {
    id?: boolean
    mod_id?: boolean
    name?: boolean
    type?: boolean
    author_id?: boolean
    createDate?: boolean
    Mod?: boolean | ModArgs
    Author?: boolean | UserArgs
    ModIssuePost?: boolean | Mod_Issue_PostFindManyArgs
    _count?: boolean | Mod_IssueCountOutputTypeArgs
  }

  export type Mod_IssueInclude = {
    Mod?: boolean | ModArgs
    Author?: boolean | UserArgs
    ModIssuePost?: boolean | Mod_Issue_PostFindManyArgs
    _count?: boolean | Mod_IssueCountOutputTypeArgs
  }

  export type Mod_IssueGetPayload<
    S extends boolean | null | undefined | Mod_IssueArgs,
    U = keyof S
      > = S extends true
        ? Mod_Issue
    : S extends undefined
    ? never
    : S extends Mod_IssueArgs | Mod_IssueFindManyArgs
    ?'include' extends U
    ? Mod_Issue  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Mod' ? ModGetPayload<S['include'][P]> :
        P extends 'Author' ? UserGetPayload<S['include'][P]> :
        P extends 'ModIssuePost' ? Array < Mod_Issue_PostGetPayload<S['include'][P]>>  :
        P extends '_count' ? Mod_IssueCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Mod' ? ModGetPayload<S['select'][P]> :
        P extends 'Author' ? UserGetPayload<S['select'][P]> :
        P extends 'ModIssuePost' ? Array < Mod_Issue_PostGetPayload<S['select'][P]>>  :
        P extends '_count' ? Mod_IssueCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Mod_Issue ? Mod_Issue[P] : never
  } 
    : Mod_Issue
  : Mod_Issue


  type Mod_IssueCountArgs = Merge<
    Omit<Mod_IssueFindManyArgs, 'select' | 'include'> & {
      select?: Mod_IssueCountAggregateInputType | true
    }
  >

  export interface Mod_IssueDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Mod_Issue that matches the filter.
     * @param {Mod_IssueFindUniqueArgs} args - Arguments to find a Mod_Issue
     * @example
     * // Get one Mod_Issue
     * const mod_Issue = await prisma.mod_Issue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Mod_IssueFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Mod_IssueFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mod_Issue'> extends True ? CheckSelect<T, Prisma__Mod_IssueClient<Mod_Issue>, Prisma__Mod_IssueClient<Mod_IssueGetPayload<T>>> : CheckSelect<T, Prisma__Mod_IssueClient<Mod_Issue | null >, Prisma__Mod_IssueClient<Mod_IssueGetPayload<T> | null >>

    /**
     * Find the first Mod_Issue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_IssueFindFirstArgs} args - Arguments to find a Mod_Issue
     * @example
     * // Get one Mod_Issue
     * const mod_Issue = await prisma.mod_Issue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Mod_IssueFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Mod_IssueFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mod_Issue'> extends True ? CheckSelect<T, Prisma__Mod_IssueClient<Mod_Issue>, Prisma__Mod_IssueClient<Mod_IssueGetPayload<T>>> : CheckSelect<T, Prisma__Mod_IssueClient<Mod_Issue | null >, Prisma__Mod_IssueClient<Mod_IssueGetPayload<T> | null >>

    /**
     * Find zero or more Mod_Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_IssueFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mod_Issues
     * const mod_Issues = await prisma.mod_Issue.findMany()
     * 
     * // Get first 10 Mod_Issues
     * const mod_Issues = await prisma.mod_Issue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mod_IssueWithIdOnly = await prisma.mod_Issue.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Mod_IssueFindManyArgs>(
      args?: SelectSubset<T, Mod_IssueFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Mod_Issue>>, PrismaPromise<Array<Mod_IssueGetPayload<T>>>>

    /**
     * Create a Mod_Issue.
     * @param {Mod_IssueCreateArgs} args - Arguments to create a Mod_Issue.
     * @example
     * // Create one Mod_Issue
     * const Mod_Issue = await prisma.mod_Issue.create({
     *   data: {
     *     // ... data to create a Mod_Issue
     *   }
     * })
     * 
    **/
    create<T extends Mod_IssueCreateArgs>(
      args: SelectSubset<T, Mod_IssueCreateArgs>
    ): CheckSelect<T, Prisma__Mod_IssueClient<Mod_Issue>, Prisma__Mod_IssueClient<Mod_IssueGetPayload<T>>>

    /**
     * Create many Mod_Issues.
     *     @param {Mod_IssueCreateManyArgs} args - Arguments to create many Mod_Issues.
     *     @example
     *     // Create many Mod_Issues
     *     const mod_Issue = await prisma.mod_Issue.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Mod_IssueCreateManyArgs>(
      args?: SelectSubset<T, Mod_IssueCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mod_Issue.
     * @param {Mod_IssueDeleteArgs} args - Arguments to delete one Mod_Issue.
     * @example
     * // Delete one Mod_Issue
     * const Mod_Issue = await prisma.mod_Issue.delete({
     *   where: {
     *     // ... filter to delete one Mod_Issue
     *   }
     * })
     * 
    **/
    delete<T extends Mod_IssueDeleteArgs>(
      args: SelectSubset<T, Mod_IssueDeleteArgs>
    ): CheckSelect<T, Prisma__Mod_IssueClient<Mod_Issue>, Prisma__Mod_IssueClient<Mod_IssueGetPayload<T>>>

    /**
     * Update one Mod_Issue.
     * @param {Mod_IssueUpdateArgs} args - Arguments to update one Mod_Issue.
     * @example
     * // Update one Mod_Issue
     * const mod_Issue = await prisma.mod_Issue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Mod_IssueUpdateArgs>(
      args: SelectSubset<T, Mod_IssueUpdateArgs>
    ): CheckSelect<T, Prisma__Mod_IssueClient<Mod_Issue>, Prisma__Mod_IssueClient<Mod_IssueGetPayload<T>>>

    /**
     * Delete zero or more Mod_Issues.
     * @param {Mod_IssueDeleteManyArgs} args - Arguments to filter Mod_Issues to delete.
     * @example
     * // Delete a few Mod_Issues
     * const { count } = await prisma.mod_Issue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Mod_IssueDeleteManyArgs>(
      args?: SelectSubset<T, Mod_IssueDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mod_Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_IssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mod_Issues
     * const mod_Issue = await prisma.mod_Issue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Mod_IssueUpdateManyArgs>(
      args: SelectSubset<T, Mod_IssueUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mod_Issue.
     * @param {Mod_IssueUpsertArgs} args - Arguments to update or create a Mod_Issue.
     * @example
     * // Update or create a Mod_Issue
     * const mod_Issue = await prisma.mod_Issue.upsert({
     *   create: {
     *     // ... data to create a Mod_Issue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mod_Issue we want to update
     *   }
     * })
    **/
    upsert<T extends Mod_IssueUpsertArgs>(
      args: SelectSubset<T, Mod_IssueUpsertArgs>
    ): CheckSelect<T, Prisma__Mod_IssueClient<Mod_Issue>, Prisma__Mod_IssueClient<Mod_IssueGetPayload<T>>>

    /**
     * Count the number of Mod_Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_IssueCountArgs} args - Arguments to filter Mod_Issues to count.
     * @example
     * // Count the number of Mod_Issues
     * const count = await prisma.mod_Issue.count({
     *   where: {
     *     // ... the filter for the Mod_Issues we want to count
     *   }
     * })
    **/
    count<T extends Mod_IssueCountArgs>(
      args?: Subset<T, Mod_IssueCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mod_IssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mod_Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_IssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mod_IssueAggregateArgs>(args: Subset<T, Mod_IssueAggregateArgs>): PrismaPromise<GetMod_IssueAggregateType<T>>

    /**
     * Group by Mod_Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_IssueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mod_IssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mod_IssueGroupByArgs['orderBy'] }
        : { orderBy?: Mod_IssueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mod_IssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMod_IssueGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mod_Issue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Mod_IssueClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Mod<T extends ModArgs = {}>(args?: Subset<T, ModArgs>): CheckSelect<T, Prisma__ModClient<Mod | null >, Prisma__ModClient<ModGetPayload<T> | null >>;

    Author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    ModIssuePost<T extends Mod_Issue_PostFindManyArgs = {}>(args?: Subset<T, Mod_Issue_PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod_Issue_Post>>, PrismaPromise<Array<Mod_Issue_PostGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Mod_Issue findUnique
   */
  export type Mod_IssueFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Mod_Issue
     * 
    **/
    select?: Mod_IssueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_IssueInclude | null
    /**
     * Throw an Error if a Mod_Issue can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod_Issue to fetch.
     * 
    **/
    where: Mod_IssueWhereUniqueInput
  }


  /**
   * Mod_Issue findFirst
   */
  export type Mod_IssueFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Mod_Issue
     * 
    **/
    select?: Mod_IssueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_IssueInclude | null
    /**
     * Throw an Error if a Mod_Issue can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod_Issue to fetch.
     * 
    **/
    where?: Mod_IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Issues to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_IssueOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mod_Issues.
     * 
    **/
    cursor?: Mod_IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Issues from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Issues.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mod_Issues.
     * 
    **/
    distinct?: Enumerable<Mod_IssueScalarFieldEnum>
  }


  /**
   * Mod_Issue findMany
   */
  export type Mod_IssueFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mod_Issue
     * 
    **/
    select?: Mod_IssueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_IssueInclude | null
    /**
     * Filter, which Mod_Issues to fetch.
     * 
    **/
    where?: Mod_IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Issues to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_IssueOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mod_Issues.
     * 
    **/
    cursor?: Mod_IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Issues from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Issues.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mod_IssueScalarFieldEnum>
  }


  /**
   * Mod_Issue create
   */
  export type Mod_IssueCreateArgs = {
    /**
     * Select specific fields to fetch from the Mod_Issue
     * 
    **/
    select?: Mod_IssueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_IssueInclude | null
    /**
     * The data needed to create a Mod_Issue.
     * 
    **/
    data: XOR<Mod_IssueCreateInput, Mod_IssueUncheckedCreateInput>
  }


  /**
   * Mod_Issue createMany
   */
  export type Mod_IssueCreateManyArgs = {
    /**
     * The data used to create many Mod_Issues.
     * 
    **/
    data: Enumerable<Mod_IssueCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mod_Issue update
   */
  export type Mod_IssueUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mod_Issue
     * 
    **/
    select?: Mod_IssueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_IssueInclude | null
    /**
     * The data needed to update a Mod_Issue.
     * 
    **/
    data: XOR<Mod_IssueUpdateInput, Mod_IssueUncheckedUpdateInput>
    /**
     * Choose, which Mod_Issue to update.
     * 
    **/
    where: Mod_IssueWhereUniqueInput
  }


  /**
   * Mod_Issue updateMany
   */
  export type Mod_IssueUpdateManyArgs = {
    /**
     * The data used to update Mod_Issues.
     * 
    **/
    data: XOR<Mod_IssueUpdateManyMutationInput, Mod_IssueUncheckedUpdateManyInput>
    /**
     * Filter which Mod_Issues to update
     * 
    **/
    where?: Mod_IssueWhereInput
  }


  /**
   * Mod_Issue upsert
   */
  export type Mod_IssueUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mod_Issue
     * 
    **/
    select?: Mod_IssueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_IssueInclude | null
    /**
     * The filter to search for the Mod_Issue to update in case it exists.
     * 
    **/
    where: Mod_IssueWhereUniqueInput
    /**
     * In case the Mod_Issue found by the `where` argument doesn't exist, create a new Mod_Issue with this data.
     * 
    **/
    create: XOR<Mod_IssueCreateInput, Mod_IssueUncheckedCreateInput>
    /**
     * In case the Mod_Issue was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Mod_IssueUpdateInput, Mod_IssueUncheckedUpdateInput>
  }


  /**
   * Mod_Issue delete
   */
  export type Mod_IssueDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mod_Issue
     * 
    **/
    select?: Mod_IssueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_IssueInclude | null
    /**
     * Filter which Mod_Issue to delete.
     * 
    **/
    where: Mod_IssueWhereUniqueInput
  }


  /**
   * Mod_Issue deleteMany
   */
  export type Mod_IssueDeleteManyArgs = {
    /**
     * Filter which Mod_Issues to delete
     * 
    **/
    where?: Mod_IssueWhereInput
  }


  /**
   * Mod_Issue without action
   */
  export type Mod_IssueArgs = {
    /**
     * Select specific fields to fetch from the Mod_Issue
     * 
    **/
    select?: Mod_IssueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_IssueInclude | null
  }



  /**
   * Model Mod_Issue_Post
   */


  export type AggregateMod_Issue_Post = {
    _count: Mod_Issue_PostCountAggregateOutputType | null
    _avg: Mod_Issue_PostAvgAggregateOutputType | null
    _sum: Mod_Issue_PostSumAggregateOutputType | null
    _min: Mod_Issue_PostMinAggregateOutputType | null
    _max: Mod_Issue_PostMaxAggregateOutputType | null
  }

  export type Mod_Issue_PostAvgAggregateOutputType = {
    id: number | null
    issue_id: number | null
    author_id: number | null
  }

  export type Mod_Issue_PostSumAggregateOutputType = {
    id: number | null
    issue_id: number | null
    author_id: number | null
  }

  export type Mod_Issue_PostMinAggregateOutputType = {
    id: number | null
    issue_id: number | null
    author_id: number | null
    createDate: Date | null
    text: string | null
  }

  export type Mod_Issue_PostMaxAggregateOutputType = {
    id: number | null
    issue_id: number | null
    author_id: number | null
    createDate: Date | null
    text: string | null
  }

  export type Mod_Issue_PostCountAggregateOutputType = {
    id: number
    issue_id: number
    author_id: number
    createDate: number
    text: number
    _all: number
  }


  export type Mod_Issue_PostAvgAggregateInputType = {
    id?: true
    issue_id?: true
    author_id?: true
  }

  export type Mod_Issue_PostSumAggregateInputType = {
    id?: true
    issue_id?: true
    author_id?: true
  }

  export type Mod_Issue_PostMinAggregateInputType = {
    id?: true
    issue_id?: true
    author_id?: true
    createDate?: true
    text?: true
  }

  export type Mod_Issue_PostMaxAggregateInputType = {
    id?: true
    issue_id?: true
    author_id?: true
    createDate?: true
    text?: true
  }

  export type Mod_Issue_PostCountAggregateInputType = {
    id?: true
    issue_id?: true
    author_id?: true
    createDate?: true
    text?: true
    _all?: true
  }

  export type Mod_Issue_PostAggregateArgs = {
    /**
     * Filter which Mod_Issue_Post to aggregate.
     * 
    **/
    where?: Mod_Issue_PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Issue_Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_Issue_PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Mod_Issue_PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Issue_Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Issue_Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mod_Issue_Posts
    **/
    _count?: true | Mod_Issue_PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mod_Issue_PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mod_Issue_PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mod_Issue_PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mod_Issue_PostMaxAggregateInputType
  }

  export type GetMod_Issue_PostAggregateType<T extends Mod_Issue_PostAggregateArgs> = {
        [P in keyof T & keyof AggregateMod_Issue_Post]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMod_Issue_Post[P]>
      : GetScalarType<T[P], AggregateMod_Issue_Post[P]>
  }




  export type Mod_Issue_PostGroupByArgs = {
    where?: Mod_Issue_PostWhereInput
    orderBy?: Enumerable<Mod_Issue_PostOrderByWithAggregationInput>
    by: Array<Mod_Issue_PostScalarFieldEnum>
    having?: Mod_Issue_PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mod_Issue_PostCountAggregateInputType | true
    _avg?: Mod_Issue_PostAvgAggregateInputType
    _sum?: Mod_Issue_PostSumAggregateInputType
    _min?: Mod_Issue_PostMinAggregateInputType
    _max?: Mod_Issue_PostMaxAggregateInputType
  }


  export type Mod_Issue_PostGroupByOutputType = {
    id: number
    issue_id: number
    author_id: number
    createDate: Date
    text: string
    _count: Mod_Issue_PostCountAggregateOutputType | null
    _avg: Mod_Issue_PostAvgAggregateOutputType | null
    _sum: Mod_Issue_PostSumAggregateOutputType | null
    _min: Mod_Issue_PostMinAggregateOutputType | null
    _max: Mod_Issue_PostMaxAggregateOutputType | null
  }

  type GetMod_Issue_PostGroupByPayload<T extends Mod_Issue_PostGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mod_Issue_PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mod_Issue_PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mod_Issue_PostGroupByOutputType[P]>
            : GetScalarType<T[P], Mod_Issue_PostGroupByOutputType[P]>
        }
      >
    >


  export type Mod_Issue_PostSelect = {
    id?: boolean
    issue_id?: boolean
    author_id?: boolean
    createDate?: boolean
    text?: boolean
    Issue?: boolean | Mod_IssueArgs
    Author?: boolean | UserArgs
  }

  export type Mod_Issue_PostInclude = {
    Issue?: boolean | Mod_IssueArgs
    Author?: boolean | UserArgs
  }

  export type Mod_Issue_PostGetPayload<
    S extends boolean | null | undefined | Mod_Issue_PostArgs,
    U = keyof S
      > = S extends true
        ? Mod_Issue_Post
    : S extends undefined
    ? never
    : S extends Mod_Issue_PostArgs | Mod_Issue_PostFindManyArgs
    ?'include' extends U
    ? Mod_Issue_Post  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Issue' ? Mod_IssueGetPayload<S['include'][P]> :
        P extends 'Author' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Issue' ? Mod_IssueGetPayload<S['select'][P]> :
        P extends 'Author' ? UserGetPayload<S['select'][P]> :  P extends keyof Mod_Issue_Post ? Mod_Issue_Post[P] : never
  } 
    : Mod_Issue_Post
  : Mod_Issue_Post


  type Mod_Issue_PostCountArgs = Merge<
    Omit<Mod_Issue_PostFindManyArgs, 'select' | 'include'> & {
      select?: Mod_Issue_PostCountAggregateInputType | true
    }
  >

  export interface Mod_Issue_PostDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Mod_Issue_Post that matches the filter.
     * @param {Mod_Issue_PostFindUniqueArgs} args - Arguments to find a Mod_Issue_Post
     * @example
     * // Get one Mod_Issue_Post
     * const mod_Issue_Post = await prisma.mod_Issue_Post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Mod_Issue_PostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Mod_Issue_PostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mod_Issue_Post'> extends True ? CheckSelect<T, Prisma__Mod_Issue_PostClient<Mod_Issue_Post>, Prisma__Mod_Issue_PostClient<Mod_Issue_PostGetPayload<T>>> : CheckSelect<T, Prisma__Mod_Issue_PostClient<Mod_Issue_Post | null >, Prisma__Mod_Issue_PostClient<Mod_Issue_PostGetPayload<T> | null >>

    /**
     * Find the first Mod_Issue_Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_Issue_PostFindFirstArgs} args - Arguments to find a Mod_Issue_Post
     * @example
     * // Get one Mod_Issue_Post
     * const mod_Issue_Post = await prisma.mod_Issue_Post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Mod_Issue_PostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Mod_Issue_PostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mod_Issue_Post'> extends True ? CheckSelect<T, Prisma__Mod_Issue_PostClient<Mod_Issue_Post>, Prisma__Mod_Issue_PostClient<Mod_Issue_PostGetPayload<T>>> : CheckSelect<T, Prisma__Mod_Issue_PostClient<Mod_Issue_Post | null >, Prisma__Mod_Issue_PostClient<Mod_Issue_PostGetPayload<T> | null >>

    /**
     * Find zero or more Mod_Issue_Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_Issue_PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mod_Issue_Posts
     * const mod_Issue_Posts = await prisma.mod_Issue_Post.findMany()
     * 
     * // Get first 10 Mod_Issue_Posts
     * const mod_Issue_Posts = await prisma.mod_Issue_Post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mod_Issue_PostWithIdOnly = await prisma.mod_Issue_Post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Mod_Issue_PostFindManyArgs>(
      args?: SelectSubset<T, Mod_Issue_PostFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Mod_Issue_Post>>, PrismaPromise<Array<Mod_Issue_PostGetPayload<T>>>>

    /**
     * Create a Mod_Issue_Post.
     * @param {Mod_Issue_PostCreateArgs} args - Arguments to create a Mod_Issue_Post.
     * @example
     * // Create one Mod_Issue_Post
     * const Mod_Issue_Post = await prisma.mod_Issue_Post.create({
     *   data: {
     *     // ... data to create a Mod_Issue_Post
     *   }
     * })
     * 
    **/
    create<T extends Mod_Issue_PostCreateArgs>(
      args: SelectSubset<T, Mod_Issue_PostCreateArgs>
    ): CheckSelect<T, Prisma__Mod_Issue_PostClient<Mod_Issue_Post>, Prisma__Mod_Issue_PostClient<Mod_Issue_PostGetPayload<T>>>

    /**
     * Create many Mod_Issue_Posts.
     *     @param {Mod_Issue_PostCreateManyArgs} args - Arguments to create many Mod_Issue_Posts.
     *     @example
     *     // Create many Mod_Issue_Posts
     *     const mod_Issue_Post = await prisma.mod_Issue_Post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Mod_Issue_PostCreateManyArgs>(
      args?: SelectSubset<T, Mod_Issue_PostCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mod_Issue_Post.
     * @param {Mod_Issue_PostDeleteArgs} args - Arguments to delete one Mod_Issue_Post.
     * @example
     * // Delete one Mod_Issue_Post
     * const Mod_Issue_Post = await prisma.mod_Issue_Post.delete({
     *   where: {
     *     // ... filter to delete one Mod_Issue_Post
     *   }
     * })
     * 
    **/
    delete<T extends Mod_Issue_PostDeleteArgs>(
      args: SelectSubset<T, Mod_Issue_PostDeleteArgs>
    ): CheckSelect<T, Prisma__Mod_Issue_PostClient<Mod_Issue_Post>, Prisma__Mod_Issue_PostClient<Mod_Issue_PostGetPayload<T>>>

    /**
     * Update one Mod_Issue_Post.
     * @param {Mod_Issue_PostUpdateArgs} args - Arguments to update one Mod_Issue_Post.
     * @example
     * // Update one Mod_Issue_Post
     * const mod_Issue_Post = await prisma.mod_Issue_Post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Mod_Issue_PostUpdateArgs>(
      args: SelectSubset<T, Mod_Issue_PostUpdateArgs>
    ): CheckSelect<T, Prisma__Mod_Issue_PostClient<Mod_Issue_Post>, Prisma__Mod_Issue_PostClient<Mod_Issue_PostGetPayload<T>>>

    /**
     * Delete zero or more Mod_Issue_Posts.
     * @param {Mod_Issue_PostDeleteManyArgs} args - Arguments to filter Mod_Issue_Posts to delete.
     * @example
     * // Delete a few Mod_Issue_Posts
     * const { count } = await prisma.mod_Issue_Post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Mod_Issue_PostDeleteManyArgs>(
      args?: SelectSubset<T, Mod_Issue_PostDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mod_Issue_Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_Issue_PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mod_Issue_Posts
     * const mod_Issue_Post = await prisma.mod_Issue_Post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Mod_Issue_PostUpdateManyArgs>(
      args: SelectSubset<T, Mod_Issue_PostUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mod_Issue_Post.
     * @param {Mod_Issue_PostUpsertArgs} args - Arguments to update or create a Mod_Issue_Post.
     * @example
     * // Update or create a Mod_Issue_Post
     * const mod_Issue_Post = await prisma.mod_Issue_Post.upsert({
     *   create: {
     *     // ... data to create a Mod_Issue_Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mod_Issue_Post we want to update
     *   }
     * })
    **/
    upsert<T extends Mod_Issue_PostUpsertArgs>(
      args: SelectSubset<T, Mod_Issue_PostUpsertArgs>
    ): CheckSelect<T, Prisma__Mod_Issue_PostClient<Mod_Issue_Post>, Prisma__Mod_Issue_PostClient<Mod_Issue_PostGetPayload<T>>>

    /**
     * Count the number of Mod_Issue_Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_Issue_PostCountArgs} args - Arguments to filter Mod_Issue_Posts to count.
     * @example
     * // Count the number of Mod_Issue_Posts
     * const count = await prisma.mod_Issue_Post.count({
     *   where: {
     *     // ... the filter for the Mod_Issue_Posts we want to count
     *   }
     * })
    **/
    count<T extends Mod_Issue_PostCountArgs>(
      args?: Subset<T, Mod_Issue_PostCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mod_Issue_PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mod_Issue_Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_Issue_PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mod_Issue_PostAggregateArgs>(args: Subset<T, Mod_Issue_PostAggregateArgs>): PrismaPromise<GetMod_Issue_PostAggregateType<T>>

    /**
     * Group by Mod_Issue_Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_Issue_PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mod_Issue_PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mod_Issue_PostGroupByArgs['orderBy'] }
        : { orderBy?: Mod_Issue_PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mod_Issue_PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMod_Issue_PostGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mod_Issue_Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Mod_Issue_PostClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Issue<T extends Mod_IssueArgs = {}>(args?: Subset<T, Mod_IssueArgs>): CheckSelect<T, Prisma__Mod_IssueClient<Mod_Issue | null >, Prisma__Mod_IssueClient<Mod_IssueGetPayload<T> | null >>;

    Author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Mod_Issue_Post findUnique
   */
  export type Mod_Issue_PostFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Mod_Issue_Post
     * 
    **/
    select?: Mod_Issue_PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_Issue_PostInclude | null
    /**
     * Throw an Error if a Mod_Issue_Post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod_Issue_Post to fetch.
     * 
    **/
    where: Mod_Issue_PostWhereUniqueInput
  }


  /**
   * Mod_Issue_Post findFirst
   */
  export type Mod_Issue_PostFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Mod_Issue_Post
     * 
    **/
    select?: Mod_Issue_PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_Issue_PostInclude | null
    /**
     * Throw an Error if a Mod_Issue_Post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod_Issue_Post to fetch.
     * 
    **/
    where?: Mod_Issue_PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Issue_Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_Issue_PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mod_Issue_Posts.
     * 
    **/
    cursor?: Mod_Issue_PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Issue_Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Issue_Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mod_Issue_Posts.
     * 
    **/
    distinct?: Enumerable<Mod_Issue_PostScalarFieldEnum>
  }


  /**
   * Mod_Issue_Post findMany
   */
  export type Mod_Issue_PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mod_Issue_Post
     * 
    **/
    select?: Mod_Issue_PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_Issue_PostInclude | null
    /**
     * Filter, which Mod_Issue_Posts to fetch.
     * 
    **/
    where?: Mod_Issue_PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Issue_Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_Issue_PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mod_Issue_Posts.
     * 
    **/
    cursor?: Mod_Issue_PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Issue_Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Issue_Posts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mod_Issue_PostScalarFieldEnum>
  }


  /**
   * Mod_Issue_Post create
   */
  export type Mod_Issue_PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Mod_Issue_Post
     * 
    **/
    select?: Mod_Issue_PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_Issue_PostInclude | null
    /**
     * The data needed to create a Mod_Issue_Post.
     * 
    **/
    data: XOR<Mod_Issue_PostCreateInput, Mod_Issue_PostUncheckedCreateInput>
  }


  /**
   * Mod_Issue_Post createMany
   */
  export type Mod_Issue_PostCreateManyArgs = {
    /**
     * The data used to create many Mod_Issue_Posts.
     * 
    **/
    data: Enumerable<Mod_Issue_PostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mod_Issue_Post update
   */
  export type Mod_Issue_PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mod_Issue_Post
     * 
    **/
    select?: Mod_Issue_PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_Issue_PostInclude | null
    /**
     * The data needed to update a Mod_Issue_Post.
     * 
    **/
    data: XOR<Mod_Issue_PostUpdateInput, Mod_Issue_PostUncheckedUpdateInput>
    /**
     * Choose, which Mod_Issue_Post to update.
     * 
    **/
    where: Mod_Issue_PostWhereUniqueInput
  }


  /**
   * Mod_Issue_Post updateMany
   */
  export type Mod_Issue_PostUpdateManyArgs = {
    /**
     * The data used to update Mod_Issue_Posts.
     * 
    **/
    data: XOR<Mod_Issue_PostUpdateManyMutationInput, Mod_Issue_PostUncheckedUpdateManyInput>
    /**
     * Filter which Mod_Issue_Posts to update
     * 
    **/
    where?: Mod_Issue_PostWhereInput
  }


  /**
   * Mod_Issue_Post upsert
   */
  export type Mod_Issue_PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mod_Issue_Post
     * 
    **/
    select?: Mod_Issue_PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_Issue_PostInclude | null
    /**
     * The filter to search for the Mod_Issue_Post to update in case it exists.
     * 
    **/
    where: Mod_Issue_PostWhereUniqueInput
    /**
     * In case the Mod_Issue_Post found by the `where` argument doesn't exist, create a new Mod_Issue_Post with this data.
     * 
    **/
    create: XOR<Mod_Issue_PostCreateInput, Mod_Issue_PostUncheckedCreateInput>
    /**
     * In case the Mod_Issue_Post was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Mod_Issue_PostUpdateInput, Mod_Issue_PostUncheckedUpdateInput>
  }


  /**
   * Mod_Issue_Post delete
   */
  export type Mod_Issue_PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mod_Issue_Post
     * 
    **/
    select?: Mod_Issue_PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_Issue_PostInclude | null
    /**
     * Filter which Mod_Issue_Post to delete.
     * 
    **/
    where: Mod_Issue_PostWhereUniqueInput
  }


  /**
   * Mod_Issue_Post deleteMany
   */
  export type Mod_Issue_PostDeleteManyArgs = {
    /**
     * Filter which Mod_Issue_Posts to delete
     * 
    **/
    where?: Mod_Issue_PostWhereInput
  }


  /**
   * Mod_Issue_Post without action
   */
  export type Mod_Issue_PostArgs = {
    /**
     * Select specific fields to fetch from the Mod_Issue_Post
     * 
    **/
    select?: Mod_Issue_PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_Issue_PostInclude | null
  }



  /**
   * Model Mods_List
   */


  export type AggregateMods_List = {
    _count: Mods_ListCountAggregateOutputType | null
    _avg: Mods_ListAvgAggregateOutputType | null
    _sum: Mods_ListSumAggregateOutputType | null
    _min: Mods_ListMinAggregateOutputType | null
    _max: Mods_ListMaxAggregateOutputType | null
  }

  export type Mods_ListAvgAggregateOutputType = {
    id: number | null
    author_id: number | null
  }

  export type Mods_ListSumAggregateOutputType = {
    id: number | null
    author_id: number | null
  }

  export type Mods_ListMinAggregateOutputType = {
    id: number | null
    author_id: number | null
    is_public: boolean | null
    name: string | null
  }

  export type Mods_ListMaxAggregateOutputType = {
    id: number | null
    author_id: number | null
    is_public: boolean | null
    name: string | null
  }

  export type Mods_ListCountAggregateOutputType = {
    id: number
    author_id: number
    is_public: number
    name: number
    _all: number
  }


  export type Mods_ListAvgAggregateInputType = {
    id?: true
    author_id?: true
  }

  export type Mods_ListSumAggregateInputType = {
    id?: true
    author_id?: true
  }

  export type Mods_ListMinAggregateInputType = {
    id?: true
    author_id?: true
    is_public?: true
    name?: true
  }

  export type Mods_ListMaxAggregateInputType = {
    id?: true
    author_id?: true
    is_public?: true
    name?: true
  }

  export type Mods_ListCountAggregateInputType = {
    id?: true
    author_id?: true
    is_public?: true
    name?: true
    _all?: true
  }

  export type Mods_ListAggregateArgs = {
    /**
     * Filter which Mods_List to aggregate.
     * 
    **/
    where?: Mods_ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods_Lists to fetch.
     * 
    **/
    orderBy?: Enumerable<Mods_ListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Mods_ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods_Lists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods_Lists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mods_Lists
    **/
    _count?: true | Mods_ListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mods_ListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mods_ListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mods_ListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mods_ListMaxAggregateInputType
  }

  export type GetMods_ListAggregateType<T extends Mods_ListAggregateArgs> = {
        [P in keyof T & keyof AggregateMods_List]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMods_List[P]>
      : GetScalarType<T[P], AggregateMods_List[P]>
  }




  export type Mods_ListGroupByArgs = {
    where?: Mods_ListWhereInput
    orderBy?: Enumerable<Mods_ListOrderByWithAggregationInput>
    by: Array<Mods_ListScalarFieldEnum>
    having?: Mods_ListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mods_ListCountAggregateInputType | true
    _avg?: Mods_ListAvgAggregateInputType
    _sum?: Mods_ListSumAggregateInputType
    _min?: Mods_ListMinAggregateInputType
    _max?: Mods_ListMaxAggregateInputType
  }


  export type Mods_ListGroupByOutputType = {
    id: number
    author_id: number
    is_public: boolean
    name: string
    _count: Mods_ListCountAggregateOutputType | null
    _avg: Mods_ListAvgAggregateOutputType | null
    _sum: Mods_ListSumAggregateOutputType | null
    _min: Mods_ListMinAggregateOutputType | null
    _max: Mods_ListMaxAggregateOutputType | null
  }

  type GetMods_ListGroupByPayload<T extends Mods_ListGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mods_ListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mods_ListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mods_ListGroupByOutputType[P]>
            : GetScalarType<T[P], Mods_ListGroupByOutputType[P]>
        }
      >
    >


  export type Mods_ListSelect = {
    id?: boolean
    author_id?: boolean
    is_public?: boolean
    name?: boolean
    Author?: boolean | UserArgs
    Mods?: boolean | ModFindManyArgs
    _count?: boolean | Mods_ListCountOutputTypeArgs
  }

  export type Mods_ListInclude = {
    Author?: boolean | UserArgs
    Mods?: boolean | ModFindManyArgs
    _count?: boolean | Mods_ListCountOutputTypeArgs
  }

  export type Mods_ListGetPayload<
    S extends boolean | null | undefined | Mods_ListArgs,
    U = keyof S
      > = S extends true
        ? Mods_List
    : S extends undefined
    ? never
    : S extends Mods_ListArgs | Mods_ListFindManyArgs
    ?'include' extends U
    ? Mods_List  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Author' ? UserGetPayload<S['include'][P]> :
        P extends 'Mods' ? Array < ModGetPayload<S['include'][P]>>  :
        P extends '_count' ? Mods_ListCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Author' ? UserGetPayload<S['select'][P]> :
        P extends 'Mods' ? Array < ModGetPayload<S['select'][P]>>  :
        P extends '_count' ? Mods_ListCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Mods_List ? Mods_List[P] : never
  } 
    : Mods_List
  : Mods_List


  type Mods_ListCountArgs = Merge<
    Omit<Mods_ListFindManyArgs, 'select' | 'include'> & {
      select?: Mods_ListCountAggregateInputType | true
    }
  >

  export interface Mods_ListDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Mods_List that matches the filter.
     * @param {Mods_ListFindUniqueArgs} args - Arguments to find a Mods_List
     * @example
     * // Get one Mods_List
     * const mods_List = await prisma.mods_List.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Mods_ListFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Mods_ListFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mods_List'> extends True ? CheckSelect<T, Prisma__Mods_ListClient<Mods_List>, Prisma__Mods_ListClient<Mods_ListGetPayload<T>>> : CheckSelect<T, Prisma__Mods_ListClient<Mods_List | null >, Prisma__Mods_ListClient<Mods_ListGetPayload<T> | null >>

    /**
     * Find the first Mods_List that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_ListFindFirstArgs} args - Arguments to find a Mods_List
     * @example
     * // Get one Mods_List
     * const mods_List = await prisma.mods_List.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Mods_ListFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Mods_ListFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mods_List'> extends True ? CheckSelect<T, Prisma__Mods_ListClient<Mods_List>, Prisma__Mods_ListClient<Mods_ListGetPayload<T>>> : CheckSelect<T, Prisma__Mods_ListClient<Mods_List | null >, Prisma__Mods_ListClient<Mods_ListGetPayload<T> | null >>

    /**
     * Find zero or more Mods_Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_ListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mods_Lists
     * const mods_Lists = await prisma.mods_List.findMany()
     * 
     * // Get first 10 Mods_Lists
     * const mods_Lists = await prisma.mods_List.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mods_ListWithIdOnly = await prisma.mods_List.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Mods_ListFindManyArgs>(
      args?: SelectSubset<T, Mods_ListFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Mods_List>>, PrismaPromise<Array<Mods_ListGetPayload<T>>>>

    /**
     * Create a Mods_List.
     * @param {Mods_ListCreateArgs} args - Arguments to create a Mods_List.
     * @example
     * // Create one Mods_List
     * const Mods_List = await prisma.mods_List.create({
     *   data: {
     *     // ... data to create a Mods_List
     *   }
     * })
     * 
    **/
    create<T extends Mods_ListCreateArgs>(
      args: SelectSubset<T, Mods_ListCreateArgs>
    ): CheckSelect<T, Prisma__Mods_ListClient<Mods_List>, Prisma__Mods_ListClient<Mods_ListGetPayload<T>>>

    /**
     * Create many Mods_Lists.
     *     @param {Mods_ListCreateManyArgs} args - Arguments to create many Mods_Lists.
     *     @example
     *     // Create many Mods_Lists
     *     const mods_List = await prisma.mods_List.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Mods_ListCreateManyArgs>(
      args?: SelectSubset<T, Mods_ListCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mods_List.
     * @param {Mods_ListDeleteArgs} args - Arguments to delete one Mods_List.
     * @example
     * // Delete one Mods_List
     * const Mods_List = await prisma.mods_List.delete({
     *   where: {
     *     // ... filter to delete one Mods_List
     *   }
     * })
     * 
    **/
    delete<T extends Mods_ListDeleteArgs>(
      args: SelectSubset<T, Mods_ListDeleteArgs>
    ): CheckSelect<T, Prisma__Mods_ListClient<Mods_List>, Prisma__Mods_ListClient<Mods_ListGetPayload<T>>>

    /**
     * Update one Mods_List.
     * @param {Mods_ListUpdateArgs} args - Arguments to update one Mods_List.
     * @example
     * // Update one Mods_List
     * const mods_List = await prisma.mods_List.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Mods_ListUpdateArgs>(
      args: SelectSubset<T, Mods_ListUpdateArgs>
    ): CheckSelect<T, Prisma__Mods_ListClient<Mods_List>, Prisma__Mods_ListClient<Mods_ListGetPayload<T>>>

    /**
     * Delete zero or more Mods_Lists.
     * @param {Mods_ListDeleteManyArgs} args - Arguments to filter Mods_Lists to delete.
     * @example
     * // Delete a few Mods_Lists
     * const { count } = await prisma.mods_List.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Mods_ListDeleteManyArgs>(
      args?: SelectSubset<T, Mods_ListDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mods_Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_ListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mods_Lists
     * const mods_List = await prisma.mods_List.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Mods_ListUpdateManyArgs>(
      args: SelectSubset<T, Mods_ListUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mods_List.
     * @param {Mods_ListUpsertArgs} args - Arguments to update or create a Mods_List.
     * @example
     * // Update or create a Mods_List
     * const mods_List = await prisma.mods_List.upsert({
     *   create: {
     *     // ... data to create a Mods_List
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mods_List we want to update
     *   }
     * })
    **/
    upsert<T extends Mods_ListUpsertArgs>(
      args: SelectSubset<T, Mods_ListUpsertArgs>
    ): CheckSelect<T, Prisma__Mods_ListClient<Mods_List>, Prisma__Mods_ListClient<Mods_ListGetPayload<T>>>

    /**
     * Count the number of Mods_Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_ListCountArgs} args - Arguments to filter Mods_Lists to count.
     * @example
     * // Count the number of Mods_Lists
     * const count = await prisma.mods_List.count({
     *   where: {
     *     // ... the filter for the Mods_Lists we want to count
     *   }
     * })
    **/
    count<T extends Mods_ListCountArgs>(
      args?: Subset<T, Mods_ListCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mods_ListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mods_List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_ListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mods_ListAggregateArgs>(args: Subset<T, Mods_ListAggregateArgs>): PrismaPromise<GetMods_ListAggregateType<T>>

    /**
     * Group by Mods_List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_ListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mods_ListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mods_ListGroupByArgs['orderBy'] }
        : { orderBy?: Mods_ListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mods_ListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMods_ListGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mods_List.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Mods_ListClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Mods<T extends ModFindManyArgs = {}>(args?: Subset<T, ModFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mod>>, PrismaPromise<Array<ModGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Mods_List findUnique
   */
  export type Mods_ListFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Mods_List
     * 
    **/
    select?: Mods_ListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_ListInclude | null
    /**
     * Throw an Error if a Mods_List can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mods_List to fetch.
     * 
    **/
    where: Mods_ListWhereUniqueInput
  }


  /**
   * Mods_List findFirst
   */
  export type Mods_ListFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Mods_List
     * 
    **/
    select?: Mods_ListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_ListInclude | null
    /**
     * Throw an Error if a Mods_List can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mods_List to fetch.
     * 
    **/
    where?: Mods_ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods_Lists to fetch.
     * 
    **/
    orderBy?: Enumerable<Mods_ListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mods_Lists.
     * 
    **/
    cursor?: Mods_ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods_Lists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods_Lists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mods_Lists.
     * 
    **/
    distinct?: Enumerable<Mods_ListScalarFieldEnum>
  }


  /**
   * Mods_List findMany
   */
  export type Mods_ListFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mods_List
     * 
    **/
    select?: Mods_ListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_ListInclude | null
    /**
     * Filter, which Mods_Lists to fetch.
     * 
    **/
    where?: Mods_ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods_Lists to fetch.
     * 
    **/
    orderBy?: Enumerable<Mods_ListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mods_Lists.
     * 
    **/
    cursor?: Mods_ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods_Lists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods_Lists.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mods_ListScalarFieldEnum>
  }


  /**
   * Mods_List create
   */
  export type Mods_ListCreateArgs = {
    /**
     * Select specific fields to fetch from the Mods_List
     * 
    **/
    select?: Mods_ListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_ListInclude | null
    /**
     * The data needed to create a Mods_List.
     * 
    **/
    data: XOR<Mods_ListCreateInput, Mods_ListUncheckedCreateInput>
  }


  /**
   * Mods_List createMany
   */
  export type Mods_ListCreateManyArgs = {
    /**
     * The data used to create many Mods_Lists.
     * 
    **/
    data: Enumerable<Mods_ListCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mods_List update
   */
  export type Mods_ListUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mods_List
     * 
    **/
    select?: Mods_ListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_ListInclude | null
    /**
     * The data needed to update a Mods_List.
     * 
    **/
    data: XOR<Mods_ListUpdateInput, Mods_ListUncheckedUpdateInput>
    /**
     * Choose, which Mods_List to update.
     * 
    **/
    where: Mods_ListWhereUniqueInput
  }


  /**
   * Mods_List updateMany
   */
  export type Mods_ListUpdateManyArgs = {
    /**
     * The data used to update Mods_Lists.
     * 
    **/
    data: XOR<Mods_ListUpdateManyMutationInput, Mods_ListUncheckedUpdateManyInput>
    /**
     * Filter which Mods_Lists to update
     * 
    **/
    where?: Mods_ListWhereInput
  }


  /**
   * Mods_List upsert
   */
  export type Mods_ListUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mods_List
     * 
    **/
    select?: Mods_ListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_ListInclude | null
    /**
     * The filter to search for the Mods_List to update in case it exists.
     * 
    **/
    where: Mods_ListWhereUniqueInput
    /**
     * In case the Mods_List found by the `where` argument doesn't exist, create a new Mods_List with this data.
     * 
    **/
    create: XOR<Mods_ListCreateInput, Mods_ListUncheckedCreateInput>
    /**
     * In case the Mods_List was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Mods_ListUpdateInput, Mods_ListUncheckedUpdateInput>
  }


  /**
   * Mods_List delete
   */
  export type Mods_ListDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mods_List
     * 
    **/
    select?: Mods_ListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_ListInclude | null
    /**
     * Filter which Mods_List to delete.
     * 
    **/
    where: Mods_ListWhereUniqueInput
  }


  /**
   * Mods_List deleteMany
   */
  export type Mods_ListDeleteManyArgs = {
    /**
     * Filter which Mods_Lists to delete
     * 
    **/
    where?: Mods_ListWhereInput
  }


  /**
   * Mods_List without action
   */
  export type Mods_ListArgs = {
    /**
     * Select specific fields to fetch from the Mods_List
     * 
    **/
    select?: Mods_ListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_ListInclude | null
  }



  /**
   * Model Mods_Favorits
   */


  export type AggregateMods_Favorits = {
    _count: Mods_FavoritsCountAggregateOutputType | null
    _avg: Mods_FavoritsAvgAggregateOutputType | null
    _sum: Mods_FavoritsSumAggregateOutputType | null
    _min: Mods_FavoritsMinAggregateOutputType | null
    _max: Mods_FavoritsMaxAggregateOutputType | null
  }

  export type Mods_FavoritsAvgAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
  }

  export type Mods_FavoritsSumAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
  }

  export type Mods_FavoritsMinAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
  }

  export type Mods_FavoritsMaxAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
  }

  export type Mods_FavoritsCountAggregateOutputType = {
    user_id: number
    mod_id: number
    _all: number
  }


  export type Mods_FavoritsAvgAggregateInputType = {
    user_id?: true
    mod_id?: true
  }

  export type Mods_FavoritsSumAggregateInputType = {
    user_id?: true
    mod_id?: true
  }

  export type Mods_FavoritsMinAggregateInputType = {
    user_id?: true
    mod_id?: true
  }

  export type Mods_FavoritsMaxAggregateInputType = {
    user_id?: true
    mod_id?: true
  }

  export type Mods_FavoritsCountAggregateInputType = {
    user_id?: true
    mod_id?: true
    _all?: true
  }

  export type Mods_FavoritsAggregateArgs = {
    /**
     * Filter which Mods_Favorits to aggregate.
     * 
    **/
    where?: Mods_FavoritsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods_Favorits to fetch.
     * 
    **/
    orderBy?: Enumerable<Mods_FavoritsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Mods_FavoritsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods_Favorits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods_Favorits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mods_Favorits
    **/
    _count?: true | Mods_FavoritsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mods_FavoritsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mods_FavoritsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mods_FavoritsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mods_FavoritsMaxAggregateInputType
  }

  export type GetMods_FavoritsAggregateType<T extends Mods_FavoritsAggregateArgs> = {
        [P in keyof T & keyof AggregateMods_Favorits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMods_Favorits[P]>
      : GetScalarType<T[P], AggregateMods_Favorits[P]>
  }




  export type Mods_FavoritsGroupByArgs = {
    where?: Mods_FavoritsWhereInput
    orderBy?: Enumerable<Mods_FavoritsOrderByWithAggregationInput>
    by: Array<Mods_FavoritsScalarFieldEnum>
    having?: Mods_FavoritsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mods_FavoritsCountAggregateInputType | true
    _avg?: Mods_FavoritsAvgAggregateInputType
    _sum?: Mods_FavoritsSumAggregateInputType
    _min?: Mods_FavoritsMinAggregateInputType
    _max?: Mods_FavoritsMaxAggregateInputType
  }


  export type Mods_FavoritsGroupByOutputType = {
    user_id: number
    mod_id: number
    _count: Mods_FavoritsCountAggregateOutputType | null
    _avg: Mods_FavoritsAvgAggregateOutputType | null
    _sum: Mods_FavoritsSumAggregateOutputType | null
    _min: Mods_FavoritsMinAggregateOutputType | null
    _max: Mods_FavoritsMaxAggregateOutputType | null
  }

  type GetMods_FavoritsGroupByPayload<T extends Mods_FavoritsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mods_FavoritsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mods_FavoritsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mods_FavoritsGroupByOutputType[P]>
            : GetScalarType<T[P], Mods_FavoritsGroupByOutputType[P]>
        }
      >
    >


  export type Mods_FavoritsSelect = {
    user_id?: boolean
    mod_id?: boolean
    User?: boolean | UserArgs
    Mod?: boolean | ModArgs
  }

  export type Mods_FavoritsInclude = {
    User?: boolean | UserArgs
    Mod?: boolean | ModArgs
  }

  export type Mods_FavoritsGetPayload<
    S extends boolean | null | undefined | Mods_FavoritsArgs,
    U = keyof S
      > = S extends true
        ? Mods_Favorits
    : S extends undefined
    ? never
    : S extends Mods_FavoritsArgs | Mods_FavoritsFindManyArgs
    ?'include' extends U
    ? Mods_Favorits  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'Mod' ? ModGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'Mod' ? ModGetPayload<S['select'][P]> :  P extends keyof Mods_Favorits ? Mods_Favorits[P] : never
  } 
    : Mods_Favorits
  : Mods_Favorits


  type Mods_FavoritsCountArgs = Merge<
    Omit<Mods_FavoritsFindManyArgs, 'select' | 'include'> & {
      select?: Mods_FavoritsCountAggregateInputType | true
    }
  >

  export interface Mods_FavoritsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Mods_Favorits that matches the filter.
     * @param {Mods_FavoritsFindUniqueArgs} args - Arguments to find a Mods_Favorits
     * @example
     * // Get one Mods_Favorits
     * const mods_Favorits = await prisma.mods_Favorits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Mods_FavoritsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Mods_FavoritsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mods_Favorits'> extends True ? CheckSelect<T, Prisma__Mods_FavoritsClient<Mods_Favorits>, Prisma__Mods_FavoritsClient<Mods_FavoritsGetPayload<T>>> : CheckSelect<T, Prisma__Mods_FavoritsClient<Mods_Favorits | null >, Prisma__Mods_FavoritsClient<Mods_FavoritsGetPayload<T> | null >>

    /**
     * Find the first Mods_Favorits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_FavoritsFindFirstArgs} args - Arguments to find a Mods_Favorits
     * @example
     * // Get one Mods_Favorits
     * const mods_Favorits = await prisma.mods_Favorits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Mods_FavoritsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Mods_FavoritsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mods_Favorits'> extends True ? CheckSelect<T, Prisma__Mods_FavoritsClient<Mods_Favorits>, Prisma__Mods_FavoritsClient<Mods_FavoritsGetPayload<T>>> : CheckSelect<T, Prisma__Mods_FavoritsClient<Mods_Favorits | null >, Prisma__Mods_FavoritsClient<Mods_FavoritsGetPayload<T> | null >>

    /**
     * Find zero or more Mods_Favorits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_FavoritsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mods_Favorits
     * const mods_Favorits = await prisma.mods_Favorits.findMany()
     * 
     * // Get first 10 Mods_Favorits
     * const mods_Favorits = await prisma.mods_Favorits.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const mods_FavoritsWithUser_idOnly = await prisma.mods_Favorits.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends Mods_FavoritsFindManyArgs>(
      args?: SelectSubset<T, Mods_FavoritsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Mods_Favorits>>, PrismaPromise<Array<Mods_FavoritsGetPayload<T>>>>

    /**
     * Create a Mods_Favorits.
     * @param {Mods_FavoritsCreateArgs} args - Arguments to create a Mods_Favorits.
     * @example
     * // Create one Mods_Favorits
     * const Mods_Favorits = await prisma.mods_Favorits.create({
     *   data: {
     *     // ... data to create a Mods_Favorits
     *   }
     * })
     * 
    **/
    create<T extends Mods_FavoritsCreateArgs>(
      args: SelectSubset<T, Mods_FavoritsCreateArgs>
    ): CheckSelect<T, Prisma__Mods_FavoritsClient<Mods_Favorits>, Prisma__Mods_FavoritsClient<Mods_FavoritsGetPayload<T>>>

    /**
     * Create many Mods_Favorits.
     *     @param {Mods_FavoritsCreateManyArgs} args - Arguments to create many Mods_Favorits.
     *     @example
     *     // Create many Mods_Favorits
     *     const mods_Favorits = await prisma.mods_Favorits.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Mods_FavoritsCreateManyArgs>(
      args?: SelectSubset<T, Mods_FavoritsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mods_Favorits.
     * @param {Mods_FavoritsDeleteArgs} args - Arguments to delete one Mods_Favorits.
     * @example
     * // Delete one Mods_Favorits
     * const Mods_Favorits = await prisma.mods_Favorits.delete({
     *   where: {
     *     // ... filter to delete one Mods_Favorits
     *   }
     * })
     * 
    **/
    delete<T extends Mods_FavoritsDeleteArgs>(
      args: SelectSubset<T, Mods_FavoritsDeleteArgs>
    ): CheckSelect<T, Prisma__Mods_FavoritsClient<Mods_Favorits>, Prisma__Mods_FavoritsClient<Mods_FavoritsGetPayload<T>>>

    /**
     * Update one Mods_Favorits.
     * @param {Mods_FavoritsUpdateArgs} args - Arguments to update one Mods_Favorits.
     * @example
     * // Update one Mods_Favorits
     * const mods_Favorits = await prisma.mods_Favorits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Mods_FavoritsUpdateArgs>(
      args: SelectSubset<T, Mods_FavoritsUpdateArgs>
    ): CheckSelect<T, Prisma__Mods_FavoritsClient<Mods_Favorits>, Prisma__Mods_FavoritsClient<Mods_FavoritsGetPayload<T>>>

    /**
     * Delete zero or more Mods_Favorits.
     * @param {Mods_FavoritsDeleteManyArgs} args - Arguments to filter Mods_Favorits to delete.
     * @example
     * // Delete a few Mods_Favorits
     * const { count } = await prisma.mods_Favorits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Mods_FavoritsDeleteManyArgs>(
      args?: SelectSubset<T, Mods_FavoritsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mods_Favorits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_FavoritsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mods_Favorits
     * const mods_Favorits = await prisma.mods_Favorits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Mods_FavoritsUpdateManyArgs>(
      args: SelectSubset<T, Mods_FavoritsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mods_Favorits.
     * @param {Mods_FavoritsUpsertArgs} args - Arguments to update or create a Mods_Favorits.
     * @example
     * // Update or create a Mods_Favorits
     * const mods_Favorits = await prisma.mods_Favorits.upsert({
     *   create: {
     *     // ... data to create a Mods_Favorits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mods_Favorits we want to update
     *   }
     * })
    **/
    upsert<T extends Mods_FavoritsUpsertArgs>(
      args: SelectSubset<T, Mods_FavoritsUpsertArgs>
    ): CheckSelect<T, Prisma__Mods_FavoritsClient<Mods_Favorits>, Prisma__Mods_FavoritsClient<Mods_FavoritsGetPayload<T>>>

    /**
     * Count the number of Mods_Favorits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_FavoritsCountArgs} args - Arguments to filter Mods_Favorits to count.
     * @example
     * // Count the number of Mods_Favorits
     * const count = await prisma.mods_Favorits.count({
     *   where: {
     *     // ... the filter for the Mods_Favorits we want to count
     *   }
     * })
    **/
    count<T extends Mods_FavoritsCountArgs>(
      args?: Subset<T, Mods_FavoritsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mods_FavoritsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mods_Favorits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_FavoritsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mods_FavoritsAggregateArgs>(args: Subset<T, Mods_FavoritsAggregateArgs>): PrismaPromise<GetMods_FavoritsAggregateType<T>>

    /**
     * Group by Mods_Favorits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mods_FavoritsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mods_FavoritsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mods_FavoritsGroupByArgs['orderBy'] }
        : { orderBy?: Mods_FavoritsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mods_FavoritsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMods_FavoritsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mods_Favorits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Mods_FavoritsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Mod<T extends ModArgs = {}>(args?: Subset<T, ModArgs>): CheckSelect<T, Prisma__ModClient<Mod | null >, Prisma__ModClient<ModGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Mods_Favorits findUnique
   */
  export type Mods_FavoritsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Mods_Favorits
     * 
    **/
    select?: Mods_FavoritsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_FavoritsInclude | null
    /**
     * Throw an Error if a Mods_Favorits can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mods_Favorits to fetch.
     * 
    **/
    where: Mods_FavoritsWhereUniqueInput
  }


  /**
   * Mods_Favorits findFirst
   */
  export type Mods_FavoritsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Mods_Favorits
     * 
    **/
    select?: Mods_FavoritsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_FavoritsInclude | null
    /**
     * Throw an Error if a Mods_Favorits can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mods_Favorits to fetch.
     * 
    **/
    where?: Mods_FavoritsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods_Favorits to fetch.
     * 
    **/
    orderBy?: Enumerable<Mods_FavoritsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mods_Favorits.
     * 
    **/
    cursor?: Mods_FavoritsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods_Favorits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods_Favorits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mods_Favorits.
     * 
    **/
    distinct?: Enumerable<Mods_FavoritsScalarFieldEnum>
  }


  /**
   * Mods_Favorits findMany
   */
  export type Mods_FavoritsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mods_Favorits
     * 
    **/
    select?: Mods_FavoritsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_FavoritsInclude | null
    /**
     * Filter, which Mods_Favorits to fetch.
     * 
    **/
    where?: Mods_FavoritsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods_Favorits to fetch.
     * 
    **/
    orderBy?: Enumerable<Mods_FavoritsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mods_Favorits.
     * 
    **/
    cursor?: Mods_FavoritsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods_Favorits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods_Favorits.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mods_FavoritsScalarFieldEnum>
  }


  /**
   * Mods_Favorits create
   */
  export type Mods_FavoritsCreateArgs = {
    /**
     * Select specific fields to fetch from the Mods_Favorits
     * 
    **/
    select?: Mods_FavoritsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_FavoritsInclude | null
    /**
     * The data needed to create a Mods_Favorits.
     * 
    **/
    data: XOR<Mods_FavoritsCreateInput, Mods_FavoritsUncheckedCreateInput>
  }


  /**
   * Mods_Favorits createMany
   */
  export type Mods_FavoritsCreateManyArgs = {
    /**
     * The data used to create many Mods_Favorits.
     * 
    **/
    data: Enumerable<Mods_FavoritsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mods_Favorits update
   */
  export type Mods_FavoritsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mods_Favorits
     * 
    **/
    select?: Mods_FavoritsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_FavoritsInclude | null
    /**
     * The data needed to update a Mods_Favorits.
     * 
    **/
    data: XOR<Mods_FavoritsUpdateInput, Mods_FavoritsUncheckedUpdateInput>
    /**
     * Choose, which Mods_Favorits to update.
     * 
    **/
    where: Mods_FavoritsWhereUniqueInput
  }


  /**
   * Mods_Favorits updateMany
   */
  export type Mods_FavoritsUpdateManyArgs = {
    /**
     * The data used to update Mods_Favorits.
     * 
    **/
    data: XOR<Mods_FavoritsUpdateManyMutationInput, Mods_FavoritsUncheckedUpdateManyInput>
    /**
     * Filter which Mods_Favorits to update
     * 
    **/
    where?: Mods_FavoritsWhereInput
  }


  /**
   * Mods_Favorits upsert
   */
  export type Mods_FavoritsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mods_Favorits
     * 
    **/
    select?: Mods_FavoritsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_FavoritsInclude | null
    /**
     * The filter to search for the Mods_Favorits to update in case it exists.
     * 
    **/
    where: Mods_FavoritsWhereUniqueInput
    /**
     * In case the Mods_Favorits found by the `where` argument doesn't exist, create a new Mods_Favorits with this data.
     * 
    **/
    create: XOR<Mods_FavoritsCreateInput, Mods_FavoritsUncheckedCreateInput>
    /**
     * In case the Mods_Favorits was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Mods_FavoritsUpdateInput, Mods_FavoritsUncheckedUpdateInput>
  }


  /**
   * Mods_Favorits delete
   */
  export type Mods_FavoritsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mods_Favorits
     * 
    **/
    select?: Mods_FavoritsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_FavoritsInclude | null
    /**
     * Filter which Mods_Favorits to delete.
     * 
    **/
    where: Mods_FavoritsWhereUniqueInput
  }


  /**
   * Mods_Favorits deleteMany
   */
  export type Mods_FavoritsDeleteManyArgs = {
    /**
     * Filter which Mods_Favorits to delete
     * 
    **/
    where?: Mods_FavoritsWhereInput
  }


  /**
   * Mods_Favorits without action
   */
  export type Mods_FavoritsArgs = {
    /**
     * Select specific fields to fetch from the Mods_Favorits
     * 
    **/
    select?: Mods_FavoritsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mods_FavoritsInclude | null
  }



  /**
   * Model Mod_Subscribers
   */


  export type AggregateMod_Subscribers = {
    _count: Mod_SubscribersCountAggregateOutputType | null
    _avg: Mod_SubscribersAvgAggregateOutputType | null
    _sum: Mod_SubscribersSumAggregateOutputType | null
    _min: Mod_SubscribersMinAggregateOutputType | null
    _max: Mod_SubscribersMaxAggregateOutputType | null
  }

  export type Mod_SubscribersAvgAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
  }

  export type Mod_SubscribersSumAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
  }

  export type Mod_SubscribersMinAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
  }

  export type Mod_SubscribersMaxAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
  }

  export type Mod_SubscribersCountAggregateOutputType = {
    user_id: number
    mod_id: number
    _all: number
  }


  export type Mod_SubscribersAvgAggregateInputType = {
    user_id?: true
    mod_id?: true
  }

  export type Mod_SubscribersSumAggregateInputType = {
    user_id?: true
    mod_id?: true
  }

  export type Mod_SubscribersMinAggregateInputType = {
    user_id?: true
    mod_id?: true
  }

  export type Mod_SubscribersMaxAggregateInputType = {
    user_id?: true
    mod_id?: true
  }

  export type Mod_SubscribersCountAggregateInputType = {
    user_id?: true
    mod_id?: true
    _all?: true
  }

  export type Mod_SubscribersAggregateArgs = {
    /**
     * Filter which Mod_Subscribers to aggregate.
     * 
    **/
    where?: Mod_SubscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Subscribers to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_SubscribersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Mod_SubscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Subscribers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Subscribers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mod_Subscribers
    **/
    _count?: true | Mod_SubscribersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mod_SubscribersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mod_SubscribersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mod_SubscribersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mod_SubscribersMaxAggregateInputType
  }

  export type GetMod_SubscribersAggregateType<T extends Mod_SubscribersAggregateArgs> = {
        [P in keyof T & keyof AggregateMod_Subscribers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMod_Subscribers[P]>
      : GetScalarType<T[P], AggregateMod_Subscribers[P]>
  }




  export type Mod_SubscribersGroupByArgs = {
    where?: Mod_SubscribersWhereInput
    orderBy?: Enumerable<Mod_SubscribersOrderByWithAggregationInput>
    by: Array<Mod_SubscribersScalarFieldEnum>
    having?: Mod_SubscribersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mod_SubscribersCountAggregateInputType | true
    _avg?: Mod_SubscribersAvgAggregateInputType
    _sum?: Mod_SubscribersSumAggregateInputType
    _min?: Mod_SubscribersMinAggregateInputType
    _max?: Mod_SubscribersMaxAggregateInputType
  }


  export type Mod_SubscribersGroupByOutputType = {
    user_id: number
    mod_id: number
    _count: Mod_SubscribersCountAggregateOutputType | null
    _avg: Mod_SubscribersAvgAggregateOutputType | null
    _sum: Mod_SubscribersSumAggregateOutputType | null
    _min: Mod_SubscribersMinAggregateOutputType | null
    _max: Mod_SubscribersMaxAggregateOutputType | null
  }

  type GetMod_SubscribersGroupByPayload<T extends Mod_SubscribersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mod_SubscribersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mod_SubscribersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mod_SubscribersGroupByOutputType[P]>
            : GetScalarType<T[P], Mod_SubscribersGroupByOutputType[P]>
        }
      >
    >


  export type Mod_SubscribersSelect = {
    user_id?: boolean
    mod_id?: boolean
    User?: boolean | UserArgs
    Mod?: boolean | ModArgs
  }

  export type Mod_SubscribersInclude = {
    User?: boolean | UserArgs
    Mod?: boolean | ModArgs
  }

  export type Mod_SubscribersGetPayload<
    S extends boolean | null | undefined | Mod_SubscribersArgs,
    U = keyof S
      > = S extends true
        ? Mod_Subscribers
    : S extends undefined
    ? never
    : S extends Mod_SubscribersArgs | Mod_SubscribersFindManyArgs
    ?'include' extends U
    ? Mod_Subscribers  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'Mod' ? ModGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'Mod' ? ModGetPayload<S['select'][P]> :  P extends keyof Mod_Subscribers ? Mod_Subscribers[P] : never
  } 
    : Mod_Subscribers
  : Mod_Subscribers


  type Mod_SubscribersCountArgs = Merge<
    Omit<Mod_SubscribersFindManyArgs, 'select' | 'include'> & {
      select?: Mod_SubscribersCountAggregateInputType | true
    }
  >

  export interface Mod_SubscribersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Mod_Subscribers that matches the filter.
     * @param {Mod_SubscribersFindUniqueArgs} args - Arguments to find a Mod_Subscribers
     * @example
     * // Get one Mod_Subscribers
     * const mod_Subscribers = await prisma.mod_Subscribers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Mod_SubscribersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Mod_SubscribersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mod_Subscribers'> extends True ? CheckSelect<T, Prisma__Mod_SubscribersClient<Mod_Subscribers>, Prisma__Mod_SubscribersClient<Mod_SubscribersGetPayload<T>>> : CheckSelect<T, Prisma__Mod_SubscribersClient<Mod_Subscribers | null >, Prisma__Mod_SubscribersClient<Mod_SubscribersGetPayload<T> | null >>

    /**
     * Find the first Mod_Subscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_SubscribersFindFirstArgs} args - Arguments to find a Mod_Subscribers
     * @example
     * // Get one Mod_Subscribers
     * const mod_Subscribers = await prisma.mod_Subscribers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Mod_SubscribersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Mod_SubscribersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mod_Subscribers'> extends True ? CheckSelect<T, Prisma__Mod_SubscribersClient<Mod_Subscribers>, Prisma__Mod_SubscribersClient<Mod_SubscribersGetPayload<T>>> : CheckSelect<T, Prisma__Mod_SubscribersClient<Mod_Subscribers | null >, Prisma__Mod_SubscribersClient<Mod_SubscribersGetPayload<T> | null >>

    /**
     * Find zero or more Mod_Subscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_SubscribersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mod_Subscribers
     * const mod_Subscribers = await prisma.mod_Subscribers.findMany()
     * 
     * // Get first 10 Mod_Subscribers
     * const mod_Subscribers = await prisma.mod_Subscribers.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const mod_SubscribersWithUser_idOnly = await prisma.mod_Subscribers.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends Mod_SubscribersFindManyArgs>(
      args?: SelectSubset<T, Mod_SubscribersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Mod_Subscribers>>, PrismaPromise<Array<Mod_SubscribersGetPayload<T>>>>

    /**
     * Create a Mod_Subscribers.
     * @param {Mod_SubscribersCreateArgs} args - Arguments to create a Mod_Subscribers.
     * @example
     * // Create one Mod_Subscribers
     * const Mod_Subscribers = await prisma.mod_Subscribers.create({
     *   data: {
     *     // ... data to create a Mod_Subscribers
     *   }
     * })
     * 
    **/
    create<T extends Mod_SubscribersCreateArgs>(
      args: SelectSubset<T, Mod_SubscribersCreateArgs>
    ): CheckSelect<T, Prisma__Mod_SubscribersClient<Mod_Subscribers>, Prisma__Mod_SubscribersClient<Mod_SubscribersGetPayload<T>>>

    /**
     * Create many Mod_Subscribers.
     *     @param {Mod_SubscribersCreateManyArgs} args - Arguments to create many Mod_Subscribers.
     *     @example
     *     // Create many Mod_Subscribers
     *     const mod_Subscribers = await prisma.mod_Subscribers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Mod_SubscribersCreateManyArgs>(
      args?: SelectSubset<T, Mod_SubscribersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mod_Subscribers.
     * @param {Mod_SubscribersDeleteArgs} args - Arguments to delete one Mod_Subscribers.
     * @example
     * // Delete one Mod_Subscribers
     * const Mod_Subscribers = await prisma.mod_Subscribers.delete({
     *   where: {
     *     // ... filter to delete one Mod_Subscribers
     *   }
     * })
     * 
    **/
    delete<T extends Mod_SubscribersDeleteArgs>(
      args: SelectSubset<T, Mod_SubscribersDeleteArgs>
    ): CheckSelect<T, Prisma__Mod_SubscribersClient<Mod_Subscribers>, Prisma__Mod_SubscribersClient<Mod_SubscribersGetPayload<T>>>

    /**
     * Update one Mod_Subscribers.
     * @param {Mod_SubscribersUpdateArgs} args - Arguments to update one Mod_Subscribers.
     * @example
     * // Update one Mod_Subscribers
     * const mod_Subscribers = await prisma.mod_Subscribers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Mod_SubscribersUpdateArgs>(
      args: SelectSubset<T, Mod_SubscribersUpdateArgs>
    ): CheckSelect<T, Prisma__Mod_SubscribersClient<Mod_Subscribers>, Prisma__Mod_SubscribersClient<Mod_SubscribersGetPayload<T>>>

    /**
     * Delete zero or more Mod_Subscribers.
     * @param {Mod_SubscribersDeleteManyArgs} args - Arguments to filter Mod_Subscribers to delete.
     * @example
     * // Delete a few Mod_Subscribers
     * const { count } = await prisma.mod_Subscribers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Mod_SubscribersDeleteManyArgs>(
      args?: SelectSubset<T, Mod_SubscribersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mod_Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_SubscribersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mod_Subscribers
     * const mod_Subscribers = await prisma.mod_Subscribers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Mod_SubscribersUpdateManyArgs>(
      args: SelectSubset<T, Mod_SubscribersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mod_Subscribers.
     * @param {Mod_SubscribersUpsertArgs} args - Arguments to update or create a Mod_Subscribers.
     * @example
     * // Update or create a Mod_Subscribers
     * const mod_Subscribers = await prisma.mod_Subscribers.upsert({
     *   create: {
     *     // ... data to create a Mod_Subscribers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mod_Subscribers we want to update
     *   }
     * })
    **/
    upsert<T extends Mod_SubscribersUpsertArgs>(
      args: SelectSubset<T, Mod_SubscribersUpsertArgs>
    ): CheckSelect<T, Prisma__Mod_SubscribersClient<Mod_Subscribers>, Prisma__Mod_SubscribersClient<Mod_SubscribersGetPayload<T>>>

    /**
     * Count the number of Mod_Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_SubscribersCountArgs} args - Arguments to filter Mod_Subscribers to count.
     * @example
     * // Count the number of Mod_Subscribers
     * const count = await prisma.mod_Subscribers.count({
     *   where: {
     *     // ... the filter for the Mod_Subscribers we want to count
     *   }
     * })
    **/
    count<T extends Mod_SubscribersCountArgs>(
      args?: Subset<T, Mod_SubscribersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mod_SubscribersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mod_Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_SubscribersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mod_SubscribersAggregateArgs>(args: Subset<T, Mod_SubscribersAggregateArgs>): PrismaPromise<GetMod_SubscribersAggregateType<T>>

    /**
     * Group by Mod_Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_SubscribersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mod_SubscribersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mod_SubscribersGroupByArgs['orderBy'] }
        : { orderBy?: Mod_SubscribersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mod_SubscribersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMod_SubscribersGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mod_Subscribers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Mod_SubscribersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Mod<T extends ModArgs = {}>(args?: Subset<T, ModArgs>): CheckSelect<T, Prisma__ModClient<Mod | null >, Prisma__ModClient<ModGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Mod_Subscribers findUnique
   */
  export type Mod_SubscribersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Mod_Subscribers
     * 
    **/
    select?: Mod_SubscribersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_SubscribersInclude | null
    /**
     * Throw an Error if a Mod_Subscribers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod_Subscribers to fetch.
     * 
    **/
    where: Mod_SubscribersWhereUniqueInput
  }


  /**
   * Mod_Subscribers findFirst
   */
  export type Mod_SubscribersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Mod_Subscribers
     * 
    **/
    select?: Mod_SubscribersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_SubscribersInclude | null
    /**
     * Throw an Error if a Mod_Subscribers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod_Subscribers to fetch.
     * 
    **/
    where?: Mod_SubscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Subscribers to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_SubscribersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mod_Subscribers.
     * 
    **/
    cursor?: Mod_SubscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Subscribers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Subscribers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mod_Subscribers.
     * 
    **/
    distinct?: Enumerable<Mod_SubscribersScalarFieldEnum>
  }


  /**
   * Mod_Subscribers findMany
   */
  export type Mod_SubscribersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mod_Subscribers
     * 
    **/
    select?: Mod_SubscribersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_SubscribersInclude | null
    /**
     * Filter, which Mod_Subscribers to fetch.
     * 
    **/
    where?: Mod_SubscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Subscribers to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_SubscribersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mod_Subscribers.
     * 
    **/
    cursor?: Mod_SubscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Subscribers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Subscribers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mod_SubscribersScalarFieldEnum>
  }


  /**
   * Mod_Subscribers create
   */
  export type Mod_SubscribersCreateArgs = {
    /**
     * Select specific fields to fetch from the Mod_Subscribers
     * 
    **/
    select?: Mod_SubscribersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_SubscribersInclude | null
    /**
     * The data needed to create a Mod_Subscribers.
     * 
    **/
    data: XOR<Mod_SubscribersCreateInput, Mod_SubscribersUncheckedCreateInput>
  }


  /**
   * Mod_Subscribers createMany
   */
  export type Mod_SubscribersCreateManyArgs = {
    /**
     * The data used to create many Mod_Subscribers.
     * 
    **/
    data: Enumerable<Mod_SubscribersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mod_Subscribers update
   */
  export type Mod_SubscribersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mod_Subscribers
     * 
    **/
    select?: Mod_SubscribersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_SubscribersInclude | null
    /**
     * The data needed to update a Mod_Subscribers.
     * 
    **/
    data: XOR<Mod_SubscribersUpdateInput, Mod_SubscribersUncheckedUpdateInput>
    /**
     * Choose, which Mod_Subscribers to update.
     * 
    **/
    where: Mod_SubscribersWhereUniqueInput
  }


  /**
   * Mod_Subscribers updateMany
   */
  export type Mod_SubscribersUpdateManyArgs = {
    /**
     * The data used to update Mod_Subscribers.
     * 
    **/
    data: XOR<Mod_SubscribersUpdateManyMutationInput, Mod_SubscribersUncheckedUpdateManyInput>
    /**
     * Filter which Mod_Subscribers to update
     * 
    **/
    where?: Mod_SubscribersWhereInput
  }


  /**
   * Mod_Subscribers upsert
   */
  export type Mod_SubscribersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mod_Subscribers
     * 
    **/
    select?: Mod_SubscribersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_SubscribersInclude | null
    /**
     * The filter to search for the Mod_Subscribers to update in case it exists.
     * 
    **/
    where: Mod_SubscribersWhereUniqueInput
    /**
     * In case the Mod_Subscribers found by the `where` argument doesn't exist, create a new Mod_Subscribers with this data.
     * 
    **/
    create: XOR<Mod_SubscribersCreateInput, Mod_SubscribersUncheckedCreateInput>
    /**
     * In case the Mod_Subscribers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Mod_SubscribersUpdateInput, Mod_SubscribersUncheckedUpdateInput>
  }


  /**
   * Mod_Subscribers delete
   */
  export type Mod_SubscribersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mod_Subscribers
     * 
    **/
    select?: Mod_SubscribersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_SubscribersInclude | null
    /**
     * Filter which Mod_Subscribers to delete.
     * 
    **/
    where: Mod_SubscribersWhereUniqueInput
  }


  /**
   * Mod_Subscribers deleteMany
   */
  export type Mod_SubscribersDeleteManyArgs = {
    /**
     * Filter which Mod_Subscribers to delete
     * 
    **/
    where?: Mod_SubscribersWhereInput
  }


  /**
   * Mod_Subscribers without action
   */
  export type Mod_SubscribersArgs = {
    /**
     * Select specific fields to fetch from the Mod_Subscribers
     * 
    **/
    select?: Mod_SubscribersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_SubscribersInclude | null
  }



  /**
   * Model Mod_Download
   */


  export type AggregateMod_Download = {
    _count: Mod_DownloadCountAggregateOutputType | null
    _avg: Mod_DownloadAvgAggregateOutputType | null
    _sum: Mod_DownloadSumAggregateOutputType | null
    _min: Mod_DownloadMinAggregateOutputType | null
    _max: Mod_DownloadMaxAggregateOutputType | null
  }

  export type Mod_DownloadAvgAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
    version_id: number | null
  }

  export type Mod_DownloadSumAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
    version_id: number | null
  }

  export type Mod_DownloadMinAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
    version_id: number | null
  }

  export type Mod_DownloadMaxAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
    version_id: number | null
  }

  export type Mod_DownloadCountAggregateOutputType = {
    user_id: number
    mod_id: number
    version_id: number
    _all: number
  }


  export type Mod_DownloadAvgAggregateInputType = {
    user_id?: true
    mod_id?: true
    version_id?: true
  }

  export type Mod_DownloadSumAggregateInputType = {
    user_id?: true
    mod_id?: true
    version_id?: true
  }

  export type Mod_DownloadMinAggregateInputType = {
    user_id?: true
    mod_id?: true
    version_id?: true
  }

  export type Mod_DownloadMaxAggregateInputType = {
    user_id?: true
    mod_id?: true
    version_id?: true
  }

  export type Mod_DownloadCountAggregateInputType = {
    user_id?: true
    mod_id?: true
    version_id?: true
    _all?: true
  }

  export type Mod_DownloadAggregateArgs = {
    /**
     * Filter which Mod_Download to aggregate.
     * 
    **/
    where?: Mod_DownloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Downloads to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_DownloadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Mod_DownloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Downloads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Downloads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mod_Downloads
    **/
    _count?: true | Mod_DownloadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mod_DownloadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mod_DownloadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mod_DownloadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mod_DownloadMaxAggregateInputType
  }

  export type GetMod_DownloadAggregateType<T extends Mod_DownloadAggregateArgs> = {
        [P in keyof T & keyof AggregateMod_Download]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMod_Download[P]>
      : GetScalarType<T[P], AggregateMod_Download[P]>
  }




  export type Mod_DownloadGroupByArgs = {
    where?: Mod_DownloadWhereInput
    orderBy?: Enumerable<Mod_DownloadOrderByWithAggregationInput>
    by: Array<Mod_DownloadScalarFieldEnum>
    having?: Mod_DownloadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mod_DownloadCountAggregateInputType | true
    _avg?: Mod_DownloadAvgAggregateInputType
    _sum?: Mod_DownloadSumAggregateInputType
    _min?: Mod_DownloadMinAggregateInputType
    _max?: Mod_DownloadMaxAggregateInputType
  }


  export type Mod_DownloadGroupByOutputType = {
    user_id: number
    mod_id: number
    version_id: number
    _count: Mod_DownloadCountAggregateOutputType | null
    _avg: Mod_DownloadAvgAggregateOutputType | null
    _sum: Mod_DownloadSumAggregateOutputType | null
    _min: Mod_DownloadMinAggregateOutputType | null
    _max: Mod_DownloadMaxAggregateOutputType | null
  }

  type GetMod_DownloadGroupByPayload<T extends Mod_DownloadGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mod_DownloadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mod_DownloadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mod_DownloadGroupByOutputType[P]>
            : GetScalarType<T[P], Mod_DownloadGroupByOutputType[P]>
        }
      >
    >


  export type Mod_DownloadSelect = {
    user_id?: boolean
    mod_id?: boolean
    version_id?: boolean
    User?: boolean | UserArgs
    Mod?: boolean | ModArgs
    Version?: boolean | Mod_VersionArgs
  }

  export type Mod_DownloadInclude = {
    User?: boolean | UserArgs
    Mod?: boolean | ModArgs
    Version?: boolean | Mod_VersionArgs
  }

  export type Mod_DownloadGetPayload<
    S extends boolean | null | undefined | Mod_DownloadArgs,
    U = keyof S
      > = S extends true
        ? Mod_Download
    : S extends undefined
    ? never
    : S extends Mod_DownloadArgs | Mod_DownloadFindManyArgs
    ?'include' extends U
    ? Mod_Download  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'Mod' ? ModGetPayload<S['include'][P]> :
        P extends 'Version' ? Mod_VersionGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'Mod' ? ModGetPayload<S['select'][P]> :
        P extends 'Version' ? Mod_VersionGetPayload<S['select'][P]> :  P extends keyof Mod_Download ? Mod_Download[P] : never
  } 
    : Mod_Download
  : Mod_Download


  type Mod_DownloadCountArgs = Merge<
    Omit<Mod_DownloadFindManyArgs, 'select' | 'include'> & {
      select?: Mod_DownloadCountAggregateInputType | true
    }
  >

  export interface Mod_DownloadDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Mod_Download that matches the filter.
     * @param {Mod_DownloadFindUniqueArgs} args - Arguments to find a Mod_Download
     * @example
     * // Get one Mod_Download
     * const mod_Download = await prisma.mod_Download.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Mod_DownloadFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Mod_DownloadFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mod_Download'> extends True ? CheckSelect<T, Prisma__Mod_DownloadClient<Mod_Download>, Prisma__Mod_DownloadClient<Mod_DownloadGetPayload<T>>> : CheckSelect<T, Prisma__Mod_DownloadClient<Mod_Download | null >, Prisma__Mod_DownloadClient<Mod_DownloadGetPayload<T> | null >>

    /**
     * Find the first Mod_Download that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_DownloadFindFirstArgs} args - Arguments to find a Mod_Download
     * @example
     * // Get one Mod_Download
     * const mod_Download = await prisma.mod_Download.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Mod_DownloadFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Mod_DownloadFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mod_Download'> extends True ? CheckSelect<T, Prisma__Mod_DownloadClient<Mod_Download>, Prisma__Mod_DownloadClient<Mod_DownloadGetPayload<T>>> : CheckSelect<T, Prisma__Mod_DownloadClient<Mod_Download | null >, Prisma__Mod_DownloadClient<Mod_DownloadGetPayload<T> | null >>

    /**
     * Find zero or more Mod_Downloads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_DownloadFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mod_Downloads
     * const mod_Downloads = await prisma.mod_Download.findMany()
     * 
     * // Get first 10 Mod_Downloads
     * const mod_Downloads = await prisma.mod_Download.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const mod_DownloadWithUser_idOnly = await prisma.mod_Download.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends Mod_DownloadFindManyArgs>(
      args?: SelectSubset<T, Mod_DownloadFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Mod_Download>>, PrismaPromise<Array<Mod_DownloadGetPayload<T>>>>

    /**
     * Create a Mod_Download.
     * @param {Mod_DownloadCreateArgs} args - Arguments to create a Mod_Download.
     * @example
     * // Create one Mod_Download
     * const Mod_Download = await prisma.mod_Download.create({
     *   data: {
     *     // ... data to create a Mod_Download
     *   }
     * })
     * 
    **/
    create<T extends Mod_DownloadCreateArgs>(
      args: SelectSubset<T, Mod_DownloadCreateArgs>
    ): CheckSelect<T, Prisma__Mod_DownloadClient<Mod_Download>, Prisma__Mod_DownloadClient<Mod_DownloadGetPayload<T>>>

    /**
     * Create many Mod_Downloads.
     *     @param {Mod_DownloadCreateManyArgs} args - Arguments to create many Mod_Downloads.
     *     @example
     *     // Create many Mod_Downloads
     *     const mod_Download = await prisma.mod_Download.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Mod_DownloadCreateManyArgs>(
      args?: SelectSubset<T, Mod_DownloadCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mod_Download.
     * @param {Mod_DownloadDeleteArgs} args - Arguments to delete one Mod_Download.
     * @example
     * // Delete one Mod_Download
     * const Mod_Download = await prisma.mod_Download.delete({
     *   where: {
     *     // ... filter to delete one Mod_Download
     *   }
     * })
     * 
    **/
    delete<T extends Mod_DownloadDeleteArgs>(
      args: SelectSubset<T, Mod_DownloadDeleteArgs>
    ): CheckSelect<T, Prisma__Mod_DownloadClient<Mod_Download>, Prisma__Mod_DownloadClient<Mod_DownloadGetPayload<T>>>

    /**
     * Update one Mod_Download.
     * @param {Mod_DownloadUpdateArgs} args - Arguments to update one Mod_Download.
     * @example
     * // Update one Mod_Download
     * const mod_Download = await prisma.mod_Download.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Mod_DownloadUpdateArgs>(
      args: SelectSubset<T, Mod_DownloadUpdateArgs>
    ): CheckSelect<T, Prisma__Mod_DownloadClient<Mod_Download>, Prisma__Mod_DownloadClient<Mod_DownloadGetPayload<T>>>

    /**
     * Delete zero or more Mod_Downloads.
     * @param {Mod_DownloadDeleteManyArgs} args - Arguments to filter Mod_Downloads to delete.
     * @example
     * // Delete a few Mod_Downloads
     * const { count } = await prisma.mod_Download.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Mod_DownloadDeleteManyArgs>(
      args?: SelectSubset<T, Mod_DownloadDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mod_Downloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_DownloadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mod_Downloads
     * const mod_Download = await prisma.mod_Download.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Mod_DownloadUpdateManyArgs>(
      args: SelectSubset<T, Mod_DownloadUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mod_Download.
     * @param {Mod_DownloadUpsertArgs} args - Arguments to update or create a Mod_Download.
     * @example
     * // Update or create a Mod_Download
     * const mod_Download = await prisma.mod_Download.upsert({
     *   create: {
     *     // ... data to create a Mod_Download
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mod_Download we want to update
     *   }
     * })
    **/
    upsert<T extends Mod_DownloadUpsertArgs>(
      args: SelectSubset<T, Mod_DownloadUpsertArgs>
    ): CheckSelect<T, Prisma__Mod_DownloadClient<Mod_Download>, Prisma__Mod_DownloadClient<Mod_DownloadGetPayload<T>>>

    /**
     * Count the number of Mod_Downloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_DownloadCountArgs} args - Arguments to filter Mod_Downloads to count.
     * @example
     * // Count the number of Mod_Downloads
     * const count = await prisma.mod_Download.count({
     *   where: {
     *     // ... the filter for the Mod_Downloads we want to count
     *   }
     * })
    **/
    count<T extends Mod_DownloadCountArgs>(
      args?: Subset<T, Mod_DownloadCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mod_DownloadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mod_Download.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_DownloadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mod_DownloadAggregateArgs>(args: Subset<T, Mod_DownloadAggregateArgs>): PrismaPromise<GetMod_DownloadAggregateType<T>>

    /**
     * Group by Mod_Download.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mod_DownloadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mod_DownloadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mod_DownloadGroupByArgs['orderBy'] }
        : { orderBy?: Mod_DownloadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mod_DownloadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMod_DownloadGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mod_Download.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Mod_DownloadClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Mod<T extends ModArgs = {}>(args?: Subset<T, ModArgs>): CheckSelect<T, Prisma__ModClient<Mod | null >, Prisma__ModClient<ModGetPayload<T> | null >>;

    Version<T extends Mod_VersionArgs = {}>(args?: Subset<T, Mod_VersionArgs>): CheckSelect<T, Prisma__Mod_VersionClient<Mod_Version | null >, Prisma__Mod_VersionClient<Mod_VersionGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Mod_Download findUnique
   */
  export type Mod_DownloadFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Mod_Download
     * 
    **/
    select?: Mod_DownloadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_DownloadInclude | null
    /**
     * Throw an Error if a Mod_Download can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod_Download to fetch.
     * 
    **/
    where: Mod_DownloadWhereUniqueInput
  }


  /**
   * Mod_Download findFirst
   */
  export type Mod_DownloadFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Mod_Download
     * 
    **/
    select?: Mod_DownloadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_DownloadInclude | null
    /**
     * Throw an Error if a Mod_Download can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mod_Download to fetch.
     * 
    **/
    where?: Mod_DownloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Downloads to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_DownloadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mod_Downloads.
     * 
    **/
    cursor?: Mod_DownloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Downloads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Downloads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mod_Downloads.
     * 
    **/
    distinct?: Enumerable<Mod_DownloadScalarFieldEnum>
  }


  /**
   * Mod_Download findMany
   */
  export type Mod_DownloadFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mod_Download
     * 
    **/
    select?: Mod_DownloadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_DownloadInclude | null
    /**
     * Filter, which Mod_Downloads to fetch.
     * 
    **/
    where?: Mod_DownloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mod_Downloads to fetch.
     * 
    **/
    orderBy?: Enumerable<Mod_DownloadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mod_Downloads.
     * 
    **/
    cursor?: Mod_DownloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mod_Downloads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mod_Downloads.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Mod_DownloadScalarFieldEnum>
  }


  /**
   * Mod_Download create
   */
  export type Mod_DownloadCreateArgs = {
    /**
     * Select specific fields to fetch from the Mod_Download
     * 
    **/
    select?: Mod_DownloadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_DownloadInclude | null
    /**
     * The data needed to create a Mod_Download.
     * 
    **/
    data: XOR<Mod_DownloadCreateInput, Mod_DownloadUncheckedCreateInput>
  }


  /**
   * Mod_Download createMany
   */
  export type Mod_DownloadCreateManyArgs = {
    /**
     * The data used to create many Mod_Downloads.
     * 
    **/
    data: Enumerable<Mod_DownloadCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mod_Download update
   */
  export type Mod_DownloadUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mod_Download
     * 
    **/
    select?: Mod_DownloadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_DownloadInclude | null
    /**
     * The data needed to update a Mod_Download.
     * 
    **/
    data: XOR<Mod_DownloadUpdateInput, Mod_DownloadUncheckedUpdateInput>
    /**
     * Choose, which Mod_Download to update.
     * 
    **/
    where: Mod_DownloadWhereUniqueInput
  }


  /**
   * Mod_Download updateMany
   */
  export type Mod_DownloadUpdateManyArgs = {
    /**
     * The data used to update Mod_Downloads.
     * 
    **/
    data: XOR<Mod_DownloadUpdateManyMutationInput, Mod_DownloadUncheckedUpdateManyInput>
    /**
     * Filter which Mod_Downloads to update
     * 
    **/
    where?: Mod_DownloadWhereInput
  }


  /**
   * Mod_Download upsert
   */
  export type Mod_DownloadUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mod_Download
     * 
    **/
    select?: Mod_DownloadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_DownloadInclude | null
    /**
     * The filter to search for the Mod_Download to update in case it exists.
     * 
    **/
    where: Mod_DownloadWhereUniqueInput
    /**
     * In case the Mod_Download found by the `where` argument doesn't exist, create a new Mod_Download with this data.
     * 
    **/
    create: XOR<Mod_DownloadCreateInput, Mod_DownloadUncheckedCreateInput>
    /**
     * In case the Mod_Download was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Mod_DownloadUpdateInput, Mod_DownloadUncheckedUpdateInput>
  }


  /**
   * Mod_Download delete
   */
  export type Mod_DownloadDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mod_Download
     * 
    **/
    select?: Mod_DownloadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_DownloadInclude | null
    /**
     * Filter which Mod_Download to delete.
     * 
    **/
    where: Mod_DownloadWhereUniqueInput
  }


  /**
   * Mod_Download deleteMany
   */
  export type Mod_DownloadDeleteManyArgs = {
    /**
     * Filter which Mod_Downloads to delete
     * 
    **/
    where?: Mod_DownloadWhereInput
  }


  /**
   * Mod_Download without action
   */
  export type Mod_DownloadArgs = {
    /**
     * Select specific fields to fetch from the Mod_Download
     * 
    **/
    select?: Mod_DownloadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Mod_DownloadInclude | null
  }



  /**
   * Model User_Session
   */


  export type AggregateUser_Session = {
    _count: User_SessionCountAggregateOutputType | null
    _avg: User_SessionAvgAggregateOutputType | null
    _sum: User_SessionSumAggregateOutputType | null
    _min: User_SessionMinAggregateOutputType | null
    _max: User_SessionMaxAggregateOutputType | null
  }

  export type User_SessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type User_SessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type User_SessionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    userAgent: string | null
    userAgentName: string | null
    osName: string | null
    deviceName: string | null
    name: string | null
    uuid: string | null
    ipv4: string | null
    fingerprint_id: string | null
    is_active: boolean | null
    createDate: Date | null
  }

  export type User_SessionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    userAgent: string | null
    userAgentName: string | null
    osName: string | null
    deviceName: string | null
    name: string | null
    uuid: string | null
    ipv4: string | null
    fingerprint_id: string | null
    is_active: boolean | null
    createDate: Date | null
  }

  export type User_SessionCountAggregateOutputType = {
    id: number
    userId: number
    userAgent: number
    userAgentName: number
    osName: number
    deviceName: number
    name: number
    uuid: number
    ipv4: number
    fingerprint_id: number
    is_active: number
    createDate: number
    _all: number
  }


  export type User_SessionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type User_SessionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type User_SessionMinAggregateInputType = {
    id?: true
    userId?: true
    userAgent?: true
    userAgentName?: true
    osName?: true
    deviceName?: true
    name?: true
    uuid?: true
    ipv4?: true
    fingerprint_id?: true
    is_active?: true
    createDate?: true
  }

  export type User_SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    userAgent?: true
    userAgentName?: true
    osName?: true
    deviceName?: true
    name?: true
    uuid?: true
    ipv4?: true
    fingerprint_id?: true
    is_active?: true
    createDate?: true
  }

  export type User_SessionCountAggregateInputType = {
    id?: true
    userId?: true
    userAgent?: true
    userAgentName?: true
    osName?: true
    deviceName?: true
    name?: true
    uuid?: true
    ipv4?: true
    fingerprint_id?: true
    is_active?: true
    createDate?: true
    _all?: true
  }

  export type User_SessionAggregateArgs = {
    /**
     * Filter which User_Session to aggregate.
     * 
    **/
    where?: User_SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<User_SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: User_SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_Sessions
    **/
    _count?: true | User_SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_SessionMaxAggregateInputType
  }

  export type GetUser_SessionAggregateType<T extends User_SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_Session]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_Session[P]>
      : GetScalarType<T[P], AggregateUser_Session[P]>
  }




  export type User_SessionGroupByArgs = {
    where?: User_SessionWhereInput
    orderBy?: Enumerable<User_SessionOrderByWithAggregationInput>
    by: Array<User_SessionScalarFieldEnum>
    having?: User_SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_SessionCountAggregateInputType | true
    _avg?: User_SessionAvgAggregateInputType
    _sum?: User_SessionSumAggregateInputType
    _min?: User_SessionMinAggregateInputType
    _max?: User_SessionMaxAggregateInputType
  }


  export type User_SessionGroupByOutputType = {
    id: number
    userId: number
    userAgent: string
    userAgentName: string
    osName: string
    deviceName: string
    name: string
    uuid: string
    ipv4: string
    fingerprint_id: string
    is_active: boolean
    createDate: Date
    _count: User_SessionCountAggregateOutputType | null
    _avg: User_SessionAvgAggregateOutputType | null
    _sum: User_SessionSumAggregateOutputType | null
    _min: User_SessionMinAggregateOutputType | null
    _max: User_SessionMaxAggregateOutputType | null
  }

  type GetUser_SessionGroupByPayload<T extends User_SessionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<User_SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_SessionGroupByOutputType[P]>
            : GetScalarType<T[P], User_SessionGroupByOutputType[P]>
        }
      >
    >


  export type User_SessionSelect = {
    id?: boolean
    userId?: boolean
    userAgent?: boolean
    userAgentName?: boolean
    osName?: boolean
    deviceName?: boolean
    name?: boolean
    uuid?: boolean
    ipv4?: boolean
    fingerprint_id?: boolean
    is_active?: boolean
    createDate?: boolean
    User?: boolean | UserArgs
    Tokens?: boolean | User_TokenFindManyArgs
    _count?: boolean | User_SessionCountOutputTypeArgs
  }

  export type User_SessionInclude = {
    User?: boolean | UserArgs
    Tokens?: boolean | User_TokenFindManyArgs
    _count?: boolean | User_SessionCountOutputTypeArgs
  }

  export type User_SessionGetPayload<
    S extends boolean | null | undefined | User_SessionArgs,
    U = keyof S
      > = S extends true
        ? User_Session
    : S extends undefined
    ? never
    : S extends User_SessionArgs | User_SessionFindManyArgs
    ?'include' extends U
    ? User_Session  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'Tokens' ? Array < User_TokenGetPayload<S['include'][P]>>  :
        P extends '_count' ? User_SessionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'Tokens' ? Array < User_TokenGetPayload<S['select'][P]>>  :
        P extends '_count' ? User_SessionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User_Session ? User_Session[P] : never
  } 
    : User_Session
  : User_Session


  type User_SessionCountArgs = Merge<
    Omit<User_SessionFindManyArgs, 'select' | 'include'> & {
      select?: User_SessionCountAggregateInputType | true
    }
  >

  export interface User_SessionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User_Session that matches the filter.
     * @param {User_SessionFindUniqueArgs} args - Arguments to find a User_Session
     * @example
     * // Get one User_Session
     * const user_Session = await prisma.user_Session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends User_SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, User_SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User_Session'> extends True ? CheckSelect<T, Prisma__User_SessionClient<User_Session>, Prisma__User_SessionClient<User_SessionGetPayload<T>>> : CheckSelect<T, Prisma__User_SessionClient<User_Session | null >, Prisma__User_SessionClient<User_SessionGetPayload<T> | null >>

    /**
     * Find the first User_Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_SessionFindFirstArgs} args - Arguments to find a User_Session
     * @example
     * // Get one User_Session
     * const user_Session = await prisma.user_Session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends User_SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, User_SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User_Session'> extends True ? CheckSelect<T, Prisma__User_SessionClient<User_Session>, Prisma__User_SessionClient<User_SessionGetPayload<T>>> : CheckSelect<T, Prisma__User_SessionClient<User_Session | null >, Prisma__User_SessionClient<User_SessionGetPayload<T> | null >>

    /**
     * Find zero or more User_Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Sessions
     * const user_Sessions = await prisma.user_Session.findMany()
     * 
     * // Get first 10 User_Sessions
     * const user_Sessions = await prisma.user_Session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_SessionWithIdOnly = await prisma.user_Session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends User_SessionFindManyArgs>(
      args?: SelectSubset<T, User_SessionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User_Session>>, PrismaPromise<Array<User_SessionGetPayload<T>>>>

    /**
     * Create a User_Session.
     * @param {User_SessionCreateArgs} args - Arguments to create a User_Session.
     * @example
     * // Create one User_Session
     * const User_Session = await prisma.user_Session.create({
     *   data: {
     *     // ... data to create a User_Session
     *   }
     * })
     * 
    **/
    create<T extends User_SessionCreateArgs>(
      args: SelectSubset<T, User_SessionCreateArgs>
    ): CheckSelect<T, Prisma__User_SessionClient<User_Session>, Prisma__User_SessionClient<User_SessionGetPayload<T>>>

    /**
     * Create many User_Sessions.
     *     @param {User_SessionCreateManyArgs} args - Arguments to create many User_Sessions.
     *     @example
     *     // Create many User_Sessions
     *     const user_Session = await prisma.user_Session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends User_SessionCreateManyArgs>(
      args?: SelectSubset<T, User_SessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User_Session.
     * @param {User_SessionDeleteArgs} args - Arguments to delete one User_Session.
     * @example
     * // Delete one User_Session
     * const User_Session = await prisma.user_Session.delete({
     *   where: {
     *     // ... filter to delete one User_Session
     *   }
     * })
     * 
    **/
    delete<T extends User_SessionDeleteArgs>(
      args: SelectSubset<T, User_SessionDeleteArgs>
    ): CheckSelect<T, Prisma__User_SessionClient<User_Session>, Prisma__User_SessionClient<User_SessionGetPayload<T>>>

    /**
     * Update one User_Session.
     * @param {User_SessionUpdateArgs} args - Arguments to update one User_Session.
     * @example
     * // Update one User_Session
     * const user_Session = await prisma.user_Session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends User_SessionUpdateArgs>(
      args: SelectSubset<T, User_SessionUpdateArgs>
    ): CheckSelect<T, Prisma__User_SessionClient<User_Session>, Prisma__User_SessionClient<User_SessionGetPayload<T>>>

    /**
     * Delete zero or more User_Sessions.
     * @param {User_SessionDeleteManyArgs} args - Arguments to filter User_Sessions to delete.
     * @example
     * // Delete a few User_Sessions
     * const { count } = await prisma.user_Session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends User_SessionDeleteManyArgs>(
      args?: SelectSubset<T, User_SessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Sessions
     * const user_Session = await prisma.user_Session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends User_SessionUpdateManyArgs>(
      args: SelectSubset<T, User_SessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User_Session.
     * @param {User_SessionUpsertArgs} args - Arguments to update or create a User_Session.
     * @example
     * // Update or create a User_Session
     * const user_Session = await prisma.user_Session.upsert({
     *   create: {
     *     // ... data to create a User_Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Session we want to update
     *   }
     * })
    **/
    upsert<T extends User_SessionUpsertArgs>(
      args: SelectSubset<T, User_SessionUpsertArgs>
    ): CheckSelect<T, Prisma__User_SessionClient<User_Session>, Prisma__User_SessionClient<User_SessionGetPayload<T>>>

    /**
     * Count the number of User_Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_SessionCountArgs} args - Arguments to filter User_Sessions to count.
     * @example
     * // Count the number of User_Sessions
     * const count = await prisma.user_Session.count({
     *   where: {
     *     // ... the filter for the User_Sessions we want to count
     *   }
     * })
    **/
    count<T extends User_SessionCountArgs>(
      args?: Subset<T, User_SessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_SessionAggregateArgs>(args: Subset<T, User_SessionAggregateArgs>): PrismaPromise<GetUser_SessionAggregateType<T>>

    /**
     * Group by User_Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_SessionGroupByArgs['orderBy'] }
        : { orderBy?: User_SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_SessionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__User_SessionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Tokens<T extends User_TokenFindManyArgs = {}>(args?: Subset<T, User_TokenFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User_Token>>, PrismaPromise<Array<User_TokenGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User_Session findUnique
   */
  export type User_SessionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User_Session
     * 
    **/
    select?: User_SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_SessionInclude | null
    /**
     * Throw an Error if a User_Session can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User_Session to fetch.
     * 
    **/
    where: User_SessionWhereUniqueInput
  }


  /**
   * User_Session findFirst
   */
  export type User_SessionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User_Session
     * 
    **/
    select?: User_SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_SessionInclude | null
    /**
     * Throw an Error if a User_Session can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User_Session to fetch.
     * 
    **/
    where?: User_SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<User_SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Sessions.
     * 
    **/
    cursor?: User_SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Sessions.
     * 
    **/
    distinct?: Enumerable<User_SessionScalarFieldEnum>
  }


  /**
   * User_Session findMany
   */
  export type User_SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the User_Session
     * 
    **/
    select?: User_SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_SessionInclude | null
    /**
     * Filter, which User_Sessions to fetch.
     * 
    **/
    where?: User_SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<User_SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_Sessions.
     * 
    **/
    cursor?: User_SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<User_SessionScalarFieldEnum>
  }


  /**
   * User_Session create
   */
  export type User_SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the User_Session
     * 
    **/
    select?: User_SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_SessionInclude | null
    /**
     * The data needed to create a User_Session.
     * 
    **/
    data: XOR<User_SessionCreateInput, User_SessionUncheckedCreateInput>
  }


  /**
   * User_Session createMany
   */
  export type User_SessionCreateManyArgs = {
    /**
     * The data used to create many User_Sessions.
     * 
    **/
    data: Enumerable<User_SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User_Session update
   */
  export type User_SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the User_Session
     * 
    **/
    select?: User_SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_SessionInclude | null
    /**
     * The data needed to update a User_Session.
     * 
    **/
    data: XOR<User_SessionUpdateInput, User_SessionUncheckedUpdateInput>
    /**
     * Choose, which User_Session to update.
     * 
    **/
    where: User_SessionWhereUniqueInput
  }


  /**
   * User_Session updateMany
   */
  export type User_SessionUpdateManyArgs = {
    /**
     * The data used to update User_Sessions.
     * 
    **/
    data: XOR<User_SessionUpdateManyMutationInput, User_SessionUncheckedUpdateManyInput>
    /**
     * Filter which User_Sessions to update
     * 
    **/
    where?: User_SessionWhereInput
  }


  /**
   * User_Session upsert
   */
  export type User_SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the User_Session
     * 
    **/
    select?: User_SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_SessionInclude | null
    /**
     * The filter to search for the User_Session to update in case it exists.
     * 
    **/
    where: User_SessionWhereUniqueInput
    /**
     * In case the User_Session found by the `where` argument doesn't exist, create a new User_Session with this data.
     * 
    **/
    create: XOR<User_SessionCreateInput, User_SessionUncheckedCreateInput>
    /**
     * In case the User_Session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<User_SessionUpdateInput, User_SessionUncheckedUpdateInput>
  }


  /**
   * User_Session delete
   */
  export type User_SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the User_Session
     * 
    **/
    select?: User_SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_SessionInclude | null
    /**
     * Filter which User_Session to delete.
     * 
    **/
    where: User_SessionWhereUniqueInput
  }


  /**
   * User_Session deleteMany
   */
  export type User_SessionDeleteManyArgs = {
    /**
     * Filter which User_Sessions to delete
     * 
    **/
    where?: User_SessionWhereInput
  }


  /**
   * User_Session without action
   */
  export type User_SessionArgs = {
    /**
     * Select specific fields to fetch from the User_Session
     * 
    **/
    select?: User_SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_SessionInclude | null
  }



  /**
   * Model User_Token
   */


  export type AggregateUser_Token = {
    _count: User_TokenCountAggregateOutputType | null
    _avg: User_TokenAvgAggregateOutputType | null
    _sum: User_TokenSumAggregateOutputType | null
    _min: User_TokenMinAggregateOutputType | null
    _max: User_TokenMaxAggregateOutputType | null
  }

  export type User_TokenAvgAggregateOutputType = {
    id: number | null
    sessionId: number | null
  }

  export type User_TokenSumAggregateOutputType = {
    id: number | null
    sessionId: number | null
  }

  export type User_TokenMinAggregateOutputType = {
    id: number | null
    sessionId: number | null
    access_token: string | null
    refresh_token: string | null
    createDate: Date | null
    is_enable: boolean | null
    is_super_access: boolean | null
  }

  export type User_TokenMaxAggregateOutputType = {
    id: number | null
    sessionId: number | null
    access_token: string | null
    refresh_token: string | null
    createDate: Date | null
    is_enable: boolean | null
    is_super_access: boolean | null
  }

  export type User_TokenCountAggregateOutputType = {
    id: number
    sessionId: number
    access_token: number
    refresh_token: number
    createDate: number
    is_enable: number
    is_super_access: number
    _all: number
  }


  export type User_TokenAvgAggregateInputType = {
    id?: true
    sessionId?: true
  }

  export type User_TokenSumAggregateInputType = {
    id?: true
    sessionId?: true
  }

  export type User_TokenMinAggregateInputType = {
    id?: true
    sessionId?: true
    access_token?: true
    refresh_token?: true
    createDate?: true
    is_enable?: true
    is_super_access?: true
  }

  export type User_TokenMaxAggregateInputType = {
    id?: true
    sessionId?: true
    access_token?: true
    refresh_token?: true
    createDate?: true
    is_enable?: true
    is_super_access?: true
  }

  export type User_TokenCountAggregateInputType = {
    id?: true
    sessionId?: true
    access_token?: true
    refresh_token?: true
    createDate?: true
    is_enable?: true
    is_super_access?: true
    _all?: true
  }

  export type User_TokenAggregateArgs = {
    /**
     * Filter which User_Token to aggregate.
     * 
    **/
    where?: User_TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Tokens to fetch.
     * 
    **/
    orderBy?: Enumerable<User_TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: User_TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Tokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Tokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_Tokens
    **/
    _count?: true | User_TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_TokenMaxAggregateInputType
  }

  export type GetUser_TokenAggregateType<T extends User_TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_Token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_Token[P]>
      : GetScalarType<T[P], AggregateUser_Token[P]>
  }




  export type User_TokenGroupByArgs = {
    where?: User_TokenWhereInput
    orderBy?: Enumerable<User_TokenOrderByWithAggregationInput>
    by: Array<User_TokenScalarFieldEnum>
    having?: User_TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_TokenCountAggregateInputType | true
    _avg?: User_TokenAvgAggregateInputType
    _sum?: User_TokenSumAggregateInputType
    _min?: User_TokenMinAggregateInputType
    _max?: User_TokenMaxAggregateInputType
  }


  export type User_TokenGroupByOutputType = {
    id: number
    sessionId: number
    access_token: string
    refresh_token: string
    createDate: Date
    is_enable: boolean
    is_super_access: boolean
    _count: User_TokenCountAggregateOutputType | null
    _avg: User_TokenAvgAggregateOutputType | null
    _sum: User_TokenSumAggregateOutputType | null
    _min: User_TokenMinAggregateOutputType | null
    _max: User_TokenMaxAggregateOutputType | null
  }

  type GetUser_TokenGroupByPayload<T extends User_TokenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<User_TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_TokenGroupByOutputType[P]>
            : GetScalarType<T[P], User_TokenGroupByOutputType[P]>
        }
      >
    >


  export type User_TokenSelect = {
    id?: boolean
    sessionId?: boolean
    access_token?: boolean
    refresh_token?: boolean
    createDate?: boolean
    is_enable?: boolean
    is_super_access?: boolean
    Session?: boolean | User_SessionArgs
  }

  export type User_TokenInclude = {
    Session?: boolean | User_SessionArgs
  }

  export type User_TokenGetPayload<
    S extends boolean | null | undefined | User_TokenArgs,
    U = keyof S
      > = S extends true
        ? User_Token
    : S extends undefined
    ? never
    : S extends User_TokenArgs | User_TokenFindManyArgs
    ?'include' extends U
    ? User_Token  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Session' ? User_SessionGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Session' ? User_SessionGetPayload<S['select'][P]> :  P extends keyof User_Token ? User_Token[P] : never
  } 
    : User_Token
  : User_Token


  type User_TokenCountArgs = Merge<
    Omit<User_TokenFindManyArgs, 'select' | 'include'> & {
      select?: User_TokenCountAggregateInputType | true
    }
  >

  export interface User_TokenDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User_Token that matches the filter.
     * @param {User_TokenFindUniqueArgs} args - Arguments to find a User_Token
     * @example
     * // Get one User_Token
     * const user_Token = await prisma.user_Token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends User_TokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, User_TokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User_Token'> extends True ? CheckSelect<T, Prisma__User_TokenClient<User_Token>, Prisma__User_TokenClient<User_TokenGetPayload<T>>> : CheckSelect<T, Prisma__User_TokenClient<User_Token | null >, Prisma__User_TokenClient<User_TokenGetPayload<T> | null >>

    /**
     * Find the first User_Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_TokenFindFirstArgs} args - Arguments to find a User_Token
     * @example
     * // Get one User_Token
     * const user_Token = await prisma.user_Token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends User_TokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, User_TokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User_Token'> extends True ? CheckSelect<T, Prisma__User_TokenClient<User_Token>, Prisma__User_TokenClient<User_TokenGetPayload<T>>> : CheckSelect<T, Prisma__User_TokenClient<User_Token | null >, Prisma__User_TokenClient<User_TokenGetPayload<T> | null >>

    /**
     * Find zero or more User_Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_TokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Tokens
     * const user_Tokens = await prisma.user_Token.findMany()
     * 
     * // Get first 10 User_Tokens
     * const user_Tokens = await prisma.user_Token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_TokenWithIdOnly = await prisma.user_Token.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends User_TokenFindManyArgs>(
      args?: SelectSubset<T, User_TokenFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User_Token>>, PrismaPromise<Array<User_TokenGetPayload<T>>>>

    /**
     * Create a User_Token.
     * @param {User_TokenCreateArgs} args - Arguments to create a User_Token.
     * @example
     * // Create one User_Token
     * const User_Token = await prisma.user_Token.create({
     *   data: {
     *     // ... data to create a User_Token
     *   }
     * })
     * 
    **/
    create<T extends User_TokenCreateArgs>(
      args: SelectSubset<T, User_TokenCreateArgs>
    ): CheckSelect<T, Prisma__User_TokenClient<User_Token>, Prisma__User_TokenClient<User_TokenGetPayload<T>>>

    /**
     * Create many User_Tokens.
     *     @param {User_TokenCreateManyArgs} args - Arguments to create many User_Tokens.
     *     @example
     *     // Create many User_Tokens
     *     const user_Token = await prisma.user_Token.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends User_TokenCreateManyArgs>(
      args?: SelectSubset<T, User_TokenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User_Token.
     * @param {User_TokenDeleteArgs} args - Arguments to delete one User_Token.
     * @example
     * // Delete one User_Token
     * const User_Token = await prisma.user_Token.delete({
     *   where: {
     *     // ... filter to delete one User_Token
     *   }
     * })
     * 
    **/
    delete<T extends User_TokenDeleteArgs>(
      args: SelectSubset<T, User_TokenDeleteArgs>
    ): CheckSelect<T, Prisma__User_TokenClient<User_Token>, Prisma__User_TokenClient<User_TokenGetPayload<T>>>

    /**
     * Update one User_Token.
     * @param {User_TokenUpdateArgs} args - Arguments to update one User_Token.
     * @example
     * // Update one User_Token
     * const user_Token = await prisma.user_Token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends User_TokenUpdateArgs>(
      args: SelectSubset<T, User_TokenUpdateArgs>
    ): CheckSelect<T, Prisma__User_TokenClient<User_Token>, Prisma__User_TokenClient<User_TokenGetPayload<T>>>

    /**
     * Delete zero or more User_Tokens.
     * @param {User_TokenDeleteManyArgs} args - Arguments to filter User_Tokens to delete.
     * @example
     * // Delete a few User_Tokens
     * const { count } = await prisma.user_Token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends User_TokenDeleteManyArgs>(
      args?: SelectSubset<T, User_TokenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Tokens
     * const user_Token = await prisma.user_Token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends User_TokenUpdateManyArgs>(
      args: SelectSubset<T, User_TokenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User_Token.
     * @param {User_TokenUpsertArgs} args - Arguments to update or create a User_Token.
     * @example
     * // Update or create a User_Token
     * const user_Token = await prisma.user_Token.upsert({
     *   create: {
     *     // ... data to create a User_Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Token we want to update
     *   }
     * })
    **/
    upsert<T extends User_TokenUpsertArgs>(
      args: SelectSubset<T, User_TokenUpsertArgs>
    ): CheckSelect<T, Prisma__User_TokenClient<User_Token>, Prisma__User_TokenClient<User_TokenGetPayload<T>>>

    /**
     * Count the number of User_Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_TokenCountArgs} args - Arguments to filter User_Tokens to count.
     * @example
     * // Count the number of User_Tokens
     * const count = await prisma.user_Token.count({
     *   where: {
     *     // ... the filter for the User_Tokens we want to count
     *   }
     * })
    **/
    count<T extends User_TokenCountArgs>(
      args?: Subset<T, User_TokenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_TokenAggregateArgs>(args: Subset<T, User_TokenAggregateArgs>): PrismaPromise<GetUser_TokenAggregateType<T>>

    /**
     * Group by User_Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_TokenGroupByArgs['orderBy'] }
        : { orderBy?: User_TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_TokenGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__User_TokenClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Session<T extends User_SessionArgs = {}>(args?: Subset<T, User_SessionArgs>): CheckSelect<T, Prisma__User_SessionClient<User_Session | null >, Prisma__User_SessionClient<User_SessionGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User_Token findUnique
   */
  export type User_TokenFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User_Token
     * 
    **/
    select?: User_TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_TokenInclude | null
    /**
     * Throw an Error if a User_Token can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User_Token to fetch.
     * 
    **/
    where: User_TokenWhereUniqueInput
  }


  /**
   * User_Token findFirst
   */
  export type User_TokenFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User_Token
     * 
    **/
    select?: User_TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_TokenInclude | null
    /**
     * Throw an Error if a User_Token can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User_Token to fetch.
     * 
    **/
    where?: User_TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Tokens to fetch.
     * 
    **/
    orderBy?: Enumerable<User_TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Tokens.
     * 
    **/
    cursor?: User_TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Tokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Tokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Tokens.
     * 
    **/
    distinct?: Enumerable<User_TokenScalarFieldEnum>
  }


  /**
   * User_Token findMany
   */
  export type User_TokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the User_Token
     * 
    **/
    select?: User_TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_TokenInclude | null
    /**
     * Filter, which User_Tokens to fetch.
     * 
    **/
    where?: User_TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Tokens to fetch.
     * 
    **/
    orderBy?: Enumerable<User_TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_Tokens.
     * 
    **/
    cursor?: User_TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Tokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Tokens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<User_TokenScalarFieldEnum>
  }


  /**
   * User_Token create
   */
  export type User_TokenCreateArgs = {
    /**
     * Select specific fields to fetch from the User_Token
     * 
    **/
    select?: User_TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_TokenInclude | null
    /**
     * The data needed to create a User_Token.
     * 
    **/
    data: XOR<User_TokenCreateInput, User_TokenUncheckedCreateInput>
  }


  /**
   * User_Token createMany
   */
  export type User_TokenCreateManyArgs = {
    /**
     * The data used to create many User_Tokens.
     * 
    **/
    data: Enumerable<User_TokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User_Token update
   */
  export type User_TokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the User_Token
     * 
    **/
    select?: User_TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_TokenInclude | null
    /**
     * The data needed to update a User_Token.
     * 
    **/
    data: XOR<User_TokenUpdateInput, User_TokenUncheckedUpdateInput>
    /**
     * Choose, which User_Token to update.
     * 
    **/
    where: User_TokenWhereUniqueInput
  }


  /**
   * User_Token updateMany
   */
  export type User_TokenUpdateManyArgs = {
    /**
     * The data used to update User_Tokens.
     * 
    **/
    data: XOR<User_TokenUpdateManyMutationInput, User_TokenUncheckedUpdateManyInput>
    /**
     * Filter which User_Tokens to update
     * 
    **/
    where?: User_TokenWhereInput
  }


  /**
   * User_Token upsert
   */
  export type User_TokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the User_Token
     * 
    **/
    select?: User_TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_TokenInclude | null
    /**
     * The filter to search for the User_Token to update in case it exists.
     * 
    **/
    where: User_TokenWhereUniqueInput
    /**
     * In case the User_Token found by the `where` argument doesn't exist, create a new User_Token with this data.
     * 
    **/
    create: XOR<User_TokenCreateInput, User_TokenUncheckedCreateInput>
    /**
     * In case the User_Token was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<User_TokenUpdateInput, User_TokenUncheckedUpdateInput>
  }


  /**
   * User_Token delete
   */
  export type User_TokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the User_Token
     * 
    **/
    select?: User_TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_TokenInclude | null
    /**
     * Filter which User_Token to delete.
     * 
    **/
    where: User_TokenWhereUniqueInput
  }


  /**
   * User_Token deleteMany
   */
  export type User_TokenDeleteManyArgs = {
    /**
     * Filter which User_Tokens to delete
     * 
    **/
    where?: User_TokenWhereInput
  }


  /**
   * User_Token without action
   */
  export type User_TokenArgs = {
    /**
     * Select specific fields to fetch from the User_Token
     * 
    **/
    select?: User_TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: User_TokenInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    nick: 'nick',
    createDate: 'createDate',
    is_active: 'is_active',
    avatar: 'avatar'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_AuthScalarFieldEnum: {
    userId: 'userId',
    email: 'email',
    password: 'password',
    is_active: 'is_active'
  };

  export type User_AuthScalarFieldEnum = (typeof User_AuthScalarFieldEnum)[keyof typeof User_AuthScalarFieldEnum]


  export const Mods_CollectionScalarFieldEnum: {
    id: 'id',
    avatar: 'avatar',
    name: 'name',
    description: 'description',
    createDate: 'createDate',
    is_active: 'is_active',
    author_id: 'author_id'
  };

  export type Mods_CollectionScalarFieldEnum = (typeof Mods_CollectionScalarFieldEnum)[keyof typeof Mods_CollectionScalarFieldEnum]


  export const ModScalarFieldEnum: {
    id: 'id',
    avatar: 'avatar',
    name: 'name',
    description: 'description',
    createDate: 'createDate',
    is_active: 'is_active',
    collection_id: 'collection_id',
    views: 'views',
    readme_type: 'readme_type',
    readme: 'readme',
    change_list_type: 'change_list_type',
    change_list: 'change_list',
    repository: 'repository',
    docs_url: 'docs_url'
  };

  export type ModScalarFieldEnum = (typeof ModScalarFieldEnum)[keyof typeof ModScalarFieldEnum]


  export const Mod_AuthorScalarFieldEnum: {
    mod_id: 'mod_id',
    user_id: 'user_id',
    type: 'type'
  };

  export type Mod_AuthorScalarFieldEnum = (typeof Mod_AuthorScalarFieldEnum)[keyof typeof Mod_AuthorScalarFieldEnum]


  export const Mod_ImageScalarFieldEnum: {
    id: 'id',
    mod_id: 'mod_id',
    url: 'url'
  };

  export type Mod_ImageScalarFieldEnum = (typeof Mod_ImageScalarFieldEnum)[keyof typeof Mod_ImageScalarFieldEnum]


  export const Mod_TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Mod_TagScalarFieldEnum = (typeof Mod_TagScalarFieldEnum)[keyof typeof Mod_TagScalarFieldEnum]


  export const Mod_VersionScalarFieldEnum: {
    id: 'id',
    mod_id: 'mod_id',
    version: 'version',
    game_version: 'game_version',
    releaseDate: 'releaseDate'
  };

  export type Mod_VersionScalarFieldEnum = (typeof Mod_VersionScalarFieldEnum)[keyof typeof Mod_VersionScalarFieldEnum]


  export const Mod_IssueScalarFieldEnum: {
    id: 'id',
    mod_id: 'mod_id',
    name: 'name',
    type: 'type',
    author_id: 'author_id',
    createDate: 'createDate'
  };

  export type Mod_IssueScalarFieldEnum = (typeof Mod_IssueScalarFieldEnum)[keyof typeof Mod_IssueScalarFieldEnum]


  export const Mod_Issue_PostScalarFieldEnum: {
    id: 'id',
    issue_id: 'issue_id',
    author_id: 'author_id',
    createDate: 'createDate',
    text: 'text'
  };

  export type Mod_Issue_PostScalarFieldEnum = (typeof Mod_Issue_PostScalarFieldEnum)[keyof typeof Mod_Issue_PostScalarFieldEnum]


  export const Mods_ListScalarFieldEnum: {
    id: 'id',
    author_id: 'author_id',
    is_public: 'is_public',
    name: 'name'
  };

  export type Mods_ListScalarFieldEnum = (typeof Mods_ListScalarFieldEnum)[keyof typeof Mods_ListScalarFieldEnum]


  export const Mods_FavoritsScalarFieldEnum: {
    user_id: 'user_id',
    mod_id: 'mod_id'
  };

  export type Mods_FavoritsScalarFieldEnum = (typeof Mods_FavoritsScalarFieldEnum)[keyof typeof Mods_FavoritsScalarFieldEnum]


  export const Mod_SubscribersScalarFieldEnum: {
    user_id: 'user_id',
    mod_id: 'mod_id'
  };

  export type Mod_SubscribersScalarFieldEnum = (typeof Mod_SubscribersScalarFieldEnum)[keyof typeof Mod_SubscribersScalarFieldEnum]


  export const Mod_DownloadScalarFieldEnum: {
    user_id: 'user_id',
    mod_id: 'mod_id',
    version_id: 'version_id'
  };

  export type Mod_DownloadScalarFieldEnum = (typeof Mod_DownloadScalarFieldEnum)[keyof typeof Mod_DownloadScalarFieldEnum]


  export const User_SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userAgent: 'userAgent',
    userAgentName: 'userAgentName',
    osName: 'osName',
    deviceName: 'deviceName',
    name: 'name',
    uuid: 'uuid',
    ipv4: 'ipv4',
    fingerprint_id: 'fingerprint_id',
    is_active: 'is_active',
    createDate: 'createDate'
  };

  export type User_SessionScalarFieldEnum = (typeof User_SessionScalarFieldEnum)[keyof typeof User_SessionScalarFieldEnum]


  export const User_TokenScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    createDate: 'createDate',
    is_enable: 'is_enable',
    is_super_access: 'is_super_access'
  };

  export type User_TokenScalarFieldEnum = (typeof User_TokenScalarFieldEnum)[keyof typeof User_TokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    nick?: StringFilter | string
    createDate?: DateTimeFilter | Date | string
    is_active?: BoolFilter | boolean
    avatar?: StringFilter | string
    UserAuth?: XOR<User_AuthRelationFilter, User_AuthWhereInput> | null
    ModsCollections?: Mods_CollectionListRelationFilter
    ModAuthors?: Mod_AuthorListRelationFilter
    ModIssues?: Mod_IssueListRelationFilter
    ModIssuePosts?: Mod_Issue_PostListRelationFilter
    ModsLists?: Mods_ListListRelationFilter
    ModsFavorits?: Mods_FavoritsListRelationFilter
    ModSubscribers?: Mod_SubscribersListRelationFilter
    ModDownloads?: Mod_DownloadListRelationFilter
    UserSession?: User_SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nick?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    avatar?: SortOrder
    UserAuth?: User_AuthOrderByWithRelationInput
    ModsCollections?: Mods_CollectionOrderByRelationAggregateInput
    ModAuthors?: Mod_AuthorOrderByRelationAggregateInput
    ModIssues?: Mod_IssueOrderByRelationAggregateInput
    ModIssuePosts?: Mod_Issue_PostOrderByRelationAggregateInput
    ModsLists?: Mods_ListOrderByRelationAggregateInput
    ModsFavorits?: Mods_FavoritsOrderByRelationAggregateInput
    ModSubscribers?: Mod_SubscribersOrderByRelationAggregateInput
    ModDownloads?: Mod_DownloadOrderByRelationAggregateInput
    UserSession?: User_SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nick?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    avatar?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nick?: StringWithAggregatesFilter | string
    createDate?: DateTimeWithAggregatesFilter | Date | string
    is_active?: BoolWithAggregatesFilter | boolean
    avatar?: StringWithAggregatesFilter | string
  }

  export type User_AuthWhereInput = {
    AND?: Enumerable<User_AuthWhereInput>
    OR?: Enumerable<User_AuthWhereInput>
    NOT?: Enumerable<User_AuthWhereInput>
    userId?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    is_active?: BoolFilter | boolean
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type User_AuthOrderByWithRelationInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_active?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type User_AuthWhereUniqueInput = {
    userId?: number
    email?: string
  }

  export type User_AuthOrderByWithAggregationInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_active?: SortOrder
    _count?: User_AuthCountOrderByAggregateInput
    _avg?: User_AuthAvgOrderByAggregateInput
    _max?: User_AuthMaxOrderByAggregateInput
    _min?: User_AuthMinOrderByAggregateInput
    _sum?: User_AuthSumOrderByAggregateInput
  }

  export type User_AuthScalarWhereWithAggregatesInput = {
    AND?: Enumerable<User_AuthScalarWhereWithAggregatesInput>
    OR?: Enumerable<User_AuthScalarWhereWithAggregatesInput>
    NOT?: Enumerable<User_AuthScalarWhereWithAggregatesInput>
    userId?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    is_active?: BoolWithAggregatesFilter | boolean
  }

  export type Mods_CollectionWhereInput = {
    AND?: Enumerable<Mods_CollectionWhereInput>
    OR?: Enumerable<Mods_CollectionWhereInput>
    NOT?: Enumerable<Mods_CollectionWhereInput>
    id?: IntFilter | number
    avatar?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    createDate?: DateTimeFilter | Date | string
    is_active?: BoolFilter | boolean
    author_id?: IntFilter | number
    Author?: XOR<UserRelationFilter, UserWhereInput>
    Mods?: ModListRelationFilter
  }

  export type Mods_CollectionOrderByWithRelationInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    author_id?: SortOrder
    Author?: UserOrderByWithRelationInput
    Mods?: ModOrderByRelationAggregateInput
  }

  export type Mods_CollectionWhereUniqueInput = {
    id?: number
  }

  export type Mods_CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    author_id?: SortOrder
    _count?: Mods_CollectionCountOrderByAggregateInput
    _avg?: Mods_CollectionAvgOrderByAggregateInput
    _max?: Mods_CollectionMaxOrderByAggregateInput
    _min?: Mods_CollectionMinOrderByAggregateInput
    _sum?: Mods_CollectionSumOrderByAggregateInput
  }

  export type Mods_CollectionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Mods_CollectionScalarWhereWithAggregatesInput>
    OR?: Enumerable<Mods_CollectionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Mods_CollectionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    avatar?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    createDate?: DateTimeWithAggregatesFilter | Date | string
    is_active?: BoolWithAggregatesFilter | boolean
    author_id?: IntWithAggregatesFilter | number
  }

  export type ModWhereInput = {
    AND?: Enumerable<ModWhereInput>
    OR?: Enumerable<ModWhereInput>
    NOT?: Enumerable<ModWhereInput>
    id?: IntFilter | number
    avatar?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    createDate?: DateTimeFilter | Date | string
    is_active?: BoolFilter | boolean
    collection_id?: IntFilter | number
    views?: IntFilter | number
    readme_type?: IntFilter | number
    readme?: StringFilter | string
    change_list_type?: IntFilter | number
    change_list?: StringFilter | string
    repository?: StringFilter | string
    docs_url?: StringFilter | string
    Collection?: XOR<Mods_CollectionRelationFilter, Mods_CollectionWhereInput>
    Images?: Mod_ImageListRelationFilter
    Authors?: Mod_AuthorListRelationFilter
    Tags?: Mod_TagListRelationFilter
    Versions?: Mod_VersionListRelationFilter
    Lists?: Mods_ListListRelationFilter
    Issues?: Mod_IssueListRelationFilter
    Favorits?: Mods_FavoritsListRelationFilter
    Subscribers?: Mod_SubscribersListRelationFilter
    Downloads?: Mod_DownloadListRelationFilter
  }

  export type ModOrderByWithRelationInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    collection_id?: SortOrder
    views?: SortOrder
    readme_type?: SortOrder
    readme?: SortOrder
    change_list_type?: SortOrder
    change_list?: SortOrder
    repository?: SortOrder
    docs_url?: SortOrder
    Collection?: Mods_CollectionOrderByWithRelationInput
    Images?: Mod_ImageOrderByRelationAggregateInput
    Authors?: Mod_AuthorOrderByRelationAggregateInput
    Tags?: Mod_TagOrderByRelationAggregateInput
    Versions?: Mod_VersionOrderByRelationAggregateInput
    Lists?: Mods_ListOrderByRelationAggregateInput
    Issues?: Mod_IssueOrderByRelationAggregateInput
    Favorits?: Mods_FavoritsOrderByRelationAggregateInput
    Subscribers?: Mod_SubscribersOrderByRelationAggregateInput
    Downloads?: Mod_DownloadOrderByRelationAggregateInput
  }

  export type ModWhereUniqueInput = {
    id?: number
  }

  export type ModOrderByWithAggregationInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    collection_id?: SortOrder
    views?: SortOrder
    readme_type?: SortOrder
    readme?: SortOrder
    change_list_type?: SortOrder
    change_list?: SortOrder
    repository?: SortOrder
    docs_url?: SortOrder
    _count?: ModCountOrderByAggregateInput
    _avg?: ModAvgOrderByAggregateInput
    _max?: ModMaxOrderByAggregateInput
    _min?: ModMinOrderByAggregateInput
    _sum?: ModSumOrderByAggregateInput
  }

  export type ModScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    avatar?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    createDate?: DateTimeWithAggregatesFilter | Date | string
    is_active?: BoolWithAggregatesFilter | boolean
    collection_id?: IntWithAggregatesFilter | number
    views?: IntWithAggregatesFilter | number
    readme_type?: IntWithAggregatesFilter | number
    readme?: StringWithAggregatesFilter | string
    change_list_type?: IntWithAggregatesFilter | number
    change_list?: StringWithAggregatesFilter | string
    repository?: StringWithAggregatesFilter | string
    docs_url?: StringWithAggregatesFilter | string
  }

  export type Mod_AuthorWhereInput = {
    AND?: Enumerable<Mod_AuthorWhereInput>
    OR?: Enumerable<Mod_AuthorWhereInput>
    NOT?: Enumerable<Mod_AuthorWhereInput>
    mod_id?: IntFilter | number
    user_id?: IntFilter | number
    type?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    Mod?: XOR<ModRelationFilter, ModWhereInput>
  }

  export type Mod_AuthorOrderByWithRelationInput = {
    mod_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    User?: UserOrderByWithRelationInput
    Mod?: ModOrderByWithRelationInput
  }

  export type Mod_AuthorWhereUniqueInput = {
    mod_id_user_id?: Mod_AuthorMod_idUser_idCompoundUniqueInput
  }

  export type Mod_AuthorOrderByWithAggregationInput = {
    mod_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    _count?: Mod_AuthorCountOrderByAggregateInput
    _avg?: Mod_AuthorAvgOrderByAggregateInput
    _max?: Mod_AuthorMaxOrderByAggregateInput
    _min?: Mod_AuthorMinOrderByAggregateInput
    _sum?: Mod_AuthorSumOrderByAggregateInput
  }

  export type Mod_AuthorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Mod_AuthorScalarWhereWithAggregatesInput>
    OR?: Enumerable<Mod_AuthorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Mod_AuthorScalarWhereWithAggregatesInput>
    mod_id?: IntWithAggregatesFilter | number
    user_id?: IntWithAggregatesFilter | number
    type?: IntWithAggregatesFilter | number
  }

  export type Mod_ImageWhereInput = {
    AND?: Enumerable<Mod_ImageWhereInput>
    OR?: Enumerable<Mod_ImageWhereInput>
    NOT?: Enumerable<Mod_ImageWhereInput>
    id?: IntFilter | number
    mod_id?: IntFilter | number
    url?: StringFilter | string
    Mod?: XOR<ModRelationFilter, ModWhereInput>
  }

  export type Mod_ImageOrderByWithRelationInput = {
    id?: SortOrder
    mod_id?: SortOrder
    url?: SortOrder
    Mod?: ModOrderByWithRelationInput
  }

  export type Mod_ImageWhereUniqueInput = {
    id?: number
  }

  export type Mod_ImageOrderByWithAggregationInput = {
    id?: SortOrder
    mod_id?: SortOrder
    url?: SortOrder
    _count?: Mod_ImageCountOrderByAggregateInput
    _avg?: Mod_ImageAvgOrderByAggregateInput
    _max?: Mod_ImageMaxOrderByAggregateInput
    _min?: Mod_ImageMinOrderByAggregateInput
    _sum?: Mod_ImageSumOrderByAggregateInput
  }

  export type Mod_ImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Mod_ImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<Mod_ImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Mod_ImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    mod_id?: IntWithAggregatesFilter | number
    url?: StringWithAggregatesFilter | string
  }

  export type Mod_TagWhereInput = {
    AND?: Enumerable<Mod_TagWhereInput>
    OR?: Enumerable<Mod_TagWhereInput>
    NOT?: Enumerable<Mod_TagWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    Mod?: ModListRelationFilter
  }

  export type Mod_TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Mod?: ModOrderByRelationAggregateInput
  }

  export type Mod_TagWhereUniqueInput = {
    id?: number
  }

  export type Mod_TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: Mod_TagCountOrderByAggregateInput
    _avg?: Mod_TagAvgOrderByAggregateInput
    _max?: Mod_TagMaxOrderByAggregateInput
    _min?: Mod_TagMinOrderByAggregateInput
    _sum?: Mod_TagSumOrderByAggregateInput
  }

  export type Mod_TagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Mod_TagScalarWhereWithAggregatesInput>
    OR?: Enumerable<Mod_TagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Mod_TagScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type Mod_VersionWhereInput = {
    AND?: Enumerable<Mod_VersionWhereInput>
    OR?: Enumerable<Mod_VersionWhereInput>
    NOT?: Enumerable<Mod_VersionWhereInput>
    id?: IntFilter | number
    mod_id?: IntFilter | number
    version?: StringFilter | string
    game_version?: StringFilter | string
    releaseDate?: DateTimeFilter | Date | string
    Mod?: XOR<ModRelationFilter, ModWhereInput>
    Downloads?: Mod_DownloadListRelationFilter
  }

  export type Mod_VersionOrderByWithRelationInput = {
    id?: SortOrder
    mod_id?: SortOrder
    version?: SortOrder
    game_version?: SortOrder
    releaseDate?: SortOrder
    Mod?: ModOrderByWithRelationInput
    Downloads?: Mod_DownloadOrderByRelationAggregateInput
  }

  export type Mod_VersionWhereUniqueInput = {
    id?: number
  }

  export type Mod_VersionOrderByWithAggregationInput = {
    id?: SortOrder
    mod_id?: SortOrder
    version?: SortOrder
    game_version?: SortOrder
    releaseDate?: SortOrder
    _count?: Mod_VersionCountOrderByAggregateInput
    _avg?: Mod_VersionAvgOrderByAggregateInput
    _max?: Mod_VersionMaxOrderByAggregateInput
    _min?: Mod_VersionMinOrderByAggregateInput
    _sum?: Mod_VersionSumOrderByAggregateInput
  }

  export type Mod_VersionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Mod_VersionScalarWhereWithAggregatesInput>
    OR?: Enumerable<Mod_VersionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Mod_VersionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    mod_id?: IntWithAggregatesFilter | number
    version?: StringWithAggregatesFilter | string
    game_version?: StringWithAggregatesFilter | string
    releaseDate?: DateTimeWithAggregatesFilter | Date | string
  }

  export type Mod_IssueWhereInput = {
    AND?: Enumerable<Mod_IssueWhereInput>
    OR?: Enumerable<Mod_IssueWhereInput>
    NOT?: Enumerable<Mod_IssueWhereInput>
    id?: IntFilter | number
    mod_id?: IntFilter | number
    name?: StringFilter | string
    type?: EnumMod_Issue_TypeFilter | Mod_Issue_Type
    author_id?: IntFilter | number
    createDate?: DateTimeFilter | Date | string
    Mod?: XOR<ModRelationFilter, ModWhereInput>
    Author?: XOR<UserRelationFilter, UserWhereInput>
    ModIssuePost?: Mod_Issue_PostListRelationFilter
  }

  export type Mod_IssueOrderByWithRelationInput = {
    id?: SortOrder
    mod_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
    Mod?: ModOrderByWithRelationInput
    Author?: UserOrderByWithRelationInput
    ModIssuePost?: Mod_Issue_PostOrderByRelationAggregateInput
  }

  export type Mod_IssueWhereUniqueInput = {
    id?: number
  }

  export type Mod_IssueOrderByWithAggregationInput = {
    id?: SortOrder
    mod_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
    _count?: Mod_IssueCountOrderByAggregateInput
    _avg?: Mod_IssueAvgOrderByAggregateInput
    _max?: Mod_IssueMaxOrderByAggregateInput
    _min?: Mod_IssueMinOrderByAggregateInput
    _sum?: Mod_IssueSumOrderByAggregateInput
  }

  export type Mod_IssueScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Mod_IssueScalarWhereWithAggregatesInput>
    OR?: Enumerable<Mod_IssueScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Mod_IssueScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    mod_id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    type?: EnumMod_Issue_TypeWithAggregatesFilter | Mod_Issue_Type
    author_id?: IntWithAggregatesFilter | number
    createDate?: DateTimeWithAggregatesFilter | Date | string
  }

  export type Mod_Issue_PostWhereInput = {
    AND?: Enumerable<Mod_Issue_PostWhereInput>
    OR?: Enumerable<Mod_Issue_PostWhereInput>
    NOT?: Enumerable<Mod_Issue_PostWhereInput>
    id?: IntFilter | number
    issue_id?: IntFilter | number
    author_id?: IntFilter | number
    createDate?: DateTimeFilter | Date | string
    text?: StringFilter | string
    Issue?: XOR<Mod_IssueRelationFilter, Mod_IssueWhereInput>
    Author?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type Mod_Issue_PostOrderByWithRelationInput = {
    id?: SortOrder
    issue_id?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
    text?: SortOrder
    Issue?: Mod_IssueOrderByWithRelationInput
    Author?: UserOrderByWithRelationInput
  }

  export type Mod_Issue_PostWhereUniqueInput = {
    id?: number
  }

  export type Mod_Issue_PostOrderByWithAggregationInput = {
    id?: SortOrder
    issue_id?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
    text?: SortOrder
    _count?: Mod_Issue_PostCountOrderByAggregateInput
    _avg?: Mod_Issue_PostAvgOrderByAggregateInput
    _max?: Mod_Issue_PostMaxOrderByAggregateInput
    _min?: Mod_Issue_PostMinOrderByAggregateInput
    _sum?: Mod_Issue_PostSumOrderByAggregateInput
  }

  export type Mod_Issue_PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Mod_Issue_PostScalarWhereWithAggregatesInput>
    OR?: Enumerable<Mod_Issue_PostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Mod_Issue_PostScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    issue_id?: IntWithAggregatesFilter | number
    author_id?: IntWithAggregatesFilter | number
    createDate?: DateTimeWithAggregatesFilter | Date | string
    text?: StringWithAggregatesFilter | string
  }

  export type Mods_ListWhereInput = {
    AND?: Enumerable<Mods_ListWhereInput>
    OR?: Enumerable<Mods_ListWhereInput>
    NOT?: Enumerable<Mods_ListWhereInput>
    id?: IntFilter | number
    author_id?: IntFilter | number
    is_public?: BoolFilter | boolean
    name?: StringFilter | string
    Author?: XOR<UserRelationFilter, UserWhereInput>
    Mods?: ModListRelationFilter
  }

  export type Mods_ListOrderByWithRelationInput = {
    id?: SortOrder
    author_id?: SortOrder
    is_public?: SortOrder
    name?: SortOrder
    Author?: UserOrderByWithRelationInput
    Mods?: ModOrderByRelationAggregateInput
  }

  export type Mods_ListWhereUniqueInput = {
    id?: number
  }

  export type Mods_ListOrderByWithAggregationInput = {
    id?: SortOrder
    author_id?: SortOrder
    is_public?: SortOrder
    name?: SortOrder
    _count?: Mods_ListCountOrderByAggregateInput
    _avg?: Mods_ListAvgOrderByAggregateInput
    _max?: Mods_ListMaxOrderByAggregateInput
    _min?: Mods_ListMinOrderByAggregateInput
    _sum?: Mods_ListSumOrderByAggregateInput
  }

  export type Mods_ListScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Mods_ListScalarWhereWithAggregatesInput>
    OR?: Enumerable<Mods_ListScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Mods_ListScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    author_id?: IntWithAggregatesFilter | number
    is_public?: BoolWithAggregatesFilter | boolean
    name?: StringWithAggregatesFilter | string
  }

  export type Mods_FavoritsWhereInput = {
    AND?: Enumerable<Mods_FavoritsWhereInput>
    OR?: Enumerable<Mods_FavoritsWhereInput>
    NOT?: Enumerable<Mods_FavoritsWhereInput>
    user_id?: IntFilter | number
    mod_id?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    Mod?: XOR<ModRelationFilter, ModWhereInput>
  }

  export type Mods_FavoritsOrderByWithRelationInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    User?: UserOrderByWithRelationInput
    Mod?: ModOrderByWithRelationInput
  }

  export type Mods_FavoritsWhereUniqueInput = {
    mod_id_user_id?: Mods_FavoritsMod_idUser_idCompoundUniqueInput
  }

  export type Mods_FavoritsOrderByWithAggregationInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    _count?: Mods_FavoritsCountOrderByAggregateInput
    _avg?: Mods_FavoritsAvgOrderByAggregateInput
    _max?: Mods_FavoritsMaxOrderByAggregateInput
    _min?: Mods_FavoritsMinOrderByAggregateInput
    _sum?: Mods_FavoritsSumOrderByAggregateInput
  }

  export type Mods_FavoritsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Mods_FavoritsScalarWhereWithAggregatesInput>
    OR?: Enumerable<Mods_FavoritsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Mods_FavoritsScalarWhereWithAggregatesInput>
    user_id?: IntWithAggregatesFilter | number
    mod_id?: IntWithAggregatesFilter | number
  }

  export type Mod_SubscribersWhereInput = {
    AND?: Enumerable<Mod_SubscribersWhereInput>
    OR?: Enumerable<Mod_SubscribersWhereInput>
    NOT?: Enumerable<Mod_SubscribersWhereInput>
    user_id?: IntFilter | number
    mod_id?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    Mod?: XOR<ModRelationFilter, ModWhereInput>
  }

  export type Mod_SubscribersOrderByWithRelationInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    User?: UserOrderByWithRelationInput
    Mod?: ModOrderByWithRelationInput
  }

  export type Mod_SubscribersWhereUniqueInput = {
    mod_id_user_id?: Mod_SubscribersMod_idUser_idCompoundUniqueInput
  }

  export type Mod_SubscribersOrderByWithAggregationInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    _count?: Mod_SubscribersCountOrderByAggregateInput
    _avg?: Mod_SubscribersAvgOrderByAggregateInput
    _max?: Mod_SubscribersMaxOrderByAggregateInput
    _min?: Mod_SubscribersMinOrderByAggregateInput
    _sum?: Mod_SubscribersSumOrderByAggregateInput
  }

  export type Mod_SubscribersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Mod_SubscribersScalarWhereWithAggregatesInput>
    OR?: Enumerable<Mod_SubscribersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Mod_SubscribersScalarWhereWithAggregatesInput>
    user_id?: IntWithAggregatesFilter | number
    mod_id?: IntWithAggregatesFilter | number
  }

  export type Mod_DownloadWhereInput = {
    AND?: Enumerable<Mod_DownloadWhereInput>
    OR?: Enumerable<Mod_DownloadWhereInput>
    NOT?: Enumerable<Mod_DownloadWhereInput>
    user_id?: IntFilter | number
    mod_id?: IntFilter | number
    version_id?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    Mod?: XOR<ModRelationFilter, ModWhereInput>
    Version?: XOR<Mod_VersionRelationFilter, Mod_VersionWhereInput>
  }

  export type Mod_DownloadOrderByWithRelationInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    version_id?: SortOrder
    User?: UserOrderByWithRelationInput
    Mod?: ModOrderByWithRelationInput
    Version?: Mod_VersionOrderByWithRelationInput
  }

  export type Mod_DownloadWhereUniqueInput = {
    user_id_mod_id?: Mod_DownloadUser_idMod_idCompoundUniqueInput
  }

  export type Mod_DownloadOrderByWithAggregationInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    version_id?: SortOrder
    _count?: Mod_DownloadCountOrderByAggregateInput
    _avg?: Mod_DownloadAvgOrderByAggregateInput
    _max?: Mod_DownloadMaxOrderByAggregateInput
    _min?: Mod_DownloadMinOrderByAggregateInput
    _sum?: Mod_DownloadSumOrderByAggregateInput
  }

  export type Mod_DownloadScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Mod_DownloadScalarWhereWithAggregatesInput>
    OR?: Enumerable<Mod_DownloadScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Mod_DownloadScalarWhereWithAggregatesInput>
    user_id?: IntWithAggregatesFilter | number
    mod_id?: IntWithAggregatesFilter | number
    version_id?: IntWithAggregatesFilter | number
  }

  export type User_SessionWhereInput = {
    AND?: Enumerable<User_SessionWhereInput>
    OR?: Enumerable<User_SessionWhereInput>
    NOT?: Enumerable<User_SessionWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    userAgent?: StringFilter | string
    userAgentName?: StringFilter | string
    osName?: StringFilter | string
    deviceName?: StringFilter | string
    name?: StringFilter | string
    uuid?: StringFilter | string
    ipv4?: StringFilter | string
    fingerprint_id?: StringFilter | string
    is_active?: BoolFilter | boolean
    createDate?: DateTimeFilter | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    Tokens?: User_TokenListRelationFilter
  }

  export type User_SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    userAgentName?: SortOrder
    osName?: SortOrder
    deviceName?: SortOrder
    name?: SortOrder
    uuid?: SortOrder
    ipv4?: SortOrder
    fingerprint_id?: SortOrder
    is_active?: SortOrder
    createDate?: SortOrder
    User?: UserOrderByWithRelationInput
    Tokens?: User_TokenOrderByRelationAggregateInput
  }

  export type User_SessionWhereUniqueInput = {
    id?: number
    uuid?: string
  }

  export type User_SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    userAgentName?: SortOrder
    osName?: SortOrder
    deviceName?: SortOrder
    name?: SortOrder
    uuid?: SortOrder
    ipv4?: SortOrder
    fingerprint_id?: SortOrder
    is_active?: SortOrder
    createDate?: SortOrder
    _count?: User_SessionCountOrderByAggregateInput
    _avg?: User_SessionAvgOrderByAggregateInput
    _max?: User_SessionMaxOrderByAggregateInput
    _min?: User_SessionMinOrderByAggregateInput
    _sum?: User_SessionSumOrderByAggregateInput
  }

  export type User_SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<User_SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<User_SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<User_SessionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    userAgent?: StringWithAggregatesFilter | string
    userAgentName?: StringWithAggregatesFilter | string
    osName?: StringWithAggregatesFilter | string
    deviceName?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    uuid?: StringWithAggregatesFilter | string
    ipv4?: StringWithAggregatesFilter | string
    fingerprint_id?: StringWithAggregatesFilter | string
    is_active?: BoolWithAggregatesFilter | boolean
    createDate?: DateTimeWithAggregatesFilter | Date | string
  }

  export type User_TokenWhereInput = {
    AND?: Enumerable<User_TokenWhereInput>
    OR?: Enumerable<User_TokenWhereInput>
    NOT?: Enumerable<User_TokenWhereInput>
    id?: IntFilter | number
    sessionId?: IntFilter | number
    access_token?: StringFilter | string
    refresh_token?: StringFilter | string
    createDate?: DateTimeFilter | Date | string
    is_enable?: BoolFilter | boolean
    is_super_access?: BoolFilter | boolean
    Session?: XOR<User_SessionRelationFilter, User_SessionWhereInput>
  }

  export type User_TokenOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    createDate?: SortOrder
    is_enable?: SortOrder
    is_super_access?: SortOrder
    Session?: User_SessionOrderByWithRelationInput
  }

  export type User_TokenWhereUniqueInput = {
    id?: number
    access_token?: string
    refresh_token?: string
  }

  export type User_TokenOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    createDate?: SortOrder
    is_enable?: SortOrder
    is_super_access?: SortOrder
    _count?: User_TokenCountOrderByAggregateInput
    _avg?: User_TokenAvgOrderByAggregateInput
    _max?: User_TokenMaxOrderByAggregateInput
    _min?: User_TokenMinOrderByAggregateInput
    _sum?: User_TokenSumOrderByAggregateInput
  }

  export type User_TokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<User_TokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<User_TokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<User_TokenScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    sessionId?: IntWithAggregatesFilter | number
    access_token?: StringWithAggregatesFilter | string
    refresh_token?: StringWithAggregatesFilter | string
    createDate?: DateTimeWithAggregatesFilter | Date | string
    is_enable?: BoolWithAggregatesFilter | boolean
    is_super_access?: BoolWithAggregatesFilter | boolean
  }

  export type UserCreateInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadCreateNestedManyWithoutUserInput
    UserSession?: User_SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedCreateNestedManyWithoutUserInput
    UserSession?: User_SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUpdateManyWithoutUserInput
    UserSession?: User_SessionUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedUpdateManyWithoutUserInput
    UserSession?: User_SessionUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
  }

  export type UserUpdateManyMutationInput = {
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type User_AuthCreateInput = {
    email: string
    password: string
    is_active: boolean
    User: UserCreateNestedOneWithoutUserAuthInput
  }

  export type User_AuthUncheckedCreateInput = {
    userId: number
    email: string
    password: string
    is_active: boolean
  }

  export type User_AuthUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutUserAuthInput
  }

  export type User_AuthUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type User_AuthCreateManyInput = {
    userId: number
    email: string
    password: string
    is_active: boolean
  }

  export type User_AuthUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type User_AuthUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Mods_CollectionCreateInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    Author: UserCreateNestedOneWithoutModsCollectionsInput
    Mods?: ModCreateNestedManyWithoutCollectionInput
  }

  export type Mods_CollectionUncheckedCreateInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    author_id: number
    Mods?: ModUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type Mods_CollectionUpdateInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    Author?: UserUpdateOneRequiredWithoutModsCollectionsInput
    Mods?: ModUpdateManyWithoutCollectionInput
  }

  export type Mods_CollectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    author_id?: IntFieldUpdateOperationsInput | number
    Mods?: ModUncheckedUpdateManyWithoutCollectionInput
  }

  export type Mods_CollectionCreateManyInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    author_id: number
  }

  export type Mods_CollectionUpdateManyMutationInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Mods_CollectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModCreateInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Collection: Mods_CollectionCreateNestedOneWithoutModsInput
    Images?: Mod_ImageCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorCreateNestedManyWithoutModInput
    Tags?: Mod_TagCreateNestedManyWithoutModInput
    Versions?: Mod_VersionCreateNestedManyWithoutModInput
    Lists?: Mods_ListCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadCreateNestedManyWithoutModInput
  }

  export type ModUncheckedCreateInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    collection_id: number
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Images?: Mod_ImageUncheckedCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: Mod_TagUncheckedCreateNestedManyWithoutModInput
    Versions?: Mod_VersionUncheckedCreateNestedManyWithoutModInput
    Lists?: Mods_ListUncheckedCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedCreateNestedManyWithoutModInput
  }

  export type ModUpdateInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Collection?: Mods_CollectionUpdateOneRequiredWithoutModsInput
    Images?: Mod_ImageUpdateManyWithoutModInput
    Authors?: Mod_AuthorUpdateManyWithoutModInput
    Tags?: Mod_TagUpdateManyWithoutModInput
    Versions?: Mod_VersionUpdateManyWithoutModInput
    Lists?: Mods_ListUpdateManyWithoutModsInput
    Issues?: Mod_IssueUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUpdateManyWithoutModInput
  }

  export type ModUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    collection_id?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Images?: Mod_ImageUncheckedUpdateManyWithoutModInput
    Authors?: Mod_AuthorUncheckedUpdateManyWithoutModInput
    Tags?: Mod_TagUncheckedUpdateManyWithoutModInput
    Versions?: Mod_VersionUncheckedUpdateManyWithoutModInput
    Lists?: Mods_ListUncheckedUpdateManyWithoutModsInput
    Issues?: Mod_IssueUncheckedUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedUpdateManyWithoutModInput
  }

  export type ModCreateManyInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    collection_id: number
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
  }

  export type ModUpdateManyMutationInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
  }

  export type ModUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    collection_id?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_AuthorCreateInput = {
    type: number
    User: UserCreateNestedOneWithoutModAuthorsInput
    Mod: ModCreateNestedOneWithoutAuthorsInput
  }

  export type Mod_AuthorUncheckedCreateInput = {
    mod_id: number
    user_id: number
    type: number
  }

  export type Mod_AuthorUpdateInput = {
    type?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutModAuthorsInput
    Mod?: ModUpdateOneRequiredWithoutAuthorsInput
  }

  export type Mod_AuthorUncheckedUpdateInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_AuthorCreateManyInput = {
    mod_id: number
    user_id: number
    type: number
  }

  export type Mod_AuthorUpdateManyMutationInput = {
    type?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_AuthorUncheckedUpdateManyInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_ImageCreateInput = {
    url: string
    Mod: ModCreateNestedOneWithoutImagesInput
  }

  export type Mod_ImageUncheckedCreateInput = {
    id?: number
    mod_id: number
    url: string
  }

  export type Mod_ImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    Mod?: ModUpdateOneRequiredWithoutImagesInput
  }

  export type Mod_ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_ImageCreateManyInput = {
    id?: number
    mod_id: number
    url: string
  }

  export type Mod_ImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_TagCreateInput = {
    name: string
    Mod?: ModCreateNestedManyWithoutTagsInput
  }

  export type Mod_TagUncheckedCreateInput = {
    id?: number
    name: string
    Mod?: ModUncheckedCreateNestedManyWithoutTagsInput
  }

  export type Mod_TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Mod?: ModUpdateManyWithoutTagsInput
  }

  export type Mod_TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Mod?: ModUncheckedUpdateManyWithoutTagsInput
  }

  export type Mod_TagCreateManyInput = {
    id?: number
    name: string
  }

  export type Mod_TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_VersionCreateInput = {
    version: string
    game_version: string
    releaseDate?: Date | string
    Mod: ModCreateNestedOneWithoutVersionsInput
    Downloads?: Mod_DownloadCreateNestedManyWithoutVersionInput
  }

  export type Mod_VersionUncheckedCreateInput = {
    id?: number
    mod_id: number
    version: string
    game_version: string
    releaseDate?: Date | string
    Downloads?: Mod_DownloadUncheckedCreateNestedManyWithoutVersionInput
  }

  export type Mod_VersionUpdateInput = {
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Mod?: ModUpdateOneRequiredWithoutVersionsInput
    Downloads?: Mod_DownloadUpdateManyWithoutVersionInput
  }

  export type Mod_VersionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Downloads?: Mod_DownloadUncheckedUpdateManyWithoutVersionInput
  }

  export type Mod_VersionCreateManyInput = {
    id?: number
    mod_id: number
    version: string
    game_version: string
    releaseDate?: Date | string
  }

  export type Mod_VersionUpdateManyMutationInput = {
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Mod_VersionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Mod_IssueCreateInput = {
    name: string
    type: Mod_Issue_Type
    createDate?: Date | string
    Mod: ModCreateNestedOneWithoutIssuesInput
    Author: UserCreateNestedOneWithoutModIssuesInput
    ModIssuePost?: Mod_Issue_PostCreateNestedManyWithoutIssueInput
  }

  export type Mod_IssueUncheckedCreateInput = {
    id?: number
    mod_id: number
    name: string
    type: Mod_Issue_Type
    author_id: number
    createDate?: Date | string
    ModIssuePost?: Mod_Issue_PostUncheckedCreateNestedManyWithoutIssueInput
  }

  export type Mod_IssueUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMod_Issue_TypeFieldUpdateOperationsInput | Mod_Issue_Type
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Mod?: ModUpdateOneRequiredWithoutIssuesInput
    Author?: UserUpdateOneRequiredWithoutModIssuesInput
    ModIssuePost?: Mod_Issue_PostUpdateManyWithoutIssueInput
  }

  export type Mod_IssueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMod_Issue_TypeFieldUpdateOperationsInput | Mod_Issue_Type
    author_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ModIssuePost?: Mod_Issue_PostUncheckedUpdateManyWithoutIssueInput
  }

  export type Mod_IssueCreateManyInput = {
    id?: number
    mod_id: number
    name: string
    type: Mod_Issue_Type
    author_id: number
    createDate?: Date | string
  }

  export type Mod_IssueUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMod_Issue_TypeFieldUpdateOperationsInput | Mod_Issue_Type
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Mod_IssueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMod_Issue_TypeFieldUpdateOperationsInput | Mod_Issue_Type
    author_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Mod_Issue_PostCreateInput = {
    createDate?: Date | string
    text: string
    Issue: Mod_IssueCreateNestedOneWithoutModIssuePostInput
    Author: UserCreateNestedOneWithoutModIssuePostsInput
  }

  export type Mod_Issue_PostUncheckedCreateInput = {
    id?: number
    issue_id: number
    author_id: number
    createDate?: Date | string
    text: string
  }

  export type Mod_Issue_PostUpdateInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    Issue?: Mod_IssueUpdateOneRequiredWithoutModIssuePostInput
    Author?: UserUpdateOneRequiredWithoutModIssuePostsInput
  }

  export type Mod_Issue_PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_Issue_PostCreateManyInput = {
    id?: number
    issue_id: number
    author_id: number
    createDate?: Date | string
    text: string
  }

  export type Mod_Issue_PostUpdateManyMutationInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_Issue_PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type Mods_ListCreateInput = {
    is_public: boolean
    name: string
    Author: UserCreateNestedOneWithoutModsListsInput
    Mods?: ModCreateNestedManyWithoutListsInput
  }

  export type Mods_ListUncheckedCreateInput = {
    id?: number
    author_id: number
    is_public: boolean
    name: string
    Mods?: ModUncheckedCreateNestedManyWithoutListsInput
  }

  export type Mods_ListUpdateInput = {
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    Author?: UserUpdateOneRequiredWithoutModsListsInput
    Mods?: ModUpdateManyWithoutListsInput
  }

  export type Mods_ListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    Mods?: ModUncheckedUpdateManyWithoutListsInput
  }

  export type Mods_ListCreateManyInput = {
    id?: number
    author_id: number
    is_public: boolean
    name: string
  }

  export type Mods_ListUpdateManyMutationInput = {
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Mods_ListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Mods_FavoritsCreateInput = {
    User: UserCreateNestedOneWithoutModsFavoritsInput
    Mod: ModCreateNestedOneWithoutFavoritsInput
  }

  export type Mods_FavoritsUncheckedCreateInput = {
    user_id: number
    mod_id: number
  }

  export type Mods_FavoritsUpdateInput = {
    User?: UserUpdateOneRequiredWithoutModsFavoritsInput
    Mod?: ModUpdateOneRequiredWithoutFavoritsInput
  }

  export type Mods_FavoritsUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mods_FavoritsCreateManyInput = {
    user_id: number
    mod_id: number
  }

  export type Mods_FavoritsUpdateManyMutationInput = {

  }

  export type Mods_FavoritsUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_SubscribersCreateInput = {
    User: UserCreateNestedOneWithoutModSubscribersInput
    Mod: ModCreateNestedOneWithoutSubscribersInput
  }

  export type Mod_SubscribersUncheckedCreateInput = {
    user_id: number
    mod_id: number
  }

  export type Mod_SubscribersUpdateInput = {
    User?: UserUpdateOneRequiredWithoutModSubscribersInput
    Mod?: ModUpdateOneRequiredWithoutSubscribersInput
  }

  export type Mod_SubscribersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_SubscribersCreateManyInput = {
    user_id: number
    mod_id: number
  }

  export type Mod_SubscribersUpdateManyMutationInput = {

  }

  export type Mod_SubscribersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_DownloadCreateInput = {
    User: UserCreateNestedOneWithoutModDownloadsInput
    Mod: ModCreateNestedOneWithoutDownloadsInput
    Version: Mod_VersionCreateNestedOneWithoutDownloadsInput
  }

  export type Mod_DownloadUncheckedCreateInput = {
    user_id: number
    mod_id: number
    version_id: number
  }

  export type Mod_DownloadUpdateInput = {
    User?: UserUpdateOneRequiredWithoutModDownloadsInput
    Mod?: ModUpdateOneRequiredWithoutDownloadsInput
    Version?: Mod_VersionUpdateOneRequiredWithoutDownloadsInput
  }

  export type Mod_DownloadUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_DownloadCreateManyInput = {
    user_id: number
    mod_id: number
    version_id: number
  }

  export type Mod_DownloadUpdateManyMutationInput = {

  }

  export type Mod_DownloadUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
  }

  export type User_SessionCreateInput = {
    userAgent: string
    userAgentName: string
    osName: string
    deviceName: string
    name: string
    uuid: string
    ipv4: string
    fingerprint_id: string
    is_active?: boolean
    createDate?: Date | string
    User: UserCreateNestedOneWithoutUserSessionInput
    Tokens?: User_TokenCreateNestedManyWithoutSessionInput
  }

  export type User_SessionUncheckedCreateInput = {
    id?: number
    userId: number
    userAgent: string
    userAgentName: string
    osName: string
    deviceName: string
    name: string
    uuid: string
    ipv4: string
    fingerprint_id: string
    is_active?: boolean
    createDate?: Date | string
    Tokens?: User_TokenUncheckedCreateNestedManyWithoutSessionInput
  }

  export type User_SessionUpdateInput = {
    userAgent?: StringFieldUpdateOperationsInput | string
    userAgentName?: StringFieldUpdateOperationsInput | string
    osName?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    ipv4?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUserSessionInput
    Tokens?: User_TokenUpdateManyWithoutSessionInput
  }

  export type User_SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    userAgentName?: StringFieldUpdateOperationsInput | string
    osName?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    ipv4?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Tokens?: User_TokenUncheckedUpdateManyWithoutSessionInput
  }

  export type User_SessionCreateManyInput = {
    id?: number
    userId: number
    userAgent: string
    userAgentName: string
    osName: string
    deviceName: string
    name: string
    uuid: string
    ipv4: string
    fingerprint_id: string
    is_active?: boolean
    createDate?: Date | string
  }

  export type User_SessionUpdateManyMutationInput = {
    userAgent?: StringFieldUpdateOperationsInput | string
    userAgentName?: StringFieldUpdateOperationsInput | string
    osName?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    ipv4?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    userAgentName?: StringFieldUpdateOperationsInput | string
    osName?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    ipv4?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_TokenCreateInput = {
    access_token: string
    refresh_token: string
    createDate?: Date | string
    is_enable?: boolean
    is_super_access?: boolean
    Session: User_SessionCreateNestedOneWithoutTokensInput
  }

  export type User_TokenUncheckedCreateInput = {
    id?: number
    sessionId: number
    access_token: string
    refresh_token: string
    createDate?: Date | string
    is_enable?: boolean
    is_super_access?: boolean
  }

  export type User_TokenUpdateInput = {
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_enable?: BoolFieldUpdateOperationsInput | boolean
    is_super_access?: BoolFieldUpdateOperationsInput | boolean
    Session?: User_SessionUpdateOneRequiredWithoutTokensInput
  }

  export type User_TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_enable?: BoolFieldUpdateOperationsInput | boolean
    is_super_access?: BoolFieldUpdateOperationsInput | boolean
  }

  export type User_TokenCreateManyInput = {
    id?: number
    sessionId: number
    access_token: string
    refresh_token: string
    createDate?: Date | string
    is_enable?: boolean
    is_super_access?: boolean
  }

  export type User_TokenUpdateManyMutationInput = {
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_enable?: BoolFieldUpdateOperationsInput | boolean
    is_super_access?: BoolFieldUpdateOperationsInput | boolean
  }

  export type User_TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_enable?: BoolFieldUpdateOperationsInput | boolean
    is_super_access?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type User_AuthRelationFilter = {
    is?: User_AuthWhereInput | null
    isNot?: User_AuthWhereInput | null
  }

  export type Mods_CollectionListRelationFilter = {
    every?: Mods_CollectionWhereInput
    some?: Mods_CollectionWhereInput
    none?: Mods_CollectionWhereInput
  }

  export type Mod_AuthorListRelationFilter = {
    every?: Mod_AuthorWhereInput
    some?: Mod_AuthorWhereInput
    none?: Mod_AuthorWhereInput
  }

  export type Mod_IssueListRelationFilter = {
    every?: Mod_IssueWhereInput
    some?: Mod_IssueWhereInput
    none?: Mod_IssueWhereInput
  }

  export type Mod_Issue_PostListRelationFilter = {
    every?: Mod_Issue_PostWhereInput
    some?: Mod_Issue_PostWhereInput
    none?: Mod_Issue_PostWhereInput
  }

  export type Mods_ListListRelationFilter = {
    every?: Mods_ListWhereInput
    some?: Mods_ListWhereInput
    none?: Mods_ListWhereInput
  }

  export type Mods_FavoritsListRelationFilter = {
    every?: Mods_FavoritsWhereInput
    some?: Mods_FavoritsWhereInput
    none?: Mods_FavoritsWhereInput
  }

  export type Mod_SubscribersListRelationFilter = {
    every?: Mod_SubscribersWhereInput
    some?: Mod_SubscribersWhereInput
    none?: Mod_SubscribersWhereInput
  }

  export type Mod_DownloadListRelationFilter = {
    every?: Mod_DownloadWhereInput
    some?: Mod_DownloadWhereInput
    none?: Mod_DownloadWhereInput
  }

  export type User_SessionListRelationFilter = {
    every?: User_SessionWhereInput
    some?: User_SessionWhereInput
    none?: User_SessionWhereInput
  }

  export type Mods_CollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Mod_AuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Mod_IssueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Mod_Issue_PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Mods_ListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Mods_FavoritsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Mod_SubscribersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Mod_DownloadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type User_SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nick?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    avatar?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nick?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    avatar?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nick?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    avatar?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type User_AuthCountOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_active?: SortOrder
  }

  export type User_AuthAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type User_AuthMaxOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_active?: SortOrder
  }

  export type User_AuthMinOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_active?: SortOrder
  }

  export type User_AuthSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ModListRelationFilter = {
    every?: ModWhereInput
    some?: ModWhereInput
    none?: ModWhereInput
  }

  export type ModOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Mods_CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    author_id?: SortOrder
  }

  export type Mods_CollectionAvgOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
  }

  export type Mods_CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    author_id?: SortOrder
  }

  export type Mods_CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    author_id?: SortOrder
  }

  export type Mods_CollectionSumOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
  }

  export type Mods_CollectionRelationFilter = {
    is?: Mods_CollectionWhereInput
    isNot?: Mods_CollectionWhereInput
  }

  export type Mod_ImageListRelationFilter = {
    every?: Mod_ImageWhereInput
    some?: Mod_ImageWhereInput
    none?: Mod_ImageWhereInput
  }

  export type Mod_TagListRelationFilter = {
    every?: Mod_TagWhereInput
    some?: Mod_TagWhereInput
    none?: Mod_TagWhereInput
  }

  export type Mod_VersionListRelationFilter = {
    every?: Mod_VersionWhereInput
    some?: Mod_VersionWhereInput
    none?: Mod_VersionWhereInput
  }

  export type Mod_ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Mod_TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Mod_VersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModCountOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    collection_id?: SortOrder
    views?: SortOrder
    readme_type?: SortOrder
    readme?: SortOrder
    change_list_type?: SortOrder
    change_list?: SortOrder
    repository?: SortOrder
    docs_url?: SortOrder
  }

  export type ModAvgOrderByAggregateInput = {
    id?: SortOrder
    collection_id?: SortOrder
    views?: SortOrder
    readme_type?: SortOrder
    change_list_type?: SortOrder
  }

  export type ModMaxOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    collection_id?: SortOrder
    views?: SortOrder
    readme_type?: SortOrder
    readme?: SortOrder
    change_list_type?: SortOrder
    change_list?: SortOrder
    repository?: SortOrder
    docs_url?: SortOrder
  }

  export type ModMinOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    collection_id?: SortOrder
    views?: SortOrder
    readme_type?: SortOrder
    readme?: SortOrder
    change_list_type?: SortOrder
    change_list?: SortOrder
    repository?: SortOrder
    docs_url?: SortOrder
  }

  export type ModSumOrderByAggregateInput = {
    id?: SortOrder
    collection_id?: SortOrder
    views?: SortOrder
    readme_type?: SortOrder
    change_list_type?: SortOrder
  }

  export type ModRelationFilter = {
    is?: ModWhereInput
    isNot?: ModWhereInput
  }

  export type Mod_AuthorMod_idUser_idCompoundUniqueInput = {
    mod_id: number
    user_id: number
  }

  export type Mod_AuthorCountOrderByAggregateInput = {
    mod_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
  }

  export type Mod_AuthorAvgOrderByAggregateInput = {
    mod_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
  }

  export type Mod_AuthorMaxOrderByAggregateInput = {
    mod_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
  }

  export type Mod_AuthorMinOrderByAggregateInput = {
    mod_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
  }

  export type Mod_AuthorSumOrderByAggregateInput = {
    mod_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
  }

  export type Mod_ImageCountOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    url?: SortOrder
  }

  export type Mod_ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
  }

  export type Mod_ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    url?: SortOrder
  }

  export type Mod_ImageMinOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    url?: SortOrder
  }

  export type Mod_ImageSumOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
  }

  export type Mod_TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Mod_TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Mod_TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Mod_TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Mod_TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Mod_VersionCountOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    version?: SortOrder
    game_version?: SortOrder
    releaseDate?: SortOrder
  }

  export type Mod_VersionAvgOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
  }

  export type Mod_VersionMaxOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    version?: SortOrder
    game_version?: SortOrder
    releaseDate?: SortOrder
  }

  export type Mod_VersionMinOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    version?: SortOrder
    game_version?: SortOrder
    releaseDate?: SortOrder
  }

  export type Mod_VersionSumOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
  }

  export type EnumMod_Issue_TypeFilter = {
    equals?: Mod_Issue_Type
    in?: Enumerable<Mod_Issue_Type>
    notIn?: Enumerable<Mod_Issue_Type>
    not?: NestedEnumMod_Issue_TypeFilter | Mod_Issue_Type
  }

  export type Mod_IssueCountOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
  }

  export type Mod_IssueAvgOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    author_id?: SortOrder
  }

  export type Mod_IssueMaxOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
  }

  export type Mod_IssueMinOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
  }

  export type Mod_IssueSumOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    author_id?: SortOrder
  }

  export type EnumMod_Issue_TypeWithAggregatesFilter = {
    equals?: Mod_Issue_Type
    in?: Enumerable<Mod_Issue_Type>
    notIn?: Enumerable<Mod_Issue_Type>
    not?: NestedEnumMod_Issue_TypeWithAggregatesFilter | Mod_Issue_Type
    _count?: NestedIntFilter
    _min?: NestedEnumMod_Issue_TypeFilter
    _max?: NestedEnumMod_Issue_TypeFilter
  }

  export type Mod_IssueRelationFilter = {
    is?: Mod_IssueWhereInput
    isNot?: Mod_IssueWhereInput
  }

  export type Mod_Issue_PostCountOrderByAggregateInput = {
    id?: SortOrder
    issue_id?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
    text?: SortOrder
  }

  export type Mod_Issue_PostAvgOrderByAggregateInput = {
    id?: SortOrder
    issue_id?: SortOrder
    author_id?: SortOrder
  }

  export type Mod_Issue_PostMaxOrderByAggregateInput = {
    id?: SortOrder
    issue_id?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
    text?: SortOrder
  }

  export type Mod_Issue_PostMinOrderByAggregateInput = {
    id?: SortOrder
    issue_id?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
    text?: SortOrder
  }

  export type Mod_Issue_PostSumOrderByAggregateInput = {
    id?: SortOrder
    issue_id?: SortOrder
    author_id?: SortOrder
  }

  export type Mods_ListCountOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    is_public?: SortOrder
    name?: SortOrder
  }

  export type Mods_ListAvgOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
  }

  export type Mods_ListMaxOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    is_public?: SortOrder
    name?: SortOrder
  }

  export type Mods_ListMinOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    is_public?: SortOrder
    name?: SortOrder
  }

  export type Mods_ListSumOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
  }

  export type Mods_FavoritsMod_idUser_idCompoundUniqueInput = {
    mod_id: number
    user_id: number
  }

  export type Mods_FavoritsCountOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type Mods_FavoritsAvgOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type Mods_FavoritsMaxOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type Mods_FavoritsMinOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type Mods_FavoritsSumOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type Mod_SubscribersMod_idUser_idCompoundUniqueInput = {
    mod_id: number
    user_id: number
  }

  export type Mod_SubscribersCountOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type Mod_SubscribersAvgOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type Mod_SubscribersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type Mod_SubscribersMinOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type Mod_SubscribersSumOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type Mod_VersionRelationFilter = {
    is?: Mod_VersionWhereInput
    isNot?: Mod_VersionWhereInput
  }

  export type Mod_DownloadUser_idMod_idCompoundUniqueInput = {
    user_id: number
    mod_id: number
  }

  export type Mod_DownloadCountOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    version_id?: SortOrder
  }

  export type Mod_DownloadAvgOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    version_id?: SortOrder
  }

  export type Mod_DownloadMaxOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    version_id?: SortOrder
  }

  export type Mod_DownloadMinOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    version_id?: SortOrder
  }

  export type Mod_DownloadSumOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    version_id?: SortOrder
  }

  export type User_TokenListRelationFilter = {
    every?: User_TokenWhereInput
    some?: User_TokenWhereInput
    none?: User_TokenWhereInput
  }

  export type User_TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type User_SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    userAgentName?: SortOrder
    osName?: SortOrder
    deviceName?: SortOrder
    name?: SortOrder
    uuid?: SortOrder
    ipv4?: SortOrder
    fingerprint_id?: SortOrder
    is_active?: SortOrder
    createDate?: SortOrder
  }

  export type User_SessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type User_SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    userAgentName?: SortOrder
    osName?: SortOrder
    deviceName?: SortOrder
    name?: SortOrder
    uuid?: SortOrder
    ipv4?: SortOrder
    fingerprint_id?: SortOrder
    is_active?: SortOrder
    createDate?: SortOrder
  }

  export type User_SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    userAgentName?: SortOrder
    osName?: SortOrder
    deviceName?: SortOrder
    name?: SortOrder
    uuid?: SortOrder
    ipv4?: SortOrder
    fingerprint_id?: SortOrder
    is_active?: SortOrder
    createDate?: SortOrder
  }

  export type User_SessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type User_SessionRelationFilter = {
    is?: User_SessionWhereInput
    isNot?: User_SessionWhereInput
  }

  export type User_TokenCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    createDate?: SortOrder
    is_enable?: SortOrder
    is_super_access?: SortOrder
  }

  export type User_TokenAvgOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
  }

  export type User_TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    createDate?: SortOrder
    is_enable?: SortOrder
    is_super_access?: SortOrder
  }

  export type User_TokenMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    createDate?: SortOrder
    is_enable?: SortOrder
    is_super_access?: SortOrder
  }

  export type User_TokenSumOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
  }

  export type User_AuthCreateNestedOneWithoutUserInput = {
    create?: XOR<User_AuthCreateWithoutUserInput, User_AuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: User_AuthCreateOrConnectWithoutUserInput
    connect?: User_AuthWhereUniqueInput
  }

  export type Mods_CollectionCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Mods_CollectionCreateWithoutAuthorInput>, Enumerable<Mods_CollectionUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Mods_CollectionCreateOrConnectWithoutAuthorInput>
    createMany?: Mods_CollectionCreateManyAuthorInputEnvelope
    connect?: Enumerable<Mods_CollectionWhereUniqueInput>
  }

  export type Mod_AuthorCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<Mod_AuthorCreateWithoutUserInput>, Enumerable<Mod_AuthorUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<Mod_AuthorCreateOrConnectWithoutUserInput>
    createMany?: Mod_AuthorCreateManyUserInputEnvelope
    connect?: Enumerable<Mod_AuthorWhereUniqueInput>
  }

  export type Mod_IssueCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Mod_IssueCreateWithoutAuthorInput>, Enumerable<Mod_IssueUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Mod_IssueCreateOrConnectWithoutAuthorInput>
    createMany?: Mod_IssueCreateManyAuthorInputEnvelope
    connect?: Enumerable<Mod_IssueWhereUniqueInput>
  }

  export type Mod_Issue_PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Mod_Issue_PostCreateWithoutAuthorInput>, Enumerable<Mod_Issue_PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Mod_Issue_PostCreateOrConnectWithoutAuthorInput>
    createMany?: Mod_Issue_PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<Mod_Issue_PostWhereUniqueInput>
  }

  export type Mods_ListCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Mods_ListCreateWithoutAuthorInput>, Enumerable<Mods_ListUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Mods_ListCreateOrConnectWithoutAuthorInput>
    createMany?: Mods_ListCreateManyAuthorInputEnvelope
    connect?: Enumerable<Mods_ListWhereUniqueInput>
  }

  export type Mods_FavoritsCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<Mods_FavoritsCreateWithoutUserInput>, Enumerable<Mods_FavoritsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<Mods_FavoritsCreateOrConnectWithoutUserInput>
    createMany?: Mods_FavoritsCreateManyUserInputEnvelope
    connect?: Enumerable<Mods_FavoritsWhereUniqueInput>
  }

  export type Mod_SubscribersCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<Mod_SubscribersCreateWithoutUserInput>, Enumerable<Mod_SubscribersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<Mod_SubscribersCreateOrConnectWithoutUserInput>
    createMany?: Mod_SubscribersCreateManyUserInputEnvelope
    connect?: Enumerable<Mod_SubscribersWhereUniqueInput>
  }

  export type Mod_DownloadCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<Mod_DownloadCreateWithoutUserInput>, Enumerable<Mod_DownloadUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<Mod_DownloadCreateOrConnectWithoutUserInput>
    createMany?: Mod_DownloadCreateManyUserInputEnvelope
    connect?: Enumerable<Mod_DownloadWhereUniqueInput>
  }

  export type User_SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<User_SessionCreateWithoutUserInput>, Enumerable<User_SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<User_SessionCreateOrConnectWithoutUserInput>
    createMany?: User_SessionCreateManyUserInputEnvelope
    connect?: Enumerable<User_SessionWhereUniqueInput>
  }

  export type User_AuthUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<User_AuthCreateWithoutUserInput, User_AuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: User_AuthCreateOrConnectWithoutUserInput
    connect?: User_AuthWhereUniqueInput
  }

  export type Mods_CollectionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Mods_CollectionCreateWithoutAuthorInput>, Enumerable<Mods_CollectionUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Mods_CollectionCreateOrConnectWithoutAuthorInput>
    createMany?: Mods_CollectionCreateManyAuthorInputEnvelope
    connect?: Enumerable<Mods_CollectionWhereUniqueInput>
  }

  export type Mod_AuthorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<Mod_AuthorCreateWithoutUserInput>, Enumerable<Mod_AuthorUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<Mod_AuthorCreateOrConnectWithoutUserInput>
    createMany?: Mod_AuthorCreateManyUserInputEnvelope
    connect?: Enumerable<Mod_AuthorWhereUniqueInput>
  }

  export type Mod_IssueUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Mod_IssueCreateWithoutAuthorInput>, Enumerable<Mod_IssueUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Mod_IssueCreateOrConnectWithoutAuthorInput>
    createMany?: Mod_IssueCreateManyAuthorInputEnvelope
    connect?: Enumerable<Mod_IssueWhereUniqueInput>
  }

  export type Mod_Issue_PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Mod_Issue_PostCreateWithoutAuthorInput>, Enumerable<Mod_Issue_PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Mod_Issue_PostCreateOrConnectWithoutAuthorInput>
    createMany?: Mod_Issue_PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<Mod_Issue_PostWhereUniqueInput>
  }

  export type Mods_ListUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Mods_ListCreateWithoutAuthorInput>, Enumerable<Mods_ListUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Mods_ListCreateOrConnectWithoutAuthorInput>
    createMany?: Mods_ListCreateManyAuthorInputEnvelope
    connect?: Enumerable<Mods_ListWhereUniqueInput>
  }

  export type Mods_FavoritsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<Mods_FavoritsCreateWithoutUserInput>, Enumerable<Mods_FavoritsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<Mods_FavoritsCreateOrConnectWithoutUserInput>
    createMany?: Mods_FavoritsCreateManyUserInputEnvelope
    connect?: Enumerable<Mods_FavoritsWhereUniqueInput>
  }

  export type Mod_SubscribersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<Mod_SubscribersCreateWithoutUserInput>, Enumerable<Mod_SubscribersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<Mod_SubscribersCreateOrConnectWithoutUserInput>
    createMany?: Mod_SubscribersCreateManyUserInputEnvelope
    connect?: Enumerable<Mod_SubscribersWhereUniqueInput>
  }

  export type Mod_DownloadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<Mod_DownloadCreateWithoutUserInput>, Enumerable<Mod_DownloadUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<Mod_DownloadCreateOrConnectWithoutUserInput>
    createMany?: Mod_DownloadCreateManyUserInputEnvelope
    connect?: Enumerable<Mod_DownloadWhereUniqueInput>
  }

  export type User_SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<User_SessionCreateWithoutUserInput>, Enumerable<User_SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<User_SessionCreateOrConnectWithoutUserInput>
    createMany?: User_SessionCreateManyUserInputEnvelope
    connect?: Enumerable<User_SessionWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type User_AuthUpdateOneWithoutUserInput = {
    create?: XOR<User_AuthCreateWithoutUserInput, User_AuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: User_AuthCreateOrConnectWithoutUserInput
    upsert?: User_AuthUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: User_AuthWhereUniqueInput
    update?: XOR<User_AuthUpdateWithoutUserInput, User_AuthUncheckedUpdateWithoutUserInput>
  }

  export type Mods_CollectionUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Mods_CollectionCreateWithoutAuthorInput>, Enumerable<Mods_CollectionUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Mods_CollectionCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<Mods_CollectionUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: Mods_CollectionCreateManyAuthorInputEnvelope
    set?: Enumerable<Mods_CollectionWhereUniqueInput>
    disconnect?: Enumerable<Mods_CollectionWhereUniqueInput>
    delete?: Enumerable<Mods_CollectionWhereUniqueInput>
    connect?: Enumerable<Mods_CollectionWhereUniqueInput>
    update?: Enumerable<Mods_CollectionUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<Mods_CollectionUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<Mods_CollectionScalarWhereInput>
  }

  export type Mod_AuthorUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<Mod_AuthorCreateWithoutUserInput>, Enumerable<Mod_AuthorUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<Mod_AuthorCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<Mod_AuthorUpsertWithWhereUniqueWithoutUserInput>
    createMany?: Mod_AuthorCreateManyUserInputEnvelope
    set?: Enumerable<Mod_AuthorWhereUniqueInput>
    disconnect?: Enumerable<Mod_AuthorWhereUniqueInput>
    delete?: Enumerable<Mod_AuthorWhereUniqueInput>
    connect?: Enumerable<Mod_AuthorWhereUniqueInput>
    update?: Enumerable<Mod_AuthorUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<Mod_AuthorUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<Mod_AuthorScalarWhereInput>
  }

  export type Mod_IssueUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Mod_IssueCreateWithoutAuthorInput>, Enumerable<Mod_IssueUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Mod_IssueCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<Mod_IssueUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: Mod_IssueCreateManyAuthorInputEnvelope
    set?: Enumerable<Mod_IssueWhereUniqueInput>
    disconnect?: Enumerable<Mod_IssueWhereUniqueInput>
    delete?: Enumerable<Mod_IssueWhereUniqueInput>
    connect?: Enumerable<Mod_IssueWhereUniqueInput>
    update?: Enumerable<Mod_IssueUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<Mod_IssueUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<Mod_IssueScalarWhereInput>
  }

  export type Mod_Issue_PostUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Mod_Issue_PostCreateWithoutAuthorInput>, Enumerable<Mod_Issue_PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Mod_Issue_PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<Mod_Issue_PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: Mod_Issue_PostCreateManyAuthorInputEnvelope
    set?: Enumerable<Mod_Issue_PostWhereUniqueInput>
    disconnect?: Enumerable<Mod_Issue_PostWhereUniqueInput>
    delete?: Enumerable<Mod_Issue_PostWhereUniqueInput>
    connect?: Enumerable<Mod_Issue_PostWhereUniqueInput>
    update?: Enumerable<Mod_Issue_PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<Mod_Issue_PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<Mod_Issue_PostScalarWhereInput>
  }

  export type Mods_ListUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Mods_ListCreateWithoutAuthorInput>, Enumerable<Mods_ListUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Mods_ListCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<Mods_ListUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: Mods_ListCreateManyAuthorInputEnvelope
    set?: Enumerable<Mods_ListWhereUniqueInput>
    disconnect?: Enumerable<Mods_ListWhereUniqueInput>
    delete?: Enumerable<Mods_ListWhereUniqueInput>
    connect?: Enumerable<Mods_ListWhereUniqueInput>
    update?: Enumerable<Mods_ListUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<Mods_ListUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<Mods_ListScalarWhereInput>
  }

  export type Mods_FavoritsUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<Mods_FavoritsCreateWithoutUserInput>, Enumerable<Mods_FavoritsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<Mods_FavoritsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<Mods_FavoritsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: Mods_FavoritsCreateManyUserInputEnvelope
    set?: Enumerable<Mods_FavoritsWhereUniqueInput>
    disconnect?: Enumerable<Mods_FavoritsWhereUniqueInput>
    delete?: Enumerable<Mods_FavoritsWhereUniqueInput>
    connect?: Enumerable<Mods_FavoritsWhereUniqueInput>
    update?: Enumerable<Mods_FavoritsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<Mods_FavoritsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<Mods_FavoritsScalarWhereInput>
  }

  export type Mod_SubscribersUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<Mod_SubscribersCreateWithoutUserInput>, Enumerable<Mod_SubscribersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<Mod_SubscribersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<Mod_SubscribersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: Mod_SubscribersCreateManyUserInputEnvelope
    set?: Enumerable<Mod_SubscribersWhereUniqueInput>
    disconnect?: Enumerable<Mod_SubscribersWhereUniqueInput>
    delete?: Enumerable<Mod_SubscribersWhereUniqueInput>
    connect?: Enumerable<Mod_SubscribersWhereUniqueInput>
    update?: Enumerable<Mod_SubscribersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<Mod_SubscribersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<Mod_SubscribersScalarWhereInput>
  }

  export type Mod_DownloadUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<Mod_DownloadCreateWithoutUserInput>, Enumerable<Mod_DownloadUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<Mod_DownloadCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<Mod_DownloadUpsertWithWhereUniqueWithoutUserInput>
    createMany?: Mod_DownloadCreateManyUserInputEnvelope
    set?: Enumerable<Mod_DownloadWhereUniqueInput>
    disconnect?: Enumerable<Mod_DownloadWhereUniqueInput>
    delete?: Enumerable<Mod_DownloadWhereUniqueInput>
    connect?: Enumerable<Mod_DownloadWhereUniqueInput>
    update?: Enumerable<Mod_DownloadUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<Mod_DownloadUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<Mod_DownloadScalarWhereInput>
  }

  export type User_SessionUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<User_SessionCreateWithoutUserInput>, Enumerable<User_SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<User_SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<User_SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: User_SessionCreateManyUserInputEnvelope
    set?: Enumerable<User_SessionWhereUniqueInput>
    disconnect?: Enumerable<User_SessionWhereUniqueInput>
    delete?: Enumerable<User_SessionWhereUniqueInput>
    connect?: Enumerable<User_SessionWhereUniqueInput>
    update?: Enumerable<User_SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<User_SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<User_SessionScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type User_AuthUncheckedUpdateOneWithoutUserInput = {
    create?: XOR<User_AuthCreateWithoutUserInput, User_AuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: User_AuthCreateOrConnectWithoutUserInput
    upsert?: User_AuthUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: User_AuthWhereUniqueInput
    update?: XOR<User_AuthUpdateWithoutUserInput, User_AuthUncheckedUpdateWithoutUserInput>
  }

  export type Mods_CollectionUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Mods_CollectionCreateWithoutAuthorInput>, Enumerable<Mods_CollectionUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Mods_CollectionCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<Mods_CollectionUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: Mods_CollectionCreateManyAuthorInputEnvelope
    set?: Enumerable<Mods_CollectionWhereUniqueInput>
    disconnect?: Enumerable<Mods_CollectionWhereUniqueInput>
    delete?: Enumerable<Mods_CollectionWhereUniqueInput>
    connect?: Enumerable<Mods_CollectionWhereUniqueInput>
    update?: Enumerable<Mods_CollectionUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<Mods_CollectionUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<Mods_CollectionScalarWhereInput>
  }

  export type Mod_AuthorUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<Mod_AuthorCreateWithoutUserInput>, Enumerable<Mod_AuthorUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<Mod_AuthorCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<Mod_AuthorUpsertWithWhereUniqueWithoutUserInput>
    createMany?: Mod_AuthorCreateManyUserInputEnvelope
    set?: Enumerable<Mod_AuthorWhereUniqueInput>
    disconnect?: Enumerable<Mod_AuthorWhereUniqueInput>
    delete?: Enumerable<Mod_AuthorWhereUniqueInput>
    connect?: Enumerable<Mod_AuthorWhereUniqueInput>
    update?: Enumerable<Mod_AuthorUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<Mod_AuthorUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<Mod_AuthorScalarWhereInput>
  }

  export type Mod_IssueUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Mod_IssueCreateWithoutAuthorInput>, Enumerable<Mod_IssueUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Mod_IssueCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<Mod_IssueUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: Mod_IssueCreateManyAuthorInputEnvelope
    set?: Enumerable<Mod_IssueWhereUniqueInput>
    disconnect?: Enumerable<Mod_IssueWhereUniqueInput>
    delete?: Enumerable<Mod_IssueWhereUniqueInput>
    connect?: Enumerable<Mod_IssueWhereUniqueInput>
    update?: Enumerable<Mod_IssueUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<Mod_IssueUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<Mod_IssueScalarWhereInput>
  }

  export type Mod_Issue_PostUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Mod_Issue_PostCreateWithoutAuthorInput>, Enumerable<Mod_Issue_PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Mod_Issue_PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<Mod_Issue_PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: Mod_Issue_PostCreateManyAuthorInputEnvelope
    set?: Enumerable<Mod_Issue_PostWhereUniqueInput>
    disconnect?: Enumerable<Mod_Issue_PostWhereUniqueInput>
    delete?: Enumerable<Mod_Issue_PostWhereUniqueInput>
    connect?: Enumerable<Mod_Issue_PostWhereUniqueInput>
    update?: Enumerable<Mod_Issue_PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<Mod_Issue_PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<Mod_Issue_PostScalarWhereInput>
  }

  export type Mods_ListUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Mods_ListCreateWithoutAuthorInput>, Enumerable<Mods_ListUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Mods_ListCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<Mods_ListUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: Mods_ListCreateManyAuthorInputEnvelope
    set?: Enumerable<Mods_ListWhereUniqueInput>
    disconnect?: Enumerable<Mods_ListWhereUniqueInput>
    delete?: Enumerable<Mods_ListWhereUniqueInput>
    connect?: Enumerable<Mods_ListWhereUniqueInput>
    update?: Enumerable<Mods_ListUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<Mods_ListUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<Mods_ListScalarWhereInput>
  }

  export type Mods_FavoritsUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<Mods_FavoritsCreateWithoutUserInput>, Enumerable<Mods_FavoritsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<Mods_FavoritsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<Mods_FavoritsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: Mods_FavoritsCreateManyUserInputEnvelope
    set?: Enumerable<Mods_FavoritsWhereUniqueInput>
    disconnect?: Enumerable<Mods_FavoritsWhereUniqueInput>
    delete?: Enumerable<Mods_FavoritsWhereUniqueInput>
    connect?: Enumerable<Mods_FavoritsWhereUniqueInput>
    update?: Enumerable<Mods_FavoritsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<Mods_FavoritsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<Mods_FavoritsScalarWhereInput>
  }

  export type Mod_SubscribersUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<Mod_SubscribersCreateWithoutUserInput>, Enumerable<Mod_SubscribersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<Mod_SubscribersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<Mod_SubscribersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: Mod_SubscribersCreateManyUserInputEnvelope
    set?: Enumerable<Mod_SubscribersWhereUniqueInput>
    disconnect?: Enumerable<Mod_SubscribersWhereUniqueInput>
    delete?: Enumerable<Mod_SubscribersWhereUniqueInput>
    connect?: Enumerable<Mod_SubscribersWhereUniqueInput>
    update?: Enumerable<Mod_SubscribersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<Mod_SubscribersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<Mod_SubscribersScalarWhereInput>
  }

  export type Mod_DownloadUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<Mod_DownloadCreateWithoutUserInput>, Enumerable<Mod_DownloadUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<Mod_DownloadCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<Mod_DownloadUpsertWithWhereUniqueWithoutUserInput>
    createMany?: Mod_DownloadCreateManyUserInputEnvelope
    set?: Enumerable<Mod_DownloadWhereUniqueInput>
    disconnect?: Enumerable<Mod_DownloadWhereUniqueInput>
    delete?: Enumerable<Mod_DownloadWhereUniqueInput>
    connect?: Enumerable<Mod_DownloadWhereUniqueInput>
    update?: Enumerable<Mod_DownloadUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<Mod_DownloadUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<Mod_DownloadScalarWhereInput>
  }

  export type User_SessionUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<User_SessionCreateWithoutUserInput>, Enumerable<User_SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<User_SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<User_SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: User_SessionCreateManyUserInputEnvelope
    set?: Enumerable<User_SessionWhereUniqueInput>
    disconnect?: Enumerable<User_SessionWhereUniqueInput>
    delete?: Enumerable<User_SessionWhereUniqueInput>
    connect?: Enumerable<User_SessionWhereUniqueInput>
    update?: Enumerable<User_SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<User_SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<User_SessionScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutUserAuthInput = {
    create?: XOR<UserCreateWithoutUserAuthInput, UserUncheckedCreateWithoutUserAuthInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAuthInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserAuthInput = {
    create?: XOR<UserCreateWithoutUserAuthInput, UserUncheckedCreateWithoutUserAuthInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAuthInput
    upsert?: UserUpsertWithoutUserAuthInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUserAuthInput, UserUncheckedUpdateWithoutUserAuthInput>
  }

  export type UserCreateNestedOneWithoutModsCollectionsInput = {
    create?: XOR<UserCreateWithoutModsCollectionsInput, UserUncheckedCreateWithoutModsCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModsCollectionsInput
    connect?: UserWhereUniqueInput
  }

  export type ModCreateNestedManyWithoutCollectionInput = {
    create?: XOR<Enumerable<ModCreateWithoutCollectionInput>, Enumerable<ModUncheckedCreateWithoutCollectionInput>>
    connectOrCreate?: Enumerable<ModCreateOrConnectWithoutCollectionInput>
    createMany?: ModCreateManyCollectionInputEnvelope
    connect?: Enumerable<ModWhereUniqueInput>
  }

  export type ModUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<Enumerable<ModCreateWithoutCollectionInput>, Enumerable<ModUncheckedCreateWithoutCollectionInput>>
    connectOrCreate?: Enumerable<ModCreateOrConnectWithoutCollectionInput>
    createMany?: ModCreateManyCollectionInputEnvelope
    connect?: Enumerable<ModWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutModsCollectionsInput = {
    create?: XOR<UserCreateWithoutModsCollectionsInput, UserUncheckedCreateWithoutModsCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModsCollectionsInput
    upsert?: UserUpsertWithoutModsCollectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutModsCollectionsInput, UserUncheckedUpdateWithoutModsCollectionsInput>
  }

  export type ModUpdateManyWithoutCollectionInput = {
    create?: XOR<Enumerable<ModCreateWithoutCollectionInput>, Enumerable<ModUncheckedCreateWithoutCollectionInput>>
    connectOrCreate?: Enumerable<ModCreateOrConnectWithoutCollectionInput>
    upsert?: Enumerable<ModUpsertWithWhereUniqueWithoutCollectionInput>
    createMany?: ModCreateManyCollectionInputEnvelope
    set?: Enumerable<ModWhereUniqueInput>
    disconnect?: Enumerable<ModWhereUniqueInput>
    delete?: Enumerable<ModWhereUniqueInput>
    connect?: Enumerable<ModWhereUniqueInput>
    update?: Enumerable<ModUpdateWithWhereUniqueWithoutCollectionInput>
    updateMany?: Enumerable<ModUpdateManyWithWhereWithoutCollectionInput>
    deleteMany?: Enumerable<ModScalarWhereInput>
  }

  export type ModUncheckedUpdateManyWithoutCollectionInput = {
    create?: XOR<Enumerable<ModCreateWithoutCollectionInput>, Enumerable<ModUncheckedCreateWithoutCollectionInput>>
    connectOrCreate?: Enumerable<ModCreateOrConnectWithoutCollectionInput>
    upsert?: Enumerable<ModUpsertWithWhereUniqueWithoutCollectionInput>
    createMany?: ModCreateManyCollectionInputEnvelope
    set?: Enumerable<ModWhereUniqueInput>
    disconnect?: Enumerable<ModWhereUniqueInput>
    delete?: Enumerable<ModWhereUniqueInput>
    connect?: Enumerable<ModWhereUniqueInput>
    update?: Enumerable<ModUpdateWithWhereUniqueWithoutCollectionInput>
    updateMany?: Enumerable<ModUpdateManyWithWhereWithoutCollectionInput>
    deleteMany?: Enumerable<ModScalarWhereInput>
  }

  export type Mods_CollectionCreateNestedOneWithoutModsInput = {
    create?: XOR<Mods_CollectionCreateWithoutModsInput, Mods_CollectionUncheckedCreateWithoutModsInput>
    connectOrCreate?: Mods_CollectionCreateOrConnectWithoutModsInput
    connect?: Mods_CollectionWhereUniqueInput
  }

  export type Mod_ImageCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_ImageCreateWithoutModInput>, Enumerable<Mod_ImageUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_ImageCreateOrConnectWithoutModInput>
    createMany?: Mod_ImageCreateManyModInputEnvelope
    connect?: Enumerable<Mod_ImageWhereUniqueInput>
  }

  export type Mod_AuthorCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_AuthorCreateWithoutModInput>, Enumerable<Mod_AuthorUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_AuthorCreateOrConnectWithoutModInput>
    createMany?: Mod_AuthorCreateManyModInputEnvelope
    connect?: Enumerable<Mod_AuthorWhereUniqueInput>
  }

  export type Mod_TagCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_TagCreateWithoutModInput>, Enumerable<Mod_TagUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_TagCreateOrConnectWithoutModInput>
    connect?: Enumerable<Mod_TagWhereUniqueInput>
  }

  export type Mod_VersionCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_VersionCreateWithoutModInput>, Enumerable<Mod_VersionUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_VersionCreateOrConnectWithoutModInput>
    createMany?: Mod_VersionCreateManyModInputEnvelope
    connect?: Enumerable<Mod_VersionWhereUniqueInput>
  }

  export type Mods_ListCreateNestedManyWithoutModsInput = {
    create?: XOR<Enumerable<Mods_ListCreateWithoutModsInput>, Enumerable<Mods_ListUncheckedCreateWithoutModsInput>>
    connectOrCreate?: Enumerable<Mods_ListCreateOrConnectWithoutModsInput>
    connect?: Enumerable<Mods_ListWhereUniqueInput>
  }

  export type Mod_IssueCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_IssueCreateWithoutModInput>, Enumerable<Mod_IssueUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_IssueCreateOrConnectWithoutModInput>
    createMany?: Mod_IssueCreateManyModInputEnvelope
    connect?: Enumerable<Mod_IssueWhereUniqueInput>
  }

  export type Mods_FavoritsCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<Mods_FavoritsCreateWithoutModInput>, Enumerable<Mods_FavoritsUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mods_FavoritsCreateOrConnectWithoutModInput>
    createMany?: Mods_FavoritsCreateManyModInputEnvelope
    connect?: Enumerable<Mods_FavoritsWhereUniqueInput>
  }

  export type Mod_SubscribersCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_SubscribersCreateWithoutModInput>, Enumerable<Mod_SubscribersUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_SubscribersCreateOrConnectWithoutModInput>
    createMany?: Mod_SubscribersCreateManyModInputEnvelope
    connect?: Enumerable<Mod_SubscribersWhereUniqueInput>
  }

  export type Mod_DownloadCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_DownloadCreateWithoutModInput>, Enumerable<Mod_DownloadUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_DownloadCreateOrConnectWithoutModInput>
    createMany?: Mod_DownloadCreateManyModInputEnvelope
    connect?: Enumerable<Mod_DownloadWhereUniqueInput>
  }

  export type Mod_ImageUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_ImageCreateWithoutModInput>, Enumerable<Mod_ImageUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_ImageCreateOrConnectWithoutModInput>
    createMany?: Mod_ImageCreateManyModInputEnvelope
    connect?: Enumerable<Mod_ImageWhereUniqueInput>
  }

  export type Mod_AuthorUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_AuthorCreateWithoutModInput>, Enumerable<Mod_AuthorUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_AuthorCreateOrConnectWithoutModInput>
    createMany?: Mod_AuthorCreateManyModInputEnvelope
    connect?: Enumerable<Mod_AuthorWhereUniqueInput>
  }

  export type Mod_TagUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_TagCreateWithoutModInput>, Enumerable<Mod_TagUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_TagCreateOrConnectWithoutModInput>
    connect?: Enumerable<Mod_TagWhereUniqueInput>
  }

  export type Mod_VersionUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_VersionCreateWithoutModInput>, Enumerable<Mod_VersionUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_VersionCreateOrConnectWithoutModInput>
    createMany?: Mod_VersionCreateManyModInputEnvelope
    connect?: Enumerable<Mod_VersionWhereUniqueInput>
  }

  export type Mods_ListUncheckedCreateNestedManyWithoutModsInput = {
    create?: XOR<Enumerable<Mods_ListCreateWithoutModsInput>, Enumerable<Mods_ListUncheckedCreateWithoutModsInput>>
    connectOrCreate?: Enumerable<Mods_ListCreateOrConnectWithoutModsInput>
    connect?: Enumerable<Mods_ListWhereUniqueInput>
  }

  export type Mod_IssueUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_IssueCreateWithoutModInput>, Enumerable<Mod_IssueUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_IssueCreateOrConnectWithoutModInput>
    createMany?: Mod_IssueCreateManyModInputEnvelope
    connect?: Enumerable<Mod_IssueWhereUniqueInput>
  }

  export type Mods_FavoritsUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<Mods_FavoritsCreateWithoutModInput>, Enumerable<Mods_FavoritsUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mods_FavoritsCreateOrConnectWithoutModInput>
    createMany?: Mods_FavoritsCreateManyModInputEnvelope
    connect?: Enumerable<Mods_FavoritsWhereUniqueInput>
  }

  export type Mod_SubscribersUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_SubscribersCreateWithoutModInput>, Enumerable<Mod_SubscribersUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_SubscribersCreateOrConnectWithoutModInput>
    createMany?: Mod_SubscribersCreateManyModInputEnvelope
    connect?: Enumerable<Mod_SubscribersWhereUniqueInput>
  }

  export type Mod_DownloadUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_DownloadCreateWithoutModInput>, Enumerable<Mod_DownloadUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_DownloadCreateOrConnectWithoutModInput>
    createMany?: Mod_DownloadCreateManyModInputEnvelope
    connect?: Enumerable<Mod_DownloadWhereUniqueInput>
  }

  export type Mods_CollectionUpdateOneRequiredWithoutModsInput = {
    create?: XOR<Mods_CollectionCreateWithoutModsInput, Mods_CollectionUncheckedCreateWithoutModsInput>
    connectOrCreate?: Mods_CollectionCreateOrConnectWithoutModsInput
    upsert?: Mods_CollectionUpsertWithoutModsInput
    connect?: Mods_CollectionWhereUniqueInput
    update?: XOR<Mods_CollectionUpdateWithoutModsInput, Mods_CollectionUncheckedUpdateWithoutModsInput>
  }

  export type Mod_ImageUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_ImageCreateWithoutModInput>, Enumerable<Mod_ImageUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_ImageCreateOrConnectWithoutModInput>
    upsert?: Enumerable<Mod_ImageUpsertWithWhereUniqueWithoutModInput>
    createMany?: Mod_ImageCreateManyModInputEnvelope
    set?: Enumerable<Mod_ImageWhereUniqueInput>
    disconnect?: Enumerable<Mod_ImageWhereUniqueInput>
    delete?: Enumerable<Mod_ImageWhereUniqueInput>
    connect?: Enumerable<Mod_ImageWhereUniqueInput>
    update?: Enumerable<Mod_ImageUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<Mod_ImageUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<Mod_ImageScalarWhereInput>
  }

  export type Mod_AuthorUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_AuthorCreateWithoutModInput>, Enumerable<Mod_AuthorUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_AuthorCreateOrConnectWithoutModInput>
    upsert?: Enumerable<Mod_AuthorUpsertWithWhereUniqueWithoutModInput>
    createMany?: Mod_AuthorCreateManyModInputEnvelope
    set?: Enumerable<Mod_AuthorWhereUniqueInput>
    disconnect?: Enumerable<Mod_AuthorWhereUniqueInput>
    delete?: Enumerable<Mod_AuthorWhereUniqueInput>
    connect?: Enumerable<Mod_AuthorWhereUniqueInput>
    update?: Enumerable<Mod_AuthorUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<Mod_AuthorUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<Mod_AuthorScalarWhereInput>
  }

  export type Mod_TagUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_TagCreateWithoutModInput>, Enumerable<Mod_TagUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_TagCreateOrConnectWithoutModInput>
    upsert?: Enumerable<Mod_TagUpsertWithWhereUniqueWithoutModInput>
    set?: Enumerable<Mod_TagWhereUniqueInput>
    disconnect?: Enumerable<Mod_TagWhereUniqueInput>
    delete?: Enumerable<Mod_TagWhereUniqueInput>
    connect?: Enumerable<Mod_TagWhereUniqueInput>
    update?: Enumerable<Mod_TagUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<Mod_TagUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<Mod_TagScalarWhereInput>
  }

  export type Mod_VersionUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_VersionCreateWithoutModInput>, Enumerable<Mod_VersionUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_VersionCreateOrConnectWithoutModInput>
    upsert?: Enumerable<Mod_VersionUpsertWithWhereUniqueWithoutModInput>
    createMany?: Mod_VersionCreateManyModInputEnvelope
    set?: Enumerable<Mod_VersionWhereUniqueInput>
    disconnect?: Enumerable<Mod_VersionWhereUniqueInput>
    delete?: Enumerable<Mod_VersionWhereUniqueInput>
    connect?: Enumerable<Mod_VersionWhereUniqueInput>
    update?: Enumerable<Mod_VersionUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<Mod_VersionUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<Mod_VersionScalarWhereInput>
  }

  export type Mods_ListUpdateManyWithoutModsInput = {
    create?: XOR<Enumerable<Mods_ListCreateWithoutModsInput>, Enumerable<Mods_ListUncheckedCreateWithoutModsInput>>
    connectOrCreate?: Enumerable<Mods_ListCreateOrConnectWithoutModsInput>
    upsert?: Enumerable<Mods_ListUpsertWithWhereUniqueWithoutModsInput>
    set?: Enumerable<Mods_ListWhereUniqueInput>
    disconnect?: Enumerable<Mods_ListWhereUniqueInput>
    delete?: Enumerable<Mods_ListWhereUniqueInput>
    connect?: Enumerable<Mods_ListWhereUniqueInput>
    update?: Enumerable<Mods_ListUpdateWithWhereUniqueWithoutModsInput>
    updateMany?: Enumerable<Mods_ListUpdateManyWithWhereWithoutModsInput>
    deleteMany?: Enumerable<Mods_ListScalarWhereInput>
  }

  export type Mod_IssueUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_IssueCreateWithoutModInput>, Enumerable<Mod_IssueUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_IssueCreateOrConnectWithoutModInput>
    upsert?: Enumerable<Mod_IssueUpsertWithWhereUniqueWithoutModInput>
    createMany?: Mod_IssueCreateManyModInputEnvelope
    set?: Enumerable<Mod_IssueWhereUniqueInput>
    disconnect?: Enumerable<Mod_IssueWhereUniqueInput>
    delete?: Enumerable<Mod_IssueWhereUniqueInput>
    connect?: Enumerable<Mod_IssueWhereUniqueInput>
    update?: Enumerable<Mod_IssueUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<Mod_IssueUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<Mod_IssueScalarWhereInput>
  }

  export type Mods_FavoritsUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<Mods_FavoritsCreateWithoutModInput>, Enumerable<Mods_FavoritsUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mods_FavoritsCreateOrConnectWithoutModInput>
    upsert?: Enumerable<Mods_FavoritsUpsertWithWhereUniqueWithoutModInput>
    createMany?: Mods_FavoritsCreateManyModInputEnvelope
    set?: Enumerable<Mods_FavoritsWhereUniqueInput>
    disconnect?: Enumerable<Mods_FavoritsWhereUniqueInput>
    delete?: Enumerable<Mods_FavoritsWhereUniqueInput>
    connect?: Enumerable<Mods_FavoritsWhereUniqueInput>
    update?: Enumerable<Mods_FavoritsUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<Mods_FavoritsUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<Mods_FavoritsScalarWhereInput>
  }

  export type Mod_SubscribersUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_SubscribersCreateWithoutModInput>, Enumerable<Mod_SubscribersUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_SubscribersCreateOrConnectWithoutModInput>
    upsert?: Enumerable<Mod_SubscribersUpsertWithWhereUniqueWithoutModInput>
    createMany?: Mod_SubscribersCreateManyModInputEnvelope
    set?: Enumerable<Mod_SubscribersWhereUniqueInput>
    disconnect?: Enumerable<Mod_SubscribersWhereUniqueInput>
    delete?: Enumerable<Mod_SubscribersWhereUniqueInput>
    connect?: Enumerable<Mod_SubscribersWhereUniqueInput>
    update?: Enumerable<Mod_SubscribersUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<Mod_SubscribersUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<Mod_SubscribersScalarWhereInput>
  }

  export type Mod_DownloadUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_DownloadCreateWithoutModInput>, Enumerable<Mod_DownloadUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_DownloadCreateOrConnectWithoutModInput>
    upsert?: Enumerable<Mod_DownloadUpsertWithWhereUniqueWithoutModInput>
    createMany?: Mod_DownloadCreateManyModInputEnvelope
    set?: Enumerable<Mod_DownloadWhereUniqueInput>
    disconnect?: Enumerable<Mod_DownloadWhereUniqueInput>
    delete?: Enumerable<Mod_DownloadWhereUniqueInput>
    connect?: Enumerable<Mod_DownloadWhereUniqueInput>
    update?: Enumerable<Mod_DownloadUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<Mod_DownloadUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<Mod_DownloadScalarWhereInput>
  }

  export type Mod_ImageUncheckedUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_ImageCreateWithoutModInput>, Enumerable<Mod_ImageUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_ImageCreateOrConnectWithoutModInput>
    upsert?: Enumerable<Mod_ImageUpsertWithWhereUniqueWithoutModInput>
    createMany?: Mod_ImageCreateManyModInputEnvelope
    set?: Enumerable<Mod_ImageWhereUniqueInput>
    disconnect?: Enumerable<Mod_ImageWhereUniqueInput>
    delete?: Enumerable<Mod_ImageWhereUniqueInput>
    connect?: Enumerable<Mod_ImageWhereUniqueInput>
    update?: Enumerable<Mod_ImageUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<Mod_ImageUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<Mod_ImageScalarWhereInput>
  }

  export type Mod_AuthorUncheckedUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_AuthorCreateWithoutModInput>, Enumerable<Mod_AuthorUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_AuthorCreateOrConnectWithoutModInput>
    upsert?: Enumerable<Mod_AuthorUpsertWithWhereUniqueWithoutModInput>
    createMany?: Mod_AuthorCreateManyModInputEnvelope
    set?: Enumerable<Mod_AuthorWhereUniqueInput>
    disconnect?: Enumerable<Mod_AuthorWhereUniqueInput>
    delete?: Enumerable<Mod_AuthorWhereUniqueInput>
    connect?: Enumerable<Mod_AuthorWhereUniqueInput>
    update?: Enumerable<Mod_AuthorUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<Mod_AuthorUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<Mod_AuthorScalarWhereInput>
  }

  export type Mod_TagUncheckedUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_TagCreateWithoutModInput>, Enumerable<Mod_TagUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_TagCreateOrConnectWithoutModInput>
    upsert?: Enumerable<Mod_TagUpsertWithWhereUniqueWithoutModInput>
    set?: Enumerable<Mod_TagWhereUniqueInput>
    disconnect?: Enumerable<Mod_TagWhereUniqueInput>
    delete?: Enumerable<Mod_TagWhereUniqueInput>
    connect?: Enumerable<Mod_TagWhereUniqueInput>
    update?: Enumerable<Mod_TagUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<Mod_TagUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<Mod_TagScalarWhereInput>
  }

  export type Mod_VersionUncheckedUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_VersionCreateWithoutModInput>, Enumerable<Mod_VersionUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_VersionCreateOrConnectWithoutModInput>
    upsert?: Enumerable<Mod_VersionUpsertWithWhereUniqueWithoutModInput>
    createMany?: Mod_VersionCreateManyModInputEnvelope
    set?: Enumerable<Mod_VersionWhereUniqueInput>
    disconnect?: Enumerable<Mod_VersionWhereUniqueInput>
    delete?: Enumerable<Mod_VersionWhereUniqueInput>
    connect?: Enumerable<Mod_VersionWhereUniqueInput>
    update?: Enumerable<Mod_VersionUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<Mod_VersionUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<Mod_VersionScalarWhereInput>
  }

  export type Mods_ListUncheckedUpdateManyWithoutModsInput = {
    create?: XOR<Enumerable<Mods_ListCreateWithoutModsInput>, Enumerable<Mods_ListUncheckedCreateWithoutModsInput>>
    connectOrCreate?: Enumerable<Mods_ListCreateOrConnectWithoutModsInput>
    upsert?: Enumerable<Mods_ListUpsertWithWhereUniqueWithoutModsInput>
    set?: Enumerable<Mods_ListWhereUniqueInput>
    disconnect?: Enumerable<Mods_ListWhereUniqueInput>
    delete?: Enumerable<Mods_ListWhereUniqueInput>
    connect?: Enumerable<Mods_ListWhereUniqueInput>
    update?: Enumerable<Mods_ListUpdateWithWhereUniqueWithoutModsInput>
    updateMany?: Enumerable<Mods_ListUpdateManyWithWhereWithoutModsInput>
    deleteMany?: Enumerable<Mods_ListScalarWhereInput>
  }

  export type Mod_IssueUncheckedUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_IssueCreateWithoutModInput>, Enumerable<Mod_IssueUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_IssueCreateOrConnectWithoutModInput>
    upsert?: Enumerable<Mod_IssueUpsertWithWhereUniqueWithoutModInput>
    createMany?: Mod_IssueCreateManyModInputEnvelope
    set?: Enumerable<Mod_IssueWhereUniqueInput>
    disconnect?: Enumerable<Mod_IssueWhereUniqueInput>
    delete?: Enumerable<Mod_IssueWhereUniqueInput>
    connect?: Enumerable<Mod_IssueWhereUniqueInput>
    update?: Enumerable<Mod_IssueUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<Mod_IssueUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<Mod_IssueScalarWhereInput>
  }

  export type Mods_FavoritsUncheckedUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<Mods_FavoritsCreateWithoutModInput>, Enumerable<Mods_FavoritsUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mods_FavoritsCreateOrConnectWithoutModInput>
    upsert?: Enumerable<Mods_FavoritsUpsertWithWhereUniqueWithoutModInput>
    createMany?: Mods_FavoritsCreateManyModInputEnvelope
    set?: Enumerable<Mods_FavoritsWhereUniqueInput>
    disconnect?: Enumerable<Mods_FavoritsWhereUniqueInput>
    delete?: Enumerable<Mods_FavoritsWhereUniqueInput>
    connect?: Enumerable<Mods_FavoritsWhereUniqueInput>
    update?: Enumerable<Mods_FavoritsUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<Mods_FavoritsUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<Mods_FavoritsScalarWhereInput>
  }

  export type Mod_SubscribersUncheckedUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_SubscribersCreateWithoutModInput>, Enumerable<Mod_SubscribersUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_SubscribersCreateOrConnectWithoutModInput>
    upsert?: Enumerable<Mod_SubscribersUpsertWithWhereUniqueWithoutModInput>
    createMany?: Mod_SubscribersCreateManyModInputEnvelope
    set?: Enumerable<Mod_SubscribersWhereUniqueInput>
    disconnect?: Enumerable<Mod_SubscribersWhereUniqueInput>
    delete?: Enumerable<Mod_SubscribersWhereUniqueInput>
    connect?: Enumerable<Mod_SubscribersWhereUniqueInput>
    update?: Enumerable<Mod_SubscribersUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<Mod_SubscribersUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<Mod_SubscribersScalarWhereInput>
  }

  export type Mod_DownloadUncheckedUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<Mod_DownloadCreateWithoutModInput>, Enumerable<Mod_DownloadUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<Mod_DownloadCreateOrConnectWithoutModInput>
    upsert?: Enumerable<Mod_DownloadUpsertWithWhereUniqueWithoutModInput>
    createMany?: Mod_DownloadCreateManyModInputEnvelope
    set?: Enumerable<Mod_DownloadWhereUniqueInput>
    disconnect?: Enumerable<Mod_DownloadWhereUniqueInput>
    delete?: Enumerable<Mod_DownloadWhereUniqueInput>
    connect?: Enumerable<Mod_DownloadWhereUniqueInput>
    update?: Enumerable<Mod_DownloadUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<Mod_DownloadUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<Mod_DownloadScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutModAuthorsInput = {
    create?: XOR<UserCreateWithoutModAuthorsInput, UserUncheckedCreateWithoutModAuthorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModAuthorsInput
    connect?: UserWhereUniqueInput
  }

  export type ModCreateNestedOneWithoutAuthorsInput = {
    create?: XOR<ModCreateWithoutAuthorsInput, ModUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: ModCreateOrConnectWithoutAuthorsInput
    connect?: ModWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutModAuthorsInput = {
    create?: XOR<UserCreateWithoutModAuthorsInput, UserUncheckedCreateWithoutModAuthorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModAuthorsInput
    upsert?: UserUpsertWithoutModAuthorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutModAuthorsInput, UserUncheckedUpdateWithoutModAuthorsInput>
  }

  export type ModUpdateOneRequiredWithoutAuthorsInput = {
    create?: XOR<ModCreateWithoutAuthorsInput, ModUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: ModCreateOrConnectWithoutAuthorsInput
    upsert?: ModUpsertWithoutAuthorsInput
    connect?: ModWhereUniqueInput
    update?: XOR<ModUpdateWithoutAuthorsInput, ModUncheckedUpdateWithoutAuthorsInput>
  }

  export type ModCreateNestedOneWithoutImagesInput = {
    create?: XOR<ModCreateWithoutImagesInput, ModUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ModCreateOrConnectWithoutImagesInput
    connect?: ModWhereUniqueInput
  }

  export type ModUpdateOneRequiredWithoutImagesInput = {
    create?: XOR<ModCreateWithoutImagesInput, ModUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ModCreateOrConnectWithoutImagesInput
    upsert?: ModUpsertWithoutImagesInput
    connect?: ModWhereUniqueInput
    update?: XOR<ModUpdateWithoutImagesInput, ModUncheckedUpdateWithoutImagesInput>
  }

  export type ModCreateNestedManyWithoutTagsInput = {
    create?: XOR<Enumerable<ModCreateWithoutTagsInput>, Enumerable<ModUncheckedCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<ModCreateOrConnectWithoutTagsInput>
    connect?: Enumerable<ModWhereUniqueInput>
  }

  export type ModUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<Enumerable<ModCreateWithoutTagsInput>, Enumerable<ModUncheckedCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<ModCreateOrConnectWithoutTagsInput>
    connect?: Enumerable<ModWhereUniqueInput>
  }

  export type ModUpdateManyWithoutTagsInput = {
    create?: XOR<Enumerable<ModCreateWithoutTagsInput>, Enumerable<ModUncheckedCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<ModCreateOrConnectWithoutTagsInput>
    upsert?: Enumerable<ModUpsertWithWhereUniqueWithoutTagsInput>
    set?: Enumerable<ModWhereUniqueInput>
    disconnect?: Enumerable<ModWhereUniqueInput>
    delete?: Enumerable<ModWhereUniqueInput>
    connect?: Enumerable<ModWhereUniqueInput>
    update?: Enumerable<ModUpdateWithWhereUniqueWithoutTagsInput>
    updateMany?: Enumerable<ModUpdateManyWithWhereWithoutTagsInput>
    deleteMany?: Enumerable<ModScalarWhereInput>
  }

  export type ModUncheckedUpdateManyWithoutTagsInput = {
    create?: XOR<Enumerable<ModCreateWithoutTagsInput>, Enumerable<ModUncheckedCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<ModCreateOrConnectWithoutTagsInput>
    upsert?: Enumerable<ModUpsertWithWhereUniqueWithoutTagsInput>
    set?: Enumerable<ModWhereUniqueInput>
    disconnect?: Enumerable<ModWhereUniqueInput>
    delete?: Enumerable<ModWhereUniqueInput>
    connect?: Enumerable<ModWhereUniqueInput>
    update?: Enumerable<ModUpdateWithWhereUniqueWithoutTagsInput>
    updateMany?: Enumerable<ModUpdateManyWithWhereWithoutTagsInput>
    deleteMany?: Enumerable<ModScalarWhereInput>
  }

  export type ModCreateNestedOneWithoutVersionsInput = {
    create?: XOR<ModCreateWithoutVersionsInput, ModUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ModCreateOrConnectWithoutVersionsInput
    connect?: ModWhereUniqueInput
  }

  export type Mod_DownloadCreateNestedManyWithoutVersionInput = {
    create?: XOR<Enumerable<Mod_DownloadCreateWithoutVersionInput>, Enumerable<Mod_DownloadUncheckedCreateWithoutVersionInput>>
    connectOrCreate?: Enumerable<Mod_DownloadCreateOrConnectWithoutVersionInput>
    createMany?: Mod_DownloadCreateManyVersionInputEnvelope
    connect?: Enumerable<Mod_DownloadWhereUniqueInput>
  }

  export type Mod_DownloadUncheckedCreateNestedManyWithoutVersionInput = {
    create?: XOR<Enumerable<Mod_DownloadCreateWithoutVersionInput>, Enumerable<Mod_DownloadUncheckedCreateWithoutVersionInput>>
    connectOrCreate?: Enumerable<Mod_DownloadCreateOrConnectWithoutVersionInput>
    createMany?: Mod_DownloadCreateManyVersionInputEnvelope
    connect?: Enumerable<Mod_DownloadWhereUniqueInput>
  }

  export type ModUpdateOneRequiredWithoutVersionsInput = {
    create?: XOR<ModCreateWithoutVersionsInput, ModUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ModCreateOrConnectWithoutVersionsInput
    upsert?: ModUpsertWithoutVersionsInput
    connect?: ModWhereUniqueInput
    update?: XOR<ModUpdateWithoutVersionsInput, ModUncheckedUpdateWithoutVersionsInput>
  }

  export type Mod_DownloadUpdateManyWithoutVersionInput = {
    create?: XOR<Enumerable<Mod_DownloadCreateWithoutVersionInput>, Enumerable<Mod_DownloadUncheckedCreateWithoutVersionInput>>
    connectOrCreate?: Enumerable<Mod_DownloadCreateOrConnectWithoutVersionInput>
    upsert?: Enumerable<Mod_DownloadUpsertWithWhereUniqueWithoutVersionInput>
    createMany?: Mod_DownloadCreateManyVersionInputEnvelope
    set?: Enumerable<Mod_DownloadWhereUniqueInput>
    disconnect?: Enumerable<Mod_DownloadWhereUniqueInput>
    delete?: Enumerable<Mod_DownloadWhereUniqueInput>
    connect?: Enumerable<Mod_DownloadWhereUniqueInput>
    update?: Enumerable<Mod_DownloadUpdateWithWhereUniqueWithoutVersionInput>
    updateMany?: Enumerable<Mod_DownloadUpdateManyWithWhereWithoutVersionInput>
    deleteMany?: Enumerable<Mod_DownloadScalarWhereInput>
  }

  export type Mod_DownloadUncheckedUpdateManyWithoutVersionInput = {
    create?: XOR<Enumerable<Mod_DownloadCreateWithoutVersionInput>, Enumerable<Mod_DownloadUncheckedCreateWithoutVersionInput>>
    connectOrCreate?: Enumerable<Mod_DownloadCreateOrConnectWithoutVersionInput>
    upsert?: Enumerable<Mod_DownloadUpsertWithWhereUniqueWithoutVersionInput>
    createMany?: Mod_DownloadCreateManyVersionInputEnvelope
    set?: Enumerable<Mod_DownloadWhereUniqueInput>
    disconnect?: Enumerable<Mod_DownloadWhereUniqueInput>
    delete?: Enumerable<Mod_DownloadWhereUniqueInput>
    connect?: Enumerable<Mod_DownloadWhereUniqueInput>
    update?: Enumerable<Mod_DownloadUpdateWithWhereUniqueWithoutVersionInput>
    updateMany?: Enumerable<Mod_DownloadUpdateManyWithWhereWithoutVersionInput>
    deleteMany?: Enumerable<Mod_DownloadScalarWhereInput>
  }

  export type ModCreateNestedOneWithoutIssuesInput = {
    create?: XOR<ModCreateWithoutIssuesInput, ModUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: ModCreateOrConnectWithoutIssuesInput
    connect?: ModWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutModIssuesInput = {
    create?: XOR<UserCreateWithoutModIssuesInput, UserUncheckedCreateWithoutModIssuesInput>
    connectOrCreate?: UserCreateOrConnectWithoutModIssuesInput
    connect?: UserWhereUniqueInput
  }

  export type Mod_Issue_PostCreateNestedManyWithoutIssueInput = {
    create?: XOR<Enumerable<Mod_Issue_PostCreateWithoutIssueInput>, Enumerable<Mod_Issue_PostUncheckedCreateWithoutIssueInput>>
    connectOrCreate?: Enumerable<Mod_Issue_PostCreateOrConnectWithoutIssueInput>
    createMany?: Mod_Issue_PostCreateManyIssueInputEnvelope
    connect?: Enumerable<Mod_Issue_PostWhereUniqueInput>
  }

  export type Mod_Issue_PostUncheckedCreateNestedManyWithoutIssueInput = {
    create?: XOR<Enumerable<Mod_Issue_PostCreateWithoutIssueInput>, Enumerable<Mod_Issue_PostUncheckedCreateWithoutIssueInput>>
    connectOrCreate?: Enumerable<Mod_Issue_PostCreateOrConnectWithoutIssueInput>
    createMany?: Mod_Issue_PostCreateManyIssueInputEnvelope
    connect?: Enumerable<Mod_Issue_PostWhereUniqueInput>
  }

  export type EnumMod_Issue_TypeFieldUpdateOperationsInput = {
    set?: Mod_Issue_Type
  }

  export type ModUpdateOneRequiredWithoutIssuesInput = {
    create?: XOR<ModCreateWithoutIssuesInput, ModUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: ModCreateOrConnectWithoutIssuesInput
    upsert?: ModUpsertWithoutIssuesInput
    connect?: ModWhereUniqueInput
    update?: XOR<ModUpdateWithoutIssuesInput, ModUncheckedUpdateWithoutIssuesInput>
  }

  export type UserUpdateOneRequiredWithoutModIssuesInput = {
    create?: XOR<UserCreateWithoutModIssuesInput, UserUncheckedCreateWithoutModIssuesInput>
    connectOrCreate?: UserCreateOrConnectWithoutModIssuesInput
    upsert?: UserUpsertWithoutModIssuesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutModIssuesInput, UserUncheckedUpdateWithoutModIssuesInput>
  }

  export type Mod_Issue_PostUpdateManyWithoutIssueInput = {
    create?: XOR<Enumerable<Mod_Issue_PostCreateWithoutIssueInput>, Enumerable<Mod_Issue_PostUncheckedCreateWithoutIssueInput>>
    connectOrCreate?: Enumerable<Mod_Issue_PostCreateOrConnectWithoutIssueInput>
    upsert?: Enumerable<Mod_Issue_PostUpsertWithWhereUniqueWithoutIssueInput>
    createMany?: Mod_Issue_PostCreateManyIssueInputEnvelope
    set?: Enumerable<Mod_Issue_PostWhereUniqueInput>
    disconnect?: Enumerable<Mod_Issue_PostWhereUniqueInput>
    delete?: Enumerable<Mod_Issue_PostWhereUniqueInput>
    connect?: Enumerable<Mod_Issue_PostWhereUniqueInput>
    update?: Enumerable<Mod_Issue_PostUpdateWithWhereUniqueWithoutIssueInput>
    updateMany?: Enumerable<Mod_Issue_PostUpdateManyWithWhereWithoutIssueInput>
    deleteMany?: Enumerable<Mod_Issue_PostScalarWhereInput>
  }

  export type Mod_Issue_PostUncheckedUpdateManyWithoutIssueInput = {
    create?: XOR<Enumerable<Mod_Issue_PostCreateWithoutIssueInput>, Enumerable<Mod_Issue_PostUncheckedCreateWithoutIssueInput>>
    connectOrCreate?: Enumerable<Mod_Issue_PostCreateOrConnectWithoutIssueInput>
    upsert?: Enumerable<Mod_Issue_PostUpsertWithWhereUniqueWithoutIssueInput>
    createMany?: Mod_Issue_PostCreateManyIssueInputEnvelope
    set?: Enumerable<Mod_Issue_PostWhereUniqueInput>
    disconnect?: Enumerable<Mod_Issue_PostWhereUniqueInput>
    delete?: Enumerable<Mod_Issue_PostWhereUniqueInput>
    connect?: Enumerable<Mod_Issue_PostWhereUniqueInput>
    update?: Enumerable<Mod_Issue_PostUpdateWithWhereUniqueWithoutIssueInput>
    updateMany?: Enumerable<Mod_Issue_PostUpdateManyWithWhereWithoutIssueInput>
    deleteMany?: Enumerable<Mod_Issue_PostScalarWhereInput>
  }

  export type Mod_IssueCreateNestedOneWithoutModIssuePostInput = {
    create?: XOR<Mod_IssueCreateWithoutModIssuePostInput, Mod_IssueUncheckedCreateWithoutModIssuePostInput>
    connectOrCreate?: Mod_IssueCreateOrConnectWithoutModIssuePostInput
    connect?: Mod_IssueWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutModIssuePostsInput = {
    create?: XOR<UserCreateWithoutModIssuePostsInput, UserUncheckedCreateWithoutModIssuePostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModIssuePostsInput
    connect?: UserWhereUniqueInput
  }

  export type Mod_IssueUpdateOneRequiredWithoutModIssuePostInput = {
    create?: XOR<Mod_IssueCreateWithoutModIssuePostInput, Mod_IssueUncheckedCreateWithoutModIssuePostInput>
    connectOrCreate?: Mod_IssueCreateOrConnectWithoutModIssuePostInput
    upsert?: Mod_IssueUpsertWithoutModIssuePostInput
    connect?: Mod_IssueWhereUniqueInput
    update?: XOR<Mod_IssueUpdateWithoutModIssuePostInput, Mod_IssueUncheckedUpdateWithoutModIssuePostInput>
  }

  export type UserUpdateOneRequiredWithoutModIssuePostsInput = {
    create?: XOR<UserCreateWithoutModIssuePostsInput, UserUncheckedCreateWithoutModIssuePostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModIssuePostsInput
    upsert?: UserUpsertWithoutModIssuePostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutModIssuePostsInput, UserUncheckedUpdateWithoutModIssuePostsInput>
  }

  export type UserCreateNestedOneWithoutModsListsInput = {
    create?: XOR<UserCreateWithoutModsListsInput, UserUncheckedCreateWithoutModsListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModsListsInput
    connect?: UserWhereUniqueInput
  }

  export type ModCreateNestedManyWithoutListsInput = {
    create?: XOR<Enumerable<ModCreateWithoutListsInput>, Enumerable<ModUncheckedCreateWithoutListsInput>>
    connectOrCreate?: Enumerable<ModCreateOrConnectWithoutListsInput>
    connect?: Enumerable<ModWhereUniqueInput>
  }

  export type ModUncheckedCreateNestedManyWithoutListsInput = {
    create?: XOR<Enumerable<ModCreateWithoutListsInput>, Enumerable<ModUncheckedCreateWithoutListsInput>>
    connectOrCreate?: Enumerable<ModCreateOrConnectWithoutListsInput>
    connect?: Enumerable<ModWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutModsListsInput = {
    create?: XOR<UserCreateWithoutModsListsInput, UserUncheckedCreateWithoutModsListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModsListsInput
    upsert?: UserUpsertWithoutModsListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutModsListsInput, UserUncheckedUpdateWithoutModsListsInput>
  }

  export type ModUpdateManyWithoutListsInput = {
    create?: XOR<Enumerable<ModCreateWithoutListsInput>, Enumerable<ModUncheckedCreateWithoutListsInput>>
    connectOrCreate?: Enumerable<ModCreateOrConnectWithoutListsInput>
    upsert?: Enumerable<ModUpsertWithWhereUniqueWithoutListsInput>
    set?: Enumerable<ModWhereUniqueInput>
    disconnect?: Enumerable<ModWhereUniqueInput>
    delete?: Enumerable<ModWhereUniqueInput>
    connect?: Enumerable<ModWhereUniqueInput>
    update?: Enumerable<ModUpdateWithWhereUniqueWithoutListsInput>
    updateMany?: Enumerable<ModUpdateManyWithWhereWithoutListsInput>
    deleteMany?: Enumerable<ModScalarWhereInput>
  }

  export type ModUncheckedUpdateManyWithoutListsInput = {
    create?: XOR<Enumerable<ModCreateWithoutListsInput>, Enumerable<ModUncheckedCreateWithoutListsInput>>
    connectOrCreate?: Enumerable<ModCreateOrConnectWithoutListsInput>
    upsert?: Enumerable<ModUpsertWithWhereUniqueWithoutListsInput>
    set?: Enumerable<ModWhereUniqueInput>
    disconnect?: Enumerable<ModWhereUniqueInput>
    delete?: Enumerable<ModWhereUniqueInput>
    connect?: Enumerable<ModWhereUniqueInput>
    update?: Enumerable<ModUpdateWithWhereUniqueWithoutListsInput>
    updateMany?: Enumerable<ModUpdateManyWithWhereWithoutListsInput>
    deleteMany?: Enumerable<ModScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutModsFavoritsInput = {
    create?: XOR<UserCreateWithoutModsFavoritsInput, UserUncheckedCreateWithoutModsFavoritsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModsFavoritsInput
    connect?: UserWhereUniqueInput
  }

  export type ModCreateNestedOneWithoutFavoritsInput = {
    create?: XOR<ModCreateWithoutFavoritsInput, ModUncheckedCreateWithoutFavoritsInput>
    connectOrCreate?: ModCreateOrConnectWithoutFavoritsInput
    connect?: ModWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutModsFavoritsInput = {
    create?: XOR<UserCreateWithoutModsFavoritsInput, UserUncheckedCreateWithoutModsFavoritsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModsFavoritsInput
    upsert?: UserUpsertWithoutModsFavoritsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutModsFavoritsInput, UserUncheckedUpdateWithoutModsFavoritsInput>
  }

  export type ModUpdateOneRequiredWithoutFavoritsInput = {
    create?: XOR<ModCreateWithoutFavoritsInput, ModUncheckedCreateWithoutFavoritsInput>
    connectOrCreate?: ModCreateOrConnectWithoutFavoritsInput
    upsert?: ModUpsertWithoutFavoritsInput
    connect?: ModWhereUniqueInput
    update?: XOR<ModUpdateWithoutFavoritsInput, ModUncheckedUpdateWithoutFavoritsInput>
  }

  export type UserCreateNestedOneWithoutModSubscribersInput = {
    create?: XOR<UserCreateWithoutModSubscribersInput, UserUncheckedCreateWithoutModSubscribersInput>
    connectOrCreate?: UserCreateOrConnectWithoutModSubscribersInput
    connect?: UserWhereUniqueInput
  }

  export type ModCreateNestedOneWithoutSubscribersInput = {
    create?: XOR<ModCreateWithoutSubscribersInput, ModUncheckedCreateWithoutSubscribersInput>
    connectOrCreate?: ModCreateOrConnectWithoutSubscribersInput
    connect?: ModWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutModSubscribersInput = {
    create?: XOR<UserCreateWithoutModSubscribersInput, UserUncheckedCreateWithoutModSubscribersInput>
    connectOrCreate?: UserCreateOrConnectWithoutModSubscribersInput
    upsert?: UserUpsertWithoutModSubscribersInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutModSubscribersInput, UserUncheckedUpdateWithoutModSubscribersInput>
  }

  export type ModUpdateOneRequiredWithoutSubscribersInput = {
    create?: XOR<ModCreateWithoutSubscribersInput, ModUncheckedCreateWithoutSubscribersInput>
    connectOrCreate?: ModCreateOrConnectWithoutSubscribersInput
    upsert?: ModUpsertWithoutSubscribersInput
    connect?: ModWhereUniqueInput
    update?: XOR<ModUpdateWithoutSubscribersInput, ModUncheckedUpdateWithoutSubscribersInput>
  }

  export type UserCreateNestedOneWithoutModDownloadsInput = {
    create?: XOR<UserCreateWithoutModDownloadsInput, UserUncheckedCreateWithoutModDownloadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModDownloadsInput
    connect?: UserWhereUniqueInput
  }

  export type ModCreateNestedOneWithoutDownloadsInput = {
    create?: XOR<ModCreateWithoutDownloadsInput, ModUncheckedCreateWithoutDownloadsInput>
    connectOrCreate?: ModCreateOrConnectWithoutDownloadsInput
    connect?: ModWhereUniqueInput
  }

  export type Mod_VersionCreateNestedOneWithoutDownloadsInput = {
    create?: XOR<Mod_VersionCreateWithoutDownloadsInput, Mod_VersionUncheckedCreateWithoutDownloadsInput>
    connectOrCreate?: Mod_VersionCreateOrConnectWithoutDownloadsInput
    connect?: Mod_VersionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutModDownloadsInput = {
    create?: XOR<UserCreateWithoutModDownloadsInput, UserUncheckedCreateWithoutModDownloadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModDownloadsInput
    upsert?: UserUpsertWithoutModDownloadsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutModDownloadsInput, UserUncheckedUpdateWithoutModDownloadsInput>
  }

  export type ModUpdateOneRequiredWithoutDownloadsInput = {
    create?: XOR<ModCreateWithoutDownloadsInput, ModUncheckedCreateWithoutDownloadsInput>
    connectOrCreate?: ModCreateOrConnectWithoutDownloadsInput
    upsert?: ModUpsertWithoutDownloadsInput
    connect?: ModWhereUniqueInput
    update?: XOR<ModUpdateWithoutDownloadsInput, ModUncheckedUpdateWithoutDownloadsInput>
  }

  export type Mod_VersionUpdateOneRequiredWithoutDownloadsInput = {
    create?: XOR<Mod_VersionCreateWithoutDownloadsInput, Mod_VersionUncheckedCreateWithoutDownloadsInput>
    connectOrCreate?: Mod_VersionCreateOrConnectWithoutDownloadsInput
    upsert?: Mod_VersionUpsertWithoutDownloadsInput
    connect?: Mod_VersionWhereUniqueInput
    update?: XOR<Mod_VersionUpdateWithoutDownloadsInput, Mod_VersionUncheckedUpdateWithoutDownloadsInput>
  }

  export type UserCreateNestedOneWithoutUserSessionInput = {
    create?: XOR<UserCreateWithoutUserSessionInput, UserUncheckedCreateWithoutUserSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSessionInput
    connect?: UserWhereUniqueInput
  }

  export type User_TokenCreateNestedManyWithoutSessionInput = {
    create?: XOR<Enumerable<User_TokenCreateWithoutSessionInput>, Enumerable<User_TokenUncheckedCreateWithoutSessionInput>>
    connectOrCreate?: Enumerable<User_TokenCreateOrConnectWithoutSessionInput>
    createMany?: User_TokenCreateManySessionInputEnvelope
    connect?: Enumerable<User_TokenWhereUniqueInput>
  }

  export type User_TokenUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<Enumerable<User_TokenCreateWithoutSessionInput>, Enumerable<User_TokenUncheckedCreateWithoutSessionInput>>
    connectOrCreate?: Enumerable<User_TokenCreateOrConnectWithoutSessionInput>
    createMany?: User_TokenCreateManySessionInputEnvelope
    connect?: Enumerable<User_TokenWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutUserSessionInput = {
    create?: XOR<UserCreateWithoutUserSessionInput, UserUncheckedCreateWithoutUserSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSessionInput
    upsert?: UserUpsertWithoutUserSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUserSessionInput, UserUncheckedUpdateWithoutUserSessionInput>
  }

  export type User_TokenUpdateManyWithoutSessionInput = {
    create?: XOR<Enumerable<User_TokenCreateWithoutSessionInput>, Enumerable<User_TokenUncheckedCreateWithoutSessionInput>>
    connectOrCreate?: Enumerable<User_TokenCreateOrConnectWithoutSessionInput>
    upsert?: Enumerable<User_TokenUpsertWithWhereUniqueWithoutSessionInput>
    createMany?: User_TokenCreateManySessionInputEnvelope
    set?: Enumerable<User_TokenWhereUniqueInput>
    disconnect?: Enumerable<User_TokenWhereUniqueInput>
    delete?: Enumerable<User_TokenWhereUniqueInput>
    connect?: Enumerable<User_TokenWhereUniqueInput>
    update?: Enumerable<User_TokenUpdateWithWhereUniqueWithoutSessionInput>
    updateMany?: Enumerable<User_TokenUpdateManyWithWhereWithoutSessionInput>
    deleteMany?: Enumerable<User_TokenScalarWhereInput>
  }

  export type User_TokenUncheckedUpdateManyWithoutSessionInput = {
    create?: XOR<Enumerable<User_TokenCreateWithoutSessionInput>, Enumerable<User_TokenUncheckedCreateWithoutSessionInput>>
    connectOrCreate?: Enumerable<User_TokenCreateOrConnectWithoutSessionInput>
    upsert?: Enumerable<User_TokenUpsertWithWhereUniqueWithoutSessionInput>
    createMany?: User_TokenCreateManySessionInputEnvelope
    set?: Enumerable<User_TokenWhereUniqueInput>
    disconnect?: Enumerable<User_TokenWhereUniqueInput>
    delete?: Enumerable<User_TokenWhereUniqueInput>
    connect?: Enumerable<User_TokenWhereUniqueInput>
    update?: Enumerable<User_TokenUpdateWithWhereUniqueWithoutSessionInput>
    updateMany?: Enumerable<User_TokenUpdateManyWithWhereWithoutSessionInput>
    deleteMany?: Enumerable<User_TokenScalarWhereInput>
  }

  export type User_SessionCreateNestedOneWithoutTokensInput = {
    create?: XOR<User_SessionCreateWithoutTokensInput, User_SessionUncheckedCreateWithoutTokensInput>
    connectOrCreate?: User_SessionCreateOrConnectWithoutTokensInput
    connect?: User_SessionWhereUniqueInput
  }

  export type User_SessionUpdateOneRequiredWithoutTokensInput = {
    create?: XOR<User_SessionCreateWithoutTokensInput, User_SessionUncheckedCreateWithoutTokensInput>
    connectOrCreate?: User_SessionCreateOrConnectWithoutTokensInput
    upsert?: User_SessionUpsertWithoutTokensInput
    connect?: User_SessionWhereUniqueInput
    update?: XOR<User_SessionUpdateWithoutTokensInput, User_SessionUncheckedUpdateWithoutTokensInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumMod_Issue_TypeFilter = {
    equals?: Mod_Issue_Type
    in?: Enumerable<Mod_Issue_Type>
    notIn?: Enumerable<Mod_Issue_Type>
    not?: NestedEnumMod_Issue_TypeFilter | Mod_Issue_Type
  }

  export type NestedEnumMod_Issue_TypeWithAggregatesFilter = {
    equals?: Mod_Issue_Type
    in?: Enumerable<Mod_Issue_Type>
    notIn?: Enumerable<Mod_Issue_Type>
    not?: NestedEnumMod_Issue_TypeWithAggregatesFilter | Mod_Issue_Type
    _count?: NestedIntFilter
    _min?: NestedEnumMod_Issue_TypeFilter
    _max?: NestedEnumMod_Issue_TypeFilter
  }

  export type User_AuthCreateWithoutUserInput = {
    email: string
    password: string
    is_active: boolean
  }

  export type User_AuthUncheckedCreateWithoutUserInput = {
    email: string
    password: string
    is_active: boolean
  }

  export type User_AuthCreateOrConnectWithoutUserInput = {
    where: User_AuthWhereUniqueInput
    create: XOR<User_AuthCreateWithoutUserInput, User_AuthUncheckedCreateWithoutUserInput>
  }

  export type Mods_CollectionCreateWithoutAuthorInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    Mods?: ModCreateNestedManyWithoutCollectionInput
  }

  export type Mods_CollectionUncheckedCreateWithoutAuthorInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    Mods?: ModUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type Mods_CollectionCreateOrConnectWithoutAuthorInput = {
    where: Mods_CollectionWhereUniqueInput
    create: XOR<Mods_CollectionCreateWithoutAuthorInput, Mods_CollectionUncheckedCreateWithoutAuthorInput>
  }

  export type Mods_CollectionCreateManyAuthorInputEnvelope = {
    data: Enumerable<Mods_CollectionCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type Mod_AuthorCreateWithoutUserInput = {
    type: number
    Mod: ModCreateNestedOneWithoutAuthorsInput
  }

  export type Mod_AuthorUncheckedCreateWithoutUserInput = {
    mod_id: number
    type: number
  }

  export type Mod_AuthorCreateOrConnectWithoutUserInput = {
    where: Mod_AuthorWhereUniqueInput
    create: XOR<Mod_AuthorCreateWithoutUserInput, Mod_AuthorUncheckedCreateWithoutUserInput>
  }

  export type Mod_AuthorCreateManyUserInputEnvelope = {
    data: Enumerable<Mod_AuthorCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type Mod_IssueCreateWithoutAuthorInput = {
    name: string
    type: Mod_Issue_Type
    createDate?: Date | string
    Mod: ModCreateNestedOneWithoutIssuesInput
    ModIssuePost?: Mod_Issue_PostCreateNestedManyWithoutIssueInput
  }

  export type Mod_IssueUncheckedCreateWithoutAuthorInput = {
    id?: number
    mod_id: number
    name: string
    type: Mod_Issue_Type
    createDate?: Date | string
    ModIssuePost?: Mod_Issue_PostUncheckedCreateNestedManyWithoutIssueInput
  }

  export type Mod_IssueCreateOrConnectWithoutAuthorInput = {
    where: Mod_IssueWhereUniqueInput
    create: XOR<Mod_IssueCreateWithoutAuthorInput, Mod_IssueUncheckedCreateWithoutAuthorInput>
  }

  export type Mod_IssueCreateManyAuthorInputEnvelope = {
    data: Enumerable<Mod_IssueCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type Mod_Issue_PostCreateWithoutAuthorInput = {
    createDate?: Date | string
    text: string
    Issue: Mod_IssueCreateNestedOneWithoutModIssuePostInput
  }

  export type Mod_Issue_PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    issue_id: number
    createDate?: Date | string
    text: string
  }

  export type Mod_Issue_PostCreateOrConnectWithoutAuthorInput = {
    where: Mod_Issue_PostWhereUniqueInput
    create: XOR<Mod_Issue_PostCreateWithoutAuthorInput, Mod_Issue_PostUncheckedCreateWithoutAuthorInput>
  }

  export type Mod_Issue_PostCreateManyAuthorInputEnvelope = {
    data: Enumerable<Mod_Issue_PostCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type Mods_ListCreateWithoutAuthorInput = {
    is_public: boolean
    name: string
    Mods?: ModCreateNestedManyWithoutListsInput
  }

  export type Mods_ListUncheckedCreateWithoutAuthorInput = {
    id?: number
    is_public: boolean
    name: string
    Mods?: ModUncheckedCreateNestedManyWithoutListsInput
  }

  export type Mods_ListCreateOrConnectWithoutAuthorInput = {
    where: Mods_ListWhereUniqueInput
    create: XOR<Mods_ListCreateWithoutAuthorInput, Mods_ListUncheckedCreateWithoutAuthorInput>
  }

  export type Mods_ListCreateManyAuthorInputEnvelope = {
    data: Enumerable<Mods_ListCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type Mods_FavoritsCreateWithoutUserInput = {
    Mod: ModCreateNestedOneWithoutFavoritsInput
  }

  export type Mods_FavoritsUncheckedCreateWithoutUserInput = {
    mod_id: number
  }

  export type Mods_FavoritsCreateOrConnectWithoutUserInput = {
    where: Mods_FavoritsWhereUniqueInput
    create: XOR<Mods_FavoritsCreateWithoutUserInput, Mods_FavoritsUncheckedCreateWithoutUserInput>
  }

  export type Mods_FavoritsCreateManyUserInputEnvelope = {
    data: Enumerable<Mods_FavoritsCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type Mod_SubscribersCreateWithoutUserInput = {
    Mod: ModCreateNestedOneWithoutSubscribersInput
  }

  export type Mod_SubscribersUncheckedCreateWithoutUserInput = {
    mod_id: number
  }

  export type Mod_SubscribersCreateOrConnectWithoutUserInput = {
    where: Mod_SubscribersWhereUniqueInput
    create: XOR<Mod_SubscribersCreateWithoutUserInput, Mod_SubscribersUncheckedCreateWithoutUserInput>
  }

  export type Mod_SubscribersCreateManyUserInputEnvelope = {
    data: Enumerable<Mod_SubscribersCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type Mod_DownloadCreateWithoutUserInput = {
    Mod: ModCreateNestedOneWithoutDownloadsInput
    Version: Mod_VersionCreateNestedOneWithoutDownloadsInput
  }

  export type Mod_DownloadUncheckedCreateWithoutUserInput = {
    mod_id: number
    version_id: number
  }

  export type Mod_DownloadCreateOrConnectWithoutUserInput = {
    where: Mod_DownloadWhereUniqueInput
    create: XOR<Mod_DownloadCreateWithoutUserInput, Mod_DownloadUncheckedCreateWithoutUserInput>
  }

  export type Mod_DownloadCreateManyUserInputEnvelope = {
    data: Enumerable<Mod_DownloadCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type User_SessionCreateWithoutUserInput = {
    userAgent: string
    userAgentName: string
    osName: string
    deviceName: string
    name: string
    uuid: string
    ipv4: string
    fingerprint_id: string
    is_active?: boolean
    createDate?: Date | string
    Tokens?: User_TokenCreateNestedManyWithoutSessionInput
  }

  export type User_SessionUncheckedCreateWithoutUserInput = {
    id?: number
    userAgent: string
    userAgentName: string
    osName: string
    deviceName: string
    name: string
    uuid: string
    ipv4: string
    fingerprint_id: string
    is_active?: boolean
    createDate?: Date | string
    Tokens?: User_TokenUncheckedCreateNestedManyWithoutSessionInput
  }

  export type User_SessionCreateOrConnectWithoutUserInput = {
    where: User_SessionWhereUniqueInput
    create: XOR<User_SessionCreateWithoutUserInput, User_SessionUncheckedCreateWithoutUserInput>
  }

  export type User_SessionCreateManyUserInputEnvelope = {
    data: Enumerable<User_SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type User_AuthUpsertWithoutUserInput = {
    update: XOR<User_AuthUpdateWithoutUserInput, User_AuthUncheckedUpdateWithoutUserInput>
    create: XOR<User_AuthCreateWithoutUserInput, User_AuthUncheckedCreateWithoutUserInput>
  }

  export type User_AuthUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type User_AuthUncheckedUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Mods_CollectionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Mods_CollectionWhereUniqueInput
    update: XOR<Mods_CollectionUpdateWithoutAuthorInput, Mods_CollectionUncheckedUpdateWithoutAuthorInput>
    create: XOR<Mods_CollectionCreateWithoutAuthorInput, Mods_CollectionUncheckedCreateWithoutAuthorInput>
  }

  export type Mods_CollectionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Mods_CollectionWhereUniqueInput
    data: XOR<Mods_CollectionUpdateWithoutAuthorInput, Mods_CollectionUncheckedUpdateWithoutAuthorInput>
  }

  export type Mods_CollectionUpdateManyWithWhereWithoutAuthorInput = {
    where: Mods_CollectionScalarWhereInput
    data: XOR<Mods_CollectionUpdateManyMutationInput, Mods_CollectionUncheckedUpdateManyWithoutModsCollectionsInput>
  }

  export type Mods_CollectionScalarWhereInput = {
    AND?: Enumerable<Mods_CollectionScalarWhereInput>
    OR?: Enumerable<Mods_CollectionScalarWhereInput>
    NOT?: Enumerable<Mods_CollectionScalarWhereInput>
    id?: IntFilter | number
    avatar?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    createDate?: DateTimeFilter | Date | string
    is_active?: BoolFilter | boolean
    author_id?: IntFilter | number
  }

  export type Mod_AuthorUpsertWithWhereUniqueWithoutUserInput = {
    where: Mod_AuthorWhereUniqueInput
    update: XOR<Mod_AuthorUpdateWithoutUserInput, Mod_AuthorUncheckedUpdateWithoutUserInput>
    create: XOR<Mod_AuthorCreateWithoutUserInput, Mod_AuthorUncheckedCreateWithoutUserInput>
  }

  export type Mod_AuthorUpdateWithWhereUniqueWithoutUserInput = {
    where: Mod_AuthorWhereUniqueInput
    data: XOR<Mod_AuthorUpdateWithoutUserInput, Mod_AuthorUncheckedUpdateWithoutUserInput>
  }

  export type Mod_AuthorUpdateManyWithWhereWithoutUserInput = {
    where: Mod_AuthorScalarWhereInput
    data: XOR<Mod_AuthorUpdateManyMutationInput, Mod_AuthorUncheckedUpdateManyWithoutModAuthorsInput>
  }

  export type Mod_AuthorScalarWhereInput = {
    AND?: Enumerable<Mod_AuthorScalarWhereInput>
    OR?: Enumerable<Mod_AuthorScalarWhereInput>
    NOT?: Enumerable<Mod_AuthorScalarWhereInput>
    mod_id?: IntFilter | number
    user_id?: IntFilter | number
    type?: IntFilter | number
  }

  export type Mod_IssueUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Mod_IssueWhereUniqueInput
    update: XOR<Mod_IssueUpdateWithoutAuthorInput, Mod_IssueUncheckedUpdateWithoutAuthorInput>
    create: XOR<Mod_IssueCreateWithoutAuthorInput, Mod_IssueUncheckedCreateWithoutAuthorInput>
  }

  export type Mod_IssueUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Mod_IssueWhereUniqueInput
    data: XOR<Mod_IssueUpdateWithoutAuthorInput, Mod_IssueUncheckedUpdateWithoutAuthorInput>
  }

  export type Mod_IssueUpdateManyWithWhereWithoutAuthorInput = {
    where: Mod_IssueScalarWhereInput
    data: XOR<Mod_IssueUpdateManyMutationInput, Mod_IssueUncheckedUpdateManyWithoutModIssuesInput>
  }

  export type Mod_IssueScalarWhereInput = {
    AND?: Enumerable<Mod_IssueScalarWhereInput>
    OR?: Enumerable<Mod_IssueScalarWhereInput>
    NOT?: Enumerable<Mod_IssueScalarWhereInput>
    id?: IntFilter | number
    mod_id?: IntFilter | number
    name?: StringFilter | string
    type?: EnumMod_Issue_TypeFilter | Mod_Issue_Type
    author_id?: IntFilter | number
    createDate?: DateTimeFilter | Date | string
  }

  export type Mod_Issue_PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Mod_Issue_PostWhereUniqueInput
    update: XOR<Mod_Issue_PostUpdateWithoutAuthorInput, Mod_Issue_PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<Mod_Issue_PostCreateWithoutAuthorInput, Mod_Issue_PostUncheckedCreateWithoutAuthorInput>
  }

  export type Mod_Issue_PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Mod_Issue_PostWhereUniqueInput
    data: XOR<Mod_Issue_PostUpdateWithoutAuthorInput, Mod_Issue_PostUncheckedUpdateWithoutAuthorInput>
  }

  export type Mod_Issue_PostUpdateManyWithWhereWithoutAuthorInput = {
    where: Mod_Issue_PostScalarWhereInput
    data: XOR<Mod_Issue_PostUpdateManyMutationInput, Mod_Issue_PostUncheckedUpdateManyWithoutModIssuePostsInput>
  }

  export type Mod_Issue_PostScalarWhereInput = {
    AND?: Enumerable<Mod_Issue_PostScalarWhereInput>
    OR?: Enumerable<Mod_Issue_PostScalarWhereInput>
    NOT?: Enumerable<Mod_Issue_PostScalarWhereInput>
    id?: IntFilter | number
    issue_id?: IntFilter | number
    author_id?: IntFilter | number
    createDate?: DateTimeFilter | Date | string
    text?: StringFilter | string
  }

  export type Mods_ListUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Mods_ListWhereUniqueInput
    update: XOR<Mods_ListUpdateWithoutAuthorInput, Mods_ListUncheckedUpdateWithoutAuthorInput>
    create: XOR<Mods_ListCreateWithoutAuthorInput, Mods_ListUncheckedCreateWithoutAuthorInput>
  }

  export type Mods_ListUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Mods_ListWhereUniqueInput
    data: XOR<Mods_ListUpdateWithoutAuthorInput, Mods_ListUncheckedUpdateWithoutAuthorInput>
  }

  export type Mods_ListUpdateManyWithWhereWithoutAuthorInput = {
    where: Mods_ListScalarWhereInput
    data: XOR<Mods_ListUpdateManyMutationInput, Mods_ListUncheckedUpdateManyWithoutModsListsInput>
  }

  export type Mods_ListScalarWhereInput = {
    AND?: Enumerable<Mods_ListScalarWhereInput>
    OR?: Enumerable<Mods_ListScalarWhereInput>
    NOT?: Enumerable<Mods_ListScalarWhereInput>
    id?: IntFilter | number
    author_id?: IntFilter | number
    is_public?: BoolFilter | boolean
    name?: StringFilter | string
  }

  export type Mods_FavoritsUpsertWithWhereUniqueWithoutUserInput = {
    where: Mods_FavoritsWhereUniqueInput
    update: XOR<Mods_FavoritsUpdateWithoutUserInput, Mods_FavoritsUncheckedUpdateWithoutUserInput>
    create: XOR<Mods_FavoritsCreateWithoutUserInput, Mods_FavoritsUncheckedCreateWithoutUserInput>
  }

  export type Mods_FavoritsUpdateWithWhereUniqueWithoutUserInput = {
    where: Mods_FavoritsWhereUniqueInput
    data: XOR<Mods_FavoritsUpdateWithoutUserInput, Mods_FavoritsUncheckedUpdateWithoutUserInput>
  }

  export type Mods_FavoritsUpdateManyWithWhereWithoutUserInput = {
    where: Mods_FavoritsScalarWhereInput
    data: XOR<Mods_FavoritsUpdateManyMutationInput, Mods_FavoritsUncheckedUpdateManyWithoutModsFavoritsInput>
  }

  export type Mods_FavoritsScalarWhereInput = {
    AND?: Enumerable<Mods_FavoritsScalarWhereInput>
    OR?: Enumerable<Mods_FavoritsScalarWhereInput>
    NOT?: Enumerable<Mods_FavoritsScalarWhereInput>
    user_id?: IntFilter | number
    mod_id?: IntFilter | number
  }

  export type Mod_SubscribersUpsertWithWhereUniqueWithoutUserInput = {
    where: Mod_SubscribersWhereUniqueInput
    update: XOR<Mod_SubscribersUpdateWithoutUserInput, Mod_SubscribersUncheckedUpdateWithoutUserInput>
    create: XOR<Mod_SubscribersCreateWithoutUserInput, Mod_SubscribersUncheckedCreateWithoutUserInput>
  }

  export type Mod_SubscribersUpdateWithWhereUniqueWithoutUserInput = {
    where: Mod_SubscribersWhereUniqueInput
    data: XOR<Mod_SubscribersUpdateWithoutUserInput, Mod_SubscribersUncheckedUpdateWithoutUserInput>
  }

  export type Mod_SubscribersUpdateManyWithWhereWithoutUserInput = {
    where: Mod_SubscribersScalarWhereInput
    data: XOR<Mod_SubscribersUpdateManyMutationInput, Mod_SubscribersUncheckedUpdateManyWithoutModSubscribersInput>
  }

  export type Mod_SubscribersScalarWhereInput = {
    AND?: Enumerable<Mod_SubscribersScalarWhereInput>
    OR?: Enumerable<Mod_SubscribersScalarWhereInput>
    NOT?: Enumerable<Mod_SubscribersScalarWhereInput>
    user_id?: IntFilter | number
    mod_id?: IntFilter | number
  }

  export type Mod_DownloadUpsertWithWhereUniqueWithoutUserInput = {
    where: Mod_DownloadWhereUniqueInput
    update: XOR<Mod_DownloadUpdateWithoutUserInput, Mod_DownloadUncheckedUpdateWithoutUserInput>
    create: XOR<Mod_DownloadCreateWithoutUserInput, Mod_DownloadUncheckedCreateWithoutUserInput>
  }

  export type Mod_DownloadUpdateWithWhereUniqueWithoutUserInput = {
    where: Mod_DownloadWhereUniqueInput
    data: XOR<Mod_DownloadUpdateWithoutUserInput, Mod_DownloadUncheckedUpdateWithoutUserInput>
  }

  export type Mod_DownloadUpdateManyWithWhereWithoutUserInput = {
    where: Mod_DownloadScalarWhereInput
    data: XOR<Mod_DownloadUpdateManyMutationInput, Mod_DownloadUncheckedUpdateManyWithoutModDownloadsInput>
  }

  export type Mod_DownloadScalarWhereInput = {
    AND?: Enumerable<Mod_DownloadScalarWhereInput>
    OR?: Enumerable<Mod_DownloadScalarWhereInput>
    NOT?: Enumerable<Mod_DownloadScalarWhereInput>
    user_id?: IntFilter | number
    mod_id?: IntFilter | number
    version_id?: IntFilter | number
  }

  export type User_SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: User_SessionWhereUniqueInput
    update: XOR<User_SessionUpdateWithoutUserInput, User_SessionUncheckedUpdateWithoutUserInput>
    create: XOR<User_SessionCreateWithoutUserInput, User_SessionUncheckedCreateWithoutUserInput>
  }

  export type User_SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: User_SessionWhereUniqueInput
    data: XOR<User_SessionUpdateWithoutUserInput, User_SessionUncheckedUpdateWithoutUserInput>
  }

  export type User_SessionUpdateManyWithWhereWithoutUserInput = {
    where: User_SessionScalarWhereInput
    data: XOR<User_SessionUpdateManyMutationInput, User_SessionUncheckedUpdateManyWithoutUserSessionInput>
  }

  export type User_SessionScalarWhereInput = {
    AND?: Enumerable<User_SessionScalarWhereInput>
    OR?: Enumerable<User_SessionScalarWhereInput>
    NOT?: Enumerable<User_SessionScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    userAgent?: StringFilter | string
    userAgentName?: StringFilter | string
    osName?: StringFilter | string
    deviceName?: StringFilter | string
    name?: StringFilter | string
    uuid?: StringFilter | string
    ipv4?: StringFilter | string
    fingerprint_id?: StringFilter | string
    is_active?: BoolFilter | boolean
    createDate?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutUserAuthInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    ModsCollections?: Mods_CollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadCreateNestedManyWithoutUserInput
    UserSession?: User_SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserAuthInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    ModsCollections?: Mods_CollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedCreateNestedManyWithoutUserInput
    UserSession?: User_SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserAuthInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAuthInput, UserUncheckedCreateWithoutUserAuthInput>
  }

  export type UserUpsertWithoutUserAuthInput = {
    update: XOR<UserUpdateWithoutUserAuthInput, UserUncheckedUpdateWithoutUserAuthInput>
    create: XOR<UserCreateWithoutUserAuthInput, UserUncheckedCreateWithoutUserAuthInput>
  }

  export type UserUpdateWithoutUserAuthInput = {
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    ModsCollections?: Mods_CollectionUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUpdateManyWithoutUserInput
    UserSession?: User_SessionUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutUserAuthInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    ModsCollections?: Mods_CollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedUpdateManyWithoutUserInput
    UserSession?: User_SessionUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateWithoutModsCollectionsInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthCreateNestedOneWithoutUserInput
    ModAuthors?: Mod_AuthorCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadCreateNestedManyWithoutUserInput
    UserSession?: User_SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModsCollectionsInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthUncheckedCreateNestedOneWithoutUserInput
    ModAuthors?: Mod_AuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedCreateNestedManyWithoutUserInput
    UserSession?: User_SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModsCollectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModsCollectionsInput, UserUncheckedCreateWithoutModsCollectionsInput>
  }

  export type ModCreateWithoutCollectionInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Images?: Mod_ImageCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorCreateNestedManyWithoutModInput
    Tags?: Mod_TagCreateNestedManyWithoutModInput
    Versions?: Mod_VersionCreateNestedManyWithoutModInput
    Lists?: Mods_ListCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadCreateNestedManyWithoutModInput
  }

  export type ModUncheckedCreateWithoutCollectionInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Images?: Mod_ImageUncheckedCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: Mod_TagUncheckedCreateNestedManyWithoutModInput
    Versions?: Mod_VersionUncheckedCreateNestedManyWithoutModInput
    Lists?: Mods_ListUncheckedCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutCollectionInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutCollectionInput, ModUncheckedCreateWithoutCollectionInput>
  }

  export type ModCreateManyCollectionInputEnvelope = {
    data: Enumerable<ModCreateManyCollectionInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutModsCollectionsInput = {
    update: XOR<UserUpdateWithoutModsCollectionsInput, UserUncheckedUpdateWithoutModsCollectionsInput>
    create: XOR<UserCreateWithoutModsCollectionsInput, UserUncheckedCreateWithoutModsCollectionsInput>
  }

  export type UserUpdateWithoutModsCollectionsInput = {
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUpdateOneWithoutUserInput
    ModAuthors?: Mod_AuthorUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUpdateManyWithoutUserInput
    UserSession?: User_SessionUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutModsCollectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUncheckedUpdateOneWithoutUserInput
    ModAuthors?: Mod_AuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedUpdateManyWithoutUserInput
    UserSession?: User_SessionUncheckedUpdateManyWithoutUserInput
  }

  export type ModUpsertWithWhereUniqueWithoutCollectionInput = {
    where: ModWhereUniqueInput
    update: XOR<ModUpdateWithoutCollectionInput, ModUncheckedUpdateWithoutCollectionInput>
    create: XOR<ModCreateWithoutCollectionInput, ModUncheckedCreateWithoutCollectionInput>
  }

  export type ModUpdateWithWhereUniqueWithoutCollectionInput = {
    where: ModWhereUniqueInput
    data: XOR<ModUpdateWithoutCollectionInput, ModUncheckedUpdateWithoutCollectionInput>
  }

  export type ModUpdateManyWithWhereWithoutCollectionInput = {
    where: ModScalarWhereInput
    data: XOR<ModUpdateManyMutationInput, ModUncheckedUpdateManyWithoutModsInput>
  }

  export type ModScalarWhereInput = {
    AND?: Enumerable<ModScalarWhereInput>
    OR?: Enumerable<ModScalarWhereInput>
    NOT?: Enumerable<ModScalarWhereInput>
    id?: IntFilter | number
    avatar?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    createDate?: DateTimeFilter | Date | string
    is_active?: BoolFilter | boolean
    collection_id?: IntFilter | number
    views?: IntFilter | number
    readme_type?: IntFilter | number
    readme?: StringFilter | string
    change_list_type?: IntFilter | number
    change_list?: StringFilter | string
    repository?: StringFilter | string
    docs_url?: StringFilter | string
  }

  export type Mods_CollectionCreateWithoutModsInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    Author: UserCreateNestedOneWithoutModsCollectionsInput
  }

  export type Mods_CollectionUncheckedCreateWithoutModsInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    author_id: number
  }

  export type Mods_CollectionCreateOrConnectWithoutModsInput = {
    where: Mods_CollectionWhereUniqueInput
    create: XOR<Mods_CollectionCreateWithoutModsInput, Mods_CollectionUncheckedCreateWithoutModsInput>
  }

  export type Mod_ImageCreateWithoutModInput = {
    url: string
  }

  export type Mod_ImageUncheckedCreateWithoutModInput = {
    id?: number
    url: string
  }

  export type Mod_ImageCreateOrConnectWithoutModInput = {
    where: Mod_ImageWhereUniqueInput
    create: XOR<Mod_ImageCreateWithoutModInput, Mod_ImageUncheckedCreateWithoutModInput>
  }

  export type Mod_ImageCreateManyModInputEnvelope = {
    data: Enumerable<Mod_ImageCreateManyModInput>
    skipDuplicates?: boolean
  }

  export type Mod_AuthorCreateWithoutModInput = {
    type: number
    User: UserCreateNestedOneWithoutModAuthorsInput
  }

  export type Mod_AuthorUncheckedCreateWithoutModInput = {
    user_id: number
    type: number
  }

  export type Mod_AuthorCreateOrConnectWithoutModInput = {
    where: Mod_AuthorWhereUniqueInput
    create: XOR<Mod_AuthorCreateWithoutModInput, Mod_AuthorUncheckedCreateWithoutModInput>
  }

  export type Mod_AuthorCreateManyModInputEnvelope = {
    data: Enumerable<Mod_AuthorCreateManyModInput>
    skipDuplicates?: boolean
  }

  export type Mod_TagCreateWithoutModInput = {
    name: string
  }

  export type Mod_TagUncheckedCreateWithoutModInput = {
    id?: number
    name: string
  }

  export type Mod_TagCreateOrConnectWithoutModInput = {
    where: Mod_TagWhereUniqueInput
    create: XOR<Mod_TagCreateWithoutModInput, Mod_TagUncheckedCreateWithoutModInput>
  }

  export type Mod_VersionCreateWithoutModInput = {
    version: string
    game_version: string
    releaseDate?: Date | string
    Downloads?: Mod_DownloadCreateNestedManyWithoutVersionInput
  }

  export type Mod_VersionUncheckedCreateWithoutModInput = {
    id?: number
    version: string
    game_version: string
    releaseDate?: Date | string
    Downloads?: Mod_DownloadUncheckedCreateNestedManyWithoutVersionInput
  }

  export type Mod_VersionCreateOrConnectWithoutModInput = {
    where: Mod_VersionWhereUniqueInput
    create: XOR<Mod_VersionCreateWithoutModInput, Mod_VersionUncheckedCreateWithoutModInput>
  }

  export type Mod_VersionCreateManyModInputEnvelope = {
    data: Enumerable<Mod_VersionCreateManyModInput>
    skipDuplicates?: boolean
  }

  export type Mods_ListCreateWithoutModsInput = {
    is_public: boolean
    name: string
    Author: UserCreateNestedOneWithoutModsListsInput
  }

  export type Mods_ListUncheckedCreateWithoutModsInput = {
    id?: number
    author_id: number
    is_public: boolean
    name: string
  }

  export type Mods_ListCreateOrConnectWithoutModsInput = {
    where: Mods_ListWhereUniqueInput
    create: XOR<Mods_ListCreateWithoutModsInput, Mods_ListUncheckedCreateWithoutModsInput>
  }

  export type Mod_IssueCreateWithoutModInput = {
    name: string
    type: Mod_Issue_Type
    createDate?: Date | string
    Author: UserCreateNestedOneWithoutModIssuesInput
    ModIssuePost?: Mod_Issue_PostCreateNestedManyWithoutIssueInput
  }

  export type Mod_IssueUncheckedCreateWithoutModInput = {
    id?: number
    name: string
    type: Mod_Issue_Type
    author_id: number
    createDate?: Date | string
    ModIssuePost?: Mod_Issue_PostUncheckedCreateNestedManyWithoutIssueInput
  }

  export type Mod_IssueCreateOrConnectWithoutModInput = {
    where: Mod_IssueWhereUniqueInput
    create: XOR<Mod_IssueCreateWithoutModInput, Mod_IssueUncheckedCreateWithoutModInput>
  }

  export type Mod_IssueCreateManyModInputEnvelope = {
    data: Enumerable<Mod_IssueCreateManyModInput>
    skipDuplicates?: boolean
  }

  export type Mods_FavoritsCreateWithoutModInput = {
    User: UserCreateNestedOneWithoutModsFavoritsInput
  }

  export type Mods_FavoritsUncheckedCreateWithoutModInput = {
    user_id: number
  }

  export type Mods_FavoritsCreateOrConnectWithoutModInput = {
    where: Mods_FavoritsWhereUniqueInput
    create: XOR<Mods_FavoritsCreateWithoutModInput, Mods_FavoritsUncheckedCreateWithoutModInput>
  }

  export type Mods_FavoritsCreateManyModInputEnvelope = {
    data: Enumerable<Mods_FavoritsCreateManyModInput>
    skipDuplicates?: boolean
  }

  export type Mod_SubscribersCreateWithoutModInput = {
    User: UserCreateNestedOneWithoutModSubscribersInput
  }

  export type Mod_SubscribersUncheckedCreateWithoutModInput = {
    user_id: number
  }

  export type Mod_SubscribersCreateOrConnectWithoutModInput = {
    where: Mod_SubscribersWhereUniqueInput
    create: XOR<Mod_SubscribersCreateWithoutModInput, Mod_SubscribersUncheckedCreateWithoutModInput>
  }

  export type Mod_SubscribersCreateManyModInputEnvelope = {
    data: Enumerable<Mod_SubscribersCreateManyModInput>
    skipDuplicates?: boolean
  }

  export type Mod_DownloadCreateWithoutModInput = {
    User: UserCreateNestedOneWithoutModDownloadsInput
    Version: Mod_VersionCreateNestedOneWithoutDownloadsInput
  }

  export type Mod_DownloadUncheckedCreateWithoutModInput = {
    user_id: number
    version_id: number
  }

  export type Mod_DownloadCreateOrConnectWithoutModInput = {
    where: Mod_DownloadWhereUniqueInput
    create: XOR<Mod_DownloadCreateWithoutModInput, Mod_DownloadUncheckedCreateWithoutModInput>
  }

  export type Mod_DownloadCreateManyModInputEnvelope = {
    data: Enumerable<Mod_DownloadCreateManyModInput>
    skipDuplicates?: boolean
  }

  export type Mods_CollectionUpsertWithoutModsInput = {
    update: XOR<Mods_CollectionUpdateWithoutModsInput, Mods_CollectionUncheckedUpdateWithoutModsInput>
    create: XOR<Mods_CollectionCreateWithoutModsInput, Mods_CollectionUncheckedCreateWithoutModsInput>
  }

  export type Mods_CollectionUpdateWithoutModsInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    Author?: UserUpdateOneRequiredWithoutModsCollectionsInput
  }

  export type Mods_CollectionUncheckedUpdateWithoutModsInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_ImageUpsertWithWhereUniqueWithoutModInput = {
    where: Mod_ImageWhereUniqueInput
    update: XOR<Mod_ImageUpdateWithoutModInput, Mod_ImageUncheckedUpdateWithoutModInput>
    create: XOR<Mod_ImageCreateWithoutModInput, Mod_ImageUncheckedCreateWithoutModInput>
  }

  export type Mod_ImageUpdateWithWhereUniqueWithoutModInput = {
    where: Mod_ImageWhereUniqueInput
    data: XOR<Mod_ImageUpdateWithoutModInput, Mod_ImageUncheckedUpdateWithoutModInput>
  }

  export type Mod_ImageUpdateManyWithWhereWithoutModInput = {
    where: Mod_ImageScalarWhereInput
    data: XOR<Mod_ImageUpdateManyMutationInput, Mod_ImageUncheckedUpdateManyWithoutImagesInput>
  }

  export type Mod_ImageScalarWhereInput = {
    AND?: Enumerable<Mod_ImageScalarWhereInput>
    OR?: Enumerable<Mod_ImageScalarWhereInput>
    NOT?: Enumerable<Mod_ImageScalarWhereInput>
    id?: IntFilter | number
    mod_id?: IntFilter | number
    url?: StringFilter | string
  }

  export type Mod_AuthorUpsertWithWhereUniqueWithoutModInput = {
    where: Mod_AuthorWhereUniqueInput
    update: XOR<Mod_AuthorUpdateWithoutModInput, Mod_AuthorUncheckedUpdateWithoutModInput>
    create: XOR<Mod_AuthorCreateWithoutModInput, Mod_AuthorUncheckedCreateWithoutModInput>
  }

  export type Mod_AuthorUpdateWithWhereUniqueWithoutModInput = {
    where: Mod_AuthorWhereUniqueInput
    data: XOR<Mod_AuthorUpdateWithoutModInput, Mod_AuthorUncheckedUpdateWithoutModInput>
  }

  export type Mod_AuthorUpdateManyWithWhereWithoutModInput = {
    where: Mod_AuthorScalarWhereInput
    data: XOR<Mod_AuthorUpdateManyMutationInput, Mod_AuthorUncheckedUpdateManyWithoutAuthorsInput>
  }

  export type Mod_TagUpsertWithWhereUniqueWithoutModInput = {
    where: Mod_TagWhereUniqueInput
    update: XOR<Mod_TagUpdateWithoutModInput, Mod_TagUncheckedUpdateWithoutModInput>
    create: XOR<Mod_TagCreateWithoutModInput, Mod_TagUncheckedCreateWithoutModInput>
  }

  export type Mod_TagUpdateWithWhereUniqueWithoutModInput = {
    where: Mod_TagWhereUniqueInput
    data: XOR<Mod_TagUpdateWithoutModInput, Mod_TagUncheckedUpdateWithoutModInput>
  }

  export type Mod_TagUpdateManyWithWhereWithoutModInput = {
    where: Mod_TagScalarWhereInput
    data: XOR<Mod_TagUpdateManyMutationInput, Mod_TagUncheckedUpdateManyWithoutTagsInput>
  }

  export type Mod_TagScalarWhereInput = {
    AND?: Enumerable<Mod_TagScalarWhereInput>
    OR?: Enumerable<Mod_TagScalarWhereInput>
    NOT?: Enumerable<Mod_TagScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
  }

  export type Mod_VersionUpsertWithWhereUniqueWithoutModInput = {
    where: Mod_VersionWhereUniqueInput
    update: XOR<Mod_VersionUpdateWithoutModInput, Mod_VersionUncheckedUpdateWithoutModInput>
    create: XOR<Mod_VersionCreateWithoutModInput, Mod_VersionUncheckedCreateWithoutModInput>
  }

  export type Mod_VersionUpdateWithWhereUniqueWithoutModInput = {
    where: Mod_VersionWhereUniqueInput
    data: XOR<Mod_VersionUpdateWithoutModInput, Mod_VersionUncheckedUpdateWithoutModInput>
  }

  export type Mod_VersionUpdateManyWithWhereWithoutModInput = {
    where: Mod_VersionScalarWhereInput
    data: XOR<Mod_VersionUpdateManyMutationInput, Mod_VersionUncheckedUpdateManyWithoutVersionsInput>
  }

  export type Mod_VersionScalarWhereInput = {
    AND?: Enumerable<Mod_VersionScalarWhereInput>
    OR?: Enumerable<Mod_VersionScalarWhereInput>
    NOT?: Enumerable<Mod_VersionScalarWhereInput>
    id?: IntFilter | number
    mod_id?: IntFilter | number
    version?: StringFilter | string
    game_version?: StringFilter | string
    releaseDate?: DateTimeFilter | Date | string
  }

  export type Mods_ListUpsertWithWhereUniqueWithoutModsInput = {
    where: Mods_ListWhereUniqueInput
    update: XOR<Mods_ListUpdateWithoutModsInput, Mods_ListUncheckedUpdateWithoutModsInput>
    create: XOR<Mods_ListCreateWithoutModsInput, Mods_ListUncheckedCreateWithoutModsInput>
  }

  export type Mods_ListUpdateWithWhereUniqueWithoutModsInput = {
    where: Mods_ListWhereUniqueInput
    data: XOR<Mods_ListUpdateWithoutModsInput, Mods_ListUncheckedUpdateWithoutModsInput>
  }

  export type Mods_ListUpdateManyWithWhereWithoutModsInput = {
    where: Mods_ListScalarWhereInput
    data: XOR<Mods_ListUpdateManyMutationInput, Mods_ListUncheckedUpdateManyWithoutListsInput>
  }

  export type Mod_IssueUpsertWithWhereUniqueWithoutModInput = {
    where: Mod_IssueWhereUniqueInput
    update: XOR<Mod_IssueUpdateWithoutModInput, Mod_IssueUncheckedUpdateWithoutModInput>
    create: XOR<Mod_IssueCreateWithoutModInput, Mod_IssueUncheckedCreateWithoutModInput>
  }

  export type Mod_IssueUpdateWithWhereUniqueWithoutModInput = {
    where: Mod_IssueWhereUniqueInput
    data: XOR<Mod_IssueUpdateWithoutModInput, Mod_IssueUncheckedUpdateWithoutModInput>
  }

  export type Mod_IssueUpdateManyWithWhereWithoutModInput = {
    where: Mod_IssueScalarWhereInput
    data: XOR<Mod_IssueUpdateManyMutationInput, Mod_IssueUncheckedUpdateManyWithoutIssuesInput>
  }

  export type Mods_FavoritsUpsertWithWhereUniqueWithoutModInput = {
    where: Mods_FavoritsWhereUniqueInput
    update: XOR<Mods_FavoritsUpdateWithoutModInput, Mods_FavoritsUncheckedUpdateWithoutModInput>
    create: XOR<Mods_FavoritsCreateWithoutModInput, Mods_FavoritsUncheckedCreateWithoutModInput>
  }

  export type Mods_FavoritsUpdateWithWhereUniqueWithoutModInput = {
    where: Mods_FavoritsWhereUniqueInput
    data: XOR<Mods_FavoritsUpdateWithoutModInput, Mods_FavoritsUncheckedUpdateWithoutModInput>
  }

  export type Mods_FavoritsUpdateManyWithWhereWithoutModInput = {
    where: Mods_FavoritsScalarWhereInput
    data: XOR<Mods_FavoritsUpdateManyMutationInput, Mods_FavoritsUncheckedUpdateManyWithoutFavoritsInput>
  }

  export type Mod_SubscribersUpsertWithWhereUniqueWithoutModInput = {
    where: Mod_SubscribersWhereUniqueInput
    update: XOR<Mod_SubscribersUpdateWithoutModInput, Mod_SubscribersUncheckedUpdateWithoutModInput>
    create: XOR<Mod_SubscribersCreateWithoutModInput, Mod_SubscribersUncheckedCreateWithoutModInput>
  }

  export type Mod_SubscribersUpdateWithWhereUniqueWithoutModInput = {
    where: Mod_SubscribersWhereUniqueInput
    data: XOR<Mod_SubscribersUpdateWithoutModInput, Mod_SubscribersUncheckedUpdateWithoutModInput>
  }

  export type Mod_SubscribersUpdateManyWithWhereWithoutModInput = {
    where: Mod_SubscribersScalarWhereInput
    data: XOR<Mod_SubscribersUpdateManyMutationInput, Mod_SubscribersUncheckedUpdateManyWithoutSubscribersInput>
  }

  export type Mod_DownloadUpsertWithWhereUniqueWithoutModInput = {
    where: Mod_DownloadWhereUniqueInput
    update: XOR<Mod_DownloadUpdateWithoutModInput, Mod_DownloadUncheckedUpdateWithoutModInput>
    create: XOR<Mod_DownloadCreateWithoutModInput, Mod_DownloadUncheckedCreateWithoutModInput>
  }

  export type Mod_DownloadUpdateWithWhereUniqueWithoutModInput = {
    where: Mod_DownloadWhereUniqueInput
    data: XOR<Mod_DownloadUpdateWithoutModInput, Mod_DownloadUncheckedUpdateWithoutModInput>
  }

  export type Mod_DownloadUpdateManyWithWhereWithoutModInput = {
    where: Mod_DownloadScalarWhereInput
    data: XOR<Mod_DownloadUpdateManyMutationInput, Mod_DownloadUncheckedUpdateManyWithoutDownloadsInput>
  }

  export type UserCreateWithoutModAuthorsInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionCreateNestedManyWithoutAuthorInput
    ModIssues?: Mod_IssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadCreateNestedManyWithoutUserInput
    UserSession?: User_SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModAuthorsInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModIssues?: Mod_IssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedCreateNestedManyWithoutUserInput
    UserSession?: User_SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModAuthorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModAuthorsInput, UserUncheckedCreateWithoutModAuthorsInput>
  }

  export type ModCreateWithoutAuthorsInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Collection: Mods_CollectionCreateNestedOneWithoutModsInput
    Images?: Mod_ImageCreateNestedManyWithoutModInput
    Tags?: Mod_TagCreateNestedManyWithoutModInput
    Versions?: Mod_VersionCreateNestedManyWithoutModInput
    Lists?: Mods_ListCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadCreateNestedManyWithoutModInput
  }

  export type ModUncheckedCreateWithoutAuthorsInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    collection_id: number
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Images?: Mod_ImageUncheckedCreateNestedManyWithoutModInput
    Tags?: Mod_TagUncheckedCreateNestedManyWithoutModInput
    Versions?: Mod_VersionUncheckedCreateNestedManyWithoutModInput
    Lists?: Mods_ListUncheckedCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutAuthorsInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutAuthorsInput, ModUncheckedCreateWithoutAuthorsInput>
  }

  export type UserUpsertWithoutModAuthorsInput = {
    update: XOR<UserUpdateWithoutModAuthorsInput, UserUncheckedUpdateWithoutModAuthorsInput>
    create: XOR<UserCreateWithoutModAuthorsInput, UserUncheckedCreateWithoutModAuthorsInput>
  }

  export type UserUpdateWithoutModAuthorsInput = {
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUpdateManyWithoutAuthorInput
    ModIssues?: Mod_IssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUpdateManyWithoutUserInput
    UserSession?: User_SessionUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutModAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedUpdateManyWithoutAuthorInput
    ModIssues?: Mod_IssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedUpdateManyWithoutUserInput
    UserSession?: User_SessionUncheckedUpdateManyWithoutUserInput
  }

  export type ModUpsertWithoutAuthorsInput = {
    update: XOR<ModUpdateWithoutAuthorsInput, ModUncheckedUpdateWithoutAuthorsInput>
    create: XOR<ModCreateWithoutAuthorsInput, ModUncheckedCreateWithoutAuthorsInput>
  }

  export type ModUpdateWithoutAuthorsInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Collection?: Mods_CollectionUpdateOneRequiredWithoutModsInput
    Images?: Mod_ImageUpdateManyWithoutModInput
    Tags?: Mod_TagUpdateManyWithoutModInput
    Versions?: Mod_VersionUpdateManyWithoutModInput
    Lists?: Mods_ListUpdateManyWithoutModsInput
    Issues?: Mod_IssueUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUpdateManyWithoutModInput
  }

  export type ModUncheckedUpdateWithoutAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    collection_id?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Images?: Mod_ImageUncheckedUpdateManyWithoutModInput
    Tags?: Mod_TagUncheckedUpdateManyWithoutModInput
    Versions?: Mod_VersionUncheckedUpdateManyWithoutModInput
    Lists?: Mods_ListUncheckedUpdateManyWithoutModsInput
    Issues?: Mod_IssueUncheckedUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedUpdateManyWithoutModInput
  }

  export type ModCreateWithoutImagesInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Collection: Mods_CollectionCreateNestedOneWithoutModsInput
    Authors?: Mod_AuthorCreateNestedManyWithoutModInput
    Tags?: Mod_TagCreateNestedManyWithoutModInput
    Versions?: Mod_VersionCreateNestedManyWithoutModInput
    Lists?: Mods_ListCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadCreateNestedManyWithoutModInput
  }

  export type ModUncheckedCreateWithoutImagesInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    collection_id: number
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Authors?: Mod_AuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: Mod_TagUncheckedCreateNestedManyWithoutModInput
    Versions?: Mod_VersionUncheckedCreateNestedManyWithoutModInput
    Lists?: Mods_ListUncheckedCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutImagesInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutImagesInput, ModUncheckedCreateWithoutImagesInput>
  }

  export type ModUpsertWithoutImagesInput = {
    update: XOR<ModUpdateWithoutImagesInput, ModUncheckedUpdateWithoutImagesInput>
    create: XOR<ModCreateWithoutImagesInput, ModUncheckedCreateWithoutImagesInput>
  }

  export type ModUpdateWithoutImagesInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Collection?: Mods_CollectionUpdateOneRequiredWithoutModsInput
    Authors?: Mod_AuthorUpdateManyWithoutModInput
    Tags?: Mod_TagUpdateManyWithoutModInput
    Versions?: Mod_VersionUpdateManyWithoutModInput
    Lists?: Mods_ListUpdateManyWithoutModsInput
    Issues?: Mod_IssueUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUpdateManyWithoutModInput
  }

  export type ModUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    collection_id?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Authors?: Mod_AuthorUncheckedUpdateManyWithoutModInput
    Tags?: Mod_TagUncheckedUpdateManyWithoutModInput
    Versions?: Mod_VersionUncheckedUpdateManyWithoutModInput
    Lists?: Mods_ListUncheckedUpdateManyWithoutModsInput
    Issues?: Mod_IssueUncheckedUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedUpdateManyWithoutModInput
  }

  export type ModCreateWithoutTagsInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Collection: Mods_CollectionCreateNestedOneWithoutModsInput
    Images?: Mod_ImageCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorCreateNestedManyWithoutModInput
    Versions?: Mod_VersionCreateNestedManyWithoutModInput
    Lists?: Mods_ListCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadCreateNestedManyWithoutModInput
  }

  export type ModUncheckedCreateWithoutTagsInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    collection_id: number
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Images?: Mod_ImageUncheckedCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorUncheckedCreateNestedManyWithoutModInput
    Versions?: Mod_VersionUncheckedCreateNestedManyWithoutModInput
    Lists?: Mods_ListUncheckedCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutTagsInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutTagsInput, ModUncheckedCreateWithoutTagsInput>
  }

  export type ModUpsertWithWhereUniqueWithoutTagsInput = {
    where: ModWhereUniqueInput
    update: XOR<ModUpdateWithoutTagsInput, ModUncheckedUpdateWithoutTagsInput>
    create: XOR<ModCreateWithoutTagsInput, ModUncheckedCreateWithoutTagsInput>
  }

  export type ModUpdateWithWhereUniqueWithoutTagsInput = {
    where: ModWhereUniqueInput
    data: XOR<ModUpdateWithoutTagsInput, ModUncheckedUpdateWithoutTagsInput>
  }

  export type ModUpdateManyWithWhereWithoutTagsInput = {
    where: ModScalarWhereInput
    data: XOR<ModUpdateManyMutationInput, ModUncheckedUpdateManyWithoutModInput>
  }

  export type ModCreateWithoutVersionsInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Collection: Mods_CollectionCreateNestedOneWithoutModsInput
    Images?: Mod_ImageCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorCreateNestedManyWithoutModInput
    Tags?: Mod_TagCreateNestedManyWithoutModInput
    Lists?: Mods_ListCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadCreateNestedManyWithoutModInput
  }

  export type ModUncheckedCreateWithoutVersionsInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    collection_id: number
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Images?: Mod_ImageUncheckedCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: Mod_TagUncheckedCreateNestedManyWithoutModInput
    Lists?: Mods_ListUncheckedCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutVersionsInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutVersionsInput, ModUncheckedCreateWithoutVersionsInput>
  }

  export type Mod_DownloadCreateWithoutVersionInput = {
    User: UserCreateNestedOneWithoutModDownloadsInput
    Mod: ModCreateNestedOneWithoutDownloadsInput
  }

  export type Mod_DownloadUncheckedCreateWithoutVersionInput = {
    user_id: number
    mod_id: number
  }

  export type Mod_DownloadCreateOrConnectWithoutVersionInput = {
    where: Mod_DownloadWhereUniqueInput
    create: XOR<Mod_DownloadCreateWithoutVersionInput, Mod_DownloadUncheckedCreateWithoutVersionInput>
  }

  export type Mod_DownloadCreateManyVersionInputEnvelope = {
    data: Enumerable<Mod_DownloadCreateManyVersionInput>
    skipDuplicates?: boolean
  }

  export type ModUpsertWithoutVersionsInput = {
    update: XOR<ModUpdateWithoutVersionsInput, ModUncheckedUpdateWithoutVersionsInput>
    create: XOR<ModCreateWithoutVersionsInput, ModUncheckedCreateWithoutVersionsInput>
  }

  export type ModUpdateWithoutVersionsInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Collection?: Mods_CollectionUpdateOneRequiredWithoutModsInput
    Images?: Mod_ImageUpdateManyWithoutModInput
    Authors?: Mod_AuthorUpdateManyWithoutModInput
    Tags?: Mod_TagUpdateManyWithoutModInput
    Lists?: Mods_ListUpdateManyWithoutModsInput
    Issues?: Mod_IssueUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUpdateManyWithoutModInput
  }

  export type ModUncheckedUpdateWithoutVersionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    collection_id?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Images?: Mod_ImageUncheckedUpdateManyWithoutModInput
    Authors?: Mod_AuthorUncheckedUpdateManyWithoutModInput
    Tags?: Mod_TagUncheckedUpdateManyWithoutModInput
    Lists?: Mods_ListUncheckedUpdateManyWithoutModsInput
    Issues?: Mod_IssueUncheckedUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedUpdateManyWithoutModInput
  }

  export type Mod_DownloadUpsertWithWhereUniqueWithoutVersionInput = {
    where: Mod_DownloadWhereUniqueInput
    update: XOR<Mod_DownloadUpdateWithoutVersionInput, Mod_DownloadUncheckedUpdateWithoutVersionInput>
    create: XOR<Mod_DownloadCreateWithoutVersionInput, Mod_DownloadUncheckedCreateWithoutVersionInput>
  }

  export type Mod_DownloadUpdateWithWhereUniqueWithoutVersionInput = {
    where: Mod_DownloadWhereUniqueInput
    data: XOR<Mod_DownloadUpdateWithoutVersionInput, Mod_DownloadUncheckedUpdateWithoutVersionInput>
  }

  export type Mod_DownloadUpdateManyWithWhereWithoutVersionInput = {
    where: Mod_DownloadScalarWhereInput
    data: XOR<Mod_DownloadUpdateManyMutationInput, Mod_DownloadUncheckedUpdateManyWithoutDownloadsInput>
  }

  export type ModCreateWithoutIssuesInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Collection: Mods_CollectionCreateNestedOneWithoutModsInput
    Images?: Mod_ImageCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorCreateNestedManyWithoutModInput
    Tags?: Mod_TagCreateNestedManyWithoutModInput
    Versions?: Mod_VersionCreateNestedManyWithoutModInput
    Lists?: Mods_ListCreateNestedManyWithoutModsInput
    Favorits?: Mods_FavoritsCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadCreateNestedManyWithoutModInput
  }

  export type ModUncheckedCreateWithoutIssuesInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    collection_id: number
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Images?: Mod_ImageUncheckedCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: Mod_TagUncheckedCreateNestedManyWithoutModInput
    Versions?: Mod_VersionUncheckedCreateNestedManyWithoutModInput
    Lists?: Mods_ListUncheckedCreateNestedManyWithoutModsInput
    Favorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutIssuesInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutIssuesInput, ModUncheckedCreateWithoutIssuesInput>
  }

  export type UserCreateWithoutModIssuesInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorCreateNestedManyWithoutUserInput
    ModIssuePosts?: Mod_Issue_PostCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadCreateNestedManyWithoutUserInput
    UserSession?: User_SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModIssuesInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssuePosts?: Mod_Issue_PostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedCreateNestedManyWithoutUserInput
    UserSession?: User_SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModIssuesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModIssuesInput, UserUncheckedCreateWithoutModIssuesInput>
  }

  export type Mod_Issue_PostCreateWithoutIssueInput = {
    createDate?: Date | string
    text: string
    Author: UserCreateNestedOneWithoutModIssuePostsInput
  }

  export type Mod_Issue_PostUncheckedCreateWithoutIssueInput = {
    id?: number
    author_id: number
    createDate?: Date | string
    text: string
  }

  export type Mod_Issue_PostCreateOrConnectWithoutIssueInput = {
    where: Mod_Issue_PostWhereUniqueInput
    create: XOR<Mod_Issue_PostCreateWithoutIssueInput, Mod_Issue_PostUncheckedCreateWithoutIssueInput>
  }

  export type Mod_Issue_PostCreateManyIssueInputEnvelope = {
    data: Enumerable<Mod_Issue_PostCreateManyIssueInput>
    skipDuplicates?: boolean
  }

  export type ModUpsertWithoutIssuesInput = {
    update: XOR<ModUpdateWithoutIssuesInput, ModUncheckedUpdateWithoutIssuesInput>
    create: XOR<ModCreateWithoutIssuesInput, ModUncheckedCreateWithoutIssuesInput>
  }

  export type ModUpdateWithoutIssuesInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Collection?: Mods_CollectionUpdateOneRequiredWithoutModsInput
    Images?: Mod_ImageUpdateManyWithoutModInput
    Authors?: Mod_AuthorUpdateManyWithoutModInput
    Tags?: Mod_TagUpdateManyWithoutModInput
    Versions?: Mod_VersionUpdateManyWithoutModInput
    Lists?: Mods_ListUpdateManyWithoutModsInput
    Favorits?: Mods_FavoritsUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUpdateManyWithoutModInput
  }

  export type ModUncheckedUpdateWithoutIssuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    collection_id?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Images?: Mod_ImageUncheckedUpdateManyWithoutModInput
    Authors?: Mod_AuthorUncheckedUpdateManyWithoutModInput
    Tags?: Mod_TagUncheckedUpdateManyWithoutModInput
    Versions?: Mod_VersionUncheckedUpdateManyWithoutModInput
    Lists?: Mods_ListUncheckedUpdateManyWithoutModsInput
    Favorits?: Mods_FavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedUpdateManyWithoutModInput
  }

  export type UserUpsertWithoutModIssuesInput = {
    update: XOR<UserUpdateWithoutModIssuesInput, UserUncheckedUpdateWithoutModIssuesInput>
    create: XOR<UserCreateWithoutModIssuesInput, UserUncheckedCreateWithoutModIssuesInput>
  }

  export type UserUpdateWithoutModIssuesInput = {
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUpdateManyWithoutUserInput
    ModIssuePosts?: Mod_Issue_PostUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUpdateManyWithoutUserInput
    UserSession?: User_SessionUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutModIssuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedUpdateManyWithoutUserInput
    ModIssuePosts?: Mod_Issue_PostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedUpdateManyWithoutUserInput
    UserSession?: User_SessionUncheckedUpdateManyWithoutUserInput
  }

  export type Mod_Issue_PostUpsertWithWhereUniqueWithoutIssueInput = {
    where: Mod_Issue_PostWhereUniqueInput
    update: XOR<Mod_Issue_PostUpdateWithoutIssueInput, Mod_Issue_PostUncheckedUpdateWithoutIssueInput>
    create: XOR<Mod_Issue_PostCreateWithoutIssueInput, Mod_Issue_PostUncheckedCreateWithoutIssueInput>
  }

  export type Mod_Issue_PostUpdateWithWhereUniqueWithoutIssueInput = {
    where: Mod_Issue_PostWhereUniqueInput
    data: XOR<Mod_Issue_PostUpdateWithoutIssueInput, Mod_Issue_PostUncheckedUpdateWithoutIssueInput>
  }

  export type Mod_Issue_PostUpdateManyWithWhereWithoutIssueInput = {
    where: Mod_Issue_PostScalarWhereInput
    data: XOR<Mod_Issue_PostUpdateManyMutationInput, Mod_Issue_PostUncheckedUpdateManyWithoutModIssuePostInput>
  }

  export type Mod_IssueCreateWithoutModIssuePostInput = {
    name: string
    type: Mod_Issue_Type
    createDate?: Date | string
    Mod: ModCreateNestedOneWithoutIssuesInput
    Author: UserCreateNestedOneWithoutModIssuesInput
  }

  export type Mod_IssueUncheckedCreateWithoutModIssuePostInput = {
    id?: number
    mod_id: number
    name: string
    type: Mod_Issue_Type
    author_id: number
    createDate?: Date | string
  }

  export type Mod_IssueCreateOrConnectWithoutModIssuePostInput = {
    where: Mod_IssueWhereUniqueInput
    create: XOR<Mod_IssueCreateWithoutModIssuePostInput, Mod_IssueUncheckedCreateWithoutModIssuePostInput>
  }

  export type UserCreateWithoutModIssuePostsInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadCreateNestedManyWithoutUserInput
    UserSession?: User_SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModIssuePostsInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedCreateNestedManyWithoutUserInput
    UserSession?: User_SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModIssuePostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModIssuePostsInput, UserUncheckedCreateWithoutModIssuePostsInput>
  }

  export type Mod_IssueUpsertWithoutModIssuePostInput = {
    update: XOR<Mod_IssueUpdateWithoutModIssuePostInput, Mod_IssueUncheckedUpdateWithoutModIssuePostInput>
    create: XOR<Mod_IssueCreateWithoutModIssuePostInput, Mod_IssueUncheckedCreateWithoutModIssuePostInput>
  }

  export type Mod_IssueUpdateWithoutModIssuePostInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMod_Issue_TypeFieldUpdateOperationsInput | Mod_Issue_Type
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Mod?: ModUpdateOneRequiredWithoutIssuesInput
    Author?: UserUpdateOneRequiredWithoutModIssuesInput
  }

  export type Mod_IssueUncheckedUpdateWithoutModIssuePostInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMod_Issue_TypeFieldUpdateOperationsInput | Mod_Issue_Type
    author_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutModIssuePostsInput = {
    update: XOR<UserUpdateWithoutModIssuePostsInput, UserUncheckedUpdateWithoutModIssuePostsInput>
    create: XOR<UserCreateWithoutModIssuePostsInput, UserUncheckedCreateWithoutModIssuePostsInput>
  }

  export type UserUpdateWithoutModIssuePostsInput = {
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUpdateManyWithoutUserInput
    UserSession?: User_SessionUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutModIssuePostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedUpdateManyWithoutUserInput
    UserSession?: User_SessionUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateWithoutModsListsInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadCreateNestedManyWithoutUserInput
    UserSession?: User_SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModsListsInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedCreateNestedManyWithoutUserInput
    UserSession?: User_SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModsListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModsListsInput, UserUncheckedCreateWithoutModsListsInput>
  }

  export type ModCreateWithoutListsInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Collection: Mods_CollectionCreateNestedOneWithoutModsInput
    Images?: Mod_ImageCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorCreateNestedManyWithoutModInput
    Tags?: Mod_TagCreateNestedManyWithoutModInput
    Versions?: Mod_VersionCreateNestedManyWithoutModInput
    Issues?: Mod_IssueCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadCreateNestedManyWithoutModInput
  }

  export type ModUncheckedCreateWithoutListsInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    collection_id: number
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Images?: Mod_ImageUncheckedCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: Mod_TagUncheckedCreateNestedManyWithoutModInput
    Versions?: Mod_VersionUncheckedCreateNestedManyWithoutModInput
    Issues?: Mod_IssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutListsInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutListsInput, ModUncheckedCreateWithoutListsInput>
  }

  export type UserUpsertWithoutModsListsInput = {
    update: XOR<UserUpdateWithoutModsListsInput, UserUncheckedUpdateWithoutModsListsInput>
    create: XOR<UserCreateWithoutModsListsInput, UserUncheckedCreateWithoutModsListsInput>
  }

  export type UserUpdateWithoutModsListsInput = {
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUpdateManyWithoutUserInput
    UserSession?: User_SessionUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutModsListsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedUpdateManyWithoutUserInput
    UserSession?: User_SessionUncheckedUpdateManyWithoutUserInput
  }

  export type ModUpsertWithWhereUniqueWithoutListsInput = {
    where: ModWhereUniqueInput
    update: XOR<ModUpdateWithoutListsInput, ModUncheckedUpdateWithoutListsInput>
    create: XOR<ModCreateWithoutListsInput, ModUncheckedCreateWithoutListsInput>
  }

  export type ModUpdateWithWhereUniqueWithoutListsInput = {
    where: ModWhereUniqueInput
    data: XOR<ModUpdateWithoutListsInput, ModUncheckedUpdateWithoutListsInput>
  }

  export type ModUpdateManyWithWhereWithoutListsInput = {
    where: ModScalarWhereInput
    data: XOR<ModUpdateManyMutationInput, ModUncheckedUpdateManyWithoutModsInput>
  }

  export type UserCreateWithoutModsFavoritsInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListCreateNestedManyWithoutAuthorInput
    ModSubscribers?: Mod_SubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadCreateNestedManyWithoutUserInput
    UserSession?: User_SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModsFavoritsInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedCreateNestedManyWithoutAuthorInput
    ModSubscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedCreateNestedManyWithoutUserInput
    UserSession?: User_SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModsFavoritsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModsFavoritsInput, UserUncheckedCreateWithoutModsFavoritsInput>
  }

  export type ModCreateWithoutFavoritsInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Collection: Mods_CollectionCreateNestedOneWithoutModsInput
    Images?: Mod_ImageCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorCreateNestedManyWithoutModInput
    Tags?: Mod_TagCreateNestedManyWithoutModInput
    Versions?: Mod_VersionCreateNestedManyWithoutModInput
    Lists?: Mods_ListCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadCreateNestedManyWithoutModInput
  }

  export type ModUncheckedCreateWithoutFavoritsInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    collection_id: number
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Images?: Mod_ImageUncheckedCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: Mod_TagUncheckedCreateNestedManyWithoutModInput
    Versions?: Mod_VersionUncheckedCreateNestedManyWithoutModInput
    Lists?: Mods_ListUncheckedCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueUncheckedCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutFavoritsInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutFavoritsInput, ModUncheckedCreateWithoutFavoritsInput>
  }

  export type UserUpsertWithoutModsFavoritsInput = {
    update: XOR<UserUpdateWithoutModsFavoritsInput, UserUncheckedUpdateWithoutModsFavoritsInput>
    create: XOR<UserCreateWithoutModsFavoritsInput, UserUncheckedCreateWithoutModsFavoritsInput>
  }

  export type UserUpdateWithoutModsFavoritsInput = {
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUpdateManyWithoutAuthorInput
    ModSubscribers?: Mod_SubscribersUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUpdateManyWithoutUserInput
    UserSession?: User_SessionUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutModsFavoritsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedUpdateManyWithoutAuthorInput
    ModSubscribers?: Mod_SubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedUpdateManyWithoutUserInput
    UserSession?: User_SessionUncheckedUpdateManyWithoutUserInput
  }

  export type ModUpsertWithoutFavoritsInput = {
    update: XOR<ModUpdateWithoutFavoritsInput, ModUncheckedUpdateWithoutFavoritsInput>
    create: XOR<ModCreateWithoutFavoritsInput, ModUncheckedCreateWithoutFavoritsInput>
  }

  export type ModUpdateWithoutFavoritsInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Collection?: Mods_CollectionUpdateOneRequiredWithoutModsInput
    Images?: Mod_ImageUpdateManyWithoutModInput
    Authors?: Mod_AuthorUpdateManyWithoutModInput
    Tags?: Mod_TagUpdateManyWithoutModInput
    Versions?: Mod_VersionUpdateManyWithoutModInput
    Lists?: Mods_ListUpdateManyWithoutModsInput
    Issues?: Mod_IssueUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUpdateManyWithoutModInput
  }

  export type ModUncheckedUpdateWithoutFavoritsInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    collection_id?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Images?: Mod_ImageUncheckedUpdateManyWithoutModInput
    Authors?: Mod_AuthorUncheckedUpdateManyWithoutModInput
    Tags?: Mod_TagUncheckedUpdateManyWithoutModInput
    Versions?: Mod_VersionUncheckedUpdateManyWithoutModInput
    Lists?: Mods_ListUncheckedUpdateManyWithoutModsInput
    Issues?: Mod_IssueUncheckedUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedUpdateManyWithoutModInput
  }

  export type UserCreateWithoutModSubscribersInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadCreateNestedManyWithoutUserInput
    UserSession?: User_SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModSubscribersInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedCreateNestedManyWithoutUserInput
    UserSession?: User_SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModSubscribersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModSubscribersInput, UserUncheckedCreateWithoutModSubscribersInput>
  }

  export type ModCreateWithoutSubscribersInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Collection: Mods_CollectionCreateNestedOneWithoutModsInput
    Images?: Mod_ImageCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorCreateNestedManyWithoutModInput
    Tags?: Mod_TagCreateNestedManyWithoutModInput
    Versions?: Mod_VersionCreateNestedManyWithoutModInput
    Lists?: Mods_ListCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadCreateNestedManyWithoutModInput
  }

  export type ModUncheckedCreateWithoutSubscribersInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    collection_id: number
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Images?: Mod_ImageUncheckedCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: Mod_TagUncheckedCreateNestedManyWithoutModInput
    Versions?: Mod_VersionUncheckedCreateNestedManyWithoutModInput
    Lists?: Mods_ListUncheckedCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutSubscribersInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutSubscribersInput, ModUncheckedCreateWithoutSubscribersInput>
  }

  export type UserUpsertWithoutModSubscribersInput = {
    update: XOR<UserUpdateWithoutModSubscribersInput, UserUncheckedUpdateWithoutModSubscribersInput>
    create: XOR<UserCreateWithoutModSubscribersInput, UserUncheckedCreateWithoutModSubscribersInput>
  }

  export type UserUpdateWithoutModSubscribersInput = {
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUpdateManyWithoutUserInput
    UserSession?: User_SessionUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutModSubscribersInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedUpdateManyWithoutUserInput
    UserSession?: User_SessionUncheckedUpdateManyWithoutUserInput
  }

  export type ModUpsertWithoutSubscribersInput = {
    update: XOR<ModUpdateWithoutSubscribersInput, ModUncheckedUpdateWithoutSubscribersInput>
    create: XOR<ModCreateWithoutSubscribersInput, ModUncheckedCreateWithoutSubscribersInput>
  }

  export type ModUpdateWithoutSubscribersInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Collection?: Mods_CollectionUpdateOneRequiredWithoutModsInput
    Images?: Mod_ImageUpdateManyWithoutModInput
    Authors?: Mod_AuthorUpdateManyWithoutModInput
    Tags?: Mod_TagUpdateManyWithoutModInput
    Versions?: Mod_VersionUpdateManyWithoutModInput
    Lists?: Mods_ListUpdateManyWithoutModsInput
    Issues?: Mod_IssueUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUpdateManyWithoutModInput
  }

  export type ModUncheckedUpdateWithoutSubscribersInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    collection_id?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Images?: Mod_ImageUncheckedUpdateManyWithoutModInput
    Authors?: Mod_AuthorUncheckedUpdateManyWithoutModInput
    Tags?: Mod_TagUncheckedUpdateManyWithoutModInput
    Versions?: Mod_VersionUncheckedUpdateManyWithoutModInput
    Lists?: Mods_ListUncheckedUpdateManyWithoutModsInput
    Issues?: Mod_IssueUncheckedUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedUpdateManyWithoutModInput
  }

  export type UserCreateWithoutModDownloadsInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersCreateNestedManyWithoutUserInput
    UserSession?: User_SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModDownloadsInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutUserInput
    UserSession?: User_SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModDownloadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModDownloadsInput, UserUncheckedCreateWithoutModDownloadsInput>
  }

  export type ModCreateWithoutDownloadsInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Collection: Mods_CollectionCreateNestedOneWithoutModsInput
    Images?: Mod_ImageCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorCreateNestedManyWithoutModInput
    Tags?: Mod_TagCreateNestedManyWithoutModInput
    Versions?: Mod_VersionCreateNestedManyWithoutModInput
    Lists?: Mods_ListCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersCreateNestedManyWithoutModInput
  }

  export type ModUncheckedCreateWithoutDownloadsInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    collection_id: number
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
    Images?: Mod_ImageUncheckedCreateNestedManyWithoutModInput
    Authors?: Mod_AuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: Mod_TagUncheckedCreateNestedManyWithoutModInput
    Versions?: Mod_VersionUncheckedCreateNestedManyWithoutModInput
    Lists?: Mods_ListUncheckedCreateNestedManyWithoutModsInput
    Issues?: Mod_IssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutDownloadsInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutDownloadsInput, ModUncheckedCreateWithoutDownloadsInput>
  }

  export type Mod_VersionCreateWithoutDownloadsInput = {
    version: string
    game_version: string
    releaseDate?: Date | string
    Mod: ModCreateNestedOneWithoutVersionsInput
  }

  export type Mod_VersionUncheckedCreateWithoutDownloadsInput = {
    id?: number
    mod_id: number
    version: string
    game_version: string
    releaseDate?: Date | string
  }

  export type Mod_VersionCreateOrConnectWithoutDownloadsInput = {
    where: Mod_VersionWhereUniqueInput
    create: XOR<Mod_VersionCreateWithoutDownloadsInput, Mod_VersionUncheckedCreateWithoutDownloadsInput>
  }

  export type UserUpsertWithoutModDownloadsInput = {
    update: XOR<UserUpdateWithoutModDownloadsInput, UserUncheckedUpdateWithoutModDownloadsInput>
    create: XOR<UserCreateWithoutModDownloadsInput, UserUncheckedCreateWithoutModDownloadsInput>
  }

  export type UserUpdateWithoutModDownloadsInput = {
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUpdateManyWithoutUserInput
    UserSession?: User_SessionUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutModDownloadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedUpdateManyWithoutUserInput
    UserSession?: User_SessionUncheckedUpdateManyWithoutUserInput
  }

  export type ModUpsertWithoutDownloadsInput = {
    update: XOR<ModUpdateWithoutDownloadsInput, ModUncheckedUpdateWithoutDownloadsInput>
    create: XOR<ModCreateWithoutDownloadsInput, ModUncheckedCreateWithoutDownloadsInput>
  }

  export type ModUpdateWithoutDownloadsInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Collection?: Mods_CollectionUpdateOneRequiredWithoutModsInput
    Images?: Mod_ImageUpdateManyWithoutModInput
    Authors?: Mod_AuthorUpdateManyWithoutModInput
    Tags?: Mod_TagUpdateManyWithoutModInput
    Versions?: Mod_VersionUpdateManyWithoutModInput
    Lists?: Mods_ListUpdateManyWithoutModsInput
    Issues?: Mod_IssueUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUpdateManyWithoutModInput
  }

  export type ModUncheckedUpdateWithoutDownloadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    collection_id?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Images?: Mod_ImageUncheckedUpdateManyWithoutModInput
    Authors?: Mod_AuthorUncheckedUpdateManyWithoutModInput
    Tags?: Mod_TagUncheckedUpdateManyWithoutModInput
    Versions?: Mod_VersionUncheckedUpdateManyWithoutModInput
    Lists?: Mods_ListUncheckedUpdateManyWithoutModsInput
    Issues?: Mod_IssueUncheckedUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedUpdateManyWithoutModInput
  }

  export type Mod_VersionUpsertWithoutDownloadsInput = {
    update: XOR<Mod_VersionUpdateWithoutDownloadsInput, Mod_VersionUncheckedUpdateWithoutDownloadsInput>
    create: XOR<Mod_VersionCreateWithoutDownloadsInput, Mod_VersionUncheckedCreateWithoutDownloadsInput>
  }

  export type Mod_VersionUpdateWithoutDownloadsInput = {
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Mod?: ModUpdateOneRequiredWithoutVersionsInput
  }

  export type Mod_VersionUncheckedUpdateWithoutDownloadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutUserSessionInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserSessionInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: User_AuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSessionInput, UserUncheckedCreateWithoutUserSessionInput>
  }

  export type User_TokenCreateWithoutSessionInput = {
    access_token: string
    refresh_token: string
    createDate?: Date | string
    is_enable?: boolean
    is_super_access?: boolean
  }

  export type User_TokenUncheckedCreateWithoutSessionInput = {
    id?: number
    access_token: string
    refresh_token: string
    createDate?: Date | string
    is_enable?: boolean
    is_super_access?: boolean
  }

  export type User_TokenCreateOrConnectWithoutSessionInput = {
    where: User_TokenWhereUniqueInput
    create: XOR<User_TokenCreateWithoutSessionInput, User_TokenUncheckedCreateWithoutSessionInput>
  }

  export type User_TokenCreateManySessionInputEnvelope = {
    data: Enumerable<User_TokenCreateManySessionInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserSessionInput = {
    update: XOR<UserUpdateWithoutUserSessionInput, UserUncheckedUpdateWithoutUserSessionInput>
    create: XOR<UserCreateWithoutUserSessionInput, UserUncheckedCreateWithoutUserSessionInput>
  }

  export type UserUpdateWithoutUserSessionInput = {
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutUserSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: User_AuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: Mods_CollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: Mod_AuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: Mod_IssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: Mod_Issue_PostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: Mods_ListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: Mods_FavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: Mod_SubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: Mod_DownloadUncheckedUpdateManyWithoutUserInput
  }

  export type User_TokenUpsertWithWhereUniqueWithoutSessionInput = {
    where: User_TokenWhereUniqueInput
    update: XOR<User_TokenUpdateWithoutSessionInput, User_TokenUncheckedUpdateWithoutSessionInput>
    create: XOR<User_TokenCreateWithoutSessionInput, User_TokenUncheckedCreateWithoutSessionInput>
  }

  export type User_TokenUpdateWithWhereUniqueWithoutSessionInput = {
    where: User_TokenWhereUniqueInput
    data: XOR<User_TokenUpdateWithoutSessionInput, User_TokenUncheckedUpdateWithoutSessionInput>
  }

  export type User_TokenUpdateManyWithWhereWithoutSessionInput = {
    where: User_TokenScalarWhereInput
    data: XOR<User_TokenUpdateManyMutationInput, User_TokenUncheckedUpdateManyWithoutTokensInput>
  }

  export type User_TokenScalarWhereInput = {
    AND?: Enumerable<User_TokenScalarWhereInput>
    OR?: Enumerable<User_TokenScalarWhereInput>
    NOT?: Enumerable<User_TokenScalarWhereInput>
    id?: IntFilter | number
    sessionId?: IntFilter | number
    access_token?: StringFilter | string
    refresh_token?: StringFilter | string
    createDate?: DateTimeFilter | Date | string
    is_enable?: BoolFilter | boolean
    is_super_access?: BoolFilter | boolean
  }

  export type User_SessionCreateWithoutTokensInput = {
    userAgent: string
    userAgentName: string
    osName: string
    deviceName: string
    name: string
    uuid: string
    ipv4: string
    fingerprint_id: string
    is_active?: boolean
    createDate?: Date | string
    User: UserCreateNestedOneWithoutUserSessionInput
  }

  export type User_SessionUncheckedCreateWithoutTokensInput = {
    id?: number
    userId: number
    userAgent: string
    userAgentName: string
    osName: string
    deviceName: string
    name: string
    uuid: string
    ipv4: string
    fingerprint_id: string
    is_active?: boolean
    createDate?: Date | string
  }

  export type User_SessionCreateOrConnectWithoutTokensInput = {
    where: User_SessionWhereUniqueInput
    create: XOR<User_SessionCreateWithoutTokensInput, User_SessionUncheckedCreateWithoutTokensInput>
  }

  export type User_SessionUpsertWithoutTokensInput = {
    update: XOR<User_SessionUpdateWithoutTokensInput, User_SessionUncheckedUpdateWithoutTokensInput>
    create: XOR<User_SessionCreateWithoutTokensInput, User_SessionUncheckedCreateWithoutTokensInput>
  }

  export type User_SessionUpdateWithoutTokensInput = {
    userAgent?: StringFieldUpdateOperationsInput | string
    userAgentName?: StringFieldUpdateOperationsInput | string
    osName?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    ipv4?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUserSessionInput
  }

  export type User_SessionUncheckedUpdateWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    userAgentName?: StringFieldUpdateOperationsInput | string
    osName?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    ipv4?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Mods_CollectionCreateManyAuthorInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
  }

  export type Mod_AuthorCreateManyUserInput = {
    mod_id: number
    type: number
  }

  export type Mod_IssueCreateManyAuthorInput = {
    id?: number
    mod_id: number
    name: string
    type: Mod_Issue_Type
    createDate?: Date | string
  }

  export type Mod_Issue_PostCreateManyAuthorInput = {
    id?: number
    issue_id: number
    createDate?: Date | string
    text: string
  }

  export type Mods_ListCreateManyAuthorInput = {
    id?: number
    is_public: boolean
    name: string
  }

  export type Mods_FavoritsCreateManyUserInput = {
    mod_id: number
  }

  export type Mod_SubscribersCreateManyUserInput = {
    mod_id: number
  }

  export type Mod_DownloadCreateManyUserInput = {
    mod_id: number
    version_id: number
  }

  export type User_SessionCreateManyUserInput = {
    id?: number
    userAgent: string
    userAgentName: string
    osName: string
    deviceName: string
    name: string
    uuid: string
    ipv4: string
    fingerprint_id: string
    is_active?: boolean
    createDate?: Date | string
  }

  export type Mods_CollectionUpdateWithoutAuthorInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    Mods?: ModUpdateManyWithoutCollectionInput
  }

  export type Mods_CollectionUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    Mods?: ModUncheckedUpdateManyWithoutCollectionInput
  }

  export type Mods_CollectionUncheckedUpdateManyWithoutModsCollectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Mod_AuthorUpdateWithoutUserInput = {
    type?: IntFieldUpdateOperationsInput | number
    Mod?: ModUpdateOneRequiredWithoutAuthorsInput
  }

  export type Mod_AuthorUncheckedUpdateWithoutUserInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_AuthorUncheckedUpdateManyWithoutModAuthorsInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_IssueUpdateWithoutAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMod_Issue_TypeFieldUpdateOperationsInput | Mod_Issue_Type
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Mod?: ModUpdateOneRequiredWithoutIssuesInput
    ModIssuePost?: Mod_Issue_PostUpdateManyWithoutIssueInput
  }

  export type Mod_IssueUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMod_Issue_TypeFieldUpdateOperationsInput | Mod_Issue_Type
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ModIssuePost?: Mod_Issue_PostUncheckedUpdateManyWithoutIssueInput
  }

  export type Mod_IssueUncheckedUpdateManyWithoutModIssuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMod_Issue_TypeFieldUpdateOperationsInput | Mod_Issue_Type
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Mod_Issue_PostUpdateWithoutAuthorInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    Issue?: Mod_IssueUpdateOneRequiredWithoutModIssuePostInput
  }

  export type Mod_Issue_PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_Issue_PostUncheckedUpdateManyWithoutModIssuePostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type Mods_ListUpdateWithoutAuthorInput = {
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    Mods?: ModUpdateManyWithoutListsInput
  }

  export type Mods_ListUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    Mods?: ModUncheckedUpdateManyWithoutListsInput
  }

  export type Mods_ListUncheckedUpdateManyWithoutModsListsInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Mods_FavoritsUpdateWithoutUserInput = {
    Mod?: ModUpdateOneRequiredWithoutFavoritsInput
  }

  export type Mods_FavoritsUncheckedUpdateWithoutUserInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mods_FavoritsUncheckedUpdateManyWithoutModsFavoritsInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_SubscribersUpdateWithoutUserInput = {
    Mod?: ModUpdateOneRequiredWithoutSubscribersInput
  }

  export type Mod_SubscribersUncheckedUpdateWithoutUserInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_SubscribersUncheckedUpdateManyWithoutModSubscribersInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_DownloadUpdateWithoutUserInput = {
    Mod?: ModUpdateOneRequiredWithoutDownloadsInput
    Version?: Mod_VersionUpdateOneRequiredWithoutDownloadsInput
  }

  export type Mod_DownloadUncheckedUpdateWithoutUserInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_DownloadUncheckedUpdateManyWithoutModDownloadsInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
  }

  export type User_SessionUpdateWithoutUserInput = {
    userAgent?: StringFieldUpdateOperationsInput | string
    userAgentName?: StringFieldUpdateOperationsInput | string
    osName?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    ipv4?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Tokens?: User_TokenUpdateManyWithoutSessionInput
  }

  export type User_SessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    userAgentName?: StringFieldUpdateOperationsInput | string
    osName?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    ipv4?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Tokens?: User_TokenUncheckedUpdateManyWithoutSessionInput
  }

  export type User_SessionUncheckedUpdateManyWithoutUserSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    userAgentName?: StringFieldUpdateOperationsInput | string
    osName?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    ipv4?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModCreateManyCollectionInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    views: number
    readme_type: number
    readme: string
    change_list_type: number
    change_list: string
    repository: string
    docs_url: string
  }

  export type ModUpdateWithoutCollectionInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Images?: Mod_ImageUpdateManyWithoutModInput
    Authors?: Mod_AuthorUpdateManyWithoutModInput
    Tags?: Mod_TagUpdateManyWithoutModInput
    Versions?: Mod_VersionUpdateManyWithoutModInput
    Lists?: Mods_ListUpdateManyWithoutModsInput
    Issues?: Mod_IssueUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUpdateManyWithoutModInput
  }

  export type ModUncheckedUpdateWithoutCollectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Images?: Mod_ImageUncheckedUpdateManyWithoutModInput
    Authors?: Mod_AuthorUncheckedUpdateManyWithoutModInput
    Tags?: Mod_TagUncheckedUpdateManyWithoutModInput
    Versions?: Mod_VersionUncheckedUpdateManyWithoutModInput
    Lists?: Mods_ListUncheckedUpdateManyWithoutModsInput
    Issues?: Mod_IssueUncheckedUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedUpdateManyWithoutModInput
  }

  export type ModUncheckedUpdateManyWithoutModsInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_ImageCreateManyModInput = {
    id?: number
    url: string
  }

  export type Mod_AuthorCreateManyModInput = {
    user_id: number
    type: number
  }

  export type Mod_VersionCreateManyModInput = {
    id?: number
    version: string
    game_version: string
    releaseDate?: Date | string
  }

  export type Mod_IssueCreateManyModInput = {
    id?: number
    name: string
    type: Mod_Issue_Type
    author_id: number
    createDate?: Date | string
  }

  export type Mods_FavoritsCreateManyModInput = {
    user_id: number
  }

  export type Mod_SubscribersCreateManyModInput = {
    user_id: number
  }

  export type Mod_DownloadCreateManyModInput = {
    user_id: number
    version_id: number
  }

  export type Mod_ImageUpdateWithoutModInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_ImageUncheckedUpdateWithoutModInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_ImageUncheckedUpdateManyWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_AuthorUpdateWithoutModInput = {
    type?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutModAuthorsInput
  }

  export type Mod_AuthorUncheckedUpdateWithoutModInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_AuthorUncheckedUpdateManyWithoutAuthorsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_TagUpdateWithoutModInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_TagUncheckedUpdateWithoutModInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_TagUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_VersionUpdateWithoutModInput = {
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Downloads?: Mod_DownloadUpdateManyWithoutVersionInput
  }

  export type Mod_VersionUncheckedUpdateWithoutModInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Downloads?: Mod_DownloadUncheckedUpdateManyWithoutVersionInput
  }

  export type Mod_VersionUncheckedUpdateManyWithoutVersionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Mods_ListUpdateWithoutModsInput = {
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    Author?: UserUpdateOneRequiredWithoutModsListsInput
  }

  export type Mods_ListUncheckedUpdateWithoutModsInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Mods_ListUncheckedUpdateManyWithoutListsInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_IssueUpdateWithoutModInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMod_Issue_TypeFieldUpdateOperationsInput | Mod_Issue_Type
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Author?: UserUpdateOneRequiredWithoutModIssuesInput
    ModIssuePost?: Mod_Issue_PostUpdateManyWithoutIssueInput
  }

  export type Mod_IssueUncheckedUpdateWithoutModInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMod_Issue_TypeFieldUpdateOperationsInput | Mod_Issue_Type
    author_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ModIssuePost?: Mod_Issue_PostUncheckedUpdateManyWithoutIssueInput
  }

  export type Mod_IssueUncheckedUpdateManyWithoutIssuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMod_Issue_TypeFieldUpdateOperationsInput | Mod_Issue_Type
    author_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Mods_FavoritsUpdateWithoutModInput = {
    User?: UserUpdateOneRequiredWithoutModsFavoritsInput
  }

  export type Mods_FavoritsUncheckedUpdateWithoutModInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mods_FavoritsUncheckedUpdateManyWithoutFavoritsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_SubscribersUpdateWithoutModInput = {
    User?: UserUpdateOneRequiredWithoutModSubscribersInput
  }

  export type Mod_SubscribersUncheckedUpdateWithoutModInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_SubscribersUncheckedUpdateManyWithoutSubscribersInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_DownloadUpdateWithoutModInput = {
    User?: UserUpdateOneRequiredWithoutModDownloadsInput
    Version?: Mod_VersionUpdateOneRequiredWithoutDownloadsInput
  }

  export type Mod_DownloadUncheckedUpdateWithoutModInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_DownloadUncheckedUpdateManyWithoutDownloadsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModUpdateWithoutTagsInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Collection?: Mods_CollectionUpdateOneRequiredWithoutModsInput
    Images?: Mod_ImageUpdateManyWithoutModInput
    Authors?: Mod_AuthorUpdateManyWithoutModInput
    Versions?: Mod_VersionUpdateManyWithoutModInput
    Lists?: Mods_ListUpdateManyWithoutModsInput
    Issues?: Mod_IssueUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUpdateManyWithoutModInput
  }

  export type ModUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    collection_id?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Images?: Mod_ImageUncheckedUpdateManyWithoutModInput
    Authors?: Mod_AuthorUncheckedUpdateManyWithoutModInput
    Versions?: Mod_VersionUncheckedUpdateManyWithoutModInput
    Lists?: Mods_ListUncheckedUpdateManyWithoutModsInput
    Issues?: Mod_IssueUncheckedUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedUpdateManyWithoutModInput
  }

  export type ModUncheckedUpdateManyWithoutModInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    collection_id?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_DownloadCreateManyVersionInput = {
    user_id: number
    mod_id: number
  }

  export type Mod_DownloadUpdateWithoutVersionInput = {
    User?: UserUpdateOneRequiredWithoutModDownloadsInput
    Mod?: ModUpdateOneRequiredWithoutDownloadsInput
  }

  export type Mod_DownloadUncheckedUpdateWithoutVersionInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type Mod_Issue_PostCreateManyIssueInput = {
    id?: number
    author_id: number
    createDate?: Date | string
    text: string
  }

  export type Mod_Issue_PostUpdateWithoutIssueInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    Author?: UserUpdateOneRequiredWithoutModIssuePostsInput
  }

  export type Mod_Issue_PostUncheckedUpdateWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type Mod_Issue_PostUncheckedUpdateManyWithoutModIssuePostInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ModUpdateWithoutListsInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Collection?: Mods_CollectionUpdateOneRequiredWithoutModsInput
    Images?: Mod_ImageUpdateManyWithoutModInput
    Authors?: Mod_AuthorUpdateManyWithoutModInput
    Tags?: Mod_TagUpdateManyWithoutModInput
    Versions?: Mod_VersionUpdateManyWithoutModInput
    Issues?: Mod_IssueUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUpdateManyWithoutModInput
  }

  export type ModUncheckedUpdateWithoutListsInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    collection_id?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    readme_type?: IntFieldUpdateOperationsInput | number
    readme?: StringFieldUpdateOperationsInput | string
    change_list_type?: IntFieldUpdateOperationsInput | number
    change_list?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    docs_url?: StringFieldUpdateOperationsInput | string
    Images?: Mod_ImageUncheckedUpdateManyWithoutModInput
    Authors?: Mod_AuthorUncheckedUpdateManyWithoutModInput
    Tags?: Mod_TagUncheckedUpdateManyWithoutModInput
    Versions?: Mod_VersionUncheckedUpdateManyWithoutModInput
    Issues?: Mod_IssueUncheckedUpdateManyWithoutModInput
    Favorits?: Mods_FavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: Mod_SubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: Mod_DownloadUncheckedUpdateManyWithoutModInput
  }

  export type User_TokenCreateManySessionInput = {
    id?: number
    access_token: string
    refresh_token: string
    createDate?: Date | string
    is_enable?: boolean
    is_super_access?: boolean
  }

  export type User_TokenUpdateWithoutSessionInput = {
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_enable?: BoolFieldUpdateOperationsInput | boolean
    is_super_access?: BoolFieldUpdateOperationsInput | boolean
  }

  export type User_TokenUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_enable?: BoolFieldUpdateOperationsInput | boolean
    is_super_access?: BoolFieldUpdateOperationsInput | boolean
  }

  export type User_TokenUncheckedUpdateManyWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_enable?: BoolFieldUpdateOperationsInput | boolean
    is_super_access?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}