require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture strategy deny scrub purity install hat army general'; 
let testAccounts = [
"0x569c34061835c0792a258a56d28f0402bb27970d56bfb68f875a0e03d84f3015",
"0x8579980e0cc9b97bafb20b1ed35eeca4b880b6c0f9a221d92d30bdd228fb375f",
"0xc0371b45dbd67f0681fffde48910a113fbe7963542abffe8b95e8fbf7b3a1448",
"0x2a895be7c6dc1e3743dd2ccfe4bff8ac9b124806cd7c2dba09c143f8f2a59345",
"0x0d355af9bc8f1acb37eb5c4b64de36ca24d889ee292912075afcf8b116ec89c5",
"0xfc685b0acbbe2fdae3bb88b854d5d1bc5058dc9c87e4da476dc1c854659817ca",
"0x85103c8cef6af52a50caf3659743d3973c1d440eecce12e1352da3f42e2be6a0",
"0x819f513282c9931dd55b0d4979e2cf6af58cf1e9f4a2f4fe9ae5e615b562051b",
"0xeef550dc1c7218cd3671dc54d52904508964cf4888dd01e9de867144d60e5ee6",
"0x302a0106564b1249f95231e11f10d49810bbc408ece74501bd7474cbd481a868"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

