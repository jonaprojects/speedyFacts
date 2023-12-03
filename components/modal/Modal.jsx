import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Overlay from "./Overlay";

const Modal = (props) => {
  // A modal is closed by default

  if (!props.isOpen) {
    return <></>;
  }


  const handleModalClick = (event) => {
    // Prevent event propagation to the overlay when clicking inside the modal content
    event.stopPropagation();
  };

  return createPortal(
    <>
      <Overlay className={`flex items-center justify-center`}>
        <div
          className="bg-white max-w-2xl p-7 rounded-lg shadow-lg relative"
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
            <SecondaryButton onClick={props.secondaryAction}>
              {props.secondaryText}
            </SecondaryButton>
            <PrimaryButton onClick={props.primaryAction}>
              {props.primaryText}
            </PrimaryButton>
          </div>
        </div>
      </Overlay>
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
