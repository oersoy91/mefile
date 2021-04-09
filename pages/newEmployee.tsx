import Navbar from "../components/navbar/navbar";
import NewEmployee from "../components/newEmployee/newEmployee";
import Head from "next/head";

const newEmployeePage = () => {
  return (
    <div>
      <Head>
        <title>mefile</title>
      </Head>
      <Navbar />
      <NewEmployee />
    </div>
  );
};

export default newEmployeePage;
