import React, { useEffect, useState } from "react";
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
  ]

  const [Lanes, setLanes] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('Lanes')) {
      const lanes = JSON.parse(localStorage.getItem('Lanes'));
      setLanes(lanes);
    } else {
      localStorage.setItem("Lanes", JSON.stringify(jsonLanes))
      setLanes(jsonLanes);
    }
    // eslint-disable-next-line
  }, []);

  function goToDetails(lane) {
    localStorage.setItem('LaneActive', JSON.stringify(lane));
    history.push('/rijbaan-details')
  }

  return (
    <Screen verticalAlign="flex-start">
      <div id="Dashboard" style={{ width: "100%", height: "100%" }} className="flex-col">
        {Lanes.map(lane => {
          return <Lane key={lane.id} attr={lane} goToDetails={() => goToDetails(lane)} />
        })}
      </div>
    </Screen>
  );
})
export default Dashboard;
