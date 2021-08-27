module.exports = {
  navigation: {
    nodeOperator: [
      {
        section: 'NODE OPERATORS',
        contents: [
          { url: '/docs/node-operator-overview/', title: 'Overview' },
          {
            url: '/docs/running-a-chainlink-node/',
            title: 'Running a Chainlink Node',
          },
          { url: '/docs/fulfilling-requests/', title: 'Fulfilling Requests' },
          {
            url: '/docs/run-an-ethereum-client/',
            title: 'Run an Ethereum Client',
          },
          {
            url: '/docs/performing-system-maintenance/',
            title: 'Performing System Maintenance',
          },
          {
            url: '/docs/connecting-to-a-remote-database/',
            title: 'Connecting to a Remote Database',
          },
          {
            url: '/docs/configuration-variables/',
            title: 'Configuration Variables',
          },
          {
            url: '/docs/enabling-https-connections/',
            title: 'Enabling HTTPS Connections',
          },
          { url: '/docs/miscellaneous/', title: 'Miscellaneous' },
          {
            url: '/docs/best-security-practices/',
            title: 'Best Security and Operating Practices',
          },
        ],
      },
      {
        section: 'ORACLE JOBS',
        contents: [
          {
            url: '/docs/jobs/migration-v1-v2',
            title: 'Migrating to v2 Jobs',
          },
          {
            url: '/docs/jobs/',
            title: 'Jobs',
            children: [
              { url: '/docs/jobs/types/cron/', title: 'Cron' },
              {
                url: '/docs/jobs/types/direct-request/',
                title: 'Direct Request',
              },
              {
                url: '/docs/jobs/types/flux-monitor/',
                title: 'Flux Monitor',
              },
              { url: '/docs/jobs/types/keeper/', title: 'Keeper' },
              {
                url: '/docs/jobs/types/offchain-reporting/',
                title: 'Off-chain Reporting',
              },
              { url: '/docs/jobs/types/webhook/', title: 'Webhook' },
            ],
          },
          {
            url: '/docs/tasks/',
            title: 'Tasks',
            children: [
              { url: '/docs/jobs/task-types/http/', title: 'HTTP' },
              { url: '/docs/jobs/task-types/bridge/', title: 'Bridge' },
              { url: '/docs/jobs/task-types/jsonparse/', title: 'JSON Parse' },
              { url: '/docs/jobs/task-types/cborparse/', title: 'CBOR Parse' },
              {
                url: '/docs/jobs/task-types/eth-abi-decode/',
                title: 'ETH ABI Decode',
              },
              {
                url: '/docs/jobs/task-types/eth-abi-decode-log/',
                title: 'ETH ABI Decode Log',
              },
              {
                url: '/docs/jobs/task-types/eth-abi-encode/',
                title: 'ETH ABI Encode',
              },
              { url: '/docs/jobs/task-types/eth-call/', title: 'ETH Call' },
              { url: '/docs/jobs/task-types/eth-tx/', title: 'ETH Tx' },

              { url: '/docs/jobs/task-types/multiply/', title: 'Multiply' },
              { url: '/docs/jobs/task-types/divide/', title: 'Divide' },

              { url: '/docs/jobs/task-types/any/', title: 'Any' },
              { url: '/docs/jobs/task-types/mean/', title: 'Mean' },
              { url: '/docs/jobs/task-types/median/', title: 'Median' },
              { url: '/docs/jobs/task-types/mode/', title: 'Mode' },
              { url: '/docs/jobs/task-types/sum/', title: 'Sum' },
            ],
          },
        ],
      },
      {
        section: 'v1 JSON JOBS [DEPRECATED]',
        contents: [
          { url: '/docs/job-specifications/', title: 'Job Specifications' },
          { url: '/docs/core-adapters/', title: 'Core Adapters' },
          { url: '/docs/initiators/', title: 'Initiators' },
        ],
      },
      {
        section: 'EXTERNAL ADAPTERS',
        contents: [
          { url: '/docs/external-adapters/', title: 'Introduction' },
          {
            url: '/docs/contract-creators/',
            title: 'External Adapters in Solidity',
          },
          { url: '/docs/developers/', title: 'Building External Adapters' },
          {
            url: '/docs/node-operators/',
            title: 'Bridges: Adding External Adapters to Nodes',
          },
        ],
      },
      {
        section: 'EXTERNAL INITIATORS',
        contents: [
          {
            url: '/docs/external-initiators-introduction/',
            title: 'Introduction',
          },
          {
            url: '/docs/building-external-initiators/',
            title: 'Building External Initiators',
          },
          {
            url: '/docs/external-initiators-in-nodes/',
            title: 'Adding External Initiators to Nodes',
          },
        ],
      },
    ],
    smartContract: [
      {
        section: 'INTRODUCTION',
        contents: [
          {
            title: 'Tutorials',
            url: '/docs/tutorials/',
            children: [
              {
                title: 'The Basics',
                url: '/docs/beginners-tutorial/',
              },
              {
                title: 'Random Numbers',
                url: '/docs/intermediates-tutorial/',
              },
              {
                title: 'API Calls',
                url: '/docs/advanced-tutorial/',
              },
              {
                title: 'Other Tutorials',
                url: '/docs/other-tutorials/',
              },
            ],
          },
          {
            title: 'Architecture Overview',
            url: '/docs/architecture-overview/',
            children: [
              {
                title: 'Basic Request Model',
                url: '/docs/architecture-request-model/',
              },
              {
                title: 'Decentralized Data Model',
                url: '/docs/architecture-decentralized-model/',
              },
              {
                title: 'Off-Chain Reporting',
                url: '/docs/off-chain-reporting/',
              },
            ],
          },
        ],
      },
      {
        section: 'USING DATA FEEDS',
        contents: [
          {
            title: 'Introduction to Data Feeds',
            url: '/docs/using-chainlink-reference-contracts/',
          },
          { title: 'Get the Latest Price', url: '/docs/get-the-latest-price/' },
          {
            title: 'Historical Price Data',
            url: '/docs/historical-price-data/',
          },
          { title: 'Feed Registry', url: '/docs/feed-registry/' },
          {
            title: 'API Reference',
            url: '/docs/price-feeds-api-reference/',
          },
          {
            title: 'Contract Addresses',
            url: '/docs/reference-contracts/',
            children: [
              { title: 'ENS', url: '/docs/ens/' },
              {
                title: 'Ethereum Data Feeds',
                url: '/docs/ethereum-addresses/',
              },
              {
                title: 'Binance Smart Chain Data Feeds',
                url: '/docs/binance-smart-chain-addresses/',
              },
              {
                title: 'Polygon (Matic) Data Feeds',
                url: '/docs/matic-addresses/',
              },
              {
                title: 'xDai Data Feeds',
                url: '/docs/xdai-price-feeds/',
              },
              {
                title: 'Huobi Eco Chain Data Feeds',
                url: '/docs/huobi-eco-chain-price-feeds/',
              },
              {
                title: 'Avalanche Data Feeds',
                url: '/docs/avalanche-price-feeds/',
              },
              {
                title: 'Fantom Data Feeds',
                url: '/docs/fantom-price-feeds/',
              },
              {
                title: 'Arbitrum Data Feeds',
                url: '/docs/arbitrum-price-feeds/',
              },
              {
                title: 'Harmony Data Feeds',
                url: '/docs/harmony-price-feeds/',
              },
              {
                title: 'Solana Data Feeds',
                url: '/docs/solana-price-feeds/',
              },
            ],
          },
        ],
      },
      {
        section: 'USING RANDOMNESS',
        contents: [
          {
            title: 'Introduction to Chainlink VRF',
            url: '/docs/chainlink-vrf/',
          },
          { title: 'Get a Random Number', url: '/docs/get-a-random-number/' },
          { title: 'API Reference', url: '/docs/chainlink-vrf-api-reference/' },
          {
            title: 'Security Considerations',
            url: '/docs/vrf-security-considerations/',
          },
          { title: 'Contract Addresses', url: '/docs/vrf-contracts/' },
          {
            title: 'Best Practices',
            url: '/docs/chainlink-vrf-best-practices/',
          },
        ],
      },
      {
        section: 'USING CHAINLINK KEEPERS',
        contents: [
          {
            title: 'Introduction',
            url: '/docs/chainlink-keepers/introduction/',
          },
          {
            title: 'Making Compatible Contracts',
            url: '/docs/chainlink-keepers/compatible-contracts/',
          },
          {
            title: 'Register Upkeep for a Contract',
            url: '/docs/chainlink-keepers/register-upkeep/',
          },
          {
            title: 'Patterns and Best Practices',
            url: '/docs/chainlink-keepers/best-practices/',
          },
          {
            title: 'Network Overview',
            url: '/docs/chainlink-keepers/overview/',
          },
          { title: 'FAQs', url: '/docs/chainlink-keepers/faqs/' },
        ],
      },
      {
        section: 'USING ANY API',
        contents: [
          {
            title: 'Introduction to Using Any API',
            url: '/docs/request-and-receive-data/',
          },
          {
            title: 'Make a GET Request',
            url: '/docs/make-a-http-get-request/',
          },
          {
            title: 'Make an Existing Job Request',
            url: '/docs/existing-job-request/',
          },
          {
            title: 'Multi-Variable Responses',
            url: '/docs/multi-variable-responses/',
          },
          {
            title: 'Large Responses',
            url: '/docs/large-responses/',
          },
          { title: 'Find Existing Jobs', url: '/docs/listing-services/' },
          { title: 'API Reference', url: '/docs/chainlink-framework/' },
          {
            title: 'Contract Addresses',
            url: '/docs/decentralized-oracles-ethereum-mainnet/',
          },
        ],
      },
      {
        section: 'DEVELOPER REFERENCE',
        contents: [
          {
            title: 'Install Instructions',
            url: '/docs/create-a-chainlinked-project/',
          },
          { title: 'LINK Token Contracts', url: '/docs/link-token-contracts/' },
          {
            title: 'Developer Communications',
            url: '/docs/developer-communications/',
          },
          {
            title: 'Data Provider Nodes',
            url: '/docs/data-provider-nodes/',
          },
          { title: 'Hackathon Resources', url: '/docs/hackathon-resources/' },
          {
            title: 'User Guides',
            url: '/docs/user-guides/',
            children: [
              {
                title: 'Install, configure & fund MetaMask',
                url: '/docs/install-metamask/',
              },
              {
                title: 'Acquire testnet LINK',
                url: '/docs/acquire-link/',
              },
              {
                title: 'Deploy your first contract',
                url: '/docs/deploy-your-first-contract/',
              },
              {
                title: 'Fund your contract',
                url: '/docs/fund-your-contract/',
              },
              {
                title: 'Use your first contract!',
                url: '/docs/use-your-first-contract/',
              },
            ],
          },
        ],
      },
    ],
  },
};
