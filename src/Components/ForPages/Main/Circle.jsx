import React, {useEffect, useState} from 'react';
import cl from './Circles.module.css'
import {wait} from "@testing-library/user-event/dist/utils";
import {useSpring, animated} from "react-spring";


const Circle = ({left, top, width, chis}) => {
    const styles = useSpring({
        loop: {reverse: true},
        from: {y: 0},
        to: {y: 150},
        config: {
            duration: 1700 + chis
        }
    })

    return (
        <animated.div className={cl.circle1}
                      style={{
                          left: `${left}vw`,
                          top: `${top}vh`,
                          width: `${width}px`,
                          height: `${width}px`,
                          ...styles,
                      }}
        />
    )
};

export default Circle;