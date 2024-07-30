'use client'
import ProfileImage from '@/app/(components)/ProfileImage/ProfileImage'
import React, { useState, useEffect } from 'react'
import user from '../../../../public/user.jpg'
import styles from './Photographer.module.css'
import '../../globals.css'
import Button from '@/app/(components)/Button/Button'
import { IoIosArrowDown } from "react-icons/io";
import Post from '@/app/(components)/Post/Post'
import SellerProfile from '@/app/(components)/SellerProfile/SellerProfile'

function Photographer() {
    const [showSellerPackage, setShowSellerPackage] = useState(false);
    const handlePopUp = () => {
        setShowSellerPackage(true);
    }

    const [dimensions, setDimensions] = useState({ height: 60, width: 60 });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setDimensions({ height: 40, width: 40});
            } else {
                setDimensions({ height: 60, width: 60 });
            }
            console.log(window.innerWidth)
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.profile}>
                    <ProfileImage alt='photographer' imgUrl={user} br={'50%'} h={dimensions.height} w={dimensions.width} key={'pht'} ml={20} />
                    <span className={styles.name}>Kushan Madusha</span>
                </div>
                <div className={styles.details}>
                    <div className={styles.btnDropDown} onClick={() => handlePopUp()}>
                        <span className={styles.btnText}>Contact & Packages</span>
                        <IoIosArrowDown color='#FFC107' />
                    </div>
                    {showSellerPackage && <SellerProfile setShowSellerPackage={setShowSellerPackage} />}
                </div>
            </header>

            <section className={styles.postContainer}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <Post key={index} display='none' />
                ))}
            </section>
        </div>
    )
}

export default Photographer

