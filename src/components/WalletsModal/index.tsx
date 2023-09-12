import { List, Typography, useTheme } from '@mui/material';
import PolkadotIcon from '../../assets/imgs/Polkadot.png';
import FlexBox from '../Flexbox';
import { DialogContainer } from './styles';

const wallets = [
  {
    wallet: 'PolkadotJS',
    img: PolkadotIcon,
  }
];

interface WalletsModalProps {
  open: boolean;
  onClose: () => void;
}

const WalletsModal = ({ onClose, open }: WalletsModalProps) => {
  const theme = useTheme();

  return (
    <DialogContainer open={open} onClose={onClose}>
      <Typography variant='h4' fontWeight={700} mb={5} mt={1}>
        Choose Wallet
      </Typography>
      <List sx={{ pt: 0 }}>
        {wallets.map((element) => (
          <FlexBox
            key={element.wallet}
            style={{
              padding: 16,
              justifyContent: 'space-between',
              background: theme.palette.primary.main,
              borderRadius: 16,
              cursor: 'pointer'
            }}
            onClick={onClose}
          >
            <Typography variant='h6' color="#fff">{element.wallet}</Typography>
            <img src={element.img} width={24} alt='WalletType' />
          </FlexBox>
        ))}
      </List>
    </DialogContainer>
  );
}

export default WalletsModal 