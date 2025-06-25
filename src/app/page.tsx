import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
    const user = await currentUser();
    console.log(user);

    return (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center text-center">
              My first authentication page using Clerk and NextJs 15.3 🤗
              Basic but functional 😇
            </div>
        </div>
    )
}