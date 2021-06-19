import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { Link, withRouter } from "react-router-dom";
import LinkButton from './LinkButton';
import useSessionstorage from "@rooks/use-sessionstorage";


function ScoreBox(props) {

    const [value, set, remove] = useSessionstorage(props.btnId, false);

    // const currentElementState = sessionStorage.getItem(props.btnId);
    // const [clicked, setAsClicked] = useState({currentElementState});

    // function handleClick(e) {
    //     e.preventDefault();
    //     setAsClicked(true);
    //     sessionStorage.setItem(e.target.id, true);
    // };

    return (<LinkButton to={props.route} id={props.btnId} onClick={() => set(true)} class={value === true ? "score-box btn clicked" : "score-box btn"}>{props.score}</LinkButton>)
};

export default withRouter(ScoreBox);