// src/App.tsx

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import GlobalStyles from "../../globalStyles";
import Home from "../Home";

function HomePage() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default HomePage;
