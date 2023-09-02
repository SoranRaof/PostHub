"use client";
import { signOut } from "next-auth/react";
export default function LoggedIn() {
  return (
    <li className="list-none">
      <button
        onClick={() => signOut()}
        className="text-sm text-white bg-gray-500 hover:bg-gray-700 py-1 px-5 rounded-xl"
      >
        Sign out
      </button>
    </li>
  );
}
