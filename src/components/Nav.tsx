"use client"
import { useState } from "react"
import Logo from "./Logo"
import MudarTeme from "./MudarTema"
import NavItem from "./NavItem"
import { TbBrandInstagram, TbBrandLinkedin } from "react-icons/tb"


const Nav = () => {
  // const [show, setShow]=useState("hidden")

  // function mostrar(){
  //   console.log(show)
  //   setShow("block")
  //   console.log(show)
  // }
  // function esconder(){
  //   console.log(show)
  //   setShow("hidden")
  //   console.log(show)
  // }

  // LINHA DE CÓDIGO PARA MENU DROPDOWN O CÓDIGO JÁ ESTÁ FUNCIONANDO
  //  <ul onMouseOver={()=> mostrar()} onMouseLeave={()=>esconder()} className="relative flex flex-col gap-2">
  //    <NavItem className={`${show}`} path={"/logos"} text="Logomarcas"/>
    // <NavItem className={`${show}`} path={"/web"} text="Web"/></ul>
  return (
  <nav className=" container m-auto w-full justify-between flex py-5">
    <Logo/>
    <ul className="flex ml-auto gap-4">
    <NavItem  path={"/"} text="Portfolio" className=""/>
    <NavItem  path={"/logos"} text="Logomarcas"/>
    <NavItem path={"/web"} text="Web"/>
    <NavItem path={"/contato"} text="Contado"/>
    <NavItem path={"https://www.instagram.com/muratore_designer"} text={<TbBrandInstagram size={24}/>}/>
    <NavItem path={"https://www.linkedin.com/in/alessandro-muratore"} text={<TbBrandLinkedin size={24}/>}/>
    </ul>
    <MudarTeme className="flex ml-2 cursor-pointer"/>
  </nav>
  )
}

export default Nav