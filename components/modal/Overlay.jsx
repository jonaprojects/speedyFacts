import React from "react";

export default function Overlay(props) {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      // Only trigger the closeModal function when the overlay (outside the modal content) is clicked
      props.closeModal();
    }
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 ${props?.className}`}
      onClick={handleOverlayClick}
    >
      {props.children}
    </div>
  );
}
