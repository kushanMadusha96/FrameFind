import React from 'react';
import { MdKeyboardArrowLeft } from "react-icons/md";
import ProfileImage from '../ProfileImage/ProfileImage';
import TextLabel from '../TextLabel/TextLabel';
import ImageLabel from '../ImageLabel/ImageLabel';
import instaLogo from '../../../../public/Instalogo.webp';
import user from '../../../../public/user.jpg';
import tiktoklogo from '../../../../public/tiktoklogo.png';
import fblogo from '../../../../public/fblogo.png';
import watsapplogo from '../../../../public/wts.png';
import phoneImg from '../../../../public/call.png';
import emailImg from '../../../../public/email.jpg';
import styles from './SellerProfile.module.css';

function SellerProfile() {
    return (
        <div className={styles.container}>
            <MdKeyboardArrowLeft color='gray' size={25} />
            <div className={styles.profileImageContainer}>
                <ProfileImage imgUrl={user} w={50} h={50} br={'50%'} alt='sellerProPic' />
            </div>
            <div className={styles.profileNameContainer}>
                <span className={styles.profileName}>Kushan Madusha</span>
            </div>
            <span className={styles.sectionTitle}>Packages</span>
            <div className={styles.packageList}>
                <TextLabel event='Wedding' price='2000.00' ml={15} mb={5} mr={15} />
                <TextLabel event='Birthday' price='3000.00' ml={15} mr={15} />
            </div>
            <span className={styles.sectionTitle}>Contact</span>
            <div className={styles.contactList}>
                <ImageLabel alt='mobileImg01' h={25} w={25} imgUrl={phoneImg} text='0772461021' br={'50%'} mb={5} ml={15} mr={15} />
                <ImageLabel alt='mobileImg02' h={25} w={25} imgUrl={phoneImg} text='0775017154' br={'50%'} mb={5} ml={15} mr={15} />
                <ImageLabel alt='watsappImg' h={25} w={25} imgUrl={watsapplogo} text='0772461021' br={'50%'} mb={5} ml={15} mr={15} />
                <ImageLabel alt='emailImg' h={25} w={25} imgUrl={emailImg} text='kushanmadusha62@gmail.com' br={'50%'} mb={5} ml={15} mr={15} />
            </div>
            <div className={styles.socialIconsContainer}>
                <ProfileImage imgUrl={fblogo} w={30} h={30} alt='fbImg' br={'50%'} ml={3} mr={3} />
                <ProfileImage imgUrl={instaLogo} w={30} h={30} alt='instaImg' br={'50%'} ml={3} mr={3} />
                <ProfileImage imgUrl={tiktoklogo} w={30} h={30} alt='tiktokImg' br={'50%'} ml={3} mr={3} />
            </div>
            <div className={styles.reviewsContainer}>
                <span className={styles.reviewsText}>REVIEWS</span>
            </div>
        </div>
    )
}

export default SellerProfile;
