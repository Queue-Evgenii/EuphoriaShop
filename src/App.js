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
import {getWishlist} from "./api/wishlist";
import {setWishlistToStore} from "./store/actions/products";

const App = () => {
    useEffect(() => {
        getCategories("")
            .then(res => {
                store.dispatch(setCategoriesToStore(res.data));
            });
        getWishlist()
            .then(res => {
                store.dispatch(setWishlistToStore(res.data));
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
                    <Route path="/me/:value/:element/:order" element={<Account />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
