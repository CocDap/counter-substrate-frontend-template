import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";

export type SubstrateContextType = {
  accounts: InjectedAccountWithMeta[];
  currentAccount: InjectedAccountWithMeta | null;
  setCurrentAccount: React.Dispatch<
    React.SetStateAction<InjectedAccountWithMeta | null>
  >;
};
