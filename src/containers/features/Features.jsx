import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Improving Productivity",
    text: "GPT-3 allows the user to get more done in a shorter amount of time. With the knowledge and technology of GPT-3, everyone can work smarter and not harder.",
  },
  {
    title: "AI is the Future",
    text: "GPT-3 and other AI systems are slowly beginning to be used by companies around the globe, be early to the rush and learn more now. ",
  },
  {
    title: "Ask Anything",
    text: 'Ask any question that comes to mind: " How should I bake bread at 5200 feet? , What is wrong with this code?, Why is my car not starting?',
  },
  {
    title: "It is Fun!",
    text: "GPT-3 can just be a good time! Try to write a short story or a song, with a little help you may find a new talent.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The future is now, get involved before you are left behind.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
