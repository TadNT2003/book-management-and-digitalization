"use client"
import React, { useRef } from 'react'
import styles from './CSS/digitalizeBookForm.module.css'
import { digitalizeFormAction } from '@/server/digitalizeFormAction';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookDigitalizeSchema } from '@/lib/zod';
import { Book, Building, User } from 'lucide-react';
import { useRouter } from 'next/navigation';


type DigitalizationFormInput = {
  isNew: boolean;
  notLogin: boolean;
}
export default function digitalizeBookForm({isNew, notLogin}: DigitalizationFormInput) {
  const formTitle = isNew? "Upload new book": "Edit uploaded book"
  const formHook = useForm({
    resolver: zodResolver(bookDigitalizeSchema)
  })
  const route = useRouter()
  // console.log(formHook)
  if (!notLogin) {
    return (
      <form className={styles.bookForm} onSubmit={formHook.handleSubmit(async (validateData) => {
        const formData = new FormData();
  
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
          <h1 className={styles.formTitle}>{formTitle}</h1>
          <div className={styles.textInputContainer}>
          <div className={styles.titleAuthorPub}>
  
          <div className={styles.inputBookInfo}>
                <label>Title</label>
                <Book size={28} className={styles.icon}></Book>
                <input {...formHook.register("title")} name="title" type="text" id="title"/>
          </div>
          {/* <h3> Title</h3>
          <input className={styles.inputBookInfo} {...formHook.register("title")} type="text" name="title" id="title" /> */}
  
          <div className={styles.inputBookInfo}>
                <label>Author</label>
                <User size={28} className={styles.icon}></User>
                <input {...formHook.register("author")} name="author" type="text" id="author"/>
          </div>
          {/* <h3 >Author</h3>
          <input className={styles.inputBookInfo} {...formHook.register("author")} type="text" name="author" id="author" /> */}
  
          <div className={styles.inputBookInfo} style={{display: !isNew? 'none': 'block'}}>
                <label>Publisher</label>
                <Building size={28} className={styles.icon}></Building>
                <input {...formHook.register("publisher")} name="publisher" type="text" id="publisher"/>
          </div>
          {/* <h3 style={{display: !isNew? 'none': 'inherit'}}>Publisher</h3>
          <input className={styles.inputBookInfo} style={{display: !isNew? 'none': 'inherit'}} {...formHook.register("publisher")} type="text" name="publisher" id="publisher" /> */}
          </div>
  
  
          <div className={styles.inputBookDes} style={{display: !isNew? 'none': 'inherit'}}>
                <label>Description</label>
                {/* <User size={30} className={styles.icon}></User> */}
                <div>
                <input {...formHook.register("description")} name="description" type="text" id="description"/>
                </div>
          </div>
          {/* <h3 style={{display: !isNew? 'none': 'inherit'}}>Description</h3> 
          <input className={styles.inputBookInfo} style={{display: !isNew? 'none': 'inherit'}} {...formHook.register("description")} type="text" name="description" id="description"/> */}
          </div>
  
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
  
            <div className={styles.submitContainer}>
          <input className={styles.submitButton} type='submit'></input>
            </div>
      </form>
    )
  }
  return (
    <h4>You need to sign in to use this feature: <a href="/authentication/signin">Sign in</a></h4>
  )
  
}
