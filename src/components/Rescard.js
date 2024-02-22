import { CARD_URL } from "../utils/constants";

const ResCard = (props) =>{
    const {resName} = props;
    
    const {name, areaName , costForTwo ,avgRating , cloudinaryImageId} = resName;
    return (
        <div className = "flex text-center flex-col bg-cyan-100 w-[250px] h-[350px] gap-1 rounded-md shadow-2xl">
            <img className = "w-[250px] h-[200] rounded-md"  src={CARD_URL + cloudinaryImageId}></img>
            <h1 className="text-wrap">{name}</h1>
            <h2>{areaName}</h2>
            <h3>{costForTwo}</h3>
            <h3>{avgRating}</h3>
        </div>
    )
}

//Higher order components that takes a component as input and return a component as enhanced
/* export const promotedCard = (ResCard)=>{
    return()=>{
        return(
            <div>
                <label>Promoted</label>
                <ResCard/>
            </div>
        )
    }
} */

export default ResCard ;