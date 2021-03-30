import useSWR from "swr";
import { useRouter } from "next/router";
import EmployeeDetails from "../../components/employeeDetails/employeeDetails";
import { deleteData } from "../../utils/fetchData";

const fetcher = (url) => fetch(url).then((res) => res.json());

const EmployeeDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/employees/${id}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <EmployeeDetails persons={data} />
      <button onClick={() => deleteData(id)}>Delete</button>
    </div>
  );
};

export default EmployeeDetailsPage;
