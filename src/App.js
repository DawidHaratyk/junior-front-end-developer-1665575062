import Header from "./components/Header/Header";
import MainViewContent from "./components/MainViewContent/MainViewContent";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import { BrowserRouter } from "react-router-dom";
import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Header />
        <MainViewContent />
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
