import styles from '../static/css/About.module.css'
import profilepic from '../static/images/profile.png'
const Intro = () => {
    return (

        <div className={
            styles.imagecard
        }>
            <div className={
                styles.img
            }>
                <img src={profilepic}></img>
            </div>
            <div className={
                styles.about
            }>
                <h2>
                    <b>Satyam Vashistha</b>
                </h2>
                <h3>I am a full stack Web Developer with industry experience of more than 3 years.</h3>
                <h4>I expertise in JavaScript, React, .NET API and MVC and more...</h4>
            </div>
        </div>

    )
}
export default Intro
