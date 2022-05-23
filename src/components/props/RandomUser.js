import axios from "axios";
import { useState } from "react";
import style from "../../module/index.module.css";
import load from "../../assets/image/preloader.gif";
import { UserModel } from "../props/Misc";

const RandomUser = () => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);

  const fetchUser = async () => {
    setLoader(true);
    const response = await axios(
      "https://randomuser.me/api/?inc=gender,name,nat,picture"
    );
    setLoader(false);

    /* ** Check preloader **
       setTimeout(() => {
        setLoader(false);
      },5000)
      */

    const data = await response.data.results;
    setUser(data[0]);

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
        Random User
      </h1>
      {loader && <img src={load} />}
      {user && !loader && <UserModel user={user} />}

      <button
        className={style.btn}
        style={{ margin: "16px 0px" }}
        onClick={fetchUser}
      >
        New User
      </button>
    </div>
  );
};

export default RandomUser;
