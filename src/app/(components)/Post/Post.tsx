import React from 'react';
import ProfileImage from '../ProfileImage/ProfileImage';
import user from '../../../../public/user.jpg';
import styles from './Post.module.css';
import all from '../../../../public/all.jpg'

function Post(props: { onClickPackage?: () => void }) {
  return (
    <div className={styles.postContainer}>
      <ProfileImage w={'100%'} br={5} alt='contentPic' imgUrl={user} />
      <div className={styles.profileInfo}>
        <div className={styles.profileImage}>
          <ProfileImage w={40} h={40} br={'50%'} alt='sellerProPic' imgUrl={user} />
        </div>
        <span className={styles.userName}>Kushan Madusha, <span className={styles.location}>Polonnaruwa</span></span>
      </div>
      <div className={styles.eventInfo}>
        <span className={styles.eventText}>Lorem ipsum, dolor sit amet consectetur sicing elit. Rem distinctio  eos error  aliquid vero, repellendus nulla id tenetur. Perspiciatis.</span>
        <span className={styles.seeMore}>see more</span>
      </div>
      <div className={styles.dateInfo}>
        <span className={styles.dateText}>2024/ 07/ 13</span>
        <span className={styles.packages} onClick={props.onClickPackage}>see packages</span>
      </div>
    </div>
  );
}

export default Post;
