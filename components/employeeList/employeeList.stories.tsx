import { Meta } from "@storybook/react/types-6-0";
import EmployeeList from "./employeeList";

export default {
  title: "Common/EmployeeList",
} as Meta;

export const employeeList = () => (
  <EmployeeList
    persons={[
      {
        _id: "001",
        profile_picture:
          "https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1616359182~hmac=42412ebdcb8cc2e1a78d51911edc9864",
        first_name: "Osman",
        last_name: "Ersoy",
        age: 29,
        birthday: "1991-05-31T00:00:00.000Z",
        gender: "male",
        adress: {
          street: "Frankenweg",
          house_number: 93,
          zip_code: 48167,
          city: "Münster",
        },
        email: "osman_ersoy@live.de",
        start_contract: "2020-05-01T00:00:00.000Z",
        end_contract: "2022-05-01T00:00:00.000Z",
        end_trial_period: "1970-01-01T00:00:00.000Z",
        position: "Junior Web Developer",
        status: "Aktiv",
      },
      {
        _id: "002",
        profile_picture:
          "https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1616359182~hmac=42412ebdcb8cc2e1a78d51911edc9864",
        first_name: "Leon",
        last_name: "Machens",
        age: 29,
        birthday: "1991-05-31T00:00:00.000Z",
        gender: "male",
        adress: {
          street: "Frankenweg",
          house_number: 93,
          zip_code: 48167,
          city: "Münster",
        },
        email: "osman_ersoy@live.de",
        start_contract: "2020-05-01T00:00:00.000Z",
        end_contract: "2022-05-01T00:00:00.000Z",
        end_trial_period: "1970-01-01T00:00:00.000Z",
        position: "Senior Lead Developer",
        status: "Aktiv",
      },
    ]}
  />
);
