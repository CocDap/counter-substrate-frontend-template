import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Counter from "./components/Counter";
import useSubstrateContext from "./hooks/useSubstrateContext";

export default function App() {
  const substrateInfo = useSubstrateContext();
  return (
    <BrowserRouter>
      <Header />
      <Counter account={substrateInfo?.currentAccount} />
    </BrowserRouter>
  );
}
