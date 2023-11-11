import React from 'react'
import addbtn from './addbtn.png'
import { Link } from 'react-router-dom'
import { Paper } from '@mui/material'
export default function NewDoc() {
  return (
    <>
        <Link to={'/docName'}>
            <Paper className='w-[150px] h-[180px] flex place-content-center place-items-center'>
                <img className='w-full' src={addbtn} alt="" />
            </Paper>
        </Link>
    </>
  )
}
