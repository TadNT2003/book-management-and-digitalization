import React from 'react'
import styles from './CSS/bookCard.module.css'
// import { getBookCover } from '@/server/action'

type BookcardInput = {
    title: string,
    author: string,
    coverImage: string,
    id: string,
    onClick?: any
}

export default function Bookcard({title, author, coverImage, id, onClick}: BookcardInput) {

  return (
    <div className={styles.cardStyle} onClick={onClick}>

        <img src={`http://localhost:8080/api/books/getBookCover?fileName=${id}.PNG`} className={styles.imageStyle} alt={title} style={imageBGStyle}
        onError={(e) => {
            e.currentTarget.src = "/Image-not-found.png"
        }}/>
        {/* <div title={title} className={styles.imageStyle} style={imageBGStyle}></div> */}
        <h3 style={titleStyle}>{title}</h3>
        <p style={authorStyle}>{author}</p>
    </div>
  )
}

const cardStyle = {
    width: '200px',
    padding: '1rem',
    borderRadius: '20px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    marginBottom: '1.5rem',
    marginRight: '1.6rem',
}
  
const imageBGStyle = {
    // backgroundColor: 'black',
    // width: '100%',
    // aspectRatio:1,
    // borderRadius: '5px',
    // backgroundImage: 'url(D:/MSOB_FE/BE_MSOB/BE_DACN/book/Book_Cover/67551b2dbaae844d52d9eeda.PNG)'
}
  
const contentStyle = {
    marginTop: '1rem',
}
  
const titleStyle = {
    fontSize: '1.2rem',
    height: '2.8rem',
    overflow: 'hidden',
    marginBottom: '0.5rem',
    color:'#000'
}
  
const authorStyle = {
    fontSize: '0.8rem',
    color: '#888',
    height: '1rem',
    overflow: 'hidden',
}
  