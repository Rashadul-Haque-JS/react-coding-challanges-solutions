import style from "../module/index.module.css";
// Functional Components Conditional Rendering
import * as FNCCR from "../components/conditions/ConditionalRender";
import Header from "../components/Header";

function ConditionalComp() {
  return (
    <div style={{paddingBottom:'200px'}}>
      <Header props={'Conditionals'} clr={'#ffb347' }/>
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
    </div>
  );
}

export default ConditionalComp;
