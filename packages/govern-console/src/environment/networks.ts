import { EnvironmentConfig, EnvironmentName } from './types';

const networks = new Map<EnvironmentName, EnvironmentConfig>([
  [
    'mainnet',
    {
      chainId: 1,
      networkName: 'mainnet',
      subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aragon/aragon-govern-mainnet',
      courtSubgraphUrl: 'https://api.thegraph.com/subgraphs/name/aragon/aragon-court-v2-mainnet',
      courtUrl: 'https://court.aragon.org/#',
      voiceUrl: 'https://voice.aragon.org/',
      daoFactoryAddress: '0x897b8DeeA74AD703B6d3DA25ed9A3a23fC5629EF', // TODO: GIORGI update this
      governRegistryAddress: '0x4fe12c45ea84b1ae828615ccbc958c8e8f38edd8', // TODO: GIORGI update this,
      defaultDaoConfig: {
        executionDelay: 86400, // defaults to one day - how many seconds to wait before being able to call execute.
        scheduleDeposit: {
          token: '0x6b175474e89094c44da98b954eedeac495271d0f',
          amount: '10000000000000000000',
        },
        challengeDeposit: {
          token: '0x6b175474e89094c44da98b954eedeac495271d0f',
          amount: '10000000000000000000',
        },
        resolver: '0xC464EB732A1D2f5BbD705727576065C91B2E9f18',
        rules: 'No main agreement has been defined', // we use Bytes (ArrayLike<number>) instead of string hex
        maxCalldataSize: 100000, // initial maxCalldatasize
      },
      curatedTokens: {
        DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
        USDT: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      },
    },
  ],
  [
    'rinkeby',
    {
      chainId: 4,
      networkName: 'rinkeby',
      subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aragon/aragon-govern-rinkeby',
      courtSubgraphUrl: 'https://api.thegraph.com/subgraphs/name/aragon/aragon-court-v2-rinkeby',
      courtUrl: 'https://court-rinkeby.aragon.org/#',
      voiceUrl: 'http://voice-rinkeby.aragon.org/',
      daoFactoryAddress: '0x46013753f3a02ab4239cA936632E6C6B39235CCE',
      governRegistryAddress: '0xf46253ef29FaedAbf63AA8cA6c0A41CbbdC93948',
      defaultDaoConfig: {
        executionDelay: 180,
        scheduleDeposit: {
          token: '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735',
          amount: '10000000000000000000',
        },
        challengeDeposit: {
          token: '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735',
          amount: '10000000000000000000',
        },
        resolver: '0xC464EB732A1D2f5BbD705727576065C91B2E9f18',
        rules: 'No main agreement has been defined',
        maxCalldataSize: 100000,
      },
      curatedTokens: {
        DAI: '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735',
        USDT: '0x3B00Ef435fA4FcFF5C209a37d1f3dcff37c705aD',
        USDC: '0xeb8f08a975Ab53E34D8a0330E0D34de942C95926',
      },
    },
  ],
  [
    'staging',
    {
      chainId: 4,
      networkName: 'rinkeby',
      subgraphUrl: 'https://api.thegraph.com/subgraphs/name/aragon/aragon-govern-rinkeby-staging',
      courtSubgraphUrl: 'https://api.thegraph.com/subgraphs/name/aragon/aragon-court-v2-staging',
      courtUrl: 'https://court-rinkeby-staging.aragon.org/#',
      voiceUrl: 'http://voice-rinkeby.aragon.org/',
      daoFactoryAddress: '0x0f75Dd5E00f0A153fCee92A1C242Dbdf32D87196',
      governRegistryAddress: '0xcc3F32957d316a12AFCFed04c0716af4814eCB2B',
      defaultDaoConfig: {
        executionDelay: 180,
        scheduleDeposit: {
          token: '0x8F2Ac3fD1a9Ce7208eFff7C31aC0e2A98b0778f3',
          amount: '10000000000000000000',
        },
        challengeDeposit: {
          token: '0x8F2Ac3fD1a9Ce7208eFff7C31aC0e2A98b0778f3',
          amount: '10000000000000000000',
        },
        resolver: '0x9c003eC97676c30a041f128D671b3Db2f790c3E7',
        rules: 'No main agreement has been defined',
        maxCalldataSize: 100000,
      },
      curatedTokens: {
        DAI: '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735',
        USDT: '0x3B00Ef435fA4FcFF5C209a37d1f3dcff37c705aD',
        USDC: '0xeb8f08a975Ab53E34D8a0330E0D34de942C95926',
      },
    },
  ],
]);

export function getNetworkConfig(name: EnvironmentName): EnvironmentConfig {
  return networks.get(name) as EnvironmentConfig;
}
