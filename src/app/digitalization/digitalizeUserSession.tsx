"use client"
import DigitalizeBookForm from '@/components/DigitalizeBookForm'
import { useSession } from 'next-auth/react';
import React from 'react'

type DigitalizationFormInput = {
  isNew: boolean;
}
export default function DigitalizeUserSession({isNew}: DigitalizationFormInput) {
  const {data: session} = useSession()
  // const desComponent = useRef()
  const login = session?.user
  console.log(login)
  return (
    <DigitalizeBookForm isNew={isNew} notLogin={!login}></DigitalizeBookForm>
  )
}
