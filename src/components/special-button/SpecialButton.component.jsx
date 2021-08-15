import classes from "./SpecialButton.styles.module.scss";

function SpecialButton({ content, primary, secondary, silver }) {
  console.log(primary);
  return (
    <button
      className={`${classes.btn} ${primary ? classes.btn_primary : ""} ${
        secondary && classes.btn_secondary
      } ${silver && classes.btn_silver}`}
    >
      {content}
    </button>
  );
}

export default SpecialButton;
