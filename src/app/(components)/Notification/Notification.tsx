import React from 'react';
import ProfileImage from '../ProfileImage/ProfileImage';
import { StaticImageData } from 'next/image';
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from './Notification.module.css'; // Create this CSS module

function Notification(props: { key?: number, message: string, imgUrl: string | StaticImageData }) {
  return (
    <div className={styles.notification}>
      <div className={styles.content}>
        <ProfileImage alt='notificationProfileImg' w={30} h={30} br={'50%'} imgUrl={props.imgUrl} ml={10} />
        <span className={styles.message}>{props.message}</span>
      </div>
      <RiDeleteBin6Line color='red' className={styles.deleteIcon} />
    </div>
  );
}

export default Notification;
