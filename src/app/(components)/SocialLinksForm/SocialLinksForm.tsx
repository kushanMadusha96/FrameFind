import React from 'react'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'

function SocialLinksForm() {
    return (
        <form style={{ width: 400, height: 'fit-content', border: '1px solid black', borderRadius: 3, marginLeft: 10, padding: 5, paddingBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: 16, alignSelf: 'center', marginTop: 20, marginBottom: 10 }}>Link Your Socials</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FormInput w={350} id='fb_url' lbl='Link Your Facebook' placeholder='Enter Facebook url' type='text' />
                <FormInput w={350} id='tiktok_url' lbl='Link Your TikTok' placeholder='Enter Tiktok url' type='text' />
                <FormInput w={350} id='insta_url' lbl='Link Your Instergram' placeholder='Enter Instergram url' type='text' />
                <div style={{ marginTop: 5 }}>
                    <Button text='Next' w={170} h={40} bc='#FFC107' color='white' br={3} mr={5} />
                    <Button text='Fill Later' w={170} h={40} bc='#FFDE4D' color='white' br={3} ml={5} />
                </div>
            </div>
        </form>
    )
}

export default SocialLinksForm