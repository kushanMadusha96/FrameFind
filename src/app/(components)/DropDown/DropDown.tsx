'use client'

import React, { useState } from 'react';
import { IoChevronDown } from "react-icons/io5";
import styles from './DropDown.module.css'; // Import the CSS module

function DropDown() {

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <div className={styles.dropdownContainer} onClick={handleShowMenu}>
                <button className={styles.dropdownButton}>by Location</button>
                <IoChevronDown className={styles.chevronIcon} />
            </div>
            {showMenu && <Menu />}
        </div>
    );
}

export default DropDown;

export function Menu() {
    return (
        <div className={styles.menu}>
            <span className={styles.menuItem}>Polonnaruwa</span>
            <span className={styles.menuItem}>Polonnaruwa</span>
            <span className={styles.menuItem}>Polonnaruwa</span>
            <span className={styles.menuItem}>Polonnaruwa</span>
        </div>
    );
}
