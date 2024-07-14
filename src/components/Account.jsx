import styles from '../css/account.module.css'
import stylesPopup from '../css/popup_container.module.css';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import ArchieveItem from './ArchieveItem';
import { useState } from 'react';


const Account = () => {
    const [popup, setPopup] = useState(false);

    return (
        <div className={styles.mainBody}>
            <Menu menu='account'/>
            <div className={styles.container}>
                <div className={stylesPopup.popup_form_container} style={popup ? {display: 'flex'} : {display : 'none'}}>
                    <label className={stylesPopup.discardBtn} onClick={()=>{setPopup(!popup)}}>X</label>
                    <div className={stylesPopup.title}>Edit Info</div>
                    <form className={stylesPopup.popup_form} action='../edit_info' method='post'>
                        <input className={stylesPopup.input} type='text' name='usename' placeholder='Enter Name'/>
                        <input className={stylesPopup.input} type='password' name='password' placeholder='Enter Current Password'/>
                        <input className={stylesPopup.input} type='password' name='password' placeholder='Enter New Password'/>
                        <input className={stylesPopup.input} type='password' name='password_chk' placeholder='Enter Check Password'/>
                        <input className={stylesPopup.edit_btn} type='submit' value={'Edit'}/>
                    </form>
                </div>


                <div className={styles.profile} style={popup ? {display : 'none'} : {display: 'flex'}}>
                    <div className={styles.profile_img_container}>
                        <h2 className={styles.title}> PROFILE</h2>
                        <div className={styles.profile_container}>
                            <p className={styles.profile_name}>
                                <p className={styles.key}>Name</p>
                                <p className={styles.value}>Hanhxx</p>
                                <div className={styles.edit_btn} onClick={()=>{setPopup(!popup)}}>
                                    <FontAwesomeIcon icon={faPencil}/>
                                </div>
                            </p>
                            <div className={styles.profile_info}>
                                <div className={styles.info}>
                                    <p className={styles.key}>Score</p>
                                    <p className={styles.value}>325 / 500</p>
                                </div>
                                <div className={styles.info}>
                                    <p className={styles.key}>Rank</p>
                                    <p className={styles.value}>9 / 102</p>
                                </div>
                                <div className={styles.info}>
                                    <p className={styles.key}>Stage</p>
                                    <p className={styles.value}>44 / 100</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.achieve} style={popup ? {display : 'none'} : {display: 'flex'}}>
                    <h2 className={styles.title}>ARCHIEVE</h2>
                    <div className={styles.achieve_container}>
                        <ArchieveItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;