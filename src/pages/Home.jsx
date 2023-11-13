import React from 'react'
import { useGlobalContext } from '../contextApi/context'
import Header from '../components/Header'
import NewDoc from '../components/NewDoc'
import DocList from '../components/DocList'




export default function Home() {

  return (
    <>
<Header/>

<section className="w-full min-h-[43vh] bg-[#f1f3f4] flex place-content-center place-items-center ">
<div className='flex flex-col bg w-[70%] overflow-hidden'>
  <div className='mb-5'><h3>Start a new document</h3></div>
  <div className='flex gap-7 w-full  place-content-center sm:place-content-start  '>
    <div className='w-[fit-content] h-[fit-content]'>
        <NewDoc/>
        <h3 className='font-normal text-[1.1rem] px-1 py-2'>blank</h3>
    </div>
 
    
  </div>
</div>
</section>

<section className="w-full h-full bg-white flex place-content-center place-items-center ">
<div className='flex flex-col w-[70%] h-full overflow-hidden'>
  <div className='mb-5 mt-5'><h3>Recent documents</h3></div>
 <DocList/>
</div>
</section>

    
    </>
  )
}
