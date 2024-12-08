"use client"
import PagewithSidabarHeader from '@/components/PagewithSidabarHeader'
import { sidebarNavigationTitle } from '@/constants/sidebarNavigation'
import { motion } from 'motion/react'
import { books } from '@/constants/mockData'
import React from 'react'
import styles from './page.module.css'
import { useParams, useRouter } from 'next/navigation'

export default function page() {
    const route = useRouter()
    const {id} = useParams()
    const selectedBook = books.filter((book, i) => {
        return id === String(book.id)
    })
  return (
    <PagewithSidabarHeader active={sidebarNavigationTitle.HOME}>
        <motion.div
        transition={{type:'spring', damping:50,mass:0.75}}
        initial={{opacity:0,x:1000}}
        animate={{opacity:1,x:0}}>
            <div className={styles.bookCover}>
                <img src={selectedBook[0].image}></img>
            </div>
            <div className={styles.bookInfoContainer}>
                <h2 className={styles.bookTitle}>{selectedBook[0].title}</h2>
                <ul className={styles.bookInfoList}>
                    <li><span>Author: {selectedBook[0].author}</span></li>
                </ul>
                <button className={styles.readButton} onClick={() => {
                    route.push(`/book/${id}/1`)
                }}>Read</button>
            </div>
            <div className={styles.descriptionContainer}>
                <h3>Description</h3>
                <span>{selectedBook[0].description}</span>
            </div>
        </motion.div>
    </PagewithSidabarHeader>
  )
}
