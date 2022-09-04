import styles from './Contact.module.scss'
import AppContext from "../../infrastruture/appContext";
import {useContext} from "react";

export const ContactComponent = (props) => {
    const { contact } = useContext(AppContext);
    return (
        <div ref={contact} className={styles.contact__wrapper}>
            <div className={styles.contact__container}>
                <h2>Kontakt</h2>
                <a href={`tel:+48666666666`}>Telefon: +48 666 666 666</a>
                <a href={`mailto:happyseniorresthome@gmail.com`}>Adres e-mail: happyseniorresthome@gmail.com</a>
                <iframe
                    className={styles.contact__iframe}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2332.121517833512!2d17.753619215871964!3d54.23103798017395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fdf591930ae061%3A0x107fcda4156b5958!2sHappy%20senior!5e0!3m2!1spl!2spl!4v1662225385031!5m2!1spl!2spl"
                    width="auto" height="450" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}
