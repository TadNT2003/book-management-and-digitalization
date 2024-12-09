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
      <section className={styles.welcomeContainer}>
        <h1 className={styles.welcome}>Welcome to Scanbooky</h1>
      </section>
      <section className={styles.introductionSection}>
        <div className={styles.imgContainer}>
        <img className={styles.introductionImg} src="/desktop-920.jpg" alt="" />
        </div>
        <div className={styles.textContainer}>
        <p>At Scanbooky, we specialize in scanning books to make them easily accessible online.</p>
        <p>Our team is dedicated to preserving the beauty of physical books while providing the convenience of digital reading.</p>
        <p>Discover a world of literature at your fingertips with Scanbooky. Join us in revolutionizing the way you read books online.</p>
        </div>
      </section>
      <section className={styles.newBookSection}>
      <h2 className={styles.homePageTitle}>NEW UPDATES </h2>
          <ul className={styles.bookList}>
            {
              books?.reverse().map((book, i) => 
                 <motion.li
                 whileHover={{scale:1.1}}
                 whileTap={{scale:0.9}}
                 transition={{type:'spring', damping:50,mass:0.75}}
                 initial={{opacity:0,x:200*(i+1)}}
                 animate={{opacity:1,x:0}}
                 key={i}>
                    <a href={`/book/${book.bookId}`} style={{textDecoration: 'none'}}>
                     <BookCard title={book.title} coverImage={book.bookCover} author={book.author} id={book.bookId}></BookCard>
                    </a>
                 </motion.li>
              )
            }
          </ul>
      </section>
      <section className={styles.BookSection}>
      <h2 className={styles.homePageTitle}>ALL BOOKS </h2>
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
                     <BookCard title={book.title} coverImage={book.bookCover} author={book.author} id={book.bookId}></BookCard>
                    </a>
                 </motion.li>
              )
            }
          </ul>
      </section>
      </div>
    </PagewithSidabarHeader>
  )
}
