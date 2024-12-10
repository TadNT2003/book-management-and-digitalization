"use client";
import PagewithSidabarHeader from "@/components/PagewithSidabarHeader";
import { sidebarNavigationTitle } from "@/constants/sidebarNavigation";
import { motion } from "motion/react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import styles from "./page.module.css";
import { booksFromServer } from "@/lib/dto";
import BookPageList from "@/components/bookPageList";
import BookCard from '@/components/Bookcard'
import { ChevronLeft } from "lucide-react";


type BookInfoPageInput = {
    selectedBook: booksFromServer;
    books?: booksFromServer[]
};
export default function BookInfoPage({ selectedBook, books }: BookInfoPageInput) {
    const route = useRouter();
    const { id } = useParams();
    function PageListElement() {
        let arr: React.ReactNode[] = []
        for (let index = 0; index < selectedBook.totalPages; index++) {
            arr.push(
                <motion.li
                 whileHover={{scale:1.1}}
                 whileTap={{scale:0.9}}
                 transition={{type:'spring', damping:50,mass:0.75}}
                //  initial={{opacity:0,x:100*(index+1)}}
                 animate={{opacity:1,x:0}}
                 key={index}>
                    <a href={`/book/${id}/${index+1}`} style={{textDecoration: 'none'}}>
                    <BookPageList bookId={selectedBook.bookId} pageNum={index+1}></BookPageList>
                    </a>
                </motion.li>
            )        
        }
        return arr
    }

  return (
    <PagewithSidabarHeader active={sidebarNavigationTitle.HOME}>
        <div className={styles.backArrowContainer}>
        <ChevronLeft className={styles.backArrow}
          size={40}
          onClick={() => {
            route.replace("/");
          }}
        ></ChevronLeft>
      </div>
      <motion.div
        // style={{ paddingTop: "10px" }}
        transition={{ type: "spring", damping: 50, mass: 0.75 }}
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
          {/* <h2 className={styles.pageContainer}>{selectedBook.title}</h2> */}
          <div className={styles.coverWrapper}>
            <img
              className={styles.bookCover}
              src={`http://localhost:8080/api/books/getBookCover?fileName=${id}.PNG`}
              onError={(e) => {
                e.currentTarget.src = "/Image-not-found.png";
              }}
            ></img>
            <div className={styles.bookInfoContainer}>
            <h2 className={styles.bookTitle}>{selectedBook.title}</h2>
              {/* <h2 className={styles.bookTitle}>{selectedBook.title}</h2> */}
              <ul className={styles.bookInfoList}>
                <li>
                  <span>Author: {selectedBook.author}</span>
                </li>
                <li>
                  <span>Publisher: {selectedBook.publisher}</span>
                </li>
                <li>
                  <span>Total pages: {selectedBook.totalPages}</span>
                </li>
                <li>
                    <span>Premium: <input type="checkbox" checked={selectedBook.premium} disabled/></span>
                </li>
                <li>
                  <span>Tags: {selectedBook.categories}</span>
                </li>
                {/* <li><span>Author: {selectedBook.author}</span></li> */}
              </ul>
              <button
                className={styles.readButton}
                onClick={() => {
                  route.push(`/book/${id}/1`);
                }}
              >
                Read
              </button>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <h3>Description</h3>
            <span>{selectedBook.description}</span>
          </div>
          </motion.div>
          <div>
          <div className={styles.pageListContainer}>
          <h3>Table of contents</h3>
                <ul>
                    {PageListElement()}
                </ul>
          </div>
          <section className={styles.exploreSection}>
          <h3>Explore more </h3>
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
        </div>
      
    </PagewithSidabarHeader>
  );
}
