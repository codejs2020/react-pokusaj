import React from "react";
import HeaderTab from "./HeaderTab";
class Header extends React.Component{

    render() {
        const styling = {display: 'flex', padding: '2em',justifyContent: 'space-between',position:'sticky',backgroundColor: '#75aaff',
        zIndex: 1, width: '98%'}
        return <div style={styling}><HeaderTab value={'Home'}/><HeaderTab value={'Our Tours'}/><HeaderTab value={'Reservations'}/><HeaderTab value={'Log out'}/></div>
    }
}
export default Header