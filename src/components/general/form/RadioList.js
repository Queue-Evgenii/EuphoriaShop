const RadioInput = ({ id, name, groupName, isChecked, onChange, children }) => {
    if (!id) {
        throw new DOMException("Invalid prop id", "Invalid data");
    }

    return (
        <li className="block w-full">
            <label
                htmlFor={ id }
                className={`cursor-pointer text-lg font-semibold tracking-wide pl-6 _radio ${isChecked ? "_checked" : ""}`}
            >
                { name }
            </label>
            <input
                type="radio"
                id={ id }
                checked={ isChecked }
                name={ groupName }
                onChange={ onChange }
                style={{ display: "none" }}
            />
            { children && isChecked ? children : <span></span> }
        </li>
    );
}

/**
 *
 * @param list
 * [{
 *     id: {[String, Number], required},
 *     groupName: {String, required},
 *     name: String,
 *     isChecked: Boolean,
 *     children: {JSX.Element},
 * }, ...]
 * @returns {JSX.Element}
 */
const RadioList = ({ list, onChange }) => {
    return (
        <ul>
            { list && list.length && list.map((item, index) => (
                <RadioInput
                    key={ index }
                    isChecked={ item.isChecked }
                    id={ item.id }
                    name={ item.name }
                    groupName={ item.groupName }
                    onChange={ onChange }
                    children={ item.children ? item.children : null }
                />
            )) }
        </ul>
    );
}

export default RadioList;
