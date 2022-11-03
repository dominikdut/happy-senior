import styles from './Contact.module.scss'
import AppContext from "../../infrastruture/appContext";
import {useContext} from "react";

export const ContactComponent = (props) => {
    const { contact } = useContext(AppContext);
    return (
        <div ref={contact} className={styles.contact__wrapper}>
            <div className={styles.contact__container}>
                <h2>Kontakt</h2>
                <div className={styles.contact__linksContainer}>
                    <a href={`tel:+48666666666`}>Telefon: +48 666 666 666</a>
                    <a href={`mailto:happyseniorresthome@gmail.com`}>Adres e-mail: happyseniorresthome@gmail.com</a>
                </div>
            </div>
        </div>
    )
}
