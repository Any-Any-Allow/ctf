import { useState } from 'react';
import styles from '../css/register.module.css';
import Header from './Header';


const Register = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [password_chk, setPasswordChk] = useState('');

    const [error_id, setErrorId] = useState('* Required');
    const [error_name, setErrorName] = useState('* Required');
    const [error_password, setErrorPassword] = useState('* Required');
    const [error_passwordChk, setErrorPasswordChk] = useState('* Required');


    const onButtonClick = () => {
        if(id === '') {
            setErrorId('Check ID');
        } else {
            setErrorId('Pass');
        }

        if(name === '') {
            setErrorName('Check Username');
        } else {
            setErrorName('Pass');
        }

        if(password === '') {
            setErrorPassword('Empty field is not allowed!!');
        } else {
            setErrorPassword('Pass');
        }

        if(password_chk === '') {
            setErrorPasswordChk('Empty field is not allowed!!');
        } else {
            setErrorPasswordChk('Pass');
        }


    };


    return (
        <>
            <Header>A.A.A</Header>
            <div className={styles.homeContainer}>
                <form className={styles.form} action='../register_proc' method='post'>
                    <div className={styles.form_title}>
                        Register
                    </div>
                    <div className={styles.input_container}>
                        <form className={styles.username_check_form} action='./id_chk' method='post'>
                            <input 
                                className={styles.username}
                                autoComplete='off'
                                placeholder='Enter Username'
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            />
                            <button>Check</button>
                        </form>
                        <label className={styles.error_label}>{error_id}</label>
                    </div>
                    <div className={styles.input_container}>
                        <input 
                            className={styles.name}
                            autoComplete='off'
                            placeholder='Enter Your Name'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <label className={styles.error_label}>{error_name}</label>
                    </div>
                    <div className={styles.input_container}>
                        <input 
                            className={styles.password}
                            type='password'
                            autoComplete='off'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <label className={styles.error_label}>{error_password}</label>
                    </div>
                    <div className={styles.input_container}>
                        <input 
                            className={styles.password_chk}
                            type='password'
                            autoComplete='off'
                            placeholder='Enter Password Again'
                            value={password_chk}
                            onChange={(e)=>setPasswordChk(e.target.value)}
                        />
                        <label className={styles.error_label}>{error_passwordChk}</label>
                    </div>
                    <div className={styles.input_container}>
                        <input 
                            className={styles.reg_btn}
                            type='submit'
                            value={'Sign Up'}
                            onClick={onButtonClick}
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;