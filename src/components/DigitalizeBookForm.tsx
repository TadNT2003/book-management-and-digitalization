import React from 'react'
import styles from './CSS/digitalizeBookForm.module.css'

type DigitalizationFormInput = {
  isNew: boolean;
}
export default function digitalizeBookForm({isNew}: DigitalizationFormInput) {
  return (
    <form className={styles.bookForm} action="">
        <h3> Title</h3>
        <input className={styles.inputBookInfo} type="text" name="title" id="title" />

        <h3 >Author</h3>
        <input className={styles.inputBookInfo} type="text" name="author" id="author" />

        <h3 style={{display: !isNew? 'none': 'inherit'}}>Description</h3>
        <input className={styles.inputBookInfo} style={{display: !isNew? 'none': 'inherit'}} type="text" name="description" id="description" />

        <h3 style={{display: !isNew? 'none': 'inherit'}}>Publisher</h3>
        <input className={styles.inputBookInfo} style={{display: !isNew? 'none': 'inherit'}} type="text" name="publisher" id="publisher" />

        <h3 style={{display: !isNew? 'none': 'inherit'}}>Book cover</h3>
        <label style={{display: !isNew? 'none': 'flex'}} htmlFor="images" className={styles.dropContainer} id="dropContainer">
          <span className={styles.dropTitle}>Drop files here</span>
          or
          <input className={styles.fileInput} type="file" id="images" accept="image/*" />
        </label>

        <h3>Scan upload</h3>
        <label htmlFor="images" className={styles.dropContainer} id="dropContainer">
          <span className={styles.dropTitle}>Drop files here</span>
          or
          <input className={styles.fileInput} type="file" id="images" accept="image/*" multiple/>
        </label>

        <button className={styles.submitButton} type='submit'>Submit</button>
    </form>
  )
}
