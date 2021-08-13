import classes from "./FeatureContainer.styles.module.scss";

import SpecialButton from "../special-button/SpecialButton.component";

function FeatureContainer({ title, description, illustUrl }) {
  return (
    <div className={classes.feature_container}>
      <div className={classes.illustration_container}>
        <div className={classes.illustration_back}></div>
        <div className={classes.illustration_tab}>
          <img
            src={illustUrl}
            alt={title}
            className={classes.illustration_img}
          />
        </div>
      </div>
      <div className={classes.text_container}>
        <h2>{title}</h2>
        <p>{description}</p>
        <SpecialButton
          content="More info"
          fontColor="hsl(0,0%,98%)"
          backColor="hsl(231, 69%, 60%)"
        />
      </div>
    </div>
  );
}

export default FeatureContainer;
