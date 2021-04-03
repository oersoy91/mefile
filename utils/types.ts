export type Person = {
  id: string;
  profileImg: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  gender: string;
  adress: Adress;
  email: string;
  startContract: Date;
  endContract: Date;
  endTrialPeriod: Date;
  position: string;
  status: string;
  equipment: string;
  inventoryNumber: string;
  serialNumber: string;
  deliveryDate: Date;
  returnDate: Date;
};

export type Adress = {
  street: string;
  houseNumber: string;
  zipCode: string;
  city: string;
};

export type PopupProps = {
  trigger: boolean;
  setTrigger: (boolean) => void;
  children: unknown;
};
