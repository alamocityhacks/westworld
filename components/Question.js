import React from 'react'
import { ModalContext } from '../lib/modalContext';
import Modal from '../components/Modal'

export default function Question({
    question,
    answer,
    link,
    children,
}) {
    let { handleModal } = React.useContext(ModalContext);
    return (
        <div onClick={
            link ? () => {
                handleModal(
                    <Modal>
                        {children}
                    </Modal>
                )
            } : () => { }
        } className={`${link ? `link` : `px-4 py-2`}`}>
            <div className="pointer-events-none text-2xl text-white font-rubik font-medium uppercase">
                {question}
                <div className="inline ml-1 opacity-60 font-normal">
                    {answer}
                </div>
            </div>
        </div>
    )
}