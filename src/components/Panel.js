import React from 'react';
import Form from './Form';


export default function Panel(props){
    return(
        <div>
            <button onClick={props.revertChange}>Graph 1</button>
            <button onClick={props.changeProp}>Graph 2</button>
            <Form />
        </div>
    )
}