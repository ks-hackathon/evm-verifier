/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  RingSigVerifier,
  RingSigVerifierInterface,
} from "../../../contracts/ringSigVerifier.sol/RingSigVerifier";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        internalType: "uint256[]",
        name: "ring",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "responses",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "c",
        type: "uint256",
      },
    ],
    name: "verifyRingSignature",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611cd7806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c434c5ee14610030575b600080fd5b61004a6004803603810190610045919061166c565b610060565b6040516100579190611742565b60405180910390f35b600060018451118015610080575060006002855161007e919061178c565b145b6100bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100b690611840565b60405180910390fd5b600284516100cd919061188f565b83511461010f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161010690611932565b60405180910390fd5b600061011a856102f0565b9050600061019082888760008151811061013757610136611952565b5b60200260200101518760405180604001604052808c60008151811061015f5761015e611952565b5b602002602001015181526020018c6001815181106101805761017f611952565b5b6020026020010151815250610375565b90506000600290505b600287516101a79190611981565b81101561024b576102358389886002856101c1919061188f565b815181106101d2576101d1611952565b5b60200260200101518560405180604001604052808d88815181106101f9576101f8611952565b5b602002602001015181526020018d60018961021491906119b5565b8151811061022557610224611952565b5b6020026020010151815250610375565b915060028161024491906119b5565b9050610199565b506102e2828887600189516102609190611981565b8151811061027157610270611952565b5b60200260200101518460405180604001604052808c60028e516102949190611981565b815181106102a5576102a4611952565b5b602002602001015181526020018c60018e516102c19190611981565b815181106102d2576102d1611952565b5b6020026020010151815250610375565b841492505050949350505050565b6060600060405180602001604052806000815250905060005b835181101561036b578161033685838151811061032957610328611952565b5b60200260200101516105c4565b604051602001610347929190611a5a565b6040516020818303038152906040529150808061036390611a7e565b915050610309565b5080915050919050565b60006103d68260006002811061038e5761038d611952565b5b6020020151836001600281106103a7576103a6611952565b5b6020020151600060077ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f610692565b610415576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040c90611b12565b60405180910390fd5b600080610486867f79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f817987f483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b860007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f610760565b915091506000806104eb87876000600281106104a5576104a4611952565b5b6020020151886001600281106104be576104bd611952565b5b602002015160007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f610760565b915091506000806105218686868660007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f61079a565b9150915060008c8c610532856105c4565b61053b856105c4565b60405160200161054e9493929190611b32565b60405160208183030381529060405260405160200161056d9190611b70565b60405160208183030381529060405290506105b2818051906020012060001c7ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036414161082d565b97505050505050505095945050505050565b6060600060016105d384610860565b01905060008167ffffffffffffffff8111156105f2576105f1611443565b5b6040519080825280601f01601f1916602001820160405280156106245781602001600182028036833780820191505090505b509050600082602001820190505b600115610687578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161067b5761067a61175d565b5b04945060008503610632575b819350505050919050565b600085600014806106a35750818610155b806106ae5750846000145b806106b95750818510155b156106c75760009050610757565b600082806106d8576106d761175d565b5b8687099050600083806106ee576106ed61175d565b5b8885806106fe576106fd61175d565b5b8a8b090990506000861461073257838061071b5761071a61175d565b5b848061072a5761072961175d565b5b878a09820890505b6000851461074f5783806107495761074861175d565b5b85820890505b808214925050505b95945050505050565b60008060008060006107778a8a8a60018b8b6109b3565b92509250925061078983838389610a52565b945094505050509550959350505050565b6000806000806000888b036107f057600086806107ba576107b961175d565b5b898c08036107d15760008094509450505050610822565b6107df8b8b60018a8a610ac9565b80935081945082955050505061080e565b6108018b8b60018c8c60018c610c87565b8093508194508295505050505b61081a83838389610a52565b945094505050505b965096945050505050565b600080828461083c919061178c565b9050600081101561085657828161085391906119b5565b90505b8091505092915050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106108be577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816108b4576108b361175d565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106108fb576d04ee2d6d415b85acef810000000083816108f1576108f061175d565b5b0492506020810190505b662386f26fc10000831061092a57662386f26fc1000083816109205761091f61175d565b5b0492506010810190505b6305f5e1008310610953576305f5e10083816109495761094861175d565b5b0492506008810190505b612710831061097857612710838161096e5761096d61175d565b5b0492506004810190505b6064831061099b57606483816109915761099061175d565b5b0492506002810190505b600a83106109aa576001810190505b80915050919050565b60008060008089036109cd57878787925092509250610a46565b60008990506000806000600190505b60008414610a385760006001851614610a0b576109fe8383838f8f8f8e610c87565b8093508194508295505050505b600284610a18919061188f565b9350610a278c8c8c8c8c610ac9565b809c50819d50829e505050506109dc565b828282965096509650505050505b96509650969350505050565b6000806000610a618585611306565b905060008480610a7457610a7361175d565b5b828309905060008580610a8a57610a8961175d565b5b828a09905060008680610aa057610a9f61175d565b5b8780610aaf57610aae61175d565b5b8486098a0990508181955095505050505094509492505050565b6000806000808603610ae357878787925092509250610c7c565b60008480610af457610af361175d565b5b898a09905060008580610b0a57610b0961175d565b5b898a09905060008680610b2057610b1f61175d565b5b898a09905060008780610b3657610b3561175d565b5b8880610b4557610b4461175d565b5b848e09600409905060008880610b5e57610b5d61175d565b5b8980610b6d57610b6c61175d565b5b8a80610b7c57610b7b61175d565b5b8586098c098a80610b9057610b8f61175d565b5b876003090890508880610ba657610ba561175d565b5b8980610bb557610bb461175d565b5b8384088a610bc39190611981565b8a80610bd257610bd161175d565b5b8384090894508880610be757610be661175d565b5b8980610bf657610bf561175d565b5b8a80610c0557610c0461175d565b5b8687096008098a610c169190611981565b8a80610c2557610c2461175d565b5b8b80610c3457610c3361175d565b5b888d610c409190611981565b860884090893508880610c5657610c5561175d565b5b8980610c6557610c6461175d565b5b8c8e09600209925084848497509750975050505050505b955095509592505050565b6000806000808a148015610c9b5750600089145b15610cae578686869250925092506112f9565b600087148015610cbe5750600086145b15610cd1578989899250925092506112f9565b610cd96113f2565b8480610ce857610ce761175d565b5b898a0981600060048110610cff57610cfe611952565b5b6020020181815250508480610d1757610d1661175d565b5b81600060048110610d2b57610d2a611952565b5b60200201518a0981600160048110610d4657610d45611952565b5b6020020181815250508480610d5e57610d5d61175d565b5b86870981600260048110610d7557610d74611952565b5b6020020181815250508480610d8d57610d8c61175d565b5b81600260048110610da157610da0611952565b5b6020020151870981600360048110610dbc57610dbb611952565b5b60200201818152505060405180608001604052808680610ddf57610dde61175d565b5b83600260048110610df357610df2611952565b5b60200201518e0981526020018680610e0e57610e0d61175d565b5b83600360048110610e2257610e21611952565b5b60200201518d0981526020018680610e3d57610e3c61175d565b5b83600060048110610e5157610e50611952565b5b60200201518b0981526020018680610e6c57610e6b61175d565b5b83600160048110610e8057610e7f611952565b5b60200201518a09815250905080600260048110610ea057610e9f611952565b5b602002015181600060048110610eb957610eb8611952565b5b6020020151141580610efb575080600360048110610eda57610ed9611952565b5b602002015181600160048110610ef357610ef2611952565b5b602002015114155b610f3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3190611bd3565b60405180910390fd5b610f426113f2565b8580610f5157610f5061175d565b5b82600060048110610f6557610f64611952565b5b602002015187610f759190611981565b83600260048110610f8957610f88611952565b5b60200201510881600060048110610fa357610fa2611952565b5b6020020181815250508580610fbb57610fba61175d565b5b82600160048110610fcf57610fce611952565b5b602002015187610fdf9190611981565b83600360048110610ff357610ff2611952565b5b6020020151088160016004811061100d5761100c611952565b5b60200201818152505085806110255761102461175d565b5b8160006004811061103957611038611952565b5b60200201518260006004811061105257611051611952565b5b6020020151098160026004811061106c5761106b611952565b5b60200201818152505085806110845761108361175d565b5b8160006004811061109857611097611952565b5b6020020151826002600481106110b1576110b0611952565b5b602002015109816003600481106110cb576110ca611952565b5b602002018181525050600086806110e5576110e461175d565b5b826003600481106110f9576110f8611952565b5b6020020151886111099190611981565b88806111185761111761175d565b5b8460016004811061112c5761112b611952565b5b60200201518560016004811061114557611144611952565b5b602002015109089050868061115d5761115c61175d565b5b878061116c5761116b61175d565b5b888061117b5761117a61175d565b5b8460026004811061118f5761118e611952565b5b6020020151866000600481106111a8576111a7611952565b5b602002015109600209886111bc9190611981565b82089050600087806111d1576111d061175d565b5b88806111e0576111df61175d565b5b838a6111ec9190611981565b8a806111fb576111fa61175d565b5b8660026004811061120f5761120e611952565b5b60200201518860006004811061122857611227611952565b5b602002015109088460016004811061124357611242611952565b5b6020020151099050878061125a5761125961175d565b5b88806112695761126861175d565b5b8460036004811061127d5761127c611952565b5b60200201518660016004811061129657611295611952565b5b602002015109896112a79190611981565b82089050600088806112bc576112bb61175d565b5b89806112cb576112ca61175d565b5b8b8f09856000600481106112e2576112e1611952565b5b602002015109905082828297509750975050505050505b9750975097945050505050565b60008083141580156113185750818314155b8015611325575060008214155b611364576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135b90611c3f565b60405180910390fd5b60008060019050600084905060005b600087146113e5578682611387919061188f565b90508286806113995761139861175d565b5b87806113a8576113a761175d565b5b858409886113b69190611981565b860880945081955050508687826113cd9190611c5f565b836113d89190611981565b8098508193505050611373565b8394505050505092915050565b6040518060800160405280600490602082028036833780820191505090505090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61147b82611432565b810181811067ffffffffffffffff8211171561149a57611499611443565b5b80604052505050565b60006114ad611414565b90506114b98282611472565b919050565b600067ffffffffffffffff8211156114d9576114d8611443565b5b6114e282611432565b9050602081019050919050565b82818337600083830152505050565b600061151161150c846114be565b6114a3565b90508281526020810184848401111561152d5761152c61142d565b5b6115388482856114ef565b509392505050565b600082601f83011261155557611554611428565b5b81356115658482602086016114fe565b91505092915050565b600067ffffffffffffffff82111561158957611588611443565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b6115b28161159f565b81146115bd57600080fd5b50565b6000813590506115cf816115a9565b92915050565b60006115e86115e38461156e565b6114a3565b9050808382526020820190506020840283018581111561160b5761160a61159a565b5b835b81811015611634578061162088826115c0565b84526020840193505060208101905061160d565b5050509392505050565b600082601f83011261165357611652611428565b5b81356116638482602086016115d5565b91505092915050565b600080600080608085870312156116865761168561141e565b5b600085013567ffffffffffffffff8111156116a4576116a3611423565b5b6116b087828801611540565b945050602085013567ffffffffffffffff8111156116d1576116d0611423565b5b6116dd8782880161163e565b935050604085013567ffffffffffffffff8111156116fe576116fd611423565b5b61170a8782880161163e565b925050606061171b878288016115c0565b91505092959194509250565b60008115159050919050565b61173c81611727565b82525050565b60006020820190506117576000830184611733565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006117978261159f565b91506117a28361159f565b9250826117b2576117b161175d565b5b828206905092915050565b600082825260208201905092915050565b7f52696e67206c656e677468206d757374206265206576656e20616e642067726560008201527f61746572207468616e2031000000000000000000000000000000000000000000602082015250565b600061182a602b836117bd565b9150611835826117ce565b604082019050919050565b600060208201905081810360008301526118598161181d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061189a8261159f565b91506118a58361159f565b9250826118b5576118b461175d565b5b828204905092915050565b7f526573706f6e736573206c656e677468206d75737420626520657175616c207460008201527f6f2072696e67206c656e677468202f2032000000000000000000000000000000602082015250565b600061191c6031836117bd565b9150611927826118c0565b604082019050919050565b6000602082019050818103600083015261194b8161190f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061198c8261159f565b91506119978361159f565b92508282039050818111156119af576119ae611860565b5b92915050565b60006119c08261159f565b91506119cb8361159f565b92508282019050808211156119e3576119e2611860565b5b92915050565b600081519050919050565b600081905092915050565b60005b83811015611a1d578082015181840152602081019050611a02565b60008484015250505050565b6000611a34826119e9565b611a3e81856119f4565b9350611a4e8185602086016119ff565b80840191505092915050565b6000611a668285611a29565b9150611a728284611a29565b91508190509392505050565b6000611a898261159f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611abb57611aba611860565b5b600182019050919050565b7f70726576696f75735075624b6579206973206e6f74206f6e2063757276650000600082015250565b6000611afc601e836117bd565b9150611b0782611ac6565b602082019050919050565b60006020820190508181036000830152611b2b81611aef565b9050919050565b6000611b3e8287611a29565b9150611b4a8286611a29565b9150611b568285611a29565b9150611b628284611a29565b915081905095945050505050565b6000611b7c8284611a29565b915081905092915050565b7f557365206a6163446f75626c652066756e6374696f6e20696e73746561640000600082015250565b6000611bbd601e836117bd565b9150611bc882611b87565b602082019050919050565b60006020820190508181036000830152611bec81611bb0565b9050919050565b7f496e76616c6964206e756d626572000000000000000000000000000000000000600082015250565b6000611c29600e836117bd565b9150611c3482611bf3565b602082019050919050565b60006020820190508181036000830152611c5881611c1c565b9050919050565b6000611c6a8261159f565b9150611c758361159f565b9250828202611c838161159f565b91508282048414831517611c9a57611c99611860565b5b509291505056fea2646970667358221220fcef0cd9c54482870b0d9426fc5373b6fdc409a62af54c5acfcc5c65a733914364736f6c63430008140033";

type RingSigVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RingSigVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RingSigVerifier__factory extends ContractFactory {
  constructor(...args: RingSigVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      RingSigVerifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): RingSigVerifier__factory {
    return super.connect(runner) as RingSigVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RingSigVerifierInterface {
    return new Interface(_abi) as RingSigVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): RingSigVerifier {
    return new Contract(address, _abi, runner) as unknown as RingSigVerifier;
  }
}