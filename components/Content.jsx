import styles from '../styles/Content.module.css'
import { useEffect, useState } from "react"
import Image from "next/image";
import image from '../public/image.png'
import { customLinkIcon,
    customLinkIconSmall,
    copyIcon,
    moneyBag,
    bitCoinIcon,
    closeIcon,
    walletIcon } from "./AllSvg.js"


const Content = () => {

    const [data, setData] = useState([])

    async function getData() {
        const rawData = await fetch('https://raw.githubusercontent.com/akshita151199/APIs/main/data')
        const tempData = await rawData.json()
        if (data)
            setData(tempData.data)

    }

    function formatValue(input){
        if(input)
        {
            if(input.length>12)
            {
                const firstLetters=input.substring(0,5)
                const lastLetters=input.substring(input.length,input.length-7)
                const formatedValue = firstLetters+".."+lastLetters
                return formatedValue
            }
            else
            return input

        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={styles.content}>
            <div className={styles.top}>
                <a className={`${styles.active} ${styles.text_colorPrimary}`}>
                    Section
                </a>
                <div className={`${styles.bg_colorPrimary} ${styles.text_colorPrimary} ${styles.topItem} ${styles.flex_center}`}>
                    {walletIcon()}
                    <p>0.2 $XYZ</p>
                    <div className={`${styles.bg_colorSecondary} ${styles.text_colorTertiary} ${styles.bdr_radiusSmall}`}>
                        <p>Tier I</p>
                    </div>
                </div>
            </div>

            <div className={styles.gridContainer}>
                <div className={`${styles.gridItem1} ${styles.bg_colorSecondary} `}>
                    <div className={`${styles.item} ${styles.text_colorPurple}`}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <a className={styles.bg_colorWhite}>Tutorial</a>
                        <div className={styles.img}>
                            <Image src={image} alt="image" />
                        </div>
                        <a className={styles.closeBtn}>
                        {closeIcon()}
                        </a>
                    </div>
                </div>
                <div className={`${styles.gridItem2} ${styles.text_colorPrimary} ${styles.bg_colorPrimary}`}>
                    <p>Your rewards</p>
                    <div className={`${styles.gridItem2BtnContainer} ${styles.flex_center}`}>
                        <p>$ 0.26231428</p>
                        <div className={`${styles.gridItem2Btn}  ${styles.flex_center} ${styles.bg_colorTertiary}`}>
                            {customLinkIcon()}
                            <a>Custom link</a>
                        </div>
                    </div>
                    <div className={styles.tag}>
                        <p>$40 AVAX</p>
                        <p>$10 BNB</p>
                        <p>$210 BTC</p>
                    </div>
                </div>
                <div className={`${styles.gridItem3} ${styles.bg_colorPrimary} ${styles.text_colorSecondary}`}>
                    <div className={`${styles.text_colorPrimary} ${styles.flex_center}`}>
                        {moneyBag()}
                        <p >12.5% of fee</p>
                    </div>
                    <p className={styles.gridItem3Text}>Your Referral Link for xyz</p>
                    <div className={`${styles.inputContainer} ${styles.flex_center}`}>
                        <input className={styles.text_colorPrimary} type="text" defaultValue={'https://unityexchange.design'} />
                        {copyIcon()}
                    </div>

                </div>
                <div className={`${styles.gridItem3} ${styles.bg_colorPrimary} ${styles.text_colorSecondary}`}>
                    <div className={`${styles.text_colorPrimary} ${styles.flex_center}`}>
                        {moneyBag()}
                        <p>12.5% of fee</p>
                    </div>
                    <p className={styles.gridItem3Text}>Your Referral Link for xyz</p>
                    <div className={`${styles.inputContainer} ${styles.flex_center}`}>
                        <input className={styles.text_colorPrimary} type="text" defaultValue={'https://unityexchange.design'} />
                        {copyIcon()}
                    </div>

                </div>
            </div>
            <div className={`${styles.bottomBtnGrp} ${styles.text_colorPrimary}`}>
                <a className={styles.active}>First Tab</a>
                <a>Second Tab</a>
            </div>
                <table className={styles.text_colorPrimary}>
                    <thead>
                        <tr>
                            <th className={`${styles.bg_colorPrimary} ${styles.text_colorSecondary}` }>ASSET</th>
                            <th className={`${styles.bg_colorPrimary} ${styles.text_colorSecondary}` }>AMOUNT</th>
                            <th className={`${styles.bg_colorPrimary} ${styles.text_colorSecondary}` }>USER ACCOUNT</th>
                            <th className={`${styles.bg_colorPrimary} ${styles.text_colorSecondary}`}>REFERRAL EARNING</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr >
                            <th className={`${styles.bg_colorPrimary} ${styles.text_colorSecondary}`}>
                                <div className={`${styles.tableItem} ${styles.flex_center}`}>
                                    {bitCoinIcon()}
                                    <div className={styles.tableData}>
                                        <p className={`${styles.tableItemTextPrimary} ${styles.text_colorPrimary}`} >{data[0]?.asset}</p>
                                        <div className={styles.flex_center}>
                                            <p className={`${styles.tableItemTextSecondary} ${styles.text_colorSecondary}`}>{data[0]?.type}</p>
                                            <div className={`${styles.tableItemContent} ${styles.flex_center}`}>
                                                <img className={styles.tableItemCardImg} src={data[0]?.chain.img} alt="image" />
                                                <p>{data[0]?.chain.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th className={`${styles.bg_colorPrimary} ${styles.text_colorSecondary}`}>
                                <p className={`${styles.tableItemTextPrimary} ${styles.text_colorPrimary}`}>{`${data[0]?.amount} BNB`} </p>
                                <p className={`${styles.tableItemTextSecondary} ${styles.text_colorSecondary}`} >{data[0]?.state}</p>
                            </th>
                            <th className={`${styles.bg_colorPrimary} ${styles.text_colorSecondary}`}>
                                <p className={`${styles.tableItemTextPrimary} ${styles.text_colorPrimary}`}> {formatValue(data[0]?.user)}</p>
                            </th>
                            <th className={`${styles.bg_colorPrimary} ${styles.text_colorSecondary}`}>
                                <p className={`${styles.tableItemTextPrimary} ${styles.text_colorPrimary}`}>{`${data[0]?.referral_earnings} BNB`}</p>
                                <div className={`${styles.tableItemLink} ${styles.flex_center}`}>
                                    <p className={`${styles.tableItemTextSecondary} ${styles.text_colorSecondary}`} >View on BSC Scan</p>
                                    {customLinkIconSmall()}
                                </div>
                            </th>
                        </tr>
                    </tbody>

                </table>
        </div>
    )
}

export default Content