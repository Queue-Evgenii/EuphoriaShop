import {Link} from "react-router-dom";
import {Component} from "react";


class Navigation extends Component {
    render() {
        return (
            <nav className="flex gap-4 items-center _nav">
                { this.props.items && this.props.items.map((item) => (
                    <Link
                        key={ item.id }
                        to={ item.url }
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        );
    }
}

export default Navigation;
