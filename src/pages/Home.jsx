import React from 'react';
import cl from '../stylesPages/Home.module.css'
import {MessageOutlined, UserOutlined} from "@ant-design/icons";
import Circle from "../Components/ForPages/Main/Circle";
import {Line} from "@ant-design/charts";
import data from "./jsonFiles/Dohod.json";


const Home = () => {
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
                        Пятилетов Дмитрий (инвестор)/Моя недвижимость
                    </div>
                    <div className={cl.message}>
                        <MessageOutlined/>
                    </div>
                </div>

                <div className={cl.cardHome}>
                    <div className={cl.photoHome}></div>

                    <div className={cl.infoHome}>
                        <div className={cl.nameHome}>Краснодар, ул Красная, д.1 (Аптека), 150 м²</div>
                        <div className={cl.dataHome}>
                            <div className={cl.static}>
                                <div className={cl.sum}>
                                    <p className={cl.txt1}>Сумма задолжности</p>
                                    <p className={cl.txt2}>-500000 ₽</p>
                                </div>
                                <div className={cl.plata}>
                                    <p className={cl.txt1}>Дата последнего платежа</p>
                                    <p className={cl.txt2}>13 октября 2020</p>
                                </div>
                                <div className={cl.chat}>
                                    <p className={cl.txt1}>Связаться с арендатором</p>
                                    <p className={cl.txt2}>Чат</p>
                                </div>
                                <div className={cl.statistics}>
                                    <p className={cl.txt2}>Статистика</p>
                                </div>
                            </div>
                            <div className={cl.graphics}>
                                Прогноз стоимости:
                                <Line {...config} style={{zIndex: 14, height: '90%', width: '90%'}}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;