"use server"

import { redirect } from "next/navigation"

export async function digitalizeFormAction(formData: FormData, isNew: boolean) {
    console.log("FormData", formData)
    console.log("--------------------------------------------------")
    let URL = ''
    if (isNew) {
        const title = formData.get("title")?.toString().replaceAll(' ', '%20')
        formData.delete("title")
        const description = formData.get("description")?.toString().replaceAll(' ', '%20')
        formData.delete("description")
        const author = formData.get("author")?.toString().replaceAll(' ', '%20')
        formData.delete("author")
        const publisher = formData.get("publisher")?.toString().replaceAll(' ', '%20')
        formData.delete("publisher")
        const totalPages = formData.get("totalPages")
        formData.delete("totalPages")

        
        console.log("FormData after: ", formData)
        URL = `http://localhost:8080/ocr/createBook?` 
        + `title=${title}&description=${description}&author=${author}&publisher=${publisher}`
        + `bookCover=bookCover&totalPages=${totalPages}&isPremium=true&categories=test&cloudUrl=string`
        console.log("URL: ", URL)
    }
    else {
        URL =  `http://localhost:8080/ocr/updateBookPage`
    }
    
    const data = await fetch(URL, {
        method: "POST",
        // headers: {
        //     'Content-Type': 'multipart/form-data'
        // },
        body: formData
    })
    const response = data.json()
    console.log("response:", response)
    redirect("/")
} 