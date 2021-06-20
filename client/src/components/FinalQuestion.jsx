import React, { useEffect, useState } from "react";
import { Link, withRouter, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function FinalQuestion(props) {

    const [clicked, setAsClicked] = useState(false);

    function handleClick(event) {
        event.preventDefault();
        setAsClicked(true);
    }

    return (
        <div className="question-container">
            <div className="btn-container">
                <Link className="back-btn first-btn" to="/thankyou"><FontAwesomeIcon className="back-btn-icon" icon={faMedal} /></Link>
                <FontAwesomeIcon onClick={handleClick} className="back-btn-icon second-btn" icon={faQuestionCircle} />
            </div>
            <p className={clicked ? "question-move" : "question"}> {props.question(25)} </p>
            {props.img(25) != undefined && <img class={clicked ? "question-img-move" : "question-img"} src={`../imgs/${props.img(25)}.jpg`} alt="question-img" />}
            {clicked && <div><p className="answer"> {props.answer(25)} </p></div>}
        </div>
    )
}

export default withRouter(FinalQuestion);