import React from "react";

const Section = () => {
  const contents = [
    {
      title: "Personalized Creations",
      text: "Your imagination is the only limit. At 2KNFT, we celebrate the diversity of creativity. Whether it's a piece of digital art, a memorable photo, or a design that holds special meaning, your NFT is a canvas for self-expression. Mint something that tells your story, showcases your passion, or stands for a cause you believe in. Remember, every NFT is a part of the grander mosaic, a collective artwork that echoes with individual voices.",
      image: "https://2knft.com/assets/pixelated-dragon.png",
    },
    {
      title: "Influencer Signature NFTs",
      text: "If you're an influencer or creator, this is your stage. Mint your profile picture, your brand logo, or any image that resonates with your unique identity. Each NFT can include a link to your channel or website, driving engagement and connecting with fans in an entirely new dimension. Your NFT becomes more than an image; it's a gateway to your world, offering fans a digital piece of your journey. Be seen, be remembered, be influential.",
      image: "https://2knft.com/assets/influencer-signature-nft.png",
    },
    {
      title: "Boost Brand Awareness",
      text: "Are you looking to boost your company or brand presence in the digital world? Whether you're in the crypto space or beyond, minting an NFT with your company's logo or brand symbol is a powerful move. This is not just a digital asset; it's a beacon of your identity. Seen by every visitor on 2knft.com, your corporate NFT can elevate brand recognition and create a lasting digital footprint. Imagine your logo, transformed into a unique, pixelated artwork, living eternally on the Ethereum blockchain. It's not just visibility; it's a statement.",
      image: "https://2knft.com/assets/deer-logo-nft.png",
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
              className={`bg-white rounded-lg p-1 my-1 text-center flex flex-col sm:flex-row ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <a href="#!">
                <img
                  alt="NFT"
                  loading="lazy"
                  width="250"
                  height="250"
                  decoding="async"
                  data-nimg="1"
                  className="border-4 border-primary md:rotate-[5deg] shadow-xl"
                  style={{ color: "transparent" }}
                  src={content.image}
                />
              </a>
              <div className="p-6 flex flex-col text-left w-full">
                <h5 className="mb-2 text-xl font-medium leading-tight text-[green]">
                  {content.title}
                </h5>
                <p className="mb-4 text-justify">{content.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .sm\\:flex-row {
            flex-direction: column !important;
          }
        }
        @media (min-width: 1024px) {
          .lg\\:flex-row-reverse {
            flex-direction: row-reverse !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Section;
