'use client'
import React from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import styles from './SocialLinksForm.module.css';

function SocialLinksForm(props: { onClickNext?: () => void, onClickFillLater?: () => void }) {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.header}>
                <span className={styles.title}>Link Your Socials</span>
            </div>
            <div className={styles.inputsContainer}>
                <FormInput id='fb_url' lbl='Link Your Facebook' placeholder='Enter Facebook URL' type='text' />
                <FormInput id='tiktok_url' lbl='Link Your TikTok' placeholder='Enter TikTok URL' type='text' />
                <FormInput id='insta_url' lbl='Link Your Instagram' placeholder='Enter Instagram URL' type='text' />
                <div className={styles.buttonsContainer}>
                    <Button text='Next' w={195} h={40} bc='#FFC107' color='white' br={3} mr={5} onClick={props.onClickNext} />
                    <Button text='Fill Later' w={195} h={40} bc='#FFDE4D' color='white' br={3} ml={5} onClick={props.onClickFillLater} />
                </div>
            </div>
        </form>
    );
}

export default SocialLinksForm;
