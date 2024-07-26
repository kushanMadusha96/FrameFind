'use client'
import React, { useState } from 'react'
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

function FiveStar(props: { size: number, ml?: number, mr?: number, readOnly?: boolean }) {
    const [star1, setStar1] = useState(false);
    const [star2, setStar2] = useState(false);
    const [star3, setStar3] = useState(false);
    const [star4, setStar4] = useState(false);
    const [star5, setStar5] = useState(false);

    const handleStarChange = (star_number: number) => {
        star_number == 1 && setStar1(!star1);
        star_number == 2 && setStar2(!star2);
        star_number == 3 && setStar3(!star3);
        star_number == 4 && setStar4(!star4);
        star_number == 5 && setStar5(!star5);
    }

    return (

        <div style={{ display: 'inline-flex', marginLeft: props.ml, marginRight: props.mr }}>
            {props.readOnly == false ?
                <>

                    {star1 ? <IoIosStar size={props.size} style={{ marginLeft: 5, marginRight: 5 }} color='#FFC107' onClick={() => handleStarChange(1)} /> : <IoIosStarOutline size={props.size} style={{ marginLeft: 5, marginRight: 5 }} onClick={() => handleStarChange(1)} />}
                    {star2 ? <IoIosStar size={props.size} style={{ marginLeft: 5, marginRight: 5 }} color='#FFC107' onClick={() => handleStarChange(2)} /> : <IoIosStarOutline size={props.size} style={{ marginLeft: 5, marginRight: 5 }} onClick={() => handleStarChange(2)} />}
                    {star3 ? <IoIosStar size={props.size} style={{ marginLeft: 5, marginRight: 5 }} color='#FFC107' onClick={() => handleStarChange(3)} /> : <IoIosStarOutline size={props.size} style={{ marginLeft: 5, marginRight: 5 }} onClick={() => handleStarChange(3)} />}
                    {star4 ? <IoIosStar size={props.size} style={{ marginLeft: 5, marginRight: 5 }} color='#FFC107' onClick={() => handleStarChange(4)} /> : <IoIosStarOutline size={props.size} style={{ marginLeft: 5, marginRight: 5 }} onClick={() => handleStarChange(4)} />}
                    {star5 ? <IoIosStar size={props.size} style={{ marginLeft: 5, marginRight: 5 }} color='#FFC107' onClick={() => handleStarChange(5)} /> : <IoIosStarOutline size={props.size} style={{ marginLeft: 5, marginRight: 5 }} onClick={() => handleStarChange(5)} />}
                </>
                :
                <>
                    <IoIosStar size={props.size} style={{ marginLeft: 5, marginRight: 5 }} color='#FFC107' />
                    <IoIosStar size={props.size} style={{ marginLeft: 5, marginRight: 5 }} color='#FFC107' />
                    <IoIosStar size={props.size} style={{ marginLeft: 5, marginRight: 5 }} color='#FFC107' />
                    <IoIosStar size={props.size} style={{ marginLeft: 5, marginRight: 5 }} color='#FFC107' />
                    <IoIosStar size={props.size} style={{ marginLeft: 5, marginRight: 5 }} color='#FFC107' />
                </>
            }

        </div>


    )
}

export default FiveStar