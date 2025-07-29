"use client"

import { TbMoon, TbSun } from "react-icons/tb";
import { useTheme } from "next-themes"
import { useState } from "react"

interface TrocarTemaProps{
    className?: string
}
export default function MudarTema({className}:TrocarTemaProps) {
    const [tema, setTema] = useState('dark')
  const { setTheme } = useTheme()

  function trocarTema(){
    setTema(prev => prev === "dark" ? "light" : 'dark')
  }

  return (
    <div className={`flex items-center ml-4 ${className}`} >
        {tema === "dark" ? <button className="flex" onClick={()=>[trocarTema(), setTheme(`dark`) ]}><TbMoon size={24}/> </button>  :
        <button className="flex" onClick={()=> [trocarTema(), setTheme(`light`) ]}><TbSun size={24}/> </button>
        }

    </div>
  )
}
