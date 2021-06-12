import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

function Question() {

    const [clicked, setAsClicked] = useState(false);

    function handleClick(event) {
        event.preventDefault();
        setAsClicked(true);
    }

    return (
        <div className="question-container">
            <Link className="back-btn" to="/play"><FontAwesomeIcon className="back-btn-icon" icon={faArrowAltCircleLeft} /></Link>
            <p className={clicked ? "question-move" : "question"}>Что лучше - сорок пяток или пяток сорок?</p>
            {clicked && <div><p className="answer">Увы, никто на это ответа дать не мог.</p><img className="answer-img" src="https://i.pinimg.com/originals/c1/a0/d2/c1a0d2377894d0e49656fd36aba5e792.gif"></img></div>}
            <button class="show-answer-btn" onClick={handleClick}>Ответ</button>
        </div>
    )
}

export default withRouter(Question);