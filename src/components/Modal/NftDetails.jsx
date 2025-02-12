import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const NftDetailsModal = ({
  isOpen,
  onClose,
  initialName,
  initialLink,
  initialDescription,
  onUpdate,
  collectionList,
  onMint,
  onUpdateSelected,
}) => {
  const [nftName, setNftName] = useState(initialName || "");
  const [nftLink, setNftLink] = useState(initialLink || "");
  const [nftDescription, setNftDescription] = useState(
    initialDescription || ""
  );
  const [tabNumb, setTabNumb] = useState(1);

  // console.log("::::::: collectionList ---",collectionList)

  useEffect(() => {
    // Set the initial values when the modal opens
    setNftName(initialName || "");
    setNftLink(initialLink || "");
    setNftDescription(initialDescription || "");
  }, [isOpen, initialName, initialLink, initialDescription]);

  function isUrlValid(userInput) {
    var regexQuery =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
    var url = new RegExp(regexQuery, "g");
    if (url.test(userInput)) {
      return true;
    }
    return false;
  }

  const [selectedCollectionIndex, setSelectedCollectionIndex] = useState(null);

  const handleSelectedColl = (index) => {
    console.log(":::::: onUpdateSelected", collectionList[index]);
    onUpdateSelected(collectionList[index]);
    setSelectedCollectionIndex(index);
  };

  const handleMint = (event) => {
    event.preventDefault();

    // validate details
    if (isUrlValid(nftLink) === false) {
      toast.error("Please enter a valid URL");
      return;
    }

    // console.log("Minting NFT:", {
    //   name: nftName,
    //   link: nftLink,
    //   description: nftDescription,
    // });
    onUpdate({ name: nftName, link: nftLink, description: nftDescription });
    onClose();
    onMint();
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
            {tabNumb === 1 ? (
              <div className="w-[22rem] flex flex-col gap-3 py-4">
                <h1 className="flex gap-1 justify-center text-lg leading-6 font-medium text-[green]">
                  <div>Your</div>
                  <div className="text-black">NFT</div>
                </h1>
                <div className="flex flex-col gap-1">
                  <p>Name</p>
                  <input
                    className="border border-green-400 p-1 px-2 rounded-xl focus:outline-none bg-transparent"
                    placeholder="Your NFT Name"
                    required
                    maxLength="30"
                    type="text"
                    value={nftName}
                    onChange={(e) => setNftName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p>Link</p>
                  <input
                    className="border border-green-400 p-1 px-2 rounded-xl focus:outline-none bg-transparent"
                    placeholder="Your Link"
                    maxLength="255"
                    required
                    type="text"
                    value={nftLink}
                    onChange={(e) => setNftLink(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p>Description</p>
                  <textarea
                    className="border border-green-400 p-1 px-2 rounded-xl focus:outline-none overflow-y-auto resize-none w-full bg-transparent"
                    rows="4"
                    placeholder="Your NFT Description"
                    maxLength="200"
                    required
                    value={nftDescription}
                    onChange={(e) => setNftDescription(e.target.value)}
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    className="inline-flex justify-center rounded-xl border border-transparent shadow-sm px-4 py-2 bg-[green] text-sm font-medium text-white hover:bg-[#1d5a1d] focus:outline-none"
                    type="button"
                    onClick={() => setTabNumb(2)}
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <form
                className="w-[22rem] flex flex-col gap-3 py-4"
                onSubmit={handleMint}
              >
                <h1 className="relative flex items-center justify-center text-lg leading-6 font-medium text-[green]">
                  <div className="absolute left-10">
                    <button
                      onClick={() => setTabNumb(1)}
                      className="text-black"
                    >
                      &#8592;
                    </button>
                  </div>
                  <div className="flex gap-1">
                    <div>Your</div>
                    <div className="text-black">NFT Collections</div>
                  </div>
                </h1>

                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  {collectionList.map((collection, index) => {
                    console.log("::::: collecton",collection)
                    return (
                      <div
                        key={index}
                        className={`flex flex-col items-center gap-2 p-2 cursor-pointer ${
                          selectedCollectionIndex === index ? "bg-green-200" : ""
                        }`}
                        onClick={() => handleSelectedColl(index)}
                      >
                        <img
                          src={collection.image}
                          alt={collection.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="text-center text-black">
                          {collection.name.length > 4
                            ? `${collection.name.slice(0, 8)}...`
                            : collection.name}
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="flex justify-center">
                  <button
                    className="inline-flex justify-center rounded-xl border border-transparent shadow-sm px-4 py-2 bg-[green] text-sm font-medium text-white hover:bg-[#1d5a1d] focus:outline-none"
                    type="submit"
                  >
                    Mint NFT
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NftDetailsModal;
