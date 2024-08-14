'use client'
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { RiImageAddLine } from "react-icons/ri";
import styles from './CreateNewModal.module.css';
import CreateNewModal_02 from '../CreateNewModal02/CreateNewModal_02';

function CreateNewModal(props: { onClickCross?: () => void, onClickAddImg?: () => void }) {
    const [showAddImgeModel, setshowAddImgeModel] = useState(false);

    return (
        <div className={styles.modalContainer}>
            {showAddImgeModel &&
                <div className={styles.popUp}>
                    <CreateNewModal_02 onClickCross={() => setshowAddImgeModel(false)} />
                </div>
            }
            <div className={styles.header}>
                <span className={styles.headerTitle}>
                    Create New,
                </span>
                <RxCross2
                    className={styles.closeIcon}
                    size={20}
                    onClick={props.onClickCross}
                />
            </div>
            <div className={styles.centeredContainer}>
                <div
                    onClick={props.onClickAddImg}
                    className={styles.addButton}
                >
                    <span className={styles.addButtonText}>Add Images & Videos</span>
                    <RiImageAddLine className={styles.addButtonIcon} color='#FBBC05' size={20} />
                </div>
            </div>
        </div>
    );
}

export default CreateNewModal;
