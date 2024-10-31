import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="FoodApp">
        <div className="food_hero">
          <h1 className="hero_text">Food app</h1>
          <p className="hero_size">
            Why stay hungry when you can order from Bella Onojie
          </p>
          <p className="hero_dow">Download Bella Onojie’s food app now on</p>

        </div>
        <div className="hero_btn">
          <button className="play_btn">Play store</button>
          <button className="app_btn">App store</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
