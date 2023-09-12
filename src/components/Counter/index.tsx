import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { Typography } from '@mui/material';
import { web3FromAddress } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import FlexBox from '../Flexbox';
import Loader from '../Loader';
import { getApi } from '../../config/utils';
import { CounterContainer, StyledButton } from './styles';


interface CounterProps {
  account?: InjectedAccountWithMeta | null
}


const Counter = ({ account }: CounterProps) => {
  const [currentVal, setCurrentVal] = useState<any>(undefined);
  const [pendingState, setPendingState] = useState(-1);

  const getValue = useCallback(async () => {
    let _currentValue;
    try {
      const api = await getApi();
      const value = await api.query.templateModule.something();
      console.log(value);
      _currentValue = value.toHuman()?.toString();
    } catch (error: any) {
      toast.error(error?.message || error);
    } finally {
      return _currentValue;
    }
  }, []);

  useEffect(() => {
    let isApiSubscribed = true;
    if (account) {
      setPendingState(3);
      getValue().then((res: any) => {
        if (isApiSubscribed) {
          setPendingState(0);

          setCurrentVal(res || '');
        }
      });
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [account, getValue]);

  const onIncrease = async () => {
    if (account) {
      setPendingState(1);
      try {
        const api = await getApi();
        const injector = await web3FromAddress(account.address);
          await api
            .tx
            .templateModule.increase()
            .signAndSend(account.address, { signer: injector?.signer }, async (result) => {
              console.log(result)
              if (result.status.isFinalized) {
                const res: any = await getValue();
                setPendingState(0);
                setCurrentVal(res || '');
              }
            }
            );
      } catch (error: any) {
        setPendingState(0);
        toast.error(error?.message || error);
      }
    }
  };

  const onDecrease = async () => {
    if (account) {
      setPendingState(2);
      try {
        const api = await getApi();
        
        const injector = await web3FromAddress(account.address);

        await api
          .tx
          .templateModule
          .decrease()
          .signAndSend(account.address, { signer: injector?.signer }, async (result) => {
            if (result.status.isFinalized) {
              const res: any = await getValue();
              setPendingState(0);
              setCurrentVal(res || '');
            }
          }
          );
      } catch (error: any) {
        setPendingState(0);
        toast.error(error?.message || error);
      }
    }
  };

  return (
    <CounterContainer>
      <Typography variant='h4' fontWeight={700} mt={20} mb={6}>
        Counter:&nbsp;
        {pendingState === -1
          ? '?' :
          pendingState === 3
            ? <Loader color='gray' />
            : currentVal
        }
      </Typography>
      <FlexBox>
        <StyledButton
          variant='contained'
          sx={{ marginRight: 4 }}
          disabled={pendingState === 1 || pendingState === 2}
          onClick={onDecrease}
        >
          -
          {pendingState === 2 && <Loader />}
        </StyledButton>
        <StyledButton
          variant='contained'
          disabled={pendingState === 1 || pendingState === 2}
          onClick={onIncrease}
        >
          +
          {pendingState === 1 && <Loader />}
        </StyledButton>
      </FlexBox>
    </CounterContainer>
  )
}

export default Counter