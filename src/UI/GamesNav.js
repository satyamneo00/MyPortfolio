import { useState } from "react"
import Games from "../Games/Games"
import styles from '../static/css/GamesNav.module.css'
const GamesNav = (props) => {
    const activeClass=`nav-link active ${styles.navbtn}`
    const inactiveClass=`nav-link ${styles.navbtn}`
    const[classG1,setClassG1]=useState(`nav-link active ${styles.navbtn}`)
    const[classG2,setClassG2]=useState(`nav-link  ${styles.navbtn}`)
    const games={
        G1:'Typing',
        G2:'TTT'
    }
    const G1Handler=event=>{
        setClassG1(activeClass)
        setClassG2(inactiveClass)
        props.changeHandler(games.G1);
    }
    const G2Handler=event=>{
        setClassG1(inactiveClass)
        setClassG2(activeClass)
        props.changeHandler(games.G2);
    }
    return (
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <button onClick={G1Handler} className={classG1} href="#">Typing Speed</button>
            </li>
            <li class="nav-item">
                <button onClick={G2Handler} className={classG2} href="#">Tic Tac Toe</button>
            </li>

        </ul>
    )
}
export default GamesNav;
