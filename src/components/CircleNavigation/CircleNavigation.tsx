import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { TimePeriod } from '../../types';
import './CircleNavigation.scss';

interface CircleNavigationProps {
    periods: TimePeriod[];
    activeIndex: number;
    onSelect: (index: number) => void;
}

export const CircleNavigation: React.FC<CircleNavigationProps> = ({
    periods,
    activeIndex,
    onSelect,
}) => {
    const circleRef = useRef<HTMLDivElement>(null);
    const [ hoveredIndex, setHoveredIndex ] = useState<number | null>(null);
    const count = periods.length;
    const radius = 265;
    
    const angleStep = 360 / count;
    const startAngle = -60;

    useEffect(() => {
        if(!circleRef.current) return;

        const rotation = -(activeIndex * angleStep);
        gsap.to(circleRef.current, {
            rotation: rotation,
            duration: 1,
            ease: 'power2.inOut',
        });

        const dots = circleRef.current.querySelectorAll('.circle-nav__dot');
        dots.forEach((dot) => {
            gsap.to(dot, {
                rotation: -rotation,
                duration: 1,
                ease: 'power2.inOut',
            });
        });
    }, [activeIndex, angleStep]);

    return(
        <div className='circle-nav'>
            <div className='circle-nav__circle' ref={circleRef}>
                {periods.map((period, index) => {
                    const angle = startAngle + index * angleStep;
                    const rad = (angle * Math.PI) / 180;
                    const x = radius + radius * Math.cos(rad);
                    const y = radius + radius * Math.sin(rad);

                    const isActive = index === activeIndex;
                    const isHovered = hoveredIndex === index;

                    return(
                        <div
                        key={period.id}
                        className={`circle-nav__dot ${isActive ? 'circle-nav__dot--active' : ''}`}
                        style={{
                            left: `${x}px`,
                            top: `${y}px`,
                        }}
                        onClick={() => onSelect(index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <span className='circle-nav__dot-number'>{index + 1}</span>
                            {(isActive || isHovered) && (
                                <span className='circle-nav__dot-label'>{period.label}</span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};