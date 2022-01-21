import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

function Header() {
  return (
    <div className="header section__padding" id="home">
      <div className="headerContent">
        <h1 className="gradient__text">
          Let's Build Something Amazing with Open AI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="headerContentInput">
          <input type="email" placeholder="Your Email" />
          <button>Get Started</button>
        </div>

        <div className="headerContentPeople">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="headerImage">
        <img src={ai} />
      </div>
    </div>
  );
}

export default Header;
