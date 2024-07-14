import styles from '../css/main.module.css';
import Menu from './Menu';
import React from 'react';
import Timer from './Timer';

const Main = () => {

    return (
        <div className={styles.mainBody}>
            <Menu menu='home'/>
            <div className={styles.container}>
                <h1>Any Any Allow</h1>
                <h2>: Capture The Flag :</h2>
                <Timer className={styles.timer}/>
            </div>
        </div>
    );
}


export default Main;