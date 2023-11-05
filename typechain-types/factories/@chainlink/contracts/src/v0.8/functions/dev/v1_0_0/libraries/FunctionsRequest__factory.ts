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
import type { NonPayableOverrides } from "../../../../../../../../../common";
import type {
  FunctionsRequest,
  FunctionsRequestInterface,
} from "../../../../../../../../../@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsRequest";

const _abi = [
  {
    inputs: [],
    name: "EmptyArgs",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptySecrets",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptySource",
    type: "error",
  },
  {
    inputs: [],
    name: "NoInlineSecrets",
    type: "error",
  },
  {
    inputs: [],
    name: "REQUEST_DATA_VERSION",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608c610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80635d641dfc146038575b600080fd5b603f600181565b60405161ffff909116815260200160405180910390f3fea264697066735822122039a85c47e26eb1efd645b42a534f79f7ca0b9145b878d9c8f595c41cf6aeb9f464736f6c63430008140033";

type FunctionsRequestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FunctionsRequestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FunctionsRequest__factory extends ContractFactory {
  constructor(...args: FunctionsRequestConstructorParams) {
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
      FunctionsRequest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FunctionsRequest__factory {
    return super.connect(runner) as FunctionsRequest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FunctionsRequestInterface {
    return new Interface(_abi) as FunctionsRequestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FunctionsRequest {
    return new Contract(address, _abi, runner) as unknown as FunctionsRequest;
  }
}
