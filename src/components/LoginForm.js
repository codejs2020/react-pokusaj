import React from "react";
import InputField from "./InputField";
class LoginForm extends React.Component{


    render(){
    const styling = { display: 'flex', width: '30em', height : '25em', borderRadius: '2em' , boxShadow : '0 2px 10px rgba(0,0,0,0.3)' , margin : '8em auto'};
        return <div style={styling}>
            <form action="Post">
                <h2 style={{color: '#dbdbdb'}}>Welcome</h2>
                <InputField type={'text'} placeholder={'enter username'} id={'username'} defaultValue={''}/>
                <InputField type={'password'} placeholder={'enter password'}/>
                <InputField type={'Submit'} value={'Log in'}/>
            </form></div>
    }
}
export default LoginForm