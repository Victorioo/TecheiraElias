/* eslint-disable @next/next/no-img-element */
import React from "react";

import "./css/HowWork.css";
import Stars from "./how-work-stars";
import Link from "next/link";
function HowWork() {
  return (
    <section className="section_howWork">
      <article className="best_project">
        <div className="valorated_higher">
          <Stars />
          <p className="text-gray-400 font-medium">
            Elías es genial! Entiende la tarea desde el principio y está muy
            <b className="text-gray-100"> atento a los detalles</b>. Además, esta
            es la segunda vez que le hago un pedido y, ¡Entregó ambas tareas
            antes de la fecha límite! Me encanta trabajar con él y
            definitivamente volveré a comprarle.
          </p>
        </div>
        <hr />
        <div className="valorated_lower">
          <img
            src="https://www.pngmart.com/files/23/User-PNG-Isolated-Image.png"
            alt=""
            className="bg-white"
          />
          <div>
            <h1>sofiamp</h1>
            <span>on Fiverr. - </span>
            <Link href={"https://www.fiverr.com/gkkkkk35"} target="_blank">
              {" "}
              Ver reseña
            </Link>
          </div>
        </div>
      </article>
      <article className="best_project">
        <div className="valorated_higher">
          <Stars />
          <p className="text-gray-400 font-medium">
            Elias es <b className="text-gray-100">extremadamente detallista</b>{" "}
            y completó el trabajo de manera excelente. Se prestó especial
            atención a las revisiones que solicité y estoy{" "}
            <b className="text-gray-100">sumamente satisfecho</b> con el
            resultado final.
          </p>
        </div>
        <hr />
        <div className="valorated_lower">
          <img
            src="https://www.pngmart.com/files/23/User-PNG-Isolated-Image.png"
            alt=""
            className="bg-white"
          />
          <div>
            <h1>daralyantoine</h1>
            <span>on Fiverr. - </span>
            <Link href={"https://www.fiverr.com/gkkkkk35"} target="_blank">
              {" "}
              Ver reseña
            </Link>
          </div>
        </div>
      </article>
      <article className="best_project">
        <div className="valorated_higher">
          <Stars />
          <p className="text-gray-400 font-medium">
            Me encanta trabajar con Elias,es{" "}
            <b className="text-gray-100">rápido, minucioso y un profesional </b>
            en toda regla. Súper confiable, a diferencia de algunos otros
            vendedores. Todas mis transacciones se llevaron a cabo en inglés y
            todo fue perfectamente comprendido. Me siento muy afortunado de
            haberlo descubierto...
          </p>
        </div>
        <hr />
        <div className="valorated_lower">
          <img
            src="https://www.pngmart.com/files/23/User-PNG-Isolated-Image.png"
            alt=""
            className="bg-white"
          />
          <div>
            <h1>sofiamp</h1>
            <span>on Fiverr. - </span>
            <Link href={"https://www.fiverr.com/gkkkkk35"} target="_blank">
              {" "}
              Ver reseña
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}

export default HowWork;
