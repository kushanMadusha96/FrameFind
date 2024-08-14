import React from 'react';
import { RxCross2 } from "react-icons/rx";
import ProfileImage from '../ProfileImage/ProfileImage';
import user from '../../../../public/user.jpg';
import { IoCamera } from "react-icons/io5";
import TextLabel from '../TextLabel/TextLabel';
import ImageLabel from '../ImageLabel/ImageLabel';
import instaLogo from '../../../../public/Instalogo.webp';
import tiktoklogo from '../../../../public/tiktoklogo.png';
import fblogo from '../../../../public/fblogo.png';
import watsapplogo from '../../../../public/wts.png';
import phoneImg from '../../../../public/call.png';
import emailImg from '../../../../public/email.png';
import Button from '../Button/Button';
import styles from './PersonalInfo.module.css'

function PersonalInfo(props: { onClickCross?: () => void, onClickEditInfo?: () => void }) {
    return (
        <div className={styles.container}>
            <RxCross2 color='gray' size={20} className={styles.closeIcon} onClick={props.onClickCross} />
            <div className={styles.profileImageContainer}>
                <ProfileImage imgUrl={user} w={50} h={50} br={'50%'} alt='sellerProPic' />
                <IoCamera size={20} color='gray' className={styles.cameraIcon} />
            </div>
            <span className={styles.sectionTitle}>Packages</span>
            <div className={styles.textLabels}>
                <TextLabel event='Name' price='kushan madusha basnayaka' mb={5} />
                <TextLabel event='Address' price='216, medagama dewagala' mb={5} />
                <TextLabel event='District' price='polonnaruwa' mb={5} />
                <TextLabel event='NIC' price='200224000741' mb={5} />
            </div>
            <span className={styles.sectionTitle}>Contact</span>
            <div className={styles.imageLabels}>
                <ImageLabel alt='mobileImg01' h={25} w={25} imgUrl={phoneImg} text='0772461021' br={'50%'} mb={5} />
                <ImageLabel alt='mobileImg02' h={25} w={25} imgUrl={phoneImg} text='0775017154' br={'50%'} mb={5} />
                <ImageLabel alt='watsappImg' h={25} w={25} imgUrl={watsapplogo} text='0772461021' br={'50%'} mb={5} />
                <ImageLabel alt='emailImg' h={25} w={25} imgUrl={emailImg} text='kushanmadusha62@gmail.com' br={'50%'} mb={5} />
            </div>
            <span className={styles.sectionTitle}>Socials</span>
            <div className={styles.imageLabels}>
                <ImageLabel alt='fblogo' h={25} w={25} imgUrl={fblogo} text='Facebook' br={'50%'} mb={5} />
                <ImageLabel alt='tiktoklogo' h={25} w={25} imgUrl={tiktoklogo} text='TikTok' br={'50%'} mb={5} />
                <ImageLabel alt='instalogo' h={25} w={25} imgUrl={instaLogo} text='Instagram' br={'50%'} mb={5} />
            </div>
            <span className={styles.sectionTitle}>Packages</span>
            <div className={styles.textLabels}>
                <TextLabel event='Wedding' price='From 20000.00' mb={5} />
                <TextLabel event='Birthday' price='From 3000' />
            </div>
            <div className={styles.buttonContainer}>
                <Button w={'90%'} h={35} text='Edit Info' borderColor='#FFC107' color='#FFC107' borderWidth={1} br={5} onClick={props.onClickEditInfo} />
            </div>
        </div>
    );
}

export default PersonalInfo;
