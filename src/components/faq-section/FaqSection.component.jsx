import SpecialButton from "../special-button/SpecialButton.component";

import classes from "./FaqSection.styles.module.scss";

function FaqSection() {
  return (
    <section className={classes.faq_section}>
      <h3>Frequently Asked Questions</h3>
      <p>
        Here are some of our FAQs. If you have any other questions you'd like
        answered please fell free to email us.
      </p>
      <ul>
        <li>
          <span>What is Bookmark?</span>
          <img
            className={classes.arrow_icon}
            src="assets/icon-arrow.svg"
            alt="arrow icon"
          />
        </li>
        <li>
          <span>How can I request a new browser?</span>
          <img
            className={classes.arrow_icon}
            src="assets/icon-arrow.svg"
            alt="arrow icon"
          />
        </li>
        <li>
          <span>Is there a mobile app?</span>
          <img
            className={classes.arrow_icon}
            src="assets/icon-arrow.svg"
            alt="arrow icon"
          />
        </li>
        <li>
          <span>What about other Chrominium browsers?</span>
          <img
            className={classes.arrow_icon}
            src="assets/icon-arrow.svg"
            alt="arrow icon"
          />
        </li>
      </ul>
      <SpecialButton
        content="More Info"
        fontColor="hsl(0,0%,98%)"
        backColor="hsl(231, 69%, 60%)"
      />
    </section>
  );
}

export default FaqSection;
