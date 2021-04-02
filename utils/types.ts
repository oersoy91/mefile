export type Person = {
  id: string;
  profileImg: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  gender: string;
  adress: Adress;
  email: string;
  startContract: string;
  endContract: string;
  endTrialPeriod: string;
  position: string;
  status: string;
  equipment: string;
  inventoryNumber: number;
  serialNumber: string;
  deliveryDate: number;
  returnDate: number;
};

export type Adress = {
  street: string;
  houseNumber: number;
  zipCode: number;
  city: string;
};

export type PopupProps = {
  trigger: boolean;
  setTrigger: (boolean) => void;
  children: any;
};
