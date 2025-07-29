"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import TrabalhoContext from "@/contexts/TrabalhosProvider";

const Portfolio = () => {
  const { data } = useContext(TrabalhoContext);
  const { id } = useParams();

  const trabalhoSelecionado = data.filter(
    (selecionado) => selecionado.id === id
  );
  console.log(trabalhoSelecionado);

  return (
    <div className="container m-auto pt-20">
      {/* Carregar as imagens do trabalho que está especificado */}
      <div className="m-auto w-3/5">
        <h2 className="text-3xl font-bold text-zinc-600 dark:text-zinc-100 mb-7 mt-5">
          {trabalhoSelecionado[0].cliente}
        </h2>
        <h3 className="mb-10 leading-8">{trabalhoSelecionado[0].descricao}</h3>
      </div>
      <div className="flex flex-col gap-5">
        {trabalhoSelecionado[0].caminhoImage.map((image, i) => (
          <div key={i} className="relative w-[1200px] h-[900px] m-auto">
            <Image
              src={`/portfolio/images/${image}`}
              alt={`${i} ${image}`}
              fill // Image will fill this div
              className="object-cover" // Crop the image to cover the container
              sizes="(max-width: 768px) 100vw, 50vw" // Helps Next.js optimize for screen sizes
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
