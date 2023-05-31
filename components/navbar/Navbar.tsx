'use client'

import getCurrentUser from '@/app/actions/getCurrentUser'
import { SafeUser } from '@/types/type'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

interface UserMenuProps {
    currentUser: SafeUser | null
  }


export default function Navbar({currentUser}:UserMenuProps) {


  return (
    <header>
         <nav className='bg-gray-200 flex justify-between px-4 py-6 shadow-xl'>
            <div>{currentUser?.name}</div>
            <div className='flex gap-4'>
            <Link className='bg-red-400 rounded-md py-[5px]' href='/'>Accueil</Link>
            <Link href='/create'>Un truc à troc ?</Link>
            {currentUser ? <button onClick={() => signOut()}>Sign out</button> : <Link href='/register'>Register</Link>}
            </div>
        </nav>
    </header>
  )
}
