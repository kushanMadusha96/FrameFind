import React from 'react';
import styles from './FormInput.module.css';

function FormInput(props: { id: string, lbl?: string, placeholder?: string, type: string, w: number }) {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={props.id} className={styles.label}>{props.lbl}</label> <br />
            <input
                type={props.type}
                placeholder={props.placeholder}
                name={props.id}
                id={props.id}
                className={styles.input}
                style={{ width: props.w}}
            />
        </div>
    );
}

export default FormInput;
