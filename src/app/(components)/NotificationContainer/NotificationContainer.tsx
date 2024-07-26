import React from 'react'
import { RxCross2 } from "react-icons/rx";
import Notification from '../Notification/Notification';
import user from '../../../../public/user.jpg'
import UndoMessage from '../UndoMessage/UndoMessage';

function NotificationContainer() {
    const NOTIFICATIONS = [
        {
            id: 1, message: 'Dushen send review for you'
        },
        {
            id: 2, message: 'Dushen send review for you'
        },
        {
            id: 3, message: 'Dushen send review for you'
        },
        {
            id: 4, message: 'Dushen send review for you'
        },
        {
            id: 5, message: 'Dushen send review for you'
        },
        {
            id: 6, message: 'Dushen send review for you'
        },
        {
            id: 7, message: 'Dushen send review for you'
        },
        {
            id: 1, message: 'Dushen send review for you'
        },
        {
            id: 1, message: 'Dushen send review for you'
        },
        {
            id: 1, message: 'Dushen send review for you'
        },
        {
            id: 1, message: 'Dushen send review for you'
        },
        {
            id: 1, message: 'Dushen send review for you'
        },
        {
            id: 1, message: 'Dushen send review for you'
        },
        {
            id: 1, message: 'Dushen send review for you'
        }
    ]
    return (
        <div style={{ width: 320, maxHeight: '70vh',overflowY:'scroll',scrollbarWidth:'none', border: '1px solid black', marginLeft: 10, borderRadius: 5}}>
            <div style={{ backgroundColor: 'red', display: 'flex', alignItems: 'center', position: 'sticky', top: 20, marginBottom: 45 }}>
                <span style={{ fontWeight: 'bold', position: 'absolute', display: 'inline-block', width: 'fit-content', left: 0, right: 0, margin: 'auto' }}>
                    Notifications
                </span>
                <RxCross2
                    color='gray'
                    size={20}
                    style={{
                        position: 'absolute',
                        right: 10
                    }}
                />
            </div>
            <div style={{ marginLeft:10 }}>
                {NOTIFICATIONS.map((notification, index) => (
                    <Notification key={notification.id} imgUrl={user} message={notification.message} />
                ))}
            </div>
            <div style={{ position:'sticky', bottom: 5, marginLeft:10 }}>
                <UndoMessage />
            </div>
        </div>
    )
}

export default NotificationContainer