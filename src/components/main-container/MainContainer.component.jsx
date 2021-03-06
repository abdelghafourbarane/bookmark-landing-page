import SpecialButton from "../special-button/SpecialButton.component";
// import { ReactComponent as TabIllustration } from "../../assets/illustration-hero.svg";

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
          <SpecialButton primary content="Get it on Chrome" />
          <SpecialButton silver content="Get it on Firefox" />
        </div>
      </div>
      <div className={classes.illustration_container}>
        <div className={classes.tab_illustration}>
          <img
            src="assets/illustration-hero.svg"
            alt="illustration hero"
            className={classes.tab_img}
          />
        </div>
        <div className={classes.back_tab_illustration}></div>
      </div>
    </div>
  );
}

export default MainContainer;
