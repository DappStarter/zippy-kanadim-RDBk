require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture stove radar ridge clutch harvest hat army giggle'; 
let testAccounts = [
"0x5465fdc13edbbd870949f632cad88a135601cd968588b871b8484b402c580eef",
"0xec83e5d826a2ae24886dcb3d5c7b9ecc468898beffd356802fdb0050fb661762",
"0x9eee6184f7633d6f44111fec99ebfa0c9d246fa5b815636b7e108b0d16addac0",
"0x6121d1d92c99f0adf01bf04aabbb2b2ddf1640d4164333b21dc47360703e84b3",
"0x9abe6b2ef0e7ad3ed28b5d552630037f1e3efa326ecc9722734e145eb4156372",
"0xd1eddfcfd32beb231f95956381ef557e176044fd1eb4ed2ce2e2ef0843ed2ff5",
"0xea818924ba6653d9f8b71742640fcb38028d2ea675da1ffdb6d48fc26bff1cbe",
"0x6591beeb1ea8072e4e39b176356e74fc8760ec7f2bcb0c1e43a599b86b80da3e",
"0xdec485b02c2b304ed87b0657e822bb6baf35cc6980e17a4a3bd2089cd0244660",
"0x85ed5d91254460a6b61e09aadb188dc846c8f19a2506d454d4b7b019bb2ef469"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


