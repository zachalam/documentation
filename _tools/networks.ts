export const NETWORKS = [
  {
    page: "ethereum-addresses",
    title: "Ethereum Data Feeds",
    networks: [
      {
        name: "Ethereum Mainnet",
        url: "https://etherscan.io/address/",
        url_params: "",
        source: "directory.json",
      },
      {
        name: "Kovan Testnet",
        url: "https://kovan.etherscan.io/address/",
        url_params: "",
        source: "directory-kovan.json",
      },
      {
        name: "Rinkeby Testnet",
        url: "https://rinkeby.etherscan.io/address/",
        url_params: "",
        source: "directory-rinkeby.json",
      },
    ],
  },
  {
    page: "binance-smart-chain-addresses-price",
    title: "Binance Smart Chain Data Feeds",
    networks: [
      {
        name: "BSC Mainnet",
        url: "https://bscscan.com/address/",
        url_params: "",
        source: "directory-bsc-mainnet.json",
      },
      {
        name: "BSC Testnet",
        url: "https://testnet.bscscan.com/address/",
        url_params: "",
        source: "directory-bsc-testnet.json",
      },
    ],
  },
  {
    page: "matic-addresses",
    title: "Polygon (Matic) Data Feeds",
    networks: [
      {
        name: "Polygon Mainnet",
        url: "https://explorer-mainnet.maticvigil.com/address/",
        url_params: "",
        source: "directory-matic-mainnet.json",
      },
      {
        name: "Mumbai Testnet",
        url: "https://explorer-mumbai.maticvigil.com/address/",
        url_params: "",
        source: "directory-matic-testnet.json",
      },
    ],
  },
  {
    page: "xdai-price-feeds",
    title: "xDai Data Feeds",
    networks: [
      {
        name: "xDai Mainnet",
        url: "https://blockscout.com/poa/xdai/address/",
        url_params: "",
        source: "directory-xdai-mainnet.json",
      },
    ],
  },
  {
    page: "huobi-eco-chain-price-feeds",
    title: "Huobi Eco Chain Data Feeds",
    networks: [
      {
        name: "Huobi Mainnet",
        url: "https://hecoinfo.com/address/",
        url_params: "",
        source: "directory-heco-mainnet.json",
      },
    ],
  },
  {
    page: "avalanche-price-feeds",
    title: "Avalanche Data Feeds",
    networks: [
      {
        name: "Avalanche Mainnet",
        url: "https://cchain.explorer.avax.network/address/",
        url_params: "",
        source: "directory-avalanche-mainnet.json",
      },
      {
        name: "Avalanche Testnet",
        url: "https://cchain.explorer.avax-test.network/address/",
        url_params: "",
        source: "directory-avalanche-fuji-testnet.json",
      },
    ],
  },
  {
    page: "fantom-price-feeds",
    title: "Fantom Testnet",
    networks: [
      {
        name: "Fantom Mainnet",
        url: "https://ftmscan.com/address/",
        url_params: "",
        source: "directory-fantom-mainnet.json",
      },
      {
        name: "Fantom Testnet",
        url: "https://testnet.ftmscan.com/address/",
        url_params: "",
        source: "directory-fantom-testnet.json",
      },
    ],
  },
  {
    page: "arbitrum-price-feeds",
    title: "Arbitrum Data Feeds",
    networks: [
      {
        name: "Arbitrum Mainnet",
        url: "https://explorer.arbitrum.io/address/",
        url_params: "",
        source: "directory-ethereum-mainnet-arbitrum-1.json",
      },
      {
        name: "Arbitrum Rinkeby",
        url: "https://rinkeby-explorer.arbitrum.io/address/",
        url_params: "",
        source: "directory-arbitrum-rinkeby-1.json",
      },
    ],
  },
  {
    page: "harmony-price-feeds",
    title: "Harmony Data Feeds",
    networks: [
      {
        name: "Harmony Testnet",
        url: "https://explorer.testnet.harmony.one/#/address/",
        url_params: "",
        source: "directory-harmony-testnet-shard-0.json",
      },
    ],
  },
  {
    page: "solana-price-feeds",
    title: "Solana Data Feeds",
    networks: [
      {
        name: "Solana Devnet",
        url: "https://explorer.solana.com/address/",
        url_params: "?cluster=devnet",
        source: "directory-solana-devnet.json",
      },
    ],
  }
];