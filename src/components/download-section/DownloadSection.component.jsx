import DownloadCard from "../download-card/DownloadCard.component";
import classes from "./DownloadSection.styles.module.scss";

function DownloadSection() {
  return (
    <div className={classes.download_section}>
      <div className={classes.text_container}>
        <h2>Download the extension</h2>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className={classes.cards_container}>
        <div>
          <DownloadCard
            logoUrl="/assets/logo-chrome.svg"
            title="Add to Chrome"
            description="Minimum version 62"
          />
        </div>

        <div className={classes.scd_card}>
          <DownloadCard
            logoUrl="/assets/logo-firefox.svg"
            title="Add to Firefox"
            description="Minimum version 55"
          />
        </div>
        <div className={classes.trd_card}>
          <DownloadCard
            logoUrl="/assets/logo-opera.svg"
            title="Add to Opera"
            description="Minimum version 46"
          />
        </div>
      </div>
    </div>
  );
}

export default DownloadSection;
