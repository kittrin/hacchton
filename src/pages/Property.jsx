import React from 'react';
import cl from '../stylesPages/Property.module.css'
import {MessageOutlined, PlusOutlined, UserOutlined} from "@ant-design/icons";
import Circle from "../Components/ForPages/Main/Circle";
import {Link} from "react-router-dom";

const Property = () => {
    let width = 0
    if (window.innerWidth > 700) {
        width = 150
    } else {
        width = 50
    }
    return (
        <div className={cl.body}>
            <Circle left={10} top={15} width={width * 3} chis={300}/>
            <Circle left={45} top={40} width={width} chis={0}/>
            <Circle left={65} top={20} width={width * 2} chis={600}/>

            <div className={cl.developer}>
                <div className={cl.profile}>
                    <div className={cl.developerName}>
                        <UserOutlined/>
                        Пятилетов Дмитрий (инвестор)/Моя недвижимость
                    </div>
                    <div className={cl.message}>
                        <MessageOutlined/>
                    </div>
                </div>

                <div className={cl.list}>
                    <Link to='/pHome' style={{width: '100%', display: 'block'}}><div className={cl.list1}>1.Краснодар, ул Красная, д.1 (Аптека);  до платежа 30 дней </div></Link>
                    <div className={cl.list2}>2.Краснодар, ул Северная, д.400 (Продуктовый);  до платежа 15 дней </div>
                    <div className={cl.add}><PlusOutlined /></div>
                </div>
            </div>

        </div>
    );
};

export default Property;