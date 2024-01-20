
import "./TextInput.css";
import {Link} from "react-router-dom";

const TextInput = ({ type, id, name, placeholder, onChange, onBlur, onFocus, errors, initValue, readonly }) => {
    if (!id) {
        throw new DOMException("Invalid prop id", "Invalid data");
    }


    return (
        <div className="text-input flex flex-col gap-y-2">
            <label
                htmlFor={ id }
                className="text-lg font-semibold tracking-wide"
            >
                { name !== undefined ? name : id }
            </label>
            <input
                type={ type }
                name={ id }
                id={ id }
                value={ initValue !== undefined ? initValue : "" }
                placeholder={ placeholder ? placeholder : "" }
                readOnly={ readonly }
                onChange={ onChange }
                onBlur={ onBlur }
                onFocus={ onFocus }
                className={`py-3 px-6 rounded border ${ Array.isArray(errors) && errors.length > 0 ? "bg-red-50 border-red-500 text-red-700 placeholder-red-700" : "" }`}
                style={{ backgroundColor: "#F6F6F6", }}
            />
            { (type === "password" || (Array.isArray(errors) && errors.length > 0)) && (
                <div className="flex">
                    { type === "password" && (<Link to="/me/password-recovery" className="_forget order-2">Forget your password</Link>) }
                    { Array.isArray(errors) && errors.length > 0 && (
                        <ul className="order-1">
                            { errors.map((item, index) => (
                                <li className="text-red-600" key={ index }>{ item }</li>
                            )) }
                        </ul>
                    ) }
                </div>
            ) }
        </div>
    );
}

export default TextInput;
