import React from "react";
import HeaderTab from "./HeaderTab";

function Footer(){

    const styling = {display: 'flex', padding: '2em',justifyContent: 'space-between',backgroundColor: '#72abf4f',
        zIndex: 2, width: '98%'}
    return <div style={styling}><HeaderTab value={'Back to top'}/></div>
}
export default Footer