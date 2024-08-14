'use client'
import NavBar from '@/app/(components)/NavBar/NavBar'
import Post from '@/app/(components)/Post/Post'
import React, { useState } from 'react'
import styles from './HomePage.module.css'
import PersonalInfo from '@/app/(components)/PersonalInfo/PersonalInfo'
import SellerProfile from '@/app/(components)/SellerProfile/SellerProfile'
import DropDown from '@/app/(components)/DropDown/DropDown'
import EventBtn from '@/app/(components)/EventBtn/EventBtn'
import { RxCrossCircled } from "react-icons/rx";
import Review from '@/app/(components)/ReviewModal/Review'
import WriteReview from '@/app/(components)/WriteReview/WriteReview'

function HomePage() {
    const [showSellerPackage, setShowSellerPackage] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [showWriteReviewModal, setShowWriteReviewModal] = useState(false);

    const [showLocationDropDown, setShowLocationDropDown] = useState(true);
    const [showEventDropDown, setShowEventDropDown] = useState(true);
    const [selectedLocation, setSelectedLocation] = useState("Polonnaruwa");
    const [selectedEvent, setSelectedEvent] = useState("Wedding");

    const handleLocationSelect = (location: string) => {
        setSelectedLocation(location);
        setShowLocationDropDown(false);
    };

    const handleEventSelect = (event: string) => {
        setSelectedEvent(event);
        setShowEventDropDown(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.filterTitleContainer}>
                {showLocationDropDown ?
                    <DropDown title={'Location'} onSelect={handleLocationSelect} />
                    :
                    <SelectedTitle title={selectedLocation} onClickCross={() => setShowLocationDropDown(true)} />
                }
                {showEventDropDown ?
                    <DropDown ml={20} title={'Event'} onSelect={handleEventSelect} menuMarginL={20} />
                    :
                    <SelectedTitle ml={20} title={selectedEvent} onClickCross={() => setShowEventDropDown(true)} />
                }
            </div>
            <div className={styles.postContainer}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <Post key={index} onClickPackage={() => setShowSellerPackage(true)} />
                ))}
            </div>
            {showSellerPackage && <SellerProfile onClickCross={() => setShowSellerPackage(false)} onClickSeeReview={() => { setShowReviewModal(true), setShowSellerPackage(false) }} />}
            {showReviewModal && <Review onClickCross={() => setShowReviewModal(false)} onClickWriteReview={() => { setShowWriteReviewModal(true), setShowReviewModal(false) }} />}
            {showWriteReviewModal && <WriteReview onClickCross={() => setShowWriteReviewModal(false)} onClickSend={() => setShowWriteReviewModal(false)} />}
        </div>
    )
}

export default HomePage

export function SelectedTitle(props: { ml?: number, title: string, onClickCross?: () => void }) {
    return (
        <div>
            <div className={styles.titleContainer} style={{ marginLeft: props.ml }}>
                <span className={styles.title}>{props.title}</span>
                <RxCrossCircled className={styles.crossIcon} size={20} color='black' onClick={props.onClickCross} />
            </div>
        </div>
    );
}
