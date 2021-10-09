import styles from '../static/css/Landing.module.css'
import Typewriter from "typewriter-effect";
const Landing = () => {
    return (
        <div className={
            styles.banner
        }>
            <div className={
                styles.card
            }>
                <Typewriter
                onInit={
                (typewriter) => {

                    typewriter.typeString("Satyam Vashistha").pauseFor(1000).deleteAll().typeString("Web Developer").start();
                }
            }
            />
            </div>
        </div>
    )
}

export default Landing;
