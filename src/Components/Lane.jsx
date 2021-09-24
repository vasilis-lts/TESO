import React from "react";

const Lane = React.memo(function Lane(props) {

  function getLaneColor(lane) {
    let color = "#a2cf6e";
    if (!lane.LicensePlate) { color = "#ff1744"; }
    if (lane.SalesStop) { color = "#ccc"; }
    return color;
  }

  return (
    <div className="lane flex">
      <div className="lane-code vh-center">
        <span className="lane-code-content" style={{ background: getLaneColor(props.attr) }}>{props.attr.code}</span>
      </div>
      <div className="lane-actions flex-col">
        <button onClick={props.goToDetails}>Details</button>
        <button>Verkoopstop</button>
        {props.attr.LicensePlate ? null : <span className="lane-error-msg">Kenteken onherkenbaar</span>}
      </div>
    </div>
  )

})
export default Lane;