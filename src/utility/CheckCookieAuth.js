import { NextResponse } from "next/server";
import { JWTVerify } from "./JWTHelper";

export async function CheckCookieAuth(req) {
    try {
        let token = req.cookies.get("token");
        let payload = await JWTVerify(token["value"]);
        const requestHeader = new Headers(req.headers);
        requestHeader.set("email", payload["email"]);
        requestHeader.set("id", payload["id"]);
        requestHeader.set("firstName", payload["firstName"]);
        return NextResponse.next({ request: { headers: requestHeader } });
    } catch (e) {
        const requestHeader = new Headers(req.headers);
        requestHeader.set("email", "0");
        requestHeader.set("id", "0");
        requestHeader.set("firstName", "0");
        return NextResponse.next({
            request: { headers: requestHeader },
        });
    }
}
// Which page user can't visit without login
export async function AfterLogin(req) {
    const cookieData = req.cookies.get("token");
    if (!cookieData) {
        return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
}
