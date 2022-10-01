import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ModalContext } from '../../pages/_app';
import React, { useContext } from 'react';
export default function Header() {
    const modal = useContext(ModalContext);
    const [isListOpen, setIsListOpen] = useState(false);
    const ref = useRef(null);
    function toggleList() {
        setIsListOpen(!isListOpen)
    }
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsListOpen(false);
        }
    };
    useEffect(() => {

        setTimeout(() => {
            if (isListOpen) {
                window.addEventListener('click', handleClickOutside, true)
            }
            else {
                window.removeEventListener('click', handleClickOutside, true)
            }
        })
    })

    return (
        <nav className='navbar sticky-top nav-border bg-light'>
            <div className='container-fluid'>
                <div className='head-menu'>
                    <div className='logo'><Link href="/"><img src="leo.png " className='pointer' alt="" /></Link></div>

                    <ul className='nav-menu gap-2'>

                        <li className='item-nav'><Link href="/">Home</Link></li>
                        <li className='item-nav'><Link href="project">Projects</Link></li>
                        <li className='item-nav'><button className='btn btn-warning' onClick={() => modal()}>Contact</button></li>

                    </ul>
                    <div className='nav-social'>

                    </div>
                </div>
            </div>
        </nav>
    )
}