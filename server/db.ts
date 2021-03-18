import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export type PersonnelDoc = {
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
  await connectDB(url, "test12345");
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

export function closeDB() {
  client.close();
}

export async function createNewPersonnel(personnel) {
  const personnelCollection = await getCollection("test1111");
  return await personnelCollection.insertOne(personnel);
}

export async function readPersonnel(personnelName) {
  const personnelCollection = await getCollection("test1111");
  return await personnelCollection.findOne({ name: personnelName });
}

export async function updatePersonnelDoc(
  personnelName,
  fieldsToUpdate: Partial<PersonnelDoc>
) {
  const personnelCollection = await getCollection("test1111");
  const updateResult = await personnelCollection.updateOne(
    { name: personnelName },
    { $set: fieldsToUpdate }
  );
  return updateResult.modifiedCount >= 1;
}

export async function updatePersonnel(
  personnelName,
  newPersonnelName,
  newID,
  newAge
) {
  return await updatePersonnelDoc(personnelName, {
    name: newPersonnelName,
    id: newID,
    age: newAge,
  });
}

export async function deletePersonnel(personnelName) {
  const personnelCollection = await getCollection("test1111");
  const deleteResult = await personnelCollection.deleteOne({
    name: personnelName,
  });
  return deleteResult.deletedCount >= 1;
}
