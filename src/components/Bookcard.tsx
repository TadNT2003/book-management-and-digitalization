import React from 'react'

type BookcardInput = {
    title: string,
    description: string,
    coverImage: string,
    onClick?: any
}

export default function Bookcard({title, description, coverImage, onClick}: BookcardInput) {
    const file_path = `file:///${coverImage}`
    // console.log("file link: ",file_path)
    // console.log("file path: ", coverImage)
    // console.log(process.env.NODE_ENV)
    // URL.createObjectURL('blob:http://localhost:8080/1f33ad39-9d15-46ab-a8f1-162edf88bdc2')
 
  return (
    <div style={cardStyle} onClick={onClick}>
        <img src={`http:///localhost/D:/MSOB_FE/BE_MSOB/BE_DACN/book/Book_Cover/67551b2dbaae844d52d9eeda.PNG`} alt={title} style={imageStyle}/>
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
  
const imageStyle = {
    width: '100%',
    aspectRatio:1,
    borderRadius: '5px',
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
  