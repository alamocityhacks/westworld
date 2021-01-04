import React from 'react'
import { ModalContext } from '../lib/modalContext';
import Modal from '../components/Modal'

export default function Link({
    href,
    name,
    children,
}) {
    if (children && !href) {
        let { handleModal } = React.useContext(ModalContext);
        return (
            <a onClick={
                children && !href ? () => {
                    handleModal(
                        <Modal>
                            {children}
                        </Modal>
                    )
                } : () => { }
            } className="link">
                <div className="pointer-events-none">
                    {name}
                </div>
            </a>
        )
    } else if (href && !children) {
        return (
            <a href={href} target="_blank" className="link">
                <div className="pointer-events-none">
                    {name}
                </div>
            </a>
        )
    } else {
        throw 'This component needs either an href or children.'
    }
}