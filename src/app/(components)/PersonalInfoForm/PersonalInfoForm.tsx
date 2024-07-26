import React from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import styles from './PersonalInfoForm.module.css';

function PersonalInfoForm() {
    return (
        <form className={styles.form}>
            <div className={styles.header}>
                <span className={styles.title}>Fill Your Personal Info</span>
            </div>
            <div className={styles.formBody}>
                <FormInput w={350} id='first_name' lbl='Enter Your First Name' placeholder='Kushan' type='text' />
                <FormInput w={350} id='last_name' lbl='Enter Your Last Name' placeholder='Madusha' type='text' />
                <FormInput w={350} id='district' lbl='Enter Your District' placeholder='Polonnaruwa' type='text' />
                <FormInput w={350} id='address' lbl='Enter Your Address' placeholder='216, medagama dewagala' type='text' />
                <FormInput w={350} id='contact_01' lbl='Enter Your Contact 01' placeholder='0772461021' type='number' />
                <FormInput w={350} id='contact_02' lbl='Enter Your Contact 02' placeholder='0775017154' type='number' />
                <FormInput w={350} id='email' lbl='Enter Your Email' placeholder='kushanmadusha62@gmail.com' type='email' />
                <FormInput w={350} id='watsApp' lbl='Enter Your WhatsApp' placeholder='0775017154' type='number' />
                <div className={styles.buttonGroup}>
                    <Button text='Next' w={170} h={40} bc='#FFC107' color='white' br={3} mr={5} />
                    <Button text='Fill Later' w={170} h={40} bc='#FFDE4D' color='white' br={3} ml={5} />
                </div>
            </div>
        </form>
    );
}

export default PersonalInfoForm;
