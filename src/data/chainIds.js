export const chainData = {
  // Mainnets
  "1": { name: "Ethereum Mainnet", alias: ["eth", "ethereum", "mainnet"] },
  "10": { name: "Optimism", alias: ["op", "optimism"] },
  "56": { name: "BNB Smart Chain", alias: ["bsc", "binance", "bnb"] },
  "137": { name: "Polygon", alias: ["polygon", "matic"] },
  "1329": { name: "SEI", alias: ["sei"] },
  "5000": { name: "Mantle", alias: ["mantle", "mnt"] },
  "42161": { name: "Arbitrum One", alias: ["arbitrum", "arb"] },
  "43114": { name: "Avalanche C-Chain", alias: ["avalanche", "avax"] },
  "81457": { name: "Blast", alias: ["blast"] },
  "167000": { name: "Taiko", alias: ["taiko"] },

  // Testnets
  "5": { name: "Goerli", alias: ["goerli"] },
  "11155111": { name: "Sepolia", alias: ["sepolia"] },
  "80001": { name: "Polygon Mumbai", alias: ["mumbai"] },
  "421613": { name: "Arbitrum Goerli", alias: ["arbitrum-goerli"] },
  "43113": { name: "Avalanche Fuji", alias: ["fuji"] }
};

// Function to find chain ID by name
export const findChainId = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase().trim();
  
  for (const [chainId, data] of Object.entries(chainData)) {
    if (
      data.name.toLowerCase() === searchTerm ||
      data.alias.some(alias => alias === searchTerm)
    ) {
      return chainId;
    }
  }
  return null;
};

// Function to find chain name by ID
export const findChainName = (chainId) => {
  chainId = chainId.trim();
  return chainData[chainId]?.name || null;
};
