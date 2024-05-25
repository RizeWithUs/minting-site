import React, { useState } from "react";

const MintNowModal = ({ isOpen, onClick }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [isMinting, setIsMinting] = useState(false);
  const [nftName, setNftName] = useState("");
  const [nftDescription, setNftDescription] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("::: file", file);
      setUploadedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMintNow = () => {
    setIsMinting(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(
      "Minting NFT with Name:",
      nftName,
      "Description:",
      nftDescription
    );
    // Add the minting logic here
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center z-50">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        style={{ zIndex: 49 }}
        onClick={onClick}
      ></div>
      <div
        className="rounded-md shadow-xl relative w-96 md:w-[600px] p-6 text-white flex flex-col justify-between items-center text-sm md:text-base"
        style={{
          zIndex: 50,
          background: isMinting
            ? "gray"
            : uploadedImage
            ? `url(${imagePreviewUrl}) no-repeat center/cover`
            : "green",
        }}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="absolute h-6 w-6 md:h-7 md:w-7 right-2 top-2 cursor-pointer"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
        >
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
        </svg>
        {!isMinting ? (
          <>
            {!uploadedImage && <div>Upload NFT</div>}
            <div>
              <div className="w-40 h-14 md:w-44 md:h-16 bg-white rounded-md">
                {!uploadedImage ? (
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer text-green-500 hover:text-green-400 w-full h-full flex flex-col justify-evenly items-center"
                  >
                    <input
                      id="fileInput"
                      accept=".png, .jpg, .jpeg"
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 md:w-9 md:h-9"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
                      <path d="M9 15l3 -3l3 3"></path>
                      <path d="M12 12l0 9"></path>
                    </svg>
                    Upload image
                  </label>
                ) : (
                  <button
                    className="cursor-pointer text-green-500 hover:text-green-400 w-full h-full flex flex-col justify-evenly items-center"
                    onClick={handleMintNow}
                  >
                    Mint Now
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="p-3 w-[min(37rem,90vw)] flex flex-col justify-evenly items-center bg-green rounded-3xl text-left overflow-hidden shadow-xl transform transition-all zoom-out-modal">
            <button className="absolute right-3 top-3 hover:bg-gray-100 rounded-md p-1 transition-all ease-out duration-200 cursor-pointer">
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
                <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
              </svg>
            </button>
            <form className="w-[min(18rem,80vw)] flex flex-col gap-3 py-4">
              <h1 className="flex gap-1 justify-center text-xl leading-6 font-medium text-[green]">
                <div>Your</div>
                <div className="text-black">NFT</div>
              </h1>
              <div className="flex flex-col gap-1">
                <p>Name</p>
                <input
                  className="border border-red-400 p-1 px-2 rounded-xl focus:outline-none"
                  placeholder="Your NFT Name"
                  required
                  maxLength="30"
                  type="text"
                  value=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <p>Link</p>
                <input
                  className="border border-red-400 p-1 px-2 rounded-xl focus:outline-none"
                  placeholder="Your Link"
                  maxLength="255"
                  required
                  type="text"
                  value=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <p>Description</p>
                <textarea
                  className="border border-red-400 p-1 px-2 rounded-xl focus:outline-none overflow-y-auto resize-none w-full"
                  rows="4"
                  placeholder="Your NFT Description"
                  maxLength="200"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  className="inline-flex justify-center rounded-xl border border-transparent shadow-sm px-4 py-2 bg-[green] text-sm font-medium text-white hover:bg-[--clr-primary-dark] focus:outline-none"
                  type="submit"
                >
                  Mint NFT
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MintNowModal;
