import {useState} from 'react';
import Grid from './Grid';
import styles from './TicTacToe.module.css'
let grid = [
    [
        null, null, null
    ],
    [
        null, null, null
    ],
    [
        null, null, null
    ]
]
const TicTacToe = () => {
    const [turn, setTurn] = useState('X');
    const [gameStatus, setGameStatus] = useState('In Progress');
    const clickHandler = (index) => {
        const lastTurn = turn;
        if (grid[index.rowIdx][index.colIdx] == null) {
            grid[index.rowIdx][index.colIdx] = lastTurn;
            if (turn === 'X') {
                setTurn('O')
            } else {
                setTurn('X')
            }
        }
        const result = checkForWin(grid);
        if (result) {
            setGameStatus(lastTurn + ' WON!')
            setTimeout(()=>{
                resetGame();
            },1500)
        }
        if (checkForDraw(grid)) {
            setGameStatus('Draw')
            setTimeout(()=>{
                resetGame();
            },1500)
        }
    }
    const resetGame = () => {
       
        grid = Array(3).fill().map(() => Array(3).fill().map(() => null))
        setGameStatus('In Progress')
        setTurn('X')
    }
    const checkIfEqual = (a, b, c) => {
        if (!a || !b || !c) 
            return false;
        
        return a === b && b === c;
    }
    const checkForWin = (grid) => {
        const flatGrid = grid.reduce((acc, cur) => [
            ...acc,
            ...cur
        ], [])
        const [a, b, c, d, e, f, g, h, i] = flatGrid;
        return(checkIfEqual(a, b, c) || checkIfEqual(d, e, f) || checkIfEqual(g, h, i) || checkIfEqual(a, d, g) || checkIfEqual(b, e, h) || checkIfEqual(c, f, i) || checkIfEqual(a, e, i) || checkIfEqual(c, e, g))
    }
    function checkForDraw(grid) {
        const flatGrid = grid.reduce((acc, cur) => [
            ...acc,
            ...cur
        ], [])
        return(! checkForWin(grid) && flatGrid.filter(Boolean).length === flatGrid.length)
    }

    return (
        <div className={styles.tttgrid}>
            <h2>Turn: {turn}</h2>
            <button onClick={resetGame}>Reset Game</button>
            <h3>{gameStatus}</h3>
            <br/>
            <Grid  grid={grid}
                handleClickMain={clickHandler}/>
        </div>
    )

}
export default TicTacToe;
