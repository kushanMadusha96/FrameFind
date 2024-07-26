'use client'
import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { RiImageAddLine } from "react-icons/ri";
import styles from './CreateNewModal.module.css';

function CreateNewModal() {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.header}>
                <span className={styles.headerTitle}>
                    Create New,
                </span>
                <RxCross2
                    className={styles.closeIcon}
                    size={20}
                />
            </div>
            <div className={styles.centeredContainer}>
                <div 
                    onClick={() => { console.log("kushan") }} 
                    className={styles.addButton}
                >
                    <span className={styles.addButtonText}>Add Images & Videos</span>
                    <RiImageAddLine className={styles.addButtonIcon} color='#FBBC05' size={20} />
                </div>
            </div>
        </div>
    );
}

export default CreateNewModal;
