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

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className={styles.content}>
            <div className={styles.top}>
                <a className={`${styles.active} ${styles.textColorPrimary}`}>
                    Section
                </a>
                <div className={`${styles.bgColorPrimary} ${styles.textColorPrimary} ${styles.topItem}`}>
                    {walletIcon()}
                    <p>0.2 $XYZ</p>
                    <div className={`${styles.bgColorSecondary} ${styles.textColorTertiary} ${styles.bRadiusSmall}`}>
                        <p>Tier I</p>
                    </div>
                </div>
            </div>

            <div className={styles.gridContainer}>
                <div className={`${styles.gridItem1} ${styles.bgColorSecondary} `}>
                    <div className={`${styles.item} ${styles.textColorPurple}`}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <a className={styles.bgColorWhite}>Tutorial</a>
                        <div className={styles.img}>
                            <Image src={image} back alt="image" />
                        </div>
                        <a className={styles.closeBtn}>
                        {closeIcon()}
                        </a>
                    </div>
                </div>
                <div className={`${styles.gridItem2} ${styles.bgColorPrimary}`}>
                    <p>Your rewards</p>
                    <div className={styles.gridItem2BtnContainer}>
                        <p>$ 0.26231428</p>
                        <div className={styles.gridItem2Btn}>
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
                <div className={`${styles.gridItem3} ${styles.bgColorPrimary}`}>
                    <div>
                        {moneyBag()}
                        <p >12.5% of fee</p>
                    </div>
                    <p className={styles.gridItem3Text}>Your Referral Link for xyz</p>
                    <div className={styles.inputContainer}>
                        <input type="text" defaultValue={'https://unityexchange.design'} />
                        {copyIcon()}
                    </div>

                </div>
                <div className={`${styles.gridItem3} ${styles.bgColorPrimary}`}>
                    <div>
                        {moneyBag()}
                        <p>12.5% of fee</p>
                    </div>
                    <p className={styles.gridItem3Text}>Your Referral Link for xyz</p>
                    <div className={styles.inputContainer}>
                        <input type="text" defaultValue={'https://unityexchange.design'} />
                        {copyIcon()}
                    </div>

                </div>
            </div>
            <div className={`${styles.bottomBtnGrp} ${styles.textColorPrimary}`}>
                <a className={styles.active}>First Tab</a>
                <a>Second Tab</a>
            </div>
                <table>
                    <thead>
                        <tr>
                            <th className={styles.bgColorPrimary}>ASSET</th>
                            <th className={styles.bgColorPrimary}>AMOUNT</th>
                            <th className={styles.bgColorPrimary}>USER ACCOUNT</th>
                            <th className={styles.bgColorPrimary}>REFERRAL EARNING</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr >
                            <th className={styles.bgColorPrimary}>
                                <div className={styles.tableItem}>
                                    {bitCoinIcon()}
                                    <div className={styles.tableData}>
                                        <p className={styles.tableItemTextPrimary} >{data[0]?.asset}</p>
                                        <div className={styles.tableItemCard}>
                                            <p className={styles.tableItemTextSecondary}>{data[0]?.type}</p>
                                            <div className={styles.tableItemCardContent}>
                                                <img className={styles.tableItemCardImg} src={data[0]?.chain.img} alt="image" />
                                                <p>{data[0]?.chain.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th className={styles.bgColorPrimary}>
                                <p className={styles.tableItemTextPrimary}>{`${data[0]?.amount} BNB`} </p>
                                <p className={styles.tableItemTextSecondary} >{data[0]?.state}</p>
                            </th>
                            <th className={styles.bgColorPrimary}>
                                <p className={styles.tableItemTextPrimary}>0xFbE..0f58A7D</p>
                            </th>
                            <th className={styles.bgColorPrimary}>
                                <p className={styles.tableItemTextPrimary}>{`${data[0]?.referral_earnings} BNB`}</p>
                                <div className={styles.tableItemLink}>
                                    <p className={styles.tableItemTextSecondary} >View on BSC Scan</p>
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