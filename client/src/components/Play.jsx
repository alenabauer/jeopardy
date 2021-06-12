import React from "react";
import { Link, withRouter } from "react-router-dom";

function Play() {
    return(
    <div class="tablo">
        <div class="category-container">
            <div class="category-box"><p>Категория такая-то</p></div>
            <Link class="score-box" to="/question">100</Link>
            <Link class="score-box" to="/question">200</Link>
            <Link class="score-box" to="/question">300</Link>
            <Link class="score-box" to="/question">400</Link>
            <Link class="score-box" to="/question">500</Link>
        </div>
        <div class="category-container">
            <div class="category-box"><p>Категория такая-то</p></div>
            <Link to="/question" class="score-box">100</Link>
            <Link to="/question" class="score-box">200</Link>
            <Link to="/question" class="score-box">300</Link>
            <Link to="/question" class="score-box">400</Link>
            <Link to="/question" class="score-box">500</Link>
        </div>
        <div class="category-container">
            <div class="category-box"><p>Категория такая-то</p></div>
            <Link to="/question" class="score-box">100</Link>
            <Link to="/question" class="score-box">200</Link>
            <Link to="/question" class="score-box">300</Link>
            <Link to="/question" class="score-box">400</Link>
            <Link to="/question" class="score-box">500</Link>
        </div>
        <div class="category-container">
            <div class="category-box"><p>Категория такая-то</p></div>
            <Link to="/question" class="score-box">100</Link>
            <Link to="/question" class="score-box">200</Link>
            <Link to="/question" class="score-box">300</Link>
            <Link to="/question" class="score-box">400</Link>
            <Link to="/question" class="score-box">500</Link>
        </div>
        <div class="category-container">
            <div class="category-box"><p>Категория такая-то</p></div>
            <Link to="/question" class="score-box">100</Link>
            <Link to="/question" class="score-box">200</Link>
            <Link to="/question" class="score-box">300</Link>
            <Link to="/question" class="score-box">400</Link>
            <Link to="/question" class="score-box">500</Link>
        </div>
    </div>)
};

export default withRouter(Play);