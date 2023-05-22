import styles from './Footer.module.css'
export const Footer = () => {
    return (
        <div className={styles.footer}>
                <p>@DIGIWHIZ2019</p>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
    )
}