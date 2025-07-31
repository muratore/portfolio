"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

interface NavItemProps {
    text:string | React.ReactNode
    path: string
    icon?: React.ReactNode
    className?: string
    onOver?: ()=> void
    handleClick?: ()=>void
}
const NavItem = ({text, path, icon, className, onOver, handleClick}:NavItemProps) => {

  const pathname = usePathname()
 
  return (

        <li onClick={handleClick} onMouseOver={onOver} className={`${clsx(
            'py-2 rounded hover:text-zinc-800 dark:text-white hover:font-bold  transition-colors',
            {
              'text-zinc-900 font-bold': pathname === path, // ACTIVE
              'text-zinc-900': pathname !== path,
            }
          ) } ${className ? className : ""}`}><Link href={path}>{icon}{text}</Link></li>
    
  )
}

export default NavItem