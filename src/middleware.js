import { AfterLogin, CheckCookieAuth } from "./utility/CheckCookieAuth";
export async function middleware(req, res) {
    if (req.nextUrl.pathname.startsWith("/user")) {
        return AfterLogin(req);
    }
    return CheckCookieAuth(req);
}
