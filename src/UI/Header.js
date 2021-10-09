import { NavLink } from 'react-router-dom';
import styles from '../static/css/Header.module.css'
const Header=()=>{
    return(
        <header className={styles.head}>
            <div className={styles.nav}>
                <ul>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><a href="#">Background</a></li>
                    <li><NavLink to="/work">Work</NavLink></li>
                </ul>
            </div>
        </header>
    )
}
export default Header;