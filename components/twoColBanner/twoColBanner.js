import Image from "next/image";
import styles from './TwoColBanner.module.css';
export const TwoColBanner = () => {
    return (
        <div className={styles.twoColBanner}>
            <Image
                src='/twoCol.png'
                alt='BuildX logo'
                width={400}
                height={400}
            />
            <div className={styles.rightWrapper}>
                <div className={styles.info}>
                    <Image
                        src='/builder.png'
                        alt='BuildX logo'
                        height={76}
                        width={69}
                    />
                    <div className={styles.text}>
                        <h6>GENERAL BUILDER</h6>
                        <p>Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis persequeris neglegentur, facete commodo ea use possit lucilius.</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <Image
                        src='/extension.png'
                        alt='BuildX logo'
                        height={65}
                        width={65}
                    />
                    <div className={styles.text}>
                        <h6>HOUSE EXTENSIONS</h6>
                        <p>Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis persequeris neglegentur, facete commodo ea use possit lucilius.</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <Image
                        src='/refurbishment.png'
                        alt='BuildX logo'
                        height={67}
                        width={67}
                    />
                    <div className={styles.text}>
                        <h6>REFURBISHMENT</h6>
                        <p>Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis persequeris neglegentur, facete commodo ea use possit lucilius.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}