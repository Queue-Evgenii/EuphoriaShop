import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
        <Header />
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
