"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { set } from "mongoose";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [isDesabled, setIsDesabled] = useState(false);

  //create a post
  const { mutate } = useMutation(
    async (title: string) => await axios.post("/api/posts/addPost", { title }),
    {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: (data) => {
        console.log(data);
        setTitle("");
        setIsDesabled(false);
      },
    }
  );

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDesabled(true);
    mutate(title);
  };

  return (
    <form onSubmit={submitPost} className="bg-white my-8 p-8 rounded-md">
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
          type="submit"
          disabled={isDesabled}
          className="text-sm text-white py-2 px-6 rounded-xl disabled:opacity-25 bg-teal-700 hover:bg-teal-500"
        >
          Create a post
        </button>
      </div>
    </form>
  );
}
