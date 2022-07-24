import React from 'react';
import cl from '../stylesPages/InfaHome.module.css'
import Circle from "../Components/ForPages/Main/Circle";
import {Select} from "antd";
import {Option} from "antd/es/mentions";
import {Link} from "react-router-dom";

const InfaHome = () => {
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
                        Краснодар, ЖК “Fresh”, д.1, пом.2
                        <Select defaultValue="lucy" style={{ width: '20%' }} disabled>
                            <Option value="lucy">Пекарня</Option>
                        </Select>

                        <Select defaultValue="lucy" style={{ width: '20%' }} disabled>
                            <Option value="lucy">Краснодар</Option>
                        </Select>
                    </div>
                </div>

                <div className={cl.osnova}>
                    <div className={cl.osnovaTxt}>
                        Почему искусственный интеллект порекомендовал вам именно это помещение для открытия пекарни:
                        <button className={cl.dop}><Link to='/stat'>Дополнительная статистика</Link></button>
                    </div>
                    <div className={cl.buttons}>
                        <div className={cl.nak}>
                            <p className={cl.txt1}>1500 чел.</p>
                            <p className={cl.txt2}>Средний человекопоток мимо этого помещения по данным с видеокамер</p>
                        </div>
                        <div className={cl.nak}>
                            <p className={cl.txt1}>150.000₽</p>
                            <p className={cl.txt2}>У этого помещения самая низкая арендная плата среди подобных</p>
                        </div>
                        <div className={cl.nak}>
                            <p className={cl.txt1}>0</p>
                            <p className={cl.txt2}>Заведений подобного рода в округе</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfaHome;