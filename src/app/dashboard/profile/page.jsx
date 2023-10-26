import ProfileForm from "@/components/ProfileForm";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

async function getData() {
    let headerList = headers();
    let user_id = parseInt(headerList.get("id"));
    const prisma = new PrismaClient();
    return await prisma.users.findUnique({ where: { id: user_id } });
}
const ProfilePage = async () => {
    const data = await getData();
    return (
        <div className="">
            <ProfileForm data={data} />
        </div>
    );
};

export default ProfilePage;
