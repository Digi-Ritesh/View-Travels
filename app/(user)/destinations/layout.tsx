import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>

      <h1 className='text-3xl text-center my-4'>List of All Destinations!</h1>
      {children}

    </div>
  )
}

export default layout