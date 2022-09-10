import * as React from 'react';

export default function Creative() {

    return (
        <>
            <div className="container">
                <h3 className="hero-title fw-regular front-hero-title">
                    We are a
                    <span id="gif" className="mask-design has-gif">
                        <span className="txt"> Creative</span>
                        <span className="pos-absolute" >
                            <img className="hero-gif" src="zoom.gif" /></span></span>,
                    <span id="gif" className="mask-design has-gif">
                        <span className="txt"> Smart</span>
                        <span className="pos-absolute" >
                            <img className="hero-gif" src="smart2.jpg" /></span></span> and enginners from
                    <span id="gif" className="mask-design has-gif">
                        <span className="txt"> Libya.</span>
                        <span className="pos-absolute" >
                            <img className="hero-gif" src="libya1.jpg" /></span></span>
                </h3>
            </div>
        </>

    );
}