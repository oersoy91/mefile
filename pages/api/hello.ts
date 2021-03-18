// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase } from "../../server/db";

export default withDatabase((req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "John Doe" });
});
