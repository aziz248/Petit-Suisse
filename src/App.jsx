import { Route, Routes } from "react-router-dom";
import CardsMenu from "./components/CardsMenu";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Missing from "./components/Missing";
import Quiz from "./components/Quiz";
import "./index.css";

function App() {
  return (
    <div className="app">
      <main className="Page_Main">
        <Header />
        <Routes>
          <Route path="/" element={<CardsMenu></CardsMenu>} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
