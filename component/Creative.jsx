import * as React from 'react';

export default function Creative() {

    return (
        <>
            <div className="container">
                <h3 className="creative-text ">
                    We are <span id="gif" className="mask-creative pos-relative mask has-gif">
                        <span className="txt">Smart</span>
                        <span className="pos-absolute" >
                            <img className="hero-gif" src="albert.png" /></span></span>, <span id="gif" className="mask-smart pos-relative mask has-gif">
                        <span className="txt">Creative</span>
                        <span className="pos-absolute" >
                            <img className="hero-gif" src="zoom.gif" /></span></span> Enginners from <span id="gif" className="mask-libya pos-relative mask has-gif">
                        <span className="txt">Libya.</span>
                        <span className="pos-absolute" >
                            <img className="hero-gif" src="tripoli.jpg" /></span></span>
                </h3>
            </div>
        </>

    );
}