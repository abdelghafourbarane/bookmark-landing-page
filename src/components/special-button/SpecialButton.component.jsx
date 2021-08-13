import classes from "./SpecialButton.styles.module.scss";

function SpecialButton({ content, fontColor, backColor }) {
  return (
    <button
      className={classes.special_button}
      style={{ color: `${fontColor}`, backgroundColor: `${backColor}` }}
    >
      {content}
    </button>
  );
}

export default SpecialButton;
