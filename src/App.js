import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";
import Catalog from "./components/pages/Catalog";
import Product from "./components/pages/Product";
import store from "./store";
import {getCategories} from "./api/categories";
import {setCategoriesToStore} from "./store/actions/categories";
import Account from "./components/pages/Account";

const App = () => {
    useEffect(() => {
        getCategories("")
            .then(res => {
                store.dispatch(setCategoriesToStore(res.data));
            });
    }, []);

    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog/:gender/:id" element={<Catalog />} />
                    <Route path="/catalog/:gender" element={<Catalog />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/me/:value" element={<Account />} />
                    <Route path="/me/:value/:element" element={<Account />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
