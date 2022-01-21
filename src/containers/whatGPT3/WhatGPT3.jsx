import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";
function WhatGPT3() {
  return (
    <div className="whatGPT3 section_margin" id="whatGPT3">
      <div className="whatGPT3Feature">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="whatGPT3Heading">
        <h1 className="gradient__text">
          The Possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="whatGPT3Container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
}

export default WhatGPT3;
