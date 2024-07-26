'use client'
import React, { use } from 'react'
import { RiImageAddLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Button from '../Button/Button';
import ProfileImage from '../ProfileImage/ProfileImage';
import user from '../../../../public/user.jpg'
import { RxCrossCircled } from "react-icons/rx";
import { StaticImageData } from 'next/image';

function CreateNewModal_02() {
    const SELECTED_ASSETS = [
        {
            imgUrl: user
        },
        {
            imgUrl: user
        }, {
            imgUrl: user
        }, {
            imgUrl: user
        }
    ]
    return (
        <div style={{ width: 600, height: 'fit-content', marginLeft: 5, border: '1px solid black', borderRadius: 5, paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 15, position: 'relative' }}>
            <div style={{ backgroundColor: 'red', display: 'flex', alignItems: 'center', position: 'relative', marginTop: 10, marginBottom: 25 }}>
                <span style={{ position: 'absolute', display: 'inline-block', width: 'fit-content', fontSize: 16, fontWeight:'bold' }}>
                   Select Assets,
                </span>
                <RxCross2
                    color='gray'
                    size={20}
                    style={{
                        position: 'absolute',
                        right: 0
                    }}
                />
            </div>
            <div style={{ maxWidth: 600, overflowX: 'scroll', display: 'flex', justifyContent: 'center', scrollbarWidth: 'thin', marginTop: 15, marginBottom: 15 }}>
                {
                    SELECTED_ASSETS.map((asset, index) => (
                        <SelectedAsset key={index} imgUrl={asset.imgUrl} />
                    ))
                }
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div onClick={() => { console.log("kushan") }} style={{ width: 230, height: 40, border: '1px solid #FBBC05', borderRadius: 5, display: 'inline-flex', alignItems: 'center', position: 'relative', marginRight: 10 }}>
                    <span style={{ position: 'absolute', left: 10 }}>Select Images & Vedios</span>
                    <RiImageAddLine color='#FBBC05' size={20} style={{ position: 'absolute', right: 10 }} />
                </div>
                <Button w={150} h={40} text='DONE' bc='#FFC107' br={5} color='white' ml={10} />
            </div>
        </div>
    )
}

export default CreateNewModal_02

export function SelectedAsset(props: { key: number, imgUrl: StaticImageData }) {
    return (
        <div key={props.key} style={{ display: 'inline-flex', position: 'relative', margin: 5 }}>
            <ProfileImage alt='selectedAsset' w={100} h={100} imgUrl={props.imgUrl} br={5} ml={5} mr={5} />
            <RxCrossCircled size={20} color='gray' style={{ position: 'absolute', right: -2, top: -6 }} />
        </div>
    )
}