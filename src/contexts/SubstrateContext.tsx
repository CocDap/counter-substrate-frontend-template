import { createContext } from 'react'
import { SubstrateContextType } from '../types/SubstrateContext';

const SubstrateContext = createContext<SubstrateContextType>({} as SubstrateContextType);

export default SubstrateContext;
