/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
const proyectos = [
  {
    id: 1,
    title: "Vivienda unifamiliar",
    image:
      "https://cdn.discordapp.com/attachments/853785012570685451/1182514396858171513/render_fachada_1.png?ex=6584f95a&is=6572845a&hm=f3ae25356ec4dedc14963d98a1cdff2cc832be9a5314d026aed7a6ec190bf014&",
    description:
      "En la planta baja, encontrará una cocina moderna y funcional que se integra armoniosamente con un espacioso living-comedor, proporcionando un ambiente acogedor para el encuentro social. ",
    description2:
      "El corazón de la casa se extiende hacia el exterior, donde un jardín invita a disfrutar del aire libre. Este espacio incluye una piscina y un quincho, creando un entorno para compartir gratos momentos.",
    description3:
      "En la planta alta, se encuentra el dormitorio principal en suite. Incluye un vestidor que complementa la comodidad de la suite, así como un baño privado. Además, dos dormitorios adicionales comparten un baño principal, brindando un espacio personal.",
    description4: "Con un diseño moderno y funcional.",
  },
  {
    id: 2,
    title: "Escuela Primaria y Jardin de infantes",
    image:
      "https://cdn.discordapp.com/attachments/853785012570685451/1182514623967133777/jardin_2.jpg?ex=6584f990&is=65728490&hm=09dec94e5a9b89a6a008ef12ffa75f132685fc5ff3e7b0cbc5e7b6bcef228255&",
    description:
      "Este proyecto arquitectónico combina elegancia moderna con creatividad lúdica para una escuela primaria y un jardín de infantes que comparten un edificio. La escuela primaria presenta un estilo moderno y elegante, con líneas limpias y tonos neutros.",
    description2:
      "Por otro lado, el jardín de infantes se inspira en el cubo de Rubik, utilizando colores vibrantes y formas geométricas para expresar la niñez de manera sutil.",
    description3:
      "La fusión de estos estilos crea un entorno educativo armónico que no solo cumple con las necesidades prácticas, sino que también estimula la imaginación y la creatividad de los estudiantes",
  },
  {
    id: 3,
    title: "Complejo de viviendas multifamiliar con galeria comercial",
    image:
      "https://cdn.discordapp.com/attachments/853785012570685451/1182514502919540898/bd7ecd158328191.63893b3cc1f2a.jpg?ex=6584f973&is=65728473&hm=ddf12c2006ec0078cf4f7c325c3b86e484d0d40227622cdc599d5e9ef02378ba&",
    description:
      "Este proyecto arquitectónico presenta un complejo residencial de cinco niveles, con departamentos de 2, 3 y 4 ambientes del primero al cuarto piso.",
    description2:
      "La planta baja ofrece un espacio comunitario con quincho, Salón de Usos Múltiples (S.U.M.) y una galería comercial con 20 locales diversos.",
    description3:
      "El diseño busca un equilibrio entre la privacidad de las viviendas y las oportunidades para la interacción social, proporcionando a los residentes un entorno dinámico y completo que satisface tanto sus necesidades residenciales como comerciales.",
  },
];
function Page() {
  const router = useParams();
  const { id } = router;
  return (
    <>
      <div className="flex justify-center items-stretch">
        <div className="w-[50%] min-h-full">
          <img
            src={proyectos[id - 1].image}
            className="border-2 w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-[50%] bg-[#242b2ab3] p-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-300">
            {proyectos[id - 1].title}
          </h1>
          <p className="text-2xl text-gray-300 font-semibold leading-relaxed">
            Realizado como estudiante
          </p>
          <p className="max-w-[60ch] text-lg text-gray-400 font-medium  leading-relaxed">
            {proyectos[id - 1].description}
          </p>
          <p className="max-w-[60ch] text-lg text-gray-400 font-medium  leading-relaxed">
            {proyectos[id - 1].description2}
          </p>
          {proyectos[id - 1].description3 ? (
            <p className="max-w-[60ch] text-lg text-gray-400 font-medium  leading-relaxed">
              {proyectos[id - 1].description3}
            </p>
          ) : null}
          {proyectos[id - 1].description4 ? (
            <p className="max-w-[60ch] text-lg text-gray-400 font-medium  leading-relaxed">
              {proyectos[id - 1].description4}
            </p>
          ) : null}
        </div>
      </div>
      <OtherProjects />
    </>
  );
}

const OtherProjects = () => {
  const router = useParams();
  const { id } = router;

  return (
    <div className="flex items-center justify-around w-screen p-14 gap-40">
      {id - 1 > 0 ? (
        <div>
          <Link
            href={`/project/${Number(id) - 1}`}
            className="bg-slate-300 px-4 py-1 rounded-2xl text-black font-semibold"
          >
            Anterior proyecto
          </Link>
        </div>
      ) : (
        <div></div>
      )}

      {Number(id) + 1 != 4 ? (
        <div>
          <Link
            href={`/project/${Number(id) + 1}`}
            className="bg-slate-300 px-4 py-1 rounded-2xl text-black font-semibold"
          >
            Proximo proyecto
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Page;
