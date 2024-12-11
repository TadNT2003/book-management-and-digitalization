import React from 'react'
import ReadPage from './ReadPage'
import { getBookContentByPage } from '@/server/action'

export default async function BookPage({params,} : {
    params: Promise<{id: string, pageNum: number}>
}) {
    const {id, pageNum} = await params
    // console.log(id, pageNum)
    // const selectedBook = await getBookById(id)
    const {title, content} = await getBookContentByPage(id, pageNum);
    // console.log(content)
  return (
    <ReadPage content={String(content)} title={title}></ReadPage>
    // <div>Test</div>
  )
}
