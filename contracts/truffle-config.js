require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require('xdc3');
const web3 = new Web3('http://localhost:7545');



// 12-word mnemonic
const mainnet_mnemonic = process.env.MAINNET_MNEMONIC;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    mainnet: {
      provider: new HDWalletProvider(
        mainnet_mnemonic,
        "https://rpc.xinfin.network"
      ),
      network_id: 50, // official id of the xinfin network
      gas: 21000,
      gasPrice: web3.utils.toWei("1.1", "gwei"),
    },
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1000,
        },
      },
    },
  },
};
