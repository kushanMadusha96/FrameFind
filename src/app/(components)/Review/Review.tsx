import React from 'react'
import FiveStar from '../FiveStar/FiveStar'
import ProfileImage from '../ProfileImage/ProfileImage'
import seller from '../../../../public/user.jpg'

function Review() {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                <ProfileImage w={35} h={35} alt='profileImg' imgUrl={seller} br={'50%'} />
                <span style={{ marginLeft: 10, fontWeight: 'bold' }}>Ashan Devinda</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
                <FiveStar size={10} />
                <span style={{ fontSize: 12, marginLeft: 5 }}>22/10/2024</span>
            </div>
            <p style={{ fontSize: 12, marginTop: 10 }}>
                Duis aute irure dolor in reprehendrit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button style={{ border: '1px solid black', fontSize: 10, paddingLeft: 7, paddingRight: 7, paddingTop: 3, paddingBottom: 3, borderRadius: 20, right: 10, bottom: 10, marginLeft: '80%' }}>Reply</button>
        </>
    )
}

export default Review