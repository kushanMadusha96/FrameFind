'use client'
import React, { useState } from 'react';
import { RiImageAddLine } from "react-icons/ri";
import { RxCross2, RxCrossCircled } from "react-icons/rx";
import Button from '../Button/Button';
import ProfileImage from '../ProfileImage/ProfileImage';
import user from '../../../../public/user.jpg';
import styles from './CreateNewModal_02.module.css';
import { StaticImageData } from 'next/image';

const SELECTED_ASSETS = [
    { imgUrl: user },
    { imgUrl: user },
    { imgUrl: user },
    { imgUrl: user },
    { imgUrl: user },
    { imgUrl: user },
    { imgUrl: user },
];
function CreateNewModal_02(props: { onClickCross?: () => void }) {
    const [assets, setAssets] = useState(SELECTED_ASSETS);

    const removeAsset = (index: number) => {
        setAssets(assets.filter((_, i) => i !== index));
    };
    return (
        <div className={styles.modalContainer}>
            <div className={styles.header}>
                <span className={styles.headerTitle}>
                    Select Assets,
                </span>
                <RxCross2
                    className={styles.closeIcon}
                    size={20}
                    onClick={props.onClickCross}
                />
            </div>
            <div className={styles.assetsContainer}>
                {assets.map((asset, index) => (
                    <SelectedAsset index={index} imgUrl={asset.imgUrl} onRemove={removeAsset} />
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
                {assets.length > 0 ?
                    <Button
                        w={150}
                        h={40}
                        text='DONE'
                        bc='#FFC107'
                        br={5}
                        color='white'
                        ml={10}
                    />
                    :
                    <Button
                        w={150}
                        h={40}
                        text='Not Select Yet'
                        bc='gray'
                        br={5}
                        color='#B2A59B'
                        ml={10}
                        isDisabled={true}
                    />
                }
            </div>
        </div>
    );
}

export default CreateNewModal_02;

export function SelectedAsset(props: { index: number, imgUrl: StaticImageData, onRemove: (index: number) => void }) {
    return (
        <div className={styles.selectedAsset}>
            <ProfileImage alt='selectedAsset' w={100} h={100} imgUrl={props.imgUrl} br={5} ml={5} mr={5} />
            <RxCrossCircled className={styles.removeIcon} size={20} color='gray' onClick={() => props.onRemove(props.index)} />
        </div>
    );
}
