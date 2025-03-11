import { Route, Routes } from "react-router-dom";
import CardsMenu from "./components/CardsMenu";
import Header from "./components/Header";
import Missing from "./components/Missing";
import Quiz from "./components/Quiz";
import "./index.css";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div className="app">
      <main className="Page_Main">
        <Header></Header>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<Missing />} />
          <Route path="/about" element={<CardsMenu />} />
          <Route path="/login" element={<LoginPage />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
