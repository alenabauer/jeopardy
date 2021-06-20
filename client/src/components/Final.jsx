import React from "react";
import { Link, withRouter } from "react-router-dom";

function Final() {
    return (
        <div className="welcome-container">
            <h1 className="greeting"><span className="greeting-third-line">Финальный Раунд</span></h1>
            <Link className="btn-start" to="/final/question">Играть</Link>
        </div>
    )
}

export default withRouter(Final);