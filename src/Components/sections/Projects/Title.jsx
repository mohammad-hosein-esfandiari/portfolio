import React from 'react'

export const Title = ({projectName,projectType}) => {
  return (
    <div className="flex mb-4 text-[18px] font-bold">
    <h2 className="text-red-p mr-1 underline underline-offset-2 decoration-red-p uppercase">
      {projectName}
    </h2>
    <h3 className=" capitalize underline underline-offset-2">
      ( {projectType} )
    </h3>
  </div>
  )
}
