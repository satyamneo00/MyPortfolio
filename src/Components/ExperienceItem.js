
import styles from '../static/css/About.module.css'
const ExperienceItem =props=>{
    return (
        <div className={styles.expitem}>
                <h2>{props.exp.title}</h2>
                <h3>{props.exp.company}</h3>
                <h4>{props.exp.project}</h4>
                <h4>{props.exp.description}</h4>
        </div>
    )
}
export default ExperienceItem;