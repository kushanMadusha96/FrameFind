'use client'
import React from 'react';
import { RiImageAddLine } from "react-icons/ri";
import { RxCross2, RxCrossCircled } from "react-icons/rx";
import Button from '../Button/Button';
import ProfileImage from '../ProfileImage/ProfileImage';
import user from '../../../../public/user.jpg';
import styles from './CreateNewModal_02.module.css';
import { StaticImageData } from 'next/image';

function CreateNewModal_02() {
    const SELECTED_ASSETS = [
        { imgUrl: user },
        { imgUrl: user },
        { imgUrl: user },
        { imgUrl: user },
        { imgUrl: user },
        { imgUrl: user },
        { imgUrl: user },
    ];

    return (
        <div className={styles.modalContainer}>
            <div className={styles.header}>
                <span className={styles.headerTitle}>
                    Select Assets,
                </span>
                <RxCross2
                    className={styles.closeIcon}
                    size={20}
                />
            </div>
            <div className={styles.assetsContainer}>
                {SELECTED_ASSETS.map((asset, index) => (
                    <SelectedAsset key={index} imgUrl={asset.imgUrl} />
                ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div
                    onClick={() => { console.log("kushan") }}
                    className={styles.addButton}
                >
                    <span className={styles.addButtonText}>Select Images & Videos</span>
                    <RiImageAddLine className={styles.addButtonIcon} color='#FBBC05' size={20} />
                </div>
                <Button
                    w={150}
                    h={40}
                    text='DONE'
                    bc='#FFC107'
                    br={5}
                    color='white'
                    ml={10}
                />
            </div>
        </div>
    );
}

export default CreateNewModal_02;

export function SelectedAsset(props: { key: number, imgUrl: StaticImageData }) {
    return (
        <div className={styles.selectedAsset}>
            <ProfileImage alt='selectedAsset' w={100} h={100} imgUrl={props.imgUrl} br={5} ml={5} mr={5} />
            <RxCrossCircled className={styles.removeIcon} size={20} color='gray' />
        </div>
    );
}
