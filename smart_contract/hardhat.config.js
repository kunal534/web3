// https://eth-sepolia.g.alchemy.com/v2/qxQs0mw79mJCN8hFU6ziq7xkWLuNkvRf

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    Sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/qxQs0mw79mJCN8hFU6ziq7xkWLuNkvRf',
      accounts: ['2b5874a8c53a5c46ce04366cdd60b84d74d2a19a77fa2e5af24d83e8a28a33b7'],
    },
  },
};