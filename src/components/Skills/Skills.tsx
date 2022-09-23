import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "../scss/Skills.scss";
import dataBruh from "./dataSets.json";
import { Col, Container } from "src/UILibrary";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface chartData {
  id: number;
  label: string;
  data: number[];
  software: string[];
}

export default function Skills() {
  const [data, setData] = React.useState<chartData[]>([]);
  const options = {
    indexAxis: "y" as const,
    responsive: true,
    color: "white",
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const grabJsonData = () => {
    setData(dataBruh.datasets);
  };

  React.useEffect(() => {
    console.log("Component mounted successfully");
    grabJsonData();
  }, []);

  return (
    <Container fluid className="container">
      {data.map((skill) => (
        <Col className="charts-container" key={skill.id}>
          <Bar
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
        </Col>
      ))}
    </Container>
  );
}
