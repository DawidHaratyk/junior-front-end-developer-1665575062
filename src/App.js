import Header from "./components/Header/Header";
import MainViewContent from "./components/MainViewContent/MainViewContent";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import { BrowserRouter } from "react-router-dom";
import "./css/style.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Header />
        <MainViewContent />
        <Footer />
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
