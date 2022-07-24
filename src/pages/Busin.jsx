import React from 'react';
import cl from '../stylesPages/busin.module.css'
import Circle from "../Components/ForPages/Main/Circle";
import {RightOutlined, StarOutlined, UserOutlined} from "@ant-design/icons";
import {Select} from "antd";
import {Option} from "antd/es/mentions";
import {Link} from "react-router-dom";

const Busin = () => {
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
                        Сортировка по типу бизеса
                        <Select defaultValue="lucy" style={{ width: '20%' }} disabled>
                            <Option value="lucy">Пекарня</Option>
                        </Select>

                        <Select defaultValue="lucy" style={{ width: '20%' }} disabled>
                            <Option value="lucy">Краснодар</Option>
                        </Select>
                    </div>
                </div>

                <div className={cl.osnova}>

                    <div className={cl.block} style={{background: 'url("https://sun9-78.userapi.com/impf/jy8t0KOOhrlvgnm8YY0wVphRyK5vMHoux5KiEQ/JKAb_L4ouHw.jpg?size=265x362&quality=96&sign=d140b4fea2a3e84ae6c0e98e19eea005&type=album")'}}>
                        <div className={cl.photo}></div>
                        ><div className={cl.text}>
                            <p className={cl.izbr}><StarOutlined />Самый оптимальный вариант</p>
                            <p className={cl.jk}><Link to='/infoHome'>Краснодар, ЖК “Fresh”, д.1, пом. 2</Link><RightOutlined /></p>
                        </div>
                    </div>
                    <div className={cl.block} style={{background: 'url("https://sun9-78.userapi.com/impf/jy8t0KOOhrlvgnm8YY0wVphRyK5vMHoux5KiEQ/JKAb_L4ouHw.jpg?size=265x362&quality=96&sign=d140b4fea2a3e84ae6c0e98e19eea005&type=album")'}}>
                        <div className={cl.photo}></div>
                        <div className={cl.text}>
                            <p className={cl.jk}>Краснодар, ЖК “Fresh”,
                                д.2, пом. 4<RightOutlined /></p>
                        </div>
                    </div>
                    <div className={cl.block} style={{background: 'url("https://sun9-1.userapi.com/impf/DTSVMELQrDTSCHuvh4sS9V59qh2X2AR5vpmzAA/c9LU4wUqOWM.jpg?size=265x362&quality=95&sign=787722d6addf44910eb6a52ed7332756&type=album")'}}>
                        <div className={cl.photo}></div>
                        <div className={cl.text}>
                            <p className={cl.jk}>Краснодар, ЖК “URAL”,
                                д.3, пом. 5<RightOutlined /></p>
                        </div>
                    </div>
                    <div className={cl.block} style={{background: 'url("https://sun9-1.userapi.com/impf/DTSVMELQrDTSCHuvh4sS9V59qh2X2AR5vpmzAA/c9LU4wUqOWM.jpg?size=265x362&quality=95&sign=787722d6addf44910eb6a52ed7332756&type=album")'}}>
                        <div className={cl.photo}></div>
                        <div className={cl.text}>
                            <p className={cl.jk}>Краснодар, ЖК “URAL”,
                                д.3, пом. 6<RightOutlined /></p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Busin;