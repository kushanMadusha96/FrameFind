'use client'

import React, { useState } from 'react';
import { IoChevronDown } from "react-icons/io5";
import styles from './DropDown.module.css'; // Import the CSS module

function DropDown(props: { ml?: number, title: string, onSelect: (value: string) => void,menuMarginL?:number }) {

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <div className={styles.dropdownContainer} style={{ marginLeft: props.ml }} onClick={handleShowMenu}>
                <button className={styles.dropdownButton}>{'Filter By' + ' ' + props.title}</button>
                <IoChevronDown className={styles.chevronIcon} color='gray' />
            </div>
            {showMenu && <Menu onSelect={props.onSelect} title={props.title} ml={props.menuMarginL}/>}
        </div>
    );
}

export default DropDown;

export function Menu(props: { onSelect: (value: string) => void, title: string, ml?:number }) {
    const items = props.title === 'Location'
        ? ["Polonnaruwa", "Anuradhapura", "Matale", "Kegalle"]
        : ["wedding1", "wedding2", "wedding3", "wedding4"];

    return (
        <div className={styles.menu} style={{ marginLeft:props.ml }}>
            {items.map(item => (
                <span
                    key={item}
                    className={styles.menuItem}
                    onClick={() => props.onSelect(item)}>
                    {item}
                </span>
            ))}
        </div>
    );
}
