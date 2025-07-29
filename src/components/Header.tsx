import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='mb-8 fixed top-0 right-0 left-0 z-50 backdrop-blur-2xl'>
        <Nav/>
    </div>
  )
}

export default Header