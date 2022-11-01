import React from "react";
import './TodoCSS/TodoCounter.css';


function TodoCounter ({total, completed}) {

    return (
        <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
    );
}

export { TodoCounter };