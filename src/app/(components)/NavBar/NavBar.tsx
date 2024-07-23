'use client'

import React, { useState } from 'react'
import styles from './NavBar.module.css'
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../../../public/logo2.png'
import { IoSearchSharp, IoCloseCircleOutline, IoNotificationsOutline } from "react-icons/io5";
import Button from '../Button/Button';
import DropDown from '../DropDown/DropDown';
import inter from 'next/font/local'
import user from '../../../../public/user.jpg'
import { BsPersonCircle } from "react-icons/bs";

function NavBar() {
  const [searchActive, setSearchActive] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  };
  return (
    <nav style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: '1px solid #EEEDEB' }}>
      <Image
        src={logo}
        width={100}
        height={70}
        alt="logo"
        style={{ marginLeft: 10 }}
      />

      {
        searchActive ?

          <div style={{ display: 'flex', alignItems: 'center', position: 'relative', width: 'fit-content', marginLeft: 40 }}>
            <div style={{ width: 25, height: 25, position: 'absolute', left: 10, }}>
              <Image
                alt='searchedSeller'
                src={user}
                layout='fill'
                objectFit='cover'
                style={{ borderRadius: '50%' }}
              />
            </div>
            <input
              name='searchbar'
              placeholder='search photographer'
              style={{
                border: '1px solid #EEEDEB',
                borderRadius: 10,
                width: 500,
                height: 35,
                fontSize: 15,
                paddingLeft: 50,
                paddingRight: 50
              }}
            />
            <div style={{ position: 'absolute', right: 10 }}>
              <IoCloseCircleOutline color='gray' size={25} onClick={handleSearchClick} />
            </div>
          </div>

          :

          <IoSearchSharp color='gray' style={{ marginLeft: 40 }} size={17} onClick={handleSearchClick} />

      }

      <ul style={{ display: 'flex', flexDirection: 'row', marginLeft: 40 }}>
        <li>
          <Link href="/" style={{ color: 'gray', fontSize: 15 }}>Contact</Link>
        </li>
        <li style={{ marginLeft: 30 }}>
          <Link href="/" style={{ color: 'gray', fontSize: 15 }}>Idea</Link>
        </li>
      </ul>
      <div style={{ marginLeft: 40 }}>
        <DropDown />
      </div>
      <div style={{ marginLeft: 40 }}>
        <DropDown />
      </div>
      <div style={{ position: 'absolute', right: 20 }}>
        {
          signIn
            ?
            <div style={{ display: 'flex' }}>
              <NotificationBell />
              <BsPersonCircle color='gray' size={20} />
            </div>
            :
            <Button w={100} h={35} borderColor='#FFC107' borderWidth={2} text='Sign In' bc='white' color='#FFC107' br={7} fw='bold'/>
        }
      </div>
    </nav>
  )
}

export default NavBar

export function NotificationBell() {
  const notificationCount = 1;
  return (
    <div style={{ position: 'relative', display: 'inline-block', marginRight: 30 }}>
      <IoNotificationsOutline color='gray' size={25} />
      {notificationCount > 0 && (
        <span style={{
          position: 'absolute',
          top: -5,
          right: -5,
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 6px',
          fontSize: '10px',
          fontWeight: 'bold',
          lineHeight: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {notificationCount}
        </span>
      )}
    </div>
  );
}
