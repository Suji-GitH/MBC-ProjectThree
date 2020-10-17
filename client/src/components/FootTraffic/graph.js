import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

/* const sampleData = [
  { timeOfDay: 0, visitors: 0 },
  { timeOfDay: 2, visitors: 1 },
  { timeOfDay: 2, visitors: 2 },
  { timeOfDay: 3, visitors: 3 },
  { timeOfDay: 4, visitors: 4 },
  { timeOfDay: 5, visitors: 5 },
  { timeOfDay: 6, visitors: 6 },
  { timeOfDay: 7, visitors: 7 },
  { timeOfDay: 8, visitors: 8 },
  { timeOfDay: 9, visitors: 9 },
  { timeOfDay: 10, visitors: 10 },
  { timeOfDay: 11, visitors: 11 },
  { timeOfDay: 12, visitors: 12 },
  { timeOfDay: 13, visitors: 13 },
  { timeOfDay: 14, visitors: 14 },
  { timeOfDay: 15, visitors: 15 },
  { timeOfDay: 16, visitors: 16 },
  { timeOfDay: 17, visitors: 17 },
  { timeOfDay: 18, visitors: 18 },
  { timeOfDay: 19, visitors: 19 },
  { timeOfDay: 20, visitors: 20 },
  { timeOfDay: 21, visitors: 21 },
  { timeOfDay: 22, visitors: 22 },
  { timeOfDay: 23, visitors: 23 },
]; */

const Graph = ({ data, timesOfDay }) => {
  const displayTimes = [
    "12AM",
    "1AM",
    "2AM",
    "3AM",
    "4AM",
    "5AM",
    "6AM",
    "7AM",
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
    "10PM",
    "11PM",
  ];

  return (
    <VictoryChart
      // adding the material theme provided with Victory
      theme={VictoryTheme.material}
      domainPadding={20}
    >
      <VictoryAxis
        // X
        tickValues={timesOfDay}
        tickFormat={displayTimes}
      />
      <VictoryAxis
        // Y
        dependentAxis
        // tickFormat={(x) => (`$${x / 1000}k`)}
      />
      <VictoryBar data={data} x="timeOfDay" y="visitors" />
    </VictoryChart>
  );
};

export default Graph;
