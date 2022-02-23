import styles from "../styles/Rightbar.module.css"
import {downArrow,walletIcon,rightArrow,customLinkIcon,cancelIcon} from "./AllSvg.js"

const RightBar = () => {
    return (
        <div className={styles.rightContainer}>
            <div className={styles.rightbarItemHolder}>
                <div className={styles.rightbarItem}>
                    <img className={styles.itemImage} src="data:image/png;base64,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" alt="" />
                    <p>Avalanche</p>
                    {downArrow()}
                </div>
                <div className={`${styles.rightbarItem} ${styles.itemWallet}`}>
                    {walletIcon()}
                    <p>OXF6...1353</p>
                    {downArrow()}
                </div>
            </div>
            <p className={styles.linkText}>
                {rightArrow()}
                Custom Link
            </p>
            <p className={styles.link}>https://testnet.xyz.xyz/trade?ref=</p>
            <input className={styles.input} type="text" placeholder="ENTER" />
            <div className={`${styles.rightbarItemHolder} ${styles.btnGrp}`}>
                <div className={`${styles.rightbarItem} ${styles.button}`}>
                    {customLinkIcon()}
                    <p>Custom Link</p>
                </div>
                <div className={`${styles.rightbarItem} ${styles.button} ${styles.cancelBtn}`}>
                    {cancelIcon()}
                    <p>Cancel</p>
                </div>
            </div>
        </div>
    )
}

export default RightBar

