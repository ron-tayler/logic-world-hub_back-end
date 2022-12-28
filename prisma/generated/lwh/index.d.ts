
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
 * Model UserAuth
 * 
 */
export type UserAuth = {
  userId: number
  email: string
  password: string
}

/**
 * Model ModsCollection
 * 
 */
export type ModsCollection = {
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
 * Model ModAuthor
 * 
 */
export type ModAuthor = {
  mod_id: number
  user_id: number
  type: number
}

/**
 * Model ModImage
 * 
 */
export type ModImage = {
  id: number
  mod_id: number
  url: string
}

/**
 * Model ModTag
 * 
 */
export type ModTag = {
  id: number
  name: string
}

/**
 * Model ModVersion
 * 
 */
export type ModVersion = {
  id: number
  mod_id: number
  version: string
  game_version: string
  releaseDate: Date
}

/**
 * Model ModIssue
 * 
 */
export type ModIssue = {
  id: number
  mod_id: number
  name: string
  type: ModIssueType
  author_id: number
  createDate: Date
}

/**
 * Model ModIssuePost
 * 
 */
export type ModIssuePost = {
  id: number
  issue_id: number
  author_id: number
  createDate: Date
  text: string
}

/**
 * Model ModsList
 * 
 */
export type ModsList = {
  id: number
  author_id: number
  is_public: boolean
  name: string
}

/**
 * Model ModsFavorits
 * 
 */
export type ModsFavorits = {
  user_id: number
  mod_id: number
}

/**
 * Model ModSubscribers
 * 
 */
export type ModSubscribers = {
  user_id: number
  mod_id: number
}

/**
 * Model ModDownload
 * 
 */
export type ModDownload = {
  user_id: number
  mod_id: number
  version_id: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const ModIssueType: {
  GENERAL: 'GENERAL',
  BUGS: 'BUGS',
  ANNOUNCEMENTS: 'ANNOUNCEMENTS',
  IDEAS: 'IDEAS'
};

export type ModIssueType = (typeof ModIssueType)[keyof typeof ModIssueType]


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
   * `prisma.userAuth`: Exposes CRUD operations for the **UserAuth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAuths
    * const userAuths = await prisma.userAuth.findMany()
    * ```
    */
  get userAuth(): Prisma.UserAuthDelegate<GlobalReject>;

  /**
   * `prisma.modsCollection`: Exposes CRUD operations for the **ModsCollection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModsCollections
    * const modsCollections = await prisma.modsCollection.findMany()
    * ```
    */
  get modsCollection(): Prisma.ModsCollectionDelegate<GlobalReject>;

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
   * `prisma.modAuthor`: Exposes CRUD operations for the **ModAuthor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModAuthors
    * const modAuthors = await prisma.modAuthor.findMany()
    * ```
    */
  get modAuthor(): Prisma.ModAuthorDelegate<GlobalReject>;

  /**
   * `prisma.modImage`: Exposes CRUD operations for the **ModImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModImages
    * const modImages = await prisma.modImage.findMany()
    * ```
    */
  get modImage(): Prisma.ModImageDelegate<GlobalReject>;

  /**
   * `prisma.modTag`: Exposes CRUD operations for the **ModTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModTags
    * const modTags = await prisma.modTag.findMany()
    * ```
    */
  get modTag(): Prisma.ModTagDelegate<GlobalReject>;

  /**
   * `prisma.modVersion`: Exposes CRUD operations for the **ModVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModVersions
    * const modVersions = await prisma.modVersion.findMany()
    * ```
    */
  get modVersion(): Prisma.ModVersionDelegate<GlobalReject>;

  /**
   * `prisma.modIssue`: Exposes CRUD operations for the **ModIssue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModIssues
    * const modIssues = await prisma.modIssue.findMany()
    * ```
    */
  get modIssue(): Prisma.ModIssueDelegate<GlobalReject>;

  /**
   * `prisma.modIssuePost`: Exposes CRUD operations for the **ModIssuePost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModIssuePosts
    * const modIssuePosts = await prisma.modIssuePost.findMany()
    * ```
    */
  get modIssuePost(): Prisma.ModIssuePostDelegate<GlobalReject>;

  /**
   * `prisma.modsList`: Exposes CRUD operations for the **ModsList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModsLists
    * const modsLists = await prisma.modsList.findMany()
    * ```
    */
  get modsList(): Prisma.ModsListDelegate<GlobalReject>;

  /**
   * `prisma.modsFavorits`: Exposes CRUD operations for the **ModsFavorits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModsFavorits
    * const modsFavorits = await prisma.modsFavorits.findMany()
    * ```
    */
  get modsFavorits(): Prisma.ModsFavoritsDelegate<GlobalReject>;

  /**
   * `prisma.modSubscribers`: Exposes CRUD operations for the **ModSubscribers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModSubscribers
    * const modSubscribers = await prisma.modSubscribers.findMany()
    * ```
    */
  get modSubscribers(): Prisma.ModSubscribersDelegate<GlobalReject>;

  /**
   * `prisma.modDownload`: Exposes CRUD operations for the **ModDownload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModDownloads
    * const modDownloads = await prisma.modDownload.findMany()
    * ```
    */
  get modDownload(): Prisma.ModDownloadDelegate<GlobalReject>;
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
    UserAuth: 'UserAuth',
    ModsCollection: 'ModsCollection',
    Mod: 'Mod',
    ModAuthor: 'ModAuthor',
    ModImage: 'ModImage',
    ModTag: 'ModTag',
    ModVersion: 'ModVersion',
    ModIssue: 'ModIssue',
    ModIssuePost: 'ModIssuePost',
    ModsList: 'ModsList',
    ModsFavorits: 'ModsFavorits',
    ModSubscribers: 'ModSubscribers',
    ModDownload: 'ModDownload'
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
   * Count Type ModsCollectionCountOutputType
   */


  export type ModsCollectionCountOutputType = {
    Mods: number
  }

  export type ModsCollectionCountOutputTypeSelect = {
    Mods?: boolean
  }

  export type ModsCollectionCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ModsCollectionCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ModsCollectionCountOutputType
    : S extends undefined
    ? never
    : S extends ModsCollectionCountOutputTypeArgs
    ?'include' extends U
    ? ModsCollectionCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ModsCollectionCountOutputType ? ModsCollectionCountOutputType[P] : never
  } 
    : ModsCollectionCountOutputType
  : ModsCollectionCountOutputType




  // Custom InputTypes

  /**
   * ModsCollectionCountOutputType without action
   */
  export type ModsCollectionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ModsCollectionCountOutputType
     * 
    **/
    select?: ModsCollectionCountOutputTypeSelect | null
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
   * Count Type ModTagCountOutputType
   */


  export type ModTagCountOutputType = {
    Mod: number
  }

  export type ModTagCountOutputTypeSelect = {
    Mod?: boolean
  }

  export type ModTagCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ModTagCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ModTagCountOutputType
    : S extends undefined
    ? never
    : S extends ModTagCountOutputTypeArgs
    ?'include' extends U
    ? ModTagCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ModTagCountOutputType ? ModTagCountOutputType[P] : never
  } 
    : ModTagCountOutputType
  : ModTagCountOutputType




  // Custom InputTypes

  /**
   * ModTagCountOutputType without action
   */
  export type ModTagCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ModTagCountOutputType
     * 
    **/
    select?: ModTagCountOutputTypeSelect | null
  }



  /**
   * Count Type ModVersionCountOutputType
   */


  export type ModVersionCountOutputType = {
    Downloads: number
  }

  export type ModVersionCountOutputTypeSelect = {
    Downloads?: boolean
  }

  export type ModVersionCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ModVersionCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ModVersionCountOutputType
    : S extends undefined
    ? never
    : S extends ModVersionCountOutputTypeArgs
    ?'include' extends U
    ? ModVersionCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ModVersionCountOutputType ? ModVersionCountOutputType[P] : never
  } 
    : ModVersionCountOutputType
  : ModVersionCountOutputType




  // Custom InputTypes

  /**
   * ModVersionCountOutputType without action
   */
  export type ModVersionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ModVersionCountOutputType
     * 
    **/
    select?: ModVersionCountOutputTypeSelect | null
  }



  /**
   * Count Type ModIssueCountOutputType
   */


  export type ModIssueCountOutputType = {
    ModIssuePost: number
  }

  export type ModIssueCountOutputTypeSelect = {
    ModIssuePost?: boolean
  }

  export type ModIssueCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ModIssueCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ModIssueCountOutputType
    : S extends undefined
    ? never
    : S extends ModIssueCountOutputTypeArgs
    ?'include' extends U
    ? ModIssueCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ModIssueCountOutputType ? ModIssueCountOutputType[P] : never
  } 
    : ModIssueCountOutputType
  : ModIssueCountOutputType




  // Custom InputTypes

  /**
   * ModIssueCountOutputType without action
   */
  export type ModIssueCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ModIssueCountOutputType
     * 
    **/
    select?: ModIssueCountOutputTypeSelect | null
  }



  /**
   * Count Type ModsListCountOutputType
   */


  export type ModsListCountOutputType = {
    Mods: number
  }

  export type ModsListCountOutputTypeSelect = {
    Mods?: boolean
  }

  export type ModsListCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ModsListCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ModsListCountOutputType
    : S extends undefined
    ? never
    : S extends ModsListCountOutputTypeArgs
    ?'include' extends U
    ? ModsListCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ModsListCountOutputType ? ModsListCountOutputType[P] : never
  } 
    : ModsListCountOutputType
  : ModsListCountOutputType




  // Custom InputTypes

  /**
   * ModsListCountOutputType without action
   */
  export type ModsListCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ModsListCountOutputType
     * 
    **/
    select?: ModsListCountOutputTypeSelect | null
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
    UserAuth?: boolean | UserAuthArgs
    ModsCollections?: boolean | ModsCollectionFindManyArgs
    ModAuthors?: boolean | ModAuthorFindManyArgs
    ModIssues?: boolean | ModIssueFindManyArgs
    ModIssuePosts?: boolean | ModIssuePostFindManyArgs
    ModsLists?: boolean | ModsListFindManyArgs
    ModsFavorits?: boolean | ModsFavoritsFindManyArgs
    ModSubscribers?: boolean | ModSubscribersFindManyArgs
    ModDownloads?: boolean | ModDownloadFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    UserAuth?: boolean | UserAuthArgs
    ModsCollections?: boolean | ModsCollectionFindManyArgs
    ModAuthors?: boolean | ModAuthorFindManyArgs
    ModIssues?: boolean | ModIssueFindManyArgs
    ModIssuePosts?: boolean | ModIssuePostFindManyArgs
    ModsLists?: boolean | ModsListFindManyArgs
    ModsFavorits?: boolean | ModsFavoritsFindManyArgs
    ModSubscribers?: boolean | ModSubscribersFindManyArgs
    ModDownloads?: boolean | ModDownloadFindManyArgs
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
        P extends 'UserAuth' ? UserAuthGetPayload<S['include'][P]> | null :
        P extends 'ModsCollections' ? Array < ModsCollectionGetPayload<S['include'][P]>>  :
        P extends 'ModAuthors' ? Array < ModAuthorGetPayload<S['include'][P]>>  :
        P extends 'ModIssues' ? Array < ModIssueGetPayload<S['include'][P]>>  :
        P extends 'ModIssuePosts' ? Array < ModIssuePostGetPayload<S['include'][P]>>  :
        P extends 'ModsLists' ? Array < ModsListGetPayload<S['include'][P]>>  :
        P extends 'ModsFavorits' ? Array < ModsFavoritsGetPayload<S['include'][P]>>  :
        P extends 'ModSubscribers' ? Array < ModSubscribersGetPayload<S['include'][P]>>  :
        P extends 'ModDownloads' ? Array < ModDownloadGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'UserAuth' ? UserAuthGetPayload<S['select'][P]> | null :
        P extends 'ModsCollections' ? Array < ModsCollectionGetPayload<S['select'][P]>>  :
        P extends 'ModAuthors' ? Array < ModAuthorGetPayload<S['select'][P]>>  :
        P extends 'ModIssues' ? Array < ModIssueGetPayload<S['select'][P]>>  :
        P extends 'ModIssuePosts' ? Array < ModIssuePostGetPayload<S['select'][P]>>  :
        P extends 'ModsLists' ? Array < ModsListGetPayload<S['select'][P]>>  :
        P extends 'ModsFavorits' ? Array < ModsFavoritsGetPayload<S['select'][P]>>  :
        P extends 'ModSubscribers' ? Array < ModSubscribersGetPayload<S['select'][P]>>  :
        P extends 'ModDownloads' ? Array < ModDownloadGetPayload<S['select'][P]>>  :
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

    UserAuth<T extends UserAuthArgs = {}>(args?: Subset<T, UserAuthArgs>): CheckSelect<T, Prisma__UserAuthClient<UserAuth | null >, Prisma__UserAuthClient<UserAuthGetPayload<T> | null >>;

    ModsCollections<T extends ModsCollectionFindManyArgs = {}>(args?: Subset<T, ModsCollectionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModsCollection>>, PrismaPromise<Array<ModsCollectionGetPayload<T>>>>;

    ModAuthors<T extends ModAuthorFindManyArgs = {}>(args?: Subset<T, ModAuthorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModAuthor>>, PrismaPromise<Array<ModAuthorGetPayload<T>>>>;

    ModIssues<T extends ModIssueFindManyArgs = {}>(args?: Subset<T, ModIssueFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModIssue>>, PrismaPromise<Array<ModIssueGetPayload<T>>>>;

    ModIssuePosts<T extends ModIssuePostFindManyArgs = {}>(args?: Subset<T, ModIssuePostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModIssuePost>>, PrismaPromise<Array<ModIssuePostGetPayload<T>>>>;

    ModsLists<T extends ModsListFindManyArgs = {}>(args?: Subset<T, ModsListFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModsList>>, PrismaPromise<Array<ModsListGetPayload<T>>>>;

    ModsFavorits<T extends ModsFavoritsFindManyArgs = {}>(args?: Subset<T, ModsFavoritsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModsFavorits>>, PrismaPromise<Array<ModsFavoritsGetPayload<T>>>>;

    ModSubscribers<T extends ModSubscribersFindManyArgs = {}>(args?: Subset<T, ModSubscribersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModSubscribers>>, PrismaPromise<Array<ModSubscribersGetPayload<T>>>>;

    ModDownloads<T extends ModDownloadFindManyArgs = {}>(args?: Subset<T, ModDownloadFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModDownload>>, PrismaPromise<Array<ModDownloadGetPayload<T>>>>;

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
   * Model UserAuth
   */


  export type AggregateUserAuth = {
    _count: UserAuthCountAggregateOutputType | null
    _avg: UserAuthAvgAggregateOutputType | null
    _sum: UserAuthSumAggregateOutputType | null
    _min: UserAuthMinAggregateOutputType | null
    _max: UserAuthMaxAggregateOutputType | null
  }

  export type UserAuthAvgAggregateOutputType = {
    userId: number | null
  }

  export type UserAuthSumAggregateOutputType = {
    userId: number | null
  }

  export type UserAuthMinAggregateOutputType = {
    userId: number | null
    email: string | null
    password: string | null
  }

  export type UserAuthMaxAggregateOutputType = {
    userId: number | null
    email: string | null
    password: string | null
  }

  export type UserAuthCountAggregateOutputType = {
    userId: number
    email: number
    password: number
    _all: number
  }


  export type UserAuthAvgAggregateInputType = {
    userId?: true
  }

  export type UserAuthSumAggregateInputType = {
    userId?: true
  }

  export type UserAuthMinAggregateInputType = {
    userId?: true
    email?: true
    password?: true
  }

  export type UserAuthMaxAggregateInputType = {
    userId?: true
    email?: true
    password?: true
  }

  export type UserAuthCountAggregateInputType = {
    userId?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAuthAggregateArgs = {
    /**
     * Filter which UserAuth to aggregate.
     * 
    **/
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     * 
    **/
    orderBy?: Enumerable<UserAuthOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAuths
    **/
    _count?: true | UserAuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAuthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAuthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAuthMaxAggregateInputType
  }

  export type GetUserAuthAggregateType<T extends UserAuthAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAuth[P]>
      : GetScalarType<T[P], AggregateUserAuth[P]>
  }




  export type UserAuthGroupByArgs = {
    where?: UserAuthWhereInput
    orderBy?: Enumerable<UserAuthOrderByWithAggregationInput>
    by: Array<UserAuthScalarFieldEnum>
    having?: UserAuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAuthCountAggregateInputType | true
    _avg?: UserAuthAvgAggregateInputType
    _sum?: UserAuthSumAggregateInputType
    _min?: UserAuthMinAggregateInputType
    _max?: UserAuthMaxAggregateInputType
  }


  export type UserAuthGroupByOutputType = {
    userId: number
    email: string
    password: string
    _count: UserAuthCountAggregateOutputType | null
    _avg: UserAuthAvgAggregateOutputType | null
    _sum: UserAuthSumAggregateOutputType | null
    _min: UserAuthMinAggregateOutputType | null
    _max: UserAuthMaxAggregateOutputType | null
  }

  type GetUserAuthGroupByPayload<T extends UserAuthGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserAuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAuthGroupByOutputType[P]>
            : GetScalarType<T[P], UserAuthGroupByOutputType[P]>
        }
      >
    >


  export type UserAuthSelect = {
    userId?: boolean
    email?: boolean
    password?: boolean
    User?: boolean | UserArgs
  }

  export type UserAuthInclude = {
    User?: boolean | UserArgs
  }

  export type UserAuthGetPayload<
    S extends boolean | null | undefined | UserAuthArgs,
    U = keyof S
      > = S extends true
        ? UserAuth
    : S extends undefined
    ? never
    : S extends UserAuthArgs | UserAuthFindManyArgs
    ?'include' extends U
    ? UserAuth  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof UserAuth ? UserAuth[P] : never
  } 
    : UserAuth
  : UserAuth


  type UserAuthCountArgs = Merge<
    Omit<UserAuthFindManyArgs, 'select' | 'include'> & {
      select?: UserAuthCountAggregateInputType | true
    }
  >

  export interface UserAuthDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserAuth that matches the filter.
     * @param {UserAuthFindUniqueArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserAuthFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserAuthFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserAuth'> extends True ? CheckSelect<T, Prisma__UserAuthClient<UserAuth>, Prisma__UserAuthClient<UserAuthGetPayload<T>>> : CheckSelect<T, Prisma__UserAuthClient<UserAuth | null >, Prisma__UserAuthClient<UserAuthGetPayload<T> | null >>

    /**
     * Find the first UserAuth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthFindFirstArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserAuthFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserAuthFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserAuth'> extends True ? CheckSelect<T, Prisma__UserAuthClient<UserAuth>, Prisma__UserAuthClient<UserAuthGetPayload<T>>> : CheckSelect<T, Prisma__UserAuthClient<UserAuth | null >, Prisma__UserAuthClient<UserAuthGetPayload<T> | null >>

    /**
     * Find zero or more UserAuths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAuths
     * const userAuths = await prisma.userAuth.findMany()
     * 
     * // Get first 10 UserAuths
     * const userAuths = await prisma.userAuth.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userAuthWithUserIdOnly = await prisma.userAuth.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserAuthFindManyArgs>(
      args?: SelectSubset<T, UserAuthFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserAuth>>, PrismaPromise<Array<UserAuthGetPayload<T>>>>

    /**
     * Create a UserAuth.
     * @param {UserAuthCreateArgs} args - Arguments to create a UserAuth.
     * @example
     * // Create one UserAuth
     * const UserAuth = await prisma.userAuth.create({
     *   data: {
     *     // ... data to create a UserAuth
     *   }
     * })
     * 
    **/
    create<T extends UserAuthCreateArgs>(
      args: SelectSubset<T, UserAuthCreateArgs>
    ): CheckSelect<T, Prisma__UserAuthClient<UserAuth>, Prisma__UserAuthClient<UserAuthGetPayload<T>>>

    /**
     * Create many UserAuths.
     *     @param {UserAuthCreateManyArgs} args - Arguments to create many UserAuths.
     *     @example
     *     // Create many UserAuths
     *     const userAuth = await prisma.userAuth.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserAuthCreateManyArgs>(
      args?: SelectSubset<T, UserAuthCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserAuth.
     * @param {UserAuthDeleteArgs} args - Arguments to delete one UserAuth.
     * @example
     * // Delete one UserAuth
     * const UserAuth = await prisma.userAuth.delete({
     *   where: {
     *     // ... filter to delete one UserAuth
     *   }
     * })
     * 
    **/
    delete<T extends UserAuthDeleteArgs>(
      args: SelectSubset<T, UserAuthDeleteArgs>
    ): CheckSelect<T, Prisma__UserAuthClient<UserAuth>, Prisma__UserAuthClient<UserAuthGetPayload<T>>>

    /**
     * Update one UserAuth.
     * @param {UserAuthUpdateArgs} args - Arguments to update one UserAuth.
     * @example
     * // Update one UserAuth
     * const userAuth = await prisma.userAuth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserAuthUpdateArgs>(
      args: SelectSubset<T, UserAuthUpdateArgs>
    ): CheckSelect<T, Prisma__UserAuthClient<UserAuth>, Prisma__UserAuthClient<UserAuthGetPayload<T>>>

    /**
     * Delete zero or more UserAuths.
     * @param {UserAuthDeleteManyArgs} args - Arguments to filter UserAuths to delete.
     * @example
     * // Delete a few UserAuths
     * const { count } = await prisma.userAuth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserAuthDeleteManyArgs>(
      args?: SelectSubset<T, UserAuthDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAuths
     * const userAuth = await prisma.userAuth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserAuthUpdateManyArgs>(
      args: SelectSubset<T, UserAuthUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAuth.
     * @param {UserAuthUpsertArgs} args - Arguments to update or create a UserAuth.
     * @example
     * // Update or create a UserAuth
     * const userAuth = await prisma.userAuth.upsert({
     *   create: {
     *     // ... data to create a UserAuth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAuth we want to update
     *   }
     * })
    **/
    upsert<T extends UserAuthUpsertArgs>(
      args: SelectSubset<T, UserAuthUpsertArgs>
    ): CheckSelect<T, Prisma__UserAuthClient<UserAuth>, Prisma__UserAuthClient<UserAuthGetPayload<T>>>

    /**
     * Count the number of UserAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthCountArgs} args - Arguments to filter UserAuths to count.
     * @example
     * // Count the number of UserAuths
     * const count = await prisma.userAuth.count({
     *   where: {
     *     // ... the filter for the UserAuths we want to count
     *   }
     * })
    **/
    count<T extends UserAuthCountArgs>(
      args?: Subset<T, UserAuthCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAuthAggregateArgs>(args: Subset<T, UserAuthAggregateArgs>): PrismaPromise<GetUserAuthAggregateType<T>>

    /**
     * Group by UserAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthGroupByArgs} args - Group by arguments.
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
      T extends UserAuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAuthGroupByArgs['orderBy'] }
        : { orderBy?: UserAuthGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAuthGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAuth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserAuthClient<T> implements PrismaPromise<T> {
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
   * UserAuth findUnique
   */
  export type UserAuthFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the UserAuth
     * 
    **/
    select?: UserAuthSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAuthInclude | null
    /**
     * Throw an Error if a UserAuth can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserAuth to fetch.
     * 
    **/
    where: UserAuthWhereUniqueInput
  }


  /**
   * UserAuth findFirst
   */
  export type UserAuthFindFirstArgs = {
    /**
     * Select specific fields to fetch from the UserAuth
     * 
    **/
    select?: UserAuthSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAuthInclude | null
    /**
     * Throw an Error if a UserAuth can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserAuth to fetch.
     * 
    **/
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     * 
    **/
    orderBy?: Enumerable<UserAuthOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuths.
     * 
    **/
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuths.
     * 
    **/
    distinct?: Enumerable<UserAuthScalarFieldEnum>
  }


  /**
   * UserAuth findMany
   */
  export type UserAuthFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserAuth
     * 
    **/
    select?: UserAuthSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAuthInclude | null
    /**
     * Filter, which UserAuths to fetch.
     * 
    **/
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     * 
    **/
    orderBy?: Enumerable<UserAuthOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAuths.
     * 
    **/
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserAuthScalarFieldEnum>
  }


  /**
   * UserAuth create
   */
  export type UserAuthCreateArgs = {
    /**
     * Select specific fields to fetch from the UserAuth
     * 
    **/
    select?: UserAuthSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAuthInclude | null
    /**
     * The data needed to create a UserAuth.
     * 
    **/
    data: XOR<UserAuthCreateInput, UserAuthUncheckedCreateInput>
  }


  /**
   * UserAuth createMany
   */
  export type UserAuthCreateManyArgs = {
    /**
     * The data used to create many UserAuths.
     * 
    **/
    data: Enumerable<UserAuthCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserAuth update
   */
  export type UserAuthUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserAuth
     * 
    **/
    select?: UserAuthSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAuthInclude | null
    /**
     * The data needed to update a UserAuth.
     * 
    **/
    data: XOR<UserAuthUpdateInput, UserAuthUncheckedUpdateInput>
    /**
     * Choose, which UserAuth to update.
     * 
    **/
    where: UserAuthWhereUniqueInput
  }


  /**
   * UserAuth updateMany
   */
  export type UserAuthUpdateManyArgs = {
    /**
     * The data used to update UserAuths.
     * 
    **/
    data: XOR<UserAuthUpdateManyMutationInput, UserAuthUncheckedUpdateManyInput>
    /**
     * Filter which UserAuths to update
     * 
    **/
    where?: UserAuthWhereInput
  }


  /**
   * UserAuth upsert
   */
  export type UserAuthUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserAuth
     * 
    **/
    select?: UserAuthSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAuthInclude | null
    /**
     * The filter to search for the UserAuth to update in case it exists.
     * 
    **/
    where: UserAuthWhereUniqueInput
    /**
     * In case the UserAuth found by the `where` argument doesn't exist, create a new UserAuth with this data.
     * 
    **/
    create: XOR<UserAuthCreateInput, UserAuthUncheckedCreateInput>
    /**
     * In case the UserAuth was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserAuthUpdateInput, UserAuthUncheckedUpdateInput>
  }


  /**
   * UserAuth delete
   */
  export type UserAuthDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserAuth
     * 
    **/
    select?: UserAuthSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAuthInclude | null
    /**
     * Filter which UserAuth to delete.
     * 
    **/
    where: UserAuthWhereUniqueInput
  }


  /**
   * UserAuth deleteMany
   */
  export type UserAuthDeleteManyArgs = {
    /**
     * Filter which UserAuths to delete
     * 
    **/
    where?: UserAuthWhereInput
  }


  /**
   * UserAuth without action
   */
  export type UserAuthArgs = {
    /**
     * Select specific fields to fetch from the UserAuth
     * 
    **/
    select?: UserAuthSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAuthInclude | null
  }



  /**
   * Model ModsCollection
   */


  export type AggregateModsCollection = {
    _count: ModsCollectionCountAggregateOutputType | null
    _avg: ModsCollectionAvgAggregateOutputType | null
    _sum: ModsCollectionSumAggregateOutputType | null
    _min: ModsCollectionMinAggregateOutputType | null
    _max: ModsCollectionMaxAggregateOutputType | null
  }

  export type ModsCollectionAvgAggregateOutputType = {
    id: number | null
    author_id: number | null
  }

  export type ModsCollectionSumAggregateOutputType = {
    id: number | null
    author_id: number | null
  }

  export type ModsCollectionMinAggregateOutputType = {
    id: number | null
    avatar: string | null
    name: string | null
    description: string | null
    createDate: Date | null
    is_active: boolean | null
    author_id: number | null
  }

  export type ModsCollectionMaxAggregateOutputType = {
    id: number | null
    avatar: string | null
    name: string | null
    description: string | null
    createDate: Date | null
    is_active: boolean | null
    author_id: number | null
  }

  export type ModsCollectionCountAggregateOutputType = {
    id: number
    avatar: number
    name: number
    description: number
    createDate: number
    is_active: number
    author_id: number
    _all: number
  }


  export type ModsCollectionAvgAggregateInputType = {
    id?: true
    author_id?: true
  }

  export type ModsCollectionSumAggregateInputType = {
    id?: true
    author_id?: true
  }

  export type ModsCollectionMinAggregateInputType = {
    id?: true
    avatar?: true
    name?: true
    description?: true
    createDate?: true
    is_active?: true
    author_id?: true
  }

  export type ModsCollectionMaxAggregateInputType = {
    id?: true
    avatar?: true
    name?: true
    description?: true
    createDate?: true
    is_active?: true
    author_id?: true
  }

  export type ModsCollectionCountAggregateInputType = {
    id?: true
    avatar?: true
    name?: true
    description?: true
    createDate?: true
    is_active?: true
    author_id?: true
    _all?: true
  }

  export type ModsCollectionAggregateArgs = {
    /**
     * Filter which ModsCollection to aggregate.
     * 
    **/
    where?: ModsCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModsCollections to fetch.
     * 
    **/
    orderBy?: Enumerable<ModsCollectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ModsCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModsCollections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModsCollections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModsCollections
    **/
    _count?: true | ModsCollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModsCollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModsCollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModsCollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModsCollectionMaxAggregateInputType
  }

  export type GetModsCollectionAggregateType<T extends ModsCollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateModsCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModsCollection[P]>
      : GetScalarType<T[P], AggregateModsCollection[P]>
  }




  export type ModsCollectionGroupByArgs = {
    where?: ModsCollectionWhereInput
    orderBy?: Enumerable<ModsCollectionOrderByWithAggregationInput>
    by: Array<ModsCollectionScalarFieldEnum>
    having?: ModsCollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModsCollectionCountAggregateInputType | true
    _avg?: ModsCollectionAvgAggregateInputType
    _sum?: ModsCollectionSumAggregateInputType
    _min?: ModsCollectionMinAggregateInputType
    _max?: ModsCollectionMaxAggregateInputType
  }


  export type ModsCollectionGroupByOutputType = {
    id: number
    avatar: string
    name: string
    description: string
    createDate: Date
    is_active: boolean
    author_id: number
    _count: ModsCollectionCountAggregateOutputType | null
    _avg: ModsCollectionAvgAggregateOutputType | null
    _sum: ModsCollectionSumAggregateOutputType | null
    _min: ModsCollectionMinAggregateOutputType | null
    _max: ModsCollectionMaxAggregateOutputType | null
  }

  type GetModsCollectionGroupByPayload<T extends ModsCollectionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ModsCollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModsCollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModsCollectionGroupByOutputType[P]>
            : GetScalarType<T[P], ModsCollectionGroupByOutputType[P]>
        }
      >
    >


  export type ModsCollectionSelect = {
    id?: boolean
    avatar?: boolean
    name?: boolean
    description?: boolean
    createDate?: boolean
    is_active?: boolean
    author_id?: boolean
    Author?: boolean | UserArgs
    Mods?: boolean | ModFindManyArgs
    _count?: boolean | ModsCollectionCountOutputTypeArgs
  }

  export type ModsCollectionInclude = {
    Author?: boolean | UserArgs
    Mods?: boolean | ModFindManyArgs
    _count?: boolean | ModsCollectionCountOutputTypeArgs
  }

  export type ModsCollectionGetPayload<
    S extends boolean | null | undefined | ModsCollectionArgs,
    U = keyof S
      > = S extends true
        ? ModsCollection
    : S extends undefined
    ? never
    : S extends ModsCollectionArgs | ModsCollectionFindManyArgs
    ?'include' extends U
    ? ModsCollection  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Author' ? UserGetPayload<S['include'][P]> :
        P extends 'Mods' ? Array < ModGetPayload<S['include'][P]>>  :
        P extends '_count' ? ModsCollectionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Author' ? UserGetPayload<S['select'][P]> :
        P extends 'Mods' ? Array < ModGetPayload<S['select'][P]>>  :
        P extends '_count' ? ModsCollectionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ModsCollection ? ModsCollection[P] : never
  } 
    : ModsCollection
  : ModsCollection


  type ModsCollectionCountArgs = Merge<
    Omit<ModsCollectionFindManyArgs, 'select' | 'include'> & {
      select?: ModsCollectionCountAggregateInputType | true
    }
  >

  export interface ModsCollectionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ModsCollection that matches the filter.
     * @param {ModsCollectionFindUniqueArgs} args - Arguments to find a ModsCollection
     * @example
     * // Get one ModsCollection
     * const modsCollection = await prisma.modsCollection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModsCollectionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModsCollectionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ModsCollection'> extends True ? CheckSelect<T, Prisma__ModsCollectionClient<ModsCollection>, Prisma__ModsCollectionClient<ModsCollectionGetPayload<T>>> : CheckSelect<T, Prisma__ModsCollectionClient<ModsCollection | null >, Prisma__ModsCollectionClient<ModsCollectionGetPayload<T> | null >>

    /**
     * Find the first ModsCollection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsCollectionFindFirstArgs} args - Arguments to find a ModsCollection
     * @example
     * // Get one ModsCollection
     * const modsCollection = await prisma.modsCollection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModsCollectionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModsCollectionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ModsCollection'> extends True ? CheckSelect<T, Prisma__ModsCollectionClient<ModsCollection>, Prisma__ModsCollectionClient<ModsCollectionGetPayload<T>>> : CheckSelect<T, Prisma__ModsCollectionClient<ModsCollection | null >, Prisma__ModsCollectionClient<ModsCollectionGetPayload<T> | null >>

    /**
     * Find zero or more ModsCollections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsCollectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModsCollections
     * const modsCollections = await prisma.modsCollection.findMany()
     * 
     * // Get first 10 ModsCollections
     * const modsCollections = await prisma.modsCollection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modsCollectionWithIdOnly = await prisma.modsCollection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModsCollectionFindManyArgs>(
      args?: SelectSubset<T, ModsCollectionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ModsCollection>>, PrismaPromise<Array<ModsCollectionGetPayload<T>>>>

    /**
     * Create a ModsCollection.
     * @param {ModsCollectionCreateArgs} args - Arguments to create a ModsCollection.
     * @example
     * // Create one ModsCollection
     * const ModsCollection = await prisma.modsCollection.create({
     *   data: {
     *     // ... data to create a ModsCollection
     *   }
     * })
     * 
    **/
    create<T extends ModsCollectionCreateArgs>(
      args: SelectSubset<T, ModsCollectionCreateArgs>
    ): CheckSelect<T, Prisma__ModsCollectionClient<ModsCollection>, Prisma__ModsCollectionClient<ModsCollectionGetPayload<T>>>

    /**
     * Create many ModsCollections.
     *     @param {ModsCollectionCreateManyArgs} args - Arguments to create many ModsCollections.
     *     @example
     *     // Create many ModsCollections
     *     const modsCollection = await prisma.modsCollection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModsCollectionCreateManyArgs>(
      args?: SelectSubset<T, ModsCollectionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ModsCollection.
     * @param {ModsCollectionDeleteArgs} args - Arguments to delete one ModsCollection.
     * @example
     * // Delete one ModsCollection
     * const ModsCollection = await prisma.modsCollection.delete({
     *   where: {
     *     // ... filter to delete one ModsCollection
     *   }
     * })
     * 
    **/
    delete<T extends ModsCollectionDeleteArgs>(
      args: SelectSubset<T, ModsCollectionDeleteArgs>
    ): CheckSelect<T, Prisma__ModsCollectionClient<ModsCollection>, Prisma__ModsCollectionClient<ModsCollectionGetPayload<T>>>

    /**
     * Update one ModsCollection.
     * @param {ModsCollectionUpdateArgs} args - Arguments to update one ModsCollection.
     * @example
     * // Update one ModsCollection
     * const modsCollection = await prisma.modsCollection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModsCollectionUpdateArgs>(
      args: SelectSubset<T, ModsCollectionUpdateArgs>
    ): CheckSelect<T, Prisma__ModsCollectionClient<ModsCollection>, Prisma__ModsCollectionClient<ModsCollectionGetPayload<T>>>

    /**
     * Delete zero or more ModsCollections.
     * @param {ModsCollectionDeleteManyArgs} args - Arguments to filter ModsCollections to delete.
     * @example
     * // Delete a few ModsCollections
     * const { count } = await prisma.modsCollection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModsCollectionDeleteManyArgs>(
      args?: SelectSubset<T, ModsCollectionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModsCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsCollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModsCollections
     * const modsCollection = await prisma.modsCollection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModsCollectionUpdateManyArgs>(
      args: SelectSubset<T, ModsCollectionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ModsCollection.
     * @param {ModsCollectionUpsertArgs} args - Arguments to update or create a ModsCollection.
     * @example
     * // Update or create a ModsCollection
     * const modsCollection = await prisma.modsCollection.upsert({
     *   create: {
     *     // ... data to create a ModsCollection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModsCollection we want to update
     *   }
     * })
    **/
    upsert<T extends ModsCollectionUpsertArgs>(
      args: SelectSubset<T, ModsCollectionUpsertArgs>
    ): CheckSelect<T, Prisma__ModsCollectionClient<ModsCollection>, Prisma__ModsCollectionClient<ModsCollectionGetPayload<T>>>

    /**
     * Count the number of ModsCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsCollectionCountArgs} args - Arguments to filter ModsCollections to count.
     * @example
     * // Count the number of ModsCollections
     * const count = await prisma.modsCollection.count({
     *   where: {
     *     // ... the filter for the ModsCollections we want to count
     *   }
     * })
    **/
    count<T extends ModsCollectionCountArgs>(
      args?: Subset<T, ModsCollectionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModsCollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModsCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsCollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModsCollectionAggregateArgs>(args: Subset<T, ModsCollectionAggregateArgs>): PrismaPromise<GetModsCollectionAggregateType<T>>

    /**
     * Group by ModsCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsCollectionGroupByArgs} args - Group by arguments.
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
      T extends ModsCollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModsCollectionGroupByArgs['orderBy'] }
        : { orderBy?: ModsCollectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModsCollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModsCollectionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModsCollection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModsCollectionClient<T> implements PrismaPromise<T> {
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
   * ModsCollection findUnique
   */
  export type ModsCollectionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ModsCollection
     * 
    **/
    select?: ModsCollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsCollectionInclude | null
    /**
     * Throw an Error if a ModsCollection can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModsCollection to fetch.
     * 
    **/
    where: ModsCollectionWhereUniqueInput
  }


  /**
   * ModsCollection findFirst
   */
  export type ModsCollectionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ModsCollection
     * 
    **/
    select?: ModsCollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsCollectionInclude | null
    /**
     * Throw an Error if a ModsCollection can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModsCollection to fetch.
     * 
    **/
    where?: ModsCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModsCollections to fetch.
     * 
    **/
    orderBy?: Enumerable<ModsCollectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModsCollections.
     * 
    **/
    cursor?: ModsCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModsCollections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModsCollections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModsCollections.
     * 
    **/
    distinct?: Enumerable<ModsCollectionScalarFieldEnum>
  }


  /**
   * ModsCollection findMany
   */
  export type ModsCollectionFindManyArgs = {
    /**
     * Select specific fields to fetch from the ModsCollection
     * 
    **/
    select?: ModsCollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsCollectionInclude | null
    /**
     * Filter, which ModsCollections to fetch.
     * 
    **/
    where?: ModsCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModsCollections to fetch.
     * 
    **/
    orderBy?: Enumerable<ModsCollectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModsCollections.
     * 
    **/
    cursor?: ModsCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModsCollections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModsCollections.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ModsCollectionScalarFieldEnum>
  }


  /**
   * ModsCollection create
   */
  export type ModsCollectionCreateArgs = {
    /**
     * Select specific fields to fetch from the ModsCollection
     * 
    **/
    select?: ModsCollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsCollectionInclude | null
    /**
     * The data needed to create a ModsCollection.
     * 
    **/
    data: XOR<ModsCollectionCreateInput, ModsCollectionUncheckedCreateInput>
  }


  /**
   * ModsCollection createMany
   */
  export type ModsCollectionCreateManyArgs = {
    /**
     * The data used to create many ModsCollections.
     * 
    **/
    data: Enumerable<ModsCollectionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ModsCollection update
   */
  export type ModsCollectionUpdateArgs = {
    /**
     * Select specific fields to fetch from the ModsCollection
     * 
    **/
    select?: ModsCollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsCollectionInclude | null
    /**
     * The data needed to update a ModsCollection.
     * 
    **/
    data: XOR<ModsCollectionUpdateInput, ModsCollectionUncheckedUpdateInput>
    /**
     * Choose, which ModsCollection to update.
     * 
    **/
    where: ModsCollectionWhereUniqueInput
  }


  /**
   * ModsCollection updateMany
   */
  export type ModsCollectionUpdateManyArgs = {
    /**
     * The data used to update ModsCollections.
     * 
    **/
    data: XOR<ModsCollectionUpdateManyMutationInput, ModsCollectionUncheckedUpdateManyInput>
    /**
     * Filter which ModsCollections to update
     * 
    **/
    where?: ModsCollectionWhereInput
  }


  /**
   * ModsCollection upsert
   */
  export type ModsCollectionUpsertArgs = {
    /**
     * Select specific fields to fetch from the ModsCollection
     * 
    **/
    select?: ModsCollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsCollectionInclude | null
    /**
     * The filter to search for the ModsCollection to update in case it exists.
     * 
    **/
    where: ModsCollectionWhereUniqueInput
    /**
     * In case the ModsCollection found by the `where` argument doesn't exist, create a new ModsCollection with this data.
     * 
    **/
    create: XOR<ModsCollectionCreateInput, ModsCollectionUncheckedCreateInput>
    /**
     * In case the ModsCollection was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ModsCollectionUpdateInput, ModsCollectionUncheckedUpdateInput>
  }


  /**
   * ModsCollection delete
   */
  export type ModsCollectionDeleteArgs = {
    /**
     * Select specific fields to fetch from the ModsCollection
     * 
    **/
    select?: ModsCollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsCollectionInclude | null
    /**
     * Filter which ModsCollection to delete.
     * 
    **/
    where: ModsCollectionWhereUniqueInput
  }


  /**
   * ModsCollection deleteMany
   */
  export type ModsCollectionDeleteManyArgs = {
    /**
     * Filter which ModsCollections to delete
     * 
    **/
    where?: ModsCollectionWhereInput
  }


  /**
   * ModsCollection without action
   */
  export type ModsCollectionArgs = {
    /**
     * Select specific fields to fetch from the ModsCollection
     * 
    **/
    select?: ModsCollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsCollectionInclude | null
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
    Collection?: boolean | ModsCollectionArgs
    Images?: boolean | ModImageFindManyArgs
    Authors?: boolean | ModAuthorFindManyArgs
    Tags?: boolean | ModTagFindManyArgs
    Versions?: boolean | ModVersionFindManyArgs
    Lists?: boolean | ModsListFindManyArgs
    Issues?: boolean | ModIssueFindManyArgs
    Favorits?: boolean | ModsFavoritsFindManyArgs
    Subscribers?: boolean | ModSubscribersFindManyArgs
    Downloads?: boolean | ModDownloadFindManyArgs
    _count?: boolean | ModCountOutputTypeArgs
  }

  export type ModInclude = {
    Collection?: boolean | ModsCollectionArgs
    Images?: boolean | ModImageFindManyArgs
    Authors?: boolean | ModAuthorFindManyArgs
    Tags?: boolean | ModTagFindManyArgs
    Versions?: boolean | ModVersionFindManyArgs
    Lists?: boolean | ModsListFindManyArgs
    Issues?: boolean | ModIssueFindManyArgs
    Favorits?: boolean | ModsFavoritsFindManyArgs
    Subscribers?: boolean | ModSubscribersFindManyArgs
    Downloads?: boolean | ModDownloadFindManyArgs
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
        P extends 'Collection' ? ModsCollectionGetPayload<S['include'][P]> :
        P extends 'Images' ? Array < ModImageGetPayload<S['include'][P]>>  :
        P extends 'Authors' ? Array < ModAuthorGetPayload<S['include'][P]>>  :
        P extends 'Tags' ? Array < ModTagGetPayload<S['include'][P]>>  :
        P extends 'Versions' ? Array < ModVersionGetPayload<S['include'][P]>>  :
        P extends 'Lists' ? Array < ModsListGetPayload<S['include'][P]>>  :
        P extends 'Issues' ? Array < ModIssueGetPayload<S['include'][P]>>  :
        P extends 'Favorits' ? Array < ModsFavoritsGetPayload<S['include'][P]>>  :
        P extends 'Subscribers' ? Array < ModSubscribersGetPayload<S['include'][P]>>  :
        P extends 'Downloads' ? Array < ModDownloadGetPayload<S['include'][P]>>  :
        P extends '_count' ? ModCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Collection' ? ModsCollectionGetPayload<S['select'][P]> :
        P extends 'Images' ? Array < ModImageGetPayload<S['select'][P]>>  :
        P extends 'Authors' ? Array < ModAuthorGetPayload<S['select'][P]>>  :
        P extends 'Tags' ? Array < ModTagGetPayload<S['select'][P]>>  :
        P extends 'Versions' ? Array < ModVersionGetPayload<S['select'][P]>>  :
        P extends 'Lists' ? Array < ModsListGetPayload<S['select'][P]>>  :
        P extends 'Issues' ? Array < ModIssueGetPayload<S['select'][P]>>  :
        P extends 'Favorits' ? Array < ModsFavoritsGetPayload<S['select'][P]>>  :
        P extends 'Subscribers' ? Array < ModSubscribersGetPayload<S['select'][P]>>  :
        P extends 'Downloads' ? Array < ModDownloadGetPayload<S['select'][P]>>  :
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

    Collection<T extends ModsCollectionArgs = {}>(args?: Subset<T, ModsCollectionArgs>): CheckSelect<T, Prisma__ModsCollectionClient<ModsCollection | null >, Prisma__ModsCollectionClient<ModsCollectionGetPayload<T> | null >>;

    Images<T extends ModImageFindManyArgs = {}>(args?: Subset<T, ModImageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModImage>>, PrismaPromise<Array<ModImageGetPayload<T>>>>;

    Authors<T extends ModAuthorFindManyArgs = {}>(args?: Subset<T, ModAuthorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModAuthor>>, PrismaPromise<Array<ModAuthorGetPayload<T>>>>;

    Tags<T extends ModTagFindManyArgs = {}>(args?: Subset<T, ModTagFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModTag>>, PrismaPromise<Array<ModTagGetPayload<T>>>>;

    Versions<T extends ModVersionFindManyArgs = {}>(args?: Subset<T, ModVersionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModVersion>>, PrismaPromise<Array<ModVersionGetPayload<T>>>>;

    Lists<T extends ModsListFindManyArgs = {}>(args?: Subset<T, ModsListFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModsList>>, PrismaPromise<Array<ModsListGetPayload<T>>>>;

    Issues<T extends ModIssueFindManyArgs = {}>(args?: Subset<T, ModIssueFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModIssue>>, PrismaPromise<Array<ModIssueGetPayload<T>>>>;

    Favorits<T extends ModsFavoritsFindManyArgs = {}>(args?: Subset<T, ModsFavoritsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModsFavorits>>, PrismaPromise<Array<ModsFavoritsGetPayload<T>>>>;

    Subscribers<T extends ModSubscribersFindManyArgs = {}>(args?: Subset<T, ModSubscribersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModSubscribers>>, PrismaPromise<Array<ModSubscribersGetPayload<T>>>>;

    Downloads<T extends ModDownloadFindManyArgs = {}>(args?: Subset<T, ModDownloadFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModDownload>>, PrismaPromise<Array<ModDownloadGetPayload<T>>>>;

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
   * Model ModAuthor
   */


  export type AggregateModAuthor = {
    _count: ModAuthorCountAggregateOutputType | null
    _avg: ModAuthorAvgAggregateOutputType | null
    _sum: ModAuthorSumAggregateOutputType | null
    _min: ModAuthorMinAggregateOutputType | null
    _max: ModAuthorMaxAggregateOutputType | null
  }

  export type ModAuthorAvgAggregateOutputType = {
    mod_id: number | null
    user_id: number | null
    type: number | null
  }

  export type ModAuthorSumAggregateOutputType = {
    mod_id: number | null
    user_id: number | null
    type: number | null
  }

  export type ModAuthorMinAggregateOutputType = {
    mod_id: number | null
    user_id: number | null
    type: number | null
  }

  export type ModAuthorMaxAggregateOutputType = {
    mod_id: number | null
    user_id: number | null
    type: number | null
  }

  export type ModAuthorCountAggregateOutputType = {
    mod_id: number
    user_id: number
    type: number
    _all: number
  }


  export type ModAuthorAvgAggregateInputType = {
    mod_id?: true
    user_id?: true
    type?: true
  }

  export type ModAuthorSumAggregateInputType = {
    mod_id?: true
    user_id?: true
    type?: true
  }

  export type ModAuthorMinAggregateInputType = {
    mod_id?: true
    user_id?: true
    type?: true
  }

  export type ModAuthorMaxAggregateInputType = {
    mod_id?: true
    user_id?: true
    type?: true
  }

  export type ModAuthorCountAggregateInputType = {
    mod_id?: true
    user_id?: true
    type?: true
    _all?: true
  }

  export type ModAuthorAggregateArgs = {
    /**
     * Filter which ModAuthor to aggregate.
     * 
    **/
    where?: ModAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModAuthors to fetch.
     * 
    **/
    orderBy?: Enumerable<ModAuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ModAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModAuthors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModAuthors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModAuthors
    **/
    _count?: true | ModAuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModAuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModAuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModAuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModAuthorMaxAggregateInputType
  }

  export type GetModAuthorAggregateType<T extends ModAuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateModAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModAuthor[P]>
      : GetScalarType<T[P], AggregateModAuthor[P]>
  }




  export type ModAuthorGroupByArgs = {
    where?: ModAuthorWhereInput
    orderBy?: Enumerable<ModAuthorOrderByWithAggregationInput>
    by: Array<ModAuthorScalarFieldEnum>
    having?: ModAuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModAuthorCountAggregateInputType | true
    _avg?: ModAuthorAvgAggregateInputType
    _sum?: ModAuthorSumAggregateInputType
    _min?: ModAuthorMinAggregateInputType
    _max?: ModAuthorMaxAggregateInputType
  }


  export type ModAuthorGroupByOutputType = {
    mod_id: number
    user_id: number
    type: number
    _count: ModAuthorCountAggregateOutputType | null
    _avg: ModAuthorAvgAggregateOutputType | null
    _sum: ModAuthorSumAggregateOutputType | null
    _min: ModAuthorMinAggregateOutputType | null
    _max: ModAuthorMaxAggregateOutputType | null
  }

  type GetModAuthorGroupByPayload<T extends ModAuthorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ModAuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModAuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModAuthorGroupByOutputType[P]>
            : GetScalarType<T[P], ModAuthorGroupByOutputType[P]>
        }
      >
    >


  export type ModAuthorSelect = {
    mod_id?: boolean
    user_id?: boolean
    type?: boolean
    User?: boolean | UserArgs
    Mod?: boolean | ModArgs
  }

  export type ModAuthorInclude = {
    User?: boolean | UserArgs
    Mod?: boolean | ModArgs
  }

  export type ModAuthorGetPayload<
    S extends boolean | null | undefined | ModAuthorArgs,
    U = keyof S
      > = S extends true
        ? ModAuthor
    : S extends undefined
    ? never
    : S extends ModAuthorArgs | ModAuthorFindManyArgs
    ?'include' extends U
    ? ModAuthor  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'Mod' ? ModGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'Mod' ? ModGetPayload<S['select'][P]> :  P extends keyof ModAuthor ? ModAuthor[P] : never
  } 
    : ModAuthor
  : ModAuthor


  type ModAuthorCountArgs = Merge<
    Omit<ModAuthorFindManyArgs, 'select' | 'include'> & {
      select?: ModAuthorCountAggregateInputType | true
    }
  >

  export interface ModAuthorDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ModAuthor that matches the filter.
     * @param {ModAuthorFindUniqueArgs} args - Arguments to find a ModAuthor
     * @example
     * // Get one ModAuthor
     * const modAuthor = await prisma.modAuthor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModAuthorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModAuthorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ModAuthor'> extends True ? CheckSelect<T, Prisma__ModAuthorClient<ModAuthor>, Prisma__ModAuthorClient<ModAuthorGetPayload<T>>> : CheckSelect<T, Prisma__ModAuthorClient<ModAuthor | null >, Prisma__ModAuthorClient<ModAuthorGetPayload<T> | null >>

    /**
     * Find the first ModAuthor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModAuthorFindFirstArgs} args - Arguments to find a ModAuthor
     * @example
     * // Get one ModAuthor
     * const modAuthor = await prisma.modAuthor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModAuthorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModAuthorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ModAuthor'> extends True ? CheckSelect<T, Prisma__ModAuthorClient<ModAuthor>, Prisma__ModAuthorClient<ModAuthorGetPayload<T>>> : CheckSelect<T, Prisma__ModAuthorClient<ModAuthor | null >, Prisma__ModAuthorClient<ModAuthorGetPayload<T> | null >>

    /**
     * Find zero or more ModAuthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModAuthorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModAuthors
     * const modAuthors = await prisma.modAuthor.findMany()
     * 
     * // Get first 10 ModAuthors
     * const modAuthors = await prisma.modAuthor.findMany({ take: 10 })
     * 
     * // Only select the `mod_id`
     * const modAuthorWithMod_idOnly = await prisma.modAuthor.findMany({ select: { mod_id: true } })
     * 
    **/
    findMany<T extends ModAuthorFindManyArgs>(
      args?: SelectSubset<T, ModAuthorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ModAuthor>>, PrismaPromise<Array<ModAuthorGetPayload<T>>>>

    /**
     * Create a ModAuthor.
     * @param {ModAuthorCreateArgs} args - Arguments to create a ModAuthor.
     * @example
     * // Create one ModAuthor
     * const ModAuthor = await prisma.modAuthor.create({
     *   data: {
     *     // ... data to create a ModAuthor
     *   }
     * })
     * 
    **/
    create<T extends ModAuthorCreateArgs>(
      args: SelectSubset<T, ModAuthorCreateArgs>
    ): CheckSelect<T, Prisma__ModAuthorClient<ModAuthor>, Prisma__ModAuthorClient<ModAuthorGetPayload<T>>>

    /**
     * Create many ModAuthors.
     *     @param {ModAuthorCreateManyArgs} args - Arguments to create many ModAuthors.
     *     @example
     *     // Create many ModAuthors
     *     const modAuthor = await prisma.modAuthor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModAuthorCreateManyArgs>(
      args?: SelectSubset<T, ModAuthorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ModAuthor.
     * @param {ModAuthorDeleteArgs} args - Arguments to delete one ModAuthor.
     * @example
     * // Delete one ModAuthor
     * const ModAuthor = await prisma.modAuthor.delete({
     *   where: {
     *     // ... filter to delete one ModAuthor
     *   }
     * })
     * 
    **/
    delete<T extends ModAuthorDeleteArgs>(
      args: SelectSubset<T, ModAuthorDeleteArgs>
    ): CheckSelect<T, Prisma__ModAuthorClient<ModAuthor>, Prisma__ModAuthorClient<ModAuthorGetPayload<T>>>

    /**
     * Update one ModAuthor.
     * @param {ModAuthorUpdateArgs} args - Arguments to update one ModAuthor.
     * @example
     * // Update one ModAuthor
     * const modAuthor = await prisma.modAuthor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModAuthorUpdateArgs>(
      args: SelectSubset<T, ModAuthorUpdateArgs>
    ): CheckSelect<T, Prisma__ModAuthorClient<ModAuthor>, Prisma__ModAuthorClient<ModAuthorGetPayload<T>>>

    /**
     * Delete zero or more ModAuthors.
     * @param {ModAuthorDeleteManyArgs} args - Arguments to filter ModAuthors to delete.
     * @example
     * // Delete a few ModAuthors
     * const { count } = await prisma.modAuthor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModAuthorDeleteManyArgs>(
      args?: SelectSubset<T, ModAuthorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModAuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModAuthors
     * const modAuthor = await prisma.modAuthor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModAuthorUpdateManyArgs>(
      args: SelectSubset<T, ModAuthorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ModAuthor.
     * @param {ModAuthorUpsertArgs} args - Arguments to update or create a ModAuthor.
     * @example
     * // Update or create a ModAuthor
     * const modAuthor = await prisma.modAuthor.upsert({
     *   create: {
     *     // ... data to create a ModAuthor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModAuthor we want to update
     *   }
     * })
    **/
    upsert<T extends ModAuthorUpsertArgs>(
      args: SelectSubset<T, ModAuthorUpsertArgs>
    ): CheckSelect<T, Prisma__ModAuthorClient<ModAuthor>, Prisma__ModAuthorClient<ModAuthorGetPayload<T>>>

    /**
     * Count the number of ModAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModAuthorCountArgs} args - Arguments to filter ModAuthors to count.
     * @example
     * // Count the number of ModAuthors
     * const count = await prisma.modAuthor.count({
     *   where: {
     *     // ... the filter for the ModAuthors we want to count
     *   }
     * })
    **/
    count<T extends ModAuthorCountArgs>(
      args?: Subset<T, ModAuthorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModAuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModAuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModAuthorAggregateArgs>(args: Subset<T, ModAuthorAggregateArgs>): PrismaPromise<GetModAuthorAggregateType<T>>

    /**
     * Group by ModAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModAuthorGroupByArgs} args - Group by arguments.
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
      T extends ModAuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModAuthorGroupByArgs['orderBy'] }
        : { orderBy?: ModAuthorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModAuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModAuthorGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModAuthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModAuthorClient<T> implements PrismaPromise<T> {
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
   * ModAuthor findUnique
   */
  export type ModAuthorFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ModAuthor
     * 
    **/
    select?: ModAuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModAuthorInclude | null
    /**
     * Throw an Error if a ModAuthor can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModAuthor to fetch.
     * 
    **/
    where: ModAuthorWhereUniqueInput
  }


  /**
   * ModAuthor findFirst
   */
  export type ModAuthorFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ModAuthor
     * 
    **/
    select?: ModAuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModAuthorInclude | null
    /**
     * Throw an Error if a ModAuthor can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModAuthor to fetch.
     * 
    **/
    where?: ModAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModAuthors to fetch.
     * 
    **/
    orderBy?: Enumerable<ModAuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModAuthors.
     * 
    **/
    cursor?: ModAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModAuthors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModAuthors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModAuthors.
     * 
    **/
    distinct?: Enumerable<ModAuthorScalarFieldEnum>
  }


  /**
   * ModAuthor findMany
   */
  export type ModAuthorFindManyArgs = {
    /**
     * Select specific fields to fetch from the ModAuthor
     * 
    **/
    select?: ModAuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModAuthorInclude | null
    /**
     * Filter, which ModAuthors to fetch.
     * 
    **/
    where?: ModAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModAuthors to fetch.
     * 
    **/
    orderBy?: Enumerable<ModAuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModAuthors.
     * 
    **/
    cursor?: ModAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModAuthors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModAuthors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ModAuthorScalarFieldEnum>
  }


  /**
   * ModAuthor create
   */
  export type ModAuthorCreateArgs = {
    /**
     * Select specific fields to fetch from the ModAuthor
     * 
    **/
    select?: ModAuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModAuthorInclude | null
    /**
     * The data needed to create a ModAuthor.
     * 
    **/
    data: XOR<ModAuthorCreateInput, ModAuthorUncheckedCreateInput>
  }


  /**
   * ModAuthor createMany
   */
  export type ModAuthorCreateManyArgs = {
    /**
     * The data used to create many ModAuthors.
     * 
    **/
    data: Enumerable<ModAuthorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ModAuthor update
   */
  export type ModAuthorUpdateArgs = {
    /**
     * Select specific fields to fetch from the ModAuthor
     * 
    **/
    select?: ModAuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModAuthorInclude | null
    /**
     * The data needed to update a ModAuthor.
     * 
    **/
    data: XOR<ModAuthorUpdateInput, ModAuthorUncheckedUpdateInput>
    /**
     * Choose, which ModAuthor to update.
     * 
    **/
    where: ModAuthorWhereUniqueInput
  }


  /**
   * ModAuthor updateMany
   */
  export type ModAuthorUpdateManyArgs = {
    /**
     * The data used to update ModAuthors.
     * 
    **/
    data: XOR<ModAuthorUpdateManyMutationInput, ModAuthorUncheckedUpdateManyInput>
    /**
     * Filter which ModAuthors to update
     * 
    **/
    where?: ModAuthorWhereInput
  }


  /**
   * ModAuthor upsert
   */
  export type ModAuthorUpsertArgs = {
    /**
     * Select specific fields to fetch from the ModAuthor
     * 
    **/
    select?: ModAuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModAuthorInclude | null
    /**
     * The filter to search for the ModAuthor to update in case it exists.
     * 
    **/
    where: ModAuthorWhereUniqueInput
    /**
     * In case the ModAuthor found by the `where` argument doesn't exist, create a new ModAuthor with this data.
     * 
    **/
    create: XOR<ModAuthorCreateInput, ModAuthorUncheckedCreateInput>
    /**
     * In case the ModAuthor was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ModAuthorUpdateInput, ModAuthorUncheckedUpdateInput>
  }


  /**
   * ModAuthor delete
   */
  export type ModAuthorDeleteArgs = {
    /**
     * Select specific fields to fetch from the ModAuthor
     * 
    **/
    select?: ModAuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModAuthorInclude | null
    /**
     * Filter which ModAuthor to delete.
     * 
    **/
    where: ModAuthorWhereUniqueInput
  }


  /**
   * ModAuthor deleteMany
   */
  export type ModAuthorDeleteManyArgs = {
    /**
     * Filter which ModAuthors to delete
     * 
    **/
    where?: ModAuthorWhereInput
  }


  /**
   * ModAuthor without action
   */
  export type ModAuthorArgs = {
    /**
     * Select specific fields to fetch from the ModAuthor
     * 
    **/
    select?: ModAuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModAuthorInclude | null
  }



  /**
   * Model ModImage
   */


  export type AggregateModImage = {
    _count: ModImageCountAggregateOutputType | null
    _avg: ModImageAvgAggregateOutputType | null
    _sum: ModImageSumAggregateOutputType | null
    _min: ModImageMinAggregateOutputType | null
    _max: ModImageMaxAggregateOutputType | null
  }

  export type ModImageAvgAggregateOutputType = {
    id: number | null
    mod_id: number | null
  }

  export type ModImageSumAggregateOutputType = {
    id: number | null
    mod_id: number | null
  }

  export type ModImageMinAggregateOutputType = {
    id: number | null
    mod_id: number | null
    url: string | null
  }

  export type ModImageMaxAggregateOutputType = {
    id: number | null
    mod_id: number | null
    url: string | null
  }

  export type ModImageCountAggregateOutputType = {
    id: number
    mod_id: number
    url: number
    _all: number
  }


  export type ModImageAvgAggregateInputType = {
    id?: true
    mod_id?: true
  }

  export type ModImageSumAggregateInputType = {
    id?: true
    mod_id?: true
  }

  export type ModImageMinAggregateInputType = {
    id?: true
    mod_id?: true
    url?: true
  }

  export type ModImageMaxAggregateInputType = {
    id?: true
    mod_id?: true
    url?: true
  }

  export type ModImageCountAggregateInputType = {
    id?: true
    mod_id?: true
    url?: true
    _all?: true
  }

  export type ModImageAggregateArgs = {
    /**
     * Filter which ModImage to aggregate.
     * 
    **/
    where?: ModImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModImages to fetch.
     * 
    **/
    orderBy?: Enumerable<ModImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ModImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModImages
    **/
    _count?: true | ModImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModImageMaxAggregateInputType
  }

  export type GetModImageAggregateType<T extends ModImageAggregateArgs> = {
        [P in keyof T & keyof AggregateModImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModImage[P]>
      : GetScalarType<T[P], AggregateModImage[P]>
  }




  export type ModImageGroupByArgs = {
    where?: ModImageWhereInput
    orderBy?: Enumerable<ModImageOrderByWithAggregationInput>
    by: Array<ModImageScalarFieldEnum>
    having?: ModImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModImageCountAggregateInputType | true
    _avg?: ModImageAvgAggregateInputType
    _sum?: ModImageSumAggregateInputType
    _min?: ModImageMinAggregateInputType
    _max?: ModImageMaxAggregateInputType
  }


  export type ModImageGroupByOutputType = {
    id: number
    mod_id: number
    url: string
    _count: ModImageCountAggregateOutputType | null
    _avg: ModImageAvgAggregateOutputType | null
    _sum: ModImageSumAggregateOutputType | null
    _min: ModImageMinAggregateOutputType | null
    _max: ModImageMaxAggregateOutputType | null
  }

  type GetModImageGroupByPayload<T extends ModImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ModImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModImageGroupByOutputType[P]>
            : GetScalarType<T[P], ModImageGroupByOutputType[P]>
        }
      >
    >


  export type ModImageSelect = {
    id?: boolean
    mod_id?: boolean
    url?: boolean
    Mod?: boolean | ModArgs
  }

  export type ModImageInclude = {
    Mod?: boolean | ModArgs
  }

  export type ModImageGetPayload<
    S extends boolean | null | undefined | ModImageArgs,
    U = keyof S
      > = S extends true
        ? ModImage
    : S extends undefined
    ? never
    : S extends ModImageArgs | ModImageFindManyArgs
    ?'include' extends U
    ? ModImage  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Mod' ? ModGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Mod' ? ModGetPayload<S['select'][P]> :  P extends keyof ModImage ? ModImage[P] : never
  } 
    : ModImage
  : ModImage


  type ModImageCountArgs = Merge<
    Omit<ModImageFindManyArgs, 'select' | 'include'> & {
      select?: ModImageCountAggregateInputType | true
    }
  >

  export interface ModImageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ModImage that matches the filter.
     * @param {ModImageFindUniqueArgs} args - Arguments to find a ModImage
     * @example
     * // Get one ModImage
     * const modImage = await prisma.modImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ModImage'> extends True ? CheckSelect<T, Prisma__ModImageClient<ModImage>, Prisma__ModImageClient<ModImageGetPayload<T>>> : CheckSelect<T, Prisma__ModImageClient<ModImage | null >, Prisma__ModImageClient<ModImageGetPayload<T> | null >>

    /**
     * Find the first ModImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModImageFindFirstArgs} args - Arguments to find a ModImage
     * @example
     * // Get one ModImage
     * const modImage = await prisma.modImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ModImage'> extends True ? CheckSelect<T, Prisma__ModImageClient<ModImage>, Prisma__ModImageClient<ModImageGetPayload<T>>> : CheckSelect<T, Prisma__ModImageClient<ModImage | null >, Prisma__ModImageClient<ModImageGetPayload<T> | null >>

    /**
     * Find zero or more ModImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModImages
     * const modImages = await prisma.modImage.findMany()
     * 
     * // Get first 10 ModImages
     * const modImages = await prisma.modImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modImageWithIdOnly = await prisma.modImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModImageFindManyArgs>(
      args?: SelectSubset<T, ModImageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ModImage>>, PrismaPromise<Array<ModImageGetPayload<T>>>>

    /**
     * Create a ModImage.
     * @param {ModImageCreateArgs} args - Arguments to create a ModImage.
     * @example
     * // Create one ModImage
     * const ModImage = await prisma.modImage.create({
     *   data: {
     *     // ... data to create a ModImage
     *   }
     * })
     * 
    **/
    create<T extends ModImageCreateArgs>(
      args: SelectSubset<T, ModImageCreateArgs>
    ): CheckSelect<T, Prisma__ModImageClient<ModImage>, Prisma__ModImageClient<ModImageGetPayload<T>>>

    /**
     * Create many ModImages.
     *     @param {ModImageCreateManyArgs} args - Arguments to create many ModImages.
     *     @example
     *     // Create many ModImages
     *     const modImage = await prisma.modImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModImageCreateManyArgs>(
      args?: SelectSubset<T, ModImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ModImage.
     * @param {ModImageDeleteArgs} args - Arguments to delete one ModImage.
     * @example
     * // Delete one ModImage
     * const ModImage = await prisma.modImage.delete({
     *   where: {
     *     // ... filter to delete one ModImage
     *   }
     * })
     * 
    **/
    delete<T extends ModImageDeleteArgs>(
      args: SelectSubset<T, ModImageDeleteArgs>
    ): CheckSelect<T, Prisma__ModImageClient<ModImage>, Prisma__ModImageClient<ModImageGetPayload<T>>>

    /**
     * Update one ModImage.
     * @param {ModImageUpdateArgs} args - Arguments to update one ModImage.
     * @example
     * // Update one ModImage
     * const modImage = await prisma.modImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModImageUpdateArgs>(
      args: SelectSubset<T, ModImageUpdateArgs>
    ): CheckSelect<T, Prisma__ModImageClient<ModImage>, Prisma__ModImageClient<ModImageGetPayload<T>>>

    /**
     * Delete zero or more ModImages.
     * @param {ModImageDeleteManyArgs} args - Arguments to filter ModImages to delete.
     * @example
     * // Delete a few ModImages
     * const { count } = await prisma.modImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModImageDeleteManyArgs>(
      args?: SelectSubset<T, ModImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModImages
     * const modImage = await prisma.modImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModImageUpdateManyArgs>(
      args: SelectSubset<T, ModImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ModImage.
     * @param {ModImageUpsertArgs} args - Arguments to update or create a ModImage.
     * @example
     * // Update or create a ModImage
     * const modImage = await prisma.modImage.upsert({
     *   create: {
     *     // ... data to create a ModImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModImage we want to update
     *   }
     * })
    **/
    upsert<T extends ModImageUpsertArgs>(
      args: SelectSubset<T, ModImageUpsertArgs>
    ): CheckSelect<T, Prisma__ModImageClient<ModImage>, Prisma__ModImageClient<ModImageGetPayload<T>>>

    /**
     * Count the number of ModImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModImageCountArgs} args - Arguments to filter ModImages to count.
     * @example
     * // Count the number of ModImages
     * const count = await prisma.modImage.count({
     *   where: {
     *     // ... the filter for the ModImages we want to count
     *   }
     * })
    **/
    count<T extends ModImageCountArgs>(
      args?: Subset<T, ModImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModImageAggregateArgs>(args: Subset<T, ModImageAggregateArgs>): PrismaPromise<GetModImageAggregateType<T>>

    /**
     * Group by ModImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModImageGroupByArgs} args - Group by arguments.
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
      T extends ModImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModImageGroupByArgs['orderBy'] }
        : { orderBy?: ModImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModImageGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModImageClient<T> implements PrismaPromise<T> {
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
   * ModImage findUnique
   */
  export type ModImageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ModImage
     * 
    **/
    select?: ModImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModImageInclude | null
    /**
     * Throw an Error if a ModImage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModImage to fetch.
     * 
    **/
    where: ModImageWhereUniqueInput
  }


  /**
   * ModImage findFirst
   */
  export type ModImageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ModImage
     * 
    **/
    select?: ModImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModImageInclude | null
    /**
     * Throw an Error if a ModImage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModImage to fetch.
     * 
    **/
    where?: ModImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModImages to fetch.
     * 
    **/
    orderBy?: Enumerable<ModImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModImages.
     * 
    **/
    cursor?: ModImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModImages.
     * 
    **/
    distinct?: Enumerable<ModImageScalarFieldEnum>
  }


  /**
   * ModImage findMany
   */
  export type ModImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the ModImage
     * 
    **/
    select?: ModImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModImageInclude | null
    /**
     * Filter, which ModImages to fetch.
     * 
    **/
    where?: ModImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModImages to fetch.
     * 
    **/
    orderBy?: Enumerable<ModImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModImages.
     * 
    **/
    cursor?: ModImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModImages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ModImageScalarFieldEnum>
  }


  /**
   * ModImage create
   */
  export type ModImageCreateArgs = {
    /**
     * Select specific fields to fetch from the ModImage
     * 
    **/
    select?: ModImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModImageInclude | null
    /**
     * The data needed to create a ModImage.
     * 
    **/
    data: XOR<ModImageCreateInput, ModImageUncheckedCreateInput>
  }


  /**
   * ModImage createMany
   */
  export type ModImageCreateManyArgs = {
    /**
     * The data used to create many ModImages.
     * 
    **/
    data: Enumerable<ModImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ModImage update
   */
  export type ModImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the ModImage
     * 
    **/
    select?: ModImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModImageInclude | null
    /**
     * The data needed to update a ModImage.
     * 
    **/
    data: XOR<ModImageUpdateInput, ModImageUncheckedUpdateInput>
    /**
     * Choose, which ModImage to update.
     * 
    **/
    where: ModImageWhereUniqueInput
  }


  /**
   * ModImage updateMany
   */
  export type ModImageUpdateManyArgs = {
    /**
     * The data used to update ModImages.
     * 
    **/
    data: XOR<ModImageUpdateManyMutationInput, ModImageUncheckedUpdateManyInput>
    /**
     * Filter which ModImages to update
     * 
    **/
    where?: ModImageWhereInput
  }


  /**
   * ModImage upsert
   */
  export type ModImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the ModImage
     * 
    **/
    select?: ModImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModImageInclude | null
    /**
     * The filter to search for the ModImage to update in case it exists.
     * 
    **/
    where: ModImageWhereUniqueInput
    /**
     * In case the ModImage found by the `where` argument doesn't exist, create a new ModImage with this data.
     * 
    **/
    create: XOR<ModImageCreateInput, ModImageUncheckedCreateInput>
    /**
     * In case the ModImage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ModImageUpdateInput, ModImageUncheckedUpdateInput>
  }


  /**
   * ModImage delete
   */
  export type ModImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the ModImage
     * 
    **/
    select?: ModImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModImageInclude | null
    /**
     * Filter which ModImage to delete.
     * 
    **/
    where: ModImageWhereUniqueInput
  }


  /**
   * ModImage deleteMany
   */
  export type ModImageDeleteManyArgs = {
    /**
     * Filter which ModImages to delete
     * 
    **/
    where?: ModImageWhereInput
  }


  /**
   * ModImage without action
   */
  export type ModImageArgs = {
    /**
     * Select specific fields to fetch from the ModImage
     * 
    **/
    select?: ModImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModImageInclude | null
  }



  /**
   * Model ModTag
   */


  export type AggregateModTag = {
    _count: ModTagCountAggregateOutputType | null
    _avg: ModTagAvgAggregateOutputType | null
    _sum: ModTagSumAggregateOutputType | null
    _min: ModTagMinAggregateOutputType | null
    _max: ModTagMaxAggregateOutputType | null
  }

  export type ModTagAvgAggregateOutputType = {
    id: number | null
  }

  export type ModTagSumAggregateOutputType = {
    id: number | null
  }

  export type ModTagMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ModTagMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ModTagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ModTagAvgAggregateInputType = {
    id?: true
  }

  export type ModTagSumAggregateInputType = {
    id?: true
  }

  export type ModTagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ModTagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ModTagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ModTagAggregateArgs = {
    /**
     * Filter which ModTag to aggregate.
     * 
    **/
    where?: ModTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModTags to fetch.
     * 
    **/
    orderBy?: Enumerable<ModTagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ModTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModTags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModTags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModTags
    **/
    _count?: true | ModTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModTagMaxAggregateInputType
  }

  export type GetModTagAggregateType<T extends ModTagAggregateArgs> = {
        [P in keyof T & keyof AggregateModTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModTag[P]>
      : GetScalarType<T[P], AggregateModTag[P]>
  }




  export type ModTagGroupByArgs = {
    where?: ModTagWhereInput
    orderBy?: Enumerable<ModTagOrderByWithAggregationInput>
    by: Array<ModTagScalarFieldEnum>
    having?: ModTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModTagCountAggregateInputType | true
    _avg?: ModTagAvgAggregateInputType
    _sum?: ModTagSumAggregateInputType
    _min?: ModTagMinAggregateInputType
    _max?: ModTagMaxAggregateInputType
  }


  export type ModTagGroupByOutputType = {
    id: number
    name: string
    _count: ModTagCountAggregateOutputType | null
    _avg: ModTagAvgAggregateOutputType | null
    _sum: ModTagSumAggregateOutputType | null
    _min: ModTagMinAggregateOutputType | null
    _max: ModTagMaxAggregateOutputType | null
  }

  type GetModTagGroupByPayload<T extends ModTagGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ModTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModTagGroupByOutputType[P]>
            : GetScalarType<T[P], ModTagGroupByOutputType[P]>
        }
      >
    >


  export type ModTagSelect = {
    id?: boolean
    name?: boolean
    Mod?: boolean | ModFindManyArgs
    _count?: boolean | ModTagCountOutputTypeArgs
  }

  export type ModTagInclude = {
    Mod?: boolean | ModFindManyArgs
    _count?: boolean | ModTagCountOutputTypeArgs
  }

  export type ModTagGetPayload<
    S extends boolean | null | undefined | ModTagArgs,
    U = keyof S
      > = S extends true
        ? ModTag
    : S extends undefined
    ? never
    : S extends ModTagArgs | ModTagFindManyArgs
    ?'include' extends U
    ? ModTag  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Mod' ? Array < ModGetPayload<S['include'][P]>>  :
        P extends '_count' ? ModTagCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Mod' ? Array < ModGetPayload<S['select'][P]>>  :
        P extends '_count' ? ModTagCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ModTag ? ModTag[P] : never
  } 
    : ModTag
  : ModTag


  type ModTagCountArgs = Merge<
    Omit<ModTagFindManyArgs, 'select' | 'include'> & {
      select?: ModTagCountAggregateInputType | true
    }
  >

  export interface ModTagDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ModTag that matches the filter.
     * @param {ModTagFindUniqueArgs} args - Arguments to find a ModTag
     * @example
     * // Get one ModTag
     * const modTag = await prisma.modTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModTagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModTagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ModTag'> extends True ? CheckSelect<T, Prisma__ModTagClient<ModTag>, Prisma__ModTagClient<ModTagGetPayload<T>>> : CheckSelect<T, Prisma__ModTagClient<ModTag | null >, Prisma__ModTagClient<ModTagGetPayload<T> | null >>

    /**
     * Find the first ModTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModTagFindFirstArgs} args - Arguments to find a ModTag
     * @example
     * // Get one ModTag
     * const modTag = await prisma.modTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModTagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModTagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ModTag'> extends True ? CheckSelect<T, Prisma__ModTagClient<ModTag>, Prisma__ModTagClient<ModTagGetPayload<T>>> : CheckSelect<T, Prisma__ModTagClient<ModTag | null >, Prisma__ModTagClient<ModTagGetPayload<T> | null >>

    /**
     * Find zero or more ModTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModTagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModTags
     * const modTags = await prisma.modTag.findMany()
     * 
     * // Get first 10 ModTags
     * const modTags = await prisma.modTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modTagWithIdOnly = await prisma.modTag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModTagFindManyArgs>(
      args?: SelectSubset<T, ModTagFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ModTag>>, PrismaPromise<Array<ModTagGetPayload<T>>>>

    /**
     * Create a ModTag.
     * @param {ModTagCreateArgs} args - Arguments to create a ModTag.
     * @example
     * // Create one ModTag
     * const ModTag = await prisma.modTag.create({
     *   data: {
     *     // ... data to create a ModTag
     *   }
     * })
     * 
    **/
    create<T extends ModTagCreateArgs>(
      args: SelectSubset<T, ModTagCreateArgs>
    ): CheckSelect<T, Prisma__ModTagClient<ModTag>, Prisma__ModTagClient<ModTagGetPayload<T>>>

    /**
     * Create many ModTags.
     *     @param {ModTagCreateManyArgs} args - Arguments to create many ModTags.
     *     @example
     *     // Create many ModTags
     *     const modTag = await prisma.modTag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModTagCreateManyArgs>(
      args?: SelectSubset<T, ModTagCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ModTag.
     * @param {ModTagDeleteArgs} args - Arguments to delete one ModTag.
     * @example
     * // Delete one ModTag
     * const ModTag = await prisma.modTag.delete({
     *   where: {
     *     // ... filter to delete one ModTag
     *   }
     * })
     * 
    **/
    delete<T extends ModTagDeleteArgs>(
      args: SelectSubset<T, ModTagDeleteArgs>
    ): CheckSelect<T, Prisma__ModTagClient<ModTag>, Prisma__ModTagClient<ModTagGetPayload<T>>>

    /**
     * Update one ModTag.
     * @param {ModTagUpdateArgs} args - Arguments to update one ModTag.
     * @example
     * // Update one ModTag
     * const modTag = await prisma.modTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModTagUpdateArgs>(
      args: SelectSubset<T, ModTagUpdateArgs>
    ): CheckSelect<T, Prisma__ModTagClient<ModTag>, Prisma__ModTagClient<ModTagGetPayload<T>>>

    /**
     * Delete zero or more ModTags.
     * @param {ModTagDeleteManyArgs} args - Arguments to filter ModTags to delete.
     * @example
     * // Delete a few ModTags
     * const { count } = await prisma.modTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModTagDeleteManyArgs>(
      args?: SelectSubset<T, ModTagDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModTags
     * const modTag = await prisma.modTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModTagUpdateManyArgs>(
      args: SelectSubset<T, ModTagUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ModTag.
     * @param {ModTagUpsertArgs} args - Arguments to update or create a ModTag.
     * @example
     * // Update or create a ModTag
     * const modTag = await prisma.modTag.upsert({
     *   create: {
     *     // ... data to create a ModTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModTag we want to update
     *   }
     * })
    **/
    upsert<T extends ModTagUpsertArgs>(
      args: SelectSubset<T, ModTagUpsertArgs>
    ): CheckSelect<T, Prisma__ModTagClient<ModTag>, Prisma__ModTagClient<ModTagGetPayload<T>>>

    /**
     * Count the number of ModTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModTagCountArgs} args - Arguments to filter ModTags to count.
     * @example
     * // Count the number of ModTags
     * const count = await prisma.modTag.count({
     *   where: {
     *     // ... the filter for the ModTags we want to count
     *   }
     * })
    **/
    count<T extends ModTagCountArgs>(
      args?: Subset<T, ModTagCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModTagAggregateArgs>(args: Subset<T, ModTagAggregateArgs>): PrismaPromise<GetModTagAggregateType<T>>

    /**
     * Group by ModTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModTagGroupByArgs} args - Group by arguments.
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
      T extends ModTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModTagGroupByArgs['orderBy'] }
        : { orderBy?: ModTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModTagGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModTagClient<T> implements PrismaPromise<T> {
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
   * ModTag findUnique
   */
  export type ModTagFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ModTag
     * 
    **/
    select?: ModTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModTagInclude | null
    /**
     * Throw an Error if a ModTag can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModTag to fetch.
     * 
    **/
    where: ModTagWhereUniqueInput
  }


  /**
   * ModTag findFirst
   */
  export type ModTagFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ModTag
     * 
    **/
    select?: ModTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModTagInclude | null
    /**
     * Throw an Error if a ModTag can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModTag to fetch.
     * 
    **/
    where?: ModTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModTags to fetch.
     * 
    **/
    orderBy?: Enumerable<ModTagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModTags.
     * 
    **/
    cursor?: ModTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModTags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModTags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModTags.
     * 
    **/
    distinct?: Enumerable<ModTagScalarFieldEnum>
  }


  /**
   * ModTag findMany
   */
  export type ModTagFindManyArgs = {
    /**
     * Select specific fields to fetch from the ModTag
     * 
    **/
    select?: ModTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModTagInclude | null
    /**
     * Filter, which ModTags to fetch.
     * 
    **/
    where?: ModTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModTags to fetch.
     * 
    **/
    orderBy?: Enumerable<ModTagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModTags.
     * 
    **/
    cursor?: ModTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModTags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModTags.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ModTagScalarFieldEnum>
  }


  /**
   * ModTag create
   */
  export type ModTagCreateArgs = {
    /**
     * Select specific fields to fetch from the ModTag
     * 
    **/
    select?: ModTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModTagInclude | null
    /**
     * The data needed to create a ModTag.
     * 
    **/
    data: XOR<ModTagCreateInput, ModTagUncheckedCreateInput>
  }


  /**
   * ModTag createMany
   */
  export type ModTagCreateManyArgs = {
    /**
     * The data used to create many ModTags.
     * 
    **/
    data: Enumerable<ModTagCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ModTag update
   */
  export type ModTagUpdateArgs = {
    /**
     * Select specific fields to fetch from the ModTag
     * 
    **/
    select?: ModTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModTagInclude | null
    /**
     * The data needed to update a ModTag.
     * 
    **/
    data: XOR<ModTagUpdateInput, ModTagUncheckedUpdateInput>
    /**
     * Choose, which ModTag to update.
     * 
    **/
    where: ModTagWhereUniqueInput
  }


  /**
   * ModTag updateMany
   */
  export type ModTagUpdateManyArgs = {
    /**
     * The data used to update ModTags.
     * 
    **/
    data: XOR<ModTagUpdateManyMutationInput, ModTagUncheckedUpdateManyInput>
    /**
     * Filter which ModTags to update
     * 
    **/
    where?: ModTagWhereInput
  }


  /**
   * ModTag upsert
   */
  export type ModTagUpsertArgs = {
    /**
     * Select specific fields to fetch from the ModTag
     * 
    **/
    select?: ModTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModTagInclude | null
    /**
     * The filter to search for the ModTag to update in case it exists.
     * 
    **/
    where: ModTagWhereUniqueInput
    /**
     * In case the ModTag found by the `where` argument doesn't exist, create a new ModTag with this data.
     * 
    **/
    create: XOR<ModTagCreateInput, ModTagUncheckedCreateInput>
    /**
     * In case the ModTag was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ModTagUpdateInput, ModTagUncheckedUpdateInput>
  }


  /**
   * ModTag delete
   */
  export type ModTagDeleteArgs = {
    /**
     * Select specific fields to fetch from the ModTag
     * 
    **/
    select?: ModTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModTagInclude | null
    /**
     * Filter which ModTag to delete.
     * 
    **/
    where: ModTagWhereUniqueInput
  }


  /**
   * ModTag deleteMany
   */
  export type ModTagDeleteManyArgs = {
    /**
     * Filter which ModTags to delete
     * 
    **/
    where?: ModTagWhereInput
  }


  /**
   * ModTag without action
   */
  export type ModTagArgs = {
    /**
     * Select specific fields to fetch from the ModTag
     * 
    **/
    select?: ModTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModTagInclude | null
  }



  /**
   * Model ModVersion
   */


  export type AggregateModVersion = {
    _count: ModVersionCountAggregateOutputType | null
    _avg: ModVersionAvgAggregateOutputType | null
    _sum: ModVersionSumAggregateOutputType | null
    _min: ModVersionMinAggregateOutputType | null
    _max: ModVersionMaxAggregateOutputType | null
  }

  export type ModVersionAvgAggregateOutputType = {
    id: number | null
    mod_id: number | null
  }

  export type ModVersionSumAggregateOutputType = {
    id: number | null
    mod_id: number | null
  }

  export type ModVersionMinAggregateOutputType = {
    id: number | null
    mod_id: number | null
    version: string | null
    game_version: string | null
    releaseDate: Date | null
  }

  export type ModVersionMaxAggregateOutputType = {
    id: number | null
    mod_id: number | null
    version: string | null
    game_version: string | null
    releaseDate: Date | null
  }

  export type ModVersionCountAggregateOutputType = {
    id: number
    mod_id: number
    version: number
    game_version: number
    releaseDate: number
    _all: number
  }


  export type ModVersionAvgAggregateInputType = {
    id?: true
    mod_id?: true
  }

  export type ModVersionSumAggregateInputType = {
    id?: true
    mod_id?: true
  }

  export type ModVersionMinAggregateInputType = {
    id?: true
    mod_id?: true
    version?: true
    game_version?: true
    releaseDate?: true
  }

  export type ModVersionMaxAggregateInputType = {
    id?: true
    mod_id?: true
    version?: true
    game_version?: true
    releaseDate?: true
  }

  export type ModVersionCountAggregateInputType = {
    id?: true
    mod_id?: true
    version?: true
    game_version?: true
    releaseDate?: true
    _all?: true
  }

  export type ModVersionAggregateArgs = {
    /**
     * Filter which ModVersion to aggregate.
     * 
    **/
    where?: ModVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModVersions to fetch.
     * 
    **/
    orderBy?: Enumerable<ModVersionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ModVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModVersions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModVersions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModVersions
    **/
    _count?: true | ModVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModVersionMaxAggregateInputType
  }

  export type GetModVersionAggregateType<T extends ModVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateModVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModVersion[P]>
      : GetScalarType<T[P], AggregateModVersion[P]>
  }




  export type ModVersionGroupByArgs = {
    where?: ModVersionWhereInput
    orderBy?: Enumerable<ModVersionOrderByWithAggregationInput>
    by: Array<ModVersionScalarFieldEnum>
    having?: ModVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModVersionCountAggregateInputType | true
    _avg?: ModVersionAvgAggregateInputType
    _sum?: ModVersionSumAggregateInputType
    _min?: ModVersionMinAggregateInputType
    _max?: ModVersionMaxAggregateInputType
  }


  export type ModVersionGroupByOutputType = {
    id: number
    mod_id: number
    version: string
    game_version: string
    releaseDate: Date
    _count: ModVersionCountAggregateOutputType | null
    _avg: ModVersionAvgAggregateOutputType | null
    _sum: ModVersionSumAggregateOutputType | null
    _min: ModVersionMinAggregateOutputType | null
    _max: ModVersionMaxAggregateOutputType | null
  }

  type GetModVersionGroupByPayload<T extends ModVersionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ModVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModVersionGroupByOutputType[P]>
            : GetScalarType<T[P], ModVersionGroupByOutputType[P]>
        }
      >
    >


  export type ModVersionSelect = {
    id?: boolean
    mod_id?: boolean
    version?: boolean
    game_version?: boolean
    releaseDate?: boolean
    Mod?: boolean | ModArgs
    Downloads?: boolean | ModDownloadFindManyArgs
    _count?: boolean | ModVersionCountOutputTypeArgs
  }

  export type ModVersionInclude = {
    Mod?: boolean | ModArgs
    Downloads?: boolean | ModDownloadFindManyArgs
    _count?: boolean | ModVersionCountOutputTypeArgs
  }

  export type ModVersionGetPayload<
    S extends boolean | null | undefined | ModVersionArgs,
    U = keyof S
      > = S extends true
        ? ModVersion
    : S extends undefined
    ? never
    : S extends ModVersionArgs | ModVersionFindManyArgs
    ?'include' extends U
    ? ModVersion  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Mod' ? ModGetPayload<S['include'][P]> :
        P extends 'Downloads' ? Array < ModDownloadGetPayload<S['include'][P]>>  :
        P extends '_count' ? ModVersionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Mod' ? ModGetPayload<S['select'][P]> :
        P extends 'Downloads' ? Array < ModDownloadGetPayload<S['select'][P]>>  :
        P extends '_count' ? ModVersionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ModVersion ? ModVersion[P] : never
  } 
    : ModVersion
  : ModVersion


  type ModVersionCountArgs = Merge<
    Omit<ModVersionFindManyArgs, 'select' | 'include'> & {
      select?: ModVersionCountAggregateInputType | true
    }
  >

  export interface ModVersionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ModVersion that matches the filter.
     * @param {ModVersionFindUniqueArgs} args - Arguments to find a ModVersion
     * @example
     * // Get one ModVersion
     * const modVersion = await prisma.modVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModVersionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModVersionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ModVersion'> extends True ? CheckSelect<T, Prisma__ModVersionClient<ModVersion>, Prisma__ModVersionClient<ModVersionGetPayload<T>>> : CheckSelect<T, Prisma__ModVersionClient<ModVersion | null >, Prisma__ModVersionClient<ModVersionGetPayload<T> | null >>

    /**
     * Find the first ModVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModVersionFindFirstArgs} args - Arguments to find a ModVersion
     * @example
     * // Get one ModVersion
     * const modVersion = await prisma.modVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModVersionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModVersionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ModVersion'> extends True ? CheckSelect<T, Prisma__ModVersionClient<ModVersion>, Prisma__ModVersionClient<ModVersionGetPayload<T>>> : CheckSelect<T, Prisma__ModVersionClient<ModVersion | null >, Prisma__ModVersionClient<ModVersionGetPayload<T> | null >>

    /**
     * Find zero or more ModVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModVersionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModVersions
     * const modVersions = await prisma.modVersion.findMany()
     * 
     * // Get first 10 ModVersions
     * const modVersions = await prisma.modVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modVersionWithIdOnly = await prisma.modVersion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModVersionFindManyArgs>(
      args?: SelectSubset<T, ModVersionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ModVersion>>, PrismaPromise<Array<ModVersionGetPayload<T>>>>

    /**
     * Create a ModVersion.
     * @param {ModVersionCreateArgs} args - Arguments to create a ModVersion.
     * @example
     * // Create one ModVersion
     * const ModVersion = await prisma.modVersion.create({
     *   data: {
     *     // ... data to create a ModVersion
     *   }
     * })
     * 
    **/
    create<T extends ModVersionCreateArgs>(
      args: SelectSubset<T, ModVersionCreateArgs>
    ): CheckSelect<T, Prisma__ModVersionClient<ModVersion>, Prisma__ModVersionClient<ModVersionGetPayload<T>>>

    /**
     * Create many ModVersions.
     *     @param {ModVersionCreateManyArgs} args - Arguments to create many ModVersions.
     *     @example
     *     // Create many ModVersions
     *     const modVersion = await prisma.modVersion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModVersionCreateManyArgs>(
      args?: SelectSubset<T, ModVersionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ModVersion.
     * @param {ModVersionDeleteArgs} args - Arguments to delete one ModVersion.
     * @example
     * // Delete one ModVersion
     * const ModVersion = await prisma.modVersion.delete({
     *   where: {
     *     // ... filter to delete one ModVersion
     *   }
     * })
     * 
    **/
    delete<T extends ModVersionDeleteArgs>(
      args: SelectSubset<T, ModVersionDeleteArgs>
    ): CheckSelect<T, Prisma__ModVersionClient<ModVersion>, Prisma__ModVersionClient<ModVersionGetPayload<T>>>

    /**
     * Update one ModVersion.
     * @param {ModVersionUpdateArgs} args - Arguments to update one ModVersion.
     * @example
     * // Update one ModVersion
     * const modVersion = await prisma.modVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModVersionUpdateArgs>(
      args: SelectSubset<T, ModVersionUpdateArgs>
    ): CheckSelect<T, Prisma__ModVersionClient<ModVersion>, Prisma__ModVersionClient<ModVersionGetPayload<T>>>

    /**
     * Delete zero or more ModVersions.
     * @param {ModVersionDeleteManyArgs} args - Arguments to filter ModVersions to delete.
     * @example
     * // Delete a few ModVersions
     * const { count } = await prisma.modVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModVersionDeleteManyArgs>(
      args?: SelectSubset<T, ModVersionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModVersions
     * const modVersion = await prisma.modVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModVersionUpdateManyArgs>(
      args: SelectSubset<T, ModVersionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ModVersion.
     * @param {ModVersionUpsertArgs} args - Arguments to update or create a ModVersion.
     * @example
     * // Update or create a ModVersion
     * const modVersion = await prisma.modVersion.upsert({
     *   create: {
     *     // ... data to create a ModVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModVersion we want to update
     *   }
     * })
    **/
    upsert<T extends ModVersionUpsertArgs>(
      args: SelectSubset<T, ModVersionUpsertArgs>
    ): CheckSelect<T, Prisma__ModVersionClient<ModVersion>, Prisma__ModVersionClient<ModVersionGetPayload<T>>>

    /**
     * Count the number of ModVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModVersionCountArgs} args - Arguments to filter ModVersions to count.
     * @example
     * // Count the number of ModVersions
     * const count = await prisma.modVersion.count({
     *   where: {
     *     // ... the filter for the ModVersions we want to count
     *   }
     * })
    **/
    count<T extends ModVersionCountArgs>(
      args?: Subset<T, ModVersionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModVersionAggregateArgs>(args: Subset<T, ModVersionAggregateArgs>): PrismaPromise<GetModVersionAggregateType<T>>

    /**
     * Group by ModVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModVersionGroupByArgs} args - Group by arguments.
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
      T extends ModVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModVersionGroupByArgs['orderBy'] }
        : { orderBy?: ModVersionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModVersionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModVersionClient<T> implements PrismaPromise<T> {
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

    Downloads<T extends ModDownloadFindManyArgs = {}>(args?: Subset<T, ModDownloadFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModDownload>>, PrismaPromise<Array<ModDownloadGetPayload<T>>>>;

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
   * ModVersion findUnique
   */
  export type ModVersionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ModVersion
     * 
    **/
    select?: ModVersionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModVersionInclude | null
    /**
     * Throw an Error if a ModVersion can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModVersion to fetch.
     * 
    **/
    where: ModVersionWhereUniqueInput
  }


  /**
   * ModVersion findFirst
   */
  export type ModVersionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ModVersion
     * 
    **/
    select?: ModVersionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModVersionInclude | null
    /**
     * Throw an Error if a ModVersion can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModVersion to fetch.
     * 
    **/
    where?: ModVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModVersions to fetch.
     * 
    **/
    orderBy?: Enumerable<ModVersionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModVersions.
     * 
    **/
    cursor?: ModVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModVersions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModVersions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModVersions.
     * 
    **/
    distinct?: Enumerable<ModVersionScalarFieldEnum>
  }


  /**
   * ModVersion findMany
   */
  export type ModVersionFindManyArgs = {
    /**
     * Select specific fields to fetch from the ModVersion
     * 
    **/
    select?: ModVersionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModVersionInclude | null
    /**
     * Filter, which ModVersions to fetch.
     * 
    **/
    where?: ModVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModVersions to fetch.
     * 
    **/
    orderBy?: Enumerable<ModVersionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModVersions.
     * 
    **/
    cursor?: ModVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModVersions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModVersions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ModVersionScalarFieldEnum>
  }


  /**
   * ModVersion create
   */
  export type ModVersionCreateArgs = {
    /**
     * Select specific fields to fetch from the ModVersion
     * 
    **/
    select?: ModVersionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModVersionInclude | null
    /**
     * The data needed to create a ModVersion.
     * 
    **/
    data: XOR<ModVersionCreateInput, ModVersionUncheckedCreateInput>
  }


  /**
   * ModVersion createMany
   */
  export type ModVersionCreateManyArgs = {
    /**
     * The data used to create many ModVersions.
     * 
    **/
    data: Enumerable<ModVersionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ModVersion update
   */
  export type ModVersionUpdateArgs = {
    /**
     * Select specific fields to fetch from the ModVersion
     * 
    **/
    select?: ModVersionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModVersionInclude | null
    /**
     * The data needed to update a ModVersion.
     * 
    **/
    data: XOR<ModVersionUpdateInput, ModVersionUncheckedUpdateInput>
    /**
     * Choose, which ModVersion to update.
     * 
    **/
    where: ModVersionWhereUniqueInput
  }


  /**
   * ModVersion updateMany
   */
  export type ModVersionUpdateManyArgs = {
    /**
     * The data used to update ModVersions.
     * 
    **/
    data: XOR<ModVersionUpdateManyMutationInput, ModVersionUncheckedUpdateManyInput>
    /**
     * Filter which ModVersions to update
     * 
    **/
    where?: ModVersionWhereInput
  }


  /**
   * ModVersion upsert
   */
  export type ModVersionUpsertArgs = {
    /**
     * Select specific fields to fetch from the ModVersion
     * 
    **/
    select?: ModVersionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModVersionInclude | null
    /**
     * The filter to search for the ModVersion to update in case it exists.
     * 
    **/
    where: ModVersionWhereUniqueInput
    /**
     * In case the ModVersion found by the `where` argument doesn't exist, create a new ModVersion with this data.
     * 
    **/
    create: XOR<ModVersionCreateInput, ModVersionUncheckedCreateInput>
    /**
     * In case the ModVersion was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ModVersionUpdateInput, ModVersionUncheckedUpdateInput>
  }


  /**
   * ModVersion delete
   */
  export type ModVersionDeleteArgs = {
    /**
     * Select specific fields to fetch from the ModVersion
     * 
    **/
    select?: ModVersionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModVersionInclude | null
    /**
     * Filter which ModVersion to delete.
     * 
    **/
    where: ModVersionWhereUniqueInput
  }


  /**
   * ModVersion deleteMany
   */
  export type ModVersionDeleteManyArgs = {
    /**
     * Filter which ModVersions to delete
     * 
    **/
    where?: ModVersionWhereInput
  }


  /**
   * ModVersion without action
   */
  export type ModVersionArgs = {
    /**
     * Select specific fields to fetch from the ModVersion
     * 
    **/
    select?: ModVersionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModVersionInclude | null
  }



  /**
   * Model ModIssue
   */


  export type AggregateModIssue = {
    _count: ModIssueCountAggregateOutputType | null
    _avg: ModIssueAvgAggregateOutputType | null
    _sum: ModIssueSumAggregateOutputType | null
    _min: ModIssueMinAggregateOutputType | null
    _max: ModIssueMaxAggregateOutputType | null
  }

  export type ModIssueAvgAggregateOutputType = {
    id: number | null
    mod_id: number | null
    author_id: number | null
  }

  export type ModIssueSumAggregateOutputType = {
    id: number | null
    mod_id: number | null
    author_id: number | null
  }

  export type ModIssueMinAggregateOutputType = {
    id: number | null
    mod_id: number | null
    name: string | null
    type: ModIssueType | null
    author_id: number | null
    createDate: Date | null
  }

  export type ModIssueMaxAggregateOutputType = {
    id: number | null
    mod_id: number | null
    name: string | null
    type: ModIssueType | null
    author_id: number | null
    createDate: Date | null
  }

  export type ModIssueCountAggregateOutputType = {
    id: number
    mod_id: number
    name: number
    type: number
    author_id: number
    createDate: number
    _all: number
  }


  export type ModIssueAvgAggregateInputType = {
    id?: true
    mod_id?: true
    author_id?: true
  }

  export type ModIssueSumAggregateInputType = {
    id?: true
    mod_id?: true
    author_id?: true
  }

  export type ModIssueMinAggregateInputType = {
    id?: true
    mod_id?: true
    name?: true
    type?: true
    author_id?: true
    createDate?: true
  }

  export type ModIssueMaxAggregateInputType = {
    id?: true
    mod_id?: true
    name?: true
    type?: true
    author_id?: true
    createDate?: true
  }

  export type ModIssueCountAggregateInputType = {
    id?: true
    mod_id?: true
    name?: true
    type?: true
    author_id?: true
    createDate?: true
    _all?: true
  }

  export type ModIssueAggregateArgs = {
    /**
     * Filter which ModIssue to aggregate.
     * 
    **/
    where?: ModIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModIssues to fetch.
     * 
    **/
    orderBy?: Enumerable<ModIssueOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ModIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModIssues from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModIssues.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModIssues
    **/
    _count?: true | ModIssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModIssueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModIssueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModIssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModIssueMaxAggregateInputType
  }

  export type GetModIssueAggregateType<T extends ModIssueAggregateArgs> = {
        [P in keyof T & keyof AggregateModIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModIssue[P]>
      : GetScalarType<T[P], AggregateModIssue[P]>
  }




  export type ModIssueGroupByArgs = {
    where?: ModIssueWhereInput
    orderBy?: Enumerable<ModIssueOrderByWithAggregationInput>
    by: Array<ModIssueScalarFieldEnum>
    having?: ModIssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModIssueCountAggregateInputType | true
    _avg?: ModIssueAvgAggregateInputType
    _sum?: ModIssueSumAggregateInputType
    _min?: ModIssueMinAggregateInputType
    _max?: ModIssueMaxAggregateInputType
  }


  export type ModIssueGroupByOutputType = {
    id: number
    mod_id: number
    name: string
    type: ModIssueType
    author_id: number
    createDate: Date
    _count: ModIssueCountAggregateOutputType | null
    _avg: ModIssueAvgAggregateOutputType | null
    _sum: ModIssueSumAggregateOutputType | null
    _min: ModIssueMinAggregateOutputType | null
    _max: ModIssueMaxAggregateOutputType | null
  }

  type GetModIssueGroupByPayload<T extends ModIssueGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ModIssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModIssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModIssueGroupByOutputType[P]>
            : GetScalarType<T[P], ModIssueGroupByOutputType[P]>
        }
      >
    >


  export type ModIssueSelect = {
    id?: boolean
    mod_id?: boolean
    name?: boolean
    type?: boolean
    author_id?: boolean
    createDate?: boolean
    Mod?: boolean | ModArgs
    Author?: boolean | UserArgs
    ModIssuePost?: boolean | ModIssuePostFindManyArgs
    _count?: boolean | ModIssueCountOutputTypeArgs
  }

  export type ModIssueInclude = {
    Mod?: boolean | ModArgs
    Author?: boolean | UserArgs
    ModIssuePost?: boolean | ModIssuePostFindManyArgs
    _count?: boolean | ModIssueCountOutputTypeArgs
  }

  export type ModIssueGetPayload<
    S extends boolean | null | undefined | ModIssueArgs,
    U = keyof S
      > = S extends true
        ? ModIssue
    : S extends undefined
    ? never
    : S extends ModIssueArgs | ModIssueFindManyArgs
    ?'include' extends U
    ? ModIssue  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Mod' ? ModGetPayload<S['include'][P]> :
        P extends 'Author' ? UserGetPayload<S['include'][P]> :
        P extends 'ModIssuePost' ? Array < ModIssuePostGetPayload<S['include'][P]>>  :
        P extends '_count' ? ModIssueCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Mod' ? ModGetPayload<S['select'][P]> :
        P extends 'Author' ? UserGetPayload<S['select'][P]> :
        P extends 'ModIssuePost' ? Array < ModIssuePostGetPayload<S['select'][P]>>  :
        P extends '_count' ? ModIssueCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ModIssue ? ModIssue[P] : never
  } 
    : ModIssue
  : ModIssue


  type ModIssueCountArgs = Merge<
    Omit<ModIssueFindManyArgs, 'select' | 'include'> & {
      select?: ModIssueCountAggregateInputType | true
    }
  >

  export interface ModIssueDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ModIssue that matches the filter.
     * @param {ModIssueFindUniqueArgs} args - Arguments to find a ModIssue
     * @example
     * // Get one ModIssue
     * const modIssue = await prisma.modIssue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModIssueFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModIssueFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ModIssue'> extends True ? CheckSelect<T, Prisma__ModIssueClient<ModIssue>, Prisma__ModIssueClient<ModIssueGetPayload<T>>> : CheckSelect<T, Prisma__ModIssueClient<ModIssue | null >, Prisma__ModIssueClient<ModIssueGetPayload<T> | null >>

    /**
     * Find the first ModIssue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModIssueFindFirstArgs} args - Arguments to find a ModIssue
     * @example
     * // Get one ModIssue
     * const modIssue = await prisma.modIssue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModIssueFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModIssueFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ModIssue'> extends True ? CheckSelect<T, Prisma__ModIssueClient<ModIssue>, Prisma__ModIssueClient<ModIssueGetPayload<T>>> : CheckSelect<T, Prisma__ModIssueClient<ModIssue | null >, Prisma__ModIssueClient<ModIssueGetPayload<T> | null >>

    /**
     * Find zero or more ModIssues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModIssueFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModIssues
     * const modIssues = await prisma.modIssue.findMany()
     * 
     * // Get first 10 ModIssues
     * const modIssues = await prisma.modIssue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modIssueWithIdOnly = await prisma.modIssue.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModIssueFindManyArgs>(
      args?: SelectSubset<T, ModIssueFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ModIssue>>, PrismaPromise<Array<ModIssueGetPayload<T>>>>

    /**
     * Create a ModIssue.
     * @param {ModIssueCreateArgs} args - Arguments to create a ModIssue.
     * @example
     * // Create one ModIssue
     * const ModIssue = await prisma.modIssue.create({
     *   data: {
     *     // ... data to create a ModIssue
     *   }
     * })
     * 
    **/
    create<T extends ModIssueCreateArgs>(
      args: SelectSubset<T, ModIssueCreateArgs>
    ): CheckSelect<T, Prisma__ModIssueClient<ModIssue>, Prisma__ModIssueClient<ModIssueGetPayload<T>>>

    /**
     * Create many ModIssues.
     *     @param {ModIssueCreateManyArgs} args - Arguments to create many ModIssues.
     *     @example
     *     // Create many ModIssues
     *     const modIssue = await prisma.modIssue.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModIssueCreateManyArgs>(
      args?: SelectSubset<T, ModIssueCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ModIssue.
     * @param {ModIssueDeleteArgs} args - Arguments to delete one ModIssue.
     * @example
     * // Delete one ModIssue
     * const ModIssue = await prisma.modIssue.delete({
     *   where: {
     *     // ... filter to delete one ModIssue
     *   }
     * })
     * 
    **/
    delete<T extends ModIssueDeleteArgs>(
      args: SelectSubset<T, ModIssueDeleteArgs>
    ): CheckSelect<T, Prisma__ModIssueClient<ModIssue>, Prisma__ModIssueClient<ModIssueGetPayload<T>>>

    /**
     * Update one ModIssue.
     * @param {ModIssueUpdateArgs} args - Arguments to update one ModIssue.
     * @example
     * // Update one ModIssue
     * const modIssue = await prisma.modIssue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModIssueUpdateArgs>(
      args: SelectSubset<T, ModIssueUpdateArgs>
    ): CheckSelect<T, Prisma__ModIssueClient<ModIssue>, Prisma__ModIssueClient<ModIssueGetPayload<T>>>

    /**
     * Delete zero or more ModIssues.
     * @param {ModIssueDeleteManyArgs} args - Arguments to filter ModIssues to delete.
     * @example
     * // Delete a few ModIssues
     * const { count } = await prisma.modIssue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModIssueDeleteManyArgs>(
      args?: SelectSubset<T, ModIssueDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModIssues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModIssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModIssues
     * const modIssue = await prisma.modIssue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModIssueUpdateManyArgs>(
      args: SelectSubset<T, ModIssueUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ModIssue.
     * @param {ModIssueUpsertArgs} args - Arguments to update or create a ModIssue.
     * @example
     * // Update or create a ModIssue
     * const modIssue = await prisma.modIssue.upsert({
     *   create: {
     *     // ... data to create a ModIssue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModIssue we want to update
     *   }
     * })
    **/
    upsert<T extends ModIssueUpsertArgs>(
      args: SelectSubset<T, ModIssueUpsertArgs>
    ): CheckSelect<T, Prisma__ModIssueClient<ModIssue>, Prisma__ModIssueClient<ModIssueGetPayload<T>>>

    /**
     * Count the number of ModIssues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModIssueCountArgs} args - Arguments to filter ModIssues to count.
     * @example
     * // Count the number of ModIssues
     * const count = await prisma.modIssue.count({
     *   where: {
     *     // ... the filter for the ModIssues we want to count
     *   }
     * })
    **/
    count<T extends ModIssueCountArgs>(
      args?: Subset<T, ModIssueCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModIssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModIssue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModIssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModIssueAggregateArgs>(args: Subset<T, ModIssueAggregateArgs>): PrismaPromise<GetModIssueAggregateType<T>>

    /**
     * Group by ModIssue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModIssueGroupByArgs} args - Group by arguments.
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
      T extends ModIssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModIssueGroupByArgs['orderBy'] }
        : { orderBy?: ModIssueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModIssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModIssueGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModIssue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModIssueClient<T> implements PrismaPromise<T> {
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

    ModIssuePost<T extends ModIssuePostFindManyArgs = {}>(args?: Subset<T, ModIssuePostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ModIssuePost>>, PrismaPromise<Array<ModIssuePostGetPayload<T>>>>;

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
   * ModIssue findUnique
   */
  export type ModIssueFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ModIssue
     * 
    **/
    select?: ModIssueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModIssueInclude | null
    /**
     * Throw an Error if a ModIssue can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModIssue to fetch.
     * 
    **/
    where: ModIssueWhereUniqueInput
  }


  /**
   * ModIssue findFirst
   */
  export type ModIssueFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ModIssue
     * 
    **/
    select?: ModIssueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModIssueInclude | null
    /**
     * Throw an Error if a ModIssue can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModIssue to fetch.
     * 
    **/
    where?: ModIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModIssues to fetch.
     * 
    **/
    orderBy?: Enumerable<ModIssueOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModIssues.
     * 
    **/
    cursor?: ModIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModIssues from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModIssues.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModIssues.
     * 
    **/
    distinct?: Enumerable<ModIssueScalarFieldEnum>
  }


  /**
   * ModIssue findMany
   */
  export type ModIssueFindManyArgs = {
    /**
     * Select specific fields to fetch from the ModIssue
     * 
    **/
    select?: ModIssueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModIssueInclude | null
    /**
     * Filter, which ModIssues to fetch.
     * 
    **/
    where?: ModIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModIssues to fetch.
     * 
    **/
    orderBy?: Enumerable<ModIssueOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModIssues.
     * 
    **/
    cursor?: ModIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModIssues from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModIssues.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ModIssueScalarFieldEnum>
  }


  /**
   * ModIssue create
   */
  export type ModIssueCreateArgs = {
    /**
     * Select specific fields to fetch from the ModIssue
     * 
    **/
    select?: ModIssueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModIssueInclude | null
    /**
     * The data needed to create a ModIssue.
     * 
    **/
    data: XOR<ModIssueCreateInput, ModIssueUncheckedCreateInput>
  }


  /**
   * ModIssue createMany
   */
  export type ModIssueCreateManyArgs = {
    /**
     * The data used to create many ModIssues.
     * 
    **/
    data: Enumerable<ModIssueCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ModIssue update
   */
  export type ModIssueUpdateArgs = {
    /**
     * Select specific fields to fetch from the ModIssue
     * 
    **/
    select?: ModIssueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModIssueInclude | null
    /**
     * The data needed to update a ModIssue.
     * 
    **/
    data: XOR<ModIssueUpdateInput, ModIssueUncheckedUpdateInput>
    /**
     * Choose, which ModIssue to update.
     * 
    **/
    where: ModIssueWhereUniqueInput
  }


  /**
   * ModIssue updateMany
   */
  export type ModIssueUpdateManyArgs = {
    /**
     * The data used to update ModIssues.
     * 
    **/
    data: XOR<ModIssueUpdateManyMutationInput, ModIssueUncheckedUpdateManyInput>
    /**
     * Filter which ModIssues to update
     * 
    **/
    where?: ModIssueWhereInput
  }


  /**
   * ModIssue upsert
   */
  export type ModIssueUpsertArgs = {
    /**
     * Select specific fields to fetch from the ModIssue
     * 
    **/
    select?: ModIssueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModIssueInclude | null
    /**
     * The filter to search for the ModIssue to update in case it exists.
     * 
    **/
    where: ModIssueWhereUniqueInput
    /**
     * In case the ModIssue found by the `where` argument doesn't exist, create a new ModIssue with this data.
     * 
    **/
    create: XOR<ModIssueCreateInput, ModIssueUncheckedCreateInput>
    /**
     * In case the ModIssue was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ModIssueUpdateInput, ModIssueUncheckedUpdateInput>
  }


  /**
   * ModIssue delete
   */
  export type ModIssueDeleteArgs = {
    /**
     * Select specific fields to fetch from the ModIssue
     * 
    **/
    select?: ModIssueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModIssueInclude | null
    /**
     * Filter which ModIssue to delete.
     * 
    **/
    where: ModIssueWhereUniqueInput
  }


  /**
   * ModIssue deleteMany
   */
  export type ModIssueDeleteManyArgs = {
    /**
     * Filter which ModIssues to delete
     * 
    **/
    where?: ModIssueWhereInput
  }


  /**
   * ModIssue without action
   */
  export type ModIssueArgs = {
    /**
     * Select specific fields to fetch from the ModIssue
     * 
    **/
    select?: ModIssueSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModIssueInclude | null
  }



  /**
   * Model ModIssuePost
   */


  export type AggregateModIssuePost = {
    _count: ModIssuePostCountAggregateOutputType | null
    _avg: ModIssuePostAvgAggregateOutputType | null
    _sum: ModIssuePostSumAggregateOutputType | null
    _min: ModIssuePostMinAggregateOutputType | null
    _max: ModIssuePostMaxAggregateOutputType | null
  }

  export type ModIssuePostAvgAggregateOutputType = {
    id: number | null
    issue_id: number | null
    author_id: number | null
  }

  export type ModIssuePostSumAggregateOutputType = {
    id: number | null
    issue_id: number | null
    author_id: number | null
  }

  export type ModIssuePostMinAggregateOutputType = {
    id: number | null
    issue_id: number | null
    author_id: number | null
    createDate: Date | null
    text: string | null
  }

  export type ModIssuePostMaxAggregateOutputType = {
    id: number | null
    issue_id: number | null
    author_id: number | null
    createDate: Date | null
    text: string | null
  }

  export type ModIssuePostCountAggregateOutputType = {
    id: number
    issue_id: number
    author_id: number
    createDate: number
    text: number
    _all: number
  }


  export type ModIssuePostAvgAggregateInputType = {
    id?: true
    issue_id?: true
    author_id?: true
  }

  export type ModIssuePostSumAggregateInputType = {
    id?: true
    issue_id?: true
    author_id?: true
  }

  export type ModIssuePostMinAggregateInputType = {
    id?: true
    issue_id?: true
    author_id?: true
    createDate?: true
    text?: true
  }

  export type ModIssuePostMaxAggregateInputType = {
    id?: true
    issue_id?: true
    author_id?: true
    createDate?: true
    text?: true
  }

  export type ModIssuePostCountAggregateInputType = {
    id?: true
    issue_id?: true
    author_id?: true
    createDate?: true
    text?: true
    _all?: true
  }

  export type ModIssuePostAggregateArgs = {
    /**
     * Filter which ModIssuePost to aggregate.
     * 
    **/
    where?: ModIssuePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModIssuePosts to fetch.
     * 
    **/
    orderBy?: Enumerable<ModIssuePostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ModIssuePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModIssuePosts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModIssuePosts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModIssuePosts
    **/
    _count?: true | ModIssuePostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModIssuePostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModIssuePostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModIssuePostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModIssuePostMaxAggregateInputType
  }

  export type GetModIssuePostAggregateType<T extends ModIssuePostAggregateArgs> = {
        [P in keyof T & keyof AggregateModIssuePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModIssuePost[P]>
      : GetScalarType<T[P], AggregateModIssuePost[P]>
  }




  export type ModIssuePostGroupByArgs = {
    where?: ModIssuePostWhereInput
    orderBy?: Enumerable<ModIssuePostOrderByWithAggregationInput>
    by: Array<ModIssuePostScalarFieldEnum>
    having?: ModIssuePostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModIssuePostCountAggregateInputType | true
    _avg?: ModIssuePostAvgAggregateInputType
    _sum?: ModIssuePostSumAggregateInputType
    _min?: ModIssuePostMinAggregateInputType
    _max?: ModIssuePostMaxAggregateInputType
  }


  export type ModIssuePostGroupByOutputType = {
    id: number
    issue_id: number
    author_id: number
    createDate: Date
    text: string
    _count: ModIssuePostCountAggregateOutputType | null
    _avg: ModIssuePostAvgAggregateOutputType | null
    _sum: ModIssuePostSumAggregateOutputType | null
    _min: ModIssuePostMinAggregateOutputType | null
    _max: ModIssuePostMaxAggregateOutputType | null
  }

  type GetModIssuePostGroupByPayload<T extends ModIssuePostGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ModIssuePostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModIssuePostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModIssuePostGroupByOutputType[P]>
            : GetScalarType<T[P], ModIssuePostGroupByOutputType[P]>
        }
      >
    >


  export type ModIssuePostSelect = {
    id?: boolean
    issue_id?: boolean
    author_id?: boolean
    createDate?: boolean
    text?: boolean
    Issue?: boolean | ModIssueArgs
    Author?: boolean | UserArgs
  }

  export type ModIssuePostInclude = {
    Issue?: boolean | ModIssueArgs
    Author?: boolean | UserArgs
  }

  export type ModIssuePostGetPayload<
    S extends boolean | null | undefined | ModIssuePostArgs,
    U = keyof S
      > = S extends true
        ? ModIssuePost
    : S extends undefined
    ? never
    : S extends ModIssuePostArgs | ModIssuePostFindManyArgs
    ?'include' extends U
    ? ModIssuePost  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Issue' ? ModIssueGetPayload<S['include'][P]> :
        P extends 'Author' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Issue' ? ModIssueGetPayload<S['select'][P]> :
        P extends 'Author' ? UserGetPayload<S['select'][P]> :  P extends keyof ModIssuePost ? ModIssuePost[P] : never
  } 
    : ModIssuePost
  : ModIssuePost


  type ModIssuePostCountArgs = Merge<
    Omit<ModIssuePostFindManyArgs, 'select' | 'include'> & {
      select?: ModIssuePostCountAggregateInputType | true
    }
  >

  export interface ModIssuePostDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ModIssuePost that matches the filter.
     * @param {ModIssuePostFindUniqueArgs} args - Arguments to find a ModIssuePost
     * @example
     * // Get one ModIssuePost
     * const modIssuePost = await prisma.modIssuePost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModIssuePostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModIssuePostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ModIssuePost'> extends True ? CheckSelect<T, Prisma__ModIssuePostClient<ModIssuePost>, Prisma__ModIssuePostClient<ModIssuePostGetPayload<T>>> : CheckSelect<T, Prisma__ModIssuePostClient<ModIssuePost | null >, Prisma__ModIssuePostClient<ModIssuePostGetPayload<T> | null >>

    /**
     * Find the first ModIssuePost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModIssuePostFindFirstArgs} args - Arguments to find a ModIssuePost
     * @example
     * // Get one ModIssuePost
     * const modIssuePost = await prisma.modIssuePost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModIssuePostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModIssuePostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ModIssuePost'> extends True ? CheckSelect<T, Prisma__ModIssuePostClient<ModIssuePost>, Prisma__ModIssuePostClient<ModIssuePostGetPayload<T>>> : CheckSelect<T, Prisma__ModIssuePostClient<ModIssuePost | null >, Prisma__ModIssuePostClient<ModIssuePostGetPayload<T> | null >>

    /**
     * Find zero or more ModIssuePosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModIssuePostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModIssuePosts
     * const modIssuePosts = await prisma.modIssuePost.findMany()
     * 
     * // Get first 10 ModIssuePosts
     * const modIssuePosts = await prisma.modIssuePost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modIssuePostWithIdOnly = await prisma.modIssuePost.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModIssuePostFindManyArgs>(
      args?: SelectSubset<T, ModIssuePostFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ModIssuePost>>, PrismaPromise<Array<ModIssuePostGetPayload<T>>>>

    /**
     * Create a ModIssuePost.
     * @param {ModIssuePostCreateArgs} args - Arguments to create a ModIssuePost.
     * @example
     * // Create one ModIssuePost
     * const ModIssuePost = await prisma.modIssuePost.create({
     *   data: {
     *     // ... data to create a ModIssuePost
     *   }
     * })
     * 
    **/
    create<T extends ModIssuePostCreateArgs>(
      args: SelectSubset<T, ModIssuePostCreateArgs>
    ): CheckSelect<T, Prisma__ModIssuePostClient<ModIssuePost>, Prisma__ModIssuePostClient<ModIssuePostGetPayload<T>>>

    /**
     * Create many ModIssuePosts.
     *     @param {ModIssuePostCreateManyArgs} args - Arguments to create many ModIssuePosts.
     *     @example
     *     // Create many ModIssuePosts
     *     const modIssuePost = await prisma.modIssuePost.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModIssuePostCreateManyArgs>(
      args?: SelectSubset<T, ModIssuePostCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ModIssuePost.
     * @param {ModIssuePostDeleteArgs} args - Arguments to delete one ModIssuePost.
     * @example
     * // Delete one ModIssuePost
     * const ModIssuePost = await prisma.modIssuePost.delete({
     *   where: {
     *     // ... filter to delete one ModIssuePost
     *   }
     * })
     * 
    **/
    delete<T extends ModIssuePostDeleteArgs>(
      args: SelectSubset<T, ModIssuePostDeleteArgs>
    ): CheckSelect<T, Prisma__ModIssuePostClient<ModIssuePost>, Prisma__ModIssuePostClient<ModIssuePostGetPayload<T>>>

    /**
     * Update one ModIssuePost.
     * @param {ModIssuePostUpdateArgs} args - Arguments to update one ModIssuePost.
     * @example
     * // Update one ModIssuePost
     * const modIssuePost = await prisma.modIssuePost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModIssuePostUpdateArgs>(
      args: SelectSubset<T, ModIssuePostUpdateArgs>
    ): CheckSelect<T, Prisma__ModIssuePostClient<ModIssuePost>, Prisma__ModIssuePostClient<ModIssuePostGetPayload<T>>>

    /**
     * Delete zero or more ModIssuePosts.
     * @param {ModIssuePostDeleteManyArgs} args - Arguments to filter ModIssuePosts to delete.
     * @example
     * // Delete a few ModIssuePosts
     * const { count } = await prisma.modIssuePost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModIssuePostDeleteManyArgs>(
      args?: SelectSubset<T, ModIssuePostDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModIssuePosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModIssuePostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModIssuePosts
     * const modIssuePost = await prisma.modIssuePost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModIssuePostUpdateManyArgs>(
      args: SelectSubset<T, ModIssuePostUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ModIssuePost.
     * @param {ModIssuePostUpsertArgs} args - Arguments to update or create a ModIssuePost.
     * @example
     * // Update or create a ModIssuePost
     * const modIssuePost = await prisma.modIssuePost.upsert({
     *   create: {
     *     // ... data to create a ModIssuePost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModIssuePost we want to update
     *   }
     * })
    **/
    upsert<T extends ModIssuePostUpsertArgs>(
      args: SelectSubset<T, ModIssuePostUpsertArgs>
    ): CheckSelect<T, Prisma__ModIssuePostClient<ModIssuePost>, Prisma__ModIssuePostClient<ModIssuePostGetPayload<T>>>

    /**
     * Count the number of ModIssuePosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModIssuePostCountArgs} args - Arguments to filter ModIssuePosts to count.
     * @example
     * // Count the number of ModIssuePosts
     * const count = await prisma.modIssuePost.count({
     *   where: {
     *     // ... the filter for the ModIssuePosts we want to count
     *   }
     * })
    **/
    count<T extends ModIssuePostCountArgs>(
      args?: Subset<T, ModIssuePostCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModIssuePostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModIssuePost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModIssuePostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModIssuePostAggregateArgs>(args: Subset<T, ModIssuePostAggregateArgs>): PrismaPromise<GetModIssuePostAggregateType<T>>

    /**
     * Group by ModIssuePost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModIssuePostGroupByArgs} args - Group by arguments.
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
      T extends ModIssuePostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModIssuePostGroupByArgs['orderBy'] }
        : { orderBy?: ModIssuePostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModIssuePostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModIssuePostGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModIssuePost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModIssuePostClient<T> implements PrismaPromise<T> {
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

    Issue<T extends ModIssueArgs = {}>(args?: Subset<T, ModIssueArgs>): CheckSelect<T, Prisma__ModIssueClient<ModIssue | null >, Prisma__ModIssueClient<ModIssueGetPayload<T> | null >>;

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
   * ModIssuePost findUnique
   */
  export type ModIssuePostFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ModIssuePost
     * 
    **/
    select?: ModIssuePostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModIssuePostInclude | null
    /**
     * Throw an Error if a ModIssuePost can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModIssuePost to fetch.
     * 
    **/
    where: ModIssuePostWhereUniqueInput
  }


  /**
   * ModIssuePost findFirst
   */
  export type ModIssuePostFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ModIssuePost
     * 
    **/
    select?: ModIssuePostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModIssuePostInclude | null
    /**
     * Throw an Error if a ModIssuePost can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModIssuePost to fetch.
     * 
    **/
    where?: ModIssuePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModIssuePosts to fetch.
     * 
    **/
    orderBy?: Enumerable<ModIssuePostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModIssuePosts.
     * 
    **/
    cursor?: ModIssuePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModIssuePosts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModIssuePosts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModIssuePosts.
     * 
    **/
    distinct?: Enumerable<ModIssuePostScalarFieldEnum>
  }


  /**
   * ModIssuePost findMany
   */
  export type ModIssuePostFindManyArgs = {
    /**
     * Select specific fields to fetch from the ModIssuePost
     * 
    **/
    select?: ModIssuePostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModIssuePostInclude | null
    /**
     * Filter, which ModIssuePosts to fetch.
     * 
    **/
    where?: ModIssuePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModIssuePosts to fetch.
     * 
    **/
    orderBy?: Enumerable<ModIssuePostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModIssuePosts.
     * 
    **/
    cursor?: ModIssuePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModIssuePosts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModIssuePosts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ModIssuePostScalarFieldEnum>
  }


  /**
   * ModIssuePost create
   */
  export type ModIssuePostCreateArgs = {
    /**
     * Select specific fields to fetch from the ModIssuePost
     * 
    **/
    select?: ModIssuePostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModIssuePostInclude | null
    /**
     * The data needed to create a ModIssuePost.
     * 
    **/
    data: XOR<ModIssuePostCreateInput, ModIssuePostUncheckedCreateInput>
  }


  /**
   * ModIssuePost createMany
   */
  export type ModIssuePostCreateManyArgs = {
    /**
     * The data used to create many ModIssuePosts.
     * 
    **/
    data: Enumerable<ModIssuePostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ModIssuePost update
   */
  export type ModIssuePostUpdateArgs = {
    /**
     * Select specific fields to fetch from the ModIssuePost
     * 
    **/
    select?: ModIssuePostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModIssuePostInclude | null
    /**
     * The data needed to update a ModIssuePost.
     * 
    **/
    data: XOR<ModIssuePostUpdateInput, ModIssuePostUncheckedUpdateInput>
    /**
     * Choose, which ModIssuePost to update.
     * 
    **/
    where: ModIssuePostWhereUniqueInput
  }


  /**
   * ModIssuePost updateMany
   */
  export type ModIssuePostUpdateManyArgs = {
    /**
     * The data used to update ModIssuePosts.
     * 
    **/
    data: XOR<ModIssuePostUpdateManyMutationInput, ModIssuePostUncheckedUpdateManyInput>
    /**
     * Filter which ModIssuePosts to update
     * 
    **/
    where?: ModIssuePostWhereInput
  }


  /**
   * ModIssuePost upsert
   */
  export type ModIssuePostUpsertArgs = {
    /**
     * Select specific fields to fetch from the ModIssuePost
     * 
    **/
    select?: ModIssuePostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModIssuePostInclude | null
    /**
     * The filter to search for the ModIssuePost to update in case it exists.
     * 
    **/
    where: ModIssuePostWhereUniqueInput
    /**
     * In case the ModIssuePost found by the `where` argument doesn't exist, create a new ModIssuePost with this data.
     * 
    **/
    create: XOR<ModIssuePostCreateInput, ModIssuePostUncheckedCreateInput>
    /**
     * In case the ModIssuePost was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ModIssuePostUpdateInput, ModIssuePostUncheckedUpdateInput>
  }


  /**
   * ModIssuePost delete
   */
  export type ModIssuePostDeleteArgs = {
    /**
     * Select specific fields to fetch from the ModIssuePost
     * 
    **/
    select?: ModIssuePostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModIssuePostInclude | null
    /**
     * Filter which ModIssuePost to delete.
     * 
    **/
    where: ModIssuePostWhereUniqueInput
  }


  /**
   * ModIssuePost deleteMany
   */
  export type ModIssuePostDeleteManyArgs = {
    /**
     * Filter which ModIssuePosts to delete
     * 
    **/
    where?: ModIssuePostWhereInput
  }


  /**
   * ModIssuePost without action
   */
  export type ModIssuePostArgs = {
    /**
     * Select specific fields to fetch from the ModIssuePost
     * 
    **/
    select?: ModIssuePostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModIssuePostInclude | null
  }



  /**
   * Model ModsList
   */


  export type AggregateModsList = {
    _count: ModsListCountAggregateOutputType | null
    _avg: ModsListAvgAggregateOutputType | null
    _sum: ModsListSumAggregateOutputType | null
    _min: ModsListMinAggregateOutputType | null
    _max: ModsListMaxAggregateOutputType | null
  }

  export type ModsListAvgAggregateOutputType = {
    id: number | null
    author_id: number | null
  }

  export type ModsListSumAggregateOutputType = {
    id: number | null
    author_id: number | null
  }

  export type ModsListMinAggregateOutputType = {
    id: number | null
    author_id: number | null
    is_public: boolean | null
    name: string | null
  }

  export type ModsListMaxAggregateOutputType = {
    id: number | null
    author_id: number | null
    is_public: boolean | null
    name: string | null
  }

  export type ModsListCountAggregateOutputType = {
    id: number
    author_id: number
    is_public: number
    name: number
    _all: number
  }


  export type ModsListAvgAggregateInputType = {
    id?: true
    author_id?: true
  }

  export type ModsListSumAggregateInputType = {
    id?: true
    author_id?: true
  }

  export type ModsListMinAggregateInputType = {
    id?: true
    author_id?: true
    is_public?: true
    name?: true
  }

  export type ModsListMaxAggregateInputType = {
    id?: true
    author_id?: true
    is_public?: true
    name?: true
  }

  export type ModsListCountAggregateInputType = {
    id?: true
    author_id?: true
    is_public?: true
    name?: true
    _all?: true
  }

  export type ModsListAggregateArgs = {
    /**
     * Filter which ModsList to aggregate.
     * 
    **/
    where?: ModsListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModsLists to fetch.
     * 
    **/
    orderBy?: Enumerable<ModsListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ModsListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModsLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModsLists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModsLists
    **/
    _count?: true | ModsListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModsListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModsListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModsListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModsListMaxAggregateInputType
  }

  export type GetModsListAggregateType<T extends ModsListAggregateArgs> = {
        [P in keyof T & keyof AggregateModsList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModsList[P]>
      : GetScalarType<T[P], AggregateModsList[P]>
  }




  export type ModsListGroupByArgs = {
    where?: ModsListWhereInput
    orderBy?: Enumerable<ModsListOrderByWithAggregationInput>
    by: Array<ModsListScalarFieldEnum>
    having?: ModsListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModsListCountAggregateInputType | true
    _avg?: ModsListAvgAggregateInputType
    _sum?: ModsListSumAggregateInputType
    _min?: ModsListMinAggregateInputType
    _max?: ModsListMaxAggregateInputType
  }


  export type ModsListGroupByOutputType = {
    id: number
    author_id: number
    is_public: boolean
    name: string
    _count: ModsListCountAggregateOutputType | null
    _avg: ModsListAvgAggregateOutputType | null
    _sum: ModsListSumAggregateOutputType | null
    _min: ModsListMinAggregateOutputType | null
    _max: ModsListMaxAggregateOutputType | null
  }

  type GetModsListGroupByPayload<T extends ModsListGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ModsListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModsListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModsListGroupByOutputType[P]>
            : GetScalarType<T[P], ModsListGroupByOutputType[P]>
        }
      >
    >


  export type ModsListSelect = {
    id?: boolean
    author_id?: boolean
    is_public?: boolean
    name?: boolean
    Author?: boolean | UserArgs
    Mods?: boolean | ModFindManyArgs
    _count?: boolean | ModsListCountOutputTypeArgs
  }

  export type ModsListInclude = {
    Author?: boolean | UserArgs
    Mods?: boolean | ModFindManyArgs
    _count?: boolean | ModsListCountOutputTypeArgs
  }

  export type ModsListGetPayload<
    S extends boolean | null | undefined | ModsListArgs,
    U = keyof S
      > = S extends true
        ? ModsList
    : S extends undefined
    ? never
    : S extends ModsListArgs | ModsListFindManyArgs
    ?'include' extends U
    ? ModsList  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Author' ? UserGetPayload<S['include'][P]> :
        P extends 'Mods' ? Array < ModGetPayload<S['include'][P]>>  :
        P extends '_count' ? ModsListCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Author' ? UserGetPayload<S['select'][P]> :
        P extends 'Mods' ? Array < ModGetPayload<S['select'][P]>>  :
        P extends '_count' ? ModsListCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ModsList ? ModsList[P] : never
  } 
    : ModsList
  : ModsList


  type ModsListCountArgs = Merge<
    Omit<ModsListFindManyArgs, 'select' | 'include'> & {
      select?: ModsListCountAggregateInputType | true
    }
  >

  export interface ModsListDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ModsList that matches the filter.
     * @param {ModsListFindUniqueArgs} args - Arguments to find a ModsList
     * @example
     * // Get one ModsList
     * const modsList = await prisma.modsList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModsListFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModsListFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ModsList'> extends True ? CheckSelect<T, Prisma__ModsListClient<ModsList>, Prisma__ModsListClient<ModsListGetPayload<T>>> : CheckSelect<T, Prisma__ModsListClient<ModsList | null >, Prisma__ModsListClient<ModsListGetPayload<T> | null >>

    /**
     * Find the first ModsList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsListFindFirstArgs} args - Arguments to find a ModsList
     * @example
     * // Get one ModsList
     * const modsList = await prisma.modsList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModsListFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModsListFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ModsList'> extends True ? CheckSelect<T, Prisma__ModsListClient<ModsList>, Prisma__ModsListClient<ModsListGetPayload<T>>> : CheckSelect<T, Prisma__ModsListClient<ModsList | null >, Prisma__ModsListClient<ModsListGetPayload<T> | null >>

    /**
     * Find zero or more ModsLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModsLists
     * const modsLists = await prisma.modsList.findMany()
     * 
     * // Get first 10 ModsLists
     * const modsLists = await prisma.modsList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modsListWithIdOnly = await prisma.modsList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModsListFindManyArgs>(
      args?: SelectSubset<T, ModsListFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ModsList>>, PrismaPromise<Array<ModsListGetPayload<T>>>>

    /**
     * Create a ModsList.
     * @param {ModsListCreateArgs} args - Arguments to create a ModsList.
     * @example
     * // Create one ModsList
     * const ModsList = await prisma.modsList.create({
     *   data: {
     *     // ... data to create a ModsList
     *   }
     * })
     * 
    **/
    create<T extends ModsListCreateArgs>(
      args: SelectSubset<T, ModsListCreateArgs>
    ): CheckSelect<T, Prisma__ModsListClient<ModsList>, Prisma__ModsListClient<ModsListGetPayload<T>>>

    /**
     * Create many ModsLists.
     *     @param {ModsListCreateManyArgs} args - Arguments to create many ModsLists.
     *     @example
     *     // Create many ModsLists
     *     const modsList = await prisma.modsList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModsListCreateManyArgs>(
      args?: SelectSubset<T, ModsListCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ModsList.
     * @param {ModsListDeleteArgs} args - Arguments to delete one ModsList.
     * @example
     * // Delete one ModsList
     * const ModsList = await prisma.modsList.delete({
     *   where: {
     *     // ... filter to delete one ModsList
     *   }
     * })
     * 
    **/
    delete<T extends ModsListDeleteArgs>(
      args: SelectSubset<T, ModsListDeleteArgs>
    ): CheckSelect<T, Prisma__ModsListClient<ModsList>, Prisma__ModsListClient<ModsListGetPayload<T>>>

    /**
     * Update one ModsList.
     * @param {ModsListUpdateArgs} args - Arguments to update one ModsList.
     * @example
     * // Update one ModsList
     * const modsList = await prisma.modsList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModsListUpdateArgs>(
      args: SelectSubset<T, ModsListUpdateArgs>
    ): CheckSelect<T, Prisma__ModsListClient<ModsList>, Prisma__ModsListClient<ModsListGetPayload<T>>>

    /**
     * Delete zero or more ModsLists.
     * @param {ModsListDeleteManyArgs} args - Arguments to filter ModsLists to delete.
     * @example
     * // Delete a few ModsLists
     * const { count } = await prisma.modsList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModsListDeleteManyArgs>(
      args?: SelectSubset<T, ModsListDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModsLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModsLists
     * const modsList = await prisma.modsList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModsListUpdateManyArgs>(
      args: SelectSubset<T, ModsListUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ModsList.
     * @param {ModsListUpsertArgs} args - Arguments to update or create a ModsList.
     * @example
     * // Update or create a ModsList
     * const modsList = await prisma.modsList.upsert({
     *   create: {
     *     // ... data to create a ModsList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModsList we want to update
     *   }
     * })
    **/
    upsert<T extends ModsListUpsertArgs>(
      args: SelectSubset<T, ModsListUpsertArgs>
    ): CheckSelect<T, Prisma__ModsListClient<ModsList>, Prisma__ModsListClient<ModsListGetPayload<T>>>

    /**
     * Count the number of ModsLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsListCountArgs} args - Arguments to filter ModsLists to count.
     * @example
     * // Count the number of ModsLists
     * const count = await prisma.modsList.count({
     *   where: {
     *     // ... the filter for the ModsLists we want to count
     *   }
     * })
    **/
    count<T extends ModsListCountArgs>(
      args?: Subset<T, ModsListCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModsListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModsList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModsListAggregateArgs>(args: Subset<T, ModsListAggregateArgs>): PrismaPromise<GetModsListAggregateType<T>>

    /**
     * Group by ModsList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsListGroupByArgs} args - Group by arguments.
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
      T extends ModsListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModsListGroupByArgs['orderBy'] }
        : { orderBy?: ModsListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModsListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModsListGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModsList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModsListClient<T> implements PrismaPromise<T> {
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
   * ModsList findUnique
   */
  export type ModsListFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ModsList
     * 
    **/
    select?: ModsListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsListInclude | null
    /**
     * Throw an Error if a ModsList can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModsList to fetch.
     * 
    **/
    where: ModsListWhereUniqueInput
  }


  /**
   * ModsList findFirst
   */
  export type ModsListFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ModsList
     * 
    **/
    select?: ModsListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsListInclude | null
    /**
     * Throw an Error if a ModsList can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModsList to fetch.
     * 
    **/
    where?: ModsListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModsLists to fetch.
     * 
    **/
    orderBy?: Enumerable<ModsListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModsLists.
     * 
    **/
    cursor?: ModsListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModsLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModsLists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModsLists.
     * 
    **/
    distinct?: Enumerable<ModsListScalarFieldEnum>
  }


  /**
   * ModsList findMany
   */
  export type ModsListFindManyArgs = {
    /**
     * Select specific fields to fetch from the ModsList
     * 
    **/
    select?: ModsListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsListInclude | null
    /**
     * Filter, which ModsLists to fetch.
     * 
    **/
    where?: ModsListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModsLists to fetch.
     * 
    **/
    orderBy?: Enumerable<ModsListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModsLists.
     * 
    **/
    cursor?: ModsListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModsLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModsLists.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ModsListScalarFieldEnum>
  }


  /**
   * ModsList create
   */
  export type ModsListCreateArgs = {
    /**
     * Select specific fields to fetch from the ModsList
     * 
    **/
    select?: ModsListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsListInclude | null
    /**
     * The data needed to create a ModsList.
     * 
    **/
    data: XOR<ModsListCreateInput, ModsListUncheckedCreateInput>
  }


  /**
   * ModsList createMany
   */
  export type ModsListCreateManyArgs = {
    /**
     * The data used to create many ModsLists.
     * 
    **/
    data: Enumerable<ModsListCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ModsList update
   */
  export type ModsListUpdateArgs = {
    /**
     * Select specific fields to fetch from the ModsList
     * 
    **/
    select?: ModsListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsListInclude | null
    /**
     * The data needed to update a ModsList.
     * 
    **/
    data: XOR<ModsListUpdateInput, ModsListUncheckedUpdateInput>
    /**
     * Choose, which ModsList to update.
     * 
    **/
    where: ModsListWhereUniqueInput
  }


  /**
   * ModsList updateMany
   */
  export type ModsListUpdateManyArgs = {
    /**
     * The data used to update ModsLists.
     * 
    **/
    data: XOR<ModsListUpdateManyMutationInput, ModsListUncheckedUpdateManyInput>
    /**
     * Filter which ModsLists to update
     * 
    **/
    where?: ModsListWhereInput
  }


  /**
   * ModsList upsert
   */
  export type ModsListUpsertArgs = {
    /**
     * Select specific fields to fetch from the ModsList
     * 
    **/
    select?: ModsListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsListInclude | null
    /**
     * The filter to search for the ModsList to update in case it exists.
     * 
    **/
    where: ModsListWhereUniqueInput
    /**
     * In case the ModsList found by the `where` argument doesn't exist, create a new ModsList with this data.
     * 
    **/
    create: XOR<ModsListCreateInput, ModsListUncheckedCreateInput>
    /**
     * In case the ModsList was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ModsListUpdateInput, ModsListUncheckedUpdateInput>
  }


  /**
   * ModsList delete
   */
  export type ModsListDeleteArgs = {
    /**
     * Select specific fields to fetch from the ModsList
     * 
    **/
    select?: ModsListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsListInclude | null
    /**
     * Filter which ModsList to delete.
     * 
    **/
    where: ModsListWhereUniqueInput
  }


  /**
   * ModsList deleteMany
   */
  export type ModsListDeleteManyArgs = {
    /**
     * Filter which ModsLists to delete
     * 
    **/
    where?: ModsListWhereInput
  }


  /**
   * ModsList without action
   */
  export type ModsListArgs = {
    /**
     * Select specific fields to fetch from the ModsList
     * 
    **/
    select?: ModsListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsListInclude | null
  }



  /**
   * Model ModsFavorits
   */


  export type AggregateModsFavorits = {
    _count: ModsFavoritsCountAggregateOutputType | null
    _avg: ModsFavoritsAvgAggregateOutputType | null
    _sum: ModsFavoritsSumAggregateOutputType | null
    _min: ModsFavoritsMinAggregateOutputType | null
    _max: ModsFavoritsMaxAggregateOutputType | null
  }

  export type ModsFavoritsAvgAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
  }

  export type ModsFavoritsSumAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
  }

  export type ModsFavoritsMinAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
  }

  export type ModsFavoritsMaxAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
  }

  export type ModsFavoritsCountAggregateOutputType = {
    user_id: number
    mod_id: number
    _all: number
  }


  export type ModsFavoritsAvgAggregateInputType = {
    user_id?: true
    mod_id?: true
  }

  export type ModsFavoritsSumAggregateInputType = {
    user_id?: true
    mod_id?: true
  }

  export type ModsFavoritsMinAggregateInputType = {
    user_id?: true
    mod_id?: true
  }

  export type ModsFavoritsMaxAggregateInputType = {
    user_id?: true
    mod_id?: true
  }

  export type ModsFavoritsCountAggregateInputType = {
    user_id?: true
    mod_id?: true
    _all?: true
  }

  export type ModsFavoritsAggregateArgs = {
    /**
     * Filter which ModsFavorits to aggregate.
     * 
    **/
    where?: ModsFavoritsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModsFavorits to fetch.
     * 
    **/
    orderBy?: Enumerable<ModsFavoritsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ModsFavoritsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModsFavorits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModsFavorits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModsFavorits
    **/
    _count?: true | ModsFavoritsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModsFavoritsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModsFavoritsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModsFavoritsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModsFavoritsMaxAggregateInputType
  }

  export type GetModsFavoritsAggregateType<T extends ModsFavoritsAggregateArgs> = {
        [P in keyof T & keyof AggregateModsFavorits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModsFavorits[P]>
      : GetScalarType<T[P], AggregateModsFavorits[P]>
  }




  export type ModsFavoritsGroupByArgs = {
    where?: ModsFavoritsWhereInput
    orderBy?: Enumerable<ModsFavoritsOrderByWithAggregationInput>
    by: Array<ModsFavoritsScalarFieldEnum>
    having?: ModsFavoritsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModsFavoritsCountAggregateInputType | true
    _avg?: ModsFavoritsAvgAggregateInputType
    _sum?: ModsFavoritsSumAggregateInputType
    _min?: ModsFavoritsMinAggregateInputType
    _max?: ModsFavoritsMaxAggregateInputType
  }


  export type ModsFavoritsGroupByOutputType = {
    user_id: number
    mod_id: number
    _count: ModsFavoritsCountAggregateOutputType | null
    _avg: ModsFavoritsAvgAggregateOutputType | null
    _sum: ModsFavoritsSumAggregateOutputType | null
    _min: ModsFavoritsMinAggregateOutputType | null
    _max: ModsFavoritsMaxAggregateOutputType | null
  }

  type GetModsFavoritsGroupByPayload<T extends ModsFavoritsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ModsFavoritsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModsFavoritsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModsFavoritsGroupByOutputType[P]>
            : GetScalarType<T[P], ModsFavoritsGroupByOutputType[P]>
        }
      >
    >


  export type ModsFavoritsSelect = {
    user_id?: boolean
    mod_id?: boolean
    User?: boolean | UserArgs
    Mod?: boolean | ModArgs
  }

  export type ModsFavoritsInclude = {
    User?: boolean | UserArgs
    Mod?: boolean | ModArgs
  }

  export type ModsFavoritsGetPayload<
    S extends boolean | null | undefined | ModsFavoritsArgs,
    U = keyof S
      > = S extends true
        ? ModsFavorits
    : S extends undefined
    ? never
    : S extends ModsFavoritsArgs | ModsFavoritsFindManyArgs
    ?'include' extends U
    ? ModsFavorits  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'Mod' ? ModGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'Mod' ? ModGetPayload<S['select'][P]> :  P extends keyof ModsFavorits ? ModsFavorits[P] : never
  } 
    : ModsFavorits
  : ModsFavorits


  type ModsFavoritsCountArgs = Merge<
    Omit<ModsFavoritsFindManyArgs, 'select' | 'include'> & {
      select?: ModsFavoritsCountAggregateInputType | true
    }
  >

  export interface ModsFavoritsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ModsFavorits that matches the filter.
     * @param {ModsFavoritsFindUniqueArgs} args - Arguments to find a ModsFavorits
     * @example
     * // Get one ModsFavorits
     * const modsFavorits = await prisma.modsFavorits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModsFavoritsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModsFavoritsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ModsFavorits'> extends True ? CheckSelect<T, Prisma__ModsFavoritsClient<ModsFavorits>, Prisma__ModsFavoritsClient<ModsFavoritsGetPayload<T>>> : CheckSelect<T, Prisma__ModsFavoritsClient<ModsFavorits | null >, Prisma__ModsFavoritsClient<ModsFavoritsGetPayload<T> | null >>

    /**
     * Find the first ModsFavorits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsFavoritsFindFirstArgs} args - Arguments to find a ModsFavorits
     * @example
     * // Get one ModsFavorits
     * const modsFavorits = await prisma.modsFavorits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModsFavoritsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModsFavoritsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ModsFavorits'> extends True ? CheckSelect<T, Prisma__ModsFavoritsClient<ModsFavorits>, Prisma__ModsFavoritsClient<ModsFavoritsGetPayload<T>>> : CheckSelect<T, Prisma__ModsFavoritsClient<ModsFavorits | null >, Prisma__ModsFavoritsClient<ModsFavoritsGetPayload<T> | null >>

    /**
     * Find zero or more ModsFavorits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsFavoritsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModsFavorits
     * const modsFavorits = await prisma.modsFavorits.findMany()
     * 
     * // Get first 10 ModsFavorits
     * const modsFavorits = await prisma.modsFavorits.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const modsFavoritsWithUser_idOnly = await prisma.modsFavorits.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends ModsFavoritsFindManyArgs>(
      args?: SelectSubset<T, ModsFavoritsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ModsFavorits>>, PrismaPromise<Array<ModsFavoritsGetPayload<T>>>>

    /**
     * Create a ModsFavorits.
     * @param {ModsFavoritsCreateArgs} args - Arguments to create a ModsFavorits.
     * @example
     * // Create one ModsFavorits
     * const ModsFavorits = await prisma.modsFavorits.create({
     *   data: {
     *     // ... data to create a ModsFavorits
     *   }
     * })
     * 
    **/
    create<T extends ModsFavoritsCreateArgs>(
      args: SelectSubset<T, ModsFavoritsCreateArgs>
    ): CheckSelect<T, Prisma__ModsFavoritsClient<ModsFavorits>, Prisma__ModsFavoritsClient<ModsFavoritsGetPayload<T>>>

    /**
     * Create many ModsFavorits.
     *     @param {ModsFavoritsCreateManyArgs} args - Arguments to create many ModsFavorits.
     *     @example
     *     // Create many ModsFavorits
     *     const modsFavorits = await prisma.modsFavorits.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModsFavoritsCreateManyArgs>(
      args?: SelectSubset<T, ModsFavoritsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ModsFavorits.
     * @param {ModsFavoritsDeleteArgs} args - Arguments to delete one ModsFavorits.
     * @example
     * // Delete one ModsFavorits
     * const ModsFavorits = await prisma.modsFavorits.delete({
     *   where: {
     *     // ... filter to delete one ModsFavorits
     *   }
     * })
     * 
    **/
    delete<T extends ModsFavoritsDeleteArgs>(
      args: SelectSubset<T, ModsFavoritsDeleteArgs>
    ): CheckSelect<T, Prisma__ModsFavoritsClient<ModsFavorits>, Prisma__ModsFavoritsClient<ModsFavoritsGetPayload<T>>>

    /**
     * Update one ModsFavorits.
     * @param {ModsFavoritsUpdateArgs} args - Arguments to update one ModsFavorits.
     * @example
     * // Update one ModsFavorits
     * const modsFavorits = await prisma.modsFavorits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModsFavoritsUpdateArgs>(
      args: SelectSubset<T, ModsFavoritsUpdateArgs>
    ): CheckSelect<T, Prisma__ModsFavoritsClient<ModsFavorits>, Prisma__ModsFavoritsClient<ModsFavoritsGetPayload<T>>>

    /**
     * Delete zero or more ModsFavorits.
     * @param {ModsFavoritsDeleteManyArgs} args - Arguments to filter ModsFavorits to delete.
     * @example
     * // Delete a few ModsFavorits
     * const { count } = await prisma.modsFavorits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModsFavoritsDeleteManyArgs>(
      args?: SelectSubset<T, ModsFavoritsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModsFavorits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsFavoritsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModsFavorits
     * const modsFavorits = await prisma.modsFavorits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModsFavoritsUpdateManyArgs>(
      args: SelectSubset<T, ModsFavoritsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ModsFavorits.
     * @param {ModsFavoritsUpsertArgs} args - Arguments to update or create a ModsFavorits.
     * @example
     * // Update or create a ModsFavorits
     * const modsFavorits = await prisma.modsFavorits.upsert({
     *   create: {
     *     // ... data to create a ModsFavorits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModsFavorits we want to update
     *   }
     * })
    **/
    upsert<T extends ModsFavoritsUpsertArgs>(
      args: SelectSubset<T, ModsFavoritsUpsertArgs>
    ): CheckSelect<T, Prisma__ModsFavoritsClient<ModsFavorits>, Prisma__ModsFavoritsClient<ModsFavoritsGetPayload<T>>>

    /**
     * Count the number of ModsFavorits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsFavoritsCountArgs} args - Arguments to filter ModsFavorits to count.
     * @example
     * // Count the number of ModsFavorits
     * const count = await prisma.modsFavorits.count({
     *   where: {
     *     // ... the filter for the ModsFavorits we want to count
     *   }
     * })
    **/
    count<T extends ModsFavoritsCountArgs>(
      args?: Subset<T, ModsFavoritsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModsFavoritsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModsFavorits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsFavoritsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModsFavoritsAggregateArgs>(args: Subset<T, ModsFavoritsAggregateArgs>): PrismaPromise<GetModsFavoritsAggregateType<T>>

    /**
     * Group by ModsFavorits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModsFavoritsGroupByArgs} args - Group by arguments.
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
      T extends ModsFavoritsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModsFavoritsGroupByArgs['orderBy'] }
        : { orderBy?: ModsFavoritsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModsFavoritsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModsFavoritsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModsFavorits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModsFavoritsClient<T> implements PrismaPromise<T> {
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
   * ModsFavorits findUnique
   */
  export type ModsFavoritsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ModsFavorits
     * 
    **/
    select?: ModsFavoritsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsFavoritsInclude | null
    /**
     * Throw an Error if a ModsFavorits can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModsFavorits to fetch.
     * 
    **/
    where: ModsFavoritsWhereUniqueInput
  }


  /**
   * ModsFavorits findFirst
   */
  export type ModsFavoritsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ModsFavorits
     * 
    **/
    select?: ModsFavoritsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsFavoritsInclude | null
    /**
     * Throw an Error if a ModsFavorits can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModsFavorits to fetch.
     * 
    **/
    where?: ModsFavoritsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModsFavorits to fetch.
     * 
    **/
    orderBy?: Enumerable<ModsFavoritsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModsFavorits.
     * 
    **/
    cursor?: ModsFavoritsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModsFavorits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModsFavorits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModsFavorits.
     * 
    **/
    distinct?: Enumerable<ModsFavoritsScalarFieldEnum>
  }


  /**
   * ModsFavorits findMany
   */
  export type ModsFavoritsFindManyArgs = {
    /**
     * Select specific fields to fetch from the ModsFavorits
     * 
    **/
    select?: ModsFavoritsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsFavoritsInclude | null
    /**
     * Filter, which ModsFavorits to fetch.
     * 
    **/
    where?: ModsFavoritsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModsFavorits to fetch.
     * 
    **/
    orderBy?: Enumerable<ModsFavoritsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModsFavorits.
     * 
    **/
    cursor?: ModsFavoritsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModsFavorits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModsFavorits.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ModsFavoritsScalarFieldEnum>
  }


  /**
   * ModsFavorits create
   */
  export type ModsFavoritsCreateArgs = {
    /**
     * Select specific fields to fetch from the ModsFavorits
     * 
    **/
    select?: ModsFavoritsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsFavoritsInclude | null
    /**
     * The data needed to create a ModsFavorits.
     * 
    **/
    data: XOR<ModsFavoritsCreateInput, ModsFavoritsUncheckedCreateInput>
  }


  /**
   * ModsFavorits createMany
   */
  export type ModsFavoritsCreateManyArgs = {
    /**
     * The data used to create many ModsFavorits.
     * 
    **/
    data: Enumerable<ModsFavoritsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ModsFavorits update
   */
  export type ModsFavoritsUpdateArgs = {
    /**
     * Select specific fields to fetch from the ModsFavorits
     * 
    **/
    select?: ModsFavoritsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsFavoritsInclude | null
    /**
     * The data needed to update a ModsFavorits.
     * 
    **/
    data: XOR<ModsFavoritsUpdateInput, ModsFavoritsUncheckedUpdateInput>
    /**
     * Choose, which ModsFavorits to update.
     * 
    **/
    where: ModsFavoritsWhereUniqueInput
  }


  /**
   * ModsFavorits updateMany
   */
  export type ModsFavoritsUpdateManyArgs = {
    /**
     * The data used to update ModsFavorits.
     * 
    **/
    data: XOR<ModsFavoritsUpdateManyMutationInput, ModsFavoritsUncheckedUpdateManyInput>
    /**
     * Filter which ModsFavorits to update
     * 
    **/
    where?: ModsFavoritsWhereInput
  }


  /**
   * ModsFavorits upsert
   */
  export type ModsFavoritsUpsertArgs = {
    /**
     * Select specific fields to fetch from the ModsFavorits
     * 
    **/
    select?: ModsFavoritsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsFavoritsInclude | null
    /**
     * The filter to search for the ModsFavorits to update in case it exists.
     * 
    **/
    where: ModsFavoritsWhereUniqueInput
    /**
     * In case the ModsFavorits found by the `where` argument doesn't exist, create a new ModsFavorits with this data.
     * 
    **/
    create: XOR<ModsFavoritsCreateInput, ModsFavoritsUncheckedCreateInput>
    /**
     * In case the ModsFavorits was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ModsFavoritsUpdateInput, ModsFavoritsUncheckedUpdateInput>
  }


  /**
   * ModsFavorits delete
   */
  export type ModsFavoritsDeleteArgs = {
    /**
     * Select specific fields to fetch from the ModsFavorits
     * 
    **/
    select?: ModsFavoritsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsFavoritsInclude | null
    /**
     * Filter which ModsFavorits to delete.
     * 
    **/
    where: ModsFavoritsWhereUniqueInput
  }


  /**
   * ModsFavorits deleteMany
   */
  export type ModsFavoritsDeleteManyArgs = {
    /**
     * Filter which ModsFavorits to delete
     * 
    **/
    where?: ModsFavoritsWhereInput
  }


  /**
   * ModsFavorits without action
   */
  export type ModsFavoritsArgs = {
    /**
     * Select specific fields to fetch from the ModsFavorits
     * 
    **/
    select?: ModsFavoritsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModsFavoritsInclude | null
  }



  /**
   * Model ModSubscribers
   */


  export type AggregateModSubscribers = {
    _count: ModSubscribersCountAggregateOutputType | null
    _avg: ModSubscribersAvgAggregateOutputType | null
    _sum: ModSubscribersSumAggregateOutputType | null
    _min: ModSubscribersMinAggregateOutputType | null
    _max: ModSubscribersMaxAggregateOutputType | null
  }

  export type ModSubscribersAvgAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
  }

  export type ModSubscribersSumAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
  }

  export type ModSubscribersMinAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
  }

  export type ModSubscribersMaxAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
  }

  export type ModSubscribersCountAggregateOutputType = {
    user_id: number
    mod_id: number
    _all: number
  }


  export type ModSubscribersAvgAggregateInputType = {
    user_id?: true
    mod_id?: true
  }

  export type ModSubscribersSumAggregateInputType = {
    user_id?: true
    mod_id?: true
  }

  export type ModSubscribersMinAggregateInputType = {
    user_id?: true
    mod_id?: true
  }

  export type ModSubscribersMaxAggregateInputType = {
    user_id?: true
    mod_id?: true
  }

  export type ModSubscribersCountAggregateInputType = {
    user_id?: true
    mod_id?: true
    _all?: true
  }

  export type ModSubscribersAggregateArgs = {
    /**
     * Filter which ModSubscribers to aggregate.
     * 
    **/
    where?: ModSubscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModSubscribers to fetch.
     * 
    **/
    orderBy?: Enumerable<ModSubscribersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ModSubscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModSubscribers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModSubscribers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModSubscribers
    **/
    _count?: true | ModSubscribersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModSubscribersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModSubscribersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModSubscribersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModSubscribersMaxAggregateInputType
  }

  export type GetModSubscribersAggregateType<T extends ModSubscribersAggregateArgs> = {
        [P in keyof T & keyof AggregateModSubscribers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModSubscribers[P]>
      : GetScalarType<T[P], AggregateModSubscribers[P]>
  }




  export type ModSubscribersGroupByArgs = {
    where?: ModSubscribersWhereInput
    orderBy?: Enumerable<ModSubscribersOrderByWithAggregationInput>
    by: Array<ModSubscribersScalarFieldEnum>
    having?: ModSubscribersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModSubscribersCountAggregateInputType | true
    _avg?: ModSubscribersAvgAggregateInputType
    _sum?: ModSubscribersSumAggregateInputType
    _min?: ModSubscribersMinAggregateInputType
    _max?: ModSubscribersMaxAggregateInputType
  }


  export type ModSubscribersGroupByOutputType = {
    user_id: number
    mod_id: number
    _count: ModSubscribersCountAggregateOutputType | null
    _avg: ModSubscribersAvgAggregateOutputType | null
    _sum: ModSubscribersSumAggregateOutputType | null
    _min: ModSubscribersMinAggregateOutputType | null
    _max: ModSubscribersMaxAggregateOutputType | null
  }

  type GetModSubscribersGroupByPayload<T extends ModSubscribersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ModSubscribersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModSubscribersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModSubscribersGroupByOutputType[P]>
            : GetScalarType<T[P], ModSubscribersGroupByOutputType[P]>
        }
      >
    >


  export type ModSubscribersSelect = {
    user_id?: boolean
    mod_id?: boolean
    User?: boolean | UserArgs
    Mod?: boolean | ModArgs
  }

  export type ModSubscribersInclude = {
    User?: boolean | UserArgs
    Mod?: boolean | ModArgs
  }

  export type ModSubscribersGetPayload<
    S extends boolean | null | undefined | ModSubscribersArgs,
    U = keyof S
      > = S extends true
        ? ModSubscribers
    : S extends undefined
    ? never
    : S extends ModSubscribersArgs | ModSubscribersFindManyArgs
    ?'include' extends U
    ? ModSubscribers  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'Mod' ? ModGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'Mod' ? ModGetPayload<S['select'][P]> :  P extends keyof ModSubscribers ? ModSubscribers[P] : never
  } 
    : ModSubscribers
  : ModSubscribers


  type ModSubscribersCountArgs = Merge<
    Omit<ModSubscribersFindManyArgs, 'select' | 'include'> & {
      select?: ModSubscribersCountAggregateInputType | true
    }
  >

  export interface ModSubscribersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ModSubscribers that matches the filter.
     * @param {ModSubscribersFindUniqueArgs} args - Arguments to find a ModSubscribers
     * @example
     * // Get one ModSubscribers
     * const modSubscribers = await prisma.modSubscribers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModSubscribersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModSubscribersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ModSubscribers'> extends True ? CheckSelect<T, Prisma__ModSubscribersClient<ModSubscribers>, Prisma__ModSubscribersClient<ModSubscribersGetPayload<T>>> : CheckSelect<T, Prisma__ModSubscribersClient<ModSubscribers | null >, Prisma__ModSubscribersClient<ModSubscribersGetPayload<T> | null >>

    /**
     * Find the first ModSubscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModSubscribersFindFirstArgs} args - Arguments to find a ModSubscribers
     * @example
     * // Get one ModSubscribers
     * const modSubscribers = await prisma.modSubscribers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModSubscribersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModSubscribersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ModSubscribers'> extends True ? CheckSelect<T, Prisma__ModSubscribersClient<ModSubscribers>, Prisma__ModSubscribersClient<ModSubscribersGetPayload<T>>> : CheckSelect<T, Prisma__ModSubscribersClient<ModSubscribers | null >, Prisma__ModSubscribersClient<ModSubscribersGetPayload<T> | null >>

    /**
     * Find zero or more ModSubscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModSubscribersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModSubscribers
     * const modSubscribers = await prisma.modSubscribers.findMany()
     * 
     * // Get first 10 ModSubscribers
     * const modSubscribers = await prisma.modSubscribers.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const modSubscribersWithUser_idOnly = await prisma.modSubscribers.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends ModSubscribersFindManyArgs>(
      args?: SelectSubset<T, ModSubscribersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ModSubscribers>>, PrismaPromise<Array<ModSubscribersGetPayload<T>>>>

    /**
     * Create a ModSubscribers.
     * @param {ModSubscribersCreateArgs} args - Arguments to create a ModSubscribers.
     * @example
     * // Create one ModSubscribers
     * const ModSubscribers = await prisma.modSubscribers.create({
     *   data: {
     *     // ... data to create a ModSubscribers
     *   }
     * })
     * 
    **/
    create<T extends ModSubscribersCreateArgs>(
      args: SelectSubset<T, ModSubscribersCreateArgs>
    ): CheckSelect<T, Prisma__ModSubscribersClient<ModSubscribers>, Prisma__ModSubscribersClient<ModSubscribersGetPayload<T>>>

    /**
     * Create many ModSubscribers.
     *     @param {ModSubscribersCreateManyArgs} args - Arguments to create many ModSubscribers.
     *     @example
     *     // Create many ModSubscribers
     *     const modSubscribers = await prisma.modSubscribers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModSubscribersCreateManyArgs>(
      args?: SelectSubset<T, ModSubscribersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ModSubscribers.
     * @param {ModSubscribersDeleteArgs} args - Arguments to delete one ModSubscribers.
     * @example
     * // Delete one ModSubscribers
     * const ModSubscribers = await prisma.modSubscribers.delete({
     *   where: {
     *     // ... filter to delete one ModSubscribers
     *   }
     * })
     * 
    **/
    delete<T extends ModSubscribersDeleteArgs>(
      args: SelectSubset<T, ModSubscribersDeleteArgs>
    ): CheckSelect<T, Prisma__ModSubscribersClient<ModSubscribers>, Prisma__ModSubscribersClient<ModSubscribersGetPayload<T>>>

    /**
     * Update one ModSubscribers.
     * @param {ModSubscribersUpdateArgs} args - Arguments to update one ModSubscribers.
     * @example
     * // Update one ModSubscribers
     * const modSubscribers = await prisma.modSubscribers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModSubscribersUpdateArgs>(
      args: SelectSubset<T, ModSubscribersUpdateArgs>
    ): CheckSelect<T, Prisma__ModSubscribersClient<ModSubscribers>, Prisma__ModSubscribersClient<ModSubscribersGetPayload<T>>>

    /**
     * Delete zero or more ModSubscribers.
     * @param {ModSubscribersDeleteManyArgs} args - Arguments to filter ModSubscribers to delete.
     * @example
     * // Delete a few ModSubscribers
     * const { count } = await prisma.modSubscribers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModSubscribersDeleteManyArgs>(
      args?: SelectSubset<T, ModSubscribersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModSubscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModSubscribersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModSubscribers
     * const modSubscribers = await prisma.modSubscribers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModSubscribersUpdateManyArgs>(
      args: SelectSubset<T, ModSubscribersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ModSubscribers.
     * @param {ModSubscribersUpsertArgs} args - Arguments to update or create a ModSubscribers.
     * @example
     * // Update or create a ModSubscribers
     * const modSubscribers = await prisma.modSubscribers.upsert({
     *   create: {
     *     // ... data to create a ModSubscribers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModSubscribers we want to update
     *   }
     * })
    **/
    upsert<T extends ModSubscribersUpsertArgs>(
      args: SelectSubset<T, ModSubscribersUpsertArgs>
    ): CheckSelect<T, Prisma__ModSubscribersClient<ModSubscribers>, Prisma__ModSubscribersClient<ModSubscribersGetPayload<T>>>

    /**
     * Count the number of ModSubscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModSubscribersCountArgs} args - Arguments to filter ModSubscribers to count.
     * @example
     * // Count the number of ModSubscribers
     * const count = await prisma.modSubscribers.count({
     *   where: {
     *     // ... the filter for the ModSubscribers we want to count
     *   }
     * })
    **/
    count<T extends ModSubscribersCountArgs>(
      args?: Subset<T, ModSubscribersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModSubscribersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModSubscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModSubscribersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModSubscribersAggregateArgs>(args: Subset<T, ModSubscribersAggregateArgs>): PrismaPromise<GetModSubscribersAggregateType<T>>

    /**
     * Group by ModSubscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModSubscribersGroupByArgs} args - Group by arguments.
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
      T extends ModSubscribersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModSubscribersGroupByArgs['orderBy'] }
        : { orderBy?: ModSubscribersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModSubscribersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModSubscribersGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModSubscribers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModSubscribersClient<T> implements PrismaPromise<T> {
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
   * ModSubscribers findUnique
   */
  export type ModSubscribersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ModSubscribers
     * 
    **/
    select?: ModSubscribersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModSubscribersInclude | null
    /**
     * Throw an Error if a ModSubscribers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModSubscribers to fetch.
     * 
    **/
    where: ModSubscribersWhereUniqueInput
  }


  /**
   * ModSubscribers findFirst
   */
  export type ModSubscribersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ModSubscribers
     * 
    **/
    select?: ModSubscribersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModSubscribersInclude | null
    /**
     * Throw an Error if a ModSubscribers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModSubscribers to fetch.
     * 
    **/
    where?: ModSubscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModSubscribers to fetch.
     * 
    **/
    orderBy?: Enumerable<ModSubscribersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModSubscribers.
     * 
    **/
    cursor?: ModSubscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModSubscribers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModSubscribers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModSubscribers.
     * 
    **/
    distinct?: Enumerable<ModSubscribersScalarFieldEnum>
  }


  /**
   * ModSubscribers findMany
   */
  export type ModSubscribersFindManyArgs = {
    /**
     * Select specific fields to fetch from the ModSubscribers
     * 
    **/
    select?: ModSubscribersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModSubscribersInclude | null
    /**
     * Filter, which ModSubscribers to fetch.
     * 
    **/
    where?: ModSubscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModSubscribers to fetch.
     * 
    **/
    orderBy?: Enumerable<ModSubscribersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModSubscribers.
     * 
    **/
    cursor?: ModSubscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModSubscribers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModSubscribers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ModSubscribersScalarFieldEnum>
  }


  /**
   * ModSubscribers create
   */
  export type ModSubscribersCreateArgs = {
    /**
     * Select specific fields to fetch from the ModSubscribers
     * 
    **/
    select?: ModSubscribersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModSubscribersInclude | null
    /**
     * The data needed to create a ModSubscribers.
     * 
    **/
    data: XOR<ModSubscribersCreateInput, ModSubscribersUncheckedCreateInput>
  }


  /**
   * ModSubscribers createMany
   */
  export type ModSubscribersCreateManyArgs = {
    /**
     * The data used to create many ModSubscribers.
     * 
    **/
    data: Enumerable<ModSubscribersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ModSubscribers update
   */
  export type ModSubscribersUpdateArgs = {
    /**
     * Select specific fields to fetch from the ModSubscribers
     * 
    **/
    select?: ModSubscribersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModSubscribersInclude | null
    /**
     * The data needed to update a ModSubscribers.
     * 
    **/
    data: XOR<ModSubscribersUpdateInput, ModSubscribersUncheckedUpdateInput>
    /**
     * Choose, which ModSubscribers to update.
     * 
    **/
    where: ModSubscribersWhereUniqueInput
  }


  /**
   * ModSubscribers updateMany
   */
  export type ModSubscribersUpdateManyArgs = {
    /**
     * The data used to update ModSubscribers.
     * 
    **/
    data: XOR<ModSubscribersUpdateManyMutationInput, ModSubscribersUncheckedUpdateManyInput>
    /**
     * Filter which ModSubscribers to update
     * 
    **/
    where?: ModSubscribersWhereInput
  }


  /**
   * ModSubscribers upsert
   */
  export type ModSubscribersUpsertArgs = {
    /**
     * Select specific fields to fetch from the ModSubscribers
     * 
    **/
    select?: ModSubscribersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModSubscribersInclude | null
    /**
     * The filter to search for the ModSubscribers to update in case it exists.
     * 
    **/
    where: ModSubscribersWhereUniqueInput
    /**
     * In case the ModSubscribers found by the `where` argument doesn't exist, create a new ModSubscribers with this data.
     * 
    **/
    create: XOR<ModSubscribersCreateInput, ModSubscribersUncheckedCreateInput>
    /**
     * In case the ModSubscribers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ModSubscribersUpdateInput, ModSubscribersUncheckedUpdateInput>
  }


  /**
   * ModSubscribers delete
   */
  export type ModSubscribersDeleteArgs = {
    /**
     * Select specific fields to fetch from the ModSubscribers
     * 
    **/
    select?: ModSubscribersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModSubscribersInclude | null
    /**
     * Filter which ModSubscribers to delete.
     * 
    **/
    where: ModSubscribersWhereUniqueInput
  }


  /**
   * ModSubscribers deleteMany
   */
  export type ModSubscribersDeleteManyArgs = {
    /**
     * Filter which ModSubscribers to delete
     * 
    **/
    where?: ModSubscribersWhereInput
  }


  /**
   * ModSubscribers without action
   */
  export type ModSubscribersArgs = {
    /**
     * Select specific fields to fetch from the ModSubscribers
     * 
    **/
    select?: ModSubscribersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModSubscribersInclude | null
  }



  /**
   * Model ModDownload
   */


  export type AggregateModDownload = {
    _count: ModDownloadCountAggregateOutputType | null
    _avg: ModDownloadAvgAggregateOutputType | null
    _sum: ModDownloadSumAggregateOutputType | null
    _min: ModDownloadMinAggregateOutputType | null
    _max: ModDownloadMaxAggregateOutputType | null
  }

  export type ModDownloadAvgAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
    version_id: number | null
  }

  export type ModDownloadSumAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
    version_id: number | null
  }

  export type ModDownloadMinAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
    version_id: number | null
  }

  export type ModDownloadMaxAggregateOutputType = {
    user_id: number | null
    mod_id: number | null
    version_id: number | null
  }

  export type ModDownloadCountAggregateOutputType = {
    user_id: number
    mod_id: number
    version_id: number
    _all: number
  }


  export type ModDownloadAvgAggregateInputType = {
    user_id?: true
    mod_id?: true
    version_id?: true
  }

  export type ModDownloadSumAggregateInputType = {
    user_id?: true
    mod_id?: true
    version_id?: true
  }

  export type ModDownloadMinAggregateInputType = {
    user_id?: true
    mod_id?: true
    version_id?: true
  }

  export type ModDownloadMaxAggregateInputType = {
    user_id?: true
    mod_id?: true
    version_id?: true
  }

  export type ModDownloadCountAggregateInputType = {
    user_id?: true
    mod_id?: true
    version_id?: true
    _all?: true
  }

  export type ModDownloadAggregateArgs = {
    /**
     * Filter which ModDownload to aggregate.
     * 
    **/
    where?: ModDownloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModDownloads to fetch.
     * 
    **/
    orderBy?: Enumerable<ModDownloadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ModDownloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModDownloads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModDownloads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModDownloads
    **/
    _count?: true | ModDownloadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModDownloadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModDownloadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModDownloadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModDownloadMaxAggregateInputType
  }

  export type GetModDownloadAggregateType<T extends ModDownloadAggregateArgs> = {
        [P in keyof T & keyof AggregateModDownload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModDownload[P]>
      : GetScalarType<T[P], AggregateModDownload[P]>
  }




  export type ModDownloadGroupByArgs = {
    where?: ModDownloadWhereInput
    orderBy?: Enumerable<ModDownloadOrderByWithAggregationInput>
    by: Array<ModDownloadScalarFieldEnum>
    having?: ModDownloadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModDownloadCountAggregateInputType | true
    _avg?: ModDownloadAvgAggregateInputType
    _sum?: ModDownloadSumAggregateInputType
    _min?: ModDownloadMinAggregateInputType
    _max?: ModDownloadMaxAggregateInputType
  }


  export type ModDownloadGroupByOutputType = {
    user_id: number
    mod_id: number
    version_id: number
    _count: ModDownloadCountAggregateOutputType | null
    _avg: ModDownloadAvgAggregateOutputType | null
    _sum: ModDownloadSumAggregateOutputType | null
    _min: ModDownloadMinAggregateOutputType | null
    _max: ModDownloadMaxAggregateOutputType | null
  }

  type GetModDownloadGroupByPayload<T extends ModDownloadGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ModDownloadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModDownloadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModDownloadGroupByOutputType[P]>
            : GetScalarType<T[P], ModDownloadGroupByOutputType[P]>
        }
      >
    >


  export type ModDownloadSelect = {
    user_id?: boolean
    mod_id?: boolean
    version_id?: boolean
    User?: boolean | UserArgs
    Mod?: boolean | ModArgs
    Version?: boolean | ModVersionArgs
  }

  export type ModDownloadInclude = {
    User?: boolean | UserArgs
    Mod?: boolean | ModArgs
    Version?: boolean | ModVersionArgs
  }

  export type ModDownloadGetPayload<
    S extends boolean | null | undefined | ModDownloadArgs,
    U = keyof S
      > = S extends true
        ? ModDownload
    : S extends undefined
    ? never
    : S extends ModDownloadArgs | ModDownloadFindManyArgs
    ?'include' extends U
    ? ModDownload  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'Mod' ? ModGetPayload<S['include'][P]> :
        P extends 'Version' ? ModVersionGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'Mod' ? ModGetPayload<S['select'][P]> :
        P extends 'Version' ? ModVersionGetPayload<S['select'][P]> :  P extends keyof ModDownload ? ModDownload[P] : never
  } 
    : ModDownload
  : ModDownload


  type ModDownloadCountArgs = Merge<
    Omit<ModDownloadFindManyArgs, 'select' | 'include'> & {
      select?: ModDownloadCountAggregateInputType | true
    }
  >

  export interface ModDownloadDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ModDownload that matches the filter.
     * @param {ModDownloadFindUniqueArgs} args - Arguments to find a ModDownload
     * @example
     * // Get one ModDownload
     * const modDownload = await prisma.modDownload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModDownloadFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModDownloadFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ModDownload'> extends True ? CheckSelect<T, Prisma__ModDownloadClient<ModDownload>, Prisma__ModDownloadClient<ModDownloadGetPayload<T>>> : CheckSelect<T, Prisma__ModDownloadClient<ModDownload | null >, Prisma__ModDownloadClient<ModDownloadGetPayload<T> | null >>

    /**
     * Find the first ModDownload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModDownloadFindFirstArgs} args - Arguments to find a ModDownload
     * @example
     * // Get one ModDownload
     * const modDownload = await prisma.modDownload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModDownloadFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModDownloadFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ModDownload'> extends True ? CheckSelect<T, Prisma__ModDownloadClient<ModDownload>, Prisma__ModDownloadClient<ModDownloadGetPayload<T>>> : CheckSelect<T, Prisma__ModDownloadClient<ModDownload | null >, Prisma__ModDownloadClient<ModDownloadGetPayload<T> | null >>

    /**
     * Find zero or more ModDownloads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModDownloadFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModDownloads
     * const modDownloads = await prisma.modDownload.findMany()
     * 
     * // Get first 10 ModDownloads
     * const modDownloads = await prisma.modDownload.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const modDownloadWithUser_idOnly = await prisma.modDownload.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends ModDownloadFindManyArgs>(
      args?: SelectSubset<T, ModDownloadFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ModDownload>>, PrismaPromise<Array<ModDownloadGetPayload<T>>>>

    /**
     * Create a ModDownload.
     * @param {ModDownloadCreateArgs} args - Arguments to create a ModDownload.
     * @example
     * // Create one ModDownload
     * const ModDownload = await prisma.modDownload.create({
     *   data: {
     *     // ... data to create a ModDownload
     *   }
     * })
     * 
    **/
    create<T extends ModDownloadCreateArgs>(
      args: SelectSubset<T, ModDownloadCreateArgs>
    ): CheckSelect<T, Prisma__ModDownloadClient<ModDownload>, Prisma__ModDownloadClient<ModDownloadGetPayload<T>>>

    /**
     * Create many ModDownloads.
     *     @param {ModDownloadCreateManyArgs} args - Arguments to create many ModDownloads.
     *     @example
     *     // Create many ModDownloads
     *     const modDownload = await prisma.modDownload.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModDownloadCreateManyArgs>(
      args?: SelectSubset<T, ModDownloadCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ModDownload.
     * @param {ModDownloadDeleteArgs} args - Arguments to delete one ModDownload.
     * @example
     * // Delete one ModDownload
     * const ModDownload = await prisma.modDownload.delete({
     *   where: {
     *     // ... filter to delete one ModDownload
     *   }
     * })
     * 
    **/
    delete<T extends ModDownloadDeleteArgs>(
      args: SelectSubset<T, ModDownloadDeleteArgs>
    ): CheckSelect<T, Prisma__ModDownloadClient<ModDownload>, Prisma__ModDownloadClient<ModDownloadGetPayload<T>>>

    /**
     * Update one ModDownload.
     * @param {ModDownloadUpdateArgs} args - Arguments to update one ModDownload.
     * @example
     * // Update one ModDownload
     * const modDownload = await prisma.modDownload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModDownloadUpdateArgs>(
      args: SelectSubset<T, ModDownloadUpdateArgs>
    ): CheckSelect<T, Prisma__ModDownloadClient<ModDownload>, Prisma__ModDownloadClient<ModDownloadGetPayload<T>>>

    /**
     * Delete zero or more ModDownloads.
     * @param {ModDownloadDeleteManyArgs} args - Arguments to filter ModDownloads to delete.
     * @example
     * // Delete a few ModDownloads
     * const { count } = await prisma.modDownload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModDownloadDeleteManyArgs>(
      args?: SelectSubset<T, ModDownloadDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModDownloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModDownloadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModDownloads
     * const modDownload = await prisma.modDownload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModDownloadUpdateManyArgs>(
      args: SelectSubset<T, ModDownloadUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ModDownload.
     * @param {ModDownloadUpsertArgs} args - Arguments to update or create a ModDownload.
     * @example
     * // Update or create a ModDownload
     * const modDownload = await prisma.modDownload.upsert({
     *   create: {
     *     // ... data to create a ModDownload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModDownload we want to update
     *   }
     * })
    **/
    upsert<T extends ModDownloadUpsertArgs>(
      args: SelectSubset<T, ModDownloadUpsertArgs>
    ): CheckSelect<T, Prisma__ModDownloadClient<ModDownload>, Prisma__ModDownloadClient<ModDownloadGetPayload<T>>>

    /**
     * Count the number of ModDownloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModDownloadCountArgs} args - Arguments to filter ModDownloads to count.
     * @example
     * // Count the number of ModDownloads
     * const count = await prisma.modDownload.count({
     *   where: {
     *     // ... the filter for the ModDownloads we want to count
     *   }
     * })
    **/
    count<T extends ModDownloadCountArgs>(
      args?: Subset<T, ModDownloadCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModDownloadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModDownload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModDownloadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModDownloadAggregateArgs>(args: Subset<T, ModDownloadAggregateArgs>): PrismaPromise<GetModDownloadAggregateType<T>>

    /**
     * Group by ModDownload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModDownloadGroupByArgs} args - Group by arguments.
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
      T extends ModDownloadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModDownloadGroupByArgs['orderBy'] }
        : { orderBy?: ModDownloadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModDownloadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModDownloadGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModDownload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModDownloadClient<T> implements PrismaPromise<T> {
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

    Version<T extends ModVersionArgs = {}>(args?: Subset<T, ModVersionArgs>): CheckSelect<T, Prisma__ModVersionClient<ModVersion | null >, Prisma__ModVersionClient<ModVersionGetPayload<T> | null >>;

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
   * ModDownload findUnique
   */
  export type ModDownloadFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ModDownload
     * 
    **/
    select?: ModDownloadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModDownloadInclude | null
    /**
     * Throw an Error if a ModDownload can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModDownload to fetch.
     * 
    **/
    where: ModDownloadWhereUniqueInput
  }


  /**
   * ModDownload findFirst
   */
  export type ModDownloadFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ModDownload
     * 
    **/
    select?: ModDownloadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModDownloadInclude | null
    /**
     * Throw an Error if a ModDownload can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ModDownload to fetch.
     * 
    **/
    where?: ModDownloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModDownloads to fetch.
     * 
    **/
    orderBy?: Enumerable<ModDownloadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModDownloads.
     * 
    **/
    cursor?: ModDownloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModDownloads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModDownloads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModDownloads.
     * 
    **/
    distinct?: Enumerable<ModDownloadScalarFieldEnum>
  }


  /**
   * ModDownload findMany
   */
  export type ModDownloadFindManyArgs = {
    /**
     * Select specific fields to fetch from the ModDownload
     * 
    **/
    select?: ModDownloadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModDownloadInclude | null
    /**
     * Filter, which ModDownloads to fetch.
     * 
    **/
    where?: ModDownloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModDownloads to fetch.
     * 
    **/
    orderBy?: Enumerable<ModDownloadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModDownloads.
     * 
    **/
    cursor?: ModDownloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModDownloads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModDownloads.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ModDownloadScalarFieldEnum>
  }


  /**
   * ModDownload create
   */
  export type ModDownloadCreateArgs = {
    /**
     * Select specific fields to fetch from the ModDownload
     * 
    **/
    select?: ModDownloadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModDownloadInclude | null
    /**
     * The data needed to create a ModDownload.
     * 
    **/
    data: XOR<ModDownloadCreateInput, ModDownloadUncheckedCreateInput>
  }


  /**
   * ModDownload createMany
   */
  export type ModDownloadCreateManyArgs = {
    /**
     * The data used to create many ModDownloads.
     * 
    **/
    data: Enumerable<ModDownloadCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ModDownload update
   */
  export type ModDownloadUpdateArgs = {
    /**
     * Select specific fields to fetch from the ModDownload
     * 
    **/
    select?: ModDownloadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModDownloadInclude | null
    /**
     * The data needed to update a ModDownload.
     * 
    **/
    data: XOR<ModDownloadUpdateInput, ModDownloadUncheckedUpdateInput>
    /**
     * Choose, which ModDownload to update.
     * 
    **/
    where: ModDownloadWhereUniqueInput
  }


  /**
   * ModDownload updateMany
   */
  export type ModDownloadUpdateManyArgs = {
    /**
     * The data used to update ModDownloads.
     * 
    **/
    data: XOR<ModDownloadUpdateManyMutationInput, ModDownloadUncheckedUpdateManyInput>
    /**
     * Filter which ModDownloads to update
     * 
    **/
    where?: ModDownloadWhereInput
  }


  /**
   * ModDownload upsert
   */
  export type ModDownloadUpsertArgs = {
    /**
     * Select specific fields to fetch from the ModDownload
     * 
    **/
    select?: ModDownloadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModDownloadInclude | null
    /**
     * The filter to search for the ModDownload to update in case it exists.
     * 
    **/
    where: ModDownloadWhereUniqueInput
    /**
     * In case the ModDownload found by the `where` argument doesn't exist, create a new ModDownload with this data.
     * 
    **/
    create: XOR<ModDownloadCreateInput, ModDownloadUncheckedCreateInput>
    /**
     * In case the ModDownload was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ModDownloadUpdateInput, ModDownloadUncheckedUpdateInput>
  }


  /**
   * ModDownload delete
   */
  export type ModDownloadDeleteArgs = {
    /**
     * Select specific fields to fetch from the ModDownload
     * 
    **/
    select?: ModDownloadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModDownloadInclude | null
    /**
     * Filter which ModDownload to delete.
     * 
    **/
    where: ModDownloadWhereUniqueInput
  }


  /**
   * ModDownload deleteMany
   */
  export type ModDownloadDeleteManyArgs = {
    /**
     * Filter which ModDownloads to delete
     * 
    **/
    where?: ModDownloadWhereInput
  }


  /**
   * ModDownload without action
   */
  export type ModDownloadArgs = {
    /**
     * Select specific fields to fetch from the ModDownload
     * 
    **/
    select?: ModDownloadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ModDownloadInclude | null
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


  export const UserAuthScalarFieldEnum: {
    userId: 'userId',
    email: 'email',
    password: 'password'
  };

  export type UserAuthScalarFieldEnum = (typeof UserAuthScalarFieldEnum)[keyof typeof UserAuthScalarFieldEnum]


  export const ModsCollectionScalarFieldEnum: {
    id: 'id',
    avatar: 'avatar',
    name: 'name',
    description: 'description',
    createDate: 'createDate',
    is_active: 'is_active',
    author_id: 'author_id'
  };

  export type ModsCollectionScalarFieldEnum = (typeof ModsCollectionScalarFieldEnum)[keyof typeof ModsCollectionScalarFieldEnum]


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


  export const ModAuthorScalarFieldEnum: {
    mod_id: 'mod_id',
    user_id: 'user_id',
    type: 'type'
  };

  export type ModAuthorScalarFieldEnum = (typeof ModAuthorScalarFieldEnum)[keyof typeof ModAuthorScalarFieldEnum]


  export const ModImageScalarFieldEnum: {
    id: 'id',
    mod_id: 'mod_id',
    url: 'url'
  };

  export type ModImageScalarFieldEnum = (typeof ModImageScalarFieldEnum)[keyof typeof ModImageScalarFieldEnum]


  export const ModTagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ModTagScalarFieldEnum = (typeof ModTagScalarFieldEnum)[keyof typeof ModTagScalarFieldEnum]


  export const ModVersionScalarFieldEnum: {
    id: 'id',
    mod_id: 'mod_id',
    version: 'version',
    game_version: 'game_version',
    releaseDate: 'releaseDate'
  };

  export type ModVersionScalarFieldEnum = (typeof ModVersionScalarFieldEnum)[keyof typeof ModVersionScalarFieldEnum]


  export const ModIssueScalarFieldEnum: {
    id: 'id',
    mod_id: 'mod_id',
    name: 'name',
    type: 'type',
    author_id: 'author_id',
    createDate: 'createDate'
  };

  export type ModIssueScalarFieldEnum = (typeof ModIssueScalarFieldEnum)[keyof typeof ModIssueScalarFieldEnum]


  export const ModIssuePostScalarFieldEnum: {
    id: 'id',
    issue_id: 'issue_id',
    author_id: 'author_id',
    createDate: 'createDate',
    text: 'text'
  };

  export type ModIssuePostScalarFieldEnum = (typeof ModIssuePostScalarFieldEnum)[keyof typeof ModIssuePostScalarFieldEnum]


  export const ModsListScalarFieldEnum: {
    id: 'id',
    author_id: 'author_id',
    is_public: 'is_public',
    name: 'name'
  };

  export type ModsListScalarFieldEnum = (typeof ModsListScalarFieldEnum)[keyof typeof ModsListScalarFieldEnum]


  export const ModsFavoritsScalarFieldEnum: {
    user_id: 'user_id',
    mod_id: 'mod_id'
  };

  export type ModsFavoritsScalarFieldEnum = (typeof ModsFavoritsScalarFieldEnum)[keyof typeof ModsFavoritsScalarFieldEnum]


  export const ModSubscribersScalarFieldEnum: {
    user_id: 'user_id',
    mod_id: 'mod_id'
  };

  export type ModSubscribersScalarFieldEnum = (typeof ModSubscribersScalarFieldEnum)[keyof typeof ModSubscribersScalarFieldEnum]


  export const ModDownloadScalarFieldEnum: {
    user_id: 'user_id',
    mod_id: 'mod_id',
    version_id: 'version_id'
  };

  export type ModDownloadScalarFieldEnum = (typeof ModDownloadScalarFieldEnum)[keyof typeof ModDownloadScalarFieldEnum]


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
    UserAuth?: XOR<UserAuthRelationFilter, UserAuthWhereInput> | null
    ModsCollections?: ModsCollectionListRelationFilter
    ModAuthors?: ModAuthorListRelationFilter
    ModIssues?: ModIssueListRelationFilter
    ModIssuePosts?: ModIssuePostListRelationFilter
    ModsLists?: ModsListListRelationFilter
    ModsFavorits?: ModsFavoritsListRelationFilter
    ModSubscribers?: ModSubscribersListRelationFilter
    ModDownloads?: ModDownloadListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nick?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    avatar?: SortOrder
    UserAuth?: UserAuthOrderByWithRelationInput
    ModsCollections?: ModsCollectionOrderByRelationAggregateInput
    ModAuthors?: ModAuthorOrderByRelationAggregateInput
    ModIssues?: ModIssueOrderByRelationAggregateInput
    ModIssuePosts?: ModIssuePostOrderByRelationAggregateInput
    ModsLists?: ModsListOrderByRelationAggregateInput
    ModsFavorits?: ModsFavoritsOrderByRelationAggregateInput
    ModSubscribers?: ModSubscribersOrderByRelationAggregateInput
    ModDownloads?: ModDownloadOrderByRelationAggregateInput
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

  export type UserAuthWhereInput = {
    AND?: Enumerable<UserAuthWhereInput>
    OR?: Enumerable<UserAuthWhereInput>
    NOT?: Enumerable<UserAuthWhereInput>
    userId?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserAuthOrderByWithRelationInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type UserAuthWhereUniqueInput = {
    userId?: number
  }

  export type UserAuthOrderByWithAggregationInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserAuthCountOrderByAggregateInput
    _avg?: UserAuthAvgOrderByAggregateInput
    _max?: UserAuthMaxOrderByAggregateInput
    _min?: UserAuthMinOrderByAggregateInput
    _sum?: UserAuthSumOrderByAggregateInput
  }

  export type UserAuthScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserAuthScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserAuthScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserAuthScalarWhereWithAggregatesInput>
    userId?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
  }

  export type ModsCollectionWhereInput = {
    AND?: Enumerable<ModsCollectionWhereInput>
    OR?: Enumerable<ModsCollectionWhereInput>
    NOT?: Enumerable<ModsCollectionWhereInput>
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

  export type ModsCollectionOrderByWithRelationInput = {
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

  export type ModsCollectionWhereUniqueInput = {
    id?: number
  }

  export type ModsCollectionOrderByWithAggregationInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    author_id?: SortOrder
    _count?: ModsCollectionCountOrderByAggregateInput
    _avg?: ModsCollectionAvgOrderByAggregateInput
    _max?: ModsCollectionMaxOrderByAggregateInput
    _min?: ModsCollectionMinOrderByAggregateInput
    _sum?: ModsCollectionSumOrderByAggregateInput
  }

  export type ModsCollectionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModsCollectionScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModsCollectionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModsCollectionScalarWhereWithAggregatesInput>
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
    Collection?: XOR<ModsCollectionRelationFilter, ModsCollectionWhereInput>
    Images?: ModImageListRelationFilter
    Authors?: ModAuthorListRelationFilter
    Tags?: ModTagListRelationFilter
    Versions?: ModVersionListRelationFilter
    Lists?: ModsListListRelationFilter
    Issues?: ModIssueListRelationFilter
    Favorits?: ModsFavoritsListRelationFilter
    Subscribers?: ModSubscribersListRelationFilter
    Downloads?: ModDownloadListRelationFilter
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
    Collection?: ModsCollectionOrderByWithRelationInput
    Images?: ModImageOrderByRelationAggregateInput
    Authors?: ModAuthorOrderByRelationAggregateInput
    Tags?: ModTagOrderByRelationAggregateInput
    Versions?: ModVersionOrderByRelationAggregateInput
    Lists?: ModsListOrderByRelationAggregateInput
    Issues?: ModIssueOrderByRelationAggregateInput
    Favorits?: ModsFavoritsOrderByRelationAggregateInput
    Subscribers?: ModSubscribersOrderByRelationAggregateInput
    Downloads?: ModDownloadOrderByRelationAggregateInput
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

  export type ModAuthorWhereInput = {
    AND?: Enumerable<ModAuthorWhereInput>
    OR?: Enumerable<ModAuthorWhereInput>
    NOT?: Enumerable<ModAuthorWhereInput>
    mod_id?: IntFilter | number
    user_id?: IntFilter | number
    type?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    Mod?: XOR<ModRelationFilter, ModWhereInput>
  }

  export type ModAuthorOrderByWithRelationInput = {
    mod_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    User?: UserOrderByWithRelationInput
    Mod?: ModOrderByWithRelationInput
  }

  export type ModAuthorWhereUniqueInput = {
    mod_id_user_id?: ModAuthorMod_idUser_idCompoundUniqueInput
  }

  export type ModAuthorOrderByWithAggregationInput = {
    mod_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    _count?: ModAuthorCountOrderByAggregateInput
    _avg?: ModAuthorAvgOrderByAggregateInput
    _max?: ModAuthorMaxOrderByAggregateInput
    _min?: ModAuthorMinOrderByAggregateInput
    _sum?: ModAuthorSumOrderByAggregateInput
  }

  export type ModAuthorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModAuthorScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModAuthorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModAuthorScalarWhereWithAggregatesInput>
    mod_id?: IntWithAggregatesFilter | number
    user_id?: IntWithAggregatesFilter | number
    type?: IntWithAggregatesFilter | number
  }

  export type ModImageWhereInput = {
    AND?: Enumerable<ModImageWhereInput>
    OR?: Enumerable<ModImageWhereInput>
    NOT?: Enumerable<ModImageWhereInput>
    id?: IntFilter | number
    mod_id?: IntFilter | number
    url?: StringFilter | string
    Mod?: XOR<ModRelationFilter, ModWhereInput>
  }

  export type ModImageOrderByWithRelationInput = {
    id?: SortOrder
    mod_id?: SortOrder
    url?: SortOrder
    Mod?: ModOrderByWithRelationInput
  }

  export type ModImageWhereUniqueInput = {
    id?: number
  }

  export type ModImageOrderByWithAggregationInput = {
    id?: SortOrder
    mod_id?: SortOrder
    url?: SortOrder
    _count?: ModImageCountOrderByAggregateInput
    _avg?: ModImageAvgOrderByAggregateInput
    _max?: ModImageMaxOrderByAggregateInput
    _min?: ModImageMinOrderByAggregateInput
    _sum?: ModImageSumOrderByAggregateInput
  }

  export type ModImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    mod_id?: IntWithAggregatesFilter | number
    url?: StringWithAggregatesFilter | string
  }

  export type ModTagWhereInput = {
    AND?: Enumerable<ModTagWhereInput>
    OR?: Enumerable<ModTagWhereInput>
    NOT?: Enumerable<ModTagWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    Mod?: ModListRelationFilter
  }

  export type ModTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Mod?: ModOrderByRelationAggregateInput
  }

  export type ModTagWhereUniqueInput = {
    id?: number
  }

  export type ModTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ModTagCountOrderByAggregateInput
    _avg?: ModTagAvgOrderByAggregateInput
    _max?: ModTagMaxOrderByAggregateInput
    _min?: ModTagMinOrderByAggregateInput
    _sum?: ModTagSumOrderByAggregateInput
  }

  export type ModTagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModTagScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModTagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModTagScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type ModVersionWhereInput = {
    AND?: Enumerable<ModVersionWhereInput>
    OR?: Enumerable<ModVersionWhereInput>
    NOT?: Enumerable<ModVersionWhereInput>
    id?: IntFilter | number
    mod_id?: IntFilter | number
    version?: StringFilter | string
    game_version?: StringFilter | string
    releaseDate?: DateTimeFilter | Date | string
    Mod?: XOR<ModRelationFilter, ModWhereInput>
    Downloads?: ModDownloadListRelationFilter
  }

  export type ModVersionOrderByWithRelationInput = {
    id?: SortOrder
    mod_id?: SortOrder
    version?: SortOrder
    game_version?: SortOrder
    releaseDate?: SortOrder
    Mod?: ModOrderByWithRelationInput
    Downloads?: ModDownloadOrderByRelationAggregateInput
  }

  export type ModVersionWhereUniqueInput = {
    id?: number
  }

  export type ModVersionOrderByWithAggregationInput = {
    id?: SortOrder
    mod_id?: SortOrder
    version?: SortOrder
    game_version?: SortOrder
    releaseDate?: SortOrder
    _count?: ModVersionCountOrderByAggregateInput
    _avg?: ModVersionAvgOrderByAggregateInput
    _max?: ModVersionMaxOrderByAggregateInput
    _min?: ModVersionMinOrderByAggregateInput
    _sum?: ModVersionSumOrderByAggregateInput
  }

  export type ModVersionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModVersionScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModVersionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModVersionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    mod_id?: IntWithAggregatesFilter | number
    version?: StringWithAggregatesFilter | string
    game_version?: StringWithAggregatesFilter | string
    releaseDate?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ModIssueWhereInput = {
    AND?: Enumerable<ModIssueWhereInput>
    OR?: Enumerable<ModIssueWhereInput>
    NOT?: Enumerable<ModIssueWhereInput>
    id?: IntFilter | number
    mod_id?: IntFilter | number
    name?: StringFilter | string
    type?: EnumModIssueTypeFilter | ModIssueType
    author_id?: IntFilter | number
    createDate?: DateTimeFilter | Date | string
    Mod?: XOR<ModRelationFilter, ModWhereInput>
    Author?: XOR<UserRelationFilter, UserWhereInput>
    ModIssuePost?: ModIssuePostListRelationFilter
  }

  export type ModIssueOrderByWithRelationInput = {
    id?: SortOrder
    mod_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
    Mod?: ModOrderByWithRelationInput
    Author?: UserOrderByWithRelationInput
    ModIssuePost?: ModIssuePostOrderByRelationAggregateInput
  }

  export type ModIssueWhereUniqueInput = {
    id?: number
  }

  export type ModIssueOrderByWithAggregationInput = {
    id?: SortOrder
    mod_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
    _count?: ModIssueCountOrderByAggregateInput
    _avg?: ModIssueAvgOrderByAggregateInput
    _max?: ModIssueMaxOrderByAggregateInput
    _min?: ModIssueMinOrderByAggregateInput
    _sum?: ModIssueSumOrderByAggregateInput
  }

  export type ModIssueScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModIssueScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModIssueScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModIssueScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    mod_id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    type?: EnumModIssueTypeWithAggregatesFilter | ModIssueType
    author_id?: IntWithAggregatesFilter | number
    createDate?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ModIssuePostWhereInput = {
    AND?: Enumerable<ModIssuePostWhereInput>
    OR?: Enumerable<ModIssuePostWhereInput>
    NOT?: Enumerable<ModIssuePostWhereInput>
    id?: IntFilter | number
    issue_id?: IntFilter | number
    author_id?: IntFilter | number
    createDate?: DateTimeFilter | Date | string
    text?: StringFilter | string
    Issue?: XOR<ModIssueRelationFilter, ModIssueWhereInput>
    Author?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ModIssuePostOrderByWithRelationInput = {
    id?: SortOrder
    issue_id?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
    text?: SortOrder
    Issue?: ModIssueOrderByWithRelationInput
    Author?: UserOrderByWithRelationInput
  }

  export type ModIssuePostWhereUniqueInput = {
    id?: number
  }

  export type ModIssuePostOrderByWithAggregationInput = {
    id?: SortOrder
    issue_id?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
    text?: SortOrder
    _count?: ModIssuePostCountOrderByAggregateInput
    _avg?: ModIssuePostAvgOrderByAggregateInput
    _max?: ModIssuePostMaxOrderByAggregateInput
    _min?: ModIssuePostMinOrderByAggregateInput
    _sum?: ModIssuePostSumOrderByAggregateInput
  }

  export type ModIssuePostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModIssuePostScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModIssuePostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModIssuePostScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    issue_id?: IntWithAggregatesFilter | number
    author_id?: IntWithAggregatesFilter | number
    createDate?: DateTimeWithAggregatesFilter | Date | string
    text?: StringWithAggregatesFilter | string
  }

  export type ModsListWhereInput = {
    AND?: Enumerable<ModsListWhereInput>
    OR?: Enumerable<ModsListWhereInput>
    NOT?: Enumerable<ModsListWhereInput>
    id?: IntFilter | number
    author_id?: IntFilter | number
    is_public?: BoolFilter | boolean
    name?: StringFilter | string
    Author?: XOR<UserRelationFilter, UserWhereInput>
    Mods?: ModListRelationFilter
  }

  export type ModsListOrderByWithRelationInput = {
    id?: SortOrder
    author_id?: SortOrder
    is_public?: SortOrder
    name?: SortOrder
    Author?: UserOrderByWithRelationInput
    Mods?: ModOrderByRelationAggregateInput
  }

  export type ModsListWhereUniqueInput = {
    id?: number
  }

  export type ModsListOrderByWithAggregationInput = {
    id?: SortOrder
    author_id?: SortOrder
    is_public?: SortOrder
    name?: SortOrder
    _count?: ModsListCountOrderByAggregateInput
    _avg?: ModsListAvgOrderByAggregateInput
    _max?: ModsListMaxOrderByAggregateInput
    _min?: ModsListMinOrderByAggregateInput
    _sum?: ModsListSumOrderByAggregateInput
  }

  export type ModsListScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModsListScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModsListScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModsListScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    author_id?: IntWithAggregatesFilter | number
    is_public?: BoolWithAggregatesFilter | boolean
    name?: StringWithAggregatesFilter | string
  }

  export type ModsFavoritsWhereInput = {
    AND?: Enumerable<ModsFavoritsWhereInput>
    OR?: Enumerable<ModsFavoritsWhereInput>
    NOT?: Enumerable<ModsFavoritsWhereInput>
    user_id?: IntFilter | number
    mod_id?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    Mod?: XOR<ModRelationFilter, ModWhereInput>
  }

  export type ModsFavoritsOrderByWithRelationInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    User?: UserOrderByWithRelationInput
    Mod?: ModOrderByWithRelationInput
  }

  export type ModsFavoritsWhereUniqueInput = {
    mod_id_user_id?: ModsFavoritsMod_idUser_idCompoundUniqueInput
  }

  export type ModsFavoritsOrderByWithAggregationInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    _count?: ModsFavoritsCountOrderByAggregateInput
    _avg?: ModsFavoritsAvgOrderByAggregateInput
    _max?: ModsFavoritsMaxOrderByAggregateInput
    _min?: ModsFavoritsMinOrderByAggregateInput
    _sum?: ModsFavoritsSumOrderByAggregateInput
  }

  export type ModsFavoritsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModsFavoritsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModsFavoritsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModsFavoritsScalarWhereWithAggregatesInput>
    user_id?: IntWithAggregatesFilter | number
    mod_id?: IntWithAggregatesFilter | number
  }

  export type ModSubscribersWhereInput = {
    AND?: Enumerable<ModSubscribersWhereInput>
    OR?: Enumerable<ModSubscribersWhereInput>
    NOT?: Enumerable<ModSubscribersWhereInput>
    user_id?: IntFilter | number
    mod_id?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    Mod?: XOR<ModRelationFilter, ModWhereInput>
  }

  export type ModSubscribersOrderByWithRelationInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    User?: UserOrderByWithRelationInput
    Mod?: ModOrderByWithRelationInput
  }

  export type ModSubscribersWhereUniqueInput = {
    mod_id_user_id?: ModSubscribersMod_idUser_idCompoundUniqueInput
  }

  export type ModSubscribersOrderByWithAggregationInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    _count?: ModSubscribersCountOrderByAggregateInput
    _avg?: ModSubscribersAvgOrderByAggregateInput
    _max?: ModSubscribersMaxOrderByAggregateInput
    _min?: ModSubscribersMinOrderByAggregateInput
    _sum?: ModSubscribersSumOrderByAggregateInput
  }

  export type ModSubscribersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModSubscribersScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModSubscribersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModSubscribersScalarWhereWithAggregatesInput>
    user_id?: IntWithAggregatesFilter | number
    mod_id?: IntWithAggregatesFilter | number
  }

  export type ModDownloadWhereInput = {
    AND?: Enumerable<ModDownloadWhereInput>
    OR?: Enumerable<ModDownloadWhereInput>
    NOT?: Enumerable<ModDownloadWhereInput>
    user_id?: IntFilter | number
    mod_id?: IntFilter | number
    version_id?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    Mod?: XOR<ModRelationFilter, ModWhereInput>
    Version?: XOR<ModVersionRelationFilter, ModVersionWhereInput>
  }

  export type ModDownloadOrderByWithRelationInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    version_id?: SortOrder
    User?: UserOrderByWithRelationInput
    Mod?: ModOrderByWithRelationInput
    Version?: ModVersionOrderByWithRelationInput
  }

  export type ModDownloadWhereUniqueInput = {
    user_id_mod_id?: ModDownloadUser_idMod_idCompoundUniqueInput
  }

  export type ModDownloadOrderByWithAggregationInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    version_id?: SortOrder
    _count?: ModDownloadCountOrderByAggregateInput
    _avg?: ModDownloadAvgOrderByAggregateInput
    _max?: ModDownloadMaxOrderByAggregateInput
    _min?: ModDownloadMinOrderByAggregateInput
    _sum?: ModDownloadSumOrderByAggregateInput
  }

  export type ModDownloadScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModDownloadScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModDownloadScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModDownloadScalarWhereWithAggregatesInput>
    user_id?: IntWithAggregatesFilter | number
    mod_id?: IntWithAggregatesFilter | number
    version_id?: IntWithAggregatesFilter | number
  }

  export type UserCreateInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: UserAuthCreateNestedOneWithoutUserInput
    ModsCollections?: ModsCollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: ModAuthorCreateNestedManyWithoutUserInput
    ModIssues?: ModIssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: ModSubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: UserAuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: ModsCollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: ModAuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: ModIssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: ModSubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: UserAuthUpdateOneWithoutUserInput
    ModsCollections?: ModsCollectionUpdateManyWithoutAuthorInput
    ModAuthors?: ModAuthorUpdateManyWithoutUserInput
    ModIssues?: ModIssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUpdateManyWithoutUserInput
    ModSubscribers?: ModSubscribersUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: UserAuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: ModsCollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: ModAuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: ModIssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: ModSubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedUpdateManyWithoutUserInput
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

  export type UserAuthCreateInput = {
    email: string
    password: string
    User: UserCreateNestedOneWithoutUserAuthInput
  }

  export type UserAuthUncheckedCreateInput = {
    userId: number
    email: string
    password: string
  }

  export type UserAuthUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutUserAuthInput
  }

  export type UserAuthUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserAuthCreateManyInput = {
    userId: number
    email: string
    password: string
  }

  export type UserAuthUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserAuthUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ModsCollectionCreateInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    Author: UserCreateNestedOneWithoutModsCollectionsInput
    Mods?: ModCreateNestedManyWithoutCollectionInput
  }

  export type ModsCollectionUncheckedCreateInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    author_id: number
    Mods?: ModUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type ModsCollectionUpdateInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    Author?: UserUpdateOneRequiredWithoutModsCollectionsInput
    Mods?: ModUpdateManyWithoutCollectionInput
  }

  export type ModsCollectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    author_id?: IntFieldUpdateOperationsInput | number
    Mods?: ModUncheckedUpdateManyWithoutCollectionInput
  }

  export type ModsCollectionCreateManyInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    author_id: number
  }

  export type ModsCollectionUpdateManyMutationInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModsCollectionUncheckedUpdateManyInput = {
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
    Collection: ModsCollectionCreateNestedOneWithoutModsInput
    Images?: ModImageCreateNestedManyWithoutModInput
    Authors?: ModAuthorCreateNestedManyWithoutModInput
    Tags?: ModTagCreateNestedManyWithoutModInput
    Versions?: ModVersionCreateNestedManyWithoutModInput
    Lists?: ModsListCreateNestedManyWithoutModsInput
    Issues?: ModIssueCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersCreateNestedManyWithoutModInput
    Downloads?: ModDownloadCreateNestedManyWithoutModInput
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
    Images?: ModImageUncheckedCreateNestedManyWithoutModInput
    Authors?: ModAuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: ModTagUncheckedCreateNestedManyWithoutModInput
    Versions?: ModVersionUncheckedCreateNestedManyWithoutModInput
    Lists?: ModsListUncheckedCreateNestedManyWithoutModsInput
    Issues?: ModIssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: ModDownloadUncheckedCreateNestedManyWithoutModInput
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
    Collection?: ModsCollectionUpdateOneRequiredWithoutModsInput
    Images?: ModImageUpdateManyWithoutModInput
    Authors?: ModAuthorUpdateManyWithoutModInput
    Tags?: ModTagUpdateManyWithoutModInput
    Versions?: ModVersionUpdateManyWithoutModInput
    Lists?: ModsListUpdateManyWithoutModsInput
    Issues?: ModIssueUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUpdateManyWithoutModInput
    Downloads?: ModDownloadUpdateManyWithoutModInput
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
    Images?: ModImageUncheckedUpdateManyWithoutModInput
    Authors?: ModAuthorUncheckedUpdateManyWithoutModInput
    Tags?: ModTagUncheckedUpdateManyWithoutModInput
    Versions?: ModVersionUncheckedUpdateManyWithoutModInput
    Lists?: ModsListUncheckedUpdateManyWithoutModsInput
    Issues?: ModIssueUncheckedUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: ModDownloadUncheckedUpdateManyWithoutModInput
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

  export type ModAuthorCreateInput = {
    type: number
    User: UserCreateNestedOneWithoutModAuthorsInput
    Mod: ModCreateNestedOneWithoutAuthorsInput
  }

  export type ModAuthorUncheckedCreateInput = {
    mod_id: number
    user_id: number
    type: number
  }

  export type ModAuthorUpdateInput = {
    type?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutModAuthorsInput
    Mod?: ModUpdateOneRequiredWithoutAuthorsInput
  }

  export type ModAuthorUncheckedUpdateInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
  }

  export type ModAuthorCreateManyInput = {
    mod_id: number
    user_id: number
    type: number
  }

  export type ModAuthorUpdateManyMutationInput = {
    type?: IntFieldUpdateOperationsInput | number
  }

  export type ModAuthorUncheckedUpdateManyInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
  }

  export type ModImageCreateInput = {
    url: string
    Mod: ModCreateNestedOneWithoutImagesInput
  }

  export type ModImageUncheckedCreateInput = {
    id?: number
    mod_id: number
    url: string
  }

  export type ModImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    Mod?: ModUpdateOneRequiredWithoutImagesInput
  }

  export type ModImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ModImageCreateManyInput = {
    id?: number
    mod_id: number
    url: string
  }

  export type ModImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ModImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ModTagCreateInput = {
    name: string
    Mod?: ModCreateNestedManyWithoutTagsInput
  }

  export type ModTagUncheckedCreateInput = {
    id?: number
    name: string
    Mod?: ModUncheckedCreateNestedManyWithoutTagsInput
  }

  export type ModTagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Mod?: ModUpdateManyWithoutTagsInput
  }

  export type ModTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Mod?: ModUncheckedUpdateManyWithoutTagsInput
  }

  export type ModTagCreateManyInput = {
    id?: number
    name: string
  }

  export type ModTagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModVersionCreateInput = {
    version: string
    game_version: string
    releaseDate?: Date | string
    Mod: ModCreateNestedOneWithoutVersionsInput
    Downloads?: ModDownloadCreateNestedManyWithoutVersionInput
  }

  export type ModVersionUncheckedCreateInput = {
    id?: number
    mod_id: number
    version: string
    game_version: string
    releaseDate?: Date | string
    Downloads?: ModDownloadUncheckedCreateNestedManyWithoutVersionInput
  }

  export type ModVersionUpdateInput = {
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Mod?: ModUpdateOneRequiredWithoutVersionsInput
    Downloads?: ModDownloadUpdateManyWithoutVersionInput
  }

  export type ModVersionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Downloads?: ModDownloadUncheckedUpdateManyWithoutVersionInput
  }

  export type ModVersionCreateManyInput = {
    id?: number
    mod_id: number
    version: string
    game_version: string
    releaseDate?: Date | string
  }

  export type ModVersionUpdateManyMutationInput = {
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModVersionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModIssueCreateInput = {
    name: string
    type: ModIssueType
    createDate?: Date | string
    Mod: ModCreateNestedOneWithoutIssuesInput
    Author: UserCreateNestedOneWithoutModIssuesInput
    ModIssuePost?: ModIssuePostCreateNestedManyWithoutIssueInput
  }

  export type ModIssueUncheckedCreateInput = {
    id?: number
    mod_id: number
    name: string
    type: ModIssueType
    author_id: number
    createDate?: Date | string
    ModIssuePost?: ModIssuePostUncheckedCreateNestedManyWithoutIssueInput
  }

  export type ModIssueUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModIssueTypeFieldUpdateOperationsInput | ModIssueType
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Mod?: ModUpdateOneRequiredWithoutIssuesInput
    Author?: UserUpdateOneRequiredWithoutModIssuesInput
    ModIssuePost?: ModIssuePostUpdateManyWithoutIssueInput
  }

  export type ModIssueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModIssueTypeFieldUpdateOperationsInput | ModIssueType
    author_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ModIssuePost?: ModIssuePostUncheckedUpdateManyWithoutIssueInput
  }

  export type ModIssueCreateManyInput = {
    id?: number
    mod_id: number
    name: string
    type: ModIssueType
    author_id: number
    createDate?: Date | string
  }

  export type ModIssueUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModIssueTypeFieldUpdateOperationsInput | ModIssueType
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModIssueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModIssueTypeFieldUpdateOperationsInput | ModIssueType
    author_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModIssuePostCreateInput = {
    createDate?: Date | string
    text: string
    Issue: ModIssueCreateNestedOneWithoutModIssuePostInput
    Author: UserCreateNestedOneWithoutModIssuePostsInput
  }

  export type ModIssuePostUncheckedCreateInput = {
    id?: number
    issue_id: number
    author_id: number
    createDate?: Date | string
    text: string
  }

  export type ModIssuePostUpdateInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    Issue?: ModIssueUpdateOneRequiredWithoutModIssuePostInput
    Author?: UserUpdateOneRequiredWithoutModIssuePostsInput
  }

  export type ModIssuePostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ModIssuePostCreateManyInput = {
    id?: number
    issue_id: number
    author_id: number
    createDate?: Date | string
    text: string
  }

  export type ModIssuePostUpdateManyMutationInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ModIssuePostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ModsListCreateInput = {
    is_public: boolean
    name: string
    Author: UserCreateNestedOneWithoutModsListsInput
    Mods?: ModCreateNestedManyWithoutListsInput
  }

  export type ModsListUncheckedCreateInput = {
    id?: number
    author_id: number
    is_public: boolean
    name: string
    Mods?: ModUncheckedCreateNestedManyWithoutListsInput
  }

  export type ModsListUpdateInput = {
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    Author?: UserUpdateOneRequiredWithoutModsListsInput
    Mods?: ModUpdateManyWithoutListsInput
  }

  export type ModsListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    Mods?: ModUncheckedUpdateManyWithoutListsInput
  }

  export type ModsListCreateManyInput = {
    id?: number
    author_id: number
    is_public: boolean
    name: string
  }

  export type ModsListUpdateManyMutationInput = {
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModsListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModsFavoritsCreateInput = {
    User: UserCreateNestedOneWithoutModsFavoritsInput
    Mod: ModCreateNestedOneWithoutFavoritsInput
  }

  export type ModsFavoritsUncheckedCreateInput = {
    user_id: number
    mod_id: number
  }

  export type ModsFavoritsUpdateInput = {
    User?: UserUpdateOneRequiredWithoutModsFavoritsInput
    Mod?: ModUpdateOneRequiredWithoutFavoritsInput
  }

  export type ModsFavoritsUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModsFavoritsCreateManyInput = {
    user_id: number
    mod_id: number
  }

  export type ModsFavoritsUpdateManyMutationInput = {

  }

  export type ModsFavoritsUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModSubscribersCreateInput = {
    User: UserCreateNestedOneWithoutModSubscribersInput
    Mod: ModCreateNestedOneWithoutSubscribersInput
  }

  export type ModSubscribersUncheckedCreateInput = {
    user_id: number
    mod_id: number
  }

  export type ModSubscribersUpdateInput = {
    User?: UserUpdateOneRequiredWithoutModSubscribersInput
    Mod?: ModUpdateOneRequiredWithoutSubscribersInput
  }

  export type ModSubscribersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModSubscribersCreateManyInput = {
    user_id: number
    mod_id: number
  }

  export type ModSubscribersUpdateManyMutationInput = {

  }

  export type ModSubscribersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModDownloadCreateInput = {
    User: UserCreateNestedOneWithoutModDownloadsInput
    Mod: ModCreateNestedOneWithoutDownloadsInput
    Version: ModVersionCreateNestedOneWithoutDownloadsInput
  }

  export type ModDownloadUncheckedCreateInput = {
    user_id: number
    mod_id: number
    version_id: number
  }

  export type ModDownloadUpdateInput = {
    User?: UserUpdateOneRequiredWithoutModDownloadsInput
    Mod?: ModUpdateOneRequiredWithoutDownloadsInput
    Version?: ModVersionUpdateOneRequiredWithoutDownloadsInput
  }

  export type ModDownloadUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModDownloadCreateManyInput = {
    user_id: number
    mod_id: number
    version_id: number
  }

  export type ModDownloadUpdateManyMutationInput = {

  }

  export type ModDownloadUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
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

  export type UserAuthRelationFilter = {
    is?: UserAuthWhereInput | null
    isNot?: UserAuthWhereInput | null
  }

  export type ModsCollectionListRelationFilter = {
    every?: ModsCollectionWhereInput
    some?: ModsCollectionWhereInput
    none?: ModsCollectionWhereInput
  }

  export type ModAuthorListRelationFilter = {
    every?: ModAuthorWhereInput
    some?: ModAuthorWhereInput
    none?: ModAuthorWhereInput
  }

  export type ModIssueListRelationFilter = {
    every?: ModIssueWhereInput
    some?: ModIssueWhereInput
    none?: ModIssueWhereInput
  }

  export type ModIssuePostListRelationFilter = {
    every?: ModIssuePostWhereInput
    some?: ModIssuePostWhereInput
    none?: ModIssuePostWhereInput
  }

  export type ModsListListRelationFilter = {
    every?: ModsListWhereInput
    some?: ModsListWhereInput
    none?: ModsListWhereInput
  }

  export type ModsFavoritsListRelationFilter = {
    every?: ModsFavoritsWhereInput
    some?: ModsFavoritsWhereInput
    none?: ModsFavoritsWhereInput
  }

  export type ModSubscribersListRelationFilter = {
    every?: ModSubscribersWhereInput
    some?: ModSubscribersWhereInput
    none?: ModSubscribersWhereInput
  }

  export type ModDownloadListRelationFilter = {
    every?: ModDownloadWhereInput
    some?: ModDownloadWhereInput
    none?: ModDownloadWhereInput
  }

  export type ModsCollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModAuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModIssueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModIssuePostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModsListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModsFavoritsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModSubscribersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModDownloadOrderByRelationAggregateInput = {
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

  export type UserAuthCountOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAuthAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserAuthMaxOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAuthMinOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAuthSumOrderByAggregateInput = {
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

  export type ModsCollectionCountOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    author_id?: SortOrder
  }

  export type ModsCollectionAvgOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
  }

  export type ModsCollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    author_id?: SortOrder
  }

  export type ModsCollectionMinOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createDate?: SortOrder
    is_active?: SortOrder
    author_id?: SortOrder
  }

  export type ModsCollectionSumOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
  }

  export type ModsCollectionRelationFilter = {
    is?: ModsCollectionWhereInput
    isNot?: ModsCollectionWhereInput
  }

  export type ModImageListRelationFilter = {
    every?: ModImageWhereInput
    some?: ModImageWhereInput
    none?: ModImageWhereInput
  }

  export type ModTagListRelationFilter = {
    every?: ModTagWhereInput
    some?: ModTagWhereInput
    none?: ModTagWhereInput
  }

  export type ModVersionListRelationFilter = {
    every?: ModVersionWhereInput
    some?: ModVersionWhereInput
    none?: ModVersionWhereInput
  }

  export type ModImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModVersionOrderByRelationAggregateInput = {
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

  export type ModAuthorMod_idUser_idCompoundUniqueInput = {
    mod_id: number
    user_id: number
  }

  export type ModAuthorCountOrderByAggregateInput = {
    mod_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
  }

  export type ModAuthorAvgOrderByAggregateInput = {
    mod_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
  }

  export type ModAuthorMaxOrderByAggregateInput = {
    mod_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
  }

  export type ModAuthorMinOrderByAggregateInput = {
    mod_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
  }

  export type ModAuthorSumOrderByAggregateInput = {
    mod_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
  }

  export type ModImageCountOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    url?: SortOrder
  }

  export type ModImageAvgOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
  }

  export type ModImageMaxOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    url?: SortOrder
  }

  export type ModImageMinOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    url?: SortOrder
  }

  export type ModImageSumOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
  }

  export type ModTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ModTagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ModTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ModTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ModTagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ModVersionCountOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    version?: SortOrder
    game_version?: SortOrder
    releaseDate?: SortOrder
  }

  export type ModVersionAvgOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
  }

  export type ModVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    version?: SortOrder
    game_version?: SortOrder
    releaseDate?: SortOrder
  }

  export type ModVersionMinOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    version?: SortOrder
    game_version?: SortOrder
    releaseDate?: SortOrder
  }

  export type ModVersionSumOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
  }

  export type EnumModIssueTypeFilter = {
    equals?: ModIssueType
    in?: Enumerable<ModIssueType>
    notIn?: Enumerable<ModIssueType>
    not?: NestedEnumModIssueTypeFilter | ModIssueType
  }

  export type ModIssueCountOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
  }

  export type ModIssueAvgOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    author_id?: SortOrder
  }

  export type ModIssueMaxOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
  }

  export type ModIssueMinOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
  }

  export type ModIssueSumOrderByAggregateInput = {
    id?: SortOrder
    mod_id?: SortOrder
    author_id?: SortOrder
  }

  export type EnumModIssueTypeWithAggregatesFilter = {
    equals?: ModIssueType
    in?: Enumerable<ModIssueType>
    notIn?: Enumerable<ModIssueType>
    not?: NestedEnumModIssueTypeWithAggregatesFilter | ModIssueType
    _count?: NestedIntFilter
    _min?: NestedEnumModIssueTypeFilter
    _max?: NestedEnumModIssueTypeFilter
  }

  export type ModIssueRelationFilter = {
    is?: ModIssueWhereInput
    isNot?: ModIssueWhereInput
  }

  export type ModIssuePostCountOrderByAggregateInput = {
    id?: SortOrder
    issue_id?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
    text?: SortOrder
  }

  export type ModIssuePostAvgOrderByAggregateInput = {
    id?: SortOrder
    issue_id?: SortOrder
    author_id?: SortOrder
  }

  export type ModIssuePostMaxOrderByAggregateInput = {
    id?: SortOrder
    issue_id?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
    text?: SortOrder
  }

  export type ModIssuePostMinOrderByAggregateInput = {
    id?: SortOrder
    issue_id?: SortOrder
    author_id?: SortOrder
    createDate?: SortOrder
    text?: SortOrder
  }

  export type ModIssuePostSumOrderByAggregateInput = {
    id?: SortOrder
    issue_id?: SortOrder
    author_id?: SortOrder
  }

  export type ModsListCountOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    is_public?: SortOrder
    name?: SortOrder
  }

  export type ModsListAvgOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
  }

  export type ModsListMaxOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    is_public?: SortOrder
    name?: SortOrder
  }

  export type ModsListMinOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    is_public?: SortOrder
    name?: SortOrder
  }

  export type ModsListSumOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
  }

  export type ModsFavoritsMod_idUser_idCompoundUniqueInput = {
    mod_id: number
    user_id: number
  }

  export type ModsFavoritsCountOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type ModsFavoritsAvgOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type ModsFavoritsMaxOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type ModsFavoritsMinOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type ModsFavoritsSumOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type ModSubscribersMod_idUser_idCompoundUniqueInput = {
    mod_id: number
    user_id: number
  }

  export type ModSubscribersCountOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type ModSubscribersAvgOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type ModSubscribersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type ModSubscribersMinOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type ModSubscribersSumOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
  }

  export type ModVersionRelationFilter = {
    is?: ModVersionWhereInput
    isNot?: ModVersionWhereInput
  }

  export type ModDownloadUser_idMod_idCompoundUniqueInput = {
    user_id: number
    mod_id: number
  }

  export type ModDownloadCountOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    version_id?: SortOrder
  }

  export type ModDownloadAvgOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    version_id?: SortOrder
  }

  export type ModDownloadMaxOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    version_id?: SortOrder
  }

  export type ModDownloadMinOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    version_id?: SortOrder
  }

  export type ModDownloadSumOrderByAggregateInput = {
    user_id?: SortOrder
    mod_id?: SortOrder
    version_id?: SortOrder
  }

  export type UserAuthCreateNestedOneWithoutUserInput = {
    create?: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutUserInput
    connect?: UserAuthWhereUniqueInput
  }

  export type ModsCollectionCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ModsCollectionCreateWithoutAuthorInput>, Enumerable<ModsCollectionUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ModsCollectionCreateOrConnectWithoutAuthorInput>
    createMany?: ModsCollectionCreateManyAuthorInputEnvelope
    connect?: Enumerable<ModsCollectionWhereUniqueInput>
  }

  export type ModAuthorCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ModAuthorCreateWithoutUserInput>, Enumerable<ModAuthorUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ModAuthorCreateOrConnectWithoutUserInput>
    createMany?: ModAuthorCreateManyUserInputEnvelope
    connect?: Enumerable<ModAuthorWhereUniqueInput>
  }

  export type ModIssueCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ModIssueCreateWithoutAuthorInput>, Enumerable<ModIssueUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ModIssueCreateOrConnectWithoutAuthorInput>
    createMany?: ModIssueCreateManyAuthorInputEnvelope
    connect?: Enumerable<ModIssueWhereUniqueInput>
  }

  export type ModIssuePostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ModIssuePostCreateWithoutAuthorInput>, Enumerable<ModIssuePostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ModIssuePostCreateOrConnectWithoutAuthorInput>
    createMany?: ModIssuePostCreateManyAuthorInputEnvelope
    connect?: Enumerable<ModIssuePostWhereUniqueInput>
  }

  export type ModsListCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ModsListCreateWithoutAuthorInput>, Enumerable<ModsListUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ModsListCreateOrConnectWithoutAuthorInput>
    createMany?: ModsListCreateManyAuthorInputEnvelope
    connect?: Enumerable<ModsListWhereUniqueInput>
  }

  export type ModsFavoritsCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ModsFavoritsCreateWithoutUserInput>, Enumerable<ModsFavoritsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ModsFavoritsCreateOrConnectWithoutUserInput>
    createMany?: ModsFavoritsCreateManyUserInputEnvelope
    connect?: Enumerable<ModsFavoritsWhereUniqueInput>
  }

  export type ModSubscribersCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ModSubscribersCreateWithoutUserInput>, Enumerable<ModSubscribersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ModSubscribersCreateOrConnectWithoutUserInput>
    createMany?: ModSubscribersCreateManyUserInputEnvelope
    connect?: Enumerable<ModSubscribersWhereUniqueInput>
  }

  export type ModDownloadCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ModDownloadCreateWithoutUserInput>, Enumerable<ModDownloadUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ModDownloadCreateOrConnectWithoutUserInput>
    createMany?: ModDownloadCreateManyUserInputEnvelope
    connect?: Enumerable<ModDownloadWhereUniqueInput>
  }

  export type UserAuthUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutUserInput
    connect?: UserAuthWhereUniqueInput
  }

  export type ModsCollectionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ModsCollectionCreateWithoutAuthorInput>, Enumerable<ModsCollectionUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ModsCollectionCreateOrConnectWithoutAuthorInput>
    createMany?: ModsCollectionCreateManyAuthorInputEnvelope
    connect?: Enumerable<ModsCollectionWhereUniqueInput>
  }

  export type ModAuthorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ModAuthorCreateWithoutUserInput>, Enumerable<ModAuthorUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ModAuthorCreateOrConnectWithoutUserInput>
    createMany?: ModAuthorCreateManyUserInputEnvelope
    connect?: Enumerable<ModAuthorWhereUniqueInput>
  }

  export type ModIssueUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ModIssueCreateWithoutAuthorInput>, Enumerable<ModIssueUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ModIssueCreateOrConnectWithoutAuthorInput>
    createMany?: ModIssueCreateManyAuthorInputEnvelope
    connect?: Enumerable<ModIssueWhereUniqueInput>
  }

  export type ModIssuePostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ModIssuePostCreateWithoutAuthorInput>, Enumerable<ModIssuePostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ModIssuePostCreateOrConnectWithoutAuthorInput>
    createMany?: ModIssuePostCreateManyAuthorInputEnvelope
    connect?: Enumerable<ModIssuePostWhereUniqueInput>
  }

  export type ModsListUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ModsListCreateWithoutAuthorInput>, Enumerable<ModsListUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ModsListCreateOrConnectWithoutAuthorInput>
    createMany?: ModsListCreateManyAuthorInputEnvelope
    connect?: Enumerable<ModsListWhereUniqueInput>
  }

  export type ModsFavoritsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ModsFavoritsCreateWithoutUserInput>, Enumerable<ModsFavoritsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ModsFavoritsCreateOrConnectWithoutUserInput>
    createMany?: ModsFavoritsCreateManyUserInputEnvelope
    connect?: Enumerable<ModsFavoritsWhereUniqueInput>
  }

  export type ModSubscribersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ModSubscribersCreateWithoutUserInput>, Enumerable<ModSubscribersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ModSubscribersCreateOrConnectWithoutUserInput>
    createMany?: ModSubscribersCreateManyUserInputEnvelope
    connect?: Enumerable<ModSubscribersWhereUniqueInput>
  }

  export type ModDownloadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ModDownloadCreateWithoutUserInput>, Enumerable<ModDownloadUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ModDownloadCreateOrConnectWithoutUserInput>
    createMany?: ModDownloadCreateManyUserInputEnvelope
    connect?: Enumerable<ModDownloadWhereUniqueInput>
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

  export type UserAuthUpdateOneWithoutUserInput = {
    create?: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutUserInput
    upsert?: UserAuthUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserAuthWhereUniqueInput
    update?: XOR<UserAuthUpdateWithoutUserInput, UserAuthUncheckedUpdateWithoutUserInput>
  }

  export type ModsCollectionUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ModsCollectionCreateWithoutAuthorInput>, Enumerable<ModsCollectionUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ModsCollectionCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ModsCollectionUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ModsCollectionCreateManyAuthorInputEnvelope
    set?: Enumerable<ModsCollectionWhereUniqueInput>
    disconnect?: Enumerable<ModsCollectionWhereUniqueInput>
    delete?: Enumerable<ModsCollectionWhereUniqueInput>
    connect?: Enumerable<ModsCollectionWhereUniqueInput>
    update?: Enumerable<ModsCollectionUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ModsCollectionUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ModsCollectionScalarWhereInput>
  }

  export type ModAuthorUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ModAuthorCreateWithoutUserInput>, Enumerable<ModAuthorUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ModAuthorCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ModAuthorUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ModAuthorCreateManyUserInputEnvelope
    set?: Enumerable<ModAuthorWhereUniqueInput>
    disconnect?: Enumerable<ModAuthorWhereUniqueInput>
    delete?: Enumerable<ModAuthorWhereUniqueInput>
    connect?: Enumerable<ModAuthorWhereUniqueInput>
    update?: Enumerable<ModAuthorUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ModAuthorUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ModAuthorScalarWhereInput>
  }

  export type ModIssueUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ModIssueCreateWithoutAuthorInput>, Enumerable<ModIssueUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ModIssueCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ModIssueUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ModIssueCreateManyAuthorInputEnvelope
    set?: Enumerable<ModIssueWhereUniqueInput>
    disconnect?: Enumerable<ModIssueWhereUniqueInput>
    delete?: Enumerable<ModIssueWhereUniqueInput>
    connect?: Enumerable<ModIssueWhereUniqueInput>
    update?: Enumerable<ModIssueUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ModIssueUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ModIssueScalarWhereInput>
  }

  export type ModIssuePostUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ModIssuePostCreateWithoutAuthorInput>, Enumerable<ModIssuePostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ModIssuePostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ModIssuePostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ModIssuePostCreateManyAuthorInputEnvelope
    set?: Enumerable<ModIssuePostWhereUniqueInput>
    disconnect?: Enumerable<ModIssuePostWhereUniqueInput>
    delete?: Enumerable<ModIssuePostWhereUniqueInput>
    connect?: Enumerable<ModIssuePostWhereUniqueInput>
    update?: Enumerable<ModIssuePostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ModIssuePostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ModIssuePostScalarWhereInput>
  }

  export type ModsListUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ModsListCreateWithoutAuthorInput>, Enumerable<ModsListUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ModsListCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ModsListUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ModsListCreateManyAuthorInputEnvelope
    set?: Enumerable<ModsListWhereUniqueInput>
    disconnect?: Enumerable<ModsListWhereUniqueInput>
    delete?: Enumerable<ModsListWhereUniqueInput>
    connect?: Enumerable<ModsListWhereUniqueInput>
    update?: Enumerable<ModsListUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ModsListUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ModsListScalarWhereInput>
  }

  export type ModsFavoritsUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ModsFavoritsCreateWithoutUserInput>, Enumerable<ModsFavoritsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ModsFavoritsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ModsFavoritsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ModsFavoritsCreateManyUserInputEnvelope
    set?: Enumerable<ModsFavoritsWhereUniqueInput>
    disconnect?: Enumerable<ModsFavoritsWhereUniqueInput>
    delete?: Enumerable<ModsFavoritsWhereUniqueInput>
    connect?: Enumerable<ModsFavoritsWhereUniqueInput>
    update?: Enumerable<ModsFavoritsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ModsFavoritsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ModsFavoritsScalarWhereInput>
  }

  export type ModSubscribersUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ModSubscribersCreateWithoutUserInput>, Enumerable<ModSubscribersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ModSubscribersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ModSubscribersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ModSubscribersCreateManyUserInputEnvelope
    set?: Enumerable<ModSubscribersWhereUniqueInput>
    disconnect?: Enumerable<ModSubscribersWhereUniqueInput>
    delete?: Enumerable<ModSubscribersWhereUniqueInput>
    connect?: Enumerable<ModSubscribersWhereUniqueInput>
    update?: Enumerable<ModSubscribersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ModSubscribersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ModSubscribersScalarWhereInput>
  }

  export type ModDownloadUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ModDownloadCreateWithoutUserInput>, Enumerable<ModDownloadUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ModDownloadCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ModDownloadUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ModDownloadCreateManyUserInputEnvelope
    set?: Enumerable<ModDownloadWhereUniqueInput>
    disconnect?: Enumerable<ModDownloadWhereUniqueInput>
    delete?: Enumerable<ModDownloadWhereUniqueInput>
    connect?: Enumerable<ModDownloadWhereUniqueInput>
    update?: Enumerable<ModDownloadUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ModDownloadUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ModDownloadScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserAuthUncheckedUpdateOneWithoutUserInput = {
    create?: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutUserInput
    upsert?: UserAuthUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserAuthWhereUniqueInput
    update?: XOR<UserAuthUpdateWithoutUserInput, UserAuthUncheckedUpdateWithoutUserInput>
  }

  export type ModsCollectionUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ModsCollectionCreateWithoutAuthorInput>, Enumerable<ModsCollectionUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ModsCollectionCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ModsCollectionUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ModsCollectionCreateManyAuthorInputEnvelope
    set?: Enumerable<ModsCollectionWhereUniqueInput>
    disconnect?: Enumerable<ModsCollectionWhereUniqueInput>
    delete?: Enumerable<ModsCollectionWhereUniqueInput>
    connect?: Enumerable<ModsCollectionWhereUniqueInput>
    update?: Enumerable<ModsCollectionUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ModsCollectionUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ModsCollectionScalarWhereInput>
  }

  export type ModAuthorUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ModAuthorCreateWithoutUserInput>, Enumerable<ModAuthorUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ModAuthorCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ModAuthorUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ModAuthorCreateManyUserInputEnvelope
    set?: Enumerable<ModAuthorWhereUniqueInput>
    disconnect?: Enumerable<ModAuthorWhereUniqueInput>
    delete?: Enumerable<ModAuthorWhereUniqueInput>
    connect?: Enumerable<ModAuthorWhereUniqueInput>
    update?: Enumerable<ModAuthorUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ModAuthorUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ModAuthorScalarWhereInput>
  }

  export type ModIssueUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ModIssueCreateWithoutAuthorInput>, Enumerable<ModIssueUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ModIssueCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ModIssueUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ModIssueCreateManyAuthorInputEnvelope
    set?: Enumerable<ModIssueWhereUniqueInput>
    disconnect?: Enumerable<ModIssueWhereUniqueInput>
    delete?: Enumerable<ModIssueWhereUniqueInput>
    connect?: Enumerable<ModIssueWhereUniqueInput>
    update?: Enumerable<ModIssueUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ModIssueUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ModIssueScalarWhereInput>
  }

  export type ModIssuePostUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ModIssuePostCreateWithoutAuthorInput>, Enumerable<ModIssuePostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ModIssuePostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ModIssuePostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ModIssuePostCreateManyAuthorInputEnvelope
    set?: Enumerable<ModIssuePostWhereUniqueInput>
    disconnect?: Enumerable<ModIssuePostWhereUniqueInput>
    delete?: Enumerable<ModIssuePostWhereUniqueInput>
    connect?: Enumerable<ModIssuePostWhereUniqueInput>
    update?: Enumerable<ModIssuePostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ModIssuePostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ModIssuePostScalarWhereInput>
  }

  export type ModsListUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ModsListCreateWithoutAuthorInput>, Enumerable<ModsListUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ModsListCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ModsListUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ModsListCreateManyAuthorInputEnvelope
    set?: Enumerable<ModsListWhereUniqueInput>
    disconnect?: Enumerable<ModsListWhereUniqueInput>
    delete?: Enumerable<ModsListWhereUniqueInput>
    connect?: Enumerable<ModsListWhereUniqueInput>
    update?: Enumerable<ModsListUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ModsListUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ModsListScalarWhereInput>
  }

  export type ModsFavoritsUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ModsFavoritsCreateWithoutUserInput>, Enumerable<ModsFavoritsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ModsFavoritsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ModsFavoritsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ModsFavoritsCreateManyUserInputEnvelope
    set?: Enumerable<ModsFavoritsWhereUniqueInput>
    disconnect?: Enumerable<ModsFavoritsWhereUniqueInput>
    delete?: Enumerable<ModsFavoritsWhereUniqueInput>
    connect?: Enumerable<ModsFavoritsWhereUniqueInput>
    update?: Enumerable<ModsFavoritsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ModsFavoritsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ModsFavoritsScalarWhereInput>
  }

  export type ModSubscribersUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ModSubscribersCreateWithoutUserInput>, Enumerable<ModSubscribersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ModSubscribersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ModSubscribersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ModSubscribersCreateManyUserInputEnvelope
    set?: Enumerable<ModSubscribersWhereUniqueInput>
    disconnect?: Enumerable<ModSubscribersWhereUniqueInput>
    delete?: Enumerable<ModSubscribersWhereUniqueInput>
    connect?: Enumerable<ModSubscribersWhereUniqueInput>
    update?: Enumerable<ModSubscribersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ModSubscribersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ModSubscribersScalarWhereInput>
  }

  export type ModDownloadUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ModDownloadCreateWithoutUserInput>, Enumerable<ModDownloadUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ModDownloadCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ModDownloadUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ModDownloadCreateManyUserInputEnvelope
    set?: Enumerable<ModDownloadWhereUniqueInput>
    disconnect?: Enumerable<ModDownloadWhereUniqueInput>
    delete?: Enumerable<ModDownloadWhereUniqueInput>
    connect?: Enumerable<ModDownloadWhereUniqueInput>
    update?: Enumerable<ModDownloadUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ModDownloadUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ModDownloadScalarWhereInput>
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

  export type ModsCollectionCreateNestedOneWithoutModsInput = {
    create?: XOR<ModsCollectionCreateWithoutModsInput, ModsCollectionUncheckedCreateWithoutModsInput>
    connectOrCreate?: ModsCollectionCreateOrConnectWithoutModsInput
    connect?: ModsCollectionWhereUniqueInput
  }

  export type ModImageCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<ModImageCreateWithoutModInput>, Enumerable<ModImageUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModImageCreateOrConnectWithoutModInput>
    createMany?: ModImageCreateManyModInputEnvelope
    connect?: Enumerable<ModImageWhereUniqueInput>
  }

  export type ModAuthorCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<ModAuthorCreateWithoutModInput>, Enumerable<ModAuthorUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModAuthorCreateOrConnectWithoutModInput>
    createMany?: ModAuthorCreateManyModInputEnvelope
    connect?: Enumerable<ModAuthorWhereUniqueInput>
  }

  export type ModTagCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<ModTagCreateWithoutModInput>, Enumerable<ModTagUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModTagCreateOrConnectWithoutModInput>
    connect?: Enumerable<ModTagWhereUniqueInput>
  }

  export type ModVersionCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<ModVersionCreateWithoutModInput>, Enumerable<ModVersionUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModVersionCreateOrConnectWithoutModInput>
    createMany?: ModVersionCreateManyModInputEnvelope
    connect?: Enumerable<ModVersionWhereUniqueInput>
  }

  export type ModsListCreateNestedManyWithoutModsInput = {
    create?: XOR<Enumerable<ModsListCreateWithoutModsInput>, Enumerable<ModsListUncheckedCreateWithoutModsInput>>
    connectOrCreate?: Enumerable<ModsListCreateOrConnectWithoutModsInput>
    connect?: Enumerable<ModsListWhereUniqueInput>
  }

  export type ModIssueCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<ModIssueCreateWithoutModInput>, Enumerable<ModIssueUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModIssueCreateOrConnectWithoutModInput>
    createMany?: ModIssueCreateManyModInputEnvelope
    connect?: Enumerable<ModIssueWhereUniqueInput>
  }

  export type ModsFavoritsCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<ModsFavoritsCreateWithoutModInput>, Enumerable<ModsFavoritsUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModsFavoritsCreateOrConnectWithoutModInput>
    createMany?: ModsFavoritsCreateManyModInputEnvelope
    connect?: Enumerable<ModsFavoritsWhereUniqueInput>
  }

  export type ModSubscribersCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<ModSubscribersCreateWithoutModInput>, Enumerable<ModSubscribersUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModSubscribersCreateOrConnectWithoutModInput>
    createMany?: ModSubscribersCreateManyModInputEnvelope
    connect?: Enumerable<ModSubscribersWhereUniqueInput>
  }

  export type ModDownloadCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<ModDownloadCreateWithoutModInput>, Enumerable<ModDownloadUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModDownloadCreateOrConnectWithoutModInput>
    createMany?: ModDownloadCreateManyModInputEnvelope
    connect?: Enumerable<ModDownloadWhereUniqueInput>
  }

  export type ModImageUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<ModImageCreateWithoutModInput>, Enumerable<ModImageUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModImageCreateOrConnectWithoutModInput>
    createMany?: ModImageCreateManyModInputEnvelope
    connect?: Enumerable<ModImageWhereUniqueInput>
  }

  export type ModAuthorUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<ModAuthorCreateWithoutModInput>, Enumerable<ModAuthorUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModAuthorCreateOrConnectWithoutModInput>
    createMany?: ModAuthorCreateManyModInputEnvelope
    connect?: Enumerable<ModAuthorWhereUniqueInput>
  }

  export type ModTagUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<ModTagCreateWithoutModInput>, Enumerable<ModTagUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModTagCreateOrConnectWithoutModInput>
    connect?: Enumerable<ModTagWhereUniqueInput>
  }

  export type ModVersionUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<ModVersionCreateWithoutModInput>, Enumerable<ModVersionUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModVersionCreateOrConnectWithoutModInput>
    createMany?: ModVersionCreateManyModInputEnvelope
    connect?: Enumerable<ModVersionWhereUniqueInput>
  }

  export type ModsListUncheckedCreateNestedManyWithoutModsInput = {
    create?: XOR<Enumerable<ModsListCreateWithoutModsInput>, Enumerable<ModsListUncheckedCreateWithoutModsInput>>
    connectOrCreate?: Enumerable<ModsListCreateOrConnectWithoutModsInput>
    connect?: Enumerable<ModsListWhereUniqueInput>
  }

  export type ModIssueUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<ModIssueCreateWithoutModInput>, Enumerable<ModIssueUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModIssueCreateOrConnectWithoutModInput>
    createMany?: ModIssueCreateManyModInputEnvelope
    connect?: Enumerable<ModIssueWhereUniqueInput>
  }

  export type ModsFavoritsUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<ModsFavoritsCreateWithoutModInput>, Enumerable<ModsFavoritsUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModsFavoritsCreateOrConnectWithoutModInput>
    createMany?: ModsFavoritsCreateManyModInputEnvelope
    connect?: Enumerable<ModsFavoritsWhereUniqueInput>
  }

  export type ModSubscribersUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<ModSubscribersCreateWithoutModInput>, Enumerable<ModSubscribersUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModSubscribersCreateOrConnectWithoutModInput>
    createMany?: ModSubscribersCreateManyModInputEnvelope
    connect?: Enumerable<ModSubscribersWhereUniqueInput>
  }

  export type ModDownloadUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<Enumerable<ModDownloadCreateWithoutModInput>, Enumerable<ModDownloadUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModDownloadCreateOrConnectWithoutModInput>
    createMany?: ModDownloadCreateManyModInputEnvelope
    connect?: Enumerable<ModDownloadWhereUniqueInput>
  }

  export type ModsCollectionUpdateOneRequiredWithoutModsInput = {
    create?: XOR<ModsCollectionCreateWithoutModsInput, ModsCollectionUncheckedCreateWithoutModsInput>
    connectOrCreate?: ModsCollectionCreateOrConnectWithoutModsInput
    upsert?: ModsCollectionUpsertWithoutModsInput
    connect?: ModsCollectionWhereUniqueInput
    update?: XOR<ModsCollectionUpdateWithoutModsInput, ModsCollectionUncheckedUpdateWithoutModsInput>
  }

  export type ModImageUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<ModImageCreateWithoutModInput>, Enumerable<ModImageUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModImageCreateOrConnectWithoutModInput>
    upsert?: Enumerable<ModImageUpsertWithWhereUniqueWithoutModInput>
    createMany?: ModImageCreateManyModInputEnvelope
    set?: Enumerable<ModImageWhereUniqueInput>
    disconnect?: Enumerable<ModImageWhereUniqueInput>
    delete?: Enumerable<ModImageWhereUniqueInput>
    connect?: Enumerable<ModImageWhereUniqueInput>
    update?: Enumerable<ModImageUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<ModImageUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<ModImageScalarWhereInput>
  }

  export type ModAuthorUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<ModAuthorCreateWithoutModInput>, Enumerable<ModAuthorUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModAuthorCreateOrConnectWithoutModInput>
    upsert?: Enumerable<ModAuthorUpsertWithWhereUniqueWithoutModInput>
    createMany?: ModAuthorCreateManyModInputEnvelope
    set?: Enumerable<ModAuthorWhereUniqueInput>
    disconnect?: Enumerable<ModAuthorWhereUniqueInput>
    delete?: Enumerable<ModAuthorWhereUniqueInput>
    connect?: Enumerable<ModAuthorWhereUniqueInput>
    update?: Enumerable<ModAuthorUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<ModAuthorUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<ModAuthorScalarWhereInput>
  }

  export type ModTagUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<ModTagCreateWithoutModInput>, Enumerable<ModTagUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModTagCreateOrConnectWithoutModInput>
    upsert?: Enumerable<ModTagUpsertWithWhereUniqueWithoutModInput>
    set?: Enumerable<ModTagWhereUniqueInput>
    disconnect?: Enumerable<ModTagWhereUniqueInput>
    delete?: Enumerable<ModTagWhereUniqueInput>
    connect?: Enumerable<ModTagWhereUniqueInput>
    update?: Enumerable<ModTagUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<ModTagUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<ModTagScalarWhereInput>
  }

  export type ModVersionUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<ModVersionCreateWithoutModInput>, Enumerable<ModVersionUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModVersionCreateOrConnectWithoutModInput>
    upsert?: Enumerable<ModVersionUpsertWithWhereUniqueWithoutModInput>
    createMany?: ModVersionCreateManyModInputEnvelope
    set?: Enumerable<ModVersionWhereUniqueInput>
    disconnect?: Enumerable<ModVersionWhereUniqueInput>
    delete?: Enumerable<ModVersionWhereUniqueInput>
    connect?: Enumerable<ModVersionWhereUniqueInput>
    update?: Enumerable<ModVersionUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<ModVersionUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<ModVersionScalarWhereInput>
  }

  export type ModsListUpdateManyWithoutModsInput = {
    create?: XOR<Enumerable<ModsListCreateWithoutModsInput>, Enumerable<ModsListUncheckedCreateWithoutModsInput>>
    connectOrCreate?: Enumerable<ModsListCreateOrConnectWithoutModsInput>
    upsert?: Enumerable<ModsListUpsertWithWhereUniqueWithoutModsInput>
    set?: Enumerable<ModsListWhereUniqueInput>
    disconnect?: Enumerable<ModsListWhereUniqueInput>
    delete?: Enumerable<ModsListWhereUniqueInput>
    connect?: Enumerable<ModsListWhereUniqueInput>
    update?: Enumerable<ModsListUpdateWithWhereUniqueWithoutModsInput>
    updateMany?: Enumerable<ModsListUpdateManyWithWhereWithoutModsInput>
    deleteMany?: Enumerable<ModsListScalarWhereInput>
  }

  export type ModIssueUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<ModIssueCreateWithoutModInput>, Enumerable<ModIssueUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModIssueCreateOrConnectWithoutModInput>
    upsert?: Enumerable<ModIssueUpsertWithWhereUniqueWithoutModInput>
    createMany?: ModIssueCreateManyModInputEnvelope
    set?: Enumerable<ModIssueWhereUniqueInput>
    disconnect?: Enumerable<ModIssueWhereUniqueInput>
    delete?: Enumerable<ModIssueWhereUniqueInput>
    connect?: Enumerable<ModIssueWhereUniqueInput>
    update?: Enumerable<ModIssueUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<ModIssueUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<ModIssueScalarWhereInput>
  }

  export type ModsFavoritsUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<ModsFavoritsCreateWithoutModInput>, Enumerable<ModsFavoritsUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModsFavoritsCreateOrConnectWithoutModInput>
    upsert?: Enumerable<ModsFavoritsUpsertWithWhereUniqueWithoutModInput>
    createMany?: ModsFavoritsCreateManyModInputEnvelope
    set?: Enumerable<ModsFavoritsWhereUniqueInput>
    disconnect?: Enumerable<ModsFavoritsWhereUniqueInput>
    delete?: Enumerable<ModsFavoritsWhereUniqueInput>
    connect?: Enumerable<ModsFavoritsWhereUniqueInput>
    update?: Enumerable<ModsFavoritsUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<ModsFavoritsUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<ModsFavoritsScalarWhereInput>
  }

  export type ModSubscribersUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<ModSubscribersCreateWithoutModInput>, Enumerable<ModSubscribersUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModSubscribersCreateOrConnectWithoutModInput>
    upsert?: Enumerable<ModSubscribersUpsertWithWhereUniqueWithoutModInput>
    createMany?: ModSubscribersCreateManyModInputEnvelope
    set?: Enumerable<ModSubscribersWhereUniqueInput>
    disconnect?: Enumerable<ModSubscribersWhereUniqueInput>
    delete?: Enumerable<ModSubscribersWhereUniqueInput>
    connect?: Enumerable<ModSubscribersWhereUniqueInput>
    update?: Enumerable<ModSubscribersUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<ModSubscribersUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<ModSubscribersScalarWhereInput>
  }

  export type ModDownloadUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<ModDownloadCreateWithoutModInput>, Enumerable<ModDownloadUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModDownloadCreateOrConnectWithoutModInput>
    upsert?: Enumerable<ModDownloadUpsertWithWhereUniqueWithoutModInput>
    createMany?: ModDownloadCreateManyModInputEnvelope
    set?: Enumerable<ModDownloadWhereUniqueInput>
    disconnect?: Enumerable<ModDownloadWhereUniqueInput>
    delete?: Enumerable<ModDownloadWhereUniqueInput>
    connect?: Enumerable<ModDownloadWhereUniqueInput>
    update?: Enumerable<ModDownloadUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<ModDownloadUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<ModDownloadScalarWhereInput>
  }

  export type ModImageUncheckedUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<ModImageCreateWithoutModInput>, Enumerable<ModImageUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModImageCreateOrConnectWithoutModInput>
    upsert?: Enumerable<ModImageUpsertWithWhereUniqueWithoutModInput>
    createMany?: ModImageCreateManyModInputEnvelope
    set?: Enumerable<ModImageWhereUniqueInput>
    disconnect?: Enumerable<ModImageWhereUniqueInput>
    delete?: Enumerable<ModImageWhereUniqueInput>
    connect?: Enumerable<ModImageWhereUniqueInput>
    update?: Enumerable<ModImageUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<ModImageUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<ModImageScalarWhereInput>
  }

  export type ModAuthorUncheckedUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<ModAuthorCreateWithoutModInput>, Enumerable<ModAuthorUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModAuthorCreateOrConnectWithoutModInput>
    upsert?: Enumerable<ModAuthorUpsertWithWhereUniqueWithoutModInput>
    createMany?: ModAuthorCreateManyModInputEnvelope
    set?: Enumerable<ModAuthorWhereUniqueInput>
    disconnect?: Enumerable<ModAuthorWhereUniqueInput>
    delete?: Enumerable<ModAuthorWhereUniqueInput>
    connect?: Enumerable<ModAuthorWhereUniqueInput>
    update?: Enumerable<ModAuthorUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<ModAuthorUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<ModAuthorScalarWhereInput>
  }

  export type ModTagUncheckedUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<ModTagCreateWithoutModInput>, Enumerable<ModTagUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModTagCreateOrConnectWithoutModInput>
    upsert?: Enumerable<ModTagUpsertWithWhereUniqueWithoutModInput>
    set?: Enumerable<ModTagWhereUniqueInput>
    disconnect?: Enumerable<ModTagWhereUniqueInput>
    delete?: Enumerable<ModTagWhereUniqueInput>
    connect?: Enumerable<ModTagWhereUniqueInput>
    update?: Enumerable<ModTagUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<ModTagUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<ModTagScalarWhereInput>
  }

  export type ModVersionUncheckedUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<ModVersionCreateWithoutModInput>, Enumerable<ModVersionUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModVersionCreateOrConnectWithoutModInput>
    upsert?: Enumerable<ModVersionUpsertWithWhereUniqueWithoutModInput>
    createMany?: ModVersionCreateManyModInputEnvelope
    set?: Enumerable<ModVersionWhereUniqueInput>
    disconnect?: Enumerable<ModVersionWhereUniqueInput>
    delete?: Enumerable<ModVersionWhereUniqueInput>
    connect?: Enumerable<ModVersionWhereUniqueInput>
    update?: Enumerable<ModVersionUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<ModVersionUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<ModVersionScalarWhereInput>
  }

  export type ModsListUncheckedUpdateManyWithoutModsInput = {
    create?: XOR<Enumerable<ModsListCreateWithoutModsInput>, Enumerable<ModsListUncheckedCreateWithoutModsInput>>
    connectOrCreate?: Enumerable<ModsListCreateOrConnectWithoutModsInput>
    upsert?: Enumerable<ModsListUpsertWithWhereUniqueWithoutModsInput>
    set?: Enumerable<ModsListWhereUniqueInput>
    disconnect?: Enumerable<ModsListWhereUniqueInput>
    delete?: Enumerable<ModsListWhereUniqueInput>
    connect?: Enumerable<ModsListWhereUniqueInput>
    update?: Enumerable<ModsListUpdateWithWhereUniqueWithoutModsInput>
    updateMany?: Enumerable<ModsListUpdateManyWithWhereWithoutModsInput>
    deleteMany?: Enumerable<ModsListScalarWhereInput>
  }

  export type ModIssueUncheckedUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<ModIssueCreateWithoutModInput>, Enumerable<ModIssueUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModIssueCreateOrConnectWithoutModInput>
    upsert?: Enumerable<ModIssueUpsertWithWhereUniqueWithoutModInput>
    createMany?: ModIssueCreateManyModInputEnvelope
    set?: Enumerable<ModIssueWhereUniqueInput>
    disconnect?: Enumerable<ModIssueWhereUniqueInput>
    delete?: Enumerable<ModIssueWhereUniqueInput>
    connect?: Enumerable<ModIssueWhereUniqueInput>
    update?: Enumerable<ModIssueUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<ModIssueUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<ModIssueScalarWhereInput>
  }

  export type ModsFavoritsUncheckedUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<ModsFavoritsCreateWithoutModInput>, Enumerable<ModsFavoritsUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModsFavoritsCreateOrConnectWithoutModInput>
    upsert?: Enumerable<ModsFavoritsUpsertWithWhereUniqueWithoutModInput>
    createMany?: ModsFavoritsCreateManyModInputEnvelope
    set?: Enumerable<ModsFavoritsWhereUniqueInput>
    disconnect?: Enumerable<ModsFavoritsWhereUniqueInput>
    delete?: Enumerable<ModsFavoritsWhereUniqueInput>
    connect?: Enumerable<ModsFavoritsWhereUniqueInput>
    update?: Enumerable<ModsFavoritsUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<ModsFavoritsUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<ModsFavoritsScalarWhereInput>
  }

  export type ModSubscribersUncheckedUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<ModSubscribersCreateWithoutModInput>, Enumerable<ModSubscribersUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModSubscribersCreateOrConnectWithoutModInput>
    upsert?: Enumerable<ModSubscribersUpsertWithWhereUniqueWithoutModInput>
    createMany?: ModSubscribersCreateManyModInputEnvelope
    set?: Enumerable<ModSubscribersWhereUniqueInput>
    disconnect?: Enumerable<ModSubscribersWhereUniqueInput>
    delete?: Enumerable<ModSubscribersWhereUniqueInput>
    connect?: Enumerable<ModSubscribersWhereUniqueInput>
    update?: Enumerable<ModSubscribersUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<ModSubscribersUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<ModSubscribersScalarWhereInput>
  }

  export type ModDownloadUncheckedUpdateManyWithoutModInput = {
    create?: XOR<Enumerable<ModDownloadCreateWithoutModInput>, Enumerable<ModDownloadUncheckedCreateWithoutModInput>>
    connectOrCreate?: Enumerable<ModDownloadCreateOrConnectWithoutModInput>
    upsert?: Enumerable<ModDownloadUpsertWithWhereUniqueWithoutModInput>
    createMany?: ModDownloadCreateManyModInputEnvelope
    set?: Enumerable<ModDownloadWhereUniqueInput>
    disconnect?: Enumerable<ModDownloadWhereUniqueInput>
    delete?: Enumerable<ModDownloadWhereUniqueInput>
    connect?: Enumerable<ModDownloadWhereUniqueInput>
    update?: Enumerable<ModDownloadUpdateWithWhereUniqueWithoutModInput>
    updateMany?: Enumerable<ModDownloadUpdateManyWithWhereWithoutModInput>
    deleteMany?: Enumerable<ModDownloadScalarWhereInput>
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

  export type ModDownloadCreateNestedManyWithoutVersionInput = {
    create?: XOR<Enumerable<ModDownloadCreateWithoutVersionInput>, Enumerable<ModDownloadUncheckedCreateWithoutVersionInput>>
    connectOrCreate?: Enumerable<ModDownloadCreateOrConnectWithoutVersionInput>
    createMany?: ModDownloadCreateManyVersionInputEnvelope
    connect?: Enumerable<ModDownloadWhereUniqueInput>
  }

  export type ModDownloadUncheckedCreateNestedManyWithoutVersionInput = {
    create?: XOR<Enumerable<ModDownloadCreateWithoutVersionInput>, Enumerable<ModDownloadUncheckedCreateWithoutVersionInput>>
    connectOrCreate?: Enumerable<ModDownloadCreateOrConnectWithoutVersionInput>
    createMany?: ModDownloadCreateManyVersionInputEnvelope
    connect?: Enumerable<ModDownloadWhereUniqueInput>
  }

  export type ModUpdateOneRequiredWithoutVersionsInput = {
    create?: XOR<ModCreateWithoutVersionsInput, ModUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ModCreateOrConnectWithoutVersionsInput
    upsert?: ModUpsertWithoutVersionsInput
    connect?: ModWhereUniqueInput
    update?: XOR<ModUpdateWithoutVersionsInput, ModUncheckedUpdateWithoutVersionsInput>
  }

  export type ModDownloadUpdateManyWithoutVersionInput = {
    create?: XOR<Enumerable<ModDownloadCreateWithoutVersionInput>, Enumerable<ModDownloadUncheckedCreateWithoutVersionInput>>
    connectOrCreate?: Enumerable<ModDownloadCreateOrConnectWithoutVersionInput>
    upsert?: Enumerable<ModDownloadUpsertWithWhereUniqueWithoutVersionInput>
    createMany?: ModDownloadCreateManyVersionInputEnvelope
    set?: Enumerable<ModDownloadWhereUniqueInput>
    disconnect?: Enumerable<ModDownloadWhereUniqueInput>
    delete?: Enumerable<ModDownloadWhereUniqueInput>
    connect?: Enumerable<ModDownloadWhereUniqueInput>
    update?: Enumerable<ModDownloadUpdateWithWhereUniqueWithoutVersionInput>
    updateMany?: Enumerable<ModDownloadUpdateManyWithWhereWithoutVersionInput>
    deleteMany?: Enumerable<ModDownloadScalarWhereInput>
  }

  export type ModDownloadUncheckedUpdateManyWithoutVersionInput = {
    create?: XOR<Enumerable<ModDownloadCreateWithoutVersionInput>, Enumerable<ModDownloadUncheckedCreateWithoutVersionInput>>
    connectOrCreate?: Enumerable<ModDownloadCreateOrConnectWithoutVersionInput>
    upsert?: Enumerable<ModDownloadUpsertWithWhereUniqueWithoutVersionInput>
    createMany?: ModDownloadCreateManyVersionInputEnvelope
    set?: Enumerable<ModDownloadWhereUniqueInput>
    disconnect?: Enumerable<ModDownloadWhereUniqueInput>
    delete?: Enumerable<ModDownloadWhereUniqueInput>
    connect?: Enumerable<ModDownloadWhereUniqueInput>
    update?: Enumerable<ModDownloadUpdateWithWhereUniqueWithoutVersionInput>
    updateMany?: Enumerable<ModDownloadUpdateManyWithWhereWithoutVersionInput>
    deleteMany?: Enumerable<ModDownloadScalarWhereInput>
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

  export type ModIssuePostCreateNestedManyWithoutIssueInput = {
    create?: XOR<Enumerable<ModIssuePostCreateWithoutIssueInput>, Enumerable<ModIssuePostUncheckedCreateWithoutIssueInput>>
    connectOrCreate?: Enumerable<ModIssuePostCreateOrConnectWithoutIssueInput>
    createMany?: ModIssuePostCreateManyIssueInputEnvelope
    connect?: Enumerable<ModIssuePostWhereUniqueInput>
  }

  export type ModIssuePostUncheckedCreateNestedManyWithoutIssueInput = {
    create?: XOR<Enumerable<ModIssuePostCreateWithoutIssueInput>, Enumerable<ModIssuePostUncheckedCreateWithoutIssueInput>>
    connectOrCreate?: Enumerable<ModIssuePostCreateOrConnectWithoutIssueInput>
    createMany?: ModIssuePostCreateManyIssueInputEnvelope
    connect?: Enumerable<ModIssuePostWhereUniqueInput>
  }

  export type EnumModIssueTypeFieldUpdateOperationsInput = {
    set?: ModIssueType
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

  export type ModIssuePostUpdateManyWithoutIssueInput = {
    create?: XOR<Enumerable<ModIssuePostCreateWithoutIssueInput>, Enumerable<ModIssuePostUncheckedCreateWithoutIssueInput>>
    connectOrCreate?: Enumerable<ModIssuePostCreateOrConnectWithoutIssueInput>
    upsert?: Enumerable<ModIssuePostUpsertWithWhereUniqueWithoutIssueInput>
    createMany?: ModIssuePostCreateManyIssueInputEnvelope
    set?: Enumerable<ModIssuePostWhereUniqueInput>
    disconnect?: Enumerable<ModIssuePostWhereUniqueInput>
    delete?: Enumerable<ModIssuePostWhereUniqueInput>
    connect?: Enumerable<ModIssuePostWhereUniqueInput>
    update?: Enumerable<ModIssuePostUpdateWithWhereUniqueWithoutIssueInput>
    updateMany?: Enumerable<ModIssuePostUpdateManyWithWhereWithoutIssueInput>
    deleteMany?: Enumerable<ModIssuePostScalarWhereInput>
  }

  export type ModIssuePostUncheckedUpdateManyWithoutIssueInput = {
    create?: XOR<Enumerable<ModIssuePostCreateWithoutIssueInput>, Enumerable<ModIssuePostUncheckedCreateWithoutIssueInput>>
    connectOrCreate?: Enumerable<ModIssuePostCreateOrConnectWithoutIssueInput>
    upsert?: Enumerable<ModIssuePostUpsertWithWhereUniqueWithoutIssueInput>
    createMany?: ModIssuePostCreateManyIssueInputEnvelope
    set?: Enumerable<ModIssuePostWhereUniqueInput>
    disconnect?: Enumerable<ModIssuePostWhereUniqueInput>
    delete?: Enumerable<ModIssuePostWhereUniqueInput>
    connect?: Enumerable<ModIssuePostWhereUniqueInput>
    update?: Enumerable<ModIssuePostUpdateWithWhereUniqueWithoutIssueInput>
    updateMany?: Enumerable<ModIssuePostUpdateManyWithWhereWithoutIssueInput>
    deleteMany?: Enumerable<ModIssuePostScalarWhereInput>
  }

  export type ModIssueCreateNestedOneWithoutModIssuePostInput = {
    create?: XOR<ModIssueCreateWithoutModIssuePostInput, ModIssueUncheckedCreateWithoutModIssuePostInput>
    connectOrCreate?: ModIssueCreateOrConnectWithoutModIssuePostInput
    connect?: ModIssueWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutModIssuePostsInput = {
    create?: XOR<UserCreateWithoutModIssuePostsInput, UserUncheckedCreateWithoutModIssuePostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModIssuePostsInput
    connect?: UserWhereUniqueInput
  }

  export type ModIssueUpdateOneRequiredWithoutModIssuePostInput = {
    create?: XOR<ModIssueCreateWithoutModIssuePostInput, ModIssueUncheckedCreateWithoutModIssuePostInput>
    connectOrCreate?: ModIssueCreateOrConnectWithoutModIssuePostInput
    upsert?: ModIssueUpsertWithoutModIssuePostInput
    connect?: ModIssueWhereUniqueInput
    update?: XOR<ModIssueUpdateWithoutModIssuePostInput, ModIssueUncheckedUpdateWithoutModIssuePostInput>
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

  export type ModVersionCreateNestedOneWithoutDownloadsInput = {
    create?: XOR<ModVersionCreateWithoutDownloadsInput, ModVersionUncheckedCreateWithoutDownloadsInput>
    connectOrCreate?: ModVersionCreateOrConnectWithoutDownloadsInput
    connect?: ModVersionWhereUniqueInput
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

  export type ModVersionUpdateOneRequiredWithoutDownloadsInput = {
    create?: XOR<ModVersionCreateWithoutDownloadsInput, ModVersionUncheckedCreateWithoutDownloadsInput>
    connectOrCreate?: ModVersionCreateOrConnectWithoutDownloadsInput
    upsert?: ModVersionUpsertWithoutDownloadsInput
    connect?: ModVersionWhereUniqueInput
    update?: XOR<ModVersionUpdateWithoutDownloadsInput, ModVersionUncheckedUpdateWithoutDownloadsInput>
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

  export type NestedEnumModIssueTypeFilter = {
    equals?: ModIssueType
    in?: Enumerable<ModIssueType>
    notIn?: Enumerable<ModIssueType>
    not?: NestedEnumModIssueTypeFilter | ModIssueType
  }

  export type NestedEnumModIssueTypeWithAggregatesFilter = {
    equals?: ModIssueType
    in?: Enumerable<ModIssueType>
    notIn?: Enumerable<ModIssueType>
    not?: NestedEnumModIssueTypeWithAggregatesFilter | ModIssueType
    _count?: NestedIntFilter
    _min?: NestedEnumModIssueTypeFilter
    _max?: NestedEnumModIssueTypeFilter
  }

  export type UserAuthCreateWithoutUserInput = {
    email: string
    password: string
  }

  export type UserAuthUncheckedCreateWithoutUserInput = {
    email: string
    password: string
  }

  export type UserAuthCreateOrConnectWithoutUserInput = {
    where: UserAuthWhereUniqueInput
    create: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
  }

  export type ModsCollectionCreateWithoutAuthorInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    Mods?: ModCreateNestedManyWithoutCollectionInput
  }

  export type ModsCollectionUncheckedCreateWithoutAuthorInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    Mods?: ModUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type ModsCollectionCreateOrConnectWithoutAuthorInput = {
    where: ModsCollectionWhereUniqueInput
    create: XOR<ModsCollectionCreateWithoutAuthorInput, ModsCollectionUncheckedCreateWithoutAuthorInput>
  }

  export type ModsCollectionCreateManyAuthorInputEnvelope = {
    data: Enumerable<ModsCollectionCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type ModAuthorCreateWithoutUserInput = {
    type: number
    Mod: ModCreateNestedOneWithoutAuthorsInput
  }

  export type ModAuthorUncheckedCreateWithoutUserInput = {
    mod_id: number
    type: number
  }

  export type ModAuthorCreateOrConnectWithoutUserInput = {
    where: ModAuthorWhereUniqueInput
    create: XOR<ModAuthorCreateWithoutUserInput, ModAuthorUncheckedCreateWithoutUserInput>
  }

  export type ModAuthorCreateManyUserInputEnvelope = {
    data: Enumerable<ModAuthorCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ModIssueCreateWithoutAuthorInput = {
    name: string
    type: ModIssueType
    createDate?: Date | string
    Mod: ModCreateNestedOneWithoutIssuesInput
    ModIssuePost?: ModIssuePostCreateNestedManyWithoutIssueInput
  }

  export type ModIssueUncheckedCreateWithoutAuthorInput = {
    id?: number
    mod_id: number
    name: string
    type: ModIssueType
    createDate?: Date | string
    ModIssuePost?: ModIssuePostUncheckedCreateNestedManyWithoutIssueInput
  }

  export type ModIssueCreateOrConnectWithoutAuthorInput = {
    where: ModIssueWhereUniqueInput
    create: XOR<ModIssueCreateWithoutAuthorInput, ModIssueUncheckedCreateWithoutAuthorInput>
  }

  export type ModIssueCreateManyAuthorInputEnvelope = {
    data: Enumerable<ModIssueCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type ModIssuePostCreateWithoutAuthorInput = {
    createDate?: Date | string
    text: string
    Issue: ModIssueCreateNestedOneWithoutModIssuePostInput
  }

  export type ModIssuePostUncheckedCreateWithoutAuthorInput = {
    id?: number
    issue_id: number
    createDate?: Date | string
    text: string
  }

  export type ModIssuePostCreateOrConnectWithoutAuthorInput = {
    where: ModIssuePostWhereUniqueInput
    create: XOR<ModIssuePostCreateWithoutAuthorInput, ModIssuePostUncheckedCreateWithoutAuthorInput>
  }

  export type ModIssuePostCreateManyAuthorInputEnvelope = {
    data: Enumerable<ModIssuePostCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type ModsListCreateWithoutAuthorInput = {
    is_public: boolean
    name: string
    Mods?: ModCreateNestedManyWithoutListsInput
  }

  export type ModsListUncheckedCreateWithoutAuthorInput = {
    id?: number
    is_public: boolean
    name: string
    Mods?: ModUncheckedCreateNestedManyWithoutListsInput
  }

  export type ModsListCreateOrConnectWithoutAuthorInput = {
    where: ModsListWhereUniqueInput
    create: XOR<ModsListCreateWithoutAuthorInput, ModsListUncheckedCreateWithoutAuthorInput>
  }

  export type ModsListCreateManyAuthorInputEnvelope = {
    data: Enumerable<ModsListCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type ModsFavoritsCreateWithoutUserInput = {
    Mod: ModCreateNestedOneWithoutFavoritsInput
  }

  export type ModsFavoritsUncheckedCreateWithoutUserInput = {
    mod_id: number
  }

  export type ModsFavoritsCreateOrConnectWithoutUserInput = {
    where: ModsFavoritsWhereUniqueInput
    create: XOR<ModsFavoritsCreateWithoutUserInput, ModsFavoritsUncheckedCreateWithoutUserInput>
  }

  export type ModsFavoritsCreateManyUserInputEnvelope = {
    data: Enumerable<ModsFavoritsCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ModSubscribersCreateWithoutUserInput = {
    Mod: ModCreateNestedOneWithoutSubscribersInput
  }

  export type ModSubscribersUncheckedCreateWithoutUserInput = {
    mod_id: number
  }

  export type ModSubscribersCreateOrConnectWithoutUserInput = {
    where: ModSubscribersWhereUniqueInput
    create: XOR<ModSubscribersCreateWithoutUserInput, ModSubscribersUncheckedCreateWithoutUserInput>
  }

  export type ModSubscribersCreateManyUserInputEnvelope = {
    data: Enumerable<ModSubscribersCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ModDownloadCreateWithoutUserInput = {
    Mod: ModCreateNestedOneWithoutDownloadsInput
    Version: ModVersionCreateNestedOneWithoutDownloadsInput
  }

  export type ModDownloadUncheckedCreateWithoutUserInput = {
    mod_id: number
    version_id: number
  }

  export type ModDownloadCreateOrConnectWithoutUserInput = {
    where: ModDownloadWhereUniqueInput
    create: XOR<ModDownloadCreateWithoutUserInput, ModDownloadUncheckedCreateWithoutUserInput>
  }

  export type ModDownloadCreateManyUserInputEnvelope = {
    data: Enumerable<ModDownloadCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserAuthUpsertWithoutUserInput = {
    update: XOR<UserAuthUpdateWithoutUserInput, UserAuthUncheckedUpdateWithoutUserInput>
    create: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
  }

  export type UserAuthUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserAuthUncheckedUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ModsCollectionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ModsCollectionWhereUniqueInput
    update: XOR<ModsCollectionUpdateWithoutAuthorInput, ModsCollectionUncheckedUpdateWithoutAuthorInput>
    create: XOR<ModsCollectionCreateWithoutAuthorInput, ModsCollectionUncheckedCreateWithoutAuthorInput>
  }

  export type ModsCollectionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ModsCollectionWhereUniqueInput
    data: XOR<ModsCollectionUpdateWithoutAuthorInput, ModsCollectionUncheckedUpdateWithoutAuthorInput>
  }

  export type ModsCollectionUpdateManyWithWhereWithoutAuthorInput = {
    where: ModsCollectionScalarWhereInput
    data: XOR<ModsCollectionUpdateManyMutationInput, ModsCollectionUncheckedUpdateManyWithoutModsCollectionsInput>
  }

  export type ModsCollectionScalarWhereInput = {
    AND?: Enumerable<ModsCollectionScalarWhereInput>
    OR?: Enumerable<ModsCollectionScalarWhereInput>
    NOT?: Enumerable<ModsCollectionScalarWhereInput>
    id?: IntFilter | number
    avatar?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    createDate?: DateTimeFilter | Date | string
    is_active?: BoolFilter | boolean
    author_id?: IntFilter | number
  }

  export type ModAuthorUpsertWithWhereUniqueWithoutUserInput = {
    where: ModAuthorWhereUniqueInput
    update: XOR<ModAuthorUpdateWithoutUserInput, ModAuthorUncheckedUpdateWithoutUserInput>
    create: XOR<ModAuthorCreateWithoutUserInput, ModAuthorUncheckedCreateWithoutUserInput>
  }

  export type ModAuthorUpdateWithWhereUniqueWithoutUserInput = {
    where: ModAuthorWhereUniqueInput
    data: XOR<ModAuthorUpdateWithoutUserInput, ModAuthorUncheckedUpdateWithoutUserInput>
  }

  export type ModAuthorUpdateManyWithWhereWithoutUserInput = {
    where: ModAuthorScalarWhereInput
    data: XOR<ModAuthorUpdateManyMutationInput, ModAuthorUncheckedUpdateManyWithoutModAuthorsInput>
  }

  export type ModAuthorScalarWhereInput = {
    AND?: Enumerable<ModAuthorScalarWhereInput>
    OR?: Enumerable<ModAuthorScalarWhereInput>
    NOT?: Enumerable<ModAuthorScalarWhereInput>
    mod_id?: IntFilter | number
    user_id?: IntFilter | number
    type?: IntFilter | number
  }

  export type ModIssueUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ModIssueWhereUniqueInput
    update: XOR<ModIssueUpdateWithoutAuthorInput, ModIssueUncheckedUpdateWithoutAuthorInput>
    create: XOR<ModIssueCreateWithoutAuthorInput, ModIssueUncheckedCreateWithoutAuthorInput>
  }

  export type ModIssueUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ModIssueWhereUniqueInput
    data: XOR<ModIssueUpdateWithoutAuthorInput, ModIssueUncheckedUpdateWithoutAuthorInput>
  }

  export type ModIssueUpdateManyWithWhereWithoutAuthorInput = {
    where: ModIssueScalarWhereInput
    data: XOR<ModIssueUpdateManyMutationInput, ModIssueUncheckedUpdateManyWithoutModIssuesInput>
  }

  export type ModIssueScalarWhereInput = {
    AND?: Enumerable<ModIssueScalarWhereInput>
    OR?: Enumerable<ModIssueScalarWhereInput>
    NOT?: Enumerable<ModIssueScalarWhereInput>
    id?: IntFilter | number
    mod_id?: IntFilter | number
    name?: StringFilter | string
    type?: EnumModIssueTypeFilter | ModIssueType
    author_id?: IntFilter | number
    createDate?: DateTimeFilter | Date | string
  }

  export type ModIssuePostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ModIssuePostWhereUniqueInput
    update: XOR<ModIssuePostUpdateWithoutAuthorInput, ModIssuePostUncheckedUpdateWithoutAuthorInput>
    create: XOR<ModIssuePostCreateWithoutAuthorInput, ModIssuePostUncheckedCreateWithoutAuthorInput>
  }

  export type ModIssuePostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ModIssuePostWhereUniqueInput
    data: XOR<ModIssuePostUpdateWithoutAuthorInput, ModIssuePostUncheckedUpdateWithoutAuthorInput>
  }

  export type ModIssuePostUpdateManyWithWhereWithoutAuthorInput = {
    where: ModIssuePostScalarWhereInput
    data: XOR<ModIssuePostUpdateManyMutationInput, ModIssuePostUncheckedUpdateManyWithoutModIssuePostsInput>
  }

  export type ModIssuePostScalarWhereInput = {
    AND?: Enumerable<ModIssuePostScalarWhereInput>
    OR?: Enumerable<ModIssuePostScalarWhereInput>
    NOT?: Enumerable<ModIssuePostScalarWhereInput>
    id?: IntFilter | number
    issue_id?: IntFilter | number
    author_id?: IntFilter | number
    createDate?: DateTimeFilter | Date | string
    text?: StringFilter | string
  }

  export type ModsListUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ModsListWhereUniqueInput
    update: XOR<ModsListUpdateWithoutAuthorInput, ModsListUncheckedUpdateWithoutAuthorInput>
    create: XOR<ModsListCreateWithoutAuthorInput, ModsListUncheckedCreateWithoutAuthorInput>
  }

  export type ModsListUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ModsListWhereUniqueInput
    data: XOR<ModsListUpdateWithoutAuthorInput, ModsListUncheckedUpdateWithoutAuthorInput>
  }

  export type ModsListUpdateManyWithWhereWithoutAuthorInput = {
    where: ModsListScalarWhereInput
    data: XOR<ModsListUpdateManyMutationInput, ModsListUncheckedUpdateManyWithoutModsListsInput>
  }

  export type ModsListScalarWhereInput = {
    AND?: Enumerable<ModsListScalarWhereInput>
    OR?: Enumerable<ModsListScalarWhereInput>
    NOT?: Enumerable<ModsListScalarWhereInput>
    id?: IntFilter | number
    author_id?: IntFilter | number
    is_public?: BoolFilter | boolean
    name?: StringFilter | string
  }

  export type ModsFavoritsUpsertWithWhereUniqueWithoutUserInput = {
    where: ModsFavoritsWhereUniqueInput
    update: XOR<ModsFavoritsUpdateWithoutUserInput, ModsFavoritsUncheckedUpdateWithoutUserInput>
    create: XOR<ModsFavoritsCreateWithoutUserInput, ModsFavoritsUncheckedCreateWithoutUserInput>
  }

  export type ModsFavoritsUpdateWithWhereUniqueWithoutUserInput = {
    where: ModsFavoritsWhereUniqueInput
    data: XOR<ModsFavoritsUpdateWithoutUserInput, ModsFavoritsUncheckedUpdateWithoutUserInput>
  }

  export type ModsFavoritsUpdateManyWithWhereWithoutUserInput = {
    where: ModsFavoritsScalarWhereInput
    data: XOR<ModsFavoritsUpdateManyMutationInput, ModsFavoritsUncheckedUpdateManyWithoutModsFavoritsInput>
  }

  export type ModsFavoritsScalarWhereInput = {
    AND?: Enumerable<ModsFavoritsScalarWhereInput>
    OR?: Enumerable<ModsFavoritsScalarWhereInput>
    NOT?: Enumerable<ModsFavoritsScalarWhereInput>
    user_id?: IntFilter | number
    mod_id?: IntFilter | number
  }

  export type ModSubscribersUpsertWithWhereUniqueWithoutUserInput = {
    where: ModSubscribersWhereUniqueInput
    update: XOR<ModSubscribersUpdateWithoutUserInput, ModSubscribersUncheckedUpdateWithoutUserInput>
    create: XOR<ModSubscribersCreateWithoutUserInput, ModSubscribersUncheckedCreateWithoutUserInput>
  }

  export type ModSubscribersUpdateWithWhereUniqueWithoutUserInput = {
    where: ModSubscribersWhereUniqueInput
    data: XOR<ModSubscribersUpdateWithoutUserInput, ModSubscribersUncheckedUpdateWithoutUserInput>
  }

  export type ModSubscribersUpdateManyWithWhereWithoutUserInput = {
    where: ModSubscribersScalarWhereInput
    data: XOR<ModSubscribersUpdateManyMutationInput, ModSubscribersUncheckedUpdateManyWithoutModSubscribersInput>
  }

  export type ModSubscribersScalarWhereInput = {
    AND?: Enumerable<ModSubscribersScalarWhereInput>
    OR?: Enumerable<ModSubscribersScalarWhereInput>
    NOT?: Enumerable<ModSubscribersScalarWhereInput>
    user_id?: IntFilter | number
    mod_id?: IntFilter | number
  }

  export type ModDownloadUpsertWithWhereUniqueWithoutUserInput = {
    where: ModDownloadWhereUniqueInput
    update: XOR<ModDownloadUpdateWithoutUserInput, ModDownloadUncheckedUpdateWithoutUserInput>
    create: XOR<ModDownloadCreateWithoutUserInput, ModDownloadUncheckedCreateWithoutUserInput>
  }

  export type ModDownloadUpdateWithWhereUniqueWithoutUserInput = {
    where: ModDownloadWhereUniqueInput
    data: XOR<ModDownloadUpdateWithoutUserInput, ModDownloadUncheckedUpdateWithoutUserInput>
  }

  export type ModDownloadUpdateManyWithWhereWithoutUserInput = {
    where: ModDownloadScalarWhereInput
    data: XOR<ModDownloadUpdateManyMutationInput, ModDownloadUncheckedUpdateManyWithoutModDownloadsInput>
  }

  export type ModDownloadScalarWhereInput = {
    AND?: Enumerable<ModDownloadScalarWhereInput>
    OR?: Enumerable<ModDownloadScalarWhereInput>
    NOT?: Enumerable<ModDownloadScalarWhereInput>
    user_id?: IntFilter | number
    mod_id?: IntFilter | number
    version_id?: IntFilter | number
  }

  export type UserCreateWithoutUserAuthInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    ModsCollections?: ModsCollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: ModAuthorCreateNestedManyWithoutUserInput
    ModIssues?: ModIssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: ModSubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserAuthInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    ModsCollections?: ModsCollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: ModAuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: ModIssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: ModSubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedCreateNestedManyWithoutUserInput
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
    ModsCollections?: ModsCollectionUpdateManyWithoutAuthorInput
    ModAuthors?: ModAuthorUpdateManyWithoutUserInput
    ModIssues?: ModIssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUpdateManyWithoutUserInput
    ModSubscribers?: ModSubscribersUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutUserAuthInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    ModsCollections?: ModsCollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: ModAuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: ModIssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: ModSubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateWithoutModsCollectionsInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: UserAuthCreateNestedOneWithoutUserInput
    ModAuthors?: ModAuthorCreateNestedManyWithoutUserInput
    ModIssues?: ModIssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: ModSubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModsCollectionsInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: UserAuthUncheckedCreateNestedOneWithoutUserInput
    ModAuthors?: ModAuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: ModIssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: ModSubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedCreateNestedManyWithoutUserInput
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
    Images?: ModImageCreateNestedManyWithoutModInput
    Authors?: ModAuthorCreateNestedManyWithoutModInput
    Tags?: ModTagCreateNestedManyWithoutModInput
    Versions?: ModVersionCreateNestedManyWithoutModInput
    Lists?: ModsListCreateNestedManyWithoutModsInput
    Issues?: ModIssueCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersCreateNestedManyWithoutModInput
    Downloads?: ModDownloadCreateNestedManyWithoutModInput
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
    Images?: ModImageUncheckedCreateNestedManyWithoutModInput
    Authors?: ModAuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: ModTagUncheckedCreateNestedManyWithoutModInput
    Versions?: ModVersionUncheckedCreateNestedManyWithoutModInput
    Lists?: ModsListUncheckedCreateNestedManyWithoutModsInput
    Issues?: ModIssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: ModDownloadUncheckedCreateNestedManyWithoutModInput
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
    UserAuth?: UserAuthUpdateOneWithoutUserInput
    ModAuthors?: ModAuthorUpdateManyWithoutUserInput
    ModIssues?: ModIssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUpdateManyWithoutUserInput
    ModSubscribers?: ModSubscribersUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutModsCollectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: UserAuthUncheckedUpdateOneWithoutUserInput
    ModAuthors?: ModAuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: ModIssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: ModSubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedUpdateManyWithoutUserInput
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

  export type ModsCollectionCreateWithoutModsInput = {
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    Author: UserCreateNestedOneWithoutModsCollectionsInput
  }

  export type ModsCollectionUncheckedCreateWithoutModsInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
    author_id: number
  }

  export type ModsCollectionCreateOrConnectWithoutModsInput = {
    where: ModsCollectionWhereUniqueInput
    create: XOR<ModsCollectionCreateWithoutModsInput, ModsCollectionUncheckedCreateWithoutModsInput>
  }

  export type ModImageCreateWithoutModInput = {
    url: string
  }

  export type ModImageUncheckedCreateWithoutModInput = {
    id?: number
    url: string
  }

  export type ModImageCreateOrConnectWithoutModInput = {
    where: ModImageWhereUniqueInput
    create: XOR<ModImageCreateWithoutModInput, ModImageUncheckedCreateWithoutModInput>
  }

  export type ModImageCreateManyModInputEnvelope = {
    data: Enumerable<ModImageCreateManyModInput>
    skipDuplicates?: boolean
  }

  export type ModAuthorCreateWithoutModInput = {
    type: number
    User: UserCreateNestedOneWithoutModAuthorsInput
  }

  export type ModAuthorUncheckedCreateWithoutModInput = {
    user_id: number
    type: number
  }

  export type ModAuthorCreateOrConnectWithoutModInput = {
    where: ModAuthorWhereUniqueInput
    create: XOR<ModAuthorCreateWithoutModInput, ModAuthorUncheckedCreateWithoutModInput>
  }

  export type ModAuthorCreateManyModInputEnvelope = {
    data: Enumerable<ModAuthorCreateManyModInput>
    skipDuplicates?: boolean
  }

  export type ModTagCreateWithoutModInput = {
    name: string
  }

  export type ModTagUncheckedCreateWithoutModInput = {
    id?: number
    name: string
  }

  export type ModTagCreateOrConnectWithoutModInput = {
    where: ModTagWhereUniqueInput
    create: XOR<ModTagCreateWithoutModInput, ModTagUncheckedCreateWithoutModInput>
  }

  export type ModVersionCreateWithoutModInput = {
    version: string
    game_version: string
    releaseDate?: Date | string
    Downloads?: ModDownloadCreateNestedManyWithoutVersionInput
  }

  export type ModVersionUncheckedCreateWithoutModInput = {
    id?: number
    version: string
    game_version: string
    releaseDate?: Date | string
    Downloads?: ModDownloadUncheckedCreateNestedManyWithoutVersionInput
  }

  export type ModVersionCreateOrConnectWithoutModInput = {
    where: ModVersionWhereUniqueInput
    create: XOR<ModVersionCreateWithoutModInput, ModVersionUncheckedCreateWithoutModInput>
  }

  export type ModVersionCreateManyModInputEnvelope = {
    data: Enumerable<ModVersionCreateManyModInput>
    skipDuplicates?: boolean
  }

  export type ModsListCreateWithoutModsInput = {
    is_public: boolean
    name: string
    Author: UserCreateNestedOneWithoutModsListsInput
  }

  export type ModsListUncheckedCreateWithoutModsInput = {
    id?: number
    author_id: number
    is_public: boolean
    name: string
  }

  export type ModsListCreateOrConnectWithoutModsInput = {
    where: ModsListWhereUniqueInput
    create: XOR<ModsListCreateWithoutModsInput, ModsListUncheckedCreateWithoutModsInput>
  }

  export type ModIssueCreateWithoutModInput = {
    name: string
    type: ModIssueType
    createDate?: Date | string
    Author: UserCreateNestedOneWithoutModIssuesInput
    ModIssuePost?: ModIssuePostCreateNestedManyWithoutIssueInput
  }

  export type ModIssueUncheckedCreateWithoutModInput = {
    id?: number
    name: string
    type: ModIssueType
    author_id: number
    createDate?: Date | string
    ModIssuePost?: ModIssuePostUncheckedCreateNestedManyWithoutIssueInput
  }

  export type ModIssueCreateOrConnectWithoutModInput = {
    where: ModIssueWhereUniqueInput
    create: XOR<ModIssueCreateWithoutModInput, ModIssueUncheckedCreateWithoutModInput>
  }

  export type ModIssueCreateManyModInputEnvelope = {
    data: Enumerable<ModIssueCreateManyModInput>
    skipDuplicates?: boolean
  }

  export type ModsFavoritsCreateWithoutModInput = {
    User: UserCreateNestedOneWithoutModsFavoritsInput
  }

  export type ModsFavoritsUncheckedCreateWithoutModInput = {
    user_id: number
  }

  export type ModsFavoritsCreateOrConnectWithoutModInput = {
    where: ModsFavoritsWhereUniqueInput
    create: XOR<ModsFavoritsCreateWithoutModInput, ModsFavoritsUncheckedCreateWithoutModInput>
  }

  export type ModsFavoritsCreateManyModInputEnvelope = {
    data: Enumerable<ModsFavoritsCreateManyModInput>
    skipDuplicates?: boolean
  }

  export type ModSubscribersCreateWithoutModInput = {
    User: UserCreateNestedOneWithoutModSubscribersInput
  }

  export type ModSubscribersUncheckedCreateWithoutModInput = {
    user_id: number
  }

  export type ModSubscribersCreateOrConnectWithoutModInput = {
    where: ModSubscribersWhereUniqueInput
    create: XOR<ModSubscribersCreateWithoutModInput, ModSubscribersUncheckedCreateWithoutModInput>
  }

  export type ModSubscribersCreateManyModInputEnvelope = {
    data: Enumerable<ModSubscribersCreateManyModInput>
    skipDuplicates?: boolean
  }

  export type ModDownloadCreateWithoutModInput = {
    User: UserCreateNestedOneWithoutModDownloadsInput
    Version: ModVersionCreateNestedOneWithoutDownloadsInput
  }

  export type ModDownloadUncheckedCreateWithoutModInput = {
    user_id: number
    version_id: number
  }

  export type ModDownloadCreateOrConnectWithoutModInput = {
    where: ModDownloadWhereUniqueInput
    create: XOR<ModDownloadCreateWithoutModInput, ModDownloadUncheckedCreateWithoutModInput>
  }

  export type ModDownloadCreateManyModInputEnvelope = {
    data: Enumerable<ModDownloadCreateManyModInput>
    skipDuplicates?: boolean
  }

  export type ModsCollectionUpsertWithoutModsInput = {
    update: XOR<ModsCollectionUpdateWithoutModsInput, ModsCollectionUncheckedUpdateWithoutModsInput>
    create: XOR<ModsCollectionCreateWithoutModsInput, ModsCollectionUncheckedCreateWithoutModsInput>
  }

  export type ModsCollectionUpdateWithoutModsInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    Author?: UserUpdateOneRequiredWithoutModsCollectionsInput
  }

  export type ModsCollectionUncheckedUpdateWithoutModsInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModImageUpsertWithWhereUniqueWithoutModInput = {
    where: ModImageWhereUniqueInput
    update: XOR<ModImageUpdateWithoutModInput, ModImageUncheckedUpdateWithoutModInput>
    create: XOR<ModImageCreateWithoutModInput, ModImageUncheckedCreateWithoutModInput>
  }

  export type ModImageUpdateWithWhereUniqueWithoutModInput = {
    where: ModImageWhereUniqueInput
    data: XOR<ModImageUpdateWithoutModInput, ModImageUncheckedUpdateWithoutModInput>
  }

  export type ModImageUpdateManyWithWhereWithoutModInput = {
    where: ModImageScalarWhereInput
    data: XOR<ModImageUpdateManyMutationInput, ModImageUncheckedUpdateManyWithoutImagesInput>
  }

  export type ModImageScalarWhereInput = {
    AND?: Enumerable<ModImageScalarWhereInput>
    OR?: Enumerable<ModImageScalarWhereInput>
    NOT?: Enumerable<ModImageScalarWhereInput>
    id?: IntFilter | number
    mod_id?: IntFilter | number
    url?: StringFilter | string
  }

  export type ModAuthorUpsertWithWhereUniqueWithoutModInput = {
    where: ModAuthorWhereUniqueInput
    update: XOR<ModAuthorUpdateWithoutModInput, ModAuthorUncheckedUpdateWithoutModInput>
    create: XOR<ModAuthorCreateWithoutModInput, ModAuthorUncheckedCreateWithoutModInput>
  }

  export type ModAuthorUpdateWithWhereUniqueWithoutModInput = {
    where: ModAuthorWhereUniqueInput
    data: XOR<ModAuthorUpdateWithoutModInput, ModAuthorUncheckedUpdateWithoutModInput>
  }

  export type ModAuthorUpdateManyWithWhereWithoutModInput = {
    where: ModAuthorScalarWhereInput
    data: XOR<ModAuthorUpdateManyMutationInput, ModAuthorUncheckedUpdateManyWithoutAuthorsInput>
  }

  export type ModTagUpsertWithWhereUniqueWithoutModInput = {
    where: ModTagWhereUniqueInput
    update: XOR<ModTagUpdateWithoutModInput, ModTagUncheckedUpdateWithoutModInput>
    create: XOR<ModTagCreateWithoutModInput, ModTagUncheckedCreateWithoutModInput>
  }

  export type ModTagUpdateWithWhereUniqueWithoutModInput = {
    where: ModTagWhereUniqueInput
    data: XOR<ModTagUpdateWithoutModInput, ModTagUncheckedUpdateWithoutModInput>
  }

  export type ModTagUpdateManyWithWhereWithoutModInput = {
    where: ModTagScalarWhereInput
    data: XOR<ModTagUpdateManyMutationInput, ModTagUncheckedUpdateManyWithoutTagsInput>
  }

  export type ModTagScalarWhereInput = {
    AND?: Enumerable<ModTagScalarWhereInput>
    OR?: Enumerable<ModTagScalarWhereInput>
    NOT?: Enumerable<ModTagScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
  }

  export type ModVersionUpsertWithWhereUniqueWithoutModInput = {
    where: ModVersionWhereUniqueInput
    update: XOR<ModVersionUpdateWithoutModInput, ModVersionUncheckedUpdateWithoutModInput>
    create: XOR<ModVersionCreateWithoutModInput, ModVersionUncheckedCreateWithoutModInput>
  }

  export type ModVersionUpdateWithWhereUniqueWithoutModInput = {
    where: ModVersionWhereUniqueInput
    data: XOR<ModVersionUpdateWithoutModInput, ModVersionUncheckedUpdateWithoutModInput>
  }

  export type ModVersionUpdateManyWithWhereWithoutModInput = {
    where: ModVersionScalarWhereInput
    data: XOR<ModVersionUpdateManyMutationInput, ModVersionUncheckedUpdateManyWithoutVersionsInput>
  }

  export type ModVersionScalarWhereInput = {
    AND?: Enumerable<ModVersionScalarWhereInput>
    OR?: Enumerable<ModVersionScalarWhereInput>
    NOT?: Enumerable<ModVersionScalarWhereInput>
    id?: IntFilter | number
    mod_id?: IntFilter | number
    version?: StringFilter | string
    game_version?: StringFilter | string
    releaseDate?: DateTimeFilter | Date | string
  }

  export type ModsListUpsertWithWhereUniqueWithoutModsInput = {
    where: ModsListWhereUniqueInput
    update: XOR<ModsListUpdateWithoutModsInput, ModsListUncheckedUpdateWithoutModsInput>
    create: XOR<ModsListCreateWithoutModsInput, ModsListUncheckedCreateWithoutModsInput>
  }

  export type ModsListUpdateWithWhereUniqueWithoutModsInput = {
    where: ModsListWhereUniqueInput
    data: XOR<ModsListUpdateWithoutModsInput, ModsListUncheckedUpdateWithoutModsInput>
  }

  export type ModsListUpdateManyWithWhereWithoutModsInput = {
    where: ModsListScalarWhereInput
    data: XOR<ModsListUpdateManyMutationInput, ModsListUncheckedUpdateManyWithoutListsInput>
  }

  export type ModIssueUpsertWithWhereUniqueWithoutModInput = {
    where: ModIssueWhereUniqueInput
    update: XOR<ModIssueUpdateWithoutModInput, ModIssueUncheckedUpdateWithoutModInput>
    create: XOR<ModIssueCreateWithoutModInput, ModIssueUncheckedCreateWithoutModInput>
  }

  export type ModIssueUpdateWithWhereUniqueWithoutModInput = {
    where: ModIssueWhereUniqueInput
    data: XOR<ModIssueUpdateWithoutModInput, ModIssueUncheckedUpdateWithoutModInput>
  }

  export type ModIssueUpdateManyWithWhereWithoutModInput = {
    where: ModIssueScalarWhereInput
    data: XOR<ModIssueUpdateManyMutationInput, ModIssueUncheckedUpdateManyWithoutIssuesInput>
  }

  export type ModsFavoritsUpsertWithWhereUniqueWithoutModInput = {
    where: ModsFavoritsWhereUniqueInput
    update: XOR<ModsFavoritsUpdateWithoutModInput, ModsFavoritsUncheckedUpdateWithoutModInput>
    create: XOR<ModsFavoritsCreateWithoutModInput, ModsFavoritsUncheckedCreateWithoutModInput>
  }

  export type ModsFavoritsUpdateWithWhereUniqueWithoutModInput = {
    where: ModsFavoritsWhereUniqueInput
    data: XOR<ModsFavoritsUpdateWithoutModInput, ModsFavoritsUncheckedUpdateWithoutModInput>
  }

  export type ModsFavoritsUpdateManyWithWhereWithoutModInput = {
    where: ModsFavoritsScalarWhereInput
    data: XOR<ModsFavoritsUpdateManyMutationInput, ModsFavoritsUncheckedUpdateManyWithoutFavoritsInput>
  }

  export type ModSubscribersUpsertWithWhereUniqueWithoutModInput = {
    where: ModSubscribersWhereUniqueInput
    update: XOR<ModSubscribersUpdateWithoutModInput, ModSubscribersUncheckedUpdateWithoutModInput>
    create: XOR<ModSubscribersCreateWithoutModInput, ModSubscribersUncheckedCreateWithoutModInput>
  }

  export type ModSubscribersUpdateWithWhereUniqueWithoutModInput = {
    where: ModSubscribersWhereUniqueInput
    data: XOR<ModSubscribersUpdateWithoutModInput, ModSubscribersUncheckedUpdateWithoutModInput>
  }

  export type ModSubscribersUpdateManyWithWhereWithoutModInput = {
    where: ModSubscribersScalarWhereInput
    data: XOR<ModSubscribersUpdateManyMutationInput, ModSubscribersUncheckedUpdateManyWithoutSubscribersInput>
  }

  export type ModDownloadUpsertWithWhereUniqueWithoutModInput = {
    where: ModDownloadWhereUniqueInput
    update: XOR<ModDownloadUpdateWithoutModInput, ModDownloadUncheckedUpdateWithoutModInput>
    create: XOR<ModDownloadCreateWithoutModInput, ModDownloadUncheckedCreateWithoutModInput>
  }

  export type ModDownloadUpdateWithWhereUniqueWithoutModInput = {
    where: ModDownloadWhereUniqueInput
    data: XOR<ModDownloadUpdateWithoutModInput, ModDownloadUncheckedUpdateWithoutModInput>
  }

  export type ModDownloadUpdateManyWithWhereWithoutModInput = {
    where: ModDownloadScalarWhereInput
    data: XOR<ModDownloadUpdateManyMutationInput, ModDownloadUncheckedUpdateManyWithoutDownloadsInput>
  }

  export type UserCreateWithoutModAuthorsInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: UserAuthCreateNestedOneWithoutUserInput
    ModsCollections?: ModsCollectionCreateNestedManyWithoutAuthorInput
    ModIssues?: ModIssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: ModSubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModAuthorsInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: UserAuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: ModsCollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModIssues?: ModIssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: ModSubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedCreateNestedManyWithoutUserInput
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
    Collection: ModsCollectionCreateNestedOneWithoutModsInput
    Images?: ModImageCreateNestedManyWithoutModInput
    Tags?: ModTagCreateNestedManyWithoutModInput
    Versions?: ModVersionCreateNestedManyWithoutModInput
    Lists?: ModsListCreateNestedManyWithoutModsInput
    Issues?: ModIssueCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersCreateNestedManyWithoutModInput
    Downloads?: ModDownloadCreateNestedManyWithoutModInput
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
    Images?: ModImageUncheckedCreateNestedManyWithoutModInput
    Tags?: ModTagUncheckedCreateNestedManyWithoutModInput
    Versions?: ModVersionUncheckedCreateNestedManyWithoutModInput
    Lists?: ModsListUncheckedCreateNestedManyWithoutModsInput
    Issues?: ModIssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: ModDownloadUncheckedCreateNestedManyWithoutModInput
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
    UserAuth?: UserAuthUpdateOneWithoutUserInput
    ModsCollections?: ModsCollectionUpdateManyWithoutAuthorInput
    ModIssues?: ModIssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUpdateManyWithoutUserInput
    ModSubscribers?: ModSubscribersUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutModAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: UserAuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: ModsCollectionUncheckedUpdateManyWithoutAuthorInput
    ModIssues?: ModIssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: ModSubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedUpdateManyWithoutUserInput
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
    Collection?: ModsCollectionUpdateOneRequiredWithoutModsInput
    Images?: ModImageUpdateManyWithoutModInput
    Tags?: ModTagUpdateManyWithoutModInput
    Versions?: ModVersionUpdateManyWithoutModInput
    Lists?: ModsListUpdateManyWithoutModsInput
    Issues?: ModIssueUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUpdateManyWithoutModInput
    Downloads?: ModDownloadUpdateManyWithoutModInput
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
    Images?: ModImageUncheckedUpdateManyWithoutModInput
    Tags?: ModTagUncheckedUpdateManyWithoutModInput
    Versions?: ModVersionUncheckedUpdateManyWithoutModInput
    Lists?: ModsListUncheckedUpdateManyWithoutModsInput
    Issues?: ModIssueUncheckedUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: ModDownloadUncheckedUpdateManyWithoutModInput
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
    Collection: ModsCollectionCreateNestedOneWithoutModsInput
    Authors?: ModAuthorCreateNestedManyWithoutModInput
    Tags?: ModTagCreateNestedManyWithoutModInput
    Versions?: ModVersionCreateNestedManyWithoutModInput
    Lists?: ModsListCreateNestedManyWithoutModsInput
    Issues?: ModIssueCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersCreateNestedManyWithoutModInput
    Downloads?: ModDownloadCreateNestedManyWithoutModInput
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
    Authors?: ModAuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: ModTagUncheckedCreateNestedManyWithoutModInput
    Versions?: ModVersionUncheckedCreateNestedManyWithoutModInput
    Lists?: ModsListUncheckedCreateNestedManyWithoutModsInput
    Issues?: ModIssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: ModDownloadUncheckedCreateNestedManyWithoutModInput
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
    Collection?: ModsCollectionUpdateOneRequiredWithoutModsInput
    Authors?: ModAuthorUpdateManyWithoutModInput
    Tags?: ModTagUpdateManyWithoutModInput
    Versions?: ModVersionUpdateManyWithoutModInput
    Lists?: ModsListUpdateManyWithoutModsInput
    Issues?: ModIssueUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUpdateManyWithoutModInput
    Downloads?: ModDownloadUpdateManyWithoutModInput
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
    Authors?: ModAuthorUncheckedUpdateManyWithoutModInput
    Tags?: ModTagUncheckedUpdateManyWithoutModInput
    Versions?: ModVersionUncheckedUpdateManyWithoutModInput
    Lists?: ModsListUncheckedUpdateManyWithoutModsInput
    Issues?: ModIssueUncheckedUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: ModDownloadUncheckedUpdateManyWithoutModInput
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
    Collection: ModsCollectionCreateNestedOneWithoutModsInput
    Images?: ModImageCreateNestedManyWithoutModInput
    Authors?: ModAuthorCreateNestedManyWithoutModInput
    Versions?: ModVersionCreateNestedManyWithoutModInput
    Lists?: ModsListCreateNestedManyWithoutModsInput
    Issues?: ModIssueCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersCreateNestedManyWithoutModInput
    Downloads?: ModDownloadCreateNestedManyWithoutModInput
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
    Images?: ModImageUncheckedCreateNestedManyWithoutModInput
    Authors?: ModAuthorUncheckedCreateNestedManyWithoutModInput
    Versions?: ModVersionUncheckedCreateNestedManyWithoutModInput
    Lists?: ModsListUncheckedCreateNestedManyWithoutModsInput
    Issues?: ModIssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: ModDownloadUncheckedCreateNestedManyWithoutModInput
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
    Collection: ModsCollectionCreateNestedOneWithoutModsInput
    Images?: ModImageCreateNestedManyWithoutModInput
    Authors?: ModAuthorCreateNestedManyWithoutModInput
    Tags?: ModTagCreateNestedManyWithoutModInput
    Lists?: ModsListCreateNestedManyWithoutModsInput
    Issues?: ModIssueCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersCreateNestedManyWithoutModInput
    Downloads?: ModDownloadCreateNestedManyWithoutModInput
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
    Images?: ModImageUncheckedCreateNestedManyWithoutModInput
    Authors?: ModAuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: ModTagUncheckedCreateNestedManyWithoutModInput
    Lists?: ModsListUncheckedCreateNestedManyWithoutModsInput
    Issues?: ModIssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: ModDownloadUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutVersionsInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutVersionsInput, ModUncheckedCreateWithoutVersionsInput>
  }

  export type ModDownloadCreateWithoutVersionInput = {
    User: UserCreateNestedOneWithoutModDownloadsInput
    Mod: ModCreateNestedOneWithoutDownloadsInput
  }

  export type ModDownloadUncheckedCreateWithoutVersionInput = {
    user_id: number
    mod_id: number
  }

  export type ModDownloadCreateOrConnectWithoutVersionInput = {
    where: ModDownloadWhereUniqueInput
    create: XOR<ModDownloadCreateWithoutVersionInput, ModDownloadUncheckedCreateWithoutVersionInput>
  }

  export type ModDownloadCreateManyVersionInputEnvelope = {
    data: Enumerable<ModDownloadCreateManyVersionInput>
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
    Collection?: ModsCollectionUpdateOneRequiredWithoutModsInput
    Images?: ModImageUpdateManyWithoutModInput
    Authors?: ModAuthorUpdateManyWithoutModInput
    Tags?: ModTagUpdateManyWithoutModInput
    Lists?: ModsListUpdateManyWithoutModsInput
    Issues?: ModIssueUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUpdateManyWithoutModInput
    Downloads?: ModDownloadUpdateManyWithoutModInput
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
    Images?: ModImageUncheckedUpdateManyWithoutModInput
    Authors?: ModAuthorUncheckedUpdateManyWithoutModInput
    Tags?: ModTagUncheckedUpdateManyWithoutModInput
    Lists?: ModsListUncheckedUpdateManyWithoutModsInput
    Issues?: ModIssueUncheckedUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: ModDownloadUncheckedUpdateManyWithoutModInput
  }

  export type ModDownloadUpsertWithWhereUniqueWithoutVersionInput = {
    where: ModDownloadWhereUniqueInput
    update: XOR<ModDownloadUpdateWithoutVersionInput, ModDownloadUncheckedUpdateWithoutVersionInput>
    create: XOR<ModDownloadCreateWithoutVersionInput, ModDownloadUncheckedCreateWithoutVersionInput>
  }

  export type ModDownloadUpdateWithWhereUniqueWithoutVersionInput = {
    where: ModDownloadWhereUniqueInput
    data: XOR<ModDownloadUpdateWithoutVersionInput, ModDownloadUncheckedUpdateWithoutVersionInput>
  }

  export type ModDownloadUpdateManyWithWhereWithoutVersionInput = {
    where: ModDownloadScalarWhereInput
    data: XOR<ModDownloadUpdateManyMutationInput, ModDownloadUncheckedUpdateManyWithoutDownloadsInput>
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
    Collection: ModsCollectionCreateNestedOneWithoutModsInput
    Images?: ModImageCreateNestedManyWithoutModInput
    Authors?: ModAuthorCreateNestedManyWithoutModInput
    Tags?: ModTagCreateNestedManyWithoutModInput
    Versions?: ModVersionCreateNestedManyWithoutModInput
    Lists?: ModsListCreateNestedManyWithoutModsInput
    Favorits?: ModsFavoritsCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersCreateNestedManyWithoutModInput
    Downloads?: ModDownloadCreateNestedManyWithoutModInput
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
    Images?: ModImageUncheckedCreateNestedManyWithoutModInput
    Authors?: ModAuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: ModTagUncheckedCreateNestedManyWithoutModInput
    Versions?: ModVersionUncheckedCreateNestedManyWithoutModInput
    Lists?: ModsListUncheckedCreateNestedManyWithoutModsInput
    Favorits?: ModsFavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: ModDownloadUncheckedCreateNestedManyWithoutModInput
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
    UserAuth?: UserAuthCreateNestedOneWithoutUserInput
    ModsCollections?: ModsCollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: ModAuthorCreateNestedManyWithoutUserInput
    ModIssuePosts?: ModIssuePostCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: ModSubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModIssuesInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: UserAuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: ModsCollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: ModAuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssuePosts?: ModIssuePostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: ModSubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModIssuesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModIssuesInput, UserUncheckedCreateWithoutModIssuesInput>
  }

  export type ModIssuePostCreateWithoutIssueInput = {
    createDate?: Date | string
    text: string
    Author: UserCreateNestedOneWithoutModIssuePostsInput
  }

  export type ModIssuePostUncheckedCreateWithoutIssueInput = {
    id?: number
    author_id: number
    createDate?: Date | string
    text: string
  }

  export type ModIssuePostCreateOrConnectWithoutIssueInput = {
    where: ModIssuePostWhereUniqueInput
    create: XOR<ModIssuePostCreateWithoutIssueInput, ModIssuePostUncheckedCreateWithoutIssueInput>
  }

  export type ModIssuePostCreateManyIssueInputEnvelope = {
    data: Enumerable<ModIssuePostCreateManyIssueInput>
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
    Collection?: ModsCollectionUpdateOneRequiredWithoutModsInput
    Images?: ModImageUpdateManyWithoutModInput
    Authors?: ModAuthorUpdateManyWithoutModInput
    Tags?: ModTagUpdateManyWithoutModInput
    Versions?: ModVersionUpdateManyWithoutModInput
    Lists?: ModsListUpdateManyWithoutModsInput
    Favorits?: ModsFavoritsUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUpdateManyWithoutModInput
    Downloads?: ModDownloadUpdateManyWithoutModInput
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
    Images?: ModImageUncheckedUpdateManyWithoutModInput
    Authors?: ModAuthorUncheckedUpdateManyWithoutModInput
    Tags?: ModTagUncheckedUpdateManyWithoutModInput
    Versions?: ModVersionUncheckedUpdateManyWithoutModInput
    Lists?: ModsListUncheckedUpdateManyWithoutModsInput
    Favorits?: ModsFavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: ModDownloadUncheckedUpdateManyWithoutModInput
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
    UserAuth?: UserAuthUpdateOneWithoutUserInput
    ModsCollections?: ModsCollectionUpdateManyWithoutAuthorInput
    ModAuthors?: ModAuthorUpdateManyWithoutUserInput
    ModIssuePosts?: ModIssuePostUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUpdateManyWithoutUserInput
    ModSubscribers?: ModSubscribersUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutModIssuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: UserAuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: ModsCollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: ModAuthorUncheckedUpdateManyWithoutUserInput
    ModIssuePosts?: ModIssuePostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: ModSubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedUpdateManyWithoutUserInput
  }

  export type ModIssuePostUpsertWithWhereUniqueWithoutIssueInput = {
    where: ModIssuePostWhereUniqueInput
    update: XOR<ModIssuePostUpdateWithoutIssueInput, ModIssuePostUncheckedUpdateWithoutIssueInput>
    create: XOR<ModIssuePostCreateWithoutIssueInput, ModIssuePostUncheckedCreateWithoutIssueInput>
  }

  export type ModIssuePostUpdateWithWhereUniqueWithoutIssueInput = {
    where: ModIssuePostWhereUniqueInput
    data: XOR<ModIssuePostUpdateWithoutIssueInput, ModIssuePostUncheckedUpdateWithoutIssueInput>
  }

  export type ModIssuePostUpdateManyWithWhereWithoutIssueInput = {
    where: ModIssuePostScalarWhereInput
    data: XOR<ModIssuePostUpdateManyMutationInput, ModIssuePostUncheckedUpdateManyWithoutModIssuePostInput>
  }

  export type ModIssueCreateWithoutModIssuePostInput = {
    name: string
    type: ModIssueType
    createDate?: Date | string
    Mod: ModCreateNestedOneWithoutIssuesInput
    Author: UserCreateNestedOneWithoutModIssuesInput
  }

  export type ModIssueUncheckedCreateWithoutModIssuePostInput = {
    id?: number
    mod_id: number
    name: string
    type: ModIssueType
    author_id: number
    createDate?: Date | string
  }

  export type ModIssueCreateOrConnectWithoutModIssuePostInput = {
    where: ModIssueWhereUniqueInput
    create: XOR<ModIssueCreateWithoutModIssuePostInput, ModIssueUncheckedCreateWithoutModIssuePostInput>
  }

  export type UserCreateWithoutModIssuePostsInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: UserAuthCreateNestedOneWithoutUserInput
    ModsCollections?: ModsCollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: ModAuthorCreateNestedManyWithoutUserInput
    ModIssues?: ModIssueCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: ModSubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModIssuePostsInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: UserAuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: ModsCollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: ModAuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: ModIssueUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: ModSubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModIssuePostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModIssuePostsInput, UserUncheckedCreateWithoutModIssuePostsInput>
  }

  export type ModIssueUpsertWithoutModIssuePostInput = {
    update: XOR<ModIssueUpdateWithoutModIssuePostInput, ModIssueUncheckedUpdateWithoutModIssuePostInput>
    create: XOR<ModIssueCreateWithoutModIssuePostInput, ModIssueUncheckedCreateWithoutModIssuePostInput>
  }

  export type ModIssueUpdateWithoutModIssuePostInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModIssueTypeFieldUpdateOperationsInput | ModIssueType
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Mod?: ModUpdateOneRequiredWithoutIssuesInput
    Author?: UserUpdateOneRequiredWithoutModIssuesInput
  }

  export type ModIssueUncheckedUpdateWithoutModIssuePostInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModIssueTypeFieldUpdateOperationsInput | ModIssueType
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
    UserAuth?: UserAuthUpdateOneWithoutUserInput
    ModsCollections?: ModsCollectionUpdateManyWithoutAuthorInput
    ModAuthors?: ModAuthorUpdateManyWithoutUserInput
    ModIssues?: ModIssueUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUpdateManyWithoutUserInput
    ModSubscribers?: ModSubscribersUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutModIssuePostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: UserAuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: ModsCollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: ModAuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: ModIssueUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: ModSubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateWithoutModsListsInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: UserAuthCreateNestedOneWithoutUserInput
    ModsCollections?: ModsCollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: ModAuthorCreateNestedManyWithoutUserInput
    ModIssues?: ModIssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: ModSubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModsListsInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: UserAuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: ModsCollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: ModAuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: ModIssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: ModSubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedCreateNestedManyWithoutUserInput
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
    Collection: ModsCollectionCreateNestedOneWithoutModsInput
    Images?: ModImageCreateNestedManyWithoutModInput
    Authors?: ModAuthorCreateNestedManyWithoutModInput
    Tags?: ModTagCreateNestedManyWithoutModInput
    Versions?: ModVersionCreateNestedManyWithoutModInput
    Issues?: ModIssueCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersCreateNestedManyWithoutModInput
    Downloads?: ModDownloadCreateNestedManyWithoutModInput
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
    Images?: ModImageUncheckedCreateNestedManyWithoutModInput
    Authors?: ModAuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: ModTagUncheckedCreateNestedManyWithoutModInput
    Versions?: ModVersionUncheckedCreateNestedManyWithoutModInput
    Issues?: ModIssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: ModDownloadUncheckedCreateNestedManyWithoutModInput
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
    UserAuth?: UserAuthUpdateOneWithoutUserInput
    ModsCollections?: ModsCollectionUpdateManyWithoutAuthorInput
    ModAuthors?: ModAuthorUpdateManyWithoutUserInput
    ModIssues?: ModIssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUpdateManyWithoutUserInput
    ModSubscribers?: ModSubscribersUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutModsListsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: UserAuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: ModsCollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: ModAuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: ModIssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: ModSubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedUpdateManyWithoutUserInput
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
    UserAuth?: UserAuthCreateNestedOneWithoutUserInput
    ModsCollections?: ModsCollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: ModAuthorCreateNestedManyWithoutUserInput
    ModIssues?: ModIssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListCreateNestedManyWithoutAuthorInput
    ModSubscribers?: ModSubscribersCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModsFavoritsInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: UserAuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: ModsCollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: ModAuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: ModIssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedCreateNestedManyWithoutAuthorInput
    ModSubscribers?: ModSubscribersUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedCreateNestedManyWithoutUserInput
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
    Collection: ModsCollectionCreateNestedOneWithoutModsInput
    Images?: ModImageCreateNestedManyWithoutModInput
    Authors?: ModAuthorCreateNestedManyWithoutModInput
    Tags?: ModTagCreateNestedManyWithoutModInput
    Versions?: ModVersionCreateNestedManyWithoutModInput
    Lists?: ModsListCreateNestedManyWithoutModsInput
    Issues?: ModIssueCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersCreateNestedManyWithoutModInput
    Downloads?: ModDownloadCreateNestedManyWithoutModInput
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
    Images?: ModImageUncheckedCreateNestedManyWithoutModInput
    Authors?: ModAuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: ModTagUncheckedCreateNestedManyWithoutModInput
    Versions?: ModVersionUncheckedCreateNestedManyWithoutModInput
    Lists?: ModsListUncheckedCreateNestedManyWithoutModsInput
    Issues?: ModIssueUncheckedCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedCreateNestedManyWithoutModInput
    Downloads?: ModDownloadUncheckedCreateNestedManyWithoutModInput
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
    UserAuth?: UserAuthUpdateOneWithoutUserInput
    ModsCollections?: ModsCollectionUpdateManyWithoutAuthorInput
    ModAuthors?: ModAuthorUpdateManyWithoutUserInput
    ModIssues?: ModIssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUpdateManyWithoutAuthorInput
    ModSubscribers?: ModSubscribersUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutModsFavoritsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: UserAuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: ModsCollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: ModAuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: ModIssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedUpdateManyWithoutAuthorInput
    ModSubscribers?: ModSubscribersUncheckedUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedUpdateManyWithoutUserInput
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
    Collection?: ModsCollectionUpdateOneRequiredWithoutModsInput
    Images?: ModImageUpdateManyWithoutModInput
    Authors?: ModAuthorUpdateManyWithoutModInput
    Tags?: ModTagUpdateManyWithoutModInput
    Versions?: ModVersionUpdateManyWithoutModInput
    Lists?: ModsListUpdateManyWithoutModsInput
    Issues?: ModIssueUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUpdateManyWithoutModInput
    Downloads?: ModDownloadUpdateManyWithoutModInput
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
    Images?: ModImageUncheckedUpdateManyWithoutModInput
    Authors?: ModAuthorUncheckedUpdateManyWithoutModInput
    Tags?: ModTagUncheckedUpdateManyWithoutModInput
    Versions?: ModVersionUncheckedUpdateManyWithoutModInput
    Lists?: ModsListUncheckedUpdateManyWithoutModsInput
    Issues?: ModIssueUncheckedUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: ModDownloadUncheckedUpdateManyWithoutModInput
  }

  export type UserCreateWithoutModSubscribersInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: UserAuthCreateNestedOneWithoutUserInput
    ModsCollections?: ModsCollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: ModAuthorCreateNestedManyWithoutUserInput
    ModIssues?: ModIssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModSubscribersInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: UserAuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: ModsCollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: ModAuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: ModIssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedCreateNestedManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedCreateNestedManyWithoutUserInput
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
    Collection: ModsCollectionCreateNestedOneWithoutModsInput
    Images?: ModImageCreateNestedManyWithoutModInput
    Authors?: ModAuthorCreateNestedManyWithoutModInput
    Tags?: ModTagCreateNestedManyWithoutModInput
    Versions?: ModVersionCreateNestedManyWithoutModInput
    Lists?: ModsListCreateNestedManyWithoutModsInput
    Issues?: ModIssueCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsCreateNestedManyWithoutModInput
    Downloads?: ModDownloadCreateNestedManyWithoutModInput
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
    Images?: ModImageUncheckedCreateNestedManyWithoutModInput
    Authors?: ModAuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: ModTagUncheckedCreateNestedManyWithoutModInput
    Versions?: ModVersionUncheckedCreateNestedManyWithoutModInput
    Lists?: ModsListUncheckedCreateNestedManyWithoutModsInput
    Issues?: ModIssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedCreateNestedManyWithoutModInput
    Downloads?: ModDownloadUncheckedCreateNestedManyWithoutModInput
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
    UserAuth?: UserAuthUpdateOneWithoutUserInput
    ModsCollections?: ModsCollectionUpdateManyWithoutAuthorInput
    ModAuthors?: ModAuthorUpdateManyWithoutUserInput
    ModIssues?: ModIssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutModSubscribersInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: UserAuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: ModsCollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: ModAuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: ModIssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedUpdateManyWithoutUserInput
    ModDownloads?: ModDownloadUncheckedUpdateManyWithoutUserInput
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
    Collection?: ModsCollectionUpdateOneRequiredWithoutModsInput
    Images?: ModImageUpdateManyWithoutModInput
    Authors?: ModAuthorUpdateManyWithoutModInput
    Tags?: ModTagUpdateManyWithoutModInput
    Versions?: ModVersionUpdateManyWithoutModInput
    Lists?: ModsListUpdateManyWithoutModsInput
    Issues?: ModIssueUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUpdateManyWithoutModInput
    Downloads?: ModDownloadUpdateManyWithoutModInput
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
    Images?: ModImageUncheckedUpdateManyWithoutModInput
    Authors?: ModAuthorUncheckedUpdateManyWithoutModInput
    Tags?: ModTagUncheckedUpdateManyWithoutModInput
    Versions?: ModVersionUncheckedUpdateManyWithoutModInput
    Lists?: ModsListUncheckedUpdateManyWithoutModsInput
    Issues?: ModIssueUncheckedUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedUpdateManyWithoutModInput
    Downloads?: ModDownloadUncheckedUpdateManyWithoutModInput
  }

  export type UserCreateWithoutModDownloadsInput = {
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: UserAuthCreateNestedOneWithoutUserInput
    ModsCollections?: ModsCollectionCreateNestedManyWithoutAuthorInput
    ModAuthors?: ModAuthorCreateNestedManyWithoutUserInput
    ModIssues?: ModIssueCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsCreateNestedManyWithoutUserInput
    ModSubscribers?: ModSubscribersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModDownloadsInput = {
    id?: number
    nick: string
    createDate?: Date | string
    is_active?: boolean
    avatar?: string
    UserAuth?: UserAuthUncheckedCreateNestedOneWithoutUserInput
    ModsCollections?: ModsCollectionUncheckedCreateNestedManyWithoutAuthorInput
    ModAuthors?: ModAuthorUncheckedCreateNestedManyWithoutUserInput
    ModIssues?: ModIssueUncheckedCreateNestedManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUncheckedCreateNestedManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedCreateNestedManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedCreateNestedManyWithoutUserInput
    ModSubscribers?: ModSubscribersUncheckedCreateNestedManyWithoutUserInput
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
    Collection: ModsCollectionCreateNestedOneWithoutModsInput
    Images?: ModImageCreateNestedManyWithoutModInput
    Authors?: ModAuthorCreateNestedManyWithoutModInput
    Tags?: ModTagCreateNestedManyWithoutModInput
    Versions?: ModVersionCreateNestedManyWithoutModInput
    Lists?: ModsListCreateNestedManyWithoutModsInput
    Issues?: ModIssueCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersCreateNestedManyWithoutModInput
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
    Images?: ModImageUncheckedCreateNestedManyWithoutModInput
    Authors?: ModAuthorUncheckedCreateNestedManyWithoutModInput
    Tags?: ModTagUncheckedCreateNestedManyWithoutModInput
    Versions?: ModVersionUncheckedCreateNestedManyWithoutModInput
    Lists?: ModsListUncheckedCreateNestedManyWithoutModsInput
    Issues?: ModIssueUncheckedCreateNestedManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedCreateNestedManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutDownloadsInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutDownloadsInput, ModUncheckedCreateWithoutDownloadsInput>
  }

  export type ModVersionCreateWithoutDownloadsInput = {
    version: string
    game_version: string
    releaseDate?: Date | string
    Mod: ModCreateNestedOneWithoutVersionsInput
  }

  export type ModVersionUncheckedCreateWithoutDownloadsInput = {
    id?: number
    mod_id: number
    version: string
    game_version: string
    releaseDate?: Date | string
  }

  export type ModVersionCreateOrConnectWithoutDownloadsInput = {
    where: ModVersionWhereUniqueInput
    create: XOR<ModVersionCreateWithoutDownloadsInput, ModVersionUncheckedCreateWithoutDownloadsInput>
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
    UserAuth?: UserAuthUpdateOneWithoutUserInput
    ModsCollections?: ModsCollectionUpdateManyWithoutAuthorInput
    ModAuthors?: ModAuthorUpdateManyWithoutUserInput
    ModIssues?: ModIssueUpdateManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUpdateManyWithoutUserInput
    ModSubscribers?: ModSubscribersUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutModDownloadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    avatar?: StringFieldUpdateOperationsInput | string
    UserAuth?: UserAuthUncheckedUpdateOneWithoutUserInput
    ModsCollections?: ModsCollectionUncheckedUpdateManyWithoutAuthorInput
    ModAuthors?: ModAuthorUncheckedUpdateManyWithoutUserInput
    ModIssues?: ModIssueUncheckedUpdateManyWithoutAuthorInput
    ModIssuePosts?: ModIssuePostUncheckedUpdateManyWithoutAuthorInput
    ModsLists?: ModsListUncheckedUpdateManyWithoutAuthorInput
    ModsFavorits?: ModsFavoritsUncheckedUpdateManyWithoutUserInput
    ModSubscribers?: ModSubscribersUncheckedUpdateManyWithoutUserInput
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
    Collection?: ModsCollectionUpdateOneRequiredWithoutModsInput
    Images?: ModImageUpdateManyWithoutModInput
    Authors?: ModAuthorUpdateManyWithoutModInput
    Tags?: ModTagUpdateManyWithoutModInput
    Versions?: ModVersionUpdateManyWithoutModInput
    Lists?: ModsListUpdateManyWithoutModsInput
    Issues?: ModIssueUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUpdateManyWithoutModInput
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
    Images?: ModImageUncheckedUpdateManyWithoutModInput
    Authors?: ModAuthorUncheckedUpdateManyWithoutModInput
    Tags?: ModTagUncheckedUpdateManyWithoutModInput
    Versions?: ModVersionUncheckedUpdateManyWithoutModInput
    Lists?: ModsListUncheckedUpdateManyWithoutModsInput
    Issues?: ModIssueUncheckedUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedUpdateManyWithoutModInput
  }

  export type ModVersionUpsertWithoutDownloadsInput = {
    update: XOR<ModVersionUpdateWithoutDownloadsInput, ModVersionUncheckedUpdateWithoutDownloadsInput>
    create: XOR<ModVersionCreateWithoutDownloadsInput, ModVersionUncheckedCreateWithoutDownloadsInput>
  }

  export type ModVersionUpdateWithoutDownloadsInput = {
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Mod?: ModUpdateOneRequiredWithoutVersionsInput
  }

  export type ModVersionUncheckedUpdateWithoutDownloadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModsCollectionCreateManyAuthorInput = {
    id?: number
    avatar: string
    name: string
    description: string
    createDate?: Date | string
    is_active?: boolean
  }

  export type ModAuthorCreateManyUserInput = {
    mod_id: number
    type: number
  }

  export type ModIssueCreateManyAuthorInput = {
    id?: number
    mod_id: number
    name: string
    type: ModIssueType
    createDate?: Date | string
  }

  export type ModIssuePostCreateManyAuthorInput = {
    id?: number
    issue_id: number
    createDate?: Date | string
    text: string
  }

  export type ModsListCreateManyAuthorInput = {
    id?: number
    is_public: boolean
    name: string
  }

  export type ModsFavoritsCreateManyUserInput = {
    mod_id: number
  }

  export type ModSubscribersCreateManyUserInput = {
    mod_id: number
  }

  export type ModDownloadCreateManyUserInput = {
    mod_id: number
    version_id: number
  }

  export type ModsCollectionUpdateWithoutAuthorInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    Mods?: ModUpdateManyWithoutCollectionInput
  }

  export type ModsCollectionUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    Mods?: ModUncheckedUpdateManyWithoutCollectionInput
  }

  export type ModsCollectionUncheckedUpdateManyWithoutModsCollectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModAuthorUpdateWithoutUserInput = {
    type?: IntFieldUpdateOperationsInput | number
    Mod?: ModUpdateOneRequiredWithoutAuthorsInput
  }

  export type ModAuthorUncheckedUpdateWithoutUserInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
  }

  export type ModAuthorUncheckedUpdateManyWithoutModAuthorsInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
  }

  export type ModIssueUpdateWithoutAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModIssueTypeFieldUpdateOperationsInput | ModIssueType
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Mod?: ModUpdateOneRequiredWithoutIssuesInput
    ModIssuePost?: ModIssuePostUpdateManyWithoutIssueInput
  }

  export type ModIssueUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModIssueTypeFieldUpdateOperationsInput | ModIssueType
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ModIssuePost?: ModIssuePostUncheckedUpdateManyWithoutIssueInput
  }

  export type ModIssueUncheckedUpdateManyWithoutModIssuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModIssueTypeFieldUpdateOperationsInput | ModIssueType
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModIssuePostUpdateWithoutAuthorInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    Issue?: ModIssueUpdateOneRequiredWithoutModIssuePostInput
  }

  export type ModIssuePostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ModIssuePostUncheckedUpdateManyWithoutModIssuePostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    issue_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ModsListUpdateWithoutAuthorInput = {
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    Mods?: ModUpdateManyWithoutListsInput
  }

  export type ModsListUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    Mods?: ModUncheckedUpdateManyWithoutListsInput
  }

  export type ModsListUncheckedUpdateManyWithoutModsListsInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModsFavoritsUpdateWithoutUserInput = {
    Mod?: ModUpdateOneRequiredWithoutFavoritsInput
  }

  export type ModsFavoritsUncheckedUpdateWithoutUserInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModsFavoritsUncheckedUpdateManyWithoutModsFavoritsInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModSubscribersUpdateWithoutUserInput = {
    Mod?: ModUpdateOneRequiredWithoutSubscribersInput
  }

  export type ModSubscribersUncheckedUpdateWithoutUserInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModSubscribersUncheckedUpdateManyWithoutModSubscribersInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModDownloadUpdateWithoutUserInput = {
    Mod?: ModUpdateOneRequiredWithoutDownloadsInput
    Version?: ModVersionUpdateOneRequiredWithoutDownloadsInput
  }

  export type ModDownloadUncheckedUpdateWithoutUserInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModDownloadUncheckedUpdateManyWithoutModDownloadsInput = {
    mod_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
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
    Images?: ModImageUpdateManyWithoutModInput
    Authors?: ModAuthorUpdateManyWithoutModInput
    Tags?: ModTagUpdateManyWithoutModInput
    Versions?: ModVersionUpdateManyWithoutModInput
    Lists?: ModsListUpdateManyWithoutModsInput
    Issues?: ModIssueUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUpdateManyWithoutModInput
    Downloads?: ModDownloadUpdateManyWithoutModInput
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
    Images?: ModImageUncheckedUpdateManyWithoutModInput
    Authors?: ModAuthorUncheckedUpdateManyWithoutModInput
    Tags?: ModTagUncheckedUpdateManyWithoutModInput
    Versions?: ModVersionUncheckedUpdateManyWithoutModInput
    Lists?: ModsListUncheckedUpdateManyWithoutModsInput
    Issues?: ModIssueUncheckedUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: ModDownloadUncheckedUpdateManyWithoutModInput
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

  export type ModImageCreateManyModInput = {
    id?: number
    url: string
  }

  export type ModAuthorCreateManyModInput = {
    user_id: number
    type: number
  }

  export type ModVersionCreateManyModInput = {
    id?: number
    version: string
    game_version: string
    releaseDate?: Date | string
  }

  export type ModIssueCreateManyModInput = {
    id?: number
    name: string
    type: ModIssueType
    author_id: number
    createDate?: Date | string
  }

  export type ModsFavoritsCreateManyModInput = {
    user_id: number
  }

  export type ModSubscribersCreateManyModInput = {
    user_id: number
  }

  export type ModDownloadCreateManyModInput = {
    user_id: number
    version_id: number
  }

  export type ModImageUpdateWithoutModInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ModImageUncheckedUpdateWithoutModInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ModImageUncheckedUpdateManyWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ModAuthorUpdateWithoutModInput = {
    type?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutModAuthorsInput
  }

  export type ModAuthorUncheckedUpdateWithoutModInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
  }

  export type ModAuthorUncheckedUpdateManyWithoutAuthorsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
  }

  export type ModTagUpdateWithoutModInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModTagUncheckedUpdateWithoutModInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModTagUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModVersionUpdateWithoutModInput = {
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Downloads?: ModDownloadUpdateManyWithoutVersionInput
  }

  export type ModVersionUncheckedUpdateWithoutModInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Downloads?: ModDownloadUncheckedUpdateManyWithoutVersionInput
  }

  export type ModVersionUncheckedUpdateManyWithoutVersionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    game_version?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModsListUpdateWithoutModsInput = {
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    Author?: UserUpdateOneRequiredWithoutModsListsInput
  }

  export type ModsListUncheckedUpdateWithoutModsInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModsListUncheckedUpdateManyWithoutListsInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    is_public?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModIssueUpdateWithoutModInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModIssueTypeFieldUpdateOperationsInput | ModIssueType
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Author?: UserUpdateOneRequiredWithoutModIssuesInput
    ModIssuePost?: ModIssuePostUpdateManyWithoutIssueInput
  }

  export type ModIssueUncheckedUpdateWithoutModInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModIssueTypeFieldUpdateOperationsInput | ModIssueType
    author_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ModIssuePost?: ModIssuePostUncheckedUpdateManyWithoutIssueInput
  }

  export type ModIssueUncheckedUpdateManyWithoutIssuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModIssueTypeFieldUpdateOperationsInput | ModIssueType
    author_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModsFavoritsUpdateWithoutModInput = {
    User?: UserUpdateOneRequiredWithoutModsFavoritsInput
  }

  export type ModsFavoritsUncheckedUpdateWithoutModInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModsFavoritsUncheckedUpdateManyWithoutFavoritsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModSubscribersUpdateWithoutModInput = {
    User?: UserUpdateOneRequiredWithoutModSubscribersInput
  }

  export type ModSubscribersUncheckedUpdateWithoutModInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModSubscribersUncheckedUpdateManyWithoutSubscribersInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModDownloadUpdateWithoutModInput = {
    User?: UserUpdateOneRequiredWithoutModDownloadsInput
    Version?: ModVersionUpdateOneRequiredWithoutDownloadsInput
  }

  export type ModDownloadUncheckedUpdateWithoutModInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    version_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModDownloadUncheckedUpdateManyWithoutDownloadsInput = {
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
    Collection?: ModsCollectionUpdateOneRequiredWithoutModsInput
    Images?: ModImageUpdateManyWithoutModInput
    Authors?: ModAuthorUpdateManyWithoutModInput
    Versions?: ModVersionUpdateManyWithoutModInput
    Lists?: ModsListUpdateManyWithoutModsInput
    Issues?: ModIssueUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUpdateManyWithoutModInput
    Downloads?: ModDownloadUpdateManyWithoutModInput
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
    Images?: ModImageUncheckedUpdateManyWithoutModInput
    Authors?: ModAuthorUncheckedUpdateManyWithoutModInput
    Versions?: ModVersionUncheckedUpdateManyWithoutModInput
    Lists?: ModsListUncheckedUpdateManyWithoutModsInput
    Issues?: ModIssueUncheckedUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: ModDownloadUncheckedUpdateManyWithoutModInput
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

  export type ModDownloadCreateManyVersionInput = {
    user_id: number
    mod_id: number
  }

  export type ModDownloadUpdateWithoutVersionInput = {
    User?: UserUpdateOneRequiredWithoutModDownloadsInput
    Mod?: ModUpdateOneRequiredWithoutDownloadsInput
  }

  export type ModDownloadUncheckedUpdateWithoutVersionInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    mod_id?: IntFieldUpdateOperationsInput | number
  }

  export type ModIssuePostCreateManyIssueInput = {
    id?: number
    author_id: number
    createDate?: Date | string
    text: string
  }

  export type ModIssuePostUpdateWithoutIssueInput = {
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
    Author?: UserUpdateOneRequiredWithoutModIssuePostsInput
  }

  export type ModIssuePostUncheckedUpdateWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ModIssuePostUncheckedUpdateManyWithoutModIssuePostInput = {
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
    Collection?: ModsCollectionUpdateOneRequiredWithoutModsInput
    Images?: ModImageUpdateManyWithoutModInput
    Authors?: ModAuthorUpdateManyWithoutModInput
    Tags?: ModTagUpdateManyWithoutModInput
    Versions?: ModVersionUpdateManyWithoutModInput
    Issues?: ModIssueUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUpdateManyWithoutModInput
    Downloads?: ModDownloadUpdateManyWithoutModInput
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
    Images?: ModImageUncheckedUpdateManyWithoutModInput
    Authors?: ModAuthorUncheckedUpdateManyWithoutModInput
    Tags?: ModTagUncheckedUpdateManyWithoutModInput
    Versions?: ModVersionUncheckedUpdateManyWithoutModInput
    Issues?: ModIssueUncheckedUpdateManyWithoutModInput
    Favorits?: ModsFavoritsUncheckedUpdateManyWithoutModInput
    Subscribers?: ModSubscribersUncheckedUpdateManyWithoutModInput
    Downloads?: ModDownloadUncheckedUpdateManyWithoutModInput
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