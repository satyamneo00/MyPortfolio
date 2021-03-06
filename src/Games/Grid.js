import styles from './TicTacToe.module.css'
const Grid=({grid,handleClickMain}) =>{
    const handleClick=(index)=>{
        handleClickMain(index);
    }
    return (

        
      // Wrapping the grid with a div of inline-block means that the grid
      // takes up only the space defined by the size of the cells, while
      // still allowing us to use fractional values for the grid-template-*
      // properties
      
      <div  style={{ display: 'inline-block' }}>
        <div
          style={{
            // We set a background color to be revealed as the lines
            // of the board with the `grid-gap` property
            backgroundColor: '#000',
            display: 'grid',
            // Our rows are equal to the length of our grid
            gridTemplateRows: `repeat(${grid.length}, 1fr)`,
            // Our columns are equal to the length of a row
            gridTemplateColumns: `repeat(${grid[0].length}, 1fr)`,
            gridGap: 2,
          }}
        >
          {grid.map((row, rowIdx) =>
            row.map((cell, colIdx) => (
                
              // We put the colIdx first because that is our X-axis value
              // and the rowIdx second because that is our Y-axis value
              // Getting in the habit makes using 2d grids much easier
              <Cell key={`${colIdx}-${rowIdx}`} index={{rowIdx,colIdx}} cell={cell} onClickHandler={handleClick}/>
            ))
          )}
        </div>
      </div>
      
    )
  }
  
  const cellStyle = {
    backgroundColor: '#fff',
    height: 75,
    width: 75,
  }
  
  function Cell(props) {
      const handleClick=event=>{
        props.onClickHandler(props.index);
      }
      console.log(props.index.rowIdx+' '+props.index.colIdx)
    return <div className={styles.cellstyle}  onClick={handleClick}>
        <h1>{props.cell}</h1></div>
  }
export default Grid;