import { useEffect, useState } from "react";
import style from "../../module/index.module.css";
import { toast } from "react-toastify";

// Modal------------------------------------------------
export const Modal = ({ props }) => {
  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState(props);

  const showModal = () => {
    !modal ? setModal(true) : setModal(false);
  };

  return (
    <div className={style.container}>
      <h1 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>
        Modal Using Props
      </h1>
      {modal && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "green",
              textAlign: "center",
              padding: "8px 0px",
              fontWeight: "bold",
            }}
          >
            "{msg}"
          </p>
          {modal && (
            <button
              className={style.btn}
              style={{
                backgroundColor: "red",
                padding: "0px 16px",
                color: "#fff",
              }}
              onClick={showModal}
            >
              Hide
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

// User Model---------------------------------------------------

export const UserModel = ({ user }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#D9A08B",
        padding: "16px",
        borderRadius: "5px",
        width: "188px",
      }}
    >
      <p>Title: {user.name.title}</p>
      <img style={{ borderRadius: "100%" }} src={user.picture.thumbnail} />
      <h2 style={{ margin: "0px", fontSize: "1.1rem", textAlign: "center" }}>
        {user.name.first} {user.name.last}
      </h2>
      <p> Ntionality: {user.nat}</p>
    </div>
  );
};

// Login Persistance------------------------------------

export const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [inLooged, setLogged] = useState(false);

  const user = { email: "example@we.com", password: "123" };

  useEffect(() => {
    if (localStorage.getItem("INLOGGED") !== null) {
      const newUser = JSON.parse(localStorage.getItem("INLOGGED"));
      setLogged(true);
      setEmail(newUser.email);
      setPassword(newUser.password);
      setMessage("You are inlogged!");
    }
  }, []);

  const login = (event) => {
    event.preventDefault();

    if (email === user.email && password === user.password) {
      setLogged(true);
      setMessage("Welcome! You are in!");
      toast.success("sucess", { position: "top-center" });
      localStorage.setItem("INLOGGED", JSON.stringify(user));
    } else {
      setMessage("Sorry, wrong credentials!");
      toast.error("Loggin error!", { position: "top-center" });
    }
  };

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    setMessage("");
    toast.info("Logged out!", { position: "top-center" });
  };

  return (
    <div className={style.container} style={{ marginLeft: "48px" }}>
      <h1 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>
        Login Persistance
      </h1>
      <p
        style={{
          padding: "16px 0px",
          color: inLooged ? "green" : "red",
        }}
      >
        {message}
      </p>
      {!inLooged && (
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
      )}

      {inLooged && (
        <button
          className={style.btn}
          style={{ margin: "8px 0px" }}
          onClick={logout}
        >
          LOGOUT
        </button>
      )}
    </div>
  );
};

// Alternative solution Toast
export const ToostAlternative = () => {
  const [count, setCount] = useState(0);

  const msg = ["Toast Success ", "Toast Warn ", " Toast Info", "Toast Error"];


  const fn = [
    function success() {
      toast.success("success", {
        position: "top-center",
      });

      setCount(count + 1);
    },

    function warning() {
      toast.warn("warning", {
        position: "top-center",
      });

      setCount(count + 1);
    },

    function info() {
      toast.info("info", {
        position: "top-center",
      });

      setCount(count + 1);
    },

    function error() {
      toast.error("error", {
        position: "top-center",
      });
      if (count === 3) {
        setCount(0);
      }
    },
  ];

  const color = () => {
    if (count == 0) {
      return "#07bc0c";
    } else if (count == 1) {
      return "#f1c40f";
    } else if (count == 2) {
      return "#ffffff";
    } else {
      return "#e74c3c";
    }
  };

  return (
    <div className={style.container}>
      <h1 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>
        Toastify Alternative
      </h1>
      <button
        className={style.btn}
        style={{ margin: "8px 0px", background: color() }}
        onClick={fn[count]}
      >
        {msg[count]}
      </button>
    </div>
  );
};
