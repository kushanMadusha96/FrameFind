import React from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import styles from './SocialLinksForm.module.css';

function SocialLinksForm() {
    return (
        <form className={styles.form}>
            <div className={styles.header}>
                <span className={styles.title}>Link Your Socials</span>
            </div>
            <div className={styles.inputsContainer}>
                <FormInput w={350} id='fb_url' lbl='Link Your Facebook' placeholder='Enter Facebook URL' type='text' />
                <FormInput w={350} id='tiktok_url' lbl='Link Your TikTok' placeholder='Enter TikTok URL' type='text' />
                <FormInput w={350} id='insta_url' lbl='Link Your Instagram' placeholder='Enter Instagram URL' type='text' />
                <div className={styles.buttonsContainer}>
                    <Button text='Next' w={170} h={40} bc='#FFC107' color='white' br={3} mr={5} />
                    <Button text='Fill Later' w={170} h={40} bc='#FFDE4D' color='white' br={3} ml={5} />
                </div>
            </div>
        </form>
    );
}

export default SocialLinksForm;
