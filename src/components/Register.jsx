"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
    const router = useRouter();
    const [isError, setIsError] = useState("");
    const [passMatch, setPassMatch] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsError("");
        setPassMatch("");
        const firstName = e.target.fname.value;
        const lastName = e.target.lname.value;
        const email = e.target.email.value;
        const mobile = e.target.mobile.value;
        const password = e.target.password.value;
        const cpassword = e.target.cpassword.value;
        const data = { firstName, lastName, email, mobile, password };
        if (password.length < 6) {
            setIsError("Password should have 6 digit long");
            return;
        } else if (password !== cpassword) {
            setPassMatch("Password did not match");
            return;
        } else {
            try {
                const response = await fetch("/api/user/register", {
                    method: "POST", // or 'PUT'
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                if (result.msg === "success") {
                    router.replace("/");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };
    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-y-3">
                        <label htmlFor="fname" className="font-bold">
                            First Name:
                        </label>
                        <input
                            required
                            type="text"
                            name="fname"
                            id="fname"
                            className="px-3 py-2 rounded-lg w-full border-2 outline-none border-black"
                        />
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <label htmlFor="lname" className="font-bold">
                            Last Name:
                        </label>
                        <input
                            required
                            type="text"
                            name="lname"
                            id="lname"
                            className="px-3 py-2 rounded-lg w-full border-2 outline-none border-black"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5 py-5">
                    <div className="flex flex-col gap-y-3">
                        <label htmlFor="email" className="font-bold">
                            Your Email:
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            className="px-3 py-2 rounded-lg w-full border-2 outline-none border-black"
                        />
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <label htmlFor="mobile" className="font-bold">
                            Your Mobile:
                        </label>
                        <input
                            required
                            type="text"
                            name="mobile"
                            id="mobile"
                            className="px-3 py-2 rounded-lg w-full border-2 outline-none border-black"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5 py-5">
                    <div className="flex flex-col gap-y-3">
                        <label htmlFor="password" className="font-bold">
                            Your Password:
                        </label>
                        <input
                            required
                            type="text"
                            name="password"
                            id="password"
                            className="px-3 py-2 rounded-lg w-full border-2 outline-none border-black"
                        />
                        {isError && <p className="text-rose-500">{isError}</p>}
                        {passMatch && (
                            <p className="text-rose-500">{passMatch}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <label htmlFor="cpassword" className="font-bold">
                            Confirm Password:
                        </label>
                        <input
                            required
                            type="text"
                            name="cpassword"
                            id="cpassword"
                            className="px-3 py-2 rounded-lg w-full border-2 outline-none border-black"
                        />
                    </div>
                </div>

                <input
                    type="submit"
                    value="Submit"
                    className="px-4 py-2 rounded-lg text-white bg-gray-800 mt-5 cursor-pointer"
                />
            </form>
        </div>
    );
};

export default Register;
