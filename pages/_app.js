import Footer from '../component/layout/Footer'
import Header from '../component/layout/Header'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ModalContact from '../component/ModalContact';
import React, { useEffect, useRef, useState } from "react";

export const ModalContext = React.createContext();
function MyApp({ Component, pageProps }) {
  const fun = () => {
    console.log("Call Fun");
  }

  const [showModalAsk, setShowModalAsk] = useState(false);
  function handleOpenModalAsk() {
    setShowModalAsk(true);
  }
  const handleCloseModalAsk = () => {
    setShowModalAsk(false);
  }

  return (
    <>
      <ModalContext.Provider value={() => handleOpenModalAsk()}>
        <Header />
        <main>
          <div className="container-fulid">
            <ModalContact show={showModalAsk} exit={handleCloseModalAsk} />

            <ToastContainer

              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
      </ModalContext.Provider>
    </>
  )
}

export default MyApp
