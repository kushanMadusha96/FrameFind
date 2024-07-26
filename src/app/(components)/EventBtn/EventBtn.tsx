'use client'
import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { RiPlayListAddFill } from "react-icons/ri";

function EventBtn(props: { event: string, ml?: number, mr?: number, mt?: number, mb?: number, onClick?: () => void, isSelect: boolean }) {
    return (
        <div>
            <div onClick={props.onClick} style={{ display: 'flex', borderRadius: 10, paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5, marginLeft: props.ml, marginRight: props.mr, marginTop: props.mt, marginBottom: props.mb, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <span style={{ fontSize: 13, }}>{props.event}</span>
                {
                    props.isSelect
                        ?
                        <RxCrossCircled color='#FFC107' fontSize={18} style={{ marginLeft: 20 }} />
                        :
                        <RiPlayListAddFill color='#FFC107' fontSize={18} style={{ marginLeft: 20 }} />
                }
            </div>
        </div>
    )
}

export default EventBtn