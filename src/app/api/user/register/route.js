import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req, res) {
    try {
        const body = await req.json();
        body.otp = "0";
        const register = await prisma.users.create({
            data: body,
        });
        return NextResponse.json({ msg: "success", register });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
