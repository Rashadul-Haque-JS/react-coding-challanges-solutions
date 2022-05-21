import style from "../module/index.module.css";
// Functional Components Conditional Rendering
import * as FNCCR from "../components/coditions/ConditionalRender";

function ConditionalComp() {
  return (
    <div className={style.MultiComp}>
      <FNCCR.ToggleSwitch />
      <FNCCR.FruitsList />
      <FNCCR.DevDiscover />
      <FNCCR.TabularView />
      <FNCCR.Login />
      <FNCCR.Modal />
      <FNCCR.InsGenerator />
      <FNCCR.FruitSaladOne />
      <FNCCR.FruitSaladTwo />
      <FNCCR.FruitSaladThree />
      <FNCCR.PortfolioComponents />
    </div>
  );
}

export default ConditionalComp;
