import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, employees, createNewEmployee } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
      const employee = {
        ...req.body,
        birthday: new Date(req.body.birthday),
        startContract: new Date(req.body.startContract),
        endContract: new Date(req.body.endContract),
        endTrialPeriod: new Date(req.body.endTrialPeriod),
        returnDate: new Date(req.body.returnDate),
        deliveryDate: new Date(req.body.deliveryDate),
      };
      await createNewEmployee(employee).then(() => {
        res.status(200).json(req.body);
      });
    } else {
      const list = await employees("employeeList");
      res.status(200).json(list);
    }
    return res.status(405).end();
  }
);
