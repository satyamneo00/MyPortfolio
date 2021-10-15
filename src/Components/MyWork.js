import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../static/css/MyWork.module.css'
const MyWork = () => {

    return (
        <div className={
            styles.mywork
        }>
            <div className={
                styles.neatform
            }>
                <h3>NeatForm: A React Library.</h3>
                <div className={
                    styles.seprator
                }></div>
                <p>
                    NeatForm provides a resuable Form component. You can use NeatForm to quickly create different kind of forms without having to worry about writing JSX, CSS and managing Form states for Form Validation. Neat Form comes with built in basic form validations for Email, Password, Number and required fields. Try neat-forms if you're a React developer. NeatForms is cool.
                </p>
                <h5>To get Started:</h5>
                <code>npm install neat-forms</code>
                <br/>
                <br/>
                <p>Follow the below links to get detailed documentations and guide to use NeatForms:</p>
                <a href="https://github.com/satyamneo00/NeatForm" className={styles.github}>
                    
                    <FontAwesomeIcon icon={faGithub}
                        size="2x"/> 
                </a>

                <a href="https://www.npmjs.com/package/neat-forms" className={styles.npm}>
                    
                    <FontAwesomeIcon icon={faNpm}
                        size="2x"/> 
                </a>
            </div>
        </div>
    )
}

export default MyWork;
