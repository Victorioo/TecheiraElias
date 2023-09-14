'use client'
import React from "react";
function CardsAbout() {
  return (
    <>
      <section className="cards_section">
        <article>
          <div className="card">
            <h1 className="text-4xl font-semibold">3+</h1>
            <span className="text-md font-medium">Años de experiencia</span>
          </div>
          <div className="card">
            <h1 className="text-4xl font-semibold">53+</h1>
            <span className="text-md font-medium">Proyectos entregados</span>
          </div>
          <div className="card">
            <h1 className="text-4xl font-semibold ">100%</h1>
            <span className="text-md font-medium">
              Eficiencia y profesionalidad
            </span>
          </div>
        </article>
      </section>
    </>
  );
}

export default CardsAbout;
