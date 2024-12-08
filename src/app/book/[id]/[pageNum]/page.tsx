import React from 'react'
import ReadPage from './ReadPage'
import { getBookContentByPage } from '@/server/action'

export default async function BookPage({params,} : {
    params: Promise<{id: string, pageNum: number}>
}) {
    const {id, pageNum} = await params
    console.log(id, pageNum)
    // const selectedBook = await getBookById(id)
    const content = await getBookContentByPage(id, pageNum);
  return (
    <ReadPage content={content}></ReadPage>
    // <div>Test</div>
  )
}
