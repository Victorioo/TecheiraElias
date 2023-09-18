import React from "react";
import AboutRectangle from "./aboutrectangle";
import CardsAbout from "./cardsAbout";

import "./css/About.css";
export default function About() {
  return (
    <>
      <section className="about_me">
        <AboutRectangle />
        <article className="right_article">
          <h1>ACERCA DE MI</h1>
          <p>
            +3 años de experiencia en el uso de software de diseño como AutoCAD,
            Revit, SketchUp, Enscape y más. Me especializo en convertir tus
            ideas en espacios funcionales y estéticamente atractivos. ¿Qué puedo
            hacer por ti?: - Diseño de Interiores - Modelado y Render 3D.Estoy
            comprometido con la satisfacción del cliente y entrego proyectos de
            alta calidad en los plazos acordados.
          </p>
        </article>
      </section>
      <CardsAbout />
      <hr className="divider_section" />
    </>
  );
}
