import SpecialButton from "../special-button/SpecialButton.component";

import classes from "./Header.styles.module.scss";
import { ReactComponent as Logo } from "../../assets/logo-bookmark.svg";

function Header() {
  return (
    <div className={classes.header}>
      <Logo className={classes.logo} />
      <ul className={classes.sections_list}>
        <li>
          <a href="#features">FEATURES</a>
        </li>
        <li>
          <a href="#pricing">PRICING</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <li>
          <SpecialButton
            content="LOGIN"
            backColor="hsl(0, 94%, 66%)"
            fontColor="hsl(0,0%,98%)"
          />
        </li>
      </ul>
    </div>
  );
}

export default Header;
