'use client'
import React, { useState } from 'react';
import ProfileImage from '../ProfileImage/ProfileImage';
import styles from './Post.module.css';
import all from '../../../../public/all.jpg'
import TruncatedText from '../TruncatedText/TruncatedText';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import user from '../../../../public/user.jpg'
import logo from '../../../../public/all.jpg'
import Link from 'next/dist/client/link';

function Post(props: { onClickPackage?: () => void, display?: string }) {
  const images = [user, logo];
  const [index, setIndex] = useState(0);

  const changeNextImage = () => setIndex((index + 1) % images.length)
  const changePrevImage = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className={styles.postContainer}>
      <div className={styles.profileContainer}>
        <ProfileImage w={'100%'} br={5} alt='contentPic' imgUrl={images[index]} />
        <IoIosArrowDroprightCircle color='#FFFFFF' size={35} className={styles.nextIcon} onClick={changeNextImage} />
        {index != 0 &&
          <IoIosArrowDropleftCircle color='#FFFFFF' size={35} className={styles.prevIcon} onClick={changePrevImage} />
        }
      </div>
      <div className={styles.profileInfo} style={{ display: props.display && 'none' }}>
        <div className={styles.profileImage}>
          <Link href={'/photographer'}>
            <ProfileImage w={40} h={40} br={'50%'} alt='sellerProPic' imgUrl={user} />
          </Link>
        </div>
        <div>
          <Link href={'/photographer'}><span className={styles.userName} style={{ display: props.display && props.display }}>Kushan Madusha,</span></Link><span className={styles.location}> Polonnaruwa</span>
        </div>
      </div>
      <div className={styles.eventInfo}>
        <TruncatedText maxLength={120} text={'Lorem ipsum, dolor sit amet consectetur sicing elit. Rem distinctio  eos error  aliquid vero, repellendus nulla id tenetur. Perspiciatis.Lorem ipsum, dolor sit amet consectetur sicing elit. Rem distinctio  eos error  aliquid vero, repellendus nulla id tenetur. Perspiciatis.Lorem ipsum, dolor sit amet consectetur sicing elit. Rem distinctio  eos error  aliquid vero, repellendus nulla id tenetur. Perspiciatis.Lorem ipsum, dolor sit amet consectetur sicing elit. Rem distinctio  eos error  aliquid vero, repellendus nulla id tenetur. Perspiciatis.'} />
      </div>
      <div className={styles.dateInfo}>
        <span className={styles.dateText}>2024/ 07/ 13</span>
        <span className={styles.packages} style={{ display: props.display && 'none' }} onClick={props.onClickPackage}>see packages</span>
      </div>
    </div>
  );
}

export default Post;
