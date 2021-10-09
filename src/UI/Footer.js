import styles from '../static/css/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube, faFacebook, faTwitter, faInstagram,faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <footer className={
            styles.footer
        }>
            <div className={
                styles.links
            }>
                <a href="#" className={styles.youtube}>
                    <FontAwesomeIcon icon={faYoutube}
                        size="2x"/>
                </a>
                <a href="#" className={styles.facebook}>
                    <FontAwesomeIcon icon={faFacebook}
                        size="2x"/>
                </a>
                <a href="https://www.linkedin.com/in/satyam-vashistha-432a81149/" className={styles.twitter}>
                    <FontAwesomeIcon icon={faLinkedinIn}
                        size="2x"/>
                </a>
                <a href="#" className={styles.instagram}>
                    <FontAwesomeIcon icon={faInstagram}
                        size="2x"/>
                </a>
            </div>
        </footer>
    )
}
export default Footer;
