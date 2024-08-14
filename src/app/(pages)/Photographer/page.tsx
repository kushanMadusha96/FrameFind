'use client'
import ProfileImage from '@/app/(components)/ProfileImage/ProfileImage'
import React, { useState, useEffect } from 'react'
import user from '../../../../public/user.jpg'
import styles from './Photographer.module.css'
import '../../globals.css'
import Button from '@/app/(components)/Button/Button'
import { IoIosArrowDown } from "react-icons/io";
import Post from '@/app/(components)/Post/Post'
import SellerProfile from '@/app/(components)/SellerProfile/SellerProfile'
import { IoAddSharp } from "react-icons/io5";
import EventBtn from '@/app/(components)/EventBtn/EventBtn'
import CreateNewModal from '@/app/(components)/CreateNewModal/CreateNewModal'
import CreateNewModal_02 from '@/app/(components)/CreateNewModal02/CreateNewModal_02'
import PersonalInfo from '@/app/(components)/PersonalInfo/PersonalInfo'
import PersonalInfoForm from '@/app/(components)/PersonalInfoForm/PersonalInfoForm'
import SocialLinksForm from '@/app/(components)/SocialLinksForm/SocialLinksForm'
import EventSelection from '@/app/(components)/EventSelectionForm/EventSelection'
import Review from '@/app/(components)/ReviewModal/Review'
import WriteReview from '@/app/(components)/WriteReview/WriteReview'

function Photographer() {
    const [showSellerPackage, setShowSellerPackage] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [showWriteReviewModal, setShowWriteReviewModal] = useState(false);

    const [currentUser, setCurrentUser] = useState('buyer');
    const [dimensions, setDimensions] = useState({ height: 60, width: 60 });
    const [showCreateModel, setShowCreateModel] = useState(false);
    const [showAddImgModel, setShowAddImgModel] = useState(false);
    const [showPersonalInfoFormModel, setShowPersonalInfoFormModel] = useState(false);
    const [showSocialsLinkModel, setShowSocialsLinkModel] = useState(false);
    const [showAddEventModel, setShowAddEventModel] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setDimensions({ height: 40, width: 40 });
            } else {
                setDimensions({ height: 60, width: 60 });
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.container}>
            {/* {showPersonalInfoPopup &&
                <div style={{ position: 'sticky', top: 100, zIndex: 4 }}>
                    <PersonalInfo onClickCross={() => !isShowPersonalInfoPopUp} />
                </div>
            } */}
            {showPersonalInfoFormModel &&
                <div className={styles.popUp}>
                    <PersonalInfoForm onClickNext={() => { setShowSocialsLinkModel(true); setShowPersonalInfoFormModel(false) }} onClickFillLater={() => setShowPersonalInfoFormModel(false)} />
                </div>
            }
            {showSocialsLinkModel &&
                <div className={styles.popUp}>
                    <SocialLinksForm onClickNext={() => { setShowAddEventModel(true); setShowSocialsLinkModel(false) }} onClickFillLater={() => setShowSocialsLinkModel(false)} />
                </div>
            }
            {showAddEventModel &&
                <div className={styles.popUp}>
                    <EventSelection onClickNext={() => setShowAddEventModel(false)} onClickFillLater={() => setShowAddEventModel(false)} />
                </div>
            }
            {/* <div className={styles.popUp}>
                <PersonalInfo onClickEditInfo={() => setShowPersonalInfoFormModel(true)} />
            </div> */}
            {showCreateModel &&
                <div className={styles.popUp}>
                    <CreateNewModal onClickCross={() => setShowCreateModel(false)} onClickAddImg={() => { setShowCreateModel(false); setShowAddImgModel(true) }} />
                </div>
            }
            {showAddImgModel &&
                <div className={styles.popUp}>
                    <CreateNewModal_02 onClickCross={() => setShowAddImgModel(false)} />
                </div>
            }
            <div className={styles.header}>
                <div className={styles.profile}>
                    <ProfileImage alt='photographer' imgUrl={user} br={'50%'} h={dimensions.height} w={dimensions.width} key={'pht'} ml={20} />
                    <span className={styles.name}>Kushan Madusha</span>
                </div>
                {currentUser === 'seller' ?
                    <div className={styles.details} onClick={() => setShowCreateModel(true)}>
                        <div className={styles.btnPopUp}>
                            <span className={styles.btnText}>Create Your Album</span>
                            <IoAddSharp color='#FFC107' size={18} />
                        </div>
                    </div>
                    :
                    <div className={styles.details}>
                        <div className={styles.btnPopUp} onClick={() => setShowSellerPackage(true)}>
                            <span className={styles.btnText}>Contact & Packages</span>
                            <IoIosArrowDown color='#FFC107' size={16} />
                        </div>
                        {showSellerPackage && <SellerProfile onClickCross={() => setShowSellerPackage(false)} onClickSeeReview={() => { setShowReviewModal(true), setShowSellerPackage(false) }} />}
                        {showReviewModal && <Review onClickCross={() => setShowReviewModal(false)} onClickWriteReview={() => { setShowWriteReviewModal(true), setShowReviewModal(false) }} />}
                        {showWriteReviewModal && <WriteReview onClickCross={() => setShowWriteReviewModal(false)} onClickSend={() => setShowWriteReviewModal(false)} />}
                    </div>
                }
            </div>

            <section className={styles.postContainer}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <Post key={index} display='none' />
                ))}
            </section>
        </div>
    )
}

export default Photographer

