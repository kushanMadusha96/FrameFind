import React from 'react'

function UndoMessage() {
    return (
        <div style={{ width: 300, height: 50, display: 'flex', alignItems: 'center', backgroundColor: '#000000', borderRadius: 5, justifyContent: 'space-between' }}>
            <span style={{ color: 'white', fontSize: 13, marginLeft: 10 }}>Removing 1 notification</span>
            <span style={{ color: 'white', fontSize: 13, marginRight: 10, fontWeight: 'bold' }}>undo</span>
        </div>
    )
}

export default UndoMessage