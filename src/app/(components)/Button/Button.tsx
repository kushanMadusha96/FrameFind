import React from 'react'
import styles from './Button.module.css'

function Button(props: {
    text: string, w: number, h: number, bc: string, borderWidth?: number, borderColor?: string, color?: string, br?: number, ml?: number, mr?: number, fw?:string

}) {
    return (
        <button
            style={{
                width: props.w,
                height: props.h,
                backgroundColor: props.bc,
                border: props.borderWidth && props.borderColor ? `${props.borderWidth}px solid ${props.borderColor}` : undefined,
                color: props.color,
                borderRadius: props.br,
                marginLeft: props.ml,
                marginRight: props.mr,
                fontSize: 15,
                fontWeight: props.fw
            }}>
            {props.text}
        </button>
    )
}

export default Button