'use client'

import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import EventBtn from '../EventBtn/EventBtn';
import styles from './EventSelectionForm.module.css'; // Import the CSS module

type FormInputType = {
    lbl: string;
};

function EventSelection() {
    const [formInputs, setFormInputs] = useState<FormInputType[]>([]);

    const handleToggleInput = (label: string) => {
        setFormInputs(prevInputs => {
            const exists = prevInputs.find(input => input.lbl === label);
            if (exists) {
                return prevInputs.filter(input => input.lbl !== label);
            } else {
                return [...prevInputs, { lbl: label }];
            }
        });
    };

    const isSelected = (label: string) => {
        return formInputs.some(input => input.lbl === label);
    };

    return (
        <form className={styles.formContainer}>
            <div className={styles.header}>
                <span className={styles.headerText}>Select Your Events</span>
            </div>
            <div className={styles.buttonGrid}>
                <div className={styles.gridContainer}>
                    <EventBtn event='Wedding' ml={3} mr={3} mb={6} onClick={() => handleToggleInput('Wedding')} isSelect={isSelected('Wedding')} />
                    <EventBtn event='Birthday' ml={3} mr={3} mb={6} onClick={() => handleToggleInput('Birthday')} isSelect={isSelected('Birthday')} />
                    <EventBtn event='Anniversary' ml={3} mr={3} mb={6} onClick={() => handleToggleInput('Anniversary')} isSelect={isSelected('Anniversary')} />
                    <EventBtn event='Graduation' ml={3} mr={3} mb={6} onClick={() => handleToggleInput('Graduation')} isSelect={isSelected('Graduation')} />
                    <EventBtn event='Conference' ml={3} mr={3} mb={6} onClick={() => handleToggleInput('Conference')} isSelect={isSelected('Conference')} />
                    <EventBtn event='Concert' ml={3} mr={3} mb={6} onClick={() => handleToggleInput('Concert')} isSelect={isSelected('Concert')} />
                </div>
            </div>

            <div className={styles.inputContainer}>
                {
                    formInputs.map((form_input, index) => (
                        <FormInput key={index} w={370} id={form_input.lbl} type='text' lbl={form_input.lbl} placeholder='Enter starter price' />
                    ))
                }
            </div>

            <div className={styles.buttonContainer}>
                <Button text='Next' w={185} h={40} bc='#FFC107' color='white' br={3} mr={5}/>
                <Button text='Fill Later' w={185} h={40} bc='#FFDE4D' color='white' br={3} ml={5} />
            </div>
        </form>
    );
}

export default EventSelection;
