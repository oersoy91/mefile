import { Meta } from "@storybook/react/types-6-0";
import Searchbox from "./Searchbox";

export default {
  title: "Common/searchbox",
} as Meta;

export const searchbox = () => <Searchbox onChange={console.log} />;
