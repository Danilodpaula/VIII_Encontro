import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import GlobalStyles from "../../styles/globalStyles";
import Sections from "../../components/Sections";

function HomePage() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Navbar />
      <Sections />
      <Footer />
    </>
  );
}

export default HomePage;
