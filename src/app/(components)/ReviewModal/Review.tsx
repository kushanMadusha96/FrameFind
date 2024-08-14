import React from 'react';
import FiveStar from '../FiveStar/FiveStar';
import ProfileImage from '../ProfileImage/ProfileImage';
import seller from '../../../../public/user.jpg';
import styles from './Review.module.css';
import { RxCross2 } from "react-icons/rx";

function Review(props: { onClickCross?: () => void, onClickWriteReview?: () => void }) {
    const REVIEWS = [
        {
            imgUrl: seller,
            date: '22/10/2024',
            review: "Duis aute irure dolor in reprehendrit in voluptate velit esse cillumdolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            imgUrl: seller,
            date: '22/10/2024',
            review: "Duis aute irure dolor in reprehendrit in voluptate velit esse cillumdolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            imgUrl: seller,
            date: '22/10/2024',
            review: "Duis aute irure dolor in reprehendrit in voluptate velit esse cillumdolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            imgUrl: seller,
            date: '22/10/2024',
            review: "Duis aute irure dolor in reprehendrit in voluptate velit esse cillumdolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            imgUrl: seller,
            date: '22/10/2024',
            review: "Duis aute irure dolor in reprehendrit in voluptate velit esse cillumdolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            imgUrl: seller,
            date: '22/10/2024',
            review: "Duis aute irure dolor in reprehendrit in voluptate velit esse cillumdolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            imgUrl: seller,
            date: '22/10/2024',
            review: "Duis aute irure dolor in reprehendrit in voluptate velit esse cillumdolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ]
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <span className={styles.title}>Kushan's Reviews</span>
                <RxCross2 color='gray' size={20} className={styles.cross} onClick={props.onClickCross} />
            </div>
            <div className={styles.reviewContainer}>
                {REVIEWS.map((review, index) => (
                    <>
                        <div className={styles.profileContainer}>
                            <ProfileImage w={35} h={35} alt='profileImg' imgUrl={review.imgUrl} br={'50%'} />
                            <span className={styles.profileName}>Ashan Devinda</span>
                        </div>
                        <div className={styles.reviewMeta}>
                            <FiveStar size={10} readOnly coloredStarCount={6} />
                            <span className={styles.reviewDate}>{review.date}</span>
                        </div>
                        <p className={styles.reviewText}>{review.review}</p>
                    </>
                ))}
            </div>
            <button className={styles.reviewBtn} onClick={props.onClickWriteReview}>Write Review</button>
        </div>
    );
}

export default Review;
