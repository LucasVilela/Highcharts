import React from "react";
import ReactDOM from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { format } from "date-fns";
import { data } from "./data.js";

import "./styles.css";

const lineData = [
  [new Date("2019-01-03").getTime(), 0],
  [new Date("2019-02-03").getTime(), 2],
  [new Date("2019-02-14").getTime(), 4],
  [new Date("2019-03-18").getTime(), 2],
  [new Date("2019-04-20").getTime(), 3],
  [new Date("2019-05-27").getTime(), 4],
  [new Date("2019-06-27").getTime(), 1],
  [new Date("2019-07-27").getTime(), 2],
  [new Date("2019-08-27").getTime(), 0]
];

const newData = data.map(x => {
  const type = format(new Date(x.date), "YYYY-MM-DD");
  return [new Date(type).getTime(), x.value - 1];
});

const date = [...newData];
console.log(date);
console.log(lineData);

const defaultLine = {
  chart: {
    type: "spline",
    width: "800"
  },
  title: {
    text: ""
  },
  legend: {
    enabled: false
  },
  xAxis: {
    type: "datetime",
    labels: {
      y: 30
    }
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            enabled: false
          },
          yAxis: {
            labels: {
              align: "left",
              x: 0,
              y: -5
            },
            title: {
              text: null
            }
          },
          subtitle: {
            text: null
          },
          credits: {
            enabled: false
          }
        }
      }
    ]
  },
  yAxis: {
    categories: ["Low", "Mild", "Moderate", "High"],
    softMax: 3,
    min: 0,
    tickmarkPlacement: "on",
    title: {
      enabled: false
    }
  },
  series: [
    {
      data: date
    }
  ],
  credits: {
    enabled: false
  }
};

function App() {
  return (
    <div className="App">
      <HighchartsReact highcharts={Highcharts} options={defaultLine} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
