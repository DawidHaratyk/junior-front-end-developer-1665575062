import Header from "./components/Header/Header";
import MainViewContent from "./components/MainViewContent/MainViewContent";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import "./css/style.css";

function App() {
  return (
    <PageWrapper>
      <Header />
      <MainViewContent />
    </PageWrapper>
  );
}

export default App;
