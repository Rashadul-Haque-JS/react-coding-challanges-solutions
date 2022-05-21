import { useEffect, useState } from "react";
import style from "../../module/index.module.css";
import { SubmitPrevention, InputDuplication } from "../event/EventAndState";
import {
  ToggleSwitch,
  Login,
  FruitSaladThree,
  InsGenerator,
} from "./ConditionalRender";

export const TabularCompView = () => {
  const [view, setView] = useState(0);

  const displayNext = () => {
    if (view < 6) {
      setView(view + 1);
    }
  };

  const displayPrev = () => {
    if (view > 1) {
      setView(view - 1);
    }
  };

  const start = () => {
    setView(view + 1);
  };

  return (
    <div className={style.container} style={{ marginLeft: "48px" }}>
      <h1
        style={{
          textDecoration: "underline",
          fontSize: "1.8rem",
          textAlign: "center",
        }}
      >
        Tabular Components View
      </h1>
      {view < 1 && (
        <button
          className={style.btn}
          style={{
            margin: "8px 0px",
            cursor: "pointer",
            backgroundColor: "yellow",
          }}
          onClick={start}
        >
          Start
        </button>
      )}

      {view > 0 && (
        <div className={style.btnDiv}>
          <button
            className={style.btn}
            style={{
              margin: "0px 8px",
              padding: "0px 20px",
              backgroundColor: "#000",
              color: "#fff",
            }}
            onClick={displayPrev}
          >
            Previous
          </button>
          <button
            className={style.btn}
            style={{
              padding: "0px 20px",
              backgroundColor: "#000",
              color: "#fff",
            }}
            onClick={displayNext}
          >
            Next
          </button>
        </div>
      )}

      {view == 1 && (
        <div className={style.componentIntro}>
          <h3 style={{ color: "#fa2a55", textAlign: "center" }}>
            Hello From component 1
          </h3>
          <ToggleSwitch />
        </div>
      )}

      {view == 2 && (
        <div className={style.componentIntro}>
          <h3 style={{ color: "green", textAlign: "center" }}>
            Hello From component 2
          </h3>
          <Login />
        </div>
      )}

      {view == 3 && (
        <div className={style.componentIntro}>
          <h3 style={{ color: "blue", textAlign: "center" }}>
            Hello From component 3
          </h3>
          <InputDuplication />
        </div>
      )}
      {view == 4 && (
        <div className={style.componentIntro}>
          <h3 style={{ color: "#F23030", textAlign: "center" }}>
            Hello From component 4
          </h3>
          <FruitSaladThree />
        </div>
      )}
      {view == 5 && (
        <div className={style.componentIntro}>
          <h3 style={{ color: "maroon", textAlign: "center" }}>
            Hello From component 5
          </h3>
          <SubmitPrevention />
        </div>
      )}
      {view == 6 && (
        <div className={style.componentIntro}>
          <h3 style={{ color: "yellow", textAlign: "center" }}>
            Hello From component 6
          </h3>
          <InsGenerator />
        </div>
      )}
    </div>
  );
};
