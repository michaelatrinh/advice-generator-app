import React, { useEffect, useState } from "react";
import "./App.scss";
import Dice from "./images/icon-dice.svg";
import DividerDesktop from "./images/pattern-divider-desktop.svg";
import DividerMobile from "./images/pattern-divider-mobile.svg";

function AdviceCard() {
  const [ID, setID] = useState("");
  const [advice, setAdvice] = useState("");
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 1440);

  const updateMedia = () => setDesktop(window.innerWidth >= 1440);

  // check to see if device width is desktop (1440px)
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then((res) => res.json())
      .then((data) => {
        setID(data.slip.id);
        setAdvice(data.slip.advice);
      });
  }, []);

  const fetchData = async () => {
    await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then((res) => res.json())
      .then((data) => {
        setID(data.slip.id);
        setAdvice(data.slip.advice);
      });
  };

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
          {isDesktop ? (
            <img src={DividerDesktop} alt="Divider" />
          ) : (
            <img src={DividerMobile} alt="Divider" />
          )}
        </div>
        <div className="diceWrapper" onClick={fetchData}>
          <img src={Dice} alt="Generate New Random Advice" />
        </div>
      </div>
    </div>
  );
}

export default AdviceCard;
