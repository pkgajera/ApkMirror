import React from 'react'

const LoadingComponent = ({length,md=2,lg}) => {
  return (
    <div 
    className={`grid grid-cols-1 md:grid-cols-${md} lg:grid-cols-${lg} gap-4 p-4`}>
    {Array.from({ length: length}).map((_, index) => (
      <div key={index} className="animate-pulse hover:bg-gray-100 p-1 rounded-md">
        <div className="flex">
        <div className="rounded-md bg-slate-200 h-20 w-20"></div>
        <div className="ml-2">
            <div className="h-2.5 bg-gray-200 rounded-full  w-48 my-2"></div>
            <div className="h-2 bg-gray-200 rounded-full  w-48 mb-2"></div>
            <div className="h-2 bg-gray-200 rounded-full  w-48 mb-2"></div>
            <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-4"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default LoadingComponent;