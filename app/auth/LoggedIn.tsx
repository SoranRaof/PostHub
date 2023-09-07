"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type User = {
  image: string;
};

export default function LoggedIn({ image }: User) {
  return (
    <li className="list-none flex gap-5 items-center">
      <button
        onClick={() => signOut()}
        className="text-white text-sm px-5 py-2 rounded-xl bg-gray-700 hover:bg-gray-500"
      >
        Sign out
      </button>
      <Link href={"/dashboard"}>
        <Image
          width={64}
          height={64}
          className="w-11 rounded-full"
          src={image}
          alt="user-image"
          priority
        />
      </Link>
    </li>
  );
}
