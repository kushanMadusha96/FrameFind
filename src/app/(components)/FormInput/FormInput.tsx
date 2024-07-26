import React from 'react'
import styles from './FormInput.module.css'

function FormInput(props: { id: string, lbl?: string, placeholder?: string, type: string, w: number, key?: number }) {

    return (
        <div key={props.key} style={{ marginTop: 2, marginBottom: 2 }}>
            <label htmlFor={props.id} style={{ fontSize: 14 }}>{props.lbl}</label> <br />
            <input type={props.type} placeholder={props.placeholder} name={props.id} id={props.id} style={{ width: props.w, height: 40, border: '1px solid black', borderRadius: 4, marginTop: 0, paddingLeft: 4, paddingRight: 4, outline: 'none' }} />
        </div>
    )
}

export default FormInput