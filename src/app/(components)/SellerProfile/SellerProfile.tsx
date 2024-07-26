import React from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import ProfileImage from '../ProfileImage/ProfileImage';
import TextLabel from '../TextLabel/TextLabel';
import ImageLabel from '../ImageLabel/ImageLabel';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import instaLogo from '../../../../public/Instalogo.webp'
import user from '../../../../public/user.jpg'
import tiktoklogo from '../../../../public/tiktoklogo.png'
import fblogo from '../../../../public/fblogo.png'
import watsapplogo from '../../../../public/wts.png'
import phoneImg from '../../../../public/call.png'
import emailImg from '../../../../public/email.jpg'

function SellerProfile() {
    return (

        <div style={{ width: 300, maxHeight: '70%', border: '1px solid black', marginLeft: 10, borderRadius: 5,padding:5 }}>
            <MdKeyboardArrowLeft color='gray' size={25} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ProfileImage imgUrl={user} w={50} h={50} br={'50%'} alt='sellerProPic' />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span style={{ display: 'block', width: 'fit-content', textAlign: 'center', fontWeight:'bold' }}>Kushan Madusha</span>
            </div>
            <span style={{ display: 'block', width: 'fit-content', marginLeft: 10, marginBottom: 10, marginTop: 10 }}>Packages</span>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <TextLabel event='Wedding' price='2000.00' ml={15} mb={5} mr={15}/>
                <TextLabel event='Birthday' price='3000.00' ml={15} mr={15}/>
            </div>
            <span style={{ display: 'block', width: 'fit-content', marginLeft: 10, marginBottom: 10, marginTop: 10 }}>Contact</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ImageLabel alt='mobileImg01' h={25} w={25} imgUrl={phoneImg} text='0772461021' br={'50%'} mb={5} ml={15} mr={15}/>
                <ImageLabel alt='mobileImg02' h={25} w={25} imgUrl={phoneImg} text='0775017154' br={'50%'} mb={5} ml={15} mr={15}/>
                <ImageLabel alt='watsappImg' h={25} w={25} imgUrl={watsapplogo} text='0772461021' br={'50%'} mb={5} ml={15} mr={15}/>
                <ImageLabel alt='emailImg' h={25} w={25} imgUrl={emailImg} text='kushanmadusha62@gmail.com' br={'50%'} mb={5} ml={15} mr={15}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
                <ProfileImage imgUrl={fblogo} w={30} h={30} alt='fbImg' br={'50%'} ml={3} mr={3} />
                <ProfileImage imgUrl={instaLogo} w={30} h={30} alt='fbImg' br={'50%'} ml={3} mr={3} />
                <ProfileImage imgUrl={tiktoklogo} w={30} h={30} alt='fbImg' br={'50%'} ml={3} mr={3} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span style={{ color: '#FFC107', fontWeight: 'bold', fontSize: 13, borderBottom: '1px solid black' }}>REVIEWS</span>
            </div>
        </div>

    )
}

export default SellerProfile