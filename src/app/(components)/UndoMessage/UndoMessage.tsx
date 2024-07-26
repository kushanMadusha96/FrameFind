import React from 'react';
import styles from './UndoMessage.module.css';

const UndoMessage: React.FC = () => {
    return (
        <div className={styles.container}>
            <span className={styles.text}>Removing 1 notification</span>
            <span className={styles.boldText}>undo</span>
        </div>
    );
};

export default UndoMessage;
