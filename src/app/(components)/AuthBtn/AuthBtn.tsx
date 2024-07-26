import React from 'react';
import ProfileImage from '../ProfileImage/ProfileImage';
import styles from './AuthBtn.module.css';
import { StaticImageData } from 'next/image';

interface AuthBtnProps {
    text: string;
    imgUrl: StaticImageData;
    alt: string;
    mt?: number;
    mb?: number;
}

function AuthBtn({ text, imgUrl, alt, mt, mb }: AuthBtnProps) {
    return (
        <div
            className={styles.container}
            style={{ '--mt': mt ?? 0, '--mb': mb ?? 0 } as React.CSSProperties}
        >
            <ProfileImage
                alt={alt}
                w={20}
                h={20}
                imgUrl={imgUrl}
                br={'50%'}
            />
            <span className={styles.text}>{text}</span>
        </div>
    );
}

export default AuthBtn;
