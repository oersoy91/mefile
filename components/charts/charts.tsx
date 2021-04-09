import Chart from "react-google-charts";
import useSWR from "swr";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Charts() {
  const { data, error } = useSWR("/api/genderAmount", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  const male = data[0].männlich;
  const female = data[0].weiblich;
  const divers = data[0].diverse;

  return (
    <div>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={
          <div>
            <LoadingSpinner />
          </div>
        }
        data={[
          ["", ""],
          ["männlich", male],
          ["weiblich", female],
          ["diverse", divers],
        ]}
        options={{
          title: "Anzahl der Mitarbeiter nach Geschlecht",
          backgroundColor: "var(--secondary-bg-color)",
          legend: { position: "bottom" },
          chartArea: { width: "100%", height: "80%" },
          theme: "maximized",

          is3D: true,
        }}
        rootProps={{ "data-testid": "1" }}
      />{" "}
    </div>
  );
}
