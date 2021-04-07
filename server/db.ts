import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export type EmployeeDoc = {
  name: string;
  id: number;
  age: number;
};

let client = null;
let db = null;

const url = process.env.MONGODB_URL;

type Handler = (req: NextApiRequest, res: NextApiResponse) => void;
export const withDatabase = (handler: Handler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectDB(url, "mefile");
  return await handler(req, res);
};

export async function connectDB(url, dbName) {
  if (db) {
    return;
  }
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
}

export async function getCollection(collectioName) {
  return await db.collection(collectioName);
}

export async function employees(collectioName) {
  return await db.collection(collectioName).find().toArray();
}

export function closeDB() {
  client.close();
}

export async function createNewEmployee(employee) {
  const employeeCollection = await getCollection("employeeList");
  return await employeeCollection.insertOne(employee);
}

export async function readEmployee(id) {
  const employeeCollection = await getCollection("employeeList");
  return await employeeCollection.findOne({ id: id });
}

export async function updateEmployee(id, fieldsToUpdate: Partial<EmployeeDoc>) {
  const employeeCollection = await getCollection("employeeList");
  const updateResult = await employeeCollection.updateOne(
    { id: id },
    { $set: fieldsToUpdate }
  );
  return updateResult.modifiedCount >= 1;
}

export async function deleteEmployee(id) {
  const employeeCollection = await getCollection("employeeList");
  const deleteResult = await employeeCollection.deleteOne({
    id: id,
  });
  return deleteResult.deletedCount >= 1;
}

export async function readGenderAmount() {
  const employeeCollection = await getCollection("employeeList");
  return await employeeCollection
    .aggregate([
      {
        $project: {
          männlich: { $cond: [{ $eq: ["$gender", "männlich"] }, 1, 0] },
          weiblich: { $cond: [{ $eq: ["$gender", "weiblich"] }, 1, 0] },
          diverse: { $cond: [{ $eq: ["$gender", "diverse"] }, 1, 0] },
        },
      },
      {
        $group: {
          _id: null,
          männlich: { $sum: "$männlich" },
          weiblich: { $sum: "$weiblich" },
          diverse: { $sum: "$diverse" },

          total: { $sum: 1 },
        },
      },
    ])
    .toArray();
}

// export async function readGenderAmount() {
//   const employeeCollection = await getCollection("employeeList");

//   const femaleAmount = await employeeCollection
//     .find({ gender: "weiblich" })
//     .count();
//   const maleAmount = await employeeCollection
//     .find({ gender: "männlich" })
//     .count();
//   return { male: maleAmount, female: femaleAmount };
// }
