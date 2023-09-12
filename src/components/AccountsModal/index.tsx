import { List, Typography } from '@mui/material';
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { DialogContainer, AccountWrapper } from './styles';
import getAddress from '../../utils/getAddress';

interface AccountsModalProps {
  open: boolean
  accounts: InjectedAccountWithMeta[]
  onClose: (id: number) => void
}

const AccountsModal = ({ open, accounts, onClose }: AccountsModalProps) => {
  return (
    <DialogContainer open={open} onClose={onClose}>
      <Typography variant='h4' fontWeight={700} mb={5} mt={1}>
        Choose Account
      </Typography>
      <List sx={{ pt: 0 }}>
        {accounts.map((element, index) => (
          <AccountWrapper key={element.address} onClick={() => onClose(index)}>
            <Typography variant='h6' fontWeight={600} color="#fff">
              {element.meta.name}:&nbsp;
            </Typography>
            <Typography variant='subtitle1' color="#fff">
              {getAddress(element.address)}
            </Typography>
          </AccountWrapper>
        ))}
      </List>
    </DialogContainer>
  );
}

export default AccountsModal; 