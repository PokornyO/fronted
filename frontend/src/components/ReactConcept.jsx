import React from "react"
/*const ReactConcept = ({ title, description }) => {
    return (
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>)
}*/

function ReactConcept (props) {
    return (
        <div id = "ReactConcept">
            {props.children}
        </div>
    )
}
export default ReactConcept