import { useContext, useEffect, useMemo, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { SocketContext } from '../context/SocketContext';
 
Chart.register(...registerables);
 
export const ChartBand = () => {
  const [bands, setBands] = useState([]);
  const { socket } = useContext(SocketContext);
 
  useEffect(() => {
    socket.on('current-bands', ( bands ) => {
      setBands(bands);
    });
 
    return () => {
      socket.off('current-bands');
    };
  }, [socket]);
 
  const getConfig = useMemo(() => {
    const data = {
      labels: bands.map(band => band.name),
      datasets: [{
        label: 'Las mejores bandas',
        data: bands.map(band => band.votes),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };
 
    return {
      type: 'bar',
      data: data,
      options: {
        animation: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
  }, [bands]);
 
  useEffect(() => {
    const myChart = new Chart(
      document.getElementById('myChart'),
      getConfig
    );
 
    return () => {
      myChart.destroy();
    };
  }, [getConfig]);
 
  return (
    <canvas id="myChart"></canvas>
  );
};

export default ChartBand;