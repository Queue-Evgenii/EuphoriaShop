
import "./TextInput.css";
import {Link} from "react-router-dom";

const TextInput = ({ type, id, name, placeholder, onChange, onBlur, onFocus }) => {
    if (!id) {
        throw new DOMException("Invalid prop id", "Invalid data");
    }

    const getMarkup = () => {
        switch (type) {
            case "dropdown":
                return (<div></div>);
            case "text":
                return (
                    <input
                        type="text"
                        name={ id }
                        id={ id }
                        placeholder={ placeholder ? placeholder : "" }
                        onChange={ onChange }
                        onBlur={ onBlur }
                        onFocus={ onFocus }
                        className="py-3 px-6 rounded"
                        style={{ backgroundColor: "#F6F6F6", }}
                    />
                );
            case "email":
                return (
                    <input
                        type="email"
                        name={ id }
                        id={ id }
                        placeholder={ placeholder ? placeholder : "" }
                        onChange={ onChange }
                        onBlur={ onBlur }
                        onFocus={ onFocus }
                        className="py-3 px-6 rounded"
                        style={{ backgroundColor: "#F6F6F6", }}
                    />
                );
            case "password":
                return (
                    <>
                        <input
                            type="password"
                            name={ id }
                            id={ id }
                            placeholder={ placeholder ? placeholder : "" }
                            onChange={ onChange }
                            onBlur={ onBlur }
                            onFocus={ onFocus }
                            className="py-3 px-6 rounded _password"
                            style={{ backgroundColor: "#F6F6F6", }}
                        />
                        <Link to="/me/password-recovery" className="_forget">Forget your password</Link>
                    </>
                );
            default:
                return (<div></div>);
        }
    }

    return (
        <div className="text-input flex flex-col gap-y-2">
            <label
                htmlFor={ id }
                className="text-lg font-semibold tracking-wide"
            >
                { name !== undefined ? name : id }
            </label>
            { getMarkup() }
        </div>
    );
}

export default TextInput;
