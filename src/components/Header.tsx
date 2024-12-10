"use client"
import React from 'react'
import { motion } from 'motion/react'
// import buttonStyles from '@/components/CSS/buttonsStyle.module.css'
// import Link from 'next/link'
// import mock_img from '@/assets/mock/Doy_avatar.jpg'
// import { auth } from '@/auth'
// import LeftHeaderContainer from './LeftHeaderContainer'
import { SessionProvider } from 'next-auth/react'
import { sidebarNavigationTitle } from '@/constants/sidebarNavigation'
import styles from './CSS/header.module.css'
import logo from '../../public/Scanbooky Logo - Original with Transparent Background.svg'
import logo_img from '../../public/Scanbooky Logo - Original with Transparent Background - 5000x5000.png'
import Image from 'next/image'

type HeaerNavigatorItemInput = {
    text: sidebarNavigationTitle,
    active: sidebarNavigationTitle,
    onClick: string,
}
export function HeaerNavigator({text, active, onClick}: HeaerNavigatorItemInput) {
    return (
            <a href={onClick} className={styles.navigatorItemStyle}>
            <span>{text}</span>
            </a>
    )
}

type HeaderInput = {
    expand?: boolean,
    active: sidebarNavigationTitle,
    children: React.ReactNode
}
export default function Header({children, active, expand}: HeaderInput) {
    // const session = await auth()
  return (
    <header className={styles.headerStyle}>
        <motion.div
        transition={{type:'spring',damping:18,mass:0.75}}
        initial={{opacity:0,x:-1000}} animate={{opacity:1,x:0}}
        style={motionLeftContainerStyle}
        >
        <nav className={styles.navContainer}>
            <a href="/">
            <Image width={100} src={logo} className={styles.bookTitleStyle} alt={'Scanbooky logo'}></Image>
            </a>
            {/* <img className={styles.bookTitleStyle} src="/Scanbooky Logo - Original with Transparent Background - 5000x5000.png" alt="Scanbooky logo" /> */}
            <div className={styles.navigatorListStyle}>
                <HeaerNavigator text={sidebarNavigationTitle.HOME} active={active} onClick='/'></HeaerNavigator>
                <HeaerNavigator text={sidebarNavigationTitle.DIGITALIZATION} active={active} onClick='/digitalization'></HeaerNavigator>
                <HeaerNavigator text={sidebarNavigationTitle.MANAGEMENT} active={active} onClick='/management'></HeaerNavigator>
                <HeaerNavigator text={sidebarNavigationTitle.COMMUNITY} active={active} onClick='/community'></HeaerNavigator>
                <HeaerNavigator text={sidebarNavigationTitle.SELF_CREATION} active={active} onClick='/self_creation'></HeaerNavigator>
            </div>
        </nav>
        </motion.div>
        <motion.div
        transition={{type:'spring',damping:18,mass:0.75}}
        initial={{opacity:0,x:1000}} animate={{opacity:1,x:0}}
        style={rightContainerStyle}
        >
            {/* <LeftHeaderContainer></LeftHeaderContainer> */}
            <motion.input type="text" placeholder="Search for book, author..."
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            style={searchInputStyle}/>
            <SessionProvider>
            {children}
            </SessionProvider>
        </motion.div>
    </header>
  )
}

const motionLeftContainerStyle = {
    // width: '80%',
    height: '100%',
}

// const headerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItem: 'center',
//     padding: '0.5rem 1rem',
//     color: '#fff'
// }

// const leftContatinerStyle = {
//     display: 'flex',
//     alignItem: 'center',
//     flexDirection: 'row',
//     animationFillMode: 'forwards',
//     width: '70%',
// }

// const bookTitleStyle = {
//     marginRight: '2rem',
//     color: '#000'
// }

const searchInputStyle = {
   padding: '0.7rem 1rem',
   marginRight: '1rem',
//    margin: 'auto',
   borderRadius: '6px',
   backgroundColor: 'white',
   border: '2px solid #000',
   minWidth: '150px',  
}

const rightContainerStyle = {
    display: 'flex',
    alignItems: 'center'
}

// const authenButton = {
//     width: '6rem', 
//     height:'3rem', 
//     marginRight:'0.5rem',
//     fontSize: '18px',
//     fontWeight: '600'
// }

// const avatarLinkStyle = {
//     marginRight: '1rem'
// }

// const avatarStyle = {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%'
// }