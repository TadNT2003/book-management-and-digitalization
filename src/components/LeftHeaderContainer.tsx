"use client"
import { useSession } from "next-auth/react"
import React from 'react'
import Link from 'next/link'
import mock_img from '@/assets/mock/Doy_avatar.jpg'
import buttonStyles from '@/components/CSS/buttonsStyle.module.css'

export default function LeftHeaderContainer() {
    const {data: session} = useSession()
    const login = session?.user
    // console.log("Current session is:", session)
    if (login) {
        return (
            <div>
            <Link href="/profile" style={avatarLinkStyle}>
                <img src={mock_img.src} alt="avatar" style={avatarStyle}
                />
            </Link>
            </div>
        );
    }
    return (
            <div>
                <a href="/authentication/signin">
                    <button className={buttonStyles.buttonsWhite} style={authenButton}>Sign in</button>
                </a>
                <a href="/authentication/signup">
                    <button className={buttonStyles.buttonSemiBold} style={authenButton}>Sign up</button>
                </a>
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