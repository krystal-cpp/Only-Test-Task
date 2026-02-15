import React from 'react';
import './MobilePagination.scss';

interface MobilePaginationProps {
    total: number;
    activeIndex: number;
    onSelect: (index: number) => void;
}

export const MobilePagination: React.FC<MobilePaginationProps> = ({
    total,
    activeIndex,
    onSelect,
}) => {
    return(
        <div className='mobile-pagination'>
            {Array.from({ length: total }, (_, i) => (
                <button
                key={i}
                className={`mobile-pagination__dot ${i === activeIndex ? 'mobile-pagination__dot--active' : ''}`}
                onClick={() => onSelect(i)}
                />
            ))}
        </div>
    );
};