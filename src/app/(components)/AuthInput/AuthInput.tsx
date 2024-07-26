import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa";
import styles from './AuthInput.module.css'; // Import the CSS module

function AuthInput(props: { w: number | string, placeholder: string, rightIcon?: string, leftIcon: string, mt?: number, mb?: number, display?: string }) {

    const iconMapping = {
        user: FaUserCircle,
        email: MdOutlineAlternateEmail,
        password: RiLockPasswordFill,
        eye_close: FaEyeSlash
    };

    const LeftIconComponent = iconMapping[props.leftIcon];
    const RightIconComponent = iconMapping[props.rightIcon];

    const containerStyle = {
        '--mt': `${props.mt || 0}px`,
        '--mb': `${props.mb || 0}px`,
        '--display': props.display || 'block'
    } as React.CSSProperties;

    return (
        <div className={styles.authInputContainer} style={{ ...containerStyle, width: props.w }}>
            <LeftIconComponent className={styles.leftIcon} />
            <input
                placeholder={props.placeholder}
                className={`${styles.inputField} ${RightIconComponent ? styles.withRightIcon : ''}`}
            />
            {RightIconComponent && <RightIconComponent className={styles.rightIcon} />}
        </div>
    );
}

export default AuthInput;
