import Link from "next/link";
import Login from "./Login";
import LoggedIn from "./LoggedIn";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function Nav() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between items-center py-8">
      <Link className="" href={"/"}>
        <h1 className="font-bold text-lg">PostHub</h1>
      </Link>
      <ul className="flex items-center gap-6">
        {!session?.user && <Login />}
        {session?.user && <LoggedIn image={session.user?.image || ""} />}
      </ul>
    </nav>
  );
}
