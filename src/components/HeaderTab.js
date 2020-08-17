import React from "react";

function HeaderTab(props){
    const styling = {borderRadius:'1.5em',color:'#000',padding:'2em',border:'1px solid #d6cfcf'}
    return <button className={'tab'} style={styling}><a href={'#'}></a>{props.value}</button>
}
export default HeaderTab