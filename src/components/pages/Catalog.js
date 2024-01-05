import {useParams} from "react-router-dom";

function Catalog() {
    const { gender, id } = useParams();
    return (
        <main className="max-w-screen-xl m-auto flex flex-col gap-y-16 lg:gap-y-24">
            { gender + id }
        </main>
    );
}

export default Catalog
