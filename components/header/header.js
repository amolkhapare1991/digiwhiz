import Link from 'next/link'
import Image from "next/image";
import styles from './Header.module.css'
export const Header = () => {
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
                <div className={styles.navWrapper}>
                    <nav>
                        <Link href="/">About</Link>
                        <Link href="/features">Features</Link>
                        <Link href="/project">Project</Link>
                        <Link href="/pages">Pages</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                    <Image
                        src='/search.png'
                        alt='Search'
                        height={14}
                        width={14}
                    />
                </div>

            </div>
        </div>
    )
}