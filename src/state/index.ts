import { BERRY_LOCAL_CONFIG_KEY } from "@engine/constants";
import { upsertPasswordExpiredAt } from "@engine/storage";
import { CollectionMap, Token } from "@engine/tokens/types";
import { Keypair } from "@solana/web3.js";
import { EncryptedData } from "@utils/crypto";
import { proxy } from "valtio";

export interface AppState {
  network: "mainnet" | "devnet";
  localConfig: {
    showBalance: boolean;
    lockTimer: number;
  };
  tokens: Token[];
  collectionMap: CollectionMap;
  prices: Record<string, number>;
  encryptedAccounts?: EncryptedData;
  keypair?: Keypair;
  hashedPassword?: string;
  activeKeypairName?: string;
  activeWalletIndex?: number;
  activeKeypairIndex?: number;
}

export const appState = proxy<AppState>({
  network: import.meta.env.VITE_ENV === "mainnet" ? "mainnet" : "devnet",
  localConfig: {
    showBalance: true,
    lockTimer: 30 * 60 * 1000, // 30 minutes
  },
  tokens: [],
  collectionMap: new Map(),
  prices: {},
});

export const appActions = {
  setKeypair: (keypair: Keypair) => {
    appState.keypair = keypair;
  },
  setHashedPassword: (password: string) => {
    appState.hashedPassword = password;
  },
  setTokens: (tokens: Token[]) => {
    appState.tokens = tokens;
  },
  setCollectionMap: (collectionMap: CollectionMap) => {
    appState.collectionMap = collectionMap;
  },
  setPrices: (prices: Record<string, number>) => {
    appState.prices = prices;
  },
  setLockTimer: (timer: number) => {
    if (timer === appState.localConfig.lockTimer) return;
    appState.localConfig.lockTimer = timer;
    localStorage.setItem(BERRY_LOCAL_CONFIG_KEY, JSON.stringify(appState.localConfig));
    upsertPasswordExpiredAt(Date.now() + appState.localConfig.lockTimer);
  },
  setShowBalance: (showBalance: boolean) => {
    if (showBalance === appState.localConfig.showBalance) return;
    appState.localConfig.showBalance = showBalance;
    localStorage.setItem(BERRY_LOCAL_CONFIG_KEY, JSON.stringify(appState.localConfig));
  },
  setEncryptedAccounts: (encryptedAccounts: EncryptedData) => {
    appState.encryptedAccounts = encryptedAccounts;
  },
  setActiveKeypairIndex: (index: number) => {
    appState.activeKeypairIndex = index;
  },
  setActiveWalletIndex: (index: number) => {
    appState.activeWalletIndex = index;
  },
  setActiveKeypairName: (name: string) => {
    appState.activeKeypairName = name;
  },
  resetAppState: () => {
    appState.network = import.meta.env.VITE_ENV === "mainnet" ? "mainnet" : "devnet";
    appState.localConfig = {
      showBalance: true,
      lockTimer: 30 * 60 * 1000, // 30 minutes
    };
    appState.tokens = [];
    appState.collectionMap = new Map();
    appState.prices = {};
    appState.keypair = undefined;
    appState.hashedPassword = undefined;
    appState.encryptedAccounts = undefined;
    appState.activeKeypairIndex = undefined;
    appState.activeWalletIndex = undefined;
    appState.activeKeypairName = undefined;
  },
};
