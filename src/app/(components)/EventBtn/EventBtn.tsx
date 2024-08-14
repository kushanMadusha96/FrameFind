'use client'

import React from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { RiPlayListAddFill } from "react-icons/ri";
import styles from './EventBtn.module.css'; // Import the CSS module

function EventBtn(props: { event: string, ml?: number, mr?: number, mt?: number, mb?: number, onClick?: () => void, isSelect?: boolean }) {
    return (
        <div
            className={styles.eventButton}
            style={{ marginLeft: props.ml, marginRight: props.mr, marginTop: props.mt, marginBottom: props.mb }}
            onClick={props.onClick}
        >
            <span className={styles.eventText}>{props.event}</span>
            {
                props.isSelect
                    ?
                    <RxCrossCircled className={`${styles.icon} ${styles.selectedIcon}`} />
                    :
                    <RiPlayListAddFill className={`${styles.icon} ${styles.addIcon}`} />
            }
        </div>
    );
}

export default EventBtn;
