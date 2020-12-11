import React from 'react'
import "./MyFirstComponent.css"
export const MyFirstComponent = (props) => {
    return (
        <div>
            <h1 className="title">This is my first component</h1>
    {props.name}
    {props.age}
        </div>
    )
}
