import PagewithSidabarHeader from '@/components/PagewithSidabarHeader'
import { sidebarNavigationTitle } from '@/constants/sidebarNavigation'
import styles from './page.module.css'
import Doy_mock from '@/assets/mock/Doy_avatar.jpg'
import { auth, signOut } from '@/auth'
import React from 'react'
import ProfileInfo from '@/components/ProfileInfo'

export default async function page() {
    const session = await auth()
    if (!session?.user) {
        return (
            <h1>Login to access this</h1>
        )
    }
    console.log("Current user is:", session.user)
  return (
    <PagewithSidabarHeader active={sidebarNavigationTitle.USER_PROFILE}>
        <div className={styles.sudoUserBackground}>

        </div>
        <div className={styles.profileContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.avatarContainer}>
                    <img src={Doy_mock.src} alt="avatar" className={styles.avatar}/>
                </div>
                <button className={styles.buttons} onClick={async () => {
                    "use server"
                    await signOut({redirectTo: "/"})
                }
                }>Logout</button>
                <button className={styles.buttons}>Edit info</button>
            </div>
            <div className={styles.rightContainer}>
                <ProfileInfo username={session.user.username}></ProfileInfo>
            </div>
        </div>
    </PagewithSidabarHeader>
  )
}
