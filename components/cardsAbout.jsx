'use client'
import React from "react";

import "./css/About.css";
function CardsAbout() {
  return (
    <>
      <section className="cards_section">
        <article>
          <div className="card">
            <h1 className="text-4xl font-semibold">1+</h1>
            <span className="text-md font-medium">Años de experiencia</span>
          </div>
          <div className="card">
            <h1 className="text-4xl font-semibold">13+</h1>
            <span className="text-md font-medium">Proyectos realizados</span>
          </div>
          <div className="card">
            <h1 className="text-4xl font-semibold ">100%</h1>
            <span className="text-md font-medium">
              Profesional y eficiente
            </span>
          </div>
        </article>
      </section>
    </>
  );
}

export default CardsAbout;
