import React from "react";

const Modal = ({ children, setOpenModal, openModal }) => {
  return (
    <>
      {openModal && (
        <div
          className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-screen bg-black bg-opacity-60"
        //   onClick={() => setOpenModal(false)}
        >
          {/* w-[16vw] h-[25vh] */}
          <div className="py-[10px] bg-white  rounded-[32px] flex flex-col justify-between items-center border-stone-950 border-4">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
