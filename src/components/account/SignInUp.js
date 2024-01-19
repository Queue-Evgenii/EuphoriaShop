import TextInput from "../general/form/TextInput";
import Button from "../general/form/Button";
import {Link, useParams, useNavigate} from "react-router-dom";
import SignWithSocials from "./SignWithSocials";
import {useEffect, useState} from "react";
import {validateEmail, validatePassword} from "../general/form/ValidateFunctions";
import {authorization, registration} from "../../api/account";
import {setMeToStore} from "../../store/actions/account";
import store from "../../store";

const SignInUp = () => {
    const routerNavigate = useNavigate();
    const { value } = useParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErrors, setEmailErrors] = useState([]);
    const [passwordErrors, setPasswordErrors] = useState([]);


    const submitForm = () => {
        if (!validateEmail(email)) {
            const tempArr = ["Not valid email!"];
            setEmailErrors(tempArr);
            return;
        }
        setEmailErrors([]);

        if (!validatePassword(password)) {
            const tempArr = ["Not valid password! Password too short"];
            setPasswordErrors(tempArr);
            return;
        }
        setPasswordErrors([]);

        const data = {
            me: {
                email,
                password,
            }
        };

        if (value === "sign-in") {
            doAction(authorization, data);
        } else {
            doAction(registration, data);
        }
    }

    const doAction = (action, data) => {
        action(data)
            .then(res => {
                localStorage.setItem("access_token", JSON.stringify(res.data.token));
                store.dispatch(setMeToStore(res.data.me));
                routerNavigate("/me/personal/info");
            });
    }

    useEffect(() => {
        setEmail("");
        setPassword("");
        setEmailErrors([]);
        setPasswordErrors([]);
    }, [value]);

    return (
        <div className="flex flex-col gap-y-8 py-12">
            <h2 className="_title">{ value === "sign-in" ? "Sign In Page" : "Sign Up Page" }</h2>
            <div className="px-4 flex flex-col gap-y-4">
                <SignWithSocials />
            </div>
            <div className="px-4 flex gap-x-4 items-center">
                <span className="flex-[1_1_100%] h-0.5" style={{ backgroundColor: "rgb(102, 102, 102)" }}></span>
                <span>OR</span>
                <span className="flex-[1_1_100%] h-0.5" style={{ backgroundColor: "rgb(102, 102, 102)" }}></span>
            </div>
            <div className="px-4 flex flex-col gap-y-4">
                <TextInput
                    type="email"
                    id="email"
                    name="Email *"
                    placeholder="Email"
                    initValue={ email }
                    errors={ emailErrors }
                    onChange={ (e) => { setEmail(e.target.value); } }
                />
                <TextInput
                    type="password"
                    id="password"
                    name="Password *"
                    placeholder="Password"
                    initValue={ password }
                    errors={ passwordErrors }
                    onChange={ (e) => { setPassword(e.target.value) } }
                />
                <div>
                    <div className="max-w-52 mb-2">
                        <Button onClick={ submitForm }>
                            { value === "sign-in" ? "Sign In" : "Sign Up" }
                        </Button>
                    </div>
                    <div>
                        <span>{ value === "sign-in" ? "Don’t have an account?  " : "Already have an account? " }</span>
                        <Link to={ value === "sign-in" ? "/me/sign-up" : "/me/sign-in"} className="underline">{ value === "sign-in" ? "Sign Up" : "Log In" }</Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default SignInUp;
