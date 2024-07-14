import styles from '../css/button.module.css';


const Button = (props) => {
    return (
        props.name === 'Login' ? 
        <a href="/login" className={styles.login_btn}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {props.name}
        </a> : 
        <a href="/register" className={styles.register_btn}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {props.name}
        </a>
    );
}

export default Button;
