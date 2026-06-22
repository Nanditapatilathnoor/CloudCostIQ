import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import "./App.css";

function App() {

  const [metrics, setMetrics] = useState({
    cpu_usage: 0,
    memory_usage: 0
  });

  const [cpuHistory, setCpuHistory] = useState([]);
  const [memoryHistory, setMemoryHistory] = useState([]);
  const [time, setTime] = useState("");

  useEffect(() => {

    const fetchData = () => {

      axios.get("http://127.0.0.1:5000/metrics")
        .then((response) => {

          setMetrics(response.data);

          const currentTime = new Date().toLocaleTimeString();
          setTime(currentTime);

          setCpuHistory(prev => [
            ...prev.slice(-9),
            {
              time: currentTime,
              value: response.data.cpu_usage
            }
          ]);

          setMemoryHistory(prev => [
            ...prev.slice(-9),
            {
              time: currentTime,
              value: response.data.memory_usage
            }
          ]);

        });

    };

    fetchData();

    const interval = setInterval(fetchData, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="App">

      <h1>☁ CloudCostIQ Dashboard</h1>

      <div className="cards">

        <div className="card cpu">
          <h2>CPU Usage</h2>
          <h1>{metrics.cpu_usage}%</h1>
          <h3>
            {metrics.cpu_usage < 40
              ? "🟢 Low"
              : metrics.cpu_usage < 80
              ? "🟡 Medium"
              : "🔴 High"}
          </h3>
        </div>

        <div className="card memory">
          <h2>Memory Usage</h2>
          <h1>{metrics.memory_usage}%</h1>
          <h3>
            {metrics.memory_usage < 40
              ? "🟢 Low"
              : metrics.memory_usage < 80
              ? "🟡 Medium"
              : "🔴 High"}
          </h3>
        </div>

      </div>

      <h2>Last Updated: {time}</h2>

      <h2>CPU Graph</h2>

      <LineChart width={900} height={300} data={cpuHistory}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="time"/>
        <YAxis/>
        <Tooltip/>
        <Line type="monotone" dataKey="value" stroke="#00ffff"/>
      </LineChart>

      <h2>Memory Graph</h2>

      <LineChart width={900} height={300} data={memoryHistory}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="time"/>
        <YAxis/>
        <Tooltip/>
        <Line type="monotone" dataKey="value" stroke="#00ff00"/>
      </LineChart>

    </div>
  );
}

export default App;