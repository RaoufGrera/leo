import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../component/layout/Header'
import Footer from '../component/layout/Footer';

import Body from '../component/layout/Body';
import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { useTypingText } from "../lib/useTypingText";
import 'swiper/css/navigation';

import React, { useContext } from 'react';

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


  //Let's work together
  const modal = useContext(ModalContext);
  return (
    <>
      <Head>
        <title>LeoCodes | Programming Team</title>
      </Head>

      <div className='home-header'>


        <div className='container-fluid bg-white-40'>
          <div className='row'>
            <div className='col header-section'>
              <div className="leodiv  mb-5"><img src="leo.png" /></div>
              <h1 className='black-text mb-5 fs-h1'>Programming Team</h1>
              <Creative />
            </div>

          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='swiper-border'>
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
                <button onClick={() => modal()} className='btn  btn-warning'>Contact us</button>
              </div>
            </div>
          </div>
        </div>

        <div>

          <div className='mid p-4  m-7'>
            <div className='container'>
              <div className='col-lg-8'>
                <h2 className='fs-h2 black-text  pb-2'>Future-Ready</h2>
                <div className='text-desc'>

                  Times are changing and so are we, digital transformation of companies that want to thrive,
                  We design and develop customized applications, using the latest technologies.
                </div></div>
            </div>
          </div>
        </div>

        <div className=''>

          <div className='mb-5 text-center '>
            <h2 className='black-text fs-h2 mb-3'>Technologies for software development</h2>
            <p className='text-desc col-8 mx-auto'>We employ the latest technologies to create strong technical solutions.

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
              <Image className='programming-language' src="/postgresql.svg" alt="" width={60} height={60} />
              <span>PostgreSQL</span>
            </div>

          </div>


        </div>


        <div className='container-fluid   pt-6 pb-6 bg-light'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='black-text  fs-h2 mb-5'>Our Team...</h2>
            </div>
            <div className='row mt-4'>

              <div className='col-lg-4 mb-4'>
                <article className=' card-resume p-4 pt-3'>
                  <div className='flex-row gap-2 d-flex pb-2 border-bottom border-1'>
                    <Image className="img-rusme" src='/raouf.jpg' layout="fixed" width={65} height={65} />
                    <div className='flex-column d-flex'>
                      <strong className="fs-4">Raouf Grera</strong>
                      <div className='flex-row  d-flex gap-1'>
                        <span>Full-stack developer </span>
                        <a href="https://raoufgrera.com"> <svg width="24" height="24" viewBox="0 0 96 96"><path fillRule="evenodd" clipRule="evenodd" d="M32.091 52C32.507 61.125 34.333 69.268 37.050 75.221C27.459 71.360 20.379 62.577 18.937 52H32.091ZM40.100 52C40.492 59.792 42.005 66.500 44.039 71.247C45.233 74.032 46.449 75.775 47.392 76.705C47.653 76.964 47.856 77.125 48 77.225C48.144 77.125 48.347 76.964 48.608 76.705C49.551 75.775 50.767 74.032 51.961 71.247C53.995 66.500 55.508 59.792 55.900 52H40.100ZM55.900 44H40.100C40.492 36.208 42.005 29.500 44.039 24.753C45.233 21.967 46.449 20.225 47.392 19.294C47.653 19.036 47.856 18.874 48 18.775C48.144 18.874 48.347 19.036 48.608 19.294C49.551 20.225 50.767 21.967 51.961 24.753C53.995 29.500 55.508 36.208 55.900 44ZM63.909 52C63.493 61.125 61.667 69.268 58.950 75.221C68.540 71.360 75.621 62.577 77.063 52H63.909ZM77.063 44H63.909C63.493 34.875 61.667 26.732 58.950 20.779C68.541 24.640 75.621 33.423 77.063 44ZM32.091 44H18.937C20.379 33.423 27.459 24.640 37.050 20.779C34.333 26.732 32.507 34.875 32.091 44ZM85.333 48.000C85.333 27.381 68.619 10.666 48 10.666C27.381 10.666 10.667 27.381 10.667 48.000C10.667 68.618 27.381 85.333 48 85.333H48.007C68.622 85.330 85.333 68.616 85.333 48.000Z"></path></svg></a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-column gap-2 border-bottom border-1 d-flex pt-2">
                    <strong>Summary</strong>
                    <p className='text-desc fs-6'>
                      Full-Stack Developer with 7 years experience. developed postal addressing application for Libya Post. Participated in the development of the SDI project.
                      graduated with second-class honors +75%. built many web and mobile apps from scratch.
                    </p>
                  </div>
                  <div className='d-flex flex-row gap-1 tag-lang flex-wrap pt-3'>
                    <span>C#</span>
                    <span>.NET</span>

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
                  <div className='flex-row gap-2 d-flex pb-2 border-bottom border-1'>
                    <div className='flex-column d-flex'>
                      <strong className="fs-4">Fawzi A.</strong>
                      <div className='flex-row  d-flex gap-1'>
                        <span>Systems Analyst</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-column gap-2 border-bottom border-1 d-flex pt-2">
                    <strong>Summary</strong>
                    <p className='text-desc fs-6'>

                      He has more than 15 years of experience in the field of application analysis and development, he has experience in database development and design, he holds a master's degree in the field of information technology.
                    </p>
                  </div>
                  <div className='d-flex flex-row gap-1 tag-lang flex-wrap pt-3'>
                    <span>C#</span>
                    <span>.NET</span>
                    <span>Database designer</span>
                    <span>PostGIS</span>
                    <span>PostgreSQL</span>
                    <span>Linux</span>
                    <span>UI/UX</span>
                    <span>Systems Analyst</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

      </div >
    </>
  )
}

// <span className='tag-lang rust'>Rust</span>