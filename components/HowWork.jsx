/* eslint-disable @next/next/no-img-element */
import React from "react";

import "./css/HowWork.css";
import Stars from "./how-work-stars";
import Link from 'next/link'
function HowWork() {
  return (
    <section className="section_howWork">
      <article className="best_project">
        <div className="valorated_higher">
          <Stars />
          <p>
            Elías es genial! Entiende la tarea desde el principio y está muy
            atento a los detalles. Además, esta es la segunda vez que le hago un
            pedido y, ¡Entregó <b>ambas</b> tareas antes de la fecha límite! Me encanta
            trabajar con él y definitivamente volveré a comprarle.
          </p>
        </div>
        <hr />
        <div className="valorated_lower">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
          />
          <div>
            <h1>sofiamp</h1>
            <span>on Fiverr. - </span>
            <Link href={'https://www.fiverr.com/gkkkkk35'} target="_blank"> Ver reseña</Link>
          </div>
        </div>
      </article>
      <article className="info_work">
        <h1>Conocé mi metodo de trabajo:</h1>
        <ol>
          <li>
            <h1>1</h1>
            <p>Diseño innovador y funcional.</p>
          </li>
          <li>
            <h1>2</h1>
            <p>Eficiencia en costos y plazos.</p>
          </li>
          <li>
            <h1>3</h1>
            <p>Enfoque personalizado y creativo.</p>
          </li>
        </ol>
      </article>
    </section>
  );
}

export default HowWork;
