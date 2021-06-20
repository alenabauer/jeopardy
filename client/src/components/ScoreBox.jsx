import React from "react";
import { withRouter } from "react-router-dom";
import LinkButton from './LinkButton';
import useSessionstorage from "@rooks/use-sessionstorage";


function ScoreBox(props) {

    const [value, set] = useSessionstorage(props.btnId, false);

    return (<LinkButton to={props.route} id={props.btnId} onClick={() => set(true)} className={value === true ? "score-box btn clicked" : "score-box btn"}>{props.score}</LinkButton>)
};

export default withRouter(ScoreBox);