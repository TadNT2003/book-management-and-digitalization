"use client"
import PagewithSidabarHeader from '@/components/PagewithSidabarHeader'
import { sidebarNavigationTitle } from '@/constants/sidebarNavigation'
import DigitalizeBookForm from '@/components/DigitalizeBookForm'
import { motion } from 'motion/react'
import styles from './page.module.css'
import React, { useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import DigitalizeUserSession from './digitalizeUserSession'
// import { serverTest } from '@/server/action'

export default function DigitalizationPage() {
  const [isNew, setIsNew] = useState(true)

  return (
    <PagewithSidabarHeader active={sidebarNavigationTitle.DIGITALIZATION}>
        <motion.div
        transition={{type:'spring', damping:50,mass:0.75}}
        initial={{opacity:0,x:1000}}
        animate={{opacity:1,x:0}}>
          <div style={{padding: '10px 0'}}>
            <SessionProvider>
            <DigitalizeUserSession isNew={isNew}></DigitalizeUserSession>
            </SessionProvider>
            <div className={styles.newAndEditButtonContainer}>
              {/* <form action={serverTest}>
                <input type="file" name="multipartFile " id="" />
                <button type='submit'>Submit</button>
              </form> */}
              <div>
                <button disabled={isNew} onClick={() => setIsNew(true)}>Upload new book</button>
                <button disabled onClick={() => setIsNew(false)}>Edit uploaded book</button>
              </div>
            </div>
          </div>
        </motion.div>
    </PagewithSidabarHeader>
  )
}
