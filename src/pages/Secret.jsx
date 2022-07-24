import React, {useState} from 'react';
import cl from '../stylesPages/Secret.module.css'
import Circle from "../Components/ForPages/Main/Circle";
import axios from "axios";
const Secret = () => {

    let width = 0
    if (window.innerWidth > 700) {
        width = 150
    } else {
        width = 50
    }
    const [infa, setInfa]=useState()
    const subscribe = async ()=>{
        try {
            const {data} = await axios.get('http://10.1.1.141:8000/stats')
            await subscribe()
            setInfa(data)
            return 0
        } catch(e){

        }
    }
    subscribe()
    return (
        <div className={cl.body}>
            <Circle left={10} top={15} width={width * 3} chis={300}/>
            <Circle left={45} top={40} width={width} chis={0}/>
            <Circle left={65} top={20} width={width * 2} chis={600}/>
            <div className={cl.developer}>
                <div className={cl.osnova}>
                    <img src='http://10.1.0.143:8080/video'/>
                    <div className={cl.info}>
                        <p className={cl.cater}>Количество прохожих:{infa.count} </p>
                        <br/>
                        <p className={cl.cater}>Возрастные категории: </p>
                        <table>
                            <tr><th>4-6</th><td>{infa['46']}%</td></tr>
                            <tr><th>8-12</th><td>{infa['812']}%</td></tr>
                            <tr><th>15-20</th><td>{infa['1520']}%</td></tr>
                            <tr><th>25-32</th><td>{infa['2532']}%</td></tr>
                            <tr><th>38-43</th><td>{infa['3843']}%</td></tr>
                            <tr><th>48-53</th><td>{infa['4853']}%</td></tr>
                            <tr><th>60-100</th><td>{infa['60100']}%</td></tr>
                        </table>
                        <p className={cl.cater}>Гендерный портрет: </p>
                        <p className={cl.p}>Мужчин: {infa.male}%</p>
                        <p className={cl.p}>Женщин: {infa.female}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Secret;