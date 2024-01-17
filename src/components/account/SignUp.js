import TextInput from "../general/form/TextInput";
import Button from "../general/form/Button";
import {Link} from "react-router-dom";
import SignWithSocials from "./SignWithSocials";

const SignUp = () => {
    return (
        <div className="flex flex-col gap-y-8 py-12">
            <h2 className="_title">Sign In Page</h2>
            <div className="px-4 flex flex-col gap-y-4">
                <SignWithSocials />
            </div>
            <div className="px-4 flex gap-x-4 items-center">
                <span className="flex-[1_1_100%] h-0.5" style={{ backgroundColor: "rgb(102, 102, 102)" }}></span>
                <span>OR</span>
                <span className="flex-[1_1_100%] h-0.5" style={{ backgroundColor: "rgb(102, 102, 102)" }}></span>
            </div>
            <div className="px-4 flex flex-col gap-y-4">
                <TextInput type="email" id="email" name="Email" placeholder="Email" />
                <TextInput type="password" id="password" name="Password" placeholder="Password" />
                <div>
                    <div className="max-w-52 mb-2">
                        <Button>
                            Sign Up
                        </Button>
                    </div>
                    <div>
                        <span>Already have an account? </span>
                        <Link to="/me/sign-up" className="underline">Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default SignUp;
