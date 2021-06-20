import React from "react";
import { Link, withRouter } from "react-router-dom";

function Welcome() {
    return (
        <div className="welcome-container">
            <h1 className="greeting"><span class="greeting-first-line">Дом Китайского Языка</span><span className="greeting-second-line">представляет</span><span className="greeting-third-line">своя игра</span></h1>
            <Link className="btn-start" to="/play">让我们玩吧！</Link>
        </div>
    )
}

export default withRouter(Welcome);