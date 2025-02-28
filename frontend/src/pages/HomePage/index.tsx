import {Footer} from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
// import OrganizersCarrousel from "../../components/OrganizersCarrousel";
import Sections from "../../components/Sections";
// import { Places } from "../../modules/Places";
import { Presentation } from "../../modules/Presentation";
import { PageContainer } from "./styles";

function HomePage() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Header />
        <Presentation />
        {/* <Places /> */}
        <Sections />
        {/* <OrganizersCarrousel /> */}
        <Footer />
      </PageContainer>
    </>
  );
}

export default HomePage;
