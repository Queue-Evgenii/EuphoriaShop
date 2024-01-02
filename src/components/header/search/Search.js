
function Search() {
    return (
        <div className="flex items-center">
            <input
                type="text"
                className="_search text-sm max-w-48 h-11 rounded bg-gray-100 px-4 py-2 outline-none focus:shadow-md transition"
                placeholder="Search..."
            />
        </div>
    );
}

export default Search;
