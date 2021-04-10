import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { Employee } from "../utils/types";

export type EmployeeDoc = Employee;

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

export async function readCurrentBirthday() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    +now -
    +start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);

  const employeeCollection = await getCollection("employeeList");
  return await employeeCollection
    .aggregate([
      {
        $project: {
          _id: 0,
          id: 1,
          firstName: 1,
          lastName: 1,
          profileImg: 1,
          birthday: 1,
          dayOfYear: {
            $dayOfYear: "$birthday",
          },
        },
      },
      {
        $match: {
          dayOfYear: {
            $gte: day,
            $lte: day + 30,
          },
        },
      },
    ])
    .toArray();
}

export async function readEndContract() {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + 30);

  const employeeCollection = await getCollection("employeeList");
  return await employeeCollection
    .aggregate([
      {
        $project: {
          _id: 0,
          id: 1,
          firstName: 1,
          lastName: 1,
          profileImg: 1,
          endContract: 1,
        },
      },
      {
        $match: {
          endContract: {
            $gte: startDate,
            $lte: endDate,
          },
        },
      },
    ])
    .toArray();
}

export async function readStartContract() {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - 30);

  const employeeCollection = await getCollection("employeeList");
  return await employeeCollection
    .aggregate([
      {
        $project: {
          _id: 0,
          id: 1,
          firstName: 1,
          lastName: 1,
          profileImg: 1,
          startContract: 1,
        },
      },
      {
        $match: {
          startContract: {
            $gte: startDate,
            $lte: endDate,
          },
        },
      },
    ])
    .toArray();
}

export async function readEndTrialPeriod() {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + 30);

  const employeeCollection = await getCollection("employeeList");
  return await employeeCollection
    .aggregate([
      {
        $project: {
          _id: 0,
          id: 1,
          firstName: 1,
          lastName: 1,
          profileImg: 1,
          endTrialPeriod: 1,
        },
      },
      {
        $match: {
          endTrialPeriod: {
            $gte: startDate,
            $lte: endDate,
          },
        },
      },
    ])
    .toArray();
}

export async function readEquipmentReturnDate() {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + 30);

  const employeeCollection = await getCollection("employeeList");
  return await employeeCollection
    .aggregate([
      {
        $project: {
          _id: 0,
          id: 1,
          firstName: 1,
          lastName: 1,
          profileImg: 1,
          returnDate: 1,
        },
      },
      {
        $match: {
          returnDate: {
            $gte: startDate,
            $lte: endDate,
          },
        },
      },
    ])
    .toArray();
}
