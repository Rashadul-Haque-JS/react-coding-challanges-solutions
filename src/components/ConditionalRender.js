import { useState, useEffect } from "react";
import style from "../module/index.module.css";
import box from "../assets/image/box.png";

export const ToggleSwitch = () => {
  const [text, setText] = useState("ON");

  const toggleView = () => {
    text === "ON" ? setText("OFF") : setText("ON");
  };

  return (
    <div className={style.container}>
      <h1 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>
        Toggle Switch
      </h1>
      <button
        className={style.btn}
        style={{
          backgroundColor: text == "ON" ? "green" : "red",
          color: "#fff",
        }}
        onClick={toggleView}
      >
        {text}
      </button>
    </div>
  );
};

export const FruitsList = () => {
  const fruits = ["Apple", "Orange", "Banana", "Pear", "Grapes"];

  return (
    <div className={style.container}>
      <h1 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>
        Fruits List
      </h1>
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
};

export const DevDiscover = () => {
  const [index, setIndex] = useState(null);
  const [isTrue, setIsTrue] = useState(true);

  const developer = ["FRONTEND DEVELOPER", "BACKEND DEVELOPER"];

  const randomNum = () => {
    if (isTrue) {
      const random = Math.floor(Math.random() * 2);
      setIndex(random);
      setIsTrue(false);
    }
  };

  return (
    <div className={style.container}>
      <h1 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>
        Who Is Inside?
      </h1>
      {isTrue && (
        <img
          src={box}
          alt="box's pics"
          style={{ width: "60px,", height: "60px", marginBottom: "24px" }}
        />
      )}
      {!isTrue && (
        <p
          style={{
            color: index == 0 ? "#fa2a55" : "#FFD700",
            fontWeight: "bolder",
          }}
        >
          {developer[index]}
        </p>
      )}

      <button className={style.btn} onClick={randomNum}>
        CLICK TO KNOW
      </button>
    </div>
  );
};

export const TabularView = () => {
  const [secOne, setOne] = useState(false);
  const [secTwo, setTwo] = useState(false);
  const [secThree, setThree] = useState(false);

  const sectionOne = () => {
    setOne(true);
    setTwo(false);
    setThree(false);
  };

  const sectionTwo = () => {
    setOne(false);
    setTwo(true);
    setThree(false);
  };

  const sectionThree = () => {
    setOne(false);
    setTwo(false);
    setThree(true);
  };

  return (
    <div className={style.container} style={{ marginLeft: "48px" }}>
      <h1 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>
        Tabular View
      </h1>
      {secOne && (
        <div className={style.sectionIntro}>
          <h3 style={{ color: "#fa2a55" }}>Hello From Section - 1</h3>
          <p style={{ color: "blue" }}>
            Lorem inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo.
          </p>
        </div>
      )}

      {secTwo && (
        <div className={style.sectionIntro}>
          <h3 style={{ color: "green" }}>Hello From Section - 2</h3>
          <p style={{ color: "#fa2a55" }}>
            Lorem inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo.
          </p>
        </div>
      )}

      {secThree && (
        <div className={style.sectionIntro}>
          <h3 style={{ color: "blue" }}>Hello From Section - 3</h3>
          <p style={{ color: "green" }}>
            Lorem inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo.
          </p>
        </div>
      )}
      <div className={style.btnDiv}>
        <button
          className={style.btn}
          style={{ backgroundColor: secOne ? "hotpink" : "white" }}
          onClick={sectionOne}
        >
          Button 1
        </button>
        <button
          className={style.btn}
          style={{
            margin: "0px 8px",
            backgroundColor: secTwo ? "hotpink" : "white",
          }}
          onClick={sectionTwo}
        >
          Button 2
        </button>
        <button
          className={style.btn}
          style={{ backgroundColor: secThree == true ? "hotpink" : "white" }}
          onClick={sectionThree}
        >
          Button 3
        </button>
      </div>
    </div>
  );
};

// FAKED LOGIN
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const user = { email: "example@io.com", password: "123" };

  const login = (event) => {
    event.preventDefault();

    console.log(user.email, " ", user.password, " ", email, " ", password);

    email === user.email && password === user.password
      ? setMessage("Welcome! You are in!")
      : setMessage("Sorry, wrong credentials!");
  };

  return (
    <div className={style.container} style={{ marginLeft: "48px" }}>
      <h1 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>
        Faked Login
      </h1>
      <p
        style={{
          padding: "16px 0px",
          color: message == "Welcome! You are in!" ? "green" : "red",
        }}
      >
        {message}
      </p>
      <form onSubmit={login} className={style.formStyle}>
        <input
          type="text"
          className={style.textInput}
          style={{ margin: "4px 0px" }}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="type email"
        />
        <input
          type="text"
          className={style.textInput}
          style={{ margin: "12px 0px" }}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="type password"
        />
        <button className={style.btn} style={{ margin: "8px 0px" }}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

// Modal
export const Modal = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    !modal ? setModal(true) : setModal(false);
  };

  return (
    <div className={style.container}>
      <h1 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>Modal</h1>
      {modal && (
        <div style={{ padding: "24px", position: "absolute", top: "12px" }}>
          <p>Hi, I am Modal</p>
          {modal && (
            <button
              className={style.btn}
              style={{ backgroundColor: "red", padding: "0px 8px" }}
              onClick={showModal}
            >
              Hide Modal
            </button>
          )}
        </div>
      )}
      {!modal && (
        <button
          className={style.btn}
          style={{ margin: "8px 0px" }}
          onClick={showModal}
        >
          Show Modal
        </button>
      )}
    </div>
  );
};

export const FruitSaladOne = () => {
  const [arr1, setArr1] = useState([
    "Apple",
    "Orange",
    "Banana",
    "Pear",
    "Grapes",
  ]);
  const [arr2, setArr2] = useState([]);

  function arrayHandeler(index) {
    const newFruit = arr1.slice(index, index + 1);
    setArr2([...arr2, newFruit]);
  }

  return (
    <div className={style.container}>
      <h1 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>
        Fruit Salad Step 1
      </h1>
      <ul>
        {arr1.map((fruit, index) => {
          return (
            <li
              onClick={() => arrayHandeler(index)}
              key={index}
              style={{ cursor: "pointer" }}
            >
              {fruit}
            </li>
          );
        })}
      </ul>
      <p style={{ textAlign: "center", color: "blue" }}>
        Click on fruit to get the same in second array.
      </p>
      <ol>
        {arr2.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ol>
    </div>
  );
};

export const FruitSaladTwo = () => {
  const [arr1, setArr1] = useState([
    "Apple",
    "Orange",
    "Banana",
    "Pear",
    "Grapes",
  ]);
  const [arr2, setArr2] = useState([]);

  function arrayHandeler(index) {
    const newFruit = arr1.splice(index, 1);
    console.log("new", newFruit);
    setArr2([...arr2, newFruit]);
  }

  return (
    <div className={style.container}>
      <h1 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>
        Fruit Salad Step 2
      </h1>
      {arr1.length < 1 && (
        <p style={{ textAlign: "center", color: "red" }}>
          Array number one is empty!
        </p>
      )}
      <ul>
        {arr1.map((fruit, index) => {
          return (
            <li
              onClick={() => arrayHandeler(index)}
              key={index}
              style={{ cursor: "pointer" }}
            >
              {fruit}
            </li>
          );
        })}
      </ul>
      <p style={{ textAlign: "center", color: "blue" }}>
        Click on fruit to transfer the same to second array.
      </p>
      <ol>
        {arr2.map((fruit, index) => {
          return (
            <li key={index} style={{ color: "green" }}>
              {fruit}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export const FruitSaladThree = () => {
  const [arr1, setArr1] = useState([
    "Apple",
    "Orange",
    "Banana",
    "Pear",
    "Grapes",
  ]);
  const [arr2, setArr2] = useState([]);
  const [dupliFruit, setDupli] = useState("");
  const [object, setObject] = useState(0);

  function arrayHandeler(index) {
    const newFruit = arr1.slice(index, index + 1);
    setArr2([...arr2, newFruit]);
    setDupli(newFruit);
  }

  useEffect(() => {
    const newObject = {};
    arr2.forEach((fruit) => {
      newObject[fruit] = (newObject[fruit] || 0) + 1;
    });
    setObject(newObject);
  }, [arr2]);

  return (
    <div className={style.container}>
      <h1 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>
        Fruit Salad Step 3
      </h1>
      <ul>
        {arr1.map((fruit, index) => {
          return (
            <li
              onClick={() => arrayHandeler(index)}
              key={index}
              style={{ cursor: "pointer" }}
            >
              {fruit}
            </li>
          );
        })}
      </ul>
      <p style={{ textAlign: "center", color: "blue" }}>
        Click on fruit to get the same in second array.
      </p>
      <ul>
        {Object.keys(object).map((fruit, index) => {
          return (
            <li key={index}>
              {object[fruit]} st. {fruit}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
