import { CARD_URL } from "../utils/constants";

const ResCard = (props) =>{
    const {resName} = props;
    const {name , cusine , time , rating} = resName;
    return (
        <div className = "rescard">
            <img src={CARD_URL}></img>
            <h1>{name}</h1>
            <h2>{cusine}</h2>
            <h3>{time}</h3>
            <h3>{rating}</h3>
        </div>
    )
}

export default ResCard ;