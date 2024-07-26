'use client'
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import Review from '../Review/Review';
import FiveStar from '../FiveStar/FiveStar';
import Button from '../Button/Button';
import { RiImageAddLine } from "react-icons/ri";

function CreateNewModal() {
    return (
        <div style={{ width: 600, height: 200, marginLeft: 5, border: '1px solid black', borderRadius: 5, paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 15, position: 'relative' }}>
            <div style={{ backgroundColor: 'red', display: 'flex', alignItems: 'center', position: 'relative', marginTop: 10, marginBottom: 25 }}>
                <span style={{ position: 'absolute', display: 'inline-block', width: 'fit-content', fontSize: 16 }}>
                    Create New,
                </span>
                <RxCross2
                    color='gray'
                    size={20}
                    style={{
                        position: 'absolute',
                        right: 0
                    }}
                />
            </div>
            <div style={{ position: 'absolute', right: 0, left: 0, top: 0, bottom: 0, margin: 'auto', width: 'fit-content', height: 'fit-content' }}>
                <div onClick={() => { console.log("kushan") }} style={{ width: 220, height: 40, border: '1px solid #FBBC05', borderRadius: 5, display: 'inline-flex', alignItems: 'center', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 10 }}>Add Images & Vedios</span>
                    <RiImageAddLine color='#FBBC05' size={20} style={{ position: 'absolute', right: 10 }} />
                </div>
            </div>
        </div>
    )
}

export default CreateNewModal
