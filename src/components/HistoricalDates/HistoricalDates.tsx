import React, { useState, useCallback } from 'react';
import { TimePeriod } from '@/types';
import { CircleNavigation } from '../CircleNavigation/CircleNavigation';
import { YearsDisplay } from '../YearsDisplay/YearsDisplay';
import { EventsSlider } from '../EventsSlider/EventsSlider';
import { NavigationControls } from '../NavigationControls/NavigationControls';
import { MobilePagination } from '../MobilePagination/MobilePagination';
import './HistoricalDates.scss';

interface HistoricalDatesProps {
    periods: TimePeriod[];
    title?: string;
}

export const HistoricalDates: React.FC<HistoricalDatesProps> = ({ periods, title = 'Исторические даты' }) => {
    const [ activeIndex, setActiveIndex ] = useState(0);
    const [ isAnimating, setIsAnimating ] = useState(false);

    const handleChange = useCallback((index: number) => {
        if(isAnimating || index === activeIndex) return;
        setIsAnimating(true);
        setActiveIndex(index);
    }, [isAnimating, activeIndex]);

    const handlePrev = useCallback(() => {
        if(activeIndex > 0) {
            handleChange(activeIndex - 1);
        }
    }, [activeIndex, handleChange]);

    const handleNext = useCallback(() => {
        if(activeIndex < periods.length - 1) {
            handleChange(activeIndex + 1);
        }
    }, [activeIndex, periods.length, handleChange]);

    const handleAnimationComplete = useCallback(() => {
        setIsAnimating(false);
    }, []);

    const activePeriod = periods[activeIndex];

    return(
        <div className='historical-dates'>
            <div className='historical-dates__vertical-line'/>
            <div className='historical-dates__horizontal-line'/>

            <div className='historical-dates__container'>
                <h2 className='historical-dates__title'>{title}</h2>

                <div className='historical-dates__main'>
                    <CircleNavigation
                    periods={periods}
                    activeIndex={activeIndex}
                    onSelect={handleChange}/>

                    <YearsDisplay
                    startYear={activePeriod.startYear}
                    endYear={activePeriod.endYear}
                    onComplete={handleAnimationComplete}/>
                </div>

                <div className='historical-dates__mobile-category'>
                    {activePeriod.label}
                </div>

                <div className='historical-dates__mobile-divider'/>

                <div className='historical-dates__bottom'>
                    <div className='historical-dates__nav'>
                        <NavigationControls
                        currentIndex={activeIndex}
                        total={periods.length}
                        onPrev={handlePrev}
                        onNext={handleNext}
                        disabled={isAnimating}/>
                    </div>

                    <div className='historical-dates__slider'>
                        <EventsSlider
                        events={activePeriod.events}
                        key={activePeriod.id}/>
                    </div>
                    
                    <div className='historical-dates__footer'>
                        <NavigationControls
                        currentIndex={activeIndex}
                        total={periods.length}
                        onPrev={handlePrev}
                        onNext={handleNext}
                        disabled={isAnimating}/>
                        <MobilePagination
                        total={periods.length}
                        activeIndex={activeIndex}
                        onSelect={handleChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
};