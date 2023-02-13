
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.15.2
 * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
 */
Prisma.prismaVersion = {
  client: "3.15.2",
  engine: "461d6a05159055555eb7dfb337c9fb271cbd4d7e"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  nick: 'nick',
  createDate: 'createDate',
  is_active: 'is_active',
  avatar: 'avatar'
});

exports.Prisma.User_AuthScalarFieldEnum = makeEnum({
  userId: 'userId',
  email: 'email',
  password: 'password',
  is_active: 'is_active'
});

exports.Prisma.Mods_CollectionScalarFieldEnum = makeEnum({
  id: 'id',
  avatar: 'avatar',
  name: 'name',
  description: 'description',
  createDate: 'createDate',
  is_active: 'is_active',
  author_id: 'author_id'
});

exports.Prisma.ModScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Mod_AuthorScalarFieldEnum = makeEnum({
  mod_id: 'mod_id',
  user_id: 'user_id',
  type: 'type'
});

exports.Prisma.Mod_ImageScalarFieldEnum = makeEnum({
  id: 'id',
  mod_id: 'mod_id',
  url: 'url'
});

exports.Prisma.Mod_TagScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.Mod_VersionScalarFieldEnum = makeEnum({
  id: 'id',
  mod_id: 'mod_id',
  version: 'version',
  game_version: 'game_version',
  releaseDate: 'releaseDate'
});

exports.Prisma.Mod_IssueScalarFieldEnum = makeEnum({
  id: 'id',
  mod_id: 'mod_id',
  name: 'name',
  type: 'type',
  author_id: 'author_id',
  createDate: 'createDate'
});

exports.Prisma.Mod_Issue_PostScalarFieldEnum = makeEnum({
  id: 'id',
  issue_id: 'issue_id',
  author_id: 'author_id',
  createDate: 'createDate',
  text: 'text'
});

exports.Prisma.Mods_ListScalarFieldEnum = makeEnum({
  id: 'id',
  author_id: 'author_id',
  is_public: 'is_public',
  name: 'name'
});

exports.Prisma.Mods_FavoritsScalarFieldEnum = makeEnum({
  user_id: 'user_id',
  mod_id: 'mod_id'
});

exports.Prisma.Mod_SubscribersScalarFieldEnum = makeEnum({
  user_id: 'user_id',
  mod_id: 'mod_id'
});

exports.Prisma.Mod_DownloadScalarFieldEnum = makeEnum({
  user_id: 'user_id',
  mod_id: 'mod_id',
  version_id: 'version_id'
});

exports.Prisma.User_SessionScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  userAgent: 'userAgent',
  userAgentType: 'userAgentType',
  userAgentOS: 'userAgentOS',
  userAgentDevice: 'userAgentDevice',
  uuid: 'uuid',
  ipv4: 'ipv4',
  fingerprint_id: 'fingerprint_id',
  is_active: 'is_active'
});

exports.Prisma.User_TokenScalarFieldEnum = makeEnum({
  id: 'id',
  sessionId: 'sessionId',
  access_token: 'access_token',
  refresh_token: 'refresh_token',
  createDate: 'createDate',
  is_enable: 'is_enable',
  is_super_access: 'is_super_access'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});
exports.Mod_Issue_Type = makeEnum({
  GENERAL: 'GENERAL',
  BUGS: 'BUGS',
  ANNOUNCEMENTS: 'ANNOUNCEMENTS',
  IDEAS: 'IDEAS'
});

exports.User_Agent_Type = makeEnum({
  WEBKIT: 'WEBKIT',
  OPERA: 'OPERA',
  IE: 'IE',
  CHROME: 'CHROME',
  SAFARI: 'SAFARI',
  MOBILE_SAFARI: 'MOBILE_SAFARI',
  FIREFOX: 'FIREFOX',
  MOZILLA: 'MOZILLA',
  ANDROID: 'ANDROID',
  OTHER: 'OTHER'
});

exports.User_Agent_OS = makeEnum({
  WINDOWS: 'WINDOWS',
  LINUX: 'LINUX',
  IOS: 'IOS',
  ANDROID: 'ANDROID',
  OTHER: 'OTHER'
});

exports.Prisma.ModelName = makeEnum({
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
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
