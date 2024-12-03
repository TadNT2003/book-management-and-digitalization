"use client"
import styles from "./page.module.css";
import BookCard from "@/components/Bookcard";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { sidebarNavigationTitle } from '@/constants/sidebarNavigation'
import { books } from '@/constants/mockData';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sidebarContainer}>
        <Sidebar active={sidebarNavigationTitle.HOME}/>
      </div>
      <div className={styles.contentContainer}>
        <section className={styles.header}>
          <Header/>
        </section>
        <div className={styles.mainContentContainer}>
          <h1 className={styles.homePageTitle}>ALL BOOKS</h1>
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
                     <BookCard title={book.title} coverImage={book.image} description={book.description}></BookCard>
                    </a>
                 </motion.li>
              )
            }
          </ul>
        </div>
      </div>
    </main>
  );
}
