import { useState, useEffect } from "react";
import style from "../../module/index.module.css";
import loader from "../../assets/image/preloader.gif";
import RandomUser from "../props/RandomUser";
import { Modal, UserLogin, ToostAlternative } from "./Misc";
import { toast } from "react-toastify";

// Preloader----------------------------------------------
export const Preloader = () => {
  const [isLoader, setLoader] = useState(false);
  const [msg, setMsg] = useState("");

  const startLooader = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setMsg("SUCCESS!");
      setTimeout(() => {
        setMsg("");
      }, 1000);
    }, 3000);
  };

  return (
    <div className={style.container}>
      <h1
        style={{
          textDecoration: "underline",
          fontSize: "1.8rem",
          textAlign: "center",
        }}
      >
        Faked Preloader
      </h1>
      {isLoader && <img src={loader} />}
      {msg && <p style={{ color: "green" }}>{msg}</p>}
      {!msg && !isLoader && (
        <button
          className={style.btn}
          style={{ margin: "8px 0px" }}
          onClick={startLooader}
        >
          Start
        </button>
      )}
    </div>
  );
};

// Modal Props------------------------------------------------------
export const PropsModal = () => {
  const props = "Every sunrise brings oportunity to try!";

  return (
    <div>
      <Modal props={props} />
    </div>
  );
};

// Toastify ---------------------------------------------------

export const MsgToostify = () => {
  const success = () => {
    toast.success("success", {
      position: "top-center",
    });
  };

  const warning = () => {
    toast.warn("warning", {
      position: "top-center",
    });
  };

  const info = () => {
    toast.info("info", {
      position: "top-center",
    });
  };

  const error = () => {
    toast.error("error", {
      position: "top-center",
    });
  };

  return (
    <div className={style.container}>
      <h1 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>
        Toastify
      </h1>
      <button
        className={style.btn}
        style={{ margin: "8px 0px", background: "#07bc0c" }}
        onClick={success}
      >
        Success
      </button>
      <button
        className={style.btn}
        style={{ margin: "8px 0px", background: "#f1c40f" }}
        onClick={warning}
      >
        Warn
      </button>
      <button
        className={style.btn}
        style={{ margin: "8px 0px", background: "#ffffff" }}
        onClick={info}
      >
        Info
      </button>
      <button
        className={style.btn}
        style={{ margin: "8px 0px", background: "#e74c3c"}}
        onClick={error}
      >
        Error
      </button>
    </div>
  );
};

// User display--------------------------------------------
export const DisplayUser = () => {
  return <RandomUser />;
};

// Login form----------------------------------------------
export const LoginForm = () => {
  return <UserLogin />;
};

export const AlternativeToast  = () => {
  return <ToostAlternative />;
};
