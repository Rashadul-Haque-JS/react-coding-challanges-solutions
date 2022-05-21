import * as FNCE from "../components/event/EventAndState";
import style from "../module/index.module.css";

const EventState = () => {
  return (
    <div className={style.MultiComp}>
      <FNCE.BtnBasic />
      <FNCE.Counter />
      <FNCE.DiceRoller />
      <FNCE.InputDuplication />
      <FNCE.SubmitPrevention />
    </div>
  );
};

export default EventState