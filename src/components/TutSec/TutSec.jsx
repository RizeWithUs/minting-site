import React from "react";

const TutSec = () => {
  return (
    <div className="text-gray-800 flex flex-col gap-6 sm:gap-12 py-10 sm:py-14 items-center">
      <h2 className="font-bold text-center text-2xl md:text-3xl">
        What is <span className="text-2k">2K</span>NFT?
      </h2>
      <div className="flex flex-col xl:flex-row gap-10 sm:gap-14 px-8 sm:px-[15%] lg:px-[8%] items-center w-full justify-center">
        <div className="flex flex-col gap-4 text-justify lg:max-w-2xl">
          <div>
            <span className="font-bold">2KNFT</span> is a revolutionary NFT
            collection, drawing inspiration from{" "}
            <a
              href="http://www.milliondollarhomepage.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-primary"
            >
              The Million Dollar Homepage
            </a>
            . Each NFT in this collection is a{" "}
            <span className="font-bold">unique creation</span>, comprising an
            image, title, description, and a link - all handpicked{" "}
            <span className="font-bold">by you</span>, the creator.
          </div>
          <div>
            Set against the backdrop of a massive{" "}
            <span className="font-bold">2KNFT canvas</span>, which includes{" "}
            <span className="font-bold">36,864 blocks of 10x10 pixels</span>{" "}
            each, you have the freedom to choose the size of your NFT, ranging
            from a single block to an expansive{" "}
            <span className="font-bold">900 blocks</span> (300x300 pixels). This
            flexibility allows for the creation of distinct,{" "}
            <span className="font-bold">pixelated artworks</span>, minted on the{" "}
            <span className="font-bold">Ethereum</span> blockchain.
          </div>
          <div>
            But <span className="font-bold">2KNFT</span> is more than just a
            collection of individual NFTs. Each piece is a crucial{" "}
            <span className="font-bold">part of a larger, unified NFT</span>{" "}
            that represents the entire collection as one cohesive, integrated
            artwork. With only{" "}
            <span className="font-bold">$10 in Ether per block</span>, excluding
            gas fees, each NFT you mint contributes to this grand design.
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:max-w-md">
          <iframe
            className="rounded-2xl w-full md:max-w-md aspect-video"
            title="How to mint on 2KNFT?"
            src="https://www.youtube.com/embed/xwBLY-0nSdE"
            allow="fullscreen"
          ></iframe>
          <div className="flex justify-center">
            <div className="bg-primary text-white text-xl font-semibold p-3 cursor-pointer hover:scale-105">
              Mint Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutSec;
