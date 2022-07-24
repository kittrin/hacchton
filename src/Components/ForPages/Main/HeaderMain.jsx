import React from 'react';
import cl from './HeaderMain.module.css'
import {MenuFoldOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const HeaderMain = () => {
    return (
        <div className={cl.body}>
            <Link to='/main'>
                <button className='buttonLogo'>
                    Platinum
                </button>
            </Link>
            <button className={cl.buttonMenu}>
                <MenuFoldOutlined/>
            </button>
        </div>
    );
};

export default HeaderMain;