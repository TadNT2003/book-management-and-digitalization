import React from 'react'
import ReadPage from './ReadPage'
import { getBookById, getBookContentByPage } from '@/server/action'

export default async function BookPage({params,} : {
    params: Promise<{id: string, pageNum: number}>
}) {
    const {id, pageNum} = await params
    // console.log(id, pageNum)
    // const selectedBook = await getBookById(id)
    const {title, content} = await getBookContentByPage(id, pageNum);
    const selectedBook = await getBookById(id)
  return (
    <ReadPage content={String(content)} title={title} totalPage={selectedBook.totalPages}></ReadPage>
    // <div>Test</div>
  )
}
