
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

exports.Prisma.UserAuthScalarFieldEnum = makeEnum({
  userId: 'userId',
  email: 'email',
  password: 'password'
});

exports.Prisma.ModsCollectionScalarFieldEnum = makeEnum({
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

exports.Prisma.ModAuthorScalarFieldEnum = makeEnum({
  mod_id: 'mod_id',
  user_id: 'user_id',
  type: 'type'
});

exports.Prisma.ModImageScalarFieldEnum = makeEnum({
  id: 'id',
  mod_id: 'mod_id',
  url: 'url'
});

exports.Prisma.ModTagScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.ModVersionScalarFieldEnum = makeEnum({
  id: 'id',
  mod_id: 'mod_id',
  version: 'version',
  game_version: 'game_version',
  releaseDate: 'releaseDate'
});

exports.Prisma.ModIssueScalarFieldEnum = makeEnum({
  id: 'id',
  mod_id: 'mod_id',
  name: 'name',
  type: 'type',
  author_id: 'author_id',
  createDate: 'createDate'
});

exports.Prisma.ModIssuePostScalarFieldEnum = makeEnum({
  id: 'id',
  issue_id: 'issue_id',
  author_id: 'author_id',
  createDate: 'createDate',
  text: 'text'
});

exports.Prisma.ModsListScalarFieldEnum = makeEnum({
  id: 'id',
  author_id: 'author_id',
  is_public: 'is_public',
  name: 'name'
});

exports.Prisma.ModsFavoritsScalarFieldEnum = makeEnum({
  user_id: 'user_id',
  mod_id: 'mod_id'
});

exports.Prisma.ModSubscribersScalarFieldEnum = makeEnum({
  user_id: 'user_id',
  mod_id: 'mod_id'
});

exports.Prisma.ModDownloadScalarFieldEnum = makeEnum({
  user_id: 'user_id',
  mod_id: 'mod_id',
  version_id: 'version_id'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});
exports.ModIssueType = makeEnum({
  GENERAL: 'GENERAL',
  BUGS: 'BUGS',
  ANNOUNCEMENTS: 'ANNOUNCEMENTS',
  IDEAS: 'IDEAS'
});

exports.Prisma.ModelName = makeEnum({
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
