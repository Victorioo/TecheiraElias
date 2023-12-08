"use client";
import "./css/Contact.css";
import { IoLogoDiscord, IoMailOutline, IoLogoLinkedin } from "react-icons/io5";

import { TbBrandFiverr } from "react-icons/tb";
import { AiFillPhone } from "react-icons/ai";

export default function Contact() {
  return (
    <>
      <section className="section_contact">
        <article className="contact_article" id="contacto">
          <div>
            <h1>Contactame</h1>
            <p>¡Decime algo para empezar una conversación!</p>
            <form
              action="https://formspree.io/f/xaygrbpn"
              className="flex flex-col gap-2 my-4"
              method="POST"
            >
              <label>Tu nombre</label>
              <input
                type="text"
                className="outline-none bg-slate-700 px-4 py-1 rounded-full"
                placeholder="John Doe"
                name="Nombre"
                required
              />
              <label>Tu email</label>
              <input
                type="email"
                className="outline-none bg-slate-700 px-4 py-1 rounded-full"
                placeholder="youremail@mail.com"
                name="Email"
                required
              />
              <label>Escribime un mensaje</label>
              <textarea
                name="Mensaje"
                id=""
                cols="30"
                rows="10"
                className="outline-none bg-slate-700 px-4 py-1 rounded-lg resize-none"
                required
              ></textarea>
              <input type="submit" className="my-2" />
            </form>
          </div>
          <div className="contact_personal">
            <AiFillPhone className="rotate" />
            <a
              href="smsto:+5491138754982"
              className="underline underline-offset-4"
            >
              +54 9 11 3875-4982
            </a>
            <IoMailOutline />
            <a
              href="mailto:eliasftecheira@gmail.com"
              className="underline underline-offset-4"
            >
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
        </article>
        <article className="contact_form">
          <iframe
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCimpqn5usvy4Q8-Hul2MGy-LDhnezeVGM&q=Buenos+Aires,+CABA"
          ></iframe>
        </article>
      </section>
    </>
  );
}
