"use client";
import React from "react";
import "../components/css/Experience.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";
const proyectos = [
  {
    id: 1,
    title: "Vivienda unifamiliar",
    image:
      "https://cdn.discordapp.com/attachments/853785012570685451/1182514396858171513/render_fachada_1.png?ex=6584f95a&is=6572845a&hm=f3ae25356ec4dedc14963d98a1cdff2cc832be9a5314d026aed7a6ec190bf014&",
  },
  {
    id: 2,
    title: "Escuela Primaria y Jardin de infantes",
    image:
      "https://cdn.discordapp.com/attachments/853785012570685451/1182514623967133777/jardin_2.jpg?ex=6584f990&is=65728490&hm=09dec94e5a9b89a6a008ef12ffa75f132685fc5ff3e7b0cbc5e7b6bcef228255&",
  },
  {
    id: 3,
    title: "Complejo de viviendas multifamiliar con galeria comercial",
    image:
      "https://cdn.discordapp.com/attachments/853785012570685451/1182514502919540898/bd7ecd158328191.63893b3cc1f2a.jpg?ex=6584f973&is=65728473&hm=ddf12c2006ec0078cf4f7c325c3b86e484d0d40227622cdc599d5e9ef02378ba&",
  },
];

export default function Experience() {
  return (
    <>
      <article
        className="overflow-hidden my-8 flex items-center justify-center h-screen"
        id="experiencia"
      >
        <Splide hasTrack={false} aria-label="...">
          <div className="flex w-screen h-[80vh] justify-center">
            <SplideTrack>
              {proyectos.map((a, b) => {
                return (
                  <SplideSlide key={b}>
                    <div
                      className="w-[100vw] h-[80vh] flex items-end justify-center p-8"
                      style={{
                        background: `url('${a.image}')center/cover`,
                      }}
                    >
                      <Link
                        className="text-xl uppercase bg-[#3c4846ff] font-semibold px-6 py-1 rounded-full cursor-pointer text-gray-200 hover:scale-105 transition-all"
                        href={`/project/${a.id}`}
                      >
                        Ver proyecto
                      </Link>
                    </div>
                  </SplideSlide>
                );
              })}
            </SplideTrack>
            <div className="splide__arrows" />
          </div>
        </Splide>
      </article>
    </>
  );
}
