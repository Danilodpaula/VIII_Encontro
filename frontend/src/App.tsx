import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inscricao from "./pages/Inscricao";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inscricao" element={<Inscricao />} />
      </Routes>
    </Router>
  );
}

export default App;
