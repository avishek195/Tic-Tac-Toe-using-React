import Card from "../Cards/Card";
import { useState } from "react";
import isWinning from "../../helper/helper";
import "./Grid.css"
import Button from "../Buttons/Button";
const Grid = ({cardNumber}) => {
    const [bord, setBord] = useState(Array(cardNumber).fill(''));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null);
    const play = (indx) => {
        if(turn && bord[indx] === ''){
            bord[indx] = "O";
        }
        else if(!turn && bord[indx] === ''){
            bord[indx] = "X"
        }
        const win = isWinning(bord, (turn) ? "O" : "X");
        if(win){
            setWinner(win);
        }
        setBord([...bord]);
        setTurn(!turn);
    }
    const reset = () => {
        setBord(Array(cardNumber).fill(''));
    }
    return (
        <div className="gride-Wrapper">
            {
                winner && (
                    <>
                    <h1 className="result">Winner is {winner}</h1>
                    <Button name="reset" resetBtn={reset} />
                    </>
                )
            }
            <h1 className="turn">Current Turn : {(turn)? "O" : "X"}</h1>
            <div className="grid-container">
            {
                
              bord.map((val, indx) => {return (<Card key={indx} onPlay={play} index={indx} players={val}/>)})
            }
        </div>
        </div>
        
    )

}

export default Grid;