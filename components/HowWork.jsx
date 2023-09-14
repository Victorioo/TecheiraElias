import React from "react";
import videoMarketing from "../app/assets/video-marketing.jpg";
import Image from "next/image";
import "./HowWork.css";
import Link from "next/link";
function HowWork() {
  return (
    <section className="section_howWork">
      <article className="best_project">
        <Image src={videoMarketing} alt="asodin" />
        <Link href="/best">Ir al proyecto</Link>
      </article>
      <article className="info_work">
        <h1>Conocé mi método de trabajo</h1>
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
