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
import { selectAllConsts } from "../../redux/slices/ConstsSlice/selectors";
import { useSelector } from "react-redux";

export const ChartBox = ({
  data,
  dataKeyOne,
  dataKeyTwo,
  styles,
  title,
  description,
}) => {
  const [width, setWidth] = React.useState(470);
  const { windowWidth } = useSelector(selectAllConsts);
  React.useEffect(() => {
    if (windowWidth <= 620) {
      setWidth(380);
    }
  }, [windowWidth]);
  return (
    <div className="chartbox-root flex flex-justify-center">
      <div className={styles}>
        <BarChart
          width={width}
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
            dataKey={dataKeyOne}
            scale="point"
            padding={{ left: 20, right: 20 }}
          />
          <YAxis tick={{ fill: "#fff" }} />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey={dataKeyTwo} fill="#fff" />
        </BarChart>
      </div>
      <div className="chartbox-root-info flex flex-column flex-justify-end">
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </div>
  );
};
