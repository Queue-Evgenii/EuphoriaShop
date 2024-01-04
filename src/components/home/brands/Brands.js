import brandImg1 from "./../../../images/static/brand-img-1.png";
import brandImg2 from "./../../../images/static/brand-img-2.png";
import brandImg3 from "./../../../images/static/brand-img-3.png";
import brandImg4 from "./../../../images/static/brand-img-4.png";
import brandImg5 from "./../../../images/static/brand-img-5.png";

const brands = [
    {
        id: 0,
        src: brandImg1,
    },
    {
        id: 1,
        src: brandImg2,
    },
    {
        id: 2,
        src: brandImg3,
    },
    {
        id: 3,
        src: brandImg4,
    },
    {
        id: 4,
        src: brandImg5,
    },
];

function Brands()  {
    return (
        <div className="_container">
            <div
                className="
                flex
                flex-col
                items-center
                gap-y-8
                rounded-lg
                text-white"
                style={{
                    background: "#3C4242",
                    padding: "48px 60px",
                }}
            >
                <h2 className="text-5xl font-extrabold">Top Brands Deal</h2>
                <h5 className="text-2xl mb-4">Up To <span className="text-yellow-400 font-bold">60%</span> off on brands</h5>
                <div className="flex gap-6 items-center justify-center flex-wrap">
                    { brands.map(item => (
                        <div
                            key={ item.id }
                            className="
                            w-44
                            h-20
                            px-6
                            py-4
                            flex
                            items-center
                            justify-center
                            rounded-lg
                            bg-white
                            transition-shadow
                            hover:shadow-2xl
                            hover:shadow-gray-500"
                        >
                            <img src={ item.src } alt="" className="w-full h-full object-contain object-center"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Brands;
