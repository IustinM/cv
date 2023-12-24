
import { HashRouter } from "react-router-dom";
import GeneralProvider from "./context/generalContext";
import MainComponent from "./components/MainComponent";

function App() {


  return (
    <HashRouter>
      <GeneralProvider>
          <MainComponent/>
        </GeneralProvider>
    </HashRouter>
  );
}

export default App;
