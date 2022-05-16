/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC1155Upgradeable,
  ERC1155UpgradeableInterface,
} from "../ERC1155Upgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506113c4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461017957600080fd5b8062fdd58e1461008c57806301ffc9a7146100b25780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a366004610bc9565b61018c565b6040519081526020015b60405180910390f35b6100c56100c0366004610c0c565b610225565b60405190151581526020016100a9565b6100e86100e3366004610c30565b610277565b6040516100a99190610c96565b610108610103366004610df5565b61030b565b005b61011d610118366004610e9f565b6103a2565b6040516100a99190610fa5565b610108610138366004610fb8565b6104cc565b6100c561014b366004610ff4565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205460ff1690565b610108610187366004611027565b6104db565b60006001600160a01b0383166101fd5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b5060009081526065602090815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b148061025657506001600160e01b031982166303a24d0760e21b145b8061027157506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060606780546102869061108c565b80601f01602080910402602001604051908101604052809291908181526020018280546102b29061108c565b80156102ff5780601f106102d4576101008083540402835291602001916102ff565b820191906000526020600020905b8154815290600101906020018083116102e257829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103275750610327853361014b565b61038e5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b60648201526084016101f4565b61039b8585858585610562565b5050505050565b606081518351146104075760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016101f4565b6000835167ffffffffffffffff81111561042357610423610ca9565b60405190808252806020026020018201604052801561044c578160200160208202803683370190505b50905060005b84518110156104c457610497858281518110610470576104706110c6565b602002602001015185838151811061048a5761048a6110c6565b602002602001015161018c565b8282815181106104a9576104a96110c6565b60209081029190910101526104bd816110f2565b9050610452565b509392505050565b6104d7338383610742565b5050565b6001600160a01b0385163314806104f757506104f7853361014b565b6105555760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b60648201526084016101f4565b61039b8585858585610822565b81518351146105c45760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016101f4565b6001600160a01b0384166105ea5760405162461bcd60e51b81526004016101f49061110b565b3360005b84518110156106d457600085828151811061060b5761060b6110c6565b602002602001015190506000858381518110610629576106296110c6565b60209081029190910181015160008481526065835260408082206001600160a01b038e16835290935291909120549091508181101561067a5760405162461bcd60e51b81526004016101f490611150565b60008381526065602090815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906106b990849061119a565b92505081905550505050806106cd906110f2565b90506105ee565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516107249291906111b2565b60405180910390a461073a81878787878761094c565b505050505050565b816001600160a01b0316836001600160a01b0316036107b55760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016101f4565b6001600160a01b03838116600081815260666020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166108485760405162461bcd60e51b81526004016101f49061110b565b3361086181878761085888610aa7565b61039b88610aa7565b60008481526065602090815260408083206001600160a01b038a168452909152902054838110156108a45760405162461bcd60e51b81526004016101f490611150565b60008581526065602090815260408083206001600160a01b038b81168552925280832087850390559088168252812080548692906108e390849061119a565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610943828888888888610af2565b50505050505050565b6001600160a01b0384163b1561073a5760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061099090899089908890889088906004016111e0565b6020604051808303816000875af19250505080156109cb575060408051601f3d908101601f191682019092526109c89181019061123e565b60015b610a77576109d761125b565b806308c379a003610a1057506109eb611277565b806109f65750610a12565b8060405162461bcd60e51b81526004016101f49190610c96565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016101f4565b6001600160e01b0319811663bc197c8160e01b146109435760405162461bcd60e51b81526004016101f490611301565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610ae157610ae16110c6565b602090810291909101015292915050565b6001600160a01b0384163b1561073a5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610b369089908990889088908890600401611349565b6020604051808303816000875af1925050508015610b71575060408051601f3d908101601f19168201909252610b6e9181019061123e565b60015b610b7d576109d761125b565b6001600160e01b0319811663f23a6e6160e01b146109435760405162461bcd60e51b81526004016101f490611301565b80356001600160a01b0381168114610bc457600080fd5b919050565b60008060408385031215610bdc57600080fd5b610be583610bad565b946020939093013593505050565b6001600160e01b031981168114610c0957600080fd5b50565b600060208284031215610c1e57600080fd5b8135610c2981610bf3565b9392505050565b600060208284031215610c4257600080fd5b5035919050565b6000815180845260005b81811015610c6f57602081850181015186830182015201610c53565b81811115610c81576000602083870101525b50601f01601f19169290920160200192915050565b602081526000610c296020830184610c49565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff81118282101715610ce557610ce5610ca9565b6040525050565b600067ffffffffffffffff821115610d0657610d06610ca9565b5060051b60200190565b600082601f830112610d2157600080fd5b81356020610d2e82610cec565b604051610d3b8282610cbf565b83815260059390931b8501820192828101915086841115610d5b57600080fd5b8286015b84811015610d765780358352918301918301610d5f565b509695505050505050565b600082601f830112610d9257600080fd5b813567ffffffffffffffff811115610dac57610dac610ca9565b604051610dc3601f8301601f191660200182610cbf565b818152846020838601011115610dd857600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215610e0d57600080fd5b610e1686610bad565b9450610e2460208701610bad565b9350604086013567ffffffffffffffff80821115610e4157600080fd5b610e4d89838a01610d10565b94506060880135915080821115610e6357600080fd5b610e6f89838a01610d10565b93506080880135915080821115610e8557600080fd5b50610e9288828901610d81565b9150509295509295909350565b60008060408385031215610eb257600080fd5b823567ffffffffffffffff80821115610eca57600080fd5b818501915085601f830112610ede57600080fd5b81356020610eeb82610cec565b604051610ef88282610cbf565b83815260059390931b8501820192828101915089841115610f1857600080fd5b948201945b83861015610f3d57610f2e86610bad565b82529482019490820190610f1d565b96505086013592505080821115610f5357600080fd5b50610f6085828601610d10565b9150509250929050565b600081518084526020808501945080840160005b83811015610f9a57815187529582019590820190600101610f7e565b509495945050505050565b602081526000610c296020830184610f6a565b60008060408385031215610fcb57600080fd5b610fd483610bad565b915060208301358015158114610fe957600080fd5b809150509250929050565b6000806040838503121561100757600080fd5b61101083610bad565b915061101e60208401610bad565b90509250929050565b600080600080600060a0868803121561103f57600080fd5b61104886610bad565b945061105660208701610bad565b93506040860135925060608601359150608086013567ffffffffffffffff81111561108057600080fd5b610e9288828901610d81565b600181811c908216806110a057607f821691505b6020821081036110c057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611104576111046110dc565b5060010190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b600082198211156111ad576111ad6110dc565b500190565b6040815260006111c56040830185610f6a565b82810360208401526111d78185610f6a565b95945050505050565b6001600160a01b0386811682528516602082015260a06040820181905260009061120c90830186610f6a565b828103606084015261121e8186610f6a565b905082810360808401526112328185610c49565b98975050505050505050565b60006020828403121561125057600080fd5b8151610c2981610bf3565b600060033d11156112745760046000803e5060005160e01c5b90565b600060443d10156112855790565b6040516003193d81016004833e81513d67ffffffffffffffff81602484011181841117156112b557505050505090565b82850191508151818111156112cd5750505050505090565b843d87010160208285010111156112e75750505050505090565b6112f660208286010187610cbf565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061138390830184610c49565b97965050505050505056fea26469706673582212201fecbf3221f57e3b5b89a6f65bd8a6556a643fe78740e76a4179bd19aa5b3f8c64736f6c634300080d0033";

type ERC1155UpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155UpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155Upgradeable__factory extends ContractFactory {
  constructor(...args: ERC1155UpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC1155Upgradeable";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC1155Upgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155Upgradeable {
    return super.attach(address) as ERC1155Upgradeable;
  }
  connect(signer: Signer): ERC1155Upgradeable__factory {
    return super.connect(signer) as ERC1155Upgradeable__factory;
  }
  static readonly contractName: "ERC1155Upgradeable";
  public readonly contractName: "ERC1155Upgradeable";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155UpgradeableInterface {
    return new utils.Interface(_abi) as ERC1155UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Upgradeable;
  }
}
