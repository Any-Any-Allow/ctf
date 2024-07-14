import styles from '../css/item.module.css';
import ItemCard from './ItemCard';
import Menu from './Menu';
import img1 from '../img/openart-image_9FdSzT1G_1718071894876_raw.jpg';
import img2 from '../img/openart-image_LiAWlVsY_1718071862413_raw.jpg';
import img3 from '../img/openart-image_WcSR5ALK_1718072039842_raw.jpg';
import img4 from '../img/openart-image_QwQz8Mw6_1718072362453_raw.jpg';
import img5 from '../img/openart-image_lRWJnObE_1718072579865_raw.jpg';
import img6 from '../img/openart-image_jvpwcrMD_1718071803412_raw.jpg';


const Item = () => {
    return (
        <div className={styles.mainBody}>
            <Menu menu='item'/>
            <div className={styles.container}>
                <div className={styles.item_container}>
                    <ItemCard item_name='Bow' attribute='공격력 + 5' img_src={img1} locked={false}/>
                    <ItemCard item_name='Pistol' attribute='공격력 + 10' img_src={img2} locked={false}/>
                    <ItemCard item_name='Knife' attribute='공격력 + 7' img_src={img3} locked={false}/>
                    <ItemCard item_name='Electric Gun' attribute='공격력 + 15' img_src={img4} locked={false}/>
                    <ItemCard item_name='Sword' attribute='공격력 + 15' img_src={img5} locked={false}/>
                    <ItemCard item_name='Shield' attribute='공격력 + 10' img_src={img6} locked={false}/>
                    <ItemCard item_name='Bow' attribute='공격력 + 5' img_src={img1} locked={false}/>
                    <ItemCard item_name='Pistol' attribute='공격력 + 10' img_src={img2} locked={false}/>
                    <ItemCard item_name='Knife' attribute='공격력 + 7' img_src={img3} locked={false}/>
                    <ItemCard item_name='Electric Gun' attribute='공격력 + 15' img_src={img4} locked={false}/>
                    <ItemCard item_name='Sword' attribute='공격력 + 15' img_src={img5} locked={true}/>
                    <ItemCard item_name='Shield' attribute='공격력 + 10' img_src={img6} locked={true}/>
                    <ItemCard item_name='Bow' attribute='공격력 + 5' img_src={img1} locked={true}/>
                    <ItemCard item_name='Pistol' attribute='공격력 + 10' img_src={img2} locked={true}/>
                    <ItemCard item_name='Knife' attribute='공격력 + 7' img_src={img3} locked={true}/>
                    <ItemCard item_name='Electric Gun' attribute='공격력 + 15' img_src={img4} locked={true}/>
                    <ItemCard item_name='Sword' attribute='공격력 + 15' img_src={img5} locked={true}/>
                    <ItemCard item_name='Shield' attribute='공격력 + 10' img_src={img6} locked={true}/>
                </div>
            </div>
        </div>
    );
}

export default Item;