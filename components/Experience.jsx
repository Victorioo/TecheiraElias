import React from "react";
import "../components/css/Experience.css";
import ExperienceWorks from "./experience-works";
export default function Experience() {
  return (
    <>
      <section className="bg_experience">
        <article className="article_blurred">
          <ExperienceWorks/>
        </article>
      </section>
    </>
  );
}
