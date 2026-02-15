import React from 'react';
import './NavigationControls.scss';

interface NavigationControlsProps {
    currentIndex: number;
    total: number;
    onPrev: () => void;
    onNext: () => void;
    disabled?: boolean;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
    currentIndex,
    total,
    onPrev,
    onNext,
    disabled = false,
}) => {
    const displayIndex = String(currentIndex + 1).padStart(2, '0');
    const displayTotal = String(total).padStart(2, '0');

    return(
        <div className='nav-controls'>
            <span className='nav-controls__counter'>
                {displayIndex} / {displayTotal}
            </span>
            <div className='nav-controls__buttons'>
                <button
                className='nav-controls__btn'
                onClick={onPrev}
                disabled={disabled || currentIndex === 0}>
                    <svg width='10' height='14' viewBox='0 0 10 14' fill='none'>
                        <path d='M8.5 1L2 7L8.5 13' stroke='currentColor' strokeWidth='2'/>
                    </svg>
                </button>
                <button
                className='nav-controls__btn'
                onClick={onNext}
                disabled={disabled || currentIndex === total - 1}>
                    <svg width='10' height='14' viewBox='0 0 10 14' fill='none'>
                        <path d='M1.5 1L8 7L1.5 13' stroke='currentColor' strokeWidth='2'/>
                    </svg>
                </button>
            </div>
        </div>
    );
};