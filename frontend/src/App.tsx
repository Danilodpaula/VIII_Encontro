import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Inscricao from "./pages/Inscricao";
import HomePage from "./pages/HomePage";
import GlobalStyles from "./styles/globalStyles";

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
