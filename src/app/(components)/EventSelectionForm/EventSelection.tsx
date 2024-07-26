'use client'
import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'
import EventBtn from '../EventBtn/EventBtn'

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
        <form style={{ width: 420, maxWidth: 420, height: 'fit-content', borderRadius: 3, marginLeft: 10, paddingBottom: 20, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 15, marginBottom: 20, paddingTop: 15 }}>
                <span style={{ fontWeight: 'bold', fontSize: 16, alignSelf: 'center' }}>Select Your Events</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'grid', gridTemplateColumns: ' repeat(3, 1fr)', gridRowGap: 2 }}>
                    <EventBtn event='Wedding' ml={3} mr={3} mb={6} onClick={() => handleToggleInput('Wedding')} isSelect={isSelected('Wedding')} />
                    <EventBtn event='Birthday' ml={3} mr={3} mb={6} onClick={() => handleToggleInput('Birthday')} isSelect={isSelected('Birthday')} />
                    <EventBtn event='Anniversary' ml={3} mr={3} mb={6} onClick={() => handleToggleInput('Anniversary')} isSelect={isSelected('Anniversary')} />
                    <EventBtn event='Graduation' ml={3} mr={3} mb={6} onClick={() => handleToggleInput('Graduation')} isSelect={isSelected('Graduation')} />
                    <EventBtn event='Conference' ml={3} mr={3} mb={6} onClick={() => handleToggleInput('Conference')} isSelect={isSelected('Conference')} />
                    <EventBtn event='Concert' ml={3} mr={3} mb={6} onClick={() => handleToggleInput('Concert')} isSelect={isSelected('Concert')} />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 5 }}>
                {
                    formInputs.map((form_input, index) => (
                        <FormInput key={index} w={370} id={form_input.lbl} type='text' lbl={form_input.lbl} placeholder='Enter starter price' />
                    ))
                }
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                <div style={{}}>
                    <Button text='Next' w={185} h={40} bc='#FFC107' color='white' br={3} mr={5} />
                    <Button text='Fill Later' w={185} h={40} bc='#FFDE4D' color='white' br={3} ml={5} />
                </div>
            </div>
        </form>
    )
}

export default EventSelection