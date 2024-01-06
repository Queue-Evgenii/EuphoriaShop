import image1 from "../../images/static/motivation-img-1.png"
import image2 from "../../images/static/motivation-img-2.png"

import { Component } from "react";

class ShopMotivation extends Component {
   render() {
        return (
            <div className="_container flex flex-col md:flex-row rounded">
                <div className="flex items-center justify-center relative">
                    <img src={ image1 } alt="" className="w-full h-full"/>
                    <div className="absolute px-16 max-[500px]:px-12">
                        <h2
                            className="
                        text-white
                        font-extrabold
                        max-[500px]:text-2xl
                        text-3xl
                        md:text-xl
                        lg:text-3xl
                        lg:leading-normal
                        mb-5
                        md:mb-2
                        lg:mb-5"
                        >
                            WE MADE YOUR EVERYDAY FASHION BETTER!
                        </h2>
                        <p
                            className="
                        text-white
                        font-light
                        max-[500px]:text-base
                        text-xl
                        md:text-sm
                        lg:text-xl
                        mb-10
                        md:mb-6
                        lg:mb-10"
                        >
                            In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7
                        </p>
                        <a href="/" className="_button">Shop Now</a>
                    </div>
                </div>
                <div>
                    <img src={ image2 } alt="" className="w-full h-full hidden md:block"/>
                </div>
            </div>
        );
    }
}


export default ShopMotivation;
