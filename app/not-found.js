'use client'
 
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
 
export default function Page() {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])
 
  return (
    <div className='mt-20'>
      <h2 className='text-center text-4xl uppercase'>Błąd 404 - Nie znalezion strony</h2>
      <p className='text-center mt-3 text-lg'>Nastąpi przekierowanie...</p>
    </div>
  )
}