import React, { useEffect, useState } from "react";
import "./App.scss";
import Dice from "./images/icon-dice.svg";
import DividerMobile from "./images/pattern-divider-mobile.svg";

function AdviceCard() {
  const [ID, setID] = useState("");
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setID(data.slip.id);
        setAdvice(data.slip.advice);
      });
  }, [ID, advice]);

  return (
    <div className="wrapper">
      <div className="flexContainer">
        <div className="top">
          <h1>A D V I C E &nbsp; #&nbsp;{ID}</h1>
        </div>
        <div className="middle">
          <h2>"{advice}"</h2>
        </div>
        <div className="bottom">
          <img src={DividerMobile} alt="Divider" />
        </div>
        <div
          className="diceWrapper"
          onClick={() => {
            setID("");
            setAdvice("");
          }}
        >
          <img src={Dice} alt="Generate New Random Advice" />
        </div>
      </div>
    </div>
  );
}

export default AdviceCard;
