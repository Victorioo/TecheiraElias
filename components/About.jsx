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
          <h1 id="acerca"> ACERCA DE MI</h1>
          <div className="flex flex-col gap-3">
            <p>
              {" "}
              Hola! Soy Elias, un estudiante de arquitectura de 19 años, con
              título de M.M.O. otorgado por la Escuela Técnica N° 9 D.E.7 Ing.
              Luis A. Huergo. Durante mi formación, he adquirido experiencia en
              la proyección, así como en instalaciones sanitarias,
              electromecánicas y de gas.{" "}
            </p>
            <p>
              Mi enfoque se centra en garantizar que cada proyecto sea tanto
              estéticamente impresionante como funcionalmente eficiente,
              cumpliendo con los más altos estándares de calidad y seguridad.
              Con herramientas como{" "}
              <strong>AutoCAD, SketchUp, Revit, Enscape y Photoshop </strong>
              me permite crear representaciones precisas y visualmente
              cautivadoras de mis diseños.
            </p>
            <p>
              {" "}
              Gracias por visitar mi portfolio y por considerar mi experiencia y
              habilidades para futuras colaboraciones!
            </p>
          </div>
        </article>
      </section>
      <CardsAbout />
      <hr className="divider_section" />
    </>
  );
}
