import React from 'react';
import FiveStar from '../FiveStar/FiveStar';
import ProfileImage from '../ProfileImage/ProfileImage';
import seller from '../../../../public/user.jpg';
import styles from './Review.module.css';

function Review() {
    return (
        <>
            <div className={styles.profileContainer}>
                <ProfileImage w={35} h={35} alt='profileImg' imgUrl={seller} br={'50%'} />
                <span className={styles.profileName}>Ashan Devinda</span>
            </div>
            <div className={styles.reviewMeta}>
                <FiveStar size={10} />
                <span className={styles.reviewDate}>22/10/2024</span>
            </div>
            <p className={styles.reviewText}>
                Duis aute irure dolor in reprehendrit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className={styles.replyButton}>Reply</button>
        </>
    );
}

export default Review;
