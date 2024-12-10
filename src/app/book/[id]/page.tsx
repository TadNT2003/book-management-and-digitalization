// "use client"
import React from 'react'
import BookInfoPage from './BookInfoPage'
import { getBookById, getBookForHome } from '@/server/action'

export default async function InfoPage({params,} : {
    params: Promise<{id: string}>
}) {
    const {id} = await params
    const selectedBook = await getBookById(id)
    const books = await getBookForHome()
  return (
    <BookInfoPage selectedBook={selectedBook} books={books}></BookInfoPage>
  )
}
