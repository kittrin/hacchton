import React from 'react';
import cl from '../stylesPages/DeveloperMain.module.css'
import Circle from "../Components/ForPages/Main/Circle";
import {MessageOutlined, PlusOutlined, UserOutlined} from "@ant-design/icons";
import data from './jsonFiles/Dohod.json'
import {Line} from "@ant-design/charts";
import {Link} from "react-router-dom";

const DeveloperMain = () => {
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
                        <UserOutlined/>
                        Пятилетов Дмитрий (инвестор)
                    </div>
                    <div className={cl.message}>
                        <MessageOutlined/>
                    </div>
                </div>

                <div className={cl.statistics}>
                    <div className={cl.graphics}>
                        Стоимость 1м² недвижимости
                        <Line {...config} />
                    </div>
                    <div className={cl.statisticsButtons}>

                        <button className={cl.button} style={{paddingRight: 20}}>
                            <div><p>Баланс:</p><p>66000 ₽</p></div>
                            <PlusOutlined/></button>

                        <Link to='/dProperty' style={{width: '100%', display: 'block', height: '25%'}}>
                            <button className={cl.button} style={{height: '100%'}}>Моя недвижимость</button>
                        </Link>
                        <button className={cl.button}><Link to='/buhg'>Бухгалтерия</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeveloperMain;