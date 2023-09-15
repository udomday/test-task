import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const ChartBox = () => {
  return (
    <div className="chartbox-root flex flex-justify-center">
      <div className="chartbox-root-chart">
        <BarChart
          width={470}
          height={280}
          data={data}
          margin={{
            top: 5,
            bottom: 5,
          }}
          barSize={10}
        >
          <XAxis
            tick={{ fill: "#fff" }}
            dataKey="name"
            scale="point"
            padding={{ left: 20, right: 20 }}
          />
          <YAxis tick={{ fill: "#fff" }} />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#fff" />
        </BarChart>
      </div>
      <div className="chartbox-root-info flex flex-column flex-justify-end">
        <h3>Website Views</h3>
        <span>Last Campaign Performance</span>
      </div>
    </div>
  );
};
