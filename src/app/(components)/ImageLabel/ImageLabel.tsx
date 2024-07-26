import Image, { StaticImageData } from 'next/image';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import ProfileImage from '../ProfileImage/ProfileImage';

function ImageLabel(props: { alt: string, h: number | string, w: number | string, br?: number | string, imgUrl: string | StaticImageData, text: string, mt?: number, mb?: number, ml?: number, mr?: number }) {
    return (
        <div style={{ height: 35, display: 'inline-flex', alignItems: 'center', backgroundColor:'#EEEEEE', borderRadius: 15, paddingLeft: 10, paddingRight: 10, marginLeft: props.ml, marginRight: props.mr, marginTop: props.mt, marginBottom: props.mb }}>
            <ProfileImage alt={props.alt} imgUrl={props.imgUrl} h={props.h} w={props.w} br={props.br} />
            <span style={{ display: 'inline-block', fontSize: 12, marginLeft: 5 }}>{props.text}</span>
        </div>
    )
}

export default ImageLabel