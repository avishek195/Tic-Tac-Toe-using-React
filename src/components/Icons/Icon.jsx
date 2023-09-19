import {FaRegCircle,  } from 'react-icons/fa6'
import {FaTimes, FaPen} from 'react-icons/fa'

const Icon = ({name}) =>{
    if(name === "cross"){
        return (
            <FaTimes />
        )
    }
     if(name === "circle"){
        return (
            <FaRegCircle />
        )
    }
    else{
        return (
            <FaPen />
        )
    }
}

export default Icon;