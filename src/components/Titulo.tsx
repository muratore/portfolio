import React from 'react'
interface TituloProps{
    titulo:string 
    subtitulo?: string
}
const Titulo = ({titulo}:TituloProps) => {
  return (
    <h2 className='text-2xl font-bold mb-5'>{titulo}</h2>
  )
}

export default Titulo