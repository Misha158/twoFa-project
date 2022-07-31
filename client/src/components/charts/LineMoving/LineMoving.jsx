import { useState, useEffect, useRef } from "react";
import {
  LineChart as LineChartComponent,
  CartesianGrid,
  YAxis,
  Tooltip,
  Legend,
  Line as LineChart,
} from "recharts";

export const LineMoving = () => {
  const [response, setResponse] = useState([]);
  const [time, setTime] = useState("");
  const [arr, setArr] = useState([
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 5 },
    { X: 5 },
    { X: 5 },
    { X: 5 },
    { X: 5 },
    { X: 5 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 5 },
    { X: 5 },
    { X: 5 },
    { X: 5 },
    { X: 5 },
    { X: 5 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 5 },
    { X: 5 },
    { X: 5 },
    { X: 5 },
    { X: 5 },
    { X: 5 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 5 },
    { X: 5 },
    { X: 5 },
    { X: 5 },
    { X: 5 },
    { X: 5 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
    { X: 0 },
  ]);
  const timeoutRef = useRef(null);
  function validate() {
    setArr((prevState) =>
      [...prevState, { X: Math.floor(Math.random() * (1000 + 1)) }].slice(1)
    );
  }

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    let interval = 6000;
    let speed = 100;
    for (let i = 0; i < interval; i++) {
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        validate();
      }, i * speed);
    }
  }, []);
  return (
    <div>
      <h1>{time}</h1>
      <LineChartComponent
        width={730}
        height={250}
        data={arr}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <YAxis />
        <Tooltip />
        <Legend />
        <LineChart type="monotone" dataKey="X" stroke="#8884d8" />
      </LineChartComponent>
    </div>
  );
};
