import React from "react";

function InputField(props){

    const styling = {display: 'block' , margin : '2em' , borderRadius : '5em' , padding: '1em'}
    return <input style={styling} type={props.type} placeholder={props.placeholder} value={props.value}/>
}
export default InputField