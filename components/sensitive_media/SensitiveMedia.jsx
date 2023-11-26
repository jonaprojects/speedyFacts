import React, { useState } from "react";
import Image from "next/image";
import H2 from "../typography/H2";
import P from "../typography/P";
import SensitiveMediaWrapper from "../media_wrapper/SensitiveMediaWrapper";
export default function SensitiveMedia(props) {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((show) => !show);
    console.log("Toggled!");
  };
  return (
    <SensitiveMediaWrapper show={show} toggleShow={toggleShow}>
      <div className="relative overflow-hidden">
        {!show && (
          <div className="absolute w-full h-full bg-slate-800 bg-opacity-60 z-10 flex justify-center items-center">
            <div className="z-20 opacity-100 text-center">
              <H2 className="text-white m-0 p-0">Graphic Content!</H2>
              <P className="text-slate-50 m-0 p-0">
                Are you sure you want to view this?
              </P>
              <div className="w-full flex justify-center mt-3">
                <button
                  className="bg-white text-slate-500 rounded-xl text-sm px-2 py-1 flex items-center gap-1"
                  onClick={toggleShow}
                >
                  <p>Show</p>
                  <Image
                    src="/eye.svg"
                    alt=""
                    className=""
                    width={20}
                    height={20}
                    priority
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        <img
          src={props.src}
          alt={props.alt ?? "Graphic content"}
          className={`object-fit ${show ? "" : "blur-lg"}`}
        />
      </div>
    </SensitiveMediaWrapper>
  );
}
