import styles from './Navigation.module.scss'
import { useContext } from "react";
import AppContext from "../../infrastruture/appContext";

export const Navigation = (props) => {
    const { contact, aboutCompany } = useContext(AppContext);
    const scrollToSection = (element) => {
        window.scrollTo({
            top: element.current.offsetTop,
            behavior: 'smooth',

        });
    };

    return (
        <nav className={styles.navigation__container}>
            <div className={`o-body-container`}>
                <div className={styles.navigation__header}>
                    <div className={styles.navigation__logo__container}>
                        <svg className={styles.navigation__svg} version="1.1" id="unavailable-photo-svg" xmlns="http://www.w3.org/2000/svg"
                             x="0px" y="0px"
                             viewBox="0 0 278.6 278.6">
                            <g>
                                <path d="M43.8,37.9c-0.9,0.8-1.8,1.7-2.6,2.6C14.9,66.7,0.3,101.7,0,139.1c-0.2,36.7,14,71.4,40,97.8
                                        c26.4,26.7,61.6,41.5,99.1,41.7l0.8,0c36.5,0,71.1-14.3,97.3-40.3c1.1-1.1,2.2-2.2,3.5-3.6l1-1.1L44.9,36.9L43.8,37.9z M71.3,95
                                        c-6.1,2.4-10.4,6.8-12.5,13c-1,2.8-1.5,5.8-1.5,8.8c-0.2,20.4-0.1,40.2-0.1,57c0,13.7,9.7,23.3,23.5,23.3c31.2,0,62.7,0,93.5,0
                                        c2.1,0,3.7,0.7,5.2,2.2c8.7,8.9,17.5,17.7,26,26.3l8.7,8.7l-1.3,1c-20.7,16.3-46.7,25.2-73.3,25.2c-32.1,0-62.4-12.4-85.3-35
                                        C33,204.7,20.3,177,18.3,147.3C16.3,117.9,25,89,42.9,66l1-1.3l29.4,29.5L71.3,95z M152.2,175.2c-3.4,1.9-7.7,2.9-12.5,2.9
                                        c-9,0-18.2-3.4-24-8.9c-11.4-10.7-14.7-25.9-8.6-38.7l0.9-1.9l45.9,45.6L152.2,175.2z"
                                />
                                <path d="M70.5,39.5c29-19.9,60.7-26.1,94.3-18.5c23.9,5.4,43.8,15.7,59.2,30.6c15.4,14.9,26.4,34.5,32.6,58.2
                                        c9.1,35.1,3.2,68-17.7,98l13.1,13.1c17.3-23.8,26.5-51.9,26.6-81.5C278.8,62.9,216.4,0.3,139.5,0l-0.6,0
                                        c-29.6,0-57.7,9.2-81.4,26.5L70.5,39.5z"
                                />
                                <path d="M138.2,107.2c0.6,0.6,1.7,1.1,2.6,1.1c6.4,0.6,11.8,2.2,16.3,5c10.2,6.3,15.9,15.6,16.8,27.5
                                        c0.1,1.5,0.7,2.6,1.9,3.8c5.9,5.8,11.9,11.8,17.7,17.6l1.3,1.3c5.6,5.6,11.2,11.3,16.9,17l6.2,6.2l1-1.7c1.9-3.3,2.8-7,2.8-11.3
                                        c0-19,0-37.7,0-56.5c0-2.2-0.3-4.4-0.8-6.5c-2.7-10.8-11.3-17.3-23-17.4c-7.9-0.1-15.9,0-23.5,0c-1.1,0-3.3,0-4.5-2.7
                                        c-0.7-1.6-1.5-3.2-2.3-4.8c-1-1.9-2-3.9-2.8-6c-1.7-4.1-4.6-5.9-9.4-5.9l-0.4,0c-9.8,0.1-19.9,0.2-30.1,0
                                        c-5.8-0.1-9.2,1.9-11.2,6.7c-0.1,0.4-0.2,0.7-0.3,0.9l-0.2,0.7L138.2,107.2z"
                                />
                            </g>
                        </svg>
                    </div>
                    <h1>Happy Senior</h1>
                    <div className={styles.navigation__links}>
                        <div onClick={() => scrollToSection(aboutCompany)}>O FIRMIE</div>
                        <div onClick={() => scrollToSection(contact)}>KONTAKT</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
