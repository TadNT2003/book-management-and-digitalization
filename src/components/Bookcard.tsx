import React from 'react'
import styles from './CSS/bookCard.module.css'
import { getBookCover } from '@/server/action'

type BookcardInput = {
    title: string,
    description: string,
    coverImage: string,
    id: string,
    onClick?: any
}

export default function Bookcard({title, description, coverImage, id, onClick}: BookcardInput) {
    const file_path = `file:///${coverImage}`

  return (
    <div style={cardStyle} onClick={onClick}>

        <img src={`http://localhost:8080/api/books/getBookCover?fileName=${id}.PNG`} className={styles.imageStyle} alt={title} style={imageBGStyle}
        onError={(e) => {
            e.currentTarget.src = "/Image-not-found.png"
        }}/>
        {/* <div title={title} className={styles.imageStyle} style={imageBGStyle}></div> */}
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{description}</p>
    </div>
  )
}

const cardStyle = {
    width: '200px',
    padding: '1rem',
    borderRadius: '20px',
    backgroundColor: '#f8eadd',
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
    marginBottom: '0.5rem',
    color:'#000'
}
  
const descriptionStyle = {
    fontSize: '0.8rem',
    color: '#888',
}
  