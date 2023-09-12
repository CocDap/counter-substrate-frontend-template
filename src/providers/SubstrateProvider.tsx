import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import {
  web3Accounts,
  web3Enable,
  web3FromSource,
} from "@polkadot/extension-dapp";
import SubstrateContext from "../contexts/SubstrateContext";
import { SubstrateContextType } from "../types/SubstrateContext";

interface SubstrateProviderProps {
  children: React.ReactNode
}


const SubstrateProvider = ({ children }: SubstrateProviderProps) => {
  const [web3Enabled, setWeb3Enabled] = useState(false);
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [currentAccount, setCurrentAccount] = useState<InjectedAccountWithMeta | null>(null);

  const web3EnableCB = useCallback(async () => {
    const extensions = await web3Enable("counter");
    if (extensions.length === 0) {
      toast.error("No Web3 extension found!");
      return;
    } else {
      setWeb3Enabled(true);
      const allAccounts = await web3Accounts();
      setAccounts(allAccounts);
    }
  }, []);

  const getExtension = useCallback(async () => {
    if (!web3Enabled) {
      await web3EnableCB();
    }

    if (!currentAccount) {
      return;
    }

    const injector = await web3FromSource(currentAccount.meta.source);
    return injector;
  }, [web3Enabled, currentAccount, web3EnableCB]);

  useEffect(() => {
    getExtension();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialContextValue: SubstrateContextType = {
    accounts,
    currentAccount,
    setCurrentAccount,
  };

  return (
    <SubstrateContext.Provider value={initialContextValue}>
      {children}
    </SubstrateContext.Provider>
  )
}

export default SubstrateProvider 