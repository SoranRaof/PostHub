"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list-none">
      <button
        onClick={() => signIn()}
        className="text-sm text-white bg-gray-500 hover:bg-gray-700 py-1 px-5 rounded-xl"
      >
        Sign in
      </button>
    </li>
  );
}
