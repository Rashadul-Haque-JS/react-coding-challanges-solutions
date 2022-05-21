import { useState } from "react";
import style from "../../module/index.module.css";

export const InputDuplication = () => {
  const [text, setVal] = useState("");
  return (
    <div className={style.container}>
      <h1 style={{ textDecoration: "underline", fontSize:'1.8rem' }}>Duplicate</h1>
      <input
        className={style.textInput}
        type="text"
        value={text}
        onChange={(e) => setVal(e.target.value)}
        placeholder="write somting..."
      />
      <p style={{ color: "red" }}>{text}</p>
    </div>
  );
};

export const BtnBasic = () => {
  const sendAlert = () => {
    alert("Never use alert");
  };

  return (
    <div className={style.container}>
      <h1 style={{ textDecoration: "underline", fontSize:'1.8rem' }}>Alert Generator</h1>
      <button className={style.btn} onClick={sendAlert}>
        GET ALERT
      </button>
    </div>
  );
};

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className={style.container}>
      <h1 style={{ textDecoration: "underline", fontSize:'1.8rem' }}>Increase/Decrease</h1>

      <button
        className={style.btn}
        style={{
          backgroundColor: "peachpuff", fontWeight: 'bolder', fontSize:'1rem'
        }}
        type="submit"
        onClick={increaseCount}
      >
        +
      </button>
      <p
        style={{
          color: "hotpink",
          backgroundColor: "hotpink",
          padding: "2px 8px",
          color: "#fff",
        }}
      >
        {count}
      </p>
      <button
        style={{
          backgroundColor: "peachpuff", fontWeight: 'bolder', fontSize:'1rem'
        }}
        className={style.btn}
        type="submit"
        onClick={decreaseCount}
      >
        -
      </button>
    </div>
  );
};

export const DiceRoller = () => {
  let [text, setText] = useState("");

  let output;

  const randomNumber = () => {
    const random = Math.floor(Math.random(text) * 10);
    if (text !== null) {
      text = "";
    }
    return (output = random);
  };

  randomNumber();

  return (
    <div className={style.container}>
      <h1 style={{ textDecoration: "underline", fontSize:'1.8rem' }}>Dice Roller</h1>
      <input
        className={style.textInput}
        onChange={(e) => setText(e.target.value)}
        placeholder="Press a letter/number/symbol"
      />
      <p style={{ color: "red" }}>{output}</p>
    </div>
  );
};

export const SubmitPrevention = () => {
  let [text, setText] = useState("");

  const showMgs = (event) => {
    event.preventDefault();
    setText("Hello Hi-Fi");
  };

  return (
    <div className={style.container}>
      <h1 style={{ textDecoration: "underline", fontSize:'1.8rem' }}>Submit prevention</h1>
      <form onSubmit={showMgs} className={style.formStyle}>
        <input
          type="text"
          className={style.textInput}
          onChange={(e) => setText(e.target.value)}
          placeholder="write something and click"
        />
        <p style={{ color: "red" }}>{text}</p>
        <button className={style.btn} style={{ backgroundColor: "peachpuff" }}>
          CLICK
        </button>
      </form>
    </div>
  );
};

