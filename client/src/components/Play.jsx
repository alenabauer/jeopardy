import React from "react";
import { Link, withRouter } from "react-router-dom";
import ScoreBox from "./ScoreBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';

function Play() {
    return(
    <div className="tablo">
        <div className="category-container">
            <div className="category-box"><p>Китай</p></div>
            <ScoreBox route="/question/1" btnId="btn1" score="100" />
            <ScoreBox route="/question/2" btnId="btn2" score="200" />
            <ScoreBox route="/question/3" btnId="btn3" score="300" />
            <ScoreBox route="/question/4" btnId="btn4" score="400" />
            <ScoreBox route="/question/5" btnId="btn5" score="500" />
        </div>
        <div className="category-container">
            <div className="category-box"><p>Праздники</p></div>
            <ScoreBox route="/question/6" btnId="btn6" score="100" />
            <ScoreBox route="/question/7" btnId="btn7" score="200" />
            <ScoreBox route="/question/8" btnId="btn8" score="300" />
            <ScoreBox route="/question/9" btnId="btn9" score="400" />
            <ScoreBox route="/question/10" btnId="btn10" score="500" />
        </div>
        <div className="category-container">
            <div className="category-box"><p>Чай</p></div>
            <ScoreBox route="/question/11" btnId="btn11" score="100" />
            <ScoreBox route="/question/12" btnId="btn12" score="200" />
            <ScoreBox route="/question/13" btnId="btn13" score="300" />
            <ScoreBox route="/question/14" btnId="btn14" score="400" />
            <ScoreBox route="/question/15" btnId="btn15" score="500" />
        </div>
        <div className="category-container">
            <div className="category-box"><p>Слова</p></div>
            <ScoreBox route="/question/16" btnId="btn16" score="100" />
            <ScoreBox route="/question/17" btnId="btn17" score="200" />
            <ScoreBox route="/question/18" btnId="btn18" score="300" />
            <ScoreBox route="/question/19" btnId="btn19" score="400" />
            <ScoreBox route="/question/20" btnId="btn20" score="500" />
        </div>
        <div className="category-container">
            <div className="category-box"><p>Еда</p></div>
            <ScoreBox route="/question/21" btnId="btn21" score="100" />
            <ScoreBox route="/question/22" btnId="btn22" score="200" />
            <ScoreBox route="/question/23" btnId="btn23" score="300" />
            <ScoreBox route="/question/24" btnId="btn24" score="400" />
            <ScoreBox route="/question/25" btnId="btn25" score="500" />
        </div>
        <Link className="final-btn" to="/final"><FontAwesomeIcon className="final-btn-icon" icon={faFlagCheckered} /></Link>
    </div>)
};

export default withRouter(Play);