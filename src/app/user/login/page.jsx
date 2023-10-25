import { headers } from "next/headers";
import Login from "@/components/Login";

const LoginPage = () => {
    const headersList = headers();
    const firstName = headersList.get("firstName");
    return (
        <div>
            <Login firstName={firstName} />
        </div>
    );
};

export default LoginPage;
