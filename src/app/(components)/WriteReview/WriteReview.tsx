import React from 'react'
import { RxCross2 } from "react-icons/rx";
import Review from '../Review/Review';
import FiveStar from '../FiveStar/FiveStar';
import Button from '../Button/Button';

function WriteReview() {
    return (
        <div style={{ width: 350, maxHeight: '70%', border: '1px solid black', marginLeft: 10, borderRadius: 5, padding: 10 }}>
            <div style={{ backgroundColor: 'red', display: 'flex', alignItems: 'center', position: 'relative', marginTop: 10, marginBottom: 25 }}>
                <span style={{ position: 'absolute', display: 'inline-block', width: 'fit-content' }}>
                    Write Your Review,
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
            <input type='text' placeholder='write review' style={{ backgroundColor: '#EEEDEB', width: '100%', alignSelf: 'center', height: 40, paddingLeft: 5, paddingRight: 5, border: 'none', outline: 'none', borderBottom: '1px solid black' }} />
            <span style={{ fontSize: 14, marginTop: 15, display: 'inline-block' }}>Rate work,</span>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                <FiveStar size={25} readOnly={false}/>
            </div>
            <div style={{ marginTop: 15 }}>
                <Button w={'100%'} h={35} text='SEND REVIEW' borderColor='#FFC107' color='#FFC107' borderWidth={1} br={5} />
            </div>
        </div>
    )
}

export default WriteReview