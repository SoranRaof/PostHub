import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session)
      return res.status(401).json({ message: "Please sign in to post" });
    const title: string = req.body.title;

    //get user
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });

    //check title
    if (title.length > 300) {
      return res.status(403).json({ message: "Title is too long" });
    }
    if (!title.length) {
      return res.status(403).json({ message: "Title is empty" });
    }

    //create a post
    try {
      const result = await prisma.post.create({
        data: {
          title,
          userId: user?.id,
        },
      });
      return res.status(200).json(result);
    } catch (error) {
      res.status(403).json({ err: "Error when making post" });
    }
  }
}
