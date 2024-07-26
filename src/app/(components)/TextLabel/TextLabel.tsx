import React from 'react';

type TextLabelProps = {
    event: string;
    price: string;
    ml?: number;
    mr?: number;
    mt?: number;
    mb?: number;
};

const TextLabel: React.FC<TextLabelProps> = ({ event, price, ml = 0, mr = 0, mt = 0, mb = 0 }) => {
    const style = {
        paddingLeft: 10,
        paddingRight: 10,
        height: 35,
        display: 'inline-flex',
        justifyContent: 'center',
        backgroundColor: '#EEEEEE',
        borderRadius: 15,
        fontSize: 12,
        alignItems: 'center',
        marginLeft: ml,
        marginRight: mr,
        marginTop: mt,
        marginBottom: mb,
    };

    return (
        <span style={style}>
            {event} : {price}
        </span>
    );
};

export default TextLabel;
