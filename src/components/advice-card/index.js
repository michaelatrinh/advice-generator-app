import React, { useEffect, useState } from 'react';
import scss from './main.module.scss';
import { BsPauseFill } from 'react-icons/bs';
import Dice from '../../images/icon-dice.svg';

function AdviceCard() {
  const [ID, setID] = useState("");
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(data => {
        setID(data.slip.id);
        setAdvice(data.slip.advice);
        console.log(data.slip.id);
      });

    return () => console.log("clear")
  }, [ID, advice]);

  return (
    <div className={scss.wrapper}>
      <div className={scss.flexContainer}>
        <div className={scss.top}>
          <h1>
            A D V I C E &nbsp; #&nbsp;{ID}
          </h1>
        </div>
        <div className={scss.middle}>
          <h2>
            "{advice}"
          </h2>
        </div>
        <div className={scss.bottom}>
          <hr />
          <BsPauseFill 
            size="5rem" 
            color="white"
          />
          <hr />
        </div>
        <div 
          className={scss.diceWrapper}
          onClick={() => {
            setID("");
            setAdvice("");
          }}
        >
          <img src={Dice} alt="Generate New Random Advice" />
        </div>
      </div>
    </div>
  )
}

export default AdviceCard;