import React from 'react';
import ProfileImage from '../ProfileImage/ProfileImage';
import AuthInput from '../AuthInput/AuthInput';
import Button from '../Button/Button';
import AuthBtn from '../AuthBtn/AuthBtn';
import fblogo from '../../../../public/fblogo.png';
import googlelogo from '../../../../public/google.webp';
import cameraman from '../../../../public/cameramen.png';
import styles from './AuthForm.module.css'; // Import the CSS module

function AuthForm(props: { formType: string }) {
    const { formType } = props;

    return (
        <div className={styles.authForm}>
            <div className={styles.authFormLeft}>
                <div className={styles.authFormHeader}>
                    <span>{formType === 'Sign Up' ? 'Create Account ' : 'Login'}</span>
                </div>
                <div className={styles.authFormContent}>
                    <AuthInput w={300} placeholder="user name" leftIcon="user" mt={5} mb={5} />
                    <AuthInput w={300} placeholder="email" leftIcon="email" mt={5} mb={5} />
                    <AuthInput w={300} placeholder="password" leftIcon="password" rightIcon="eye_close" mt={5} mb={formType === 'Sign Up' ? 5 : 10} />
                    <AuthInput w={300} placeholder="password" leftIcon="password" rightIcon="eye_close" mt={5} mb={10} display={formType === 'Sign Up' ? 'block' : 'none'} />
                    <Button text={formType === 'Sign Up' ? 'SIGN UP' : 'SIGN IN'} w={300} h={40} bc="#FFC107" br={8} color="white" fs={13} />
                    <AuthBtn alt="googlelogo" imgUrl={googlelogo} text={`${formType} with Google`} mt={15} />
                    <AuthBtn alt="fblogo" imgUrl={fblogo} text={`${formType} with Facebook`} mt={7} />
                    <div className={styles.authFormFooter}>
                        <span>{formType === 'Sign Up' ? 'Already have an account?' : 'Do not have account'}</span>
                        <span className={styles.authFormFooterBold}>{formType === 'Sign Up' ? ' Log In' : ' Sign Up'}</span>
                    </div>
                </div>
            </div>
            <div className={styles.authFormRight}>
                <ProfileImage alt="logo" w={400} h={400} imgUrl={cameraman} />
            </div>
        </div>
    );
}

export default AuthForm;
