import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";
import Catalog from "./components/pages/Catalog";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/catalog/:gender/:id" element={<Catalog />} />
                <Route path="/catalog/:gender" element={<Catalog />} />
                <Route path="/catalog/:id" element={<Catalog />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
