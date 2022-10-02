import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import React, { useContext } from "react";

import "swiper/css";

import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { ModalContext } from "./_app";
import Head from "next/head";
const Project = () => {
    const modal = useContext(ModalContext);

    return (
        <>
            <Head>
                <title>LeoCodes | Programming Team | Projects</title>
            </Head>

            <div className='container-fuild pro-img'>

                <div className='p-4 pro-text'>

                    <h1 className='pro-text'>Light Up and Keep It Going</h1>
                    <p></p>
                </div>
            </div>

            <div className='container-fuild'>
                <div className='container mt-5 p-4'>
                    <div className='row mb-4'>
                        <div className='col-lg-6 mb-4'>

                            <h2>Libya CV</h2>

                            <p>                    Libya CV is the leading job site in Libya, connecting job seekers with employers looking to hire.
                            </p>

                            <div className='pb-3'>
                                <li>More than 45k followers on Facebook.</li>
                                <li>Published more than 7k job opportunities from more than 300 companies.</li>

                                <li>Used Laravel framework for web app, and used Java for android application.</li>
                                <li>Used MySQL as database with almost 70 table.</li>
                                <li>Used Redis Dataset to improve performance with almost 30 keys.</li>

                            </div>

                            <strong>Skills</strong>
                            <div className='d-flex pt-3 flex-wrap gap-1 flex-row tag-lang'>

                                <span>Laravel</span>
                                <span>Redis</span>
                                <span>MySQL</span>
                                <span>JQuery</span>
                                <span>Git</span>

                                <span>Android</span>
                                <span>GitHub Action</span>
                                <span>Nginx</span>
                                <span>Ubuntu</span>
                                <span>FCM</span>
                                <span>Java</span>

                            </div>
                            <br></br>
                            <strong>Links</strong>
                            <div className="d-flex gap-2 mt-1 mb-4">
                                <a className="link2" href="https://libyacv.com">Libyacv.com</a>
                                <a className="link2" href="https://play.google.com/store/apps/details?id=libyacvpro.libya_cv">Google Play</a>
                            </div>
                        </div>
                        <div className='col-lg-6 project-slide'>
                            <Swiper
                                loop={true}
                                spaceBetween={90}
                                autoplay={{
                                    delay: 2500,

                                }}
                                pagination={{
                                    clickable: true,
                                }}

                                modules={[Autoplay, Pagination]}

                            >
                                <div className='title-project'><strong>Libya CV</strong></div>

                                <SwiperSlide>
                                    <img className='slide-img' src='./project/libyacv4.png' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='slide-img' src='./project/libyacv-search.png' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='slide-img' src='./project/libyacv-edit.png' />
                                </SwiperSlide>
                            </Swiper>

                        </div>
                    </div>
                    <div className='row pt-5 mt-6 mb-5 border-top border-1 '>
                        <div className='col-lg-6 mb-5'>
                            <h2>My Letter</h2>
                            <p>A messaging and social media app similar to Slowly</p>
                            <div className='pb-3'>

                                <li>Used .Net 6 web API, to talk with PostgreSQL database, which hosted on Vultr cloud.</li>
                                <li>used SignalR for real-time communications.</li>
                                <li>used Next.js framework as frontend.</li>
                                <li>used Docker container, which has three images backend and frontend and database.</li>

                                <li>used Nginx reverse proxy to serve application.</li>
                            </div>
                            <strong>Skills</strong>
                            <div className='d-flex pt-3 flex-wrap gap-1 flex-row tag-lang'>

                                <span>.Net 6</span>
                                <span>Web API</span>
                                <span>C#</span>
                                <span>SignalR</span>
                                <span>Repository pattern</span>

                                <span>Next.js</span>
                                <span>PostgreSQL</span>
                                <span>Nginx</span>
                                <span>Docker</span>
                                <span>Reverse proxy</span>
                                <span>FCM</span>

                            </div>

                            <br></br>
                            <strong>Links</strong>
                            <div className="d-flex gap-2 mt-1 mb-4">
                                <a className="link2" href="https://myletter.app">MyLetter.app</a>
                            </div>
                        </div>
                        <div className='col-lg-6  project-slide'>
                            <Swiper
                                loop={true}
                                spaceBetween={90}
                                autoplay={{
                                    delay: 3500,

                                }}
                                pagination={{
                                    clickable: true,
                                }}

                                modules={[Autoplay, Pagination]}

                            >
                                <div className='title-project'><strong>My Letter</strong></div>

                                <SwiperSlide>
                                    <img className='slide-img' src='./project/myletter-edit-img.png' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='slide-img' src='./project/myletter-edit.png' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='slide-img' src='./project/myletter.png' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='slide-img' src='./project/myletter-box.png' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='slide-img' src='./project/myletter-write-msg.png' />
                                </SwiperSlide>
                            </Swiper>

                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Project;
