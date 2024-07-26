import React from 'react';
import { RxCross2 } from "react-icons/rx";
import Notification from '../Notification/Notification';
import user from '../../../../public/user.jpg';
import UndoMessage from '../UndoMessage/UndoMessage';
import styles from './NotificationContainer.module.css'; // Create this CSS module

function NotificationContainer() {
    const NOTIFICATIONS = [
        { id: 1, message: 'Dushen sent a review for you' },
        { id: 2, message: 'Dushen sent a review for you' },
        { id: 3, message: 'Dushen sent a review for you' },
        // Ensure all IDs are unique
        { id: 4, message: 'Dushen sent a review for you' },
        { id: 5, message: 'Dushen sent a review for you' },
        { id: 6, message: 'Dushen sent a review for you' },
        { id: 7, message: 'Dushen sent a review for you' },
        { id: 7, message: 'Dushen sent a review for you' },
        { id: 7, message: 'Dushen sent a review for you' },
        { id: 7, message: 'Dushen sent a review for you' },
        { id: 7, message: 'Dushen sent a review for you' },
        { id: 7, message: 'Dushen sent a review for you' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>Notifications</span>
                <RxCross2 color='gray' size={20} className={styles.closeIcon} />
            </div>
            <div className={styles.notifications}>
                {NOTIFICATIONS.map(notification => (
                    <Notification key={notification.id} imgUrl={user} message={notification.message} />
                ))}
            </div>
            <div className={styles.undoMessage}>
                <UndoMessage />
            </div>
        </div>
    );
}

export default NotificationContainer;
