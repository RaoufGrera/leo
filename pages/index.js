import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../component/layout/Header'
import Footer from '../component/layout/Footer';

import Body from '../component/layout/Body';
import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { useTypingText } from "../lib/useTypingText";
import { useLottie } from "lottie-react";
import 'swiper/css/navigation';

import React, { useContext } from 'react';
import ui from "../lib/rr.json";

// Import Swiper styles
import "swiper/css";

import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import HeadText from '../component/HeadText';
import Creative from '../component/Creative';
import Language from '../component/language/Language';
import { ModalContext } from './_app';


// import required modules


export default function Home() {
  const { word } = useTypingText(
    ["Engineers", "fast", "creative"],
    3000,
    2335
  );
  const options = {
    animationData: ui,
    loop: true
  };

  const modal = useContext(ModalContext);
  const { View } = useLottie(options);
  return (
    <>
      <div className='col-12 home-header'>

        <div className='container'>
          <div className='row mb-4'>
            <div className='col-md-6'>
              <HeadText />
            </div>
            <div className='col-md-6'>
              {View}
            </div>
          </div>
          <div className='row mt-6'>
            <div className='col-md-6 '>
              <div className='swiper-border'>
                <Swiper
                  loop={true}
                  spaceBetween={90}
                  autoplay={{
                    delay: 4500,

                  }}
                  pagination={{
                    clickable: true,
                  }}

                  modules={[Autoplay, Pagination]}

                >
                  <SwiperSlide>
                    <div className="home-slide">
                      <p className="home-slide-quote"><span>88%</span> of online consumers are less likely to return to a website after a bad user experience.</p>
                      <p className="home-slide-source">Justin Mifsud, Usability Geek</p>
                    </div></SwiperSlide>
                  <SwiperSlide>

                    <div className="home-slide">
                      <p className="home-slide-quote">The cost of fixing an error after development is <span>100x</span> that of fixing it before development.</p>
                      <p className="home-slide-source">Software Engineering: A Practitioner’s Approach</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>

                    <div className="home-slide">
                      <p className="home-slide-quote">People form <span>75%</span> of their judgment on a website’s credibility purely on its aesthetics.</p>
                      <p className="home-slide-source">University of Surrey</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>

                    <div className="home-slide">
                      <p className="home-slide-quote"><span>70%</span> of users prefer when a company uses humor they can relate to.</p>
                      <p className="home-slide-source">Adobe</p>
                    </div>
                  </SwiperSlide>

                </Swiper>
              </div>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-5'>
              <div className='mt-3'>
                <h2> Good user experience is good for business</h2>

                <p className='text-desc'>Leaving user experience to chance can hurt your business. Issues like these can be addressed through UX design practices

                </p>
                <button onClick={() => modal()} className='btn  btn-warning'>CONTACT US</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fulid">

          <div className='mid p-4 mb-4'>
            <h2 className='text-center pb-3'><span className="black-text">Let's work together</span></h2>
            <div className='text-center'>
              <Creative />

            </div>

          </div>
        </div>

        <div className='container-fulid pt-5  '>

          <div className='mb-5'>
            <h2 className='text-center pb-2'>Technologies for software development</h2>
            <p className='text-center text-desc '> We employ the latest technologies, frameworks, and components to create solutions that combine a strong technical back-end with easy to use modern design.
            </p>
          </div>
          <div className='section-language'>
            <div className='card-lang'>
              <Image className='programming-language' src="/csharp.svg" alt="" width={60} height={60} />
              <span>C#</span>
            </div>
            <div className='card-lang'>
              <Image className='programming-language' src="/microsoft-net.svg" alt="" width={60} height={60} />
              <span>.NET 6</span>
            </div>

            <div className='card-lang'>
              <Image className='programming-language' src="/javascript.svg" alt="" width={60} height={60} />
              <span>JavaScript</span>
            </div>


            <div className='card-lang'>
              <Image className='programming-language' src="/react.svg" alt="" width={60} height={60} />
              <span>React.js</span>
            </div>
            <div className='card-lang'>
              <Image className='programming-language' src="/nextjs.svg" alt="" width={60} height={60} />
              <span>Next.js</span>
            </div>
            <div className='card-lang'>
              <Image className='programming-language' src="/leaflet.jpg" alt="" width={60} height={60} />
              <span>Leaflet.js</span>
            </div>
            <div className='card-lang'>
              <Image className='programming-language' src="/geoserver.png" alt="" width={60} height={60} />
              <span>GeoServer</span>
            </div>


            <div className='card-lang'>
              <Image className='programming-language' src="/laravel-2.svg" alt="" width={60} height={60} />
              <span>Laravel</span>
            </div>
            <div className='card-lang'>
              <Image className='programming-language' src="/flut.svg" alt="" width={60} height={60} />
              <span>Flutter</span>
            </div>
            <div className='card-lang'>
              <Image className='programming-language' src="/wordpress.svg" alt="" width={60} height={60} />
              <span>Wordpress</span>
            </div>
            <div className='card-lang'>
              <Image className='programming-language' src="/vultr.svg" alt="" width={60} height={60} />
              <span>Vultr VPS</span>
            </div>
            <div className='card-lang'>
              <Image className='programming-language' src="/ubuntu.svg" alt="" width={60} height={60} />
              <span>Ubuntu</span>
            </div>
            <div className='card-lang'>
              <Image className='programming-language' src="/docker.svg" alt="" width={60} height={60} />
              <span>Docker</span>
            </div>
            <div className='card-lang'>
              <Image className='programming-language' src="/nginx.svg" alt="" width={60} height={60} />
              <span>Nginx</span>
            </div>


            <div className='card-lang'>
              <Image className='programming-language' src="/mysql.svg" alt="" width={60} height={60} />
              <span>MySQL</span>
            </div>

            <div className='card-lang'>
              <Image className='programming-language' src="/firebase.svg" alt="" width={60} height={60} />
              <span>Firebase</span>
            </div>


            <div className='card-lang'>
              <Image className='programming-language' src="/redis.svg" alt="" width={60} height={60} />
              <span>Redis</span>
            </div>

            <div className='card-lang'>
              <img className='programming-language' src="/postgresql.svg" alt="" width={60} height={60} />
              <span>PostgreSQL</span>
            </div>

          </div>


        </div>


        <div className='container-fuild pt-6 pb-5 bg-light'>
          <div className='container  '>
            <div className='row'>
              <div className='col-lg-4'>
                <article className=' card-resume p-4 pt-3'>
                  <div className='flex-row d-flex pb-2 border-bottom border-1'>
                    <img className="img-rusme" src='./raouf.jpg' />
                    <div className='flex-column d-flex'>
                      <strong className="fs-4">Raouf H Grera</strong>
                      <div className='flex-row  d-flex gap-1'>
                        <span>Full-stack developer </span>
                        <a href="https://raoufgrera.com"> website</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-column gap-2 border-bottom border-1 d-flex pt-2">
                    <strong>Summary</strong>
                    <p className='text-desc fs-6'>
                      Full-Stack Developer with 7 years experience in the field of software development.
                      worked with .Net Web API and Next.js .
                      built many web and mobile apps from scratch.
                    </p>
                  </div>
                  <div className='d-flex flex-row gap-1 tag-lang flex-wrap pt-3'>
                    <span>C#</span>
                    <span>.NET</span>
                    <span className='tag-lang rust'>Rust</span>
                    <span>JS</span>
                    <span>Next.js</span>
                    <span>React.js</span>
                    <span>Flutter</span>

                    <span>Laravel</span>
                    <span>GeoServer</span>
                    <span>PostgreSQL</span>
                    <span>Redis</span>

                    <span>Docker</span>



                  </div>
                </article>
              </div>

              <div className='col-lg-4'>
                <article className=' card-resume p-4 pt-3'>
                  <div className='flex-column d-flex'>

                    <h3>join to us</h3>
                    <p>if you think the private company stell your time and don't give you what you suppose to have
                      then you are in the right place.

                      let's take thire jobs.
                    </p>
                  </div>

                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

