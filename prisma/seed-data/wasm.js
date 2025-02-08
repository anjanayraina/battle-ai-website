
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.2.1
 * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
 */
Prisma.prismaVersion = {
  client: "6.2.1",
  engine: "4123509d24aa4dede1e864b46351bf2790323b69"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
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

exports.Prisma.GameScalarFieldEnum = {
  id: 'id',
  gameId: 'gameId',
  authority: 'authority',
  tokenMint: 'tokenMint',
  rewardsVault: 'rewardsVault',
  mapDiameter: 'mapDiameter',
  isActive: 'isActive',
  lastUpdate: 'lastUpdate',
  bump: 'bump',
  dailyRewardTokens: 'dailyRewardTokens',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  ownerId: 'ownerId'
};

exports.Prisma.AgentProfileScalarFieldEnum = {
  id: 'id',
  onchainId: 'onchainId',
  name: 'name',
  xHandle: 'xHandle',
  bio: 'bio',
  lore: 'lore',
  characteristics: 'characteristics',
  knowledge: 'knowledge',
  influenceDifficulty: 'influenceDifficulty',
  aggressiveness: 'aggressiveness',
  trustworthiness: 'trustworthiness',
  manipulativeness: 'manipulativeness',
  intelligence: 'intelligence',
  adaptability: 'adaptability',
  baseInfluence: 'baseInfluence',
  followerMultiplier: 'followerMultiplier',
  engagementMultiplier: 'engagementMultiplier',
  consensusMultiplier: 'consensusMultiplier'
};

exports.Prisma.AgentScalarFieldEnum = {
  id: 'id',
  agentId: 'agentId',
  publicKey: 'publicKey',
  agentProfileId: 'agentProfileId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  gameId: 'gameId',
  ownerId: 'ownerId'
};

exports.Prisma.LocationScalarFieldEnum = {
  id: 'id',
  x: 'x',
  y: 'y',
  terrainType: 'terrainType',
  agentId: 'agentId'
};

exports.Prisma.AllianceScalarFieldEnum = {
  id: 'id',
  formedAt: 'formedAt',
  combinedTokens: 'combinedTokens',
  status: 'status',
  gameId: 'gameId',
  agentId: 'agentId',
  alliedAgentId: 'alliedAgentId'
};

exports.Prisma.BattleScalarFieldEnum = {
  id: 'id',
  timestamp: 'timestamp',
  outcome: 'outcome',
  tokensLost: 'tokensLost',
  tokensGained: 'tokensGained',
  probability: 'probability',
  gameId: 'gameId',
  agentId: 'agentId',
  opponentId: 'opponentId',
  type: 'type',
  status: 'status',
  startTime: 'startTime',
  resolutionTime: 'resolutionTime',
  resolvedAt: 'resolvedAt'
};

exports.Prisma.CommunityScalarFieldEnum = {
  id: 'id',
  followers: 'followers',
  averageEngagement: 'averageEngagement',
  supporterCount: 'supporterCount',
  lastInfluenceTime: 'lastInfluenceTime',
  influenceScore: 'influenceScore',
  agentId: 'agentId'
};

exports.Prisma.InteractionScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  type: 'type',
  content: 'content',
  communityId: 'communityId',
  authorId: 'authorId',
  authorHandle: 'authorHandle',
  authorFollowers: 'authorFollowers',
  authorIsVerified: 'authorIsVerified',
  engagement: 'engagement',
  likes: 'likes',
  retweets: 'retweets',
  quotes: 'quotes',
  replies: 'replies',
  sentiment: 'sentiment',
  influenceScore: 'influenceScore',
  suggestedAction: 'suggestedAction',
  confidence: 'confidence',
  isDeceptive: 'isDeceptive',
  deceptionScore: 'deceptionScore',
  intentType: 'intentType',
  referencedTweet: 'referencedTweet',
  conversationId: 'conversationId',
  inReplyToId: 'inReplyToId',
  communityAlignment: 'communityAlignment',
  impactScore: 'impactScore',
  previousInteractions: 'previousInteractions',
  authorReliability: 'authorReliability',
  timestamp: 'timestamp',
  processedAt: 'processedAt'
};

exports.Prisma.AgentStateScalarFieldEnum = {
  id: 'id',
  isAlive: 'isAlive',
  lastActionType: 'lastActionType',
  lastActionTime: 'lastActionTime',
  lastActionDetails: 'lastActionDetails',
  influencedByTweet: 'influencedByTweet',
  influenceScore: 'influenceScore',
  agentId: 'agentId'
};

exports.Prisma.CooldownScalarFieldEnum = {
  id: 'id',
  type: 'type',
  endsAt: 'endsAt',
  agentId: 'agentId',
  targetAgentId: 'targetAgentId'
};

exports.Prisma.StrategyScalarFieldEnum = {
  id: 'id',
  publicStrategy: 'publicStrategy',
  actualStrategy: 'actualStrategy',
  deceptionLevel: 'deceptionLevel',
  agentId: 'agentId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  privyUserId: 'privyUserId',
  role: 'role',
  email: 'email',
  walletAddress: 'walletAddress',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.TerrainType = exports.$Enums.TerrainType = {
  Plain: 'Plain',
  Mountain: 'Mountain',
  River: 'River'
};

exports.AllianceStatus = exports.$Enums.AllianceStatus = {
  Active: 'Active',
  Pending: 'Pending',
  Broken: 'Broken'
};

exports.BattleType = exports.$Enums.BattleType = {
  Simple: 'Simple',
  AgentVsAlliance: 'AgentVsAlliance',
  AllianceVsAlliance: 'AllianceVsAlliance'
};

exports.BattleStatus = exports.$Enums.BattleStatus = {
  Active: 'Active',
  Resolved: 'Resolved',
  Failed: 'Failed'
};

exports.UserRole = exports.$Enums.UserRole = {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  USER: 'USER'
};

exports.Prisma.ModelName = {
  Game: 'Game',
  AgentProfile: 'AgentProfile',
  Agent: 'Agent',
  Location: 'Location',
  Alliance: 'Alliance',
  Battle: 'Battle',
  Community: 'Community',
  Interaction: 'Interaction',
  AgentState: 'AgentState',
  Cooldown: 'Cooldown',
  Strategy: 'Strategy',
  User: 'User'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
