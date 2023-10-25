import { Fragment } from "react";
import NavMenu from "./NavMenu";
import { headers } from "next/headers";

export default function MainLayout(props) {
    const headersList = headers();
    const firstName = headersList.get("firstName");

    return (
        <Fragment>
            <NavMenu firstName={firstName} />
            {props.children}
        </Fragment>
    );
}
