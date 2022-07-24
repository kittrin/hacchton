import React from 'react';
import Circle from "../Components/ForPages/Main/Circle";
import cl from '../stylesPages/SortPlace.module.css'
import {Select} from "antd";
import {Option} from "antd/es/mentions";
import {StarOutlined} from "@ant-design/icons";

const SortPlace = () => {
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
                        Сортировка по местоположению
                        <Select defaultValue="lucy" style={{width: '20%'}} disabled>
                            <Option value="lucy">Краснодар</Option>
                        </Select>

                        <Select defaultValue="lucy" style={{width: '20%'}} disabled>
                            <Option value="lucy">ЖК "Fresh"</Option>
                        </Select>
                    </div>
                </div>
                <div className={cl.osnova}>
                    <div className={cl.block1}>
                        <div className={cl.pharmacy}>
                            <p className={cl.zag}>
                                <StarOutlined style={{paddingRight: 10}} />
                                Аптека
                            </p>
                            <p className={cl.txt}>Самый оптимальный вариант</p>
                        </div>
                        <div className={cl.salon}>
                            <p className={cl.zag}>Салон красоты</p>
                        </div>
                    </div>
                    <div className={cl.block2}>
                        <div className={cl.coffee}><p className={cl.zag}>Кофейня</p></div>
                        <div className={cl.cake}><p className={cl.zag}>Пекарня</p></div>
                        <div className={cl.product}><p className={cl.zag}>Продуктовый магазин</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortPlace;