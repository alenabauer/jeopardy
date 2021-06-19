import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import LinkButton from './LinkButton';

function Play() {

    const [clicked, setAsClicked] = useState(false);

    function handleClick(event) {
        event.preventDefault();
        setAsClicked(true);
    }

    return(
    <div class="tablo">
        <div class="category-container">
            <div class="category-box"><p>Китай</p></div>
            <LinkButton class={clicked ? "score-box clicked" : "score-box"} to="/question/1" onClick={handleClick}>100</LinkButton>
            <LinkButton class="score-box" to="/question/2">200</LinkButton>
            <LinkButton class="score-box" to="/question/3">300</LinkButton>
            <LinkButton class="score-box" to="/question/4">400</LinkButton>
            <LinkButton class="score-box" to="/question/5">500</LinkButton>
        </div>
        <div class="category-container">
            <div class="category-box"><p>Праздники</p></div>
            <LinkButton to="/question/6" class="score-box">100</LinkButton>
            <LinkButton to="/question/7" class="score-box">200</LinkButton>
            <LinkButton to="/question/8" class="score-box">300</LinkButton>
            <LinkButton to="/question/9" class="score-box">400</LinkButton>
            <LinkButton to="/question/10" class="score-box">500</LinkButton>
        </div>
        <div class="category-container">
            <div class="category-box"><p>Чай</p></div>
            <LinkButton to="/question/11" class="score-box">100</LinkButton>
            <LinkButton to="/question/12" class="score-box">200</LinkButton>
            <LinkButton to="/question/13" class="score-box">300</LinkButton>
            <LinkButton to="/question/14" class="score-box">400</LinkButton>
            <LinkButton to="/question/15" class="score-box">500</LinkButton>
        </div>
        <div class="category-container">
            <div class="category-box"><p>Слова</p></div>
            <LinkButton to="/question/16" class="score-box">100</LinkButton>
            <LinkButton to="/question/17" class="score-box">200</LinkButton>
            <LinkButton to="/question/18" class="score-box">300</LinkButton>
            <LinkButton to="/question/19" class="score-box">400</LinkButton>
            <LinkButton to="/question/20" class="score-box">500</LinkButton>
        </div>
        <div class="category-container">
            <div class="category-box"><p>Еда</p></div>
            <LinkButton to="/question/21" class="score-box">100</LinkButton>
            <LinkButton to="/question/22" class="score-box">200</LinkButton>
            <LinkButton to="/question/23" class="score-box">300</LinkButton>
            <LinkButton to="/question/24" class="score-box">400</LinkButton>
            <LinkButton to="/question/25" class="score-box">500</LinkButton>
        </div>
    </div>)
};

export default withRouter(Play);