"use client"
import { useUser } from '@/context/UserContext'
import React from 'react'

function Welcome() {
    const {user} = useUser()
  return (
    <div className='w-full h-screen mx-auto'>
        <div><h1 className='text-4xl font-semibold'>Welcome to Hiresense <span>{user?.user_metadata?.name}</span></h1></div>
    </div>
  )
}

export default Welcome