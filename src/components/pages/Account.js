import SignIn from "../account/SignIn";
import {useParams} from "react-router-dom";
import {useCallback} from "react";

import account1 from "./../../images/static/account-1.png";
import account2 from "./../../images/static/account-2.png";
import account3 from "./../../images/static/account-3.png";
import account4 from "./../../images/static/account-4.png";
import account5 from "./../../images/static/account-5.png";
import account6 from "./../../images/static/account-6.png";


const Account = () => {
    const { value } = useParams();

    const getPage = useCallback(() => {
        switch (value) {
            case "sign-in":
                return (
                    <>
                        <img src={ account1 } alt=""/>
                        <div>
                            <SignIn />
                        </div>
                    </>
                );
            case "sign-up":
                return (
                    <>
                        <img src={ account2 } alt=""/>
                        <div>
                            <SignIn />
                        </div>
                    </>
                );
            case "password-recovery":
                return (
                    <>
                        <img src={ account3 } alt=""/>
                        <div>
                            <SignIn />
                        </div>
                    </>
                );
            case "check-email":
                return (
                    <>
                        <img src={ account4 } alt=""/>
                        <div>
                            <SignIn />
                        </div>
                    </>
                );
            case "verification":
                return (
                    <>
                        <img src={ account5 } alt=""/>
                        <div>
                            <SignIn />
                        </div>
                    </>
                );
            case "new-password":
                return (
                    <>
                        <img src={ account6 } alt=""/>
                        <div>
                            <SignIn />
                        </div>
                    </>
                );
            default:
                return (<h2 className="text-2xl font-bold">Something went wrong!</h2>);
        }
    }, [value]);

    return (
        <div className="_container grid grid-cols-2 gap-x-20">
            { getPage() }
        </div>
    );
}

export default Account;
