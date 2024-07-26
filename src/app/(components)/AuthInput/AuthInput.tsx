import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa";

function AuthInput(props: { w: number | string, placeholder: string, rightIcon?: string, leftIcon: string, mt?: number, mb?: number, display?: string }) {

    const iconMapping = {
        user: FaUserCircle,
        email: MdOutlineAlternateEmail,
        password: RiLockPasswordFill,
        eye_close: FaEyeSlash
    };

    const LeftIconComponent = iconMapping[props.leftIcon];
    const RightIconComponent = iconMapping[props.rightIcon];

    return (
        <div style={{ position: 'relative', width: props.w, marginTop: props.mt, marginBottom: props.mb,display: props.display }}>
            <LeftIconComponent
                color='gray'
                style={{
                    position: 'absolute',
                    left: 8,
                    top: '50%',
                    transform: 'translateY(-50%)'
                }}
            />
            <input
                placeholder={props.placeholder}
                style={{
                    width: '100%',
                    height: 40,
                    fontSize: 12,
                    border: '2px solid #EEEDEB',
                    borderRadius: 8,
                    outline: 'none',
                    paddingLeft: 40,
                    paddingRight: RightIconComponent ? 40 : 4
                }}
            />
            {RightIconComponent && (
                <RightIconComponent
                    color='gray'
                    style={{
                        position: 'absolute',
                        right: 10,
                        top: '50%',
                        transform: 'translateY(-50%)'
                    }}
                />
            )}
        </div>
    );
}

export default AuthInput;
