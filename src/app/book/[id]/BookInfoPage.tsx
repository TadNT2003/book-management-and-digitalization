"use client"
import PagewithSidabarHeader from '@/components/PagewithSidabarHeader'
import { sidebarNavigationTitle } from '@/constants/sidebarNavigation'
import { motion } from 'motion/react'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import styles from './page.module.css'
import { booksFromServer } from '@/lib/dto'

type BookInfoPageInput = {
    selectedBook: booksFromServer
}
export default function BookInfoPage({selectedBook}: BookInfoPageInput) {
    const route = useRouter()
    const {id} = useParams()
  return (
    <PagewithSidabarHeader active={sidebarNavigationTitle.HOME}>
        <motion.div
        transition={{type:'spring', damping:50,mass:0.75}}
        initial={{opacity:0,x:1000}}
        animate={{opacity:1,x:0}}>
            <div>
                <img  className={styles.bookCover} src={`http://localhost:8080/api/books/getBookCover?fileName=${id}.PNG`} onError={(e) => {
                    e.currentTarget.src = "/Image-not-found.png"
                }}></img>
            </div>
            <div className={styles.bookInfoContainer}>
                <h2 className={styles.bookTitle}>{selectedBook.title}</h2>
                <ul className={styles.bookInfoList}>
                    <li><span>Author: {selectedBook.author}</span></li>
                    <li><span>Publisher: {selectedBook.publisher}</span></li>
                    <li><span>Total pages: {selectedBook.totalPages}</span></li>
                    <li><span>Tags: {selectedBook.categories}</span></li>
                    {/* <li><span>Author: {selectedBook.author}</span></li> */}
                </ul>
                <button className={styles.readButton} onClick={() => {
                    route.push(`/book/${id}/1`)
                }}>Read</button>
            </div>
            <div className={styles.descriptionContainer}>
                <h3>Description</h3>
                <span>{selectedBook.description}</span>
            </div>
        </motion.div>
    </PagewithSidabarHeader>
  )
}
