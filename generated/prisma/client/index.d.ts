
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model alumni
 * 
 */
export type alumni = $Result.DefaultSelection<Prisma.$alumniPayload>
/**
 * Model alumni_contract
 * 
 */
export type alumni_contract = $Result.DefaultSelection<Prisma.$alumni_contractPayload>
/**
 * Model work_expreriences
 * 
 */
export type work_expreriences = $Result.DefaultSelection<Prisma.$work_expreriencesPayload>
/**
 * Model user_privacy
 * 
 */
export type user_privacy = $Result.DefaultSelection<Prisma.$user_privacyPayload>
/**
 * Model professor
 * 
 */
export type professor = $Result.DefaultSelection<Prisma.$professorPayload>
/**
 * Model news_donatios
 * 
 */
export type news_donatios = $Result.DefaultSelection<Prisma.$news_donatiosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alumni
 * const alumni = await prisma.alumni.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Alumni
   * const alumni = await prisma.alumni.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.alumni`: Exposes CRUD operations for the **alumni** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alumni
    * const alumni = await prisma.alumni.findMany()
    * ```
    */
  get alumni(): Prisma.alumniDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alumni_contract`: Exposes CRUD operations for the **alumni_contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alumni_contracts
    * const alumni_contracts = await prisma.alumni_contract.findMany()
    * ```
    */
  get alumni_contract(): Prisma.alumni_contractDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.work_expreriences`: Exposes CRUD operations for the **work_expreriences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Work_expreriences
    * const work_expreriences = await prisma.work_expreriences.findMany()
    * ```
    */
  get work_expreriences(): Prisma.work_expreriencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_privacy`: Exposes CRUD operations for the **user_privacy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_privacies
    * const user_privacies = await prisma.user_privacy.findMany()
    * ```
    */
  get user_privacy(): Prisma.user_privacyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professor`: Exposes CRUD operations for the **professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.professorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news_donatios`: Exposes CRUD operations for the **news_donatios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News_donatios
    * const news_donatios = await prisma.news_donatios.findMany()
    * ```
    */
  get news_donatios(): Prisma.news_donatiosDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    alumni: 'alumni',
    alumni_contract: 'alumni_contract',
    work_expreriences: 'work_expreriences',
    user_privacy: 'user_privacy',
    professor: 'professor',
    news_donatios: 'news_donatios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "alumni" | "alumni_contract" | "work_expreriences" | "user_privacy" | "professor" | "news_donatios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      alumni: {
        payload: Prisma.$alumniPayload<ExtArgs>
        fields: Prisma.alumniFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alumniFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumniPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alumniFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumniPayload>
          }
          findFirst: {
            args: Prisma.alumniFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumniPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alumniFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumniPayload>
          }
          findMany: {
            args: Prisma.alumniFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumniPayload>[]
          }
          create: {
            args: Prisma.alumniCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumniPayload>
          }
          createMany: {
            args: Prisma.alumniCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.alumniCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumniPayload>[]
          }
          delete: {
            args: Prisma.alumniDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumniPayload>
          }
          update: {
            args: Prisma.alumniUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumniPayload>
          }
          deleteMany: {
            args: Prisma.alumniDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.alumniUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.alumniUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumniPayload>[]
          }
          upsert: {
            args: Prisma.alumniUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumniPayload>
          }
          aggregate: {
            args: Prisma.AlumniAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlumni>
          }
          groupBy: {
            args: Prisma.alumniGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlumniGroupByOutputType>[]
          }
          count: {
            args: Prisma.alumniCountArgs<ExtArgs>
            result: $Utils.Optional<AlumniCountAggregateOutputType> | number
          }
        }
      }
      alumni_contract: {
        payload: Prisma.$alumni_contractPayload<ExtArgs>
        fields: Prisma.alumni_contractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alumni_contractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumni_contractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alumni_contractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumni_contractPayload>
          }
          findFirst: {
            args: Prisma.alumni_contractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumni_contractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alumni_contractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumni_contractPayload>
          }
          findMany: {
            args: Prisma.alumni_contractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumni_contractPayload>[]
          }
          create: {
            args: Prisma.alumni_contractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumni_contractPayload>
          }
          createMany: {
            args: Prisma.alumni_contractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.alumni_contractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumni_contractPayload>[]
          }
          delete: {
            args: Prisma.alumni_contractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumni_contractPayload>
          }
          update: {
            args: Prisma.alumni_contractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumni_contractPayload>
          }
          deleteMany: {
            args: Prisma.alumni_contractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.alumni_contractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.alumni_contractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumni_contractPayload>[]
          }
          upsert: {
            args: Prisma.alumni_contractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alumni_contractPayload>
          }
          aggregate: {
            args: Prisma.Alumni_contractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlumni_contract>
          }
          groupBy: {
            args: Prisma.alumni_contractGroupByArgs<ExtArgs>
            result: $Utils.Optional<Alumni_contractGroupByOutputType>[]
          }
          count: {
            args: Prisma.alumni_contractCountArgs<ExtArgs>
            result: $Utils.Optional<Alumni_contractCountAggregateOutputType> | number
          }
        }
      }
      work_expreriences: {
        payload: Prisma.$work_expreriencesPayload<ExtArgs>
        fields: Prisma.work_expreriencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.work_expreriencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_expreriencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.work_expreriencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_expreriencesPayload>
          }
          findFirst: {
            args: Prisma.work_expreriencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_expreriencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.work_expreriencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_expreriencesPayload>
          }
          findMany: {
            args: Prisma.work_expreriencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_expreriencesPayload>[]
          }
          create: {
            args: Prisma.work_expreriencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_expreriencesPayload>
          }
          createMany: {
            args: Prisma.work_expreriencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.work_expreriencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_expreriencesPayload>[]
          }
          delete: {
            args: Prisma.work_expreriencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_expreriencesPayload>
          }
          update: {
            args: Prisma.work_expreriencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_expreriencesPayload>
          }
          deleteMany: {
            args: Prisma.work_expreriencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.work_expreriencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.work_expreriencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_expreriencesPayload>[]
          }
          upsert: {
            args: Prisma.work_expreriencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_expreriencesPayload>
          }
          aggregate: {
            args: Prisma.Work_expreriencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWork_expreriences>
          }
          groupBy: {
            args: Prisma.work_expreriencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Work_expreriencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.work_expreriencesCountArgs<ExtArgs>
            result: $Utils.Optional<Work_expreriencesCountAggregateOutputType> | number
          }
        }
      }
      user_privacy: {
        payload: Prisma.$user_privacyPayload<ExtArgs>
        fields: Prisma.user_privacyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_privacyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_privacyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_privacyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_privacyPayload>
          }
          findFirst: {
            args: Prisma.user_privacyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_privacyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_privacyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_privacyPayload>
          }
          findMany: {
            args: Prisma.user_privacyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_privacyPayload>[]
          }
          create: {
            args: Prisma.user_privacyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_privacyPayload>
          }
          createMany: {
            args: Prisma.user_privacyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_privacyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_privacyPayload>[]
          }
          delete: {
            args: Prisma.user_privacyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_privacyPayload>
          }
          update: {
            args: Prisma.user_privacyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_privacyPayload>
          }
          deleteMany: {
            args: Prisma.user_privacyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_privacyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_privacyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_privacyPayload>[]
          }
          upsert: {
            args: Prisma.user_privacyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_privacyPayload>
          }
          aggregate: {
            args: Prisma.User_privacyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_privacy>
          }
          groupBy: {
            args: Prisma.user_privacyGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_privacyGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_privacyCountArgs<ExtArgs>
            result: $Utils.Optional<User_privacyCountAggregateOutputType> | number
          }
        }
      }
      professor: {
        payload: Prisma.$professorPayload<ExtArgs>
        fields: Prisma.professorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.professorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.professorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>
          }
          findFirst: {
            args: Prisma.professorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.professorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>
          }
          findMany: {
            args: Prisma.professorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>[]
          }
          create: {
            args: Prisma.professorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>
          }
          createMany: {
            args: Prisma.professorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.professorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>[]
          }
          delete: {
            args: Prisma.professorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>
          }
          update: {
            args: Prisma.professorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>
          }
          deleteMany: {
            args: Prisma.professorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.professorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.professorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>[]
          }
          upsert: {
            args: Prisma.professorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.professorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.professorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      news_donatios: {
        payload: Prisma.$news_donatiosPayload<ExtArgs>
        fields: Prisma.news_donatiosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.news_donatiosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_donatiosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.news_donatiosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_donatiosPayload>
          }
          findFirst: {
            args: Prisma.news_donatiosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_donatiosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.news_donatiosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_donatiosPayload>
          }
          findMany: {
            args: Prisma.news_donatiosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_donatiosPayload>[]
          }
          create: {
            args: Prisma.news_donatiosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_donatiosPayload>
          }
          createMany: {
            args: Prisma.news_donatiosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.news_donatiosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_donatiosPayload>[]
          }
          delete: {
            args: Prisma.news_donatiosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_donatiosPayload>
          }
          update: {
            args: Prisma.news_donatiosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_donatiosPayload>
          }
          deleteMany: {
            args: Prisma.news_donatiosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.news_donatiosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.news_donatiosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_donatiosPayload>[]
          }
          upsert: {
            args: Prisma.news_donatiosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_donatiosPayload>
          }
          aggregate: {
            args: Prisma.News_donatiosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews_donatios>
          }
          groupBy: {
            args: Prisma.news_donatiosGroupByArgs<ExtArgs>
            result: $Utils.Optional<News_donatiosGroupByOutputType>[]
          }
          count: {
            args: Prisma.news_donatiosCountArgs<ExtArgs>
            result: $Utils.Optional<News_donatiosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    alumni?: alumniOmit
    alumni_contract?: alumni_contractOmit
    work_expreriences?: work_expreriencesOmit
    user_privacy?: user_privacyOmit
    professor?: professorOmit
    news_donatios?: news_donatiosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type AlumniCountOutputType
   */

  export type AlumniCountOutputType = {
    work_expreriences: number
  }

  export type AlumniCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work_expreriences?: boolean | AlumniCountOutputTypeCountWork_expreriencesArgs
  }

  // Custom InputTypes
  /**
   * AlumniCountOutputType without action
   */
  export type AlumniCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniCountOutputType
     */
    select?: AlumniCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlumniCountOutputType without action
   */
  export type AlumniCountOutputTypeCountWork_expreriencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: work_expreriencesWhereInput
  }


  /**
   * Count Type ProfessorCountOutputType
   */

  export type ProfessorCountOutputType = {
    alumni_contract: number
  }

  export type ProfessorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumni_contract?: boolean | ProfessorCountOutputTypeCountAlumni_contractArgs
  }

  // Custom InputTypes
  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCountOutputType
     */
    select?: ProfessorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountAlumni_contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alumni_contractWhereInput
  }


  /**
   * Models
   */

  /**
   * Model alumni
   */

  export type AggregateAlumni = {
    _count: AlumniCountAggregateOutputType | null
    _avg: AlumniAvgAggregateOutputType | null
    _sum: AlumniSumAggregateOutputType | null
    _min: AlumniMinAggregateOutputType | null
    _max: AlumniMaxAggregateOutputType | null
  }

  export type AlumniAvgAggregateOutputType = {
    year_start: number | null
    year_end: number | null
    facultyId: number | null
    departmentId: number | null
    edu_levelId: number | null
  }

  export type AlumniSumAggregateOutputType = {
    year_start: number | null
    year_end: number | null
    facultyId: number | null
    departmentId: number | null
    edu_levelId: number | null
  }

  export type AlumniMinAggregateOutputType = {
    alumni_id: string | null
    prefix: string | null
    fname: string | null
    lname: string | null
    profile: string | null
    passwordHash: string | null
    allowedAccount: boolean | null
    canUse: boolean | null
    year_start: number | null
    year_end: number | null
    facultyId: number | null
    departmentId: number | null
    edu_levelId: number | null
    createtAt: Date | null
    updatedAt: Date | null
  }

  export type AlumniMaxAggregateOutputType = {
    alumni_id: string | null
    prefix: string | null
    fname: string | null
    lname: string | null
    profile: string | null
    passwordHash: string | null
    allowedAccount: boolean | null
    canUse: boolean | null
    year_start: number | null
    year_end: number | null
    facultyId: number | null
    departmentId: number | null
    edu_levelId: number | null
    createtAt: Date | null
    updatedAt: Date | null
  }

  export type AlumniCountAggregateOutputType = {
    alumni_id: number
    prefix: number
    fname: number
    lname: number
    profile: number
    passwordHash: number
    allowedAccount: number
    canUse: number
    year_start: number
    year_end: number
    facultyId: number
    departmentId: number
    edu_levelId: number
    createtAt: number
    updatedAt: number
    _all: number
  }


  export type AlumniAvgAggregateInputType = {
    year_start?: true
    year_end?: true
    facultyId?: true
    departmentId?: true
    edu_levelId?: true
  }

  export type AlumniSumAggregateInputType = {
    year_start?: true
    year_end?: true
    facultyId?: true
    departmentId?: true
    edu_levelId?: true
  }

  export type AlumniMinAggregateInputType = {
    alumni_id?: true
    prefix?: true
    fname?: true
    lname?: true
    profile?: true
    passwordHash?: true
    allowedAccount?: true
    canUse?: true
    year_start?: true
    year_end?: true
    facultyId?: true
    departmentId?: true
    edu_levelId?: true
    createtAt?: true
    updatedAt?: true
  }

  export type AlumniMaxAggregateInputType = {
    alumni_id?: true
    prefix?: true
    fname?: true
    lname?: true
    profile?: true
    passwordHash?: true
    allowedAccount?: true
    canUse?: true
    year_start?: true
    year_end?: true
    facultyId?: true
    departmentId?: true
    edu_levelId?: true
    createtAt?: true
    updatedAt?: true
  }

  export type AlumniCountAggregateInputType = {
    alumni_id?: true
    prefix?: true
    fname?: true
    lname?: true
    profile?: true
    passwordHash?: true
    allowedAccount?: true
    canUse?: true
    year_start?: true
    year_end?: true
    facultyId?: true
    departmentId?: true
    edu_levelId?: true
    createtAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlumniAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alumni to aggregate.
     */
    where?: alumniWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alumni to fetch.
     */
    orderBy?: alumniOrderByWithRelationInput | alumniOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alumniWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alumni from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alumni.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alumni
    **/
    _count?: true | AlumniCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlumniAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlumniSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlumniMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlumniMaxAggregateInputType
  }

  export type GetAlumniAggregateType<T extends AlumniAggregateArgs> = {
        [P in keyof T & keyof AggregateAlumni]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlumni[P]>
      : GetScalarType<T[P], AggregateAlumni[P]>
  }




  export type alumniGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alumniWhereInput
    orderBy?: alumniOrderByWithAggregationInput | alumniOrderByWithAggregationInput[]
    by: AlumniScalarFieldEnum[] | AlumniScalarFieldEnum
    having?: alumniScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlumniCountAggregateInputType | true
    _avg?: AlumniAvgAggregateInputType
    _sum?: AlumniSumAggregateInputType
    _min?: AlumniMinAggregateInputType
    _max?: AlumniMaxAggregateInputType
  }

  export type AlumniGroupByOutputType = {
    alumni_id: string
    prefix: string
    fname: string
    lname: string
    profile: string | null
    passwordHash: string | null
    allowedAccount: boolean
    canUse: boolean
    year_start: number | null
    year_end: number | null
    facultyId: number | null
    departmentId: number | null
    edu_levelId: number | null
    createtAt: Date
    updatedAt: Date
    _count: AlumniCountAggregateOutputType | null
    _avg: AlumniAvgAggregateOutputType | null
    _sum: AlumniSumAggregateOutputType | null
    _min: AlumniMinAggregateOutputType | null
    _max: AlumniMaxAggregateOutputType | null
  }

  type GetAlumniGroupByPayload<T extends alumniGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlumniGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlumniGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlumniGroupByOutputType[P]>
            : GetScalarType<T[P], AlumniGroupByOutputType[P]>
        }
      >
    >


  export type alumniSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    alumni_id?: boolean
    prefix?: boolean
    fname?: boolean
    lname?: boolean
    profile?: boolean
    passwordHash?: boolean
    allowedAccount?: boolean
    canUse?: boolean
    year_start?: boolean
    year_end?: boolean
    facultyId?: boolean
    departmentId?: boolean
    edu_levelId?: boolean
    createtAt?: boolean
    updatedAt?: boolean
    work_expreriences?: boolean | alumni$work_expreriencesArgs<ExtArgs>
    user_privacy?: boolean | alumni$user_privacyArgs<ExtArgs>
    alumni_contract?: boolean | alumni$alumni_contractArgs<ExtArgs>
    _count?: boolean | AlumniCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alumni"]>

  export type alumniSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    alumni_id?: boolean
    prefix?: boolean
    fname?: boolean
    lname?: boolean
    profile?: boolean
    passwordHash?: boolean
    allowedAccount?: boolean
    canUse?: boolean
    year_start?: boolean
    year_end?: boolean
    facultyId?: boolean
    departmentId?: boolean
    edu_levelId?: boolean
    createtAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alumni"]>

  export type alumniSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    alumni_id?: boolean
    prefix?: boolean
    fname?: boolean
    lname?: boolean
    profile?: boolean
    passwordHash?: boolean
    allowedAccount?: boolean
    canUse?: boolean
    year_start?: boolean
    year_end?: boolean
    facultyId?: boolean
    departmentId?: boolean
    edu_levelId?: boolean
    createtAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alumni"]>

  export type alumniSelectScalar = {
    alumni_id?: boolean
    prefix?: boolean
    fname?: boolean
    lname?: boolean
    profile?: boolean
    passwordHash?: boolean
    allowedAccount?: boolean
    canUse?: boolean
    year_start?: boolean
    year_end?: boolean
    facultyId?: boolean
    departmentId?: boolean
    edu_levelId?: boolean
    createtAt?: boolean
    updatedAt?: boolean
  }

  export type alumniOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"alumni_id" | "prefix" | "fname" | "lname" | "profile" | "passwordHash" | "allowedAccount" | "canUse" | "year_start" | "year_end" | "facultyId" | "departmentId" | "edu_levelId" | "createtAt" | "updatedAt", ExtArgs["result"]["alumni"]>
  export type alumniInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work_expreriences?: boolean | alumni$work_expreriencesArgs<ExtArgs>
    user_privacy?: boolean | alumni$user_privacyArgs<ExtArgs>
    alumni_contract?: boolean | alumni$alumni_contractArgs<ExtArgs>
    _count?: boolean | AlumniCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type alumniIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type alumniIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $alumniPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "alumni"
    objects: {
      work_expreriences: Prisma.$work_expreriencesPayload<ExtArgs>[]
      user_privacy: Prisma.$user_privacyPayload<ExtArgs> | null
      alumni_contract: Prisma.$alumni_contractPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      alumni_id: string
      prefix: string
      fname: string
      lname: string
      profile: string | null
      passwordHash: string | null
      allowedAccount: boolean
      canUse: boolean
      year_start: number | null
      year_end: number | null
      facultyId: number | null
      departmentId: number | null
      edu_levelId: number | null
      createtAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alumni"]>
    composites: {}
  }

  type alumniGetPayload<S extends boolean | null | undefined | alumniDefaultArgs> = $Result.GetResult<Prisma.$alumniPayload, S>

  type alumniCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<alumniFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlumniCountAggregateInputType | true
    }

  export interface alumniDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['alumni'], meta: { name: 'alumni' } }
    /**
     * Find zero or one Alumni that matches the filter.
     * @param {alumniFindUniqueArgs} args - Arguments to find a Alumni
     * @example
     * // Get one Alumni
     * const alumni = await prisma.alumni.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alumniFindUniqueArgs>(args: SelectSubset<T, alumniFindUniqueArgs<ExtArgs>>): Prisma__alumniClient<$Result.GetResult<Prisma.$alumniPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alumni that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alumniFindUniqueOrThrowArgs} args - Arguments to find a Alumni
     * @example
     * // Get one Alumni
     * const alumni = await prisma.alumni.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alumniFindUniqueOrThrowArgs>(args: SelectSubset<T, alumniFindUniqueOrThrowArgs<ExtArgs>>): Prisma__alumniClient<$Result.GetResult<Prisma.$alumniPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alumni that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumniFindFirstArgs} args - Arguments to find a Alumni
     * @example
     * // Get one Alumni
     * const alumni = await prisma.alumni.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alumniFindFirstArgs>(args?: SelectSubset<T, alumniFindFirstArgs<ExtArgs>>): Prisma__alumniClient<$Result.GetResult<Prisma.$alumniPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alumni that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumniFindFirstOrThrowArgs} args - Arguments to find a Alumni
     * @example
     * // Get one Alumni
     * const alumni = await prisma.alumni.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alumniFindFirstOrThrowArgs>(args?: SelectSubset<T, alumniFindFirstOrThrowArgs<ExtArgs>>): Prisma__alumniClient<$Result.GetResult<Prisma.$alumniPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alumni that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumniFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alumni
     * const alumni = await prisma.alumni.findMany()
     * 
     * // Get first 10 Alumni
     * const alumni = await prisma.alumni.findMany({ take: 10 })
     * 
     * // Only select the `alumni_id`
     * const alumniWithAlumni_idOnly = await prisma.alumni.findMany({ select: { alumni_id: true } })
     * 
     */
    findMany<T extends alumniFindManyArgs>(args?: SelectSubset<T, alumniFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alumniPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alumni.
     * @param {alumniCreateArgs} args - Arguments to create a Alumni.
     * @example
     * // Create one Alumni
     * const Alumni = await prisma.alumni.create({
     *   data: {
     *     // ... data to create a Alumni
     *   }
     * })
     * 
     */
    create<T extends alumniCreateArgs>(args: SelectSubset<T, alumniCreateArgs<ExtArgs>>): Prisma__alumniClient<$Result.GetResult<Prisma.$alumniPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alumni.
     * @param {alumniCreateManyArgs} args - Arguments to create many Alumni.
     * @example
     * // Create many Alumni
     * const alumni = await prisma.alumni.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends alumniCreateManyArgs>(args?: SelectSubset<T, alumniCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alumni and returns the data saved in the database.
     * @param {alumniCreateManyAndReturnArgs} args - Arguments to create many Alumni.
     * @example
     * // Create many Alumni
     * const alumni = await prisma.alumni.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alumni and only return the `alumni_id`
     * const alumniWithAlumni_idOnly = await prisma.alumni.createManyAndReturn({
     *   select: { alumni_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends alumniCreateManyAndReturnArgs>(args?: SelectSubset<T, alumniCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alumniPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alumni.
     * @param {alumniDeleteArgs} args - Arguments to delete one Alumni.
     * @example
     * // Delete one Alumni
     * const Alumni = await prisma.alumni.delete({
     *   where: {
     *     // ... filter to delete one Alumni
     *   }
     * })
     * 
     */
    delete<T extends alumniDeleteArgs>(args: SelectSubset<T, alumniDeleteArgs<ExtArgs>>): Prisma__alumniClient<$Result.GetResult<Prisma.$alumniPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alumni.
     * @param {alumniUpdateArgs} args - Arguments to update one Alumni.
     * @example
     * // Update one Alumni
     * const alumni = await prisma.alumni.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends alumniUpdateArgs>(args: SelectSubset<T, alumniUpdateArgs<ExtArgs>>): Prisma__alumniClient<$Result.GetResult<Prisma.$alumniPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alumni.
     * @param {alumniDeleteManyArgs} args - Arguments to filter Alumni to delete.
     * @example
     * // Delete a few Alumni
     * const { count } = await prisma.alumni.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends alumniDeleteManyArgs>(args?: SelectSubset<T, alumniDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alumni.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumniUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alumni
     * const alumni = await prisma.alumni.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends alumniUpdateManyArgs>(args: SelectSubset<T, alumniUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alumni and returns the data updated in the database.
     * @param {alumniUpdateManyAndReturnArgs} args - Arguments to update many Alumni.
     * @example
     * // Update many Alumni
     * const alumni = await prisma.alumni.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alumni and only return the `alumni_id`
     * const alumniWithAlumni_idOnly = await prisma.alumni.updateManyAndReturn({
     *   select: { alumni_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends alumniUpdateManyAndReturnArgs>(args: SelectSubset<T, alumniUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alumniPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alumni.
     * @param {alumniUpsertArgs} args - Arguments to update or create a Alumni.
     * @example
     * // Update or create a Alumni
     * const alumni = await prisma.alumni.upsert({
     *   create: {
     *     // ... data to create a Alumni
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alumni we want to update
     *   }
     * })
     */
    upsert<T extends alumniUpsertArgs>(args: SelectSubset<T, alumniUpsertArgs<ExtArgs>>): Prisma__alumniClient<$Result.GetResult<Prisma.$alumniPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alumni.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumniCountArgs} args - Arguments to filter Alumni to count.
     * @example
     * // Count the number of Alumni
     * const count = await prisma.alumni.count({
     *   where: {
     *     // ... the filter for the Alumni we want to count
     *   }
     * })
    **/
    count<T extends alumniCountArgs>(
      args?: Subset<T, alumniCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlumniCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alumni.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumniAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlumniAggregateArgs>(args: Subset<T, AlumniAggregateArgs>): Prisma.PrismaPromise<GetAlumniAggregateType<T>>

    /**
     * Group by Alumni.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumniGroupByArgs} args - Group by arguments.
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
      T extends alumniGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alumniGroupByArgs['orderBy'] }
        : { orderBy?: alumniGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, alumniGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumniGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the alumni model
   */
  readonly fields: alumniFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for alumni.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alumniClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work_expreriences<T extends alumni$work_expreriencesArgs<ExtArgs> = {}>(args?: Subset<T, alumni$work_expreriencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_expreriencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_privacy<T extends alumni$user_privacyArgs<ExtArgs> = {}>(args?: Subset<T, alumni$user_privacyArgs<ExtArgs>>): Prisma__user_privacyClient<$Result.GetResult<Prisma.$user_privacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    alumni_contract<T extends alumni$alumni_contractArgs<ExtArgs> = {}>(args?: Subset<T, alumni$alumni_contractArgs<ExtArgs>>): Prisma__alumni_contractClient<$Result.GetResult<Prisma.$alumni_contractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the alumni model
   */
  interface alumniFieldRefs {
    readonly alumni_id: FieldRef<"alumni", 'String'>
    readonly prefix: FieldRef<"alumni", 'String'>
    readonly fname: FieldRef<"alumni", 'String'>
    readonly lname: FieldRef<"alumni", 'String'>
    readonly profile: FieldRef<"alumni", 'String'>
    readonly passwordHash: FieldRef<"alumni", 'String'>
    readonly allowedAccount: FieldRef<"alumni", 'Boolean'>
    readonly canUse: FieldRef<"alumni", 'Boolean'>
    readonly year_start: FieldRef<"alumni", 'Int'>
    readonly year_end: FieldRef<"alumni", 'Int'>
    readonly facultyId: FieldRef<"alumni", 'Int'>
    readonly departmentId: FieldRef<"alumni", 'Int'>
    readonly edu_levelId: FieldRef<"alumni", 'Int'>
    readonly createtAt: FieldRef<"alumni", 'DateTime'>
    readonly updatedAt: FieldRef<"alumni", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * alumni findUnique
   */
  export type alumniFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni
     */
    select?: alumniSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni
     */
    omit?: alumniOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumniInclude<ExtArgs> | null
    /**
     * Filter, which alumni to fetch.
     */
    where: alumniWhereUniqueInput
  }

  /**
   * alumni findUniqueOrThrow
   */
  export type alumniFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni
     */
    select?: alumniSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni
     */
    omit?: alumniOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumniInclude<ExtArgs> | null
    /**
     * Filter, which alumni to fetch.
     */
    where: alumniWhereUniqueInput
  }

  /**
   * alumni findFirst
   */
  export type alumniFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni
     */
    select?: alumniSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni
     */
    omit?: alumniOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumniInclude<ExtArgs> | null
    /**
     * Filter, which alumni to fetch.
     */
    where?: alumniWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alumni to fetch.
     */
    orderBy?: alumniOrderByWithRelationInput | alumniOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alumni.
     */
    cursor?: alumniWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alumni from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alumni.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alumni.
     */
    distinct?: AlumniScalarFieldEnum | AlumniScalarFieldEnum[]
  }

  /**
   * alumni findFirstOrThrow
   */
  export type alumniFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni
     */
    select?: alumniSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni
     */
    omit?: alumniOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumniInclude<ExtArgs> | null
    /**
     * Filter, which alumni to fetch.
     */
    where?: alumniWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alumni to fetch.
     */
    orderBy?: alumniOrderByWithRelationInput | alumniOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alumni.
     */
    cursor?: alumniWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alumni from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alumni.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alumni.
     */
    distinct?: AlumniScalarFieldEnum | AlumniScalarFieldEnum[]
  }

  /**
   * alumni findMany
   */
  export type alumniFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni
     */
    select?: alumniSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni
     */
    omit?: alumniOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumniInclude<ExtArgs> | null
    /**
     * Filter, which alumni to fetch.
     */
    where?: alumniWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alumni to fetch.
     */
    orderBy?: alumniOrderByWithRelationInput | alumniOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alumni.
     */
    cursor?: alumniWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alumni from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alumni.
     */
    skip?: number
    distinct?: AlumniScalarFieldEnum | AlumniScalarFieldEnum[]
  }

  /**
   * alumni create
   */
  export type alumniCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni
     */
    select?: alumniSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni
     */
    omit?: alumniOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumniInclude<ExtArgs> | null
    /**
     * The data needed to create a alumni.
     */
    data: XOR<alumniCreateInput, alumniUncheckedCreateInput>
  }

  /**
   * alumni createMany
   */
  export type alumniCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alumni.
     */
    data: alumniCreateManyInput | alumniCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * alumni createManyAndReturn
   */
  export type alumniCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni
     */
    select?: alumniSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the alumni
     */
    omit?: alumniOmit<ExtArgs> | null
    /**
     * The data used to create many alumni.
     */
    data: alumniCreateManyInput | alumniCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * alumni update
   */
  export type alumniUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni
     */
    select?: alumniSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni
     */
    omit?: alumniOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumniInclude<ExtArgs> | null
    /**
     * The data needed to update a alumni.
     */
    data: XOR<alumniUpdateInput, alumniUncheckedUpdateInput>
    /**
     * Choose, which alumni to update.
     */
    where: alumniWhereUniqueInput
  }

  /**
   * alumni updateMany
   */
  export type alumniUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alumni.
     */
    data: XOR<alumniUpdateManyMutationInput, alumniUncheckedUpdateManyInput>
    /**
     * Filter which alumni to update
     */
    where?: alumniWhereInput
    /**
     * Limit how many alumni to update.
     */
    limit?: number
  }

  /**
   * alumni updateManyAndReturn
   */
  export type alumniUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni
     */
    select?: alumniSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the alumni
     */
    omit?: alumniOmit<ExtArgs> | null
    /**
     * The data used to update alumni.
     */
    data: XOR<alumniUpdateManyMutationInput, alumniUncheckedUpdateManyInput>
    /**
     * Filter which alumni to update
     */
    where?: alumniWhereInput
    /**
     * Limit how many alumni to update.
     */
    limit?: number
  }

  /**
   * alumni upsert
   */
  export type alumniUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni
     */
    select?: alumniSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni
     */
    omit?: alumniOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumniInclude<ExtArgs> | null
    /**
     * The filter to search for the alumni to update in case it exists.
     */
    where: alumniWhereUniqueInput
    /**
     * In case the alumni found by the `where` argument doesn't exist, create a new alumni with this data.
     */
    create: XOR<alumniCreateInput, alumniUncheckedCreateInput>
    /**
     * In case the alumni was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alumniUpdateInput, alumniUncheckedUpdateInput>
  }

  /**
   * alumni delete
   */
  export type alumniDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni
     */
    select?: alumniSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni
     */
    omit?: alumniOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumniInclude<ExtArgs> | null
    /**
     * Filter which alumni to delete.
     */
    where: alumniWhereUniqueInput
  }

  /**
   * alumni deleteMany
   */
  export type alumniDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alumni to delete
     */
    where?: alumniWhereInput
    /**
     * Limit how many alumni to delete.
     */
    limit?: number
  }

  /**
   * alumni.work_expreriences
   */
  export type alumni$work_expreriencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_expreriences
     */
    select?: work_expreriencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_expreriences
     */
    omit?: work_expreriencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_expreriencesInclude<ExtArgs> | null
    where?: work_expreriencesWhereInput
    orderBy?: work_expreriencesOrderByWithRelationInput | work_expreriencesOrderByWithRelationInput[]
    cursor?: work_expreriencesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Work_expreriencesScalarFieldEnum | Work_expreriencesScalarFieldEnum[]
  }

  /**
   * alumni.user_privacy
   */
  export type alumni$user_privacyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_privacy
     */
    select?: user_privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_privacy
     */
    omit?: user_privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_privacyInclude<ExtArgs> | null
    where?: user_privacyWhereInput
  }

  /**
   * alumni.alumni_contract
   */
  export type alumni$alumni_contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni_contract
     */
    select?: alumni_contractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni_contract
     */
    omit?: alumni_contractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumni_contractInclude<ExtArgs> | null
    where?: alumni_contractWhereInput
  }

  /**
   * alumni without action
   */
  export type alumniDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni
     */
    select?: alumniSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni
     */
    omit?: alumniOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumniInclude<ExtArgs> | null
  }


  /**
   * Model alumni_contract
   */

  export type AggregateAlumni_contract = {
    _count: Alumni_contractCountAggregateOutputType | null
    _avg: Alumni_contractAvgAggregateOutputType | null
    _sum: Alumni_contractSumAggregateOutputType | null
    _min: Alumni_contractMinAggregateOutputType | null
    _max: Alumni_contractMaxAggregateOutputType | null
  }

  export type Alumni_contractAvgAggregateOutputType = {
    id: number | null
  }

  export type Alumni_contractSumAggregateOutputType = {
    id: number | null
  }

  export type Alumni_contractMinAggregateOutputType = {
    id: number | null
    alumniId: string | null
    phone1: string | null
    phone2: string | null
    email1: string | null
    email2: string | null
    facebook: string | null
    address: string | null
    tambon: string | null
    amphure: string | null
    province: string | null
    zipcode: string | null
    createtAt: Date | null
    updatedAt: Date | null
    professorProfessor_id: string | null
  }

  export type Alumni_contractMaxAggregateOutputType = {
    id: number | null
    alumniId: string | null
    phone1: string | null
    phone2: string | null
    email1: string | null
    email2: string | null
    facebook: string | null
    address: string | null
    tambon: string | null
    amphure: string | null
    province: string | null
    zipcode: string | null
    createtAt: Date | null
    updatedAt: Date | null
    professorProfessor_id: string | null
  }

  export type Alumni_contractCountAggregateOutputType = {
    id: number
    alumniId: number
    phone1: number
    phone2: number
    email1: number
    email2: number
    facebook: number
    address: number
    tambon: number
    amphure: number
    province: number
    zipcode: number
    createtAt: number
    updatedAt: number
    professorProfessor_id: number
    _all: number
  }


  export type Alumni_contractAvgAggregateInputType = {
    id?: true
  }

  export type Alumni_contractSumAggregateInputType = {
    id?: true
  }

  export type Alumni_contractMinAggregateInputType = {
    id?: true
    alumniId?: true
    phone1?: true
    phone2?: true
    email1?: true
    email2?: true
    facebook?: true
    address?: true
    tambon?: true
    amphure?: true
    province?: true
    zipcode?: true
    createtAt?: true
    updatedAt?: true
    professorProfessor_id?: true
  }

  export type Alumni_contractMaxAggregateInputType = {
    id?: true
    alumniId?: true
    phone1?: true
    phone2?: true
    email1?: true
    email2?: true
    facebook?: true
    address?: true
    tambon?: true
    amphure?: true
    province?: true
    zipcode?: true
    createtAt?: true
    updatedAt?: true
    professorProfessor_id?: true
  }

  export type Alumni_contractCountAggregateInputType = {
    id?: true
    alumniId?: true
    phone1?: true
    phone2?: true
    email1?: true
    email2?: true
    facebook?: true
    address?: true
    tambon?: true
    amphure?: true
    province?: true
    zipcode?: true
    createtAt?: true
    updatedAt?: true
    professorProfessor_id?: true
    _all?: true
  }

  export type Alumni_contractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alumni_contract to aggregate.
     */
    where?: alumni_contractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alumni_contracts to fetch.
     */
    orderBy?: alumni_contractOrderByWithRelationInput | alumni_contractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alumni_contractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alumni_contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alumni_contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alumni_contracts
    **/
    _count?: true | Alumni_contractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Alumni_contractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Alumni_contractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Alumni_contractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Alumni_contractMaxAggregateInputType
  }

  export type GetAlumni_contractAggregateType<T extends Alumni_contractAggregateArgs> = {
        [P in keyof T & keyof AggregateAlumni_contract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlumni_contract[P]>
      : GetScalarType<T[P], AggregateAlumni_contract[P]>
  }




  export type alumni_contractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alumni_contractWhereInput
    orderBy?: alumni_contractOrderByWithAggregationInput | alumni_contractOrderByWithAggregationInput[]
    by: Alumni_contractScalarFieldEnum[] | Alumni_contractScalarFieldEnum
    having?: alumni_contractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Alumni_contractCountAggregateInputType | true
    _avg?: Alumni_contractAvgAggregateInputType
    _sum?: Alumni_contractSumAggregateInputType
    _min?: Alumni_contractMinAggregateInputType
    _max?: Alumni_contractMaxAggregateInputType
  }

  export type Alumni_contractGroupByOutputType = {
    id: number
    alumniId: string | null
    phone1: string | null
    phone2: string | null
    email1: string | null
    email2: string | null
    facebook: string | null
    address: string | null
    tambon: string | null
    amphure: string | null
    province: string | null
    zipcode: string | null
    createtAt: Date
    updatedAt: Date
    professorProfessor_id: string | null
    _count: Alumni_contractCountAggregateOutputType | null
    _avg: Alumni_contractAvgAggregateOutputType | null
    _sum: Alumni_contractSumAggregateOutputType | null
    _min: Alumni_contractMinAggregateOutputType | null
    _max: Alumni_contractMaxAggregateOutputType | null
  }

  type GetAlumni_contractGroupByPayload<T extends alumni_contractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Alumni_contractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Alumni_contractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Alumni_contractGroupByOutputType[P]>
            : GetScalarType<T[P], Alumni_contractGroupByOutputType[P]>
        }
      >
    >


  export type alumni_contractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alumniId?: boolean
    phone1?: boolean
    phone2?: boolean
    email1?: boolean
    email2?: boolean
    facebook?: boolean
    address?: boolean
    tambon?: boolean
    amphure?: boolean
    province?: boolean
    zipcode?: boolean
    createtAt?: boolean
    updatedAt?: boolean
    professorProfessor_id?: boolean
    alumni?: boolean | alumni_contract$alumniArgs<ExtArgs>
    professor?: boolean | alumni_contract$professorArgs<ExtArgs>
  }, ExtArgs["result"]["alumni_contract"]>

  export type alumni_contractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alumniId?: boolean
    phone1?: boolean
    phone2?: boolean
    email1?: boolean
    email2?: boolean
    facebook?: boolean
    address?: boolean
    tambon?: boolean
    amphure?: boolean
    province?: boolean
    zipcode?: boolean
    createtAt?: boolean
    updatedAt?: boolean
    professorProfessor_id?: boolean
    alumni?: boolean | alumni_contract$alumniArgs<ExtArgs>
    professor?: boolean | alumni_contract$professorArgs<ExtArgs>
  }, ExtArgs["result"]["alumni_contract"]>

  export type alumni_contractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alumniId?: boolean
    phone1?: boolean
    phone2?: boolean
    email1?: boolean
    email2?: boolean
    facebook?: boolean
    address?: boolean
    tambon?: boolean
    amphure?: boolean
    province?: boolean
    zipcode?: boolean
    createtAt?: boolean
    updatedAt?: boolean
    professorProfessor_id?: boolean
    alumni?: boolean | alumni_contract$alumniArgs<ExtArgs>
    professor?: boolean | alumni_contract$professorArgs<ExtArgs>
  }, ExtArgs["result"]["alumni_contract"]>

  export type alumni_contractSelectScalar = {
    id?: boolean
    alumniId?: boolean
    phone1?: boolean
    phone2?: boolean
    email1?: boolean
    email2?: boolean
    facebook?: boolean
    address?: boolean
    tambon?: boolean
    amphure?: boolean
    province?: boolean
    zipcode?: boolean
    createtAt?: boolean
    updatedAt?: boolean
    professorProfessor_id?: boolean
  }

  export type alumni_contractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alumniId" | "phone1" | "phone2" | "email1" | "email2" | "facebook" | "address" | "tambon" | "amphure" | "province" | "zipcode" | "createtAt" | "updatedAt" | "professorProfessor_id", ExtArgs["result"]["alumni_contract"]>
  export type alumni_contractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumni?: boolean | alumni_contract$alumniArgs<ExtArgs>
    professor?: boolean | alumni_contract$professorArgs<ExtArgs>
  }
  export type alumni_contractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumni?: boolean | alumni_contract$alumniArgs<ExtArgs>
    professor?: boolean | alumni_contract$professorArgs<ExtArgs>
  }
  export type alumni_contractIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumni?: boolean | alumni_contract$alumniArgs<ExtArgs>
    professor?: boolean | alumni_contract$professorArgs<ExtArgs>
  }

  export type $alumni_contractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "alumni_contract"
    objects: {
      alumni: Prisma.$alumniPayload<ExtArgs> | null
      professor: Prisma.$professorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alumniId: string | null
      phone1: string | null
      phone2: string | null
      email1: string | null
      email2: string | null
      facebook: string | null
      address: string | null
      tambon: string | null
      amphure: string | null
      province: string | null
      zipcode: string | null
      createtAt: Date
      updatedAt: Date
      professorProfessor_id: string | null
    }, ExtArgs["result"]["alumni_contract"]>
    composites: {}
  }

  type alumni_contractGetPayload<S extends boolean | null | undefined | alumni_contractDefaultArgs> = $Result.GetResult<Prisma.$alumni_contractPayload, S>

  type alumni_contractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<alumni_contractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Alumni_contractCountAggregateInputType | true
    }

  export interface alumni_contractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['alumni_contract'], meta: { name: 'alumni_contract' } }
    /**
     * Find zero or one Alumni_contract that matches the filter.
     * @param {alumni_contractFindUniqueArgs} args - Arguments to find a Alumni_contract
     * @example
     * // Get one Alumni_contract
     * const alumni_contract = await prisma.alumni_contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alumni_contractFindUniqueArgs>(args: SelectSubset<T, alumni_contractFindUniqueArgs<ExtArgs>>): Prisma__alumni_contractClient<$Result.GetResult<Prisma.$alumni_contractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alumni_contract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alumni_contractFindUniqueOrThrowArgs} args - Arguments to find a Alumni_contract
     * @example
     * // Get one Alumni_contract
     * const alumni_contract = await prisma.alumni_contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alumni_contractFindUniqueOrThrowArgs>(args: SelectSubset<T, alumni_contractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__alumni_contractClient<$Result.GetResult<Prisma.$alumni_contractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alumni_contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumni_contractFindFirstArgs} args - Arguments to find a Alumni_contract
     * @example
     * // Get one Alumni_contract
     * const alumni_contract = await prisma.alumni_contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alumni_contractFindFirstArgs>(args?: SelectSubset<T, alumni_contractFindFirstArgs<ExtArgs>>): Prisma__alumni_contractClient<$Result.GetResult<Prisma.$alumni_contractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alumni_contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumni_contractFindFirstOrThrowArgs} args - Arguments to find a Alumni_contract
     * @example
     * // Get one Alumni_contract
     * const alumni_contract = await prisma.alumni_contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alumni_contractFindFirstOrThrowArgs>(args?: SelectSubset<T, alumni_contractFindFirstOrThrowArgs<ExtArgs>>): Prisma__alumni_contractClient<$Result.GetResult<Prisma.$alumni_contractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alumni_contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumni_contractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alumni_contracts
     * const alumni_contracts = await prisma.alumni_contract.findMany()
     * 
     * // Get first 10 Alumni_contracts
     * const alumni_contracts = await prisma.alumni_contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alumni_contractWithIdOnly = await prisma.alumni_contract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends alumni_contractFindManyArgs>(args?: SelectSubset<T, alumni_contractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alumni_contractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alumni_contract.
     * @param {alumni_contractCreateArgs} args - Arguments to create a Alumni_contract.
     * @example
     * // Create one Alumni_contract
     * const Alumni_contract = await prisma.alumni_contract.create({
     *   data: {
     *     // ... data to create a Alumni_contract
     *   }
     * })
     * 
     */
    create<T extends alumni_contractCreateArgs>(args: SelectSubset<T, alumni_contractCreateArgs<ExtArgs>>): Prisma__alumni_contractClient<$Result.GetResult<Prisma.$alumni_contractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alumni_contracts.
     * @param {alumni_contractCreateManyArgs} args - Arguments to create many Alumni_contracts.
     * @example
     * // Create many Alumni_contracts
     * const alumni_contract = await prisma.alumni_contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends alumni_contractCreateManyArgs>(args?: SelectSubset<T, alumni_contractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alumni_contracts and returns the data saved in the database.
     * @param {alumni_contractCreateManyAndReturnArgs} args - Arguments to create many Alumni_contracts.
     * @example
     * // Create many Alumni_contracts
     * const alumni_contract = await prisma.alumni_contract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alumni_contracts and only return the `id`
     * const alumni_contractWithIdOnly = await prisma.alumni_contract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends alumni_contractCreateManyAndReturnArgs>(args?: SelectSubset<T, alumni_contractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alumni_contractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alumni_contract.
     * @param {alumni_contractDeleteArgs} args - Arguments to delete one Alumni_contract.
     * @example
     * // Delete one Alumni_contract
     * const Alumni_contract = await prisma.alumni_contract.delete({
     *   where: {
     *     // ... filter to delete one Alumni_contract
     *   }
     * })
     * 
     */
    delete<T extends alumni_contractDeleteArgs>(args: SelectSubset<T, alumni_contractDeleteArgs<ExtArgs>>): Prisma__alumni_contractClient<$Result.GetResult<Prisma.$alumni_contractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alumni_contract.
     * @param {alumni_contractUpdateArgs} args - Arguments to update one Alumni_contract.
     * @example
     * // Update one Alumni_contract
     * const alumni_contract = await prisma.alumni_contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends alumni_contractUpdateArgs>(args: SelectSubset<T, alumni_contractUpdateArgs<ExtArgs>>): Prisma__alumni_contractClient<$Result.GetResult<Prisma.$alumni_contractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alumni_contracts.
     * @param {alumni_contractDeleteManyArgs} args - Arguments to filter Alumni_contracts to delete.
     * @example
     * // Delete a few Alumni_contracts
     * const { count } = await prisma.alumni_contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends alumni_contractDeleteManyArgs>(args?: SelectSubset<T, alumni_contractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alumni_contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumni_contractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alumni_contracts
     * const alumni_contract = await prisma.alumni_contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends alumni_contractUpdateManyArgs>(args: SelectSubset<T, alumni_contractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alumni_contracts and returns the data updated in the database.
     * @param {alumni_contractUpdateManyAndReturnArgs} args - Arguments to update many Alumni_contracts.
     * @example
     * // Update many Alumni_contracts
     * const alumni_contract = await prisma.alumni_contract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alumni_contracts and only return the `id`
     * const alumni_contractWithIdOnly = await prisma.alumni_contract.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends alumni_contractUpdateManyAndReturnArgs>(args: SelectSubset<T, alumni_contractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alumni_contractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alumni_contract.
     * @param {alumni_contractUpsertArgs} args - Arguments to update or create a Alumni_contract.
     * @example
     * // Update or create a Alumni_contract
     * const alumni_contract = await prisma.alumni_contract.upsert({
     *   create: {
     *     // ... data to create a Alumni_contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alumni_contract we want to update
     *   }
     * })
     */
    upsert<T extends alumni_contractUpsertArgs>(args: SelectSubset<T, alumni_contractUpsertArgs<ExtArgs>>): Prisma__alumni_contractClient<$Result.GetResult<Prisma.$alumni_contractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alumni_contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumni_contractCountArgs} args - Arguments to filter Alumni_contracts to count.
     * @example
     * // Count the number of Alumni_contracts
     * const count = await prisma.alumni_contract.count({
     *   where: {
     *     // ... the filter for the Alumni_contracts we want to count
     *   }
     * })
    **/
    count<T extends alumni_contractCountArgs>(
      args?: Subset<T, alumni_contractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Alumni_contractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alumni_contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alumni_contractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Alumni_contractAggregateArgs>(args: Subset<T, Alumni_contractAggregateArgs>): Prisma.PrismaPromise<GetAlumni_contractAggregateType<T>>

    /**
     * Group by Alumni_contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumni_contractGroupByArgs} args - Group by arguments.
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
      T extends alumni_contractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alumni_contractGroupByArgs['orderBy'] }
        : { orderBy?: alumni_contractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, alumni_contractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumni_contractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the alumni_contract model
   */
  readonly fields: alumni_contractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for alumni_contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alumni_contractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alumni<T extends alumni_contract$alumniArgs<ExtArgs> = {}>(args?: Subset<T, alumni_contract$alumniArgs<ExtArgs>>): Prisma__alumniClient<$Result.GetResult<Prisma.$alumniPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    professor<T extends alumni_contract$professorArgs<ExtArgs> = {}>(args?: Subset<T, alumni_contract$professorArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the alumni_contract model
   */
  interface alumni_contractFieldRefs {
    readonly id: FieldRef<"alumni_contract", 'Int'>
    readonly alumniId: FieldRef<"alumni_contract", 'String'>
    readonly phone1: FieldRef<"alumni_contract", 'String'>
    readonly phone2: FieldRef<"alumni_contract", 'String'>
    readonly email1: FieldRef<"alumni_contract", 'String'>
    readonly email2: FieldRef<"alumni_contract", 'String'>
    readonly facebook: FieldRef<"alumni_contract", 'String'>
    readonly address: FieldRef<"alumni_contract", 'String'>
    readonly tambon: FieldRef<"alumni_contract", 'String'>
    readonly amphure: FieldRef<"alumni_contract", 'String'>
    readonly province: FieldRef<"alumni_contract", 'String'>
    readonly zipcode: FieldRef<"alumni_contract", 'String'>
    readonly createtAt: FieldRef<"alumni_contract", 'DateTime'>
    readonly updatedAt: FieldRef<"alumni_contract", 'DateTime'>
    readonly professorProfessor_id: FieldRef<"alumni_contract", 'String'>
  }
    

  // Custom InputTypes
  /**
   * alumni_contract findUnique
   */
  export type alumni_contractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni_contract
     */
    select?: alumni_contractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni_contract
     */
    omit?: alumni_contractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumni_contractInclude<ExtArgs> | null
    /**
     * Filter, which alumni_contract to fetch.
     */
    where: alumni_contractWhereUniqueInput
  }

  /**
   * alumni_contract findUniqueOrThrow
   */
  export type alumni_contractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni_contract
     */
    select?: alumni_contractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni_contract
     */
    omit?: alumni_contractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumni_contractInclude<ExtArgs> | null
    /**
     * Filter, which alumni_contract to fetch.
     */
    where: alumni_contractWhereUniqueInput
  }

  /**
   * alumni_contract findFirst
   */
  export type alumni_contractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni_contract
     */
    select?: alumni_contractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni_contract
     */
    omit?: alumni_contractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumni_contractInclude<ExtArgs> | null
    /**
     * Filter, which alumni_contract to fetch.
     */
    where?: alumni_contractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alumni_contracts to fetch.
     */
    orderBy?: alumni_contractOrderByWithRelationInput | alumni_contractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alumni_contracts.
     */
    cursor?: alumni_contractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alumni_contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alumni_contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alumni_contracts.
     */
    distinct?: Alumni_contractScalarFieldEnum | Alumni_contractScalarFieldEnum[]
  }

  /**
   * alumni_contract findFirstOrThrow
   */
  export type alumni_contractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni_contract
     */
    select?: alumni_contractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni_contract
     */
    omit?: alumni_contractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumni_contractInclude<ExtArgs> | null
    /**
     * Filter, which alumni_contract to fetch.
     */
    where?: alumni_contractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alumni_contracts to fetch.
     */
    orderBy?: alumni_contractOrderByWithRelationInput | alumni_contractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alumni_contracts.
     */
    cursor?: alumni_contractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alumni_contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alumni_contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alumni_contracts.
     */
    distinct?: Alumni_contractScalarFieldEnum | Alumni_contractScalarFieldEnum[]
  }

  /**
   * alumni_contract findMany
   */
  export type alumni_contractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni_contract
     */
    select?: alumni_contractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni_contract
     */
    omit?: alumni_contractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumni_contractInclude<ExtArgs> | null
    /**
     * Filter, which alumni_contracts to fetch.
     */
    where?: alumni_contractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alumni_contracts to fetch.
     */
    orderBy?: alumni_contractOrderByWithRelationInput | alumni_contractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alumni_contracts.
     */
    cursor?: alumni_contractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alumni_contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alumni_contracts.
     */
    skip?: number
    distinct?: Alumni_contractScalarFieldEnum | Alumni_contractScalarFieldEnum[]
  }

  /**
   * alumni_contract create
   */
  export type alumni_contractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni_contract
     */
    select?: alumni_contractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni_contract
     */
    omit?: alumni_contractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumni_contractInclude<ExtArgs> | null
    /**
     * The data needed to create a alumni_contract.
     */
    data?: XOR<alumni_contractCreateInput, alumni_contractUncheckedCreateInput>
  }

  /**
   * alumni_contract createMany
   */
  export type alumni_contractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alumni_contracts.
     */
    data: alumni_contractCreateManyInput | alumni_contractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * alumni_contract createManyAndReturn
   */
  export type alumni_contractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni_contract
     */
    select?: alumni_contractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the alumni_contract
     */
    omit?: alumni_contractOmit<ExtArgs> | null
    /**
     * The data used to create many alumni_contracts.
     */
    data: alumni_contractCreateManyInput | alumni_contractCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumni_contractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * alumni_contract update
   */
  export type alumni_contractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni_contract
     */
    select?: alumni_contractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni_contract
     */
    omit?: alumni_contractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumni_contractInclude<ExtArgs> | null
    /**
     * The data needed to update a alumni_contract.
     */
    data: XOR<alumni_contractUpdateInput, alumni_contractUncheckedUpdateInput>
    /**
     * Choose, which alumni_contract to update.
     */
    where: alumni_contractWhereUniqueInput
  }

  /**
   * alumni_contract updateMany
   */
  export type alumni_contractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alumni_contracts.
     */
    data: XOR<alumni_contractUpdateManyMutationInput, alumni_contractUncheckedUpdateManyInput>
    /**
     * Filter which alumni_contracts to update
     */
    where?: alumni_contractWhereInput
    /**
     * Limit how many alumni_contracts to update.
     */
    limit?: number
  }

  /**
   * alumni_contract updateManyAndReturn
   */
  export type alumni_contractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni_contract
     */
    select?: alumni_contractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the alumni_contract
     */
    omit?: alumni_contractOmit<ExtArgs> | null
    /**
     * The data used to update alumni_contracts.
     */
    data: XOR<alumni_contractUpdateManyMutationInput, alumni_contractUncheckedUpdateManyInput>
    /**
     * Filter which alumni_contracts to update
     */
    where?: alumni_contractWhereInput
    /**
     * Limit how many alumni_contracts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumni_contractIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * alumni_contract upsert
   */
  export type alumni_contractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni_contract
     */
    select?: alumni_contractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni_contract
     */
    omit?: alumni_contractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumni_contractInclude<ExtArgs> | null
    /**
     * The filter to search for the alumni_contract to update in case it exists.
     */
    where: alumni_contractWhereUniqueInput
    /**
     * In case the alumni_contract found by the `where` argument doesn't exist, create a new alumni_contract with this data.
     */
    create: XOR<alumni_contractCreateInput, alumni_contractUncheckedCreateInput>
    /**
     * In case the alumni_contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alumni_contractUpdateInput, alumni_contractUncheckedUpdateInput>
  }

  /**
   * alumni_contract delete
   */
  export type alumni_contractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni_contract
     */
    select?: alumni_contractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni_contract
     */
    omit?: alumni_contractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumni_contractInclude<ExtArgs> | null
    /**
     * Filter which alumni_contract to delete.
     */
    where: alumni_contractWhereUniqueInput
  }

  /**
   * alumni_contract deleteMany
   */
  export type alumni_contractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alumni_contracts to delete
     */
    where?: alumni_contractWhereInput
    /**
     * Limit how many alumni_contracts to delete.
     */
    limit?: number
  }

  /**
   * alumni_contract.alumni
   */
  export type alumni_contract$alumniArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni
     */
    select?: alumniSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni
     */
    omit?: alumniOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumniInclude<ExtArgs> | null
    where?: alumniWhereInput
  }

  /**
   * alumni_contract.professor
   */
  export type alumni_contract$professorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    where?: professorWhereInput
  }

  /**
   * alumni_contract without action
   */
  export type alumni_contractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni_contract
     */
    select?: alumni_contractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni_contract
     */
    omit?: alumni_contractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumni_contractInclude<ExtArgs> | null
  }


  /**
   * Model work_expreriences
   */

  export type AggregateWork_expreriences = {
    _count: Work_expreriencesCountAggregateOutputType | null
    _avg: Work_expreriencesAvgAggregateOutputType | null
    _sum: Work_expreriencesSumAggregateOutputType | null
    _min: Work_expreriencesMinAggregateOutputType | null
    _max: Work_expreriencesMaxAggregateOutputType | null
  }

  export type Work_expreriencesAvgAggregateOutputType = {
    id: number | null
    salary: number | null
  }

  export type Work_expreriencesSumAggregateOutputType = {
    id: number | null
    salary: number | null
  }

  export type Work_expreriencesMinAggregateOutputType = {
    id: number | null
    isOnTheLine: boolean | null
    job_position: string | null
    company_name: string | null
    company_place: string | null
    start_date: string | null
    end_date: string | null
    job_detail: string | null
    job_responsibility: string | null
    job_skills: string | null
    salary: number | null
    isCurrent: boolean | null
    isInThai: boolean | null
    remark: string | null
    edu_level: string | null
    continued_study: boolean | null
    edu_faculty: string | null
    edu_dep: string | null
    edu_university: string | null
    year_start: string | null
    year_end: string | null
    edu_performance: string | null
    createdAt: Date | null
    updatedAt: Date | null
    alumniId: string | null
  }

  export type Work_expreriencesMaxAggregateOutputType = {
    id: number | null
    isOnTheLine: boolean | null
    job_position: string | null
    company_name: string | null
    company_place: string | null
    start_date: string | null
    end_date: string | null
    job_detail: string | null
    job_responsibility: string | null
    job_skills: string | null
    salary: number | null
    isCurrent: boolean | null
    isInThai: boolean | null
    remark: string | null
    edu_level: string | null
    continued_study: boolean | null
    edu_faculty: string | null
    edu_dep: string | null
    edu_university: string | null
    year_start: string | null
    year_end: string | null
    edu_performance: string | null
    createdAt: Date | null
    updatedAt: Date | null
    alumniId: string | null
  }

  export type Work_expreriencesCountAggregateOutputType = {
    id: number
    isOnTheLine: number
    job_position: number
    company_name: number
    company_place: number
    start_date: number
    end_date: number
    job_detail: number
    job_responsibility: number
    job_skills: number
    salary: number
    isCurrent: number
    isInThai: number
    remark: number
    edu_level: number
    continued_study: number
    edu_faculty: number
    edu_dep: number
    edu_university: number
    year_start: number
    year_end: number
    edu_performance: number
    createdAt: number
    updatedAt: number
    alumniId: number
    _all: number
  }


  export type Work_expreriencesAvgAggregateInputType = {
    id?: true
    salary?: true
  }

  export type Work_expreriencesSumAggregateInputType = {
    id?: true
    salary?: true
  }

  export type Work_expreriencesMinAggregateInputType = {
    id?: true
    isOnTheLine?: true
    job_position?: true
    company_name?: true
    company_place?: true
    start_date?: true
    end_date?: true
    job_detail?: true
    job_responsibility?: true
    job_skills?: true
    salary?: true
    isCurrent?: true
    isInThai?: true
    remark?: true
    edu_level?: true
    continued_study?: true
    edu_faculty?: true
    edu_dep?: true
    edu_university?: true
    year_start?: true
    year_end?: true
    edu_performance?: true
    createdAt?: true
    updatedAt?: true
    alumniId?: true
  }

  export type Work_expreriencesMaxAggregateInputType = {
    id?: true
    isOnTheLine?: true
    job_position?: true
    company_name?: true
    company_place?: true
    start_date?: true
    end_date?: true
    job_detail?: true
    job_responsibility?: true
    job_skills?: true
    salary?: true
    isCurrent?: true
    isInThai?: true
    remark?: true
    edu_level?: true
    continued_study?: true
    edu_faculty?: true
    edu_dep?: true
    edu_university?: true
    year_start?: true
    year_end?: true
    edu_performance?: true
    createdAt?: true
    updatedAt?: true
    alumniId?: true
  }

  export type Work_expreriencesCountAggregateInputType = {
    id?: true
    isOnTheLine?: true
    job_position?: true
    company_name?: true
    company_place?: true
    start_date?: true
    end_date?: true
    job_detail?: true
    job_responsibility?: true
    job_skills?: true
    salary?: true
    isCurrent?: true
    isInThai?: true
    remark?: true
    edu_level?: true
    continued_study?: true
    edu_faculty?: true
    edu_dep?: true
    edu_university?: true
    year_start?: true
    year_end?: true
    edu_performance?: true
    createdAt?: true
    updatedAt?: true
    alumniId?: true
    _all?: true
  }

  export type Work_expreriencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which work_expreriences to aggregate.
     */
    where?: work_expreriencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_expreriences to fetch.
     */
    orderBy?: work_expreriencesOrderByWithRelationInput | work_expreriencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: work_expreriencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_expreriences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_expreriences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned work_expreriences
    **/
    _count?: true | Work_expreriencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Work_expreriencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Work_expreriencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Work_expreriencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Work_expreriencesMaxAggregateInputType
  }

  export type GetWork_expreriencesAggregateType<T extends Work_expreriencesAggregateArgs> = {
        [P in keyof T & keyof AggregateWork_expreriences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWork_expreriences[P]>
      : GetScalarType<T[P], AggregateWork_expreriences[P]>
  }




  export type work_expreriencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: work_expreriencesWhereInput
    orderBy?: work_expreriencesOrderByWithAggregationInput | work_expreriencesOrderByWithAggregationInput[]
    by: Work_expreriencesScalarFieldEnum[] | Work_expreriencesScalarFieldEnum
    having?: work_expreriencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Work_expreriencesCountAggregateInputType | true
    _avg?: Work_expreriencesAvgAggregateInputType
    _sum?: Work_expreriencesSumAggregateInputType
    _min?: Work_expreriencesMinAggregateInputType
    _max?: Work_expreriencesMaxAggregateInputType
  }

  export type Work_expreriencesGroupByOutputType = {
    id: number
    isOnTheLine: boolean | null
    job_position: string | null
    company_name: string | null
    company_place: string
    start_date: string | null
    end_date: string | null
    job_detail: string | null
    job_responsibility: string | null
    job_skills: string | null
    salary: number | null
    isCurrent: boolean
    isInThai: boolean
    remark: string | null
    edu_level: string | null
    continued_study: boolean
    edu_faculty: string | null
    edu_dep: string | null
    edu_university: string | null
    year_start: string | null
    year_end: string | null
    edu_performance: string | null
    createdAt: Date
    updatedAt: Date
    alumniId: string | null
    _count: Work_expreriencesCountAggregateOutputType | null
    _avg: Work_expreriencesAvgAggregateOutputType | null
    _sum: Work_expreriencesSumAggregateOutputType | null
    _min: Work_expreriencesMinAggregateOutputType | null
    _max: Work_expreriencesMaxAggregateOutputType | null
  }

  type GetWork_expreriencesGroupByPayload<T extends work_expreriencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Work_expreriencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Work_expreriencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Work_expreriencesGroupByOutputType[P]>
            : GetScalarType<T[P], Work_expreriencesGroupByOutputType[P]>
        }
      >
    >


  export type work_expreriencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isOnTheLine?: boolean
    job_position?: boolean
    company_name?: boolean
    company_place?: boolean
    start_date?: boolean
    end_date?: boolean
    job_detail?: boolean
    job_responsibility?: boolean
    job_skills?: boolean
    salary?: boolean
    isCurrent?: boolean
    isInThai?: boolean
    remark?: boolean
    edu_level?: boolean
    continued_study?: boolean
    edu_faculty?: boolean
    edu_dep?: boolean
    edu_university?: boolean
    year_start?: boolean
    year_end?: boolean
    edu_performance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alumniId?: boolean
    alumni?: boolean | work_expreriences$alumniArgs<ExtArgs>
  }, ExtArgs["result"]["work_expreriences"]>

  export type work_expreriencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isOnTheLine?: boolean
    job_position?: boolean
    company_name?: boolean
    company_place?: boolean
    start_date?: boolean
    end_date?: boolean
    job_detail?: boolean
    job_responsibility?: boolean
    job_skills?: boolean
    salary?: boolean
    isCurrent?: boolean
    isInThai?: boolean
    remark?: boolean
    edu_level?: boolean
    continued_study?: boolean
    edu_faculty?: boolean
    edu_dep?: boolean
    edu_university?: boolean
    year_start?: boolean
    year_end?: boolean
    edu_performance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alumniId?: boolean
    alumni?: boolean | work_expreriences$alumniArgs<ExtArgs>
  }, ExtArgs["result"]["work_expreriences"]>

  export type work_expreriencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isOnTheLine?: boolean
    job_position?: boolean
    company_name?: boolean
    company_place?: boolean
    start_date?: boolean
    end_date?: boolean
    job_detail?: boolean
    job_responsibility?: boolean
    job_skills?: boolean
    salary?: boolean
    isCurrent?: boolean
    isInThai?: boolean
    remark?: boolean
    edu_level?: boolean
    continued_study?: boolean
    edu_faculty?: boolean
    edu_dep?: boolean
    edu_university?: boolean
    year_start?: boolean
    year_end?: boolean
    edu_performance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alumniId?: boolean
    alumni?: boolean | work_expreriences$alumniArgs<ExtArgs>
  }, ExtArgs["result"]["work_expreriences"]>

  export type work_expreriencesSelectScalar = {
    id?: boolean
    isOnTheLine?: boolean
    job_position?: boolean
    company_name?: boolean
    company_place?: boolean
    start_date?: boolean
    end_date?: boolean
    job_detail?: boolean
    job_responsibility?: boolean
    job_skills?: boolean
    salary?: boolean
    isCurrent?: boolean
    isInThai?: boolean
    remark?: boolean
    edu_level?: boolean
    continued_study?: boolean
    edu_faculty?: boolean
    edu_dep?: boolean
    edu_university?: boolean
    year_start?: boolean
    year_end?: boolean
    edu_performance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alumniId?: boolean
  }

  export type work_expreriencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isOnTheLine" | "job_position" | "company_name" | "company_place" | "start_date" | "end_date" | "job_detail" | "job_responsibility" | "job_skills" | "salary" | "isCurrent" | "isInThai" | "remark" | "edu_level" | "continued_study" | "edu_faculty" | "edu_dep" | "edu_university" | "year_start" | "year_end" | "edu_performance" | "createdAt" | "updatedAt" | "alumniId", ExtArgs["result"]["work_expreriences"]>
  export type work_expreriencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumni?: boolean | work_expreriences$alumniArgs<ExtArgs>
  }
  export type work_expreriencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumni?: boolean | work_expreriences$alumniArgs<ExtArgs>
  }
  export type work_expreriencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumni?: boolean | work_expreriences$alumniArgs<ExtArgs>
  }

  export type $work_expreriencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "work_expreriences"
    objects: {
      alumni: Prisma.$alumniPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isOnTheLine: boolean | null
      job_position: string | null
      company_name: string | null
      company_place: string
      start_date: string | null
      end_date: string | null
      job_detail: string | null
      job_responsibility: string | null
      job_skills: string | null
      salary: number | null
      isCurrent: boolean
      isInThai: boolean
      remark: string | null
      edu_level: string | null
      continued_study: boolean
      edu_faculty: string | null
      edu_dep: string | null
      edu_university: string | null
      year_start: string | null
      year_end: string | null
      edu_performance: string | null
      createdAt: Date
      updatedAt: Date
      alumniId: string | null
    }, ExtArgs["result"]["work_expreriences"]>
    composites: {}
  }

  type work_expreriencesGetPayload<S extends boolean | null | undefined | work_expreriencesDefaultArgs> = $Result.GetResult<Prisma.$work_expreriencesPayload, S>

  type work_expreriencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<work_expreriencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Work_expreriencesCountAggregateInputType | true
    }

  export interface work_expreriencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['work_expreriences'], meta: { name: 'work_expreriences' } }
    /**
     * Find zero or one Work_expreriences that matches the filter.
     * @param {work_expreriencesFindUniqueArgs} args - Arguments to find a Work_expreriences
     * @example
     * // Get one Work_expreriences
     * const work_expreriences = await prisma.work_expreriences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends work_expreriencesFindUniqueArgs>(args: SelectSubset<T, work_expreriencesFindUniqueArgs<ExtArgs>>): Prisma__work_expreriencesClient<$Result.GetResult<Prisma.$work_expreriencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Work_expreriences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {work_expreriencesFindUniqueOrThrowArgs} args - Arguments to find a Work_expreriences
     * @example
     * // Get one Work_expreriences
     * const work_expreriences = await prisma.work_expreriences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends work_expreriencesFindUniqueOrThrowArgs>(args: SelectSubset<T, work_expreriencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__work_expreriencesClient<$Result.GetResult<Prisma.$work_expreriencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work_expreriences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_expreriencesFindFirstArgs} args - Arguments to find a Work_expreriences
     * @example
     * // Get one Work_expreriences
     * const work_expreriences = await prisma.work_expreriences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends work_expreriencesFindFirstArgs>(args?: SelectSubset<T, work_expreriencesFindFirstArgs<ExtArgs>>): Prisma__work_expreriencesClient<$Result.GetResult<Prisma.$work_expreriencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work_expreriences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_expreriencesFindFirstOrThrowArgs} args - Arguments to find a Work_expreriences
     * @example
     * // Get one Work_expreriences
     * const work_expreriences = await prisma.work_expreriences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends work_expreriencesFindFirstOrThrowArgs>(args?: SelectSubset<T, work_expreriencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__work_expreriencesClient<$Result.GetResult<Prisma.$work_expreriencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Work_expreriences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_expreriencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Work_expreriences
     * const work_expreriences = await prisma.work_expreriences.findMany()
     * 
     * // Get first 10 Work_expreriences
     * const work_expreriences = await prisma.work_expreriences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const work_expreriencesWithIdOnly = await prisma.work_expreriences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends work_expreriencesFindManyArgs>(args?: SelectSubset<T, work_expreriencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_expreriencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Work_expreriences.
     * @param {work_expreriencesCreateArgs} args - Arguments to create a Work_expreriences.
     * @example
     * // Create one Work_expreriences
     * const Work_expreriences = await prisma.work_expreriences.create({
     *   data: {
     *     // ... data to create a Work_expreriences
     *   }
     * })
     * 
     */
    create<T extends work_expreriencesCreateArgs>(args: SelectSubset<T, work_expreriencesCreateArgs<ExtArgs>>): Prisma__work_expreriencesClient<$Result.GetResult<Prisma.$work_expreriencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Work_expreriences.
     * @param {work_expreriencesCreateManyArgs} args - Arguments to create many Work_expreriences.
     * @example
     * // Create many Work_expreriences
     * const work_expreriences = await prisma.work_expreriences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends work_expreriencesCreateManyArgs>(args?: SelectSubset<T, work_expreriencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Work_expreriences and returns the data saved in the database.
     * @param {work_expreriencesCreateManyAndReturnArgs} args - Arguments to create many Work_expreriences.
     * @example
     * // Create many Work_expreriences
     * const work_expreriences = await prisma.work_expreriences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Work_expreriences and only return the `id`
     * const work_expreriencesWithIdOnly = await prisma.work_expreriences.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends work_expreriencesCreateManyAndReturnArgs>(args?: SelectSubset<T, work_expreriencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_expreriencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Work_expreriences.
     * @param {work_expreriencesDeleteArgs} args - Arguments to delete one Work_expreriences.
     * @example
     * // Delete one Work_expreriences
     * const Work_expreriences = await prisma.work_expreriences.delete({
     *   where: {
     *     // ... filter to delete one Work_expreriences
     *   }
     * })
     * 
     */
    delete<T extends work_expreriencesDeleteArgs>(args: SelectSubset<T, work_expreriencesDeleteArgs<ExtArgs>>): Prisma__work_expreriencesClient<$Result.GetResult<Prisma.$work_expreriencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Work_expreriences.
     * @param {work_expreriencesUpdateArgs} args - Arguments to update one Work_expreriences.
     * @example
     * // Update one Work_expreriences
     * const work_expreriences = await prisma.work_expreriences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends work_expreriencesUpdateArgs>(args: SelectSubset<T, work_expreriencesUpdateArgs<ExtArgs>>): Prisma__work_expreriencesClient<$Result.GetResult<Prisma.$work_expreriencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Work_expreriences.
     * @param {work_expreriencesDeleteManyArgs} args - Arguments to filter Work_expreriences to delete.
     * @example
     * // Delete a few Work_expreriences
     * const { count } = await prisma.work_expreriences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends work_expreriencesDeleteManyArgs>(args?: SelectSubset<T, work_expreriencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Work_expreriences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_expreriencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Work_expreriences
     * const work_expreriences = await prisma.work_expreriences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends work_expreriencesUpdateManyArgs>(args: SelectSubset<T, work_expreriencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Work_expreriences and returns the data updated in the database.
     * @param {work_expreriencesUpdateManyAndReturnArgs} args - Arguments to update many Work_expreriences.
     * @example
     * // Update many Work_expreriences
     * const work_expreriences = await prisma.work_expreriences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Work_expreriences and only return the `id`
     * const work_expreriencesWithIdOnly = await prisma.work_expreriences.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends work_expreriencesUpdateManyAndReturnArgs>(args: SelectSubset<T, work_expreriencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_expreriencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Work_expreriences.
     * @param {work_expreriencesUpsertArgs} args - Arguments to update or create a Work_expreriences.
     * @example
     * // Update or create a Work_expreriences
     * const work_expreriences = await prisma.work_expreriences.upsert({
     *   create: {
     *     // ... data to create a Work_expreriences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Work_expreriences we want to update
     *   }
     * })
     */
    upsert<T extends work_expreriencesUpsertArgs>(args: SelectSubset<T, work_expreriencesUpsertArgs<ExtArgs>>): Prisma__work_expreriencesClient<$Result.GetResult<Prisma.$work_expreriencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Work_expreriences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_expreriencesCountArgs} args - Arguments to filter Work_expreriences to count.
     * @example
     * // Count the number of Work_expreriences
     * const count = await prisma.work_expreriences.count({
     *   where: {
     *     // ... the filter for the Work_expreriences we want to count
     *   }
     * })
    **/
    count<T extends work_expreriencesCountArgs>(
      args?: Subset<T, work_expreriencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Work_expreriencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Work_expreriences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Work_expreriencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Work_expreriencesAggregateArgs>(args: Subset<T, Work_expreriencesAggregateArgs>): Prisma.PrismaPromise<GetWork_expreriencesAggregateType<T>>

    /**
     * Group by Work_expreriences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_expreriencesGroupByArgs} args - Group by arguments.
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
      T extends work_expreriencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: work_expreriencesGroupByArgs['orderBy'] }
        : { orderBy?: work_expreriencesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, work_expreriencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWork_expreriencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the work_expreriences model
   */
  readonly fields: work_expreriencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for work_expreriences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__work_expreriencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alumni<T extends work_expreriences$alumniArgs<ExtArgs> = {}>(args?: Subset<T, work_expreriences$alumniArgs<ExtArgs>>): Prisma__alumniClient<$Result.GetResult<Prisma.$alumniPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the work_expreriences model
   */
  interface work_expreriencesFieldRefs {
    readonly id: FieldRef<"work_expreriences", 'Int'>
    readonly isOnTheLine: FieldRef<"work_expreriences", 'Boolean'>
    readonly job_position: FieldRef<"work_expreriences", 'String'>
    readonly company_name: FieldRef<"work_expreriences", 'String'>
    readonly company_place: FieldRef<"work_expreriences", 'String'>
    readonly start_date: FieldRef<"work_expreriences", 'String'>
    readonly end_date: FieldRef<"work_expreriences", 'String'>
    readonly job_detail: FieldRef<"work_expreriences", 'String'>
    readonly job_responsibility: FieldRef<"work_expreriences", 'String'>
    readonly job_skills: FieldRef<"work_expreriences", 'String'>
    readonly salary: FieldRef<"work_expreriences", 'Float'>
    readonly isCurrent: FieldRef<"work_expreriences", 'Boolean'>
    readonly isInThai: FieldRef<"work_expreriences", 'Boolean'>
    readonly remark: FieldRef<"work_expreriences", 'String'>
    readonly edu_level: FieldRef<"work_expreriences", 'String'>
    readonly continued_study: FieldRef<"work_expreriences", 'Boolean'>
    readonly edu_faculty: FieldRef<"work_expreriences", 'String'>
    readonly edu_dep: FieldRef<"work_expreriences", 'String'>
    readonly edu_university: FieldRef<"work_expreriences", 'String'>
    readonly year_start: FieldRef<"work_expreriences", 'String'>
    readonly year_end: FieldRef<"work_expreriences", 'String'>
    readonly edu_performance: FieldRef<"work_expreriences", 'String'>
    readonly createdAt: FieldRef<"work_expreriences", 'DateTime'>
    readonly updatedAt: FieldRef<"work_expreriences", 'DateTime'>
    readonly alumniId: FieldRef<"work_expreriences", 'String'>
  }
    

  // Custom InputTypes
  /**
   * work_expreriences findUnique
   */
  export type work_expreriencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_expreriences
     */
    select?: work_expreriencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_expreriences
     */
    omit?: work_expreriencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_expreriencesInclude<ExtArgs> | null
    /**
     * Filter, which work_expreriences to fetch.
     */
    where: work_expreriencesWhereUniqueInput
  }

  /**
   * work_expreriences findUniqueOrThrow
   */
  export type work_expreriencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_expreriences
     */
    select?: work_expreriencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_expreriences
     */
    omit?: work_expreriencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_expreriencesInclude<ExtArgs> | null
    /**
     * Filter, which work_expreriences to fetch.
     */
    where: work_expreriencesWhereUniqueInput
  }

  /**
   * work_expreriences findFirst
   */
  export type work_expreriencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_expreriences
     */
    select?: work_expreriencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_expreriences
     */
    omit?: work_expreriencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_expreriencesInclude<ExtArgs> | null
    /**
     * Filter, which work_expreriences to fetch.
     */
    where?: work_expreriencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_expreriences to fetch.
     */
    orderBy?: work_expreriencesOrderByWithRelationInput | work_expreriencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for work_expreriences.
     */
    cursor?: work_expreriencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_expreriences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_expreriences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of work_expreriences.
     */
    distinct?: Work_expreriencesScalarFieldEnum | Work_expreriencesScalarFieldEnum[]
  }

  /**
   * work_expreriences findFirstOrThrow
   */
  export type work_expreriencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_expreriences
     */
    select?: work_expreriencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_expreriences
     */
    omit?: work_expreriencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_expreriencesInclude<ExtArgs> | null
    /**
     * Filter, which work_expreriences to fetch.
     */
    where?: work_expreriencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_expreriences to fetch.
     */
    orderBy?: work_expreriencesOrderByWithRelationInput | work_expreriencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for work_expreriences.
     */
    cursor?: work_expreriencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_expreriences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_expreriences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of work_expreriences.
     */
    distinct?: Work_expreriencesScalarFieldEnum | Work_expreriencesScalarFieldEnum[]
  }

  /**
   * work_expreriences findMany
   */
  export type work_expreriencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_expreriences
     */
    select?: work_expreriencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_expreriences
     */
    omit?: work_expreriencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_expreriencesInclude<ExtArgs> | null
    /**
     * Filter, which work_expreriences to fetch.
     */
    where?: work_expreriencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_expreriences to fetch.
     */
    orderBy?: work_expreriencesOrderByWithRelationInput | work_expreriencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing work_expreriences.
     */
    cursor?: work_expreriencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_expreriences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_expreriences.
     */
    skip?: number
    distinct?: Work_expreriencesScalarFieldEnum | Work_expreriencesScalarFieldEnum[]
  }

  /**
   * work_expreriences create
   */
  export type work_expreriencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_expreriences
     */
    select?: work_expreriencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_expreriences
     */
    omit?: work_expreriencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_expreriencesInclude<ExtArgs> | null
    /**
     * The data needed to create a work_expreriences.
     */
    data: XOR<work_expreriencesCreateInput, work_expreriencesUncheckedCreateInput>
  }

  /**
   * work_expreriences createMany
   */
  export type work_expreriencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many work_expreriences.
     */
    data: work_expreriencesCreateManyInput | work_expreriencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * work_expreriences createManyAndReturn
   */
  export type work_expreriencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_expreriences
     */
    select?: work_expreriencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the work_expreriences
     */
    omit?: work_expreriencesOmit<ExtArgs> | null
    /**
     * The data used to create many work_expreriences.
     */
    data: work_expreriencesCreateManyInput | work_expreriencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_expreriencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * work_expreriences update
   */
  export type work_expreriencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_expreriences
     */
    select?: work_expreriencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_expreriences
     */
    omit?: work_expreriencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_expreriencesInclude<ExtArgs> | null
    /**
     * The data needed to update a work_expreriences.
     */
    data: XOR<work_expreriencesUpdateInput, work_expreriencesUncheckedUpdateInput>
    /**
     * Choose, which work_expreriences to update.
     */
    where: work_expreriencesWhereUniqueInput
  }

  /**
   * work_expreriences updateMany
   */
  export type work_expreriencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update work_expreriences.
     */
    data: XOR<work_expreriencesUpdateManyMutationInput, work_expreriencesUncheckedUpdateManyInput>
    /**
     * Filter which work_expreriences to update
     */
    where?: work_expreriencesWhereInput
    /**
     * Limit how many work_expreriences to update.
     */
    limit?: number
  }

  /**
   * work_expreriences updateManyAndReturn
   */
  export type work_expreriencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_expreriences
     */
    select?: work_expreriencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the work_expreriences
     */
    omit?: work_expreriencesOmit<ExtArgs> | null
    /**
     * The data used to update work_expreriences.
     */
    data: XOR<work_expreriencesUpdateManyMutationInput, work_expreriencesUncheckedUpdateManyInput>
    /**
     * Filter which work_expreriences to update
     */
    where?: work_expreriencesWhereInput
    /**
     * Limit how many work_expreriences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_expreriencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * work_expreriences upsert
   */
  export type work_expreriencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_expreriences
     */
    select?: work_expreriencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_expreriences
     */
    omit?: work_expreriencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_expreriencesInclude<ExtArgs> | null
    /**
     * The filter to search for the work_expreriences to update in case it exists.
     */
    where: work_expreriencesWhereUniqueInput
    /**
     * In case the work_expreriences found by the `where` argument doesn't exist, create a new work_expreriences with this data.
     */
    create: XOR<work_expreriencesCreateInput, work_expreriencesUncheckedCreateInput>
    /**
     * In case the work_expreriences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<work_expreriencesUpdateInput, work_expreriencesUncheckedUpdateInput>
  }

  /**
   * work_expreriences delete
   */
  export type work_expreriencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_expreriences
     */
    select?: work_expreriencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_expreriences
     */
    omit?: work_expreriencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_expreriencesInclude<ExtArgs> | null
    /**
     * Filter which work_expreriences to delete.
     */
    where: work_expreriencesWhereUniqueInput
  }

  /**
   * work_expreriences deleteMany
   */
  export type work_expreriencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which work_expreriences to delete
     */
    where?: work_expreriencesWhereInput
    /**
     * Limit how many work_expreriences to delete.
     */
    limit?: number
  }

  /**
   * work_expreriences.alumni
   */
  export type work_expreriences$alumniArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni
     */
    select?: alumniSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni
     */
    omit?: alumniOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumniInclude<ExtArgs> | null
    where?: alumniWhereInput
  }

  /**
   * work_expreriences without action
   */
  export type work_expreriencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_expreriences
     */
    select?: work_expreriencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_expreriences
     */
    omit?: work_expreriencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_expreriencesInclude<ExtArgs> | null
  }


  /**
   * Model user_privacy
   */

  export type AggregateUser_privacy = {
    _count: User_privacyCountAggregateOutputType | null
    _avg: User_privacyAvgAggregateOutputType | null
    _sum: User_privacySumAggregateOutputType | null
    _min: User_privacyMinAggregateOutputType | null
    _max: User_privacyMaxAggregateOutputType | null
  }

  export type User_privacyAvgAggregateOutputType = {
    id: number | null
  }

  export type User_privacySumAggregateOutputType = {
    id: number | null
  }

  export type User_privacyMinAggregateOutputType = {
    id: number | null
    seeEmail: boolean | null
    seePhone: boolean | null
    seeFacebook: boolean | null
    seeAddress: boolean | null
    seeWorkExprerience: boolean | null
    seeProfile: boolean | null
    seeSalary: boolean | null
    allowedAlumniSendEmail: boolean | null
    allowedProfessorSendEmail: boolean | null
    alumniId: string | null
    professorId: string | null
    createtAt: Date | null
    updatedAt: Date | null
  }

  export type User_privacyMaxAggregateOutputType = {
    id: number | null
    seeEmail: boolean | null
    seePhone: boolean | null
    seeFacebook: boolean | null
    seeAddress: boolean | null
    seeWorkExprerience: boolean | null
    seeProfile: boolean | null
    seeSalary: boolean | null
    allowedAlumniSendEmail: boolean | null
    allowedProfessorSendEmail: boolean | null
    alumniId: string | null
    professorId: string | null
    createtAt: Date | null
    updatedAt: Date | null
  }

  export type User_privacyCountAggregateOutputType = {
    id: number
    seeEmail: number
    seePhone: number
    seeFacebook: number
    seeAddress: number
    seeWorkExprerience: number
    seeProfile: number
    seeSalary: number
    allowedAlumniSendEmail: number
    allowedProfessorSendEmail: number
    alumniId: number
    professorId: number
    createtAt: number
    updatedAt: number
    _all: number
  }


  export type User_privacyAvgAggregateInputType = {
    id?: true
  }

  export type User_privacySumAggregateInputType = {
    id?: true
  }

  export type User_privacyMinAggregateInputType = {
    id?: true
    seeEmail?: true
    seePhone?: true
    seeFacebook?: true
    seeAddress?: true
    seeWorkExprerience?: true
    seeProfile?: true
    seeSalary?: true
    allowedAlumniSendEmail?: true
    allowedProfessorSendEmail?: true
    alumniId?: true
    professorId?: true
    createtAt?: true
    updatedAt?: true
  }

  export type User_privacyMaxAggregateInputType = {
    id?: true
    seeEmail?: true
    seePhone?: true
    seeFacebook?: true
    seeAddress?: true
    seeWorkExprerience?: true
    seeProfile?: true
    seeSalary?: true
    allowedAlumniSendEmail?: true
    allowedProfessorSendEmail?: true
    alumniId?: true
    professorId?: true
    createtAt?: true
    updatedAt?: true
  }

  export type User_privacyCountAggregateInputType = {
    id?: true
    seeEmail?: true
    seePhone?: true
    seeFacebook?: true
    seeAddress?: true
    seeWorkExprerience?: true
    seeProfile?: true
    seeSalary?: true
    allowedAlumniSendEmail?: true
    allowedProfessorSendEmail?: true
    alumniId?: true
    professorId?: true
    createtAt?: true
    updatedAt?: true
    _all?: true
  }

  export type User_privacyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_privacy to aggregate.
     */
    where?: user_privacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_privacies to fetch.
     */
    orderBy?: user_privacyOrderByWithRelationInput | user_privacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_privacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_privacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_privacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_privacies
    **/
    _count?: true | User_privacyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_privacyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_privacySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_privacyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_privacyMaxAggregateInputType
  }

  export type GetUser_privacyAggregateType<T extends User_privacyAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_privacy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_privacy[P]>
      : GetScalarType<T[P], AggregateUser_privacy[P]>
  }




  export type user_privacyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_privacyWhereInput
    orderBy?: user_privacyOrderByWithAggregationInput | user_privacyOrderByWithAggregationInput[]
    by: User_privacyScalarFieldEnum[] | User_privacyScalarFieldEnum
    having?: user_privacyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_privacyCountAggregateInputType | true
    _avg?: User_privacyAvgAggregateInputType
    _sum?: User_privacySumAggregateInputType
    _min?: User_privacyMinAggregateInputType
    _max?: User_privacyMaxAggregateInputType
  }

  export type User_privacyGroupByOutputType = {
    id: number
    seeEmail: boolean
    seePhone: boolean
    seeFacebook: boolean
    seeAddress: boolean
    seeWorkExprerience: boolean | null
    seeProfile: boolean
    seeSalary: boolean
    allowedAlumniSendEmail: boolean
    allowedProfessorSendEmail: boolean | null
    alumniId: string | null
    professorId: string | null
    createtAt: Date
    updatedAt: Date
    _count: User_privacyCountAggregateOutputType | null
    _avg: User_privacyAvgAggregateOutputType | null
    _sum: User_privacySumAggregateOutputType | null
    _min: User_privacyMinAggregateOutputType | null
    _max: User_privacyMaxAggregateOutputType | null
  }

  type GetUser_privacyGroupByPayload<T extends user_privacyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_privacyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_privacyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_privacyGroupByOutputType[P]>
            : GetScalarType<T[P], User_privacyGroupByOutputType[P]>
        }
      >
    >


  export type user_privacySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seeEmail?: boolean
    seePhone?: boolean
    seeFacebook?: boolean
    seeAddress?: boolean
    seeWorkExprerience?: boolean
    seeProfile?: boolean
    seeSalary?: boolean
    allowedAlumniSendEmail?: boolean
    allowedProfessorSendEmail?: boolean
    alumniId?: boolean
    professorId?: boolean
    createtAt?: boolean
    updatedAt?: boolean
    alumni?: boolean | user_privacy$alumniArgs<ExtArgs>
    professor?: boolean | user_privacy$professorArgs<ExtArgs>
  }, ExtArgs["result"]["user_privacy"]>

  export type user_privacySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seeEmail?: boolean
    seePhone?: boolean
    seeFacebook?: boolean
    seeAddress?: boolean
    seeWorkExprerience?: boolean
    seeProfile?: boolean
    seeSalary?: boolean
    allowedAlumniSendEmail?: boolean
    allowedProfessorSendEmail?: boolean
    alumniId?: boolean
    professorId?: boolean
    createtAt?: boolean
    updatedAt?: boolean
    alumni?: boolean | user_privacy$alumniArgs<ExtArgs>
    professor?: boolean | user_privacy$professorArgs<ExtArgs>
  }, ExtArgs["result"]["user_privacy"]>

  export type user_privacySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seeEmail?: boolean
    seePhone?: boolean
    seeFacebook?: boolean
    seeAddress?: boolean
    seeWorkExprerience?: boolean
    seeProfile?: boolean
    seeSalary?: boolean
    allowedAlumniSendEmail?: boolean
    allowedProfessorSendEmail?: boolean
    alumniId?: boolean
    professorId?: boolean
    createtAt?: boolean
    updatedAt?: boolean
    alumni?: boolean | user_privacy$alumniArgs<ExtArgs>
    professor?: boolean | user_privacy$professorArgs<ExtArgs>
  }, ExtArgs["result"]["user_privacy"]>

  export type user_privacySelectScalar = {
    id?: boolean
    seeEmail?: boolean
    seePhone?: boolean
    seeFacebook?: boolean
    seeAddress?: boolean
    seeWorkExprerience?: boolean
    seeProfile?: boolean
    seeSalary?: boolean
    allowedAlumniSendEmail?: boolean
    allowedProfessorSendEmail?: boolean
    alumniId?: boolean
    professorId?: boolean
    createtAt?: boolean
    updatedAt?: boolean
  }

  export type user_privacyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seeEmail" | "seePhone" | "seeFacebook" | "seeAddress" | "seeWorkExprerience" | "seeProfile" | "seeSalary" | "allowedAlumniSendEmail" | "allowedProfessorSendEmail" | "alumniId" | "professorId" | "createtAt" | "updatedAt", ExtArgs["result"]["user_privacy"]>
  export type user_privacyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumni?: boolean | user_privacy$alumniArgs<ExtArgs>
    professor?: boolean | user_privacy$professorArgs<ExtArgs>
  }
  export type user_privacyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumni?: boolean | user_privacy$alumniArgs<ExtArgs>
    professor?: boolean | user_privacy$professorArgs<ExtArgs>
  }
  export type user_privacyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alumni?: boolean | user_privacy$alumniArgs<ExtArgs>
    professor?: boolean | user_privacy$professorArgs<ExtArgs>
  }

  export type $user_privacyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_privacy"
    objects: {
      alumni: Prisma.$alumniPayload<ExtArgs> | null
      professor: Prisma.$professorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seeEmail: boolean
      seePhone: boolean
      seeFacebook: boolean
      seeAddress: boolean
      seeWorkExprerience: boolean | null
      seeProfile: boolean
      seeSalary: boolean
      allowedAlumniSendEmail: boolean
      allowedProfessorSendEmail: boolean | null
      alumniId: string | null
      professorId: string | null
      createtAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user_privacy"]>
    composites: {}
  }

  type user_privacyGetPayload<S extends boolean | null | undefined | user_privacyDefaultArgs> = $Result.GetResult<Prisma.$user_privacyPayload, S>

  type user_privacyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_privacyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_privacyCountAggregateInputType | true
    }

  export interface user_privacyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_privacy'], meta: { name: 'user_privacy' } }
    /**
     * Find zero or one User_privacy that matches the filter.
     * @param {user_privacyFindUniqueArgs} args - Arguments to find a User_privacy
     * @example
     * // Get one User_privacy
     * const user_privacy = await prisma.user_privacy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_privacyFindUniqueArgs>(args: SelectSubset<T, user_privacyFindUniqueArgs<ExtArgs>>): Prisma__user_privacyClient<$Result.GetResult<Prisma.$user_privacyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_privacy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_privacyFindUniqueOrThrowArgs} args - Arguments to find a User_privacy
     * @example
     * // Get one User_privacy
     * const user_privacy = await prisma.user_privacy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_privacyFindUniqueOrThrowArgs>(args: SelectSubset<T, user_privacyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_privacyClient<$Result.GetResult<Prisma.$user_privacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_privacy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_privacyFindFirstArgs} args - Arguments to find a User_privacy
     * @example
     * // Get one User_privacy
     * const user_privacy = await prisma.user_privacy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_privacyFindFirstArgs>(args?: SelectSubset<T, user_privacyFindFirstArgs<ExtArgs>>): Prisma__user_privacyClient<$Result.GetResult<Prisma.$user_privacyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_privacy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_privacyFindFirstOrThrowArgs} args - Arguments to find a User_privacy
     * @example
     * // Get one User_privacy
     * const user_privacy = await prisma.user_privacy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_privacyFindFirstOrThrowArgs>(args?: SelectSubset<T, user_privacyFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_privacyClient<$Result.GetResult<Prisma.$user_privacyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_privacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_privacyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_privacies
     * const user_privacies = await prisma.user_privacy.findMany()
     * 
     * // Get first 10 User_privacies
     * const user_privacies = await prisma.user_privacy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_privacyWithIdOnly = await prisma.user_privacy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_privacyFindManyArgs>(args?: SelectSubset<T, user_privacyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_privacyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_privacy.
     * @param {user_privacyCreateArgs} args - Arguments to create a User_privacy.
     * @example
     * // Create one User_privacy
     * const User_privacy = await prisma.user_privacy.create({
     *   data: {
     *     // ... data to create a User_privacy
     *   }
     * })
     * 
     */
    create<T extends user_privacyCreateArgs>(args: SelectSubset<T, user_privacyCreateArgs<ExtArgs>>): Prisma__user_privacyClient<$Result.GetResult<Prisma.$user_privacyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_privacies.
     * @param {user_privacyCreateManyArgs} args - Arguments to create many User_privacies.
     * @example
     * // Create many User_privacies
     * const user_privacy = await prisma.user_privacy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_privacyCreateManyArgs>(args?: SelectSubset<T, user_privacyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_privacies and returns the data saved in the database.
     * @param {user_privacyCreateManyAndReturnArgs} args - Arguments to create many User_privacies.
     * @example
     * // Create many User_privacies
     * const user_privacy = await prisma.user_privacy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_privacies and only return the `id`
     * const user_privacyWithIdOnly = await prisma.user_privacy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_privacyCreateManyAndReturnArgs>(args?: SelectSubset<T, user_privacyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_privacyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_privacy.
     * @param {user_privacyDeleteArgs} args - Arguments to delete one User_privacy.
     * @example
     * // Delete one User_privacy
     * const User_privacy = await prisma.user_privacy.delete({
     *   where: {
     *     // ... filter to delete one User_privacy
     *   }
     * })
     * 
     */
    delete<T extends user_privacyDeleteArgs>(args: SelectSubset<T, user_privacyDeleteArgs<ExtArgs>>): Prisma__user_privacyClient<$Result.GetResult<Prisma.$user_privacyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_privacy.
     * @param {user_privacyUpdateArgs} args - Arguments to update one User_privacy.
     * @example
     * // Update one User_privacy
     * const user_privacy = await prisma.user_privacy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_privacyUpdateArgs>(args: SelectSubset<T, user_privacyUpdateArgs<ExtArgs>>): Prisma__user_privacyClient<$Result.GetResult<Prisma.$user_privacyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_privacies.
     * @param {user_privacyDeleteManyArgs} args - Arguments to filter User_privacies to delete.
     * @example
     * // Delete a few User_privacies
     * const { count } = await prisma.user_privacy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_privacyDeleteManyArgs>(args?: SelectSubset<T, user_privacyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_privacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_privacyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_privacies
     * const user_privacy = await prisma.user_privacy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_privacyUpdateManyArgs>(args: SelectSubset<T, user_privacyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_privacies and returns the data updated in the database.
     * @param {user_privacyUpdateManyAndReturnArgs} args - Arguments to update many User_privacies.
     * @example
     * // Update many User_privacies
     * const user_privacy = await prisma.user_privacy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_privacies and only return the `id`
     * const user_privacyWithIdOnly = await prisma.user_privacy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_privacyUpdateManyAndReturnArgs>(args: SelectSubset<T, user_privacyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_privacyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_privacy.
     * @param {user_privacyUpsertArgs} args - Arguments to update or create a User_privacy.
     * @example
     * // Update or create a User_privacy
     * const user_privacy = await prisma.user_privacy.upsert({
     *   create: {
     *     // ... data to create a User_privacy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_privacy we want to update
     *   }
     * })
     */
    upsert<T extends user_privacyUpsertArgs>(args: SelectSubset<T, user_privacyUpsertArgs<ExtArgs>>): Prisma__user_privacyClient<$Result.GetResult<Prisma.$user_privacyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_privacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_privacyCountArgs} args - Arguments to filter User_privacies to count.
     * @example
     * // Count the number of User_privacies
     * const count = await prisma.user_privacy.count({
     *   where: {
     *     // ... the filter for the User_privacies we want to count
     *   }
     * })
    **/
    count<T extends user_privacyCountArgs>(
      args?: Subset<T, user_privacyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_privacyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_privacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_privacyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_privacyAggregateArgs>(args: Subset<T, User_privacyAggregateArgs>): Prisma.PrismaPromise<GetUser_privacyAggregateType<T>>

    /**
     * Group by User_privacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_privacyGroupByArgs} args - Group by arguments.
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
      T extends user_privacyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_privacyGroupByArgs['orderBy'] }
        : { orderBy?: user_privacyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_privacyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_privacyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_privacy model
   */
  readonly fields: user_privacyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_privacy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_privacyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alumni<T extends user_privacy$alumniArgs<ExtArgs> = {}>(args?: Subset<T, user_privacy$alumniArgs<ExtArgs>>): Prisma__alumniClient<$Result.GetResult<Prisma.$alumniPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    professor<T extends user_privacy$professorArgs<ExtArgs> = {}>(args?: Subset<T, user_privacy$professorArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_privacy model
   */
  interface user_privacyFieldRefs {
    readonly id: FieldRef<"user_privacy", 'Int'>
    readonly seeEmail: FieldRef<"user_privacy", 'Boolean'>
    readonly seePhone: FieldRef<"user_privacy", 'Boolean'>
    readonly seeFacebook: FieldRef<"user_privacy", 'Boolean'>
    readonly seeAddress: FieldRef<"user_privacy", 'Boolean'>
    readonly seeWorkExprerience: FieldRef<"user_privacy", 'Boolean'>
    readonly seeProfile: FieldRef<"user_privacy", 'Boolean'>
    readonly seeSalary: FieldRef<"user_privacy", 'Boolean'>
    readonly allowedAlumniSendEmail: FieldRef<"user_privacy", 'Boolean'>
    readonly allowedProfessorSendEmail: FieldRef<"user_privacy", 'Boolean'>
    readonly alumniId: FieldRef<"user_privacy", 'String'>
    readonly professorId: FieldRef<"user_privacy", 'String'>
    readonly createtAt: FieldRef<"user_privacy", 'DateTime'>
    readonly updatedAt: FieldRef<"user_privacy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_privacy findUnique
   */
  export type user_privacyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_privacy
     */
    select?: user_privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_privacy
     */
    omit?: user_privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_privacyInclude<ExtArgs> | null
    /**
     * Filter, which user_privacy to fetch.
     */
    where: user_privacyWhereUniqueInput
  }

  /**
   * user_privacy findUniqueOrThrow
   */
  export type user_privacyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_privacy
     */
    select?: user_privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_privacy
     */
    omit?: user_privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_privacyInclude<ExtArgs> | null
    /**
     * Filter, which user_privacy to fetch.
     */
    where: user_privacyWhereUniqueInput
  }

  /**
   * user_privacy findFirst
   */
  export type user_privacyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_privacy
     */
    select?: user_privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_privacy
     */
    omit?: user_privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_privacyInclude<ExtArgs> | null
    /**
     * Filter, which user_privacy to fetch.
     */
    where?: user_privacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_privacies to fetch.
     */
    orderBy?: user_privacyOrderByWithRelationInput | user_privacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_privacies.
     */
    cursor?: user_privacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_privacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_privacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_privacies.
     */
    distinct?: User_privacyScalarFieldEnum | User_privacyScalarFieldEnum[]
  }

  /**
   * user_privacy findFirstOrThrow
   */
  export type user_privacyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_privacy
     */
    select?: user_privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_privacy
     */
    omit?: user_privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_privacyInclude<ExtArgs> | null
    /**
     * Filter, which user_privacy to fetch.
     */
    where?: user_privacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_privacies to fetch.
     */
    orderBy?: user_privacyOrderByWithRelationInput | user_privacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_privacies.
     */
    cursor?: user_privacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_privacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_privacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_privacies.
     */
    distinct?: User_privacyScalarFieldEnum | User_privacyScalarFieldEnum[]
  }

  /**
   * user_privacy findMany
   */
  export type user_privacyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_privacy
     */
    select?: user_privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_privacy
     */
    omit?: user_privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_privacyInclude<ExtArgs> | null
    /**
     * Filter, which user_privacies to fetch.
     */
    where?: user_privacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_privacies to fetch.
     */
    orderBy?: user_privacyOrderByWithRelationInput | user_privacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_privacies.
     */
    cursor?: user_privacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_privacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_privacies.
     */
    skip?: number
    distinct?: User_privacyScalarFieldEnum | User_privacyScalarFieldEnum[]
  }

  /**
   * user_privacy create
   */
  export type user_privacyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_privacy
     */
    select?: user_privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_privacy
     */
    omit?: user_privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_privacyInclude<ExtArgs> | null
    /**
     * The data needed to create a user_privacy.
     */
    data?: XOR<user_privacyCreateInput, user_privacyUncheckedCreateInput>
  }

  /**
   * user_privacy createMany
   */
  export type user_privacyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_privacies.
     */
    data: user_privacyCreateManyInput | user_privacyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_privacy createManyAndReturn
   */
  export type user_privacyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_privacy
     */
    select?: user_privacySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_privacy
     */
    omit?: user_privacyOmit<ExtArgs> | null
    /**
     * The data used to create many user_privacies.
     */
    data: user_privacyCreateManyInput | user_privacyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_privacyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_privacy update
   */
  export type user_privacyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_privacy
     */
    select?: user_privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_privacy
     */
    omit?: user_privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_privacyInclude<ExtArgs> | null
    /**
     * The data needed to update a user_privacy.
     */
    data: XOR<user_privacyUpdateInput, user_privacyUncheckedUpdateInput>
    /**
     * Choose, which user_privacy to update.
     */
    where: user_privacyWhereUniqueInput
  }

  /**
   * user_privacy updateMany
   */
  export type user_privacyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_privacies.
     */
    data: XOR<user_privacyUpdateManyMutationInput, user_privacyUncheckedUpdateManyInput>
    /**
     * Filter which user_privacies to update
     */
    where?: user_privacyWhereInput
    /**
     * Limit how many user_privacies to update.
     */
    limit?: number
  }

  /**
   * user_privacy updateManyAndReturn
   */
  export type user_privacyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_privacy
     */
    select?: user_privacySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_privacy
     */
    omit?: user_privacyOmit<ExtArgs> | null
    /**
     * The data used to update user_privacies.
     */
    data: XOR<user_privacyUpdateManyMutationInput, user_privacyUncheckedUpdateManyInput>
    /**
     * Filter which user_privacies to update
     */
    where?: user_privacyWhereInput
    /**
     * Limit how many user_privacies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_privacyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_privacy upsert
   */
  export type user_privacyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_privacy
     */
    select?: user_privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_privacy
     */
    omit?: user_privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_privacyInclude<ExtArgs> | null
    /**
     * The filter to search for the user_privacy to update in case it exists.
     */
    where: user_privacyWhereUniqueInput
    /**
     * In case the user_privacy found by the `where` argument doesn't exist, create a new user_privacy with this data.
     */
    create: XOR<user_privacyCreateInput, user_privacyUncheckedCreateInput>
    /**
     * In case the user_privacy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_privacyUpdateInput, user_privacyUncheckedUpdateInput>
  }

  /**
   * user_privacy delete
   */
  export type user_privacyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_privacy
     */
    select?: user_privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_privacy
     */
    omit?: user_privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_privacyInclude<ExtArgs> | null
    /**
     * Filter which user_privacy to delete.
     */
    where: user_privacyWhereUniqueInput
  }

  /**
   * user_privacy deleteMany
   */
  export type user_privacyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_privacies to delete
     */
    where?: user_privacyWhereInput
    /**
     * Limit how many user_privacies to delete.
     */
    limit?: number
  }

  /**
   * user_privacy.alumni
   */
  export type user_privacy$alumniArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni
     */
    select?: alumniSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni
     */
    omit?: alumniOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumniInclude<ExtArgs> | null
    where?: alumniWhereInput
  }

  /**
   * user_privacy.professor
   */
  export type user_privacy$professorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    where?: professorWhereInput
  }

  /**
   * user_privacy without action
   */
  export type user_privacyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_privacy
     */
    select?: user_privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_privacy
     */
    omit?: user_privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_privacyInclude<ExtArgs> | null
  }


  /**
   * Model professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorAvgAggregateOutputType = {
    facultyId: number | null
    departmentId: number | null
  }

  export type ProfessorSumAggregateOutputType = {
    facultyId: number | null
    departmentId: number | null
  }

  export type ProfessorMinAggregateOutputType = {
    professor_id: string | null
    prefix: string | null
    fname: string | null
    lname: string | null
    profile: string | null
    passwordHash: string | null
    academic_rank: string | null
    canUse: boolean | null
    univercity_position: string | null
    allowedAccount: boolean | null
    email: string | null
    facultyId: number | null
    departmentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessorMaxAggregateOutputType = {
    professor_id: string | null
    prefix: string | null
    fname: string | null
    lname: string | null
    profile: string | null
    passwordHash: string | null
    academic_rank: string | null
    canUse: boolean | null
    univercity_position: string | null
    allowedAccount: boolean | null
    email: string | null
    facultyId: number | null
    departmentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessorCountAggregateOutputType = {
    professor_id: number
    prefix: number
    fname: number
    lname: number
    profile: number
    passwordHash: number
    academic_rank: number
    canUse: number
    univercity_position: number
    allowedAccount: number
    email: number
    facultyId: number
    departmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfessorAvgAggregateInputType = {
    facultyId?: true
    departmentId?: true
  }

  export type ProfessorSumAggregateInputType = {
    facultyId?: true
    departmentId?: true
  }

  export type ProfessorMinAggregateInputType = {
    professor_id?: true
    prefix?: true
    fname?: true
    lname?: true
    profile?: true
    passwordHash?: true
    academic_rank?: true
    canUse?: true
    univercity_position?: true
    allowedAccount?: true
    email?: true
    facultyId?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessorMaxAggregateInputType = {
    professor_id?: true
    prefix?: true
    fname?: true
    lname?: true
    profile?: true
    passwordHash?: true
    academic_rank?: true
    canUse?: true
    univercity_position?: true
    allowedAccount?: true
    email?: true
    facultyId?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessorCountAggregateInputType = {
    professor_id?: true
    prefix?: true
    fname?: true
    lname?: true
    profile?: true
    passwordHash?: true
    academic_rank?: true
    canUse?: true
    univercity_position?: true
    allowedAccount?: true
    email?: true
    facultyId?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professor to aggregate.
     */
    where?: professorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professors to fetch.
     */
    orderBy?: professorOrderByWithRelationInput | professorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: professorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type professorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professorWhereInput
    orderBy?: professorOrderByWithAggregationInput | professorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: professorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _avg?: ProfessorAvgAggregateInputType
    _sum?: ProfessorSumAggregateInputType
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    professor_id: string
    prefix: string
    fname: string
    lname: string
    profile: string | null
    passwordHash: string | null
    academic_rank: string | null
    canUse: boolean
    univercity_position: string | null
    allowedAccount: boolean
    email: string | null
    facultyId: number | null
    departmentId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends professorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type professorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professor_id?: boolean
    prefix?: boolean
    fname?: boolean
    lname?: boolean
    profile?: boolean
    passwordHash?: boolean
    academic_rank?: boolean
    canUse?: boolean
    univercity_position?: boolean
    allowedAccount?: boolean
    email?: boolean
    facultyId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user_privacy?: boolean | professor$user_privacyArgs<ExtArgs>
    alumni_contract?: boolean | professor$alumni_contractArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type professorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professor_id?: boolean
    prefix?: boolean
    fname?: boolean
    lname?: boolean
    profile?: boolean
    passwordHash?: boolean
    academic_rank?: boolean
    canUse?: boolean
    univercity_position?: boolean
    allowedAccount?: boolean
    email?: boolean
    facultyId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["professor"]>

  export type professorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professor_id?: boolean
    prefix?: boolean
    fname?: boolean
    lname?: boolean
    profile?: boolean
    passwordHash?: boolean
    academic_rank?: boolean
    canUse?: boolean
    univercity_position?: boolean
    allowedAccount?: boolean
    email?: boolean
    facultyId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["professor"]>

  export type professorSelectScalar = {
    professor_id?: boolean
    prefix?: boolean
    fname?: boolean
    lname?: boolean
    profile?: boolean
    passwordHash?: boolean
    academic_rank?: boolean
    canUse?: boolean
    univercity_position?: boolean
    allowedAccount?: boolean
    email?: boolean
    facultyId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type professorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"professor_id" | "prefix" | "fname" | "lname" | "profile" | "passwordHash" | "academic_rank" | "canUse" | "univercity_position" | "allowedAccount" | "email" | "facultyId" | "departmentId" | "createdAt" | "updatedAt", ExtArgs["result"]["professor"]>
  export type professorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_privacy?: boolean | professor$user_privacyArgs<ExtArgs>
    alumni_contract?: boolean | professor$alumni_contractArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type professorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type professorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $professorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "professor"
    objects: {
      user_privacy: Prisma.$user_privacyPayload<ExtArgs> | null
      alumni_contract: Prisma.$alumni_contractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      professor_id: string
      prefix: string
      fname: string
      lname: string
      profile: string | null
      passwordHash: string | null
      academic_rank: string | null
      canUse: boolean
      univercity_position: string | null
      allowedAccount: boolean
      email: string | null
      facultyId: number | null
      departmentId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }

  type professorGetPayload<S extends boolean | null | undefined | professorDefaultArgs> = $Result.GetResult<Prisma.$professorPayload, S>

  type professorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<professorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface professorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['professor'], meta: { name: 'professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {professorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends professorFindUniqueArgs>(args: SelectSubset<T, professorFindUniqueArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {professorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends professorFindUniqueOrThrowArgs>(args: SelectSubset<T, professorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends professorFindFirstArgs>(args?: SelectSubset<T, professorFindFirstArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends professorFindFirstOrThrowArgs>(args?: SelectSubset<T, professorFindFirstOrThrowArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `professor_id`
     * const professorWithProfessor_idOnly = await prisma.professor.findMany({ select: { professor_id: true } })
     * 
     */
    findMany<T extends professorFindManyArgs>(args?: SelectSubset<T, professorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor.
     * @param {professorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
     */
    create<T extends professorCreateArgs>(args: SelectSubset<T, professorCreateArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professors.
     * @param {professorCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends professorCreateManyArgs>(args?: SelectSubset<T, professorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professors and returns the data saved in the database.
     * @param {professorCreateManyAndReturnArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professors and only return the `professor_id`
     * const professorWithProfessor_idOnly = await prisma.professor.createManyAndReturn({
     *   select: { professor_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends professorCreateManyAndReturnArgs>(args?: SelectSubset<T, professorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professor.
     * @param {professorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
     */
    delete<T extends professorDeleteArgs>(args: SelectSubset<T, professorDeleteArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor.
     * @param {professorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends professorUpdateArgs>(args: SelectSubset<T, professorUpdateArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professors.
     * @param {professorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends professorDeleteManyArgs>(args?: SelectSubset<T, professorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends professorUpdateManyArgs>(args: SelectSubset<T, professorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors and returns the data updated in the database.
     * @param {professorUpdateManyAndReturnArgs} args - Arguments to update many Professors.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professors and only return the `professor_id`
     * const professorWithProfessor_idOnly = await prisma.professor.updateManyAndReturn({
     *   select: { professor_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends professorUpdateManyAndReturnArgs>(args: SelectSubset<T, professorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professor.
     * @param {professorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
     */
    upsert<T extends professorUpsertArgs>(args: SelectSubset<T, professorUpsertArgs<ExtArgs>>): Prisma__professorClient<$Result.GetResult<Prisma.$professorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends professorCountArgs>(
      args?: Subset<T, professorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorGroupByArgs} args - Group by arguments.
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
      T extends professorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: professorGroupByArgs['orderBy'] }
        : { orderBy?: professorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, professorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the professor model
   */
  readonly fields: professorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__professorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_privacy<T extends professor$user_privacyArgs<ExtArgs> = {}>(args?: Subset<T, professor$user_privacyArgs<ExtArgs>>): Prisma__user_privacyClient<$Result.GetResult<Prisma.$user_privacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    alumni_contract<T extends professor$alumni_contractArgs<ExtArgs> = {}>(args?: Subset<T, professor$alumni_contractArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alumni_contractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the professor model
   */
  interface professorFieldRefs {
    readonly professor_id: FieldRef<"professor", 'String'>
    readonly prefix: FieldRef<"professor", 'String'>
    readonly fname: FieldRef<"professor", 'String'>
    readonly lname: FieldRef<"professor", 'String'>
    readonly profile: FieldRef<"professor", 'String'>
    readonly passwordHash: FieldRef<"professor", 'String'>
    readonly academic_rank: FieldRef<"professor", 'String'>
    readonly canUse: FieldRef<"professor", 'Boolean'>
    readonly univercity_position: FieldRef<"professor", 'String'>
    readonly allowedAccount: FieldRef<"professor", 'Boolean'>
    readonly email: FieldRef<"professor", 'String'>
    readonly facultyId: FieldRef<"professor", 'Int'>
    readonly departmentId: FieldRef<"professor", 'Int'>
    readonly createdAt: FieldRef<"professor", 'DateTime'>
    readonly updatedAt: FieldRef<"professor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * professor findUnique
   */
  export type professorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * Filter, which professor to fetch.
     */
    where: professorWhereUniqueInput
  }

  /**
   * professor findUniqueOrThrow
   */
  export type professorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * Filter, which professor to fetch.
     */
    where: professorWhereUniqueInput
  }

  /**
   * professor findFirst
   */
  export type professorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * Filter, which professor to fetch.
     */
    where?: professorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professors to fetch.
     */
    orderBy?: professorOrderByWithRelationInput | professorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professors.
     */
    cursor?: professorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * professor findFirstOrThrow
   */
  export type professorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * Filter, which professor to fetch.
     */
    where?: professorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professors to fetch.
     */
    orderBy?: professorOrderByWithRelationInput | professorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professors.
     */
    cursor?: professorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * professor findMany
   */
  export type professorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * Filter, which professors to fetch.
     */
    where?: professorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professors to fetch.
     */
    orderBy?: professorOrderByWithRelationInput | professorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing professors.
     */
    cursor?: professorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professors.
     */
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * professor create
   */
  export type professorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * The data needed to create a professor.
     */
    data: XOR<professorCreateInput, professorUncheckedCreateInput>
  }

  /**
   * professor createMany
   */
  export type professorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many professors.
     */
    data: professorCreateManyInput | professorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * professor createManyAndReturn
   */
  export type professorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * The data used to create many professors.
     */
    data: professorCreateManyInput | professorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * professor update
   */
  export type professorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * The data needed to update a professor.
     */
    data: XOR<professorUpdateInput, professorUncheckedUpdateInput>
    /**
     * Choose, which professor to update.
     */
    where: professorWhereUniqueInput
  }

  /**
   * professor updateMany
   */
  export type professorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update professors.
     */
    data: XOR<professorUpdateManyMutationInput, professorUncheckedUpdateManyInput>
    /**
     * Filter which professors to update
     */
    where?: professorWhereInput
    /**
     * Limit how many professors to update.
     */
    limit?: number
  }

  /**
   * professor updateManyAndReturn
   */
  export type professorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * The data used to update professors.
     */
    data: XOR<professorUpdateManyMutationInput, professorUncheckedUpdateManyInput>
    /**
     * Filter which professors to update
     */
    where?: professorWhereInput
    /**
     * Limit how many professors to update.
     */
    limit?: number
  }

  /**
   * professor upsert
   */
  export type professorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * The filter to search for the professor to update in case it exists.
     */
    where: professorWhereUniqueInput
    /**
     * In case the professor found by the `where` argument doesn't exist, create a new professor with this data.
     */
    create: XOR<professorCreateInput, professorUncheckedCreateInput>
    /**
     * In case the professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<professorUpdateInput, professorUncheckedUpdateInput>
  }

  /**
   * professor delete
   */
  export type professorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
    /**
     * Filter which professor to delete.
     */
    where: professorWhereUniqueInput
  }

  /**
   * professor deleteMany
   */
  export type professorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professors to delete
     */
    where?: professorWhereInput
    /**
     * Limit how many professors to delete.
     */
    limit?: number
  }

  /**
   * professor.user_privacy
   */
  export type professor$user_privacyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_privacy
     */
    select?: user_privacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_privacy
     */
    omit?: user_privacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_privacyInclude<ExtArgs> | null
    where?: user_privacyWhereInput
  }

  /**
   * professor.alumni_contract
   */
  export type professor$alumni_contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumni_contract
     */
    select?: alumni_contractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alumni_contract
     */
    omit?: alumni_contractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alumni_contractInclude<ExtArgs> | null
    where?: alumni_contractWhereInput
    orderBy?: alumni_contractOrderByWithRelationInput | alumni_contractOrderByWithRelationInput[]
    cursor?: alumni_contractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Alumni_contractScalarFieldEnum | Alumni_contractScalarFieldEnum[]
  }

  /**
   * professor without action
   */
  export type professorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor
     */
    select?: professorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor
     */
    omit?: professorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorInclude<ExtArgs> | null
  }


  /**
   * Model news_donatios
   */

  export type AggregateNews_donatios = {
    _count: News_donatiosCountAggregateOutputType | null
    _avg: News_donatiosAvgAggregateOutputType | null
    _sum: News_donatiosSumAggregateOutputType | null
    _min: News_donatiosMinAggregateOutputType | null
    _max: News_donatiosMaxAggregateOutputType | null
  }

  export type News_donatiosAvgAggregateOutputType = {
    id: number | null
    target_money: number | null
    current_money: number | null
    view: number | null
  }

  export type News_donatiosSumAggregateOutputType = {
    id: number | null
    target_money: number | null
    current_money: number | null
    view: number | null
  }

  export type News_donatiosMinAggregateOutputType = {
    id: number | null
    title: string | null
    short_detail: string | null
    thumnail: string | null
    detail: string | null
    category: string | null
    target_money: number | null
    current_money: number | null
    donate_end: string | null
    isPublish: boolean | null
    date: string | null
    month: string | null
    year: string | null
    view: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type News_donatiosMaxAggregateOutputType = {
    id: number | null
    title: string | null
    short_detail: string | null
    thumnail: string | null
    detail: string | null
    category: string | null
    target_money: number | null
    current_money: number | null
    donate_end: string | null
    isPublish: boolean | null
    date: string | null
    month: string | null
    year: string | null
    view: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type News_donatiosCountAggregateOutputType = {
    id: number
    title: number
    short_detail: number
    thumnail: number
    detail: number
    category: number
    target_money: number
    current_money: number
    donate_end: number
    isPublish: number
    date: number
    month: number
    year: number
    view: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type News_donatiosAvgAggregateInputType = {
    id?: true
    target_money?: true
    current_money?: true
    view?: true
  }

  export type News_donatiosSumAggregateInputType = {
    id?: true
    target_money?: true
    current_money?: true
    view?: true
  }

  export type News_donatiosMinAggregateInputType = {
    id?: true
    title?: true
    short_detail?: true
    thumnail?: true
    detail?: true
    category?: true
    target_money?: true
    current_money?: true
    donate_end?: true
    isPublish?: true
    date?: true
    month?: true
    year?: true
    view?: true
    createdAt?: true
    updatedAt?: true
  }

  export type News_donatiosMaxAggregateInputType = {
    id?: true
    title?: true
    short_detail?: true
    thumnail?: true
    detail?: true
    category?: true
    target_money?: true
    current_money?: true
    donate_end?: true
    isPublish?: true
    date?: true
    month?: true
    year?: true
    view?: true
    createdAt?: true
    updatedAt?: true
  }

  export type News_donatiosCountAggregateInputType = {
    id?: true
    title?: true
    short_detail?: true
    thumnail?: true
    detail?: true
    category?: true
    target_money?: true
    current_money?: true
    donate_end?: true
    isPublish?: true
    date?: true
    month?: true
    year?: true
    view?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type News_donatiosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which news_donatios to aggregate.
     */
    where?: news_donatiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news_donatios to fetch.
     */
    orderBy?: news_donatiosOrderByWithRelationInput | news_donatiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: news_donatiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news_donatios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news_donatios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned news_donatios
    **/
    _count?: true | News_donatiosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: News_donatiosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: News_donatiosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: News_donatiosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: News_donatiosMaxAggregateInputType
  }

  export type GetNews_donatiosAggregateType<T extends News_donatiosAggregateArgs> = {
        [P in keyof T & keyof AggregateNews_donatios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews_donatios[P]>
      : GetScalarType<T[P], AggregateNews_donatios[P]>
  }




  export type news_donatiosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: news_donatiosWhereInput
    orderBy?: news_donatiosOrderByWithAggregationInput | news_donatiosOrderByWithAggregationInput[]
    by: News_donatiosScalarFieldEnum[] | News_donatiosScalarFieldEnum
    having?: news_donatiosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: News_donatiosCountAggregateInputType | true
    _avg?: News_donatiosAvgAggregateInputType
    _sum?: News_donatiosSumAggregateInputType
    _min?: News_donatiosMinAggregateInputType
    _max?: News_donatiosMaxAggregateInputType
  }

  export type News_donatiosGroupByOutputType = {
    id: number
    title: string
    short_detail: string
    thumnail: string
    detail: string
    category: string
    target_money: number | null
    current_money: number | null
    donate_end: string | null
    isPublish: boolean
    date: string
    month: string
    year: string
    view: number
    createdAt: Date
    updatedAt: Date
    _count: News_donatiosCountAggregateOutputType | null
    _avg: News_donatiosAvgAggregateOutputType | null
    _sum: News_donatiosSumAggregateOutputType | null
    _min: News_donatiosMinAggregateOutputType | null
    _max: News_donatiosMaxAggregateOutputType | null
  }

  type GetNews_donatiosGroupByPayload<T extends news_donatiosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<News_donatiosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof News_donatiosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], News_donatiosGroupByOutputType[P]>
            : GetScalarType<T[P], News_donatiosGroupByOutputType[P]>
        }
      >
    >


  export type news_donatiosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    short_detail?: boolean
    thumnail?: boolean
    detail?: boolean
    category?: boolean
    target_money?: boolean
    current_money?: boolean
    donate_end?: boolean
    isPublish?: boolean
    date?: boolean
    month?: boolean
    year?: boolean
    view?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news_donatios"]>

  export type news_donatiosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    short_detail?: boolean
    thumnail?: boolean
    detail?: boolean
    category?: boolean
    target_money?: boolean
    current_money?: boolean
    donate_end?: boolean
    isPublish?: boolean
    date?: boolean
    month?: boolean
    year?: boolean
    view?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news_donatios"]>

  export type news_donatiosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    short_detail?: boolean
    thumnail?: boolean
    detail?: boolean
    category?: boolean
    target_money?: boolean
    current_money?: boolean
    donate_end?: boolean
    isPublish?: boolean
    date?: boolean
    month?: boolean
    year?: boolean
    view?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news_donatios"]>

  export type news_donatiosSelectScalar = {
    id?: boolean
    title?: boolean
    short_detail?: boolean
    thumnail?: boolean
    detail?: boolean
    category?: boolean
    target_money?: boolean
    current_money?: boolean
    donate_end?: boolean
    isPublish?: boolean
    date?: boolean
    month?: boolean
    year?: boolean
    view?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type news_donatiosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "short_detail" | "thumnail" | "detail" | "category" | "target_money" | "current_money" | "donate_end" | "isPublish" | "date" | "month" | "year" | "view" | "createdAt" | "updatedAt", ExtArgs["result"]["news_donatios"]>

  export type $news_donatiosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "news_donatios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      short_detail: string
      thumnail: string
      detail: string
      category: string
      target_money: number | null
      current_money: number | null
      donate_end: string | null
      isPublish: boolean
      date: string
      month: string
      year: string
      view: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["news_donatios"]>
    composites: {}
  }

  type news_donatiosGetPayload<S extends boolean | null | undefined | news_donatiosDefaultArgs> = $Result.GetResult<Prisma.$news_donatiosPayload, S>

  type news_donatiosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<news_donatiosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: News_donatiosCountAggregateInputType | true
    }

  export interface news_donatiosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['news_donatios'], meta: { name: 'news_donatios' } }
    /**
     * Find zero or one News_donatios that matches the filter.
     * @param {news_donatiosFindUniqueArgs} args - Arguments to find a News_donatios
     * @example
     * // Get one News_donatios
     * const news_donatios = await prisma.news_donatios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends news_donatiosFindUniqueArgs>(args: SelectSubset<T, news_donatiosFindUniqueArgs<ExtArgs>>): Prisma__news_donatiosClient<$Result.GetResult<Prisma.$news_donatiosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News_donatios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {news_donatiosFindUniqueOrThrowArgs} args - Arguments to find a News_donatios
     * @example
     * // Get one News_donatios
     * const news_donatios = await prisma.news_donatios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends news_donatiosFindUniqueOrThrowArgs>(args: SelectSubset<T, news_donatiosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__news_donatiosClient<$Result.GetResult<Prisma.$news_donatiosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News_donatios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_donatiosFindFirstArgs} args - Arguments to find a News_donatios
     * @example
     * // Get one News_donatios
     * const news_donatios = await prisma.news_donatios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends news_donatiosFindFirstArgs>(args?: SelectSubset<T, news_donatiosFindFirstArgs<ExtArgs>>): Prisma__news_donatiosClient<$Result.GetResult<Prisma.$news_donatiosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News_donatios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_donatiosFindFirstOrThrowArgs} args - Arguments to find a News_donatios
     * @example
     * // Get one News_donatios
     * const news_donatios = await prisma.news_donatios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends news_donatiosFindFirstOrThrowArgs>(args?: SelectSubset<T, news_donatiosFindFirstOrThrowArgs<ExtArgs>>): Prisma__news_donatiosClient<$Result.GetResult<Prisma.$news_donatiosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News_donatios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_donatiosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News_donatios
     * const news_donatios = await prisma.news_donatios.findMany()
     * 
     * // Get first 10 News_donatios
     * const news_donatios = await prisma.news_donatios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const news_donatiosWithIdOnly = await prisma.news_donatios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends news_donatiosFindManyArgs>(args?: SelectSubset<T, news_donatiosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$news_donatiosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News_donatios.
     * @param {news_donatiosCreateArgs} args - Arguments to create a News_donatios.
     * @example
     * // Create one News_donatios
     * const News_donatios = await prisma.news_donatios.create({
     *   data: {
     *     // ... data to create a News_donatios
     *   }
     * })
     * 
     */
    create<T extends news_donatiosCreateArgs>(args: SelectSubset<T, news_donatiosCreateArgs<ExtArgs>>): Prisma__news_donatiosClient<$Result.GetResult<Prisma.$news_donatiosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News_donatios.
     * @param {news_donatiosCreateManyArgs} args - Arguments to create many News_donatios.
     * @example
     * // Create many News_donatios
     * const news_donatios = await prisma.news_donatios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends news_donatiosCreateManyArgs>(args?: SelectSubset<T, news_donatiosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News_donatios and returns the data saved in the database.
     * @param {news_donatiosCreateManyAndReturnArgs} args - Arguments to create many News_donatios.
     * @example
     * // Create many News_donatios
     * const news_donatios = await prisma.news_donatios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News_donatios and only return the `id`
     * const news_donatiosWithIdOnly = await prisma.news_donatios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends news_donatiosCreateManyAndReturnArgs>(args?: SelectSubset<T, news_donatiosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$news_donatiosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News_donatios.
     * @param {news_donatiosDeleteArgs} args - Arguments to delete one News_donatios.
     * @example
     * // Delete one News_donatios
     * const News_donatios = await prisma.news_donatios.delete({
     *   where: {
     *     // ... filter to delete one News_donatios
     *   }
     * })
     * 
     */
    delete<T extends news_donatiosDeleteArgs>(args: SelectSubset<T, news_donatiosDeleteArgs<ExtArgs>>): Prisma__news_donatiosClient<$Result.GetResult<Prisma.$news_donatiosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News_donatios.
     * @param {news_donatiosUpdateArgs} args - Arguments to update one News_donatios.
     * @example
     * // Update one News_donatios
     * const news_donatios = await prisma.news_donatios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends news_donatiosUpdateArgs>(args: SelectSubset<T, news_donatiosUpdateArgs<ExtArgs>>): Prisma__news_donatiosClient<$Result.GetResult<Prisma.$news_donatiosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News_donatios.
     * @param {news_donatiosDeleteManyArgs} args - Arguments to filter News_donatios to delete.
     * @example
     * // Delete a few News_donatios
     * const { count } = await prisma.news_donatios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends news_donatiosDeleteManyArgs>(args?: SelectSubset<T, news_donatiosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News_donatios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_donatiosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News_donatios
     * const news_donatios = await prisma.news_donatios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends news_donatiosUpdateManyArgs>(args: SelectSubset<T, news_donatiosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News_donatios and returns the data updated in the database.
     * @param {news_donatiosUpdateManyAndReturnArgs} args - Arguments to update many News_donatios.
     * @example
     * // Update many News_donatios
     * const news_donatios = await prisma.news_donatios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News_donatios and only return the `id`
     * const news_donatiosWithIdOnly = await prisma.news_donatios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends news_donatiosUpdateManyAndReturnArgs>(args: SelectSubset<T, news_donatiosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$news_donatiosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News_donatios.
     * @param {news_donatiosUpsertArgs} args - Arguments to update or create a News_donatios.
     * @example
     * // Update or create a News_donatios
     * const news_donatios = await prisma.news_donatios.upsert({
     *   create: {
     *     // ... data to create a News_donatios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News_donatios we want to update
     *   }
     * })
     */
    upsert<T extends news_donatiosUpsertArgs>(args: SelectSubset<T, news_donatiosUpsertArgs<ExtArgs>>): Prisma__news_donatiosClient<$Result.GetResult<Prisma.$news_donatiosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News_donatios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_donatiosCountArgs} args - Arguments to filter News_donatios to count.
     * @example
     * // Count the number of News_donatios
     * const count = await prisma.news_donatios.count({
     *   where: {
     *     // ... the filter for the News_donatios we want to count
     *   }
     * })
    **/
    count<T extends news_donatiosCountArgs>(
      args?: Subset<T, news_donatiosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], News_donatiosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News_donatios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {News_donatiosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends News_donatiosAggregateArgs>(args: Subset<T, News_donatiosAggregateArgs>): Prisma.PrismaPromise<GetNews_donatiosAggregateType<T>>

    /**
     * Group by News_donatios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_donatiosGroupByArgs} args - Group by arguments.
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
      T extends news_donatiosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: news_donatiosGroupByArgs['orderBy'] }
        : { orderBy?: news_donatiosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, news_donatiosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNews_donatiosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the news_donatios model
   */
  readonly fields: news_donatiosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for news_donatios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__news_donatiosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the news_donatios model
   */
  interface news_donatiosFieldRefs {
    readonly id: FieldRef<"news_donatios", 'Int'>
    readonly title: FieldRef<"news_donatios", 'String'>
    readonly short_detail: FieldRef<"news_donatios", 'String'>
    readonly thumnail: FieldRef<"news_donatios", 'String'>
    readonly detail: FieldRef<"news_donatios", 'String'>
    readonly category: FieldRef<"news_donatios", 'String'>
    readonly target_money: FieldRef<"news_donatios", 'Int'>
    readonly current_money: FieldRef<"news_donatios", 'Int'>
    readonly donate_end: FieldRef<"news_donatios", 'String'>
    readonly isPublish: FieldRef<"news_donatios", 'Boolean'>
    readonly date: FieldRef<"news_donatios", 'String'>
    readonly month: FieldRef<"news_donatios", 'String'>
    readonly year: FieldRef<"news_donatios", 'String'>
    readonly view: FieldRef<"news_donatios", 'Int'>
    readonly createdAt: FieldRef<"news_donatios", 'DateTime'>
    readonly updatedAt: FieldRef<"news_donatios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * news_donatios findUnique
   */
  export type news_donatiosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_donatios
     */
    select?: news_donatiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_donatios
     */
    omit?: news_donatiosOmit<ExtArgs> | null
    /**
     * Filter, which news_donatios to fetch.
     */
    where: news_donatiosWhereUniqueInput
  }

  /**
   * news_donatios findUniqueOrThrow
   */
  export type news_donatiosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_donatios
     */
    select?: news_donatiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_donatios
     */
    omit?: news_donatiosOmit<ExtArgs> | null
    /**
     * Filter, which news_donatios to fetch.
     */
    where: news_donatiosWhereUniqueInput
  }

  /**
   * news_donatios findFirst
   */
  export type news_donatiosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_donatios
     */
    select?: news_donatiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_donatios
     */
    omit?: news_donatiosOmit<ExtArgs> | null
    /**
     * Filter, which news_donatios to fetch.
     */
    where?: news_donatiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news_donatios to fetch.
     */
    orderBy?: news_donatiosOrderByWithRelationInput | news_donatiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for news_donatios.
     */
    cursor?: news_donatiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news_donatios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news_donatios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of news_donatios.
     */
    distinct?: News_donatiosScalarFieldEnum | News_donatiosScalarFieldEnum[]
  }

  /**
   * news_donatios findFirstOrThrow
   */
  export type news_donatiosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_donatios
     */
    select?: news_donatiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_donatios
     */
    omit?: news_donatiosOmit<ExtArgs> | null
    /**
     * Filter, which news_donatios to fetch.
     */
    where?: news_donatiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news_donatios to fetch.
     */
    orderBy?: news_donatiosOrderByWithRelationInput | news_donatiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for news_donatios.
     */
    cursor?: news_donatiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news_donatios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news_donatios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of news_donatios.
     */
    distinct?: News_donatiosScalarFieldEnum | News_donatiosScalarFieldEnum[]
  }

  /**
   * news_donatios findMany
   */
  export type news_donatiosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_donatios
     */
    select?: news_donatiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_donatios
     */
    omit?: news_donatiosOmit<ExtArgs> | null
    /**
     * Filter, which news_donatios to fetch.
     */
    where?: news_donatiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news_donatios to fetch.
     */
    orderBy?: news_donatiosOrderByWithRelationInput | news_donatiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing news_donatios.
     */
    cursor?: news_donatiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news_donatios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news_donatios.
     */
    skip?: number
    distinct?: News_donatiosScalarFieldEnum | News_donatiosScalarFieldEnum[]
  }

  /**
   * news_donatios create
   */
  export type news_donatiosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_donatios
     */
    select?: news_donatiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_donatios
     */
    omit?: news_donatiosOmit<ExtArgs> | null
    /**
     * The data needed to create a news_donatios.
     */
    data: XOR<news_donatiosCreateInput, news_donatiosUncheckedCreateInput>
  }

  /**
   * news_donatios createMany
   */
  export type news_donatiosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many news_donatios.
     */
    data: news_donatiosCreateManyInput | news_donatiosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * news_donatios createManyAndReturn
   */
  export type news_donatiosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_donatios
     */
    select?: news_donatiosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the news_donatios
     */
    omit?: news_donatiosOmit<ExtArgs> | null
    /**
     * The data used to create many news_donatios.
     */
    data: news_donatiosCreateManyInput | news_donatiosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * news_donatios update
   */
  export type news_donatiosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_donatios
     */
    select?: news_donatiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_donatios
     */
    omit?: news_donatiosOmit<ExtArgs> | null
    /**
     * The data needed to update a news_donatios.
     */
    data: XOR<news_donatiosUpdateInput, news_donatiosUncheckedUpdateInput>
    /**
     * Choose, which news_donatios to update.
     */
    where: news_donatiosWhereUniqueInput
  }

  /**
   * news_donatios updateMany
   */
  export type news_donatiosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update news_donatios.
     */
    data: XOR<news_donatiosUpdateManyMutationInput, news_donatiosUncheckedUpdateManyInput>
    /**
     * Filter which news_donatios to update
     */
    where?: news_donatiosWhereInput
    /**
     * Limit how many news_donatios to update.
     */
    limit?: number
  }

  /**
   * news_donatios updateManyAndReturn
   */
  export type news_donatiosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_donatios
     */
    select?: news_donatiosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the news_donatios
     */
    omit?: news_donatiosOmit<ExtArgs> | null
    /**
     * The data used to update news_donatios.
     */
    data: XOR<news_donatiosUpdateManyMutationInput, news_donatiosUncheckedUpdateManyInput>
    /**
     * Filter which news_donatios to update
     */
    where?: news_donatiosWhereInput
    /**
     * Limit how many news_donatios to update.
     */
    limit?: number
  }

  /**
   * news_donatios upsert
   */
  export type news_donatiosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_donatios
     */
    select?: news_donatiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_donatios
     */
    omit?: news_donatiosOmit<ExtArgs> | null
    /**
     * The filter to search for the news_donatios to update in case it exists.
     */
    where: news_donatiosWhereUniqueInput
    /**
     * In case the news_donatios found by the `where` argument doesn't exist, create a new news_donatios with this data.
     */
    create: XOR<news_donatiosCreateInput, news_donatiosUncheckedCreateInput>
    /**
     * In case the news_donatios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<news_donatiosUpdateInput, news_donatiosUncheckedUpdateInput>
  }

  /**
   * news_donatios delete
   */
  export type news_donatiosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_donatios
     */
    select?: news_donatiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_donatios
     */
    omit?: news_donatiosOmit<ExtArgs> | null
    /**
     * Filter which news_donatios to delete.
     */
    where: news_donatiosWhereUniqueInput
  }

  /**
   * news_donatios deleteMany
   */
  export type news_donatiosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which news_donatios to delete
     */
    where?: news_donatiosWhereInput
    /**
     * Limit how many news_donatios to delete.
     */
    limit?: number
  }

  /**
   * news_donatios without action
   */
  export type news_donatiosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_donatios
     */
    select?: news_donatiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_donatios
     */
    omit?: news_donatiosOmit<ExtArgs> | null
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


  export const AlumniScalarFieldEnum: {
    alumni_id: 'alumni_id',
    prefix: 'prefix',
    fname: 'fname',
    lname: 'lname',
    profile: 'profile',
    passwordHash: 'passwordHash',
    allowedAccount: 'allowedAccount',
    canUse: 'canUse',
    year_start: 'year_start',
    year_end: 'year_end',
    facultyId: 'facultyId',
    departmentId: 'departmentId',
    edu_levelId: 'edu_levelId',
    createtAt: 'createtAt',
    updatedAt: 'updatedAt'
  };

  export type AlumniScalarFieldEnum = (typeof AlumniScalarFieldEnum)[keyof typeof AlumniScalarFieldEnum]


  export const Alumni_contractScalarFieldEnum: {
    id: 'id',
    alumniId: 'alumniId',
    phone1: 'phone1',
    phone2: 'phone2',
    email1: 'email1',
    email2: 'email2',
    facebook: 'facebook',
    address: 'address',
    tambon: 'tambon',
    amphure: 'amphure',
    province: 'province',
    zipcode: 'zipcode',
    createtAt: 'createtAt',
    updatedAt: 'updatedAt',
    professorProfessor_id: 'professorProfessor_id'
  };

  export type Alumni_contractScalarFieldEnum = (typeof Alumni_contractScalarFieldEnum)[keyof typeof Alumni_contractScalarFieldEnum]


  export const Work_expreriencesScalarFieldEnum: {
    id: 'id',
    isOnTheLine: 'isOnTheLine',
    job_position: 'job_position',
    company_name: 'company_name',
    company_place: 'company_place',
    start_date: 'start_date',
    end_date: 'end_date',
    job_detail: 'job_detail',
    job_responsibility: 'job_responsibility',
    job_skills: 'job_skills',
    salary: 'salary',
    isCurrent: 'isCurrent',
    isInThai: 'isInThai',
    remark: 'remark',
    edu_level: 'edu_level',
    continued_study: 'continued_study',
    edu_faculty: 'edu_faculty',
    edu_dep: 'edu_dep',
    edu_university: 'edu_university',
    year_start: 'year_start',
    year_end: 'year_end',
    edu_performance: 'edu_performance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    alumniId: 'alumniId'
  };

  export type Work_expreriencesScalarFieldEnum = (typeof Work_expreriencesScalarFieldEnum)[keyof typeof Work_expreriencesScalarFieldEnum]


  export const User_privacyScalarFieldEnum: {
    id: 'id',
    seeEmail: 'seeEmail',
    seePhone: 'seePhone',
    seeFacebook: 'seeFacebook',
    seeAddress: 'seeAddress',
    seeWorkExprerience: 'seeWorkExprerience',
    seeProfile: 'seeProfile',
    seeSalary: 'seeSalary',
    allowedAlumniSendEmail: 'allowedAlumniSendEmail',
    allowedProfessorSendEmail: 'allowedProfessorSendEmail',
    alumniId: 'alumniId',
    professorId: 'professorId',
    createtAt: 'createtAt',
    updatedAt: 'updatedAt'
  };

  export type User_privacyScalarFieldEnum = (typeof User_privacyScalarFieldEnum)[keyof typeof User_privacyScalarFieldEnum]


  export const ProfessorScalarFieldEnum: {
    professor_id: 'professor_id',
    prefix: 'prefix',
    fname: 'fname',
    lname: 'lname',
    profile: 'profile',
    passwordHash: 'passwordHash',
    academic_rank: 'academic_rank',
    canUse: 'canUse',
    univercity_position: 'univercity_position',
    allowedAccount: 'allowedAccount',
    email: 'email',
    facultyId: 'facultyId',
    departmentId: 'departmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const News_donatiosScalarFieldEnum: {
    id: 'id',
    title: 'title',
    short_detail: 'short_detail',
    thumnail: 'thumnail',
    detail: 'detail',
    category: 'category',
    target_money: 'target_money',
    current_money: 'current_money',
    donate_end: 'donate_end',
    isPublish: 'isPublish',
    date: 'date',
    month: 'month',
    year: 'year',
    view: 'view',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type News_donatiosScalarFieldEnum = (typeof News_donatiosScalarFieldEnum)[keyof typeof News_donatiosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type alumniWhereInput = {
    AND?: alumniWhereInput | alumniWhereInput[]
    OR?: alumniWhereInput[]
    NOT?: alumniWhereInput | alumniWhereInput[]
    alumni_id?: StringFilter<"alumni"> | string
    prefix?: StringFilter<"alumni"> | string
    fname?: StringFilter<"alumni"> | string
    lname?: StringFilter<"alumni"> | string
    profile?: StringNullableFilter<"alumni"> | string | null
    passwordHash?: StringNullableFilter<"alumni"> | string | null
    allowedAccount?: BoolFilter<"alumni"> | boolean
    canUse?: BoolFilter<"alumni"> | boolean
    year_start?: IntNullableFilter<"alumni"> | number | null
    year_end?: IntNullableFilter<"alumni"> | number | null
    facultyId?: IntNullableFilter<"alumni"> | number | null
    departmentId?: IntNullableFilter<"alumni"> | number | null
    edu_levelId?: IntNullableFilter<"alumni"> | number | null
    createtAt?: DateTimeFilter<"alumni"> | Date | string
    updatedAt?: DateTimeFilter<"alumni"> | Date | string
    work_expreriences?: Work_expreriencesListRelationFilter
    user_privacy?: XOR<User_privacyNullableScalarRelationFilter, user_privacyWhereInput> | null
    alumni_contract?: XOR<Alumni_contractNullableScalarRelationFilter, alumni_contractWhereInput> | null
  }

  export type alumniOrderByWithRelationInput = {
    alumni_id?: SortOrder
    prefix?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    profile?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    allowedAccount?: SortOrder
    canUse?: SortOrder
    year_start?: SortOrderInput | SortOrder
    year_end?: SortOrderInput | SortOrder
    facultyId?: SortOrderInput | SortOrder
    departmentId?: SortOrderInput | SortOrder
    edu_levelId?: SortOrderInput | SortOrder
    createtAt?: SortOrder
    updatedAt?: SortOrder
    work_expreriences?: work_expreriencesOrderByRelationAggregateInput
    user_privacy?: user_privacyOrderByWithRelationInput
    alumni_contract?: alumni_contractOrderByWithRelationInput
  }

  export type alumniWhereUniqueInput = Prisma.AtLeast<{
    alumni_id?: string
    AND?: alumniWhereInput | alumniWhereInput[]
    OR?: alumniWhereInput[]
    NOT?: alumniWhereInput | alumniWhereInput[]
    prefix?: StringFilter<"alumni"> | string
    fname?: StringFilter<"alumni"> | string
    lname?: StringFilter<"alumni"> | string
    profile?: StringNullableFilter<"alumni"> | string | null
    passwordHash?: StringNullableFilter<"alumni"> | string | null
    allowedAccount?: BoolFilter<"alumni"> | boolean
    canUse?: BoolFilter<"alumni"> | boolean
    year_start?: IntNullableFilter<"alumni"> | number | null
    year_end?: IntNullableFilter<"alumni"> | number | null
    facultyId?: IntNullableFilter<"alumni"> | number | null
    departmentId?: IntNullableFilter<"alumni"> | number | null
    edu_levelId?: IntNullableFilter<"alumni"> | number | null
    createtAt?: DateTimeFilter<"alumni"> | Date | string
    updatedAt?: DateTimeFilter<"alumni"> | Date | string
    work_expreriences?: Work_expreriencesListRelationFilter
    user_privacy?: XOR<User_privacyNullableScalarRelationFilter, user_privacyWhereInput> | null
    alumni_contract?: XOR<Alumni_contractNullableScalarRelationFilter, alumni_contractWhereInput> | null
  }, "alumni_id" | "alumni_id">

  export type alumniOrderByWithAggregationInput = {
    alumni_id?: SortOrder
    prefix?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    profile?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    allowedAccount?: SortOrder
    canUse?: SortOrder
    year_start?: SortOrderInput | SortOrder
    year_end?: SortOrderInput | SortOrder
    facultyId?: SortOrderInput | SortOrder
    departmentId?: SortOrderInput | SortOrder
    edu_levelId?: SortOrderInput | SortOrder
    createtAt?: SortOrder
    updatedAt?: SortOrder
    _count?: alumniCountOrderByAggregateInput
    _avg?: alumniAvgOrderByAggregateInput
    _max?: alumniMaxOrderByAggregateInput
    _min?: alumniMinOrderByAggregateInput
    _sum?: alumniSumOrderByAggregateInput
  }

  export type alumniScalarWhereWithAggregatesInput = {
    AND?: alumniScalarWhereWithAggregatesInput | alumniScalarWhereWithAggregatesInput[]
    OR?: alumniScalarWhereWithAggregatesInput[]
    NOT?: alumniScalarWhereWithAggregatesInput | alumniScalarWhereWithAggregatesInput[]
    alumni_id?: StringWithAggregatesFilter<"alumni"> | string
    prefix?: StringWithAggregatesFilter<"alumni"> | string
    fname?: StringWithAggregatesFilter<"alumni"> | string
    lname?: StringWithAggregatesFilter<"alumni"> | string
    profile?: StringNullableWithAggregatesFilter<"alumni"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"alumni"> | string | null
    allowedAccount?: BoolWithAggregatesFilter<"alumni"> | boolean
    canUse?: BoolWithAggregatesFilter<"alumni"> | boolean
    year_start?: IntNullableWithAggregatesFilter<"alumni"> | number | null
    year_end?: IntNullableWithAggregatesFilter<"alumni"> | number | null
    facultyId?: IntNullableWithAggregatesFilter<"alumni"> | number | null
    departmentId?: IntNullableWithAggregatesFilter<"alumni"> | number | null
    edu_levelId?: IntNullableWithAggregatesFilter<"alumni"> | number | null
    createtAt?: DateTimeWithAggregatesFilter<"alumni"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"alumni"> | Date | string
  }

  export type alumni_contractWhereInput = {
    AND?: alumni_contractWhereInput | alumni_contractWhereInput[]
    OR?: alumni_contractWhereInput[]
    NOT?: alumni_contractWhereInput | alumni_contractWhereInput[]
    id?: IntFilter<"alumni_contract"> | number
    alumniId?: StringNullableFilter<"alumni_contract"> | string | null
    phone1?: StringNullableFilter<"alumni_contract"> | string | null
    phone2?: StringNullableFilter<"alumni_contract"> | string | null
    email1?: StringNullableFilter<"alumni_contract"> | string | null
    email2?: StringNullableFilter<"alumni_contract"> | string | null
    facebook?: StringNullableFilter<"alumni_contract"> | string | null
    address?: StringNullableFilter<"alumni_contract"> | string | null
    tambon?: StringNullableFilter<"alumni_contract"> | string | null
    amphure?: StringNullableFilter<"alumni_contract"> | string | null
    province?: StringNullableFilter<"alumni_contract"> | string | null
    zipcode?: StringNullableFilter<"alumni_contract"> | string | null
    createtAt?: DateTimeFilter<"alumni_contract"> | Date | string
    updatedAt?: DateTimeFilter<"alumni_contract"> | Date | string
    professorProfessor_id?: StringNullableFilter<"alumni_contract"> | string | null
    alumni?: XOR<AlumniNullableScalarRelationFilter, alumniWhereInput> | null
    professor?: XOR<ProfessorNullableScalarRelationFilter, professorWhereInput> | null
  }

  export type alumni_contractOrderByWithRelationInput = {
    id?: SortOrder
    alumniId?: SortOrderInput | SortOrder
    phone1?: SortOrderInput | SortOrder
    phone2?: SortOrderInput | SortOrder
    email1?: SortOrderInput | SortOrder
    email2?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    tambon?: SortOrderInput | SortOrder
    amphure?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    zipcode?: SortOrderInput | SortOrder
    createtAt?: SortOrder
    updatedAt?: SortOrder
    professorProfessor_id?: SortOrderInput | SortOrder
    alumni?: alumniOrderByWithRelationInput
    professor?: professorOrderByWithRelationInput
  }

  export type alumni_contractWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    alumniId?: string
    AND?: alumni_contractWhereInput | alumni_contractWhereInput[]
    OR?: alumni_contractWhereInput[]
    NOT?: alumni_contractWhereInput | alumni_contractWhereInput[]
    phone1?: StringNullableFilter<"alumni_contract"> | string | null
    phone2?: StringNullableFilter<"alumni_contract"> | string | null
    email1?: StringNullableFilter<"alumni_contract"> | string | null
    email2?: StringNullableFilter<"alumni_contract"> | string | null
    facebook?: StringNullableFilter<"alumni_contract"> | string | null
    address?: StringNullableFilter<"alumni_contract"> | string | null
    tambon?: StringNullableFilter<"alumni_contract"> | string | null
    amphure?: StringNullableFilter<"alumni_contract"> | string | null
    province?: StringNullableFilter<"alumni_contract"> | string | null
    zipcode?: StringNullableFilter<"alumni_contract"> | string | null
    createtAt?: DateTimeFilter<"alumni_contract"> | Date | string
    updatedAt?: DateTimeFilter<"alumni_contract"> | Date | string
    professorProfessor_id?: StringNullableFilter<"alumni_contract"> | string | null
    alumni?: XOR<AlumniNullableScalarRelationFilter, alumniWhereInput> | null
    professor?: XOR<ProfessorNullableScalarRelationFilter, professorWhereInput> | null
  }, "id" | "alumniId">

  export type alumni_contractOrderByWithAggregationInput = {
    id?: SortOrder
    alumniId?: SortOrderInput | SortOrder
    phone1?: SortOrderInput | SortOrder
    phone2?: SortOrderInput | SortOrder
    email1?: SortOrderInput | SortOrder
    email2?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    tambon?: SortOrderInput | SortOrder
    amphure?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    zipcode?: SortOrderInput | SortOrder
    createtAt?: SortOrder
    updatedAt?: SortOrder
    professorProfessor_id?: SortOrderInput | SortOrder
    _count?: alumni_contractCountOrderByAggregateInput
    _avg?: alumni_contractAvgOrderByAggregateInput
    _max?: alumni_contractMaxOrderByAggregateInput
    _min?: alumni_contractMinOrderByAggregateInput
    _sum?: alumni_contractSumOrderByAggregateInput
  }

  export type alumni_contractScalarWhereWithAggregatesInput = {
    AND?: alumni_contractScalarWhereWithAggregatesInput | alumni_contractScalarWhereWithAggregatesInput[]
    OR?: alumni_contractScalarWhereWithAggregatesInput[]
    NOT?: alumni_contractScalarWhereWithAggregatesInput | alumni_contractScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"alumni_contract"> | number
    alumniId?: StringNullableWithAggregatesFilter<"alumni_contract"> | string | null
    phone1?: StringNullableWithAggregatesFilter<"alumni_contract"> | string | null
    phone2?: StringNullableWithAggregatesFilter<"alumni_contract"> | string | null
    email1?: StringNullableWithAggregatesFilter<"alumni_contract"> | string | null
    email2?: StringNullableWithAggregatesFilter<"alumni_contract"> | string | null
    facebook?: StringNullableWithAggregatesFilter<"alumni_contract"> | string | null
    address?: StringNullableWithAggregatesFilter<"alumni_contract"> | string | null
    tambon?: StringNullableWithAggregatesFilter<"alumni_contract"> | string | null
    amphure?: StringNullableWithAggregatesFilter<"alumni_contract"> | string | null
    province?: StringNullableWithAggregatesFilter<"alumni_contract"> | string | null
    zipcode?: StringNullableWithAggregatesFilter<"alumni_contract"> | string | null
    createtAt?: DateTimeWithAggregatesFilter<"alumni_contract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"alumni_contract"> | Date | string
    professorProfessor_id?: StringNullableWithAggregatesFilter<"alumni_contract"> | string | null
  }

  export type work_expreriencesWhereInput = {
    AND?: work_expreriencesWhereInput | work_expreriencesWhereInput[]
    OR?: work_expreriencesWhereInput[]
    NOT?: work_expreriencesWhereInput | work_expreriencesWhereInput[]
    id?: IntFilter<"work_expreriences"> | number
    isOnTheLine?: BoolNullableFilter<"work_expreriences"> | boolean | null
    job_position?: StringNullableFilter<"work_expreriences"> | string | null
    company_name?: StringNullableFilter<"work_expreriences"> | string | null
    company_place?: StringFilter<"work_expreriences"> | string
    start_date?: StringNullableFilter<"work_expreriences"> | string | null
    end_date?: StringNullableFilter<"work_expreriences"> | string | null
    job_detail?: StringNullableFilter<"work_expreriences"> | string | null
    job_responsibility?: StringNullableFilter<"work_expreriences"> | string | null
    job_skills?: StringNullableFilter<"work_expreriences"> | string | null
    salary?: FloatNullableFilter<"work_expreriences"> | number | null
    isCurrent?: BoolFilter<"work_expreriences"> | boolean
    isInThai?: BoolFilter<"work_expreriences"> | boolean
    remark?: StringNullableFilter<"work_expreriences"> | string | null
    edu_level?: StringNullableFilter<"work_expreriences"> | string | null
    continued_study?: BoolFilter<"work_expreriences"> | boolean
    edu_faculty?: StringNullableFilter<"work_expreriences"> | string | null
    edu_dep?: StringNullableFilter<"work_expreriences"> | string | null
    edu_university?: StringNullableFilter<"work_expreriences"> | string | null
    year_start?: StringNullableFilter<"work_expreriences"> | string | null
    year_end?: StringNullableFilter<"work_expreriences"> | string | null
    edu_performance?: StringNullableFilter<"work_expreriences"> | string | null
    createdAt?: DateTimeFilter<"work_expreriences"> | Date | string
    updatedAt?: DateTimeFilter<"work_expreriences"> | Date | string
    alumniId?: StringNullableFilter<"work_expreriences"> | string | null
    alumni?: XOR<AlumniNullableScalarRelationFilter, alumniWhereInput> | null
  }

  export type work_expreriencesOrderByWithRelationInput = {
    id?: SortOrder
    isOnTheLine?: SortOrderInput | SortOrder
    job_position?: SortOrderInput | SortOrder
    company_name?: SortOrderInput | SortOrder
    company_place?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    job_detail?: SortOrderInput | SortOrder
    job_responsibility?: SortOrderInput | SortOrder
    job_skills?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    isCurrent?: SortOrder
    isInThai?: SortOrder
    remark?: SortOrderInput | SortOrder
    edu_level?: SortOrderInput | SortOrder
    continued_study?: SortOrder
    edu_faculty?: SortOrderInput | SortOrder
    edu_dep?: SortOrderInput | SortOrder
    edu_university?: SortOrderInput | SortOrder
    year_start?: SortOrderInput | SortOrder
    year_end?: SortOrderInput | SortOrder
    edu_performance?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alumniId?: SortOrderInput | SortOrder
    alumni?: alumniOrderByWithRelationInput
  }

  export type work_expreriencesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: work_expreriencesWhereInput | work_expreriencesWhereInput[]
    OR?: work_expreriencesWhereInput[]
    NOT?: work_expreriencesWhereInput | work_expreriencesWhereInput[]
    isOnTheLine?: BoolNullableFilter<"work_expreriences"> | boolean | null
    job_position?: StringNullableFilter<"work_expreriences"> | string | null
    company_name?: StringNullableFilter<"work_expreriences"> | string | null
    company_place?: StringFilter<"work_expreriences"> | string
    start_date?: StringNullableFilter<"work_expreriences"> | string | null
    end_date?: StringNullableFilter<"work_expreriences"> | string | null
    job_detail?: StringNullableFilter<"work_expreriences"> | string | null
    job_responsibility?: StringNullableFilter<"work_expreriences"> | string | null
    job_skills?: StringNullableFilter<"work_expreriences"> | string | null
    salary?: FloatNullableFilter<"work_expreriences"> | number | null
    isCurrent?: BoolFilter<"work_expreriences"> | boolean
    isInThai?: BoolFilter<"work_expreriences"> | boolean
    remark?: StringNullableFilter<"work_expreriences"> | string | null
    edu_level?: StringNullableFilter<"work_expreriences"> | string | null
    continued_study?: BoolFilter<"work_expreriences"> | boolean
    edu_faculty?: StringNullableFilter<"work_expreriences"> | string | null
    edu_dep?: StringNullableFilter<"work_expreriences"> | string | null
    edu_university?: StringNullableFilter<"work_expreriences"> | string | null
    year_start?: StringNullableFilter<"work_expreriences"> | string | null
    year_end?: StringNullableFilter<"work_expreriences"> | string | null
    edu_performance?: StringNullableFilter<"work_expreriences"> | string | null
    createdAt?: DateTimeFilter<"work_expreriences"> | Date | string
    updatedAt?: DateTimeFilter<"work_expreriences"> | Date | string
    alumniId?: StringNullableFilter<"work_expreriences"> | string | null
    alumni?: XOR<AlumniNullableScalarRelationFilter, alumniWhereInput> | null
  }, "id">

  export type work_expreriencesOrderByWithAggregationInput = {
    id?: SortOrder
    isOnTheLine?: SortOrderInput | SortOrder
    job_position?: SortOrderInput | SortOrder
    company_name?: SortOrderInput | SortOrder
    company_place?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    job_detail?: SortOrderInput | SortOrder
    job_responsibility?: SortOrderInput | SortOrder
    job_skills?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    isCurrent?: SortOrder
    isInThai?: SortOrder
    remark?: SortOrderInput | SortOrder
    edu_level?: SortOrderInput | SortOrder
    continued_study?: SortOrder
    edu_faculty?: SortOrderInput | SortOrder
    edu_dep?: SortOrderInput | SortOrder
    edu_university?: SortOrderInput | SortOrder
    year_start?: SortOrderInput | SortOrder
    year_end?: SortOrderInput | SortOrder
    edu_performance?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alumniId?: SortOrderInput | SortOrder
    _count?: work_expreriencesCountOrderByAggregateInput
    _avg?: work_expreriencesAvgOrderByAggregateInput
    _max?: work_expreriencesMaxOrderByAggregateInput
    _min?: work_expreriencesMinOrderByAggregateInput
    _sum?: work_expreriencesSumOrderByAggregateInput
  }

  export type work_expreriencesScalarWhereWithAggregatesInput = {
    AND?: work_expreriencesScalarWhereWithAggregatesInput | work_expreriencesScalarWhereWithAggregatesInput[]
    OR?: work_expreriencesScalarWhereWithAggregatesInput[]
    NOT?: work_expreriencesScalarWhereWithAggregatesInput | work_expreriencesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"work_expreriences"> | number
    isOnTheLine?: BoolNullableWithAggregatesFilter<"work_expreriences"> | boolean | null
    job_position?: StringNullableWithAggregatesFilter<"work_expreriences"> | string | null
    company_name?: StringNullableWithAggregatesFilter<"work_expreriences"> | string | null
    company_place?: StringWithAggregatesFilter<"work_expreriences"> | string
    start_date?: StringNullableWithAggregatesFilter<"work_expreriences"> | string | null
    end_date?: StringNullableWithAggregatesFilter<"work_expreriences"> | string | null
    job_detail?: StringNullableWithAggregatesFilter<"work_expreriences"> | string | null
    job_responsibility?: StringNullableWithAggregatesFilter<"work_expreriences"> | string | null
    job_skills?: StringNullableWithAggregatesFilter<"work_expreriences"> | string | null
    salary?: FloatNullableWithAggregatesFilter<"work_expreriences"> | number | null
    isCurrent?: BoolWithAggregatesFilter<"work_expreriences"> | boolean
    isInThai?: BoolWithAggregatesFilter<"work_expreriences"> | boolean
    remark?: StringNullableWithAggregatesFilter<"work_expreriences"> | string | null
    edu_level?: StringNullableWithAggregatesFilter<"work_expreriences"> | string | null
    continued_study?: BoolWithAggregatesFilter<"work_expreriences"> | boolean
    edu_faculty?: StringNullableWithAggregatesFilter<"work_expreriences"> | string | null
    edu_dep?: StringNullableWithAggregatesFilter<"work_expreriences"> | string | null
    edu_university?: StringNullableWithAggregatesFilter<"work_expreriences"> | string | null
    year_start?: StringNullableWithAggregatesFilter<"work_expreriences"> | string | null
    year_end?: StringNullableWithAggregatesFilter<"work_expreriences"> | string | null
    edu_performance?: StringNullableWithAggregatesFilter<"work_expreriences"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"work_expreriences"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"work_expreriences"> | Date | string
    alumniId?: StringNullableWithAggregatesFilter<"work_expreriences"> | string | null
  }

  export type user_privacyWhereInput = {
    AND?: user_privacyWhereInput | user_privacyWhereInput[]
    OR?: user_privacyWhereInput[]
    NOT?: user_privacyWhereInput | user_privacyWhereInput[]
    id?: IntFilter<"user_privacy"> | number
    seeEmail?: BoolFilter<"user_privacy"> | boolean
    seePhone?: BoolFilter<"user_privacy"> | boolean
    seeFacebook?: BoolFilter<"user_privacy"> | boolean
    seeAddress?: BoolFilter<"user_privacy"> | boolean
    seeWorkExprerience?: BoolNullableFilter<"user_privacy"> | boolean | null
    seeProfile?: BoolFilter<"user_privacy"> | boolean
    seeSalary?: BoolFilter<"user_privacy"> | boolean
    allowedAlumniSendEmail?: BoolFilter<"user_privacy"> | boolean
    allowedProfessorSendEmail?: BoolNullableFilter<"user_privacy"> | boolean | null
    alumniId?: StringNullableFilter<"user_privacy"> | string | null
    professorId?: StringNullableFilter<"user_privacy"> | string | null
    createtAt?: DateTimeFilter<"user_privacy"> | Date | string
    updatedAt?: DateTimeFilter<"user_privacy"> | Date | string
    alumni?: XOR<AlumniNullableScalarRelationFilter, alumniWhereInput> | null
    professor?: XOR<ProfessorNullableScalarRelationFilter, professorWhereInput> | null
  }

  export type user_privacyOrderByWithRelationInput = {
    id?: SortOrder
    seeEmail?: SortOrder
    seePhone?: SortOrder
    seeFacebook?: SortOrder
    seeAddress?: SortOrder
    seeWorkExprerience?: SortOrderInput | SortOrder
    seeProfile?: SortOrder
    seeSalary?: SortOrder
    allowedAlumniSendEmail?: SortOrder
    allowedProfessorSendEmail?: SortOrderInput | SortOrder
    alumniId?: SortOrderInput | SortOrder
    professorId?: SortOrderInput | SortOrder
    createtAt?: SortOrder
    updatedAt?: SortOrder
    alumni?: alumniOrderByWithRelationInput
    professor?: professorOrderByWithRelationInput
  }

  export type user_privacyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    alumniId?: string
    professorId?: string
    AND?: user_privacyWhereInput | user_privacyWhereInput[]
    OR?: user_privacyWhereInput[]
    NOT?: user_privacyWhereInput | user_privacyWhereInput[]
    seeEmail?: BoolFilter<"user_privacy"> | boolean
    seePhone?: BoolFilter<"user_privacy"> | boolean
    seeFacebook?: BoolFilter<"user_privacy"> | boolean
    seeAddress?: BoolFilter<"user_privacy"> | boolean
    seeWorkExprerience?: BoolNullableFilter<"user_privacy"> | boolean | null
    seeProfile?: BoolFilter<"user_privacy"> | boolean
    seeSalary?: BoolFilter<"user_privacy"> | boolean
    allowedAlumniSendEmail?: BoolFilter<"user_privacy"> | boolean
    allowedProfessorSendEmail?: BoolNullableFilter<"user_privacy"> | boolean | null
    createtAt?: DateTimeFilter<"user_privacy"> | Date | string
    updatedAt?: DateTimeFilter<"user_privacy"> | Date | string
    alumni?: XOR<AlumniNullableScalarRelationFilter, alumniWhereInput> | null
    professor?: XOR<ProfessorNullableScalarRelationFilter, professorWhereInput> | null
  }, "id" | "alumniId" | "professorId">

  export type user_privacyOrderByWithAggregationInput = {
    id?: SortOrder
    seeEmail?: SortOrder
    seePhone?: SortOrder
    seeFacebook?: SortOrder
    seeAddress?: SortOrder
    seeWorkExprerience?: SortOrderInput | SortOrder
    seeProfile?: SortOrder
    seeSalary?: SortOrder
    allowedAlumniSendEmail?: SortOrder
    allowedProfessorSendEmail?: SortOrderInput | SortOrder
    alumniId?: SortOrderInput | SortOrder
    professorId?: SortOrderInput | SortOrder
    createtAt?: SortOrder
    updatedAt?: SortOrder
    _count?: user_privacyCountOrderByAggregateInput
    _avg?: user_privacyAvgOrderByAggregateInput
    _max?: user_privacyMaxOrderByAggregateInput
    _min?: user_privacyMinOrderByAggregateInput
    _sum?: user_privacySumOrderByAggregateInput
  }

  export type user_privacyScalarWhereWithAggregatesInput = {
    AND?: user_privacyScalarWhereWithAggregatesInput | user_privacyScalarWhereWithAggregatesInput[]
    OR?: user_privacyScalarWhereWithAggregatesInput[]
    NOT?: user_privacyScalarWhereWithAggregatesInput | user_privacyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_privacy"> | number
    seeEmail?: BoolWithAggregatesFilter<"user_privacy"> | boolean
    seePhone?: BoolWithAggregatesFilter<"user_privacy"> | boolean
    seeFacebook?: BoolWithAggregatesFilter<"user_privacy"> | boolean
    seeAddress?: BoolWithAggregatesFilter<"user_privacy"> | boolean
    seeWorkExprerience?: BoolNullableWithAggregatesFilter<"user_privacy"> | boolean | null
    seeProfile?: BoolWithAggregatesFilter<"user_privacy"> | boolean
    seeSalary?: BoolWithAggregatesFilter<"user_privacy"> | boolean
    allowedAlumniSendEmail?: BoolWithAggregatesFilter<"user_privacy"> | boolean
    allowedProfessorSendEmail?: BoolNullableWithAggregatesFilter<"user_privacy"> | boolean | null
    alumniId?: StringNullableWithAggregatesFilter<"user_privacy"> | string | null
    professorId?: StringNullableWithAggregatesFilter<"user_privacy"> | string | null
    createtAt?: DateTimeWithAggregatesFilter<"user_privacy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user_privacy"> | Date | string
  }

  export type professorWhereInput = {
    AND?: professorWhereInput | professorWhereInput[]
    OR?: professorWhereInput[]
    NOT?: professorWhereInput | professorWhereInput[]
    professor_id?: StringFilter<"professor"> | string
    prefix?: StringFilter<"professor"> | string
    fname?: StringFilter<"professor"> | string
    lname?: StringFilter<"professor"> | string
    profile?: StringNullableFilter<"professor"> | string | null
    passwordHash?: StringNullableFilter<"professor"> | string | null
    academic_rank?: StringNullableFilter<"professor"> | string | null
    canUse?: BoolFilter<"professor"> | boolean
    univercity_position?: StringNullableFilter<"professor"> | string | null
    allowedAccount?: BoolFilter<"professor"> | boolean
    email?: StringNullableFilter<"professor"> | string | null
    facultyId?: IntNullableFilter<"professor"> | number | null
    departmentId?: IntNullableFilter<"professor"> | number | null
    createdAt?: DateTimeFilter<"professor"> | Date | string
    updatedAt?: DateTimeFilter<"professor"> | Date | string
    user_privacy?: XOR<User_privacyNullableScalarRelationFilter, user_privacyWhereInput> | null
    alumni_contract?: Alumni_contractListRelationFilter
  }

  export type professorOrderByWithRelationInput = {
    professor_id?: SortOrder
    prefix?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    profile?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    academic_rank?: SortOrderInput | SortOrder
    canUse?: SortOrder
    univercity_position?: SortOrderInput | SortOrder
    allowedAccount?: SortOrder
    email?: SortOrderInput | SortOrder
    facultyId?: SortOrderInput | SortOrder
    departmentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_privacy?: user_privacyOrderByWithRelationInput
    alumni_contract?: alumni_contractOrderByRelationAggregateInput
  }

  export type professorWhereUniqueInput = Prisma.AtLeast<{
    professor_id?: string
    AND?: professorWhereInput | professorWhereInput[]
    OR?: professorWhereInput[]
    NOT?: professorWhereInput | professorWhereInput[]
    prefix?: StringFilter<"professor"> | string
    fname?: StringFilter<"professor"> | string
    lname?: StringFilter<"professor"> | string
    profile?: StringNullableFilter<"professor"> | string | null
    passwordHash?: StringNullableFilter<"professor"> | string | null
    academic_rank?: StringNullableFilter<"professor"> | string | null
    canUse?: BoolFilter<"professor"> | boolean
    univercity_position?: StringNullableFilter<"professor"> | string | null
    allowedAccount?: BoolFilter<"professor"> | boolean
    email?: StringNullableFilter<"professor"> | string | null
    facultyId?: IntNullableFilter<"professor"> | number | null
    departmentId?: IntNullableFilter<"professor"> | number | null
    createdAt?: DateTimeFilter<"professor"> | Date | string
    updatedAt?: DateTimeFilter<"professor"> | Date | string
    user_privacy?: XOR<User_privacyNullableScalarRelationFilter, user_privacyWhereInput> | null
    alumni_contract?: Alumni_contractListRelationFilter
  }, "professor_id" | "professor_id">

  export type professorOrderByWithAggregationInput = {
    professor_id?: SortOrder
    prefix?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    profile?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    academic_rank?: SortOrderInput | SortOrder
    canUse?: SortOrder
    univercity_position?: SortOrderInput | SortOrder
    allowedAccount?: SortOrder
    email?: SortOrderInput | SortOrder
    facultyId?: SortOrderInput | SortOrder
    departmentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: professorCountOrderByAggregateInput
    _avg?: professorAvgOrderByAggregateInput
    _max?: professorMaxOrderByAggregateInput
    _min?: professorMinOrderByAggregateInput
    _sum?: professorSumOrderByAggregateInput
  }

  export type professorScalarWhereWithAggregatesInput = {
    AND?: professorScalarWhereWithAggregatesInput | professorScalarWhereWithAggregatesInput[]
    OR?: professorScalarWhereWithAggregatesInput[]
    NOT?: professorScalarWhereWithAggregatesInput | professorScalarWhereWithAggregatesInput[]
    professor_id?: StringWithAggregatesFilter<"professor"> | string
    prefix?: StringWithAggregatesFilter<"professor"> | string
    fname?: StringWithAggregatesFilter<"professor"> | string
    lname?: StringWithAggregatesFilter<"professor"> | string
    profile?: StringNullableWithAggregatesFilter<"professor"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"professor"> | string | null
    academic_rank?: StringNullableWithAggregatesFilter<"professor"> | string | null
    canUse?: BoolWithAggregatesFilter<"professor"> | boolean
    univercity_position?: StringNullableWithAggregatesFilter<"professor"> | string | null
    allowedAccount?: BoolWithAggregatesFilter<"professor"> | boolean
    email?: StringNullableWithAggregatesFilter<"professor"> | string | null
    facultyId?: IntNullableWithAggregatesFilter<"professor"> | number | null
    departmentId?: IntNullableWithAggregatesFilter<"professor"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"professor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"professor"> | Date | string
  }

  export type news_donatiosWhereInput = {
    AND?: news_donatiosWhereInput | news_donatiosWhereInput[]
    OR?: news_donatiosWhereInput[]
    NOT?: news_donatiosWhereInput | news_donatiosWhereInput[]
    id?: IntFilter<"news_donatios"> | number
    title?: StringFilter<"news_donatios"> | string
    short_detail?: StringFilter<"news_donatios"> | string
    thumnail?: StringFilter<"news_donatios"> | string
    detail?: StringFilter<"news_donatios"> | string
    category?: StringFilter<"news_donatios"> | string
    target_money?: IntNullableFilter<"news_donatios"> | number | null
    current_money?: IntNullableFilter<"news_donatios"> | number | null
    donate_end?: StringNullableFilter<"news_donatios"> | string | null
    isPublish?: BoolFilter<"news_donatios"> | boolean
    date?: StringFilter<"news_donatios"> | string
    month?: StringFilter<"news_donatios"> | string
    year?: StringFilter<"news_donatios"> | string
    view?: IntFilter<"news_donatios"> | number
    createdAt?: DateTimeFilter<"news_donatios"> | Date | string
    updatedAt?: DateTimeFilter<"news_donatios"> | Date | string
  }

  export type news_donatiosOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    short_detail?: SortOrder
    thumnail?: SortOrder
    detail?: SortOrder
    category?: SortOrder
    target_money?: SortOrderInput | SortOrder
    current_money?: SortOrderInput | SortOrder
    donate_end?: SortOrderInput | SortOrder
    isPublish?: SortOrder
    date?: SortOrder
    month?: SortOrder
    year?: SortOrder
    view?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type news_donatiosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: news_donatiosWhereInput | news_donatiosWhereInput[]
    OR?: news_donatiosWhereInput[]
    NOT?: news_donatiosWhereInput | news_donatiosWhereInput[]
    title?: StringFilter<"news_donatios"> | string
    short_detail?: StringFilter<"news_donatios"> | string
    thumnail?: StringFilter<"news_donatios"> | string
    detail?: StringFilter<"news_donatios"> | string
    category?: StringFilter<"news_donatios"> | string
    target_money?: IntNullableFilter<"news_donatios"> | number | null
    current_money?: IntNullableFilter<"news_donatios"> | number | null
    donate_end?: StringNullableFilter<"news_donatios"> | string | null
    isPublish?: BoolFilter<"news_donatios"> | boolean
    date?: StringFilter<"news_donatios"> | string
    month?: StringFilter<"news_donatios"> | string
    year?: StringFilter<"news_donatios"> | string
    view?: IntFilter<"news_donatios"> | number
    createdAt?: DateTimeFilter<"news_donatios"> | Date | string
    updatedAt?: DateTimeFilter<"news_donatios"> | Date | string
  }, "id">

  export type news_donatiosOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    short_detail?: SortOrder
    thumnail?: SortOrder
    detail?: SortOrder
    category?: SortOrder
    target_money?: SortOrderInput | SortOrder
    current_money?: SortOrderInput | SortOrder
    donate_end?: SortOrderInput | SortOrder
    isPublish?: SortOrder
    date?: SortOrder
    month?: SortOrder
    year?: SortOrder
    view?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: news_donatiosCountOrderByAggregateInput
    _avg?: news_donatiosAvgOrderByAggregateInput
    _max?: news_donatiosMaxOrderByAggregateInput
    _min?: news_donatiosMinOrderByAggregateInput
    _sum?: news_donatiosSumOrderByAggregateInput
  }

  export type news_donatiosScalarWhereWithAggregatesInput = {
    AND?: news_donatiosScalarWhereWithAggregatesInput | news_donatiosScalarWhereWithAggregatesInput[]
    OR?: news_donatiosScalarWhereWithAggregatesInput[]
    NOT?: news_donatiosScalarWhereWithAggregatesInput | news_donatiosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"news_donatios"> | number
    title?: StringWithAggregatesFilter<"news_donatios"> | string
    short_detail?: StringWithAggregatesFilter<"news_donatios"> | string
    thumnail?: StringWithAggregatesFilter<"news_donatios"> | string
    detail?: StringWithAggregatesFilter<"news_donatios"> | string
    category?: StringWithAggregatesFilter<"news_donatios"> | string
    target_money?: IntNullableWithAggregatesFilter<"news_donatios"> | number | null
    current_money?: IntNullableWithAggregatesFilter<"news_donatios"> | number | null
    donate_end?: StringNullableWithAggregatesFilter<"news_donatios"> | string | null
    isPublish?: BoolWithAggregatesFilter<"news_donatios"> | boolean
    date?: StringWithAggregatesFilter<"news_donatios"> | string
    month?: StringWithAggregatesFilter<"news_donatios"> | string
    year?: StringWithAggregatesFilter<"news_donatios"> | string
    view?: IntWithAggregatesFilter<"news_donatios"> | number
    createdAt?: DateTimeWithAggregatesFilter<"news_donatios"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"news_donatios"> | Date | string
  }

  export type alumniCreateInput = {
    alumni_id: string
    prefix: string
    fname: string
    lname: string
    profile?: string | null
    passwordHash?: string | null
    allowedAccount?: boolean
    canUse?: boolean
    year_start?: number | null
    year_end?: number | null
    facultyId?: number | null
    departmentId?: number | null
    edu_levelId?: number | null
    createtAt?: Date | string
    updatedAt?: Date | string
    work_expreriences?: work_expreriencesCreateNestedManyWithoutAlumniInput
    user_privacy?: user_privacyCreateNestedOneWithoutAlumniInput
    alumni_contract?: alumni_contractCreateNestedOneWithoutAlumniInput
  }

  export type alumniUncheckedCreateInput = {
    alumni_id: string
    prefix: string
    fname: string
    lname: string
    profile?: string | null
    passwordHash?: string | null
    allowedAccount?: boolean
    canUse?: boolean
    year_start?: number | null
    year_end?: number | null
    facultyId?: number | null
    departmentId?: number | null
    edu_levelId?: number | null
    createtAt?: Date | string
    updatedAt?: Date | string
    work_expreriences?: work_expreriencesUncheckedCreateNestedManyWithoutAlumniInput
    user_privacy?: user_privacyUncheckedCreateNestedOneWithoutAlumniInput
    alumni_contract?: alumni_contractUncheckedCreateNestedOneWithoutAlumniInput
  }

  export type alumniUpdateInput = {
    alumni_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    canUse?: BoolFieldUpdateOperationsInput | boolean
    year_start?: NullableIntFieldUpdateOperationsInput | number | null
    year_end?: NullableIntFieldUpdateOperationsInput | number | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    edu_levelId?: NullableIntFieldUpdateOperationsInput | number | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work_expreriences?: work_expreriencesUpdateManyWithoutAlumniNestedInput
    user_privacy?: user_privacyUpdateOneWithoutAlumniNestedInput
    alumni_contract?: alumni_contractUpdateOneWithoutAlumniNestedInput
  }

  export type alumniUncheckedUpdateInput = {
    alumni_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    canUse?: BoolFieldUpdateOperationsInput | boolean
    year_start?: NullableIntFieldUpdateOperationsInput | number | null
    year_end?: NullableIntFieldUpdateOperationsInput | number | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    edu_levelId?: NullableIntFieldUpdateOperationsInput | number | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work_expreriences?: work_expreriencesUncheckedUpdateManyWithoutAlumniNestedInput
    user_privacy?: user_privacyUncheckedUpdateOneWithoutAlumniNestedInput
    alumni_contract?: alumni_contractUncheckedUpdateOneWithoutAlumniNestedInput
  }

  export type alumniCreateManyInput = {
    alumni_id: string
    prefix: string
    fname: string
    lname: string
    profile?: string | null
    passwordHash?: string | null
    allowedAccount?: boolean
    canUse?: boolean
    year_start?: number | null
    year_end?: number | null
    facultyId?: number | null
    departmentId?: number | null
    edu_levelId?: number | null
    createtAt?: Date | string
    updatedAt?: Date | string
  }

  export type alumniUpdateManyMutationInput = {
    alumni_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    canUse?: BoolFieldUpdateOperationsInput | boolean
    year_start?: NullableIntFieldUpdateOperationsInput | number | null
    year_end?: NullableIntFieldUpdateOperationsInput | number | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    edu_levelId?: NullableIntFieldUpdateOperationsInput | number | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alumniUncheckedUpdateManyInput = {
    alumni_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    canUse?: BoolFieldUpdateOperationsInput | boolean
    year_start?: NullableIntFieldUpdateOperationsInput | number | null
    year_end?: NullableIntFieldUpdateOperationsInput | number | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    edu_levelId?: NullableIntFieldUpdateOperationsInput | number | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alumni_contractCreateInput = {
    phone1?: string | null
    phone2?: string | null
    email1?: string | null
    email2?: string | null
    facebook?: string | null
    address?: string | null
    tambon?: string | null
    amphure?: string | null
    province?: string | null
    zipcode?: string | null
    createtAt?: Date | string
    updatedAt?: Date | string
    alumni?: alumniCreateNestedOneWithoutAlumni_contractInput
    professor?: professorCreateNestedOneWithoutAlumni_contractInput
  }

  export type alumni_contractUncheckedCreateInput = {
    id?: number
    alumniId?: string | null
    phone1?: string | null
    phone2?: string | null
    email1?: string | null
    email2?: string | null
    facebook?: string | null
    address?: string | null
    tambon?: string | null
    amphure?: string | null
    province?: string | null
    zipcode?: string | null
    createtAt?: Date | string
    updatedAt?: Date | string
    professorProfessor_id?: string | null
  }

  export type alumni_contractUpdateInput = {
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    email1?: NullableStringFieldUpdateOperationsInput | string | null
    email2?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tambon?: NullableStringFieldUpdateOperationsInput | string | null
    amphure?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alumni?: alumniUpdateOneWithoutAlumni_contractNestedInput
    professor?: professorUpdateOneWithoutAlumni_contractNestedInput
  }

  export type alumni_contractUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alumniId?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    email1?: NullableStringFieldUpdateOperationsInput | string | null
    email2?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tambon?: NullableStringFieldUpdateOperationsInput | string | null
    amphure?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professorProfessor_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type alumni_contractCreateManyInput = {
    id?: number
    alumniId?: string | null
    phone1?: string | null
    phone2?: string | null
    email1?: string | null
    email2?: string | null
    facebook?: string | null
    address?: string | null
    tambon?: string | null
    amphure?: string | null
    province?: string | null
    zipcode?: string | null
    createtAt?: Date | string
    updatedAt?: Date | string
    professorProfessor_id?: string | null
  }

  export type alumni_contractUpdateManyMutationInput = {
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    email1?: NullableStringFieldUpdateOperationsInput | string | null
    email2?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tambon?: NullableStringFieldUpdateOperationsInput | string | null
    amphure?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alumni_contractUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alumniId?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    email1?: NullableStringFieldUpdateOperationsInput | string | null
    email2?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tambon?: NullableStringFieldUpdateOperationsInput | string | null
    amphure?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professorProfessor_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type work_expreriencesCreateInput = {
    isOnTheLine?: boolean | null
    job_position?: string | null
    company_name?: string | null
    company_place: string
    start_date?: string | null
    end_date?: string | null
    job_detail?: string | null
    job_responsibility?: string | null
    job_skills?: string | null
    salary?: number | null
    isCurrent?: boolean
    isInThai?: boolean
    remark?: string | null
    edu_level?: string | null
    continued_study?: boolean
    edu_faculty?: string | null
    edu_dep?: string | null
    edu_university?: string | null
    year_start?: string | null
    year_end?: string | null
    edu_performance?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alumni?: alumniCreateNestedOneWithoutWork_expreriencesInput
  }

  export type work_expreriencesUncheckedCreateInput = {
    id?: number
    isOnTheLine?: boolean | null
    job_position?: string | null
    company_name?: string | null
    company_place: string
    start_date?: string | null
    end_date?: string | null
    job_detail?: string | null
    job_responsibility?: string | null
    job_skills?: string | null
    salary?: number | null
    isCurrent?: boolean
    isInThai?: boolean
    remark?: string | null
    edu_level?: string | null
    continued_study?: boolean
    edu_faculty?: string | null
    edu_dep?: string | null
    edu_university?: string | null
    year_start?: string | null
    year_end?: string | null
    edu_performance?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alumniId?: string | null
  }

  export type work_expreriencesUpdateInput = {
    isOnTheLine?: NullableBoolFieldUpdateOperationsInput | boolean | null
    job_position?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_place?: StringFieldUpdateOperationsInput | string
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    job_detail?: NullableStringFieldUpdateOperationsInput | string | null
    job_responsibility?: NullableStringFieldUpdateOperationsInput | string | null
    job_skills?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    isInThai?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    edu_level?: NullableStringFieldUpdateOperationsInput | string | null
    continued_study?: BoolFieldUpdateOperationsInput | boolean
    edu_faculty?: NullableStringFieldUpdateOperationsInput | string | null
    edu_dep?: NullableStringFieldUpdateOperationsInput | string | null
    edu_university?: NullableStringFieldUpdateOperationsInput | string | null
    year_start?: NullableStringFieldUpdateOperationsInput | string | null
    year_end?: NullableStringFieldUpdateOperationsInput | string | null
    edu_performance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alumni?: alumniUpdateOneWithoutWork_expreriencesNestedInput
  }

  export type work_expreriencesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isOnTheLine?: NullableBoolFieldUpdateOperationsInput | boolean | null
    job_position?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_place?: StringFieldUpdateOperationsInput | string
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    job_detail?: NullableStringFieldUpdateOperationsInput | string | null
    job_responsibility?: NullableStringFieldUpdateOperationsInput | string | null
    job_skills?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    isInThai?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    edu_level?: NullableStringFieldUpdateOperationsInput | string | null
    continued_study?: BoolFieldUpdateOperationsInput | boolean
    edu_faculty?: NullableStringFieldUpdateOperationsInput | string | null
    edu_dep?: NullableStringFieldUpdateOperationsInput | string | null
    edu_university?: NullableStringFieldUpdateOperationsInput | string | null
    year_start?: NullableStringFieldUpdateOperationsInput | string | null
    year_end?: NullableStringFieldUpdateOperationsInput | string | null
    edu_performance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alumniId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type work_expreriencesCreateManyInput = {
    id?: number
    isOnTheLine?: boolean | null
    job_position?: string | null
    company_name?: string | null
    company_place: string
    start_date?: string | null
    end_date?: string | null
    job_detail?: string | null
    job_responsibility?: string | null
    job_skills?: string | null
    salary?: number | null
    isCurrent?: boolean
    isInThai?: boolean
    remark?: string | null
    edu_level?: string | null
    continued_study?: boolean
    edu_faculty?: string | null
    edu_dep?: string | null
    edu_university?: string | null
    year_start?: string | null
    year_end?: string | null
    edu_performance?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alumniId?: string | null
  }

  export type work_expreriencesUpdateManyMutationInput = {
    isOnTheLine?: NullableBoolFieldUpdateOperationsInput | boolean | null
    job_position?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_place?: StringFieldUpdateOperationsInput | string
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    job_detail?: NullableStringFieldUpdateOperationsInput | string | null
    job_responsibility?: NullableStringFieldUpdateOperationsInput | string | null
    job_skills?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    isInThai?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    edu_level?: NullableStringFieldUpdateOperationsInput | string | null
    continued_study?: BoolFieldUpdateOperationsInput | boolean
    edu_faculty?: NullableStringFieldUpdateOperationsInput | string | null
    edu_dep?: NullableStringFieldUpdateOperationsInput | string | null
    edu_university?: NullableStringFieldUpdateOperationsInput | string | null
    year_start?: NullableStringFieldUpdateOperationsInput | string | null
    year_end?: NullableStringFieldUpdateOperationsInput | string | null
    edu_performance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type work_expreriencesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isOnTheLine?: NullableBoolFieldUpdateOperationsInput | boolean | null
    job_position?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_place?: StringFieldUpdateOperationsInput | string
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    job_detail?: NullableStringFieldUpdateOperationsInput | string | null
    job_responsibility?: NullableStringFieldUpdateOperationsInput | string | null
    job_skills?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    isInThai?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    edu_level?: NullableStringFieldUpdateOperationsInput | string | null
    continued_study?: BoolFieldUpdateOperationsInput | boolean
    edu_faculty?: NullableStringFieldUpdateOperationsInput | string | null
    edu_dep?: NullableStringFieldUpdateOperationsInput | string | null
    edu_university?: NullableStringFieldUpdateOperationsInput | string | null
    year_start?: NullableStringFieldUpdateOperationsInput | string | null
    year_end?: NullableStringFieldUpdateOperationsInput | string | null
    edu_performance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alumniId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_privacyCreateInput = {
    seeEmail?: boolean
    seePhone?: boolean
    seeFacebook?: boolean
    seeAddress?: boolean
    seeWorkExprerience?: boolean | null
    seeProfile?: boolean
    seeSalary?: boolean
    allowedAlumniSendEmail?: boolean
    allowedProfessorSendEmail?: boolean | null
    createtAt?: Date | string
    updatedAt?: Date | string
    alumni?: alumniCreateNestedOneWithoutUser_privacyInput
    professor?: professorCreateNestedOneWithoutUser_privacyInput
  }

  export type user_privacyUncheckedCreateInput = {
    id?: number
    seeEmail?: boolean
    seePhone?: boolean
    seeFacebook?: boolean
    seeAddress?: boolean
    seeWorkExprerience?: boolean | null
    seeProfile?: boolean
    seeSalary?: boolean
    allowedAlumniSendEmail?: boolean
    allowedProfessorSendEmail?: boolean | null
    alumniId?: string | null
    professorId?: string | null
    createtAt?: Date | string
    updatedAt?: Date | string
  }

  export type user_privacyUpdateInput = {
    seeEmail?: BoolFieldUpdateOperationsInput | boolean
    seePhone?: BoolFieldUpdateOperationsInput | boolean
    seeFacebook?: BoolFieldUpdateOperationsInput | boolean
    seeAddress?: BoolFieldUpdateOperationsInput | boolean
    seeWorkExprerience?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seeProfile?: BoolFieldUpdateOperationsInput | boolean
    seeSalary?: BoolFieldUpdateOperationsInput | boolean
    allowedAlumniSendEmail?: BoolFieldUpdateOperationsInput | boolean
    allowedProfessorSendEmail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alumni?: alumniUpdateOneWithoutUser_privacyNestedInput
    professor?: professorUpdateOneWithoutUser_privacyNestedInput
  }

  export type user_privacyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seeEmail?: BoolFieldUpdateOperationsInput | boolean
    seePhone?: BoolFieldUpdateOperationsInput | boolean
    seeFacebook?: BoolFieldUpdateOperationsInput | boolean
    seeAddress?: BoolFieldUpdateOperationsInput | boolean
    seeWorkExprerience?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seeProfile?: BoolFieldUpdateOperationsInput | boolean
    seeSalary?: BoolFieldUpdateOperationsInput | boolean
    allowedAlumniSendEmail?: BoolFieldUpdateOperationsInput | boolean
    allowedProfessorSendEmail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alumniId?: NullableStringFieldUpdateOperationsInput | string | null
    professorId?: NullableStringFieldUpdateOperationsInput | string | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_privacyCreateManyInput = {
    id?: number
    seeEmail?: boolean
    seePhone?: boolean
    seeFacebook?: boolean
    seeAddress?: boolean
    seeWorkExprerience?: boolean | null
    seeProfile?: boolean
    seeSalary?: boolean
    allowedAlumniSendEmail?: boolean
    allowedProfessorSendEmail?: boolean | null
    alumniId?: string | null
    professorId?: string | null
    createtAt?: Date | string
    updatedAt?: Date | string
  }

  export type user_privacyUpdateManyMutationInput = {
    seeEmail?: BoolFieldUpdateOperationsInput | boolean
    seePhone?: BoolFieldUpdateOperationsInput | boolean
    seeFacebook?: BoolFieldUpdateOperationsInput | boolean
    seeAddress?: BoolFieldUpdateOperationsInput | boolean
    seeWorkExprerience?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seeProfile?: BoolFieldUpdateOperationsInput | boolean
    seeSalary?: BoolFieldUpdateOperationsInput | boolean
    allowedAlumniSendEmail?: BoolFieldUpdateOperationsInput | boolean
    allowedProfessorSendEmail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_privacyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seeEmail?: BoolFieldUpdateOperationsInput | boolean
    seePhone?: BoolFieldUpdateOperationsInput | boolean
    seeFacebook?: BoolFieldUpdateOperationsInput | boolean
    seeAddress?: BoolFieldUpdateOperationsInput | boolean
    seeWorkExprerience?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seeProfile?: BoolFieldUpdateOperationsInput | boolean
    seeSalary?: BoolFieldUpdateOperationsInput | boolean
    allowedAlumniSendEmail?: BoolFieldUpdateOperationsInput | boolean
    allowedProfessorSendEmail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alumniId?: NullableStringFieldUpdateOperationsInput | string | null
    professorId?: NullableStringFieldUpdateOperationsInput | string | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type professorCreateInput = {
    professor_id: string
    prefix: string
    fname: string
    lname: string
    profile?: string | null
    passwordHash?: string | null
    academic_rank?: string | null
    canUse?: boolean
    univercity_position?: string | null
    allowedAccount?: boolean
    email?: string | null
    facultyId?: number | null
    departmentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user_privacy?: user_privacyCreateNestedOneWithoutProfessorInput
    alumni_contract?: alumni_contractCreateNestedManyWithoutProfessorInput
  }

  export type professorUncheckedCreateInput = {
    professor_id: string
    prefix: string
    fname: string
    lname: string
    profile?: string | null
    passwordHash?: string | null
    academic_rank?: string | null
    canUse?: boolean
    univercity_position?: string | null
    allowedAccount?: boolean
    email?: string | null
    facultyId?: number | null
    departmentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user_privacy?: user_privacyUncheckedCreateNestedOneWithoutProfessorInput
    alumni_contract?: alumni_contractUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type professorUpdateInput = {
    professor_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    academic_rank?: NullableStringFieldUpdateOperationsInput | string | null
    canUse?: BoolFieldUpdateOperationsInput | boolean
    univercity_position?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_privacy?: user_privacyUpdateOneWithoutProfessorNestedInput
    alumni_contract?: alumni_contractUpdateManyWithoutProfessorNestedInput
  }

  export type professorUncheckedUpdateInput = {
    professor_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    academic_rank?: NullableStringFieldUpdateOperationsInput | string | null
    canUse?: BoolFieldUpdateOperationsInput | boolean
    univercity_position?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_privacy?: user_privacyUncheckedUpdateOneWithoutProfessorNestedInput
    alumni_contract?: alumni_contractUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type professorCreateManyInput = {
    professor_id: string
    prefix: string
    fname: string
    lname: string
    profile?: string | null
    passwordHash?: string | null
    academic_rank?: string | null
    canUse?: boolean
    univercity_position?: string | null
    allowedAccount?: boolean
    email?: string | null
    facultyId?: number | null
    departmentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type professorUpdateManyMutationInput = {
    professor_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    academic_rank?: NullableStringFieldUpdateOperationsInput | string | null
    canUse?: BoolFieldUpdateOperationsInput | boolean
    univercity_position?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type professorUncheckedUpdateManyInput = {
    professor_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    academic_rank?: NullableStringFieldUpdateOperationsInput | string | null
    canUse?: BoolFieldUpdateOperationsInput | boolean
    univercity_position?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type news_donatiosCreateInput = {
    title: string
    short_detail: string
    thumnail: string
    detail: string
    category: string
    target_money?: number | null
    current_money?: number | null
    donate_end?: string | null
    isPublish: boolean
    date: string
    month: string
    year: string
    view: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type news_donatiosUncheckedCreateInput = {
    id?: number
    title: string
    short_detail: string
    thumnail: string
    detail: string
    category: string
    target_money?: number | null
    current_money?: number | null
    donate_end?: string | null
    isPublish: boolean
    date: string
    month: string
    year: string
    view: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type news_donatiosUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    short_detail?: StringFieldUpdateOperationsInput | string
    thumnail?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    target_money?: NullableIntFieldUpdateOperationsInput | number | null
    current_money?: NullableIntFieldUpdateOperationsInput | number | null
    donate_end?: NullableStringFieldUpdateOperationsInput | string | null
    isPublish?: BoolFieldUpdateOperationsInput | boolean
    date?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type news_donatiosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    short_detail?: StringFieldUpdateOperationsInput | string
    thumnail?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    target_money?: NullableIntFieldUpdateOperationsInput | number | null
    current_money?: NullableIntFieldUpdateOperationsInput | number | null
    donate_end?: NullableStringFieldUpdateOperationsInput | string | null
    isPublish?: BoolFieldUpdateOperationsInput | boolean
    date?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type news_donatiosCreateManyInput = {
    id?: number
    title: string
    short_detail: string
    thumnail: string
    detail: string
    category: string
    target_money?: number | null
    current_money?: number | null
    donate_end?: string | null
    isPublish: boolean
    date: string
    month: string
    year: string
    view: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type news_donatiosUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    short_detail?: StringFieldUpdateOperationsInput | string
    thumnail?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    target_money?: NullableIntFieldUpdateOperationsInput | number | null
    current_money?: NullableIntFieldUpdateOperationsInput | number | null
    donate_end?: NullableStringFieldUpdateOperationsInput | string | null
    isPublish?: BoolFieldUpdateOperationsInput | boolean
    date?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type news_donatiosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    short_detail?: StringFieldUpdateOperationsInput | string
    thumnail?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    target_money?: NullableIntFieldUpdateOperationsInput | number | null
    current_money?: NullableIntFieldUpdateOperationsInput | number | null
    donate_end?: NullableStringFieldUpdateOperationsInput | string | null
    isPublish?: BoolFieldUpdateOperationsInput | boolean
    date?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    view?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type Work_expreriencesListRelationFilter = {
    every?: work_expreriencesWhereInput
    some?: work_expreriencesWhereInput
    none?: work_expreriencesWhereInput
  }

  export type User_privacyNullableScalarRelationFilter = {
    is?: user_privacyWhereInput | null
    isNot?: user_privacyWhereInput | null
  }

  export type Alumni_contractNullableScalarRelationFilter = {
    is?: alumni_contractWhereInput | null
    isNot?: alumni_contractWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type work_expreriencesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type alumniCountOrderByAggregateInput = {
    alumni_id?: SortOrder
    prefix?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    profile?: SortOrder
    passwordHash?: SortOrder
    allowedAccount?: SortOrder
    canUse?: SortOrder
    year_start?: SortOrder
    year_end?: SortOrder
    facultyId?: SortOrder
    departmentId?: SortOrder
    edu_levelId?: SortOrder
    createtAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type alumniAvgOrderByAggregateInput = {
    year_start?: SortOrder
    year_end?: SortOrder
    facultyId?: SortOrder
    departmentId?: SortOrder
    edu_levelId?: SortOrder
  }

  export type alumniMaxOrderByAggregateInput = {
    alumni_id?: SortOrder
    prefix?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    profile?: SortOrder
    passwordHash?: SortOrder
    allowedAccount?: SortOrder
    canUse?: SortOrder
    year_start?: SortOrder
    year_end?: SortOrder
    facultyId?: SortOrder
    departmentId?: SortOrder
    edu_levelId?: SortOrder
    createtAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type alumniMinOrderByAggregateInput = {
    alumni_id?: SortOrder
    prefix?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    profile?: SortOrder
    passwordHash?: SortOrder
    allowedAccount?: SortOrder
    canUse?: SortOrder
    year_start?: SortOrder
    year_end?: SortOrder
    facultyId?: SortOrder
    departmentId?: SortOrder
    edu_levelId?: SortOrder
    createtAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type alumniSumOrderByAggregateInput = {
    year_start?: SortOrder
    year_end?: SortOrder
    facultyId?: SortOrder
    departmentId?: SortOrder
    edu_levelId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type AlumniNullableScalarRelationFilter = {
    is?: alumniWhereInput | null
    isNot?: alumniWhereInput | null
  }

  export type ProfessorNullableScalarRelationFilter = {
    is?: professorWhereInput | null
    isNot?: professorWhereInput | null
  }

  export type alumni_contractCountOrderByAggregateInput = {
    id?: SortOrder
    alumniId?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    email1?: SortOrder
    email2?: SortOrder
    facebook?: SortOrder
    address?: SortOrder
    tambon?: SortOrder
    amphure?: SortOrder
    province?: SortOrder
    zipcode?: SortOrder
    createtAt?: SortOrder
    updatedAt?: SortOrder
    professorProfessor_id?: SortOrder
  }

  export type alumni_contractAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type alumni_contractMaxOrderByAggregateInput = {
    id?: SortOrder
    alumniId?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    email1?: SortOrder
    email2?: SortOrder
    facebook?: SortOrder
    address?: SortOrder
    tambon?: SortOrder
    amphure?: SortOrder
    province?: SortOrder
    zipcode?: SortOrder
    createtAt?: SortOrder
    updatedAt?: SortOrder
    professorProfessor_id?: SortOrder
  }

  export type alumni_contractMinOrderByAggregateInput = {
    id?: SortOrder
    alumniId?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    email1?: SortOrder
    email2?: SortOrder
    facebook?: SortOrder
    address?: SortOrder
    tambon?: SortOrder
    amphure?: SortOrder
    province?: SortOrder
    zipcode?: SortOrder
    createtAt?: SortOrder
    updatedAt?: SortOrder
    professorProfessor_id?: SortOrder
  }

  export type alumni_contractSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type work_expreriencesCountOrderByAggregateInput = {
    id?: SortOrder
    isOnTheLine?: SortOrder
    job_position?: SortOrder
    company_name?: SortOrder
    company_place?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    job_detail?: SortOrder
    job_responsibility?: SortOrder
    job_skills?: SortOrder
    salary?: SortOrder
    isCurrent?: SortOrder
    isInThai?: SortOrder
    remark?: SortOrder
    edu_level?: SortOrder
    continued_study?: SortOrder
    edu_faculty?: SortOrder
    edu_dep?: SortOrder
    edu_university?: SortOrder
    year_start?: SortOrder
    year_end?: SortOrder
    edu_performance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alumniId?: SortOrder
  }

  export type work_expreriencesAvgOrderByAggregateInput = {
    id?: SortOrder
    salary?: SortOrder
  }

  export type work_expreriencesMaxOrderByAggregateInput = {
    id?: SortOrder
    isOnTheLine?: SortOrder
    job_position?: SortOrder
    company_name?: SortOrder
    company_place?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    job_detail?: SortOrder
    job_responsibility?: SortOrder
    job_skills?: SortOrder
    salary?: SortOrder
    isCurrent?: SortOrder
    isInThai?: SortOrder
    remark?: SortOrder
    edu_level?: SortOrder
    continued_study?: SortOrder
    edu_faculty?: SortOrder
    edu_dep?: SortOrder
    edu_university?: SortOrder
    year_start?: SortOrder
    year_end?: SortOrder
    edu_performance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alumniId?: SortOrder
  }

  export type work_expreriencesMinOrderByAggregateInput = {
    id?: SortOrder
    isOnTheLine?: SortOrder
    job_position?: SortOrder
    company_name?: SortOrder
    company_place?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    job_detail?: SortOrder
    job_responsibility?: SortOrder
    job_skills?: SortOrder
    salary?: SortOrder
    isCurrent?: SortOrder
    isInThai?: SortOrder
    remark?: SortOrder
    edu_level?: SortOrder
    continued_study?: SortOrder
    edu_faculty?: SortOrder
    edu_dep?: SortOrder
    edu_university?: SortOrder
    year_start?: SortOrder
    year_end?: SortOrder
    edu_performance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alumniId?: SortOrder
  }

  export type work_expreriencesSumOrderByAggregateInput = {
    id?: SortOrder
    salary?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type user_privacyCountOrderByAggregateInput = {
    id?: SortOrder
    seeEmail?: SortOrder
    seePhone?: SortOrder
    seeFacebook?: SortOrder
    seeAddress?: SortOrder
    seeWorkExprerience?: SortOrder
    seeProfile?: SortOrder
    seeSalary?: SortOrder
    allowedAlumniSendEmail?: SortOrder
    allowedProfessorSendEmail?: SortOrder
    alumniId?: SortOrder
    professorId?: SortOrder
    createtAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type user_privacyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type user_privacyMaxOrderByAggregateInput = {
    id?: SortOrder
    seeEmail?: SortOrder
    seePhone?: SortOrder
    seeFacebook?: SortOrder
    seeAddress?: SortOrder
    seeWorkExprerience?: SortOrder
    seeProfile?: SortOrder
    seeSalary?: SortOrder
    allowedAlumniSendEmail?: SortOrder
    allowedProfessorSendEmail?: SortOrder
    alumniId?: SortOrder
    professorId?: SortOrder
    createtAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type user_privacyMinOrderByAggregateInput = {
    id?: SortOrder
    seeEmail?: SortOrder
    seePhone?: SortOrder
    seeFacebook?: SortOrder
    seeAddress?: SortOrder
    seeWorkExprerience?: SortOrder
    seeProfile?: SortOrder
    seeSalary?: SortOrder
    allowedAlumniSendEmail?: SortOrder
    allowedProfessorSendEmail?: SortOrder
    alumniId?: SortOrder
    professorId?: SortOrder
    createtAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type user_privacySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Alumni_contractListRelationFilter = {
    every?: alumni_contractWhereInput
    some?: alumni_contractWhereInput
    none?: alumni_contractWhereInput
  }

  export type alumni_contractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type professorCountOrderByAggregateInput = {
    professor_id?: SortOrder
    prefix?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    profile?: SortOrder
    passwordHash?: SortOrder
    academic_rank?: SortOrder
    canUse?: SortOrder
    univercity_position?: SortOrder
    allowedAccount?: SortOrder
    email?: SortOrder
    facultyId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type professorAvgOrderByAggregateInput = {
    facultyId?: SortOrder
    departmentId?: SortOrder
  }

  export type professorMaxOrderByAggregateInput = {
    professor_id?: SortOrder
    prefix?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    profile?: SortOrder
    passwordHash?: SortOrder
    academic_rank?: SortOrder
    canUse?: SortOrder
    univercity_position?: SortOrder
    allowedAccount?: SortOrder
    email?: SortOrder
    facultyId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type professorMinOrderByAggregateInput = {
    professor_id?: SortOrder
    prefix?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    profile?: SortOrder
    passwordHash?: SortOrder
    academic_rank?: SortOrder
    canUse?: SortOrder
    univercity_position?: SortOrder
    allowedAccount?: SortOrder
    email?: SortOrder
    facultyId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type professorSumOrderByAggregateInput = {
    facultyId?: SortOrder
    departmentId?: SortOrder
  }

  export type news_donatiosCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    short_detail?: SortOrder
    thumnail?: SortOrder
    detail?: SortOrder
    category?: SortOrder
    target_money?: SortOrder
    current_money?: SortOrder
    donate_end?: SortOrder
    isPublish?: SortOrder
    date?: SortOrder
    month?: SortOrder
    year?: SortOrder
    view?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type news_donatiosAvgOrderByAggregateInput = {
    id?: SortOrder
    target_money?: SortOrder
    current_money?: SortOrder
    view?: SortOrder
  }

  export type news_donatiosMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    short_detail?: SortOrder
    thumnail?: SortOrder
    detail?: SortOrder
    category?: SortOrder
    target_money?: SortOrder
    current_money?: SortOrder
    donate_end?: SortOrder
    isPublish?: SortOrder
    date?: SortOrder
    month?: SortOrder
    year?: SortOrder
    view?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type news_donatiosMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    short_detail?: SortOrder
    thumnail?: SortOrder
    detail?: SortOrder
    category?: SortOrder
    target_money?: SortOrder
    current_money?: SortOrder
    donate_end?: SortOrder
    isPublish?: SortOrder
    date?: SortOrder
    month?: SortOrder
    year?: SortOrder
    view?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type news_donatiosSumOrderByAggregateInput = {
    id?: SortOrder
    target_money?: SortOrder
    current_money?: SortOrder
    view?: SortOrder
  }

  export type work_expreriencesCreateNestedManyWithoutAlumniInput = {
    create?: XOR<work_expreriencesCreateWithoutAlumniInput, work_expreriencesUncheckedCreateWithoutAlumniInput> | work_expreriencesCreateWithoutAlumniInput[] | work_expreriencesUncheckedCreateWithoutAlumniInput[]
    connectOrCreate?: work_expreriencesCreateOrConnectWithoutAlumniInput | work_expreriencesCreateOrConnectWithoutAlumniInput[]
    createMany?: work_expreriencesCreateManyAlumniInputEnvelope
    connect?: work_expreriencesWhereUniqueInput | work_expreriencesWhereUniqueInput[]
  }

  export type user_privacyCreateNestedOneWithoutAlumniInput = {
    create?: XOR<user_privacyCreateWithoutAlumniInput, user_privacyUncheckedCreateWithoutAlumniInput>
    connectOrCreate?: user_privacyCreateOrConnectWithoutAlumniInput
    connect?: user_privacyWhereUniqueInput
  }

  export type alumni_contractCreateNestedOneWithoutAlumniInput = {
    create?: XOR<alumni_contractCreateWithoutAlumniInput, alumni_contractUncheckedCreateWithoutAlumniInput>
    connectOrCreate?: alumni_contractCreateOrConnectWithoutAlumniInput
    connect?: alumni_contractWhereUniqueInput
  }

  export type work_expreriencesUncheckedCreateNestedManyWithoutAlumniInput = {
    create?: XOR<work_expreriencesCreateWithoutAlumniInput, work_expreriencesUncheckedCreateWithoutAlumniInput> | work_expreriencesCreateWithoutAlumniInput[] | work_expreriencesUncheckedCreateWithoutAlumniInput[]
    connectOrCreate?: work_expreriencesCreateOrConnectWithoutAlumniInput | work_expreriencesCreateOrConnectWithoutAlumniInput[]
    createMany?: work_expreriencesCreateManyAlumniInputEnvelope
    connect?: work_expreriencesWhereUniqueInput | work_expreriencesWhereUniqueInput[]
  }

  export type user_privacyUncheckedCreateNestedOneWithoutAlumniInput = {
    create?: XOR<user_privacyCreateWithoutAlumniInput, user_privacyUncheckedCreateWithoutAlumniInput>
    connectOrCreate?: user_privacyCreateOrConnectWithoutAlumniInput
    connect?: user_privacyWhereUniqueInput
  }

  export type alumni_contractUncheckedCreateNestedOneWithoutAlumniInput = {
    create?: XOR<alumni_contractCreateWithoutAlumniInput, alumni_contractUncheckedCreateWithoutAlumniInput>
    connectOrCreate?: alumni_contractCreateOrConnectWithoutAlumniInput
    connect?: alumni_contractWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type work_expreriencesUpdateManyWithoutAlumniNestedInput = {
    create?: XOR<work_expreriencesCreateWithoutAlumniInput, work_expreriencesUncheckedCreateWithoutAlumniInput> | work_expreriencesCreateWithoutAlumniInput[] | work_expreriencesUncheckedCreateWithoutAlumniInput[]
    connectOrCreate?: work_expreriencesCreateOrConnectWithoutAlumniInput | work_expreriencesCreateOrConnectWithoutAlumniInput[]
    upsert?: work_expreriencesUpsertWithWhereUniqueWithoutAlumniInput | work_expreriencesUpsertWithWhereUniqueWithoutAlumniInput[]
    createMany?: work_expreriencesCreateManyAlumniInputEnvelope
    set?: work_expreriencesWhereUniqueInput | work_expreriencesWhereUniqueInput[]
    disconnect?: work_expreriencesWhereUniqueInput | work_expreriencesWhereUniqueInput[]
    delete?: work_expreriencesWhereUniqueInput | work_expreriencesWhereUniqueInput[]
    connect?: work_expreriencesWhereUniqueInput | work_expreriencesWhereUniqueInput[]
    update?: work_expreriencesUpdateWithWhereUniqueWithoutAlumniInput | work_expreriencesUpdateWithWhereUniqueWithoutAlumniInput[]
    updateMany?: work_expreriencesUpdateManyWithWhereWithoutAlumniInput | work_expreriencesUpdateManyWithWhereWithoutAlumniInput[]
    deleteMany?: work_expreriencesScalarWhereInput | work_expreriencesScalarWhereInput[]
  }

  export type user_privacyUpdateOneWithoutAlumniNestedInput = {
    create?: XOR<user_privacyCreateWithoutAlumniInput, user_privacyUncheckedCreateWithoutAlumniInput>
    connectOrCreate?: user_privacyCreateOrConnectWithoutAlumniInput
    upsert?: user_privacyUpsertWithoutAlumniInput
    disconnect?: user_privacyWhereInput | boolean
    delete?: user_privacyWhereInput | boolean
    connect?: user_privacyWhereUniqueInput
    update?: XOR<XOR<user_privacyUpdateToOneWithWhereWithoutAlumniInput, user_privacyUpdateWithoutAlumniInput>, user_privacyUncheckedUpdateWithoutAlumniInput>
  }

  export type alumni_contractUpdateOneWithoutAlumniNestedInput = {
    create?: XOR<alumni_contractCreateWithoutAlumniInput, alumni_contractUncheckedCreateWithoutAlumniInput>
    connectOrCreate?: alumni_contractCreateOrConnectWithoutAlumniInput
    upsert?: alumni_contractUpsertWithoutAlumniInput
    disconnect?: alumni_contractWhereInput | boolean
    delete?: alumni_contractWhereInput | boolean
    connect?: alumni_contractWhereUniqueInput
    update?: XOR<XOR<alumni_contractUpdateToOneWithWhereWithoutAlumniInput, alumni_contractUpdateWithoutAlumniInput>, alumni_contractUncheckedUpdateWithoutAlumniInput>
  }

  export type work_expreriencesUncheckedUpdateManyWithoutAlumniNestedInput = {
    create?: XOR<work_expreriencesCreateWithoutAlumniInput, work_expreriencesUncheckedCreateWithoutAlumniInput> | work_expreriencesCreateWithoutAlumniInput[] | work_expreriencesUncheckedCreateWithoutAlumniInput[]
    connectOrCreate?: work_expreriencesCreateOrConnectWithoutAlumniInput | work_expreriencesCreateOrConnectWithoutAlumniInput[]
    upsert?: work_expreriencesUpsertWithWhereUniqueWithoutAlumniInput | work_expreriencesUpsertWithWhereUniqueWithoutAlumniInput[]
    createMany?: work_expreriencesCreateManyAlumniInputEnvelope
    set?: work_expreriencesWhereUniqueInput | work_expreriencesWhereUniqueInput[]
    disconnect?: work_expreriencesWhereUniqueInput | work_expreriencesWhereUniqueInput[]
    delete?: work_expreriencesWhereUniqueInput | work_expreriencesWhereUniqueInput[]
    connect?: work_expreriencesWhereUniqueInput | work_expreriencesWhereUniqueInput[]
    update?: work_expreriencesUpdateWithWhereUniqueWithoutAlumniInput | work_expreriencesUpdateWithWhereUniqueWithoutAlumniInput[]
    updateMany?: work_expreriencesUpdateManyWithWhereWithoutAlumniInput | work_expreriencesUpdateManyWithWhereWithoutAlumniInput[]
    deleteMany?: work_expreriencesScalarWhereInput | work_expreriencesScalarWhereInput[]
  }

  export type user_privacyUncheckedUpdateOneWithoutAlumniNestedInput = {
    create?: XOR<user_privacyCreateWithoutAlumniInput, user_privacyUncheckedCreateWithoutAlumniInput>
    connectOrCreate?: user_privacyCreateOrConnectWithoutAlumniInput
    upsert?: user_privacyUpsertWithoutAlumniInput
    disconnect?: user_privacyWhereInput | boolean
    delete?: user_privacyWhereInput | boolean
    connect?: user_privacyWhereUniqueInput
    update?: XOR<XOR<user_privacyUpdateToOneWithWhereWithoutAlumniInput, user_privacyUpdateWithoutAlumniInput>, user_privacyUncheckedUpdateWithoutAlumniInput>
  }

  export type alumni_contractUncheckedUpdateOneWithoutAlumniNestedInput = {
    create?: XOR<alumni_contractCreateWithoutAlumniInput, alumni_contractUncheckedCreateWithoutAlumniInput>
    connectOrCreate?: alumni_contractCreateOrConnectWithoutAlumniInput
    upsert?: alumni_contractUpsertWithoutAlumniInput
    disconnect?: alumni_contractWhereInput | boolean
    delete?: alumni_contractWhereInput | boolean
    connect?: alumni_contractWhereUniqueInput
    update?: XOR<XOR<alumni_contractUpdateToOneWithWhereWithoutAlumniInput, alumni_contractUpdateWithoutAlumniInput>, alumni_contractUncheckedUpdateWithoutAlumniInput>
  }

  export type alumniCreateNestedOneWithoutAlumni_contractInput = {
    create?: XOR<alumniCreateWithoutAlumni_contractInput, alumniUncheckedCreateWithoutAlumni_contractInput>
    connectOrCreate?: alumniCreateOrConnectWithoutAlumni_contractInput
    connect?: alumniWhereUniqueInput
  }

  export type professorCreateNestedOneWithoutAlumni_contractInput = {
    create?: XOR<professorCreateWithoutAlumni_contractInput, professorUncheckedCreateWithoutAlumni_contractInput>
    connectOrCreate?: professorCreateOrConnectWithoutAlumni_contractInput
    connect?: professorWhereUniqueInput
  }

  export type alumniUpdateOneWithoutAlumni_contractNestedInput = {
    create?: XOR<alumniCreateWithoutAlumni_contractInput, alumniUncheckedCreateWithoutAlumni_contractInput>
    connectOrCreate?: alumniCreateOrConnectWithoutAlumni_contractInput
    upsert?: alumniUpsertWithoutAlumni_contractInput
    disconnect?: alumniWhereInput | boolean
    delete?: alumniWhereInput | boolean
    connect?: alumniWhereUniqueInput
    update?: XOR<XOR<alumniUpdateToOneWithWhereWithoutAlumni_contractInput, alumniUpdateWithoutAlumni_contractInput>, alumniUncheckedUpdateWithoutAlumni_contractInput>
  }

  export type professorUpdateOneWithoutAlumni_contractNestedInput = {
    create?: XOR<professorCreateWithoutAlumni_contractInput, professorUncheckedCreateWithoutAlumni_contractInput>
    connectOrCreate?: professorCreateOrConnectWithoutAlumni_contractInput
    upsert?: professorUpsertWithoutAlumni_contractInput
    disconnect?: professorWhereInput | boolean
    delete?: professorWhereInput | boolean
    connect?: professorWhereUniqueInput
    update?: XOR<XOR<professorUpdateToOneWithWhereWithoutAlumni_contractInput, professorUpdateWithoutAlumni_contractInput>, professorUncheckedUpdateWithoutAlumni_contractInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type alumniCreateNestedOneWithoutWork_expreriencesInput = {
    create?: XOR<alumniCreateWithoutWork_expreriencesInput, alumniUncheckedCreateWithoutWork_expreriencesInput>
    connectOrCreate?: alumniCreateOrConnectWithoutWork_expreriencesInput
    connect?: alumniWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type alumniUpdateOneWithoutWork_expreriencesNestedInput = {
    create?: XOR<alumniCreateWithoutWork_expreriencesInput, alumniUncheckedCreateWithoutWork_expreriencesInput>
    connectOrCreate?: alumniCreateOrConnectWithoutWork_expreriencesInput
    upsert?: alumniUpsertWithoutWork_expreriencesInput
    disconnect?: alumniWhereInput | boolean
    delete?: alumniWhereInput | boolean
    connect?: alumniWhereUniqueInput
    update?: XOR<XOR<alumniUpdateToOneWithWhereWithoutWork_expreriencesInput, alumniUpdateWithoutWork_expreriencesInput>, alumniUncheckedUpdateWithoutWork_expreriencesInput>
  }

  export type alumniCreateNestedOneWithoutUser_privacyInput = {
    create?: XOR<alumniCreateWithoutUser_privacyInput, alumniUncheckedCreateWithoutUser_privacyInput>
    connectOrCreate?: alumniCreateOrConnectWithoutUser_privacyInput
    connect?: alumniWhereUniqueInput
  }

  export type professorCreateNestedOneWithoutUser_privacyInput = {
    create?: XOR<professorCreateWithoutUser_privacyInput, professorUncheckedCreateWithoutUser_privacyInput>
    connectOrCreate?: professorCreateOrConnectWithoutUser_privacyInput
    connect?: professorWhereUniqueInput
  }

  export type alumniUpdateOneWithoutUser_privacyNestedInput = {
    create?: XOR<alumniCreateWithoutUser_privacyInput, alumniUncheckedCreateWithoutUser_privacyInput>
    connectOrCreate?: alumniCreateOrConnectWithoutUser_privacyInput
    upsert?: alumniUpsertWithoutUser_privacyInput
    disconnect?: alumniWhereInput | boolean
    delete?: alumniWhereInput | boolean
    connect?: alumniWhereUniqueInput
    update?: XOR<XOR<alumniUpdateToOneWithWhereWithoutUser_privacyInput, alumniUpdateWithoutUser_privacyInput>, alumniUncheckedUpdateWithoutUser_privacyInput>
  }

  export type professorUpdateOneWithoutUser_privacyNestedInput = {
    create?: XOR<professorCreateWithoutUser_privacyInput, professorUncheckedCreateWithoutUser_privacyInput>
    connectOrCreate?: professorCreateOrConnectWithoutUser_privacyInput
    upsert?: professorUpsertWithoutUser_privacyInput
    disconnect?: professorWhereInput | boolean
    delete?: professorWhereInput | boolean
    connect?: professorWhereUniqueInput
    update?: XOR<XOR<professorUpdateToOneWithWhereWithoutUser_privacyInput, professorUpdateWithoutUser_privacyInput>, professorUncheckedUpdateWithoutUser_privacyInput>
  }

  export type user_privacyCreateNestedOneWithoutProfessorInput = {
    create?: XOR<user_privacyCreateWithoutProfessorInput, user_privacyUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: user_privacyCreateOrConnectWithoutProfessorInput
    connect?: user_privacyWhereUniqueInput
  }

  export type alumni_contractCreateNestedManyWithoutProfessorInput = {
    create?: XOR<alumni_contractCreateWithoutProfessorInput, alumni_contractUncheckedCreateWithoutProfessorInput> | alumni_contractCreateWithoutProfessorInput[] | alumni_contractUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: alumni_contractCreateOrConnectWithoutProfessorInput | alumni_contractCreateOrConnectWithoutProfessorInput[]
    createMany?: alumni_contractCreateManyProfessorInputEnvelope
    connect?: alumni_contractWhereUniqueInput | alumni_contractWhereUniqueInput[]
  }

  export type user_privacyUncheckedCreateNestedOneWithoutProfessorInput = {
    create?: XOR<user_privacyCreateWithoutProfessorInput, user_privacyUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: user_privacyCreateOrConnectWithoutProfessorInput
    connect?: user_privacyWhereUniqueInput
  }

  export type alumni_contractUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<alumni_contractCreateWithoutProfessorInput, alumni_contractUncheckedCreateWithoutProfessorInput> | alumni_contractCreateWithoutProfessorInput[] | alumni_contractUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: alumni_contractCreateOrConnectWithoutProfessorInput | alumni_contractCreateOrConnectWithoutProfessorInput[]
    createMany?: alumni_contractCreateManyProfessorInputEnvelope
    connect?: alumni_contractWhereUniqueInput | alumni_contractWhereUniqueInput[]
  }

  export type user_privacyUpdateOneWithoutProfessorNestedInput = {
    create?: XOR<user_privacyCreateWithoutProfessorInput, user_privacyUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: user_privacyCreateOrConnectWithoutProfessorInput
    upsert?: user_privacyUpsertWithoutProfessorInput
    disconnect?: user_privacyWhereInput | boolean
    delete?: user_privacyWhereInput | boolean
    connect?: user_privacyWhereUniqueInput
    update?: XOR<XOR<user_privacyUpdateToOneWithWhereWithoutProfessorInput, user_privacyUpdateWithoutProfessorInput>, user_privacyUncheckedUpdateWithoutProfessorInput>
  }

  export type alumni_contractUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<alumni_contractCreateWithoutProfessorInput, alumni_contractUncheckedCreateWithoutProfessorInput> | alumni_contractCreateWithoutProfessorInput[] | alumni_contractUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: alumni_contractCreateOrConnectWithoutProfessorInput | alumni_contractCreateOrConnectWithoutProfessorInput[]
    upsert?: alumni_contractUpsertWithWhereUniqueWithoutProfessorInput | alumni_contractUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: alumni_contractCreateManyProfessorInputEnvelope
    set?: alumni_contractWhereUniqueInput | alumni_contractWhereUniqueInput[]
    disconnect?: alumni_contractWhereUniqueInput | alumni_contractWhereUniqueInput[]
    delete?: alumni_contractWhereUniqueInput | alumni_contractWhereUniqueInput[]
    connect?: alumni_contractWhereUniqueInput | alumni_contractWhereUniqueInput[]
    update?: alumni_contractUpdateWithWhereUniqueWithoutProfessorInput | alumni_contractUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: alumni_contractUpdateManyWithWhereWithoutProfessorInput | alumni_contractUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: alumni_contractScalarWhereInput | alumni_contractScalarWhereInput[]
  }

  export type user_privacyUncheckedUpdateOneWithoutProfessorNestedInput = {
    create?: XOR<user_privacyCreateWithoutProfessorInput, user_privacyUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: user_privacyCreateOrConnectWithoutProfessorInput
    upsert?: user_privacyUpsertWithoutProfessorInput
    disconnect?: user_privacyWhereInput | boolean
    delete?: user_privacyWhereInput | boolean
    connect?: user_privacyWhereUniqueInput
    update?: XOR<XOR<user_privacyUpdateToOneWithWhereWithoutProfessorInput, user_privacyUpdateWithoutProfessorInput>, user_privacyUncheckedUpdateWithoutProfessorInput>
  }

  export type alumni_contractUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<alumni_contractCreateWithoutProfessorInput, alumni_contractUncheckedCreateWithoutProfessorInput> | alumni_contractCreateWithoutProfessorInput[] | alumni_contractUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: alumni_contractCreateOrConnectWithoutProfessorInput | alumni_contractCreateOrConnectWithoutProfessorInput[]
    upsert?: alumni_contractUpsertWithWhereUniqueWithoutProfessorInput | alumni_contractUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: alumni_contractCreateManyProfessorInputEnvelope
    set?: alumni_contractWhereUniqueInput | alumni_contractWhereUniqueInput[]
    disconnect?: alumni_contractWhereUniqueInput | alumni_contractWhereUniqueInput[]
    delete?: alumni_contractWhereUniqueInput | alumni_contractWhereUniqueInput[]
    connect?: alumni_contractWhereUniqueInput | alumni_contractWhereUniqueInput[]
    update?: alumni_contractUpdateWithWhereUniqueWithoutProfessorInput | alumni_contractUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: alumni_contractUpdateManyWithWhereWithoutProfessorInput | alumni_contractUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: alumni_contractScalarWhereInput | alumni_contractScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type work_expreriencesCreateWithoutAlumniInput = {
    isOnTheLine?: boolean | null
    job_position?: string | null
    company_name?: string | null
    company_place: string
    start_date?: string | null
    end_date?: string | null
    job_detail?: string | null
    job_responsibility?: string | null
    job_skills?: string | null
    salary?: number | null
    isCurrent?: boolean
    isInThai?: boolean
    remark?: string | null
    edu_level?: string | null
    continued_study?: boolean
    edu_faculty?: string | null
    edu_dep?: string | null
    edu_university?: string | null
    year_start?: string | null
    year_end?: string | null
    edu_performance?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type work_expreriencesUncheckedCreateWithoutAlumniInput = {
    id?: number
    isOnTheLine?: boolean | null
    job_position?: string | null
    company_name?: string | null
    company_place: string
    start_date?: string | null
    end_date?: string | null
    job_detail?: string | null
    job_responsibility?: string | null
    job_skills?: string | null
    salary?: number | null
    isCurrent?: boolean
    isInThai?: boolean
    remark?: string | null
    edu_level?: string | null
    continued_study?: boolean
    edu_faculty?: string | null
    edu_dep?: string | null
    edu_university?: string | null
    year_start?: string | null
    year_end?: string | null
    edu_performance?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type work_expreriencesCreateOrConnectWithoutAlumniInput = {
    where: work_expreriencesWhereUniqueInput
    create: XOR<work_expreriencesCreateWithoutAlumniInput, work_expreriencesUncheckedCreateWithoutAlumniInput>
  }

  export type work_expreriencesCreateManyAlumniInputEnvelope = {
    data: work_expreriencesCreateManyAlumniInput | work_expreriencesCreateManyAlumniInput[]
    skipDuplicates?: boolean
  }

  export type user_privacyCreateWithoutAlumniInput = {
    seeEmail?: boolean
    seePhone?: boolean
    seeFacebook?: boolean
    seeAddress?: boolean
    seeWorkExprerience?: boolean | null
    seeProfile?: boolean
    seeSalary?: boolean
    allowedAlumniSendEmail?: boolean
    allowedProfessorSendEmail?: boolean | null
    createtAt?: Date | string
    updatedAt?: Date | string
    professor?: professorCreateNestedOneWithoutUser_privacyInput
  }

  export type user_privacyUncheckedCreateWithoutAlumniInput = {
    id?: number
    seeEmail?: boolean
    seePhone?: boolean
    seeFacebook?: boolean
    seeAddress?: boolean
    seeWorkExprerience?: boolean | null
    seeProfile?: boolean
    seeSalary?: boolean
    allowedAlumniSendEmail?: boolean
    allowedProfessorSendEmail?: boolean | null
    professorId?: string | null
    createtAt?: Date | string
    updatedAt?: Date | string
  }

  export type user_privacyCreateOrConnectWithoutAlumniInput = {
    where: user_privacyWhereUniqueInput
    create: XOR<user_privacyCreateWithoutAlumniInput, user_privacyUncheckedCreateWithoutAlumniInput>
  }

  export type alumni_contractCreateWithoutAlumniInput = {
    phone1?: string | null
    phone2?: string | null
    email1?: string | null
    email2?: string | null
    facebook?: string | null
    address?: string | null
    tambon?: string | null
    amphure?: string | null
    province?: string | null
    zipcode?: string | null
    createtAt?: Date | string
    updatedAt?: Date | string
    professor?: professorCreateNestedOneWithoutAlumni_contractInput
  }

  export type alumni_contractUncheckedCreateWithoutAlumniInput = {
    id?: number
    phone1?: string | null
    phone2?: string | null
    email1?: string | null
    email2?: string | null
    facebook?: string | null
    address?: string | null
    tambon?: string | null
    amphure?: string | null
    province?: string | null
    zipcode?: string | null
    createtAt?: Date | string
    updatedAt?: Date | string
    professorProfessor_id?: string | null
  }

  export type alumni_contractCreateOrConnectWithoutAlumniInput = {
    where: alumni_contractWhereUniqueInput
    create: XOR<alumni_contractCreateWithoutAlumniInput, alumni_contractUncheckedCreateWithoutAlumniInput>
  }

  export type work_expreriencesUpsertWithWhereUniqueWithoutAlumniInput = {
    where: work_expreriencesWhereUniqueInput
    update: XOR<work_expreriencesUpdateWithoutAlumniInput, work_expreriencesUncheckedUpdateWithoutAlumniInput>
    create: XOR<work_expreriencesCreateWithoutAlumniInput, work_expreriencesUncheckedCreateWithoutAlumniInput>
  }

  export type work_expreriencesUpdateWithWhereUniqueWithoutAlumniInput = {
    where: work_expreriencesWhereUniqueInput
    data: XOR<work_expreriencesUpdateWithoutAlumniInput, work_expreriencesUncheckedUpdateWithoutAlumniInput>
  }

  export type work_expreriencesUpdateManyWithWhereWithoutAlumniInput = {
    where: work_expreriencesScalarWhereInput
    data: XOR<work_expreriencesUpdateManyMutationInput, work_expreriencesUncheckedUpdateManyWithoutAlumniInput>
  }

  export type work_expreriencesScalarWhereInput = {
    AND?: work_expreriencesScalarWhereInput | work_expreriencesScalarWhereInput[]
    OR?: work_expreriencesScalarWhereInput[]
    NOT?: work_expreriencesScalarWhereInput | work_expreriencesScalarWhereInput[]
    id?: IntFilter<"work_expreriences"> | number
    isOnTheLine?: BoolNullableFilter<"work_expreriences"> | boolean | null
    job_position?: StringNullableFilter<"work_expreriences"> | string | null
    company_name?: StringNullableFilter<"work_expreriences"> | string | null
    company_place?: StringFilter<"work_expreriences"> | string
    start_date?: StringNullableFilter<"work_expreriences"> | string | null
    end_date?: StringNullableFilter<"work_expreriences"> | string | null
    job_detail?: StringNullableFilter<"work_expreriences"> | string | null
    job_responsibility?: StringNullableFilter<"work_expreriences"> | string | null
    job_skills?: StringNullableFilter<"work_expreriences"> | string | null
    salary?: FloatNullableFilter<"work_expreriences"> | number | null
    isCurrent?: BoolFilter<"work_expreriences"> | boolean
    isInThai?: BoolFilter<"work_expreriences"> | boolean
    remark?: StringNullableFilter<"work_expreriences"> | string | null
    edu_level?: StringNullableFilter<"work_expreriences"> | string | null
    continued_study?: BoolFilter<"work_expreriences"> | boolean
    edu_faculty?: StringNullableFilter<"work_expreriences"> | string | null
    edu_dep?: StringNullableFilter<"work_expreriences"> | string | null
    edu_university?: StringNullableFilter<"work_expreriences"> | string | null
    year_start?: StringNullableFilter<"work_expreriences"> | string | null
    year_end?: StringNullableFilter<"work_expreriences"> | string | null
    edu_performance?: StringNullableFilter<"work_expreriences"> | string | null
    createdAt?: DateTimeFilter<"work_expreriences"> | Date | string
    updatedAt?: DateTimeFilter<"work_expreriences"> | Date | string
    alumniId?: StringNullableFilter<"work_expreriences"> | string | null
  }

  export type user_privacyUpsertWithoutAlumniInput = {
    update: XOR<user_privacyUpdateWithoutAlumniInput, user_privacyUncheckedUpdateWithoutAlumniInput>
    create: XOR<user_privacyCreateWithoutAlumniInput, user_privacyUncheckedCreateWithoutAlumniInput>
    where?: user_privacyWhereInput
  }

  export type user_privacyUpdateToOneWithWhereWithoutAlumniInput = {
    where?: user_privacyWhereInput
    data: XOR<user_privacyUpdateWithoutAlumniInput, user_privacyUncheckedUpdateWithoutAlumniInput>
  }

  export type user_privacyUpdateWithoutAlumniInput = {
    seeEmail?: BoolFieldUpdateOperationsInput | boolean
    seePhone?: BoolFieldUpdateOperationsInput | boolean
    seeFacebook?: BoolFieldUpdateOperationsInput | boolean
    seeAddress?: BoolFieldUpdateOperationsInput | boolean
    seeWorkExprerience?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seeProfile?: BoolFieldUpdateOperationsInput | boolean
    seeSalary?: BoolFieldUpdateOperationsInput | boolean
    allowedAlumniSendEmail?: BoolFieldUpdateOperationsInput | boolean
    allowedProfessorSendEmail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: professorUpdateOneWithoutUser_privacyNestedInput
  }

  export type user_privacyUncheckedUpdateWithoutAlumniInput = {
    id?: IntFieldUpdateOperationsInput | number
    seeEmail?: BoolFieldUpdateOperationsInput | boolean
    seePhone?: BoolFieldUpdateOperationsInput | boolean
    seeFacebook?: BoolFieldUpdateOperationsInput | boolean
    seeAddress?: BoolFieldUpdateOperationsInput | boolean
    seeWorkExprerience?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seeProfile?: BoolFieldUpdateOperationsInput | boolean
    seeSalary?: BoolFieldUpdateOperationsInput | boolean
    allowedAlumniSendEmail?: BoolFieldUpdateOperationsInput | boolean
    allowedProfessorSendEmail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    professorId?: NullableStringFieldUpdateOperationsInput | string | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alumni_contractUpsertWithoutAlumniInput = {
    update: XOR<alumni_contractUpdateWithoutAlumniInput, alumni_contractUncheckedUpdateWithoutAlumniInput>
    create: XOR<alumni_contractCreateWithoutAlumniInput, alumni_contractUncheckedCreateWithoutAlumniInput>
    where?: alumni_contractWhereInput
  }

  export type alumni_contractUpdateToOneWithWhereWithoutAlumniInput = {
    where?: alumni_contractWhereInput
    data: XOR<alumni_contractUpdateWithoutAlumniInput, alumni_contractUncheckedUpdateWithoutAlumniInput>
  }

  export type alumni_contractUpdateWithoutAlumniInput = {
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    email1?: NullableStringFieldUpdateOperationsInput | string | null
    email2?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tambon?: NullableStringFieldUpdateOperationsInput | string | null
    amphure?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: professorUpdateOneWithoutAlumni_contractNestedInput
  }

  export type alumni_contractUncheckedUpdateWithoutAlumniInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    email1?: NullableStringFieldUpdateOperationsInput | string | null
    email2?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tambon?: NullableStringFieldUpdateOperationsInput | string | null
    amphure?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professorProfessor_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type alumniCreateWithoutAlumni_contractInput = {
    alumni_id: string
    prefix: string
    fname: string
    lname: string
    profile?: string | null
    passwordHash?: string | null
    allowedAccount?: boolean
    canUse?: boolean
    year_start?: number | null
    year_end?: number | null
    facultyId?: number | null
    departmentId?: number | null
    edu_levelId?: number | null
    createtAt?: Date | string
    updatedAt?: Date | string
    work_expreriences?: work_expreriencesCreateNestedManyWithoutAlumniInput
    user_privacy?: user_privacyCreateNestedOneWithoutAlumniInput
  }

  export type alumniUncheckedCreateWithoutAlumni_contractInput = {
    alumni_id: string
    prefix: string
    fname: string
    lname: string
    profile?: string | null
    passwordHash?: string | null
    allowedAccount?: boolean
    canUse?: boolean
    year_start?: number | null
    year_end?: number | null
    facultyId?: number | null
    departmentId?: number | null
    edu_levelId?: number | null
    createtAt?: Date | string
    updatedAt?: Date | string
    work_expreriences?: work_expreriencesUncheckedCreateNestedManyWithoutAlumniInput
    user_privacy?: user_privacyUncheckedCreateNestedOneWithoutAlumniInput
  }

  export type alumniCreateOrConnectWithoutAlumni_contractInput = {
    where: alumniWhereUniqueInput
    create: XOR<alumniCreateWithoutAlumni_contractInput, alumniUncheckedCreateWithoutAlumni_contractInput>
  }

  export type professorCreateWithoutAlumni_contractInput = {
    professor_id: string
    prefix: string
    fname: string
    lname: string
    profile?: string | null
    passwordHash?: string | null
    academic_rank?: string | null
    canUse?: boolean
    univercity_position?: string | null
    allowedAccount?: boolean
    email?: string | null
    facultyId?: number | null
    departmentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user_privacy?: user_privacyCreateNestedOneWithoutProfessorInput
  }

  export type professorUncheckedCreateWithoutAlumni_contractInput = {
    professor_id: string
    prefix: string
    fname: string
    lname: string
    profile?: string | null
    passwordHash?: string | null
    academic_rank?: string | null
    canUse?: boolean
    univercity_position?: string | null
    allowedAccount?: boolean
    email?: string | null
    facultyId?: number | null
    departmentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user_privacy?: user_privacyUncheckedCreateNestedOneWithoutProfessorInput
  }

  export type professorCreateOrConnectWithoutAlumni_contractInput = {
    where: professorWhereUniqueInput
    create: XOR<professorCreateWithoutAlumni_contractInput, professorUncheckedCreateWithoutAlumni_contractInput>
  }

  export type alumniUpsertWithoutAlumni_contractInput = {
    update: XOR<alumniUpdateWithoutAlumni_contractInput, alumniUncheckedUpdateWithoutAlumni_contractInput>
    create: XOR<alumniCreateWithoutAlumni_contractInput, alumniUncheckedCreateWithoutAlumni_contractInput>
    where?: alumniWhereInput
  }

  export type alumniUpdateToOneWithWhereWithoutAlumni_contractInput = {
    where?: alumniWhereInput
    data: XOR<alumniUpdateWithoutAlumni_contractInput, alumniUncheckedUpdateWithoutAlumni_contractInput>
  }

  export type alumniUpdateWithoutAlumni_contractInput = {
    alumni_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    canUse?: BoolFieldUpdateOperationsInput | boolean
    year_start?: NullableIntFieldUpdateOperationsInput | number | null
    year_end?: NullableIntFieldUpdateOperationsInput | number | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    edu_levelId?: NullableIntFieldUpdateOperationsInput | number | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work_expreriences?: work_expreriencesUpdateManyWithoutAlumniNestedInput
    user_privacy?: user_privacyUpdateOneWithoutAlumniNestedInput
  }

  export type alumniUncheckedUpdateWithoutAlumni_contractInput = {
    alumni_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    canUse?: BoolFieldUpdateOperationsInput | boolean
    year_start?: NullableIntFieldUpdateOperationsInput | number | null
    year_end?: NullableIntFieldUpdateOperationsInput | number | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    edu_levelId?: NullableIntFieldUpdateOperationsInput | number | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work_expreriences?: work_expreriencesUncheckedUpdateManyWithoutAlumniNestedInput
    user_privacy?: user_privacyUncheckedUpdateOneWithoutAlumniNestedInput
  }

  export type professorUpsertWithoutAlumni_contractInput = {
    update: XOR<professorUpdateWithoutAlumni_contractInput, professorUncheckedUpdateWithoutAlumni_contractInput>
    create: XOR<professorCreateWithoutAlumni_contractInput, professorUncheckedCreateWithoutAlumni_contractInput>
    where?: professorWhereInput
  }

  export type professorUpdateToOneWithWhereWithoutAlumni_contractInput = {
    where?: professorWhereInput
    data: XOR<professorUpdateWithoutAlumni_contractInput, professorUncheckedUpdateWithoutAlumni_contractInput>
  }

  export type professorUpdateWithoutAlumni_contractInput = {
    professor_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    academic_rank?: NullableStringFieldUpdateOperationsInput | string | null
    canUse?: BoolFieldUpdateOperationsInput | boolean
    univercity_position?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_privacy?: user_privacyUpdateOneWithoutProfessorNestedInput
  }

  export type professorUncheckedUpdateWithoutAlumni_contractInput = {
    professor_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    academic_rank?: NullableStringFieldUpdateOperationsInput | string | null
    canUse?: BoolFieldUpdateOperationsInput | boolean
    univercity_position?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_privacy?: user_privacyUncheckedUpdateOneWithoutProfessorNestedInput
  }

  export type alumniCreateWithoutWork_expreriencesInput = {
    alumni_id: string
    prefix: string
    fname: string
    lname: string
    profile?: string | null
    passwordHash?: string | null
    allowedAccount?: boolean
    canUse?: boolean
    year_start?: number | null
    year_end?: number | null
    facultyId?: number | null
    departmentId?: number | null
    edu_levelId?: number | null
    createtAt?: Date | string
    updatedAt?: Date | string
    user_privacy?: user_privacyCreateNestedOneWithoutAlumniInput
    alumni_contract?: alumni_contractCreateNestedOneWithoutAlumniInput
  }

  export type alumniUncheckedCreateWithoutWork_expreriencesInput = {
    alumni_id: string
    prefix: string
    fname: string
    lname: string
    profile?: string | null
    passwordHash?: string | null
    allowedAccount?: boolean
    canUse?: boolean
    year_start?: number | null
    year_end?: number | null
    facultyId?: number | null
    departmentId?: number | null
    edu_levelId?: number | null
    createtAt?: Date | string
    updatedAt?: Date | string
    user_privacy?: user_privacyUncheckedCreateNestedOneWithoutAlumniInput
    alumni_contract?: alumni_contractUncheckedCreateNestedOneWithoutAlumniInput
  }

  export type alumniCreateOrConnectWithoutWork_expreriencesInput = {
    where: alumniWhereUniqueInput
    create: XOR<alumniCreateWithoutWork_expreriencesInput, alumniUncheckedCreateWithoutWork_expreriencesInput>
  }

  export type alumniUpsertWithoutWork_expreriencesInput = {
    update: XOR<alumniUpdateWithoutWork_expreriencesInput, alumniUncheckedUpdateWithoutWork_expreriencesInput>
    create: XOR<alumniCreateWithoutWork_expreriencesInput, alumniUncheckedCreateWithoutWork_expreriencesInput>
    where?: alumniWhereInput
  }

  export type alumniUpdateToOneWithWhereWithoutWork_expreriencesInput = {
    where?: alumniWhereInput
    data: XOR<alumniUpdateWithoutWork_expreriencesInput, alumniUncheckedUpdateWithoutWork_expreriencesInput>
  }

  export type alumniUpdateWithoutWork_expreriencesInput = {
    alumni_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    canUse?: BoolFieldUpdateOperationsInput | boolean
    year_start?: NullableIntFieldUpdateOperationsInput | number | null
    year_end?: NullableIntFieldUpdateOperationsInput | number | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    edu_levelId?: NullableIntFieldUpdateOperationsInput | number | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_privacy?: user_privacyUpdateOneWithoutAlumniNestedInput
    alumni_contract?: alumni_contractUpdateOneWithoutAlumniNestedInput
  }

  export type alumniUncheckedUpdateWithoutWork_expreriencesInput = {
    alumni_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    canUse?: BoolFieldUpdateOperationsInput | boolean
    year_start?: NullableIntFieldUpdateOperationsInput | number | null
    year_end?: NullableIntFieldUpdateOperationsInput | number | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    edu_levelId?: NullableIntFieldUpdateOperationsInput | number | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_privacy?: user_privacyUncheckedUpdateOneWithoutAlumniNestedInput
    alumni_contract?: alumni_contractUncheckedUpdateOneWithoutAlumniNestedInput
  }

  export type alumniCreateWithoutUser_privacyInput = {
    alumni_id: string
    prefix: string
    fname: string
    lname: string
    profile?: string | null
    passwordHash?: string | null
    allowedAccount?: boolean
    canUse?: boolean
    year_start?: number | null
    year_end?: number | null
    facultyId?: number | null
    departmentId?: number | null
    edu_levelId?: number | null
    createtAt?: Date | string
    updatedAt?: Date | string
    work_expreriences?: work_expreriencesCreateNestedManyWithoutAlumniInput
    alumni_contract?: alumni_contractCreateNestedOneWithoutAlumniInput
  }

  export type alumniUncheckedCreateWithoutUser_privacyInput = {
    alumni_id: string
    prefix: string
    fname: string
    lname: string
    profile?: string | null
    passwordHash?: string | null
    allowedAccount?: boolean
    canUse?: boolean
    year_start?: number | null
    year_end?: number | null
    facultyId?: number | null
    departmentId?: number | null
    edu_levelId?: number | null
    createtAt?: Date | string
    updatedAt?: Date | string
    work_expreriences?: work_expreriencesUncheckedCreateNestedManyWithoutAlumniInput
    alumni_contract?: alumni_contractUncheckedCreateNestedOneWithoutAlumniInput
  }

  export type alumniCreateOrConnectWithoutUser_privacyInput = {
    where: alumniWhereUniqueInput
    create: XOR<alumniCreateWithoutUser_privacyInput, alumniUncheckedCreateWithoutUser_privacyInput>
  }

  export type professorCreateWithoutUser_privacyInput = {
    professor_id: string
    prefix: string
    fname: string
    lname: string
    profile?: string | null
    passwordHash?: string | null
    academic_rank?: string | null
    canUse?: boolean
    univercity_position?: string | null
    allowedAccount?: boolean
    email?: string | null
    facultyId?: number | null
    departmentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alumni_contract?: alumni_contractCreateNestedManyWithoutProfessorInput
  }

  export type professorUncheckedCreateWithoutUser_privacyInput = {
    professor_id: string
    prefix: string
    fname: string
    lname: string
    profile?: string | null
    passwordHash?: string | null
    academic_rank?: string | null
    canUse?: boolean
    univercity_position?: string | null
    allowedAccount?: boolean
    email?: string | null
    facultyId?: number | null
    departmentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alumni_contract?: alumni_contractUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type professorCreateOrConnectWithoutUser_privacyInput = {
    where: professorWhereUniqueInput
    create: XOR<professorCreateWithoutUser_privacyInput, professorUncheckedCreateWithoutUser_privacyInput>
  }

  export type alumniUpsertWithoutUser_privacyInput = {
    update: XOR<alumniUpdateWithoutUser_privacyInput, alumniUncheckedUpdateWithoutUser_privacyInput>
    create: XOR<alumniCreateWithoutUser_privacyInput, alumniUncheckedCreateWithoutUser_privacyInput>
    where?: alumniWhereInput
  }

  export type alumniUpdateToOneWithWhereWithoutUser_privacyInput = {
    where?: alumniWhereInput
    data: XOR<alumniUpdateWithoutUser_privacyInput, alumniUncheckedUpdateWithoutUser_privacyInput>
  }

  export type alumniUpdateWithoutUser_privacyInput = {
    alumni_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    canUse?: BoolFieldUpdateOperationsInput | boolean
    year_start?: NullableIntFieldUpdateOperationsInput | number | null
    year_end?: NullableIntFieldUpdateOperationsInput | number | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    edu_levelId?: NullableIntFieldUpdateOperationsInput | number | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work_expreriences?: work_expreriencesUpdateManyWithoutAlumniNestedInput
    alumni_contract?: alumni_contractUpdateOneWithoutAlumniNestedInput
  }

  export type alumniUncheckedUpdateWithoutUser_privacyInput = {
    alumni_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    canUse?: BoolFieldUpdateOperationsInput | boolean
    year_start?: NullableIntFieldUpdateOperationsInput | number | null
    year_end?: NullableIntFieldUpdateOperationsInput | number | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    edu_levelId?: NullableIntFieldUpdateOperationsInput | number | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work_expreriences?: work_expreriencesUncheckedUpdateManyWithoutAlumniNestedInput
    alumni_contract?: alumni_contractUncheckedUpdateOneWithoutAlumniNestedInput
  }

  export type professorUpsertWithoutUser_privacyInput = {
    update: XOR<professorUpdateWithoutUser_privacyInput, professorUncheckedUpdateWithoutUser_privacyInput>
    create: XOR<professorCreateWithoutUser_privacyInput, professorUncheckedCreateWithoutUser_privacyInput>
    where?: professorWhereInput
  }

  export type professorUpdateToOneWithWhereWithoutUser_privacyInput = {
    where?: professorWhereInput
    data: XOR<professorUpdateWithoutUser_privacyInput, professorUncheckedUpdateWithoutUser_privacyInput>
  }

  export type professorUpdateWithoutUser_privacyInput = {
    professor_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    academic_rank?: NullableStringFieldUpdateOperationsInput | string | null
    canUse?: BoolFieldUpdateOperationsInput | boolean
    univercity_position?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alumni_contract?: alumni_contractUpdateManyWithoutProfessorNestedInput
  }

  export type professorUncheckedUpdateWithoutUser_privacyInput = {
    professor_id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    academic_rank?: NullableStringFieldUpdateOperationsInput | string | null
    canUse?: BoolFieldUpdateOperationsInput | boolean
    univercity_position?: NullableStringFieldUpdateOperationsInput | string | null
    allowedAccount?: BoolFieldUpdateOperationsInput | boolean
    email?: NullableStringFieldUpdateOperationsInput | string | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alumni_contract?: alumni_contractUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type user_privacyCreateWithoutProfessorInput = {
    seeEmail?: boolean
    seePhone?: boolean
    seeFacebook?: boolean
    seeAddress?: boolean
    seeWorkExprerience?: boolean | null
    seeProfile?: boolean
    seeSalary?: boolean
    allowedAlumniSendEmail?: boolean
    allowedProfessorSendEmail?: boolean | null
    createtAt?: Date | string
    updatedAt?: Date | string
    alumni?: alumniCreateNestedOneWithoutUser_privacyInput
  }

  export type user_privacyUncheckedCreateWithoutProfessorInput = {
    id?: number
    seeEmail?: boolean
    seePhone?: boolean
    seeFacebook?: boolean
    seeAddress?: boolean
    seeWorkExprerience?: boolean | null
    seeProfile?: boolean
    seeSalary?: boolean
    allowedAlumniSendEmail?: boolean
    allowedProfessorSendEmail?: boolean | null
    alumniId?: string | null
    createtAt?: Date | string
    updatedAt?: Date | string
  }

  export type user_privacyCreateOrConnectWithoutProfessorInput = {
    where: user_privacyWhereUniqueInput
    create: XOR<user_privacyCreateWithoutProfessorInput, user_privacyUncheckedCreateWithoutProfessorInput>
  }

  export type alumni_contractCreateWithoutProfessorInput = {
    phone1?: string | null
    phone2?: string | null
    email1?: string | null
    email2?: string | null
    facebook?: string | null
    address?: string | null
    tambon?: string | null
    amphure?: string | null
    province?: string | null
    zipcode?: string | null
    createtAt?: Date | string
    updatedAt?: Date | string
    alumni?: alumniCreateNestedOneWithoutAlumni_contractInput
  }

  export type alumni_contractUncheckedCreateWithoutProfessorInput = {
    id?: number
    alumniId?: string | null
    phone1?: string | null
    phone2?: string | null
    email1?: string | null
    email2?: string | null
    facebook?: string | null
    address?: string | null
    tambon?: string | null
    amphure?: string | null
    province?: string | null
    zipcode?: string | null
    createtAt?: Date | string
    updatedAt?: Date | string
  }

  export type alumni_contractCreateOrConnectWithoutProfessorInput = {
    where: alumni_contractWhereUniqueInput
    create: XOR<alumni_contractCreateWithoutProfessorInput, alumni_contractUncheckedCreateWithoutProfessorInput>
  }

  export type alumni_contractCreateManyProfessorInputEnvelope = {
    data: alumni_contractCreateManyProfessorInput | alumni_contractCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type user_privacyUpsertWithoutProfessorInput = {
    update: XOR<user_privacyUpdateWithoutProfessorInput, user_privacyUncheckedUpdateWithoutProfessorInput>
    create: XOR<user_privacyCreateWithoutProfessorInput, user_privacyUncheckedCreateWithoutProfessorInput>
    where?: user_privacyWhereInput
  }

  export type user_privacyUpdateToOneWithWhereWithoutProfessorInput = {
    where?: user_privacyWhereInput
    data: XOR<user_privacyUpdateWithoutProfessorInput, user_privacyUncheckedUpdateWithoutProfessorInput>
  }

  export type user_privacyUpdateWithoutProfessorInput = {
    seeEmail?: BoolFieldUpdateOperationsInput | boolean
    seePhone?: BoolFieldUpdateOperationsInput | boolean
    seeFacebook?: BoolFieldUpdateOperationsInput | boolean
    seeAddress?: BoolFieldUpdateOperationsInput | boolean
    seeWorkExprerience?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seeProfile?: BoolFieldUpdateOperationsInput | boolean
    seeSalary?: BoolFieldUpdateOperationsInput | boolean
    allowedAlumniSendEmail?: BoolFieldUpdateOperationsInput | boolean
    allowedProfessorSendEmail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alumni?: alumniUpdateOneWithoutUser_privacyNestedInput
  }

  export type user_privacyUncheckedUpdateWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    seeEmail?: BoolFieldUpdateOperationsInput | boolean
    seePhone?: BoolFieldUpdateOperationsInput | boolean
    seeFacebook?: BoolFieldUpdateOperationsInput | boolean
    seeAddress?: BoolFieldUpdateOperationsInput | boolean
    seeWorkExprerience?: NullableBoolFieldUpdateOperationsInput | boolean | null
    seeProfile?: BoolFieldUpdateOperationsInput | boolean
    seeSalary?: BoolFieldUpdateOperationsInput | boolean
    allowedAlumniSendEmail?: BoolFieldUpdateOperationsInput | boolean
    allowedProfessorSendEmail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    alumniId?: NullableStringFieldUpdateOperationsInput | string | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alumni_contractUpsertWithWhereUniqueWithoutProfessorInput = {
    where: alumni_contractWhereUniqueInput
    update: XOR<alumni_contractUpdateWithoutProfessorInput, alumni_contractUncheckedUpdateWithoutProfessorInput>
    create: XOR<alumni_contractCreateWithoutProfessorInput, alumni_contractUncheckedCreateWithoutProfessorInput>
  }

  export type alumni_contractUpdateWithWhereUniqueWithoutProfessorInput = {
    where: alumni_contractWhereUniqueInput
    data: XOR<alumni_contractUpdateWithoutProfessorInput, alumni_contractUncheckedUpdateWithoutProfessorInput>
  }

  export type alumni_contractUpdateManyWithWhereWithoutProfessorInput = {
    where: alumni_contractScalarWhereInput
    data: XOR<alumni_contractUpdateManyMutationInput, alumni_contractUncheckedUpdateManyWithoutProfessorInput>
  }

  export type alumni_contractScalarWhereInput = {
    AND?: alumni_contractScalarWhereInput | alumni_contractScalarWhereInput[]
    OR?: alumni_contractScalarWhereInput[]
    NOT?: alumni_contractScalarWhereInput | alumni_contractScalarWhereInput[]
    id?: IntFilter<"alumni_contract"> | number
    alumniId?: StringNullableFilter<"alumni_contract"> | string | null
    phone1?: StringNullableFilter<"alumni_contract"> | string | null
    phone2?: StringNullableFilter<"alumni_contract"> | string | null
    email1?: StringNullableFilter<"alumni_contract"> | string | null
    email2?: StringNullableFilter<"alumni_contract"> | string | null
    facebook?: StringNullableFilter<"alumni_contract"> | string | null
    address?: StringNullableFilter<"alumni_contract"> | string | null
    tambon?: StringNullableFilter<"alumni_contract"> | string | null
    amphure?: StringNullableFilter<"alumni_contract"> | string | null
    province?: StringNullableFilter<"alumni_contract"> | string | null
    zipcode?: StringNullableFilter<"alumni_contract"> | string | null
    createtAt?: DateTimeFilter<"alumni_contract"> | Date | string
    updatedAt?: DateTimeFilter<"alumni_contract"> | Date | string
    professorProfessor_id?: StringNullableFilter<"alumni_contract"> | string | null
  }

  export type work_expreriencesCreateManyAlumniInput = {
    id?: number
    isOnTheLine?: boolean | null
    job_position?: string | null
    company_name?: string | null
    company_place: string
    start_date?: string | null
    end_date?: string | null
    job_detail?: string | null
    job_responsibility?: string | null
    job_skills?: string | null
    salary?: number | null
    isCurrent?: boolean
    isInThai?: boolean
    remark?: string | null
    edu_level?: string | null
    continued_study?: boolean
    edu_faculty?: string | null
    edu_dep?: string | null
    edu_university?: string | null
    year_start?: string | null
    year_end?: string | null
    edu_performance?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type work_expreriencesUpdateWithoutAlumniInput = {
    isOnTheLine?: NullableBoolFieldUpdateOperationsInput | boolean | null
    job_position?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_place?: StringFieldUpdateOperationsInput | string
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    job_detail?: NullableStringFieldUpdateOperationsInput | string | null
    job_responsibility?: NullableStringFieldUpdateOperationsInput | string | null
    job_skills?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    isInThai?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    edu_level?: NullableStringFieldUpdateOperationsInput | string | null
    continued_study?: BoolFieldUpdateOperationsInput | boolean
    edu_faculty?: NullableStringFieldUpdateOperationsInput | string | null
    edu_dep?: NullableStringFieldUpdateOperationsInput | string | null
    edu_university?: NullableStringFieldUpdateOperationsInput | string | null
    year_start?: NullableStringFieldUpdateOperationsInput | string | null
    year_end?: NullableStringFieldUpdateOperationsInput | string | null
    edu_performance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type work_expreriencesUncheckedUpdateWithoutAlumniInput = {
    id?: IntFieldUpdateOperationsInput | number
    isOnTheLine?: NullableBoolFieldUpdateOperationsInput | boolean | null
    job_position?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_place?: StringFieldUpdateOperationsInput | string
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    job_detail?: NullableStringFieldUpdateOperationsInput | string | null
    job_responsibility?: NullableStringFieldUpdateOperationsInput | string | null
    job_skills?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    isInThai?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    edu_level?: NullableStringFieldUpdateOperationsInput | string | null
    continued_study?: BoolFieldUpdateOperationsInput | boolean
    edu_faculty?: NullableStringFieldUpdateOperationsInput | string | null
    edu_dep?: NullableStringFieldUpdateOperationsInput | string | null
    edu_university?: NullableStringFieldUpdateOperationsInput | string | null
    year_start?: NullableStringFieldUpdateOperationsInput | string | null
    year_end?: NullableStringFieldUpdateOperationsInput | string | null
    edu_performance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type work_expreriencesUncheckedUpdateManyWithoutAlumniInput = {
    id?: IntFieldUpdateOperationsInput | number
    isOnTheLine?: NullableBoolFieldUpdateOperationsInput | boolean | null
    job_position?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_place?: StringFieldUpdateOperationsInput | string
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    job_detail?: NullableStringFieldUpdateOperationsInput | string | null
    job_responsibility?: NullableStringFieldUpdateOperationsInput | string | null
    job_skills?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    isInThai?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    edu_level?: NullableStringFieldUpdateOperationsInput | string | null
    continued_study?: BoolFieldUpdateOperationsInput | boolean
    edu_faculty?: NullableStringFieldUpdateOperationsInput | string | null
    edu_dep?: NullableStringFieldUpdateOperationsInput | string | null
    edu_university?: NullableStringFieldUpdateOperationsInput | string | null
    year_start?: NullableStringFieldUpdateOperationsInput | string | null
    year_end?: NullableStringFieldUpdateOperationsInput | string | null
    edu_performance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alumni_contractCreateManyProfessorInput = {
    id?: number
    alumniId?: string | null
    phone1?: string | null
    phone2?: string | null
    email1?: string | null
    email2?: string | null
    facebook?: string | null
    address?: string | null
    tambon?: string | null
    amphure?: string | null
    province?: string | null
    zipcode?: string | null
    createtAt?: Date | string
    updatedAt?: Date | string
  }

  export type alumni_contractUpdateWithoutProfessorInput = {
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    email1?: NullableStringFieldUpdateOperationsInput | string | null
    email2?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tambon?: NullableStringFieldUpdateOperationsInput | string | null
    amphure?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alumni?: alumniUpdateOneWithoutAlumni_contractNestedInput
  }

  export type alumni_contractUncheckedUpdateWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    alumniId?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    email1?: NullableStringFieldUpdateOperationsInput | string | null
    email2?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tambon?: NullableStringFieldUpdateOperationsInput | string | null
    amphure?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alumni_contractUncheckedUpdateManyWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    alumniId?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    email1?: NullableStringFieldUpdateOperationsInput | string | null
    email2?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    tambon?: NullableStringFieldUpdateOperationsInput | string | null
    amphure?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    createtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export const dmmf: runtime.BaseDMMF
}