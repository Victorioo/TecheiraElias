/* eslint-disable @next/next/no-img-element */
import React from "react";

import "./css/HowWork.css";
import Stars from "./how-work-stars";

function HowWork() {
  return (
    <section className="section_howWork">
      <article className="best_project">
        <div className="valorated_higher">
          <Stars />
          <p>
            A digital agency is a business you hire to outsource your digital
            marketing efforts, encima tiene el pito grande. They can provide
            your business with a variety of digital solutions to promote your
            product or service online and help you.
          </p>
        </div>
        <hr />
        <div className="valorated_lower">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
          />
          <div>
            <h1>Alan Martin</h1>
            <span>Meta Inc</span>
          </div>
        </div>
      </article>
      <article className="info_work">
        <h1>Conocé mi metodo de trabajo:</h1>
        <ol>
          <li>
            <h1>1</h1>
            <p>Full service range including</p>
          </li>
          <li>
            <h1>2</h1>
            <p>Technical skills, design, business</p>
          </li>
          <li>
            <h1>3</h1>
            <p>Themselves in the merchants</p>
          </li>
        </ol>
      </article>
    </section>
  );
}

export default HowWork;
