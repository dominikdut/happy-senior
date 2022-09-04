import styles from './Main.module.scss'
import {AboutCompanyComponent} from "../AboutCompany/AboutCompany.component";
import {ContactComponent} from "../Contact/Contact.component";

export const Main = (props) => {
    return (
        <main className={styles.main}>
           <img className={styles.image} src={`https://www.westend61.de/images/0001141513pw/young-nurse-serving-food-and-drink-to-elderly-people-at-table-in-nursing-home-MASF11166.jpg`} />
            <div className={styles.main__content}>
                <div className={`o-body-container`}>
                    <div className={styles.slogan}>
                        <h2>SLOGAN</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </div>
            <div className={`o-body-container`}>
                <AboutCompanyComponent />
            </div>
            <div className={styles.main__content}>
                <div className={`o-body-container`}>
                    <ContactComponent />
                </div>
            </div>
        </main>
    )
}
