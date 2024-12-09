import React from "react";
import styles from "./CSS/bookPageList.module.css";

type BookPageListInput = {
  pageNum: number;
  bookId: string;
};
export default function BookPageList({ pageNum, bookId }: BookPageListInput) {
  return (
    // <a href={`/book/${bookId}/${String(pageNum)}`}>
      <div className={styles.pageListItem}>
        <span>Page {pageNum}</span>
      </div>
    // </a>
  );
}
