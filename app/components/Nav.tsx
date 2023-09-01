import Link from "next/link";

export default async function Nav() {
  return (
    <nav className="flex justify-between items-center py-8">
      <Link className="" href={"/"}>
        <h1 className="text-black">Send</h1>
      </Link>
    </nav>
  );
}
