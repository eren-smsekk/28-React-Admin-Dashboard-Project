import {Line} from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";


ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const MyLine = () => {
    const data = {
        labels: ["May 12", "", "May 13", "", "May 14", "", "May 15", "", "May 16", "", "May 17", "", "May 18"],
        datasets: [{
          label: "Günlük Satış Oranı",
          data: [8, 9, 7.8, 7.9, 4, 6, 3, 5, 9, 2, 4, 0],
          backgroundColor: 'transparent',
          borderColor: '#0d6efd',
          pointBorderColor: 'red',
          pointBorderWidth: 4,
          tension: 0.5
        }]
    };
    const options = {
        plugins: {
          legend: false
        },
        scales: {
            x: {
                grid: {
                display: false
                }
            },
            y: {
                min: 2,
                max: 10,
                ticks: {
                stepSize: 2,
                callback: (value) => value + 'K'
                },
                grid: {
                borderDash: [10]
                }
            }
        }
    };

    return(
        <div>
            <Line data={data} options={options}></Line>
        </div>
    );
}

export default MyLine;