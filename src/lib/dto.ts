
export type readingHistoryItem = {
    bookId: string,
    lastRead: string,
    lastPage: number
}

export type userFromServer = {
    id: string,
    userName: string,
    email: string,
    password: string,
    dob: string,
    readingHistory: Array<readingHistoryItem>
}

export type booksFromServer = {
    bookId: string,
    title: string,
    description: string,
    author: string,
    publisher: string,
    bookCover: string,
    totalPages: number,
    categories: [string],
    cloudUrl: string,
    premium: boolean
}