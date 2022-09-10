import React, { useContext } from 'react';
import { useTypingText } from "../lib/useTypingText";
import { ModalContext } from '../pages/_app';

export default function HeadText() {
    const { word } = useTypingText(
        ["Engineers", "Creative", "Smart"],
        70,
        20
    );

    const context = useContext(ModalContext);
    return (
        <div className='pt-3'>
            <br />

            <div className="leodiv"><img src="leo.png" ></img>
            </div>

            <div>
                <h1 className="text-black2 mb-3 fw-bold mt-lg-0 mt-4 ">
                    Future-Ready
                    <br></br>
                    <span className="pt-2  text-brown">
                        On-Demand Apps</span>
                </h1>
                <h2>We are {word}</h2>


                <p className="text-black text-desc mt-3 fs-5">Times are changing and so are we, digital transformation of companies that want to thrive,
                    We design and develop customized applications, using the latest technologies.</p>

                <button onClick={() => context()} type="button" className="btn  btn-warning mt-lg-4 mt-2 px-4 ">
                    GET IN TOUCH
                </button>
            </div>
        </div>

    );
}