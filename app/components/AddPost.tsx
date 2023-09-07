"use client";

import { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [isDesabled, setIsDesabled] = useState(false);

  return (
    <form className="bg-white my-8 p-8 rounded-md">
      <div className="flex flex-col my-4">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Post something!"
          className="text-lg bg-gray-200 p-4 rounded-md focus:outline-teal-900"
        ></textarea>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? "text-red-700" : "text-gray-700"
          }`}
        >{`${title.length}/300`}</p>
        <button
          disabled={isDesabled}
          className="text-sm text-white py-2 px-6 rounded-xl disabled:opacity-25 bg-teal-700 hover:bg-teal-500"
        >
          Create a post
        </button>
      </div>
    </form>
  );
}
