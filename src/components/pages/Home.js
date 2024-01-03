import PreviewSwiper from "./../home/preview/PreviewSwiper";
import PreviewCards from "./../home/preview/PreviewCards";
import CategorySwiper from "./../home/categories/CategorySwiper";
import ShopMotivation from "../home/ShopMotivation";
import CategoryCards from "../home/categories/CategoryCards";

import menCategory1 from "./../../images/temp/men-category-1.png"
import menCategory2 from "./../../images/temp/men-category-2.png"
import menCategory3 from "./../../images/temp/men-category-3.png"
import menCategory4 from "./../../images/temp/men-category-4.png"

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
]
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
                    <CategoryCards items={menCategories} per="8" />
                </div>
                <div></div>
            </div>
        </main>
    );
}

export default Home;
