import React from 'react';
import data from './PeopleOld.json'
import {Column} from "@ant-design/charts";

const Age = () => {
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: '类别',
            },
            sales: {
                alias: '销售额',
            },
        },
    };
    return (
        <div>
            <Column {...config} />
        </div>
    );
};

export default Age;