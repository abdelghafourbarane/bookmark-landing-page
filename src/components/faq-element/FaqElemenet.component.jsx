import { useState } from "react";
import classes from "./FaqElement.styles.module.scss";

import { ReactComponent as ArrowIcon } from "../../assets/icon-arrow.svg";

function FaqElement({ title, description }) {
  const [arrowClicked, setArrowClicked] = useState(false);

  return (
    <div className={classes.faq_element}>
      <div
        className={classes.faq_header}
        onClick={() => setArrowClicked(!arrowClicked)}
      >
        <span className={classes.title}>{title}</span>
        <div
          className={`${classes.arrow_container} ${
            arrowClicked && classes.arrow_container_active
          }`}
        >
          <ArrowIcon
            className={`${classes.arrow_icon} ${
              arrowClicked && classes.arrow_clicked
            }`}
          />
        </div>
      </div>
      {arrowClicked && (
        <span className={classes.description}>{description}</span>
      )}
    </div>
  );
}

export default FaqElement;
