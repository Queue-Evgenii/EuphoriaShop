const BounceNotification = ({ isOpen, message }) => {
    return (
        <div
            style={{ backgroundColor: "rgba(254, 254, 254, 0.5)" }}
            className={`fixed w-full h-full top-0 left-0 transition-transform ${isOpen ? "translate-y-0" : "translate-y-full"}`}
        >
            <div className="py-2 px-3 fixed bottom-4 flex justify-center w-full">
                <span className="py-2 px-3 bg-white rounded text-lg font-bold">
                    { message }
                </span>
            </div>
        </div>
    )
}

export default BounceNotification;
