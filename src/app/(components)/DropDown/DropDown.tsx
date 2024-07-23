'use client'

import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { IoChevronDown } from "react-icons/io5";

function DropDown() {

    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                <button style={{ color: 'gray', fontSize: 15 }} onClick={handleShowMenu}>by Location</button>
                <IoChevronDown style={{ marginLeft: 10, color: 'gray' }} />
            </div>
            {showMenu && <Menu />}
        </div>

    )
}

export default DropDown

export function Menu() {
    return (
        <div style={{ border: '1px solid #EEEDEB', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 5, position: 'absolute', marginTop: 5 }}>
            <span style={{ display: 'block', fontSize: 15 }}>Polonnaruwa</span>
            <span style={{ display: 'block', fontSize: 15 }}>Polonnaruwa</span>
            <span style={{ display: 'block', fontSize: 15 }}>Polonnaruwa</span>
            <span style={{ display: 'block', fontSize: 15 }}>Polonnaruwa</span>
        </div>
    )
}

