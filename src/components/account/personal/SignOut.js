import Button from "../../general/form/Button";

const SignOut = ({ emitHandler }) => {
    return (
        <div>
            <h2 className="text-3xl font-semibold mb-4">Sign Out Page</h2>
            <h3 className="text-2xl font-semibold mb-6">Are you really want to Sign Out :( </h3>
            <div className="grid grid-cols-3 mt-4 gap-x-4">
                <Button onClick={ emitHandler }>
                    <span>Sign Out</span>
                </Button>
            </div>
        </div>
    );
}

export default SignOut;
