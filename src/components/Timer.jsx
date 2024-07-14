import React from 'react'
import Clock from 'react-live-clock'

const Timer = () => {
    const timer = {
        fontSize: '3em',
        color: '#fff',
        marginTop: '10px',
    };

    return (
        <Clock format={'YYYY.MM.DD HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} style={timer}/>
    );
}

export default Timer;