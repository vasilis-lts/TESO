import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Lane from "../Components/Lane";
import Screen from "../Components/Screen";

const Dashboard = React.memo(function Dashboard() {
  const history = useHistory();

  const jsonLanes = [
    { id: 1, code: "25", length: 6, LicensePlate: 'Z-123-AA', SalesStop: false },
    { id: 2, code: "26", length: 6.5, LicensePlate: '', SalesStop: false },
    { id: 3, code: "27", length: 6, LicensePlate: 'Z-123-AC', SalesStop: false },
    { id: 4, code: "33", length: 6.5, LicensePlate: 'Z-123-AD', SalesStop: true },
    { id: 5, code: "34", length: 6, LicensePlate: 'Z-123-AE', SalesStop: false },
    { id: 6, code: "35", length: 6.5, LicensePlate: 'Z-123-AF', SalesStop: false },
  ];

  useEffect(() => {
    console.log(jsonLanes)
  }, []);

  return (
    <Screen verticalAlign="flex-start">
      <div id="Dashboard" style={{ width: "100%", height: "100%" }} className="flex-col">
        {jsonLanes.map(lane => {
          return (
            <Lane attr={lane} />
          )
        })}
      </div>
    </Screen>
  );
})
export default Dashboard;
