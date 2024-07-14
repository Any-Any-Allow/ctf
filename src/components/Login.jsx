import React, { useState } from "react";
import styles from '../css/login.module.css';
import Header from "./Header";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errorUsername, setErrorUsername] = useState('* Required');
    const [errorPassword, setErrorPassword] = useState('* Required');


    const onSubmit = (e) =>{
        e.preventDefault();
        if(username === '') {
            setErrorUsername('Enter Username');
            return;
        }

        if(password === '') {
            setErrorPassword('Enter Password');
            return;
        }

    }


    return (
        <>
            <Header>A.A.A</Header>
            <div className={styles.homeContainer}>
                <form className={styles.form} onSubmit={(e)=>onSubmit(e)}>
                    <div className={styles.form_title}>
                        Login
                    </div>
                    <div className={styles.input_container}>
                        <input
                            className={styles.username}
                            name="id"
                            value={username}
                            placeholder="Enter Your Username"
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className={styles.error_label}>{errorUsername}</label>
                    </div>
                    <div className={styles.input_container}>
                        <input
                            className={styles.password}
                            type="password"
                            name="passwd"
                            autoComplete="off"
                            value={password}
                            placeholder="Enter Your Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className={styles.error_label}>{errorPassword}</label>
                    </div>
                    <div className={styles.input_container}>
                        <input className={styles.submit_btn} type="submit" value={'Log in'} />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;