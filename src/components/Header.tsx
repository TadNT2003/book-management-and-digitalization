"use client"
import React from 'react'
import { motion } from 'motion/react'
import buttonStyles from '@/components/CSS/buttonsStyle.module.css'
import Link from 'next/link'
import mock_img from '@/assets/mock/Doy_avatar.jpg'

type HeaderInput = {
    expand?: boolean
}

export default function Header({expand} : HeaderInput) {
  return (
    <header style={headerStyle}>
        <motion.div style={leftContatinerStyle}
        transition={{type:'spring',damping:18,mass:0.75}}
        initial={{opacity:0,x:-1000}} animate={{opacity:1,x:0}}
        >
            <h1 style={bookTitleStyle}>Book App </h1>
            <motion.input type="text" placeholder="Search for book, author..."
            style={searchInputStyle}
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            />
        </motion.div>
        <motion.div style={rightContainerStyle}
        transition={{type:'spring',damping:18,mass:0.75}}
        initial={{opacity:0,x:1000}} animate={{opacity:1,x:0}}
        >
            {/* <Link href="/profile" style={avatarLinkStyle}>
                <motion.img src={mock_img.src} alt="avatar" style={avatarStyle} initial={{opacity:0,x:100}} animate={{opacity:1,x:0}}
                />
            </Link> */}
            <a href="/authentication/signin">
                <button className={buttonStyles.buttonsWhite} style={authenButton}>Sign in</button>
            </a>
            <button className={buttonStyles.buttonSemiBold} style={authenButton}>Sign up</button>
        </motion.div>
    </header>
  )
}

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    padding: '1rem 1re 1rem 0',
    color: '#fff'
}

const leftContatinerStyle = {
    display: 'flex',
    alignItem: 'center',
    animationFillMode: 'forwards'
}

const bookTitleStyle = {
    marginRight: '2rem',
    color: '#000'
}

const searchInputStyle = {
   padding: '0.7rem 1rem',
   marginLeft: '3.6rem',
   margin: 'auto',
   borderRadius: '70px',
   backgroundColor: 'rgb(248,234,221)',
   border: '2px solid #000',
   minWidth: '320px',  
}

const rightContainerStyle = {
    display: 'flex',
    alignItems: 'center'
}

const authenButton = {
    width: '6rem', 
    height:'3rem', 
    marginRight:'0.5rem',
    fontSize: '18px',
    fontWeight: '600'
}

const avatarLinkStyle = {
    marginRight: '1rem'
}

const avatarStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%'
}