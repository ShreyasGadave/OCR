"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router=useRouter();
  function Dashboard() {
    router.push("/dashboard")
  }
  return (
  <div className="flex flex-col items-center justify-center h-screen">
  <div className="text-center p-8 bg-white/10 shadow-xl rounded-xl border-2 border-yellow-800">
    <div className="mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-16 h-16 text-yellow-500 animate-pulse"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.156-.439 1.596 0L21.75 12m-1.5 0v7.125A.375.375..."
        />
      </svg>
    </div>
    <p className="text-2xl font-medium text-yellow-600 mb-2">Under Construction 🚧</p>
    <p className="text-sm text-gray-300">HomePage is being built...</p>
    <button className="text-lg text-gray-300">Begine with <span onClick={Dashboard} className=' text-blue-400'> Dashboard</span>...</button>

  </div>
</div>


  )
}

export default page
