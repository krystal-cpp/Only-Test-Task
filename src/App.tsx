import React from 'react';
import { HistoricalDates } from './components/HistoricalDates/HistoricalDates';
import { periodsData } from './data/periods';

export const App: React.FC = () => {
    return(
        <div className='page'>
            <HistoricalDates periods={periodsData} title='Исторические даты'/>
        </div>
    );
};