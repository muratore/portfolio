import React from 'react'
import { TbHeartFilled } from 'react-icons/tb'

const Rodape = () => {
  return (
    <footer className='flex w-full justify-center py-5'>
        <p className='flex h-full gap-2 justify-center align-baseline'>Feito com <TbHeartFilled className='flex h-full align-middle'/> por muratore_designer | </p>
        <address>
           <p> <span>Telefone:</span>55 85 988276608</p>
        </address>
    </footer>
  )
}

export default Rodape