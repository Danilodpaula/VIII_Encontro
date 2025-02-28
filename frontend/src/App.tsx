import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Inscricao from "./pages/Inscricao";
import HomePage from "./pages/HomePage";
import GlobalStyles from "./styles/globalStyles";
// import TagManager from "react-gtm-module";

// const tagManagerArgs = {
//   gtmId: "G-1M0G94MHZS",
// };

// TagManager.initialize(tagManagerArgs);

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/inscricao" element={<Inscricao />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
