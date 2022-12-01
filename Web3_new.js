solc = require("solc");
fs = require("fs");

let Web3 = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

let fileContent = fs.readFileSync("Contract-1.sol").toString();
console.log(fileContent);

var input = {
  language: "Solidity",
  sources: {
    "Contract-1.sol": {
      content: fileContent,
    },
  },

  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));

console.log(output);

ABI = output.contracts["Contract-1.sol"]["firstContract"].abi;
bytecode =
  output.contracts["Contract-1.sol"]["firstContract"].evm.bytecode.object;
console.log("ABI:", ABI);
console.log("byetecode:", bytecode);
