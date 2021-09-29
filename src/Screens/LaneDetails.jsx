import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Screen from "../Components/Screen";
import { MdEdit, MdCancel } from 'react-icons/md'
import { HiOutlineSave } from 'react-icons/hi'

function LaneDetails() {
  const history = useHistory();
  const inputLength = useRef(null);
  const inputLicensePlate = useRef(null);

  const [LaneActive, setLaneActive] = useState({});
  const [CanEditLength, setCanEditLength] = useState(false);
  const [Length, setLength] = useState(0);
  const [CanEditLicensePlate, setCanEditLicensePlate] = useState(false);
  const [LicensePlate, setLicensePlate] = useState("");

  useEffect(() => {
    const laneActive = JSON.parse(localStorage.getItem('LaneActive'));
    setLaneActive(laneActive);
  }, []);

  useEffect(() => {
    if (Object.entries(LaneActive).length) {
      setLength(LaneActive.length);
      setLicensePlate(LaneActive.LicensePlate);
    }
  }, [LaneActive]);

  function handleChange(e, inputName) {
    if (inputName === 'length') {
      if (CanEditLength) {
        setLength(parseFloat(e.target.value));
      }
    } else {
      if (CanEditLicensePlate) {
        const value = e.target.value;
        setLicensePlate(value.toUpperCase());
      }
    }
  }

  function handleCancel(inputName) {
    if (inputName === 'length') {
      console.log(123)
      setLength(parseFloat(LaneActive.length));
      setCanEditLength(false)
    } else {
      setLicensePlate(LaneActive.LicensePlate);
      setCanEditLicensePlate(false)
    }
  }

  function handleSave(inputName) {
    const lanes = JSON.parse(localStorage.getItem('Lanes'));
    const activeLaneIndex = lanes.findIndex(lane => lane.id === LaneActive.id);

    if (inputName === 'length') {
      let length = Length ? Length : 0;
      lanes[activeLaneIndex].length = length;
      setCanEditLength(false);
    } else {
      let licensePlate = LicensePlate ? LicensePlate : "";
      lanes[activeLaneIndex].LicensePlate = licensePlate;
      setCanEditLicensePlate(false);
    }

    localStorage.setItem("Lanes", JSON.stringify(lanes));
  }

  function handleFocus(name) {
    if (name === "length") {
      setCanEditLength(true);
      setTimeout(() => {
        inputLength.current.focus();
      }, 10);
    } else {
      setCanEditLicensePlate(true);
      setTimeout(() => {
        inputLicensePlate.current.focus();
      }, 10);
    }
  }


  return (
    <Screen verticalAlign="flex-start">
      <div id="LaneDetails" style={{ width: "100%", height: "100%" }} className="flex-col">
        <div id="laneDetailsTitle">Rijbaan {LaneActive.code}</div>
        <div id="terminal" className="flex-col">
          <span>Logregel 1</span>
          <span>Logregel 2</span>
          <span>Logregel 3</span>
        </div>
        <div className="form">
          <div className="input-group flex ai-center">
            <label htmlFor="length">Lengte</label>
            <input name="length" ref={inputLength} type="number" autoComplete="off" value={Length} disabled={!CanEditLength} onChange={e => handleChange(e, 'length')} />
            {CanEditLength ?
              <>
                <HiOutlineSave size={57} onClick={() => handleSave("length")} />
                <MdCancel size={57} onClick={() => handleCancel("length")} />
              </>
              : <MdEdit size={57} onClick={(e) => handleFocus("length")} />
            }
          </div>
          <div className="input-group flex ai-center">
            <label htmlFor="length">Kenteken</label>
            <input name="length" ref={inputLicensePlate} type="text" value={LicensePlate} autoComplete="off" disabled={!CanEditLicensePlate} onChange={e => handleChange(e, 'licensePlate')} />
            {CanEditLicensePlate ?
              <>
                <HiOutlineSave size={57} onClick={() => handleSave("licensePlate")} />
                <MdCancel size={57} onClick={() => handleCancel("licensePlate")} />
              </>
              : <MdEdit size={57} onClick={(e) => handleFocus("licensePlate")} />
            }
          </div>
        </div>
        <div className="lane-details-actions flex-col">
          <button>Rijbaan Reset</button>
          <button>Slagboom openen</button>
          <button>Verkoopstop</button>
          <button className="back-btn" onClick={() => history.goBack()}>Terug</button>
        </div>
      </div>
    </Screen>
  );
}
export default LaneDetails;
