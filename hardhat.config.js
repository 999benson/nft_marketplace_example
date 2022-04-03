/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    meter: {
      url: "https://rpctest.meter.io",
      accounts: ["6fecf28b6582882d129a0e081f32f88a706316efd2786a7b626d8207c04b8e01"]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}