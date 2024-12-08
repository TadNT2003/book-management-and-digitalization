// "use client"
import HomeBookList from "@/components/HomeBookList";
import { getBookForHome, getBookCover } from "@/server/action";

export default async function Home() {
  const books = await(getBookForHome())

  // console.log(books)
  await getBookCover(books[0].bookId)

  return (
    <HomeBookList books={books}></HomeBookList>
  );
}
