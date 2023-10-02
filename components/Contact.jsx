"use client";
import "./css/Contact.css";
import { IoLogoDiscord, IoMailOutline, IoLogoLinkedin } from "react-icons/io5";

import { TbBrandFiverr } from "react-icons/tb";
import { AiFillPhone } from "react-icons/ai";

export default function Contact() {
  return (
    <>
      <section className="section_contact">
        <article className="contact_article" id="section_contacto">
          <div>
            <h1>Información de contacto</h1>
            <p>¡Decime algo para empezar una conversación!</p>
          </div>
          <div className="contact_personal">
            <AiFillPhone className="rotate" />
            <a href="smsto:+5491138754982">+54 9 11 3875-4982</a>
            <IoMailOutline />
            <a href="mailto:eliasftecheira@gmail.com">
              eliasftecheira@gmail.com
            </a>
            <IoLogoLinkedin />
            <a href="https://www.behance.net/eliastecheira" target="_blank">
              Ir a Linkedin
            </a>
            <TbBrandFiverr
              className="cursor-pointer"
              onClick={() => {
                window.location.href = "https://www.fiverr.com/gkkkkk35";
              }}
            />
            <a href="https://www.fiverr.com/gkkkkk35">Ir a Fiverr</a>
          </div>
          <div className="contact_media">
            <span className="text-gray-400">
              Copyright 2023 © - Elias Techeira
            </span>

            <IoLogoDiscord
              className="cursor-pointer"
              onClick={() => {
                window.location.href =
                  "https://discordapp.com/users/303863780562173963";
              }}
            />
          </div>
        </article>
        <article className="contact_form">
          <iframe
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCimpqn5usvy4Q8-Hul2MGy-LDhnezeVGM&q=Buenos+Aires,+CABA"
          ></iframe>
        </article>
      </section>
    </>
  );
}
