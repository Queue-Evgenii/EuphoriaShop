
function Navigation(props) {
    if (!props.items || props.items.length <= 0) {
        return ( <div></div> );
    }

    return (
        <div className="_container flex justify-between gap-8 flex-wrap">
            { props.items.map(item => (
                <div key={ item.id }>
                    <h3 className="text-2xl font-bold mb-4">{ item.title }</h3>
                    <ul className="flex flex-col gap-x-1">
                        { item.items && item.items.length > 0 && item.items.map(val => (
                            <li key={ val.id } className="text-lg">
                                <a href={ val.url } className="hover:underline">{ val.title }</a>
                            </li>
                        )) }
                    </ul>
                </div>
            )) }
        </div>
    );
}

export default Navigation;
