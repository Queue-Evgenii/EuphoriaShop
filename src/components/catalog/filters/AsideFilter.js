import ListFilter from "./ListFilter";
import PriceFilter from "./PriceFilter";
import ColorsFilter from "./ColorsFilter";
import SizeFilter from "./SizeFilter";
import Dropdown from "../../general/dropdown/Dropdown";

const AsideFilter = (
    {
        categories,
        categoriesEmitEvent,
        styles,
        stylesEmitEvent,
        colors,
        colorsEmitEvent,
        sizes,
        sizesEmitEvent
    }) => {

    const handleCategoriesEmit = (data) => {
        categoriesEmitEvent(data);
    };

    const handleStylesEmit = (data) => {
        stylesEmitEvent(data);
    };

    const handleColorsEmit = (data) => {
        colorsEmitEvent(data);
    };
    const handleSizesEmit = (data) => {
        sizesEmitEvent(data);
    };

    return (
        <div>
            <header className="flex justify-between gap-x-8 py-6 border-b-2">
                <h3 className="text-2xl font-semibold">Filter</h3>
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.83333 6.33333L2.83333 1.75M2.83333 18.25L2.83333 10M13.8333 18.25L13.8333 10M8.33333 18.25V13.6667M8.33333 10V1.75M13.8333 6.33333L13.8333 1.75M1 6.33333H4.66667M6.5 13.6667H10.1667M12 6.33333L15.6667 6.33333" stroke="#807D7E" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
            </header>
            <div className="py-6">
                <Dropdown title="Categories">
                    <ListFilter emitEvent={ handleCategoriesEmit } items={ categories } />
                </Dropdown>
            </div>
            <div className="py-6">
                <Dropdown title="Price">
                    <PriceFilter />
                </Dropdown>
            </div>
            <div className="py-6" style={{ display: colors.length > 0 ? "block" : "none" }}>
                <Dropdown title="Colors">
                    <ColorsFilter items={ colors } emitEvent={ handleColorsEmit } />
                </Dropdown>
            </div>
            <div className="py-6" style={{ display: sizes.length > 0 ? "block" : "none" }}>
                <Dropdown title="Size">
                    <SizeFilter items={ sizes } emitEvent={ handleSizesEmit } />
                </Dropdown>
            </div>
            <div className="py-6" style={{ display: styles.length > 0 ? "block" : "none" }}>
                <Dropdown title="Dress Style">
                    <ListFilter emitEvent={ handleStylesEmit } items={ styles }/>
                </Dropdown>
            </div>
        </div>
    );
};

export default AsideFilter;
