// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, readPerson } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { employee } = req.query;

    const person = await readPerson(employee);
    res.status(200).json(person);
  }
);
