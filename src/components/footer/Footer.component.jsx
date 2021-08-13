import classes from "./Footer.styles.module.scss";

import { ReactComponent as BrandLogo } from "../../assets/logo-bookmark.svg";
import { ReactComponent as FacebookLogo } from "../../assets/icon-facebook.svg";
import { ReactComponent as TwitterLogo } from "../../assets/icon-twitter.svg";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.brand_container}>
        <BrandLogo className={classes.logo} />
        <ul>
          <li>FEATURES</li>
          <li>PRICING</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className={classes.socials_container}>
        <FacebookLogo className={classes.social_icon} />
        <TwitterLogo className={classes.social_icon} />
      </div>
    </div>
  );
}

export default Footer;
