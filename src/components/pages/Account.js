import SignInUp from "../account/SignInUp";
import {useNavigate, useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";

import account1 from "./../../images/static/account-1.png";
import account2 from "./../../images/static/account-2.png";
import account3 from "./../../images/static/account-3.png";
import account4 from "./../../images/static/account-4.png";
import account5 from "./../../images/static/account-5.png";
import account6 from "./../../images/static/account-6.png";
import {getMe} from "../../api/account";
import {setMeToStore} from "../../store/actions/account";
import Personal from "../account/Personal";
import store from "../../store";


const Account = () => {
    const routerNavigate = useNavigate();
    const { value } = useParams();
    const [ me, setMeToState ] = useState({});

    const getPage = useCallback(() => {
        switch (value) {
            case "sign-in":
                return (
                    <div className="grid grid-cols-2 gap-x-20">
                        <img src={ account1 } alt=""/>
                        <div>
                            <SignInUp />
                        </div>
                    </div>
                );
            case "sign-up":
                return (
                    <div className="grid grid-cols-2 gap-x-20">
                        <img src={ account2 } alt=""/>
                        <div>
                            <SignInUp />
                        </div>
                    </div>
                );
            case "password-recovery":
                return (
                    <div className="grid grid-cols-2 gap-x-20">
                        <img src={ account3 } alt=""/>
                        <div>
                            <SignInUp />
                        </div>
                    </div>
                );
            case "check-email":
                return (
                    <div className="grid grid-cols-2 gap-x-20">
                        <img src={ account4 } alt=""/>
                        <div>
                            <SignInUp />
                        </div>
                    </div>
                );
            case "verification":
                return (
                    <div className="grid grid-cols-2 gap-x-20">
                        <img src={ account5 } alt=""/>
                        <div>
                            <SignInUp />
                        </div>
                    </div>
                );
            case "new-password":
                return (
                    <div className="grid grid-cols-2 gap-x-20">
                        <img src={ account6 } alt=""/>
                        <div>
                            <SignInUp />
                        </div>
                    </div>
                );
            case "personal":
                return (
                    <>
                        <Personal data={ me } />
                    </>
                );
            default:
                return (<h2 className="text-2xl font-bold">Something went wrong!</h2>);
        }
    }, [value, me]);

    useEffect(() => {
        getMe()
            .then(res => {
                store.dispatch(setMeToStore(res.data.me));
                setMeToState({...res.data.me});
            })
            .catch(() => {
                routerNavigate("/me/sign-in");
            });
    }, [setMeToState, routerNavigate]);

    return (
        <div className="_container">
            { getPage() }
        </div>
    );
}

export default Account;
