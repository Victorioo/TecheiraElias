import React from "react";
import "./About.css";
import AboutRectangle from "./aboutrectangle";

import CardsAbout from "./cardsAbout";
export default function About() {
  return (
    <>
      <section className="about_me">
        <article className="left_article">
          <AboutRectangle />
        </article>
        <article className="right_article">
          <h1>ACERCA DE MI</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            dolor consectetur reprehenderit temporibus totam non fugiat eveniet
            nihil laboriosam quod, qui, omnis beatae. Rem facere laudantium
            minus reprehenderit, eveniet a animi at laborum explicabo provident
            amet quod! Corporis, dolores voluptates.
          </p>
        </article>
      </section>
      <CardsAbout />
      <hr className="divider_section"/>
    </>
  );
}
