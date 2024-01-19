import {useCallback, useState} from "react";
import store from "../../store";
import {NavLink, useParams} from "react-router-dom";
import Info from "./personal/Info";

const sidebarLists = [
    {
        name: "My orders",
        to: "/me/personal/orders",
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5833 8.39473L15.5138 7.45768C15.4501 6.59928 14.7083 5.93421 13.8146 5.93421H11.9937M5.5 17.4167H4.45365C3.465 17.4167 2.68398 16.609 2.75442 15.6594L3.36283 7.45769C3.42651 6.59928 4.16831 5.93421 5.06207 5.93421H6.88298M6.88298 5.93421V4.29385C6.88298 2.93494 8.02705 1.83333 9.43833 1.83333C10.8496 1.83333 11.9937 2.93494 11.9937 4.29385V5.93421M6.88298 5.93421H11.9937M15.5833 13.75C15.5833 14.7625 14.7625 15.5833 13.75 15.5833C12.7375 15.5833 11.9167 14.7625 11.9167 13.75M10.0833 19.25H17.4167C18.4292 19.25 19.25 18.4292 19.25 17.4167V12.8333C19.25 11.8208 18.4292 11 17.4167 11H10.0833C9.07081 11 8.25 11.8208 8.25 12.8333V17.4167C8.25 18.4292 9.07081 19.25 10.0833 19.25Z" stroke="#807D7E" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
    },
    {
        name: "Wishlist",
        to: "/me/personal/wishlist",
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.99486 4.93012C8.49535 3.18261 5.99481 2.71253 4.11602 4.31273C2.23723 5.91293 1.97273 8.58839 3.44815 10.4809C4.67486 12.0545 8.38733 15.3732 9.60407 16.4473C9.7402 16.5675 9.80827 16.6276 9.88766 16.6512C9.95695 16.6718 10.0328 16.6718 10.1021 16.6512C10.1815 16.6276 10.2495 16.5675 10.3857 16.4473C11.6024 15.3732 15.3149 12.0545 16.5416 10.4809C18.017 8.58839 17.7848 5.8961 15.8737 4.31273C13.9626 2.72936 11.4944 3.18261 9.99486 4.93012Z" stroke="#807D7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
    {
        name: "My info",
        to: "/me/personal/info",
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99967 11.6667C12.3009 11.6667 14.1663 9.80119 14.1663 7.5C14.1663 5.19882 12.3009 3.33334 9.99967 3.33334C7.69849 3.33334 5.83301 5.19882 5.83301 7.5C5.83301 9.80119 7.69849 11.6667 9.99967 11.6667ZM9.99967 11.6667C6.31778 11.6667 3.33301 13.9052 3.33301 16.6667M9.99967 11.6667C13.6816 11.6667 16.6663 13.9052 16.6663 16.6667" stroke="#807D7E" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
    },
    {
        name: "Sign out",
        to: "/me/personal/sign-out",
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 15.5833L19.25 11M19.25 11L14.6667 6.41667M19.25 11H8.25M8.25 2.75H7.15C5.60986 2.75 4.83978 2.75 4.25153 3.04973C3.73408 3.31338 3.31338 3.73408 3.04973 4.25153C2.75 4.83978 2.75 5.60986 2.75 7.15V14.85C2.75 16.3901 2.75 17.1602 3.04973 17.7485C3.31338 18.2659 3.73408 18.6866 4.25153 18.9503C4.83978 19.25 5.60986 19.25 7.15 19.25H8.25" stroke="#807D7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
];


const Personal = () => {
    const [me,  setMe] = useState({});
    const { element } = useParams();

    store.subscribe(() => {
        setMe({...store.getState().me});
    })

    const getPage = useCallback(() => {
        switch (element) {
            case "info":
                return (
                    <>
                        <Info me={ me } />
                    </>
                );
            case "orders":
                return (
                    <>
                    </>
                );
            case "wishlist":
                return (
                    <>
                    </>
                );
            case "sign-out":
                return (
                    <>
                    </>
                );
            default:
                return (<h2 className="text-2xl font-bold">Something went wrong!</h2>);
        }
    }, [element, me]);

    if (!store.getState().me) {
        return (
            <div></div>
        );
    }
    return (
        <div className="flex py-10 gap-x-8">
            <aside className="flex-[0_0_30%]">
                <div className="mb-8 flex flex-col gap-y-3">
                    { (me.username && <h2 className="_title">{ me.username }</h2>) || <h2 className="_title">Hello! Welcome</h2> }
                    <h4 className="text-gray-500">Welcome to your Account</h4>
                </div>
                <ul>
                    { sidebarLists.map((item, index) => (
                        <li key={ index }>
                            <NavLink
                                to={ item.to }
                                className="
                                        flex
                                        items-center
                                        gap-x-2
                                        text-lg
                                        font-semibold
                                        text-gray-600
                                        px-8
                                        py-3
                                    "
                                style={({ isActive }) => isActive ? { backgroundColor: "#F6F6F6", borderLeft: "2px solid #3C4242",} : {}}
                            >
                                { item.icon }
                                <span>{ item.name }</span>
                            </NavLink>
                        </li>
                    )) }
                </ul>
            </aside>
            <div className="flex-1">
                { getPage() }
            </div>
        </div>
    );
}

export default Personal;
