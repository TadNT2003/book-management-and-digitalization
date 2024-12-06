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