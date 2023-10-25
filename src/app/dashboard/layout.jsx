import DashboardLayout from "@/components/DashboardLayout";
import { headers } from "next/headers";
import { Fragment } from "react";

const Layout = ({ children }) => {
    const headersList = headers();
    const firstName = headersList.get("firstName");
    return <DashboardLayout firstName={firstName}>{children}</DashboardLayout>;
};
export default Layout;
