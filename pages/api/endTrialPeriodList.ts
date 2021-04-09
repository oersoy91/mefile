import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, readEndTrialPeriod } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const employee = await readEndTrialPeriod();
    if (req.method === "GET") {
      if (!employee) {
        return res
          .status(404)
          .json({ status: 404, error: "Employee not found" });
      }
      res.status(200).json(employee);
    }
    return res.status(405).end();
  }
);
