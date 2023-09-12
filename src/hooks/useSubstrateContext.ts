import { useContext } from 'react';
import SubstrateContext from '../contexts/SubstrateContext';

const useSubstrateContext = () => {
  const params = useContext(SubstrateContext);
  return params;
};

export default useSubstrateContext;
