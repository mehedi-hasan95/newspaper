"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login = (props) => {
    const router = useRouter();
    const [loginFail, setLoginFail] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (props.firstName === "0") {
            router.push("/user/login");
        } else {
            router.push("/");
        }
    }, [props.firstName, router]);
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginFail("");
        const email = e.target.email.value;
        const password = e.target.password.value;
        const data = { email, password };
        try {
            setLoading(true);
            const response = await fetch("/api/user/login", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (result.status === "success") {
                router.replace("/");
                router.refresh();
            } else {
                setLoginFail("Email or Password is not match");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
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
                    {loading ? (
                        <button
                            type="button"
                            class="bg-gray-700 cursor-not-allowed flex justify-center items-center gap-4 max-w-max px-4 py-3 text-white font-bold"
                            disabled
                        >
                            Processing...
                            <div className="w-5 h-5 border-4 border-dashed rounded-full animate-spin"></div>
                        </button>
                    ) : (
                        <input
                            type="submit"
                            value="Login"
                            className="px-5 font-bold py-3 rounded-lg bg-gray-700 text-white cursor-pointer max-w-max"
                        />
                    )}
                </div>
            </form>
        </div>
    );
};

export default Login;
