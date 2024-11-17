
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model inventory_move_draft
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type inventory_move_draft = $Result.DefaultSelection<Prisma.$inventory_move_draftPayload>
/**
 * Model shipment_draft
 * 
 */
export type shipment_draft = $Result.DefaultSelection<Prisma.$shipment_draftPayload>
/**
 * Model production_single_product_draft
 * 
 */
export type production_single_product_draft = $Result.DefaultSelection<Prisma.$production_single_product_draftPayload>
/**
 * Model track_id_object
 * 
 */
export type track_id_object = $Result.DefaultSelection<Prisma.$track_id_objectPayload>
/**
 * Model track_id_history
 * 
 */
export type track_id_history = $Result.DefaultSelection<Prisma.$track_id_historyPayload>
/**
 * Model track_id_stock
 * 
 */
export type track_id_stock = $Result.DefaultSelection<Prisma.$track_id_stockPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Inventory_move_drafts
 * const inventory_move_drafts = await prisma.inventory_move_draft.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Inventory_move_drafts
   * const inventory_move_drafts = await prisma.inventory_move_draft.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.inventory_move_draft`: Exposes CRUD operations for the **inventory_move_draft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventory_move_drafts
    * const inventory_move_drafts = await prisma.inventory_move_draft.findMany()
    * ```
    */
  get inventory_move_draft(): Prisma.inventory_move_draftDelegate<ExtArgs>;

  /**
   * `prisma.shipment_draft`: Exposes CRUD operations for the **shipment_draft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipment_drafts
    * const shipment_drafts = await prisma.shipment_draft.findMany()
    * ```
    */
  get shipment_draft(): Prisma.shipment_draftDelegate<ExtArgs>;

  /**
   * `prisma.production_single_product_draft`: Exposes CRUD operations for the **production_single_product_draft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Production_single_product_drafts
    * const production_single_product_drafts = await prisma.production_single_product_draft.findMany()
    * ```
    */
  get production_single_product_draft(): Prisma.production_single_product_draftDelegate<ExtArgs>;

  /**
   * `prisma.track_id_object`: Exposes CRUD operations for the **track_id_object** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Track_id_objects
    * const track_id_objects = await prisma.track_id_object.findMany()
    * ```
    */
  get track_id_object(): Prisma.track_id_objectDelegate<ExtArgs>;

  /**
   * `prisma.track_id_history`: Exposes CRUD operations for the **track_id_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Track_id_histories
    * const track_id_histories = await prisma.track_id_history.findMany()
    * ```
    */
  get track_id_history(): Prisma.track_id_historyDelegate<ExtArgs>;

  /**
   * `prisma.track_id_stock`: Exposes CRUD operations for the **track_id_stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Track_id_stocks
    * const track_id_stocks = await prisma.track_id_stock.findMany()
    * ```
    */
  get track_id_stock(): Prisma.track_id_stockDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.1.0
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    inventory_move_draft: 'inventory_move_draft',
    shipment_draft: 'shipment_draft',
    production_single_product_draft: 'production_single_product_draft',
    track_id_object: 'track_id_object',
    track_id_history: 'track_id_history',
    track_id_stock: 'track_id_stock'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'inventory_move_draft' | 'shipment_draft' | 'production_single_product_draft' | 'track_id_object' | 'track_id_history' | 'track_id_stock'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      inventory_move_draft: {
        payload: Prisma.$inventory_move_draftPayload<ExtArgs>
        fields: Prisma.inventory_move_draftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventory_move_draftFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inventory_move_draftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventory_move_draftFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inventory_move_draftPayload>
          }
          findFirst: {
            args: Prisma.inventory_move_draftFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inventory_move_draftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventory_move_draftFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inventory_move_draftPayload>
          }
          findMany: {
            args: Prisma.inventory_move_draftFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inventory_move_draftPayload>[]
          }
          create: {
            args: Prisma.inventory_move_draftCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inventory_move_draftPayload>
          }
          createMany: {
            args: Prisma.inventory_move_draftCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.inventory_move_draftDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inventory_move_draftPayload>
          }
          update: {
            args: Prisma.inventory_move_draftUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inventory_move_draftPayload>
          }
          deleteMany: {
            args: Prisma.inventory_move_draftDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.inventory_move_draftUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.inventory_move_draftUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inventory_move_draftPayload>
          }
          aggregate: {
            args: Prisma.Inventory_move_draftAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInventory_move_draft>
          }
          groupBy: {
            args: Prisma.inventory_move_draftGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Inventory_move_draftGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventory_move_draftCountArgs<ExtArgs>,
            result: $Utils.Optional<Inventory_move_draftCountAggregateOutputType> | number
          }
        }
      }
      shipment_draft: {
        payload: Prisma.$shipment_draftPayload<ExtArgs>
        fields: Prisma.shipment_draftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shipment_draftFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shipment_draftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shipment_draftFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shipment_draftPayload>
          }
          findFirst: {
            args: Prisma.shipment_draftFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shipment_draftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shipment_draftFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shipment_draftPayload>
          }
          findMany: {
            args: Prisma.shipment_draftFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shipment_draftPayload>[]
          }
          create: {
            args: Prisma.shipment_draftCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shipment_draftPayload>
          }
          createMany: {
            args: Prisma.shipment_draftCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.shipment_draftDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shipment_draftPayload>
          }
          update: {
            args: Prisma.shipment_draftUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shipment_draftPayload>
          }
          deleteMany: {
            args: Prisma.shipment_draftDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.shipment_draftUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.shipment_draftUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$shipment_draftPayload>
          }
          aggregate: {
            args: Prisma.Shipment_draftAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShipment_draft>
          }
          groupBy: {
            args: Prisma.shipment_draftGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Shipment_draftGroupByOutputType>[]
          }
          count: {
            args: Prisma.shipment_draftCountArgs<ExtArgs>,
            result: $Utils.Optional<Shipment_draftCountAggregateOutputType> | number
          }
        }
      }
      production_single_product_draft: {
        payload: Prisma.$production_single_product_draftPayload<ExtArgs>
        fields: Prisma.production_single_product_draftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.production_single_product_draftFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$production_single_product_draftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.production_single_product_draftFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$production_single_product_draftPayload>
          }
          findFirst: {
            args: Prisma.production_single_product_draftFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$production_single_product_draftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.production_single_product_draftFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$production_single_product_draftPayload>
          }
          findMany: {
            args: Prisma.production_single_product_draftFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$production_single_product_draftPayload>[]
          }
          create: {
            args: Prisma.production_single_product_draftCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$production_single_product_draftPayload>
          }
          createMany: {
            args: Prisma.production_single_product_draftCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.production_single_product_draftDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$production_single_product_draftPayload>
          }
          update: {
            args: Prisma.production_single_product_draftUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$production_single_product_draftPayload>
          }
          deleteMany: {
            args: Prisma.production_single_product_draftDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.production_single_product_draftUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.production_single_product_draftUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$production_single_product_draftPayload>
          }
          aggregate: {
            args: Prisma.Production_single_product_draftAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduction_single_product_draft>
          }
          groupBy: {
            args: Prisma.production_single_product_draftGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Production_single_product_draftGroupByOutputType>[]
          }
          count: {
            args: Prisma.production_single_product_draftCountArgs<ExtArgs>,
            result: $Utils.Optional<Production_single_product_draftCountAggregateOutputType> | number
          }
        }
      }
      track_id_object: {
        payload: Prisma.$track_id_objectPayload<ExtArgs>
        fields: Prisma.track_id_objectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.track_id_objectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_objectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.track_id_objectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_objectPayload>
          }
          findFirst: {
            args: Prisma.track_id_objectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_objectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.track_id_objectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_objectPayload>
          }
          findMany: {
            args: Prisma.track_id_objectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_objectPayload>[]
          }
          create: {
            args: Prisma.track_id_objectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_objectPayload>
          }
          createMany: {
            args: Prisma.track_id_objectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.track_id_objectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_objectPayload>
          }
          update: {
            args: Prisma.track_id_objectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_objectPayload>
          }
          deleteMany: {
            args: Prisma.track_id_objectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.track_id_objectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.track_id_objectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_objectPayload>
          }
          aggregate: {
            args: Prisma.Track_id_objectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrack_id_object>
          }
          groupBy: {
            args: Prisma.track_id_objectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Track_id_objectGroupByOutputType>[]
          }
          count: {
            args: Prisma.track_id_objectCountArgs<ExtArgs>,
            result: $Utils.Optional<Track_id_objectCountAggregateOutputType> | number
          }
        }
      }
      track_id_history: {
        payload: Prisma.$track_id_historyPayload<ExtArgs>
        fields: Prisma.track_id_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.track_id_historyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.track_id_historyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_historyPayload>
          }
          findFirst: {
            args: Prisma.track_id_historyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.track_id_historyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_historyPayload>
          }
          findMany: {
            args: Prisma.track_id_historyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_historyPayload>[]
          }
          create: {
            args: Prisma.track_id_historyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_historyPayload>
          }
          createMany: {
            args: Prisma.track_id_historyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.track_id_historyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_historyPayload>
          }
          update: {
            args: Prisma.track_id_historyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_historyPayload>
          }
          deleteMany: {
            args: Prisma.track_id_historyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.track_id_historyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.track_id_historyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_historyPayload>
          }
          aggregate: {
            args: Prisma.Track_id_historyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrack_id_history>
          }
          groupBy: {
            args: Prisma.track_id_historyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Track_id_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.track_id_historyCountArgs<ExtArgs>,
            result: $Utils.Optional<Track_id_historyCountAggregateOutputType> | number
          }
        }
      }
      track_id_stock: {
        payload: Prisma.$track_id_stockPayload<ExtArgs>
        fields: Prisma.track_id_stockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.track_id_stockFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_stockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.track_id_stockFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_stockPayload>
          }
          findFirst: {
            args: Prisma.track_id_stockFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_stockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.track_id_stockFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_stockPayload>
          }
          findMany: {
            args: Prisma.track_id_stockFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_stockPayload>[]
          }
          create: {
            args: Prisma.track_id_stockCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_stockPayload>
          }
          createMany: {
            args: Prisma.track_id_stockCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.track_id_stockDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_stockPayload>
          }
          update: {
            args: Prisma.track_id_stockUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_stockPayload>
          }
          deleteMany: {
            args: Prisma.track_id_stockDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.track_id_stockUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.track_id_stockUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$track_id_stockPayload>
          }
          aggregate: {
            args: Prisma.Track_id_stockAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrack_id_stock>
          }
          groupBy: {
            args: Prisma.track_id_stockGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Track_id_stockGroupByOutputType>[]
          }
          count: {
            args: Prisma.track_id_stockCountArgs<ExtArgs>,
            result: $Utils.Optional<Track_id_stockCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Track_id_objectCountOutputType
   */

  export type Track_id_objectCountOutputType = {
    track_id_history: number
  }

  export type Track_id_objectCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    track_id_history?: boolean | Track_id_objectCountOutputTypeCountTrack_id_historyArgs
  }

  // Custom InputTypes

  /**
   * Track_id_objectCountOutputType without action
   */
  export type Track_id_objectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track_id_objectCountOutputType
     */
    select?: Track_id_objectCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Track_id_objectCountOutputType without action
   */
  export type Track_id_objectCountOutputTypeCountTrack_id_historyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: track_id_historyWhereInput
  }



  /**
   * Models
   */

  /**
   * Model inventory_move_draft
   */

  export type AggregateInventory_move_draft = {
    _count: Inventory_move_draftCountAggregateOutputType | null
    _avg: Inventory_move_draftAvgAggregateOutputType | null
    _sum: Inventory_move_draftSumAggregateOutputType | null
    _min: Inventory_move_draftMinAggregateOutputType | null
    _max: Inventory_move_draftMaxAggregateOutputType | null
  }

  export type Inventory_move_draftAvgAggregateOutputType = {
    org_id: number | null
    movement_id: number | null
  }

  export type Inventory_move_draftSumAggregateOutputType = {
    org_id: number | null
    movement_id: number | null
  }

  export type Inventory_move_draftMinAggregateOutputType = {
    org_id: number | null
    creation_date_time: Date | null
    movement_id: number | null
  }

  export type Inventory_move_draftMaxAggregateOutputType = {
    org_id: number | null
    creation_date_time: Date | null
    movement_id: number | null
  }

  export type Inventory_move_draftCountAggregateOutputType = {
    org_id: number
    creation_date_time: number
    movement_id: number
    data: number
    _all: number
  }


  export type Inventory_move_draftAvgAggregateInputType = {
    org_id?: true
    movement_id?: true
  }

  export type Inventory_move_draftSumAggregateInputType = {
    org_id?: true
    movement_id?: true
  }

  export type Inventory_move_draftMinAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    movement_id?: true
  }

  export type Inventory_move_draftMaxAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    movement_id?: true
  }

  export type Inventory_move_draftCountAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    movement_id?: true
    data?: true
    _all?: true
  }

  export type Inventory_move_draftAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory_move_draft to aggregate.
     */
    where?: inventory_move_draftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_move_drafts to fetch.
     */
    orderBy?: inventory_move_draftOrderByWithRelationInput | inventory_move_draftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventory_move_draftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_move_drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_move_drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventory_move_drafts
    **/
    _count?: true | Inventory_move_draftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Inventory_move_draftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Inventory_move_draftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Inventory_move_draftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Inventory_move_draftMaxAggregateInputType
  }

  export type GetInventory_move_draftAggregateType<T extends Inventory_move_draftAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory_move_draft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory_move_draft[P]>
      : GetScalarType<T[P], AggregateInventory_move_draft[P]>
  }




  export type inventory_move_draftGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: inventory_move_draftWhereInput
    orderBy?: inventory_move_draftOrderByWithAggregationInput | inventory_move_draftOrderByWithAggregationInput[]
    by: Inventory_move_draftScalarFieldEnum[] | Inventory_move_draftScalarFieldEnum
    having?: inventory_move_draftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Inventory_move_draftCountAggregateInputType | true
    _avg?: Inventory_move_draftAvgAggregateInputType
    _sum?: Inventory_move_draftSumAggregateInputType
    _min?: Inventory_move_draftMinAggregateInputType
    _max?: Inventory_move_draftMaxAggregateInputType
  }

  export type Inventory_move_draftGroupByOutputType = {
    org_id: number
    creation_date_time: Date
    movement_id: number
    data: JsonValue
    _count: Inventory_move_draftCountAggregateOutputType | null
    _avg: Inventory_move_draftAvgAggregateOutputType | null
    _sum: Inventory_move_draftSumAggregateOutputType | null
    _min: Inventory_move_draftMinAggregateOutputType | null
    _max: Inventory_move_draftMaxAggregateOutputType | null
  }

  type GetInventory_move_draftGroupByPayload<T extends inventory_move_draftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Inventory_move_draftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Inventory_move_draftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Inventory_move_draftGroupByOutputType[P]>
            : GetScalarType<T[P], Inventory_move_draftGroupByOutputType[P]>
        }
      >
    >


  export type inventory_move_draftSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    org_id?: boolean
    creation_date_time?: boolean
    movement_id?: boolean
    data?: boolean
  }, ExtArgs["result"]["inventory_move_draft"]>

  export type inventory_move_draftSelectScalar = {
    org_id?: boolean
    creation_date_time?: boolean
    movement_id?: boolean
    data?: boolean
  }


  export type $inventory_move_draftPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "inventory_move_draft"
    objects: {}
    scalars: $Extensions.GetResult<{
      org_id: number
      creation_date_time: Date
      movement_id: number
      data: Prisma.JsonValue
    }, ExtArgs["result"]["inventory_move_draft"]>
    composites: {}
  }


  type inventory_move_draftGetPayload<S extends boolean | null | undefined | inventory_move_draftDefaultArgs> = $Result.GetResult<Prisma.$inventory_move_draftPayload, S>

  type inventory_move_draftCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<inventory_move_draftFindManyArgs, 'select' | 'include'> & {
      select?: Inventory_move_draftCountAggregateInputType | true
    }

  export interface inventory_move_draftDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory_move_draft'], meta: { name: 'inventory_move_draft' } }
    /**
     * Find zero or one Inventory_move_draft that matches the filter.
     * @param {inventory_move_draftFindUniqueArgs} args - Arguments to find a Inventory_move_draft
     * @example
     * // Get one Inventory_move_draft
     * const inventory_move_draft = await prisma.inventory_move_draft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends inventory_move_draftFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, inventory_move_draftFindUniqueArgs<ExtArgs>>
    ): Prisma__inventory_move_draftClient<$Result.GetResult<Prisma.$inventory_move_draftPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Inventory_move_draft that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {inventory_move_draftFindUniqueOrThrowArgs} args - Arguments to find a Inventory_move_draft
     * @example
     * // Get one Inventory_move_draft
     * const inventory_move_draft = await prisma.inventory_move_draft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends inventory_move_draftFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inventory_move_draftFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__inventory_move_draftClient<$Result.GetResult<Prisma.$inventory_move_draftPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Inventory_move_draft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_move_draftFindFirstArgs} args - Arguments to find a Inventory_move_draft
     * @example
     * // Get one Inventory_move_draft
     * const inventory_move_draft = await prisma.inventory_move_draft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends inventory_move_draftFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, inventory_move_draftFindFirstArgs<ExtArgs>>
    ): Prisma__inventory_move_draftClient<$Result.GetResult<Prisma.$inventory_move_draftPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Inventory_move_draft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_move_draftFindFirstOrThrowArgs} args - Arguments to find a Inventory_move_draft
     * @example
     * // Get one Inventory_move_draft
     * const inventory_move_draft = await prisma.inventory_move_draft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends inventory_move_draftFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inventory_move_draftFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__inventory_move_draftClient<$Result.GetResult<Prisma.$inventory_move_draftPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Inventory_move_drafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_move_draftFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventory_move_drafts
     * const inventory_move_drafts = await prisma.inventory_move_draft.findMany()
     * 
     * // Get first 10 Inventory_move_drafts
     * const inventory_move_drafts = await prisma.inventory_move_draft.findMany({ take: 10 })
     * 
     * // Only select the `org_id`
     * const inventory_move_draftWithOrg_idOnly = await prisma.inventory_move_draft.findMany({ select: { org_id: true } })
     * 
    **/
    findMany<T extends inventory_move_draftFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventory_move_draftFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventory_move_draftPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Inventory_move_draft.
     * @param {inventory_move_draftCreateArgs} args - Arguments to create a Inventory_move_draft.
     * @example
     * // Create one Inventory_move_draft
     * const Inventory_move_draft = await prisma.inventory_move_draft.create({
     *   data: {
     *     // ... data to create a Inventory_move_draft
     *   }
     * })
     * 
    **/
    create<T extends inventory_move_draftCreateArgs<ExtArgs>>(
      args: SelectSubset<T, inventory_move_draftCreateArgs<ExtArgs>>
    ): Prisma__inventory_move_draftClient<$Result.GetResult<Prisma.$inventory_move_draftPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Inventory_move_drafts.
     *     @param {inventory_move_draftCreateManyArgs} args - Arguments to create many Inventory_move_drafts.
     *     @example
     *     // Create many Inventory_move_drafts
     *     const inventory_move_draft = await prisma.inventory_move_draft.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends inventory_move_draftCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventory_move_draftCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventory_move_draft.
     * @param {inventory_move_draftDeleteArgs} args - Arguments to delete one Inventory_move_draft.
     * @example
     * // Delete one Inventory_move_draft
     * const Inventory_move_draft = await prisma.inventory_move_draft.delete({
     *   where: {
     *     // ... filter to delete one Inventory_move_draft
     *   }
     * })
     * 
    **/
    delete<T extends inventory_move_draftDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, inventory_move_draftDeleteArgs<ExtArgs>>
    ): Prisma__inventory_move_draftClient<$Result.GetResult<Prisma.$inventory_move_draftPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Inventory_move_draft.
     * @param {inventory_move_draftUpdateArgs} args - Arguments to update one Inventory_move_draft.
     * @example
     * // Update one Inventory_move_draft
     * const inventory_move_draft = await prisma.inventory_move_draft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends inventory_move_draftUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, inventory_move_draftUpdateArgs<ExtArgs>>
    ): Prisma__inventory_move_draftClient<$Result.GetResult<Prisma.$inventory_move_draftPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Inventory_move_drafts.
     * @param {inventory_move_draftDeleteManyArgs} args - Arguments to filter Inventory_move_drafts to delete.
     * @example
     * // Delete a few Inventory_move_drafts
     * const { count } = await prisma.inventory_move_draft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends inventory_move_draftDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventory_move_draftDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventory_move_drafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_move_draftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventory_move_drafts
     * const inventory_move_draft = await prisma.inventory_move_draft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends inventory_move_draftUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, inventory_move_draftUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory_move_draft.
     * @param {inventory_move_draftUpsertArgs} args - Arguments to update or create a Inventory_move_draft.
     * @example
     * // Update or create a Inventory_move_draft
     * const inventory_move_draft = await prisma.inventory_move_draft.upsert({
     *   create: {
     *     // ... data to create a Inventory_move_draft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory_move_draft we want to update
     *   }
     * })
    **/
    upsert<T extends inventory_move_draftUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, inventory_move_draftUpsertArgs<ExtArgs>>
    ): Prisma__inventory_move_draftClient<$Result.GetResult<Prisma.$inventory_move_draftPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Inventory_move_drafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_move_draftCountArgs} args - Arguments to filter Inventory_move_drafts to count.
     * @example
     * // Count the number of Inventory_move_drafts
     * const count = await prisma.inventory_move_draft.count({
     *   where: {
     *     // ... the filter for the Inventory_move_drafts we want to count
     *   }
     * })
    **/
    count<T extends inventory_move_draftCountArgs>(
      args?: Subset<T, inventory_move_draftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Inventory_move_draftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory_move_draft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inventory_move_draftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Inventory_move_draftAggregateArgs>(args: Subset<T, Inventory_move_draftAggregateArgs>): Prisma.PrismaPromise<GetInventory_move_draftAggregateType<T>>

    /**
     * Group by Inventory_move_draft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_move_draftGroupByArgs} args - Group by arguments.
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
      T extends inventory_move_draftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventory_move_draftGroupByArgs['orderBy'] }
        : { orderBy?: inventory_move_draftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, inventory_move_draftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventory_move_draftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventory_move_draft model
   */
  readonly fields: inventory_move_draftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory_move_draft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventory_move_draftClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the inventory_move_draft model
   */ 
  interface inventory_move_draftFieldRefs {
    readonly org_id: FieldRef<"inventory_move_draft", 'Int'>
    readonly creation_date_time: FieldRef<"inventory_move_draft", 'DateTime'>
    readonly movement_id: FieldRef<"inventory_move_draft", 'Int'>
    readonly data: FieldRef<"inventory_move_draft", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * inventory_move_draft findUnique
   */
  export type inventory_move_draftFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_move_draft
     */
    select?: inventory_move_draftSelect<ExtArgs> | null
    /**
     * Filter, which inventory_move_draft to fetch.
     */
    where: inventory_move_draftWhereUniqueInput
  }


  /**
   * inventory_move_draft findUniqueOrThrow
   */
  export type inventory_move_draftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_move_draft
     */
    select?: inventory_move_draftSelect<ExtArgs> | null
    /**
     * Filter, which inventory_move_draft to fetch.
     */
    where: inventory_move_draftWhereUniqueInput
  }


  /**
   * inventory_move_draft findFirst
   */
  export type inventory_move_draftFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_move_draft
     */
    select?: inventory_move_draftSelect<ExtArgs> | null
    /**
     * Filter, which inventory_move_draft to fetch.
     */
    where?: inventory_move_draftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_move_drafts to fetch.
     */
    orderBy?: inventory_move_draftOrderByWithRelationInput | inventory_move_draftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventory_move_drafts.
     */
    cursor?: inventory_move_draftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_move_drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_move_drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventory_move_drafts.
     */
    distinct?: Inventory_move_draftScalarFieldEnum | Inventory_move_draftScalarFieldEnum[]
  }


  /**
   * inventory_move_draft findFirstOrThrow
   */
  export type inventory_move_draftFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_move_draft
     */
    select?: inventory_move_draftSelect<ExtArgs> | null
    /**
     * Filter, which inventory_move_draft to fetch.
     */
    where?: inventory_move_draftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_move_drafts to fetch.
     */
    orderBy?: inventory_move_draftOrderByWithRelationInput | inventory_move_draftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventory_move_drafts.
     */
    cursor?: inventory_move_draftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_move_drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_move_drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventory_move_drafts.
     */
    distinct?: Inventory_move_draftScalarFieldEnum | Inventory_move_draftScalarFieldEnum[]
  }


  /**
   * inventory_move_draft findMany
   */
  export type inventory_move_draftFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_move_draft
     */
    select?: inventory_move_draftSelect<ExtArgs> | null
    /**
     * Filter, which inventory_move_drafts to fetch.
     */
    where?: inventory_move_draftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_move_drafts to fetch.
     */
    orderBy?: inventory_move_draftOrderByWithRelationInput | inventory_move_draftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventory_move_drafts.
     */
    cursor?: inventory_move_draftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_move_drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_move_drafts.
     */
    skip?: number
    distinct?: Inventory_move_draftScalarFieldEnum | Inventory_move_draftScalarFieldEnum[]
  }


  /**
   * inventory_move_draft create
   */
  export type inventory_move_draftCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_move_draft
     */
    select?: inventory_move_draftSelect<ExtArgs> | null
    /**
     * The data needed to create a inventory_move_draft.
     */
    data: XOR<inventory_move_draftCreateInput, inventory_move_draftUncheckedCreateInput>
  }


  /**
   * inventory_move_draft createMany
   */
  export type inventory_move_draftCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventory_move_drafts.
     */
    data: inventory_move_draftCreateManyInput | inventory_move_draftCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * inventory_move_draft update
   */
  export type inventory_move_draftUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_move_draft
     */
    select?: inventory_move_draftSelect<ExtArgs> | null
    /**
     * The data needed to update a inventory_move_draft.
     */
    data: XOR<inventory_move_draftUpdateInput, inventory_move_draftUncheckedUpdateInput>
    /**
     * Choose, which inventory_move_draft to update.
     */
    where: inventory_move_draftWhereUniqueInput
  }


  /**
   * inventory_move_draft updateMany
   */
  export type inventory_move_draftUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventory_move_drafts.
     */
    data: XOR<inventory_move_draftUpdateManyMutationInput, inventory_move_draftUncheckedUpdateManyInput>
    /**
     * Filter which inventory_move_drafts to update
     */
    where?: inventory_move_draftWhereInput
  }


  /**
   * inventory_move_draft upsert
   */
  export type inventory_move_draftUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_move_draft
     */
    select?: inventory_move_draftSelect<ExtArgs> | null
    /**
     * The filter to search for the inventory_move_draft to update in case it exists.
     */
    where: inventory_move_draftWhereUniqueInput
    /**
     * In case the inventory_move_draft found by the `where` argument doesn't exist, create a new inventory_move_draft with this data.
     */
    create: XOR<inventory_move_draftCreateInput, inventory_move_draftUncheckedCreateInput>
    /**
     * In case the inventory_move_draft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventory_move_draftUpdateInput, inventory_move_draftUncheckedUpdateInput>
  }


  /**
   * inventory_move_draft delete
   */
  export type inventory_move_draftDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_move_draft
     */
    select?: inventory_move_draftSelect<ExtArgs> | null
    /**
     * Filter which inventory_move_draft to delete.
     */
    where: inventory_move_draftWhereUniqueInput
  }


  /**
   * inventory_move_draft deleteMany
   */
  export type inventory_move_draftDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory_move_drafts to delete
     */
    where?: inventory_move_draftWhereInput
  }


  /**
   * inventory_move_draft without action
   */
  export type inventory_move_draftDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_move_draft
     */
    select?: inventory_move_draftSelect<ExtArgs> | null
  }



  /**
   * Model shipment_draft
   */

  export type AggregateShipment_draft = {
    _count: Shipment_draftCountAggregateOutputType | null
    _avg: Shipment_draftAvgAggregateOutputType | null
    _sum: Shipment_draftSumAggregateOutputType | null
    _min: Shipment_draftMinAggregateOutputType | null
    _max: Shipment_draftMaxAggregateOutputType | null
  }

  export type Shipment_draftAvgAggregateOutputType = {
    org_id: number | null
    erp_id: number | null
  }

  export type Shipment_draftSumAggregateOutputType = {
    org_id: number | null
    erp_id: number | null
  }

  export type Shipment_draftMinAggregateOutputType = {
    org_id: number | null
    creation_date_time: Date | null
    erp_id: number | null
  }

  export type Shipment_draftMaxAggregateOutputType = {
    org_id: number | null
    creation_date_time: Date | null
    erp_id: number | null
  }

  export type Shipment_draftCountAggregateOutputType = {
    org_id: number
    creation_date_time: number
    erp_id: number
    data: number
    _all: number
  }


  export type Shipment_draftAvgAggregateInputType = {
    org_id?: true
    erp_id?: true
  }

  export type Shipment_draftSumAggregateInputType = {
    org_id?: true
    erp_id?: true
  }

  export type Shipment_draftMinAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    erp_id?: true
  }

  export type Shipment_draftMaxAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    erp_id?: true
  }

  export type Shipment_draftCountAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    erp_id?: true
    data?: true
    _all?: true
  }

  export type Shipment_draftAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which shipment_draft to aggregate.
     */
    where?: shipment_draftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shipment_drafts to fetch.
     */
    orderBy?: shipment_draftOrderByWithRelationInput | shipment_draftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shipment_draftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shipment_drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shipment_drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shipment_drafts
    **/
    _count?: true | Shipment_draftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Shipment_draftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Shipment_draftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Shipment_draftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Shipment_draftMaxAggregateInputType
  }

  export type GetShipment_draftAggregateType<T extends Shipment_draftAggregateArgs> = {
        [P in keyof T & keyof AggregateShipment_draft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipment_draft[P]>
      : GetScalarType<T[P], AggregateShipment_draft[P]>
  }




  export type shipment_draftGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: shipment_draftWhereInput
    orderBy?: shipment_draftOrderByWithAggregationInput | shipment_draftOrderByWithAggregationInput[]
    by: Shipment_draftScalarFieldEnum[] | Shipment_draftScalarFieldEnum
    having?: shipment_draftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Shipment_draftCountAggregateInputType | true
    _avg?: Shipment_draftAvgAggregateInputType
    _sum?: Shipment_draftSumAggregateInputType
    _min?: Shipment_draftMinAggregateInputType
    _max?: Shipment_draftMaxAggregateInputType
  }

  export type Shipment_draftGroupByOutputType = {
    org_id: number
    creation_date_time: Date
    erp_id: number
    data: JsonValue
    _count: Shipment_draftCountAggregateOutputType | null
    _avg: Shipment_draftAvgAggregateOutputType | null
    _sum: Shipment_draftSumAggregateOutputType | null
    _min: Shipment_draftMinAggregateOutputType | null
    _max: Shipment_draftMaxAggregateOutputType | null
  }

  type GetShipment_draftGroupByPayload<T extends shipment_draftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Shipment_draftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Shipment_draftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Shipment_draftGroupByOutputType[P]>
            : GetScalarType<T[P], Shipment_draftGroupByOutputType[P]>
        }
      >
    >


  export type shipment_draftSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    org_id?: boolean
    creation_date_time?: boolean
    erp_id?: boolean
    data?: boolean
  }, ExtArgs["result"]["shipment_draft"]>

  export type shipment_draftSelectScalar = {
    org_id?: boolean
    creation_date_time?: boolean
    erp_id?: boolean
    data?: boolean
  }


  export type $shipment_draftPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "shipment_draft"
    objects: {}
    scalars: $Extensions.GetResult<{
      org_id: number
      creation_date_time: Date
      erp_id: number
      data: Prisma.JsonValue
    }, ExtArgs["result"]["shipment_draft"]>
    composites: {}
  }


  type shipment_draftGetPayload<S extends boolean | null | undefined | shipment_draftDefaultArgs> = $Result.GetResult<Prisma.$shipment_draftPayload, S>

  type shipment_draftCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<shipment_draftFindManyArgs, 'select' | 'include'> & {
      select?: Shipment_draftCountAggregateInputType | true
    }

  export interface shipment_draftDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shipment_draft'], meta: { name: 'shipment_draft' } }
    /**
     * Find zero or one Shipment_draft that matches the filter.
     * @param {shipment_draftFindUniqueArgs} args - Arguments to find a Shipment_draft
     * @example
     * // Get one Shipment_draft
     * const shipment_draft = await prisma.shipment_draft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends shipment_draftFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, shipment_draftFindUniqueArgs<ExtArgs>>
    ): Prisma__shipment_draftClient<$Result.GetResult<Prisma.$shipment_draftPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Shipment_draft that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {shipment_draftFindUniqueOrThrowArgs} args - Arguments to find a Shipment_draft
     * @example
     * // Get one Shipment_draft
     * const shipment_draft = await prisma.shipment_draft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends shipment_draftFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, shipment_draftFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__shipment_draftClient<$Result.GetResult<Prisma.$shipment_draftPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Shipment_draft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipment_draftFindFirstArgs} args - Arguments to find a Shipment_draft
     * @example
     * // Get one Shipment_draft
     * const shipment_draft = await prisma.shipment_draft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends shipment_draftFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, shipment_draftFindFirstArgs<ExtArgs>>
    ): Prisma__shipment_draftClient<$Result.GetResult<Prisma.$shipment_draftPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Shipment_draft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipment_draftFindFirstOrThrowArgs} args - Arguments to find a Shipment_draft
     * @example
     * // Get one Shipment_draft
     * const shipment_draft = await prisma.shipment_draft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends shipment_draftFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, shipment_draftFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__shipment_draftClient<$Result.GetResult<Prisma.$shipment_draftPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Shipment_drafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipment_draftFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipment_drafts
     * const shipment_drafts = await prisma.shipment_draft.findMany()
     * 
     * // Get first 10 Shipment_drafts
     * const shipment_drafts = await prisma.shipment_draft.findMany({ take: 10 })
     * 
     * // Only select the `org_id`
     * const shipment_draftWithOrg_idOnly = await prisma.shipment_draft.findMany({ select: { org_id: true } })
     * 
    **/
    findMany<T extends shipment_draftFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, shipment_draftFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shipment_draftPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Shipment_draft.
     * @param {shipment_draftCreateArgs} args - Arguments to create a Shipment_draft.
     * @example
     * // Create one Shipment_draft
     * const Shipment_draft = await prisma.shipment_draft.create({
     *   data: {
     *     // ... data to create a Shipment_draft
     *   }
     * })
     * 
    **/
    create<T extends shipment_draftCreateArgs<ExtArgs>>(
      args: SelectSubset<T, shipment_draftCreateArgs<ExtArgs>>
    ): Prisma__shipment_draftClient<$Result.GetResult<Prisma.$shipment_draftPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Shipment_drafts.
     *     @param {shipment_draftCreateManyArgs} args - Arguments to create many Shipment_drafts.
     *     @example
     *     // Create many Shipment_drafts
     *     const shipment_draft = await prisma.shipment_draft.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends shipment_draftCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, shipment_draftCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shipment_draft.
     * @param {shipment_draftDeleteArgs} args - Arguments to delete one Shipment_draft.
     * @example
     * // Delete one Shipment_draft
     * const Shipment_draft = await prisma.shipment_draft.delete({
     *   where: {
     *     // ... filter to delete one Shipment_draft
     *   }
     * })
     * 
    **/
    delete<T extends shipment_draftDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, shipment_draftDeleteArgs<ExtArgs>>
    ): Prisma__shipment_draftClient<$Result.GetResult<Prisma.$shipment_draftPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Shipment_draft.
     * @param {shipment_draftUpdateArgs} args - Arguments to update one Shipment_draft.
     * @example
     * // Update one Shipment_draft
     * const shipment_draft = await prisma.shipment_draft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends shipment_draftUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, shipment_draftUpdateArgs<ExtArgs>>
    ): Prisma__shipment_draftClient<$Result.GetResult<Prisma.$shipment_draftPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Shipment_drafts.
     * @param {shipment_draftDeleteManyArgs} args - Arguments to filter Shipment_drafts to delete.
     * @example
     * // Delete a few Shipment_drafts
     * const { count } = await prisma.shipment_draft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends shipment_draftDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, shipment_draftDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipment_drafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipment_draftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipment_drafts
     * const shipment_draft = await prisma.shipment_draft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends shipment_draftUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, shipment_draftUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shipment_draft.
     * @param {shipment_draftUpsertArgs} args - Arguments to update or create a Shipment_draft.
     * @example
     * // Update or create a Shipment_draft
     * const shipment_draft = await prisma.shipment_draft.upsert({
     *   create: {
     *     // ... data to create a Shipment_draft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipment_draft we want to update
     *   }
     * })
    **/
    upsert<T extends shipment_draftUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, shipment_draftUpsertArgs<ExtArgs>>
    ): Prisma__shipment_draftClient<$Result.GetResult<Prisma.$shipment_draftPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Shipment_drafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipment_draftCountArgs} args - Arguments to filter Shipment_drafts to count.
     * @example
     * // Count the number of Shipment_drafts
     * const count = await prisma.shipment_draft.count({
     *   where: {
     *     // ... the filter for the Shipment_drafts we want to count
     *   }
     * })
    **/
    count<T extends shipment_draftCountArgs>(
      args?: Subset<T, shipment_draftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Shipment_draftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipment_draft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shipment_draftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Shipment_draftAggregateArgs>(args: Subset<T, Shipment_draftAggregateArgs>): Prisma.PrismaPromise<GetShipment_draftAggregateType<T>>

    /**
     * Group by Shipment_draft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipment_draftGroupByArgs} args - Group by arguments.
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
      T extends shipment_draftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shipment_draftGroupByArgs['orderBy'] }
        : { orderBy?: shipment_draftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, shipment_draftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipment_draftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shipment_draft model
   */
  readonly fields: shipment_draftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shipment_draft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shipment_draftClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the shipment_draft model
   */ 
  interface shipment_draftFieldRefs {
    readonly org_id: FieldRef<"shipment_draft", 'Int'>
    readonly creation_date_time: FieldRef<"shipment_draft", 'DateTime'>
    readonly erp_id: FieldRef<"shipment_draft", 'Int'>
    readonly data: FieldRef<"shipment_draft", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * shipment_draft findUnique
   */
  export type shipment_draftFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipment_draft
     */
    select?: shipment_draftSelect<ExtArgs> | null
    /**
     * Filter, which shipment_draft to fetch.
     */
    where: shipment_draftWhereUniqueInput
  }


  /**
   * shipment_draft findUniqueOrThrow
   */
  export type shipment_draftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipment_draft
     */
    select?: shipment_draftSelect<ExtArgs> | null
    /**
     * Filter, which shipment_draft to fetch.
     */
    where: shipment_draftWhereUniqueInput
  }


  /**
   * shipment_draft findFirst
   */
  export type shipment_draftFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipment_draft
     */
    select?: shipment_draftSelect<ExtArgs> | null
    /**
     * Filter, which shipment_draft to fetch.
     */
    where?: shipment_draftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shipment_drafts to fetch.
     */
    orderBy?: shipment_draftOrderByWithRelationInput | shipment_draftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shipment_drafts.
     */
    cursor?: shipment_draftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shipment_drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shipment_drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shipment_drafts.
     */
    distinct?: Shipment_draftScalarFieldEnum | Shipment_draftScalarFieldEnum[]
  }


  /**
   * shipment_draft findFirstOrThrow
   */
  export type shipment_draftFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipment_draft
     */
    select?: shipment_draftSelect<ExtArgs> | null
    /**
     * Filter, which shipment_draft to fetch.
     */
    where?: shipment_draftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shipment_drafts to fetch.
     */
    orderBy?: shipment_draftOrderByWithRelationInput | shipment_draftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shipment_drafts.
     */
    cursor?: shipment_draftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shipment_drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shipment_drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shipment_drafts.
     */
    distinct?: Shipment_draftScalarFieldEnum | Shipment_draftScalarFieldEnum[]
  }


  /**
   * shipment_draft findMany
   */
  export type shipment_draftFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipment_draft
     */
    select?: shipment_draftSelect<ExtArgs> | null
    /**
     * Filter, which shipment_drafts to fetch.
     */
    where?: shipment_draftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shipment_drafts to fetch.
     */
    orderBy?: shipment_draftOrderByWithRelationInput | shipment_draftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shipment_drafts.
     */
    cursor?: shipment_draftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shipment_drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shipment_drafts.
     */
    skip?: number
    distinct?: Shipment_draftScalarFieldEnum | Shipment_draftScalarFieldEnum[]
  }


  /**
   * shipment_draft create
   */
  export type shipment_draftCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipment_draft
     */
    select?: shipment_draftSelect<ExtArgs> | null
    /**
     * The data needed to create a shipment_draft.
     */
    data: XOR<shipment_draftCreateInput, shipment_draftUncheckedCreateInput>
  }


  /**
   * shipment_draft createMany
   */
  export type shipment_draftCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shipment_drafts.
     */
    data: shipment_draftCreateManyInput | shipment_draftCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * shipment_draft update
   */
  export type shipment_draftUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipment_draft
     */
    select?: shipment_draftSelect<ExtArgs> | null
    /**
     * The data needed to update a shipment_draft.
     */
    data: XOR<shipment_draftUpdateInput, shipment_draftUncheckedUpdateInput>
    /**
     * Choose, which shipment_draft to update.
     */
    where: shipment_draftWhereUniqueInput
  }


  /**
   * shipment_draft updateMany
   */
  export type shipment_draftUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shipment_drafts.
     */
    data: XOR<shipment_draftUpdateManyMutationInput, shipment_draftUncheckedUpdateManyInput>
    /**
     * Filter which shipment_drafts to update
     */
    where?: shipment_draftWhereInput
  }


  /**
   * shipment_draft upsert
   */
  export type shipment_draftUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipment_draft
     */
    select?: shipment_draftSelect<ExtArgs> | null
    /**
     * The filter to search for the shipment_draft to update in case it exists.
     */
    where: shipment_draftWhereUniqueInput
    /**
     * In case the shipment_draft found by the `where` argument doesn't exist, create a new shipment_draft with this data.
     */
    create: XOR<shipment_draftCreateInput, shipment_draftUncheckedCreateInput>
    /**
     * In case the shipment_draft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shipment_draftUpdateInput, shipment_draftUncheckedUpdateInput>
  }


  /**
   * shipment_draft delete
   */
  export type shipment_draftDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipment_draft
     */
    select?: shipment_draftSelect<ExtArgs> | null
    /**
     * Filter which shipment_draft to delete.
     */
    where: shipment_draftWhereUniqueInput
  }


  /**
   * shipment_draft deleteMany
   */
  export type shipment_draftDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which shipment_drafts to delete
     */
    where?: shipment_draftWhereInput
  }


  /**
   * shipment_draft without action
   */
  export type shipment_draftDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shipment_draft
     */
    select?: shipment_draftSelect<ExtArgs> | null
  }



  /**
   * Model production_single_product_draft
   */

  export type AggregateProduction_single_product_draft = {
    _count: Production_single_product_draftCountAggregateOutputType | null
    _avg: Production_single_product_draftAvgAggregateOutputType | null
    _sum: Production_single_product_draftSumAggregateOutputType | null
    _min: Production_single_product_draftMinAggregateOutputType | null
    _max: Production_single_product_draftMaxAggregateOutputType | null
  }

  export type Production_single_product_draftAvgAggregateOutputType = {
    org_id: number | null
    erp_id: number | null
  }

  export type Production_single_product_draftSumAggregateOutputType = {
    org_id: number | null
    erp_id: number | null
  }

  export type Production_single_product_draftMinAggregateOutputType = {
    org_id: number | null
    creation_date_time: Date | null
    erp_id: number | null
  }

  export type Production_single_product_draftMaxAggregateOutputType = {
    org_id: number | null
    creation_date_time: Date | null
    erp_id: number | null
  }

  export type Production_single_product_draftCountAggregateOutputType = {
    org_id: number
    creation_date_time: number
    erp_id: number
    data: number
    _all: number
  }


  export type Production_single_product_draftAvgAggregateInputType = {
    org_id?: true
    erp_id?: true
  }

  export type Production_single_product_draftSumAggregateInputType = {
    org_id?: true
    erp_id?: true
  }

  export type Production_single_product_draftMinAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    erp_id?: true
  }

  export type Production_single_product_draftMaxAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    erp_id?: true
  }

  export type Production_single_product_draftCountAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    erp_id?: true
    data?: true
    _all?: true
  }

  export type Production_single_product_draftAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which production_single_product_draft to aggregate.
     */
    where?: production_single_product_draftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of production_single_product_drafts to fetch.
     */
    orderBy?: production_single_product_draftOrderByWithRelationInput | production_single_product_draftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: production_single_product_draftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` production_single_product_drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` production_single_product_drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned production_single_product_drafts
    **/
    _count?: true | Production_single_product_draftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Production_single_product_draftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Production_single_product_draftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Production_single_product_draftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Production_single_product_draftMaxAggregateInputType
  }

  export type GetProduction_single_product_draftAggregateType<T extends Production_single_product_draftAggregateArgs> = {
        [P in keyof T & keyof AggregateProduction_single_product_draft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduction_single_product_draft[P]>
      : GetScalarType<T[P], AggregateProduction_single_product_draft[P]>
  }




  export type production_single_product_draftGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: production_single_product_draftWhereInput
    orderBy?: production_single_product_draftOrderByWithAggregationInput | production_single_product_draftOrderByWithAggregationInput[]
    by: Production_single_product_draftScalarFieldEnum[] | Production_single_product_draftScalarFieldEnum
    having?: production_single_product_draftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Production_single_product_draftCountAggregateInputType | true
    _avg?: Production_single_product_draftAvgAggregateInputType
    _sum?: Production_single_product_draftSumAggregateInputType
    _min?: Production_single_product_draftMinAggregateInputType
    _max?: Production_single_product_draftMaxAggregateInputType
  }

  export type Production_single_product_draftGroupByOutputType = {
    org_id: number
    creation_date_time: Date
    erp_id: number
    data: JsonValue
    _count: Production_single_product_draftCountAggregateOutputType | null
    _avg: Production_single_product_draftAvgAggregateOutputType | null
    _sum: Production_single_product_draftSumAggregateOutputType | null
    _min: Production_single_product_draftMinAggregateOutputType | null
    _max: Production_single_product_draftMaxAggregateOutputType | null
  }

  type GetProduction_single_product_draftGroupByPayload<T extends production_single_product_draftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Production_single_product_draftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Production_single_product_draftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Production_single_product_draftGroupByOutputType[P]>
            : GetScalarType<T[P], Production_single_product_draftGroupByOutputType[P]>
        }
      >
    >


  export type production_single_product_draftSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    org_id?: boolean
    creation_date_time?: boolean
    erp_id?: boolean
    data?: boolean
  }, ExtArgs["result"]["production_single_product_draft"]>

  export type production_single_product_draftSelectScalar = {
    org_id?: boolean
    creation_date_time?: boolean
    erp_id?: boolean
    data?: boolean
  }


  export type $production_single_product_draftPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "production_single_product_draft"
    objects: {}
    scalars: $Extensions.GetResult<{
      org_id: number
      creation_date_time: Date
      erp_id: number
      data: Prisma.JsonValue
    }, ExtArgs["result"]["production_single_product_draft"]>
    composites: {}
  }


  type production_single_product_draftGetPayload<S extends boolean | null | undefined | production_single_product_draftDefaultArgs> = $Result.GetResult<Prisma.$production_single_product_draftPayload, S>

  type production_single_product_draftCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<production_single_product_draftFindManyArgs, 'select' | 'include'> & {
      select?: Production_single_product_draftCountAggregateInputType | true
    }

  export interface production_single_product_draftDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['production_single_product_draft'], meta: { name: 'production_single_product_draft' } }
    /**
     * Find zero or one Production_single_product_draft that matches the filter.
     * @param {production_single_product_draftFindUniqueArgs} args - Arguments to find a Production_single_product_draft
     * @example
     * // Get one Production_single_product_draft
     * const production_single_product_draft = await prisma.production_single_product_draft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends production_single_product_draftFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, production_single_product_draftFindUniqueArgs<ExtArgs>>
    ): Prisma__production_single_product_draftClient<$Result.GetResult<Prisma.$production_single_product_draftPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Production_single_product_draft that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {production_single_product_draftFindUniqueOrThrowArgs} args - Arguments to find a Production_single_product_draft
     * @example
     * // Get one Production_single_product_draft
     * const production_single_product_draft = await prisma.production_single_product_draft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends production_single_product_draftFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, production_single_product_draftFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__production_single_product_draftClient<$Result.GetResult<Prisma.$production_single_product_draftPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Production_single_product_draft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {production_single_product_draftFindFirstArgs} args - Arguments to find a Production_single_product_draft
     * @example
     * // Get one Production_single_product_draft
     * const production_single_product_draft = await prisma.production_single_product_draft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends production_single_product_draftFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, production_single_product_draftFindFirstArgs<ExtArgs>>
    ): Prisma__production_single_product_draftClient<$Result.GetResult<Prisma.$production_single_product_draftPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Production_single_product_draft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {production_single_product_draftFindFirstOrThrowArgs} args - Arguments to find a Production_single_product_draft
     * @example
     * // Get one Production_single_product_draft
     * const production_single_product_draft = await prisma.production_single_product_draft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends production_single_product_draftFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, production_single_product_draftFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__production_single_product_draftClient<$Result.GetResult<Prisma.$production_single_product_draftPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Production_single_product_drafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {production_single_product_draftFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Production_single_product_drafts
     * const production_single_product_drafts = await prisma.production_single_product_draft.findMany()
     * 
     * // Get first 10 Production_single_product_drafts
     * const production_single_product_drafts = await prisma.production_single_product_draft.findMany({ take: 10 })
     * 
     * // Only select the `org_id`
     * const production_single_product_draftWithOrg_idOnly = await prisma.production_single_product_draft.findMany({ select: { org_id: true } })
     * 
    **/
    findMany<T extends production_single_product_draftFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, production_single_product_draftFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$production_single_product_draftPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Production_single_product_draft.
     * @param {production_single_product_draftCreateArgs} args - Arguments to create a Production_single_product_draft.
     * @example
     * // Create one Production_single_product_draft
     * const Production_single_product_draft = await prisma.production_single_product_draft.create({
     *   data: {
     *     // ... data to create a Production_single_product_draft
     *   }
     * })
     * 
    **/
    create<T extends production_single_product_draftCreateArgs<ExtArgs>>(
      args: SelectSubset<T, production_single_product_draftCreateArgs<ExtArgs>>
    ): Prisma__production_single_product_draftClient<$Result.GetResult<Prisma.$production_single_product_draftPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Production_single_product_drafts.
     *     @param {production_single_product_draftCreateManyArgs} args - Arguments to create many Production_single_product_drafts.
     *     @example
     *     // Create many Production_single_product_drafts
     *     const production_single_product_draft = await prisma.production_single_product_draft.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends production_single_product_draftCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, production_single_product_draftCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Production_single_product_draft.
     * @param {production_single_product_draftDeleteArgs} args - Arguments to delete one Production_single_product_draft.
     * @example
     * // Delete one Production_single_product_draft
     * const Production_single_product_draft = await prisma.production_single_product_draft.delete({
     *   where: {
     *     // ... filter to delete one Production_single_product_draft
     *   }
     * })
     * 
    **/
    delete<T extends production_single_product_draftDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, production_single_product_draftDeleteArgs<ExtArgs>>
    ): Prisma__production_single_product_draftClient<$Result.GetResult<Prisma.$production_single_product_draftPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Production_single_product_draft.
     * @param {production_single_product_draftUpdateArgs} args - Arguments to update one Production_single_product_draft.
     * @example
     * // Update one Production_single_product_draft
     * const production_single_product_draft = await prisma.production_single_product_draft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends production_single_product_draftUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, production_single_product_draftUpdateArgs<ExtArgs>>
    ): Prisma__production_single_product_draftClient<$Result.GetResult<Prisma.$production_single_product_draftPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Production_single_product_drafts.
     * @param {production_single_product_draftDeleteManyArgs} args - Arguments to filter Production_single_product_drafts to delete.
     * @example
     * // Delete a few Production_single_product_drafts
     * const { count } = await prisma.production_single_product_draft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends production_single_product_draftDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, production_single_product_draftDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Production_single_product_drafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {production_single_product_draftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Production_single_product_drafts
     * const production_single_product_draft = await prisma.production_single_product_draft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends production_single_product_draftUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, production_single_product_draftUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Production_single_product_draft.
     * @param {production_single_product_draftUpsertArgs} args - Arguments to update or create a Production_single_product_draft.
     * @example
     * // Update or create a Production_single_product_draft
     * const production_single_product_draft = await prisma.production_single_product_draft.upsert({
     *   create: {
     *     // ... data to create a Production_single_product_draft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Production_single_product_draft we want to update
     *   }
     * })
    **/
    upsert<T extends production_single_product_draftUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, production_single_product_draftUpsertArgs<ExtArgs>>
    ): Prisma__production_single_product_draftClient<$Result.GetResult<Prisma.$production_single_product_draftPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Production_single_product_drafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {production_single_product_draftCountArgs} args - Arguments to filter Production_single_product_drafts to count.
     * @example
     * // Count the number of Production_single_product_drafts
     * const count = await prisma.production_single_product_draft.count({
     *   where: {
     *     // ... the filter for the Production_single_product_drafts we want to count
     *   }
     * })
    **/
    count<T extends production_single_product_draftCountArgs>(
      args?: Subset<T, production_single_product_draftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Production_single_product_draftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Production_single_product_draft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Production_single_product_draftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Production_single_product_draftAggregateArgs>(args: Subset<T, Production_single_product_draftAggregateArgs>): Prisma.PrismaPromise<GetProduction_single_product_draftAggregateType<T>>

    /**
     * Group by Production_single_product_draft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {production_single_product_draftGroupByArgs} args - Group by arguments.
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
      T extends production_single_product_draftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: production_single_product_draftGroupByArgs['orderBy'] }
        : { orderBy?: production_single_product_draftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, production_single_product_draftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduction_single_product_draftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the production_single_product_draft model
   */
  readonly fields: production_single_product_draftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for production_single_product_draft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__production_single_product_draftClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the production_single_product_draft model
   */ 
  interface production_single_product_draftFieldRefs {
    readonly org_id: FieldRef<"production_single_product_draft", 'Int'>
    readonly creation_date_time: FieldRef<"production_single_product_draft", 'DateTime'>
    readonly erp_id: FieldRef<"production_single_product_draft", 'Int'>
    readonly data: FieldRef<"production_single_product_draft", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * production_single_product_draft findUnique
   */
  export type production_single_product_draftFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_single_product_draft
     */
    select?: production_single_product_draftSelect<ExtArgs> | null
    /**
     * Filter, which production_single_product_draft to fetch.
     */
    where: production_single_product_draftWhereUniqueInput
  }


  /**
   * production_single_product_draft findUniqueOrThrow
   */
  export type production_single_product_draftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_single_product_draft
     */
    select?: production_single_product_draftSelect<ExtArgs> | null
    /**
     * Filter, which production_single_product_draft to fetch.
     */
    where: production_single_product_draftWhereUniqueInput
  }


  /**
   * production_single_product_draft findFirst
   */
  export type production_single_product_draftFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_single_product_draft
     */
    select?: production_single_product_draftSelect<ExtArgs> | null
    /**
     * Filter, which production_single_product_draft to fetch.
     */
    where?: production_single_product_draftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of production_single_product_drafts to fetch.
     */
    orderBy?: production_single_product_draftOrderByWithRelationInput | production_single_product_draftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for production_single_product_drafts.
     */
    cursor?: production_single_product_draftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` production_single_product_drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` production_single_product_drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of production_single_product_drafts.
     */
    distinct?: Production_single_product_draftScalarFieldEnum | Production_single_product_draftScalarFieldEnum[]
  }


  /**
   * production_single_product_draft findFirstOrThrow
   */
  export type production_single_product_draftFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_single_product_draft
     */
    select?: production_single_product_draftSelect<ExtArgs> | null
    /**
     * Filter, which production_single_product_draft to fetch.
     */
    where?: production_single_product_draftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of production_single_product_drafts to fetch.
     */
    orderBy?: production_single_product_draftOrderByWithRelationInput | production_single_product_draftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for production_single_product_drafts.
     */
    cursor?: production_single_product_draftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` production_single_product_drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` production_single_product_drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of production_single_product_drafts.
     */
    distinct?: Production_single_product_draftScalarFieldEnum | Production_single_product_draftScalarFieldEnum[]
  }


  /**
   * production_single_product_draft findMany
   */
  export type production_single_product_draftFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_single_product_draft
     */
    select?: production_single_product_draftSelect<ExtArgs> | null
    /**
     * Filter, which production_single_product_drafts to fetch.
     */
    where?: production_single_product_draftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of production_single_product_drafts to fetch.
     */
    orderBy?: production_single_product_draftOrderByWithRelationInput | production_single_product_draftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing production_single_product_drafts.
     */
    cursor?: production_single_product_draftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` production_single_product_drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` production_single_product_drafts.
     */
    skip?: number
    distinct?: Production_single_product_draftScalarFieldEnum | Production_single_product_draftScalarFieldEnum[]
  }


  /**
   * production_single_product_draft create
   */
  export type production_single_product_draftCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_single_product_draft
     */
    select?: production_single_product_draftSelect<ExtArgs> | null
    /**
     * The data needed to create a production_single_product_draft.
     */
    data: XOR<production_single_product_draftCreateInput, production_single_product_draftUncheckedCreateInput>
  }


  /**
   * production_single_product_draft createMany
   */
  export type production_single_product_draftCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many production_single_product_drafts.
     */
    data: production_single_product_draftCreateManyInput | production_single_product_draftCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * production_single_product_draft update
   */
  export type production_single_product_draftUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_single_product_draft
     */
    select?: production_single_product_draftSelect<ExtArgs> | null
    /**
     * The data needed to update a production_single_product_draft.
     */
    data: XOR<production_single_product_draftUpdateInput, production_single_product_draftUncheckedUpdateInput>
    /**
     * Choose, which production_single_product_draft to update.
     */
    where: production_single_product_draftWhereUniqueInput
  }


  /**
   * production_single_product_draft updateMany
   */
  export type production_single_product_draftUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update production_single_product_drafts.
     */
    data: XOR<production_single_product_draftUpdateManyMutationInput, production_single_product_draftUncheckedUpdateManyInput>
    /**
     * Filter which production_single_product_drafts to update
     */
    where?: production_single_product_draftWhereInput
  }


  /**
   * production_single_product_draft upsert
   */
  export type production_single_product_draftUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_single_product_draft
     */
    select?: production_single_product_draftSelect<ExtArgs> | null
    /**
     * The filter to search for the production_single_product_draft to update in case it exists.
     */
    where: production_single_product_draftWhereUniqueInput
    /**
     * In case the production_single_product_draft found by the `where` argument doesn't exist, create a new production_single_product_draft with this data.
     */
    create: XOR<production_single_product_draftCreateInput, production_single_product_draftUncheckedCreateInput>
    /**
     * In case the production_single_product_draft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<production_single_product_draftUpdateInput, production_single_product_draftUncheckedUpdateInput>
  }


  /**
   * production_single_product_draft delete
   */
  export type production_single_product_draftDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_single_product_draft
     */
    select?: production_single_product_draftSelect<ExtArgs> | null
    /**
     * Filter which production_single_product_draft to delete.
     */
    where: production_single_product_draftWhereUniqueInput
  }


  /**
   * production_single_product_draft deleteMany
   */
  export type production_single_product_draftDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which production_single_product_drafts to delete
     */
    where?: production_single_product_draftWhereInput
  }


  /**
   * production_single_product_draft without action
   */
  export type production_single_product_draftDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_single_product_draft
     */
    select?: production_single_product_draftSelect<ExtArgs> | null
  }



  /**
   * Model track_id_object
   */

  export type AggregateTrack_id_object = {
    _count: Track_id_objectCountAggregateOutputType | null
    _avg: Track_id_objectAvgAggregateOutputType | null
    _sum: Track_id_objectSumAggregateOutputType | null
    _min: Track_id_objectMinAggregateOutputType | null
    _max: Track_id_objectMaxAggregateOutputType | null
  }

  export type Track_id_objectAvgAggregateOutputType = {
    productId: number | null
  }

  export type Track_id_objectSumAggregateOutputType = {
    productId: number | null
  }

  export type Track_id_objectMinAggregateOutputType = {
    track_id: string | null
    productId: number | null
    productName: string | null
    track_type: string | null
    creation_date_time: Date | null
  }

  export type Track_id_objectMaxAggregateOutputType = {
    track_id: string | null
    productId: number | null
    productName: string | null
    track_type: string | null
    creation_date_time: Date | null
  }

  export type Track_id_objectCountAggregateOutputType = {
    track_id: number
    productId: number
    productName: number
    track_type: number
    creation_date_time: number
    source_data: number
    object_data: number
    _all: number
  }


  export type Track_id_objectAvgAggregateInputType = {
    productId?: true
  }

  export type Track_id_objectSumAggregateInputType = {
    productId?: true
  }

  export type Track_id_objectMinAggregateInputType = {
    track_id?: true
    productId?: true
    productName?: true
    track_type?: true
    creation_date_time?: true
  }

  export type Track_id_objectMaxAggregateInputType = {
    track_id?: true
    productId?: true
    productName?: true
    track_type?: true
    creation_date_time?: true
  }

  export type Track_id_objectCountAggregateInputType = {
    track_id?: true
    productId?: true
    productName?: true
    track_type?: true
    creation_date_time?: true
    source_data?: true
    object_data?: true
    _all?: true
  }

  export type Track_id_objectAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which track_id_object to aggregate.
     */
    where?: track_id_objectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of track_id_objects to fetch.
     */
    orderBy?: track_id_objectOrderByWithRelationInput | track_id_objectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: track_id_objectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` track_id_objects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` track_id_objects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned track_id_objects
    **/
    _count?: true | Track_id_objectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Track_id_objectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Track_id_objectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Track_id_objectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Track_id_objectMaxAggregateInputType
  }

  export type GetTrack_id_objectAggregateType<T extends Track_id_objectAggregateArgs> = {
        [P in keyof T & keyof AggregateTrack_id_object]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrack_id_object[P]>
      : GetScalarType<T[P], AggregateTrack_id_object[P]>
  }




  export type track_id_objectGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: track_id_objectWhereInput
    orderBy?: track_id_objectOrderByWithAggregationInput | track_id_objectOrderByWithAggregationInput[]
    by: Track_id_objectScalarFieldEnum[] | Track_id_objectScalarFieldEnum
    having?: track_id_objectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Track_id_objectCountAggregateInputType | true
    _avg?: Track_id_objectAvgAggregateInputType
    _sum?: Track_id_objectSumAggregateInputType
    _min?: Track_id_objectMinAggregateInputType
    _max?: Track_id_objectMaxAggregateInputType
  }

  export type Track_id_objectGroupByOutputType = {
    track_id: string
    productId: number
    productName: string
    track_type: string
    creation_date_time: Date
    source_data: JsonValue
    object_data: JsonValue
    _count: Track_id_objectCountAggregateOutputType | null
    _avg: Track_id_objectAvgAggregateOutputType | null
    _sum: Track_id_objectSumAggregateOutputType | null
    _min: Track_id_objectMinAggregateOutputType | null
    _max: Track_id_objectMaxAggregateOutputType | null
  }

  type GetTrack_id_objectGroupByPayload<T extends track_id_objectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Track_id_objectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Track_id_objectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Track_id_objectGroupByOutputType[P]>
            : GetScalarType<T[P], Track_id_objectGroupByOutputType[P]>
        }
      >
    >


  export type track_id_objectSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    track_id?: boolean
    productId?: boolean
    productName?: boolean
    track_type?: boolean
    creation_date_time?: boolean
    source_data?: boolean
    object_data?: boolean
    track_id_history?: boolean | track_id_object$track_id_historyArgs<ExtArgs>
    _count?: boolean | Track_id_objectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track_id_object"]>

  export type track_id_objectSelectScalar = {
    track_id?: boolean
    productId?: boolean
    productName?: boolean
    track_type?: boolean
    creation_date_time?: boolean
    source_data?: boolean
    object_data?: boolean
  }

  export type track_id_objectInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    track_id_history?: boolean | track_id_object$track_id_historyArgs<ExtArgs>
    _count?: boolean | Track_id_objectCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $track_id_objectPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "track_id_object"
    objects: {
      track_id_history: Prisma.$track_id_historyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      track_id: string
      productId: number
      productName: string
      track_type: string
      creation_date_time: Date
      source_data: Prisma.JsonValue
      object_data: Prisma.JsonValue
    }, ExtArgs["result"]["track_id_object"]>
    composites: {}
  }


  type track_id_objectGetPayload<S extends boolean | null | undefined | track_id_objectDefaultArgs> = $Result.GetResult<Prisma.$track_id_objectPayload, S>

  type track_id_objectCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<track_id_objectFindManyArgs, 'select' | 'include'> & {
      select?: Track_id_objectCountAggregateInputType | true
    }

  export interface track_id_objectDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['track_id_object'], meta: { name: 'track_id_object' } }
    /**
     * Find zero or one Track_id_object that matches the filter.
     * @param {track_id_objectFindUniqueArgs} args - Arguments to find a Track_id_object
     * @example
     * // Get one Track_id_object
     * const track_id_object = await prisma.track_id_object.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends track_id_objectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_objectFindUniqueArgs<ExtArgs>>
    ): Prisma__track_id_objectClient<$Result.GetResult<Prisma.$track_id_objectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Track_id_object that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {track_id_objectFindUniqueOrThrowArgs} args - Arguments to find a Track_id_object
     * @example
     * // Get one Track_id_object
     * const track_id_object = await prisma.track_id_object.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends track_id_objectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_objectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__track_id_objectClient<$Result.GetResult<Prisma.$track_id_objectPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Track_id_object that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_objectFindFirstArgs} args - Arguments to find a Track_id_object
     * @example
     * // Get one Track_id_object
     * const track_id_object = await prisma.track_id_object.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends track_id_objectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_objectFindFirstArgs<ExtArgs>>
    ): Prisma__track_id_objectClient<$Result.GetResult<Prisma.$track_id_objectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Track_id_object that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_objectFindFirstOrThrowArgs} args - Arguments to find a Track_id_object
     * @example
     * // Get one Track_id_object
     * const track_id_object = await prisma.track_id_object.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends track_id_objectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_objectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__track_id_objectClient<$Result.GetResult<Prisma.$track_id_objectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Track_id_objects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_objectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Track_id_objects
     * const track_id_objects = await prisma.track_id_object.findMany()
     * 
     * // Get first 10 Track_id_objects
     * const track_id_objects = await prisma.track_id_object.findMany({ take: 10 })
     * 
     * // Only select the `track_id`
     * const track_id_objectWithTrack_idOnly = await prisma.track_id_object.findMany({ select: { track_id: true } })
     * 
    **/
    findMany<T extends track_id_objectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_objectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$track_id_objectPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Track_id_object.
     * @param {track_id_objectCreateArgs} args - Arguments to create a Track_id_object.
     * @example
     * // Create one Track_id_object
     * const Track_id_object = await prisma.track_id_object.create({
     *   data: {
     *     // ... data to create a Track_id_object
     *   }
     * })
     * 
    **/
    create<T extends track_id_objectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_objectCreateArgs<ExtArgs>>
    ): Prisma__track_id_objectClient<$Result.GetResult<Prisma.$track_id_objectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Track_id_objects.
     *     @param {track_id_objectCreateManyArgs} args - Arguments to create many Track_id_objects.
     *     @example
     *     // Create many Track_id_objects
     *     const track_id_object = await prisma.track_id_object.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends track_id_objectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_objectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Track_id_object.
     * @param {track_id_objectDeleteArgs} args - Arguments to delete one Track_id_object.
     * @example
     * // Delete one Track_id_object
     * const Track_id_object = await prisma.track_id_object.delete({
     *   where: {
     *     // ... filter to delete one Track_id_object
     *   }
     * })
     * 
    **/
    delete<T extends track_id_objectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_objectDeleteArgs<ExtArgs>>
    ): Prisma__track_id_objectClient<$Result.GetResult<Prisma.$track_id_objectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Track_id_object.
     * @param {track_id_objectUpdateArgs} args - Arguments to update one Track_id_object.
     * @example
     * // Update one Track_id_object
     * const track_id_object = await prisma.track_id_object.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends track_id_objectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_objectUpdateArgs<ExtArgs>>
    ): Prisma__track_id_objectClient<$Result.GetResult<Prisma.$track_id_objectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Track_id_objects.
     * @param {track_id_objectDeleteManyArgs} args - Arguments to filter Track_id_objects to delete.
     * @example
     * // Delete a few Track_id_objects
     * const { count } = await prisma.track_id_object.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends track_id_objectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_objectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Track_id_objects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_objectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Track_id_objects
     * const track_id_object = await prisma.track_id_object.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends track_id_objectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_objectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Track_id_object.
     * @param {track_id_objectUpsertArgs} args - Arguments to update or create a Track_id_object.
     * @example
     * // Update or create a Track_id_object
     * const track_id_object = await prisma.track_id_object.upsert({
     *   create: {
     *     // ... data to create a Track_id_object
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Track_id_object we want to update
     *   }
     * })
    **/
    upsert<T extends track_id_objectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_objectUpsertArgs<ExtArgs>>
    ): Prisma__track_id_objectClient<$Result.GetResult<Prisma.$track_id_objectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Track_id_objects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_objectCountArgs} args - Arguments to filter Track_id_objects to count.
     * @example
     * // Count the number of Track_id_objects
     * const count = await prisma.track_id_object.count({
     *   where: {
     *     // ... the filter for the Track_id_objects we want to count
     *   }
     * })
    **/
    count<T extends track_id_objectCountArgs>(
      args?: Subset<T, track_id_objectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Track_id_objectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Track_id_object.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Track_id_objectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Track_id_objectAggregateArgs>(args: Subset<T, Track_id_objectAggregateArgs>): Prisma.PrismaPromise<GetTrack_id_objectAggregateType<T>>

    /**
     * Group by Track_id_object.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_objectGroupByArgs} args - Group by arguments.
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
      T extends track_id_objectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: track_id_objectGroupByArgs['orderBy'] }
        : { orderBy?: track_id_objectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, track_id_objectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrack_id_objectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the track_id_object model
   */
  readonly fields: track_id_objectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for track_id_object.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__track_id_objectClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    track_id_history<T extends track_id_object$track_id_historyArgs<ExtArgs> = {}>(args?: Subset<T, track_id_object$track_id_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$track_id_historyPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the track_id_object model
   */ 
  interface track_id_objectFieldRefs {
    readonly track_id: FieldRef<"track_id_object", 'String'>
    readonly productId: FieldRef<"track_id_object", 'Int'>
    readonly productName: FieldRef<"track_id_object", 'String'>
    readonly track_type: FieldRef<"track_id_object", 'String'>
    readonly creation_date_time: FieldRef<"track_id_object", 'DateTime'>
    readonly source_data: FieldRef<"track_id_object", 'Json'>
    readonly object_data: FieldRef<"track_id_object", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * track_id_object findUnique
   */
  export type track_id_objectFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_object
     */
    select?: track_id_objectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_objectInclude<ExtArgs> | null
    /**
     * Filter, which track_id_object to fetch.
     */
    where: track_id_objectWhereUniqueInput
  }


  /**
   * track_id_object findUniqueOrThrow
   */
  export type track_id_objectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_object
     */
    select?: track_id_objectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_objectInclude<ExtArgs> | null
    /**
     * Filter, which track_id_object to fetch.
     */
    where: track_id_objectWhereUniqueInput
  }


  /**
   * track_id_object findFirst
   */
  export type track_id_objectFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_object
     */
    select?: track_id_objectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_objectInclude<ExtArgs> | null
    /**
     * Filter, which track_id_object to fetch.
     */
    where?: track_id_objectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of track_id_objects to fetch.
     */
    orderBy?: track_id_objectOrderByWithRelationInput | track_id_objectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for track_id_objects.
     */
    cursor?: track_id_objectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` track_id_objects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` track_id_objects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of track_id_objects.
     */
    distinct?: Track_id_objectScalarFieldEnum | Track_id_objectScalarFieldEnum[]
  }


  /**
   * track_id_object findFirstOrThrow
   */
  export type track_id_objectFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_object
     */
    select?: track_id_objectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_objectInclude<ExtArgs> | null
    /**
     * Filter, which track_id_object to fetch.
     */
    where?: track_id_objectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of track_id_objects to fetch.
     */
    orderBy?: track_id_objectOrderByWithRelationInput | track_id_objectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for track_id_objects.
     */
    cursor?: track_id_objectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` track_id_objects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` track_id_objects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of track_id_objects.
     */
    distinct?: Track_id_objectScalarFieldEnum | Track_id_objectScalarFieldEnum[]
  }


  /**
   * track_id_object findMany
   */
  export type track_id_objectFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_object
     */
    select?: track_id_objectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_objectInclude<ExtArgs> | null
    /**
     * Filter, which track_id_objects to fetch.
     */
    where?: track_id_objectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of track_id_objects to fetch.
     */
    orderBy?: track_id_objectOrderByWithRelationInput | track_id_objectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing track_id_objects.
     */
    cursor?: track_id_objectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` track_id_objects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` track_id_objects.
     */
    skip?: number
    distinct?: Track_id_objectScalarFieldEnum | Track_id_objectScalarFieldEnum[]
  }


  /**
   * track_id_object create
   */
  export type track_id_objectCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_object
     */
    select?: track_id_objectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_objectInclude<ExtArgs> | null
    /**
     * The data needed to create a track_id_object.
     */
    data: XOR<track_id_objectCreateInput, track_id_objectUncheckedCreateInput>
  }


  /**
   * track_id_object createMany
   */
  export type track_id_objectCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many track_id_objects.
     */
    data: track_id_objectCreateManyInput | track_id_objectCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * track_id_object update
   */
  export type track_id_objectUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_object
     */
    select?: track_id_objectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_objectInclude<ExtArgs> | null
    /**
     * The data needed to update a track_id_object.
     */
    data: XOR<track_id_objectUpdateInput, track_id_objectUncheckedUpdateInput>
    /**
     * Choose, which track_id_object to update.
     */
    where: track_id_objectWhereUniqueInput
  }


  /**
   * track_id_object updateMany
   */
  export type track_id_objectUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update track_id_objects.
     */
    data: XOR<track_id_objectUpdateManyMutationInput, track_id_objectUncheckedUpdateManyInput>
    /**
     * Filter which track_id_objects to update
     */
    where?: track_id_objectWhereInput
  }


  /**
   * track_id_object upsert
   */
  export type track_id_objectUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_object
     */
    select?: track_id_objectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_objectInclude<ExtArgs> | null
    /**
     * The filter to search for the track_id_object to update in case it exists.
     */
    where: track_id_objectWhereUniqueInput
    /**
     * In case the track_id_object found by the `where` argument doesn't exist, create a new track_id_object with this data.
     */
    create: XOR<track_id_objectCreateInput, track_id_objectUncheckedCreateInput>
    /**
     * In case the track_id_object was found with the provided `where` argument, update it with this data.
     */
    update: XOR<track_id_objectUpdateInput, track_id_objectUncheckedUpdateInput>
  }


  /**
   * track_id_object delete
   */
  export type track_id_objectDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_object
     */
    select?: track_id_objectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_objectInclude<ExtArgs> | null
    /**
     * Filter which track_id_object to delete.
     */
    where: track_id_objectWhereUniqueInput
  }


  /**
   * track_id_object deleteMany
   */
  export type track_id_objectDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which track_id_objects to delete
     */
    where?: track_id_objectWhereInput
  }


  /**
   * track_id_object.track_id_history
   */
  export type track_id_object$track_id_historyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_history
     */
    select?: track_id_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_historyInclude<ExtArgs> | null
    where?: track_id_historyWhereInput
    orderBy?: track_id_historyOrderByWithRelationInput | track_id_historyOrderByWithRelationInput[]
    cursor?: track_id_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Track_id_historyScalarFieldEnum | Track_id_historyScalarFieldEnum[]
  }


  /**
   * track_id_object without action
   */
  export type track_id_objectDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_object
     */
    select?: track_id_objectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_objectInclude<ExtArgs> | null
  }



  /**
   * Model track_id_history
   */

  export type AggregateTrack_id_history = {
    _count: Track_id_historyCountAggregateOutputType | null
    _min: Track_id_historyMinAggregateOutputType | null
    _max: Track_id_historyMaxAggregateOutputType | null
  }

  export type Track_id_historyMinAggregateOutputType = {
    track_id: string | null
    update_date_time: Date | null
    description: string | null
  }

  export type Track_id_historyMaxAggregateOutputType = {
    track_id: string | null
    update_date_time: Date | null
    description: string | null
  }

  export type Track_id_historyCountAggregateOutputType = {
    track_id: number
    update_date_time: number
    description: number
    data: number
    _all: number
  }


  export type Track_id_historyMinAggregateInputType = {
    track_id?: true
    update_date_time?: true
    description?: true
  }

  export type Track_id_historyMaxAggregateInputType = {
    track_id?: true
    update_date_time?: true
    description?: true
  }

  export type Track_id_historyCountAggregateInputType = {
    track_id?: true
    update_date_time?: true
    description?: true
    data?: true
    _all?: true
  }

  export type Track_id_historyAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which track_id_history to aggregate.
     */
    where?: track_id_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of track_id_histories to fetch.
     */
    orderBy?: track_id_historyOrderByWithRelationInput | track_id_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: track_id_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` track_id_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` track_id_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned track_id_histories
    **/
    _count?: true | Track_id_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Track_id_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Track_id_historyMaxAggregateInputType
  }

  export type GetTrack_id_historyAggregateType<T extends Track_id_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateTrack_id_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrack_id_history[P]>
      : GetScalarType<T[P], AggregateTrack_id_history[P]>
  }




  export type track_id_historyGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: track_id_historyWhereInput
    orderBy?: track_id_historyOrderByWithAggregationInput | track_id_historyOrderByWithAggregationInput[]
    by: Track_id_historyScalarFieldEnum[] | Track_id_historyScalarFieldEnum
    having?: track_id_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Track_id_historyCountAggregateInputType | true
    _min?: Track_id_historyMinAggregateInputType
    _max?: Track_id_historyMaxAggregateInputType
  }

  export type Track_id_historyGroupByOutputType = {
    track_id: string
    update_date_time: Date
    description: string
    data: JsonValue
    _count: Track_id_historyCountAggregateOutputType | null
    _min: Track_id_historyMinAggregateOutputType | null
    _max: Track_id_historyMaxAggregateOutputType | null
  }

  type GetTrack_id_historyGroupByPayload<T extends track_id_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Track_id_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Track_id_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Track_id_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Track_id_historyGroupByOutputType[P]>
        }
      >
    >


  export type track_id_historySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    track_id?: boolean
    update_date_time?: boolean
    description?: boolean
    data?: boolean
    track_id_object?: boolean | track_id_objectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track_id_history"]>

  export type track_id_historySelectScalar = {
    track_id?: boolean
    update_date_time?: boolean
    description?: boolean
    data?: boolean
  }

  export type track_id_historyInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    track_id_object?: boolean | track_id_objectDefaultArgs<ExtArgs>
  }


  export type $track_id_historyPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "track_id_history"
    objects: {
      track_id_object: Prisma.$track_id_objectPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      track_id: string
      update_date_time: Date
      description: string
      data: Prisma.JsonValue
    }, ExtArgs["result"]["track_id_history"]>
    composites: {}
  }


  type track_id_historyGetPayload<S extends boolean | null | undefined | track_id_historyDefaultArgs> = $Result.GetResult<Prisma.$track_id_historyPayload, S>

  type track_id_historyCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<track_id_historyFindManyArgs, 'select' | 'include'> & {
      select?: Track_id_historyCountAggregateInputType | true
    }

  export interface track_id_historyDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['track_id_history'], meta: { name: 'track_id_history' } }
    /**
     * Find zero or one Track_id_history that matches the filter.
     * @param {track_id_historyFindUniqueArgs} args - Arguments to find a Track_id_history
     * @example
     * // Get one Track_id_history
     * const track_id_history = await prisma.track_id_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends track_id_historyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_historyFindUniqueArgs<ExtArgs>>
    ): Prisma__track_id_historyClient<$Result.GetResult<Prisma.$track_id_historyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Track_id_history that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {track_id_historyFindUniqueOrThrowArgs} args - Arguments to find a Track_id_history
     * @example
     * // Get one Track_id_history
     * const track_id_history = await prisma.track_id_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends track_id_historyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_historyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__track_id_historyClient<$Result.GetResult<Prisma.$track_id_historyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Track_id_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_historyFindFirstArgs} args - Arguments to find a Track_id_history
     * @example
     * // Get one Track_id_history
     * const track_id_history = await prisma.track_id_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends track_id_historyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_historyFindFirstArgs<ExtArgs>>
    ): Prisma__track_id_historyClient<$Result.GetResult<Prisma.$track_id_historyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Track_id_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_historyFindFirstOrThrowArgs} args - Arguments to find a Track_id_history
     * @example
     * // Get one Track_id_history
     * const track_id_history = await prisma.track_id_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends track_id_historyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_historyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__track_id_historyClient<$Result.GetResult<Prisma.$track_id_historyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Track_id_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_historyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Track_id_histories
     * const track_id_histories = await prisma.track_id_history.findMany()
     * 
     * // Get first 10 Track_id_histories
     * const track_id_histories = await prisma.track_id_history.findMany({ take: 10 })
     * 
     * // Only select the `track_id`
     * const track_id_historyWithTrack_idOnly = await prisma.track_id_history.findMany({ select: { track_id: true } })
     * 
    **/
    findMany<T extends track_id_historyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_historyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$track_id_historyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Track_id_history.
     * @param {track_id_historyCreateArgs} args - Arguments to create a Track_id_history.
     * @example
     * // Create one Track_id_history
     * const Track_id_history = await prisma.track_id_history.create({
     *   data: {
     *     // ... data to create a Track_id_history
     *   }
     * })
     * 
    **/
    create<T extends track_id_historyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_historyCreateArgs<ExtArgs>>
    ): Prisma__track_id_historyClient<$Result.GetResult<Prisma.$track_id_historyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Track_id_histories.
     *     @param {track_id_historyCreateManyArgs} args - Arguments to create many Track_id_histories.
     *     @example
     *     // Create many Track_id_histories
     *     const track_id_history = await prisma.track_id_history.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends track_id_historyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_historyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Track_id_history.
     * @param {track_id_historyDeleteArgs} args - Arguments to delete one Track_id_history.
     * @example
     * // Delete one Track_id_history
     * const Track_id_history = await prisma.track_id_history.delete({
     *   where: {
     *     // ... filter to delete one Track_id_history
     *   }
     * })
     * 
    **/
    delete<T extends track_id_historyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_historyDeleteArgs<ExtArgs>>
    ): Prisma__track_id_historyClient<$Result.GetResult<Prisma.$track_id_historyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Track_id_history.
     * @param {track_id_historyUpdateArgs} args - Arguments to update one Track_id_history.
     * @example
     * // Update one Track_id_history
     * const track_id_history = await prisma.track_id_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends track_id_historyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_historyUpdateArgs<ExtArgs>>
    ): Prisma__track_id_historyClient<$Result.GetResult<Prisma.$track_id_historyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Track_id_histories.
     * @param {track_id_historyDeleteManyArgs} args - Arguments to filter Track_id_histories to delete.
     * @example
     * // Delete a few Track_id_histories
     * const { count } = await prisma.track_id_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends track_id_historyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_historyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Track_id_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Track_id_histories
     * const track_id_history = await prisma.track_id_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends track_id_historyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_historyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Track_id_history.
     * @param {track_id_historyUpsertArgs} args - Arguments to update or create a Track_id_history.
     * @example
     * // Update or create a Track_id_history
     * const track_id_history = await prisma.track_id_history.upsert({
     *   create: {
     *     // ... data to create a Track_id_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Track_id_history we want to update
     *   }
     * })
    **/
    upsert<T extends track_id_historyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_historyUpsertArgs<ExtArgs>>
    ): Prisma__track_id_historyClient<$Result.GetResult<Prisma.$track_id_historyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Track_id_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_historyCountArgs} args - Arguments to filter Track_id_histories to count.
     * @example
     * // Count the number of Track_id_histories
     * const count = await prisma.track_id_history.count({
     *   where: {
     *     // ... the filter for the Track_id_histories we want to count
     *   }
     * })
    **/
    count<T extends track_id_historyCountArgs>(
      args?: Subset<T, track_id_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Track_id_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Track_id_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Track_id_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Track_id_historyAggregateArgs>(args: Subset<T, Track_id_historyAggregateArgs>): Prisma.PrismaPromise<GetTrack_id_historyAggregateType<T>>

    /**
     * Group by Track_id_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_historyGroupByArgs} args - Group by arguments.
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
      T extends track_id_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: track_id_historyGroupByArgs['orderBy'] }
        : { orderBy?: track_id_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, track_id_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrack_id_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the track_id_history model
   */
  readonly fields: track_id_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for track_id_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__track_id_historyClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    track_id_object<T extends track_id_objectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, track_id_objectDefaultArgs<ExtArgs>>): Prisma__track_id_objectClient<$Result.GetResult<Prisma.$track_id_objectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the track_id_history model
   */ 
  interface track_id_historyFieldRefs {
    readonly track_id: FieldRef<"track_id_history", 'String'>
    readonly update_date_time: FieldRef<"track_id_history", 'DateTime'>
    readonly description: FieldRef<"track_id_history", 'String'>
    readonly data: FieldRef<"track_id_history", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * track_id_history findUnique
   */
  export type track_id_historyFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_history
     */
    select?: track_id_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_historyInclude<ExtArgs> | null
    /**
     * Filter, which track_id_history to fetch.
     */
    where: track_id_historyWhereUniqueInput
  }


  /**
   * track_id_history findUniqueOrThrow
   */
  export type track_id_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_history
     */
    select?: track_id_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_historyInclude<ExtArgs> | null
    /**
     * Filter, which track_id_history to fetch.
     */
    where: track_id_historyWhereUniqueInput
  }


  /**
   * track_id_history findFirst
   */
  export type track_id_historyFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_history
     */
    select?: track_id_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_historyInclude<ExtArgs> | null
    /**
     * Filter, which track_id_history to fetch.
     */
    where?: track_id_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of track_id_histories to fetch.
     */
    orderBy?: track_id_historyOrderByWithRelationInput | track_id_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for track_id_histories.
     */
    cursor?: track_id_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` track_id_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` track_id_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of track_id_histories.
     */
    distinct?: Track_id_historyScalarFieldEnum | Track_id_historyScalarFieldEnum[]
  }


  /**
   * track_id_history findFirstOrThrow
   */
  export type track_id_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_history
     */
    select?: track_id_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_historyInclude<ExtArgs> | null
    /**
     * Filter, which track_id_history to fetch.
     */
    where?: track_id_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of track_id_histories to fetch.
     */
    orderBy?: track_id_historyOrderByWithRelationInput | track_id_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for track_id_histories.
     */
    cursor?: track_id_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` track_id_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` track_id_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of track_id_histories.
     */
    distinct?: Track_id_historyScalarFieldEnum | Track_id_historyScalarFieldEnum[]
  }


  /**
   * track_id_history findMany
   */
  export type track_id_historyFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_history
     */
    select?: track_id_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_historyInclude<ExtArgs> | null
    /**
     * Filter, which track_id_histories to fetch.
     */
    where?: track_id_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of track_id_histories to fetch.
     */
    orderBy?: track_id_historyOrderByWithRelationInput | track_id_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing track_id_histories.
     */
    cursor?: track_id_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` track_id_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` track_id_histories.
     */
    skip?: number
    distinct?: Track_id_historyScalarFieldEnum | Track_id_historyScalarFieldEnum[]
  }


  /**
   * track_id_history create
   */
  export type track_id_historyCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_history
     */
    select?: track_id_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a track_id_history.
     */
    data: XOR<track_id_historyCreateInput, track_id_historyUncheckedCreateInput>
  }


  /**
   * track_id_history createMany
   */
  export type track_id_historyCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many track_id_histories.
     */
    data: track_id_historyCreateManyInput | track_id_historyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * track_id_history update
   */
  export type track_id_historyUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_history
     */
    select?: track_id_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a track_id_history.
     */
    data: XOR<track_id_historyUpdateInput, track_id_historyUncheckedUpdateInput>
    /**
     * Choose, which track_id_history to update.
     */
    where: track_id_historyWhereUniqueInput
  }


  /**
   * track_id_history updateMany
   */
  export type track_id_historyUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update track_id_histories.
     */
    data: XOR<track_id_historyUpdateManyMutationInput, track_id_historyUncheckedUpdateManyInput>
    /**
     * Filter which track_id_histories to update
     */
    where?: track_id_historyWhereInput
  }


  /**
   * track_id_history upsert
   */
  export type track_id_historyUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_history
     */
    select?: track_id_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the track_id_history to update in case it exists.
     */
    where: track_id_historyWhereUniqueInput
    /**
     * In case the track_id_history found by the `where` argument doesn't exist, create a new track_id_history with this data.
     */
    create: XOR<track_id_historyCreateInput, track_id_historyUncheckedCreateInput>
    /**
     * In case the track_id_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<track_id_historyUpdateInput, track_id_historyUncheckedUpdateInput>
  }


  /**
   * track_id_history delete
   */
  export type track_id_historyDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_history
     */
    select?: track_id_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_historyInclude<ExtArgs> | null
    /**
     * Filter which track_id_history to delete.
     */
    where: track_id_historyWhereUniqueInput
  }


  /**
   * track_id_history deleteMany
   */
  export type track_id_historyDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which track_id_histories to delete
     */
    where?: track_id_historyWhereInput
  }


  /**
   * track_id_history without action
   */
  export type track_id_historyDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_history
     */
    select?: track_id_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: track_id_historyInclude<ExtArgs> | null
  }



  /**
   * Model track_id_stock
   */

  export type AggregateTrack_id_stock = {
    _count: Track_id_stockCountAggregateOutputType | null
    _avg: Track_id_stockAvgAggregateOutputType | null
    _sum: Track_id_stockSumAggregateOutputType | null
    _min: Track_id_stockMinAggregateOutputType | null
    _max: Track_id_stockMaxAggregateOutputType | null
  }

  export type Track_id_stockAvgAggregateOutputType = {
    quantity: number | null
  }

  export type Track_id_stockSumAggregateOutputType = {
    quantity: number | null
  }

  export type Track_id_stockMinAggregateOutputType = {
    locator_id: string | null
    key23: string | null
    product_id: string | null
    track_id: string | null
    quantity: number | null
  }

  export type Track_id_stockMaxAggregateOutputType = {
    locator_id: string | null
    key23: string | null
    product_id: string | null
    track_id: string | null
    quantity: number | null
  }

  export type Track_id_stockCountAggregateOutputType = {
    locator_id: number
    key23: number
    product_id: number
    track_id: number
    quantity: number
    data: number
    _all: number
  }


  export type Track_id_stockAvgAggregateInputType = {
    quantity?: true
  }

  export type Track_id_stockSumAggregateInputType = {
    quantity?: true
  }

  export type Track_id_stockMinAggregateInputType = {
    locator_id?: true
    key23?: true
    product_id?: true
    track_id?: true
    quantity?: true
  }

  export type Track_id_stockMaxAggregateInputType = {
    locator_id?: true
    key23?: true
    product_id?: true
    track_id?: true
    quantity?: true
  }

  export type Track_id_stockCountAggregateInputType = {
    locator_id?: true
    key23?: true
    product_id?: true
    track_id?: true
    quantity?: true
    data?: true
    _all?: true
  }

  export type Track_id_stockAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which track_id_stock to aggregate.
     */
    where?: track_id_stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of track_id_stocks to fetch.
     */
    orderBy?: track_id_stockOrderByWithRelationInput | track_id_stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: track_id_stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` track_id_stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` track_id_stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned track_id_stocks
    **/
    _count?: true | Track_id_stockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Track_id_stockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Track_id_stockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Track_id_stockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Track_id_stockMaxAggregateInputType
  }

  export type GetTrack_id_stockAggregateType<T extends Track_id_stockAggregateArgs> = {
        [P in keyof T & keyof AggregateTrack_id_stock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrack_id_stock[P]>
      : GetScalarType<T[P], AggregateTrack_id_stock[P]>
  }




  export type track_id_stockGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: track_id_stockWhereInput
    orderBy?: track_id_stockOrderByWithAggregationInput | track_id_stockOrderByWithAggregationInput[]
    by: Track_id_stockScalarFieldEnum[] | Track_id_stockScalarFieldEnum
    having?: track_id_stockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Track_id_stockCountAggregateInputType | true
    _avg?: Track_id_stockAvgAggregateInputType
    _sum?: Track_id_stockSumAggregateInputType
    _min?: Track_id_stockMinAggregateInputType
    _max?: Track_id_stockMaxAggregateInputType
  }

  export type Track_id_stockGroupByOutputType = {
    locator_id: string
    key23: string
    product_id: string
    track_id: string
    quantity: number
    data: JsonValue
    _count: Track_id_stockCountAggregateOutputType | null
    _avg: Track_id_stockAvgAggregateOutputType | null
    _sum: Track_id_stockSumAggregateOutputType | null
    _min: Track_id_stockMinAggregateOutputType | null
    _max: Track_id_stockMaxAggregateOutputType | null
  }

  type GetTrack_id_stockGroupByPayload<T extends track_id_stockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Track_id_stockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Track_id_stockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Track_id_stockGroupByOutputType[P]>
            : GetScalarType<T[P], Track_id_stockGroupByOutputType[P]>
        }
      >
    >


  export type track_id_stockSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    locator_id?: boolean
    key23?: boolean
    product_id?: boolean
    track_id?: boolean
    quantity?: boolean
    data?: boolean
  }, ExtArgs["result"]["track_id_stock"]>

  export type track_id_stockSelectScalar = {
    locator_id?: boolean
    key23?: boolean
    product_id?: boolean
    track_id?: boolean
    quantity?: boolean
    data?: boolean
  }


  export type $track_id_stockPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "track_id_stock"
    objects: {}
    scalars: $Extensions.GetResult<{
      locator_id: string
      key23: string
      product_id: string
      track_id: string
      quantity: number
      data: Prisma.JsonValue
    }, ExtArgs["result"]["track_id_stock"]>
    composites: {}
  }


  type track_id_stockGetPayload<S extends boolean | null | undefined | track_id_stockDefaultArgs> = $Result.GetResult<Prisma.$track_id_stockPayload, S>

  type track_id_stockCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<track_id_stockFindManyArgs, 'select' | 'include'> & {
      select?: Track_id_stockCountAggregateInputType | true
    }

  export interface track_id_stockDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['track_id_stock'], meta: { name: 'track_id_stock' } }
    /**
     * Find zero or one Track_id_stock that matches the filter.
     * @param {track_id_stockFindUniqueArgs} args - Arguments to find a Track_id_stock
     * @example
     * // Get one Track_id_stock
     * const track_id_stock = await prisma.track_id_stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends track_id_stockFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_stockFindUniqueArgs<ExtArgs>>
    ): Prisma__track_id_stockClient<$Result.GetResult<Prisma.$track_id_stockPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Track_id_stock that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {track_id_stockFindUniqueOrThrowArgs} args - Arguments to find a Track_id_stock
     * @example
     * // Get one Track_id_stock
     * const track_id_stock = await prisma.track_id_stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends track_id_stockFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_stockFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__track_id_stockClient<$Result.GetResult<Prisma.$track_id_stockPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Track_id_stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_stockFindFirstArgs} args - Arguments to find a Track_id_stock
     * @example
     * // Get one Track_id_stock
     * const track_id_stock = await prisma.track_id_stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends track_id_stockFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_stockFindFirstArgs<ExtArgs>>
    ): Prisma__track_id_stockClient<$Result.GetResult<Prisma.$track_id_stockPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Track_id_stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_stockFindFirstOrThrowArgs} args - Arguments to find a Track_id_stock
     * @example
     * // Get one Track_id_stock
     * const track_id_stock = await prisma.track_id_stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends track_id_stockFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_stockFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__track_id_stockClient<$Result.GetResult<Prisma.$track_id_stockPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Track_id_stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_stockFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Track_id_stocks
     * const track_id_stocks = await prisma.track_id_stock.findMany()
     * 
     * // Get first 10 Track_id_stocks
     * const track_id_stocks = await prisma.track_id_stock.findMany({ take: 10 })
     * 
     * // Only select the `locator_id`
     * const track_id_stockWithLocator_idOnly = await prisma.track_id_stock.findMany({ select: { locator_id: true } })
     * 
    **/
    findMany<T extends track_id_stockFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_stockFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$track_id_stockPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Track_id_stock.
     * @param {track_id_stockCreateArgs} args - Arguments to create a Track_id_stock.
     * @example
     * // Create one Track_id_stock
     * const Track_id_stock = await prisma.track_id_stock.create({
     *   data: {
     *     // ... data to create a Track_id_stock
     *   }
     * })
     * 
    **/
    create<T extends track_id_stockCreateArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_stockCreateArgs<ExtArgs>>
    ): Prisma__track_id_stockClient<$Result.GetResult<Prisma.$track_id_stockPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Track_id_stocks.
     *     @param {track_id_stockCreateManyArgs} args - Arguments to create many Track_id_stocks.
     *     @example
     *     // Create many Track_id_stocks
     *     const track_id_stock = await prisma.track_id_stock.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends track_id_stockCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_stockCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Track_id_stock.
     * @param {track_id_stockDeleteArgs} args - Arguments to delete one Track_id_stock.
     * @example
     * // Delete one Track_id_stock
     * const Track_id_stock = await prisma.track_id_stock.delete({
     *   where: {
     *     // ... filter to delete one Track_id_stock
     *   }
     * })
     * 
    **/
    delete<T extends track_id_stockDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_stockDeleteArgs<ExtArgs>>
    ): Prisma__track_id_stockClient<$Result.GetResult<Prisma.$track_id_stockPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Track_id_stock.
     * @param {track_id_stockUpdateArgs} args - Arguments to update one Track_id_stock.
     * @example
     * // Update one Track_id_stock
     * const track_id_stock = await prisma.track_id_stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends track_id_stockUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_stockUpdateArgs<ExtArgs>>
    ): Prisma__track_id_stockClient<$Result.GetResult<Prisma.$track_id_stockPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Track_id_stocks.
     * @param {track_id_stockDeleteManyArgs} args - Arguments to filter Track_id_stocks to delete.
     * @example
     * // Delete a few Track_id_stocks
     * const { count } = await prisma.track_id_stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends track_id_stockDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, track_id_stockDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Track_id_stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_stockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Track_id_stocks
     * const track_id_stock = await prisma.track_id_stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends track_id_stockUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_stockUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Track_id_stock.
     * @param {track_id_stockUpsertArgs} args - Arguments to update or create a Track_id_stock.
     * @example
     * // Update or create a Track_id_stock
     * const track_id_stock = await prisma.track_id_stock.upsert({
     *   create: {
     *     // ... data to create a Track_id_stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Track_id_stock we want to update
     *   }
     * })
    **/
    upsert<T extends track_id_stockUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, track_id_stockUpsertArgs<ExtArgs>>
    ): Prisma__track_id_stockClient<$Result.GetResult<Prisma.$track_id_stockPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Track_id_stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_stockCountArgs} args - Arguments to filter Track_id_stocks to count.
     * @example
     * // Count the number of Track_id_stocks
     * const count = await prisma.track_id_stock.count({
     *   where: {
     *     // ... the filter for the Track_id_stocks we want to count
     *   }
     * })
    **/
    count<T extends track_id_stockCountArgs>(
      args?: Subset<T, track_id_stockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Track_id_stockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Track_id_stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Track_id_stockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Track_id_stockAggregateArgs>(args: Subset<T, Track_id_stockAggregateArgs>): Prisma.PrismaPromise<GetTrack_id_stockAggregateType<T>>

    /**
     * Group by Track_id_stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {track_id_stockGroupByArgs} args - Group by arguments.
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
      T extends track_id_stockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: track_id_stockGroupByArgs['orderBy'] }
        : { orderBy?: track_id_stockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, track_id_stockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrack_id_stockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the track_id_stock model
   */
  readonly fields: track_id_stockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for track_id_stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__track_id_stockClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the track_id_stock model
   */ 
  interface track_id_stockFieldRefs {
    readonly locator_id: FieldRef<"track_id_stock", 'String'>
    readonly key23: FieldRef<"track_id_stock", 'String'>
    readonly product_id: FieldRef<"track_id_stock", 'String'>
    readonly track_id: FieldRef<"track_id_stock", 'String'>
    readonly quantity: FieldRef<"track_id_stock", 'Float'>
    readonly data: FieldRef<"track_id_stock", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * track_id_stock findUnique
   */
  export type track_id_stockFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_stock
     */
    select?: track_id_stockSelect<ExtArgs> | null
    /**
     * Filter, which track_id_stock to fetch.
     */
    where: track_id_stockWhereUniqueInput
  }


  /**
   * track_id_stock findUniqueOrThrow
   */
  export type track_id_stockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_stock
     */
    select?: track_id_stockSelect<ExtArgs> | null
    /**
     * Filter, which track_id_stock to fetch.
     */
    where: track_id_stockWhereUniqueInput
  }


  /**
   * track_id_stock findFirst
   */
  export type track_id_stockFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_stock
     */
    select?: track_id_stockSelect<ExtArgs> | null
    /**
     * Filter, which track_id_stock to fetch.
     */
    where?: track_id_stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of track_id_stocks to fetch.
     */
    orderBy?: track_id_stockOrderByWithRelationInput | track_id_stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for track_id_stocks.
     */
    cursor?: track_id_stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` track_id_stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` track_id_stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of track_id_stocks.
     */
    distinct?: Track_id_stockScalarFieldEnum | Track_id_stockScalarFieldEnum[]
  }


  /**
   * track_id_stock findFirstOrThrow
   */
  export type track_id_stockFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_stock
     */
    select?: track_id_stockSelect<ExtArgs> | null
    /**
     * Filter, which track_id_stock to fetch.
     */
    where?: track_id_stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of track_id_stocks to fetch.
     */
    orderBy?: track_id_stockOrderByWithRelationInput | track_id_stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for track_id_stocks.
     */
    cursor?: track_id_stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` track_id_stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` track_id_stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of track_id_stocks.
     */
    distinct?: Track_id_stockScalarFieldEnum | Track_id_stockScalarFieldEnum[]
  }


  /**
   * track_id_stock findMany
   */
  export type track_id_stockFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_stock
     */
    select?: track_id_stockSelect<ExtArgs> | null
    /**
     * Filter, which track_id_stocks to fetch.
     */
    where?: track_id_stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of track_id_stocks to fetch.
     */
    orderBy?: track_id_stockOrderByWithRelationInput | track_id_stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing track_id_stocks.
     */
    cursor?: track_id_stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` track_id_stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` track_id_stocks.
     */
    skip?: number
    distinct?: Track_id_stockScalarFieldEnum | Track_id_stockScalarFieldEnum[]
  }


  /**
   * track_id_stock create
   */
  export type track_id_stockCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_stock
     */
    select?: track_id_stockSelect<ExtArgs> | null
    /**
     * The data needed to create a track_id_stock.
     */
    data: XOR<track_id_stockCreateInput, track_id_stockUncheckedCreateInput>
  }


  /**
   * track_id_stock createMany
   */
  export type track_id_stockCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many track_id_stocks.
     */
    data: track_id_stockCreateManyInput | track_id_stockCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * track_id_stock update
   */
  export type track_id_stockUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_stock
     */
    select?: track_id_stockSelect<ExtArgs> | null
    /**
     * The data needed to update a track_id_stock.
     */
    data: XOR<track_id_stockUpdateInput, track_id_stockUncheckedUpdateInput>
    /**
     * Choose, which track_id_stock to update.
     */
    where: track_id_stockWhereUniqueInput
  }


  /**
   * track_id_stock updateMany
   */
  export type track_id_stockUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update track_id_stocks.
     */
    data: XOR<track_id_stockUpdateManyMutationInput, track_id_stockUncheckedUpdateManyInput>
    /**
     * Filter which track_id_stocks to update
     */
    where?: track_id_stockWhereInput
  }


  /**
   * track_id_stock upsert
   */
  export type track_id_stockUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_stock
     */
    select?: track_id_stockSelect<ExtArgs> | null
    /**
     * The filter to search for the track_id_stock to update in case it exists.
     */
    where: track_id_stockWhereUniqueInput
    /**
     * In case the track_id_stock found by the `where` argument doesn't exist, create a new track_id_stock with this data.
     */
    create: XOR<track_id_stockCreateInput, track_id_stockUncheckedCreateInput>
    /**
     * In case the track_id_stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<track_id_stockUpdateInput, track_id_stockUncheckedUpdateInput>
  }


  /**
   * track_id_stock delete
   */
  export type track_id_stockDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_stock
     */
    select?: track_id_stockSelect<ExtArgs> | null
    /**
     * Filter which track_id_stock to delete.
     */
    where: track_id_stockWhereUniqueInput
  }


  /**
   * track_id_stock deleteMany
   */
  export type track_id_stockDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which track_id_stocks to delete
     */
    where?: track_id_stockWhereInput
  }


  /**
   * track_id_stock without action
   */
  export type track_id_stockDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the track_id_stock
     */
    select?: track_id_stockSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Inventory_move_draftScalarFieldEnum: {
    org_id: 'org_id',
    creation_date_time: 'creation_date_time',
    movement_id: 'movement_id',
    data: 'data'
  };

  export type Inventory_move_draftScalarFieldEnum = (typeof Inventory_move_draftScalarFieldEnum)[keyof typeof Inventory_move_draftScalarFieldEnum]


  export const Shipment_draftScalarFieldEnum: {
    org_id: 'org_id',
    creation_date_time: 'creation_date_time',
    erp_id: 'erp_id',
    data: 'data'
  };

  export type Shipment_draftScalarFieldEnum = (typeof Shipment_draftScalarFieldEnum)[keyof typeof Shipment_draftScalarFieldEnum]


  export const Production_single_product_draftScalarFieldEnum: {
    org_id: 'org_id',
    creation_date_time: 'creation_date_time',
    erp_id: 'erp_id',
    data: 'data'
  };

  export type Production_single_product_draftScalarFieldEnum = (typeof Production_single_product_draftScalarFieldEnum)[keyof typeof Production_single_product_draftScalarFieldEnum]


  export const Track_id_objectScalarFieldEnum: {
    track_id: 'track_id',
    productId: 'productId',
    productName: 'productName',
    track_type: 'track_type',
    creation_date_time: 'creation_date_time',
    source_data: 'source_data',
    object_data: 'object_data'
  };

  export type Track_id_objectScalarFieldEnum = (typeof Track_id_objectScalarFieldEnum)[keyof typeof Track_id_objectScalarFieldEnum]


  export const Track_id_historyScalarFieldEnum: {
    track_id: 'track_id',
    update_date_time: 'update_date_time',
    description: 'description',
    data: 'data'
  };

  export type Track_id_historyScalarFieldEnum = (typeof Track_id_historyScalarFieldEnum)[keyof typeof Track_id_historyScalarFieldEnum]


  export const Track_id_stockScalarFieldEnum: {
    locator_id: 'locator_id',
    key23: 'key23',
    product_id: 'product_id',
    track_id: 'track_id',
    quantity: 'quantity',
    data: 'data'
  };

  export type Track_id_stockScalarFieldEnum = (typeof Track_id_stockScalarFieldEnum)[keyof typeof Track_id_stockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type inventory_move_draftWhereInput = {
    AND?: inventory_move_draftWhereInput | inventory_move_draftWhereInput[]
    OR?: inventory_move_draftWhereInput[]
    NOT?: inventory_move_draftWhereInput | inventory_move_draftWhereInput[]
    org_id?: IntFilter<"inventory_move_draft"> | number
    creation_date_time?: DateTimeFilter<"inventory_move_draft"> | Date | string
    movement_id?: IntFilter<"inventory_move_draft"> | number
    data?: JsonFilter<"inventory_move_draft">
  }

  export type inventory_move_draftOrderByWithRelationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    movement_id?: SortOrder
    data?: SortOrder
  }

  export type inventory_move_draftWhereUniqueInput = Prisma.AtLeast<{
    movement_id?: number
    org_id_creation_date_time?: inventory_move_draftOrg_idCreation_date_timeCompoundUniqueInput
    AND?: inventory_move_draftWhereInput | inventory_move_draftWhereInput[]
    OR?: inventory_move_draftWhereInput[]
    NOT?: inventory_move_draftWhereInput | inventory_move_draftWhereInput[]
    org_id?: IntFilter<"inventory_move_draft"> | number
    creation_date_time?: DateTimeFilter<"inventory_move_draft"> | Date | string
    data?: JsonFilter<"inventory_move_draft">
  }, "org_id_creation_date_time" | "movement_id">

  export type inventory_move_draftOrderByWithAggregationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    movement_id?: SortOrder
    data?: SortOrder
    _count?: inventory_move_draftCountOrderByAggregateInput
    _avg?: inventory_move_draftAvgOrderByAggregateInput
    _max?: inventory_move_draftMaxOrderByAggregateInput
    _min?: inventory_move_draftMinOrderByAggregateInput
    _sum?: inventory_move_draftSumOrderByAggregateInput
  }

  export type inventory_move_draftScalarWhereWithAggregatesInput = {
    AND?: inventory_move_draftScalarWhereWithAggregatesInput | inventory_move_draftScalarWhereWithAggregatesInput[]
    OR?: inventory_move_draftScalarWhereWithAggregatesInput[]
    NOT?: inventory_move_draftScalarWhereWithAggregatesInput | inventory_move_draftScalarWhereWithAggregatesInput[]
    org_id?: IntWithAggregatesFilter<"inventory_move_draft"> | number
    creation_date_time?: DateTimeWithAggregatesFilter<"inventory_move_draft"> | Date | string
    movement_id?: IntWithAggregatesFilter<"inventory_move_draft"> | number
    data?: JsonWithAggregatesFilter<"inventory_move_draft">
  }

  export type shipment_draftWhereInput = {
    AND?: shipment_draftWhereInput | shipment_draftWhereInput[]
    OR?: shipment_draftWhereInput[]
    NOT?: shipment_draftWhereInput | shipment_draftWhereInput[]
    org_id?: IntFilter<"shipment_draft"> | number
    creation_date_time?: DateTimeFilter<"shipment_draft"> | Date | string
    erp_id?: IntFilter<"shipment_draft"> | number
    data?: JsonFilter<"shipment_draft">
  }

  export type shipment_draftOrderByWithRelationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    data?: SortOrder
  }

  export type shipment_draftWhereUniqueInput = Prisma.AtLeast<{
    erp_id?: number
    org_id_creation_date_time?: shipment_draftOrg_idCreation_date_timeCompoundUniqueInput
    AND?: shipment_draftWhereInput | shipment_draftWhereInput[]
    OR?: shipment_draftWhereInput[]
    NOT?: shipment_draftWhereInput | shipment_draftWhereInput[]
    org_id?: IntFilter<"shipment_draft"> | number
    creation_date_time?: DateTimeFilter<"shipment_draft"> | Date | string
    data?: JsonFilter<"shipment_draft">
  }, "org_id_creation_date_time" | "erp_id">

  export type shipment_draftOrderByWithAggregationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    data?: SortOrder
    _count?: shipment_draftCountOrderByAggregateInput
    _avg?: shipment_draftAvgOrderByAggregateInput
    _max?: shipment_draftMaxOrderByAggregateInput
    _min?: shipment_draftMinOrderByAggregateInput
    _sum?: shipment_draftSumOrderByAggregateInput
  }

  export type shipment_draftScalarWhereWithAggregatesInput = {
    AND?: shipment_draftScalarWhereWithAggregatesInput | shipment_draftScalarWhereWithAggregatesInput[]
    OR?: shipment_draftScalarWhereWithAggregatesInput[]
    NOT?: shipment_draftScalarWhereWithAggregatesInput | shipment_draftScalarWhereWithAggregatesInput[]
    org_id?: IntWithAggregatesFilter<"shipment_draft"> | number
    creation_date_time?: DateTimeWithAggregatesFilter<"shipment_draft"> | Date | string
    erp_id?: IntWithAggregatesFilter<"shipment_draft"> | number
    data?: JsonWithAggregatesFilter<"shipment_draft">
  }

  export type production_single_product_draftWhereInput = {
    AND?: production_single_product_draftWhereInput | production_single_product_draftWhereInput[]
    OR?: production_single_product_draftWhereInput[]
    NOT?: production_single_product_draftWhereInput | production_single_product_draftWhereInput[]
    org_id?: IntFilter<"production_single_product_draft"> | number
    creation_date_time?: DateTimeFilter<"production_single_product_draft"> | Date | string
    erp_id?: IntFilter<"production_single_product_draft"> | number
    data?: JsonFilter<"production_single_product_draft">
  }

  export type production_single_product_draftOrderByWithRelationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    data?: SortOrder
  }

  export type production_single_product_draftWhereUniqueInput = Prisma.AtLeast<{
    erp_id?: number
    org_id_creation_date_time?: production_single_product_draftOrg_idCreation_date_timeCompoundUniqueInput
    AND?: production_single_product_draftWhereInput | production_single_product_draftWhereInput[]
    OR?: production_single_product_draftWhereInput[]
    NOT?: production_single_product_draftWhereInput | production_single_product_draftWhereInput[]
    org_id?: IntFilter<"production_single_product_draft"> | number
    creation_date_time?: DateTimeFilter<"production_single_product_draft"> | Date | string
    data?: JsonFilter<"production_single_product_draft">
  }, "org_id_creation_date_time" | "erp_id">

  export type production_single_product_draftOrderByWithAggregationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    data?: SortOrder
    _count?: production_single_product_draftCountOrderByAggregateInput
    _avg?: production_single_product_draftAvgOrderByAggregateInput
    _max?: production_single_product_draftMaxOrderByAggregateInput
    _min?: production_single_product_draftMinOrderByAggregateInput
    _sum?: production_single_product_draftSumOrderByAggregateInput
  }

  export type production_single_product_draftScalarWhereWithAggregatesInput = {
    AND?: production_single_product_draftScalarWhereWithAggregatesInput | production_single_product_draftScalarWhereWithAggregatesInput[]
    OR?: production_single_product_draftScalarWhereWithAggregatesInput[]
    NOT?: production_single_product_draftScalarWhereWithAggregatesInput | production_single_product_draftScalarWhereWithAggregatesInput[]
    org_id?: IntWithAggregatesFilter<"production_single_product_draft"> | number
    creation_date_time?: DateTimeWithAggregatesFilter<"production_single_product_draft"> | Date | string
    erp_id?: IntWithAggregatesFilter<"production_single_product_draft"> | number
    data?: JsonWithAggregatesFilter<"production_single_product_draft">
  }

  export type track_id_objectWhereInput = {
    AND?: track_id_objectWhereInput | track_id_objectWhereInput[]
    OR?: track_id_objectWhereInput[]
    NOT?: track_id_objectWhereInput | track_id_objectWhereInput[]
    track_id?: StringFilter<"track_id_object"> | string
    productId?: IntFilter<"track_id_object"> | number
    productName?: StringFilter<"track_id_object"> | string
    track_type?: StringFilter<"track_id_object"> | string
    creation_date_time?: DateTimeFilter<"track_id_object"> | Date | string
    source_data?: JsonFilter<"track_id_object">
    object_data?: JsonFilter<"track_id_object">
    track_id_history?: Track_id_historyListRelationFilter
  }

  export type track_id_objectOrderByWithRelationInput = {
    track_id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    track_type?: SortOrder
    creation_date_time?: SortOrder
    source_data?: SortOrder
    object_data?: SortOrder
    track_id_history?: track_id_historyOrderByRelationAggregateInput
  }

  export type track_id_objectWhereUniqueInput = Prisma.AtLeast<{
    track_id?: string
    creation_date_time?: Date | string
    AND?: track_id_objectWhereInput | track_id_objectWhereInput[]
    OR?: track_id_objectWhereInput[]
    NOT?: track_id_objectWhereInput | track_id_objectWhereInput[]
    productId?: IntFilter<"track_id_object"> | number
    productName?: StringFilter<"track_id_object"> | string
    track_type?: StringFilter<"track_id_object"> | string
    source_data?: JsonFilter<"track_id_object">
    object_data?: JsonFilter<"track_id_object">
    track_id_history?: Track_id_historyListRelationFilter
  }, "track_id" | "creation_date_time">

  export type track_id_objectOrderByWithAggregationInput = {
    track_id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    track_type?: SortOrder
    creation_date_time?: SortOrder
    source_data?: SortOrder
    object_data?: SortOrder
    _count?: track_id_objectCountOrderByAggregateInput
    _avg?: track_id_objectAvgOrderByAggregateInput
    _max?: track_id_objectMaxOrderByAggregateInput
    _min?: track_id_objectMinOrderByAggregateInput
    _sum?: track_id_objectSumOrderByAggregateInput
  }

  export type track_id_objectScalarWhereWithAggregatesInput = {
    AND?: track_id_objectScalarWhereWithAggregatesInput | track_id_objectScalarWhereWithAggregatesInput[]
    OR?: track_id_objectScalarWhereWithAggregatesInput[]
    NOT?: track_id_objectScalarWhereWithAggregatesInput | track_id_objectScalarWhereWithAggregatesInput[]
    track_id?: StringWithAggregatesFilter<"track_id_object"> | string
    productId?: IntWithAggregatesFilter<"track_id_object"> | number
    productName?: StringWithAggregatesFilter<"track_id_object"> | string
    track_type?: StringWithAggregatesFilter<"track_id_object"> | string
    creation_date_time?: DateTimeWithAggregatesFilter<"track_id_object"> | Date | string
    source_data?: JsonWithAggregatesFilter<"track_id_object">
    object_data?: JsonWithAggregatesFilter<"track_id_object">
  }

  export type track_id_historyWhereInput = {
    AND?: track_id_historyWhereInput | track_id_historyWhereInput[]
    OR?: track_id_historyWhereInput[]
    NOT?: track_id_historyWhereInput | track_id_historyWhereInput[]
    track_id?: StringFilter<"track_id_history"> | string
    update_date_time?: DateTimeFilter<"track_id_history"> | Date | string
    description?: StringFilter<"track_id_history"> | string
    data?: JsonFilter<"track_id_history">
    track_id_object?: XOR<Track_id_objectRelationFilter, track_id_objectWhereInput>
  }

  export type track_id_historyOrderByWithRelationInput = {
    track_id?: SortOrder
    update_date_time?: SortOrder
    description?: SortOrder
    data?: SortOrder
    track_id_object?: track_id_objectOrderByWithRelationInput
  }

  export type track_id_historyWhereUniqueInput = Prisma.AtLeast<{
    update_date_time?: Date | string
    track_id_update_date_time?: track_id_historyTrack_idUpdate_date_timeCompoundUniqueInput
    AND?: track_id_historyWhereInput | track_id_historyWhereInput[]
    OR?: track_id_historyWhereInput[]
    NOT?: track_id_historyWhereInput | track_id_historyWhereInput[]
    track_id?: StringFilter<"track_id_history"> | string
    description?: StringFilter<"track_id_history"> | string
    data?: JsonFilter<"track_id_history">
    track_id_object?: XOR<Track_id_objectRelationFilter, track_id_objectWhereInput>
  }, "track_id_update_date_time" | "update_date_time">

  export type track_id_historyOrderByWithAggregationInput = {
    track_id?: SortOrder
    update_date_time?: SortOrder
    description?: SortOrder
    data?: SortOrder
    _count?: track_id_historyCountOrderByAggregateInput
    _max?: track_id_historyMaxOrderByAggregateInput
    _min?: track_id_historyMinOrderByAggregateInput
  }

  export type track_id_historyScalarWhereWithAggregatesInput = {
    AND?: track_id_historyScalarWhereWithAggregatesInput | track_id_historyScalarWhereWithAggregatesInput[]
    OR?: track_id_historyScalarWhereWithAggregatesInput[]
    NOT?: track_id_historyScalarWhereWithAggregatesInput | track_id_historyScalarWhereWithAggregatesInput[]
    track_id?: StringWithAggregatesFilter<"track_id_history"> | string
    update_date_time?: DateTimeWithAggregatesFilter<"track_id_history"> | Date | string
    description?: StringWithAggregatesFilter<"track_id_history"> | string
    data?: JsonWithAggregatesFilter<"track_id_history">
  }

  export type track_id_stockWhereInput = {
    AND?: track_id_stockWhereInput | track_id_stockWhereInput[]
    OR?: track_id_stockWhereInput[]
    NOT?: track_id_stockWhereInput | track_id_stockWhereInput[]
    locator_id?: StringFilter<"track_id_stock"> | string
    key23?: StringFilter<"track_id_stock"> | string
    product_id?: StringFilter<"track_id_stock"> | string
    track_id?: StringFilter<"track_id_stock"> | string
    quantity?: FloatFilter<"track_id_stock"> | number
    data?: JsonFilter<"track_id_stock">
  }

  export type track_id_stockOrderByWithRelationInput = {
    locator_id?: SortOrder
    key23?: SortOrder
    product_id?: SortOrder
    track_id?: SortOrder
    quantity?: SortOrder
    data?: SortOrder
  }

  export type track_id_stockWhereUniqueInput = Prisma.AtLeast<{
    locator_id_key23?: track_id_stockLocator_idKey23CompoundUniqueInput
    AND?: track_id_stockWhereInput | track_id_stockWhereInput[]
    OR?: track_id_stockWhereInput[]
    NOT?: track_id_stockWhereInput | track_id_stockWhereInput[]
    locator_id?: StringFilter<"track_id_stock"> | string
    key23?: StringFilter<"track_id_stock"> | string
    product_id?: StringFilter<"track_id_stock"> | string
    track_id?: StringFilter<"track_id_stock"> | string
    quantity?: FloatFilter<"track_id_stock"> | number
    data?: JsonFilter<"track_id_stock">
  }, "locator_id_key23">

  export type track_id_stockOrderByWithAggregationInput = {
    locator_id?: SortOrder
    key23?: SortOrder
    product_id?: SortOrder
    track_id?: SortOrder
    quantity?: SortOrder
    data?: SortOrder
    _count?: track_id_stockCountOrderByAggregateInput
    _avg?: track_id_stockAvgOrderByAggregateInput
    _max?: track_id_stockMaxOrderByAggregateInput
    _min?: track_id_stockMinOrderByAggregateInput
    _sum?: track_id_stockSumOrderByAggregateInput
  }

  export type track_id_stockScalarWhereWithAggregatesInput = {
    AND?: track_id_stockScalarWhereWithAggregatesInput | track_id_stockScalarWhereWithAggregatesInput[]
    OR?: track_id_stockScalarWhereWithAggregatesInput[]
    NOT?: track_id_stockScalarWhereWithAggregatesInput | track_id_stockScalarWhereWithAggregatesInput[]
    locator_id?: StringWithAggregatesFilter<"track_id_stock"> | string
    key23?: StringWithAggregatesFilter<"track_id_stock"> | string
    product_id?: StringWithAggregatesFilter<"track_id_stock"> | string
    track_id?: StringWithAggregatesFilter<"track_id_stock"> | string
    quantity?: FloatWithAggregatesFilter<"track_id_stock"> | number
    data?: JsonWithAggregatesFilter<"track_id_stock">
  }

  export type inventory_move_draftCreateInput = {
    org_id: number
    creation_date_time: Date | string
    movement_id: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type inventory_move_draftUncheckedCreateInput = {
    org_id: number
    creation_date_time: Date | string
    movement_id: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type inventory_move_draftUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    movement_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type inventory_move_draftUncheckedUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    movement_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type inventory_move_draftCreateManyInput = {
    org_id: number
    creation_date_time: Date | string
    movement_id: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type inventory_move_draftUpdateManyMutationInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    movement_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type inventory_move_draftUncheckedUpdateManyInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    movement_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type shipment_draftCreateInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type shipment_draftUncheckedCreateInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type shipment_draftUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type shipment_draftUncheckedUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type shipment_draftCreateManyInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type shipment_draftUpdateManyMutationInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type shipment_draftUncheckedUpdateManyInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type production_single_product_draftCreateInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type production_single_product_draftUncheckedCreateInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type production_single_product_draftUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type production_single_product_draftUncheckedUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type production_single_product_draftCreateManyInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type production_single_product_draftUpdateManyMutationInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type production_single_product_draftUncheckedUpdateManyInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type track_id_objectCreateInput = {
    track_id: string
    productId?: number
    productName?: string
    track_type: string
    creation_date_time?: Date | string
    source_data: JsonNullValueInput | InputJsonValue
    object_data: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyCreateNestedManyWithoutTrack_id_objectInput
  }

  export type track_id_objectUncheckedCreateInput = {
    track_id: string
    productId?: number
    productName?: string
    track_type: string
    creation_date_time?: Date | string
    source_data: JsonNullValueInput | InputJsonValue
    object_data: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyUncheckedCreateNestedManyWithoutTrack_id_objectInput
  }

  export type track_id_objectUpdateInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyUpdateManyWithoutTrack_id_objectNestedInput
  }

  export type track_id_objectUncheckedUpdateInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyUncheckedUpdateManyWithoutTrack_id_objectNestedInput
  }

  export type track_id_objectCreateManyInput = {
    track_id: string
    productId?: number
    productName?: string
    track_type: string
    creation_date_time?: Date | string
    source_data: JsonNullValueInput | InputJsonValue
    object_data: JsonNullValueInput | InputJsonValue
  }

  export type track_id_objectUpdateManyMutationInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
  }

  export type track_id_objectUncheckedUpdateManyInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
  }

  export type track_id_historyCreateInput = {
    update_date_time?: Date | string
    description?: string
    data: JsonNullValueInput | InputJsonValue
    track_id_object: track_id_objectCreateNestedOneWithoutTrack_id_historyInput
  }

  export type track_id_historyUncheckedCreateInput = {
    track_id: string
    update_date_time?: Date | string
    description?: string
    data: JsonNullValueInput | InputJsonValue
  }

  export type track_id_historyUpdateInput = {
    update_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    track_id_object?: track_id_objectUpdateOneRequiredWithoutTrack_id_historyNestedInput
  }

  export type track_id_historyUncheckedUpdateInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    update_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type track_id_historyCreateManyInput = {
    track_id: string
    update_date_time?: Date | string
    description?: string
    data: JsonNullValueInput | InputJsonValue
  }

  export type track_id_historyUpdateManyMutationInput = {
    update_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type track_id_historyUncheckedUpdateManyInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    update_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type track_id_stockCreateInput = {
    locator_id: string
    key23: string
    product_id: string
    track_id: string
    quantity: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type track_id_stockUncheckedCreateInput = {
    locator_id: string
    key23: string
    product_id: string
    track_id: string
    quantity: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type track_id_stockUpdateInput = {
    locator_id?: StringFieldUpdateOperationsInput | string
    key23?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    track_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type track_id_stockUncheckedUpdateInput = {
    locator_id?: StringFieldUpdateOperationsInput | string
    key23?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    track_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type track_id_stockCreateManyInput = {
    locator_id: string
    key23: string
    product_id: string
    track_id: string
    quantity: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type track_id_stockUpdateManyMutationInput = {
    locator_id?: StringFieldUpdateOperationsInput | string
    key23?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    track_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type track_id_stockUncheckedUpdateManyInput = {
    locator_id?: StringFieldUpdateOperationsInput | string
    key23?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    track_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type inventory_move_draftOrg_idCreation_date_timeCompoundUniqueInput = {
    org_id: number
    creation_date_time: Date | string
  }

  export type inventory_move_draftCountOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    movement_id?: SortOrder
    data?: SortOrder
  }

  export type inventory_move_draftAvgOrderByAggregateInput = {
    org_id?: SortOrder
    movement_id?: SortOrder
  }

  export type inventory_move_draftMaxOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    movement_id?: SortOrder
  }

  export type inventory_move_draftMinOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    movement_id?: SortOrder
  }

  export type inventory_move_draftSumOrderByAggregateInput = {
    org_id?: SortOrder
    movement_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type shipment_draftOrg_idCreation_date_timeCompoundUniqueInput = {
    org_id: number
    creation_date_time: Date | string
  }

  export type shipment_draftCountOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    data?: SortOrder
  }

  export type shipment_draftAvgOrderByAggregateInput = {
    org_id?: SortOrder
    erp_id?: SortOrder
  }

  export type shipment_draftMaxOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
  }

  export type shipment_draftMinOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
  }

  export type shipment_draftSumOrderByAggregateInput = {
    org_id?: SortOrder
    erp_id?: SortOrder
  }

  export type production_single_product_draftOrg_idCreation_date_timeCompoundUniqueInput = {
    org_id: number
    creation_date_time: Date | string
  }

  export type production_single_product_draftCountOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    data?: SortOrder
  }

  export type production_single_product_draftAvgOrderByAggregateInput = {
    org_id?: SortOrder
    erp_id?: SortOrder
  }

  export type production_single_product_draftMaxOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
  }

  export type production_single_product_draftMinOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
  }

  export type production_single_product_draftSumOrderByAggregateInput = {
    org_id?: SortOrder
    erp_id?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Track_id_historyListRelationFilter = {
    every?: track_id_historyWhereInput
    some?: track_id_historyWhereInput
    none?: track_id_historyWhereInput
  }

  export type track_id_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type track_id_objectCountOrderByAggregateInput = {
    track_id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    track_type?: SortOrder
    creation_date_time?: SortOrder
    source_data?: SortOrder
    object_data?: SortOrder
  }

  export type track_id_objectAvgOrderByAggregateInput = {
    productId?: SortOrder
  }

  export type track_id_objectMaxOrderByAggregateInput = {
    track_id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    track_type?: SortOrder
    creation_date_time?: SortOrder
  }

  export type track_id_objectMinOrderByAggregateInput = {
    track_id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    track_type?: SortOrder
    creation_date_time?: SortOrder
  }

  export type track_id_objectSumOrderByAggregateInput = {
    productId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Track_id_objectRelationFilter = {
    is?: track_id_objectWhereInput
    isNot?: track_id_objectWhereInput
  }

  export type track_id_historyTrack_idUpdate_date_timeCompoundUniqueInput = {
    track_id: string
    update_date_time: Date | string
  }

  export type track_id_historyCountOrderByAggregateInput = {
    track_id?: SortOrder
    update_date_time?: SortOrder
    description?: SortOrder
    data?: SortOrder
  }

  export type track_id_historyMaxOrderByAggregateInput = {
    track_id?: SortOrder
    update_date_time?: SortOrder
    description?: SortOrder
  }

  export type track_id_historyMinOrderByAggregateInput = {
    track_id?: SortOrder
    update_date_time?: SortOrder
    description?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type track_id_stockLocator_idKey23CompoundUniqueInput = {
    locator_id: string
    key23: string
  }

  export type track_id_stockCountOrderByAggregateInput = {
    locator_id?: SortOrder
    key23?: SortOrder
    product_id?: SortOrder
    track_id?: SortOrder
    quantity?: SortOrder
    data?: SortOrder
  }

  export type track_id_stockAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type track_id_stockMaxOrderByAggregateInput = {
    locator_id?: SortOrder
    key23?: SortOrder
    product_id?: SortOrder
    track_id?: SortOrder
    quantity?: SortOrder
  }

  export type track_id_stockMinOrderByAggregateInput = {
    locator_id?: SortOrder
    key23?: SortOrder
    product_id?: SortOrder
    track_id?: SortOrder
    quantity?: SortOrder
  }

  export type track_id_stockSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type track_id_historyCreateNestedManyWithoutTrack_id_objectInput = {
    create?: XOR<track_id_historyCreateWithoutTrack_id_objectInput, track_id_historyUncheckedCreateWithoutTrack_id_objectInput> | track_id_historyCreateWithoutTrack_id_objectInput[] | track_id_historyUncheckedCreateWithoutTrack_id_objectInput[]
    connectOrCreate?: track_id_historyCreateOrConnectWithoutTrack_id_objectInput | track_id_historyCreateOrConnectWithoutTrack_id_objectInput[]
    createMany?: track_id_historyCreateManyTrack_id_objectInputEnvelope
    connect?: track_id_historyWhereUniqueInput | track_id_historyWhereUniqueInput[]
  }

  export type track_id_historyUncheckedCreateNestedManyWithoutTrack_id_objectInput = {
    create?: XOR<track_id_historyCreateWithoutTrack_id_objectInput, track_id_historyUncheckedCreateWithoutTrack_id_objectInput> | track_id_historyCreateWithoutTrack_id_objectInput[] | track_id_historyUncheckedCreateWithoutTrack_id_objectInput[]
    connectOrCreate?: track_id_historyCreateOrConnectWithoutTrack_id_objectInput | track_id_historyCreateOrConnectWithoutTrack_id_objectInput[]
    createMany?: track_id_historyCreateManyTrack_id_objectInputEnvelope
    connect?: track_id_historyWhereUniqueInput | track_id_historyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type track_id_historyUpdateManyWithoutTrack_id_objectNestedInput = {
    create?: XOR<track_id_historyCreateWithoutTrack_id_objectInput, track_id_historyUncheckedCreateWithoutTrack_id_objectInput> | track_id_historyCreateWithoutTrack_id_objectInput[] | track_id_historyUncheckedCreateWithoutTrack_id_objectInput[]
    connectOrCreate?: track_id_historyCreateOrConnectWithoutTrack_id_objectInput | track_id_historyCreateOrConnectWithoutTrack_id_objectInput[]
    upsert?: track_id_historyUpsertWithWhereUniqueWithoutTrack_id_objectInput | track_id_historyUpsertWithWhereUniqueWithoutTrack_id_objectInput[]
    createMany?: track_id_historyCreateManyTrack_id_objectInputEnvelope
    set?: track_id_historyWhereUniqueInput | track_id_historyWhereUniqueInput[]
    disconnect?: track_id_historyWhereUniqueInput | track_id_historyWhereUniqueInput[]
    delete?: track_id_historyWhereUniqueInput | track_id_historyWhereUniqueInput[]
    connect?: track_id_historyWhereUniqueInput | track_id_historyWhereUniqueInput[]
    update?: track_id_historyUpdateWithWhereUniqueWithoutTrack_id_objectInput | track_id_historyUpdateWithWhereUniqueWithoutTrack_id_objectInput[]
    updateMany?: track_id_historyUpdateManyWithWhereWithoutTrack_id_objectInput | track_id_historyUpdateManyWithWhereWithoutTrack_id_objectInput[]
    deleteMany?: track_id_historyScalarWhereInput | track_id_historyScalarWhereInput[]
  }

  export type track_id_historyUncheckedUpdateManyWithoutTrack_id_objectNestedInput = {
    create?: XOR<track_id_historyCreateWithoutTrack_id_objectInput, track_id_historyUncheckedCreateWithoutTrack_id_objectInput> | track_id_historyCreateWithoutTrack_id_objectInput[] | track_id_historyUncheckedCreateWithoutTrack_id_objectInput[]
    connectOrCreate?: track_id_historyCreateOrConnectWithoutTrack_id_objectInput | track_id_historyCreateOrConnectWithoutTrack_id_objectInput[]
    upsert?: track_id_historyUpsertWithWhereUniqueWithoutTrack_id_objectInput | track_id_historyUpsertWithWhereUniqueWithoutTrack_id_objectInput[]
    createMany?: track_id_historyCreateManyTrack_id_objectInputEnvelope
    set?: track_id_historyWhereUniqueInput | track_id_historyWhereUniqueInput[]
    disconnect?: track_id_historyWhereUniqueInput | track_id_historyWhereUniqueInput[]
    delete?: track_id_historyWhereUniqueInput | track_id_historyWhereUniqueInput[]
    connect?: track_id_historyWhereUniqueInput | track_id_historyWhereUniqueInput[]
    update?: track_id_historyUpdateWithWhereUniqueWithoutTrack_id_objectInput | track_id_historyUpdateWithWhereUniqueWithoutTrack_id_objectInput[]
    updateMany?: track_id_historyUpdateManyWithWhereWithoutTrack_id_objectInput | track_id_historyUpdateManyWithWhereWithoutTrack_id_objectInput[]
    deleteMany?: track_id_historyScalarWhereInput | track_id_historyScalarWhereInput[]
  }

  export type track_id_objectCreateNestedOneWithoutTrack_id_historyInput = {
    create?: XOR<track_id_objectCreateWithoutTrack_id_historyInput, track_id_objectUncheckedCreateWithoutTrack_id_historyInput>
    connectOrCreate?: track_id_objectCreateOrConnectWithoutTrack_id_historyInput
    connect?: track_id_objectWhereUniqueInput
  }

  export type track_id_objectUpdateOneRequiredWithoutTrack_id_historyNestedInput = {
    create?: XOR<track_id_objectCreateWithoutTrack_id_historyInput, track_id_objectUncheckedCreateWithoutTrack_id_historyInput>
    connectOrCreate?: track_id_objectCreateOrConnectWithoutTrack_id_historyInput
    upsert?: track_id_objectUpsertWithoutTrack_id_historyInput
    connect?: track_id_objectWhereUniqueInput
    update?: XOR<XOR<track_id_objectUpdateToOneWithWhereWithoutTrack_id_historyInput, track_id_objectUpdateWithoutTrack_id_historyInput>, track_id_objectUncheckedUpdateWithoutTrack_id_historyInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type track_id_historyCreateWithoutTrack_id_objectInput = {
    update_date_time?: Date | string
    description?: string
    data: JsonNullValueInput | InputJsonValue
  }

  export type track_id_historyUncheckedCreateWithoutTrack_id_objectInput = {
    update_date_time?: Date | string
    description?: string
    data: JsonNullValueInput | InputJsonValue
  }

  export type track_id_historyCreateOrConnectWithoutTrack_id_objectInput = {
    where: track_id_historyWhereUniqueInput
    create: XOR<track_id_historyCreateWithoutTrack_id_objectInput, track_id_historyUncheckedCreateWithoutTrack_id_objectInput>
  }

  export type track_id_historyCreateManyTrack_id_objectInputEnvelope = {
    data: track_id_historyCreateManyTrack_id_objectInput | track_id_historyCreateManyTrack_id_objectInput[]
    skipDuplicates?: boolean
  }

  export type track_id_historyUpsertWithWhereUniqueWithoutTrack_id_objectInput = {
    where: track_id_historyWhereUniqueInput
    update: XOR<track_id_historyUpdateWithoutTrack_id_objectInput, track_id_historyUncheckedUpdateWithoutTrack_id_objectInput>
    create: XOR<track_id_historyCreateWithoutTrack_id_objectInput, track_id_historyUncheckedCreateWithoutTrack_id_objectInput>
  }

  export type track_id_historyUpdateWithWhereUniqueWithoutTrack_id_objectInput = {
    where: track_id_historyWhereUniqueInput
    data: XOR<track_id_historyUpdateWithoutTrack_id_objectInput, track_id_historyUncheckedUpdateWithoutTrack_id_objectInput>
  }

  export type track_id_historyUpdateManyWithWhereWithoutTrack_id_objectInput = {
    where: track_id_historyScalarWhereInput
    data: XOR<track_id_historyUpdateManyMutationInput, track_id_historyUncheckedUpdateManyWithoutTrack_id_objectInput>
  }

  export type track_id_historyScalarWhereInput = {
    AND?: track_id_historyScalarWhereInput | track_id_historyScalarWhereInput[]
    OR?: track_id_historyScalarWhereInput[]
    NOT?: track_id_historyScalarWhereInput | track_id_historyScalarWhereInput[]
    track_id?: StringFilter<"track_id_history"> | string
    update_date_time?: DateTimeFilter<"track_id_history"> | Date | string
    description?: StringFilter<"track_id_history"> | string
    data?: JsonFilter<"track_id_history">
  }

  export type track_id_objectCreateWithoutTrack_id_historyInput = {
    track_id: string
    productId?: number
    productName?: string
    track_type: string
    creation_date_time?: Date | string
    source_data: JsonNullValueInput | InputJsonValue
    object_data: JsonNullValueInput | InputJsonValue
  }

  export type track_id_objectUncheckedCreateWithoutTrack_id_historyInput = {
    track_id: string
    productId?: number
    productName?: string
    track_type: string
    creation_date_time?: Date | string
    source_data: JsonNullValueInput | InputJsonValue
    object_data: JsonNullValueInput | InputJsonValue
  }

  export type track_id_objectCreateOrConnectWithoutTrack_id_historyInput = {
    where: track_id_objectWhereUniqueInput
    create: XOR<track_id_objectCreateWithoutTrack_id_historyInput, track_id_objectUncheckedCreateWithoutTrack_id_historyInput>
  }

  export type track_id_objectUpsertWithoutTrack_id_historyInput = {
    update: XOR<track_id_objectUpdateWithoutTrack_id_historyInput, track_id_objectUncheckedUpdateWithoutTrack_id_historyInput>
    create: XOR<track_id_objectCreateWithoutTrack_id_historyInput, track_id_objectUncheckedCreateWithoutTrack_id_historyInput>
    where?: track_id_objectWhereInput
  }

  export type track_id_objectUpdateToOneWithWhereWithoutTrack_id_historyInput = {
    where?: track_id_objectWhereInput
    data: XOR<track_id_objectUpdateWithoutTrack_id_historyInput, track_id_objectUncheckedUpdateWithoutTrack_id_historyInput>
  }

  export type track_id_objectUpdateWithoutTrack_id_historyInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
  }

  export type track_id_objectUncheckedUpdateWithoutTrack_id_historyInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
  }

  export type track_id_historyCreateManyTrack_id_objectInput = {
    update_date_time?: Date | string
    description?: string
    data: JsonNullValueInput | InputJsonValue
  }

  export type track_id_historyUpdateWithoutTrack_id_objectInput = {
    update_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type track_id_historyUncheckedUpdateWithoutTrack_id_objectInput = {
    update_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type track_id_historyUncheckedUpdateManyWithoutTrack_id_objectInput = {
    update_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use inventory_move_draftDefaultArgs instead
     */
    export type inventory_move_draftArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = inventory_move_draftDefaultArgs<ExtArgs>
    /**
     * @deprecated Use shipment_draftDefaultArgs instead
     */
    export type shipment_draftArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = shipment_draftDefaultArgs<ExtArgs>
    /**
     * @deprecated Use production_single_product_draftDefaultArgs instead
     */
    export type production_single_product_draftArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = production_single_product_draftDefaultArgs<ExtArgs>
    /**
     * @deprecated Use track_id_objectDefaultArgs instead
     */
    export type track_id_objectArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = track_id_objectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use track_id_historyDefaultArgs instead
     */
    export type track_id_historyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = track_id_historyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use track_id_stockDefaultArgs instead
     */
    export type track_id_stockArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = track_id_stockDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}