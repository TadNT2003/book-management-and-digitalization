// "use client"
import HomeBookList from "@/components/HomeBookList";
import styles from './page.module.css'
import { getBookForHome } from "@/server/action";

export default async function Home() {
  const books = await(getBookForHome())

  // console.log(books)
  // await getBookCover(books[0].bookId)

  return (
    <div>
      {/* <div className={styles.blockCover}>
        <div className={styles.blockPaginator}></div>
      </div> */}
      <HomeBookList books={books}></HomeBookList>
    </div>
  );
}
