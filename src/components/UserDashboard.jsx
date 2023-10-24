"use client";

import { useRouter } from "next/navigation";

const UserDashboard = () => {
    const router = useRouter();
    const logOut = async () => {
        try {
            const response = await fetch("/api/user/login", {
                method: "GET",
            });

            const result = await response.json();
            if (result.status === "success") {
                router.replace("/");
                router.refresh();
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div>
            <div onClick={logOut}>
                <h2 className="cursor-pointer">Log Out</h2>
            </div>
        </div>
    );
};

export default UserDashboard;
