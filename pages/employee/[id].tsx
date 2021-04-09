import useSWR from "swr";
import { useRouter } from "next/router";
import EmployeeDetails from "../../components/employeeDetails/employeeDetails";
import LoadingSpinner from "../../components/loadingSpinner/loadingSpinner";
import styles from "../../styles/Home.module.css";
import Navbar from "../../components/navbar/navbar";
import Head from "next/head";

const fetcher = (url) => fetch(url).then((res) => res.json());

const EmployeeDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: employee, error } = useSWR(`/api/employees/${id}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!employee)
    return (
      <div className={styles.container}>
        <LoadingSpinner />
      </div>
    );

  return (
    <div>
      <Head>
        <title>mefile</title>
      </Head>
      <Navbar />
      <EmployeeDetails persons={employee} />
    </div>
  );
};

export default EmployeeDetailsPage;
