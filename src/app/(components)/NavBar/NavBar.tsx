'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../../../public/logo2.png'
import { IoSearchSharp, IoCloseCircleOutline, IoNotificationsOutline } from "react-icons/io5";
import Button from '../Button/Button';
import DropDown from '../DropDown/DropDown';
import inter from 'next/font/local'
import user from '../../../../public/user.jpg'
import { BsPersonCircle } from "react-icons/bs";
import styles from './NavBar.module.css'

function NavBar() {
  const [searchActive, setSearchActive] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  };
  return (
    <nav className={styles.navbar}>
      <Image
        src={logo}
        width={100}
        height={70}
        alt="logo"
        className={styles.logo}
      />

      {
        searchActive ?

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

          :

          <IoSearchSharp color='gray' className={styles.searchIcon} size={17} onClick={handleSearchClick} />

      }

      <ul className={styles.navLinks}>
        <li>
          <Link href="/" className={styles.link}>Contact</Link>
        </li>
        <li className={styles.linkItem}>
          <Link href="/" className={styles.link}>Idea</Link>
        </li>
      </ul>
      <div className={styles.dropdowns}>
        <DropDown />
      </div>
      <div className={styles.dropdowns}>
        <DropDown />
      </div>
      <div className={styles.signInContainer}>
        {
          signIn
            ?
            <div className={styles.signInIcons}>
              <NotificationBell />
              <BsPersonCircle color='gray' size={20} />
            </div>
            :
            <Button w={100} h={35} borderColor='#FFC107' borderWidth={2} text='Sign In' bc='white' color='#FFC107' br={7} fw='bold' />
        }
      </div>
    </nav>
  )
}

export default NavBar

export function NotificationBell() {
  const notificationCount = 1;
  return (
    <div className={styles.notificationContainer}>
      <IoNotificationsOutline color='gray' size={25} />
      {notificationCount > 0 && (
        <span className={styles.notificationCount}>
          {notificationCount}
        </span>
      )}
    </div>
  );
}
