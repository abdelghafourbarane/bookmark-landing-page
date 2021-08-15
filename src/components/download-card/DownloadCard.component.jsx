import SpecialButton from "../special-button/SpecialButton.component";
import classes from "./DownloadCard.styles.module.scss";

function DownloadCard({ title, description, logoUrl }) {
  return (
    <div className={classes.download_card}>
      <div className={classes.logo_container}>
        <img src={logoUrl} alt={title} />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      {/* <img src="assets/bg-dots.svg" /> */}
      <div className={classes.bg_container}></div>
      <div className={classes.btn_container}>
        <SpecialButton content="Add & Install Extension" primary />
      </div>
    </div>
  );
}

export default DownloadCard;
