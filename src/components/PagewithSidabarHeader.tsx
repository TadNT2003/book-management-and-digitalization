"use client"
import { sidebarNavigationTitle } from '@/constants/sidebarNavigation'
import React, { useRef, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from './CSS/pageWithSidebarHeader.module.css'
import LeftHeaderContainer from './LeftHeaderContainer'
import { sourceSans3 } from '@/app/layout'

export default function PagewithSidabarHeader({children, active}: Readonly<{children?: React.ReactNode; active: sidebarNavigationTitle}>) {
  const [expand, setExpand] = useState(true)
  const ref = useRef(null);

  return (
    <main className={`${styles.main}`}>

      {/* <div className={styles.sidebarContainer} style={{width: expand? '18rem': '5rem'}}>
        <Sidebar ref={ref} expand={expand} setExpand={() => setExpand(!expand)} active={active}/>
      </div> */}
      <div className={styles.contentContainer}>
        <section className={styles.header}>
          <Header active={active}>
            <LeftHeaderContainer></LeftHeaderContainer>
          </Header>
        </section>
        <div className={styles.mainContentContainer}>
          {/* <h1>{ref.current? 'Ok': 'Null'}</h1> */}
            {children}
        </div>
       </div>
    </main>
  )
}
