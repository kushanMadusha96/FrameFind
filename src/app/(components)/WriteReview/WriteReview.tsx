import React from 'react';
import { RxCross2 } from "react-icons/rx";
import Review from '../Review/Review';
import FiveStar from '../FiveStar/FiveStar';
import Button from '../Button/Button';
import styles from './WriteReview.module.css';

function WriteReview() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.headerText}>
                    Write Your Review,
                </span>
                <RxCross2
                    className={styles.closeIcon}
                    size={20}
                />
            </div>
            <input
                type='text'
                placeholder='write review'
                className={styles.inputField}
            />
            <span className={styles.ratingLabel}>Rate work,</span>
            <div className={styles.ratingContainer}>
                <FiveStar size={25} readOnly={false} />
            </div>
            <div className={styles.buttonContainer}>
                <Button
                    w={'100%'}
                    h={35}
                    text='SEND REVIEW'
                    borderColor='#FFC107'
                    color='#FFC107'
                    borderWidth={1}
                    br={5}
                />
            </div>
        </div>
    );
}

export default WriteReview;
