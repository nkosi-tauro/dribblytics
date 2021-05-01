import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebaseConfig from "../firebase.js";
import { AuthContext } from "./Auth.js";
import SignInImage from '../assets/teenplay.jpg'


const SignIn = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebaseConfig
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/main");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/main" />;
    }

    return (
        <div className="container mx-auto" >
            <div className="flex justify-center px-6 my-12">

                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div
                        className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                        style={{"backgroundImage": `url(${SignInImage})`}}
                    ></div>

                    <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 className="pt-4 text-2xl text-center">Sign In!</h3>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name="password"
                                    type="password"
                                    placeholder="******************"
                                />
                
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Sign In
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            <div className="text-center">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(SignIn);
