import Image, { StaticImageData } from 'next/image'
import React from 'react'
import seller from '../../../../public/user.jpg'

function ProfileImage(props: { imgUrl: string | StaticImageData, w: number | string, h: number | string, br?: number | string, alt: string, mr?: number, ml?: number }) {
    return (
        <div style={{ width: props.w, height: props.h, marginRight: props.mr, marginLeft: props.ml, position: 'relative', }}>
            <Image
                src={props.imgUrl}
                alt={props.alt}
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: props.br }}
            />
        </div>
    )
}

export default ProfileImage