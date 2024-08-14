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
import userImg from '../../../../public/user.jpg';
import SellerProfile from '../SellerProfile/SellerProfile';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import { usePathname } from 'next/navigation'
import PersonalInfoForm from '../PersonalInfoForm/PersonalInfoForm';
import SocialLinksForm from '../SocialLinksForm/SocialLinksForm';
import EventSelection from '../EventSelectionForm/EventSelection';

interface MobileNavBarProps {
  onClickRxCrossIcon?: () => void;
  onClickMenuIcon?: () => void;
  user: string
}

export default function NavBar(props: { signUp: boolean, user: string, onClickProfile: () => void }) {
  const [searchActive, setSearchActive] = useState(false);
  const signUp = props.signUp;
  const user = props.user;
  const [isHaveProPic, setIsHaveProPic] = useState(false);
  const [zIndex, setzIndex] = useState(2);
  const [personalInfo, setPersonalInfo] = useState(false);
  const currentPathname = usePathname();
  const [showPersonalInfoForm, setShowPersonalInfoForm] = useState(false);
  const [showSocialLinksForm, setShowSocialLinksForm] = useState(false);
  const [showEventSelectionForm, setShowEventSelectionForm] = useState(false);

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  };

  const handleZIndex = (index: number) => {
    setzIndex(index);
  };

  return (
    <nav className={styles.navBarContainer} style={{ zIndex: zIndex }}>
      <MobileNavBar onClickMenuIcon={() => handleZIndex(3)} onClickRxCrossIcon={() => handleZIndex(2)} user={props.user} />
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
        {!searchActive &&
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" className={currentPathname === '/' ? styles.activeLink : styles.link}>Home</Link>
            </li>
            {user === 'seller' &&
              <li className={styles.linkItem}>
                <Link href="/photographer" className={currentPathname === '/photographer' ? styles.activeLink : styles.link}>Profile</Link>
              </li>
            }
            <li className={styles.linkItem}>
              <Link href="/idea" className={currentPathname === '/idea' ? styles.activeLink : styles.link}>Your Idea</Link>
            </li>
            {user !== 'seller' &&
              <li className={styles.linkItem}>
                <Link href="/becomePhotographer" className={currentPathname === '/becomePhotographer' ? styles.activeLink : styles.link}>Become A Photographer</Link>
              </li>
            }
          </ul>
        }
        <div className={styles.signInContainer}>
          {signUp ? (
            <div className={styles.signInIcons} onClick={() => setPersonalInfo(true)}>
              {isHaveProPic ? (
                <ProfileImage imgUrl={userImg} alt='sellerPic' br='50%' h={30} w={30} />
              ) : (
                <BsPersonCircle color='gray' size={30} />
              )}
            </div>
          ) : (
            <Button w={100} h={35} borderColor='#FFC107' borderWidth={2} text='Sign In' bc='white' color='#FFC107' br={7} fw='bold' />
          )}
        </div>
      </div>
      {personalInfo &&
        <PersonalInfo onClickCross={() => setPersonalInfo(false)} onClickEditInfo={() => { setShowPersonalInfoForm(true), setPersonalInfo(false) }} />
      }
      <div className={styles.editInfoContainer}>
        {showPersonalInfoForm &&
          <PersonalInfoForm onClickNext={() => { setShowSocialLinksForm(true), setShowPersonalInfoForm(false) }} onClickFillLater={() => setShowPersonalInfoForm(false)} />
        }
        {showSocialLinksForm &&
          <SocialLinksForm onClickNext={() => { setShowEventSelectionForm(true), setShowSocialLinksForm(false) }} onClickFillLater={() => setShowSocialLinksForm(false)} />
        }
        {showEventSelectionForm &&
          <EventSelection onClickNext={() => setShowEventSelectionForm(false)} onClickFillLater={() => setShowEventSelectionForm(false)} />
        }
      </div>
    </nav>
  )
}

export function MobileNavBar({ onClickRxCrossIcon, onClickMenuIcon, user }: MobileNavBarProps) {
  const [displayList, setDisplayList] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isHaveProPic, setIsHaveProPic] = useState(false);

  const [personalInfo, setPersonalInfo] = useState(false);
  const [showPersonalInfoForm, setShowPersonalInfoForm] = useState(false);
  const [showSocialLinksForm, setShowSocialLinksForm] = useState(false);
  const [showEventSelectionForm, setShowEventSelectionForm] = useState(false);

  const currentPathname = usePathname();

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
      {!showSearchBar ?
        <div className={styles.mobileNavBarHeader}>
          <Image
            src={logo}
            width={50}
            alt="logo"
            className={styles.logo}
          />
          <div className={styles.searchMenuContainer}>
            <IoSearchSharp className={styles.mobileSearchIcon} color='gray' size={17} onClick={() => { displayList && setDisplayList(!displayList); setShowSearchBar(true) }} />
            <div onClick={() => setPersonalInfo(true)}>
              {isHaveProPic ? (
                <ProfileImage imgUrl={userImg} alt='sellerPic' br='50%' h={20} w={20} />
              ) : (
                <BsPersonCircle color='gray' size={20} />
              )}
            </div>

            {displayList ? (
              <RxCross2 size={25} className={styles.menuIcon} onClick={handleCrossClick} />
            ) : (
              <MdOutlineMenu size={25} className={styles.menuIcon} onClick={handleMenuClick} />
            )}
          </div>
        </div>
        :
        <div className={styles.searchContainer}>
          <input
            name='searchbar'
            placeholder='search photographer'
            className={styles.searchInput}
          />
          <div className={styles.closeIcon}>
            <IoCloseCircleOutline color='gray' size={25} onClick={() => setShowSearchBar(false)} />
          </div>
        </div>
      }

      <ul className={styles.mobileNavLinks} style={{ display: displayList ? 'block' : 'none' }}>
        <li className={styles.mobileLinkItem}>
          <Link href="/" className={currentPathname === '/' ? styles.activeLink : styles.link}>Home</Link>
        </li>
        {user === 'seller' &&
          <li className={styles.mobileLinkItem}>
            <Link href="/photographer" className={currentPathname === '/photographer' ? styles.activeLink : styles.link}>Profile</Link>
          </li>
        }
        <li className={styles.mobileLinkItem}>
          <Link href="/idea" className={currentPathname === '/idea' ? styles.activeLink : styles.link}>Your Idea</Link>
        </li>
        {user !== 'seller' &&
          <li className={styles.mobileLinkItem}>
            <Link href="/becomePhotographer" className={currentPathname === '/becomePhotographer' ? styles.activeLink : styles.link}>Become A Photographer</Link>
          </li>
        }
      </ul>
      {personalInfo &&
        <PersonalInfo onClickCross={() => setPersonalInfo(false)} onClickEditInfo={() => { setShowPersonalInfoForm(true), setPersonalInfo(false) }} />
      }
      <div className={styles.editInfoContainer}>
        {showPersonalInfoForm &&
          <PersonalInfoForm onClickNext={() => { setShowSocialLinksForm(true), setShowPersonalInfoForm(false) }} onClickFillLater={() => setShowPersonalInfoForm(false)} />
        }
        {showSocialLinksForm &&
          <SocialLinksForm onClickNext={() => { setShowEventSelectionForm(true), setShowSocialLinksForm(false) }} onClickFillLater={() => setShowSocialLinksForm(false)} />
        }
        {showEventSelectionForm &&
          <EventSelection onClickNext={() => setShowEventSelectionForm(false)} onClickFillLater={() => setShowEventSelectionForm(false)} />
        }
      </div>
    </div>
  );
}
