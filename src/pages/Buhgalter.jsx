import React from 'react';
import cl from '../stylesPages/Buhgalter.module.css'
import Circle from "../Components/ForPages/Main/Circle";
import {Select} from "antd";
import {Option} from "antd/es/mentions";
import {MessageOutlined, UserOutlined} from "@ant-design/icons";
import {Line} from "@ant-design/charts";
import data from "./jsonFiles/Dohod.json";

const Buhgalter = () => {
    let width = 0
    if (window.innerWidth > 700) {
        width = 150
    } else {
        width = 50
    }
    const config = {
        data,
        xField: 'year',
        yField: 'value',
        label: {},
        point: {
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#5B8FF9',
                lineWidth: 2,
            },
        },
        tooltip: {
            showMarkers: false,
        },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: '#000',
                    fill: 'red',
                },
            },
        },
        interactions: [
            {
                type: 'marker-active',
            },
        ],
    };
    return (
        <div className={cl.body}>
            <Circle left={10} top={15} width={width * 3} chis={300}/>
            <Circle left={45} top={40} width={width} chis={0}/>
            <Circle left={65} top={20} width={width * 2} chis={600}/>
            <div className={cl.developer}>
                <div className={cl.profile}>
                    <div className={cl.developerName}>
                        <UserOutlined style={{paddingRight: 20}} />
                        Пятилетов Дмитрий (Инвестор)/ Бухгалтерия
                    </div>
                    <div className={cl.message}>
                        <MessageOutlined/>
                    </div>
                </div>

                <div className={cl.osnova}>
                    <div className={cl.block1}>
                        <button className={cl.but}> Сгенерировать 3-НДФЛ</button>
                        <button className={cl.but}>Сгенерировать справку о расходах и доходах</button>
                        <button className={cl.but}>Отчётность (в PDF)</button>
                    </div>
                    <div className={cl.statistics}>
                        График доходов
                        <Line {...config} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buhgalter;