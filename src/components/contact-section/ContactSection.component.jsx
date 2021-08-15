import SpecialButton from "../special-button/SpecialButton.component";
import classes from "./ContactSection.styles.module.scss";

function ContactSection() {
  return (
    <section className={classes.contact_section}>
      <span>35,000+ ALREADY JOINED</span>
      <div className={classes.title_container}>
        <h2>Stay up-to-date with what we're doing</h2>
      </div>
      <div className={classes.input_container}>
        <input type="text" placeholder="Enter your email address" />
        <SpecialButton content="Contact Us" secondary />
      </div>
    </section>
  );
}

export default ContactSection;
