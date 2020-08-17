import React from "react";

class Hero extends React.Component{

    render() {
        const styling = {backgroundSize: 'cover', clipPath: 'circle(70% at 70% 20%)',height: '90vh',position: 'relative',bottom:'100px',textAlign: 'center',letterSpacing: '3em',
        paddingTop: '3em', fontsize: '7em'}
        return <div className={'hero'} style={styling}>GLOBE TOURS</div>
    }
}

export default Hero