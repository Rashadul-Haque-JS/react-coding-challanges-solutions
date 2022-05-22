import * as FNCP from "../components/props/MultiProps";
import style from "../module/index.module.css";
import Header from "../components/Header";

const CompProps = () => {
  return (
    <div>
      <Header props={"Props and Life Cycle Of Components"} clr={"#00CCBF"} />
      <div
        className={style.MultiComp}
        style={{ height: "100vh", placeItems: "start", paddingLeft: "56px " }}
      >
        <FNCP.Preloader />
        <FNCP.PropsModal />
        <FNCP.MsgToostify />
        <FNCP.displayUser />
      </div>
    </div>
  );
};

export default CompProps;
