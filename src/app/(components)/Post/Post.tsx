import React from 'react'
import seller from '../../../../public/user.jpg'
import Image from 'next/image'
import ProfileImage from '../ProfileImage/ProfileImage'

function Post() {
  return (
    <div style={{ width: '18vw', height: 'fit-content', position: 'relative', marginLeft: 10 }}>
      <ProfileImage w={'100%'} h={'17vw'} br={5} alt='contentPic' />
      <div style={{ width: '100%', height: 30, borderRadius: 5, display: 'flex', alignItems: 'center', marginTop: 5 }}>
        <ProfileImage w={25} h={25} br={'50%'} alt='sellerProPic' />
        <span style={{ fontWeight: 'bold', fontSize: 13, marginLeft: 5 }}>kushan madusha,</span>
        <span style={{ fontSize: 13, fontWeight: 'bold', color: '#FFC107', marginLeft: 5 }}>Polonnaruwa</span>
      </div>
      <div style={{ marginTop: -8 }}>
        <span style={{ fontSize: 13, marginLeft: 30 }}>All events,</span>
        <span style={{ fontSize: 13, marginLeft: 5, borderBottom: '1px solid black' }}>see more</span>
      </div>
      <div style={{ marginTop: -7 }}>
        <span style={{ fontSize: 10, marginLeft: 30, color: '#84898F' }}>24.07.13</span>
      </div>
    </div>
  )
}

export default Post