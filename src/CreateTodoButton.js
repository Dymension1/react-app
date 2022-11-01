import React from "react";
import './TodoCSS/CreateTodoButton.css'

function CreateTodoButton(props) {

    const onClickButton = (msg) => {
        alert(msg);
    };

    return(
        <button className="CreateTodoButton" 
        onClick={() => onClickButton('hola')}
        >+</button>
    );
}

export { CreateTodoButton };