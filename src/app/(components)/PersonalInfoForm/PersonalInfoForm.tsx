import React from 'react'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'

function PersonalInfoForm() {
    return (
        <form style={{ width: 400, height: 'fit-content', border: '1px solid black', borderRadius: 3, marginLeft: 10, padding: 5, paddingBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: 16, alignSelf: 'center', marginTop: 20, marginBottom: 10 }}>Fill Your Personal Info</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FormInput w={350} id='first_name' lbl='Enter Your First Name' placeholder='Kushan' type='text' />
                <FormInput w={350} id='last_name' lbl='Enter Your last Name' placeholder='Madusha' type='text' />
                <FormInput w={350} id='district' lbl='Enter Your District' placeholder='Polonnaruwa' type='text' />
                <FormInput w={350} id='address' lbl='Enter Your Address' placeholder='216, medagama dewagala' type='text' />
                <FormInput w={350} id='contact_01' lbl='Enter Your Contact 01' placeholder='0772461021' type='number' />
                <FormInput w={350} id='contact_02' lbl='Enter Your Contact 02' placeholder='0775017154' type='number' />
                <FormInput w={350} id='email' lbl='Enter Your email' placeholder='kushanmadusha62@gmail.com' type='email' />
                <FormInput w={350} id='watsApp' lbl='Enter Your watsApp' placeholder='0775017154' type='number' />
                <div style={{ marginTop: 5 }}>
                    <Button text='Next' w={170} h={40} bc='#FFC107' color='white' br={3} mr={5} />
                    <Button text='Fill Later' w={170} h={40} bc='#FFDE4D' color='white' br={3} ml={5} />
                </div>
            </div>
        </form>
    )
}

export default PersonalInfoForm