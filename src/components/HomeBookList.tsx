"use client"
import { motion } from 'motion/react'
import React from 'react'
import BookCard from './Bookcard'
// import { books } from '@/constants/mockData';
import styles from "./CSS/homeBookList.module.css";
import PagewithSidabarHeader from './PagewithSidabarHeader';
import { sidebarNavigationTitle } from '@/constants/sidebarNavigation';
import { booksFromServer } from '@/lib/dto';

type HomeBookListInput = {
    books?: booksFromServer[]
}
export default function HomeBookList({books}: HomeBookListInput) {
  return (
    <PagewithSidabarHeader active={sidebarNavigationTitle.HOME}>      
    <div style={{padding: '10px 0'}}>
      {/* <button onClick={getBookForHome}>Test fetch data</button> */}
      <h1 className={styles.homePageTitle}>ALL BOOKS </h1>
          <ul className={styles.bookList}>
            {
              books?.map((book, i) => 
                 <motion.li
                 whileHover={{scale:1.1}}
                 whileTap={{scale:0.9}}
                 transition={{type:'spring', damping:50,mass:0.75}}
                 initial={{opacity:0,x:200*(i+1)}}
                 animate={{opacity:1,x:0}}
                 key={i}>
                    <a href={`/book/${book.bookId}`} style={{textDecoration: 'none'}}>
                     <BookCard title={book.title} coverImage={book.bookCover} description={book.description}></BookCard>
                    </a>
                 </motion.li>
              )
            }
          </ul>
      </div>
    </PagewithSidabarHeader>
  )
}
