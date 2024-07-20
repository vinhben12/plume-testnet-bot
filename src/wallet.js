const { Wallet } = require('ethers');

function createWallet(privateKey, provider) {
  return new Wallet(privateKey, provider);
}

function getAddress(privateKey, provider) {
  return new Wallet(privateKey, provider).address;
}

function generateTransactionData(salt, signature) {
  return `0x103fc4520000000000000000000000000000000000000000000000000000000000000060${salt.substring(
    2
  )}00000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000345544800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041${signature.substring(
    2
  )}00000000000000000000000000000000000000000000000000000000000000`;
}

module.exports = { createWallet, getAddress, generateTransactionData };