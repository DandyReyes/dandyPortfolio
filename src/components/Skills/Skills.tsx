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
import styles from "./Skills.module.scss";
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
  const backgroundColor = [
    "#3cffe7",
    "#ff8c69",
    "#3cffe7",
    "#ff8c69",
    "#3cffe7",
    "#ff8c69",
  ];
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
    <Container fluid className={styles["container"]}>
      {data.map((skill) => (
        <Col className={styles["charts-container"]} key={skill.id}>
          <Bar
            data={{
              labels: skill.software,
              datasets: [
                {
                  label: skill.label,
                  data: skill.data,
                  backgroundColor: backgroundColor,
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
