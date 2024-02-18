import React from 'react';
import Chart from 'react-apexcharts';

const EyeChart = () => {
  const options = {
    chart: {
      id: 'eye-chart',
      type: 'line',
    },
    series: [
      {
        name: 'Left Eye',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
      {
        name: 'Right Eye',
        data: [20, 30, 25, 40, 39, 50, 60, 81, 105],
      },
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
  };

  return (
    <div>
      <h2>Eye Chart</h2>
      <Chart options={options} series={options.series} type="line" height={350} />
    </div>
  );
};

export default EyeChart;
