"use client"
import { createContext } from "react"
import { dataProps } from "@/data/data"
import data from "@/data/data" 



interface TrabalhoContextProps {
    data: dataProps[]
}
const TrabalhoContext = createContext({} as TrabalhoContextProps)

interface TrabalhosProviderProps{
    children: React.ReactNode
}

export function TrabalhosProvider({children}: TrabalhosProviderProps){
    
const obj = {data}
        return(
            <TrabalhoContext.Provider value={obj}>
                {children}
            </TrabalhoContext.Provider>
        )

}
export default TrabalhoContext