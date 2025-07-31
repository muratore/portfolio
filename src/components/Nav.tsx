"use client"
import { useState } from "react"
import Logo from "./Logo"
import MudarTeme from "./MudarTema"
import NavItem from "./NavItem"
import { TbBrandInstagram, TbBrandLinkedin, TbMenu2 } from "react-icons/tb"


const Nav = () => {
  const [show, setShow]=useState("-top-[350px]")

/*
  function mostrar(){
    console.log(show)
    setShow("block")
    console.log(show)
  }
  function esconder(){
    console.log(show)
    setShow("hidden")
    console.log(show)
  }

  LINHA DE CÓDIGO PARA MENU DROPDOWN O CÓDIGO JÁ ESTÁ FUNCIONANDO
   <ul onMouseOver={()=> mostrar()} onMouseLeave={()=>esconder()} className="relative flex flex-col gap-2">
     <NavItem className={`${show}`} path={"/logos"} text="Logomarcas"/>
    <NavItem className={`${show}`} path={"/web"} text="Web"/></ul>
 */
  function showMenu(){
    setShow( prev => prev === "top-0" ? "-top-[350px]" : "top-0" )
  }
  return (
  <nav className=" bg-white dark:bg-zinc-950 container h-[80px] z-50 lg:px-4 lg:bg-none  m-auto w-full justify-between items-center flex">
    <Logo/>
    <ul className={`fixed pt-22 h-[340px] bg-inherit dark:bg-zinc-950 dark:md:bg-zinc-950 transition-all duration-300 px-4 md:h-[auto] ${show} lg:top-0 w-full md:pt-0 z-10 lg:relative lg:flex lg:justify-end gap-4`}>
    <NavItem handleClick={showMenu} path={"/"} text="Portfolio" className=""/>
    <NavItem handleClick={showMenu} path={"/logos"} text="Logomarcas"/>
    <NavItem handleClick={showMenu} path={"/web"} text="Web"/>
    <NavItem handleClick={showMenu} path={"/contato"} text="Contado"/>
    <NavItem handleClick={showMenu} path={"https://www.instagram.com/muratore_designer"} text={<TbBrandInstagram size={24}/>}/>
    <NavItem path={"https://www.linkedin.com/in/alessandro-muratore"} text={<TbBrandLinkedin size={24}/>}/>
    </ul>
    <div className="flex dark:bg-zinc-950  h-full items-center z-40">
    <MudarTeme className="flex ml-2 cursor-pointer"/>
    <TbMenu2 onClick={()=> showMenu()} className={`block lg:hidden ml-3 mr-4 cursor-pointer`} size={24}/>
    </div>
  </nav>
  )
}

export default Nav