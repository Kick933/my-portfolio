import React from 'react'
import { AiOutlineHome, AiOutlineMessage, AiOutlineBook } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
export default function Navbar() {
  return (
    <div className='max-w-sm w-4/5 text-whitesmoke flex group justify-center items-center h-16 z-20 rounded-2xl gap-8 bg-opacity-50 bg-gray-800 fixed inset-x-0 bottom-8 mx-auto'>
        <a className='rounded-full bg-slate-800 p-4 hover:bg-sky-400 hover:text-black' href='#home'><AiOutlineHome /></a>
        <a className='rounded-full bg-slate-800 p-4 hover:bg-sky-400 hover:text-black' href='#about'><BsPerson /></a>
        <a className='rounded-full bg-slate-800 p-4 hover:bg-sky-400 hover:text-black' href='#portfolio'><AiOutlineBook /></a>
        <a className='rounded-full bg-slate-800 p-4 hover:bg-sky-400 hover:text-black' href='#contact'><AiOutlineMessage /></a>
    </div>
  )
}
