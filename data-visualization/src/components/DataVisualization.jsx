import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const DataVisualization = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/chart-data/")
      .then((response) => response.json())
      .then((data) => {
        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: "Значення",
              data: data.values,
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
          ],
        });
      })
      .catch((error) => console.error("Помилка:", error));
  }, []);

  return (
    <div>
      {chartData ? <Bar data={chartData} /> : <p>Завантаження...</p>}
    </div>
  );
};

export default DataVisualization;
