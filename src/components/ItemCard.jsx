import React from "react";
import styles from '../css/item_card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from "@fortawesome/free-solid-svg-icons";

const ItemCard = (props) => {
    return (
        props.locked ? 
        <div className={styles.lock_card_container}>
            <div className={styles.item_card}>
                <div className={styles.lock_img_container}>
                    <img className={styles.lock_item_img} src={props.img_src} alt={props.attribute}/>
                    <FontAwesomeIcon icon={faLock} className={styles.icon}/>
                </div>
                <p className={styles.lock_item_name}>{props.item_name}</p>
            </div>
        </div> : 
        <div className={styles.item_card_container}>
            <div className={styles.item_card}>
                <div className={styles.img_container}>
                    <img className={styles.item_img} src={props.img_src} alt={props.attribute}/>
                    <div className={styles.overlay}>
                        <p>{props.attribute}</p>
                    </div>
                </div>
                <p className={styles.item_name}>{props.item_name}</p>
            </div>
        </div>
    );
};

export default ItemCard;