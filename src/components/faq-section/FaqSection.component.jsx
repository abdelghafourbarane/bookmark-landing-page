import FaqElement from "../faq-element/FaqElemenet.component";
import SpecialButton from "../special-button/SpecialButton.component";

import classes from "./FaqSection.styles.module.scss";

const FAQLIST = [
  {
    id: 1,
    title: "What is Bookmark?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 2,
    title: "How can I request a new browser?",
    description:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. ",
  },
  {
    id: 3,
    title: "Is there a mobile app?",
    description:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum. ",
  },
  {
    id: 4,
    title: "What about other Chromium browsers?",
    description:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit. ",
  },
];

function FaqSection() {
  return (
    <section className={classes.faq_section}>
      <h3>Frequently Asked Questions</h3>
      <p>
        Here are some of our FAQs. If you have any other questions you'd like
        answered please fell free to email us.
      </p>
      <ul>
        {FAQLIST.map((faq_item) => (
          <li key={faq_item.id}>
            <FaqElement {...faq_item} />
          </li>
        ))}
      </ul>
      <SpecialButton content="More Info" primary />
    </section>
  );
}

export default FaqSection;
