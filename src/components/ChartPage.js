import React from 'react';
import DrawerPage from './DrawerPage';
import data from '../json_data/data.json';

const ChartPage = () => {

    data.map((d) => console.log(d.sector))

    return (
        <div>
            <DrawerPage />
            <h2>ChartPage</h2>
        </div>
    );
}

export default ChartPage;