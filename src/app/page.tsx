// "use client"
import HomeBookList from "@/components/HomeBookList";
import { getBookForHome } from "@/server/action";

export default async function Home() {
  const books = await(getBookForHome())

  // console.log(books)

  return (
    <HomeBookList books={books}></HomeBookList>
  );
}
