import { CARD_URL } from "../utils/constants";

const ResCard = (props) =>{
    const {resName} = props;
    
    const {name, areaName , costForTwo ,avgRating , cloudinaryImageId} = resName;
    return (
        <div className = "rescard">
            <img src={CARD_URL + cloudinaryImageId}></img>
            <h1>{name}</h1>
            <h2>{areaName}</h2>
            <h3>{costForTwo}</h3>
            <h3>{avgRating}</h3>
        </div>
    )
}

export default ResCard ;