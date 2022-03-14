import React from 'react'

export default function Home() {
  return (
    <div id='home' className='h-screen snap-start pt-16 text-center md:overflow-hidden relative flex flex-col items-center text-gray-300 text-xl'>
        <div className="my-16">
            <h1 className='my-2'>Hello, I'm</h1>
            <h2 className='font-bold text-4xl my-2 text-white'>Pavitar Kumar</h2>
            <h3 className='my-2'>ReactJS Developer</h3>
        </div>
        <div className='flex justify-evenly gap-8 flex-wrap w-full pt-16'>
                <a className='flex items-center justify-center rounded-lg border-2 border-sky-400 w-56 h-12 hover:bg-sky-400 hover:text-black' href='resume'>Download Resume</a>
                <a className='flex items-center justify-center rounded-lg border-2 border-sky-400 w-56 h-12 hover:bg-sky-400 hover:text-black' href='#about'>About Me</a>
        </div>
    </div>
  )
}
