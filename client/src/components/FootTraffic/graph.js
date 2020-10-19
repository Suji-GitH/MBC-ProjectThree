import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
  VictoryContainer,
} from "victory";

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
    "12am",
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
    "9pm",
    "10pm",
    "11pm",
  ];

  return (
    <>
      {/* <VictoryChart
      // adding the material theme provided with Victory
      theme={VictoryTheme.material}
      domainPadding={10}
      containerComponent={
        <VictoryContainer
          style={{
            transform: "scale(1)",
          }}
        />
      }
    >
      <VictoryAxis
      />
      <VictoryAxis
        domain={[0, 10]}
      />
      <VictoryBar
        cornerRadius={{ topLeft: ({ datum }) => datum.x * 4 }}
        labels={({ datum }) => datum.y}
        style={{ labels: { fill: "black" } }}
        labelComponent={<VictoryLabel dy={30} />}
        data={data}
        x="timeOfDay"
        y="visitors"
      />
    </VictoryChart> */}

      <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={20}
        containerComponent={
          <VictoryContainer
            style={{
              marginLeft: "30%;",
              width: "50%",
            }}
          />
        }
      >
        <VictoryAxis
          // X
          label="Time Of Day"
          tickValues={timesOfDay}
          tickFormat={displayTimes}
          style={{
            axis: { stroke: "#756f6a" },
            axisLabel: { fontSize: 10, padding: 20 },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 4, padding: 5 },
          }}
        />
        <VictoryAxis
          // Y
          label="Number of Customer"
          dependentAxis
          style={{
            axis: { stroke: "#756f6a" },
            axisLabel: { fontSize: 10, padding: 30 },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 10, padding: 5 },
          }}
        />
        <VictoryBar
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          data={data}
          x="timeOfDay"
          y="visitors"
        />
      </VictoryChart>
    </>
  );
};

export default Graph;
