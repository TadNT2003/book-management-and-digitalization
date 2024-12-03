"use client"
import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import mock_logo from '@/assets/mock/mangadex-wordmark.svg'
import { ChevronFirst } from 'lucide-react'
import { sidebarNavigationTitle } from '@/constants/sidebarNavigation'
import { 
    House,
    FileScan,
    UserCircle,
    PenLine,
    UsersRound,
    BarChart3,
    LayoutDashboard,
    Settings
 } from 'lucide-react'  

type SidebarItemInput = {
    icon: React.JSX.Element,
    text: sidebarNavigationTitle,
    active: sidebarNavigationTitle,
    alert?: string,
}
export const SidebarItem = ({icon, text, active, alert}: SidebarItemInput) => {
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true)
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const navigatorItemStyle = {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
        fontWeight: '500',
        borderRadius: '0.375rem',
        backgroundColor: text===active? 'rgb(254 215 170)': isHover? 'rgb(238 242 255)': 'inherit'
    } as const;
    
    return (
        <li style={navigatorItemStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {icon}
            <span style={navigatorTitleStyle}>{text}</span>
        </li>
    )
}

type SidebarInput = {
    active: sidebarNavigationTitle
}
export default function Sidebar({active}: SidebarInput) {
  return (
        <aside style={sidebarStyle}>
            <nav style={navigatorStyle}>
                <div style={navHeaderStyle}>
                    <img src={mock_logo.src} alt="web logo" style={logoStyle}/>
                    <button style={colapseButtonStyle}>
                        <ChevronFirst/>
                    </button>
                </div>

                <ul style={navigatorListStyle}>
                    <SidebarItem icon={<House size={20}/>} text={sidebarNavigationTitle.HOME} active={active}></SidebarItem>
                    <SidebarItem icon={<BarChart3 size={20}/>} text={sidebarNavigationTitle.MANAGEMENT} active={active}></SidebarItem>
                    <SidebarItem icon={<FileScan size={20}/>} text={sidebarNavigationTitle.DIGITALIZATION} active={active}></SidebarItem>
                    <SidebarItem icon={<UsersRound size={20}/>} text={sidebarNavigationTitle.COMMUNITY} active={active}></SidebarItem>
                    <SidebarItem icon={<PenLine size={20}/>} text={sidebarNavigationTitle.SELF_CREATION} active={active}></SidebarItem>

                    <SidebarItem icon={<Settings size={20}/>} text={sidebarNavigationTitle.SETTINGS} active={active}></SidebarItem>
                    <SidebarItem icon={<UserCircle size={20}/>} text={sidebarNavigationTitle.USER_PROFILE} active={active}></SidebarItem>
                </ul>

                <div style={SidebarFooterStyle}>

                </div>
            </nav>
        </aside>
  )
}


const sidebarStyle = {
    height: '100%',
    width: '20%',
    position: 'fixed',
} as const

const navigatorStyle = {
    height: '100%',
    display: 'flex',
    backgroundColor: '#FFF',
    flexDirection: 'column',
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
} as const;

const navHeaderStyle = {
    padding: '1rem',
    paddingBottom: '0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const logoStyle = {
    width: '8rem',
    display: 'block',
    padding: '0.375rem'
}

const colapseButtonStyle = {
    padding: '0.375rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgb(249 250 251)',
    "&:hover": {
        backgroundColor: 'rgb(243 244 246)'
    }
}

const navigatorListStyle = {
    flex: '1 1 0%',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem'
}


const navigatorTitleStyle = {
    width: '13rem',
    marginLeft: '0.75rem'
}

const SidebarFooterStyle = {
    display: 'flex',
    borderTopWidth: '1px',
    padding: '0.75rem'
}