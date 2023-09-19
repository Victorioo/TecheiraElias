"use client";
import "./css/Contact.css";
import {
  IoLogoTwitter,
  IoLogoDiscord,
  IoLogoInstagram,
  IoMailOutline,
  IoLogoLinkedin,
} from "react-icons/io5";

import { AiFillPhone } from "react-icons/ai";

export default function Contact() {
  return (
    <>
      <section className="section_contact">
        <article className="contact_article">
          <div>
            <h1>Información de contacto</h1>
            <p>¡Decime algo para empezar una conversación!</p>
          </div>
          <div className="contact_personal">
            <AiFillPhone className="rotate" />
            <a href="smsto:">+54 9 11 3875-4982</a>
            <IoMailOutline />
            <a href="mailto:eliastecheira@gmail.com">
              eliasftecheira@gmail.com
            </a>
            <IoLogoLinkedin />
            <a href="https://www.behance.net/eliastecheira" target="_blank">
              Ir a Linkedin
            </a>
          </div>
          <div className="contact_media">
            <IoLogoTwitter />
            <IoLogoInstagram />
            <IoLogoDiscord />
            <span className="text-gray-400">
              Copyright 2023 © - Elias Techeira
            </span>
          </div>
        </article>
        <article className="contact_form">
          <iframe
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCimpqn5usvy4Q8-Hul2MGy-LDhnezeVGM
    &q=Buenos+Aires,+CABA"
          ></iframe>
        </article>
      </section>
    </>
  );
}
