import Navigation from "../footer/navigation/Navigation";
import Social from "./social/Social";
import Categories from "./categories/Categories";

import facebook from "./../../images/icons/facebook.svg";
import inst from "./../../images/icons/inst.svg";
import twitter from "./../../images/icons/twitter.svg";
import linkedin from "./../../images/icons/linkedin.svg";
import gPlay from "./../../images/icons/gPlay.svg";
import appStore from "./../../images/icons/appStore.svg";

import { Component } from "react";
import store from "./../../store/index";

const navItems = [
    {
        id: 0,
        title: "Need Help",
        items: [
            {
                id: 0,
                title: "Contact Us",
                url: "#",
            },
            {
                id: 1,
                title: "Track Order",
                url: "#",
            },
            {
                id: 2,
                title: "Returns & Refunds",
                url: "#",
            },
            {
                id: 3,
                title: "FAQ's",
                url: "#",
            },
            {
                id: 4,
                title: "Career",
                url: "#",
            },
        ],
    },
    {
        id: 1,
        title: "Company",
        items: [
            {
                id: 0,
                title: "About Us",
                url: "#",
            },
            {
                id: 1,
                title: "euphoria Blog",
                url: "#",
            },
            {
                id: 2,
                title: "euphoriastan",
                url: "#",
            },
            {
                id: 3,
                title: "Collaboration",
                url: "#",
            },
            {
                id: 4,
                title: "Media",
                url: "#",
            },
        ],
    },
    {
        id: 2,
        title: "More Info",
        items: [
            {
                id: 0,
                title: "Term and Conditions",
                url: "#",
            },
            {
                id: 1,
                title: "Privacy Policy",
                url: "#",
            },
            {
                id: 2,
                title: "Shipping Policy",
                url: "#",
            },
            {
                id: 3,
                title: "Sitemap",
                url: "#",
            },
        ],
    },
    {
        id: 3,
        title: "Location",
        items: [
            {
                id: 0,
                title: "support@euphoria.in",
                url: "mailto=support@euphoria.in",
            },
            {
                id: 1,
                title: "Eklingpura Chouraha, Ahmedabad Main Road",
                url: "#",
            },
            {
                id: 2,
                title: "(NH 8- Near Mahadev Hotel) Udaipur, India- 313002",
                url: "#",
            },
        ],
    },
];
const socials = [
    {
        id: 0,
        title: null,
        items: [
            {
                id: 0,
                url: "#",
                src: facebook,
            },
            {
                id: 1,
                url: "#",
                src: inst,
            },
            {
                id: 2,
                url: "#",
                src: twitter,
            },
            {
                id: 3,
                url: "#",
                src: linkedin,
            },
        ],
    },
    {
        id: 1,
        title: "Download The App",
        items: [
            {
                id: 0,
                url: "#",
                src: gPlay,
            },
            {
                id: 1,
                url: "#",
                src: appStore,
            },
        ]
    },
];

class Footer extends Component {
    state = {
        categories: [],
    };
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                categories: store.getState().categories,
            });
        });
    };

    render() {
        return (
            <footer className="flex flex-col gap-y-12" style={{ background: "#3C4242", padding: "60px 0 20px 0", color: "#f6f6f6", }}>
                <Navigation items={ navItems } />
                <Social items={ socials } />
                <div>
                    <Categories items={ this.state.categories } />
                    <div className="_container text-center">
                        <span className="font-bold inline-block py-8">Copyright © { new Date().getFullYear() } Euphoria Folks Pvt Ltd. All rights reserved.</span>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
