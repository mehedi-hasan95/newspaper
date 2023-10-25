import {
    AfterLogin,
    CheckCookieAuth,
    Restricted,
} from "./utility/CheckCookieAuth";
export async function middleware(req, res) {
    if (req.nextUrl.pathname.startsWith("/dashboard")) {
        return AfterLogin(req);
    }

    return CheckCookieAuth(req);
}
