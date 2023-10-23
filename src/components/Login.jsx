"use client";

import { useState } from "react";

const Login = () => {
    const [loginFail, setLoginFail] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginFail("");
        const email = e.target.email.value;
        const password = e.target.password.value;
        const data = { email, password };
        try {
            const response = await fetch("/api/user/login", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (result.status === "success") {
                console.log(result);
            } else {
                setLoginFail("Email or Password is not match");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div className="max-w-3xl mx-auto p-4">
            <h2 className="text-3xl text-center font-bold">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-5 pt-5">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="px-3 py-2 rounded-lg border-2 border-black outline-none"
                        required
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="Your Password"
                        className="px-3 py-2 rounded-lg border-2 border-black outline-none"
                        required
                    />
                    {loginFail && <p className="text-rose-700">{loginFail}</p>}
                    <input
                        type="submit"
                        value="Login"
                        className="px-4 py-2 rounded-lg bg-gray-700 text-white cursor-pointer max-w-max"
                    />
                </div>
            </form>
        </div>
    );
};

export default Login;
