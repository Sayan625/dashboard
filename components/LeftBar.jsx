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
    langIcon} from "./AllSvg.js"

function LeftBar() {

    return (
        <div className={styles.leftContainer}>
            <div className={styles.header}>
                <div className={styles.headerText}>
                    <div className={styles.circle}>N</div>
                    <p>Name</p>
                </div>
                {menuIcon()}
            </div>
            <div className={styles.menu}>
                <div className={styles.menuItem}>
                    {homeIcon()}
                    <p className={styles.menuText}>Home</p>
                </div>
                <div className={styles.menuItem}>
                    {sec1Icon()}
                    <p className={styles.menuText}>Section 1</p>
                </div>
                <div className={styles.menuItem}>
                    {sec2Icon()}
                    <p className={styles.menuText}>Section 2</p>
                </div>
                <div className={styles.menuItem}>
                    {sec3Icon()}
                    <p className={styles.menuText}>Section 3</p>
                </div>
                <div className={styles.menuItem}>
                    {sec4Icon()}
                    <p className={styles.menuText}>Section 4</p>
                </div>
                <div className={styles.menuItem}>
                    {sec5Icon()}

                    <p className={styles.menuText}>Section</p>
                </div>
                <div className={styles.menuItem}>
                {sec6Icon()}
                    <p className={styles.menuText}>Section 6</p>
                </div>
                <div className={styles.menuItem}>
                    {sec7Icon()}
                    <p className={styles.menuText}>Section 7</p>
                </div>
                <div className={`${styles.menuItem} ${styles.active}`}>
                    {sec8Icon()}
                    <p className={styles.menuText}>Section 8</p>
                </div>
                <div className={styles.menuItem}>
                    {docIcon()}
                    <p className={styles.menuText}>Documentation</p>
                </div>

            </div>

            <div className={styles.bottom}>
                <div className={styles.bottomItemHolder}>
                    <div className={styles.bottomItem}>
                        <div className={styles.circle}>N</div>
                        <p className={styles.bottomText}>$0.90</p>
                    </div>
                    <div className={`${styles.bottomItem} ${styles.bottomTextBG}`}>
                        <p className={`${styles.bottomText} ${styles.bottomTextColor}`}>Buy $XYZ</p>
                    </div>
                </div>
                <div className={styles.bottomItemHolder}>
                    <div>
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3838 0.116333C4.83425 0.116333 0.340332 4.83381 0.340332 10.6464C0.340332 16.459 4.83425 21.1765 10.3838 21.1765C15.9434 21.1765 20.4473 16.459 20.4473 10.6464C20.4473 4.83381 15.9434 0.116333 10.3838 0.116333ZM17.3509 6.43439H14.3851C14.0634 5.11813 13.6009 3.85452 12.9977 2.68568C14.8475 3.34907 16.3857 4.69692 17.3509 6.43439ZM10.3938 2.26447C11.2283 3.52808 11.8817 4.92858 12.314 6.43439H8.47361C8.90591 4.92858 9.55939 3.52808 10.3938 2.26447ZM2.61242 12.7524C2.45157 12.0785 2.35103 11.373 2.35103 10.6464C2.35103 9.91985 2.45157 9.21433 2.61242 8.54041H6.01051C5.93008 9.23539 5.86976 9.93038 5.86976 10.6464C5.86976 11.3625 5.93008 12.0575 6.01051 12.7524H2.61242ZM3.43681 14.8585H6.40259C6.7243 16.1747 7.18676 17.4383 7.78997 18.6072C5.94013 17.9438 4.40195 16.6065 3.43681 14.8585ZM6.40259 6.43439H3.43681C4.40195 4.68639 5.94013 3.34907 7.78997 2.68568C7.18676 3.85452 6.7243 5.11813 6.40259 6.43439ZM10.3938 19.0284C9.55939 17.7648 8.90591 16.3643 8.47361 14.8585H12.314C11.8817 16.3643 11.2283 17.7648 10.3938 19.0284ZM12.7463 12.7524H8.04131C7.95083 12.0575 7.88046 11.3625 7.88046 10.6464C7.88046 9.93038 7.95083 9.22486 8.04131 8.54041H12.7463C12.8368 9.22486 12.9072 9.93038 12.9072 10.6464C12.9072 11.3625 12.8368 12.0575 12.7463 12.7524ZM12.9977 18.6072C13.6009 17.4383 14.0634 16.1747 14.3851 14.8585H17.3509C16.3857 16.5959 14.8475 17.9438 12.9977 18.6072ZM14.7772 12.7524C14.8576 12.0575 14.9179 11.3625 14.9179 10.6464C14.9179 9.93038 14.8576 9.23539 14.7772 8.54041H18.1752C18.3361 9.21433 18.4366 9.91985 18.4366 10.6464C18.4366 11.373 18.3361 12.0785 18.1752 12.7524H14.7772Z" fill="#808191" />
                    </svg>
                    <div className={styles.itemToggle}>
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