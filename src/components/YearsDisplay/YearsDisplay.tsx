import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './YearsDisplay.scss';

interface YearsDisplayProps {
    startYear: number;
    endYear: number;
    onComplete?: () => void;
}

export const YearsDisplay: React.FC<YearsDisplayProps> = ({
    startYear,
    endYear,
    onComplete,
}) => {
    const startRef = useRef<HTMLSpanElement>(null);
    const endRef = useRef<HTMLSpanElement>(null);
    const prevStartRef = useRef(startYear);
    const prevEndRef = useRef(endYear);

    useEffect(() => {
        const obj = {
            start: prevStartRef.current,
            end: prevEndRef.current,
        };

        gsap.to(obj, {
            start: startYear,
            end: endYear,
            duration: 1,
            ease: 'power2.inOut',
            onUpdate: () => {
                if(startRef.current) {
                    startRef.current.textContent = Math.round(obj.start).toString();
                }
                if(endRef.current) {
                    endRef.current.textContent = Math.round(obj.end).toString();
                }
            },
            onComplete: () => {
                prevStartRef.current = startYear;
                prevEndRef.current = endYear;
                onComplete?.();
            },
        });
    }, [startYear, endYear, onComplete]);

    return(
        <div className='years-display'>
            <span className='years-display__start' ref={startRef}>
                {startYear}
            </span>
            <span className='years-display__end' ref={endRef}>
                {endYear}
            </span>
        </div>
    );
};