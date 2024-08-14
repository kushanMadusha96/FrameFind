'use client'
import React, { useState } from 'react'
import styles from './becomePhotographer.module.css'
import PersonalInfoForm from '@/app/(components)/PersonalInfoForm/PersonalInfoForm'
import SocialLinksForm from '@/app/(components)/SocialLinksForm/SocialLinksForm'
import EventSelection from '@/app/(components)/EventSelectionForm/EventSelection'

export default function page() {
    const [showPersonalInfoForm, setShowPersonalInfoForm] = useState(true);
    const [showSocialLinksForm, setShowSocialLinksForm] = useState(false);
    const [showEventSelectionForm, setShowEventSelectionForm] = useState(false);
    return (
        <div className={styles.container}>
            {showPersonalInfoForm &&
                <PersonalInfoForm onClickNext={() => { setShowSocialLinksForm(true), setShowPersonalInfoForm(false) }} onClickFillLater={() => setShowPersonalInfoForm(false)} />
            }
            {showSocialLinksForm &&
                <SocialLinksForm onClickNext={() => { setShowEventSelectionForm(true), setShowSocialLinksForm(false) }} onClickFillLater={() => setShowSocialLinksForm(false)} />
            }
            {showEventSelectionForm &&
                <EventSelection onClickNext={() => setShowEventSelectionForm(false)} onClickFillLater={() => setShowEventSelectionForm(false)} />
            }
        </div>
    )
}
