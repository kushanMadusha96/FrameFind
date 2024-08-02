'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../../../public/logo2.png'
import { IoSearchSharp, IoCloseCircleOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import styles from './NavBar.module.css'
import ProfileImage from '../ProfileImage/ProfileImage';
import Button from '../Button/Button';
import user from '../../../../public/user.jpg';

interface MobileNavBarProps {
  onClickRxCrossIcon?: () => void;
  onClickMenuIcon?: () => void;
}

export default function NavBar(props: { signUp: boolean }) {
  const [searchActive, setSearchActive] = useState(false);
  const signUp = props.signUp;
  const [isHaveProPic, setIsHaveProPic] = useState(false);
  const [zIndex, setzIndex] = useState(2);

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  };

  const handleZIndex = (index: number) => {
    setzIndex(index);
  };

  return (
    <nav className={styles.navBarContainer} style={{ zIndex }}>
      <div className={styles.navbar}>
        <Image
          src={logo}
          width={100}
          height={70}
          alt="logo"
          className={styles.logo}
        />

        {searchActive ? (
          <div className={styles.searchContainer}>
            <div className={styles.userImage}>
              <Image
                alt='searchedSeller'
                src={user}
                layout='fill'
                objectFit='cover'
                className={styles.userImageContent}
              />
            </div>
            <input
              name='searchbar'
              placeholder='search photographer'
              className={styles.searchInput}
            />
            <div className={styles.closeIcon}>
              <IoCloseCircleOutline color='gray' size={25} onClick={handleSearchClick} />
            </div>
          </div>
        ) : (
          <IoSearchSharp color='gray' className={styles.searchIcon} size={17} onClick={handleSearchClick} />
        )}

        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.link}>Profile</Link>
          </li>
          <li className={styles.linkItem}>
            <Link href="/" className={styles.link}>Your Idea</Link>
          </li>
        </ul>

        <div className={styles.signInContainer}>
          {signUp ? (
            <div className={styles.signInIcons}>
              {isHaveProPic ? (
                <ProfileImage imgUrl={user} alt='sellerPic' br='50%' h={30} w={30} />
              ) : (
                <BsPersonCircle color='gray' size={30} />
              )}
            </div>
          ) : (
            <Button w={100} h={35} borderColor='#FFC107' borderWidth={2} text='Sign In' bc='white' color='#FFC107' br={7} fw='bold' />
          )}
        </div>
      </div>
      <MobileNavBar onClickMenuIcon={() => handleZIndex(3)} onClickRxCrossIcon={() => handleZIndex(2)} />
    </nav>
  )
}

export function MobileNavBar({ onClickRxCrossIcon, onClickMenuIcon }: MobileNavBarProps) {
  const [displayList, setDisplayList] = useState(false);

  const handleMenuClick = () => {
    if (onClickMenuIcon) onClickMenuIcon();
    setDisplayList(!displayList);
  };

  const handleCrossClick = () => {
    if (onClickRxCrossIcon) onClickRxCrossIcon();
    setDisplayList(!displayList);
  };

  return (
    <div className={styles.mobileNavBar}>
      <div className={styles.mobileNavBarHeader}>
        <Image
          src={logo}
          width={50}
          alt="logo"
          className={styles.logo}
        />
        {displayList ? (
          <RxCross2 size={25} className={styles.menuIcon} onClick={handleCrossClick} />
        ) : (
          <MdOutlineMenu size={25} className={styles.menuIcon} onClick={handleMenuClick} />
        )}
      </div>
      <ul className={styles.mobileNavLinks} style={{ display: displayList ? 'block' : 'none' }}>
        <li className={styles.mobileLinkItem}>
          <Link href="/" className={styles.mobileLink}>Profile</Link>
        </li>
        <li className={styles.mobileLinkItem}>
          <Link href="/" className={styles.mobileLink}>Your Idea</Link>
        </li>
      </ul>
    </div>
  );
}
