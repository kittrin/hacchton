import React from 'react';
import {Link} from "react-router-dom";
import cl from '../stylesPages/Start.module.css'
import Circle from "../Components/ForPages/Main/Circle";

const Start = () => {
    let width = 0
    if (window.innerWidth > 700) {
        width = 150
    } else {
        width = 50
    }

    return (
        <div className={cl.main}>
            <Circle left={10} top={15} width={width * 3} chis={300}/>
            <Circle left={45} top={40} width={width} chis={0}/>
            <Circle left={65} top={20} width={width * 2} chis={600}/>
            <div className={cl.body}>
                <div className={cl.textMenu}>
                    <p className={cl.txt1}>Коммерческая недвижимость</p>
                    <p className={cl.txt2}>Выберете исходя из местоположения
                        или типа бизнеса и искусственный
                        интеллект подберёт оптимальные
                        для вас варианты</p>
                </div>
                <div className={cl.blockButton}>
                    <Link to='/sortPlace' style={{width: '100%', display: 'block'}}><button className={cl.button}>По местоположению</button></Link>
                    <Link to='/sortBus' style={{width: '100%', display: 'block'}}><button className={cl.button}>По типу бизнеса</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Start;