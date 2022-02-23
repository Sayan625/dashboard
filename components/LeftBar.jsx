import styles from "../styles/Leftbar.module.css"
import {menuIcon,
    homeIcon,
    sec1Icon,
    sec2Icon,
    sec3Icon,
    sec4Icon,
    sec5Icon,
    sec6Icon,
    sec7Icon,
    sec8Icon,
    docIcon,
    langIcon,
    toggleIcon} from "./AllSvg.js"

function LeftBar() {

    const menuItem=["Home","Section 1", "Section 2","Section 3","Section 4","Section","Section 6","Section 7","Section 8","Documentation"]

    return (
        <div className={styles.leftContainer}>
            <div className={`${styles.header} ${styles.flex_center} ${styles.justify_around} ${styles.color_white}`}>
                <div className={styles.headerText}>
                    <div className={`${styles.circle} ${styles.flex_center} ${styles.justify_center}`}>N</div>
                    <p>Name</p>
                </div>
                {menuIcon()}
            </div>
            <div className={styles.menu}>
                {
                    menuItem.map((element)=>{
                    let icon=null
                    if(element==="Home")
                    icon =homeIcon()
                    else if(element==="Section 1")
                    icon=sec1Icon()
                    else if(element==="Section 2")
                    icon=sec2Icon()                 
                    else if(element==="Section 3")
                    icon=sec3Icon()
                    else if(element==="Section 4")
                    icon=sec4Icon()
                    else if(element==="Section")
                    icon=sec5Icon()
                    else if(element==="Section 6")
                    icon=sec6Icon()
                    else if(element==="Section 7")
                    icon=sec7Icon()
                    else if(element==="Section 8")
                    {
                        icon=sec8Icon()
                            return (
                            <div className={`${styles.menuItem} ${styles.flex_center} ${styles.active} ${styles.color_white}`}>
                            {icon}
                            <a className={styles.menuText}>{element}</a>
                        </div>
                        )
                    }
                    else if(element==="Documentation")
                    icon=docIcon()

                    return(
                        <div className={`${styles.menuItem} ${styles.flex_center}`}>
                        {icon}
                        <a className={styles.menuText}>{element}</a>
                    </div>)
                    })
                }
            </div>

            <div className={styles.bottom}>
                
                <div className={`${styles.bottomItemHolder} ${styles.flex_center} ${styles.justify_between}`}>
                    <div className={`${styles.bottomItem} ${styles.flex_center} ${styles.color_white}`}>
                        <div className={`${styles.circle} ${styles.flex_center} ${styles.justify_center}`}>N</div>
                        <p className={styles.bottomText}>$0.90</p>
                    </div>
                    <div className={`${styles.bottomItem} ${styles.flex_center} ${styles.color_white} ${styles.bottomTextBG}`}>
                        <p className={`${styles.bottomText} ${styles.bottomTextColor}`}>Buy $XYZ</p>
                    </div>
                </div>
                <div className={styles.bottomItemHolder}>
                    <div className={`${styles.flex_center} ${styles.justify_between}`}>
                    {toggleIcon()}
                    <div className={`${styles.itemToggle} ${styles.flex_center} ${styles.justify_between}`}>
                        {langIcon()}
                        <div className={styles.circle}></div>
                    </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default LeftBar