import React from 'react'
import logo from '../../../../public/logo2.png'
import ProfileImage from '../ProfileImage/ProfileImage'
import FormInput from '../FormInput/FormInput'
import ImageLabel from '../ImageLabel/ImageLabel'
import AuthInput from '../AuthInput/AuthInput'
import Button from '../Button/Button'
import AuthBtn from '../AuthBtn/AuthBtn'
import fblogo from '../../../../public/fblogo.png'
import googlelogo from '../../../../public/google.webp'
import cameraman from '../../../../public/cameramen.png'


function AuthForm(props: { formType: string }) {
    const formType = props.formType;
    return (
        <div style={{ width: 800, height: 'fit-content', display: 'flex', backgroundColor: '#FFC107', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, margin: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <div style={{ flex: 2, borderTopRightRadius: 50, borderBottomRightRadius: 50, backgroundColor: 'white' }}>

                <div style={{ marginTop: 30, marginLeft: 50, marginBottom: 10 }}>
                    <span style={{ fontWeight: 'bold', fontSize: 17 }}>{formType == 'Sign Up' ? 'Create Account ' : 'Login'}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <AuthInput w={300} placeholder='user name' leftIcon='user' mt={5} mb={5} />
                    <AuthInput w={300} placeholder='email' leftIcon='email' mt={5} mb={5} />
                    <AuthInput w={300} placeholder='password' leftIcon='password' rightIcon='eye_close' mt={5} mb={formType == 'Sign Up' ? 5 : 10} />
                    <AuthInput w={300} placeholder='password' leftIcon='password' rightIcon='eye_close' mt={5} mb={10} display={formType == 'Sign Up' ? 'block' : 'none'} />
                    <Button text={formType == 'Sign Up' ? 'SIGN UP' : 'SIGN IN'} w={300} h={40} bc='#FFC107' br={8} color='white'  fs={13}/>
                    <AuthBtn alt='googlelogo' imgUrl={googlelogo} text={`${formType} with Google`} mt={15} />
                    <AuthBtn alt='fblogo' imgUrl={fblogo} text={`${formType} with Facebook`} mt={7} />
                    <div style={{ marginTop: 15, marginBottom: 15 }}>
                        <span style={{ fontSize: 13 }}>{formType == 'Sign Up' ? 'Already have an account?' : 'Do not have account'}</span><span style={{ fontSize: 13, color: '#FFC107', fontWeight: 'bold' }}>{formType == 'Sign Up' ? '  Log In' : '  Sign Up'}</span>
                    </div>
                </div>
            </div>
            <div style={{ flex: 2, backgroundColor: '#FFC107', display: 'flex', alignItems: 'center' }}>
                <div style={{}}>
                    <ProfileImage alt='logo' w={400} h={400} imgUrl={cameraman} />
                </div>
            </div>
        </div>
    )
}

export default AuthForm