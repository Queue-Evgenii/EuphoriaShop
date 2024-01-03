import slideImg2 from "./../../../images/temp/preview-slide-2.png";
import slideImg3 from "./../../../images/temp/preview-slide-3.png";

const cards = [
    {
        id: 0,
        url: "#",
        src: slideImg2,
    },
    {
        id: 1,
        url: "#",
        src: slideImg3,
    },
];

function PreviewCards() {
    return (
        <div className="_container flex flex-col md:flex-row items-center gap-x-8 gap-y-4">
            {cards.map(item => (
                <div key={ item.id } className="relative rounded-xl overflow-hidden">
                    <img src={ item.src } alt=""/>
                    <a
                        href={ item.url }
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
                    </a>
                </div>
            ))}
        </div>
    );
}

export default PreviewCards;
