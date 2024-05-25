import React, { useState } from "react";
import NftDetailsModal from "../Modal/NftDetails";

const MinterCanvas = () => {
  const [percentage, setPercentage] = useState(100);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [addingDetails, setAddingDetails] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        setPercentage(30);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearMint = () => {
    setUploadedImage(null);
    setPercentage(0);
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nftName, setNftName] = useState("");
  const [nftLink, setNftLink] = useState("");
  const [nftDescription, setNftDescription] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleMintClick = () => {
    if (uploadedImage) {
      // Add minting logic here
      setIsModalOpen(true);
      setPercentage(70);
      console.log("Minting NFT with image:", uploadedImage);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateNftDetails = ({ name, link, description }) => {
    setNftName(name);
    setNftLink(link);
    setNftDescription(description);
  };

  return (
    <>
      <NftDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialName={nftName}
        initialLink={nftLink}
        initialDescription={nftDescription}
        onUpdate={handleUpdateNftDetails}
      />
      <div className="w-full text-[green] pt-2 mt-5 font-bold text-center animate-bounce z-50 md:text-2xl">
        <p>Click in the white canvas below to MINT 👇</p>
      </div>

      <div className="w-full flex flex-col items-center gap-[1.5vw] md:gap-[2vh] py-[2.5vw] md:py-[3vh]">
        <div
          className="border border-green-500 no-select w-[min(142.22vh,95vw)] h-[min(53.44vw,80vh)] overflow-hidden"
          style={{
            backgroundImage: uploadedImage ? `url(${uploadedImage})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              transformOrigin: "0px 0px 0px",
              transform: "matrix(0.342361, 0, 0, 0.342361, 0, 0)",
            }}
          >
            <canvas
              width="2560"
              height="1440"
              style={{
                width: "2560px",
                height: "1440px",
                top: "0",
                left: "0",
                position: "absolute",
                imageRendering: "pixelated",
              }}
            ></canvas>

            <canvas
              width="2560"
              height="1440"
              style={{
                width: "2560px",
                height: "1440px",
                top: "0",
                left: "0",
                position: "absolute",
                imageRendering: "pixelated",
                opacity: "0",
              }}
            ></canvas>
            <div
              className="z-10"
              style={{
                width: "2560px",
                height: "1440px",
                top: "0px",
                left: "0px",
                position: "absolute",
                cursor: "grabbing",
              }}
            >
              <div
                style={{
                  translate: "700px 460px",
                  zIndex: "auto",
                  userSelect: "auto",
                  width: "10px",
                  height: "10px",
                  position: "absolute",
                  cursor: "grabbing",
                }}
              >
                <canvas
                  width="10"
                  height="10"
                  className="border-green-500 border"
                  style={{
                    width: "10px",
                    height: "10px",
                    position: "absolute",
                    imageRendering: "pixelated",
                    backgroundColor: "rgba(239, 68, 68, 0.5)",
                  }}
                ></canvas>
                <div
                  className="absolute cursor-nw-resize block h-[25px] w-[25px] border border-white bg-green-500 rounded-full"
                  style={{
                    transform: "scale(1.46045)",
                    top: "-26px",
                    left: "-26px",
                    transformOrigin: "right bottom",
                  }}
                ></div>
                <div
                  className="absolute cursor-ne-resize block h-[25px] w-[25px] border border-white bg-green-500 rounded-full"
                  style={{
                    transform: "scale(1.46045)",
                    top: "-26px",
                    right: "-26px",
                    transformOrigin: "left bottom",
                  }}
                ></div>
                <div
                  className="absolute cursor-se-resize block h-[25px] w-[25px] border border-white bg-green-500 rounded-full"
                  style={{
                    transform: "scale(1.46045)",
                    bottom: "-26px",
                    right: "-26px",
                    transformOrigin: "left top",
                  }}
                ></div>
                <div
                  className="absolute cursor-sw-resize block h-[25px] w-[25px] border border-white bg-green-500 rounded-full"
                  style={{
                    transform: "scale(1.46045)",
                    bottom: "-26px",
                    left: "-26px",
                    transformOrigin: "right top",
                  }}
                ></div>
                <div className="w-full h-full relative">
                  <div
                    className="rounded-md shadow-xl absolute w-[12rem] md:w-[14.5rem] h-[7.5rem] md:h-[9rem] p-2 text-white bg-green-500 flex flex-col justify-between items-center text-xs md:text-sm"
                    style={{
                      transform: "scale(2.92089)",
                      marginLeft: "78.3836px",
                      marginTop: "0px",
                      left: "0px",
                      transformOrigin: "left top",
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="absolute h-6 w-6 md:h-7 md:w-7 right-1 md:right-2 top-1 md:top-2 cursor-pointer"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={handleClearMint}
                    >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
                    </svg>
                    <div style={{ textAlign: "center" }}>
                      <br />
                      <br />
                      <div>
                        <div className="w-[9rem] h-[3.5rem] md:w-[11rem] md:h-[4rem] bg-white rounded-md">
                          <div
                            className="cursor-pointer text-green-500 hover:text-green-400 w-full h-full flex flex-col justify-evenly items-center"
                            onClick={
                              uploadedImage
                                ? handleMintClick
                                : handleUploadClick
                            }
                          >
                            <input
                              id="fileInput"
                              accept=".png, .jpg, .jpeg"
                              type="file"
                              style={{ display: "none" }}
                              onChange={handleFileChange}
                            />
                            {uploadedImage ? (
                              <span className="text-[green]">Mint NFT</span>
                            ) : (
                              <>
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
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
                                  <path d="M9 15l3 -3l3 3"></path>
                                  <path d="M12 12l0 9"></path>
                                </svg>
                                Upload image
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-[min(142.22vh,95vw)] gap-2">
          <div className="flex gap-1 w-full md:h-7 bg-gray-200 rounded-full shadow-md z-0 overflow-hidden">
            <div
              className="no-select md:h-7 text-base flex justify-center items-center bg-green-500 text-white rounded-full shadow-md"
              style={{ width: percentage + "%" }}
            ></div>
            <div className="self-center text-green-500">{percentage + "%"}</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="has-tooltip">
              <span className="tooltip text-sm md:text-base rounded shadow-lg p-1 bg-green-500 text-white -mt-[2rem] md:-mt-[2.5rem] -ml-[7.4rem] md:-ml-[8.3rem]">
                Show Minted Blocks
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                className="h-6 md:h-7 min-w-min cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07a32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinterCanvas;
