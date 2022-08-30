import React from "react";

import Hero from "../components/Hero";
import BgHighwayImage from "./assets/banner-full.jpg";
import BgCarImage from "./assets/car-image.jpg";
import Heading from "../components/Heading";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgHighwayImage}>
    <h1>Ganhe sua liberdade para ir e vir</h1>
    <p>A auto escola lider em aprovação.</p>
  </Hero>
);

export const widhList = () => (
  <Hero image={BgCarImage}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br /> para ir e vir
      </h1>
    </Heading>
    <ul>
      <li>is simply dummy text of the printing and typesetting industry... </li>
      <li>is simply dummy text of the printing and typesetting industry. </li>
      <li>is simply dummy text of the printing and typesetting industry. </li>
    </ul>
  </Hero>
);
