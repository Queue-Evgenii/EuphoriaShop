import {Component} from "react";
import { withParams } from "./../../router/router";

class Catalog extends Component {
    componentDidMount() {
        const { gender, id } = this.props.params;
        console.log(gender, id)
    }

    render() {
        return (
            <main className="max-w-screen-xl m-auto flex flex-col gap-y-16 lg:gap-y-24">
                { "asd" }
            </main>
        );
    }
};

export default withParams(Catalog);
