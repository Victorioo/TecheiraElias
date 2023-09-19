"use client";
import "./css/Contact.css";
import { motion } from "framer-motion";
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
            <a href="smsto:">+1012 3456 789</a>
            <IoMailOutline />
            <a href="mailto:eliastecheira@gmail.com">eliastecheira@gmail.com</a>
            <IoLogoLinkedin />
            <a href="linkedin.com/">Ir a Linkedin</a>
          </div>
          <div className="contact_media">
            <IoLogoTwitter />
            <IoLogoInstagram />
            <IoLogoDiscord />
            <span className="text-gray-400">
              Copyright 2023 © Elias Techeira{" "}
            </span>
          </div>
        </article>
        <article className="contact_form"></article>
      </section>
    </>
  );
}
