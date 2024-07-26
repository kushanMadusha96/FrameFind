import React from 'react';
import styles from './ImageLabel.module.css'; // Assuming you create this file
import ProfileImage from '../ProfileImage/ProfileImage';
import { StaticImageData } from 'next/image';

function ImageLabel(props: { alt: string, h: number | string, w: number | string, br?: number | string, imgUrl: string | StaticImageData, text: string, mt?: number, mb?: number, ml?: number, mr?: number }) {
    return (
        <div className={styles.container} style={{ marginLeft: props.ml, marginRight: props.mr, marginTop: props.mt, marginBottom: props.mb }}>
            <ProfileImage alt={props.alt} imgUrl={props.imgUrl} h={props.h} w={props.w} br={props.br} />
            <span className={styles.text}>{props.text}</span>
        </div>
    );
}

export default ImageLabel;
