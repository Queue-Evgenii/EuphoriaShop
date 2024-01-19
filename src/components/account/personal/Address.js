import TextInput from "../../general/form/TextInput";
import {useEffect, useState} from "react";
import Button from "../../general/form/Button";

const Address = ({ data, emitAddress }) => {
    const [delivery, setDelivery] = useState({});

    const saveAddress = () => {
        emitAddress(delivery);
    }
    const cancel = () => {
        setDelivery({...data});
    }

    useEffect(() => {
        setDelivery({...data});
    }, [data]);

    return (
        <div className="flex flex-col gap-y-4 py-4  px-1">
            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                <TextInput
                    type="text"
                    id="first-name"
                    name="First Name *"
                    placeholder="First Name"
                    initValue={ delivery.name }
                    onChange={ e => setDelivery({...delivery, name: e.target.value}) }
                />
                <TextInput
                    type="text"
                    id="last-name"
                    name="Last Name *"
                    placeholder="Last Name"
                    initValue={ delivery.surname }
                    onChange={ e => setDelivery({...delivery, surname: e.target.value}) }
                />
                <TextInput
                    type="text"
                    id="country"
                    name="Country/Region *"
                    placeholder="Country/Region"
                    initValue={ delivery.country }
                    onChange={ e => setDelivery({...delivery, country: e.target.value}) }
                />
                <TextInput
                    type="text"
                    id="company"
                    name="Company"
                    placeholder="Company (optional)"
                    initValue={ delivery.country }
                    onChange={ e => setDelivery({...delivery, country: e.target.value}) }
                />
                <TextInput
                    type="text"
                    id="city"
                    name="City *"
                    placeholder="Town/City"
                    initValue={ delivery.city }
                    onChange={ e => setDelivery({...delivery, city: e.target.value}) }
                />
                <TextInput
                    type="text"
                    id="street"
                    name="Street Address *"
                    placeholder="House number and street name"
                    initValue={ delivery.street }
                    onChange={ e => setDelivery({...delivery, street: e.target.value}) }
                />
                <TextInput
                    type="tel"
                    id="phone"
                    name="Phone *"
                    placeholder="Phone"
                    initValue={ delivery.phone }
                    onChange={ e => setDelivery({...delivery, phone: e.target.value}) }
                />
                <TextInput
                    type="text"
                    id="postal-code"
                    name="Postal Code *"
                    placeholder="Postal Code"
                    initValue={ delivery.zipcode }
                    onChange={ e => setDelivery({...delivery, zipcode: e.target.value}) }
                />
            </div>
            <TextInput
                type="multiline"
                id="description"
                name="Delivery Instruction"
                placeholder="Delivery Instruction"
                initValue={ delivery.description }
                onChange={ e => setDelivery({...delivery, description: e.target.value}) }
            />
            <div className="grid grid-cols-3 mt-4 gap-x-4">
                <Button onClick={ saveAddress }>
                    <span>Save</span>
                </Button>
                <Button onClick={ cancel } isCancelButton={ true }>
                    <span>Cancel</span>
                </Button>
            </div>
        </div>
    );
}

export default Address;
