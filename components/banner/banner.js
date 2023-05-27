import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from "next/image";
import styles from './Banner.module.css'
export const Banner = () => {
    return (
        <div className={styles.bannerWrapper}>
            <Splide aria-label="My Favorite Images" options={{ type: 'loop', pagination: true }}>
                <SplideSlide>
                    <div className={styles.banner}>
                        <Image src="/BingWallpaper.png" alt="Image 1" height={699} width={1900} />
                    </div>
                    <div className={styles.bannerTextWrapper}>
                    </div>
                    <div className={styles.bannerText}>
                            <h3>We Do Big Things With Big Ideas </h3>
                            <p>Talk To Our Experts and Get Your Dream Home Done. If you dream of designing
                                a new home that takes full advantage  of the unique geography and
                                views of land that you love</p>
                            <button>Explore Now</button>
                        </div>
                </SplideSlide>
                <SplideSlide>
                    <div className={styles.banner}>
                        <Image src="/BingWallpaper.png" alt="Image 1" height={699} width={1900} />
                    </div>
                    <div className={styles.bannerTextWrapper}>
                    </div>
                    <div className={styles.bannerText}>
                            <h3>We Do Big Things With Big Ideas </h3>
                            <p>Talk To Our Experts and Get Your Dream Home Done. If you dream of designing
                                a new home that takes full advantage  of the unique geography and
                                views of land that you love</p>
                            <button>Explore Now</button>
                        </div>
                </SplideSlide>
                <SplideSlide>
                    <div className={styles.banner}>
                        <Image src="/BingWallpaper.png" alt="Image 1" height={699} width={1900} />
                    </div>
                    <div className={styles.bannerTextWrapper}>
                    </div>
                    <div className={styles.bannerText}>
                            <h3>We Do Big Things With Big Ideas </h3>
                            <p>Talk To Our Experts and Get Your Dream Home Done. If you dream of designing
                                a new home that takes full advantage  of the unique geography and
                                views of land that you love</p>
                            <button>Explore Now</button>
                        </div>
                </SplideSlide>
                
            </Splide>
        </div>
    )
}