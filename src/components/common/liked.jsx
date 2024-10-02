import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'

const Like = (props) =>{
    let classes="bi bi-heart"
    if(props.liked) classes+="-fill"
    return (
    <i style={{cursor: "pointer"}} 
    onClick={props.onClick}
    className={classes}/>
    )
}

export default Like;