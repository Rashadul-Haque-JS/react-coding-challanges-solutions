import { useState } from "react";
import style from "../../module/index.module.css";
import { SubmitPrevention, InputDuplication } from "../event/EventAndState";
import {
  ToggleSwitch,
  Login,
  FruitSaladThree,
  InsGenerator,
} from "./ConditionalRender";

export const TabularCompView = () => {
  const [compOne, setOne] = useState(false);
  const [compTwo, setTwo] = useState(false);
  const [compThree, setThree] = useState(false);
  const [compFour, setFour] = useState(false);
  const [compFive, setFive] = useState(false);
  const [compSix, setSix] = useState(false);

  const componentOne = () => {
    setOne(true);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(false);
    setSix(false);
  };

  const componentTwo = () => {
    setOne(false);
    setTwo(true);
    setThree(false);
    setFour(false);
    setFive(false);
    setSix(false);
  };

  const componentThree = () => {
    setOne(false);
    setTwo(false);
    setThree(true);
    setFour(false);
    setFive(false);
    setSix(false);
  };
  const componentFour = () => {
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(true);
    setFive(false);
    setSix(false);
  };
  const componentFive = () => {
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(true);
    setSix(false);
  };
  const componentSix = () => {
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(false);
    setSix(true);
  };

  return (
    <div className={style.container} style={{ marginLeft: "48px" }}>
      <h1 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>
        Tabular Components View
      </h1>
      <div className={style.btnDiv}>
        <button
          className={style.btn}
          style={{
            padding: "0px 20px",
            backgroundColor: compOne ? "hotpink" : "white",
          }}
          onClick={componentOne}
        >
          comp 1
        </button>
        <button
          className={style.btn}
          style={{
            margin: "0px 8px",
            padding: "0px 20px",
            backgroundColor: compTwo ? "hotpink" : "white",
          }}
          onClick={componentTwo}
        >
          Comp 2
        </button>
        <button
          className={style.btn}
          style={{
            margin: "0px 8px",
            padding: "0px 20px",
            backgroundColor: compThree == true ? "hotpink" : "white",
          }}
          onClick={componentThree}
        >
          Comp 3
        </button>
        <button
          className={style.btn}
          style={{
            margin: "0px 8px",
            padding: "0px 20px",
            backgroundColor: compFour ? "hotpink" : "white",
          }}
          onClick={componentFour}
        >
          Comp 4
        </button>
        <button
          className={style.btn}
          style={{
            margin: "0px 8px",
            padding: "0px 20px",
            backgroundColor: compFive ? "hotpink" : "white",
          }}
          onClick={componentFive}
        >
          Comp 5
        </button>
        <button
          className={style.btn}
          style={{
            margin: "0px 8px",
            padding: "0px 20px",
            backgroundColor: compSix ? "hotpink" : "white",
          }}
          onClick={componentSix}
        >
          Comp 6
        </button>
      </div>
      {compOne && (
        <div className={style.componentIntro}>
          <h3 style={{ color: "#fa2a55" }}>Hello From component 1</h3>
          <ToggleSwitch />
        </div>
      )}

      {compTwo && (
        <div className={style.componentIntro}>
          <h3 style={{ color: "green" }}>Hello From component 2</h3>
          <Login />
        </div>
      )}

      {compThree && (
        <div className={style.componentIntro}>
          <h3 style={{ color: "blue" }}>Hello From component 3</h3>
          <InputDuplication />
        </div>
      )}
      {compFour && (
        <div className={style.componentIntro}>
          <h3 style={{ color: "blue" ,textAlign:'center'}}>Hello From component 4</h3>
          <FruitSaladThree />
        </div>
      )}
      {compFive && (
        <div className={style.componentIntro}>
          <h3 style={{ color: "blue",textAlign:'center' }}>Hello From component 5</h3>
          <SubmitPrevention />
        </div>
      )}
      {compSix && (
        <div className={style.componentIntro}>
          <h3 style={{ color: "blue",textAlign:'center' }}>Hello From component 6</h3>
          <InsGenerator />
        </div>
      )}
    </div>
  );
};
