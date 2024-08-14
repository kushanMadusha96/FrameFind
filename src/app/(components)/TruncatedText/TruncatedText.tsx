import React, { FC, useState } from 'react';
import styles from './TruncatedText.module.css'

interface TruncatedTextProps {
    text: string;
    maxLength: number;
  }

const TruncatedText : FC<TruncatedTextProps> = ({ text, maxLength }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (

        <div>
            {isExpanded ? (
                <span className={styles.eventText}>{text}</span>
            ) : (
                <span className={styles.eventText}>{text.substring(0, maxLength)}...</span>
            )}
            <span className={styles.seeMore} onClick={handleToggle}>
                {isExpanded ? ' show less' : ' see more'}
            </span>
        </div>
    );
};

export default TruncatedText;
