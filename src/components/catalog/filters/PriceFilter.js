import Slider from "react-slider";
import "./PriceFilter.css";
import {useEffect, useState} from "react";

const PriceFilter = (props) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    let tm;

    useEffect(() => {
        setMin(props.min);
        setMax(props.max);
    }, [props]);

    const afterChange = (values) => {
        setMin(values[0]);
        setMax(values[1]);
        emitData({min: values[0], max: values[1]});
    }
    const checkInputs = () => {
        if (min > max) {
            setMin(max);
            setMax(min);
            emitData({max: min, min: max});
            return;
        }
        emitData({min: min, max: max});
    }

    const emitData = (values) => {
        clearTimeout(tm);
        tm = setTimeout(() => {
            props.emitEvent({...values});
        }, 300);
    }

    return (
        <div className="price-slider flex flex-col gap-y-6">
            <Slider
                value={[min, max]}
                min={ props.min }
                max={ props.max }
                step={1}
                ariaLabel={['Min', 'Max']}
                onAfterChange={ afterChange }
            />
            <div className="flex justify-between gap-x-3">
                <input
                    type="text"
                    id="min-input"
                    value={ min }
                    onChange={ e => setMin(+e.target.value) }
                    onBlur={ checkInputs }
                />
                <input
                    type="text"
                    id="max-input"
                    value={ max }
                    onChange={ e => setMax(+e.target.value) }
                    onBlur={ checkInputs }
                />
            </div>
        </div>
    );
}

export default PriceFilter;
