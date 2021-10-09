import { useEffect, useRef, useState } from "react"
import styles from './TypingSpeed.module.css'
const TypingSpeed=()=>{
    const[isGameStarted,setIsGameStarted]=useState(false);
    
    const[input,setInput]=useState('');
    const[result, setResult]=useState(null);
    const inputref=useRef(input);
            
    const fetchResult=()=>{
        
        
        setResult(inputref.current.split(' ').length);
        setIsGameStarted(false);
       
        setInput('');
    }
    const startGame=event=>{
        setIsGameStarted(true);
        
    }
    const onChangeHandler=event=>{
        if(input.length==0){
            setTimeout(()=>{
                fetchResult();
            },60000)
        }
        setInput(event.target.value);
       inputref.current=input;
       console.log(input);
        
        
    }
    return(
        <div className={styles.main}>
            <h2>Test your Typing Speed..</h2>
            <br/>
           {!isGameStarted && <button onClick={startGame} className={styles.startbtn}>Start</button>}
           
           {isGameStarted && <div className={styles.box}>
                <textarea onKeyUp={onChangeHandler}></textarea>
           </div>}
           {result && <h2>{`Your typing speed is ${result} words per minute..`}</h2>}
        </div>
    )
}
export default TypingSpeed;