import type { NextPage } from 'next'
import { useState } from 'react'
// import Head from 'next/head'
// import Image from 'next/image'

const Home: NextPage = () => {
  const [pkgName, setPkgName] = useState("");
  const [scanPayload, setScanPayload] = useState({});
  const [isLoading, setLoading] = useState(false);

  const handleScan = async () => {
    setLoading(true);

    let analysis;
    let maybeCached = window.localStorage.getItem(pkgName);

    if (maybeCached) {
      analysis = JSON.parse(maybeCached);
    } else {
      const res = await fetch(`/api/scanner/${pkgName}`);
  
      if (res.ok) {
        analysis = await res.json()
        
        window.localStorage.setItem(pkgName, JSON.stringify(analysis));
      } else {
        console.log({ status: res.status });
      }
    }

    if (analysis) {
      setScanPayload(analysis);
      console.log("set", { analysis });
      setLoading(false);
    }
  }


  return (
    <div className="flex min-h-screen md:p-20 bg-gray-800">
      <div className="container m-auto">
        <div className="p-10 flex flex-col items-center">
          <div className="mb-16 flex flex-col items-center">
            <h1 className="uppercase mb-2 leading-relaxed text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-500">node-scanner</h1>
            <p className="mb-8 text-md md:text-2xl text-gray-400 font-thin font-sans">Let me tell reveal your pkg weakness?</p>
          </div>
          <div className="flex items-center">
            <input
              value={pkgName}
              onChange={({ target: { value }}) => {
                setPkgName(value)
              }}
              className="md:h-14 px-8 py-2 mr-2 color-blue-200 rounded shadow-lg border border-gray-300 font-thin text-2xl text-center hover:border-purple-300" placeholder="type a package name..."
            />
            {isLoading ? (
              <span className="flex mx-5">
                <span className="h-10 w-10 animate-ping absolute inline-flex rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-10 w-10 bg-purple-500"></span>
              </span>
            ) : (
              <button
              // disabled={pkgName.length < 1}
                onClick={handleScan}
                className="px-8 py-2 md:h-14 bg-gradient-to-r from-purple-800 to-purple-500 rounded shadow-lg text-purple-100"
              >Scan!</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
