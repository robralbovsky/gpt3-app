import React from "react";
import Article from "../../components/article/Article";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          People are talking, <br /> Check out what they're saying.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Mar 13, 2023"
            title="How to use GPT-3 today."
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Mar 12, 2023"
            title="GPT-3 and Open AI is the future. See how it works."
          />
          <Article
            imgUrl={blog03}
            date="Mar 11, 2023"
            title="Will AI be something to fear in the future?"
          />
          <Article
            imgUrl={blog04}
            date="Mar 11, 2023"
            title="Numbers do not lie, AI technology is speeding up tech"
          />
          <Article
            imgUrl={blog05}
            date="Mar 09, 2023"
            title="Web3 and AI knowledge: What to know."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
