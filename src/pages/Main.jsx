import React from 'react';
import HeaderMain from "../Components/ForPages/Main/HeaderMain";
import Circle from "../Components/ForPages/Main/Circle";
import cl from '../stylesPages/Main.module.css'
import MenuPage from "../Components/ForPages/Main/MenuPage";
const Main = () => {
    let width = 0
    if (window.innerWidth > 700) {
        width = 150
    } else {
        width = 50
    }

    return (
        <div className={cl.body}>
            <Circle left={10} top={15} width={width*3} chis={300}/>
            <Circle left={45} top={40} width={width} chis={0}/>
            <Circle left={65} top={20} width={width*2} chis={600}/>
            <MenuPage/>
        </div>
    );
};

export default Main;