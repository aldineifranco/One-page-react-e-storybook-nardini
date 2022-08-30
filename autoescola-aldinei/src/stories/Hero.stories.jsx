import React from "react";

import Hero from "../components/Hero";
import BgHighwayImage from "./assets/banner-full.jpg";
import BgCarImage from "./assets/car-image.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="Ganhe sua liberdade para ir e vir" image={BgHighwayImage}>
    <p>A auto escola lider em aprovação.</p>
  </Hero>
);

export const widhList = () => (
  <Hero
    title={
      <span>
        "Ganhe sua <strong>liberdade</strong>
        <br /> para ir e vir"
      </span>
    }
    image={BgCarImage}
  >
    <ul>
      <li>is simply dummy text of the printing and typesetting industry... </li>
      <li>is simply dummy text of the printing and typesetting industry. </li>
      <li>is simply dummy text of the printing and typesetting industry. </li>
    </ul>
  </Hero>
);
