'use client'
import React, { useState } from 'react'
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import styles from './FiveStar.module.css'

interface FiveStarProps {
    size: number;
    ml?: number;
    mr?: number;
    readOnly?: boolean;
    coloredStarCount?: number;
}

function FiveStar({ size, ml, mr, readOnly = false, coloredStarCount = 0 }: FiveStarProps) {
    const [stars, setStars] = useState([false, false, false, false, false]);

    const handleStarChange = (starIndex: number) => {
        setStars(stars.map((star, index) => (index === starIndex ? !star : star)));
    };

    return (
        <div className={styles.container} style={{ marginLeft: ml, marginRight: mr }}>
            {!readOnly ? (
                <>
                    {stars.map((star, index) => (
                        star ? (
                            <IoIosStar
                                key={index}
                                size={size}
                                className={styles.star}
                                color='#FFC107'
                                onClick={() => handleStarChange(index)}
                            />
                        ) : (
                            <IoIosStarOutline
                                key={index}
                                size={size}
                                className={styles.star}
                                onClick={() => handleStarChange(index)}
                            />
                        )
                    ))}
                </>
            ) : (
                <>
                    {Array.from({ length: coloredStarCount > 5 ? 5 : coloredStarCount }, (_, index) => (
                        <IoIosStar
                            key={index}
                            size={size}
                            className={styles.star}
                            color='#FFC107'
                        />
                    ))}
                    {Array.from({ length: 5 - coloredStarCount }, (_, index) => (
                        <IoIosStarOutline
                            key={index + coloredStarCount}
                            size={size}
                            className={styles.star}
                        />
                    ))}
                </>
            )}
        </div>
    )
}

export default FiveStar