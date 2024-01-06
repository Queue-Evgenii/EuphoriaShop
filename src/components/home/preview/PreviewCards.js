import {Link} from "react-router-dom";
import {Component} from "react";

import slideImg2 from "./../../../images/temp/preview-slide-2.png";
import slideImg3 from "./../../../images/temp/preview-slide-3.png";

const cards = [
    {
        id: 0,
        gender: "women",
        categoryId: 4,
        src: slideImg2,
    },
    {
        id: 1,
        gender: "women",
        categoryId: 5,
        src: slideImg3,
    },
];

class PreviewCards extends Component {
    render() {
        return (
            <div className="_container flex flex-col md:flex-row items-center gap-x-8 gap-y-4">
                {cards.map(item => (
                    <div key={ item.id } className="relative rounded-xl overflow-hidden">
                        <img src={ item.src } alt=""/>
                        <Link
                            to={ `/catalog/${ item.gender }/${ item.categoryId }` }
                            className="
                            absolute
                            text-white
                            font-bold
                            underline
                            underline-offset-4
                            bottom-12
                            left-10"
                        >
                            Explore Items
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default PreviewCards;
