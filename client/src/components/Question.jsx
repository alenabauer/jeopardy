import React, { useEffect, useState } from "react";
import { Link, withRouter, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function Question(props) {

    const { id } = useParams();

    const [clicked, setAsClicked] = useState(false);

    function handleClick(event) {
        event.preventDefault();
        setAsClicked(true);
    }

    console.log(props.img(id - 1));

    return (
        <div className="question-container">
            <div className="btn-container">
                <Link className="back-btn first-btn" to="/play"><FontAwesomeIcon className="back-btn-icon" icon={faArrowAltCircleLeft} /></Link>
                <FontAwesomeIcon onClick={handleClick} className="back-btn-icon second-btn" icon={faQuestionCircle} />
            </div>
            <p className={clicked ? "question-move" : "question"}> {props.question(id - 1)} </p>
            {props.img(id - 1) != undefined && <img class={clicked ? "question-img-move" : "question-img"} src={`../imgs/${props.img(id - 1)}.jpg`} alt="question-img" />}
            {clicked && <div><p className="answer"> {props.answer(id - 1)} </p></div>}
        </div>
    )
}

export default withRouter(Question);