import React from 'react'
import bgImage from '../assets/silverSurfer.png'
const Background = () => {
  return (
    <img 
        src={bgImage}
        alt='Space background'
        className='fixed inset-0 w-full h-full object-cover z-0'
    />
  )
}
export default Background
