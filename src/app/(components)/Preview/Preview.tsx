import React from 'react';
import ProfileImage from '../ProfileImage/ProfileImage';
import user from '../../../../public/user.jpg';
import { MdArrowForwardIos } from "react-icons/md";
import styles from './Preview.module.css';

function Preview() {
    return (
        <div className={styles.previewContainer}>
            <span className={styles.previewTitle}>Preview,</span>
            <div className={styles.imageContainer}>
                <ProfileImage alt='preview' w={'18vw'} h={'17vw'} imgUrl={user} br={5} />
            </div>
            <MdArrowForwardIos color='gray' size={30} className={styles.arrowIcon} />
        </div>
    );
}

export default Preview;
