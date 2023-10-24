import { headers } from "next/headers";
import Link from "next/link";
import UserDashboard from "./UserDashboard";

const DashboardLayout = () => {
    const headersList = headers();
    const firstName = headersList.get("firstName");
    return (
        <div>
            <div className="px-5 flex justify-between items-center">
                <Link href="/">Home</Link>
                <div className="">
                    {firstName === "0" ? (
                        <Link
                            href="/user/login"
                            className="hidden cursor-pointer px-6 py-2 font-semibold rounded lg:block dark:bg-violet-400 dark:text-gray-900"
                        >
                            Log in
                        </Link>
                    ) : (
                        <UserDashboard />
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
