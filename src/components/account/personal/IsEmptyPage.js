import isEmptyImg from "../../../images/static/isEmptyImg.png";
import {Link} from "react-router-dom";

const IsEmptyPage = ({ title, subtitle, linkTo, linkTitle }) => {
    return (
        <div className="pt-24 pb-12 flex flex-col items-center">
            <div className="mb-6">
                <img src={ isEmptyImg } alt=""/>
            </div>
            <h2 className="text-4xl font-semibold mb-2">{ title ? title : "" }</h2>
            <h6 className="text-gray-500">{ subtitle ? subtitle : "" }</h6>
            { linkTo && (
                <div className="max-w-64 mt-8">
                    <Link
                        to="/"
                        className="py-3 px-8 flex items-center justify-center gap-x-4 rounded-lg w-full h-full"
                        style={{ backgroundColor: "#8A33FD", color: "#fff", }}
                    >
                        { linkTitle }
                    </Link>
                </div>
            ) }
        </div>
    );
}

export default IsEmptyPage;
