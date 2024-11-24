
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
 * Model material_receive_draft
 * 
 */
export type material_receive_draft = $Result.DefaultSelection<Prisma.$material_receive_draftPayload>
/**
 * Model production_single_product_draft
 * 
 */
export type production_single_product_draft = $Result.DefaultSelection<Prisma.$production_single_product_draftPayload>
/**
 * Model repair_job
 * 
 */
export type repair_job = $Result.DefaultSelection<Prisma.$repair_jobPayload>
/**
 * Model quality_check
 * 
 */
export type quality_check = $Result.DefaultSelection<Prisma.$quality_checkPayload>
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
   * `prisma.material_receive_draft`: Exposes CRUD operations for the **material_receive_draft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Material_receive_drafts
    * const material_receive_drafts = await prisma.material_receive_draft.findMany()
    * ```
    */
  get material_receive_draft(): Prisma.material_receive_draftDelegate<ExtArgs>;

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
   * `prisma.repair_job`: Exposes CRUD operations for the **repair_job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repair_jobs
    * const repair_jobs = await prisma.repair_job.findMany()
    * ```
    */
  get repair_job(): Prisma.repair_jobDelegate<ExtArgs>;

  /**
   * `prisma.quality_check`: Exposes CRUD operations for the **quality_check** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quality_checks
    * const quality_checks = await prisma.quality_check.findMany()
    * ```
    */
  get quality_check(): Prisma.quality_checkDelegate<ExtArgs>;

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
    material_receive_draft: 'material_receive_draft',
    production_single_product_draft: 'production_single_product_draft',
    repair_job: 'repair_job',
    quality_check: 'quality_check',
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
      modelProps: 'inventory_move_draft' | 'shipment_draft' | 'material_receive_draft' | 'production_single_product_draft' | 'repair_job' | 'quality_check' | 'track_id_object' | 'track_id_history' | 'track_id_stock'
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
      material_receive_draft: {
        payload: Prisma.$material_receive_draftPayload<ExtArgs>
        fields: Prisma.material_receive_draftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.material_receive_draftFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$material_receive_draftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.material_receive_draftFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$material_receive_draftPayload>
          }
          findFirst: {
            args: Prisma.material_receive_draftFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$material_receive_draftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.material_receive_draftFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$material_receive_draftPayload>
          }
          findMany: {
            args: Prisma.material_receive_draftFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$material_receive_draftPayload>[]
          }
          create: {
            args: Prisma.material_receive_draftCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$material_receive_draftPayload>
          }
          createMany: {
            args: Prisma.material_receive_draftCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.material_receive_draftDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$material_receive_draftPayload>
          }
          update: {
            args: Prisma.material_receive_draftUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$material_receive_draftPayload>
          }
          deleteMany: {
            args: Prisma.material_receive_draftDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.material_receive_draftUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.material_receive_draftUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$material_receive_draftPayload>
          }
          aggregate: {
            args: Prisma.Material_receive_draftAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMaterial_receive_draft>
          }
          groupBy: {
            args: Prisma.material_receive_draftGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Material_receive_draftGroupByOutputType>[]
          }
          count: {
            args: Prisma.material_receive_draftCountArgs<ExtArgs>,
            result: $Utils.Optional<Material_receive_draftCountAggregateOutputType> | number
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
      repair_job: {
        payload: Prisma.$repair_jobPayload<ExtArgs>
        fields: Prisma.repair_jobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.repair_jobFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repair_jobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.repair_jobFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repair_jobPayload>
          }
          findFirst: {
            args: Prisma.repair_jobFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repair_jobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.repair_jobFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repair_jobPayload>
          }
          findMany: {
            args: Prisma.repair_jobFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repair_jobPayload>[]
          }
          create: {
            args: Prisma.repair_jobCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repair_jobPayload>
          }
          createMany: {
            args: Prisma.repair_jobCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.repair_jobDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repair_jobPayload>
          }
          update: {
            args: Prisma.repair_jobUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repair_jobPayload>
          }
          deleteMany: {
            args: Prisma.repair_jobDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.repair_jobUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.repair_jobUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$repair_jobPayload>
          }
          aggregate: {
            args: Prisma.Repair_jobAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRepair_job>
          }
          groupBy: {
            args: Prisma.repair_jobGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Repair_jobGroupByOutputType>[]
          }
          count: {
            args: Prisma.repair_jobCountArgs<ExtArgs>,
            result: $Utils.Optional<Repair_jobCountAggregateOutputType> | number
          }
        }
      }
      quality_check: {
        payload: Prisma.$quality_checkPayload<ExtArgs>
        fields: Prisma.quality_checkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.quality_checkFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quality_checkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.quality_checkFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quality_checkPayload>
          }
          findFirst: {
            args: Prisma.quality_checkFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quality_checkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.quality_checkFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quality_checkPayload>
          }
          findMany: {
            args: Prisma.quality_checkFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quality_checkPayload>[]
          }
          create: {
            args: Prisma.quality_checkCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quality_checkPayload>
          }
          createMany: {
            args: Prisma.quality_checkCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.quality_checkDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quality_checkPayload>
          }
          update: {
            args: Prisma.quality_checkUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quality_checkPayload>
          }
          deleteMany: {
            args: Prisma.quality_checkDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.quality_checkUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.quality_checkUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quality_checkPayload>
          }
          aggregate: {
            args: Prisma.Quality_checkAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuality_check>
          }
          groupBy: {
            args: Prisma.quality_checkGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Quality_checkGroupByOutputType>[]
          }
          count: {
            args: Prisma.quality_checkCountArgs<ExtArgs>,
            result: $Utils.Optional<Quality_checkCountAggregateOutputType> | number
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
   * Count Type Repair_jobCountOutputType
   */

  export type Repair_jobCountOutputType = {
    quality_check_src: number
    production_single_src: number
  }

  export type Repair_jobCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    quality_check_src?: boolean | Repair_jobCountOutputTypeCountQuality_check_srcArgs
    production_single_src?: boolean | Repair_jobCountOutputTypeCountProduction_single_srcArgs
  }

  // Custom InputTypes

  /**
   * Repair_jobCountOutputType without action
   */
  export type Repair_jobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repair_jobCountOutputType
     */
    select?: Repair_jobCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Repair_jobCountOutputType without action
   */
  export type Repair_jobCountOutputTypeCountQuality_check_srcArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: quality_checkWhereInput
  }


  /**
   * Repair_jobCountOutputType without action
   */
  export type Repair_jobCountOutputTypeCountProduction_single_srcArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: production_single_product_draftWhereInput
  }



  /**
   * Count Type Track_id_objectCountOutputType
   */

  export type Track_id_objectCountOutputType = {
    track_id_history: number
    quality_check_used_in: number
  }

  export type Track_id_objectCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    track_id_history?: boolean | Track_id_objectCountOutputTypeCountTrack_id_historyArgs
    quality_check_used_in?: boolean | Track_id_objectCountOutputTypeCountQuality_check_used_inArgs
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
   * Track_id_objectCountOutputType without action
   */
  export type Track_id_objectCountOutputTypeCountQuality_check_used_inArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: quality_checkWhereInput
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
    production_single_scrap_imove?: boolean | inventory_move_draft$production_single_scrap_imoveArgs<ExtArgs>
    quality_check_scrap_imove?: boolean | inventory_move_draft$quality_check_scrap_imoveArgs<ExtArgs>
    repair_job_imove?: boolean | inventory_move_draft$repair_job_imoveArgs<ExtArgs>
  }, ExtArgs["result"]["inventory_move_draft"]>

  export type inventory_move_draftSelectScalar = {
    org_id?: boolean
    creation_date_time?: boolean
    movement_id?: boolean
    data?: boolean
  }

  export type inventory_move_draftInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    production_single_scrap_imove?: boolean | inventory_move_draft$production_single_scrap_imoveArgs<ExtArgs>
    quality_check_scrap_imove?: boolean | inventory_move_draft$quality_check_scrap_imoveArgs<ExtArgs>
    repair_job_imove?: boolean | inventory_move_draft$repair_job_imoveArgs<ExtArgs>
  }


  export type $inventory_move_draftPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "inventory_move_draft"
    objects: {
      production_single_scrap_imove: Prisma.$production_single_product_draftPayload<ExtArgs> | null
      quality_check_scrap_imove: Prisma.$quality_checkPayload<ExtArgs> | null
      repair_job_imove: Prisma.$repair_jobPayload<ExtArgs> | null
    }
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

    production_single_scrap_imove<T extends inventory_move_draft$production_single_scrap_imoveArgs<ExtArgs> = {}>(args?: Subset<T, inventory_move_draft$production_single_scrap_imoveArgs<ExtArgs>>): Prisma__production_single_product_draftClient<$Result.GetResult<Prisma.$production_single_product_draftPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    quality_check_scrap_imove<T extends inventory_move_draft$quality_check_scrap_imoveArgs<ExtArgs> = {}>(args?: Subset<T, inventory_move_draft$quality_check_scrap_imoveArgs<ExtArgs>>): Prisma__quality_checkClient<$Result.GetResult<Prisma.$quality_checkPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    repair_job_imove<T extends inventory_move_draft$repair_job_imoveArgs<ExtArgs> = {}>(args?: Subset<T, inventory_move_draft$repair_job_imoveArgs<ExtArgs>>): Prisma__repair_jobClient<$Result.GetResult<Prisma.$repair_jobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
     * Choose, which related nodes to fetch as well.
     */
    include?: inventory_move_draftInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: inventory_move_draftInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: inventory_move_draftInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: inventory_move_draftInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: inventory_move_draftInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: inventory_move_draftInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: inventory_move_draftInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: inventory_move_draftInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: inventory_move_draftInclude<ExtArgs> | null
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
   * inventory_move_draft.production_single_scrap_imove
   */
  export type inventory_move_draft$production_single_scrap_imoveArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_single_product_draft
     */
    select?: production_single_product_draftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: production_single_product_draftInclude<ExtArgs> | null
    where?: production_single_product_draftWhereInput
  }


  /**
   * inventory_move_draft.quality_check_scrap_imove
   */
  export type inventory_move_draft$quality_check_scrap_imoveArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quality_check
     */
    select?: quality_checkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quality_checkInclude<ExtArgs> | null
    where?: quality_checkWhereInput
  }


  /**
   * inventory_move_draft.repair_job_imove
   */
  export type inventory_move_draft$repair_job_imoveArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repair_job
     */
    select?: repair_jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: repair_jobInclude<ExtArgs> | null
    where?: repair_jobWhereInput
  }


  /**
   * inventory_move_draft without action
   */
  export type inventory_move_draftDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_move_draft
     */
    select?: inventory_move_draftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventory_move_draftInclude<ExtArgs> | null
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
    vendor_id: number | null
  }

  export type Shipment_draftSumAggregateOutputType = {
    org_id: number | null
    erp_id: number | null
    vendor_id: number | null
  }

  export type Shipment_draftMinAggregateOutputType = {
    org_id: number | null
    creation_date_time: Date | null
    erp_id: number | null
    vendor_id: number | null
  }

  export type Shipment_draftMaxAggregateOutputType = {
    org_id: number | null
    creation_date_time: Date | null
    erp_id: number | null
    vendor_id: number | null
  }

  export type Shipment_draftCountAggregateOutputType = {
    org_id: number
    creation_date_time: number
    erp_id: number
    vendor_id: number
    data: number
    _all: number
  }


  export type Shipment_draftAvgAggregateInputType = {
    org_id?: true
    erp_id?: true
    vendor_id?: true
  }

  export type Shipment_draftSumAggregateInputType = {
    org_id?: true
    erp_id?: true
    vendor_id?: true
  }

  export type Shipment_draftMinAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    erp_id?: true
    vendor_id?: true
  }

  export type Shipment_draftMaxAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    erp_id?: true
    vendor_id?: true
  }

  export type Shipment_draftCountAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    erp_id?: true
    vendor_id?: true
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
    vendor_id: number
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
    vendor_id?: boolean
    data?: boolean
  }, ExtArgs["result"]["shipment_draft"]>

  export type shipment_draftSelectScalar = {
    org_id?: boolean
    creation_date_time?: boolean
    erp_id?: boolean
    vendor_id?: boolean
    data?: boolean
  }


  export type $shipment_draftPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "shipment_draft"
    objects: {}
    scalars: $Extensions.GetResult<{
      org_id: number
      creation_date_time: Date
      erp_id: number
      vendor_id: number
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
    readonly vendor_id: FieldRef<"shipment_draft", 'Int'>
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
   * Model material_receive_draft
   */

  export type AggregateMaterial_receive_draft = {
    _count: Material_receive_draftCountAggregateOutputType | null
    _avg: Material_receive_draftAvgAggregateOutputType | null
    _sum: Material_receive_draftSumAggregateOutputType | null
    _min: Material_receive_draftMinAggregateOutputType | null
    _max: Material_receive_draftMaxAggregateOutputType | null
  }

  export type Material_receive_draftAvgAggregateOutputType = {
    org_id: number | null
    erp_id: number | null
    vendor_id: number | null
  }

  export type Material_receive_draftSumAggregateOutputType = {
    org_id: number | null
    erp_id: number | null
    vendor_id: number | null
  }

  export type Material_receive_draftMinAggregateOutputType = {
    org_id: number | null
    creation_date_time: Date | null
    erp_id: number | null
    vendor_id: number | null
  }

  export type Material_receive_draftMaxAggregateOutputType = {
    org_id: number | null
    creation_date_time: Date | null
    erp_id: number | null
    vendor_id: number | null
  }

  export type Material_receive_draftCountAggregateOutputType = {
    org_id: number
    creation_date_time: number
    erp_id: number
    vendor_id: number
    data: number
    _all: number
  }


  export type Material_receive_draftAvgAggregateInputType = {
    org_id?: true
    erp_id?: true
    vendor_id?: true
  }

  export type Material_receive_draftSumAggregateInputType = {
    org_id?: true
    erp_id?: true
    vendor_id?: true
  }

  export type Material_receive_draftMinAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    erp_id?: true
    vendor_id?: true
  }

  export type Material_receive_draftMaxAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    erp_id?: true
    vendor_id?: true
  }

  export type Material_receive_draftCountAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    erp_id?: true
    vendor_id?: true
    data?: true
    _all?: true
  }

  export type Material_receive_draftAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which material_receive_draft to aggregate.
     */
    where?: material_receive_draftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_receive_drafts to fetch.
     */
    orderBy?: material_receive_draftOrderByWithRelationInput | material_receive_draftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: material_receive_draftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_receive_drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_receive_drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned material_receive_drafts
    **/
    _count?: true | Material_receive_draftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Material_receive_draftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Material_receive_draftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Material_receive_draftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Material_receive_draftMaxAggregateInputType
  }

  export type GetMaterial_receive_draftAggregateType<T extends Material_receive_draftAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial_receive_draft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial_receive_draft[P]>
      : GetScalarType<T[P], AggregateMaterial_receive_draft[P]>
  }




  export type material_receive_draftGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: material_receive_draftWhereInput
    orderBy?: material_receive_draftOrderByWithAggregationInput | material_receive_draftOrderByWithAggregationInput[]
    by: Material_receive_draftScalarFieldEnum[] | Material_receive_draftScalarFieldEnum
    having?: material_receive_draftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Material_receive_draftCountAggregateInputType | true
    _avg?: Material_receive_draftAvgAggregateInputType
    _sum?: Material_receive_draftSumAggregateInputType
    _min?: Material_receive_draftMinAggregateInputType
    _max?: Material_receive_draftMaxAggregateInputType
  }

  export type Material_receive_draftGroupByOutputType = {
    org_id: number
    creation_date_time: Date
    erp_id: number
    vendor_id: number
    data: JsonValue
    _count: Material_receive_draftCountAggregateOutputType | null
    _avg: Material_receive_draftAvgAggregateOutputType | null
    _sum: Material_receive_draftSumAggregateOutputType | null
    _min: Material_receive_draftMinAggregateOutputType | null
    _max: Material_receive_draftMaxAggregateOutputType | null
  }

  type GetMaterial_receive_draftGroupByPayload<T extends material_receive_draftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Material_receive_draftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Material_receive_draftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Material_receive_draftGroupByOutputType[P]>
            : GetScalarType<T[P], Material_receive_draftGroupByOutputType[P]>
        }
      >
    >


  export type material_receive_draftSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    org_id?: boolean
    creation_date_time?: boolean
    erp_id?: boolean
    vendor_id?: boolean
    data?: boolean
  }, ExtArgs["result"]["material_receive_draft"]>

  export type material_receive_draftSelectScalar = {
    org_id?: boolean
    creation_date_time?: boolean
    erp_id?: boolean
    vendor_id?: boolean
    data?: boolean
  }


  export type $material_receive_draftPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "material_receive_draft"
    objects: {}
    scalars: $Extensions.GetResult<{
      org_id: number
      creation_date_time: Date
      erp_id: number
      vendor_id: number
      data: Prisma.JsonValue
    }, ExtArgs["result"]["material_receive_draft"]>
    composites: {}
  }


  type material_receive_draftGetPayload<S extends boolean | null | undefined | material_receive_draftDefaultArgs> = $Result.GetResult<Prisma.$material_receive_draftPayload, S>

  type material_receive_draftCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<material_receive_draftFindManyArgs, 'select' | 'include'> & {
      select?: Material_receive_draftCountAggregateInputType | true
    }

  export interface material_receive_draftDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['material_receive_draft'], meta: { name: 'material_receive_draft' } }
    /**
     * Find zero or one Material_receive_draft that matches the filter.
     * @param {material_receive_draftFindUniqueArgs} args - Arguments to find a Material_receive_draft
     * @example
     * // Get one Material_receive_draft
     * const material_receive_draft = await prisma.material_receive_draft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends material_receive_draftFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, material_receive_draftFindUniqueArgs<ExtArgs>>
    ): Prisma__material_receive_draftClient<$Result.GetResult<Prisma.$material_receive_draftPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Material_receive_draft that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {material_receive_draftFindUniqueOrThrowArgs} args - Arguments to find a Material_receive_draft
     * @example
     * // Get one Material_receive_draft
     * const material_receive_draft = await prisma.material_receive_draft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends material_receive_draftFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, material_receive_draftFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__material_receive_draftClient<$Result.GetResult<Prisma.$material_receive_draftPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Material_receive_draft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_receive_draftFindFirstArgs} args - Arguments to find a Material_receive_draft
     * @example
     * // Get one Material_receive_draft
     * const material_receive_draft = await prisma.material_receive_draft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends material_receive_draftFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, material_receive_draftFindFirstArgs<ExtArgs>>
    ): Prisma__material_receive_draftClient<$Result.GetResult<Prisma.$material_receive_draftPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Material_receive_draft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_receive_draftFindFirstOrThrowArgs} args - Arguments to find a Material_receive_draft
     * @example
     * // Get one Material_receive_draft
     * const material_receive_draft = await prisma.material_receive_draft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends material_receive_draftFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, material_receive_draftFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__material_receive_draftClient<$Result.GetResult<Prisma.$material_receive_draftPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Material_receive_drafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_receive_draftFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Material_receive_drafts
     * const material_receive_drafts = await prisma.material_receive_draft.findMany()
     * 
     * // Get first 10 Material_receive_drafts
     * const material_receive_drafts = await prisma.material_receive_draft.findMany({ take: 10 })
     * 
     * // Only select the `org_id`
     * const material_receive_draftWithOrg_idOnly = await prisma.material_receive_draft.findMany({ select: { org_id: true } })
     * 
    **/
    findMany<T extends material_receive_draftFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, material_receive_draftFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_receive_draftPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Material_receive_draft.
     * @param {material_receive_draftCreateArgs} args - Arguments to create a Material_receive_draft.
     * @example
     * // Create one Material_receive_draft
     * const Material_receive_draft = await prisma.material_receive_draft.create({
     *   data: {
     *     // ... data to create a Material_receive_draft
     *   }
     * })
     * 
    **/
    create<T extends material_receive_draftCreateArgs<ExtArgs>>(
      args: SelectSubset<T, material_receive_draftCreateArgs<ExtArgs>>
    ): Prisma__material_receive_draftClient<$Result.GetResult<Prisma.$material_receive_draftPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Material_receive_drafts.
     *     @param {material_receive_draftCreateManyArgs} args - Arguments to create many Material_receive_drafts.
     *     @example
     *     // Create many Material_receive_drafts
     *     const material_receive_draft = await prisma.material_receive_draft.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends material_receive_draftCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, material_receive_draftCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Material_receive_draft.
     * @param {material_receive_draftDeleteArgs} args - Arguments to delete one Material_receive_draft.
     * @example
     * // Delete one Material_receive_draft
     * const Material_receive_draft = await prisma.material_receive_draft.delete({
     *   where: {
     *     // ... filter to delete one Material_receive_draft
     *   }
     * })
     * 
    **/
    delete<T extends material_receive_draftDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, material_receive_draftDeleteArgs<ExtArgs>>
    ): Prisma__material_receive_draftClient<$Result.GetResult<Prisma.$material_receive_draftPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Material_receive_draft.
     * @param {material_receive_draftUpdateArgs} args - Arguments to update one Material_receive_draft.
     * @example
     * // Update one Material_receive_draft
     * const material_receive_draft = await prisma.material_receive_draft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends material_receive_draftUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, material_receive_draftUpdateArgs<ExtArgs>>
    ): Prisma__material_receive_draftClient<$Result.GetResult<Prisma.$material_receive_draftPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Material_receive_drafts.
     * @param {material_receive_draftDeleteManyArgs} args - Arguments to filter Material_receive_drafts to delete.
     * @example
     * // Delete a few Material_receive_drafts
     * const { count } = await prisma.material_receive_draft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends material_receive_draftDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, material_receive_draftDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Material_receive_drafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_receive_draftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Material_receive_drafts
     * const material_receive_draft = await prisma.material_receive_draft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends material_receive_draftUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, material_receive_draftUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Material_receive_draft.
     * @param {material_receive_draftUpsertArgs} args - Arguments to update or create a Material_receive_draft.
     * @example
     * // Update or create a Material_receive_draft
     * const material_receive_draft = await prisma.material_receive_draft.upsert({
     *   create: {
     *     // ... data to create a Material_receive_draft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material_receive_draft we want to update
     *   }
     * })
    **/
    upsert<T extends material_receive_draftUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, material_receive_draftUpsertArgs<ExtArgs>>
    ): Prisma__material_receive_draftClient<$Result.GetResult<Prisma.$material_receive_draftPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Material_receive_drafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_receive_draftCountArgs} args - Arguments to filter Material_receive_drafts to count.
     * @example
     * // Count the number of Material_receive_drafts
     * const count = await prisma.material_receive_draft.count({
     *   where: {
     *     // ... the filter for the Material_receive_drafts we want to count
     *   }
     * })
    **/
    count<T extends material_receive_draftCountArgs>(
      args?: Subset<T, material_receive_draftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Material_receive_draftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material_receive_draft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_receive_draftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Material_receive_draftAggregateArgs>(args: Subset<T, Material_receive_draftAggregateArgs>): Prisma.PrismaPromise<GetMaterial_receive_draftAggregateType<T>>

    /**
     * Group by Material_receive_draft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_receive_draftGroupByArgs} args - Group by arguments.
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
      T extends material_receive_draftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: material_receive_draftGroupByArgs['orderBy'] }
        : { orderBy?: material_receive_draftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, material_receive_draftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterial_receive_draftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the material_receive_draft model
   */
  readonly fields: material_receive_draftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for material_receive_draft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__material_receive_draftClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the material_receive_draft model
   */ 
  interface material_receive_draftFieldRefs {
    readonly org_id: FieldRef<"material_receive_draft", 'Int'>
    readonly creation_date_time: FieldRef<"material_receive_draft", 'DateTime'>
    readonly erp_id: FieldRef<"material_receive_draft", 'Int'>
    readonly vendor_id: FieldRef<"material_receive_draft", 'Int'>
    readonly data: FieldRef<"material_receive_draft", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * material_receive_draft findUnique
   */
  export type material_receive_draftFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_receive_draft
     */
    select?: material_receive_draftSelect<ExtArgs> | null
    /**
     * Filter, which material_receive_draft to fetch.
     */
    where: material_receive_draftWhereUniqueInput
  }


  /**
   * material_receive_draft findUniqueOrThrow
   */
  export type material_receive_draftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_receive_draft
     */
    select?: material_receive_draftSelect<ExtArgs> | null
    /**
     * Filter, which material_receive_draft to fetch.
     */
    where: material_receive_draftWhereUniqueInput
  }


  /**
   * material_receive_draft findFirst
   */
  export type material_receive_draftFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_receive_draft
     */
    select?: material_receive_draftSelect<ExtArgs> | null
    /**
     * Filter, which material_receive_draft to fetch.
     */
    where?: material_receive_draftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_receive_drafts to fetch.
     */
    orderBy?: material_receive_draftOrderByWithRelationInput | material_receive_draftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for material_receive_drafts.
     */
    cursor?: material_receive_draftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_receive_drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_receive_drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of material_receive_drafts.
     */
    distinct?: Material_receive_draftScalarFieldEnum | Material_receive_draftScalarFieldEnum[]
  }


  /**
   * material_receive_draft findFirstOrThrow
   */
  export type material_receive_draftFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_receive_draft
     */
    select?: material_receive_draftSelect<ExtArgs> | null
    /**
     * Filter, which material_receive_draft to fetch.
     */
    where?: material_receive_draftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_receive_drafts to fetch.
     */
    orderBy?: material_receive_draftOrderByWithRelationInput | material_receive_draftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for material_receive_drafts.
     */
    cursor?: material_receive_draftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_receive_drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_receive_drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of material_receive_drafts.
     */
    distinct?: Material_receive_draftScalarFieldEnum | Material_receive_draftScalarFieldEnum[]
  }


  /**
   * material_receive_draft findMany
   */
  export type material_receive_draftFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_receive_draft
     */
    select?: material_receive_draftSelect<ExtArgs> | null
    /**
     * Filter, which material_receive_drafts to fetch.
     */
    where?: material_receive_draftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_receive_drafts to fetch.
     */
    orderBy?: material_receive_draftOrderByWithRelationInput | material_receive_draftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing material_receive_drafts.
     */
    cursor?: material_receive_draftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_receive_drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_receive_drafts.
     */
    skip?: number
    distinct?: Material_receive_draftScalarFieldEnum | Material_receive_draftScalarFieldEnum[]
  }


  /**
   * material_receive_draft create
   */
  export type material_receive_draftCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_receive_draft
     */
    select?: material_receive_draftSelect<ExtArgs> | null
    /**
     * The data needed to create a material_receive_draft.
     */
    data: XOR<material_receive_draftCreateInput, material_receive_draftUncheckedCreateInput>
  }


  /**
   * material_receive_draft createMany
   */
  export type material_receive_draftCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many material_receive_drafts.
     */
    data: material_receive_draftCreateManyInput | material_receive_draftCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * material_receive_draft update
   */
  export type material_receive_draftUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_receive_draft
     */
    select?: material_receive_draftSelect<ExtArgs> | null
    /**
     * The data needed to update a material_receive_draft.
     */
    data: XOR<material_receive_draftUpdateInput, material_receive_draftUncheckedUpdateInput>
    /**
     * Choose, which material_receive_draft to update.
     */
    where: material_receive_draftWhereUniqueInput
  }


  /**
   * material_receive_draft updateMany
   */
  export type material_receive_draftUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update material_receive_drafts.
     */
    data: XOR<material_receive_draftUpdateManyMutationInput, material_receive_draftUncheckedUpdateManyInput>
    /**
     * Filter which material_receive_drafts to update
     */
    where?: material_receive_draftWhereInput
  }


  /**
   * material_receive_draft upsert
   */
  export type material_receive_draftUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_receive_draft
     */
    select?: material_receive_draftSelect<ExtArgs> | null
    /**
     * The filter to search for the material_receive_draft to update in case it exists.
     */
    where: material_receive_draftWhereUniqueInput
    /**
     * In case the material_receive_draft found by the `where` argument doesn't exist, create a new material_receive_draft with this data.
     */
    create: XOR<material_receive_draftCreateInput, material_receive_draftUncheckedCreateInput>
    /**
     * In case the material_receive_draft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<material_receive_draftUpdateInput, material_receive_draftUncheckedUpdateInput>
  }


  /**
   * material_receive_draft delete
   */
  export type material_receive_draftDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_receive_draft
     */
    select?: material_receive_draftSelect<ExtArgs> | null
    /**
     * Filter which material_receive_draft to delete.
     */
    where: material_receive_draftWhereUniqueInput
  }


  /**
   * material_receive_draft deleteMany
   */
  export type material_receive_draftDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which material_receive_drafts to delete
     */
    where?: material_receive_draftWhereInput
  }


  /**
   * material_receive_draft without action
   */
  export type material_receive_draftDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_receive_draft
     */
    select?: material_receive_draftSelect<ExtArgs> | null
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
    total_ok: number | null
    total_ng_scrap: number | null
    imove_scrap_id: number | null
    total_ng_repair: number | null
  }

  export type Production_single_product_draftSumAggregateOutputType = {
    org_id: number | null
    erp_id: number | null
    total_ok: number | null
    total_ng_scrap: number | null
    imove_scrap_id: number | null
    total_ng_repair: number | null
  }

  export type Production_single_product_draftMinAggregateOutputType = {
    org_id: number | null
    creation_date_time: Date | null
    erp_id: number | null
    track_id: string | null
    total_ok: number | null
    scrap_reason: string | null
    total_ng_scrap: number | null
    imove_scrap_id: number | null
    repair_reason: string | null
    total_ng_repair: number | null
    repair_job_id: string | null
  }

  export type Production_single_product_draftMaxAggregateOutputType = {
    org_id: number | null
    creation_date_time: Date | null
    erp_id: number | null
    track_id: string | null
    total_ok: number | null
    scrap_reason: string | null
    total_ng_scrap: number | null
    imove_scrap_id: number | null
    repair_reason: string | null
    total_ng_repair: number | null
    repair_job_id: string | null
  }

  export type Production_single_product_draftCountAggregateOutputType = {
    org_id: number
    creation_date_time: number
    erp_id: number
    data: number
    track_id: number
    total_ok: number
    scrap_reason: number
    total_ng_scrap: number
    imove_scrap_id: number
    repair_reason: number
    total_ng_repair: number
    repair_job_id: number
    _all: number
  }


  export type Production_single_product_draftAvgAggregateInputType = {
    org_id?: true
    erp_id?: true
    total_ok?: true
    total_ng_scrap?: true
    imove_scrap_id?: true
    total_ng_repair?: true
  }

  export type Production_single_product_draftSumAggregateInputType = {
    org_id?: true
    erp_id?: true
    total_ok?: true
    total_ng_scrap?: true
    imove_scrap_id?: true
    total_ng_repair?: true
  }

  export type Production_single_product_draftMinAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    erp_id?: true
    track_id?: true
    total_ok?: true
    scrap_reason?: true
    total_ng_scrap?: true
    imove_scrap_id?: true
    repair_reason?: true
    total_ng_repair?: true
    repair_job_id?: true
  }

  export type Production_single_product_draftMaxAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    erp_id?: true
    track_id?: true
    total_ok?: true
    scrap_reason?: true
    total_ng_scrap?: true
    imove_scrap_id?: true
    repair_reason?: true
    total_ng_repair?: true
    repair_job_id?: true
  }

  export type Production_single_product_draftCountAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    erp_id?: true
    data?: true
    track_id?: true
    total_ok?: true
    scrap_reason?: true
    total_ng_scrap?: true
    imove_scrap_id?: true
    repair_reason?: true
    total_ng_repair?: true
    repair_job_id?: true
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
    track_id: string
    total_ok: number
    scrap_reason: string
    total_ng_scrap: number
    imove_scrap_id: number | null
    repair_reason: string
    total_ng_repair: number
    repair_job_id: string | null
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
    track_id?: boolean
    total_ok?: boolean
    scrap_reason?: boolean
    total_ng_scrap?: boolean
    imove_scrap_id?: boolean
    repair_reason?: boolean
    total_ng_repair?: boolean
    repair_job_id?: boolean
    track_id_object?: boolean | track_id_objectDefaultArgs<ExtArgs>
    imove_scrap_obj?: boolean | production_single_product_draft$imove_scrap_objArgs<ExtArgs>
    repair_job?: boolean | production_single_product_draft$repair_jobArgs<ExtArgs>
  }, ExtArgs["result"]["production_single_product_draft"]>

  export type production_single_product_draftSelectScalar = {
    org_id?: boolean
    creation_date_time?: boolean
    erp_id?: boolean
    data?: boolean
    track_id?: boolean
    total_ok?: boolean
    scrap_reason?: boolean
    total_ng_scrap?: boolean
    imove_scrap_id?: boolean
    repair_reason?: boolean
    total_ng_repair?: boolean
    repair_job_id?: boolean
  }

  export type production_single_product_draftInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    track_id_object?: boolean | track_id_objectDefaultArgs<ExtArgs>
    imove_scrap_obj?: boolean | production_single_product_draft$imove_scrap_objArgs<ExtArgs>
    repair_job?: boolean | production_single_product_draft$repair_jobArgs<ExtArgs>
  }


  export type $production_single_product_draftPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "production_single_product_draft"
    objects: {
      track_id_object: Prisma.$track_id_objectPayload<ExtArgs>
      imove_scrap_obj: Prisma.$inventory_move_draftPayload<ExtArgs> | null
      repair_job: Prisma.$repair_jobPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      org_id: number
      creation_date_time: Date
      erp_id: number
      data: Prisma.JsonValue
      track_id: string
      total_ok: number
      scrap_reason: string
      total_ng_scrap: number
      imove_scrap_id: number | null
      repair_reason: string
      total_ng_repair: number
      repair_job_id: string | null
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

    track_id_object<T extends track_id_objectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, track_id_objectDefaultArgs<ExtArgs>>): Prisma__track_id_objectClient<$Result.GetResult<Prisma.$track_id_objectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    imove_scrap_obj<T extends production_single_product_draft$imove_scrap_objArgs<ExtArgs> = {}>(args?: Subset<T, production_single_product_draft$imove_scrap_objArgs<ExtArgs>>): Prisma__inventory_move_draftClient<$Result.GetResult<Prisma.$inventory_move_draftPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    repair_job<T extends production_single_product_draft$repair_jobArgs<ExtArgs> = {}>(args?: Subset<T, production_single_product_draft$repair_jobArgs<ExtArgs>>): Prisma__repair_jobClient<$Result.GetResult<Prisma.$repair_jobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
    readonly track_id: FieldRef<"production_single_product_draft", 'String'>
    readonly total_ok: FieldRef<"production_single_product_draft", 'Float'>
    readonly scrap_reason: FieldRef<"production_single_product_draft", 'String'>
    readonly total_ng_scrap: FieldRef<"production_single_product_draft", 'Float'>
    readonly imove_scrap_id: FieldRef<"production_single_product_draft", 'Int'>
    readonly repair_reason: FieldRef<"production_single_product_draft", 'String'>
    readonly total_ng_repair: FieldRef<"production_single_product_draft", 'Float'>
    readonly repair_job_id: FieldRef<"production_single_product_draft", 'String'>
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
     * Choose, which related nodes to fetch as well.
     */
    include?: production_single_product_draftInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: production_single_product_draftInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: production_single_product_draftInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: production_single_product_draftInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: production_single_product_draftInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: production_single_product_draftInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: production_single_product_draftInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: production_single_product_draftInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: production_single_product_draftInclude<ExtArgs> | null
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
   * production_single_product_draft.imove_scrap_obj
   */
  export type production_single_product_draft$imove_scrap_objArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_move_draft
     */
    select?: inventory_move_draftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventory_move_draftInclude<ExtArgs> | null
    where?: inventory_move_draftWhereInput
  }


  /**
   * production_single_product_draft.repair_job
   */
  export type production_single_product_draft$repair_jobArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repair_job
     */
    select?: repair_jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: repair_jobInclude<ExtArgs> | null
    where?: repair_jobWhereInput
  }


  /**
   * production_single_product_draft without action
   */
  export type production_single_product_draftDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_single_product_draft
     */
    select?: production_single_product_draftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: production_single_product_draftInclude<ExtArgs> | null
  }



  /**
   * Model repair_job
   */

  export type AggregateRepair_job = {
    _count: Repair_jobCountAggregateOutputType | null
    _avg: Repair_jobAvgAggregateOutputType | null
    _sum: Repair_jobSumAggregateOutputType | null
    _min: Repair_jobMinAggregateOutputType | null
    _max: Repair_jobMaxAggregateOutputType | null
  }

  export type Repair_jobAvgAggregateOutputType = {
    org_id: number | null
    imove_repair_id: number | null
    starting_locator_id: number | null
    quantity: number | null
  }

  export type Repair_jobSumAggregateOutputType = {
    org_id: number | null
    imove_repair_id: number | null
    starting_locator_id: number | null
    quantity: number | null
  }

  export type Repair_jobMinAggregateOutputType = {
    org_id: number | null
    creation_date_time: Date | null
    track_id: string | null
    imove_repair_id: number | null
    starting_locator_id: number | null
    repair_status: string | null
    description: string | null
    quantity: number | null
  }

  export type Repair_jobMaxAggregateOutputType = {
    org_id: number | null
    creation_date_time: Date | null
    track_id: string | null
    imove_repair_id: number | null
    starting_locator_id: number | null
    repair_status: string | null
    description: string | null
    quantity: number | null
  }

  export type Repair_jobCountAggregateOutputType = {
    org_id: number
    creation_date_time: number
    track_id: number
    imove_repair_id: number
    starting_locator_id: number
    repair_status: number
    description: number
    quantity: number
    _all: number
  }


  export type Repair_jobAvgAggregateInputType = {
    org_id?: true
    imove_repair_id?: true
    starting_locator_id?: true
    quantity?: true
  }

  export type Repair_jobSumAggregateInputType = {
    org_id?: true
    imove_repair_id?: true
    starting_locator_id?: true
    quantity?: true
  }

  export type Repair_jobMinAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    track_id?: true
    imove_repair_id?: true
    starting_locator_id?: true
    repair_status?: true
    description?: true
    quantity?: true
  }

  export type Repair_jobMaxAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    track_id?: true
    imove_repair_id?: true
    starting_locator_id?: true
    repair_status?: true
    description?: true
    quantity?: true
  }

  export type Repair_jobCountAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    track_id?: true
    imove_repair_id?: true
    starting_locator_id?: true
    repair_status?: true
    description?: true
    quantity?: true
    _all?: true
  }

  export type Repair_jobAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which repair_job to aggregate.
     */
    where?: repair_jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repair_jobs to fetch.
     */
    orderBy?: repair_jobOrderByWithRelationInput | repair_jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: repair_jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repair_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repair_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned repair_jobs
    **/
    _count?: true | Repair_jobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Repair_jobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Repair_jobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Repair_jobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Repair_jobMaxAggregateInputType
  }

  export type GetRepair_jobAggregateType<T extends Repair_jobAggregateArgs> = {
        [P in keyof T & keyof AggregateRepair_job]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepair_job[P]>
      : GetScalarType<T[P], AggregateRepair_job[P]>
  }




  export type repair_jobGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: repair_jobWhereInput
    orderBy?: repair_jobOrderByWithAggregationInput | repair_jobOrderByWithAggregationInput[]
    by: Repair_jobScalarFieldEnum[] | Repair_jobScalarFieldEnum
    having?: repair_jobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Repair_jobCountAggregateInputType | true
    _avg?: Repair_jobAvgAggregateInputType
    _sum?: Repair_jobSumAggregateInputType
    _min?: Repair_jobMinAggregateInputType
    _max?: Repair_jobMaxAggregateInputType
  }

  export type Repair_jobGroupByOutputType = {
    org_id: number
    creation_date_time: Date
    track_id: string
    imove_repair_id: number | null
    starting_locator_id: number
    repair_status: string
    description: string
    quantity: number
    _count: Repair_jobCountAggregateOutputType | null
    _avg: Repair_jobAvgAggregateOutputType | null
    _sum: Repair_jobSumAggregateOutputType | null
    _min: Repair_jobMinAggregateOutputType | null
    _max: Repair_jobMaxAggregateOutputType | null
  }

  type GetRepair_jobGroupByPayload<T extends repair_jobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Repair_jobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Repair_jobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Repair_jobGroupByOutputType[P]>
            : GetScalarType<T[P], Repair_jobGroupByOutputType[P]>
        }
      >
    >


  export type repair_jobSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    org_id?: boolean
    creation_date_time?: boolean
    track_id?: boolean
    imove_repair_id?: boolean
    starting_locator_id?: boolean
    repair_status?: boolean
    description?: boolean
    quantity?: boolean
    track_id_object?: boolean | track_id_objectDefaultArgs<ExtArgs>
    imove_repair_obj?: boolean | repair_job$imove_repair_objArgs<ExtArgs>
    quality_check_src?: boolean | repair_job$quality_check_srcArgs<ExtArgs>
    production_single_src?: boolean | repair_job$production_single_srcArgs<ExtArgs>
    _count?: boolean | Repair_jobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repair_job"]>

  export type repair_jobSelectScalar = {
    org_id?: boolean
    creation_date_time?: boolean
    track_id?: boolean
    imove_repair_id?: boolean
    starting_locator_id?: boolean
    repair_status?: boolean
    description?: boolean
    quantity?: boolean
  }

  export type repair_jobInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    track_id_object?: boolean | track_id_objectDefaultArgs<ExtArgs>
    imove_repair_obj?: boolean | repair_job$imove_repair_objArgs<ExtArgs>
    quality_check_src?: boolean | repair_job$quality_check_srcArgs<ExtArgs>
    production_single_src?: boolean | repair_job$production_single_srcArgs<ExtArgs>
    _count?: boolean | Repair_jobCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $repair_jobPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "repair_job"
    objects: {
      track_id_object: Prisma.$track_id_objectPayload<ExtArgs>
      imove_repair_obj: Prisma.$inventory_move_draftPayload<ExtArgs> | null
      quality_check_src: Prisma.$quality_checkPayload<ExtArgs>[]
      production_single_src: Prisma.$production_single_product_draftPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      org_id: number
      creation_date_time: Date
      track_id: string
      imove_repair_id: number | null
      starting_locator_id: number
      repair_status: string
      description: string
      quantity: number
    }, ExtArgs["result"]["repair_job"]>
    composites: {}
  }


  type repair_jobGetPayload<S extends boolean | null | undefined | repair_jobDefaultArgs> = $Result.GetResult<Prisma.$repair_jobPayload, S>

  type repair_jobCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<repair_jobFindManyArgs, 'select' | 'include'> & {
      select?: Repair_jobCountAggregateInputType | true
    }

  export interface repair_jobDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['repair_job'], meta: { name: 'repair_job' } }
    /**
     * Find zero or one Repair_job that matches the filter.
     * @param {repair_jobFindUniqueArgs} args - Arguments to find a Repair_job
     * @example
     * // Get one Repair_job
     * const repair_job = await prisma.repair_job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends repair_jobFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, repair_jobFindUniqueArgs<ExtArgs>>
    ): Prisma__repair_jobClient<$Result.GetResult<Prisma.$repair_jobPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Repair_job that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {repair_jobFindUniqueOrThrowArgs} args - Arguments to find a Repair_job
     * @example
     * // Get one Repair_job
     * const repair_job = await prisma.repair_job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends repair_jobFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, repair_jobFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__repair_jobClient<$Result.GetResult<Prisma.$repair_jobPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Repair_job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repair_jobFindFirstArgs} args - Arguments to find a Repair_job
     * @example
     * // Get one Repair_job
     * const repair_job = await prisma.repair_job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends repair_jobFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, repair_jobFindFirstArgs<ExtArgs>>
    ): Prisma__repair_jobClient<$Result.GetResult<Prisma.$repair_jobPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Repair_job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repair_jobFindFirstOrThrowArgs} args - Arguments to find a Repair_job
     * @example
     * // Get one Repair_job
     * const repair_job = await prisma.repair_job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends repair_jobFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, repair_jobFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__repair_jobClient<$Result.GetResult<Prisma.$repair_jobPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Repair_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repair_jobFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repair_jobs
     * const repair_jobs = await prisma.repair_job.findMany()
     * 
     * // Get first 10 Repair_jobs
     * const repair_jobs = await prisma.repair_job.findMany({ take: 10 })
     * 
     * // Only select the `org_id`
     * const repair_jobWithOrg_idOnly = await prisma.repair_job.findMany({ select: { org_id: true } })
     * 
    **/
    findMany<T extends repair_jobFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, repair_jobFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repair_jobPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Repair_job.
     * @param {repair_jobCreateArgs} args - Arguments to create a Repair_job.
     * @example
     * // Create one Repair_job
     * const Repair_job = await prisma.repair_job.create({
     *   data: {
     *     // ... data to create a Repair_job
     *   }
     * })
     * 
    **/
    create<T extends repair_jobCreateArgs<ExtArgs>>(
      args: SelectSubset<T, repair_jobCreateArgs<ExtArgs>>
    ): Prisma__repair_jobClient<$Result.GetResult<Prisma.$repair_jobPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Repair_jobs.
     *     @param {repair_jobCreateManyArgs} args - Arguments to create many Repair_jobs.
     *     @example
     *     // Create many Repair_jobs
     *     const repair_job = await prisma.repair_job.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends repair_jobCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, repair_jobCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Repair_job.
     * @param {repair_jobDeleteArgs} args - Arguments to delete one Repair_job.
     * @example
     * // Delete one Repair_job
     * const Repair_job = await prisma.repair_job.delete({
     *   where: {
     *     // ... filter to delete one Repair_job
     *   }
     * })
     * 
    **/
    delete<T extends repair_jobDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, repair_jobDeleteArgs<ExtArgs>>
    ): Prisma__repair_jobClient<$Result.GetResult<Prisma.$repair_jobPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Repair_job.
     * @param {repair_jobUpdateArgs} args - Arguments to update one Repair_job.
     * @example
     * // Update one Repair_job
     * const repair_job = await prisma.repair_job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends repair_jobUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, repair_jobUpdateArgs<ExtArgs>>
    ): Prisma__repair_jobClient<$Result.GetResult<Prisma.$repair_jobPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Repair_jobs.
     * @param {repair_jobDeleteManyArgs} args - Arguments to filter Repair_jobs to delete.
     * @example
     * // Delete a few Repair_jobs
     * const { count } = await prisma.repair_job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends repair_jobDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, repair_jobDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repair_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repair_jobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repair_jobs
     * const repair_job = await prisma.repair_job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends repair_jobUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, repair_jobUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Repair_job.
     * @param {repair_jobUpsertArgs} args - Arguments to update or create a Repair_job.
     * @example
     * // Update or create a Repair_job
     * const repair_job = await prisma.repair_job.upsert({
     *   create: {
     *     // ... data to create a Repair_job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repair_job we want to update
     *   }
     * })
    **/
    upsert<T extends repair_jobUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, repair_jobUpsertArgs<ExtArgs>>
    ): Prisma__repair_jobClient<$Result.GetResult<Prisma.$repair_jobPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Repair_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repair_jobCountArgs} args - Arguments to filter Repair_jobs to count.
     * @example
     * // Count the number of Repair_jobs
     * const count = await prisma.repair_job.count({
     *   where: {
     *     // ... the filter for the Repair_jobs we want to count
     *   }
     * })
    **/
    count<T extends repair_jobCountArgs>(
      args?: Subset<T, repair_jobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Repair_jobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repair_job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Repair_jobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Repair_jobAggregateArgs>(args: Subset<T, Repair_jobAggregateArgs>): Prisma.PrismaPromise<GetRepair_jobAggregateType<T>>

    /**
     * Group by Repair_job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repair_jobGroupByArgs} args - Group by arguments.
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
      T extends repair_jobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: repair_jobGroupByArgs['orderBy'] }
        : { orderBy?: repair_jobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, repair_jobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepair_jobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the repair_job model
   */
  readonly fields: repair_jobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for repair_job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__repair_jobClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    track_id_object<T extends track_id_objectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, track_id_objectDefaultArgs<ExtArgs>>): Prisma__track_id_objectClient<$Result.GetResult<Prisma.$track_id_objectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    imove_repair_obj<T extends repair_job$imove_repair_objArgs<ExtArgs> = {}>(args?: Subset<T, repair_job$imove_repair_objArgs<ExtArgs>>): Prisma__inventory_move_draftClient<$Result.GetResult<Prisma.$inventory_move_draftPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    quality_check_src<T extends repair_job$quality_check_srcArgs<ExtArgs> = {}>(args?: Subset<T, repair_job$quality_check_srcArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quality_checkPayload<ExtArgs>, T, 'findMany'> | Null>;

    production_single_src<T extends repair_job$production_single_srcArgs<ExtArgs> = {}>(args?: Subset<T, repair_job$production_single_srcArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$production_single_product_draftPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the repair_job model
   */ 
  interface repair_jobFieldRefs {
    readonly org_id: FieldRef<"repair_job", 'Int'>
    readonly creation_date_time: FieldRef<"repair_job", 'DateTime'>
    readonly track_id: FieldRef<"repair_job", 'String'>
    readonly imove_repair_id: FieldRef<"repair_job", 'Int'>
    readonly starting_locator_id: FieldRef<"repair_job", 'Int'>
    readonly repair_status: FieldRef<"repair_job", 'String'>
    readonly description: FieldRef<"repair_job", 'String'>
    readonly quantity: FieldRef<"repair_job", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * repair_job findUnique
   */
  export type repair_jobFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repair_job
     */
    select?: repair_jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: repair_jobInclude<ExtArgs> | null
    /**
     * Filter, which repair_job to fetch.
     */
    where: repair_jobWhereUniqueInput
  }


  /**
   * repair_job findUniqueOrThrow
   */
  export type repair_jobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repair_job
     */
    select?: repair_jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: repair_jobInclude<ExtArgs> | null
    /**
     * Filter, which repair_job to fetch.
     */
    where: repair_jobWhereUniqueInput
  }


  /**
   * repair_job findFirst
   */
  export type repair_jobFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repair_job
     */
    select?: repair_jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: repair_jobInclude<ExtArgs> | null
    /**
     * Filter, which repair_job to fetch.
     */
    where?: repair_jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repair_jobs to fetch.
     */
    orderBy?: repair_jobOrderByWithRelationInput | repair_jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for repair_jobs.
     */
    cursor?: repair_jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repair_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repair_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of repair_jobs.
     */
    distinct?: Repair_jobScalarFieldEnum | Repair_jobScalarFieldEnum[]
  }


  /**
   * repair_job findFirstOrThrow
   */
  export type repair_jobFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repair_job
     */
    select?: repair_jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: repair_jobInclude<ExtArgs> | null
    /**
     * Filter, which repair_job to fetch.
     */
    where?: repair_jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repair_jobs to fetch.
     */
    orderBy?: repair_jobOrderByWithRelationInput | repair_jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for repair_jobs.
     */
    cursor?: repair_jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repair_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repair_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of repair_jobs.
     */
    distinct?: Repair_jobScalarFieldEnum | Repair_jobScalarFieldEnum[]
  }


  /**
   * repair_job findMany
   */
  export type repair_jobFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repair_job
     */
    select?: repair_jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: repair_jobInclude<ExtArgs> | null
    /**
     * Filter, which repair_jobs to fetch.
     */
    where?: repair_jobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repair_jobs to fetch.
     */
    orderBy?: repair_jobOrderByWithRelationInput | repair_jobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing repair_jobs.
     */
    cursor?: repair_jobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repair_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repair_jobs.
     */
    skip?: number
    distinct?: Repair_jobScalarFieldEnum | Repair_jobScalarFieldEnum[]
  }


  /**
   * repair_job create
   */
  export type repair_jobCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repair_job
     */
    select?: repair_jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: repair_jobInclude<ExtArgs> | null
    /**
     * The data needed to create a repair_job.
     */
    data: XOR<repair_jobCreateInput, repair_jobUncheckedCreateInput>
  }


  /**
   * repair_job createMany
   */
  export type repair_jobCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many repair_jobs.
     */
    data: repair_jobCreateManyInput | repair_jobCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * repair_job update
   */
  export type repair_jobUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repair_job
     */
    select?: repair_jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: repair_jobInclude<ExtArgs> | null
    /**
     * The data needed to update a repair_job.
     */
    data: XOR<repair_jobUpdateInput, repair_jobUncheckedUpdateInput>
    /**
     * Choose, which repair_job to update.
     */
    where: repair_jobWhereUniqueInput
  }


  /**
   * repair_job updateMany
   */
  export type repair_jobUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update repair_jobs.
     */
    data: XOR<repair_jobUpdateManyMutationInput, repair_jobUncheckedUpdateManyInput>
    /**
     * Filter which repair_jobs to update
     */
    where?: repair_jobWhereInput
  }


  /**
   * repair_job upsert
   */
  export type repair_jobUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repair_job
     */
    select?: repair_jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: repair_jobInclude<ExtArgs> | null
    /**
     * The filter to search for the repair_job to update in case it exists.
     */
    where: repair_jobWhereUniqueInput
    /**
     * In case the repair_job found by the `where` argument doesn't exist, create a new repair_job with this data.
     */
    create: XOR<repair_jobCreateInput, repair_jobUncheckedCreateInput>
    /**
     * In case the repair_job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<repair_jobUpdateInput, repair_jobUncheckedUpdateInput>
  }


  /**
   * repair_job delete
   */
  export type repair_jobDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repair_job
     */
    select?: repair_jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: repair_jobInclude<ExtArgs> | null
    /**
     * Filter which repair_job to delete.
     */
    where: repair_jobWhereUniqueInput
  }


  /**
   * repair_job deleteMany
   */
  export type repair_jobDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which repair_jobs to delete
     */
    where?: repair_jobWhereInput
  }


  /**
   * repair_job.imove_repair_obj
   */
  export type repair_job$imove_repair_objArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_move_draft
     */
    select?: inventory_move_draftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventory_move_draftInclude<ExtArgs> | null
    where?: inventory_move_draftWhereInput
  }


  /**
   * repair_job.quality_check_src
   */
  export type repair_job$quality_check_srcArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quality_check
     */
    select?: quality_checkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quality_checkInclude<ExtArgs> | null
    where?: quality_checkWhereInput
    orderBy?: quality_checkOrderByWithRelationInput | quality_checkOrderByWithRelationInput[]
    cursor?: quality_checkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Quality_checkScalarFieldEnum | Quality_checkScalarFieldEnum[]
  }


  /**
   * repair_job.production_single_src
   */
  export type repair_job$production_single_srcArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_single_product_draft
     */
    select?: production_single_product_draftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: production_single_product_draftInclude<ExtArgs> | null
    where?: production_single_product_draftWhereInput
    orderBy?: production_single_product_draftOrderByWithRelationInput | production_single_product_draftOrderByWithRelationInput[]
    cursor?: production_single_product_draftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Production_single_product_draftScalarFieldEnum | Production_single_product_draftScalarFieldEnum[]
  }


  /**
   * repair_job without action
   */
  export type repair_jobDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repair_job
     */
    select?: repair_jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: repair_jobInclude<ExtArgs> | null
  }



  /**
   * Model quality_check
   */

  export type AggregateQuality_check = {
    _count: Quality_checkCountAggregateOutputType | null
    _avg: Quality_checkAvgAggregateOutputType | null
    _sum: Quality_checkSumAggregateOutputType | null
    _min: Quality_checkMinAggregateOutputType | null
    _max: Quality_checkMaxAggregateOutputType | null
  }

  export type Quality_checkAvgAggregateOutputType = {
    org_id: number | null
    locator_id: number | null
    total_ok: number | null
    total_ng_scrap: number | null
    imove_scrap_id: number | null
    total_ng_repair: number | null
  }

  export type Quality_checkSumAggregateOutputType = {
    org_id: number | null
    locator_id: number | null
    total_ok: number | null
    total_ng_scrap: number | null
    imove_scrap_id: number | null
    total_ng_repair: number | null
  }

  export type Quality_checkMinAggregateOutputType = {
    org_id: number | null
    creation_date_time: Date | null
    locator_id: number | null
    track_id: string | null
    checker_name: string | null
    customer: string | null
    total_ok: number | null
    scrap_reason: string | null
    total_ng_scrap: number | null
    imove_scrap_id: number | null
    repair_reason: string | null
    total_ng_repair: number | null
    repair_job_id: string | null
  }

  export type Quality_checkMaxAggregateOutputType = {
    org_id: number | null
    creation_date_time: Date | null
    locator_id: number | null
    track_id: string | null
    checker_name: string | null
    customer: string | null
    total_ok: number | null
    scrap_reason: string | null
    total_ng_scrap: number | null
    imove_scrap_id: number | null
    repair_reason: string | null
    total_ng_repair: number | null
    repair_job_id: string | null
  }

  export type Quality_checkCountAggregateOutputType = {
    org_id: number
    creation_date_time: number
    locator_id: number
    track_id: number
    checker_name: number
    customer: number
    total_ok: number
    scrap_reason: number
    total_ng_scrap: number
    imove_scrap_id: number
    repair_reason: number
    total_ng_repair: number
    repair_job_id: number
    _all: number
  }


  export type Quality_checkAvgAggregateInputType = {
    org_id?: true
    locator_id?: true
    total_ok?: true
    total_ng_scrap?: true
    imove_scrap_id?: true
    total_ng_repair?: true
  }

  export type Quality_checkSumAggregateInputType = {
    org_id?: true
    locator_id?: true
    total_ok?: true
    total_ng_scrap?: true
    imove_scrap_id?: true
    total_ng_repair?: true
  }

  export type Quality_checkMinAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    locator_id?: true
    track_id?: true
    checker_name?: true
    customer?: true
    total_ok?: true
    scrap_reason?: true
    total_ng_scrap?: true
    imove_scrap_id?: true
    repair_reason?: true
    total_ng_repair?: true
    repair_job_id?: true
  }

  export type Quality_checkMaxAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    locator_id?: true
    track_id?: true
    checker_name?: true
    customer?: true
    total_ok?: true
    scrap_reason?: true
    total_ng_scrap?: true
    imove_scrap_id?: true
    repair_reason?: true
    total_ng_repair?: true
    repair_job_id?: true
  }

  export type Quality_checkCountAggregateInputType = {
    org_id?: true
    creation_date_time?: true
    locator_id?: true
    track_id?: true
    checker_name?: true
    customer?: true
    total_ok?: true
    scrap_reason?: true
    total_ng_scrap?: true
    imove_scrap_id?: true
    repair_reason?: true
    total_ng_repair?: true
    repair_job_id?: true
    _all?: true
  }

  export type Quality_checkAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which quality_check to aggregate.
     */
    where?: quality_checkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quality_checks to fetch.
     */
    orderBy?: quality_checkOrderByWithRelationInput | quality_checkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: quality_checkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quality_checks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quality_checks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned quality_checks
    **/
    _count?: true | Quality_checkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Quality_checkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Quality_checkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Quality_checkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Quality_checkMaxAggregateInputType
  }

  export type GetQuality_checkAggregateType<T extends Quality_checkAggregateArgs> = {
        [P in keyof T & keyof AggregateQuality_check]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuality_check[P]>
      : GetScalarType<T[P], AggregateQuality_check[P]>
  }




  export type quality_checkGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: quality_checkWhereInput
    orderBy?: quality_checkOrderByWithAggregationInput | quality_checkOrderByWithAggregationInput[]
    by: Quality_checkScalarFieldEnum[] | Quality_checkScalarFieldEnum
    having?: quality_checkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Quality_checkCountAggregateInputType | true
    _avg?: Quality_checkAvgAggregateInputType
    _sum?: Quality_checkSumAggregateInputType
    _min?: Quality_checkMinAggregateInputType
    _max?: Quality_checkMaxAggregateInputType
  }

  export type Quality_checkGroupByOutputType = {
    org_id: number
    creation_date_time: Date
    locator_id: number
    track_id: string
    checker_name: string
    customer: string
    total_ok: number
    scrap_reason: string
    total_ng_scrap: number
    imove_scrap_id: number | null
    repair_reason: string
    total_ng_repair: number
    repair_job_id: string | null
    _count: Quality_checkCountAggregateOutputType | null
    _avg: Quality_checkAvgAggregateOutputType | null
    _sum: Quality_checkSumAggregateOutputType | null
    _min: Quality_checkMinAggregateOutputType | null
    _max: Quality_checkMaxAggregateOutputType | null
  }

  type GetQuality_checkGroupByPayload<T extends quality_checkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Quality_checkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Quality_checkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Quality_checkGroupByOutputType[P]>
            : GetScalarType<T[P], Quality_checkGroupByOutputType[P]>
        }
      >
    >


  export type quality_checkSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    org_id?: boolean
    creation_date_time?: boolean
    locator_id?: boolean
    track_id?: boolean
    checker_name?: boolean
    customer?: boolean
    total_ok?: boolean
    scrap_reason?: boolean
    total_ng_scrap?: boolean
    imove_scrap_id?: boolean
    repair_reason?: boolean
    total_ng_repair?: boolean
    repair_job_id?: boolean
    track_id_object?: boolean | track_id_objectDefaultArgs<ExtArgs>
    imove_scrap_obj?: boolean | quality_check$imove_scrap_objArgs<ExtArgs>
    repair_job?: boolean | quality_check$repair_jobArgs<ExtArgs>
  }, ExtArgs["result"]["quality_check"]>

  export type quality_checkSelectScalar = {
    org_id?: boolean
    creation_date_time?: boolean
    locator_id?: boolean
    track_id?: boolean
    checker_name?: boolean
    customer?: boolean
    total_ok?: boolean
    scrap_reason?: boolean
    total_ng_scrap?: boolean
    imove_scrap_id?: boolean
    repair_reason?: boolean
    total_ng_repair?: boolean
    repair_job_id?: boolean
  }

  export type quality_checkInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    track_id_object?: boolean | track_id_objectDefaultArgs<ExtArgs>
    imove_scrap_obj?: boolean | quality_check$imove_scrap_objArgs<ExtArgs>
    repair_job?: boolean | quality_check$repair_jobArgs<ExtArgs>
  }


  export type $quality_checkPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "quality_check"
    objects: {
      track_id_object: Prisma.$track_id_objectPayload<ExtArgs>
      imove_scrap_obj: Prisma.$inventory_move_draftPayload<ExtArgs> | null
      repair_job: Prisma.$repair_jobPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      org_id: number
      creation_date_time: Date
      locator_id: number
      track_id: string
      checker_name: string
      customer: string
      total_ok: number
      scrap_reason: string
      total_ng_scrap: number
      imove_scrap_id: number | null
      repair_reason: string
      total_ng_repair: number
      repair_job_id: string | null
    }, ExtArgs["result"]["quality_check"]>
    composites: {}
  }


  type quality_checkGetPayload<S extends boolean | null | undefined | quality_checkDefaultArgs> = $Result.GetResult<Prisma.$quality_checkPayload, S>

  type quality_checkCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<quality_checkFindManyArgs, 'select' | 'include'> & {
      select?: Quality_checkCountAggregateInputType | true
    }

  export interface quality_checkDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['quality_check'], meta: { name: 'quality_check' } }
    /**
     * Find zero or one Quality_check that matches the filter.
     * @param {quality_checkFindUniqueArgs} args - Arguments to find a Quality_check
     * @example
     * // Get one Quality_check
     * const quality_check = await prisma.quality_check.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends quality_checkFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, quality_checkFindUniqueArgs<ExtArgs>>
    ): Prisma__quality_checkClient<$Result.GetResult<Prisma.$quality_checkPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Quality_check that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {quality_checkFindUniqueOrThrowArgs} args - Arguments to find a Quality_check
     * @example
     * // Get one Quality_check
     * const quality_check = await prisma.quality_check.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends quality_checkFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, quality_checkFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__quality_checkClient<$Result.GetResult<Prisma.$quality_checkPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Quality_check that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quality_checkFindFirstArgs} args - Arguments to find a Quality_check
     * @example
     * // Get one Quality_check
     * const quality_check = await prisma.quality_check.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends quality_checkFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, quality_checkFindFirstArgs<ExtArgs>>
    ): Prisma__quality_checkClient<$Result.GetResult<Prisma.$quality_checkPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Quality_check that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quality_checkFindFirstOrThrowArgs} args - Arguments to find a Quality_check
     * @example
     * // Get one Quality_check
     * const quality_check = await prisma.quality_check.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends quality_checkFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, quality_checkFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__quality_checkClient<$Result.GetResult<Prisma.$quality_checkPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Quality_checks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quality_checkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quality_checks
     * const quality_checks = await prisma.quality_check.findMany()
     * 
     * // Get first 10 Quality_checks
     * const quality_checks = await prisma.quality_check.findMany({ take: 10 })
     * 
     * // Only select the `org_id`
     * const quality_checkWithOrg_idOnly = await prisma.quality_check.findMany({ select: { org_id: true } })
     * 
    **/
    findMany<T extends quality_checkFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, quality_checkFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quality_checkPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Quality_check.
     * @param {quality_checkCreateArgs} args - Arguments to create a Quality_check.
     * @example
     * // Create one Quality_check
     * const Quality_check = await prisma.quality_check.create({
     *   data: {
     *     // ... data to create a Quality_check
     *   }
     * })
     * 
    **/
    create<T extends quality_checkCreateArgs<ExtArgs>>(
      args: SelectSubset<T, quality_checkCreateArgs<ExtArgs>>
    ): Prisma__quality_checkClient<$Result.GetResult<Prisma.$quality_checkPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Quality_checks.
     *     @param {quality_checkCreateManyArgs} args - Arguments to create many Quality_checks.
     *     @example
     *     // Create many Quality_checks
     *     const quality_check = await prisma.quality_check.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends quality_checkCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, quality_checkCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quality_check.
     * @param {quality_checkDeleteArgs} args - Arguments to delete one Quality_check.
     * @example
     * // Delete one Quality_check
     * const Quality_check = await prisma.quality_check.delete({
     *   where: {
     *     // ... filter to delete one Quality_check
     *   }
     * })
     * 
    **/
    delete<T extends quality_checkDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, quality_checkDeleteArgs<ExtArgs>>
    ): Prisma__quality_checkClient<$Result.GetResult<Prisma.$quality_checkPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Quality_check.
     * @param {quality_checkUpdateArgs} args - Arguments to update one Quality_check.
     * @example
     * // Update one Quality_check
     * const quality_check = await prisma.quality_check.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends quality_checkUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, quality_checkUpdateArgs<ExtArgs>>
    ): Prisma__quality_checkClient<$Result.GetResult<Prisma.$quality_checkPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Quality_checks.
     * @param {quality_checkDeleteManyArgs} args - Arguments to filter Quality_checks to delete.
     * @example
     * // Delete a few Quality_checks
     * const { count } = await prisma.quality_check.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends quality_checkDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, quality_checkDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quality_checks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quality_checkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quality_checks
     * const quality_check = await prisma.quality_check.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends quality_checkUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, quality_checkUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quality_check.
     * @param {quality_checkUpsertArgs} args - Arguments to update or create a Quality_check.
     * @example
     * // Update or create a Quality_check
     * const quality_check = await prisma.quality_check.upsert({
     *   create: {
     *     // ... data to create a Quality_check
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quality_check we want to update
     *   }
     * })
    **/
    upsert<T extends quality_checkUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, quality_checkUpsertArgs<ExtArgs>>
    ): Prisma__quality_checkClient<$Result.GetResult<Prisma.$quality_checkPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Quality_checks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quality_checkCountArgs} args - Arguments to filter Quality_checks to count.
     * @example
     * // Count the number of Quality_checks
     * const count = await prisma.quality_check.count({
     *   where: {
     *     // ... the filter for the Quality_checks we want to count
     *   }
     * })
    **/
    count<T extends quality_checkCountArgs>(
      args?: Subset<T, quality_checkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Quality_checkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quality_check.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quality_checkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Quality_checkAggregateArgs>(args: Subset<T, Quality_checkAggregateArgs>): Prisma.PrismaPromise<GetQuality_checkAggregateType<T>>

    /**
     * Group by Quality_check.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quality_checkGroupByArgs} args - Group by arguments.
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
      T extends quality_checkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: quality_checkGroupByArgs['orderBy'] }
        : { orderBy?: quality_checkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, quality_checkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuality_checkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the quality_check model
   */
  readonly fields: quality_checkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for quality_check.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__quality_checkClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    track_id_object<T extends track_id_objectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, track_id_objectDefaultArgs<ExtArgs>>): Prisma__track_id_objectClient<$Result.GetResult<Prisma.$track_id_objectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    imove_scrap_obj<T extends quality_check$imove_scrap_objArgs<ExtArgs> = {}>(args?: Subset<T, quality_check$imove_scrap_objArgs<ExtArgs>>): Prisma__inventory_move_draftClient<$Result.GetResult<Prisma.$inventory_move_draftPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    repair_job<T extends quality_check$repair_jobArgs<ExtArgs> = {}>(args?: Subset<T, quality_check$repair_jobArgs<ExtArgs>>): Prisma__repair_jobClient<$Result.GetResult<Prisma.$repair_jobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the quality_check model
   */ 
  interface quality_checkFieldRefs {
    readonly org_id: FieldRef<"quality_check", 'Int'>
    readonly creation_date_time: FieldRef<"quality_check", 'DateTime'>
    readonly locator_id: FieldRef<"quality_check", 'Int'>
    readonly track_id: FieldRef<"quality_check", 'String'>
    readonly checker_name: FieldRef<"quality_check", 'String'>
    readonly customer: FieldRef<"quality_check", 'String'>
    readonly total_ok: FieldRef<"quality_check", 'Float'>
    readonly scrap_reason: FieldRef<"quality_check", 'String'>
    readonly total_ng_scrap: FieldRef<"quality_check", 'Float'>
    readonly imove_scrap_id: FieldRef<"quality_check", 'Int'>
    readonly repair_reason: FieldRef<"quality_check", 'String'>
    readonly total_ng_repair: FieldRef<"quality_check", 'Float'>
    readonly repair_job_id: FieldRef<"quality_check", 'String'>
  }
    

  // Custom InputTypes

  /**
   * quality_check findUnique
   */
  export type quality_checkFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quality_check
     */
    select?: quality_checkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quality_checkInclude<ExtArgs> | null
    /**
     * Filter, which quality_check to fetch.
     */
    where: quality_checkWhereUniqueInput
  }


  /**
   * quality_check findUniqueOrThrow
   */
  export type quality_checkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quality_check
     */
    select?: quality_checkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quality_checkInclude<ExtArgs> | null
    /**
     * Filter, which quality_check to fetch.
     */
    where: quality_checkWhereUniqueInput
  }


  /**
   * quality_check findFirst
   */
  export type quality_checkFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quality_check
     */
    select?: quality_checkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quality_checkInclude<ExtArgs> | null
    /**
     * Filter, which quality_check to fetch.
     */
    where?: quality_checkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quality_checks to fetch.
     */
    orderBy?: quality_checkOrderByWithRelationInput | quality_checkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quality_checks.
     */
    cursor?: quality_checkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quality_checks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quality_checks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quality_checks.
     */
    distinct?: Quality_checkScalarFieldEnum | Quality_checkScalarFieldEnum[]
  }


  /**
   * quality_check findFirstOrThrow
   */
  export type quality_checkFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quality_check
     */
    select?: quality_checkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quality_checkInclude<ExtArgs> | null
    /**
     * Filter, which quality_check to fetch.
     */
    where?: quality_checkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quality_checks to fetch.
     */
    orderBy?: quality_checkOrderByWithRelationInput | quality_checkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quality_checks.
     */
    cursor?: quality_checkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quality_checks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quality_checks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quality_checks.
     */
    distinct?: Quality_checkScalarFieldEnum | Quality_checkScalarFieldEnum[]
  }


  /**
   * quality_check findMany
   */
  export type quality_checkFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quality_check
     */
    select?: quality_checkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quality_checkInclude<ExtArgs> | null
    /**
     * Filter, which quality_checks to fetch.
     */
    where?: quality_checkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quality_checks to fetch.
     */
    orderBy?: quality_checkOrderByWithRelationInput | quality_checkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing quality_checks.
     */
    cursor?: quality_checkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quality_checks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quality_checks.
     */
    skip?: number
    distinct?: Quality_checkScalarFieldEnum | Quality_checkScalarFieldEnum[]
  }


  /**
   * quality_check create
   */
  export type quality_checkCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quality_check
     */
    select?: quality_checkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quality_checkInclude<ExtArgs> | null
    /**
     * The data needed to create a quality_check.
     */
    data: XOR<quality_checkCreateInput, quality_checkUncheckedCreateInput>
  }


  /**
   * quality_check createMany
   */
  export type quality_checkCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many quality_checks.
     */
    data: quality_checkCreateManyInput | quality_checkCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * quality_check update
   */
  export type quality_checkUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quality_check
     */
    select?: quality_checkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quality_checkInclude<ExtArgs> | null
    /**
     * The data needed to update a quality_check.
     */
    data: XOR<quality_checkUpdateInput, quality_checkUncheckedUpdateInput>
    /**
     * Choose, which quality_check to update.
     */
    where: quality_checkWhereUniqueInput
  }


  /**
   * quality_check updateMany
   */
  export type quality_checkUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update quality_checks.
     */
    data: XOR<quality_checkUpdateManyMutationInput, quality_checkUncheckedUpdateManyInput>
    /**
     * Filter which quality_checks to update
     */
    where?: quality_checkWhereInput
  }


  /**
   * quality_check upsert
   */
  export type quality_checkUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quality_check
     */
    select?: quality_checkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quality_checkInclude<ExtArgs> | null
    /**
     * The filter to search for the quality_check to update in case it exists.
     */
    where: quality_checkWhereUniqueInput
    /**
     * In case the quality_check found by the `where` argument doesn't exist, create a new quality_check with this data.
     */
    create: XOR<quality_checkCreateInput, quality_checkUncheckedCreateInput>
    /**
     * In case the quality_check was found with the provided `where` argument, update it with this data.
     */
    update: XOR<quality_checkUpdateInput, quality_checkUncheckedUpdateInput>
  }


  /**
   * quality_check delete
   */
  export type quality_checkDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quality_check
     */
    select?: quality_checkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quality_checkInclude<ExtArgs> | null
    /**
     * Filter which quality_check to delete.
     */
    where: quality_checkWhereUniqueInput
  }


  /**
   * quality_check deleteMany
   */
  export type quality_checkDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which quality_checks to delete
     */
    where?: quality_checkWhereInput
  }


  /**
   * quality_check.imove_scrap_obj
   */
  export type quality_check$imove_scrap_objArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_move_draft
     */
    select?: inventory_move_draftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventory_move_draftInclude<ExtArgs> | null
    where?: inventory_move_draftWhereInput
  }


  /**
   * quality_check.repair_job
   */
  export type quality_check$repair_jobArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repair_job
     */
    select?: repair_jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: repair_jobInclude<ExtArgs> | null
    where?: repair_jobWhereInput
  }


  /**
   * quality_check without action
   */
  export type quality_checkDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quality_check
     */
    select?: quality_checkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quality_checkInclude<ExtArgs> | null
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
    quantityProduced: number | null
    unitsPerPallet: number | null
  }

  export type Track_id_objectSumAggregateOutputType = {
    productId: number | null
    quantityProduced: number | null
    unitsPerPallet: number | null
  }

  export type Track_id_objectMinAggregateOutputType = {
    track_id: string | null
    productId: number | null
    productName: string | null
    quantityProduced: number | null
    unitsPerPallet: number | null
    track_type: string | null
    creation_date_time: Date | null
  }

  export type Track_id_objectMaxAggregateOutputType = {
    track_id: string | null
    productId: number | null
    productName: string | null
    quantityProduced: number | null
    unitsPerPallet: number | null
    track_type: string | null
    creation_date_time: Date | null
  }

  export type Track_id_objectCountAggregateOutputType = {
    track_id: number
    productId: number
    productName: number
    quantityProduced: number
    unitsPerPallet: number
    track_type: number
    creation_date_time: number
    source_data: number
    object_data: number
    _all: number
  }


  export type Track_id_objectAvgAggregateInputType = {
    productId?: true
    quantityProduced?: true
    unitsPerPallet?: true
  }

  export type Track_id_objectSumAggregateInputType = {
    productId?: true
    quantityProduced?: true
    unitsPerPallet?: true
  }

  export type Track_id_objectMinAggregateInputType = {
    track_id?: true
    productId?: true
    productName?: true
    quantityProduced?: true
    unitsPerPallet?: true
    track_type?: true
    creation_date_time?: true
  }

  export type Track_id_objectMaxAggregateInputType = {
    track_id?: true
    productId?: true
    productName?: true
    quantityProduced?: true
    unitsPerPallet?: true
    track_type?: true
    creation_date_time?: true
  }

  export type Track_id_objectCountAggregateInputType = {
    track_id?: true
    productId?: true
    productName?: true
    quantityProduced?: true
    unitsPerPallet?: true
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
    quantityProduced: number
    unitsPerPallet: number
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
    quantityProduced?: boolean
    unitsPerPallet?: boolean
    track_type?: boolean
    creation_date_time?: boolean
    source_data?: boolean
    object_data?: boolean
    track_id_history?: boolean | track_id_object$track_id_historyArgs<ExtArgs>
    repair_job?: boolean | track_id_object$repair_jobArgs<ExtArgs>
    quality_check_used_in?: boolean | track_id_object$quality_check_used_inArgs<ExtArgs>
    product_single_result?: boolean | track_id_object$product_single_resultArgs<ExtArgs>
    _count?: boolean | Track_id_objectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track_id_object"]>

  export type track_id_objectSelectScalar = {
    track_id?: boolean
    productId?: boolean
    productName?: boolean
    quantityProduced?: boolean
    unitsPerPallet?: boolean
    track_type?: boolean
    creation_date_time?: boolean
    source_data?: boolean
    object_data?: boolean
  }

  export type track_id_objectInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    track_id_history?: boolean | track_id_object$track_id_historyArgs<ExtArgs>
    repair_job?: boolean | track_id_object$repair_jobArgs<ExtArgs>
    quality_check_used_in?: boolean | track_id_object$quality_check_used_inArgs<ExtArgs>
    product_single_result?: boolean | track_id_object$product_single_resultArgs<ExtArgs>
    _count?: boolean | Track_id_objectCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $track_id_objectPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "track_id_object"
    objects: {
      track_id_history: Prisma.$track_id_historyPayload<ExtArgs>[]
      repair_job: Prisma.$repair_jobPayload<ExtArgs> | null
      quality_check_used_in: Prisma.$quality_checkPayload<ExtArgs>[]
      product_single_result: Prisma.$production_single_product_draftPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      track_id: string
      productId: number
      productName: string
      quantityProduced: number
      unitsPerPallet: number
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

    repair_job<T extends track_id_object$repair_jobArgs<ExtArgs> = {}>(args?: Subset<T, track_id_object$repair_jobArgs<ExtArgs>>): Prisma__repair_jobClient<$Result.GetResult<Prisma.$repair_jobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    quality_check_used_in<T extends track_id_object$quality_check_used_inArgs<ExtArgs> = {}>(args?: Subset<T, track_id_object$quality_check_used_inArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quality_checkPayload<ExtArgs>, T, 'findMany'> | Null>;

    product_single_result<T extends track_id_object$product_single_resultArgs<ExtArgs> = {}>(args?: Subset<T, track_id_object$product_single_resultArgs<ExtArgs>>): Prisma__production_single_product_draftClient<$Result.GetResult<Prisma.$production_single_product_draftPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
    readonly quantityProduced: FieldRef<"track_id_object", 'Int'>
    readonly unitsPerPallet: FieldRef<"track_id_object", 'Int'>
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
   * track_id_object.repair_job
   */
  export type track_id_object$repair_jobArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repair_job
     */
    select?: repair_jobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: repair_jobInclude<ExtArgs> | null
    where?: repair_jobWhereInput
  }


  /**
   * track_id_object.quality_check_used_in
   */
  export type track_id_object$quality_check_used_inArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quality_check
     */
    select?: quality_checkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quality_checkInclude<ExtArgs> | null
    where?: quality_checkWhereInput
    orderBy?: quality_checkOrderByWithRelationInput | quality_checkOrderByWithRelationInput[]
    cursor?: quality_checkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Quality_checkScalarFieldEnum | Quality_checkScalarFieldEnum[]
  }


  /**
   * track_id_object.product_single_result
   */
  export type track_id_object$product_single_resultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the production_single_product_draft
     */
    select?: production_single_product_draftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: production_single_product_draftInclude<ExtArgs> | null
    where?: production_single_product_draftWhereInput
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
    vendor_id: 'vendor_id',
    data: 'data'
  };

  export type Shipment_draftScalarFieldEnum = (typeof Shipment_draftScalarFieldEnum)[keyof typeof Shipment_draftScalarFieldEnum]


  export const Material_receive_draftScalarFieldEnum: {
    org_id: 'org_id',
    creation_date_time: 'creation_date_time',
    erp_id: 'erp_id',
    vendor_id: 'vendor_id',
    data: 'data'
  };

  export type Material_receive_draftScalarFieldEnum = (typeof Material_receive_draftScalarFieldEnum)[keyof typeof Material_receive_draftScalarFieldEnum]


  export const Production_single_product_draftScalarFieldEnum: {
    org_id: 'org_id',
    creation_date_time: 'creation_date_time',
    erp_id: 'erp_id',
    data: 'data',
    track_id: 'track_id',
    total_ok: 'total_ok',
    scrap_reason: 'scrap_reason',
    total_ng_scrap: 'total_ng_scrap',
    imove_scrap_id: 'imove_scrap_id',
    repair_reason: 'repair_reason',
    total_ng_repair: 'total_ng_repair',
    repair_job_id: 'repair_job_id'
  };

  export type Production_single_product_draftScalarFieldEnum = (typeof Production_single_product_draftScalarFieldEnum)[keyof typeof Production_single_product_draftScalarFieldEnum]


  export const Repair_jobScalarFieldEnum: {
    org_id: 'org_id',
    creation_date_time: 'creation_date_time',
    track_id: 'track_id',
    imove_repair_id: 'imove_repair_id',
    starting_locator_id: 'starting_locator_id',
    repair_status: 'repair_status',
    description: 'description',
    quantity: 'quantity'
  };

  export type Repair_jobScalarFieldEnum = (typeof Repair_jobScalarFieldEnum)[keyof typeof Repair_jobScalarFieldEnum]


  export const Quality_checkScalarFieldEnum: {
    org_id: 'org_id',
    creation_date_time: 'creation_date_time',
    locator_id: 'locator_id',
    track_id: 'track_id',
    checker_name: 'checker_name',
    customer: 'customer',
    total_ok: 'total_ok',
    scrap_reason: 'scrap_reason',
    total_ng_scrap: 'total_ng_scrap',
    imove_scrap_id: 'imove_scrap_id',
    repair_reason: 'repair_reason',
    total_ng_repair: 'total_ng_repair',
    repair_job_id: 'repair_job_id'
  };

  export type Quality_checkScalarFieldEnum = (typeof Quality_checkScalarFieldEnum)[keyof typeof Quality_checkScalarFieldEnum]


  export const Track_id_objectScalarFieldEnum: {
    track_id: 'track_id',
    productId: 'productId',
    productName: 'productName',
    quantityProduced: 'quantityProduced',
    unitsPerPallet: 'unitsPerPallet',
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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
    production_single_scrap_imove?: XOR<Production_single_product_draftNullableRelationFilter, production_single_product_draftWhereInput> | null
    quality_check_scrap_imove?: XOR<Quality_checkNullableRelationFilter, quality_checkWhereInput> | null
    repair_job_imove?: XOR<Repair_jobNullableRelationFilter, repair_jobWhereInput> | null
  }

  export type inventory_move_draftOrderByWithRelationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    movement_id?: SortOrder
    data?: SortOrder
    production_single_scrap_imove?: production_single_product_draftOrderByWithRelationInput
    quality_check_scrap_imove?: quality_checkOrderByWithRelationInput
    repair_job_imove?: repair_jobOrderByWithRelationInput
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
    production_single_scrap_imove?: XOR<Production_single_product_draftNullableRelationFilter, production_single_product_draftWhereInput> | null
    quality_check_scrap_imove?: XOR<Quality_checkNullableRelationFilter, quality_checkWhereInput> | null
    repair_job_imove?: XOR<Repair_jobNullableRelationFilter, repair_jobWhereInput> | null
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
    vendor_id?: IntFilter<"shipment_draft"> | number
    data?: JsonFilter<"shipment_draft">
  }

  export type shipment_draftOrderByWithRelationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    vendor_id?: SortOrder
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
    vendor_id?: IntFilter<"shipment_draft"> | number
    data?: JsonFilter<"shipment_draft">
  }, "org_id_creation_date_time" | "erp_id">

  export type shipment_draftOrderByWithAggregationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    vendor_id?: SortOrder
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
    vendor_id?: IntWithAggregatesFilter<"shipment_draft"> | number
    data?: JsonWithAggregatesFilter<"shipment_draft">
  }

  export type material_receive_draftWhereInput = {
    AND?: material_receive_draftWhereInput | material_receive_draftWhereInput[]
    OR?: material_receive_draftWhereInput[]
    NOT?: material_receive_draftWhereInput | material_receive_draftWhereInput[]
    org_id?: IntFilter<"material_receive_draft"> | number
    creation_date_time?: DateTimeFilter<"material_receive_draft"> | Date | string
    erp_id?: IntFilter<"material_receive_draft"> | number
    vendor_id?: IntFilter<"material_receive_draft"> | number
    data?: JsonFilter<"material_receive_draft">
  }

  export type material_receive_draftOrderByWithRelationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    vendor_id?: SortOrder
    data?: SortOrder
  }

  export type material_receive_draftWhereUniqueInput = Prisma.AtLeast<{
    erp_id?: number
    org_id_creation_date_time?: material_receive_draftOrg_idCreation_date_timeCompoundUniqueInput
    AND?: material_receive_draftWhereInput | material_receive_draftWhereInput[]
    OR?: material_receive_draftWhereInput[]
    NOT?: material_receive_draftWhereInput | material_receive_draftWhereInput[]
    org_id?: IntFilter<"material_receive_draft"> | number
    creation_date_time?: DateTimeFilter<"material_receive_draft"> | Date | string
    vendor_id?: IntFilter<"material_receive_draft"> | number
    data?: JsonFilter<"material_receive_draft">
  }, "org_id_creation_date_time" | "erp_id">

  export type material_receive_draftOrderByWithAggregationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    vendor_id?: SortOrder
    data?: SortOrder
    _count?: material_receive_draftCountOrderByAggregateInput
    _avg?: material_receive_draftAvgOrderByAggregateInput
    _max?: material_receive_draftMaxOrderByAggregateInput
    _min?: material_receive_draftMinOrderByAggregateInput
    _sum?: material_receive_draftSumOrderByAggregateInput
  }

  export type material_receive_draftScalarWhereWithAggregatesInput = {
    AND?: material_receive_draftScalarWhereWithAggregatesInput | material_receive_draftScalarWhereWithAggregatesInput[]
    OR?: material_receive_draftScalarWhereWithAggregatesInput[]
    NOT?: material_receive_draftScalarWhereWithAggregatesInput | material_receive_draftScalarWhereWithAggregatesInput[]
    org_id?: IntWithAggregatesFilter<"material_receive_draft"> | number
    creation_date_time?: DateTimeWithAggregatesFilter<"material_receive_draft"> | Date | string
    erp_id?: IntWithAggregatesFilter<"material_receive_draft"> | number
    vendor_id?: IntWithAggregatesFilter<"material_receive_draft"> | number
    data?: JsonWithAggregatesFilter<"material_receive_draft">
  }

  export type production_single_product_draftWhereInput = {
    AND?: production_single_product_draftWhereInput | production_single_product_draftWhereInput[]
    OR?: production_single_product_draftWhereInput[]
    NOT?: production_single_product_draftWhereInput | production_single_product_draftWhereInput[]
    org_id?: IntFilter<"production_single_product_draft"> | number
    creation_date_time?: DateTimeFilter<"production_single_product_draft"> | Date | string
    erp_id?: IntFilter<"production_single_product_draft"> | number
    data?: JsonFilter<"production_single_product_draft">
    track_id?: StringFilter<"production_single_product_draft"> | string
    total_ok?: FloatFilter<"production_single_product_draft"> | number
    scrap_reason?: StringFilter<"production_single_product_draft"> | string
    total_ng_scrap?: FloatFilter<"production_single_product_draft"> | number
    imove_scrap_id?: IntNullableFilter<"production_single_product_draft"> | number | null
    repair_reason?: StringFilter<"production_single_product_draft"> | string
    total_ng_repair?: FloatFilter<"production_single_product_draft"> | number
    repair_job_id?: StringNullableFilter<"production_single_product_draft"> | string | null
    track_id_object?: XOR<Track_id_objectRelationFilter, track_id_objectWhereInput>
    imove_scrap_obj?: XOR<Inventory_move_draftNullableRelationFilter, inventory_move_draftWhereInput> | null
    repair_job?: XOR<Repair_jobNullableRelationFilter, repair_jobWhereInput> | null
  }

  export type production_single_product_draftOrderByWithRelationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    data?: SortOrder
    track_id?: SortOrder
    total_ok?: SortOrder
    scrap_reason?: SortOrder
    total_ng_scrap?: SortOrder
    imove_scrap_id?: SortOrderInput | SortOrder
    repair_reason?: SortOrder
    total_ng_repair?: SortOrder
    repair_job_id?: SortOrderInput | SortOrder
    track_id_object?: track_id_objectOrderByWithRelationInput
    imove_scrap_obj?: inventory_move_draftOrderByWithRelationInput
    repair_job?: repair_jobOrderByWithRelationInput
  }

  export type production_single_product_draftWhereUniqueInput = Prisma.AtLeast<{
    erp_id?: number
    track_id?: string
    imove_scrap_id?: number
    repair_job_id?: string
    org_id_creation_date_time?: production_single_product_draftOrg_idCreation_date_timeCompoundUniqueInput
    AND?: production_single_product_draftWhereInput | production_single_product_draftWhereInput[]
    OR?: production_single_product_draftWhereInput[]
    NOT?: production_single_product_draftWhereInput | production_single_product_draftWhereInput[]
    org_id?: IntFilter<"production_single_product_draft"> | number
    creation_date_time?: DateTimeFilter<"production_single_product_draft"> | Date | string
    data?: JsonFilter<"production_single_product_draft">
    total_ok?: FloatFilter<"production_single_product_draft"> | number
    scrap_reason?: StringFilter<"production_single_product_draft"> | string
    total_ng_scrap?: FloatFilter<"production_single_product_draft"> | number
    repair_reason?: StringFilter<"production_single_product_draft"> | string
    total_ng_repair?: FloatFilter<"production_single_product_draft"> | number
    track_id_object?: XOR<Track_id_objectRelationFilter, track_id_objectWhereInput>
    imove_scrap_obj?: XOR<Inventory_move_draftNullableRelationFilter, inventory_move_draftWhereInput> | null
    repair_job?: XOR<Repair_jobNullableRelationFilter, repair_jobWhereInput> | null
  }, "org_id_creation_date_time" | "erp_id" | "track_id" | "imove_scrap_id" | "repair_job_id">

  export type production_single_product_draftOrderByWithAggregationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    data?: SortOrder
    track_id?: SortOrder
    total_ok?: SortOrder
    scrap_reason?: SortOrder
    total_ng_scrap?: SortOrder
    imove_scrap_id?: SortOrderInput | SortOrder
    repair_reason?: SortOrder
    total_ng_repair?: SortOrder
    repair_job_id?: SortOrderInput | SortOrder
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
    track_id?: StringWithAggregatesFilter<"production_single_product_draft"> | string
    total_ok?: FloatWithAggregatesFilter<"production_single_product_draft"> | number
    scrap_reason?: StringWithAggregatesFilter<"production_single_product_draft"> | string
    total_ng_scrap?: FloatWithAggregatesFilter<"production_single_product_draft"> | number
    imove_scrap_id?: IntNullableWithAggregatesFilter<"production_single_product_draft"> | number | null
    repair_reason?: StringWithAggregatesFilter<"production_single_product_draft"> | string
    total_ng_repair?: FloatWithAggregatesFilter<"production_single_product_draft"> | number
    repair_job_id?: StringNullableWithAggregatesFilter<"production_single_product_draft"> | string | null
  }

  export type repair_jobWhereInput = {
    AND?: repair_jobWhereInput | repair_jobWhereInput[]
    OR?: repair_jobWhereInput[]
    NOT?: repair_jobWhereInput | repair_jobWhereInput[]
    org_id?: IntFilter<"repair_job"> | number
    creation_date_time?: DateTimeFilter<"repair_job"> | Date | string
    track_id?: StringFilter<"repair_job"> | string
    imove_repair_id?: IntNullableFilter<"repair_job"> | number | null
    starting_locator_id?: IntFilter<"repair_job"> | number
    repair_status?: StringFilter<"repair_job"> | string
    description?: StringFilter<"repair_job"> | string
    quantity?: FloatFilter<"repair_job"> | number
    track_id_object?: XOR<Track_id_objectRelationFilter, track_id_objectWhereInput>
    imove_repair_obj?: XOR<Inventory_move_draftNullableRelationFilter, inventory_move_draftWhereInput> | null
    quality_check_src?: Quality_checkListRelationFilter
    production_single_src?: Production_single_product_draftListRelationFilter
  }

  export type repair_jobOrderByWithRelationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    track_id?: SortOrder
    imove_repair_id?: SortOrderInput | SortOrder
    starting_locator_id?: SortOrder
    repair_status?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    track_id_object?: track_id_objectOrderByWithRelationInput
    imove_repair_obj?: inventory_move_draftOrderByWithRelationInput
    quality_check_src?: quality_checkOrderByRelationAggregateInput
    production_single_src?: production_single_product_draftOrderByRelationAggregateInput
  }

  export type repair_jobWhereUniqueInput = Prisma.AtLeast<{
    track_id?: string
    imove_repair_id?: number
    org_id_creation_date_time?: repair_jobOrg_idCreation_date_timeCompoundUniqueInput
    AND?: repair_jobWhereInput | repair_jobWhereInput[]
    OR?: repair_jobWhereInput[]
    NOT?: repair_jobWhereInput | repair_jobWhereInput[]
    org_id?: IntFilter<"repair_job"> | number
    creation_date_time?: DateTimeFilter<"repair_job"> | Date | string
    starting_locator_id?: IntFilter<"repair_job"> | number
    repair_status?: StringFilter<"repair_job"> | string
    description?: StringFilter<"repair_job"> | string
    quantity?: FloatFilter<"repair_job"> | number
    track_id_object?: XOR<Track_id_objectRelationFilter, track_id_objectWhereInput>
    imove_repair_obj?: XOR<Inventory_move_draftNullableRelationFilter, inventory_move_draftWhereInput> | null
    quality_check_src?: Quality_checkListRelationFilter
    production_single_src?: Production_single_product_draftListRelationFilter
  }, "org_id_creation_date_time" | "track_id" | "imove_repair_id">

  export type repair_jobOrderByWithAggregationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    track_id?: SortOrder
    imove_repair_id?: SortOrderInput | SortOrder
    starting_locator_id?: SortOrder
    repair_status?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    _count?: repair_jobCountOrderByAggregateInput
    _avg?: repair_jobAvgOrderByAggregateInput
    _max?: repair_jobMaxOrderByAggregateInput
    _min?: repair_jobMinOrderByAggregateInput
    _sum?: repair_jobSumOrderByAggregateInput
  }

  export type repair_jobScalarWhereWithAggregatesInput = {
    AND?: repair_jobScalarWhereWithAggregatesInput | repair_jobScalarWhereWithAggregatesInput[]
    OR?: repair_jobScalarWhereWithAggregatesInput[]
    NOT?: repair_jobScalarWhereWithAggregatesInput | repair_jobScalarWhereWithAggregatesInput[]
    org_id?: IntWithAggregatesFilter<"repair_job"> | number
    creation_date_time?: DateTimeWithAggregatesFilter<"repair_job"> | Date | string
    track_id?: StringWithAggregatesFilter<"repair_job"> | string
    imove_repair_id?: IntNullableWithAggregatesFilter<"repair_job"> | number | null
    starting_locator_id?: IntWithAggregatesFilter<"repair_job"> | number
    repair_status?: StringWithAggregatesFilter<"repair_job"> | string
    description?: StringWithAggregatesFilter<"repair_job"> | string
    quantity?: FloatWithAggregatesFilter<"repair_job"> | number
  }

  export type quality_checkWhereInput = {
    AND?: quality_checkWhereInput | quality_checkWhereInput[]
    OR?: quality_checkWhereInput[]
    NOT?: quality_checkWhereInput | quality_checkWhereInput[]
    org_id?: IntFilter<"quality_check"> | number
    creation_date_time?: DateTimeFilter<"quality_check"> | Date | string
    locator_id?: IntFilter<"quality_check"> | number
    track_id?: StringFilter<"quality_check"> | string
    checker_name?: StringFilter<"quality_check"> | string
    customer?: StringFilter<"quality_check"> | string
    total_ok?: FloatFilter<"quality_check"> | number
    scrap_reason?: StringFilter<"quality_check"> | string
    total_ng_scrap?: FloatFilter<"quality_check"> | number
    imove_scrap_id?: IntNullableFilter<"quality_check"> | number | null
    repair_reason?: StringFilter<"quality_check"> | string
    total_ng_repair?: FloatFilter<"quality_check"> | number
    repair_job_id?: StringNullableFilter<"quality_check"> | string | null
    track_id_object?: XOR<Track_id_objectRelationFilter, track_id_objectWhereInput>
    imove_scrap_obj?: XOR<Inventory_move_draftNullableRelationFilter, inventory_move_draftWhereInput> | null
    repair_job?: XOR<Repair_jobNullableRelationFilter, repair_jobWhereInput> | null
  }

  export type quality_checkOrderByWithRelationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    locator_id?: SortOrder
    track_id?: SortOrder
    checker_name?: SortOrder
    customer?: SortOrder
    total_ok?: SortOrder
    scrap_reason?: SortOrder
    total_ng_scrap?: SortOrder
    imove_scrap_id?: SortOrderInput | SortOrder
    repair_reason?: SortOrder
    total_ng_repair?: SortOrder
    repair_job_id?: SortOrderInput | SortOrder
    track_id_object?: track_id_objectOrderByWithRelationInput
    imove_scrap_obj?: inventory_move_draftOrderByWithRelationInput
    repair_job?: repair_jobOrderByWithRelationInput
  }

  export type quality_checkWhereUniqueInput = Prisma.AtLeast<{
    imove_scrap_id?: number
    org_id_creation_date_time?: quality_checkOrg_idCreation_date_timeCompoundUniqueInput
    AND?: quality_checkWhereInput | quality_checkWhereInput[]
    OR?: quality_checkWhereInput[]
    NOT?: quality_checkWhereInput | quality_checkWhereInput[]
    org_id?: IntFilter<"quality_check"> | number
    creation_date_time?: DateTimeFilter<"quality_check"> | Date | string
    locator_id?: IntFilter<"quality_check"> | number
    track_id?: StringFilter<"quality_check"> | string
    checker_name?: StringFilter<"quality_check"> | string
    customer?: StringFilter<"quality_check"> | string
    total_ok?: FloatFilter<"quality_check"> | number
    scrap_reason?: StringFilter<"quality_check"> | string
    total_ng_scrap?: FloatFilter<"quality_check"> | number
    repair_reason?: StringFilter<"quality_check"> | string
    total_ng_repair?: FloatFilter<"quality_check"> | number
    repair_job_id?: StringNullableFilter<"quality_check"> | string | null
    track_id_object?: XOR<Track_id_objectRelationFilter, track_id_objectWhereInput>
    imove_scrap_obj?: XOR<Inventory_move_draftNullableRelationFilter, inventory_move_draftWhereInput> | null
    repair_job?: XOR<Repair_jobNullableRelationFilter, repair_jobWhereInput> | null
  }, "org_id_creation_date_time" | "imove_scrap_id">

  export type quality_checkOrderByWithAggregationInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    locator_id?: SortOrder
    track_id?: SortOrder
    checker_name?: SortOrder
    customer?: SortOrder
    total_ok?: SortOrder
    scrap_reason?: SortOrder
    total_ng_scrap?: SortOrder
    imove_scrap_id?: SortOrderInput | SortOrder
    repair_reason?: SortOrder
    total_ng_repair?: SortOrder
    repair_job_id?: SortOrderInput | SortOrder
    _count?: quality_checkCountOrderByAggregateInput
    _avg?: quality_checkAvgOrderByAggregateInput
    _max?: quality_checkMaxOrderByAggregateInput
    _min?: quality_checkMinOrderByAggregateInput
    _sum?: quality_checkSumOrderByAggregateInput
  }

  export type quality_checkScalarWhereWithAggregatesInput = {
    AND?: quality_checkScalarWhereWithAggregatesInput | quality_checkScalarWhereWithAggregatesInput[]
    OR?: quality_checkScalarWhereWithAggregatesInput[]
    NOT?: quality_checkScalarWhereWithAggregatesInput | quality_checkScalarWhereWithAggregatesInput[]
    org_id?: IntWithAggregatesFilter<"quality_check"> | number
    creation_date_time?: DateTimeWithAggregatesFilter<"quality_check"> | Date | string
    locator_id?: IntWithAggregatesFilter<"quality_check"> | number
    track_id?: StringWithAggregatesFilter<"quality_check"> | string
    checker_name?: StringWithAggregatesFilter<"quality_check"> | string
    customer?: StringWithAggregatesFilter<"quality_check"> | string
    total_ok?: FloatWithAggregatesFilter<"quality_check"> | number
    scrap_reason?: StringWithAggregatesFilter<"quality_check"> | string
    total_ng_scrap?: FloatWithAggregatesFilter<"quality_check"> | number
    imove_scrap_id?: IntNullableWithAggregatesFilter<"quality_check"> | number | null
    repair_reason?: StringWithAggregatesFilter<"quality_check"> | string
    total_ng_repair?: FloatWithAggregatesFilter<"quality_check"> | number
    repair_job_id?: StringNullableWithAggregatesFilter<"quality_check"> | string | null
  }

  export type track_id_objectWhereInput = {
    AND?: track_id_objectWhereInput | track_id_objectWhereInput[]
    OR?: track_id_objectWhereInput[]
    NOT?: track_id_objectWhereInput | track_id_objectWhereInput[]
    track_id?: StringFilter<"track_id_object"> | string
    productId?: IntFilter<"track_id_object"> | number
    productName?: StringFilter<"track_id_object"> | string
    quantityProduced?: IntFilter<"track_id_object"> | number
    unitsPerPallet?: IntFilter<"track_id_object"> | number
    track_type?: StringFilter<"track_id_object"> | string
    creation_date_time?: DateTimeFilter<"track_id_object"> | Date | string
    source_data?: JsonFilter<"track_id_object">
    object_data?: JsonFilter<"track_id_object">
    track_id_history?: Track_id_historyListRelationFilter
    repair_job?: XOR<Repair_jobNullableRelationFilter, repair_jobWhereInput> | null
    quality_check_used_in?: Quality_checkListRelationFilter
    product_single_result?: XOR<Production_single_product_draftNullableRelationFilter, production_single_product_draftWhereInput> | null
  }

  export type track_id_objectOrderByWithRelationInput = {
    track_id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    quantityProduced?: SortOrder
    unitsPerPallet?: SortOrder
    track_type?: SortOrder
    creation_date_time?: SortOrder
    source_data?: SortOrder
    object_data?: SortOrder
    track_id_history?: track_id_historyOrderByRelationAggregateInput
    repair_job?: repair_jobOrderByWithRelationInput
    quality_check_used_in?: quality_checkOrderByRelationAggregateInput
    product_single_result?: production_single_product_draftOrderByWithRelationInput
  }

  export type track_id_objectWhereUniqueInput = Prisma.AtLeast<{
    track_id?: string
    creation_date_time?: Date | string
    AND?: track_id_objectWhereInput | track_id_objectWhereInput[]
    OR?: track_id_objectWhereInput[]
    NOT?: track_id_objectWhereInput | track_id_objectWhereInput[]
    productId?: IntFilter<"track_id_object"> | number
    productName?: StringFilter<"track_id_object"> | string
    quantityProduced?: IntFilter<"track_id_object"> | number
    unitsPerPallet?: IntFilter<"track_id_object"> | number
    track_type?: StringFilter<"track_id_object"> | string
    source_data?: JsonFilter<"track_id_object">
    object_data?: JsonFilter<"track_id_object">
    track_id_history?: Track_id_historyListRelationFilter
    repair_job?: XOR<Repair_jobNullableRelationFilter, repair_jobWhereInput> | null
    quality_check_used_in?: Quality_checkListRelationFilter
    product_single_result?: XOR<Production_single_product_draftNullableRelationFilter, production_single_product_draftWhereInput> | null
  }, "track_id" | "creation_date_time">

  export type track_id_objectOrderByWithAggregationInput = {
    track_id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    quantityProduced?: SortOrder
    unitsPerPallet?: SortOrder
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
    quantityProduced?: IntWithAggregatesFilter<"track_id_object"> | number
    unitsPerPallet?: IntWithAggregatesFilter<"track_id_object"> | number
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
    production_single_scrap_imove?: production_single_product_draftCreateNestedOneWithoutImove_scrap_objInput
    quality_check_scrap_imove?: quality_checkCreateNestedOneWithoutImove_scrap_objInput
    repair_job_imove?: repair_jobCreateNestedOneWithoutImove_repair_objInput
  }

  export type inventory_move_draftUncheckedCreateInput = {
    org_id: number
    creation_date_time: Date | string
    movement_id: number
    data: JsonNullValueInput | InputJsonValue
    production_single_scrap_imove?: production_single_product_draftUncheckedCreateNestedOneWithoutImove_scrap_objInput
    quality_check_scrap_imove?: quality_checkUncheckedCreateNestedOneWithoutImove_scrap_objInput
    repair_job_imove?: repair_jobUncheckedCreateNestedOneWithoutImove_repair_objInput
  }

  export type inventory_move_draftUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    movement_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    production_single_scrap_imove?: production_single_product_draftUpdateOneWithoutImove_scrap_objNestedInput
    quality_check_scrap_imove?: quality_checkUpdateOneWithoutImove_scrap_objNestedInput
    repair_job_imove?: repair_jobUpdateOneWithoutImove_repair_objNestedInput
  }

  export type inventory_move_draftUncheckedUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    movement_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    production_single_scrap_imove?: production_single_product_draftUncheckedUpdateOneWithoutImove_scrap_objNestedInput
    quality_check_scrap_imove?: quality_checkUncheckedUpdateOneWithoutImove_scrap_objNestedInput
    repair_job_imove?: repair_jobUncheckedUpdateOneWithoutImove_repair_objNestedInput
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
    vendor_id?: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type shipment_draftUncheckedCreateInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    vendor_id?: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type shipment_draftUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    vendor_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type shipment_draftUncheckedUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    vendor_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type shipment_draftCreateManyInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    vendor_id?: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type shipment_draftUpdateManyMutationInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    vendor_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type shipment_draftUncheckedUpdateManyInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    vendor_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type material_receive_draftCreateInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    vendor_id?: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type material_receive_draftUncheckedCreateInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    vendor_id?: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type material_receive_draftUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    vendor_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type material_receive_draftUncheckedUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    vendor_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type material_receive_draftCreateManyInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    vendor_id?: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type material_receive_draftUpdateManyMutationInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    vendor_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type material_receive_draftUncheckedUpdateManyInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    vendor_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type production_single_product_draftCreateInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    data: JsonNullValueInput | InputJsonValue
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    repair_reason?: string
    total_ng_repair: number
    track_id_object: track_id_objectCreateNestedOneWithoutProduct_single_resultInput
    imove_scrap_obj?: inventory_move_draftCreateNestedOneWithoutProduction_single_scrap_imoveInput
    repair_job?: repair_jobCreateNestedOneWithoutProduction_single_srcInput
  }

  export type production_single_product_draftUncheckedCreateInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    data: JsonNullValueInput | InputJsonValue
    track_id: string
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    imove_scrap_id?: number | null
    repair_reason?: string
    total_ng_repair: number
    repair_job_id?: string | null
  }

  export type production_single_product_draftUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    track_id_object?: track_id_objectUpdateOneRequiredWithoutProduct_single_resultNestedInput
    imove_scrap_obj?: inventory_move_draftUpdateOneWithoutProduction_single_scrap_imoveNestedInput
    repair_job?: repair_jobUpdateOneWithoutProduction_single_srcNestedInput
  }

  export type production_single_product_draftUncheckedUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    track_id?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    imove_scrap_id?: NullableIntFieldUpdateOperationsInput | number | null
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    repair_job_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type production_single_product_draftCreateManyInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    data: JsonNullValueInput | InputJsonValue
    track_id: string
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    imove_scrap_id?: number | null
    repair_reason?: string
    total_ng_repair: number
    repair_job_id?: string | null
  }

  export type production_single_product_draftUpdateManyMutationInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
  }

  export type production_single_product_draftUncheckedUpdateManyInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    track_id?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    imove_scrap_id?: NullableIntFieldUpdateOperationsInput | number | null
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    repair_job_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type repair_jobCreateInput = {
    org_id: number
    creation_date_time: Date | string
    starting_locator_id?: number
    repair_status?: string
    description?: string
    quantity?: number
    track_id_object: track_id_objectCreateNestedOneWithoutRepair_jobInput
    imove_repair_obj?: inventory_move_draftCreateNestedOneWithoutRepair_job_imoveInput
    quality_check_src?: quality_checkCreateNestedManyWithoutRepair_jobInput
    production_single_src?: production_single_product_draftCreateNestedManyWithoutRepair_jobInput
  }

  export type repair_jobUncheckedCreateInput = {
    org_id: number
    creation_date_time: Date | string
    track_id: string
    imove_repair_id?: number | null
    starting_locator_id?: number
    repair_status?: string
    description?: string
    quantity?: number
    quality_check_src?: quality_checkUncheckedCreateNestedManyWithoutRepair_jobInput
    production_single_src?: production_single_product_draftUncheckedCreateNestedManyWithoutRepair_jobInput
  }

  export type repair_jobUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    starting_locator_id?: IntFieldUpdateOperationsInput | number
    repair_status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    track_id_object?: track_id_objectUpdateOneRequiredWithoutRepair_jobNestedInput
    imove_repair_obj?: inventory_move_draftUpdateOneWithoutRepair_job_imoveNestedInput
    quality_check_src?: quality_checkUpdateManyWithoutRepair_jobNestedInput
    production_single_src?: production_single_product_draftUpdateManyWithoutRepair_jobNestedInput
  }

  export type repair_jobUncheckedUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    track_id?: StringFieldUpdateOperationsInput | string
    imove_repair_id?: NullableIntFieldUpdateOperationsInput | number | null
    starting_locator_id?: IntFieldUpdateOperationsInput | number
    repair_status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    quality_check_src?: quality_checkUncheckedUpdateManyWithoutRepair_jobNestedInput
    production_single_src?: production_single_product_draftUncheckedUpdateManyWithoutRepair_jobNestedInput
  }

  export type repair_jobCreateManyInput = {
    org_id: number
    creation_date_time: Date | string
    track_id: string
    imove_repair_id?: number | null
    starting_locator_id?: number
    repair_status?: string
    description?: string
    quantity?: number
  }

  export type repair_jobUpdateManyMutationInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    starting_locator_id?: IntFieldUpdateOperationsInput | number
    repair_status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type repair_jobUncheckedUpdateManyInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    track_id?: StringFieldUpdateOperationsInput | string
    imove_repair_id?: NullableIntFieldUpdateOperationsInput | number | null
    starting_locator_id?: IntFieldUpdateOperationsInput | number
    repair_status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type quality_checkCreateInput = {
    org_id: number
    creation_date_time: Date | string
    locator_id?: number
    checker_name: string
    customer: string
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    repair_reason?: string
    total_ng_repair: number
    track_id_object: track_id_objectCreateNestedOneWithoutQuality_check_used_inInput
    imove_scrap_obj?: inventory_move_draftCreateNestedOneWithoutQuality_check_scrap_imoveInput
    repair_job?: repair_jobCreateNestedOneWithoutQuality_check_srcInput
  }

  export type quality_checkUncheckedCreateInput = {
    org_id: number
    creation_date_time: Date | string
    locator_id?: number
    track_id: string
    checker_name: string
    customer: string
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    imove_scrap_id?: number | null
    repair_reason?: string
    total_ng_repair: number
    repair_job_id?: string | null
  }

  export type quality_checkUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    locator_id?: IntFieldUpdateOperationsInput | number
    checker_name?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    track_id_object?: track_id_objectUpdateOneRequiredWithoutQuality_check_used_inNestedInput
    imove_scrap_obj?: inventory_move_draftUpdateOneWithoutQuality_check_scrap_imoveNestedInput
    repair_job?: repair_jobUpdateOneWithoutQuality_check_srcNestedInput
  }

  export type quality_checkUncheckedUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    locator_id?: IntFieldUpdateOperationsInput | number
    track_id?: StringFieldUpdateOperationsInput | string
    checker_name?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    imove_scrap_id?: NullableIntFieldUpdateOperationsInput | number | null
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    repair_job_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type quality_checkCreateManyInput = {
    org_id: number
    creation_date_time: Date | string
    locator_id?: number
    track_id: string
    checker_name: string
    customer: string
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    imove_scrap_id?: number | null
    repair_reason?: string
    total_ng_repair: number
    repair_job_id?: string | null
  }

  export type quality_checkUpdateManyMutationInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    locator_id?: IntFieldUpdateOperationsInput | number
    checker_name?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
  }

  export type quality_checkUncheckedUpdateManyInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    locator_id?: IntFieldUpdateOperationsInput | number
    track_id?: StringFieldUpdateOperationsInput | string
    checker_name?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    imove_scrap_id?: NullableIntFieldUpdateOperationsInput | number | null
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    repair_job_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type track_id_objectCreateInput = {
    track_id: string
    productId?: number
    productName?: string
    quantityProduced?: number
    unitsPerPallet?: number
    track_type: string
    creation_date_time?: Date | string
    source_data: JsonNullValueInput | InputJsonValue
    object_data: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyCreateNestedManyWithoutTrack_id_objectInput
    repair_job?: repair_jobCreateNestedOneWithoutTrack_id_objectInput
    quality_check_used_in?: quality_checkCreateNestedManyWithoutTrack_id_objectInput
    product_single_result?: production_single_product_draftCreateNestedOneWithoutTrack_id_objectInput
  }

  export type track_id_objectUncheckedCreateInput = {
    track_id: string
    productId?: number
    productName?: string
    quantityProduced?: number
    unitsPerPallet?: number
    track_type: string
    creation_date_time?: Date | string
    source_data: JsonNullValueInput | InputJsonValue
    object_data: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyUncheckedCreateNestedManyWithoutTrack_id_objectInput
    repair_job?: repair_jobUncheckedCreateNestedOneWithoutTrack_id_objectInput
    quality_check_used_in?: quality_checkUncheckedCreateNestedManyWithoutTrack_id_objectInput
    product_single_result?: production_single_product_draftUncheckedCreateNestedOneWithoutTrack_id_objectInput
  }

  export type track_id_objectUpdateInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    quantityProduced?: IntFieldUpdateOperationsInput | number
    unitsPerPallet?: IntFieldUpdateOperationsInput | number
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyUpdateManyWithoutTrack_id_objectNestedInput
    repair_job?: repair_jobUpdateOneWithoutTrack_id_objectNestedInput
    quality_check_used_in?: quality_checkUpdateManyWithoutTrack_id_objectNestedInput
    product_single_result?: production_single_product_draftUpdateOneWithoutTrack_id_objectNestedInput
  }

  export type track_id_objectUncheckedUpdateInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    quantityProduced?: IntFieldUpdateOperationsInput | number
    unitsPerPallet?: IntFieldUpdateOperationsInput | number
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyUncheckedUpdateManyWithoutTrack_id_objectNestedInput
    repair_job?: repair_jobUncheckedUpdateOneWithoutTrack_id_objectNestedInput
    quality_check_used_in?: quality_checkUncheckedUpdateManyWithoutTrack_id_objectNestedInput
    product_single_result?: production_single_product_draftUncheckedUpdateOneWithoutTrack_id_objectNestedInput
  }

  export type track_id_objectCreateManyInput = {
    track_id: string
    productId?: number
    productName?: string
    quantityProduced?: number
    unitsPerPallet?: number
    track_type: string
    creation_date_time?: Date | string
    source_data: JsonNullValueInput | InputJsonValue
    object_data: JsonNullValueInput | InputJsonValue
  }

  export type track_id_objectUpdateManyMutationInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    quantityProduced?: IntFieldUpdateOperationsInput | number
    unitsPerPallet?: IntFieldUpdateOperationsInput | number
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
  }

  export type track_id_objectUncheckedUpdateManyInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    quantityProduced?: IntFieldUpdateOperationsInput | number
    unitsPerPallet?: IntFieldUpdateOperationsInput | number
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

  export type Production_single_product_draftNullableRelationFilter = {
    is?: production_single_product_draftWhereInput | null
    isNot?: production_single_product_draftWhereInput | null
  }

  export type Quality_checkNullableRelationFilter = {
    is?: quality_checkWhereInput | null
    isNot?: quality_checkWhereInput | null
  }

  export type Repair_jobNullableRelationFilter = {
    is?: repair_jobWhereInput | null
    isNot?: repair_jobWhereInput | null
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
    vendor_id?: SortOrder
    data?: SortOrder
  }

  export type shipment_draftAvgOrderByAggregateInput = {
    org_id?: SortOrder
    erp_id?: SortOrder
    vendor_id?: SortOrder
  }

  export type shipment_draftMaxOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    vendor_id?: SortOrder
  }

  export type shipment_draftMinOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    vendor_id?: SortOrder
  }

  export type shipment_draftSumOrderByAggregateInput = {
    org_id?: SortOrder
    erp_id?: SortOrder
    vendor_id?: SortOrder
  }

  export type material_receive_draftOrg_idCreation_date_timeCompoundUniqueInput = {
    org_id: number
    creation_date_time: Date | string
  }

  export type material_receive_draftCountOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    vendor_id?: SortOrder
    data?: SortOrder
  }

  export type material_receive_draftAvgOrderByAggregateInput = {
    org_id?: SortOrder
    erp_id?: SortOrder
    vendor_id?: SortOrder
  }

  export type material_receive_draftMaxOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    vendor_id?: SortOrder
  }

  export type material_receive_draftMinOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    vendor_id?: SortOrder
  }

  export type material_receive_draftSumOrderByAggregateInput = {
    org_id?: SortOrder
    erp_id?: SortOrder
    vendor_id?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Track_id_objectRelationFilter = {
    is?: track_id_objectWhereInput
    isNot?: track_id_objectWhereInput
  }

  export type Inventory_move_draftNullableRelationFilter = {
    is?: inventory_move_draftWhereInput | null
    isNot?: inventory_move_draftWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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
    track_id?: SortOrder
    total_ok?: SortOrder
    scrap_reason?: SortOrder
    total_ng_scrap?: SortOrder
    imove_scrap_id?: SortOrder
    repair_reason?: SortOrder
    total_ng_repair?: SortOrder
    repair_job_id?: SortOrder
  }

  export type production_single_product_draftAvgOrderByAggregateInput = {
    org_id?: SortOrder
    erp_id?: SortOrder
    total_ok?: SortOrder
    total_ng_scrap?: SortOrder
    imove_scrap_id?: SortOrder
    total_ng_repair?: SortOrder
  }

  export type production_single_product_draftMaxOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    track_id?: SortOrder
    total_ok?: SortOrder
    scrap_reason?: SortOrder
    total_ng_scrap?: SortOrder
    imove_scrap_id?: SortOrder
    repair_reason?: SortOrder
    total_ng_repair?: SortOrder
    repair_job_id?: SortOrder
  }

  export type production_single_product_draftMinOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    erp_id?: SortOrder
    track_id?: SortOrder
    total_ok?: SortOrder
    scrap_reason?: SortOrder
    total_ng_scrap?: SortOrder
    imove_scrap_id?: SortOrder
    repair_reason?: SortOrder
    total_ng_repair?: SortOrder
    repair_job_id?: SortOrder
  }

  export type production_single_product_draftSumOrderByAggregateInput = {
    org_id?: SortOrder
    erp_id?: SortOrder
    total_ok?: SortOrder
    total_ng_scrap?: SortOrder
    imove_scrap_id?: SortOrder
    total_ng_repair?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Quality_checkListRelationFilter = {
    every?: quality_checkWhereInput
    some?: quality_checkWhereInput
    none?: quality_checkWhereInput
  }

  export type Production_single_product_draftListRelationFilter = {
    every?: production_single_product_draftWhereInput
    some?: production_single_product_draftWhereInput
    none?: production_single_product_draftWhereInput
  }

  export type quality_checkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type production_single_product_draftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type repair_jobOrg_idCreation_date_timeCompoundUniqueInput = {
    org_id: number
    creation_date_time: Date | string
  }

  export type repair_jobCountOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    track_id?: SortOrder
    imove_repair_id?: SortOrder
    starting_locator_id?: SortOrder
    repair_status?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
  }

  export type repair_jobAvgOrderByAggregateInput = {
    org_id?: SortOrder
    imove_repair_id?: SortOrder
    starting_locator_id?: SortOrder
    quantity?: SortOrder
  }

  export type repair_jobMaxOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    track_id?: SortOrder
    imove_repair_id?: SortOrder
    starting_locator_id?: SortOrder
    repair_status?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
  }

  export type repair_jobMinOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    track_id?: SortOrder
    imove_repair_id?: SortOrder
    starting_locator_id?: SortOrder
    repair_status?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
  }

  export type repair_jobSumOrderByAggregateInput = {
    org_id?: SortOrder
    imove_repair_id?: SortOrder
    starting_locator_id?: SortOrder
    quantity?: SortOrder
  }

  export type quality_checkOrg_idCreation_date_timeCompoundUniqueInput = {
    org_id: number
    creation_date_time: Date | string
  }

  export type quality_checkCountOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    locator_id?: SortOrder
    track_id?: SortOrder
    checker_name?: SortOrder
    customer?: SortOrder
    total_ok?: SortOrder
    scrap_reason?: SortOrder
    total_ng_scrap?: SortOrder
    imove_scrap_id?: SortOrder
    repair_reason?: SortOrder
    total_ng_repair?: SortOrder
    repair_job_id?: SortOrder
  }

  export type quality_checkAvgOrderByAggregateInput = {
    org_id?: SortOrder
    locator_id?: SortOrder
    total_ok?: SortOrder
    total_ng_scrap?: SortOrder
    imove_scrap_id?: SortOrder
    total_ng_repair?: SortOrder
  }

  export type quality_checkMaxOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    locator_id?: SortOrder
    track_id?: SortOrder
    checker_name?: SortOrder
    customer?: SortOrder
    total_ok?: SortOrder
    scrap_reason?: SortOrder
    total_ng_scrap?: SortOrder
    imove_scrap_id?: SortOrder
    repair_reason?: SortOrder
    total_ng_repair?: SortOrder
    repair_job_id?: SortOrder
  }

  export type quality_checkMinOrderByAggregateInput = {
    org_id?: SortOrder
    creation_date_time?: SortOrder
    locator_id?: SortOrder
    track_id?: SortOrder
    checker_name?: SortOrder
    customer?: SortOrder
    total_ok?: SortOrder
    scrap_reason?: SortOrder
    total_ng_scrap?: SortOrder
    imove_scrap_id?: SortOrder
    repair_reason?: SortOrder
    total_ng_repair?: SortOrder
    repair_job_id?: SortOrder
  }

  export type quality_checkSumOrderByAggregateInput = {
    org_id?: SortOrder
    locator_id?: SortOrder
    total_ok?: SortOrder
    total_ng_scrap?: SortOrder
    imove_scrap_id?: SortOrder
    total_ng_repair?: SortOrder
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
    quantityProduced?: SortOrder
    unitsPerPallet?: SortOrder
    track_type?: SortOrder
    creation_date_time?: SortOrder
    source_data?: SortOrder
    object_data?: SortOrder
  }

  export type track_id_objectAvgOrderByAggregateInput = {
    productId?: SortOrder
    quantityProduced?: SortOrder
    unitsPerPallet?: SortOrder
  }

  export type track_id_objectMaxOrderByAggregateInput = {
    track_id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    quantityProduced?: SortOrder
    unitsPerPallet?: SortOrder
    track_type?: SortOrder
    creation_date_time?: SortOrder
  }

  export type track_id_objectMinOrderByAggregateInput = {
    track_id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    quantityProduced?: SortOrder
    unitsPerPallet?: SortOrder
    track_type?: SortOrder
    creation_date_time?: SortOrder
  }

  export type track_id_objectSumOrderByAggregateInput = {
    productId?: SortOrder
    quantityProduced?: SortOrder
    unitsPerPallet?: SortOrder
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

  export type production_single_product_draftCreateNestedOneWithoutImove_scrap_objInput = {
    create?: XOR<production_single_product_draftCreateWithoutImove_scrap_objInput, production_single_product_draftUncheckedCreateWithoutImove_scrap_objInput>
    connectOrCreate?: production_single_product_draftCreateOrConnectWithoutImove_scrap_objInput
    connect?: production_single_product_draftWhereUniqueInput
  }

  export type quality_checkCreateNestedOneWithoutImove_scrap_objInput = {
    create?: XOR<quality_checkCreateWithoutImove_scrap_objInput, quality_checkUncheckedCreateWithoutImove_scrap_objInput>
    connectOrCreate?: quality_checkCreateOrConnectWithoutImove_scrap_objInput
    connect?: quality_checkWhereUniqueInput
  }

  export type repair_jobCreateNestedOneWithoutImove_repair_objInput = {
    create?: XOR<repair_jobCreateWithoutImove_repair_objInput, repair_jobUncheckedCreateWithoutImove_repair_objInput>
    connectOrCreate?: repair_jobCreateOrConnectWithoutImove_repair_objInput
    connect?: repair_jobWhereUniqueInput
  }

  export type production_single_product_draftUncheckedCreateNestedOneWithoutImove_scrap_objInput = {
    create?: XOR<production_single_product_draftCreateWithoutImove_scrap_objInput, production_single_product_draftUncheckedCreateWithoutImove_scrap_objInput>
    connectOrCreate?: production_single_product_draftCreateOrConnectWithoutImove_scrap_objInput
    connect?: production_single_product_draftWhereUniqueInput
  }

  export type quality_checkUncheckedCreateNestedOneWithoutImove_scrap_objInput = {
    create?: XOR<quality_checkCreateWithoutImove_scrap_objInput, quality_checkUncheckedCreateWithoutImove_scrap_objInput>
    connectOrCreate?: quality_checkCreateOrConnectWithoutImove_scrap_objInput
    connect?: quality_checkWhereUniqueInput
  }

  export type repair_jobUncheckedCreateNestedOneWithoutImove_repair_objInput = {
    create?: XOR<repair_jobCreateWithoutImove_repair_objInput, repair_jobUncheckedCreateWithoutImove_repair_objInput>
    connectOrCreate?: repair_jobCreateOrConnectWithoutImove_repair_objInput
    connect?: repair_jobWhereUniqueInput
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

  export type production_single_product_draftUpdateOneWithoutImove_scrap_objNestedInput = {
    create?: XOR<production_single_product_draftCreateWithoutImove_scrap_objInput, production_single_product_draftUncheckedCreateWithoutImove_scrap_objInput>
    connectOrCreate?: production_single_product_draftCreateOrConnectWithoutImove_scrap_objInput
    upsert?: production_single_product_draftUpsertWithoutImove_scrap_objInput
    disconnect?: production_single_product_draftWhereInput | boolean
    delete?: production_single_product_draftWhereInput | boolean
    connect?: production_single_product_draftWhereUniqueInput
    update?: XOR<XOR<production_single_product_draftUpdateToOneWithWhereWithoutImove_scrap_objInput, production_single_product_draftUpdateWithoutImove_scrap_objInput>, production_single_product_draftUncheckedUpdateWithoutImove_scrap_objInput>
  }

  export type quality_checkUpdateOneWithoutImove_scrap_objNestedInput = {
    create?: XOR<quality_checkCreateWithoutImove_scrap_objInput, quality_checkUncheckedCreateWithoutImove_scrap_objInput>
    connectOrCreate?: quality_checkCreateOrConnectWithoutImove_scrap_objInput
    upsert?: quality_checkUpsertWithoutImove_scrap_objInput
    disconnect?: quality_checkWhereInput | boolean
    delete?: quality_checkWhereInput | boolean
    connect?: quality_checkWhereUniqueInput
    update?: XOR<XOR<quality_checkUpdateToOneWithWhereWithoutImove_scrap_objInput, quality_checkUpdateWithoutImove_scrap_objInput>, quality_checkUncheckedUpdateWithoutImove_scrap_objInput>
  }

  export type repair_jobUpdateOneWithoutImove_repair_objNestedInput = {
    create?: XOR<repair_jobCreateWithoutImove_repair_objInput, repair_jobUncheckedCreateWithoutImove_repair_objInput>
    connectOrCreate?: repair_jobCreateOrConnectWithoutImove_repair_objInput
    upsert?: repair_jobUpsertWithoutImove_repair_objInput
    disconnect?: repair_jobWhereInput | boolean
    delete?: repair_jobWhereInput | boolean
    connect?: repair_jobWhereUniqueInput
    update?: XOR<XOR<repair_jobUpdateToOneWithWhereWithoutImove_repair_objInput, repair_jobUpdateWithoutImove_repair_objInput>, repair_jobUncheckedUpdateWithoutImove_repair_objInput>
  }

  export type production_single_product_draftUncheckedUpdateOneWithoutImove_scrap_objNestedInput = {
    create?: XOR<production_single_product_draftCreateWithoutImove_scrap_objInput, production_single_product_draftUncheckedCreateWithoutImove_scrap_objInput>
    connectOrCreate?: production_single_product_draftCreateOrConnectWithoutImove_scrap_objInput
    upsert?: production_single_product_draftUpsertWithoutImove_scrap_objInput
    disconnect?: production_single_product_draftWhereInput | boolean
    delete?: production_single_product_draftWhereInput | boolean
    connect?: production_single_product_draftWhereUniqueInput
    update?: XOR<XOR<production_single_product_draftUpdateToOneWithWhereWithoutImove_scrap_objInput, production_single_product_draftUpdateWithoutImove_scrap_objInput>, production_single_product_draftUncheckedUpdateWithoutImove_scrap_objInput>
  }

  export type quality_checkUncheckedUpdateOneWithoutImove_scrap_objNestedInput = {
    create?: XOR<quality_checkCreateWithoutImove_scrap_objInput, quality_checkUncheckedCreateWithoutImove_scrap_objInput>
    connectOrCreate?: quality_checkCreateOrConnectWithoutImove_scrap_objInput
    upsert?: quality_checkUpsertWithoutImove_scrap_objInput
    disconnect?: quality_checkWhereInput | boolean
    delete?: quality_checkWhereInput | boolean
    connect?: quality_checkWhereUniqueInput
    update?: XOR<XOR<quality_checkUpdateToOneWithWhereWithoutImove_scrap_objInput, quality_checkUpdateWithoutImove_scrap_objInput>, quality_checkUncheckedUpdateWithoutImove_scrap_objInput>
  }

  export type repair_jobUncheckedUpdateOneWithoutImove_repair_objNestedInput = {
    create?: XOR<repair_jobCreateWithoutImove_repair_objInput, repair_jobUncheckedCreateWithoutImove_repair_objInput>
    connectOrCreate?: repair_jobCreateOrConnectWithoutImove_repair_objInput
    upsert?: repair_jobUpsertWithoutImove_repair_objInput
    disconnect?: repair_jobWhereInput | boolean
    delete?: repair_jobWhereInput | boolean
    connect?: repair_jobWhereUniqueInput
    update?: XOR<XOR<repair_jobUpdateToOneWithWhereWithoutImove_repair_objInput, repair_jobUpdateWithoutImove_repair_objInput>, repair_jobUncheckedUpdateWithoutImove_repair_objInput>
  }

  export type track_id_objectCreateNestedOneWithoutProduct_single_resultInput = {
    create?: XOR<track_id_objectCreateWithoutProduct_single_resultInput, track_id_objectUncheckedCreateWithoutProduct_single_resultInput>
    connectOrCreate?: track_id_objectCreateOrConnectWithoutProduct_single_resultInput
    connect?: track_id_objectWhereUniqueInput
  }

  export type inventory_move_draftCreateNestedOneWithoutProduction_single_scrap_imoveInput = {
    create?: XOR<inventory_move_draftCreateWithoutProduction_single_scrap_imoveInput, inventory_move_draftUncheckedCreateWithoutProduction_single_scrap_imoveInput>
    connectOrCreate?: inventory_move_draftCreateOrConnectWithoutProduction_single_scrap_imoveInput
    connect?: inventory_move_draftWhereUniqueInput
  }

  export type repair_jobCreateNestedOneWithoutProduction_single_srcInput = {
    create?: XOR<repair_jobCreateWithoutProduction_single_srcInput, repair_jobUncheckedCreateWithoutProduction_single_srcInput>
    connectOrCreate?: repair_jobCreateOrConnectWithoutProduction_single_srcInput
    connect?: repair_jobWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type track_id_objectUpdateOneRequiredWithoutProduct_single_resultNestedInput = {
    create?: XOR<track_id_objectCreateWithoutProduct_single_resultInput, track_id_objectUncheckedCreateWithoutProduct_single_resultInput>
    connectOrCreate?: track_id_objectCreateOrConnectWithoutProduct_single_resultInput
    upsert?: track_id_objectUpsertWithoutProduct_single_resultInput
    connect?: track_id_objectWhereUniqueInput
    update?: XOR<XOR<track_id_objectUpdateToOneWithWhereWithoutProduct_single_resultInput, track_id_objectUpdateWithoutProduct_single_resultInput>, track_id_objectUncheckedUpdateWithoutProduct_single_resultInput>
  }

  export type inventory_move_draftUpdateOneWithoutProduction_single_scrap_imoveNestedInput = {
    create?: XOR<inventory_move_draftCreateWithoutProduction_single_scrap_imoveInput, inventory_move_draftUncheckedCreateWithoutProduction_single_scrap_imoveInput>
    connectOrCreate?: inventory_move_draftCreateOrConnectWithoutProduction_single_scrap_imoveInput
    upsert?: inventory_move_draftUpsertWithoutProduction_single_scrap_imoveInput
    disconnect?: inventory_move_draftWhereInput | boolean
    delete?: inventory_move_draftWhereInput | boolean
    connect?: inventory_move_draftWhereUniqueInput
    update?: XOR<XOR<inventory_move_draftUpdateToOneWithWhereWithoutProduction_single_scrap_imoveInput, inventory_move_draftUpdateWithoutProduction_single_scrap_imoveInput>, inventory_move_draftUncheckedUpdateWithoutProduction_single_scrap_imoveInput>
  }

  export type repair_jobUpdateOneWithoutProduction_single_srcNestedInput = {
    create?: XOR<repair_jobCreateWithoutProduction_single_srcInput, repair_jobUncheckedCreateWithoutProduction_single_srcInput>
    connectOrCreate?: repair_jobCreateOrConnectWithoutProduction_single_srcInput
    upsert?: repair_jobUpsertWithoutProduction_single_srcInput
    disconnect?: repair_jobWhereInput | boolean
    delete?: repair_jobWhereInput | boolean
    connect?: repair_jobWhereUniqueInput
    update?: XOR<XOR<repair_jobUpdateToOneWithWhereWithoutProduction_single_srcInput, repair_jobUpdateWithoutProduction_single_srcInput>, repair_jobUncheckedUpdateWithoutProduction_single_srcInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type track_id_objectCreateNestedOneWithoutRepair_jobInput = {
    create?: XOR<track_id_objectCreateWithoutRepair_jobInput, track_id_objectUncheckedCreateWithoutRepair_jobInput>
    connectOrCreate?: track_id_objectCreateOrConnectWithoutRepair_jobInput
    connect?: track_id_objectWhereUniqueInput
  }

  export type inventory_move_draftCreateNestedOneWithoutRepair_job_imoveInput = {
    create?: XOR<inventory_move_draftCreateWithoutRepair_job_imoveInput, inventory_move_draftUncheckedCreateWithoutRepair_job_imoveInput>
    connectOrCreate?: inventory_move_draftCreateOrConnectWithoutRepair_job_imoveInput
    connect?: inventory_move_draftWhereUniqueInput
  }

  export type quality_checkCreateNestedManyWithoutRepair_jobInput = {
    create?: XOR<quality_checkCreateWithoutRepair_jobInput, quality_checkUncheckedCreateWithoutRepair_jobInput> | quality_checkCreateWithoutRepair_jobInput[] | quality_checkUncheckedCreateWithoutRepair_jobInput[]
    connectOrCreate?: quality_checkCreateOrConnectWithoutRepair_jobInput | quality_checkCreateOrConnectWithoutRepair_jobInput[]
    createMany?: quality_checkCreateManyRepair_jobInputEnvelope
    connect?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
  }

  export type production_single_product_draftCreateNestedManyWithoutRepair_jobInput = {
    create?: XOR<production_single_product_draftCreateWithoutRepair_jobInput, production_single_product_draftUncheckedCreateWithoutRepair_jobInput> | production_single_product_draftCreateWithoutRepair_jobInput[] | production_single_product_draftUncheckedCreateWithoutRepair_jobInput[]
    connectOrCreate?: production_single_product_draftCreateOrConnectWithoutRepair_jobInput | production_single_product_draftCreateOrConnectWithoutRepair_jobInput[]
    createMany?: production_single_product_draftCreateManyRepair_jobInputEnvelope
    connect?: production_single_product_draftWhereUniqueInput | production_single_product_draftWhereUniqueInput[]
  }

  export type quality_checkUncheckedCreateNestedManyWithoutRepair_jobInput = {
    create?: XOR<quality_checkCreateWithoutRepair_jobInput, quality_checkUncheckedCreateWithoutRepair_jobInput> | quality_checkCreateWithoutRepair_jobInput[] | quality_checkUncheckedCreateWithoutRepair_jobInput[]
    connectOrCreate?: quality_checkCreateOrConnectWithoutRepair_jobInput | quality_checkCreateOrConnectWithoutRepair_jobInput[]
    createMany?: quality_checkCreateManyRepair_jobInputEnvelope
    connect?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
  }

  export type production_single_product_draftUncheckedCreateNestedManyWithoutRepair_jobInput = {
    create?: XOR<production_single_product_draftCreateWithoutRepair_jobInput, production_single_product_draftUncheckedCreateWithoutRepair_jobInput> | production_single_product_draftCreateWithoutRepair_jobInput[] | production_single_product_draftUncheckedCreateWithoutRepair_jobInput[]
    connectOrCreate?: production_single_product_draftCreateOrConnectWithoutRepair_jobInput | production_single_product_draftCreateOrConnectWithoutRepair_jobInput[]
    createMany?: production_single_product_draftCreateManyRepair_jobInputEnvelope
    connect?: production_single_product_draftWhereUniqueInput | production_single_product_draftWhereUniqueInput[]
  }

  export type track_id_objectUpdateOneRequiredWithoutRepair_jobNestedInput = {
    create?: XOR<track_id_objectCreateWithoutRepair_jobInput, track_id_objectUncheckedCreateWithoutRepair_jobInput>
    connectOrCreate?: track_id_objectCreateOrConnectWithoutRepair_jobInput
    upsert?: track_id_objectUpsertWithoutRepair_jobInput
    connect?: track_id_objectWhereUniqueInput
    update?: XOR<XOR<track_id_objectUpdateToOneWithWhereWithoutRepair_jobInput, track_id_objectUpdateWithoutRepair_jobInput>, track_id_objectUncheckedUpdateWithoutRepair_jobInput>
  }

  export type inventory_move_draftUpdateOneWithoutRepair_job_imoveNestedInput = {
    create?: XOR<inventory_move_draftCreateWithoutRepair_job_imoveInput, inventory_move_draftUncheckedCreateWithoutRepair_job_imoveInput>
    connectOrCreate?: inventory_move_draftCreateOrConnectWithoutRepair_job_imoveInput
    upsert?: inventory_move_draftUpsertWithoutRepair_job_imoveInput
    disconnect?: inventory_move_draftWhereInput | boolean
    delete?: inventory_move_draftWhereInput | boolean
    connect?: inventory_move_draftWhereUniqueInput
    update?: XOR<XOR<inventory_move_draftUpdateToOneWithWhereWithoutRepair_job_imoveInput, inventory_move_draftUpdateWithoutRepair_job_imoveInput>, inventory_move_draftUncheckedUpdateWithoutRepair_job_imoveInput>
  }

  export type quality_checkUpdateManyWithoutRepair_jobNestedInput = {
    create?: XOR<quality_checkCreateWithoutRepair_jobInput, quality_checkUncheckedCreateWithoutRepair_jobInput> | quality_checkCreateWithoutRepair_jobInput[] | quality_checkUncheckedCreateWithoutRepair_jobInput[]
    connectOrCreate?: quality_checkCreateOrConnectWithoutRepair_jobInput | quality_checkCreateOrConnectWithoutRepair_jobInput[]
    upsert?: quality_checkUpsertWithWhereUniqueWithoutRepair_jobInput | quality_checkUpsertWithWhereUniqueWithoutRepair_jobInput[]
    createMany?: quality_checkCreateManyRepair_jobInputEnvelope
    set?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
    disconnect?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
    delete?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
    connect?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
    update?: quality_checkUpdateWithWhereUniqueWithoutRepair_jobInput | quality_checkUpdateWithWhereUniqueWithoutRepair_jobInput[]
    updateMany?: quality_checkUpdateManyWithWhereWithoutRepair_jobInput | quality_checkUpdateManyWithWhereWithoutRepair_jobInput[]
    deleteMany?: quality_checkScalarWhereInput | quality_checkScalarWhereInput[]
  }

  export type production_single_product_draftUpdateManyWithoutRepair_jobNestedInput = {
    create?: XOR<production_single_product_draftCreateWithoutRepair_jobInput, production_single_product_draftUncheckedCreateWithoutRepair_jobInput> | production_single_product_draftCreateWithoutRepair_jobInput[] | production_single_product_draftUncheckedCreateWithoutRepair_jobInput[]
    connectOrCreate?: production_single_product_draftCreateOrConnectWithoutRepair_jobInput | production_single_product_draftCreateOrConnectWithoutRepair_jobInput[]
    upsert?: production_single_product_draftUpsertWithWhereUniqueWithoutRepair_jobInput | production_single_product_draftUpsertWithWhereUniqueWithoutRepair_jobInput[]
    createMany?: production_single_product_draftCreateManyRepair_jobInputEnvelope
    set?: production_single_product_draftWhereUniqueInput | production_single_product_draftWhereUniqueInput[]
    disconnect?: production_single_product_draftWhereUniqueInput | production_single_product_draftWhereUniqueInput[]
    delete?: production_single_product_draftWhereUniqueInput | production_single_product_draftWhereUniqueInput[]
    connect?: production_single_product_draftWhereUniqueInput | production_single_product_draftWhereUniqueInput[]
    update?: production_single_product_draftUpdateWithWhereUniqueWithoutRepair_jobInput | production_single_product_draftUpdateWithWhereUniqueWithoutRepair_jobInput[]
    updateMany?: production_single_product_draftUpdateManyWithWhereWithoutRepair_jobInput | production_single_product_draftUpdateManyWithWhereWithoutRepair_jobInput[]
    deleteMany?: production_single_product_draftScalarWhereInput | production_single_product_draftScalarWhereInput[]
  }

  export type quality_checkUncheckedUpdateManyWithoutRepair_jobNestedInput = {
    create?: XOR<quality_checkCreateWithoutRepair_jobInput, quality_checkUncheckedCreateWithoutRepair_jobInput> | quality_checkCreateWithoutRepair_jobInput[] | quality_checkUncheckedCreateWithoutRepair_jobInput[]
    connectOrCreate?: quality_checkCreateOrConnectWithoutRepair_jobInput | quality_checkCreateOrConnectWithoutRepair_jobInput[]
    upsert?: quality_checkUpsertWithWhereUniqueWithoutRepair_jobInput | quality_checkUpsertWithWhereUniqueWithoutRepair_jobInput[]
    createMany?: quality_checkCreateManyRepair_jobInputEnvelope
    set?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
    disconnect?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
    delete?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
    connect?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
    update?: quality_checkUpdateWithWhereUniqueWithoutRepair_jobInput | quality_checkUpdateWithWhereUniqueWithoutRepair_jobInput[]
    updateMany?: quality_checkUpdateManyWithWhereWithoutRepair_jobInput | quality_checkUpdateManyWithWhereWithoutRepair_jobInput[]
    deleteMany?: quality_checkScalarWhereInput | quality_checkScalarWhereInput[]
  }

  export type production_single_product_draftUncheckedUpdateManyWithoutRepair_jobNestedInput = {
    create?: XOR<production_single_product_draftCreateWithoutRepair_jobInput, production_single_product_draftUncheckedCreateWithoutRepair_jobInput> | production_single_product_draftCreateWithoutRepair_jobInput[] | production_single_product_draftUncheckedCreateWithoutRepair_jobInput[]
    connectOrCreate?: production_single_product_draftCreateOrConnectWithoutRepair_jobInput | production_single_product_draftCreateOrConnectWithoutRepair_jobInput[]
    upsert?: production_single_product_draftUpsertWithWhereUniqueWithoutRepair_jobInput | production_single_product_draftUpsertWithWhereUniqueWithoutRepair_jobInput[]
    createMany?: production_single_product_draftCreateManyRepair_jobInputEnvelope
    set?: production_single_product_draftWhereUniqueInput | production_single_product_draftWhereUniqueInput[]
    disconnect?: production_single_product_draftWhereUniqueInput | production_single_product_draftWhereUniqueInput[]
    delete?: production_single_product_draftWhereUniqueInput | production_single_product_draftWhereUniqueInput[]
    connect?: production_single_product_draftWhereUniqueInput | production_single_product_draftWhereUniqueInput[]
    update?: production_single_product_draftUpdateWithWhereUniqueWithoutRepair_jobInput | production_single_product_draftUpdateWithWhereUniqueWithoutRepair_jobInput[]
    updateMany?: production_single_product_draftUpdateManyWithWhereWithoutRepair_jobInput | production_single_product_draftUpdateManyWithWhereWithoutRepair_jobInput[]
    deleteMany?: production_single_product_draftScalarWhereInput | production_single_product_draftScalarWhereInput[]
  }

  export type track_id_objectCreateNestedOneWithoutQuality_check_used_inInput = {
    create?: XOR<track_id_objectCreateWithoutQuality_check_used_inInput, track_id_objectUncheckedCreateWithoutQuality_check_used_inInput>
    connectOrCreate?: track_id_objectCreateOrConnectWithoutQuality_check_used_inInput
    connect?: track_id_objectWhereUniqueInput
  }

  export type inventory_move_draftCreateNestedOneWithoutQuality_check_scrap_imoveInput = {
    create?: XOR<inventory_move_draftCreateWithoutQuality_check_scrap_imoveInput, inventory_move_draftUncheckedCreateWithoutQuality_check_scrap_imoveInput>
    connectOrCreate?: inventory_move_draftCreateOrConnectWithoutQuality_check_scrap_imoveInput
    connect?: inventory_move_draftWhereUniqueInput
  }

  export type repair_jobCreateNestedOneWithoutQuality_check_srcInput = {
    create?: XOR<repair_jobCreateWithoutQuality_check_srcInput, repair_jobUncheckedCreateWithoutQuality_check_srcInput>
    connectOrCreate?: repair_jobCreateOrConnectWithoutQuality_check_srcInput
    connect?: repair_jobWhereUniqueInput
  }

  export type track_id_objectUpdateOneRequiredWithoutQuality_check_used_inNestedInput = {
    create?: XOR<track_id_objectCreateWithoutQuality_check_used_inInput, track_id_objectUncheckedCreateWithoutQuality_check_used_inInput>
    connectOrCreate?: track_id_objectCreateOrConnectWithoutQuality_check_used_inInput
    upsert?: track_id_objectUpsertWithoutQuality_check_used_inInput
    connect?: track_id_objectWhereUniqueInput
    update?: XOR<XOR<track_id_objectUpdateToOneWithWhereWithoutQuality_check_used_inInput, track_id_objectUpdateWithoutQuality_check_used_inInput>, track_id_objectUncheckedUpdateWithoutQuality_check_used_inInput>
  }

  export type inventory_move_draftUpdateOneWithoutQuality_check_scrap_imoveNestedInput = {
    create?: XOR<inventory_move_draftCreateWithoutQuality_check_scrap_imoveInput, inventory_move_draftUncheckedCreateWithoutQuality_check_scrap_imoveInput>
    connectOrCreate?: inventory_move_draftCreateOrConnectWithoutQuality_check_scrap_imoveInput
    upsert?: inventory_move_draftUpsertWithoutQuality_check_scrap_imoveInput
    disconnect?: inventory_move_draftWhereInput | boolean
    delete?: inventory_move_draftWhereInput | boolean
    connect?: inventory_move_draftWhereUniqueInput
    update?: XOR<XOR<inventory_move_draftUpdateToOneWithWhereWithoutQuality_check_scrap_imoveInput, inventory_move_draftUpdateWithoutQuality_check_scrap_imoveInput>, inventory_move_draftUncheckedUpdateWithoutQuality_check_scrap_imoveInput>
  }

  export type repair_jobUpdateOneWithoutQuality_check_srcNestedInput = {
    create?: XOR<repair_jobCreateWithoutQuality_check_srcInput, repair_jobUncheckedCreateWithoutQuality_check_srcInput>
    connectOrCreate?: repair_jobCreateOrConnectWithoutQuality_check_srcInput
    upsert?: repair_jobUpsertWithoutQuality_check_srcInput
    disconnect?: repair_jobWhereInput | boolean
    delete?: repair_jobWhereInput | boolean
    connect?: repair_jobWhereUniqueInput
    update?: XOR<XOR<repair_jobUpdateToOneWithWhereWithoutQuality_check_srcInput, repair_jobUpdateWithoutQuality_check_srcInput>, repair_jobUncheckedUpdateWithoutQuality_check_srcInput>
  }

  export type track_id_historyCreateNestedManyWithoutTrack_id_objectInput = {
    create?: XOR<track_id_historyCreateWithoutTrack_id_objectInput, track_id_historyUncheckedCreateWithoutTrack_id_objectInput> | track_id_historyCreateWithoutTrack_id_objectInput[] | track_id_historyUncheckedCreateWithoutTrack_id_objectInput[]
    connectOrCreate?: track_id_historyCreateOrConnectWithoutTrack_id_objectInput | track_id_historyCreateOrConnectWithoutTrack_id_objectInput[]
    createMany?: track_id_historyCreateManyTrack_id_objectInputEnvelope
    connect?: track_id_historyWhereUniqueInput | track_id_historyWhereUniqueInput[]
  }

  export type repair_jobCreateNestedOneWithoutTrack_id_objectInput = {
    create?: XOR<repair_jobCreateWithoutTrack_id_objectInput, repair_jobUncheckedCreateWithoutTrack_id_objectInput>
    connectOrCreate?: repair_jobCreateOrConnectWithoutTrack_id_objectInput
    connect?: repair_jobWhereUniqueInput
  }

  export type quality_checkCreateNestedManyWithoutTrack_id_objectInput = {
    create?: XOR<quality_checkCreateWithoutTrack_id_objectInput, quality_checkUncheckedCreateWithoutTrack_id_objectInput> | quality_checkCreateWithoutTrack_id_objectInput[] | quality_checkUncheckedCreateWithoutTrack_id_objectInput[]
    connectOrCreate?: quality_checkCreateOrConnectWithoutTrack_id_objectInput | quality_checkCreateOrConnectWithoutTrack_id_objectInput[]
    createMany?: quality_checkCreateManyTrack_id_objectInputEnvelope
    connect?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
  }

  export type production_single_product_draftCreateNestedOneWithoutTrack_id_objectInput = {
    create?: XOR<production_single_product_draftCreateWithoutTrack_id_objectInput, production_single_product_draftUncheckedCreateWithoutTrack_id_objectInput>
    connectOrCreate?: production_single_product_draftCreateOrConnectWithoutTrack_id_objectInput
    connect?: production_single_product_draftWhereUniqueInput
  }

  export type track_id_historyUncheckedCreateNestedManyWithoutTrack_id_objectInput = {
    create?: XOR<track_id_historyCreateWithoutTrack_id_objectInput, track_id_historyUncheckedCreateWithoutTrack_id_objectInput> | track_id_historyCreateWithoutTrack_id_objectInput[] | track_id_historyUncheckedCreateWithoutTrack_id_objectInput[]
    connectOrCreate?: track_id_historyCreateOrConnectWithoutTrack_id_objectInput | track_id_historyCreateOrConnectWithoutTrack_id_objectInput[]
    createMany?: track_id_historyCreateManyTrack_id_objectInputEnvelope
    connect?: track_id_historyWhereUniqueInput | track_id_historyWhereUniqueInput[]
  }

  export type repair_jobUncheckedCreateNestedOneWithoutTrack_id_objectInput = {
    create?: XOR<repair_jobCreateWithoutTrack_id_objectInput, repair_jobUncheckedCreateWithoutTrack_id_objectInput>
    connectOrCreate?: repair_jobCreateOrConnectWithoutTrack_id_objectInput
    connect?: repair_jobWhereUniqueInput
  }

  export type quality_checkUncheckedCreateNestedManyWithoutTrack_id_objectInput = {
    create?: XOR<quality_checkCreateWithoutTrack_id_objectInput, quality_checkUncheckedCreateWithoutTrack_id_objectInput> | quality_checkCreateWithoutTrack_id_objectInput[] | quality_checkUncheckedCreateWithoutTrack_id_objectInput[]
    connectOrCreate?: quality_checkCreateOrConnectWithoutTrack_id_objectInput | quality_checkCreateOrConnectWithoutTrack_id_objectInput[]
    createMany?: quality_checkCreateManyTrack_id_objectInputEnvelope
    connect?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
  }

  export type production_single_product_draftUncheckedCreateNestedOneWithoutTrack_id_objectInput = {
    create?: XOR<production_single_product_draftCreateWithoutTrack_id_objectInput, production_single_product_draftUncheckedCreateWithoutTrack_id_objectInput>
    connectOrCreate?: production_single_product_draftCreateOrConnectWithoutTrack_id_objectInput
    connect?: production_single_product_draftWhereUniqueInput
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

  export type repair_jobUpdateOneWithoutTrack_id_objectNestedInput = {
    create?: XOR<repair_jobCreateWithoutTrack_id_objectInput, repair_jobUncheckedCreateWithoutTrack_id_objectInput>
    connectOrCreate?: repair_jobCreateOrConnectWithoutTrack_id_objectInput
    upsert?: repair_jobUpsertWithoutTrack_id_objectInput
    disconnect?: repair_jobWhereInput | boolean
    delete?: repair_jobWhereInput | boolean
    connect?: repair_jobWhereUniqueInput
    update?: XOR<XOR<repair_jobUpdateToOneWithWhereWithoutTrack_id_objectInput, repair_jobUpdateWithoutTrack_id_objectInput>, repair_jobUncheckedUpdateWithoutTrack_id_objectInput>
  }

  export type quality_checkUpdateManyWithoutTrack_id_objectNestedInput = {
    create?: XOR<quality_checkCreateWithoutTrack_id_objectInput, quality_checkUncheckedCreateWithoutTrack_id_objectInput> | quality_checkCreateWithoutTrack_id_objectInput[] | quality_checkUncheckedCreateWithoutTrack_id_objectInput[]
    connectOrCreate?: quality_checkCreateOrConnectWithoutTrack_id_objectInput | quality_checkCreateOrConnectWithoutTrack_id_objectInput[]
    upsert?: quality_checkUpsertWithWhereUniqueWithoutTrack_id_objectInput | quality_checkUpsertWithWhereUniqueWithoutTrack_id_objectInput[]
    createMany?: quality_checkCreateManyTrack_id_objectInputEnvelope
    set?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
    disconnect?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
    delete?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
    connect?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
    update?: quality_checkUpdateWithWhereUniqueWithoutTrack_id_objectInput | quality_checkUpdateWithWhereUniqueWithoutTrack_id_objectInput[]
    updateMany?: quality_checkUpdateManyWithWhereWithoutTrack_id_objectInput | quality_checkUpdateManyWithWhereWithoutTrack_id_objectInput[]
    deleteMany?: quality_checkScalarWhereInput | quality_checkScalarWhereInput[]
  }

  export type production_single_product_draftUpdateOneWithoutTrack_id_objectNestedInput = {
    create?: XOR<production_single_product_draftCreateWithoutTrack_id_objectInput, production_single_product_draftUncheckedCreateWithoutTrack_id_objectInput>
    connectOrCreate?: production_single_product_draftCreateOrConnectWithoutTrack_id_objectInput
    upsert?: production_single_product_draftUpsertWithoutTrack_id_objectInput
    disconnect?: production_single_product_draftWhereInput | boolean
    delete?: production_single_product_draftWhereInput | boolean
    connect?: production_single_product_draftWhereUniqueInput
    update?: XOR<XOR<production_single_product_draftUpdateToOneWithWhereWithoutTrack_id_objectInput, production_single_product_draftUpdateWithoutTrack_id_objectInput>, production_single_product_draftUncheckedUpdateWithoutTrack_id_objectInput>
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

  export type repair_jobUncheckedUpdateOneWithoutTrack_id_objectNestedInput = {
    create?: XOR<repair_jobCreateWithoutTrack_id_objectInput, repair_jobUncheckedCreateWithoutTrack_id_objectInput>
    connectOrCreate?: repair_jobCreateOrConnectWithoutTrack_id_objectInput
    upsert?: repair_jobUpsertWithoutTrack_id_objectInput
    disconnect?: repair_jobWhereInput | boolean
    delete?: repair_jobWhereInput | boolean
    connect?: repair_jobWhereUniqueInput
    update?: XOR<XOR<repair_jobUpdateToOneWithWhereWithoutTrack_id_objectInput, repair_jobUpdateWithoutTrack_id_objectInput>, repair_jobUncheckedUpdateWithoutTrack_id_objectInput>
  }

  export type quality_checkUncheckedUpdateManyWithoutTrack_id_objectNestedInput = {
    create?: XOR<quality_checkCreateWithoutTrack_id_objectInput, quality_checkUncheckedCreateWithoutTrack_id_objectInput> | quality_checkCreateWithoutTrack_id_objectInput[] | quality_checkUncheckedCreateWithoutTrack_id_objectInput[]
    connectOrCreate?: quality_checkCreateOrConnectWithoutTrack_id_objectInput | quality_checkCreateOrConnectWithoutTrack_id_objectInput[]
    upsert?: quality_checkUpsertWithWhereUniqueWithoutTrack_id_objectInput | quality_checkUpsertWithWhereUniqueWithoutTrack_id_objectInput[]
    createMany?: quality_checkCreateManyTrack_id_objectInputEnvelope
    set?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
    disconnect?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
    delete?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
    connect?: quality_checkWhereUniqueInput | quality_checkWhereUniqueInput[]
    update?: quality_checkUpdateWithWhereUniqueWithoutTrack_id_objectInput | quality_checkUpdateWithWhereUniqueWithoutTrack_id_objectInput[]
    updateMany?: quality_checkUpdateManyWithWhereWithoutTrack_id_objectInput | quality_checkUpdateManyWithWhereWithoutTrack_id_objectInput[]
    deleteMany?: quality_checkScalarWhereInput | quality_checkScalarWhereInput[]
  }

  export type production_single_product_draftUncheckedUpdateOneWithoutTrack_id_objectNestedInput = {
    create?: XOR<production_single_product_draftCreateWithoutTrack_id_objectInput, production_single_product_draftUncheckedCreateWithoutTrack_id_objectInput>
    connectOrCreate?: production_single_product_draftCreateOrConnectWithoutTrack_id_objectInput
    upsert?: production_single_product_draftUpsertWithoutTrack_id_objectInput
    disconnect?: production_single_product_draftWhereInput | boolean
    delete?: production_single_product_draftWhereInput | boolean
    connect?: production_single_product_draftWhereUniqueInput
    update?: XOR<XOR<production_single_product_draftUpdateToOneWithWhereWithoutTrack_id_objectInput, production_single_product_draftUpdateWithoutTrack_id_objectInput>, production_single_product_draftUncheckedUpdateWithoutTrack_id_objectInput>
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type production_single_product_draftCreateWithoutImove_scrap_objInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    data: JsonNullValueInput | InputJsonValue
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    repair_reason?: string
    total_ng_repair: number
    track_id_object: track_id_objectCreateNestedOneWithoutProduct_single_resultInput
    repair_job?: repair_jobCreateNestedOneWithoutProduction_single_srcInput
  }

  export type production_single_product_draftUncheckedCreateWithoutImove_scrap_objInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    data: JsonNullValueInput | InputJsonValue
    track_id: string
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    repair_reason?: string
    total_ng_repair: number
    repair_job_id?: string | null
  }

  export type production_single_product_draftCreateOrConnectWithoutImove_scrap_objInput = {
    where: production_single_product_draftWhereUniqueInput
    create: XOR<production_single_product_draftCreateWithoutImove_scrap_objInput, production_single_product_draftUncheckedCreateWithoutImove_scrap_objInput>
  }

  export type quality_checkCreateWithoutImove_scrap_objInput = {
    org_id: number
    creation_date_time: Date | string
    locator_id?: number
    checker_name: string
    customer: string
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    repair_reason?: string
    total_ng_repair: number
    track_id_object: track_id_objectCreateNestedOneWithoutQuality_check_used_inInput
    repair_job?: repair_jobCreateNestedOneWithoutQuality_check_srcInput
  }

  export type quality_checkUncheckedCreateWithoutImove_scrap_objInput = {
    org_id: number
    creation_date_time: Date | string
    locator_id?: number
    track_id: string
    checker_name: string
    customer: string
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    repair_reason?: string
    total_ng_repair: number
    repair_job_id?: string | null
  }

  export type quality_checkCreateOrConnectWithoutImove_scrap_objInput = {
    where: quality_checkWhereUniqueInput
    create: XOR<quality_checkCreateWithoutImove_scrap_objInput, quality_checkUncheckedCreateWithoutImove_scrap_objInput>
  }

  export type repair_jobCreateWithoutImove_repair_objInput = {
    org_id: number
    creation_date_time: Date | string
    starting_locator_id?: number
    repair_status?: string
    description?: string
    quantity?: number
    track_id_object: track_id_objectCreateNestedOneWithoutRepair_jobInput
    quality_check_src?: quality_checkCreateNestedManyWithoutRepair_jobInput
    production_single_src?: production_single_product_draftCreateNestedManyWithoutRepair_jobInput
  }

  export type repair_jobUncheckedCreateWithoutImove_repair_objInput = {
    org_id: number
    creation_date_time: Date | string
    track_id: string
    starting_locator_id?: number
    repair_status?: string
    description?: string
    quantity?: number
    quality_check_src?: quality_checkUncheckedCreateNestedManyWithoutRepair_jobInput
    production_single_src?: production_single_product_draftUncheckedCreateNestedManyWithoutRepair_jobInput
  }

  export type repair_jobCreateOrConnectWithoutImove_repair_objInput = {
    where: repair_jobWhereUniqueInput
    create: XOR<repair_jobCreateWithoutImove_repair_objInput, repair_jobUncheckedCreateWithoutImove_repair_objInput>
  }

  export type production_single_product_draftUpsertWithoutImove_scrap_objInput = {
    update: XOR<production_single_product_draftUpdateWithoutImove_scrap_objInput, production_single_product_draftUncheckedUpdateWithoutImove_scrap_objInput>
    create: XOR<production_single_product_draftCreateWithoutImove_scrap_objInput, production_single_product_draftUncheckedCreateWithoutImove_scrap_objInput>
    where?: production_single_product_draftWhereInput
  }

  export type production_single_product_draftUpdateToOneWithWhereWithoutImove_scrap_objInput = {
    where?: production_single_product_draftWhereInput
    data: XOR<production_single_product_draftUpdateWithoutImove_scrap_objInput, production_single_product_draftUncheckedUpdateWithoutImove_scrap_objInput>
  }

  export type production_single_product_draftUpdateWithoutImove_scrap_objInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    track_id_object?: track_id_objectUpdateOneRequiredWithoutProduct_single_resultNestedInput
    repair_job?: repair_jobUpdateOneWithoutProduction_single_srcNestedInput
  }

  export type production_single_product_draftUncheckedUpdateWithoutImove_scrap_objInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    track_id?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    repair_job_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type quality_checkUpsertWithoutImove_scrap_objInput = {
    update: XOR<quality_checkUpdateWithoutImove_scrap_objInput, quality_checkUncheckedUpdateWithoutImove_scrap_objInput>
    create: XOR<quality_checkCreateWithoutImove_scrap_objInput, quality_checkUncheckedCreateWithoutImove_scrap_objInput>
    where?: quality_checkWhereInput
  }

  export type quality_checkUpdateToOneWithWhereWithoutImove_scrap_objInput = {
    where?: quality_checkWhereInput
    data: XOR<quality_checkUpdateWithoutImove_scrap_objInput, quality_checkUncheckedUpdateWithoutImove_scrap_objInput>
  }

  export type quality_checkUpdateWithoutImove_scrap_objInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    locator_id?: IntFieldUpdateOperationsInput | number
    checker_name?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    track_id_object?: track_id_objectUpdateOneRequiredWithoutQuality_check_used_inNestedInput
    repair_job?: repair_jobUpdateOneWithoutQuality_check_srcNestedInput
  }

  export type quality_checkUncheckedUpdateWithoutImove_scrap_objInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    locator_id?: IntFieldUpdateOperationsInput | number
    track_id?: StringFieldUpdateOperationsInput | string
    checker_name?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    repair_job_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type repair_jobUpsertWithoutImove_repair_objInput = {
    update: XOR<repair_jobUpdateWithoutImove_repair_objInput, repair_jobUncheckedUpdateWithoutImove_repair_objInput>
    create: XOR<repair_jobCreateWithoutImove_repair_objInput, repair_jobUncheckedCreateWithoutImove_repair_objInput>
    where?: repair_jobWhereInput
  }

  export type repair_jobUpdateToOneWithWhereWithoutImove_repair_objInput = {
    where?: repair_jobWhereInput
    data: XOR<repair_jobUpdateWithoutImove_repair_objInput, repair_jobUncheckedUpdateWithoutImove_repair_objInput>
  }

  export type repair_jobUpdateWithoutImove_repair_objInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    starting_locator_id?: IntFieldUpdateOperationsInput | number
    repair_status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    track_id_object?: track_id_objectUpdateOneRequiredWithoutRepair_jobNestedInput
    quality_check_src?: quality_checkUpdateManyWithoutRepair_jobNestedInput
    production_single_src?: production_single_product_draftUpdateManyWithoutRepair_jobNestedInput
  }

  export type repair_jobUncheckedUpdateWithoutImove_repair_objInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    track_id?: StringFieldUpdateOperationsInput | string
    starting_locator_id?: IntFieldUpdateOperationsInput | number
    repair_status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    quality_check_src?: quality_checkUncheckedUpdateManyWithoutRepair_jobNestedInput
    production_single_src?: production_single_product_draftUncheckedUpdateManyWithoutRepair_jobNestedInput
  }

  export type track_id_objectCreateWithoutProduct_single_resultInput = {
    track_id: string
    productId?: number
    productName?: string
    quantityProduced?: number
    unitsPerPallet?: number
    track_type: string
    creation_date_time?: Date | string
    source_data: JsonNullValueInput | InputJsonValue
    object_data: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyCreateNestedManyWithoutTrack_id_objectInput
    repair_job?: repair_jobCreateNestedOneWithoutTrack_id_objectInput
    quality_check_used_in?: quality_checkCreateNestedManyWithoutTrack_id_objectInput
  }

  export type track_id_objectUncheckedCreateWithoutProduct_single_resultInput = {
    track_id: string
    productId?: number
    productName?: string
    quantityProduced?: number
    unitsPerPallet?: number
    track_type: string
    creation_date_time?: Date | string
    source_data: JsonNullValueInput | InputJsonValue
    object_data: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyUncheckedCreateNestedManyWithoutTrack_id_objectInput
    repair_job?: repair_jobUncheckedCreateNestedOneWithoutTrack_id_objectInput
    quality_check_used_in?: quality_checkUncheckedCreateNestedManyWithoutTrack_id_objectInput
  }

  export type track_id_objectCreateOrConnectWithoutProduct_single_resultInput = {
    where: track_id_objectWhereUniqueInput
    create: XOR<track_id_objectCreateWithoutProduct_single_resultInput, track_id_objectUncheckedCreateWithoutProduct_single_resultInput>
  }

  export type inventory_move_draftCreateWithoutProduction_single_scrap_imoveInput = {
    org_id: number
    creation_date_time: Date | string
    movement_id: number
    data: JsonNullValueInput | InputJsonValue
    quality_check_scrap_imove?: quality_checkCreateNestedOneWithoutImove_scrap_objInput
    repair_job_imove?: repair_jobCreateNestedOneWithoutImove_repair_objInput
  }

  export type inventory_move_draftUncheckedCreateWithoutProduction_single_scrap_imoveInput = {
    org_id: number
    creation_date_time: Date | string
    movement_id: number
    data: JsonNullValueInput | InputJsonValue
    quality_check_scrap_imove?: quality_checkUncheckedCreateNestedOneWithoutImove_scrap_objInput
    repair_job_imove?: repair_jobUncheckedCreateNestedOneWithoutImove_repair_objInput
  }

  export type inventory_move_draftCreateOrConnectWithoutProduction_single_scrap_imoveInput = {
    where: inventory_move_draftWhereUniqueInput
    create: XOR<inventory_move_draftCreateWithoutProduction_single_scrap_imoveInput, inventory_move_draftUncheckedCreateWithoutProduction_single_scrap_imoveInput>
  }

  export type repair_jobCreateWithoutProduction_single_srcInput = {
    org_id: number
    creation_date_time: Date | string
    starting_locator_id?: number
    repair_status?: string
    description?: string
    quantity?: number
    track_id_object: track_id_objectCreateNestedOneWithoutRepair_jobInput
    imove_repair_obj?: inventory_move_draftCreateNestedOneWithoutRepair_job_imoveInput
    quality_check_src?: quality_checkCreateNestedManyWithoutRepair_jobInput
  }

  export type repair_jobUncheckedCreateWithoutProduction_single_srcInput = {
    org_id: number
    creation_date_time: Date | string
    track_id: string
    imove_repair_id?: number | null
    starting_locator_id?: number
    repair_status?: string
    description?: string
    quantity?: number
    quality_check_src?: quality_checkUncheckedCreateNestedManyWithoutRepair_jobInput
  }

  export type repair_jobCreateOrConnectWithoutProduction_single_srcInput = {
    where: repair_jobWhereUniqueInput
    create: XOR<repair_jobCreateWithoutProduction_single_srcInput, repair_jobUncheckedCreateWithoutProduction_single_srcInput>
  }

  export type track_id_objectUpsertWithoutProduct_single_resultInput = {
    update: XOR<track_id_objectUpdateWithoutProduct_single_resultInput, track_id_objectUncheckedUpdateWithoutProduct_single_resultInput>
    create: XOR<track_id_objectCreateWithoutProduct_single_resultInput, track_id_objectUncheckedCreateWithoutProduct_single_resultInput>
    where?: track_id_objectWhereInput
  }

  export type track_id_objectUpdateToOneWithWhereWithoutProduct_single_resultInput = {
    where?: track_id_objectWhereInput
    data: XOR<track_id_objectUpdateWithoutProduct_single_resultInput, track_id_objectUncheckedUpdateWithoutProduct_single_resultInput>
  }

  export type track_id_objectUpdateWithoutProduct_single_resultInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    quantityProduced?: IntFieldUpdateOperationsInput | number
    unitsPerPallet?: IntFieldUpdateOperationsInput | number
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyUpdateManyWithoutTrack_id_objectNestedInput
    repair_job?: repair_jobUpdateOneWithoutTrack_id_objectNestedInput
    quality_check_used_in?: quality_checkUpdateManyWithoutTrack_id_objectNestedInput
  }

  export type track_id_objectUncheckedUpdateWithoutProduct_single_resultInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    quantityProduced?: IntFieldUpdateOperationsInput | number
    unitsPerPallet?: IntFieldUpdateOperationsInput | number
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyUncheckedUpdateManyWithoutTrack_id_objectNestedInput
    repair_job?: repair_jobUncheckedUpdateOneWithoutTrack_id_objectNestedInput
    quality_check_used_in?: quality_checkUncheckedUpdateManyWithoutTrack_id_objectNestedInput
  }

  export type inventory_move_draftUpsertWithoutProduction_single_scrap_imoveInput = {
    update: XOR<inventory_move_draftUpdateWithoutProduction_single_scrap_imoveInput, inventory_move_draftUncheckedUpdateWithoutProduction_single_scrap_imoveInput>
    create: XOR<inventory_move_draftCreateWithoutProduction_single_scrap_imoveInput, inventory_move_draftUncheckedCreateWithoutProduction_single_scrap_imoveInput>
    where?: inventory_move_draftWhereInput
  }

  export type inventory_move_draftUpdateToOneWithWhereWithoutProduction_single_scrap_imoveInput = {
    where?: inventory_move_draftWhereInput
    data: XOR<inventory_move_draftUpdateWithoutProduction_single_scrap_imoveInput, inventory_move_draftUncheckedUpdateWithoutProduction_single_scrap_imoveInput>
  }

  export type inventory_move_draftUpdateWithoutProduction_single_scrap_imoveInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    movement_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    quality_check_scrap_imove?: quality_checkUpdateOneWithoutImove_scrap_objNestedInput
    repair_job_imove?: repair_jobUpdateOneWithoutImove_repair_objNestedInput
  }

  export type inventory_move_draftUncheckedUpdateWithoutProduction_single_scrap_imoveInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    movement_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    quality_check_scrap_imove?: quality_checkUncheckedUpdateOneWithoutImove_scrap_objNestedInput
    repair_job_imove?: repair_jobUncheckedUpdateOneWithoutImove_repair_objNestedInput
  }

  export type repair_jobUpsertWithoutProduction_single_srcInput = {
    update: XOR<repair_jobUpdateWithoutProduction_single_srcInput, repair_jobUncheckedUpdateWithoutProduction_single_srcInput>
    create: XOR<repair_jobCreateWithoutProduction_single_srcInput, repair_jobUncheckedCreateWithoutProduction_single_srcInput>
    where?: repair_jobWhereInput
  }

  export type repair_jobUpdateToOneWithWhereWithoutProduction_single_srcInput = {
    where?: repair_jobWhereInput
    data: XOR<repair_jobUpdateWithoutProduction_single_srcInput, repair_jobUncheckedUpdateWithoutProduction_single_srcInput>
  }

  export type repair_jobUpdateWithoutProduction_single_srcInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    starting_locator_id?: IntFieldUpdateOperationsInput | number
    repair_status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    track_id_object?: track_id_objectUpdateOneRequiredWithoutRepair_jobNestedInput
    imove_repair_obj?: inventory_move_draftUpdateOneWithoutRepair_job_imoveNestedInput
    quality_check_src?: quality_checkUpdateManyWithoutRepair_jobNestedInput
  }

  export type repair_jobUncheckedUpdateWithoutProduction_single_srcInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    track_id?: StringFieldUpdateOperationsInput | string
    imove_repair_id?: NullableIntFieldUpdateOperationsInput | number | null
    starting_locator_id?: IntFieldUpdateOperationsInput | number
    repair_status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    quality_check_src?: quality_checkUncheckedUpdateManyWithoutRepair_jobNestedInput
  }

  export type track_id_objectCreateWithoutRepair_jobInput = {
    track_id: string
    productId?: number
    productName?: string
    quantityProduced?: number
    unitsPerPallet?: number
    track_type: string
    creation_date_time?: Date | string
    source_data: JsonNullValueInput | InputJsonValue
    object_data: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyCreateNestedManyWithoutTrack_id_objectInput
    quality_check_used_in?: quality_checkCreateNestedManyWithoutTrack_id_objectInput
    product_single_result?: production_single_product_draftCreateNestedOneWithoutTrack_id_objectInput
  }

  export type track_id_objectUncheckedCreateWithoutRepair_jobInput = {
    track_id: string
    productId?: number
    productName?: string
    quantityProduced?: number
    unitsPerPallet?: number
    track_type: string
    creation_date_time?: Date | string
    source_data: JsonNullValueInput | InputJsonValue
    object_data: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyUncheckedCreateNestedManyWithoutTrack_id_objectInput
    quality_check_used_in?: quality_checkUncheckedCreateNestedManyWithoutTrack_id_objectInput
    product_single_result?: production_single_product_draftUncheckedCreateNestedOneWithoutTrack_id_objectInput
  }

  export type track_id_objectCreateOrConnectWithoutRepair_jobInput = {
    where: track_id_objectWhereUniqueInput
    create: XOR<track_id_objectCreateWithoutRepair_jobInput, track_id_objectUncheckedCreateWithoutRepair_jobInput>
  }

  export type inventory_move_draftCreateWithoutRepair_job_imoveInput = {
    org_id: number
    creation_date_time: Date | string
    movement_id: number
    data: JsonNullValueInput | InputJsonValue
    production_single_scrap_imove?: production_single_product_draftCreateNestedOneWithoutImove_scrap_objInput
    quality_check_scrap_imove?: quality_checkCreateNestedOneWithoutImove_scrap_objInput
  }

  export type inventory_move_draftUncheckedCreateWithoutRepair_job_imoveInput = {
    org_id: number
    creation_date_time: Date | string
    movement_id: number
    data: JsonNullValueInput | InputJsonValue
    production_single_scrap_imove?: production_single_product_draftUncheckedCreateNestedOneWithoutImove_scrap_objInput
    quality_check_scrap_imove?: quality_checkUncheckedCreateNestedOneWithoutImove_scrap_objInput
  }

  export type inventory_move_draftCreateOrConnectWithoutRepair_job_imoveInput = {
    where: inventory_move_draftWhereUniqueInput
    create: XOR<inventory_move_draftCreateWithoutRepair_job_imoveInput, inventory_move_draftUncheckedCreateWithoutRepair_job_imoveInput>
  }

  export type quality_checkCreateWithoutRepair_jobInput = {
    org_id: number
    creation_date_time: Date | string
    locator_id?: number
    checker_name: string
    customer: string
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    repair_reason?: string
    total_ng_repair: number
    track_id_object: track_id_objectCreateNestedOneWithoutQuality_check_used_inInput
    imove_scrap_obj?: inventory_move_draftCreateNestedOneWithoutQuality_check_scrap_imoveInput
  }

  export type quality_checkUncheckedCreateWithoutRepair_jobInput = {
    org_id: number
    creation_date_time: Date | string
    locator_id?: number
    track_id: string
    checker_name: string
    customer: string
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    imove_scrap_id?: number | null
    repair_reason?: string
    total_ng_repair: number
  }

  export type quality_checkCreateOrConnectWithoutRepair_jobInput = {
    where: quality_checkWhereUniqueInput
    create: XOR<quality_checkCreateWithoutRepair_jobInput, quality_checkUncheckedCreateWithoutRepair_jobInput>
  }

  export type quality_checkCreateManyRepair_jobInputEnvelope = {
    data: quality_checkCreateManyRepair_jobInput | quality_checkCreateManyRepair_jobInput[]
    skipDuplicates?: boolean
  }

  export type production_single_product_draftCreateWithoutRepair_jobInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    data: JsonNullValueInput | InputJsonValue
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    repair_reason?: string
    total_ng_repair: number
    track_id_object: track_id_objectCreateNestedOneWithoutProduct_single_resultInput
    imove_scrap_obj?: inventory_move_draftCreateNestedOneWithoutProduction_single_scrap_imoveInput
  }

  export type production_single_product_draftUncheckedCreateWithoutRepair_jobInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    data: JsonNullValueInput | InputJsonValue
    track_id: string
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    imove_scrap_id?: number | null
    repair_reason?: string
    total_ng_repair: number
  }

  export type production_single_product_draftCreateOrConnectWithoutRepair_jobInput = {
    where: production_single_product_draftWhereUniqueInput
    create: XOR<production_single_product_draftCreateWithoutRepair_jobInput, production_single_product_draftUncheckedCreateWithoutRepair_jobInput>
  }

  export type production_single_product_draftCreateManyRepair_jobInputEnvelope = {
    data: production_single_product_draftCreateManyRepair_jobInput | production_single_product_draftCreateManyRepair_jobInput[]
    skipDuplicates?: boolean
  }

  export type track_id_objectUpsertWithoutRepair_jobInput = {
    update: XOR<track_id_objectUpdateWithoutRepair_jobInput, track_id_objectUncheckedUpdateWithoutRepair_jobInput>
    create: XOR<track_id_objectCreateWithoutRepair_jobInput, track_id_objectUncheckedCreateWithoutRepair_jobInput>
    where?: track_id_objectWhereInput
  }

  export type track_id_objectUpdateToOneWithWhereWithoutRepair_jobInput = {
    where?: track_id_objectWhereInput
    data: XOR<track_id_objectUpdateWithoutRepair_jobInput, track_id_objectUncheckedUpdateWithoutRepair_jobInput>
  }

  export type track_id_objectUpdateWithoutRepair_jobInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    quantityProduced?: IntFieldUpdateOperationsInput | number
    unitsPerPallet?: IntFieldUpdateOperationsInput | number
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyUpdateManyWithoutTrack_id_objectNestedInput
    quality_check_used_in?: quality_checkUpdateManyWithoutTrack_id_objectNestedInput
    product_single_result?: production_single_product_draftUpdateOneWithoutTrack_id_objectNestedInput
  }

  export type track_id_objectUncheckedUpdateWithoutRepair_jobInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    quantityProduced?: IntFieldUpdateOperationsInput | number
    unitsPerPallet?: IntFieldUpdateOperationsInput | number
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyUncheckedUpdateManyWithoutTrack_id_objectNestedInput
    quality_check_used_in?: quality_checkUncheckedUpdateManyWithoutTrack_id_objectNestedInput
    product_single_result?: production_single_product_draftUncheckedUpdateOneWithoutTrack_id_objectNestedInput
  }

  export type inventory_move_draftUpsertWithoutRepair_job_imoveInput = {
    update: XOR<inventory_move_draftUpdateWithoutRepair_job_imoveInput, inventory_move_draftUncheckedUpdateWithoutRepair_job_imoveInput>
    create: XOR<inventory_move_draftCreateWithoutRepair_job_imoveInput, inventory_move_draftUncheckedCreateWithoutRepair_job_imoveInput>
    where?: inventory_move_draftWhereInput
  }

  export type inventory_move_draftUpdateToOneWithWhereWithoutRepair_job_imoveInput = {
    where?: inventory_move_draftWhereInput
    data: XOR<inventory_move_draftUpdateWithoutRepair_job_imoveInput, inventory_move_draftUncheckedUpdateWithoutRepair_job_imoveInput>
  }

  export type inventory_move_draftUpdateWithoutRepair_job_imoveInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    movement_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    production_single_scrap_imove?: production_single_product_draftUpdateOneWithoutImove_scrap_objNestedInput
    quality_check_scrap_imove?: quality_checkUpdateOneWithoutImove_scrap_objNestedInput
  }

  export type inventory_move_draftUncheckedUpdateWithoutRepair_job_imoveInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    movement_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    production_single_scrap_imove?: production_single_product_draftUncheckedUpdateOneWithoutImove_scrap_objNestedInput
    quality_check_scrap_imove?: quality_checkUncheckedUpdateOneWithoutImove_scrap_objNestedInput
  }

  export type quality_checkUpsertWithWhereUniqueWithoutRepair_jobInput = {
    where: quality_checkWhereUniqueInput
    update: XOR<quality_checkUpdateWithoutRepair_jobInput, quality_checkUncheckedUpdateWithoutRepair_jobInput>
    create: XOR<quality_checkCreateWithoutRepair_jobInput, quality_checkUncheckedCreateWithoutRepair_jobInput>
  }

  export type quality_checkUpdateWithWhereUniqueWithoutRepair_jobInput = {
    where: quality_checkWhereUniqueInput
    data: XOR<quality_checkUpdateWithoutRepair_jobInput, quality_checkUncheckedUpdateWithoutRepair_jobInput>
  }

  export type quality_checkUpdateManyWithWhereWithoutRepair_jobInput = {
    where: quality_checkScalarWhereInput
    data: XOR<quality_checkUpdateManyMutationInput, quality_checkUncheckedUpdateManyWithoutRepair_jobInput>
  }

  export type quality_checkScalarWhereInput = {
    AND?: quality_checkScalarWhereInput | quality_checkScalarWhereInput[]
    OR?: quality_checkScalarWhereInput[]
    NOT?: quality_checkScalarWhereInput | quality_checkScalarWhereInput[]
    org_id?: IntFilter<"quality_check"> | number
    creation_date_time?: DateTimeFilter<"quality_check"> | Date | string
    locator_id?: IntFilter<"quality_check"> | number
    track_id?: StringFilter<"quality_check"> | string
    checker_name?: StringFilter<"quality_check"> | string
    customer?: StringFilter<"quality_check"> | string
    total_ok?: FloatFilter<"quality_check"> | number
    scrap_reason?: StringFilter<"quality_check"> | string
    total_ng_scrap?: FloatFilter<"quality_check"> | number
    imove_scrap_id?: IntNullableFilter<"quality_check"> | number | null
    repair_reason?: StringFilter<"quality_check"> | string
    total_ng_repair?: FloatFilter<"quality_check"> | number
    repair_job_id?: StringNullableFilter<"quality_check"> | string | null
  }

  export type production_single_product_draftUpsertWithWhereUniqueWithoutRepair_jobInput = {
    where: production_single_product_draftWhereUniqueInput
    update: XOR<production_single_product_draftUpdateWithoutRepair_jobInput, production_single_product_draftUncheckedUpdateWithoutRepair_jobInput>
    create: XOR<production_single_product_draftCreateWithoutRepair_jobInput, production_single_product_draftUncheckedCreateWithoutRepair_jobInput>
  }

  export type production_single_product_draftUpdateWithWhereUniqueWithoutRepair_jobInput = {
    where: production_single_product_draftWhereUniqueInput
    data: XOR<production_single_product_draftUpdateWithoutRepair_jobInput, production_single_product_draftUncheckedUpdateWithoutRepair_jobInput>
  }

  export type production_single_product_draftUpdateManyWithWhereWithoutRepair_jobInput = {
    where: production_single_product_draftScalarWhereInput
    data: XOR<production_single_product_draftUpdateManyMutationInput, production_single_product_draftUncheckedUpdateManyWithoutRepair_jobInput>
  }

  export type production_single_product_draftScalarWhereInput = {
    AND?: production_single_product_draftScalarWhereInput | production_single_product_draftScalarWhereInput[]
    OR?: production_single_product_draftScalarWhereInput[]
    NOT?: production_single_product_draftScalarWhereInput | production_single_product_draftScalarWhereInput[]
    org_id?: IntFilter<"production_single_product_draft"> | number
    creation_date_time?: DateTimeFilter<"production_single_product_draft"> | Date | string
    erp_id?: IntFilter<"production_single_product_draft"> | number
    data?: JsonFilter<"production_single_product_draft">
    track_id?: StringFilter<"production_single_product_draft"> | string
    total_ok?: FloatFilter<"production_single_product_draft"> | number
    scrap_reason?: StringFilter<"production_single_product_draft"> | string
    total_ng_scrap?: FloatFilter<"production_single_product_draft"> | number
    imove_scrap_id?: IntNullableFilter<"production_single_product_draft"> | number | null
    repair_reason?: StringFilter<"production_single_product_draft"> | string
    total_ng_repair?: FloatFilter<"production_single_product_draft"> | number
    repair_job_id?: StringNullableFilter<"production_single_product_draft"> | string | null
  }

  export type track_id_objectCreateWithoutQuality_check_used_inInput = {
    track_id: string
    productId?: number
    productName?: string
    quantityProduced?: number
    unitsPerPallet?: number
    track_type: string
    creation_date_time?: Date | string
    source_data: JsonNullValueInput | InputJsonValue
    object_data: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyCreateNestedManyWithoutTrack_id_objectInput
    repair_job?: repair_jobCreateNestedOneWithoutTrack_id_objectInput
    product_single_result?: production_single_product_draftCreateNestedOneWithoutTrack_id_objectInput
  }

  export type track_id_objectUncheckedCreateWithoutQuality_check_used_inInput = {
    track_id: string
    productId?: number
    productName?: string
    quantityProduced?: number
    unitsPerPallet?: number
    track_type: string
    creation_date_time?: Date | string
    source_data: JsonNullValueInput | InputJsonValue
    object_data: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyUncheckedCreateNestedManyWithoutTrack_id_objectInput
    repair_job?: repair_jobUncheckedCreateNestedOneWithoutTrack_id_objectInput
    product_single_result?: production_single_product_draftUncheckedCreateNestedOneWithoutTrack_id_objectInput
  }

  export type track_id_objectCreateOrConnectWithoutQuality_check_used_inInput = {
    where: track_id_objectWhereUniqueInput
    create: XOR<track_id_objectCreateWithoutQuality_check_used_inInput, track_id_objectUncheckedCreateWithoutQuality_check_used_inInput>
  }

  export type inventory_move_draftCreateWithoutQuality_check_scrap_imoveInput = {
    org_id: number
    creation_date_time: Date | string
    movement_id: number
    data: JsonNullValueInput | InputJsonValue
    production_single_scrap_imove?: production_single_product_draftCreateNestedOneWithoutImove_scrap_objInput
    repair_job_imove?: repair_jobCreateNestedOneWithoutImove_repair_objInput
  }

  export type inventory_move_draftUncheckedCreateWithoutQuality_check_scrap_imoveInput = {
    org_id: number
    creation_date_time: Date | string
    movement_id: number
    data: JsonNullValueInput | InputJsonValue
    production_single_scrap_imove?: production_single_product_draftUncheckedCreateNestedOneWithoutImove_scrap_objInput
    repair_job_imove?: repair_jobUncheckedCreateNestedOneWithoutImove_repair_objInput
  }

  export type inventory_move_draftCreateOrConnectWithoutQuality_check_scrap_imoveInput = {
    where: inventory_move_draftWhereUniqueInput
    create: XOR<inventory_move_draftCreateWithoutQuality_check_scrap_imoveInput, inventory_move_draftUncheckedCreateWithoutQuality_check_scrap_imoveInput>
  }

  export type repair_jobCreateWithoutQuality_check_srcInput = {
    org_id: number
    creation_date_time: Date | string
    starting_locator_id?: number
    repair_status?: string
    description?: string
    quantity?: number
    track_id_object: track_id_objectCreateNestedOneWithoutRepair_jobInput
    imove_repair_obj?: inventory_move_draftCreateNestedOneWithoutRepair_job_imoveInput
    production_single_src?: production_single_product_draftCreateNestedManyWithoutRepair_jobInput
  }

  export type repair_jobUncheckedCreateWithoutQuality_check_srcInput = {
    org_id: number
    creation_date_time: Date | string
    track_id: string
    imove_repair_id?: number | null
    starting_locator_id?: number
    repair_status?: string
    description?: string
    quantity?: number
    production_single_src?: production_single_product_draftUncheckedCreateNestedManyWithoutRepair_jobInput
  }

  export type repair_jobCreateOrConnectWithoutQuality_check_srcInput = {
    where: repair_jobWhereUniqueInput
    create: XOR<repair_jobCreateWithoutQuality_check_srcInput, repair_jobUncheckedCreateWithoutQuality_check_srcInput>
  }

  export type track_id_objectUpsertWithoutQuality_check_used_inInput = {
    update: XOR<track_id_objectUpdateWithoutQuality_check_used_inInput, track_id_objectUncheckedUpdateWithoutQuality_check_used_inInput>
    create: XOR<track_id_objectCreateWithoutQuality_check_used_inInput, track_id_objectUncheckedCreateWithoutQuality_check_used_inInput>
    where?: track_id_objectWhereInput
  }

  export type track_id_objectUpdateToOneWithWhereWithoutQuality_check_used_inInput = {
    where?: track_id_objectWhereInput
    data: XOR<track_id_objectUpdateWithoutQuality_check_used_inInput, track_id_objectUncheckedUpdateWithoutQuality_check_used_inInput>
  }

  export type track_id_objectUpdateWithoutQuality_check_used_inInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    quantityProduced?: IntFieldUpdateOperationsInput | number
    unitsPerPallet?: IntFieldUpdateOperationsInput | number
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyUpdateManyWithoutTrack_id_objectNestedInput
    repair_job?: repair_jobUpdateOneWithoutTrack_id_objectNestedInput
    product_single_result?: production_single_product_draftUpdateOneWithoutTrack_id_objectNestedInput
  }

  export type track_id_objectUncheckedUpdateWithoutQuality_check_used_inInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    quantityProduced?: IntFieldUpdateOperationsInput | number
    unitsPerPallet?: IntFieldUpdateOperationsInput | number
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
    track_id_history?: track_id_historyUncheckedUpdateManyWithoutTrack_id_objectNestedInput
    repair_job?: repair_jobUncheckedUpdateOneWithoutTrack_id_objectNestedInput
    product_single_result?: production_single_product_draftUncheckedUpdateOneWithoutTrack_id_objectNestedInput
  }

  export type inventory_move_draftUpsertWithoutQuality_check_scrap_imoveInput = {
    update: XOR<inventory_move_draftUpdateWithoutQuality_check_scrap_imoveInput, inventory_move_draftUncheckedUpdateWithoutQuality_check_scrap_imoveInput>
    create: XOR<inventory_move_draftCreateWithoutQuality_check_scrap_imoveInput, inventory_move_draftUncheckedCreateWithoutQuality_check_scrap_imoveInput>
    where?: inventory_move_draftWhereInput
  }

  export type inventory_move_draftUpdateToOneWithWhereWithoutQuality_check_scrap_imoveInput = {
    where?: inventory_move_draftWhereInput
    data: XOR<inventory_move_draftUpdateWithoutQuality_check_scrap_imoveInput, inventory_move_draftUncheckedUpdateWithoutQuality_check_scrap_imoveInput>
  }

  export type inventory_move_draftUpdateWithoutQuality_check_scrap_imoveInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    movement_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    production_single_scrap_imove?: production_single_product_draftUpdateOneWithoutImove_scrap_objNestedInput
    repair_job_imove?: repair_jobUpdateOneWithoutImove_repair_objNestedInput
  }

  export type inventory_move_draftUncheckedUpdateWithoutQuality_check_scrap_imoveInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    movement_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    production_single_scrap_imove?: production_single_product_draftUncheckedUpdateOneWithoutImove_scrap_objNestedInput
    repair_job_imove?: repair_jobUncheckedUpdateOneWithoutImove_repair_objNestedInput
  }

  export type repair_jobUpsertWithoutQuality_check_srcInput = {
    update: XOR<repair_jobUpdateWithoutQuality_check_srcInput, repair_jobUncheckedUpdateWithoutQuality_check_srcInput>
    create: XOR<repair_jobCreateWithoutQuality_check_srcInput, repair_jobUncheckedCreateWithoutQuality_check_srcInput>
    where?: repair_jobWhereInput
  }

  export type repair_jobUpdateToOneWithWhereWithoutQuality_check_srcInput = {
    where?: repair_jobWhereInput
    data: XOR<repair_jobUpdateWithoutQuality_check_srcInput, repair_jobUncheckedUpdateWithoutQuality_check_srcInput>
  }

  export type repair_jobUpdateWithoutQuality_check_srcInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    starting_locator_id?: IntFieldUpdateOperationsInput | number
    repair_status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    track_id_object?: track_id_objectUpdateOneRequiredWithoutRepair_jobNestedInput
    imove_repair_obj?: inventory_move_draftUpdateOneWithoutRepair_job_imoveNestedInput
    production_single_src?: production_single_product_draftUpdateManyWithoutRepair_jobNestedInput
  }

  export type repair_jobUncheckedUpdateWithoutQuality_check_srcInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    track_id?: StringFieldUpdateOperationsInput | string
    imove_repair_id?: NullableIntFieldUpdateOperationsInput | number | null
    starting_locator_id?: IntFieldUpdateOperationsInput | number
    repair_status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    production_single_src?: production_single_product_draftUncheckedUpdateManyWithoutRepair_jobNestedInput
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

  export type repair_jobCreateWithoutTrack_id_objectInput = {
    org_id: number
    creation_date_time: Date | string
    starting_locator_id?: number
    repair_status?: string
    description?: string
    quantity?: number
    imove_repair_obj?: inventory_move_draftCreateNestedOneWithoutRepair_job_imoveInput
    quality_check_src?: quality_checkCreateNestedManyWithoutRepair_jobInput
    production_single_src?: production_single_product_draftCreateNestedManyWithoutRepair_jobInput
  }

  export type repair_jobUncheckedCreateWithoutTrack_id_objectInput = {
    org_id: number
    creation_date_time: Date | string
    imove_repair_id?: number | null
    starting_locator_id?: number
    repair_status?: string
    description?: string
    quantity?: number
    quality_check_src?: quality_checkUncheckedCreateNestedManyWithoutRepair_jobInput
    production_single_src?: production_single_product_draftUncheckedCreateNestedManyWithoutRepair_jobInput
  }

  export type repair_jobCreateOrConnectWithoutTrack_id_objectInput = {
    where: repair_jobWhereUniqueInput
    create: XOR<repair_jobCreateWithoutTrack_id_objectInput, repair_jobUncheckedCreateWithoutTrack_id_objectInput>
  }

  export type quality_checkCreateWithoutTrack_id_objectInput = {
    org_id: number
    creation_date_time: Date | string
    locator_id?: number
    checker_name: string
    customer: string
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    repair_reason?: string
    total_ng_repair: number
    imove_scrap_obj?: inventory_move_draftCreateNestedOneWithoutQuality_check_scrap_imoveInput
    repair_job?: repair_jobCreateNestedOneWithoutQuality_check_srcInput
  }

  export type quality_checkUncheckedCreateWithoutTrack_id_objectInput = {
    org_id: number
    creation_date_time: Date | string
    locator_id?: number
    checker_name: string
    customer: string
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    imove_scrap_id?: number | null
    repair_reason?: string
    total_ng_repair: number
    repair_job_id?: string | null
  }

  export type quality_checkCreateOrConnectWithoutTrack_id_objectInput = {
    where: quality_checkWhereUniqueInput
    create: XOR<quality_checkCreateWithoutTrack_id_objectInput, quality_checkUncheckedCreateWithoutTrack_id_objectInput>
  }

  export type quality_checkCreateManyTrack_id_objectInputEnvelope = {
    data: quality_checkCreateManyTrack_id_objectInput | quality_checkCreateManyTrack_id_objectInput[]
    skipDuplicates?: boolean
  }

  export type production_single_product_draftCreateWithoutTrack_id_objectInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    data: JsonNullValueInput | InputJsonValue
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    repair_reason?: string
    total_ng_repair: number
    imove_scrap_obj?: inventory_move_draftCreateNestedOneWithoutProduction_single_scrap_imoveInput
    repair_job?: repair_jobCreateNestedOneWithoutProduction_single_srcInput
  }

  export type production_single_product_draftUncheckedCreateWithoutTrack_id_objectInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    data: JsonNullValueInput | InputJsonValue
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    imove_scrap_id?: number | null
    repair_reason?: string
    total_ng_repair: number
    repair_job_id?: string | null
  }

  export type production_single_product_draftCreateOrConnectWithoutTrack_id_objectInput = {
    where: production_single_product_draftWhereUniqueInput
    create: XOR<production_single_product_draftCreateWithoutTrack_id_objectInput, production_single_product_draftUncheckedCreateWithoutTrack_id_objectInput>
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

  export type repair_jobUpsertWithoutTrack_id_objectInput = {
    update: XOR<repair_jobUpdateWithoutTrack_id_objectInput, repair_jobUncheckedUpdateWithoutTrack_id_objectInput>
    create: XOR<repair_jobCreateWithoutTrack_id_objectInput, repair_jobUncheckedCreateWithoutTrack_id_objectInput>
    where?: repair_jobWhereInput
  }

  export type repair_jobUpdateToOneWithWhereWithoutTrack_id_objectInput = {
    where?: repair_jobWhereInput
    data: XOR<repair_jobUpdateWithoutTrack_id_objectInput, repair_jobUncheckedUpdateWithoutTrack_id_objectInput>
  }

  export type repair_jobUpdateWithoutTrack_id_objectInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    starting_locator_id?: IntFieldUpdateOperationsInput | number
    repair_status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    imove_repair_obj?: inventory_move_draftUpdateOneWithoutRepair_job_imoveNestedInput
    quality_check_src?: quality_checkUpdateManyWithoutRepair_jobNestedInput
    production_single_src?: production_single_product_draftUpdateManyWithoutRepair_jobNestedInput
  }

  export type repair_jobUncheckedUpdateWithoutTrack_id_objectInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    imove_repair_id?: NullableIntFieldUpdateOperationsInput | number | null
    starting_locator_id?: IntFieldUpdateOperationsInput | number
    repair_status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    quality_check_src?: quality_checkUncheckedUpdateManyWithoutRepair_jobNestedInput
    production_single_src?: production_single_product_draftUncheckedUpdateManyWithoutRepair_jobNestedInput
  }

  export type quality_checkUpsertWithWhereUniqueWithoutTrack_id_objectInput = {
    where: quality_checkWhereUniqueInput
    update: XOR<quality_checkUpdateWithoutTrack_id_objectInput, quality_checkUncheckedUpdateWithoutTrack_id_objectInput>
    create: XOR<quality_checkCreateWithoutTrack_id_objectInput, quality_checkUncheckedCreateWithoutTrack_id_objectInput>
  }

  export type quality_checkUpdateWithWhereUniqueWithoutTrack_id_objectInput = {
    where: quality_checkWhereUniqueInput
    data: XOR<quality_checkUpdateWithoutTrack_id_objectInput, quality_checkUncheckedUpdateWithoutTrack_id_objectInput>
  }

  export type quality_checkUpdateManyWithWhereWithoutTrack_id_objectInput = {
    where: quality_checkScalarWhereInput
    data: XOR<quality_checkUpdateManyMutationInput, quality_checkUncheckedUpdateManyWithoutTrack_id_objectInput>
  }

  export type production_single_product_draftUpsertWithoutTrack_id_objectInput = {
    update: XOR<production_single_product_draftUpdateWithoutTrack_id_objectInput, production_single_product_draftUncheckedUpdateWithoutTrack_id_objectInput>
    create: XOR<production_single_product_draftCreateWithoutTrack_id_objectInput, production_single_product_draftUncheckedCreateWithoutTrack_id_objectInput>
    where?: production_single_product_draftWhereInput
  }

  export type production_single_product_draftUpdateToOneWithWhereWithoutTrack_id_objectInput = {
    where?: production_single_product_draftWhereInput
    data: XOR<production_single_product_draftUpdateWithoutTrack_id_objectInput, production_single_product_draftUncheckedUpdateWithoutTrack_id_objectInput>
  }

  export type production_single_product_draftUpdateWithoutTrack_id_objectInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    imove_scrap_obj?: inventory_move_draftUpdateOneWithoutProduction_single_scrap_imoveNestedInput
    repair_job?: repair_jobUpdateOneWithoutProduction_single_srcNestedInput
  }

  export type production_single_product_draftUncheckedUpdateWithoutTrack_id_objectInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    imove_scrap_id?: NullableIntFieldUpdateOperationsInput | number | null
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    repair_job_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type track_id_objectCreateWithoutTrack_id_historyInput = {
    track_id: string
    productId?: number
    productName?: string
    quantityProduced?: number
    unitsPerPallet?: number
    track_type: string
    creation_date_time?: Date | string
    source_data: JsonNullValueInput | InputJsonValue
    object_data: JsonNullValueInput | InputJsonValue
    repair_job?: repair_jobCreateNestedOneWithoutTrack_id_objectInput
    quality_check_used_in?: quality_checkCreateNestedManyWithoutTrack_id_objectInput
    product_single_result?: production_single_product_draftCreateNestedOneWithoutTrack_id_objectInput
  }

  export type track_id_objectUncheckedCreateWithoutTrack_id_historyInput = {
    track_id: string
    productId?: number
    productName?: string
    quantityProduced?: number
    unitsPerPallet?: number
    track_type: string
    creation_date_time?: Date | string
    source_data: JsonNullValueInput | InputJsonValue
    object_data: JsonNullValueInput | InputJsonValue
    repair_job?: repair_jobUncheckedCreateNestedOneWithoutTrack_id_objectInput
    quality_check_used_in?: quality_checkUncheckedCreateNestedManyWithoutTrack_id_objectInput
    product_single_result?: production_single_product_draftUncheckedCreateNestedOneWithoutTrack_id_objectInput
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
    quantityProduced?: IntFieldUpdateOperationsInput | number
    unitsPerPallet?: IntFieldUpdateOperationsInput | number
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
    repair_job?: repair_jobUpdateOneWithoutTrack_id_objectNestedInput
    quality_check_used_in?: quality_checkUpdateManyWithoutTrack_id_objectNestedInput
    product_single_result?: production_single_product_draftUpdateOneWithoutTrack_id_objectNestedInput
  }

  export type track_id_objectUncheckedUpdateWithoutTrack_id_historyInput = {
    track_id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    quantityProduced?: IntFieldUpdateOperationsInput | number
    unitsPerPallet?: IntFieldUpdateOperationsInput | number
    track_type?: StringFieldUpdateOperationsInput | string
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    source_data?: JsonNullValueInput | InputJsonValue
    object_data?: JsonNullValueInput | InputJsonValue
    repair_job?: repair_jobUncheckedUpdateOneWithoutTrack_id_objectNestedInput
    quality_check_used_in?: quality_checkUncheckedUpdateManyWithoutTrack_id_objectNestedInput
    product_single_result?: production_single_product_draftUncheckedUpdateOneWithoutTrack_id_objectNestedInput
  }

  export type quality_checkCreateManyRepair_jobInput = {
    org_id: number
    creation_date_time: Date | string
    locator_id?: number
    track_id: string
    checker_name: string
    customer: string
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    imove_scrap_id?: number | null
    repair_reason?: string
    total_ng_repair: number
  }

  export type production_single_product_draftCreateManyRepair_jobInput = {
    org_id: number
    creation_date_time: Date | string
    erp_id: number
    data: JsonNullValueInput | InputJsonValue
    track_id: string
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    imove_scrap_id?: number | null
    repair_reason?: string
    total_ng_repair: number
  }

  export type quality_checkUpdateWithoutRepair_jobInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    locator_id?: IntFieldUpdateOperationsInput | number
    checker_name?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    track_id_object?: track_id_objectUpdateOneRequiredWithoutQuality_check_used_inNestedInput
    imove_scrap_obj?: inventory_move_draftUpdateOneWithoutQuality_check_scrap_imoveNestedInput
  }

  export type quality_checkUncheckedUpdateWithoutRepair_jobInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    locator_id?: IntFieldUpdateOperationsInput | number
    track_id?: StringFieldUpdateOperationsInput | string
    checker_name?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    imove_scrap_id?: NullableIntFieldUpdateOperationsInput | number | null
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
  }

  export type quality_checkUncheckedUpdateManyWithoutRepair_jobInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    locator_id?: IntFieldUpdateOperationsInput | number
    track_id?: StringFieldUpdateOperationsInput | string
    checker_name?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    imove_scrap_id?: NullableIntFieldUpdateOperationsInput | number | null
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
  }

  export type production_single_product_draftUpdateWithoutRepair_jobInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    track_id_object?: track_id_objectUpdateOneRequiredWithoutProduct_single_resultNestedInput
    imove_scrap_obj?: inventory_move_draftUpdateOneWithoutProduction_single_scrap_imoveNestedInput
  }

  export type production_single_product_draftUncheckedUpdateWithoutRepair_jobInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    track_id?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    imove_scrap_id?: NullableIntFieldUpdateOperationsInput | number | null
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
  }

  export type production_single_product_draftUncheckedUpdateManyWithoutRepair_jobInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    erp_id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    track_id?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    imove_scrap_id?: NullableIntFieldUpdateOperationsInput | number | null
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
  }

  export type track_id_historyCreateManyTrack_id_objectInput = {
    update_date_time?: Date | string
    description?: string
    data: JsonNullValueInput | InputJsonValue
  }

  export type quality_checkCreateManyTrack_id_objectInput = {
    org_id: number
    creation_date_time: Date | string
    locator_id?: number
    checker_name: string
    customer: string
    total_ok: number
    scrap_reason?: string
    total_ng_scrap: number
    imove_scrap_id?: number | null
    repair_reason?: string
    total_ng_repair: number
    repair_job_id?: string | null
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

  export type quality_checkUpdateWithoutTrack_id_objectInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    locator_id?: IntFieldUpdateOperationsInput | number
    checker_name?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    imove_scrap_obj?: inventory_move_draftUpdateOneWithoutQuality_check_scrap_imoveNestedInput
    repair_job?: repair_jobUpdateOneWithoutQuality_check_srcNestedInput
  }

  export type quality_checkUncheckedUpdateWithoutTrack_id_objectInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    locator_id?: IntFieldUpdateOperationsInput | number
    checker_name?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    imove_scrap_id?: NullableIntFieldUpdateOperationsInput | number | null
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    repair_job_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type quality_checkUncheckedUpdateManyWithoutTrack_id_objectInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    creation_date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    locator_id?: IntFieldUpdateOperationsInput | number
    checker_name?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    total_ok?: FloatFieldUpdateOperationsInput | number
    scrap_reason?: StringFieldUpdateOperationsInput | string
    total_ng_scrap?: FloatFieldUpdateOperationsInput | number
    imove_scrap_id?: NullableIntFieldUpdateOperationsInput | number | null
    repair_reason?: StringFieldUpdateOperationsInput | string
    total_ng_repair?: FloatFieldUpdateOperationsInput | number
    repair_job_id?: NullableStringFieldUpdateOperationsInput | string | null
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
     * @deprecated Use material_receive_draftDefaultArgs instead
     */
    export type material_receive_draftArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = material_receive_draftDefaultArgs<ExtArgs>
    /**
     * @deprecated Use production_single_product_draftDefaultArgs instead
     */
    export type production_single_product_draftArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = production_single_product_draftDefaultArgs<ExtArgs>
    /**
     * @deprecated Use repair_jobDefaultArgs instead
     */
    export type repair_jobArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = repair_jobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use quality_checkDefaultArgs instead
     */
    export type quality_checkArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = quality_checkDefaultArgs<ExtArgs>
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