"use client"
import React from 'react'
import {motion} from 'motion/react'
import BookCard from './Bookcard'
import {books} from '@/constants/mockData'
import styles from './CSS/profileInfo.module.css'

type ProfileInfoInput = {
    username: string
}
export default function ProfileInfo({username}: ProfileInfoInput) {
  return (
    <motion.div
    transition={{type:'spring', damping:50,mass:0.75}}
    initial={{opacity:0,x:1000}}
    animate={{opacity:1,x:0}}
    >
        <h2 className={styles.userHistory}>{`${username}'s reading history`}</h2>
        <ul className={styles.bookList}>
            {
              books.map((book, i) => 
                 <motion.li
                 whileHover={{scale:1.1}}
                 whileTap={{scale:0.9}}
                 transition={{type:'spring', damping:50,mass:0.75}}
                 initial={{opacity:0,x:200*(i+1)}}
                 animate={{opacity:1,x:0}}
                 key={i}>
                    <a href={`/book/${book.id}`} style={{textDecoration: 'none'}}>
                     <BookCard title={book.title} coverImage={book.image} description={book.description} id={String(book.id)}></BookCard>
                    </a>
                 </motion.li>
              )
            }
          </ul>
    </motion.div>
  )
}
