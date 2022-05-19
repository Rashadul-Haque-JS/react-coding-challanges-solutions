import style from "../module/index.module.css";
import * as FNCE from "../components/EventAndState";

// Functional Components Conditional Rendering
import * as FNCCR from "../components/ConditionalRender";

function MultiViews() {
  return (
    <div className={style.MultiComp}>
      <FNCE.BtnBasic />
      <FNCE.Counter />
      <FNCE.DiceRoller />
      <FNCE.InputDuplication />
      <FNCE.SubmitPrevention />
      <FNCCR.ToggleSwitch />
      <FNCCR.FruitsList />
      <FNCCR.DevDiscover />
      <FNCCR.TabularView />
      <FNCCR.Login />
      <FNCCR.Modal />
      <FNCCR.FruitSaladOne />
      <FNCCR.FruitSaladTwo />
      <FNCCR.FruitSaladThree />
    </div>
  );
}

export default MultiViews;
