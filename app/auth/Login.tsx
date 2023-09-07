"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list-none">
      <button
        onClick={() => signIn()}
        className="text-white text-sm px-5 py-2 rounded-xl bg-gray-700 hover:bg-gray-500"
      >
        Sign in
      </button>
    </li>
  );
}
