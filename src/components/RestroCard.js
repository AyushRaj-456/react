import {CDN_URL} from "../utils/constants.js";

// to import anything that we exported via name export
// should be written in {} while imporitng.. 

const RestroCard = (props) => {
    // console.log(props);
    // unable to implement the image using imageCode from the json... do it later 
    const imgUrl = CDN_URL + props.restroInfo.info.cloudinaryImageId;
    return (
        <div className="restroCard">
            {/* {const imgUrl = }  */}
            <img className="restroImg" src={imgUrl}></img>
            <h4 className="restroCardName">{props.restroInfo.info.name}</h4>
            <p className="pronouns">{props.restroInfo.info.cuisines.join(", ")}</p>
            <p className="starRating">{"Rating " + props.restroInfo.info.avgRating}</p>
            <h6 className="timeTaken">{props.restroInfo.info.sla.slaString}</h6>
        </div>
    )
};

export default RestroCard;