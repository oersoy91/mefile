import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export type PersonnelDoc = {
  name: string;
  id: number;
  age: number;
};

export type Person = {
  _id: string;
  profile_picture: string;
  first_name: string;
  last_name: string;
  age: number;
  birthday: string;
  gender: string;
  adress: Adress;
  email: string;
  start_contract: string;
  end_contract: string;
  end_trial_period: string;
  position: string;
  status: string;
};

export type Adress = {
  street: string;
  house_number: number;
  zip_code: number;
  city: string;
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

export async function employeeList(collectioName) {
  return await db.collection(collectioName).find().toArray();
}

export function closeDB() {
  client.close();
}

export async function createNewPersonnel(personnel) {
  const personnelCollection = await getCollection("test1111");
  return await personnelCollection.insertOne(personnel);
}

export async function readPerson(personName) {
  const personnelCollection = await getCollection("employeeList");
  return await personnelCollection.findOne({ first_name: personName });
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
