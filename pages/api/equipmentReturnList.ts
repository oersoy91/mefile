import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, readEquipmentReturnDate } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const person = await readEquipmentReturnDate();
    if (req.method === "GET") {
      if (!person) {
        return res
          .status(404)
          .json({ status: 404, error: "Employee not found" });
      }
      res.status(200).json(person);
    }
    return res.status(405).end();
  }
);
