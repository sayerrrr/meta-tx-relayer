/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MarmoFactory,
  MarmoFactoryInterface,
} from "../../../contracts/MarmoStork.sol/MarmoFactory";

const _abi = [
  {
    inputs: [],
    name: "bytecode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_source",
        type: "address",
      },
    ],
    name: "createWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "hash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marmo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
    ],
    name: "marmoOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
    ],
    name: "reveal",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506113e6806100206000396000f3fe6080604052600436106100555760003560e01c806303ae2e831461005a57806309bd5a6014610085578063b054a9e8146100b0578063c392cf41146100d9578063e720e1b3146100f5578063f094000214610132575b600080fd5b34801561006657600080fd5b5061006f61015d565b60405161007c9190610ed0565b60405180910390f35b34801561009157600080fd5b5061009a610183565b6040516100a79190610eeb565b60405180910390f35b3480156100bc57600080fd5b506100d760048036038101906100d29190610c15565b610189565b005b6100f360048036038101906100ee9190610bbb565b610440565b005b34801561010157600080fd5b5061011c60048036038101906101179190610bbb565b61054d565b6040516101299190610ed0565b60405180910390f35b34801561013e57600080fd5b506101476105a5565b6040516101549190610f06565b60405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b61019281610633565b600090805190602001906101a7929190610ad9565b5060006040516101b79190610eb9565b60405180910390206001819055506000819050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663238ac9336040518163ffffffff1660e01b815260040160206040518083038186803b15801561022857600080fd5b505afa15801561023c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102609190610be8565b73ffffffffffffffffffffffffffffffffffffffff1614156102fc578073ffffffffffffffffffffffffffffffffffffffff166319ab453c739431bab00000000000000000000000039bd955c96040518263ffffffff1660e01b81526004016102c99190610ed0565b600060405180830381600087803b1580156102e357600080fd5b505af11580156102f7573d6000803e3d6000fd5b505050505b739431bab00000000000000000000000039bd955c973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663238ac9336040518163ffffffff1660e01b815260040160206040518083038186803b15801561036d57600080fd5b505afa158015610381573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a59190610be8565b73ffffffffffffffffffffffffffffffffffffffff16146103fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f290610f48565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600080805461044e906111e5565b80601f016020809104026020016040519081016040528092919081815260200182805461047a906111e5565b80156104c75780601f1061049c576101008083540402835291602001916104c7565b820191906000526020600020905b8154815290600101906020018083116104aa57829003601f168201915b505050505090506000828251602084016000f590508073ffffffffffffffffffffffffffffffffffffffff166319ab453c34856040518363ffffffff1660e01b81526004016105169190610ed0565b6000604051808303818588803b15801561052f57600080fd5b505af1158015610543573d6000803e3d6000fd5b5050505050505050565b600060ff60f81b308373ffffffffffffffffffffffffffffffffffffffff1660001b6001546040516020016105859493929190610def565b6040516020818303038152906040528051906020012060001c9050919050565b600080546105b2906111e5565b80601f01602080910402602001604051908101604052809291908181526020018280546105de906111e5565b801561062b5780601f106106005761010080835404028352916020019161062b565b820191906000526020600020905b81548152906001019060200180831161060e57829003601f168201915b505050505081565b60606106466106418361064d565b6106d4565b9050919050565b6060600060016106728473ffffffffffffffffffffffffffffffffffffffff16610950565b61067c9190610fed565b905060008060088361068e919061124f565b1461069a57600161069d565b60005b60ff166008836106ad919061107a565b6106b79190610fed565b9050600092508060005283600882602003021b6020525050919050565b606060148251111561071b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071290610f28565b60405180910390fd5b6109496040518060400160405280600181526020017f60000000000000000000000000000000000000000000000000000000000000008152506107b86107918551601d60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166109f490919063ffffffff16565b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916610a0c565b6040518060400160405280600981526020017f80600b6000396000f3000000000000000000000000000000000000000000000081525061088d8661087f61083b60018a5161080691906110ab565b606060f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166109f490919063ffffffff16565b6040518060400160405280600b81526020017f3660008037600080366000000000000000000000000000000000000000000000815250610a3590919063ffffffff16565b610a6890919063ffffffff16565b61090e6108ca8851601b60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166109f490919063ffffffff16565b6040518060400160405280600c81526020017f5af43d6000803e60003d91600000000000000000000000000000000000000000815250610a3590919063ffffffff16565b6040518060400160405280600481526020017f57fd5bf300000000000000000000000000000000000000000000000000000000815250610a94565b9050919050565b60008060009050600060ff90505b8160ff168160ff1611156109e657600060018260ff168460ff166109829190610fb5565b61ffff16901c905060008160ff1686901c905060008114156109b2576001826109ab91906110df565b92506109df565b60018111156109cf576001826109c89190611043565b93506109de565b8160ff169450505050506109ef565b5b505061095e565b8060ff16925050505b919050565b60006109ff82610acc565b9050808301905092915050565b606081604051602001610a1f9190610dd4565b6040516020818303038152906040529050919050565b6060610a608383604051602001610a4c9190610dd4565b604051602081830303815290604052610a68565b905092915050565b60608282604051602001610a7d929190610e3d565b604051602081830303815290604052905092915050565b6060868686868686604051602001610ab196959493929190610e61565b60405160208183030381529060405290509695505050505050565b60008160f81b9050919050565b828054610ae5906111e5565b90600052602060002090601f016020900481019282610b075760008555610b4e565b82601f10610b2057805160ff1916838001178555610b4e565b82800160010185558215610b4e579182015b82811115610b4d578251825591602001919060010190610b32565b5b509050610b5b9190610b5f565b5090565b5b80821115610b78576000816000905550600101610b60565b5090565b600081359050610b8b81611382565b92915050565b600081519050610ba081611382565b92915050565b600081359050610bb581611399565b92915050565b600060208284031215610bd157610bd061130d565b5b6000610bdf84828501610b7c565b91505092915050565b600060208284031215610bfe57610bfd61130d565b5b6000610c0c84828501610b91565b91505092915050565b600060208284031215610c2b57610c2a61130d565b5b6000610c3984828501610ba6565b91505092915050565b610c4b81611113565b82525050565b610c62610c5d82611113565b611217565b82525050565b610c79610c7482611137565b611229565b82525050565b610c8881611163565b82525050565b610c9f610c9a82611163565b611233565b82525050565b6000610cb082610f7d565b610cba8185610f88565b9350610cca8185602086016111b2565b610cd381611312565b840191505092915050565b6000610ce982610f7d565b610cf38185610f99565b9350610d038185602086016111b2565b80840191505092915050565b60008154610d1c816111e5565b610d268186610f99565b94506001821660008114610d415760018114610d5257610d85565b60ff19831686528186019350610d85565b610d5b85610f68565b60005b83811015610d7d57815481890152600182019150602081019050610d5e565b838801955050505b50505092915050565b6000610d9b601083610fa4565b9150610da682611330565b602082019050919050565b6000610dbe601783610fa4565b9150610dc982611359565b602082019050919050565b6000610de08284610c68565b60018201915081905092915050565b6000610dfb8287610c68565b600182019150610e0b8286610c51565b601482019150610e1b8285610c8e565b602082019150610e2b8284610c8e565b60208201915081905095945050505050565b6000610e498285610cde565b9150610e558284610cde565b91508190509392505050565b6000610e6d8289610cde565b9150610e798288610cde565b9150610e858287610cde565b9150610e918286610cde565b9150610e9d8285610cde565b9150610ea98284610cde565b9150819050979650505050505050565b6000610ec58284610d0f565b915081905092915050565b6000602082019050610ee56000830184610c42565b92915050565b6000602082019050610f006000830184610c7f565b92915050565b60006020820190508181036000830152610f208184610ca5565b905092915050565b60006020820190508181036000830152610f4181610d8e565b9050919050565b60006020820190508181036000830152610f6181610db1565b9050919050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000610fc08261116d565b9150610fcb8361116d565b92508261ffff03821115610fe257610fe1611280565b5b828201905092915050565b6000610ff88261119b565b91506110038361119b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561103857611037611280565b5b828201905092915050565b600061104e826111a5565b9150611059836111a5565b92508260ff0382111561106f5761106e611280565b5b828201905092915050565b60006110858261119b565b91506110908361119b565b9250826110a05761109f6112af565b5b828204905092915050565b60006110b68261119b565b91506110c18361119b565b9250828210156110d4576110d3611280565b5b828203905092915050565b60006110ea826111a5565b91506110f5836111a5565b92508282101561110857611107611280565b5b828203905092915050565b600061111e8261117b565b9050919050565b60006111308261117b565b9050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156111d05780820151818401526020810190506111b5565b838111156111df576000848401525b50505050565b600060028204905060018216806111fd57607f821691505b60208210811415611211576112106112de565b5b50919050565b60006112228261123d565b9050919050565b6000819050919050565b6000819050919050565b600061124882611323565b9050919050565b600061125a8261119b565b91506112658361119b565b925082611275576112746112af565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f4164647265737320746f6f206c6f6e6700000000000000000000000000000000600082015250565b7f4572726f7220696e6974204d61726d6f20736f75726365000000000000000000600082015250565b61138b81611113565b811461139657600080fd5b50565b6113a281611125565b81146113ad57600080fd5b5056fea2646970667358221220839e62b47ce143eee2fd2775b868cb2cce272d67312b2a52e7751e563143f53c64736f6c63430008060033";

type MarmoFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarmoFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MarmoFactory__factory extends ContractFactory {
  constructor(...args: MarmoFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MarmoFactory> {
    return super.deploy(overrides || {}) as Promise<MarmoFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MarmoFactory {
    return super.attach(address) as MarmoFactory;
  }
  override connect(signer: Signer): MarmoFactory__factory {
    return super.connect(signer) as MarmoFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarmoFactoryInterface {
    return new utils.Interface(_abi) as MarmoFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarmoFactory {
    return new Contract(address, _abi, signerOrProvider) as MarmoFactory;
  }
}
