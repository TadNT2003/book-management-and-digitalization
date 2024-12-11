"use client"
import React, { createContext, ForwardRefRenderFunction, useContext, useState } from 'react'
// import '@fortawesome/fontawesome-free/css/all.min.css'
import mock_logo from '@/assets/mock/mangadex-wordmark.svg'
import styles from './CSS/sidebar.module.css'
import { ChevronFirst, ChevronLast } from 'lucide-react'
import { sidebarNavigationTitle } from '@/constants/sidebarNavigation'
import { 
    House,
    FileScan,
    UserCircle,
    PenLine,
    UsersRound,
    BarChart3,
    Settings
 } from 'lucide-react'  
import { useRouter } from 'next/navigation'

export const SidebarContext = createContext(true)
type SidebarItemInput = {
    icon: React.JSX.Element,
    text: sidebarNavigationTitle,
    active: sidebarNavigationTitle,
    onClick: string,
}
export const SidebarItem = ({icon, text, active, onClick}: SidebarItemInput) => {
    const [isHover, setIsHover] = useState(false);
    const expand = useContext(SidebarContext)
    const handleMouseEnter = () => {
        setIsHover(true)
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const route = useRouter()

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
        <li style={navigatorItemStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => route.push(onClick)}>
            {icon}
            <span className={styles.navigatorTitleStyle} style={{display: expand? 'block': 'none', overflow: 'hidden'}}>{text}</span>
        </li>
    )
}

type SidebarInput = {
    active: sidebarNavigationTitle,
    expand: boolean,
    setExpand: Function,
}
const SidebarForward: ForwardRefRenderFunction<HTMLElement, SidebarInput> = ({active, expand, setExpand}, ref) => {

  return (
        <aside ref={ref} style={sidebarStyle}>
            <nav style={navigatorStyle}>
                <div style={navHeaderStyle}>
                    <img src={mock_logo.src} alt="web logo" className={styles.logoStyle} style={{display: expand? 'block': 'none', overflow: 'hidden'}}/>
                    <button onClick={() => setExpand()} style={colapseButtonStyle}>
                        {expand? <ChevronFirst/>: <ChevronLast/>}
                    </button>
                </div>

                <SidebarContext.Provider value={expand}>
                <ul style={navigatorListStyle}>
                    <SidebarItem icon={<House size={20}/>} text={sidebarNavigationTitle.HOME} active={active} onClick={'/'}></SidebarItem>
                    <SidebarItem icon={<BarChart3 size={20}/>} text={sidebarNavigationTitle.MANAGEMENT} active={active} onClick={'/management'}></SidebarItem>
                    <SidebarItem icon={<FileScan size={20}/>} text={sidebarNavigationTitle.DIGITALIZATION} active={active} onClick={'/digitalization'}></SidebarItem>
                    <SidebarItem icon={<UsersRound size={20}/>} text={sidebarNavigationTitle.COMMUNITY} active={active} onClick={'/community'}></SidebarItem>
                    <SidebarItem icon={<PenLine size={20}/>} text={sidebarNavigationTitle.SELF_CREATION} active={active} onClick={'/self_creation'}></SidebarItem>

                    <SidebarItem icon={<Settings size={20}/>} text={sidebarNavigationTitle.SETTINGS} active={active} onClick={'/settings'}></SidebarItem>
                    <SidebarItem icon={<UserCircle size={20}/>} text={sidebarNavigationTitle.USER_PROFILE} active={active} onClick={'/profile'}></SidebarItem>
                </ul>
                </SidebarContext.Provider>

                <div style={SidebarFooterStyle}>

                </div>
            </nav>
        </aside>
  )
}

const Sidebar = React.forwardRef(SidebarForward)
export default Sidebar

const sidebarStyle = {
    height: '100%',
    // width: '20%',
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

// const logoStyle = {
//     width: '8rem',
//     display: 'block',
//     padding: '0.375rem'
// }

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