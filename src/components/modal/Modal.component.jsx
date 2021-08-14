import classes from "./Modal.styles.module.scss";

import { ReactComponent as Logo } from "../../assets/logo-bookmark-transparent.svg";

import { ReactComponent as FacebookIcon } from "../../assets/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import { ReactComponent as CloseIcon } from "../../assets/icon-close.svg";

function Modal({ clickMenu }) {
  return (
    <div className={classes.modal}>
      <div className={classes.text_container}>
        <div className={classes.top_container}>
          <Logo className={classes.logo} />
          <CloseIcon onClick={() => clickMenu()} />
        </div>
        <ul className={classes.sections_container}>
          <li>
            <a href="#features">FEATURES</a>
          </li>
          <li>
            <a href="#pricing">PRICING</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <button className={classes.btn}>LOGIN</button>
      </div>
      <div className={classes.socials_container}>
        <FacebookIcon className={classes.social_icon} />
        <TwitterIcon className={classes.social_icon} />
      </div>
    </div>
  );
}

export default Modal;
