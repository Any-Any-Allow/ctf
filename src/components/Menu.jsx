import styles from '../css/menu.module.css';
import React from 'react';

const Menu = (props) => {

    return (
        <div className={styles.menu}>
            <a 
                className={props.menu === 'home' ? `${styles.menu_item} ${styles.home}`: styles.menu_item}
                href='../main'>
                Home
            </a>
            <a 
                className={props.menu === 'introduce' ? `${styles.menu_item} ${styles.home}`: styles.menu_item}
                href='../introduce'>
                Introduce
            </a>
            <a 
                className={props.menu === 'ctf' ? `${styles.menu_item} ${styles.home}`: styles.menu_item}
                href='../ctf'>
                CTF
            </a>
            <a 
                className={props.menu === 'item' ? `${styles.menu_item} ${styles.home}`: styles.menu_item}
                href='../item'>
                Item
            </a>
            <a 
                className={props.menu === 'account' ? `${styles.menu_item} ${styles.home}`: styles.menu_item}
                href='../account'>
                Account
            </a>
            <a 
                className={props.menu === 'ranking' ? `${styles.menu_item} ${styles.home}`: styles.menu_item}
                href='../ranking'>
                Ranking
            </a>
        </div>
    );
};


export default Menu;