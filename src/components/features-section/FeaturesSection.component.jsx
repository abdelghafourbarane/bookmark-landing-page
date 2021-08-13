import { useState } from "react";

import FeatureContainer from "../feature-container/FeatureContainer.component";
import classes from "./FeaturesSection.styles.module.scss";

const featuresList = [
  {
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    illustUrl: "/assets/illustration-features-tab-1.svg",
  },
  {
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    illustUrl: "assets/illustration-features-tab-2.svg",
  },
  {
    title: "Share your bookmarks",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sitesEasily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    illustUrl: "assets/illustration-features-tab-3.svg",
  },
];

const featuresClasses = {
  simple: "simple",
  easy: "easy",
  speedy: "speedy",
};

function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(featuresClasses.simple);
  return (
    <section id="features" className={classes.features_section}>
      <div className={classes.description_container}>
        <h2 className={classes.title}>Features</h2>
        <p className={classes.description}>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className={classes.features_list_container}>
        <div
          className={`${classes.features_list_item} ${
            activeFeature === featuresClasses.simple && classes.feature_active
          }`}
          onClick={() => setActiveFeature(featuresClasses.simple)}
        >
          Simple Bookmarking
        </div>
        <div
          className={`${classes.features_list_item} ${
            activeFeature === featuresClasses.speedy && classes.feature_active
          }`}
          onClick={() => setActiveFeature(featuresClasses.speedy)}
        >
          Speedy Searching
        </div>
        <div
          className={`${classes.features_list_item} ${
            activeFeature === featuresClasses.easy && classes.feature_active
          }`}
          onClick={() => setActiveFeature(featuresClasses.easy)}
        >
          Easy Sharing
        </div>
      </div>

      <div className={classes.feature_container}>
        {activeFeature === featuresClasses.simple && (
          <FeatureContainer {...featuresList[0]} />
        )}
        {activeFeature === featuresClasses.easy && (
          <FeatureContainer {...featuresList[1]} />
        )}
        {activeFeature === featuresClasses.speedy && (
          <FeatureContainer {...featuresList[2]} />
        )}
      </div>
    </section>
  );
}

export default FeaturesSection;
