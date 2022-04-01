/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface MarmoInterface extends utils.Interface {
  functions: {
    "cancel(bytes32)": FunctionFragment;
    "init(address)": FunctionFragment;
    "isCanceled(bytes32)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "relay(address,bytes,bytes)": FunctionFragment;
    "relayedAt(bytes32)": FunctionFragment;
    "relayedBy(bytes32)": FunctionFragment;
    "signer()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancel"
      | "init"
      | "isCanceled"
      | "onERC721Received"
      | "relay"
      | "relayedAt"
      | "relayedBy"
      | "signer"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "cancel", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "init", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isCanceled",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "relay",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "relayedAt",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "relayedBy",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "signer", values?: undefined): string;

  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isCanceled", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "relay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "relayedAt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "relayedBy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "signer", data: BytesLike): Result;

  events: {
    "Canceled(bytes32)": EventFragment;
    "Relayed(bytes32,address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Canceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Relayed"): EventFragment;
}

export interface CanceledEventObject {
  _id: string;
}
export type CanceledEvent = TypedEvent<[string], CanceledEventObject>;

export type CanceledEventFilter = TypedEventFilter<CanceledEvent>;

export interface RelayedEventObject {
  _id: string;
  _implementation: string;
  _data: string;
}
export type RelayedEvent = TypedEvent<
  [string, string, string],
  RelayedEventObject
>;

export type RelayedEventFilter = TypedEventFilter<RelayedEvent>;

export interface Marmo extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarmoInterface;

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
    cancel(
      _id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    init(
      _signer: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isCanceled(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _canceled: boolean }>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    relay(
      _implementation: string,
      _data: BytesLike,
      _signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    relayedAt(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _block: BigNumber }>;

    relayedBy(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { _relayer: string }>;

    signer(overrides?: CallOverrides): Promise<[string] & { _signer: string }>;
  };

  cancel(
    _id: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  init(
    _signer: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isCanceled(_id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  relay(
    _implementation: string,
    _data: BytesLike,
    _signature: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  relayedAt(_id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  relayedBy(_id: BytesLike, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cancel(_id: BytesLike, overrides?: CallOverrides): Promise<void>;

    init(_signer: string, overrides?: CallOverrides): Promise<void>;

    isCanceled(_id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    relay(
      _implementation: string,
      _data: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    relayedAt(_id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    relayedBy(_id: BytesLike, overrides?: CallOverrides): Promise<string>;

    signer(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Canceled(bytes32)"(_id?: BytesLike | null): CanceledEventFilter;
    Canceled(_id?: BytesLike | null): CanceledEventFilter;

    "Relayed(bytes32,address,bytes)"(
      _id?: BytesLike | null,
      _implementation?: null,
      _data?: null
    ): RelayedEventFilter;
    Relayed(
      _id?: BytesLike | null,
      _implementation?: null,
      _data?: null
    ): RelayedEventFilter;
  };

  estimateGas: {
    cancel(
      _id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    init(
      _signer: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isCanceled(_id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    relay(
      _implementation: string,
      _data: BytesLike,
      _signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    relayedAt(_id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    relayedBy(_id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    signer(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cancel(
      _id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    init(
      _signer: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isCanceled(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    relay(
      _implementation: string,
      _data: BytesLike,
      _signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    relayedAt(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    relayedBy(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    signer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
