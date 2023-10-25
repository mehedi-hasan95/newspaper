import DashboardLayout from "@/components/DashboardLayout";
import { headers } from "next/headers";
import { Fragment } from "react";

const Layout = (props) => {
    const headersList = headers();
    const firstName = headersList.get("firstName");
    return (
        <Fragment>
            <DashboardLayout firstName={firstName} />
            {props.children}
        </Fragment>
    );
};
export default Layout;
