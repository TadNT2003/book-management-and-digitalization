"use client"
import React from 'react'
import styles from './CSS/digitalizeBookForm.module.css'
import { digitalizeFormAction } from '@/server/digitalizeFormAction';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookDigitalizeSchema } from '@/lib/zod';
import { serverTest } from '@/server/action';


type DigitalizationFormInput = {
  isNew: boolean;
}
export default function digitalizeBookForm({isNew}: DigitalizationFormInput) {
  const formTitle = isNew? "Upload new book": "Edit uploaded book"
  const formHook = useForm({
    resolver: zodResolver(bookDigitalizeSchema)
  })

  // console.log(formHook)
  
  return (
    <form className={styles.bookForm} onSubmit={formHook.handleSubmit(async (validateData) => {
      const formData = new FormData();
      // console.log(validateData.cover)
      // validateData.cover && formData.append("multipartFile", validateData.cover[0])
      // serverTest(formData)

      validateData.title && formData.append("title", validateData.title);
      validateData.author && formData.append("author", validateData.author);
      validateData.description && formData.append("description", validateData.description);
      validateData.publisher && formData.append("publisher", validateData.publisher);
      validateData.cover && formData.append("bookCoverReal", validateData.cover[0]);
      console.log("validateData pages: ", validateData.pages)
      console.log("length: ", validateData.pages.length)
      for (let i=0; i < validateData.pages.length; i++) {
        validateData.pages && formData.append("page", validateData.pages[i]);
      }
      validateData.pages && formData.append("totalPages", validateData.pages.length);

      digitalizeFormAction(formData, isNew)
      return false
    })}>
        <h1>{formTitle}</h1>
        <h3> Title</h3>
        <input className={styles.inputBookInfo} {...formHook.register("title")} type="text" name="title" id="title" />

        <h3 >Author</h3>
        <input className={styles.inputBookInfo} {...formHook.register("author")} type="text" name="author" id="author" />

        <h3 style={{display: !isNew? 'none': 'inherit'}}>Description</h3> 
        <input className={styles.inputBookInfo} style={{display: !isNew? 'none': 'inherit'}} {...formHook.register("description")} type="text" name="description" id="description"/>

        <h3 style={{display: !isNew? 'none': 'inherit'}}>Publisher</h3>
        <input className={styles.inputBookInfo} style={{display: !isNew? 'none': 'inherit'}} {...formHook.register("publisher")} type="text" name="publisher" id="publisher" />

        <h3 style={{display: !isNew? 'none': 'inherit'}}>Book cover</h3>
        <label style={{display: !isNew? 'none': 'flex'}} htmlFor="images" className={styles.dropContainer} id="dropContainer">
          <span className={styles.dropTitle}>Drop files here</span>
          or
          <input className={styles.fileInput} {...formHook.register("cover")} name='cover' type="file" id="cover" accept="image/*" />
        </label>

        <h3>Scan upload</h3>
        <label htmlFor="images" className={styles.dropContainer} id="dropContainer">
          <span className={styles.dropTitle}>Drop files here</span>
          or
          <input className={styles.fileInput} {...formHook.register("pages")} name='pages' type="file" id="pages" accept="image/*" multiple/>
        </label>

        <input className={styles.submitButton} type='submit'></input>
    </form>
  )
}
