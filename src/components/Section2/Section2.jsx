import React, { useState } from "react";

const Section = () => {
  const contents = [
    {
      title: "Promote",
      text: "By minting your NFT, you're not just creating digital art; you're promoting yourself, your brand or something you love. It's a holistic approach to art and marketing, all wrapped into one seamless experience.",
      image: "https://2knft.com/assets/promote.png",
    },
    {
        title: "Promote",
        text: "By minting your NFT, you're not just creating digital art; you're promoting yourself, your brand or something you love. It's a holistic approach to art and marketing, all wrapped into one seamless experience.",
        image: "https://2knft.com/assets/promote.png",
      },
  ];

  return (
    <section id="our-team" className="py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
          What NFT to Mint?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
          {contents.map((content, index) => (
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
