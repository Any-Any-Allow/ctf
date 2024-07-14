import React from "react";
import styles from '../css/prob_card.module.css';
import { Link } from 'react-router-dom';

const ProbCard = (props) => {
    return(
        <Link className={styles.prob_card} to={props.prob_link}>
            <img className={styles.img} src={props.img_src} alt={props.alt_text}/>
            <p className={styles.desc}>{props.stage}</p>
        </Link>
    );
};

export default ProbCard;