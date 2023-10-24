import { CheckCookieAuth } from "./utility/CheckCookieAuth";
export async function middleware(req, res) {
    return CheckCookieAuth(req);
}
