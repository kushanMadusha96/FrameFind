import React from 'react'
import { RxCross2 } from "react-icons/rx";
import ProfileImage from '../ProfileImage/ProfileImage';
import user from '../../../../public/user.jpg'
import { IoCamera } from "react-icons/io5";
import TextLabel from '../TextLabel/TextLabel';
import ImageLabel from '../ImageLabel/ImageLabel';
import instaLogo from '../../../../public/Instalogo.webp'
import tiktoklogo from '../../../../public/tiktoklogo.png'
import fblogo from '../../../../public/fblogo.png'
import watsapplogo from '../../../../public/wts.png'
import phoneImg from '../../../../public/call.png'
import emailImg from '../../../../public/email.jpg'
import Button from '../Button/Button';

function PersonalInfo() {
    return (
        <div style={{ width: 300, maxHeight: '70%', border: '1px solid black', marginLeft: 10, borderRadius: 5, padding: 0, position: 'relative' }}>
            <RxCross2 color='gray' size={20} style={{ marginLeft: '90%', marginTop: 5 }} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ProfileImage imgUrl={user} w={50} h={50} br={'50%'} alt='sellerProPic' />
                <IoCamera size={20} color='gray' style={{ position: 'absolute', top: 45 }} type=''/>
            </div>
            <span style={{ display: 'block', width: 'fit-content', marginLeft: 10, marginBottom: 10, marginTop: 10, fontWeight: 'bold' }}>Packages</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TextLabel event='Name' price='kushan madusha basnayaka' ml={15} mb={5} mr={15} />
                <TextLabel event='Address' price='216, medagama dewagala' ml={15} mr={15} mb={5} />
                <TextLabel event='District' price='polonnaruwa' ml={15} mr={15} mb={5} />
                <TextLabel event='NIC' price='200224000741' ml={15} mr={15} mb={5} />
            </div>
            <span style={{ display: 'block', width: 'fit-content', marginLeft: 10, marginBottom: 10, marginTop: 10, fontWeight: 'bold' }}>Contact</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ImageLabel alt='mobileImg01' h={25} w={25} imgUrl={phoneImg} text='0772461021' br={'50%'} mb={5} ml={15} mr={15} />
                <ImageLabel alt='mobileImg02' h={25} w={25} imgUrl={phoneImg} text='0775017154' br={'50%'} mb={5} ml={15} mr={15} />
                <ImageLabel alt='watsappImg' h={25} w={25} imgUrl={watsapplogo} text='0772461021' br={'50%'} mb={5} ml={15} mr={15} />
                <ImageLabel alt='emailImg' h={25} w={25} imgUrl={emailImg} text='kushanmadusha62@gmail.com' br={'50%'} mb={5} ml={15} mr={15} />
            </div>
            <span style={{ display: 'block', width: 'fit-content', marginLeft: 10, marginBottom: 10, marginTop: 10, fontWeight: 'bold' }}>Socials</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ImageLabel alt='fblogo' h={25} w={25} imgUrl={fblogo} text='0772461021' br={'50%'} mb={5} ml={15} mr={15} />
                <ImageLabel alt='tiktoklogo' h={25} w={25} imgUrl={tiktoklogo} text='0775017154' br={'50%'} mb={5} ml={15} mr={15} />
                <ImageLabel alt='instalogo' h={25} w={25} imgUrl={instaLogo} text='0772461021' br={'50%'} mb={5} ml={15} mr={15} />
            </div>
            <span style={{ display: 'block', width: 'fit-content', marginLeft: 10, marginBottom: 10, marginTop: 10, fontWeight: 'bold' }}>Packages</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TextLabel event='Wedding' price='From 20000.00' ml={15} mb={5} mr={15} />
                <TextLabel event='Birthday' price='From 3000' ml={15} mr={15} />
            </div>
            <div style={{ marginTop: 10, display:'flex', justifyContent:'center', marginBottom:5 }}>
                <Button w={'90%'} h={35} text='Edit Info' borderColor='#FFC107' color='#FFC107' borderWidth={1} br={5} />
            </div>
        </div>
    )
}

export default PersonalInfo