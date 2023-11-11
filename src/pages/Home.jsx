import React from 'react'
import { useGlobalContext } from '../contextApi/context'
import Header from '../components/Header'
import NewDoc from '../components/NewDoc'
import { Paper } from '@mui/material'



export default function Home() {

  return (
    <>
<Header/>

<section className="w-full min-h-[43vh] bg-[#f1f3f4] flex place-content-center place-items-center ">
<div className='flex flex-col bg w-[50%] overflow-hidden'>
  <div className='mb-5'><h3>Start a new document</h3></div>
  <div className='flex gap-7 w-full '>
    <div className='w-[fit-content] h-[fit-content]'>
        <NewDoc/>
        <h3 className='font-normal text-[1.1rem] px-1 py-2'>blank</h3>
    </div>
    <div className='w-[fit-content] h-[fit-content]'>
        <NewDoc/>
        <h3 className='font-normal text-[1.1rem] px-1 py-2'>blank</h3>
    </div>   <div className='w-[fit-content] h-[fit-content]'>
        <NewDoc/>
        <h3 className='font-normal text-[1.1rem] px-1 py-2'>blank</h3>
    </div>   <div className='w-[fit-content] h-[fit-content]'>
        <NewDoc/>
        <h3 className='font-normal text-[1.1rem] px-1 py-2'>blank</h3>
    </div>   <div className='w-[fit-content] h-[fit-content]'>
        <NewDoc/>
        <h3 className='font-normal text-[1.1rem] px-1 py-2'>blank</h3>
    </div>
    
  </div>
</div>
</section>

<section className="w-full h-full bg-white flex place-content-center place-items-center ">
<div className='flex flex-col max-w-[50%] h-full overflow-hidden'>
  <div className='mb-5 mt-5'><h3>Recent documents</h3></div>
  <div className='flex flex-wrap gap-4 w-full h-full '>
    <Paper className='w-[fit-content] h-[fit-content]'>
        <NewDoc/>
    </Paper>
   
    
   
    
    <Paper className='w-[fit-content] h-[fit-content]'>
        <NewDoc/>
    </Paper>
    
    <Paper className='w-[fit-content] h-[fit-content]'>
        <NewDoc/>
    </Paper>
    
    <Paper className='w-[fit-content] h-[fit-content]'>
        <NewDoc/>
    </Paper>
    
    
  </div>
</div>
</section>

    
    </>
  )
}
