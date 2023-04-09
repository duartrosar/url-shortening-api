import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405);
  }

  const response = await fetch(
    `https://api.shrtco.de/v2/shorten?url=${req.body}`,
  );

  const data = await response.json();

  return res.status(200).json(data);
}
