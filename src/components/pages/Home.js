import PreviewSwiper from "./../home/preview/PreviewSwiper";
import PreviewCards from "./../home/preview/PreviewCards";
import CategorySwiper from "./../home/categories/CategorySwiper";


function Home() {
    return (
        <main>
            <div className="max-w-screen-xl m-auto flex flex-col gap-y-16 lg:gap-y-24">
                <PreviewSwiper />
                <PreviewCards />
                <CategorySwiper />
                <div></div>
            </div>
        </main>
    );
}

export default Home;
