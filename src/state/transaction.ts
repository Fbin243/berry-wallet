import { Token } from "@engine/types";
import { proxy } from "valtio";

export enum TransactionStatus {
  PENDING = "Pending",
  SUCCESS = "Success",
  FAILED = "Failed",
}

export interface TransactionState {
  senderPublicKey: string;
  receiverPublicKey: string;
  amount: string;
  fee: number;
  status: TransactionStatus;
  date: string;
  token: Token;
  signature: string;
}

export const transactionState = proxy<TransactionState>({
  senderPublicKey: "",
  receiverPublicKey: "",
  amount: "",
  fee: 0,
  status: TransactionStatus.PENDING,
  date: "",
  token: {} as Token,
  signature: "",
});

export const transactionActions = {
  setSenderPublicKey: (senderPublicKey: string) => {
    transactionState.senderPublicKey = senderPublicKey;
  },
  setReceiverPublicKey: (receiverPublicKey: string) => {
    transactionState.receiverPublicKey = receiverPublicKey;
  },
  setAmount: (amount: string) => {
    transactionState.amount = amount;
  },
  setFee: (fee: number) => {
    transactionState.fee = fee;
  },
  setStatus: (status: TransactionStatus) => {
    transactionState.status = status;
  },
  setDate: (date: string) => {
    transactionState.date = date;
  },
  setToken: (token: Token) => {
    transactionState.token = token;
  },
  setSignature: (signature: string) => {
    transactionState.signature = signature;
  },
  resetTransactionState: () => {
    transactionState.senderPublicKey = "";
    transactionState.receiverPublicKey = "";
    transactionState.amount = "";
    transactionState.status = TransactionStatus.PENDING;
    transactionState.date = "";
    transactionState.signature = "";
  },
};
