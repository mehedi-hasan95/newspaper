"use client";
import UserDashboard from "@/components/UserDashboard";
import {
    Home,
    PanelLeftClose,
    PanelRightClose,
    UserSquare2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const DashboardLayout = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const open = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="bg-gradient-to-r from-slate-200 from-10% via-slate-50  to-transparent">
            <div className="flex container mx-auto">
                <div
                    className={`${
                        isOpen ? "w-1/4 h-screen bg-slate-300" : "hidden"
                    } pt-5 `}
                >
                    <div>
                        <Link
                            href="/"
                            className="flex gap-4 font-bold py-3 px-3 hover:bg-slate-400"
                        >
                            <Home size={24} /> Home
                        </Link>
                        <Link
                            href=""
                            className="flex gap-4 font-bold py-3 px-3 bg-slate-400"
                        >
                            <UserSquare2 size={24} /> Profile
                        </Link>
                    </div>
                </div>
                <div className={`${isOpen ? "w-3/4" : "w-full"}`}>
                    <div className="flex justify-between bg-slate-200 pt-3 relative border-b-2 border-gray-400 pb-2 px-3">
                        <button onClick={open}>
                            {isOpen ? (
                                <PanelLeftClose size={32} />
                            ) : (
                                <PanelRightClose size={32} />
                            )}
                        </button>
                        <div className="justify-end">
                            {props.firstName === "0" ? (
                                <Link href="/user/login">Log In</Link>
                            ) : (
                                <UserDashboard />
                            )}
                        </div>
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
