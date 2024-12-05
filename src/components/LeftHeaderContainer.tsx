"use client"
import { useSession } from "next-auth/react"
import React from 'react'
import Link from 'next/link'
import mock_img from '@/assets/mock/Doy_avatar.jpg'
import buttonStyles from '@/components/CSS/buttonsStyle.module.css'

export default function LeftHeaderContainer() {
    const {data: session} = useSession()
    const login = session?.user
    // console.log("Current user from header is:", login)
    // console.log("Current session is:", session)
    // const login = false;
    if (login) {
        return (
            <div>
            <Link href="/profile" style={avatarLinkStyle}>
                <img src={mock_img.src} alt="avatar" style={avatarStyle}
                />
            </Link>
            {/* <button onClick={async () => {
                // "use server"
                await signOut({redirectTo: "/"})
            }} className={buttonStyles.buttonSemiBold} style={authenButton}>Logout</button> */}
            </div>
        );
    }
    return (
            <div>
                <a href="/authentication/signin">
                    <button className={buttonStyles.buttonsWhite} style={authenButton}>Sign in</button>
                </a>
                <button className={buttonStyles.buttonSemiBold} style={authenButton}>Sign up</button>
            </div>
        );
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