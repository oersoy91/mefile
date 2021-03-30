// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, employees, createNewEmployee } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const list = await employees("employeeList");
    res.status(200).json(list);

    if (req.method === "POST") {
      await createNewEmployee(req.body).then(() => {
        res.status(200).json(req.body);
      });
    }

    return res.status(405).end();
  }
);
