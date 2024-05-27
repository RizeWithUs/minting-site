import React, { useState, useEffect } from "react";
import "./loader.css"

const NotifyModal = ({
  isOpen,
  onClose,
  hasBtn = false,
  notifyMsg,
  btnFunc,
}) => {
  const handleNext = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-green-600 bg-opacity-50 z-50">
          <div className="p-3 w-[28rem] flex flex-col justify-evenly items-center bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all zoom-out-modal">
            <button
              className="absolute top-3 right-3 hover:bg-gray-100 rounded-md p-1 transition-all ease-out duration-200 cursor-pointer"
              onClick={onClose}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                fillRule="evenodd"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z" />
              </svg>
            </button>
            <form
              className="w-[22rem] flex flex-col gap-3 py-4"
              onSubmit={handleNext}
            >
              <h1 className="flex gap-1 justify-center text-lg leading-6 font-medium text-[green]">
                <div>On</div>
                <div className="text-black">Progress</div>
              </h1>
              <p className="flex gap-1  justify-center">{notifyMsg}</p>
              <div class="loading-icon">
                <div class="icon"></div>
              </div>

              {hasBtn && (
                <div className="flex justify-center">
                  <button
                    className="inline-flex justify-center rounded-xl border border-transparent shadow-sm px-4 py-2 bg-[green] text-sm font-medium text-white hover:bg-[#1d5a1d] focus:outline-none"
                    type="submit"
                    onClick={btnFunc}
                  >
                    Next
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NotifyModal;
