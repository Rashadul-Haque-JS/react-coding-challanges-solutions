import * as FNCE from "../components/event/EventAndState";
import style from "../module/index.module.css";
import Header from "../components/Header";

const EventState = () => {
  return (
    <div>
      <Header props={"Events"} clr={"#D9A08B"} />
      <div className={style.MultiComp}>
        <FNCE.BtnBasic />
        <FNCE.Counter />
        <FNCE.DiceRoller />
        <FNCE.InputDuplication />
        <FNCE.SubmitPrevention />
      </div>
    </div>
  );
};

export default EventState;
