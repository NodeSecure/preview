import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen md:p-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="p-10 relative flex flex-col items-center">
          <h1 className="uppercase mb-2 leading-relaxed text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-500">node-scanner</h1>
          <p className="mb-8  text-xl md:text-3xl text-gray-400 font-thin font-sans">Let me tell reveal your pkg weakness?</p>
          <input className="h-14 px-8 py-2 color-blue-200 rounded shadow-lg border border-gray-300 font-thin text-2xl text-center hover:border-purple-300" placeholder="type a package name..."/>
        </div>
      </div>
    </div>
  )
}

export default Home
