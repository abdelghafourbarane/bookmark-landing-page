import SpecialButton from "../special-button/SpecialButton.component";
import { ReactComponent as TabIllustration } from "../../assets/illustration-hero.svg";

import classes from "./MainContainer.styles.module.scss";

function MainContainer() {
  return (
    <div className={classes.main_container}>
      <div className={classes.text_container}>
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try for free
        </p>
        <div className={classes.btn_group}>
          <SpecialButton
            fontColor="hsl(0,0%,98%)"
            backColor="hsl(231, 69%, 60%)"
            content="Get it on Chrome"
          />
          <SpecialButton
            fontColor="hsl(229, 31%, 21%)"
            backColor="hsl(229,30%,97%)"
            content="Get it on Firefox"
          />
        </div>
      </div>
      <div className={classes.illustration_container}>
        <div className={classes.tab_illustration}>
          <TabIllustration />
        </div>
        <div className={classes.back_tab_illustration}></div>
      </div>
    </div>
  );
}

export default MainContainer;
