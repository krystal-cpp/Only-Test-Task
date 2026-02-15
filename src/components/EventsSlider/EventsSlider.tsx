import React, { useRef, useState } from 'react';
import './EventsSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { HistoricalEvent } from '@/types';
import 'swiper/css';
import 'swiper/css/navigation';

interface EventsSliderProps {
    events: HistoricalEvent[];
}

export const EventsSlider: React.FC<EventsSliderProps> =  ({ events }) => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const swiperRef = useRef<SwiperType | null>(null);
    const [ isBeginning, setIsBeginning ] = useState(true);
    const [ isEnd, setIsEnd ] = useState(false);
    
    const updateNavState = (swiper: SwiperType) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const handleBeforeInit = (swiper: SwiperType) => {
        if(swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
        }
    };

    const handleSwiper = (swiper: SwiperType) => {
        swiperRef.current = swiper;
        updateNavState(swiper);
    };

    return(
        <div className='events-slider'>
            <button
            ref={prevRef}
            className={`events-slider__arrow events-slider__arrow--prev ${isBeginning ? 'events-slider__arrow--disabled' : ''}`}
            onClick={() => swiperRef.current?.slidePrev()}>
                <svg width='10' height='14' viewBox='0 0 10 14' fill='none'>
                    <path d='M8.5 1L2 7L8.5 13' stroke='#3877EE' strokeWidth='2'/>
                </svg>
            </button>

            <Swiper
            modules={[Navigation]}
            spaceBetween={80}
            slidesPerView={3}
            onBeforeInit={handleBeforeInit}
            onSwiper={handleSwiper}
            onSlideChange={updateNavState}
            onReachBeginning={updateNavState}
            onReachEnd={updateNavState}
            onFromEdge={updateNavState}
            breakpoints={{
                0: {
                    slidesPerView: 1.5,
                    spaceBetween: 25,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 80,
                },
            }}
            className='events-slider__swiper'>
                {events.map((event, index) => (
                    <SwiperSlide key={index}>
                        <div className='events-slider__card'>
                            <h3 className='events-slider__year'>{event.year}</h3>
                            <p className='events-slider__description'>{event.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
            ref={nextRef}
            className={`events-slider__arrow events-slider__arrow--next ${isEnd ? 'events-slider__arrow--disabled' : ''}`}
            onClick={() => swiperRef.current?.slideNext()}>
                <svg width='10' height='14' viewBox='0 0 10 14' fill='none'>
                    <path d='M1.5 1L8 7L1.5 13' stroke='#3877EE' strokeWidth='2'/>
                </svg>
            </button>
        </div>
    );
};