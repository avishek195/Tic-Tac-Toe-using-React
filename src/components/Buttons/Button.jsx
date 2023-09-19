
import "./Button.css";
const Button = ({name, resetBtn}) => {
    return (
        <button className={name} onClick={resetBtn}>Reset</button>
    )
}

export default Button;