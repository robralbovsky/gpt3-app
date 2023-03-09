import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are endless. This is just the beginning.
        </h1>
        <p>
          Get ready to be apart of something special. GPT-3 is a great place to
          start your AI journey. By signing up, you will have access to all of
          our tools and posts. All it takes is an email address and a username.
          It is that simple. Become a GPT-3 member today!
        </p>
        <h4>Join the Early Access List Now</h4>
      </div>
    </div>
  );
};

export default Possibility;
