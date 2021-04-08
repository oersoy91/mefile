// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  withDatabase,
  readEmployee,
  updateEmployee,
  deleteEmployee,
} from "../../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    if (req.method === "GET") {
      const person = await readEmployee(id);
      if (!person) {
        return res
          .status(404)
          .json({ status: 404, error: "Employee not found" });
      }
      res.status(200).json(person);
    }
    if (req.method === "DELETE") {
      await deleteEmployee(id);
      return res.status(200).json({ status: 200, message: `${id} deleted` });
    }

    if (req.method === "PATCH") {
      const employee = {
        ...req.body,
        birthday: new Date(req.body.birthday),
        startContract: new Date(req.body.startContract),
        endContract: new Date(req.body.endContract),
        endTrialPeriod: new Date(req.body.deliveryDate),
        returnDate: new Date(req.body.returnDate),
        deliveryDate: new Date(req.body.deliveryDate),
      };
      const updated = await updateEmployee(id, employee);
      if (!updated) {
        return res.status(404).end();
      }
      return res.status(200).json({ status: 200, message: `${id} updated` });
    }
    return res.status(405).end();
  }
);
