import { useEffect, useState } from "react";
import PreviewSwiper from "./../home/preview/PreviewSwiper";
import PreviewCards from "./../home/preview/PreviewCards";
import CategorySwiper from "./../home/categories/CategorySwiper";
import ShopMotivation from "../home/ShopMotivation";
import CategoryCards from "../home/categories/CategoryCards";
import Brands from "../home/brands/Brands";
import ProductsList from "../general/products/ProductsList";
import Feedback from "../home/feedback/Feedback";

import store from "../../store/index";
import {
    setWomenCategoriesToStore,
    setMenCategoriesToStore
} from "../../store/actions/categories";
import { getCategories } from "../../api/categories";

import productImg1 from "./../../images/temp/product-img-1.png";
import productImg2 from "./../../images/temp/product-img-2.png";
import productImg3 from "./../../images/temp/product-img-3.png";
import productImg4 from "./../../images/temp/product-img-4.png";
import userAvatar1 from "./../../images/temp/user-avatar-1.png";
import userAvatar2 from "./../../images/temp/user-avatar-2.png";
import userAvatar3 from "./../../images/temp/user-avatar-3.png";

const limelightProducts = [
    {
        id: 0,
        url: "",
        src: productImg1,
        title: "Raven Hoodie With Black colored Design",
        brand: "Jhanvi’s  Brand",
        price: 123,
    },
    {
        id: 1,
        url: "",
        src: productImg2,
        title: "Blue Flower Print Crop Top",
        brand: "AS’s  Brand",
        price: 39,
    },
    {
        id: 2,
        url: "",
        src: productImg3,
        title: "Black Shorts",
        brand: "MM’s  Brand",
        price: 37,
    },
    {
        id: 3,
        url: "",
        src: productImg4,
        title: "Levender Hoodie",
        brand: "Nike’s  Brand",
        price: 119,
    },
];
const feedbacks = [
    {
        id: 0,
        username: "Floyd Miles",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        rating: 3.5,
        avatar: userAvatar1,
    },
    {
        id: 1,
        username: "Ronald Richards",
        description: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        rating: 4,
        avatar: userAvatar2,
    },
    {
        id: 2,
        username: "Savannah Nguyen",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        rating: 3.5,
        avatar: userAvatar3,
    },
    {
        id: 3,
        username: "Ronald Richards",
        description: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        rating: 4,
        avatar: null,
    },
    {
        id: 4,
        username: "Savannah Nguyen",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        rating: 3.5,
        avatar: userAvatar3,
    },
];

const Home = () => {
    const [newCategories, setNewCategories] = useState([]);
    const [womenCategories, setWomenCategories] = useState([]);
    const [menCategories, setMenCategories] = useState([]);

    const setNewCategoriesToState = () => {
        if (store.getState().categories !== null) {
            setNewCategories(
                store.getState().categories.filter(item => item.isNewArrival === true)
            );
        }
    };

    const setCategoriesToState = (gender, action, setCategories) => {
        if (store.getState()[`${gender}Categories`] === null) {
            getCategories(gender).then(res => {
                setCategories(res.data);
                store.dispatch(action(res.data));
            });
        } else {
            setCategories(store.getState()[`${gender}Categories`]);
        }
    };

    useEffect(() => {
        setCategoriesToState("men", setMenCategoriesToStore, setMenCategories);
        setCategoriesToState("women", setWomenCategoriesToStore, setWomenCategories);

        setNewCategoriesToState();
        store.subscribe(setNewCategoriesToState);
    }, []);

    return (
        <main>
            <div className="max-w-screen-xl m-auto flex flex-col gap-y-16 lg:gap-y-24">
                <PreviewSwiper />
                <PreviewCards />
                { newCategories.length > 0 && <CategorySwiper items={ newCategories } /> }
                <ShopMotivation />
                { menCategories && menCategories.length > 0 && (
                    <div className="_container">
                        <h2 className="_title mb-16">Categories For Men</h2>
                        <CategoryCards items={ menCategories } per="8" />
                    </div>
                )}
                { womenCategories && womenCategories.length > 0 && (
                    <div className="_container">
                        <h2 className="_title mb-16">Categories For Women</h2>
                        <CategoryCards items={ womenCategories } per="8" />
                    </div>
                )}
                <Brands />
                <div className="_container">
                    <h2 className="_title mb-16">In The Limelight</h2>
                    <ProductsList items={limelightProducts} per="4"/>
                </div>
                <div className="_container">
                    <h2 className="_title mb-16">Feedback</h2>
                    <Feedback items={feedbacks} />
                </div>
                <div></div>
            </div>
        </main>
    );
}

export default Home;
