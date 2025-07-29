"use client";
import React, { useContext } from "react";
import Image from "next/image";
// import { useParams } from "next/navigation";
import TrabalhoContext from "@/contexts/TrabalhosProvider";
import Link from "next/link";
import Titulo from "@/components/Titulo";

const Portfolio = () => {
  const { data } = useContext(TrabalhoContext);
  // const { id } = useParams();

  const logos = data.filter((selecionado) => selecionado.tipo === "logo");

  return (
    <div className="pt-20 container m-auto">
      <Titulo titulo="Logomarcas"/>
      <div className="container m-auto grid grid-cols-4 ">
        {logos.map((job) => (
          <div key={job.id} className=" relative w-full h-[300px] ">
            <Link href={`/portfolio/${job.id}`} className="">
              <Image
                src={`/portfolio/images/${job.caminhoImage[0]}`}
                alt={job.nomeTrabalho}
                fill
                className="object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
