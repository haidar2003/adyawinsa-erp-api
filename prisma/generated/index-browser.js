
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 5.1.0
 * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
 */
Prisma.prismaVersion = {
  client: "5.1.0",
  engine: "bf0e5e8a04cada8225617067eaa03d041e2bba36"
}


const runtimeDescription = (() => {
  // https://edge-runtime.vercel.app/features/available-apis#addressing-the-runtime
  if ("EdgeRuntime" in globalThis && typeof globalThis.EdgeRuntime === "string") {
    return "under the Vercel Edge Runtime";
  }
  // Deno
  if ("Deno" in globalThis && typeof globalThis.Deno === "object") {
    return "under the Deno runtime";
  }
  // Default to assuming browser
  return "in the browser";
})();


Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Inventory_move_draftScalarFieldEnum = {
  org_id: 'org_id',
  creation_date_time: 'creation_date_time',
  movement_id: 'movement_id',
  data: 'data'
};

exports.Prisma.Shipment_draftScalarFieldEnum = {
  org_id: 'org_id',
  creation_date_time: 'creation_date_time',
  erp_id: 'erp_id',
  vendor_id: 'vendor_id',
  data: 'data'
};

exports.Prisma.Material_receive_draftScalarFieldEnum = {
  org_id: 'org_id',
  creation_date_time: 'creation_date_time',
  erp_id: 'erp_id',
  vendor_id: 'vendor_id',
  data: 'data'
};

exports.Prisma.Production_single_product_draftScalarFieldEnum = {
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

exports.Prisma.Repair_jobScalarFieldEnum = {
  org_id: 'org_id',
  creation_date_time: 'creation_date_time',
  track_id: 'track_id',
  imove_repair_id: 'imove_repair_id',
  starting_locator_id: 'starting_locator_id',
  repair_status: 'repair_status',
  description: 'description',
  quantity: 'quantity'
};

exports.Prisma.Quality_checkScalarFieldEnum = {
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

exports.Prisma.Track_id_objectScalarFieldEnum = {
  track_id: 'track_id',
  productId: 'productId',
  productName: 'productName',
  track_type: 'track_type',
  creation_date_time: 'creation_date_time',
  source_data: 'source_data',
  object_data: 'object_data'
};

exports.Prisma.Track_id_historyScalarFieldEnum = {
  track_id: 'track_id',
  update_date_time: 'update_date_time',
  description: 'description',
  data: 'data'
};

exports.Prisma.Track_id_stockScalarFieldEnum = {
  locator_id: 'locator_id',
  key23: 'key23',
  product_id: 'product_id',
  track_id: 'track_id',
  quantity: 'quantity',
  data: 'data'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
