import PreviewSwiper from "./../home/preview/PreviewSwiper";
import PreviewCards from "./../home/preview/PreviewCards";
import CategorySwiper from "./../home/categories/CategorySwiper";
import ShopMotivation from "../home/ShopMotivation";
import CategoryCards from "../home/categories/CategoryCards";
import Brands from "../home/brands/Brands";
import ProductsList from "../general/products/ProductsList";
import Feedback from "../home/feedback/Feedback";

import menCategory1 from "./../../images/temp/men-category-1.png";
import menCategory2 from "./../../images/temp/men-category-2.png";
import menCategory3 from "./../../images/temp/men-category-3.png";
import menCategory4 from "./../../images/temp/men-category-4.png";
import menCategory5 from "./../../images/temp/men-category-5.png";
import menCategory6 from "./../../images/temp/men-category-6.png";
import menCategory7 from "./../../images/temp/men-category-7.png";
import menCategory8 from "./../../images/temp/men-category-8.png";
import womenCategory1 from "./../../images/temp/women-category-1.png";
import womenCategory2 from "./../../images/temp/women-category-2.png";
import womenCategory3 from "./../../images/temp/women-category-3.png";
import womenCategory4 from "./../../images/temp/women-category-4.png";
import productImg1 from "./../../images/temp/product-img-1.png";
import productImg2 from "./../../images/temp/product-img-2.png";
import productImg3 from "./../../images/temp/product-img-3.png";
import productImg4 from "./../../images/temp/product-img-4.png";
import userAvatar1 from "./../../images/temp/user-avatar-1.png";
import userAvatar2 from "./../../images/temp/user-avatar-2.png";
import userAvatar3 from "./../../images/temp/user-avatar-3.png";

const menCategories = [
    {
        id: 0,
        src: menCategory1,
        url: "#",
        title: "Shirts",
    },
    {
        id: 1,
        src: menCategory2,
        url: "#",
        title: "Printed T-Shirts",
    },
    {
        id: 2,
        src: menCategory3,
        url: "#",
        title: "Plain T-Shirt",
    },
    {
        id: 3,
        src: menCategory4,
        url: "#",
        title: "Polo T-Shirt",
    },
    {
        id: 4,
        src: menCategory5,
        url: "#",
        title: "Hoodies & Sweetshirt",
    },
    {
        id: 5,
        src: menCategory6,
        url: "#",
        title: "Jeans",
    },
    {
        id: 6,
        src: menCategory7,
        url: "#",
        title: "Activewear",
    },
    {
        id: 7,
        src: menCategory8,
        url: "#",
        title: "Boxers",
    },
];
const womenCategories = [
    {
        id: 0,
        src: womenCategory1,
        url: "#",
        title: "Hoodies & Sweetshirt",
    },
    {
        id: 1,
        src: womenCategory2,
        url: "#",
        title: "Coats & Parkas",
    },
    {
        id: 2,
        src: womenCategory3,
        url: "#",
        title: "Tees & T-Shirt",
    },
    {
        id: 3,
        src: menCategory6,
        url: "#",
        title: "Jeans",
    },
    {
        id: 4,
        src: womenCategory4,
        url: "#",
        title: "Boxers",
    },
];
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

function Home() {
    return (
        <main>
            <div className="max-w-screen-xl m-auto flex flex-col gap-y-16 lg:gap-y-24">
                <PreviewSwiper />
                <PreviewCards />
                <CategorySwiper />
                <ShopMotivation />
                <div className="_container">
                    <h2 className="_title mb-16">Categories For Men</h2>
                    <CategoryCards items={menCategories} per="8" />
                </div>
                <div className="_container">
                    <h2 className="_title mb-16">Categories For Women</h2>
                    <CategoryCards items={womenCategories} per="8" />
                </div>
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
