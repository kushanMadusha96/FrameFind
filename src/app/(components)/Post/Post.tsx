import React from 'react';
import ProfileImage from '../ProfileImage/ProfileImage';
import user from '../../../../public/user.jpg';
import styles from './Post.module.css';

function Post() {
  return (
    <div className={styles.postContainer}>
      <ProfileImage w={'100%'} h={'17vw'} br={5} alt='contentPic' imgUrl={user} />
      <div className={styles.profileInfo}>
        <ProfileImage w={25} h={25} br={'50%'} alt='sellerProPic' imgUrl={user} />
        <span className={styles.userName}>kushan madusha,</span>
        <span className={styles.location}>Polonnaruwa</span>
      </div>
      <div className={styles.eventInfo}>
        <span className={styles.eventText}>All events,</span>
        <span className={styles.seeMore}>see more</span>
      </div>
      <div className={styles.dateInfo}>
        <span className={styles.dateText}>24.07.13</span>
      </div>
    </div>
  );
}

export default Post;
