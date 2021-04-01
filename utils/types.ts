export type Person = {
  id: string;
  profileImg: string;
  firstName: string;
  lastName: string;
  age: number;
  birthday: string;
  gender: string;
  adress: Adress;
  email: string;
  startContract: string;
  endContract: string;
  endTrialPeriod: string;
  position: string;
  status: string;
};

export type Adress = {
  street: string;
  houseNumber: number;
  zipCode: number;
  city: string;
};
