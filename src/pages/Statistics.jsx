import React from 'react';
import cl from '../stylesPages/Statistics.module.css'
import Circle from "../Components/ForPages/Main/Circle";
import {MessageOutlined, UserOutlined} from "@ant-design/icons";
import Trafic from "../Components/ForPages/Statistics/Trafic.jsx";
import Gender from "../Components/ForPages/Statistics/Gender.jsx";
import Age from "../Components/ForPages/Statistics/Age.jsx";

const Statistics = () => {
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
                        <UserOutlined style={{paddingRight: 20}}/>
                        Пятилетов Дмитрий (Инвестор)/ Бухгалтерия
                    </div>
                    <div className={cl.message}>
                        <MessageOutlined/>
                    </div>
                </div>
                <div className={cl.osnova}>
                    <div className={cl.infa}>
                        <p className={cl.zag}>Объём трафика за сегодня: 200 (+15)</p>
                        <p className={cl.com}>Трафик по часам:</p>
                        <Trafic/>
                        <p className={cl.com}>Гендерный портрет:</p>
                        <Gender/>
                        <p className={cl.com}>Возраст аудитории:</p>
                    </div>
                    <Age/>
                </div>
            </div>
        </div>
    );
};

export default Statistics;