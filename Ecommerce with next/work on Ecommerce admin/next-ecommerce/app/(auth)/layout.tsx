import React from 'react'

export default function AuthLayout({
    children
}: {
    children:React.ReactNode
}) {
    return(
        <div className=' flex justify-center h-full w-full'>
            {children}
        </div>
    )
} 
  