import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { Chart } from "chart.js/auto";

const JobChart = () => {
  const [jobData, setJobData] = useState({ active: 0, expired: 0 });

  useEffect(() => {
    axios.get("https://express-job-portal-u1uo.vercel.app/api/jobs")
      .then((response) => {
        const { active, expired } = response.data;
        setJobData({ active, expired });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const chartData = {
    labels: ["Active Jobs", "Expired Jobs"],
    datasets: [
      {
        label: "Job Status",
        data: [jobData.active, jobData.expired],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
      },
    ],
  };

  return (
    <div>
      <h1 className="bg-back p-6 text-xl text-center font-bold">Job Status Chart</h1>
      <div className="container h-1/3 w-2/3">
      <Pie data={chartData}/>
      </div>
    </div>
  );
};

export default JobChart;

 