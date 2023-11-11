import React from 'react'
import Quill from '../components/Quill/Quill'
import DocHeader from '../components/DocHeader'
export default function DocEditor() {
  return (
    <div className='overflow-hidden w-full'> 
 <DocHeader/>     
      <div className=' mt-[10rem] md:mt-[8rem] '> <Quill/></div></div>
  )
}
