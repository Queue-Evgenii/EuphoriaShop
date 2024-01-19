
const Button = ({ onClick, children, isCancelButton }) => {

    return (
        <button
            type="button"
            className="py-3 px-8 flex items-center justify-center gap-x-4 rounded-lg w-full h-full"
            style={ isCancelButton ? { backgroundColor: "#F6F6F6", color: "#807D7E", } : { backgroundColor: "#8A33FD", color: "#fff", }}
            onClick={ onClick }
        >
            { children }
        </button>
    )
}

export default Button;
