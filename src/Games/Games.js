import TicTacToe from "./TicTacToe";
import TypingSpeed from "./TypingSpeed";
import styles from './Games.module.css'
import GamesNav from "../UI/GamesNav";
import { useState } from "react";
const Games=()=>{
    const[activeGame,setActiveGame]=useState('Typing')
    const gameChangeHandler=(game)=>{
        setActiveGame(game);
    }
    return(
        <div className={styles.games}>
            <h2>Games..</h2>
            <GamesNav changeHandler={gameChangeHandler}/>
            <br/>
            {activeGame==='Typing' &&<TypingSpeed/>}
            {activeGame==='TTT' && <TicTacToe/>}
            
        </div>
    )
}
export default Games;