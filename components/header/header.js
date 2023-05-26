import React, {useState} from 'react'
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/router";
import styles from './Header.module.css'
export const Header = () => {
    const router = useRouter();
    const [hamburgerState, setHamburgerState] = useState(false)
    return (
        <div>
            <div className={styles.headWrapperOne}>
                <p>Have any question?</p>
                <div className={styles.contact}>
                    <div className={styles.email}>
                        <Image
                            src='/email.png'
                            alt='email logo'
                            height={15}
                            width={20}
                        />
                        <span>contact@gmail.com</span>
                    </div>
                    <div className={styles.telephone}>
                        <Image
                            src='/telephone.png'
                            alt='telephone logo'
                            height={15}
                            width={15}
                        />
                        <span>+08006743434</span>
                    </div>
                </div>
            </div>
            <div className={styles.header}>
                <Image
                    src='/logo.png'
                    alt='BuildX logo'
                    height={43}
                    width={123}
                />
                <div className={`${styles.navWrapper} ${hamburgerState ? styles.mobileNav :''}`}>
                    <nav>
                        <Link style={{color:`${router.pathname == "/" ? 'orange' : 'black'}`}} href="/">About</Link>
                        <Link style={{color:`${router.pathname == "/features" ? 'orange' : 'black'}`}} href="/features">Features</Link>
                        <Link style={{color:`${router.pathname == "/project" ? 'orange' : 'black'}`}} href="/project">Project</Link>
                        <Link style={{color:`${router.pathname == "/pages" ? 'orange' : 'black'}`}} href="/pages">Pages</Link>
                        <Link style={{color:`${router.pathname == "/contact" ? 'orange' : 'black'}`}} href="/contact">Contact</Link>
                    </nav>
                    <Image
                        src='/search.png'
                        alt='Search'
                        height={14}
                        width={14}
                    />
                </div>
                <Image className={styles.hamburger}  onClick={()=>setHamburgerState(!hamburgerState)}
                        src='/hamburger.png'
                        alt='Hamburger'
                        height={22}
                        width={22}
                    />
            </div>
        </div>
    )
}