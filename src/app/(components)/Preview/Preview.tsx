import React, { use } from 'react'
import ProfileImage from '../ProfileImage/ProfileImage'
import user from '../../../../public/user.jpg'
import all from '../../../../public/all.jpg'
import { MdArrowForwardIos } from "react-icons/md";

function Preview() {
    return (
        <div style={{ width: 500, height: 'fit-content', border: '1px solid black', marginLeft: 10, position: 'relative', padding: 10 }}>
            <span style={{ fontWeight: 'bold', fontSize: 16 }}>Preview,</span>
            <div style={{ right: 0, left: 0, margin: 'auto', width: '18vw', height: '17vw', marginTop: 10 }}>
                <ProfileImage alt='preview' w={'18vw'} h={'17vw'} imgUrl={user} br={5} />
            </div>
            <MdArrowForwardIos color='gray' size={30} style={{ position: 'absolute', top: 0, bottom: 0, margin: 'auto', right: 10 }} />
        </div>
    )
}

export default Preview