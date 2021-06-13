import React from "react";
import { Link, withRouter } from "react-router-dom";

function Play() {

    


    return(
    <div class="tablo">
        <div class="category-container">
            <div class="category-box"><p>Категория такая-то</p></div>
            <Link class="score-box" to="/question/1">100</Link>
            <Link class="score-box" to="/question/2">200</Link>
            <Link class="score-box" to="/question/3">300</Link>
            <Link class="score-box" to="/question/4">400</Link>
            <Link class="score-box" to="/question/5">500</Link>
        </div>
        <div class="category-container">
            <div class="category-box"><p>Категория такая-то</p></div>
            <Link to="/question/6" class="score-box">100</Link>
            <Link to="/question/7" class="score-box">200</Link>
            <Link to="/question/8" class="score-box">300</Link>
            <Link to="/question/9" class="score-box">400</Link>
            <Link to="/question/10" class="score-box">500</Link>
        </div>
        <div class="category-container">
            <div class="category-box"><p>Категория такая-то</p></div>
            <Link to="/question/11" class="score-box">100</Link>
            <Link to="/question/12" class="score-box">200</Link>
            <Link to="/question/13" class="score-box">300</Link>
            <Link to="/question/14" class="score-box">400</Link>
            <Link to="/question/15" class="score-box">500</Link>
        </div>
        <div class="category-container">
            <div class="category-box"><p>Категория такая-то</p></div>
            <Link to="/question/16" class="score-box">100</Link>
            <Link to="/question/17" class="score-box">200</Link>
            <Link to="/question/18" class="score-box">300</Link>
            <Link to="/question/19" class="score-box">400</Link>
            <Link to="/question/20" class="score-box">500</Link>
        </div>
        <div class="category-container">
            <div class="category-box"><p>Категория такая-то</p></div>
            <Link to="/question/21" class="score-box">100</Link>
            <Link to="/question/22" class="score-box">200</Link>
            <Link to="/question/23" class="score-box">300</Link>
            <Link to="/question/24" class="score-box">400</Link>
            <Link to="/question/25" class="score-box">500</Link>
        </div>
    </div>)
};

export default withRouter(Play);