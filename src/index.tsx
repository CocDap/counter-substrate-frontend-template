import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import SubstrateProvider from './providers/SubstrateProvider';
import App from './App';
import theme from './theme';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <SubstrateProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    <ToastContainer />
  </SubstrateProvider>
);
