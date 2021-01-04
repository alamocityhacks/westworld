import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from '../lib/modalContext';

export default function Modal() {
  let { modalContent, handleModal, modal } = React.useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <div id="modal"
        className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.8)" }}
      >
        <div className="bg-white w-screen relative p-5 mx-10 shadow-lg rounded flex flex-col items-start text-lg text-gray-800">
          <div className="opacity-5 z-0 font-rubik-mono text-8xl overflow-hidden">Alamo City Hacks</div>
          <button
            className="absolute top-0 right-0 -mt-12 font-bold self-end text-white w-8 h-8"
            onClick={() => handleModal()}
          >
            <svg className="w-5 h-5 content-center p-0 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <p className="z-50">{modalContent}</p>
        </div>
      </div>,
      document.querySelector("#modal-root")
    );
  } else return null;
};