import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebaseConfig from "../firebase.js";
import { AuthContext } from "./Auth.js";

const SignUp = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebaseConfig
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value);
                history.push("/signin");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/signin" />;
    }

    return (
        <div class="container mx-auto">
            <div class="flex justify-center px-6 my-12">

                <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                    {/* add Image here */}
                    <div
                        class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                        
                    ></div>

                    <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 class="pt-4 text-2xl text-center">Sign Up!</h3>
                        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleLogin}>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
                                    Email
                                </label>
                                <input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                    Password
                                </label>
                                <input
                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name="password"
                                    type="password"
                                    placeholder="******************"
                                />
                
                            </div>
                            <div class="mb-6 text-center">
                                <button
                                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                            </div>
                            <hr class="mb-6 border-t" />
                            <div class="text-center">
                                <a
                                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                >
                                    Already Have an Account? Sign In Here!
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(SignUp);
