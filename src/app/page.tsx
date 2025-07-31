"use client";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import TrabalhoContext from "@/contexts/TrabalhosProvider";

export default function Home() {
  const { data } = useContext(TrabalhoContext);
  return (
    <div className="container m-auto grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 pt-20 ">
      {data.map((job) => (
        <div key={job.id} className="relative w-full h-[250px] sm:h-[250px] lg:h-[300px] ">
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
  );
}
