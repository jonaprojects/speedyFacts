import React, { useEffect, useRef } from "react";

const PdfViewer = ({ pdfPath }) => {
  const embedRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      const embed = embedRef.current;
      if (embed) {
        const width = embed.clientWidth;
        const aspectRatio = 1.414; // Adjust this value based on your PDF's aspect ratio
        const calculatedHeight = width * aspectRatio;
        embed.style.height = `${calculatedHeight}px`;
      }
    };

    window.addEventListener("resize", updateHeight);
    updateHeight();

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div className="w-full max-w-screen-md my-8">
      <embed
        ref={embedRef}
        src={pdfPath}
        type="application/pdf"
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default PdfViewer;
