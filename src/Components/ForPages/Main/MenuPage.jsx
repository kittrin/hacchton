import React from 'react';
import cl from './MenuPage.module.css'
import {Link} from "react-router-dom";


const MenuPage = () => {
    return (
        <div className={cl.body}>
            <div className={cl.textMenu}>
                <p className={cl.txt1}>Управление коммерческой недвижимостью</p>
                <p className={cl.txt2}>Невероятно. Удобно. Для вас</p>
            </div>
            <div className={cl.blockButton}>
                <p className={cl.txtButton}>Кто вы? </p>
                <Link to='/developer' style={{width: '100%', display: 'block'}}><button className={cl.button}>Застройщик</button></Link>
                <button className={cl.button}>Инвестор</button>
                <button className={cl.button}>Арендатор</button>
            </div>
        </div>
    );
};

export default MenuPage;