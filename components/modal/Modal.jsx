import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Modal = (props) => {
  // A modal is closed by default

  if (!props.isOpen) {
    return <></>;
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      // Only trigger the closeModal function when the overlay (outside the modal content) is clicked
      props.closeModal();
    }
  };

  const handleModalClick = (event) => {
    // Prevent event propagation to the overlay when clicking inside the modal content
    event.stopPropagation();
  };

  return createPortal(
    <>
      <div
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
        onClick={handleOverlayClick}
      >
        <div
          className="bg-slate-800 max-w-2xl p-7 rounded-lg shadow-lg relative"
          onClick={handleModalClick}
        >
          <span
            className="absolute text-xl text-slate-400 top-2 right-6 hover:text-slate-200 hover:cursor-pointer"
            onClick={props.closeModal}
          >
            {"\u2715	"}
          </span>
          {props.children}
          <div name="options" className="mt-6 flex flex-row gap-3">
            <button onClick={props.closeModal}>Close</button>
            <button
              onClick={() => {
                window.location.href = randomElement(PROJECTS_URLS);
              }}
            >
              Surprise Me
            </button>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export const ModalLink = (props) => {
  return (
    <a
      href={props.href}
      className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
    >
      {" "}
      {props.children}{" "}
    </a>
  );
};

export default Modal;
