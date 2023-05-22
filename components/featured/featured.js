import React, { useState, useEffect } from 'react'
import Image from "next/image";
import styles from './Featured.module.css'
export const Featured = () => {
    const [imgData, setImgData] = useState([])

    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        const getImgData = async () => {
            const res = await fetch('http://localhost:3000/api/imageData')
            const imgRes = await res.json()
            if (selectedCategory == null || selectedCategory == 'all') {
                setImgData(imgRes)
            } else {
                setImgData(imgRes?.filter((i) => i?.category.toLowerCase() == selectedCategory.toLowerCase()))
            }
        }
        getImgData()
    }, [selectedCategory])

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h3>Featured Works</h3>
                <p>Lorem ipsum dolor sit amet, sed dicunt oporteat cu, laboramus definiebas cum et. Duo id omnis persequeris neglegentur, facete commodo ea usu, possit lucilius sed ei. Esse efficiendi scripserit eos ex. Sea utamur iisque salutatus id.Mel autem animal.</p>
            </div>
            <div>
                <ul className={styles.navList}>
                    <li onClick={(e) => setSelectedCategory(e.target.innerText.toLowerCase())}>All</li>
                    <li onClick={(e) => setSelectedCategory(e.target.innerText.toLowerCase())}>Green Building</li>
                    <li onClick={(e) => setSelectedCategory(e.target.innerText.toLowerCase())}>Healthcare</li>
                    <li onClick={(e) => setSelectedCategory(e.target.innerText.toLowerCase())}>Interior Design</li>
                    <li onClick={(e) => setSelectedCategory(e.target.innerText.toLowerCase())}>Office</li>
                </ul>
                <ul className={styles.imgGrid}>
                    {
                        imgData?.map((item, index) => <li key={index}>
                            <Image src={item?.img} alt='Featured Image' height={400} width={400} />
                        </li>)
                    }
                </ul>

            </div>
        </div>
    )
}