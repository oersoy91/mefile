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
