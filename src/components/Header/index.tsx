import { useState, useCallback } from 'react';
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { Button, Typography} from '@mui/material';
import useSubstrateContext from '../../hooks/useSubstrateContext';
import WalletsModal from '../WalletsModal';
import AccountsModal from '../AccountsModal';
import { HeaderContainer } from './styles';
import getAddress from '../../utils/getAddress';
const Header = () => {
  const substrateInfo = useSubstrateContext();
  const [openState, setOpenState] = useState(0);
  const [account, setAccount] = useState<InjectedAccountWithMeta | null>(null);
  const handleConnect = () => {
    setOpenState(1);
  };
  const onCloseWalletsModal = useCallback(() => {
    setOpenState(2);
  }, []);
  const onCloseAccountsModal = useCallback((id: number) => {
    if (!substrateInfo) return;
    setAccount(substrateInfo.accounts[id])
    substrateInfo.setCurrentAccount(substrateInfo.accounts[id]);
    setOpenState(0);
  }, [substrateInfo]);

  return (
    <header>
      <HeaderContainer>
        <Typography variant="h5" fontWeight={700}>Counter Dapp</Typography>
        <Button
          variant="contained"
          disabled={account?.address ? true : false}
          sx={{
            ':disabled': {
              color: '#fff',
              background: (theme) => theme.palette.primary.main,
              cursor: 'not-allowed',
            }
          }}
          onClick={handleConnect}
        >
          {account?.address ? getAddress(account?.address) : "Connect Wallet"}
        </Button>
      </HeaderContainer>
      <WalletsModal open={openState === 1} onClose={onCloseWalletsModal} />
      <AccountsModal
        open={openState === 2}
        accounts={substrateInfo?.accounts || []}
        onClose={onCloseAccountsModal}
      />
    </header>
  )
};
export default Header;