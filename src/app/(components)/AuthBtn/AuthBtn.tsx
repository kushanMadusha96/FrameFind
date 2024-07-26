import React from 'react'
import ProfileImage from '../ProfileImage/ProfileImage'
import user from '../../../../public/user.jpg'
import { StaticImageData } from 'next/image'

function AuthBtn(props: { text: string, imgUrl: StaticImageData, alt: string, mt?: number, mb?: number }) {
    return (
        <div style={{ width: 300, height: 40, borderRadius: 8, display: 'flex', border: '2px solid #EEEDEB', alignItems: 'center', justifyContent: 'center', marginTop: props.mt, marginBottom: props.mb }}>
            <ProfileImage alt={props.alt} w={18} h={18} imgUrl={props.imgUrl} br={'50%'} mr={10} />
            <span style={{ fontSize: 12,color:'GrayText' }}>{props.text}</span>
        </div>
    )
}

export default AuthBtn