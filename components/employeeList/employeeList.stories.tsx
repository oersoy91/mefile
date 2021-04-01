import { Meta } from "@storybook/react/types-6-0";
import EmployeeList from "./employeeList";

export default {
  title: "Common/EmployeeList",
} as Meta;

export const employeeList = () => (
  <EmployeeList
    persons={[
      {
        id: "001",
        profileImg:
          "https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1616359182~hmac=42412ebdcb8cc2e1a78d51911edc9864",
        firstName: "Osman",
        lastName: "Ersoy",
        age: 29,
        birthday: "1991-05-31T00:00:00.000Z",
        gender: "male",
        adress: {
          street: "Frankenweg",
          houseNumber: 93,
          zipCode: 48167,
          city: "Münster",
        },
        email: "osman_ersoy@live.de",
        startContract: "2020-05-01T00:00:00.000Z",
        endContract: "2022-05-01T00:00:00.000Z",
        endTrialPeriod: "1970-01-01T00:00:00.000Z",
        position: "Junior Web Developer",
        status: "Aktiv",
      },
      {
        id: "002",
        profileImg:
          "https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1616359182~hmac=42412ebdcb8cc2e1a78d51911edc9864",
        firstName: "Leon",
        lastName: "Machens",
        age: 29,
        birthday: "1991-05-31T00:00:00.000Z",
        gender: "male",
        adress: {
          street: "Frankenweg",
          houseNumber: 93,
          zipCode: 48167,
          city: "Münster",
        },
        email: "osman_ersoy@live.de",
        startContract: "2020-05-01T00:00:00.000Z",
        endContract: "2022-05-01T00:00:00.000Z",
        endTrialPeriod: "1970-01-01T00:00:00.000Z",
        position: "Senior Lead Developer",
        status: "Aktiv",
      },
    ]}
  />
);
