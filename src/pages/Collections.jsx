import "../../src/App.css";
// import "./App.css";
import "./Collection.css";
import Header2 from "../components/Header2/Header2";
import Nfts from "../components/Nfts/Nfts";

import React from "react";

const Collections = () => {
  return (
    <div id="__next">
      <Header2 />
      <main style={{ marginTop: 50 }}>
        <div className="page-home">
          <div className="container-fluid">
            <Nfts />
            {/* ////// spacer here */}
            <section className="section-hot-collection common-spacing">
              <div className="section-title">
                <h3 className="heading-3"> XRPL NFT Collections</h3>
                <div className="filters">
                  <div className="react-dropdown ">
                    <div name="trending_filter" className="dropdown">
                      <button
                        type="button"
                        aria-expanded="false"
                        className="dropdown-toggle btn btn-primary"
                      >
                        top
                      </button>
                    </div>
                  </div>
                  <div className="react-dropdown ">
                    <div name="period_filter" className="dropdown">
                      <button
                        type="button"
                        aria-expanded="false"
                        className="dropdown-toggle btn btn-primary"
                      >
                        today
                      </button>
                    </div>
                  </div>
                </div>
                <a
                  className="blue-link"
                  aria-label="View all >"
                  href="/explore/"
                >
                  View all &gt;
                </a>
              </div>
              <div className="section-content">
                <div className="collections-wrapper">
                  <div className="collections-wrapper__header">
                    <div className="collection">Collection</div>
                    <div className="floor-price">Floor</div>
                    <div className="volume">Volume</div>
                  </div>
                  <div className="collections-wrapper__body">
                    <div className="small-thumbnail">
                      <a href="/collection/bmeta-yacht-guild-the-x-collection/">
                        <div className="small-thumbnail__index">1</div>
                        <div className="small-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt=""
                              width="72"
                              height="72"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1715187795492highresscreenshot00049.png&amp;width=250&amp;height=250"
                              loading="lazy"
                            />
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__desc">
                          <h4
                            className="heading-4"
                            style={{ minWidth: "50px" }}
                          >
                            {" "}
                            BMETA YACHT GUILD "The X Collection"
                          </h4>
                        </div>
                        <div
                          className="small-thumbnail__floor"
                          style={{ minWidth: "60px" }}
                        >
                          <div className="small-thumbnail__floor-price">
                            <div className="price price-element bold">
                              <h4
                                className="heading-4"
                                style={{ minWidth: "40px" }}
                              >
                                <i className="price-currency-icon"></i> 140
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__volume">
                          <div className="price price-element heavy">
                            <h4
                              className="heading-4"
                              style={{ minWidth: "40px" }}
                            >
                              <i className="price-currency-icon"></i> 1750
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="small-thumbnail">
                      <a href="/collection/top-g-apes/">
                        <div className="small-thumbnail__index">2</div>
                        <div className="small-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt=""
                              width="72"
                              height="72"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=ipfs%3A%2F%2FQmfNuEsWwupSEcE4tvYNpn2Uu2Rj2Mf3UUTR2biXMzg7Ag&amp;width=250&amp;height=250"
                              loading="lazy"
                            />
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__desc">
                          <h4
                            className="heading-4"
                            style={{ minWidth: "50px" }}
                          >
                            {" "}
                            Top G Apes
                          </h4>
                        </div>
                        <div
                          className="small-thumbnail__floor"
                          style={{ minWidth: "60px" }}
                        >
                          <div className="small-thumbnail__floor-price">
                            <div className="price price-element bold">
                              <h4
                                className="heading-4"
                                style={{ minWidth: "40px" }}
                              >
                                <i className="price-currency-icon"></i>25
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__volume">
                          <div className="price price-element heavy">
                            <h4
                              className="heading-4"
                              style={{ minWidth: "40px" }}
                            >
                              <i className="price-currency-icon"></i> 175
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="small-thumbnail">
                      <a href="/collection/rMUwEBqqYWFWrgHktpkGEAERnJwLx9AFht-420/">
                        <div className="small-thumbnail__index">3</div>
                        <div className="small-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt=""
                              width="72"
                              height="72"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1717601413083anopepe1.png&amp;width=250&amp;height=250"
                              loading="lazy"
                            />
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__desc">
                          <h4
                            className="heading-4"
                            style={{ minWidth: "50px" }}
                          >
                            {" "}
                            Anodos Intern Pepe
                          </h4>
                        </div>
                        <div
                          className="small-thumbnail__floor"
                          style={{ minWidth: "60px" }}
                        >
                          <div className="small-thumbnail__floor-price">
                            <div className="price price-element bold">
                              <h4
                                className="heading-4"
                                style={{ minWidth: "40px" }}
                              >
                                <i className="price-currency-icon"></i> 130
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__volume">
                          <div className="price price-element heavy">
                            <h4
                              className="heading-4"
                              style={{ minWidth: "40px" }}
                            >
                              <i className="price-currency-icon"></i> 117
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="small-thumbnail">
                      <a href="/collection/unixpunks/">
                        <div className="small-thumbnail__index">4</div>
                        <div className="small-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt=""
                              width="72"
                              height="72"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1671488575293pfp.gif&amp;width=250&amp;height=250"
                              loading="lazy"
                            />
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__desc">
                          <h4
                            className="heading-4"
                            style={{ minWidth: "50px" }}
                          >
                            {" "}
                            UNIXPUNKS
                          </h4>
                        </div>
                        <div
                          className="small-thumbnail__floor"
                          style={{ minWidth: "60px" }}
                        >
                          <div className="small-thumbnail__floor-price">
                            <div className="price price-element bold">
                              <h4
                                className="heading-4"
                                style={{ minWidth: "40px" }}
                              >
                                <i className="price-currency-icon"></i> 73
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__volume">
                          <div className="price price-element heavy">
                            <h4
                              className="heading-4"
                              style={{ minWidth: "40px" }}
                            >
                              <i className="price-currency-icon"></i> 89
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="small-thumbnail">
                      <a href="/collection/the-bearable-bulls/">
                        <div className="small-thumbnail__index">5</div>
                        <div className="small-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt=""
                              width="72"
                              height="72"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1674519898957bearable_bull_11_512.png&amp;width=250&amp;height=250"
                              loading="lazy"
                            />
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-purple.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__desc">
                          <h4
                            className="heading-4"
                            style={{ minWidth: "50px" }}
                          >
                            {" "}
                            The Bearable Bulls
                          </h4>
                        </div>
                        <div
                          className="small-thumbnail__floor"
                          style={{ minWidth: "60px" }}
                        >
                          <div className="small-thumbnail__floor-price">
                            <div className="price price-element bold">
                              <h4
                                className="heading-4"
                                style={{ minWidth: "40px" }}
                              >
                                <i className="price-currency-icon"></i> 17
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__volume">
                          <div className="price price-element heavy">
                            <h4
                              className="heading-4"
                              style={{ minWidth: "40px" }}
                            >
                              <i className="price-currency-icon"></i> 40
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="collections-wrapper">
                  <div className="collections-wrapper__header">
                    <div className="collection">Collection</div>
                    <div className="floor-price">Floor</div>
                    <div className="volume">Volume</div>
                  </div>
                  <div className="collections-wrapper__body">
                    <div className="small-thumbnail">
                      <a href="/collection/doodlepunkchicx/">
                        <div className="small-thumbnail__index">6</div>
                        <div className="small-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt=""
                              width="72"
                              height="72"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1687597477410doodlepunkchicx-profile.png&amp;width=250&amp;height=250"
                              loading="lazy"
                            />
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__desc">
                          <h4
                            className="heading-4"
                            style={{ minWidth: "50px" }}
                          >
                            {" "}
                            DoodlePunkChicX
                          </h4>
                        </div>
                        <div
                          className="small-thumbnail__floor"
                          style={{ minWidth: "60px" }}
                        >
                          <div className="small-thumbnail__floor-price">
                            <div className="price price-element bold">
                              <h4
                                className="heading-4"
                                style={{ minWidth: "40px" }}
                              >
                                <i className="price-currency-icon"></i> 11
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__volume">
                          <div className="price price-element heavy">
                            <h4
                              className="heading-4"
                              style={{ minWidth: "40px" }}
                            >
                              <i className="price-currency-icon"></i> 15
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="small-thumbnail">
                      <a href="/collection/doodlepunkx/">
                        <div className="small-thumbnail__index">7</div>
                        <div className="small-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt=""
                              width="72"
                              height="72"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F16818097763450.png&amp;width=250&amp;height=250"
                              loading="lazy"
                            />
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__desc">
                          <h4
                            className="heading-4"
                            style={{ minWidth: "50px" }}
                          >
                            {" "}
                            DoodlePunkX
                          </h4>
                        </div>
                        <div
                          className="small-thumbnail__floor"
                          style={{ minWidth: "60px" }}
                        >
                          <div className="small-thumbnail__floor-price">
                            <div className="price price-element bold">
                              <h4
                                className="heading-4"
                                style={{ minWidth: "40px" }}
                              >
                                <i className="price-currency-icon"></i>11
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__volume">
                          <div className="price price-element heavy">
                            <h4
                              className="heading-4"
                              style={{ minWidth: "40px" }}
                            >
                              <i className="price-currency-icon"></i> 11
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="small-thumbnail">
                      <a href="/collection/bigb/">
                        <div className="small-thumbnail__index">8</div>
                        <div className="small-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt=""
                              width="72"
                              height="72"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1705331638850untitled-4-01.png&amp;width=250&amp;height=250"
                              loading="lazy"
                            />
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__desc">
                          <h4
                            className="heading-4"
                            style={{ minWidth: "50px" }}
                          >
                            {" "}
                            Big.B
                          </h4>
                        </div>
                        <div
                          className="small-thumbnail__floor"
                          style={{ minWidth: "60px" }}
                        >
                          <div className="small-thumbnail__floor-price">
                            <div className="price price-element bold">
                              <h4
                                className="heading-4"
                                style={{ minWidth: "40px" }}
                              >
                                <i className="price-currency-icon"></i> 4
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__volume">
                          <div className="price price-element heavy">
                            <h4
                              className="heading-4"
                              style={{ minWidth: "40px" }}
                            >
                              <i className="price-currency-icon"></i> 5
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="small-thumbnail">
                      <a href="/collection/transient-life-murals/">
                        <div className="small-thumbnail__index">9</div>
                        <div className="small-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt=""
                              width="72"
                              height="72"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1717554598424aces7vsk_x_chaos_art_logo_11_b64ab8c7-6caf-4658-8787-075acd909dcb.png&amp;width=250&amp;height=250"
                              loading="lazy"
                            />
                            <div className="collection-checkmark"></div>
                          </div>
                        </div>
                        <div className="small-thumbnail__desc">
                          <h4
                            className="heading-4"
                            style={{ minWidth: "50px" }}
                          >
                            {" "}
                            TRANSIENT LIFE MURALS
                          </h4>
                        </div>
                        <div
                          className="small-thumbnail__floor"
                          style={{ minWidth: "60px" }}
                        >
                          <div className="small-thumbnail__floor-price">
                            <div className="price price-element bold">
                              <h4
                                className="heading-4"
                                style={{ minWidth: "40px" }}
                              >
                                <i className="price-currency-icon"></i>20
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__volume">
                          <div className="price price-element heavy">
                            <h4
                              className="heading-4"
                              style={{ minWidth: "40px" }}
                            >
                              <i className="price-currency-icon"></i> 1
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="small-thumbnail">
                      <a href="/collection/wild-stag-treehouse/">
                        <div className="small-thumbnail__index">10</div>
                        <div className="small-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt=""
                              width="72"
                              height="72"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1663063283018onxrp-sample-artwork.gif&amp;width=250&amp;height=250"
                              loading="lazy"
                            />
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-purple.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__desc">
                          <h4
                            className="heading-4"
                            style={{ minWidth: "50px" }}
                          >
                            {" "}
                            Wild Stag Treehouse
                          </h4>
                        </div>
                        <div
                          className="small-thumbnail__floor"
                          style={{ minWidth: "60px" }}
                        >
                          <div className="small-thumbnail__floor-price">
                            <div className="price price-element bold">
                              <h4
                                className="heading-4"
                                style={{ minWidth: "40px" }}
                              >
                                <i className="price-currency-icon"></i> 24
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__volume">
                          <div className="price price-element heavy">
                            <h4
                              className="heading-4"
                              style={{ minWidth: "40px" }}
                            >
                              <i className="price-currency-icon"></i> 0
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="collections-wrapper">
                  <div className="collections-wrapper__header">
                    <div className="collection">Collection</div>
                    <div className="floor-price">Floor</div>
                    <div className="volume">Volume</div>
                  </div>
                  <div className="collections-wrapper__body">
                    <div className="small-thumbnail">
                      <a href="/collection/gotreefs-gen-1/">
                        <div className="small-thumbnail__index">11</div>
                        <div className="small-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt=""
                              width="72"
                              height="72"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1691546660009gotreefslogo-(white-text-black-bg).png&amp;width=250&amp;height=250"
                              loading="lazy"
                            />
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-purple.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__desc">
                          <h4
                            className="heading-4"
                            style={{ minWidth: "50px" }}
                          >
                            {" "}
                            {"GOTReefs"} - GEN 1
                          </h4>
                        </div>
                        <div
                          className="small-thumbnail__floor"
                          style={{ minWidth: "60px" }}
                        >
                          <div className="small-thumbnail__floor-price">
                            <div className="price price-element bold">
                              <h4
                                className="heading-4"
                                style={{ minWidth: "40px" }}
                              >
                                <i className="price-currency-icon"></i> 50
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__volume">
                          <div className="price price-element heavy">
                            <h4
                              className="heading-4"
                              style={{ minWidth: "40px" }}
                            >
                              <i className="price-currency-icon"></i> 0
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="small-thumbnail">
                      <a href="/collection/x-baes/">
                        <div className="small-thumbnail__index">12</div>
                        <div className="small-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt=""
                              width="72"
                              height="72"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1666644518958be21e684-e8d9-43cc-a84b-abf0e3340162.jpg&amp;width=250&amp;height=250"
                              loading="lazy"
                            />
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-purple.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__desc">
                          <h4
                            className="heading-4"
                            style={{ minWidth: "50px" }}
                          >
                            {" "}
                            X Baes
                          </h4>
                        </div>
                        <div
                          className="small-thumbnail__floor"
                          style={{ minWidth: "60px" }}
                        >
                          <div className="small-thumbnail__floor-price">
                            <div className="price price-element bold">
                              <h4
                                className="heading-4"
                                style={{ minWidth: "40px" }}
                              >
                                <i className="price-currency-icon"></i>16
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__volume">
                          <div className="price price-element heavy">
                            <h4
                              className="heading-4"
                              style={{ minWidth: "40px" }}
                            >
                              <i className="price-currency-icon"></i> 0
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="small-thumbnail">
                      <a href="/collection/xrpshibaclub/">
                        <div className="small-thumbnail__index">13</div>
                        <div className="small-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt=""
                              width="72"
                              height="72"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1666465405443phoyooo.jpg&amp;width=250&amp;height=250"
                              loading="lazy"
                            />
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-purple.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__desc">
                          <h4
                            className="heading-4"
                            style={{ minWidth: "50px" }}
                          >
                            {" "}
                            XRPSHIBACLUB
                          </h4>
                        </div>
                        <div
                          className="small-thumbnail__floor"
                          style={{ minWidth: "60px" }}
                        >
                          <div className="small-thumbnail__floor-price">
                            <div className="price price-element bold">
                              <h4
                                className="heading-4"
                                style={{ minWidth: "40px" }}
                              >
                                <i className="price-currency-icon"></i> 75
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__volume">
                          <div className="price price-element heavy">
                            <h4
                              className="heading-4"
                              style={{ minWidth: "40px" }}
                            >
                              <i className="price-currency-icon"></i> 0
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="small-thumbnail">
                      <a href="/collection/versex/">
                        <div className="small-thumbnail__index">14</div>
                        <div className="small-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt=""
                              width="72"
                              height="72"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1666790543303untitled-1.png&amp;width=250&amp;height=250"
                              loading="lazy"
                            />
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-purple.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__desc">
                          <h4
                            className="heading-4"
                            style={{ minWidth: "50px" }}
                          >
                            {" "}
                            VerseX
                          </h4>
                        </div>
                        <div
                          className="small-thumbnail__floor"
                          style={{ minWidth: "60px" }}
                        >
                          <div className="small-thumbnail__floor-price">
                            <div className="price price-element bold">
                              <h4
                                className="heading-4"
                                style={{ minWidth: "40px" }}
                              >
                                <i className="price-currency-icon"></i> 198
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__volume">
                          <div className="price price-element heavy">
                            <h4
                              className="heading-4"
                              style={{ minWidth: "40px" }}
                            >
                              <i className="price-currency-icon"></i> 0
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="small-thumbnail">
                      <a href="/collection/monkee-monkee/">
                        <div className="small-thumbnail__index">15</div>
                        <div className="small-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt=""
                              width="72"
                              height="72"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1667136454191monkee-main.png&amp;width=250&amp;height=250"
                              loading="lazy"
                            />
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-purple.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__desc">
                          <h4
                            className="heading-4"
                            style={{ minWidth: "50px" }}
                          >
                            {" "}
                            MONKEE MONKEE
                          </h4>
                        </div>
                        <div
                          className="small-thumbnail__floor"
                          style={{ minWidth: "60px" }}
                        >
                          <div className="small-thumbnail__floor-price">
                            <div className="price price-element bold">
                              <h4
                                className="heading-4"
                                style={{ minWidth: "40px" }}
                              >
                                <i className="price-currency-icon"></i>20
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="small-thumbnail__volume">
                          <div className="price price-element heavy">
                            <h4
                              className="heading-4"
                              style={{ minWidth: "40px" }}
                            >
                              <i className="price-currency-icon"></i> 0
                            </h4>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section-active-nft-launches common-spacing position-relative">
              <div className="section-title">
                <h3 className="heading-3" style={{ textTransform: "none" }}>
                  {" "}
                  Active XRPL NFT Launches
                </h3>
                <a
                  className="blue-link"
                  aria-label="View all >"
                  href="/launchpad/"
                >
                  {" "}
                  View all &gt;
                </a>
              </div>
              <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div
                  className="swiper-wrapper"
                  style={{ transform: "translate3d(0px, 0px, 0px)" }}
                >
                  <div
                    className="swiper-slide swiper-slide-active"
                    // style={{ width: "246.25px", marginRight: "15px" }}
                    style={{ width: "350px", marginRight: "15px" }}
                  >
                    <div className="collectionThumbnail-thumbnail thumbnail--active-nft-launches">
                      <a href="/launchpad/details/versex-bidds-go-kart/"></a>
                      <div className="collectionThumbnail-thumbnail__image">
                        <div className="thumbnail-wrapper">
                          <img
                            alt=""
                            loading="lazy"
                            width="400"
                            height="200"
                            decoding="async"
                            data-nimg="1"
                            src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F17183739129721.png&amp;width=800&amp;height=400"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="collectionThumbnail-thumbnail__footer">
                        <div className="collectionThumbnail-thumbnail__footer-top">
                          <div className="title">
                            <h3 className="heading-3">
                              {" "}
                              VerseX - Bidds Go-kart...
                            </h3>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          <div
                            className="stats"
                            style={{
                              background: "transparent",
                              padding: "10px",
                            }}
                          >
                            <div className="price">
                              SUPPLY
                              <div className="price">
                                <h4 className="heading-4"> 20</h4>
                              </div>
                            </div>
                            <div className="price">
                              PRICE
                              <div
                                className="price"
                                style={{ display: "inline-block" }}
                              >
                                <div
                                  className="price price-element"
                                  style={{ display: "inline-block" }}
                                >
                                  <h4
                                    className="heading-4"
                                    style={{ display: "inline-block" }}
                                  >
                                    <i className="price-currency-icon"></i> 250
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-next"
                    style={{ width: "350px", marginRight: "15px" }}
                  >
                    <div className="collectionThumbnail-thumbnail thumbnail--active-nft-launches">
                      <a href="/launchpad/details/bmeta-yacht-guild-the-x-collection/"></a>
                      <div className="collectionThumbnail-thumbnail__image">
                        <div className="thumbnail-wrapper">
                          <img
                            alt=""
                            loading="lazy"
                            width="400"
                            height="200"
                            decoding="async"
                            data-nimg="1"
                            src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1715000992584the-x-collection-header-1400x200.jpg&amp;width=800&amp;height=400"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="collectionThumbnail-thumbnail__footer">
                        <div className="collectionThumbnail-thumbnail__footer-top">
                          <div className="title">
                            <h3 className="heading-3">
                              {" "}
                              BMETA YACHT GUILD "The...
                            </h3>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          <div
                            className="stats"
                            style={{
                              background: "transparent",
                              padding: "10px",
                            }}
                          >
                            <div className="price">
                              SUPPLY
                              <div className="price">
                                <h4 className="heading-4"> 999</h4>
                              </div>
                            </div>
                            <div className="price">
                              PRICE
                              <div
                                className="price"
                                style={{ display: "inline-block" }}
                              >
                                <div
                                  className="price price-element"
                                  style={{ display: "inline-block" }}
                                >
                                  <h4
                                    className="heading-4"
                                    style={{ display: "inline-block" }}
                                  >
                                    <i className="price-currency-icon"></i> 200
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    // style={{ width: "246.25px", marginRight: "15px" }}
                    style={{ width: "350px", marginRight: "15px" }}
                  >
                    <div className="collectionThumbnail-thumbnail thumbnail--active-nft-launches">
                      <a href="/launchpad/details/pixel-army-soldiers/"></a>
                      <div className="collectionThumbnail-thumbnail__image">
                        <div className="thumbnail-wrapper">
                          <img
                            alt=""
                            loading="lazy"
                            width="400"
                            height="200"
                            decoding="async"
                            data-nimg="1"
                            src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1712348709184onxrp_low_res.jpg&amp;width=800&amp;height=400"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="collectionThumbnail-thumbnail__footer">
                        <div className="collectionThumbnail-thumbnail__footer-top">
                          <div className="title">
                            <h3 className="heading-3"> Pixel Army Soldiers</h3>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          <div
                            className="stats"
                            style={{
                              background: "transparent",
                              padding: "10px",
                            }}
                          >
                            <div className="price">
                              SUPPLY
                              <div className="price">
                                <h4 className="heading-4"> 3500</h4>
                              </div>
                            </div>
                            <div className="price">
                              PRICE
                              <div
                                className="price"
                                style={{ display: "inline-block" }}
                              >
                                <div
                                  className="price price-element"
                                  style={{ display: "inline-block" }}
                                >
                                  <h4
                                    className="heading-4"
                                    style={{ display: "inline-block" }}
                                  >
                                    <i className="price-currency-icon"></i> 5
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    // style={{ width: "246.25px", marginRight: "15px" }}
                    style={{ width: "350px", marginRight: "15px" }}
                  >
                    <div className="collectionThumbnail-thumbnail thumbnail--active-nft-launches">
                      <a href="/launchpad/details/fury-xrpl-weapons/"></a>
                      <div className="collectionThumbnail-thumbnail__image">
                        <div className="thumbnail-wrapper">
                          <img
                            alt=""
                            loading="lazy"
                            width="400"
                            height="200"
                            decoding="async"
                            data-nimg="1"
                            src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1710138520265group-9120-(1)-1.png&amp;width=800&amp;height=400"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="collectionThumbnail-thumbnail__footer">
                        <div className="collectionThumbnail-thumbnail__footer-top">
                          <div className="title">
                            <h3 className="heading-3"> FURY XRPL WEAPONS</h3>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          <div
                            className="stats"
                            style={{
                              background: "transparent",
                              padding: "10px",
                            }}
                          >
                            <div className="price">
                              SUPPLY
                              <div className="price">
                                <h4 className="heading-4"> 10000</h4>
                              </div>
                            </div>
                            <div className="price">
                              PRICE
                              <div
                                className="price"
                                style={{ display: "inline-block" }}
                              >
                                <div
                                  className="price price-element"
                                  style={{ display: "inline-block" }}
                                >
                                  <h4
                                    className="heading-4"
                                    style={{ display: "inline-block" }}
                                  >
                                    <i className="price-currency-icon"></i> 20
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    // style={{ width: "246.25px", marginRight: "15px" }}
                    style={{ width: "350px", marginRight: "15px" }}
                  >
                    <div className="collectionThumbnail-thumbnail thumbnail--active-nft-launches">
                      <a href="/launchpad/details/ripples-zombies/"></a>
                      <div className="collectionThumbnail-thumbnail__image">
                        <div className="thumbnail-wrapper">
                          <img
                            alt=""
                            loading="lazy"
                            width="400"
                            height="200"
                            decoding="async"
                            data-nimg="1"
                            src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1709150384049image00008.jpeg&amp;width=800&amp;height=400"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="collectionThumbnail-thumbnail__footer">
                        <div className="collectionThumbnail-thumbnail__footer-top">
                          <div className="title">
                            <h3 className="heading-3"> Ripples Zombies</h3>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          <div
                            className="stats"
                            style={{
                              background: "transparent",
                              padding: "10px",
                            }}
                          >
                            <div className="price">
                              SUPPLY
                              <div className="price">
                                <h4 className="heading-4"> 1024</h4>
                              </div>
                            </div>
                            <div className="price">
                              PRICE
                              <div
                                className="price"
                                style={{ display: "inline-block" }}
                              >
                                <div
                                  className="price price-element"
                                  style={{ display: "inline-block" }}
                                >
                                  <h4
                                    className="heading-4"
                                    style={{ display: "inline-block" }}
                                  >
                                    {" "}
                                    FREE
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    // style={{ width: "246.25px", marginRight: "15px" }}
                    style={{ width: "350px", marginRight: "15px" }}
                  >
                    <div className="collectionThumbnail-thumbnail thumbnail--active-nft-launches">
                      <a href="/launchpad/details/fury-xrpl/"></a>
                      <div className="collectionThumbnail-thumbnail__image">
                        <div className="thumbnail-wrapper">
                          <img
                            alt=""
                            loading="lazy"
                            width="400"
                            height="200"
                            decoding="async"
                            data-nimg="1"
                            src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1708498239216dfs.png&amp;width=800&amp;height=400"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="collectionThumbnail-thumbnail__footer">
                        <div className="collectionThumbnail-thumbnail__footer-top">
                          <div className="title">
                            <h3 className="heading-3"> FURY XRPL</h3>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          <div
                            className="stats"
                            style={{
                              background: "transparent",
                              padding: "10px",
                            }}
                          >
                            <div className="price">
                              SUPPLY
                              <div className="price">
                                <h4 className="heading-4"> 10000</h4>
                              </div>
                            </div>
                            <div className="price">
                              PRICE
                              <div
                                className="price"
                                style={{ display: "inline-block" }}
                              >
                                <div
                                  className="price price-element"
                                  style={{ display: "inline-block" }}
                                >
                                  <h4
                                    className="heading-4"
                                    style={{ display: "inline-block" }}
                                  >
                                    <i className="price-currency-icon"></i> 40
                                  </h4>
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
              <button
                type="button"
                className="swiper-button-prev swiper-button-disabled"
                disabled=""
              >
                <i className="chevron-left"></i>
              </button>
              <button type="button" className="swiper-button-next">
                <i className="chevron-right"></i>
              </button>
            </section>
            <section className="section-trending common-spacing position-relative">
              <div className="section-title">
                <h3 className="heading-3">Latest Minted XRPL NFTS</h3>
                <a
                  className="blue-link"
                  aria-label="View all >"
                  href="/explore/nfts/?sortBy=last_minted&amp;sortOrder=desc"
                >
                  View all &gt;
                </a>
              </div>
              <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div
                  className="swiper-wrapper"
                  style={{ transform: "translate3d(0px, 0px, 0px)" }}
                >
                  <div
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "250px", marginRight: "15px" }}
                  >
                    <div className="nft-thumbnail full-card-clickable">
                      <a href="/nft/00081388CB824D6BDF5FE9114E68F3A92B61A0F88A9DD00F240E4EDA0000007D/"></a>
                      <div className="nft-thumbnail__header">
                        <div className="nft-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt="Infinite Planets#2444"
                              miniunix="1"
                              width="350"
                              height="350"
                              decoding="async"
                              data-nimg="1"
                              className="thumbnail-img"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=ipfs%3A%2F%2FQmPegeJ2BWw7dU5UW1pF2A66isLigTh13FTMwNc2adRNie&amp;collection=171530690&amp;width=700&amp;height=700"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="nft-thumbnail__footer">
                        <div className="nft-thumbnail__footer-top">
                          <div className="name">
                            <h4 className="heading-4"> Infinite Planets#244</h4>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="10"
                                height="10"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="nft-thumbnail__footer-bottom">
                          <div className="nft-thumbnail__footer-bid">
                            <h4>-</h4>
                          </div>
                          <div className="nft-thumbnail__footer-rank">
                            <div
                              className="rarity-rank"
                              style={{ marginLeft: "auto" }}
                            >
                              <h4 className="heading-4"> R 2444</h4>
                            </div>
                          </div>
                          <div className="nft-thumbnail__footer-last-sale"></div>
                        </div>
                      </div>
                      <div className="nft-thumbnail__bulk-actions">
                        <div className="bulk-actions-bar"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-next"
                    style={{ width: "250px", marginRight: "15px" }}
                  >
                    <div className="nft-thumbnail full-card-clickable">
                      <a href="/nft/00081388CB824D6BDF5FE9114E68F3A92B61A0F88A9DD00F37BE4F96000003B9/"></a>
                      <div className="nft-thumbnail__header">
                        <div className="nft-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt="Infinite Planets#2102"
                              miniunix="1"
                              width="350"
                              height="350"
                              decoding="async"
                              data-nimg="1"
                              className="thumbnail-img"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=ipfs%3A%2F%2FQmSQdDkQnsQBumnLTBvF1e6Y8Np9R5oKCfM2CBsyMByBiz&amp;collection=171530690&amp;width=700&amp;height=700"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="nft-thumbnail__footer">
                        <div className="nft-thumbnail__footer-top">
                          <div className="name">
                            <h4 className="heading-4"> Infinite Planets#210</h4>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="10"
                                height="10"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="nft-thumbnail__footer-bottom">
                          <div className="nft-thumbnail__footer-bid">
                            <h4>-</h4>
                          </div>
                          <div className="nft-thumbnail__footer-rank">
                            <div
                              className="rarity-rank"
                              style={{ marginLeft: "auto" }}
                            >
                              <h4 className="heading-4"> R 2102</h4>
                            </div>
                          </div>
                          <div className="nft-thumbnail__footer-last-sale"></div>
                        </div>
                      </div>
                      <div className="nft-thumbnail__bulk-actions">
                        <div className="bulk-actions-bar"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "250px", marginRight: "15px" }}
                  >
                    <div className="nft-thumbnail full-card-clickable">
                      <a href="/nft/00081388CB824D6BDF5FE9114E68F3A92B61A0F88A9DD00F8330E83D00000464/"></a>
                      <div className="nft-thumbnail__header">
                        <div className="nft-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt="Infinite Planets#3264"
                              miniunix="1"
                              width="350"
                              height="350"
                              decoding="async"
                              data-nimg="1"
                              className="thumbnail-img"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=ipfs%3A%2F%2FQmUvKETXqLwDz1fM9VJ75X93Z7y95PD4S3ictpvam9xxyC&amp;collection=171530690&amp;width=700&amp;height=700"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="nft-thumbnail__footer">
                        <div className="nft-thumbnail__footer-top">
                          <div className="name">
                            <h4 className="heading-4"> Infinite Planets#326</h4>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="10"
                                height="10"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="nft-thumbnail__footer-bottom">
                          <div className="nft-thumbnail__footer-bid">
                            <h4>-</h4>
                          </div>
                          <div className="nft-thumbnail__footer-rank">
                            <div
                              className="rarity-rank"
                              style={{ marginLeft: "auto" }}
                            >
                              <h4 className="heading-4"> R 3264</h4>
                            </div>
                          </div>
                          <div className="nft-thumbnail__footer-last-sale"></div>
                        </div>
                      </div>
                      <div className="nft-thumbnail__bulk-actions">
                        <div className="bulk-actions-bar"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "250px", marginRight: "15px" }}
                  >
                    <div className="nft-thumbnail full-card-clickable">
                      <a href="/nft/00081388CB824D6BDF5FE9114E68F3A92B61A0F88A9DD00F4844ABFD000004A4/"></a>
                      <div className="nft-thumbnail__header">
                        <div className="nft-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt="Infinite Planets#1879"
                              miniunix="1"
                              width="350"
                              height="350"
                              decoding="async"
                              data-nimg="1"
                              className="thumbnail-img"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=ipfs%3A%2F%2FQmZXthqw81vHbxXAwR9FGrDhuappYcgz7T6g4AL6e6Se7W&amp;collection=171530690&amp;width=700&amp;height=700"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="nft-thumbnail__footer">
                        <div className="nft-thumbnail__footer-top">
                          <div className="name">
                            <h4 className="heading-4"> Infinite Planets#187</h4>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="10"
                                height="10"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="nft-thumbnail__footer-bottom">
                          <div className="nft-thumbnail__footer-bid">
                            <h4>-</h4>
                          </div>
                          <div className="nft-thumbnail__footer-rank">
                            <div
                              className="rarity-rank"
                              style={{ marginLeft: "auto" }}
                            >
                              <h4 className="heading-4"> R 1879</h4>
                            </div>
                          </div>
                          <div className="nft-thumbnail__footer-last-sale"></div>
                        </div>
                      </div>
                      <div className="nft-thumbnail__bulk-actions">
                        <div className="bulk-actions-bar"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "250px", marginRight: "15px" }}
                  >
                    <div className="nft-thumbnail full-card-clickable">
                      <a href="/nft/00081388CB824D6BDF5FE9114E68F3A92B61A0F88A9DD00F8DD2928200000CA5/"></a>
                      <div className="nft-thumbnail__header">
                        <div className="nft-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt="Infinite Planets#1361"
                              miniunix="1"
                              width="350"
                              height="350"
                              decoding="async"
                              data-nimg="1"
                              className="thumbnail-img"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=ipfs%3A%2F%2FQmPQwZwpaV4KmdsQxh3r1junqEADo1XL72XnHRtdJ2n9bu&amp;collection=171530690&amp;width=700&amp;height=700"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="nft-thumbnail__footer">
                        <div className="nft-thumbnail__footer-top">
                          <div className="name">
                            <h4 className="heading-4"> Infinite Planets#136</h4>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="10"
                                height="10"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="nft-thumbnail__footer-bottom">
                          <div className="nft-thumbnail__footer-bid">
                            <h4>-</h4>
                          </div>
                          <div className="nft-thumbnail__footer-rank">
                            <div
                              className="rarity-rank"
                              style={{ marginLeft: "auto" }}
                            >
                              <h4 className="heading-4"> R 1361</h4>
                            </div>
                          </div>
                          <div className="nft-thumbnail__footer-last-sale"></div>
                        </div>
                      </div>
                      <div className="nft-thumbnail__bulk-actions">
                        <div className="bulk-actions-bar"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "250px", marginRight: "15px" }}
                  >
                    <div className="nft-thumbnail full-card-clickable">
                      <a href="/nft/00080BB8094643176A305A493B05C71F8CE28C16154684984C5E2EF80537F19D/"></a>
                      <div className="nft-thumbnail__header">
                        <div className="nft-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt="Xyacht #689"
                              miniunix="1"
                              width="350"
                              height="350"
                              decoding="async"
                              data-nimg="1"
                              className="thumbnail-img"
                              style={{ color: "transparent" }}
                              src="https://marketplace-image.onxrp.com/?uri=ipfs%3A%2F%2FQmXhvfmdrqw9yHmZmd8KesCVUyvqT3Rrp9vjvg1iqnGWsZ&amp;collection=481560256&amp;width=700&amp;height=700"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="nft-thumbnail__footer">
                        <div className="nft-thumbnail__footer-top">
                          <div className="name">
                            <h4 className="heading-4"> Xyacht #689</h4>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="10"
                                height="10"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="nft-thumbnail__footer-bottom">
                          <div className="nft-thumbnail__footer-bid">
                            <h4>-</h4>
                          </div>
                          <div className="nft-thumbnail__footer-rank">
                            <div
                              className="rarity-rank"
                              style={{ marginLeft: "auto" }}
                            >
                              <h4 className="heading-4"> R 811</h4>
                            </div>
                          </div>
                          <div className="nft-thumbnail__footer-last-sale"></div>
                        </div>
                      </div>
                      <div className="nft-thumbnail__bulk-actions">
                        <div className="bulk-actions-bar"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "250px", marginRight: "15px" }}
                  >
                    <div className="nft-thumbnail full-card-clickable">
                      <a href="/nft/00080BB8094643176A305A493B05C71F8CE28C1615468498BC955B9D0537F1C2/"></a>
                      <div className="nft-thumbnail__header">
                        <div className="nft-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt="Xyacht #968"
                              miniunix="1"
                              loading="lazy"
                              width="350"
                              height="350"
                              decoding="async"
                              data-nimg="1"
                              className="thumbnail-img"
                              src="https://marketplace-image.onxrp.com/?uri=ipfs%3A%2F%2FQmVCbCz47RNaCts7tc7m3UfFRG9hLkSp9nrJYbnNreZF1Z&amp;collection=481560256&amp;width=700&amp;height=700"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="nft-thumbnail__footer">
                        <div className="nft-thumbnail__footer-top">
                          <div className="name">
                            <h4 className="heading-4"> Xyacht #968</h4>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="10"
                                height="10"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="nft-thumbnail__footer-bottom">
                          <div className="nft-thumbnail__footer-bid">
                            <h4 className="price__volume">
                              {" "}
                              <div className="price price-element heavy">
                                <h4 className="heading-4">
                                  <i className="price-currency-icon"></i> 140
                                </h4>
                              </div>
                            </h4>
                          </div>
                          <div className="nft-thumbnail__footer-rank">
                            <div
                              className="rarity-rank"
                              style={{ marginLeft: "auto" }}
                            >
                              <h4 className="heading-4"> R 827</h4>
                            </div>
                          </div>
                          <div className="nft-thumbnail__footer-last-sale"></div>
                        </div>
                      </div>
                      <div className="nft-thumbnail__bulk-actions">
                        <div className="bulk-actions-bar">
                          <div className="bulk-buttons buying">
                            <div className="lhs">
                              <button>Add to cart</button>
                            </div>
                            <div className="rhs">
                              <img
                                alt="shopping-cart"
                                width="18"
                                height="18"
                                decoding="async"
                                data-nimg="1"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyMCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMUg2LjM4MTgzQzYuNzYwNTcgMSA3LjEwNjgyIDEuMjEzOTcgNy4yNzYyMiAxLjU1MjcyTDggM004IDNIMTcuODY3MkMxOC40Njg3IDMgMTguOTM0MSAzLjUyNzE4IDE4Ljg1OTUgNC4xMjQwM0wxOC4xMDk1IDEwLjEyNEMxOC4wNDY5IDEwLjYyNDUgMTcuNjIxNSAxMSAxNy4xMTcyIDExSDguMTMyNzhDNy41MzEyOCAxMSA3LjA2NTkgMTAuNDcyOCA3LjE0MDUgOS44NzU5N0w4IDNaTTQgNEgxTTMgOEgxTTIgMTJIMU0xNyAxNUMxNyAxNS41NTIzIDE2LjU1MjMgMTYgMTYgMTZDMTUuNDQ3NyAxNiAxNSAxNS41NTIzIDE1IDE1QzE1IDE0LjQ0NzcgMTUuNDQ3NyAxNCAxNiAxNEMxNi41NTIzIDE0IDE3IDE0LjQ0NzcgMTcgMTVaTTkgMTVDOSAxNS41NTIzIDguNTUyMjggMTYgOCAxNkM3LjQ0NzcyIDE2IDcgMTUuNTUyMyA3IDE1QzcgMTQuNDQ3NyA3LjQ0NzcyIDE0IDggMTRDOC41NTIyOCAxNCA5IDE0LjQ0NzcgOSAxNVoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                                style={{ color: "transparent" }}
                              />
                              <button>Buy now</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "250px", marginRight: "15px" }}
                  >
                    <div className="nft-thumbnail full-card-clickable">
                      <a href="/nft/00080BB8094643176A305A493B05C71F8CE28C16154684981A8A65430537F1E8/"></a>
                      <div className="nft-thumbnail__header">
                        <div className="nft-thumbnail__image">
                          <div className="thumbnail-wrapper">
                            <img
                              alt="Xyacht #591"
                              miniunix="1"
                              loading="lazy"
                              width="350"
                              height="350"
                              decoding="async"
                              data-nimg="1"
                              className="thumbnail-img"
                              src="https://marketplace-image.onxrp.com/?uri=ipfs%3A%2F%2FQmexS7mxftHFXJwDhJowjEHofKW17DprWaibSzmytqU6ia&amp;collection=481560256&amp;width=700&amp;height=700"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="nft-thumbnail__footer">
                        <div className="nft-thumbnail__footer-top">
                          <div className="name">
                            <h4 className="heading-4"> Xyacht #591</h4>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="10"
                                height="10"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="nft-thumbnail__footer-bottom">
                          <div className="nft-thumbnail__footer-bid">
                            <h4>-</h4>
                          </div>
                          <div className="nft-thumbnail__footer-rank">
                            <div
                              className="rarity-rank"
                              style={{ marginLeft: "auto" }}
                            >
                              <h4 className="heading-4"> R 216</h4>
                            </div>
                          </div>
                          <div className="nft-thumbnail__footer-last-sale"></div>
                        </div>
                      </div>
                      <div className="nft-thumbnail__bulk-actions">
                        <div className="bulk-actions-bar"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="swiper-button-prev swiper-button-disabled"
                disabled=""
              >
                <i className="chevron-left"></i>
              </button>
              <button type="button" className="swiper-button-next">
                <i className="chevron-right"></i>
              </button>
            </section>
            <section className="section-exclusive-drops common-spacing position-relative">
              <div className="section-title">
                <h3 className="heading-3"> Exclusive XRPL NFT Collections</h3>
                <a
                  className="blue-link"
                  aria-label="View all >"
                  href="/explore/collections/"
                >
                  {" "}
                  View all &gt;
                </a>
              </div>
              <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div
                  className="swiper-wrapper"
                  style={{ transform: "translate3d(0px, 0px, 0px)" }}
                >
                  <div
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "420.5px", marginRight: "15px" }}
                  >
                    <div className="collectionThumbnail-thumbnail thumbnail--exclusive-collection">
                      <a href="/collection/xpunks/"></a>
                      <div className="collectionThumbnail-thumbnail__image">
                        <div className="thumbnail-wrapper">
                          <img
                            alt=""
                            loading="lazy"
                            width="400"
                            height="200"
                            decoding="async"
                            data-nimg="1"
                            src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2Fxpunks_banner.png&amp;width=800&amp;height=400"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="collectionThumbnail-thumbnail__footer">
                        <div className="collectionThumbnail-thumbnail__footer-top">
                          <div className="title">
                            <h3 className="heading-3"> XPUNKS</h3>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-purple.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          <div
                            className="stats"
                            style={{
                              background: "transparent",
                              padding: "10px",
                            }}
                          >
                            <div className="price">
                              Floor
                              <div className="price price-element">
                                <h4 className="heading-4">
                                  <i className="price-currency-icon"></i> 390
                                </h4>
                              </div>
                            </div>
                            <div className="volume">
                              Total Volume
                              <div className="price price-element">
                                <h4 className="heading-4"> 4.79M</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-next"
                    style={{ width: "420.5px", marginRight: "15px" }}
                  >
                    <div className="collectionThumbnail-thumbnail thumbnail--exclusive-collection">
                      <a href="/collection/unixpunks/"></a>
                      <div className="collectionThumbnail-thumbnail__image">
                        <div className="thumbnail-wrapper">
                          <img
                            alt=""
                            loading="lazy"
                            width="400"
                            height="200"
                            decoding="async"
                            data-nimg="1"
                            src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2Funixpunks_banner.png&amp;width=800&amp;height=400"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="collectionThumbnail-thumbnail__footer">
                        <div className="collectionThumbnail-thumbnail__footer-top">
                          <div className="title">
                            <h3 className="heading-3"> UNIXPUNKS</h3>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          <div
                            className="stats"
                            style={{
                              background: "transparent",
                              padding: "10px",
                            }}
                          >
                            <div className="price">
                              Floor
                              <div className="price price-element">
                                <h4 className="heading-4">
                                  <i className="price-currency-icon"></i> 73
                                </h4>
                              </div>
                            </div>
                            <div className="volume">
                              Total Volume
                              <div className="price price-element">
                                <h4 className="heading-4"> 693k</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "420.5px", marginRight: "15px" }}
                  >
                    <div className="collectionThumbnail-thumbnail thumbnail--exclusive-collection">
                      <a href="/collection/r9ZW5tjbhKFLWxs4j1KqF61YSHAyDvo52D-11/"></a>
                      <div className="collectionThumbnail-thumbnail__image">
                        <div className="thumbnail-wrapper">
                          <img
                            alt=""
                            loading="lazy"
                            width="400"
                            height="200"
                            decoding="async"
                            data-nimg="1"
                            src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1671812420958a.a.-xrp-cyborgs-(7).png&amp;width=800&amp;height=400"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="collectionThumbnail-thumbnail__footer">
                        <div className="collectionThumbnail-thumbnail__footer-top">
                          <div className="title">
                            <h3 className="heading-3"> A.A. XRP Cyborgs</h3>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          <div
                            className="stats"
                            style={{
                              background: "transparent",
                              padding: "10px",
                            }}
                          >
                            <div className="price">
                              Floor
                              <div className="price price-element">
                                <h4 className="heading-4">
                                  <i className="price-currency-icon"></i> 88
                                </h4>
                              </div>
                            </div>
                            <div className="volume">
                              Total Volume
                              <div className="price price-element">
                                <h4 className="heading-4"> 272k</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "420.5px", marginRight: "15px" }}
                  >
                    <div className="collectionThumbnail-thumbnail thumbnail--exclusive-collection">
                      <a href="/collection/junkies/"></a>
                      <div className="collectionThumbnail-thumbnail__image">
                        <div className="thumbnail-wrapper">
                          <img
                            alt=""
                            loading="lazy"
                            width="400"
                            height="200"
                            decoding="async"
                            data-nimg="1"
                            src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2FJunkiesLPBanner.png&amp;width=800&amp;height=400"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="collectionThumbnail-thumbnail__footer">
                        <div className="collectionThumbnail-thumbnail__footer-top">
                          <div className="title">
                            <h3 className="heading-3"> Junkies</h3>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-purple.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          <div
                            className="stats"
                            style={{
                              background: "transparent",
                              padding: "10px",
                            }}
                          >
                            <div className="price">
                              Floor
                              <div className="price price-element">
                                <h4 className="heading-4">
                                  <i className="price-currency-icon"></i> 59
                                </h4>
                              </div>
                            </div>
                            <div className="volume">
                              Total Volume
                              <div className="price price-element">
                                <h4 className="heading-4"> 146k</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "420.5px", marginRight: "15px" }}
                  >
                    <div className="collectionThumbnail-thumbnail thumbnail--exclusive-collection">
                      <a href="/collection/monkee-monkee/"></a>
                      <div className="collectionThumbnail-thumbnail__image">
                        <div className="thumbnail-wrapper">
                          <img
                            alt=""
                            loading="lazy"
                            width="400"
                            height="200"
                            decoding="async"
                            data-nimg="1"
                            src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1667136404527monkee-banner.png&amp;width=800&amp;height=400"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="collectionThumbnail-thumbnail__footer">
                        <div className="collectionThumbnail-thumbnail__footer-top">
                          <div className="title">
                            <h3 className="heading-3"> MONKEE MONKEE</h3>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-purple.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          <div
                            className="stats"
                            style={{
                              background: "transparent",
                              padding: "10px",
                            }}
                          >
                            <div className="price">
                              Floor
                              <div className="price price-element">
                                <h4 className="heading-4">
                                  <i className="price-currency-icon"></i> 20
                                </h4>
                              </div>
                            </div>
                            <div className="volume">
                              Total Volume
                              <div className="price price-element">
                                <h4 className="heading-4"> 32.2k</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "420.5px", marginRight: "15px" }}
                  >
                    <div className="collectionThumbnail-thumbnail thumbnail--exclusive-collection">
                      <a href="/collection/pizza-party/"></a>
                      <div className="collectionThumbnail-thumbnail__image">
                        <div className="thumbnail-wrapper">
                          <img
                            alt=""
                            loading="lazy"
                            width="400"
                            height="200"
                            decoding="async"
                            data-nimg="1"
                            src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1666798538798cover_copy5.jpg&amp;width=800&amp;height=400"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="collectionThumbnail-thumbnail__footer">
                        <div className="collectionThumbnail-thumbnail__footer-top">
                          <div className="title">
                            <h3 className="heading-3"> Pizza Party</h3>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-purple.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          <div
                            className="stats"
                            style={{
                              background: "transparent",
                              padding: "10px",
                            }}
                          >
                            <div className="price">
                              Floor
                              <div className="price price-element">
                                <h4 className="heading-4">
                                  <i className="price-currency-icon"></i> 29
                                </h4>
                              </div>
                            </div>
                            <div className="volume">
                              Total Volume
                              <div className="price price-element">
                                <h4 className="heading-4"> 20.3k</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "420.5px", marginRight: "15px" }}
                  >
                    <div className="collectionThumbnail-thumbnail thumbnail--exclusive-collection">
                      <a href="/collection/wild-stag-treehouse/"></a>
                      <div className="collectionThumbnail-thumbnail__image">
                        <div className="thumbnail-wrapper">
                          <img
                            alt=""
                            loading="lazy"
                            width="400"
                            height="200"
                            decoding="async"
                            data-nimg="1"
                            src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F16630632655772nd-attempt-onxrp-banner-01.png&amp;width=800&amp;height=400"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="collectionThumbnail-thumbnail__footer">
                        <div className="collectionThumbnail-thumbnail__footer-top">
                          <div className="title">
                            <h3 className="heading-3"> Wild Stag Treehouse</h3>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-purple.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          <div
                            className="stats"
                            style={{
                              background: "transparent",
                              padding: "10px",
                            }}
                          >
                            <div className="price">
                              Floor
                              <div className="price price-element">
                                <h4 className="heading-4">
                                  <i className="price-currency-icon"></i> 24
                                </h4>
                              </div>
                            </div>
                            <div className="volume">
                              Total Volume
                              <div className="price price-element">
                                <h4 className="heading-4">
                                  <i className="price-currency-icon"></i> 6115
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "420.5px", marginRight: "15px" }}
                  >
                    <div className="collectionThumbnail-thumbnail thumbnail--exclusive-collection">
                      <a href="/collection/versex/"></a>
                      <div className="collectionThumbnail-thumbnail__image">
                        <div className="thumbnail-wrapper">
                          <img
                            alt=""
                            loading="lazy"
                            width="400"
                            height="200"
                            decoding="async"
                            data-nimg="1"
                            src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1666790433059cover-photo-twitter---new.png&amp;width=800&amp;height=400"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="collectionThumbnail-thumbnail__footer">
                        <div className="collectionThumbnail-thumbnail__footer-top">
                          <div className="title">
                            <h3 className="heading-3"> VerseX</h3>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-purple.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          <div
                            className="stats"
                            style={{
                              background: "transparent",
                              padding: "10px",
                            }}
                          >
                            <div className="price">
                              Floor
                              <div className="price price-element">
                                <h4 className="heading-4">
                                  <i className="price-currency-icon"></i> 198
                                </h4>
                              </div>
                            </div>
                            <div className="volume">
                              Total Volume
                              <div className="price price-element">
                                <h4 className="heading-4">
                                  <i className="price-currency-icon"></i> 1272
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "420.5px", marginRight: "15px" }}
                  >
                    <div className="collectionThumbnail-thumbnail thumbnail--exclusive-collection">
                      <a href="/collection/lame-lions/"></a>
                      <div className="collectionThumbnail-thumbnail__image">
                        <div className="thumbnail-wrapper">
                          <img
                            alt=""
                            loading="lazy"
                            width="400"
                            height="200"
                            decoding="async"
                            data-nimg="1"
                            src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1670413046318lame-lion-banner_ver2.jpg&amp;width=800&amp;height=400"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="collectionThumbnail-thumbnail__footer">
                        <div className="collectionThumbnail-thumbnail__footer-top">
                          <div className="title">
                            <h3 className="heading-3"> Lame Lions</h3>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-purple.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          <div
                            className="stats"
                            style={{
                              background: "transparent",
                              padding: "10px",
                            }}
                          >
                            <div className="price">
                              Floor
                              <div className="price price-element">
                                <h4 className="heading-4">
                                  <i className="price-currency-icon"></i> 20
                                </h4>
                              </div>
                            </div>
                            <div className="volume">
                              Total Volume
                              <div className="price price-element">
                                <h4 className="heading-4">
                                  <i className="price-currency-icon"></i> 862
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="swiper-button-prev swiper-button-disabled"
                disabled=""
              >
                <i className="chevron-left"></i>
              </button>
              <button type="button" className="swiper-button-next">
                <i className="chevron-right"></i>
              </button>
            </section>
            {/* ////////// */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Collections;
