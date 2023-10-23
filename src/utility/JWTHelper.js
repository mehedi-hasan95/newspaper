import { SignJWT, jwtVerify } from "jose";

export async function CreateJWT(email, id, firstName) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({
        email: email,
        id: id,
        firstName: firstName,
    })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setIssuer()
        .setExpirationTime(process.env.JWT_EXPIRE)
        .sign(secret);
    return token;
}

export async function JWTVerify(token) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const decoded = await jwtVerify(token, secret);
    return decoded["payload"];
}
