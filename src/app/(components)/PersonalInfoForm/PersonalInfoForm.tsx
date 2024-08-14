'use client'
import React from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import styles from './PersonalInfoForm.module.css';

function PersonalInfoForm(props: { onClickNext?: () => void, onClickFillLater?: () => void }) {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.header}>
                <span className={styles.title}>Fill Your Personal Info</span>
            </div>
            <div className={styles.formBody}>
                <div className={styles.formInputs}>
                    <FormInput id='first_name' lbl='Enter Your First Name' placeholder='Kushan' type='text' />
                    <FormInput id='last_name' lbl='Enter Your Last Name' placeholder='Madusha' type='text' />
                    <FormInput id='district' lbl='Enter Your District' placeholder='Polonnaruwa' type='text' />
                    <FormInput id='address' lbl='Enter Your Address' placeholder='216, medagama dewagala' type='text' />
                    <FormInput id='contact_01' lbl='Enter Your Contact 01' placeholder='0772461021' type='number' />
                    <FormInput id='contact_02' lbl='Enter Your Contact 02' placeholder='0775017154' type='number' />
                    <FormInput id='email' lbl='Enter Your Email' placeholder='kushanmadusha62@gmail.com' type='email' />
                    <FormInput id='watsApp' lbl='Enter Your WhatsApp' placeholder='0775017154' type='number' />
                </div>
                <div className={styles.buttonGroup}>
                    <Button text='Next' w={195} h={40} bc='#FFC107' color='white' br={3} mr={5} onClick={props.onClickNext} />
                    <Button text='Fill Later' w={195} h={40} bc='#FFDE4D' color='white' br={3} ml={5} onClick={props.onClickFillLater} />
                </div>
            </div>
        </form>
    );
}

export default PersonalInfoForm;
