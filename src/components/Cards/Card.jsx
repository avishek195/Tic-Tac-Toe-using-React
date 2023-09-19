import Icon from "../Icons/Icon";
import "./Card.css";

const Card = ({players, index, onPlay}) => {

    let icons = <Icon />;

    if(players === 'O'){
         icons = <Icon name="circle" />
    }
    else if(players === "X"){
        icons = <Icon name="cross" />
    }else{
        icons = <Icon name="" />
    }

    return (
        <div className="card-container" onClick={() => onPlay(index)}>
            {icons}
        </div>
    )

}

export default Card;