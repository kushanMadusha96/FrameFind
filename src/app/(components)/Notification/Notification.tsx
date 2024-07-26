import React from 'react'
import SellerProfile from '../SellerProfile/SellerProfile'
import ProfileImage from '../ProfileImage/ProfileImage'
import user from '../../../../public/user.jpg'
import { RiDeleteBinLine } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { StaticImageData } from 'next/image';

function Notofication(props: { key?: number, message: string, imgUrl: string | StaticImageData }) {
  return (
    <div style={{ width: 300, height: 50, display: 'flex', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 5, borderLeft: '4px solid #FFC107', justifyContent: 'space-between', marginTop: 5, marginBottom: 5 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ProfileImage alt='notificationProfileImg' w={30} h={30} br={'50%'} imgUrl={props.imgUrl} ml={10} />
        <span style={{ color: '#84898F', fontSize: 13, marginLeft: 10 }}>{props.message}</span>
      </div>
      <RiDeleteBin6Line color='red' style={{ marginRight: 10 }} />
    </div>
  )
}

export default Notofication