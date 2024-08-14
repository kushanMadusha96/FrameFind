import React from 'react';
import { RxCross2 } from "react-icons/rx";
import FiveStar from '../FiveStar/FiveStar';
import Button from '../Button/Button';
import styles from './WriteReview.module.css';

function WriteReview(props: { onClickCross?: () => void, onClickSend?: () => void }) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.headerText}>
                    Write Your Review,
                </span>
                <RxCross2
                    onClick={props.onClickCross}
                    className={styles.closeIcon}
                    size={20}
                />
            </div>
            <input
                type='text'
                placeholder='Write Review'
                className={styles.inputField}
            />
            <span className={styles.ratingLabel}>Rate work,</span>
            <div className={styles.ratingContainer}>
                <FiveStar size={25} readOnly={false} />
            </div>
            <div className={styles.buttonContainer}>
                <Button
                    fs={13}
                    w={'100%'}
                    text='Send Review'
                    bc='#FFC107'
                    color='white'
                    br={3}
                    pt={5}
                    pb={5}
                    onClick={props.onClickSend}
                />
            </div>
        </div>
    );
}

export default WriteReview;
