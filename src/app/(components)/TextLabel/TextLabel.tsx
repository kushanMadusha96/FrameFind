import React from 'react'

function TextLabel(props: { event: string, price: string, ml?: number, mr?: number, mt?: number, mb?: number }) {
    return (
        <span style={{ paddingLeft: 10, paddingRight: 10, height: 35, display: 'inline-flex',justifyContent:'center',backgroundColor:'#EEEEEE', borderRadius: 15, fontSize: 12, alignItems: 'center', marginLeft: props.ml, marginRight: props.mr, marginTop: props.mt, marginBottom: props.mb }}>{props.event} : {props.price}</span>
    )
}

export default TextLabel