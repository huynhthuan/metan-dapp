import React, { useState } from 'react';

export default function FilterCheckBoxItem({ title, icon, titleColorClass }) {
    const [state, setstate] = useState('');
    return (
        <label className="filter-item-root filter-item">
            <div
                className={`checkbox-item ${state}`}
                onClick={() => {
                    if (state !== 'active') {
                        setstate('active');
                    } else {
                        setstate('');
                    }
                }}
            >
                <span className="checkbox"></span>
                <span className={`label ${titleColorClass}`}>
                    {icon ? (
                        <img
                            className="filter-item-icon"
                            src={`/img/decoration/${icon}.png`}
                            alt=""
                        />
                    ) : (
                        ''
                    )}
                    {title}
                </span>
            </div>
        </label>
    );
}
