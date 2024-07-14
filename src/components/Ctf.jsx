import { Outlet } from 'react-router-dom';
import styles from '../css/ctf.module.css'
import Menu from './Menu';
import ProbCard from './ProbCard';
import img1 from '../img/openart-image_9FdSzT1G_1718071894876_raw.jpg';
import img2 from '../img/openart-image_LiAWlVsY_1718071862413_raw.jpg';
import img3 from '../img/openart-image_WcSR5ALK_1718072039842_raw.jpg';
import img4 from '../img/openart-image_QwQz8Mw6_1718072362453_raw.jpg';
import img5 from '../img/openart-image_lRWJnObE_1718072579865_raw.jpg';
import img6 from '../img/openart-image_jvpwcrMD_1718071803412_raw.jpg';




const Ctf = () => {
    return (
        <div className={styles.mainBody}>
            <Menu menu='ctf'/>
            <div className={styles.container}>
                <ProbCard prob_link='../prob/Sqli1' img_src={img1} alt_text='bow' stage='STAGE 1'/>
                <ProbCard prob_link='../prob/Sqli2' img_src={img2} alt_text='pistol' stage='STAGE 2'/>
                <ProbCard prob_link='../prob/Sqli3' img_src={img3} alt_text='knife' stage='STAGE 3'/>
                <ProbCard prob_link='../prob/Sqli4' img_src={img4} alt_text='gun' stage='STAGE 4'/>
                <ProbCard prob_link='../prob/Sqli5' img_src={img5} alt_text='sword' stage='STAGE 5'/>
                <ProbCard prob_link='../prob/Sqli6' img_src={img6} alt_text='shield' stage='STAGE 6'/>
                <Outlet />
            </div>
        </div>
    );
}

export default Ctf;