import React, { useState, useEffect } from 'react'
import Image from "next/image";
import styles from './Featured.module.css'
export const Featured = () => {
    const [imgData, setImgData] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [activeIndex, setActiveIndex] = useState(0)
    const featureList = ['All','Green Building', 'Healthcare', 'Interior Design', 'Office' ]

    useEffect(() => {
        const getImgData = async () => {
            const res = await fetch('https://digiwhiz.vercel.app/api/imageData')
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
                    {
                        featureList?.map((item,index)=>
                        <li key={index} 
                            onClick={(e) => {setActiveIndex(index); setSelectedCategory(e.target.innerText.toLowerCase())}}
                            style={{color:`${activeIndex==index ? 'orange':'#212121'}`}}
                            >{item}</li>) 
                    }
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