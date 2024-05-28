import React, { useEffect, useState } from "react";
import NftDetailsModal from "../Modal/NftDetails";
import NotifyModal from "../Modal/NotifyModal";
import { toast } from "react-toastify";
import { useWallet } from "../../actions/cosmwasm";
import {
  COREUM_PAYMENT_COINS,
  FILE_TYPE,
  ITEM_ACTION_TYPES,
  PLATFORM_NETWORKS,
  config,
} from "../../actions/config";
import { pinJSONToNFTStorage, storeSingleNFT } from "../../actions/pinatasdk";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Draggable from "react-draggable";

const MinterCanvas = ({
  walletName,
  signer,
  currentUsr,
  collectionList = [],
  currentNetworkSymbol,
}) => {
  const [percentage, setPercentage] = useState(0.0);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [working, setWorking] = useState(false);

  const [fileCategory, setFileCategory] = useState(1);
  const [explictContent, setExplicitContent] = useState(false);
  const [collectionId, setCollectionId] = useState("");
  const [timeLength, setTimeLength] = useState(0);
  const [selected, setSelected] = useState({ name: "", _id: "", address: "" });
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMusicFileName, setSelectedMusicFileName] = useState("");
  const [selectedMusicFile, setSelectedMusicFile] = useState(null);
  const [colls, setColls] = useState();

  // const navigate = useNavigate();

  const navigate = (link) => {
    if (window !== undefined) {
      window.location.href = link;
    }
  };

  const [metaData, setMetaData] = useState([]);
  const [metaList, setMetaList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [coreumPaymentCoin, setCoreumPaymentCoin] = useState(
    COREUM_PAYMENT_COINS.CORE
  );

  const {
    mintNFT,
    collectionConfig,
    isSupportedNetwork,
    isEmpty,
    isSupportedEVMNetwork,
    balances,
  } = useWallet();

  useEffect(() => {
    if (walletName && walletName?.toLowerCase().trim() !== "connect wallet") {
      toast.success(`Connected to ${walletName}`);
    }
  }, [walletName]);

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
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const [notifyMsg, setNotifyMsg] = useState("Your upload loading...");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleMintClick = () => {
    if (uploadedImage) {
      setIsModalOpen(true);
      setPercentage(80);
    }
  };

  const handleOpenNotify = () => {
    setIsNotifyOpen(true);
  };

  const handleCloseNotify = () => {
    setIsNotifyOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMint = async () => {
    console.log({
      signer: signer,
      currentUsr: currentUsr,
      currentNetworkSymbol: currentNetworkSymbol,
    });
    // handle all web3 implementations here
    if (!signer || !currentUsr || !currentNetworkSymbol) {
      return toast.error("Please connect your wallet first");
    }

    if (collectionList && collectionList.length < 1) {
      return toast.error("You have no collection");
    }

    console.log("collectionList", collectionList);
    createItem();

    setIsNotifyOpen(true);
  };

  const handleUpdateNftDetails = ({ name, link, description }) => {
    setNftName(name);
    setNftLink(link);
    setNftDescription(description);
  };

  const btnFunc = () => {
    console.log("lsdjflsdfjldfjd");
  };

  // useEffect(() => {
  //   if (currentUsr?._id) {
  //     axios
  //       .post(
  //         `${config.API_URL}api/collection/getUserCollections`,
  //         {
  //           limit: 90,
  //           userId: currentUsr?._id,
  //           connectedNetworkSymbol: currentNetworkSymbol,
  //         },
  //         {
  //           headers: {
  //             "x-access-token": localStorage.getItem("jwtToken"),
  //           },
  //         }
  //       )
  //       .then((result) => {
  //         dispatch(changeCollectionList(result.data.data));
  //       })
  //       .catch((err) => {
  //         console.log("error getting collections : ", err);
  //       });
  //   }
  // }, [currentUsr]);

  // useEffect(() => {
  //   if (tradingResult) {
  //     switch (tradingResult.function) {
  //       default:
  //         break;
  //       case "singleMintOnSale":
  //         dispatch(
  //           changeTradingResult({ function: "", success: false, message: "" })
  //         );
  //         if (tradingResult.success === false)
  //           toast.error(tradingResult.message);
  //         break;
  //       case "batchMintOnSale":
  //         dispatch(
  //           changeTradingResult({ function: "", success: false, message: "" })
  //         );
  //         if (tradingResult.success === false)
  //           toast.error(tradingResult.message);
  //         break;
  //     }
  //   }
  // }, [tradingResult]);

  useEffect(() => {
    if (collectionList && collectionList.length > 0) {
      let tempOptions = [];
      collectionList.map((coll) => {
        if (
          currentNetworkSymbol === PLATFORM_NETWORKS.COREUM &&
          coll.collectionNumber &&
          coll.collectionNumber >= 0
        ) {
          tempOptions.push({
            _id: coll?._id || "",
            name: coll?.name || "",
            logoURL: coll?.logoURL || "",
            address: coll?.address || "",
            cw721address: coll?.cw721address || "",
            collectionNumber: coll?.collectionNumber || "",
          });
        } else {
          tempOptions.push({
            _id: coll?._id || "",
            name: coll?.name || "",
            logoURL: coll?.logoURL || "",
            address: coll?.address || "",
            cw721address: coll?.cw721address || "",
            collectionNumber: coll?.collectionNumber || "",
          });
        }
      });
      console.log("::: tempOptions", tempOptions);
      setColls(tempOptions);
    }
  }, [collectionList]);

  const handleCheckFieldChange = (event, index) => {
    const metaTemp = metaList;
    metaTemp[index].disabled = !event.target.checked;
    setMetaList(metaTemp);
    setRefresh(!refresh);
  };

  const handleChangeText = (e, index) => {
    const metaTemp = metaList;
    metaTemp[index].value = e.target.value;
    setMetaList(metaTemp);
    setRefresh(!refresh);
  };

  const changeFile = async (event) => {
    var file = event.target.files[0];
    if (file === null) return;
    if (file.size > 100 * 1024 * 1024) {
      toast.warn("Image file size should be less than 100MB");
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        setPercentage(30);
      };
      reader.readAsDataURL(file);
    }
    setSelectedFile(file);
    setSelectedFileName(file.name);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {};
    reader.onerror = function (error) {
      console.log("banner file choosing error : ", error);
    };
  };

  const checkNativeCurrencyAndTokenBalances = async (tokenAmountShouldPay) => {
    if (
      balances[config.COIN_MINIMAL_DENOM] <= 0 ||
      (tokenAmountShouldPay > 0 && balances.cw20 <= tokenAmountShouldPay)
    ) {
      toast.warn("Insufficient CORE or RIZE");
      return false;
    }
    return true;
  };

  // createItem
  const createItem = async () => {
    if (isSupportedNetwork(currentNetworkSymbol) === false) {
      toast.warn(
        "Please connect your wallet to a network we support and try again."
      );
      return;
    }
    if (isEmpty(currentUsr)) {
      toast.warn("Please log in first.");
      return;
    }

    // if (isEmpty(selected) || selected.name === "") {
    //   toast.warn("Please select a collection and try again.");
    //   return;
    // }

    setWorking(true);

    try {
      var uploadedBannerPath = "";
      let consideringFile =
        // fileCategory >= FILE_TYPE.AUDIO ? selectedMusicFile : selectedFile;
        selectedFile;
      let fileHash = await storeSingleNFT(consideringFile);

      console.log("fileHash", fileHash);

      uploadedBannerPath = fileHash;

      let metadataTemp = {
        name: nftName,
        description: nftDescription,
        previewImage: uploadedBannerPath,
        image: fileHash,
        attributes: [...metaList],
      };
      console.log("::::::::metadataTemp", metadataTemp);

      let uriHash = await pinJSONToNFTStorage(metadataTemp);

      let paths = [];
      let path = fileHash.replace("ipfs://", "");
      let previewPath = uploadedBannerPath.replace("ipfs://", "");

      const params = {
        itemName: nftName,
        itemMusicURL: path,
        itemLogoURL: fileCategory !== FILE_TYPE.IMAGE ? previewPath : path,
        itemDescription: nftDescription,
        collectionId: selected?._id || "",
        creator: currentUsr?._id || "",
        owner: currentUsr?._id || "",
        fileType: fileCategory,
        isSale: 0,
        price: 0,
        auctionPeriod: 0,
        stockAmount: 0,
        metaData: metaList,
        mutiPaths: paths,
        timeLength: timeLength,
        stockGroupId: new Date().getTime(),
        chainId: currentNetworkSymbol || 0,
        metadataURI: uriHash,
        explicitContent: explictContent,
        networkSymbol: currentNetworkSymbol || 0,
        coreumPaymentUnit: coreumPaymentCoin,
      };
      console.log(":::::;params::::", params);
      await newSaveItem(params);
    } catch (error) {
      setWorking(false);
    }
  };

  const saveItemActivity = (params) => {
    axios
      .post(`${config.API_URL}api/itemActivity/create`, {
        ...params,
      })
      .then(() => {})
      .catch(() => {});
  };

  const newSaveItem = async (params) => {
    setWorking(true);
    if (isSupportedEVMNetwork(currentNetworkSymbol) === true) {
      axios({
        method: "post",
        url: `${config.API_URL}api/item/create`,
        data: params,
      })
        .then(async function (response) {
          if (response.status === 200) {
            setWorking(false);

            toast.success(
              <div>
                Successfully created an item. You can see items at{" "}
                <span
                  style={{ color: "#00f" }}
                  onClick={() => navigate(`/collectionItems/${collectionId}`)}
                >
                  here
                </span>
              </div>
            );
            navigate(`/collectionItems/${collectionId}`);
          } else {
            toast.error("Failed!");
            setWorking(false);
          }
        })
        .catch(() => {
          toast.error("Failed!");
          setWorking(false);
        });
    } else if (currentNetworkSymbol === PLATFORM_NETWORKS.COREUM) {
      try {
        console.log(":::: selected.address....", selected.address);
        let colllectionInfo = await collectionConfig(selected.address);
        const unusedTokenId = colllectionInfo.unused_token_id;
        let balanceCheck = await checkNativeCurrencyAndTokenBalances(0);
        if (balanceCheck === false) {
          setWorking(false);
          toast.error("Insufficient balance!");
          return;
        }
        console.log("::::starting a single mint function now!");
        const txHash = await mintNFT(
          currentUsr.address,
          selected.address,
          params.itemName,
          nftDescription,
          metaList,
          params.itemMusicURL,
          params.itemLogoURL,
          "ipfs://" + params.metadataURI
        );
        if (txHash !== -1) {
          axios({
            method: "post",
            url: `${config.API_URL}api/item/create`,
            data: params,
          }).then(async function (response) {
            if (response.data.code === 0) {
              const newItemId = response.data.data._id;
              await axios
                .post(`${config.API_URL}api/item/updateTokenId`, {
                  itemId: newItemId,
                  tokenId: unusedTokenId,
                })
                .then((response) => {
                  if (response.data.code === 0) {
                    setWorking(false);

                    toast.success(
                      <div>
                        Successfully created an item. You can see items at{" "}
                        <span
                          style={{ color: "#00f" }}
                          onClick={() =>
                            navigate(`/collectionItems/${params.collectionId}`)
                          }
                        >
                          here
                        </span>
                      </div>
                    );

                    let paramsAct = {
                      item: newItemId,
                      origin: currentUsr?._id,
                      transactionHash: txHash,
                      actionType: ITEM_ACTION_TYPES.MINTED,
                    };
                    saveItemActivity(paramsAct);
                    navigate(`/collectionItems/${collectionId}`);
                  } else {
                    toast.error("Update Token Item Sever Error!");
                    setWorking(false);
                    axios
                      .post(`${config.API_URL}api/item/deleteManyByIds`, {
                        idArray: [newItemId],
                        collId: params.collectionId || "",
                      })
                      .then(() => {})
                      .catch((error) => {
                        console.log(error);
                      });
                  }
                });
            } else {
              toast.error("Create Item Sever Error!");
              setWorking(false);
            }
          });
        }
        setWorking(false);
      } catch (error) {
        console.log(error);
        toast.error("Try Failed!");
        setWorking(false);
      }
    }
  };

  useEffect(() => {
    setCollectionId(selected._id || "");
  }, [selected]);

  const handleSelectColl = (data) => {
    setSelected(data);
  };

  return (
    <>
      <NftDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onMint={handleMint}
        initialName={nftName}
        initialLink={nftLink}
        initialDescription={nftDescription}
        onUpdate={handleUpdateNftDetails}
        collectionList={collectionList}
        onUpdateSelected={handleSelectColl}
      />
      <NotifyModal
        isOpen={isNotifyOpen}
        onClose={handleCloseNotify}
        notifyMsg={notifyMsg}
        // btnFunc={btnFunc}
        // hasBtn={true}
      />

      <div className="w-full text-[green] pt-2 mt-5 font-bold text-center animate-bounce z-50 md:text-2xl">
        <p>Click in the white canvas below to MINT 👇</p>
      </div>

      {/* <div className="w-full flex flex-col items-center gap-[1.5vw] md:gap-[2vh] py-[2.5vw] md:py-[3vh]">
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
                              // onChange={handleFileChange}
                              onChange={changeFile}
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
      </div> */}

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
                  <Draggable>
                    <div className="rounded-md shadow-xl absolute w-[20rem] md:w-[25rem] h-[10rem] md:h-[12rem] p-4 text-white bg-green-500 flex flex-col justify-between items-center text-xs md:text-sm">
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
                          <div className="w-[12rem] h-[5.5rem] md:w-[15rem] md:h-[6.5rem] bg-white rounded-md">
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
                                // onChange={handleFileChange}
                                onChange={changeFile}
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
                  </Draggable>
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
