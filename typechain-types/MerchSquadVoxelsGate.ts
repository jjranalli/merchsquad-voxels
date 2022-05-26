/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MerchSquadVoxelsGateInterface extends utils.Interface {
  contractName: "MerchSquadVoxelsGate";
  functions: {
    "_setGate(uint256,address,uint256)": FunctionFragment;
    "isPurchaseAllowed(uint256,uint256,address,uint256,bytes,bytes)": FunctionFragment;
    "onProductPurchase(uint256,uint256,address,uint256,bytes,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_setGate",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isPurchaseAllowed",
    values: [
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onProductPurchase",
    values: [
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "_setGate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isPurchaseAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onProductPurchase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface MerchSquadVoxelsGate extends BaseContract {
  contractName: "MerchSquadVoxelsGate";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MerchSquadVoxelsGateInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _setGate(
      productId: BigNumberish,
      erc20: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isPurchaseAllowed(
      arg0: BigNumberish,
      productId: BigNumberish,
      account: string,
      arg3: BigNumberish,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isAllowed: boolean }>;

    onProductPurchase(
      slicerId: BigNumberish,
      productId: BigNumberish,
      account: string,
      quantity: BigNumberish,
      slicerCustomData: BytesLike,
      buyerCustomData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _setGate(
    productId: BigNumberish,
    erc20: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isPurchaseAllowed(
    arg0: BigNumberish,
    productId: BigNumberish,
    account: string,
    arg3: BigNumberish,
    arg4: BytesLike,
    arg5: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  onProductPurchase(
    slicerId: BigNumberish,
    productId: BigNumberish,
    account: string,
    quantity: BigNumberish,
    slicerCustomData: BytesLike,
    buyerCustomData: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _setGate(
      productId: BigNumberish,
      erc20: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isPurchaseAllowed(
      arg0: BigNumberish,
      productId: BigNumberish,
      account: string,
      arg3: BigNumberish,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    onProductPurchase(
      slicerId: BigNumberish,
      productId: BigNumberish,
      account: string,
      quantity: BigNumberish,
      slicerCustomData: BytesLike,
      buyerCustomData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    _setGate(
      productId: BigNumberish,
      erc20: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isPurchaseAllowed(
      arg0: BigNumberish,
      productId: BigNumberish,
      account: string,
      arg3: BigNumberish,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onProductPurchase(
      slicerId: BigNumberish,
      productId: BigNumberish,
      account: string,
      quantity: BigNumberish,
      slicerCustomData: BytesLike,
      buyerCustomData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _setGate(
      productId: BigNumberish,
      erc20: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isPurchaseAllowed(
      arg0: BigNumberish,
      productId: BigNumberish,
      account: string,
      arg3: BigNumberish,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onProductPurchase(
      slicerId: BigNumberish,
      productId: BigNumberish,
      account: string,
      quantity: BigNumberish,
      slicerCustomData: BytesLike,
      buyerCustomData: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}