
const Button = ({ onClick, children }) => {

    return (
        <button
            className="py-3 px-8 flex items-center justify-center gap-x-4 rounded-lg text-white w-full h-full"
            style={{ backgroundColor: "#8A33FD", }}
            onClick={ onClick }
        >
            { children }
        </button>
    )
}

export default Button;
