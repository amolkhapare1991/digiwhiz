import styles from './Quote.module.css'
export const Quote = () => {
    return (
        <div className={styles.quote}>
            <p className={styles.info}>Consulting and estimate for your project, <a href='/'>Contact Us Today</a></p>
            <div>
            <button>Get a quote</button>
            </div>
            
        </div>
    )
}