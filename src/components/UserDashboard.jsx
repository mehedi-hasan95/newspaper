"use client";

import { useOpenClose } from "@/utility/useOpenClose";
import { LogOut, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserDashboard = () => {
    // open and close
    const { isOpen, setIsOpen, ref } = useOpenClose();
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
        <div className="pl-3">
            <button onClick={() => setIsOpen(!isOpen)}>
                <Image
                    src="/avater.png"
                    alt=""
                    height={500}
                    width={500}
                    className="h-10 w-10 rounded-full"
                />
            </button>
            {isOpen && (
                <div
                    ref={ref}
                    className="absolute rounded-xl shadow-md px-5 py-5 md:w-3/4 bg-white overflow-hidden right-0 text-sm"
                >
                    <div className="flex gap-y-2 flex-col">
                        <Link
                            href="#"
                            className="font-semibold flex gap-3 pt-3"
                        >
                            <User2 size={24} />
                            Profile
                        </Link>
                        <div onClick={logOut}>
                            <h2 className="cursor-pointer font-semibold flex gap-3">
                                <LogOut size={24} />
                                Log Out
                            </h2>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDashboard;
