import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from './modalContext';
import ModalWindow from '../components/modalWindow';

export default function Modal() {
  let { modal } = useContext(ModalContext);
  if (modal) {
    return createPortal(
      <ModalWindow />
      , document.querySelector("#modal-root")
    );
  } else return null;
};