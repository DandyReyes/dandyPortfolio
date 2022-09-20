import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import "../scss/Skills.scss";
import dataSets from "./dataSets.json";

interface chartData {
  id: number;
  label: string;
  data: number[];
  software: string[];
}

export default function Skills() {
  const [data, setData] = React.useState<chartData[]>([]);
  const options = {
    // maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            min: 0,
            max: 10,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            color: "rgba(255,99,132,0.2)",
          },
        },
      ],
    },
  };

  const grabJsonData = () => {
    setData(dataSets);
  };

  React.useEffect(() => {
    console.log("Component mounted successfully");
    grabJsonData();
  }, []);

  return (
    <div className="container">
      {data.map((skill) => (
        <div className="charts-container" key={skill.id}>
          <HorizontalBar
            data={{
              labels: skill.software,
              datasets: [
                {
                  label: skill.label,
                  data: skill.data,
                  backgroundColor: [
                    "#3cffe7",
                    "#ff8c69",
                    "#3cffe7",
                    "#ff8c69",
                    "#3cffe7",
                    "#ff8c69",
                  ],
                  borderColor: "rgb(255, 99, 132)",
                  borderWidth: 0,
                  barThickness: 20,
                },
              ],
            }}
            options={options}
          />
        </div>
      ))}
    </div>
  );
}
