"use client"
import { sidebarNavigationTitle } from '@/constants/sidebarNavigation'
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from './CSS/pageWithSidebarHeader.module.css'

export default function PagewithSidabarHeader({children, active}: Readonly<{children?: React.ReactNode; active: sidebarNavigationTitle}>) {
  return (
    <main className={styles.main}>
      <div className={styles.sidebarContainer}>
        <Sidebar active={active}/>
      </div>
      <div className={styles.contentContainer}>
        <section className={styles.header}>
          <Header/>
        </section>
        <div className={styles.mainContentContainer}>
            {children}
        </div>
       </div>
    </main>
  )
}
