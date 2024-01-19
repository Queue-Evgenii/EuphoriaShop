import TextInput from "../../general/form/TextInput";
import {useEffect, useState} from "react";
import Dropdown from "../../general/dropdown/Dropdown";
import Address from "./Address";
import {validatePhone} from "../../general/form/ValidateFunctions";
import {updateMe} from "../../../api/account";

const Info = ({ me }) => {
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneErr, setPhoneErr] = useState([]);
    const [delivery, setDelivery] = useState({});

    const submitData = () => {

    }

    const saveMe = () => {
        if (phone && phone.length !== 0 && !validatePhone(phone)) {
            setPhoneErr(["Incorrect number!"]);
            return;
        }
        setPhoneErr([]);

        const data = {
            me: {
                email: me.email,
                username,
                phone,
            }
        }
        updateMe(data)
            .then(res => {
                console.log(res);
            });
    }

    useEffect(() =>  {
        setUsername(me.username);
        setPhone(me.phone);
    }, [me]);

    if (!me) {
        return (
            <div>Something wrong!</div>
        );
    }
    return (
        <div>
            <h2 className="text-3xl font-semibold mb-4">My Info</h2>
            <h3 className="text-2xl font-semibold mb-6">Contact details</h3>
            <ol>
                <li className="py-2">
                    <TextInput
                        type="email"
                        id="email"
                        name="Email Address"
                        initValue={ me.email }
                        readonly={ true }
                    />
                </li>
                <li className="py-2">
                    <TextInput
                        type="text"
                        id="username"
                        name="Your Name"
                        placeholder="Your Username"
                        initValue={ username ? username : "" }
                        onChange={ e => setUsername(e.target.value) }
                        onBlur={ saveMe }
                    />
                </li>
                <li className="py-2">
                    <TextInput
                        type="tel"
                        id="phone"
                        name="Phone Number"
                        placeholder="Phone Number"
                        errors={ phoneErr }
                        initValue={ phone ? phone : "" }
                        onChange={ e => setPhone(e.target.value) }
                        onBlur={ saveMe }
                    />
                </li>
                <li className="py-2">
                    <Dropdown title="Address">
                        <Address data={ delivery } emitAddress={ submitData } />
                    </Dropdown>
                </li>
            </ol>
        </div>
    );
}

export default Info;
