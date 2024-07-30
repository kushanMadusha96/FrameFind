'use client'
import NavBar from '@/app/(components)/NavBar/NavBar'
import Post from '@/app/(components)/Post/Post'
import React, { useState } from 'react'
import styles from './HomePage.module.css'
import PersonalInfo from '@/app/(components)/PersonalInfo/PersonalInfo'
import SellerProfile from '@/app/(components)/SellerProfile/SellerProfile'

function HomePage() {
    const [showSellerPackage, setShowSellerPackage] = useState(false);
    return (
        <div style={{ position: 'relative' }}>
            <div className={styles.container}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <Post key={index} onClickPackage={() => setShowSellerPackage(true)} />
                ))}
            </div>
            {showSellerPackage && <SellerProfile setShowSellerPackage={setShowSellerPackage} />}
        </div>
    )
}

export default HomePage