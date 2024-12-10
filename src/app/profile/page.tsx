import PagewithSidabarHeader from '@/components/PagewithSidabarHeader'
import { sidebarNavigationTitle } from '@/constants/sidebarNavigation'
import styles from './page.module.css'
import Doy_mock from '@/assets/mock/Doy_avatar.jpg'
import { auth, signOut } from '@/auth'
import React from 'react'
import ProfileInfo from '@/components/ProfileInfo'
import buttonStyles from '@/components/CSS/buttonsStyle.module.css'
import { Cake, Mail, User } from 'lucide-react'

export default async function page() {
    const session = await auth()
    if (!session?.user) {
        return (
            <h1>Login to access this</h1>
        )
    }
    // console.log("Current user is:", session.user)
    // console.log("Current session is:", session)
  return (
    <PagewithSidabarHeader active={sidebarNavigationTitle.USER_PROFILE}>
        <div className={styles.sudoUserBackground}>

        </div>
        <div className={styles.profileContainer}>
            <div className={styles.topContainer}>
                <div className={styles.avatarContainer}>
                    <img src={Doy_mock.src} alt="avatar" className={styles.avatar}/>
                </div>
                <div className={styles.userInfo}>
                     <User size={30}></User><span> {session.user.userName}</span>
                </div>
                <div className={styles.userInfo} style={{paddingLeft: '20px'}}>
                     <Mail size={15}></Mail><a href={session.user.email}><span>{session.user.email}</span></a>
                </div>
                <div className={styles.userInfo} style={{paddingLeft: '20px', fontSize: '15px'}}>
                    <Cake size={15}></Cake><span> {session.user.dob}</span>
                </div>
                <div className={styles.buttonContainer}>
                <button style={{marginTop: '1rem'}} className={`${styles.buttons} ${buttonStyles.buttonBold}`} onClick={async () => {
                    "use server"
                    await signOut({redirectTo: "/"})
                }
                }>Logout</button>
                <button className={`${styles.buttons} ${buttonStyles.buttonsWhite}`}>Edit info</button>
                </div>
            </div>
            <div className={styles.botContainer}>
                <ProfileInfo username={session.user.userName}></ProfileInfo>
            </div>
        </div>
    </PagewithSidabarHeader>
  )
}
