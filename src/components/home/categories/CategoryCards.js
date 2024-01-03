
function CategoryCards(props) {
    if (props.items && props.items.length !== 0) {
        const condition = props.per && props.per > 0 && props.per < props.items.length,
              items = [...(condition ? props.items.slice(0, props.per) : props.items)];

        return (
            <div className="grid gap-10 max-[520px]:grid-cols-1 max-[768px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-12">
                { items.map(item => (
                    <div key={ item.id }>
                        <a href={ item.url } className="rounded-lg overflow-hidden block mb-4">
                            <img src={ item.src } alt="" className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                        </a>
                        <div className="flex items-center justify-between gap-x-4">
                            <div>
                                <h5 className="text-lg font-bold">{ item.title }</h5>
                                <span className="text-sm">Explore Now!</span>
                            </div>
                            <a href={ item.url }>
                                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.9571 7.71798C19.2843 7.39075 19.2843 6.86022 18.9571 6.533L13.6247 1.20059C13.2975 0.873368 12.7669 0.873368 12.4397 1.20059C12.1125 1.52781 12.1125 2.05835 12.4397 2.38557L17.1796 7.12549L12.4397 11.8654C12.1125 12.1926 12.1125 12.7232 12.4397 13.0504C12.7669 13.3776 13.2975 13.3776 13.6247 13.0504L18.9571 7.71798ZM0.489258 7.9634L18.3646 7.9634V6.28758L0.489258 6.28758L0.489258 7.9634Z" fill="#797979"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                )) }
            </div>
        );
    }
    return (<div></div>);
}

export default CategoryCards;
