// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  withDatabase,
  readPerson,
  deletePersonnel,
  createNewPersonnel,
} from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { employee } = req.query;
    if (req.method === "GET") {
      const person = await readPerson(employee);
      if (!person) {
        return res
          .status(404)
          .json({ status: 404, error: "Employee not found" });
      }
      res.status(200).json(person);
    }
    if (req.method === "DELETE") {
      await deletePersonnel(employee);
      return res
        .status(200)
        .json({ status: 200, message: `${employee} deleted` });
    }

    if (req.method === "POST") {
      await createNewPersonnel(req.body).then(() => {
        res.status(200).json(req.body);
      });
    }

    return res.status(405).end();
  }
);
