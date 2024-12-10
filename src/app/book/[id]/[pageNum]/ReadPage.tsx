"use client"
// import { books } from '@/constants/mockData'
import { motion } from 'motion/react'
import { useParams, useRouter } from 'next/navigation'
import styles from './page.module.css'
import React, { useState } from 'react'
// import '@fortawesome/fontawesome-free/css/all.min.css'
import { createEditor, BaseEditor, Descendant } from 'slate'
import { Slate, Editable, withReact, ReactEditor  } from 'slate-react'
import { ChevronLeft, Cog, Search, Share2 } from 'lucide-react'
import ReactPaginate from 'react-paginate';
// import { useRouter } from 'next/router'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor
        Element: CustomElement
        Text: CustomText
    }
}

type ReadPageInput = {
    title: string,
    content: string,
    totalPage: number
}
export default function ReadPage({content, title, totalPage}: ReadPageInput) {
    const {id, pageNum} = useParams()
    const [editor] = useState(() => withReact(createEditor()))
    const route = useRouter()
    
    const initialValue: Descendant[] = [
        {
          type: 'paragraph',
          children: [{ text: content }],
        },
      ]
    // console.log(pageNum)
    const current = Number(pageNum) - 1
    return (
        // <motion.div transition={{type:'spring', damping:40, mass:0.75}}
        //    initail={{opacity:0,x:100}} animate={{opactity:1,x:0}}>Bookpage {id} {JSON.stringify(selectedBook[0])}</motion.div>
    <motion.div transition={{type:'spring', damping:40, mass:0.75}}
        initial={{opacity:0,x:1000}} animate={{opacity:1,x:0}}>
       <motion.section transition={{type:'spring', damping:44, mass:0.75}}
        initial={{opacity:0,y:-1000}} animate={{opacity:1,y:0}}
        className={styles.appBar}>
            <div className={styles.leftIcon} onClick={() => route.push(`/book/${id}`)}>
                <ChevronLeft className={styles.icons} size={40}></ChevronLeft>
            </div>
            <div className={styles.title}>
                <h2 style={{textAlign:'center',textTransform:'uppercase'}}>
                    {title}
                </h2>
            </div>
            <div>
                {/* <Cog className={styles.icons} size={20} style={{marginRight:'20px'}}></Cog>
                <Share2 className={styles.icons} size={20} style={{marginRight:'20px'}}></Share2>
                <Search className={styles.icons} size={20} style={{marginRight:'20px'}}></Search> */}
            </div>
        </motion.section>
        <div className={styles.editorContainer}>
            <div className={styles.paginatorContainer}>
                <ReactPaginate
                className={styles.paginator}
                pageCount={totalPage}
                initialPage={current}
                previousLabel="< previ"
                nextLabel="next >"
                pageRangeDisplayed={6}
                pageClassName={styles.eachPage}
                activeClassName={styles.activePage}
                breakClassName={styles.breakPage}
                previousClassName={styles.prevNextButton}
                nextClassName={styles.prevNextButton}
                onPageChange={(active) => {
                    console.log(active.selected)
                    route.replace(`/book/${id}/${active.selected + 1}`)
                }}
                ></ReactPaginate>
            </div>
            <Slate editor={editor} initialValue={initialValue}>
                <Editable className={styles.editor} readOnly />
            </Slate>
            <div className={styles.paginatorContainer}>
                <ReactPaginate
                className={styles.paginator}
                pageCount={totalPage}
                initialPage={current}
                previousLabel="< previ"
                nextLabel="next >"
                pageRangeDisplayed={6}
                pageClassName={styles.eachPage}
                activeClassName={styles.activePage}
                breakClassName={styles.breakPage}
                previousClassName={styles.prevNextButton}
                nextClassName={styles.prevNextButton}
                onPageChange={(active) => {
                    console.log(active.selected)
                    route.replace(`/book/${id}/${active.selected + 1}`)
                }}
                ></ReactPaginate>
            </div> 
        </div>

    </motion.div>
  )
}
