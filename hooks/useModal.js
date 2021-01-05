import React from 'react';

export default function useModal() {
  let [modal, setModal] = React.useState(false);
  let [modalContent, setModalContent] = React.useState("I'm the Modal Content");

  let handleModal = (content = false) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
      document.querySelectorAll('.opacity-60').forEach(element => {
        element.classList.remove('opacity-60')
        element.classList.add('changedopacity')
      });
    } else {
      document.querySelectorAll('.changedopacity').forEach(element => {
        element.classList.add('opacity-60')
        element.classList.remove('changedopacity')
      });
    }
  };

  return { modal, handleModal, modalContent };
};