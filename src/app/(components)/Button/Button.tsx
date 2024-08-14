import React from 'react';
import styles from './Button.module.css';

function Button(props: {
    text: string, w: number | string, h?: number, bc?: string, borderWidth?: number, borderColor?: string, color?: string, br?: number, ml?: number, mr?: number, fw?: string, fs?: number,pt?: number,pb?: number,pl?: number,pr?: string, isDisabled?: boolean, onClick?: () => void
}) {
    const buttonStyle = {
        width: props.w,
        height: props.h,
        backgroundColor: props.bc,
        border: props.borderWidth && props.borderColor ? `${props.borderWidth}px solid ${props.borderColor}` : undefined,
        color: props.color,
        borderRadius: props.br,
        marginLeft: props.ml,
        marginRight: props.mr,
        fontSize: props.fs ? props.fs : 15,
        fontWeight: props.fw,
        paddingBottom: props.pb,
        paddingTop: props.pt,
        paddingLeft: props.pl,
        paddingRight: props.pr,
    };

    return (
        <button className={styles.button} style={buttonStyle} onClick={props.onClick} disabled={props.isDisabled}>
            {props.text}
        </button>
    );
}

export default Button;
