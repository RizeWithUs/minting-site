import React, { useState } from "react";

const Section = () => {
  const teamMembers = [
    {
      title: "Promote",
      text: "By minting your NFT, you're not just creating digital art; you're promoting yourself, your brand or something you love. It's a holistic approach to art and marketing, all wrapped into one seamless experience.",
      image: "https://2knft.com/assets/promote.png",
    },
    {
      title: "Unique Customization",
      text: "Stand out in a sea of pre-designed NFT collections. At 2KNFT, you have the control to decide the appearance and content of your NFT. Be among the first to mint and choose the prime position for your NFT.",
      image: "https://2knft.com/assets/unique-customization.png",
    },
    {
      title: "20% Goes To Charity",
      text: "In our commitment to making a difference, 20% of the funds raised will be donated to Charity Water. Supporting their mission to bring clean and safe drinking water to people in need.",
      image: "https://2knft.com/assets/charity-donation.png",
    },
    {
      title: "Visibility and Discovery",
      text: "Every visitor to 2knft.com encounters your NFT, leading to greater visibility and engagement. Here, your NFT is not just a digital asset but a story waiting to be told.",
      image: "https://2knft.com/assets/visibility-and-discovery.png",
    },
    {
      title: "Join a Revolution",
      text: "Despite popular opinion suggesting the end of NFTs, we're convinced they're here to stay. Join us in this collection to prove together that the NFT era is far from over.",
      image: "https://2knft.com/assets/nft-revolution.png",
    },
    {
      title: "A Legacy on the Blockchain",
      text: "What you create is eternal. Your NFT will remain on the blockchain indefinitely, ensuring lasting visibility and impact for individuals, brands, or causes.",
      image: "https://2knft.com/assets/a-legacy-on-the-blockchain.png",
    },
  ];

  return (
    <section id="our-team" className="py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
          Why Mint with 2KNFT?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((content, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-3 my-1 text-center border border-red-${
                index + 1
              }00`}
              class="mx-3 mt-6 flex flex-col rounded-lg bg-[#0080000a] text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-[black] sm:shrink-0 sm:grow sm:basis-0"
            >
              <a href="#!">
                <img
                  class="rounded-t-lg"
                  src={content.image}
                  alt="Hollywood Sign on The Hill"
                />
              </a>
              <div class="p-6">
                <h5 class="mb-2 text-xl font-medium leading-tight">
                  {content.title}
                </h5>
                <p class="mb-4 text-base">{content.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
