"use server"
import { booksFromServer, readingHistoryItem } from "@/lib/dto";

// export let booksList: Array<booksFromServer> = []

export async function serverTest(formData: FormData) {
  console.log(formData)
    const data = await fetch('http://localhost:8080/ocr/addImage(testOCR)', {
      method: "POST",
      // mode: 'no-cors',
      // headers: {
      //     'Content-Type': 'multipart/form-data'
      // },
      body: formData
    });
    const response = await data.text()
    console.log(response)
  return (
    response
  )
}

export async function loginUser(username: string, password: string) {
    const data = await fetch(`http://localhost:8080/api/users/login?userName=${username}&password=${password}`, {
      method: "POST",
    })
    const response = data.json()
    return (
      response
    )
}

export async function registerUser(username: string, password: string, email: string, dob: string) {
    console.log("FormData: ",username, " ", password, " ", email, " ", dob)
    const data = await fetch('http://localhost:8080/api/users/createUsers', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: username,
        email: email,
        password: password,
        dob: dob,
        readingHistory: []
      }),
    })
    const response = await data.json()
    return response
}

export async function getUserMetaInfo() {
  
}

export async function getBookForHome() {
  let response: []
  let books: Array<booksFromServer> = []
  const data = await fetch("http://localhost:8080/api/books/getAllBooks")
  response = await data.json()
  response.map((book:any, i) => {
    books.push(book)
  })
    return books
}

// export async function getBookCover(bookId: string) {
//   console.log(bookId)
//   const data = await fetch(`http://localhost:8080/api/books/getBookCover?fileName=${bookId}.PNG`)
//   const response = await data.blob()
//   return response
// }

export async function getBookById(bookId: string) {
  const data = await fetch(`http://localhost:8080/api/books/getBookById/${bookId}`)
  const response = await data.json()
  let selectedBook: Array<booksFromServer> = []
  selectedBook.push(response)
  return selectedBook[0]
}

export async function getBookContentByPage(id: string, pageNum: number) {
  const data = await fetch(`http://localhost:8080/api/books/getBookPage/${id}/pageNumber${pageNum}`)
  const response = await data.json()
  const title = Object.keys(response)[0]
  return {
    title: title,
    content: response[title]
  }
}

export async function registerNewBook() {
  
}

export async function editOldBook(bookId: string, pageNumber: number, page: File) {
  
}