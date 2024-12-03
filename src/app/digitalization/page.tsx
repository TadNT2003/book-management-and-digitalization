"use client"
import PagewithSidabarHeader from '@/components/PagewithSidabarHeader'
import { sidebarNavigationTitle } from '@/constants/sidebarNavigation'
import DigitalizeBookForm from '@/components/DigitalizeBookForm'
import { motion } from 'motion/react'
import styles from './page.module.css'
import React, { useState } from 'react'

export default function DigitalizationPage() {
  const [isNew, setIsNew] = useState(true)

  return (
    <PagewithSidabarHeader active={sidebarNavigationTitle.DIGITALIZATION}>
        <motion.div
        transition={{type:'spring', damping:50,mass:0.75}}
        initial={{opacity:0,x:1000}}
        animate={{opacity:1,x:0}}>
            <DigitalizeBookForm isNew={isNew}></DigitalizeBookForm>
            <div className={styles.newAndEditButtonContainer}>
              <div>
                <button onClick={() => setIsNew(true)}>Register new book</button>
                <button onClick={() => setIsNew(false)}>Edit old book</button>
              </div>
            </div>
        </motion.div>
    </PagewithSidabarHeader>
  )
}
