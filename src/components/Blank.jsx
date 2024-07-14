import React from "react";
import styles from '../css/blank.module.css'

const Blank = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.comment}>
                <b>Hey</b><br></br>
                This Is Empty Page
            </h1>
        </div>
    );
};

export default Blank;