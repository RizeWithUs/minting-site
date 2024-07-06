const Nfts = () => {
  return (
    <section className="big-slider position-relative">
      <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
        <div
          className="swiper-wrapper"
          style={{
            transform: "translate3d(-1306.25px, 0px, 0px)",
            transitionDuration: "0ms",
          }}
        >
          <div
            className="swiper-slide"
            style={{ width: "420.5px", marginRight: "15px" }}
          >
            <div className="big-slide">
              <a href="/collection/moon-baes/">
                <div className="big-slide__data">
                  <div className="big-slide__image">
                    <img
                      alt="hero-slider"
                      fetchpriority="high"
                      width="420"
                      height="420"
                      decoding="async"
                      data-nimg="1"
                      className="hero-slider_img"
                      style={{ color: "transparent" }}
                      src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1713254207587banner-icon.png&amp;width=840&amp;height=840"
                    />
                    <div className="big-slide__content">
                      <div className="big-slide__collection">
                        <h3>
                          Moon Baes
                          <span>
                            <div className="collection-checkmark">
                              <img
                                alt="Verified"
                                loading="lazy"
                                width="18"
                                height="18"
                                decoding="async"
                                className="icon-verified"
                                src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </span>
                        </h3>
                      </div>
                      <div className="big-slide__price">
                        <div className="price price-element white">
                          <h4 className="heading-4 price__label">Floor:</h4>
                          <h4 className="heading-4">
                            <i className="price-currency-icon"></i> 35
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="big-slide__boosts">
                      <span className="big-slide__boosts__rank">Rank 1</span>
                      <span className="big-slide__boosts__burnt">
                        <img
                          alt="oxp"
                          width="14"
                          height="14"
                          decoding="async"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMjg2MjkgMjAuODA1OEg0LjI3MDIzQzMuNTYzODggMjAuNzMwOCAyLjk4NTk1IDIwLjQzNjEgMi42MzI3OCAxOS45N0MwLjkzMTEwNCAxNy44Mzc4IDAgMTUuMTQ4NSAwIDEyLjQwNTZDMCA5LjY2MjYzIDAuOTMxMTA0IDYuOTc4NjQgMi42Mjc0MiA0Ljg0NjQ1QzMuMDEyNzEgNC4zMzIxNSAzLjY0NDE1IDQuMDE2MDcgNC4yODYyOSA0LjAxMDcxQzQuMzQ1MTUgNC4wMDUzNiA0LjQwNDAxIDQgNC40NjgyMyA0QzUuMDQwOCA0IDUuNjA4MDMgNC4yNTE3OSA2LjA1NzUyIDQuNzAxOEwxMC4zNTQ1IDkuMDAzNjlDMTAuNzk4NyA5LjQ0ODM0IDExLjM4MTkgOS42ODk0MiAxMi4wMDI3IDkuNjg5NDJDMTIuNjIzNCA5LjY4OTQyIDEzLjIwNjcgOS40NDI5OSAxMy42NTA4IDkuMDAzNjlMMTcuOTQyNSA0LjcwMThDMTguMzkyIDQuMjU3MTUgMTkuMDEyNyA0LjAwNTM2IDE5LjY5NzcgNC4wMDUzNkgxOS43MzUxQzIwLjQ0MTUgNC4wODAzNiAyMS4wMTk0IDQuMzc1MDEgMjEuMzcyNiA0Ljg0MTA5QzIzLjA2MzUgNi45NzMyOCAyNCA5LjY0MTIgMjQgMTIuMzUyQzI0IDE1LjA2MjggMjMuMDY4OSAxNy43Nzg5IDIxLjM3MjYgMTkuODYyOUMyMC45ODczIDIwLjM3MTggMjAuMzU1OSAyMC42OTMzIDE5LjcxMzcgMjAuNjk4NkMxOS42NTQ4IDIwLjcwNCAxOS41OTYgMjAuNzA5MyAxOS41MzE4IDIwLjcwOTNDMTguOTU5MiAyMC43MDkzIDE4LjM5MiAyMC40NTc1IDE3Ljk0MjUgMjAuMDA3NUwxMy42NDU1IDE1LjcwNTZDMTMuMjAxMyAxNS4yNjEgMTIuNjE4MSAxNS4wMTk5IDExLjk5NzMgMTUuMDE5OUMxMS4zNzY2IDE1LjAxOTkgMTAuNzkzMyAxNS4yNjYzIDEwLjM0OTIgMTUuNzA1Nkw2LjA1NzUyIDIwLjAwMjJDNS41ODY2MiAyMC41MzI1IDUuMDE0MDUgMjAuODExMSA0LjQwNDAxIDIwLjgxMTFINC4yODA5NEw0LjI4NjI5IDIwLjgwNThaTTExLjk0OTIgMTIuNzc1MkMxMy4yMTIgMTIuNzc1MiAxNC40IDEzLjI2ODEgMTUuMjkzNiAxNC4xNjI3TDE5LjQ3ODMgMTguMzUyMUMyMC44MTYxIDE2LjY3NTMgMjEuNTU0NSAxNC41NjQ1IDIxLjU1NDUgMTIuNDA1NkMyMS41NTQ1IDEwLjI0NjYgMjAuODM3NSA4LjIxMDgxIDE5LjQ3ODMgNi40NTg5OUwxNS4yOTM2IDEwLjY0ODRDMTQuNCAxMS41NDMgMTMuMjEyIDEyLjAzNTkgMTEuOTQ5MiAxMi4wMzU5QzEwLjY4NjMgMTIuMDM1OSA5LjQ5ODMzIDExLjU0MyA4LjYwNDY4IDEwLjY0ODRMNC40MTQ3MiA2LjQ1ODk5QzMuMDc2OTIgOC4xMzU4MSAyLjMzODQ2IDEwLjI0NjYgMi4zMzg0NiAxMi40MDU2QzIuMzM4NDYgMTQuNTY0NSAzLjA1NTUyIDE2LjYwMDMgNC40MTQ3MiAxOC4zNTIxTDguNTk5MzMgMTQuMTYyN0M5LjQ5Mjk4IDEzLjI2ODEgMTAuNjgwOSAxMi43NzUyIDExLjk0MzggMTIuNzc1MkgxMS45NDkyWiIgZmlsbD0iIzgxODE4OCIvPgo8L3N2Zz4K"
                          style={{ color: "transparent" }}
                        />
                        2,498 Burnt
                      </span>
                    </div>
                    <a
                      href="/collection/ripplebits/"
                      className="swiper-slide"
                      style={{
                        width: "246.25px",
                        marginRight: "15px",
                      }}
                    >
                      <div className="big-slide">
                        <div className="big-slide__data">
                          <div className="big-slide__image"></div>
                        </div>
                      </div>
                    </a>
                    <img
                      alt="hero-slider"
                      fetchpriority="high"
                      width="420"
                      height="420"
                      decoding="async"
                      data-nimg="1"
                      className="hero-slider_img"
                      style={{ color: "transparent" }}
                      src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1705347914184screenshot-2024-01-03-at-20.50.25.png&amp;width=840&amp;height=840"
                    />
                  </div>
                  <div className="big-slide__content">
                    <div className="big-slide__collection">
                      <h3>
                        RippleBits
                        <span>
                          <div className="collection-checkmark">
                            <img
                              alt="Verified"
                              loading="lazy"
                              width="18"
                              height="18"
                              decoding="async"
                              data-nimg="1"
                              className="icon-verified"
                              src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </span>
                      </h3>
                    </div>
                    <div className="big-slide__price">
                      <div className="price price-element white">
                        <h4 className="heading-4 price__label"> Floor:</h4>
                        <h4 className="heading-4">
                          <i className="price-currency-icon"></i> 6
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="big-slide__boosts">
                    <span className="big-slide__boosts__rank">Rank 2</span>
                    <span className="big-slide__boosts__burnt">
                      <img
                        alt="oxp"
                        width="14"
                        height="14"
                        decoding="async"
                        data-nimg="1"
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMjg2MjkgMjAuODA1OEg0LjI3MDIzQzMuNTYzODggMjAuNzMwOCAyLjk4NTk1IDIwLjQzNjEgMi42MzI3OCAxOS45N0MwLjkzMTEwNCAxNy44Mzc4IDAgMTUuMTQ4NSAwIDEyLjQwNTZDMCA5LjY2MjYzIDAuOTMxMTA0IDYuOTc4NjQgMi42Mjc0MiA0Ljg0NjQ1QzMuMDEyNzEgNC4zMzIxNSAzLjY0NDE1IDQuMDE2MDcgNC4yODYyOSA0LjAxMDcxQzQuMzQ1MTUgNC4wMDUzNiA0LjQwNDAxIDQgNC40NjgyMyA0QzUuMDQwOCA0IDUuNjA4MDMgNC4yNTE3OSA2LjA1NzUyIDQuNzAxOEwxMC4zNTQ1IDkuMDAzNjlDMTAuNzk4NyA5LjQ0ODM0IDExLjM4MTkgOS42ODk0MiAxMi4wMDI3IDkuNjg5NDJDMTIuNjIzNCA5LjY4OTQyIDEzLjIwNjcgOS40NDI5OSAxMy42NTA4IDkuMDAzNjlMMTcuOTQyNSA0LjcwMThDMTguMzkyIDQuMjU3MTUgMTkuMDEyNyA0LjAwNTM2IDE5LjY5NzcgNC4wMDUzNkgxOS43MzUxQzIwLjQ0MTUgNC4wODAzNiAyMS4wMTk0IDQuMzc1MDEgMjEuMzcyNiA0Ljg0MTA5QzIzLjA2MzUgNi45NzMyOCAyNCA5LjY0MTIgMjQgMTIuMzUyQzI0IDE1LjA2MjggMjMuMDY4OSAxNy43Nzg5IDIxLjM3MjYgMTkuODYyOUMyMC45ODczIDIwLjM3MTggMjAuMzU1OSAyMC42OTMzIDE5LjcxMzcgMjAuNjk4NkMxOS42NTQ4IDIwLjcwNCAxOS41OTYgMjAuNzA5MyAxOS41MzE4IDIwLjcwOTNDMTguOTU5MiAyMC43MDkzIDE4LjM5MiAyMC40NTc1IDE3Ljk0MjUgMjAuMDA3NUwxMy42NDU1IDE1LjcwNTZDMTMuMjAxMyAxNS4yNjEgMTIuNjE4MSAxNS4wMTk5IDExLjk5NzMgMTUuMDE5OUMxMS4zNzY2IDE1LjAxOTkgMTAuNzkzMyAxNS4yNjYzIDEwLjM0OTIgMTUuNzA1Nkw2LjA1NzUyIDIwLjAwMjJDNS41ODY2MiAyMC41MzI1IDUuMDE0MDUgMjAuODExMSA0LjQwNDAxIDIwLjgxMTFINC4yODA5NEw0LjI4NjI5IDIwLjgwNThaTTExLjk0OTIgMTIuNzc1MkMxMy4yMTIgMTIuNzc1MiAxNC40IDEzLjI2ODEgMTUuMjkzNiAxNC4xNjI3TDE5LjQ3ODMgMTguMzUyMUMyMC44MTYxIDE2LjY3NTMgMjEuNTU0NSAxNC41NjQ1IDIxLjU1NDUgMTIuNDA1NkMyMS41NTQ1IDEwLjI0NjYgMjAuODM3NSA4LjIxMDgxIDE5LjQ3ODMgNi40NTg5OUwxNS4yOTM2IDEwLjY0ODRDMTQuNCAxMS41NDMgMTMuMjEyIDEyLjAzNTkgMTEuOTQ5MiAxMi4wMzU5QzEwLjY4NjMgMTIuMDM1OSA5LjQ5ODMzIDExLjU0MyA4LjYwNDY4IDEwLjY0ODRMNC40MTQ3MiA2LjQ1ODk5QzMuMDc2OTIgOC4xMzU4MSAyLjMzODQ2IDEwLjI0NjYgMi4zMzg0NiAxMi40MDU2QzIuMzM4NDYgMTQuNTY0NSAzLjA1NTUyIDE2LjYwMDMgNC40MTQ3MiAxOC4zNTIxTDguNTk5MzMgMTQuMTYyN0M5LjQ5Mjk4IDEzLjI2ODEgMTAuNjgwOSAxMi43NzUyIDExLjk0MzggMTIuNzc1MkgxMS45NDkyWiIgZmlsbD0iIzgxODE4OCIvPgo8L3N2Zz4K"
                        style={{ color: "transparent" }}
                      />
                      1,000 Burnt
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            className="swiper-slide"
            style={{ width: "420.5px", marginRight: "15px" }}
          >
            <div className="big-slide">
              <a href="/collection/xsoldierz/">
                <div className="big-slide__data">
                  <div className="big-slide__image">
                    <img
                      alt="hero-slider"
                      fetchpriority="high"
                      width="420"
                      height="420"
                      decoding="async"
                      data-nimg="1"
                      className="hero-slider_img"
                      style={{ color: "transparent" }}
                      src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1701553116346untitled-design-(1).gif&amp;width=840&amp;height=840"
                    />
                  </div>
                  <div className="big-slide__content">
                    <div className="big-slide__collection">
                      <h3>
                        xSOLDIERZ
                        <span>
                          <div className="collection-checkmark">
                            <img
                              alt="Verified"
                              loading="lazy"
                              width="18"
                              height="18"
                              decoding="async"
                              data-nimg="1"
                              className="icon-verified"
                              src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </span>
                      </h3>
                    </div>
                    <div className="big-slide__price">
                      <div className="price price-element white">
                        <h4 className="heading-4 price__label">Floor:</h4>
                        <h4 className="heading-4">
                          <i className="price-currency-icon"></i> 100
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="big-slide__boosts">
                    <span className="big-slide__boosts__rank">Rank 3</span>
                    <span className="big-slide__boosts__burnt">
                      <img
                        alt="oxp"
                        width="14"
                        height="14"
                        decoding="async"
                        data-nimg="1"
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMjg2MjkgMjAuODA1OEg0LjI3MDIzQzMuNTYzODggMjAuNzMwOCAyLjk4NTk1IDIwLjQzNjEgMi42MzI3OCAxOS45N0MwLjkzMTEwNCAxNy44Mzc4IDAgMTUuMTQ4NSAwIDEyLjQwNTZDMCA5LjY2MjYzIDAuOTMxMTA0IDYuOTc4NjQgMi42Mjc0MiA0Ljg0NjQ1QzMuMDEyNzEgNC4zMzIxNSAzLjY0NDE1IDQuMDE2MDcgNC4yODYyOSA0LjAxMDcxQzQuMzQ1MTUgNC4wMDUzNiA0LjQwNDAxIDQgNC40NjgyMyA0QzUuMDQwOCA0IDUuNjA4MDMgNC4yNTE3OSA2LjA1NzUyIDQuNzAxOEwxMC4zNTQ1IDkuMDAzNjlDMTAuNzk4NyA5LjQ0ODM0IDExLjM4MTkgOS42ODk0MiAxMi4wMDI3IDkuNjg5NDJDMTIuNjIzNCA5LjY4OTQyIDEzLjIwNjcgOS40NDI5OSAxMy42NTA4IDkuMDAzNjlMMTcuOTQyNSA0LjcwMThDMTguMzkyIDQuMjU3MTUgMTkuMDEyNyA0LjAwNTM2IDE5LjY5NzcgNC4wMDUzNkgxOS43MzUxQzIwLjQ0MTUgNC4wODAzNiAyMS4wMTk0IDQuMzc1MDEgMjEuMzcyNiA0Ljg0MTA5QzIzLjA2MzUgNi45NzMyOCAyNCA5LjY0MTIgMjQgMTIuMzUyQzI0IDE1LjA2MjggMjMuMDY4OSAxNy43Nzg5IDIxLjM3MjYgMTkuODYyOUMyMC45ODczIDIwLjM3MTggMjAuMzU1OSAyMC42OTMzIDE5LjcxMzcgMjAuNjk4NkMxOS42NTQ4IDIwLjcwNCAxOS41OTYgMjAuNzA5MyAxOS41MzE4IDIwLjcwOTNDMTguOTU5MiAyMC43MDkzIDE4LjM5MiAyMC40NTc1IDE3Ljk0MjUgMjAuMDA3NUwxMy42NDU1IDE1LjcwNTZDMTMuMjAxMyAxNS4yNjEgMTIuNjE4MSAxNS4wMTk5IDExLjk5NzMgMTUuMDE5OUMxMS4zNzY2IDE1LjAxOTkgMTAuNzkzMyAxNS4yNjYzIDEwLjM0OTIgMTUuNzA1Nkw2LjA1NzUyIDIwLjAwMjJDNS41ODY2MiAyMC41MzI1IDUuMDE0MDUgMjAuODExMSA0LjQwNDAxIDIwLjgxMTFINC4yODA5NEw0LjI4NjI5IDIwLjgwNThaTTExLjk0OTIgMTIuNzc1MkMxMy4yMTIgMTIuNzc1MiAxNC40IDEzLjI2ODEgMTUuMjkzNiAxNC4xNjI3TDE5LjQ3ODMgMTguMzUyMUMyMC44MTYxIDE2LjY3NTMgMjEuNTU0NSAxNC41NjQ1IDIxLjU1NDUgMTIuNDA1NkMyMS41NTQ1IDEwLjI0NjYgMjAuODM3NSA4LjIxMDgxIDE5LjQ3ODMgNi40NTg5OUwxNS4yOTM2IDEwLjY0ODRDMTQuNCAxMS41NDMgMTMuMjEyIDEyLjAzNTkgMTEuOTQ5MiAxMi4wMzU5QzEwLjY4NjMgMTIuMDM1OSA5LjQ5ODMzIDExLjU0MyA4LjYwNDY4IDEwLjY0ODRMNC40MTQ3MiA2LjQ1ODk5QzMuMDc2OTIgOC4xMzU4MSAyLjMzODQ2IDEwLjI0NjYgMi4zMzg0NiAxMi40MDU2QzIuMzM4NDYgMTQuNTY0NSAzLjA1NTUyIDE2LjYwMDMgNC40MTQ3MiAxOC4zNTIxTDguNTk5MzMgMTQuMTYyN0M5LjQ5Mjk4IDEzLjI2ODEgMTAuNjgwOSAxMi43NzUyIDExLjk0MzggMTIuNzc1MkgxMS45NDkyWiIgZmlsbD0iIzgxODE4OCIvPgo8L3N2Zz4K"
                        style={{ color: "transparent" }}
                      />
                      421 Burnt
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            className="swiper-slide"
            style={{ width: "420.5px", marginRight: "15px" }}
          >
            <div className="big-slide">
              <a href="/collection/the-hustlrs/">
                <div className="big-slide__data">
                  <div className="big-slide__image">
                    <img
                      alt="hero-slider"
                      fetchpriority="high"
                      width="420"
                      height="420"
                      decoding="async"
                      data-nimg="1"
                      className="hero-slider_img"
                      style={{ color: "transparent" }}
                      src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1698249623063379.png&amp;width=840&amp;height=840"
                    />
                  </div>
                  <div className="big-slide__content">
                    <div className="big-slide__collection">
                      <h3>
                        THE HUSTLRS
                        <span>
                          <div className="collection-checkmark">
                            <img
                              alt="Verified"
                              loading="lazy"
                              width="18"
                              height="18"
                              decoding="async"
                              data-nimg="1"
                              className="icon-verified"
                              src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </span>
                      </h3>
                    </div>
                    <div className="big-slide__price">
                      <div className="price price-element white">
                        <h4 className="heading-4 price__label"> Floor:</h4>
                        <h4 className="heading-4">
                          <i className="price-currency-icon"></i> 2
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="big-slide__boosts">
                    <span className="big-slide__boosts__rank">Rank 4</span>
                    <span className="big-slide__boosts__burnt">
                      <img
                        alt="oxp"
                        width="14"
                        height="14"
                        decoding="async"
                        data-nimg="1"
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMjg2MjkgMjAuODA1OEg0LjI3MDIzQzMuNTYzODggMjAuNzMwOCAyLjk4NTk1IDIwLjQzNjEgMi42MzI3OCAxOS45N0MwLjkzMTEwNCAxNy44Mzc4IDAgMTUuMTQ4NSAwIDEyLjQwNTZDMCA5LjY2MjYzIDAuOTMxMTA0IDYuOTc4NjQgMi42Mjc0MiA0Ljg0NjQ1QzMuMDEyNzEgNC4zMzIxNSAzLjY0NDE1IDQuMDE2MDcgNC4yODYyOSA0LjAxMDcxQzQuMzQ1MTUgNC4wMDUzNiA0LjQwNDAxIDQgNC40NjgyMyA0QzUuMDQwOCA0IDUuNjA4MDMgNC4yNTE3OSA2LjA1NzUyIDQuNzAxOEwxMC4zNTQ1IDkuMDAzNjlDMTAuNzk4NyA5LjQ0ODM0IDExLjM4MTkgOS42ODk0MiAxMi4wMDI3IDkuNjg5NDJDMTIuNjIzNCA5LjY4OTQyIDEzLjIwNjcgOS40NDI5OSAxMy42NTA4IDkuMDAzNjlMMTcuOTQyNSA0LjcwMThDMTguMzkyIDQuMjU3MTUgMTkuMDEyNyA0LjAwNTM2IDE5LjY5NzcgNC4wMDUzNkgxOS43MzUxQzIwLjQ0MTUgNC4wODAzNiAyMS4wMTk0IDQuMzc1MDEgMjEuMzcyNiA0Ljg0MTA5QzIzLjA2MzUgNi45NzMyOCAyNCA5LjY0MTIgMjQgMTIuMzUyQzI0IDE1LjA2MjggMjMuMDY4OSAxNy43Nzg5IDIxLjM3MjYgMTkuODYyOUMyMC45ODczIDIwLjM3MTggMjAuMzU1OSAyMC42OTMzIDE5LjcxMzcgMjAuNjk4NkMxOS42NTQ4IDIwLjcwNCAxOS41OTYgMjAuNzA5MyAxOS41MzE4IDIwLjcwOTNDMTguOTU5MiAyMC43MDkzIDE4LjM5MiAyMC40NTc1IDE3Ljk0MjUgMjAuMDA3NUwxMy42NDU1IDE1LjcwNTZDMTMuMjAxMyAxNS4yNjEgMTIuNjE4MSAxNS4wMTk5IDExLjk5NzMgMTUuMDE5OUMxMS4zNzY2IDE1LjAxOTkgMTAuNzkzMyAxNS4yNjYzIDEwLjM0OTIgMTUuNzA1Nkw2LjA1NzUyIDIwLjAwMjJDNS41ODY2MiAyMC41MzI1IDUuMDE0MDUgMjAuODExMSA0LjQwNDAxIDIwLjgxMTFINC4yODA5NEw0LjI4NjI5IDIwLjgwNThaTTExLjk0OTIgMTIuNzc1MkMxMy4yMTIgMTIuNzc1MiAxNC40IDEzLjI2ODEgMTUuMjkzNiAxNC4xNjI3TDE5LjQ3ODMgMTguMzUyMUMyMC44MTYxIDE2LjY3NTMgMjEuNTU0NSAxNC41NjQ1IDIxLjU1NDUgMTIuNDA1NkMyMS41NTQ1IDEwLjI0NjYgMjAuODM3NSA4LjIxMDgxIDE5LjQ3ODMgNi40NTg5OUwxNS4yOTM2IDEwLjY0ODRDMTQuNCAxMS41NDMgMTMuMjEyIDEyLjAzNTkgMTEuOTQ5MiAxMi4wMzU5QzEwLjY4NjMgMTIuMDM1OSA5LjQ5ODMzIDExLjU0MyA4LjYwNDY4IDEwLjY0ODRMNC40MTQ3MiA2LjQ1ODk5QzMuMDc2OTIgOC4xMzU4MSAyLjMzODQ2IDEwLjI0NjYgMi4zMzg0NiAxMi40MDU2QzIuMzM4NDYgMTQuNTY0NSAzLjA1NTUyIDE2LjYwMDMgNC40MTQ3MiAxOC4zNTIxTDguNTk5MzMgMTQuMTYyN0M5LjQ5Mjk4IDEzLjI2ODEgMTAuNjgwOSAxMi43NzUyIDExLjk0MzggMTIuNzc1MkgxMS45NDkyWiIgZmlsbD0iIzgxODE4OCIvPgo8L3N2Zz4K"
                        style={{ color: "transparent" }}
                      />
                      385 Burnt
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-prev"
            style={{ width: "420.5px", marginRight: "15px" }}
          >
            <div className="big-slide">
              <a href="/collection/doodlepunkx/">
                <div className="big-slide__data">
                  <div className="big-slide__image">
                    <img
                      alt="hero-slider"
                      fetchpriority="high"
                      width="420"
                      height="420"
                      decoding="async"
                      data-nimg="1"
                      className="hero-slider_img"
                      src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F16818097763450.png&amp;width=840&amp;height=840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="big-slide__content">
                    <div className="big-slide__collection">
                      <h3>
                        DoodlePunkX
                        <span>
                          <div className="collection-checkmark">
                            <img
                              alt="Verified"
                              loading="lazy"
                              width="18"
                              height="18"
                              decoding="async"
                              data-nimg="1"
                              className="icon-verified"
                              src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </span>
                      </h3>
                    </div>
                    <div className="big-slide__price">
                      <div className="price price-element white">
                        <h4 className="heading-4 price__label"> Floor:</h4>
                        <h4 className="heading-4">
                          <i className="price-currency-icon"></i> 11
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="big-slide__boosts">
                    <span className="big-slide__boosts__rank">Rank 5</span>
                    <span className="big-slide__boosts__burnt">
                      <img
                        alt="oxp"
                        width="14"
                        height="14"
                        decoding="async"
                        data-nimg="1"
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMjg2MjkgMjAuODA1OEg0LjI3MDIzQzMuNTYzODggMjAuNzMwOCAyLjk4NTk1IDIwLjQzNjEgMi42MzI3OCAxOS45N0MwLjkzMTEwNCAxNy44Mzc4IDAgMTUuMTQ4NSAwIDEyLjQwNTZDMCA5LjY2MjYzIDAuOTMxMTA0IDYuOTc4NjQgMi42Mjc0MiA0Ljg0NjQ1QzMuMDEyNzEgNC4zMzIxNSAzLjY0NDE1IDQuMDE2MDcgNC4yODYyOSA0LjAxMDcxQzQuMzQ1MTUgNC4wMDUzNiA0LjQwNDAxIDQgNC40NjgyMyA0QzUuMDQwOCA0IDUuNjA4MDMgNC4yNTE3OSA2LjA1NzUyIDQuNzAxOEwxMC4zNTQ1IDkuMDAzNjlDMTAuNzk4NyA5LjQ0ODM0IDExLjM4MTkgOS42ODk0MiAxMi4wMDI3IDkuNjg5NDJDMTIuNjIzNCA5LjY4OTQyIDEzLjIwNjcgOS40NDI5OSAxMy42NTA4IDkuMDAzNjlMMTcuOTQyNSA0LjcwMThDMTguMzkyIDQuMjU3MTUgMTkuMDEyNyA0LjAwNTM2IDE5LjY5NzcgNC4wMDUzNkgxOS43MzUxQzIwLjQ0MTUgNC4wODAzNiAyMS4wMTk0IDQuMzc1MDEgMjEuMzcyNiA0Ljg0MTA5QzIzLjA2MzUgNi45NzMyOCAyNCA5LjY0MTIgMjQgMTIuMzUyQzI0IDE1LjA2MjggMjMuMDY4OSAxNy43Nzg5IDIxLjM3MjYgMTkuODYyOUMyMC45ODczIDIwLjM3MTggMjAuMzU1OSAyMC42OTMzIDE5LjcxMzcgMjAuNjk4NkMxOS42NTQ4IDIwLjcwNCAxOS41OTYgMjAuNzA5MyAxOS41MzE4IDIwLjcwOTNDMTguOTU5MiAyMC43MDkzIDE4LjM5MiAyMC40NTc1IDE3Ljk0MjUgMjAuMDA3NUwxMy42NDU1IDE1LjcwNTZDMTMuMjAxMyAxNS4yNjEgMTIuNjE4MSAxNS4wMTk5IDExLjk5NzMgMTUuMDE5OUMxMS4zNzY2IDE1LjAxOTkgMTAuNzkzMyAxNS4yNjYzIDEwLjM0OTIgMTUuNzA1Nkw2LjA1NzUyIDIwLjAwMjJDNS41ODY2MiAyMC41MzI1IDUuMDE0MDUgMjAuODExMSA0LjQwNDAxIDIwLjgxMTFINC4yODA5NEw0LjI4NjI5IDIwLjgwNThaTTExLjk0OTIgMTIuNzc1MkMxMy4yMTIgMTIuNzc1MiAxNC40IDEzLjI2ODEgMTUuMjkzNiAxNC4xNjI3TDE5LjQ3ODMgMTguMzUyMUMyMC44MTYxIDE2LjY3NTMgMjEuNTU0NSAxNC41NjQ1IDIxLjU1NDUgMTIuNDA1NkMyMS41NTQ1IDEwLjI0NjYgMjAuODM3NSA4LjIxMDgxIDE5LjQ3ODMgNi40NTg5OUwxNS4yOTM2IDEwLjY0ODRDMTQuNCAxMS41NDMgMTMuMjEyIDEyLjAzNTkgMTEuOTQ5MiAxMi4wMzU5QzEwLjY4NjMgMTIuMDM1OSA5LjQ5ODMzIDExLjU0MyA4LjYwNDY4IDEwLjY0ODRMNC40MTQ3MiA2LjQ1ODk5QzMuMDc2OTIgOC4xMzU4MSAyLjMzODQ2IDEwLjI0NjYgMi4zMzg0NiAxMi40MDU2QzIuMzM4NDYgMTQuNTY0NSAzLjA1NTUyIDE2LjYwMDMgNC40MTQ3MiAxOC4zNTIxTDguNTk5MzMgMTQuMTYyN0M5LjQ5Mjk4IDEzLjI2ODEgMTAuNjgwOSAxMi43NzUyIDExLjk0MzggMTIuNzc1MkgxMS45NDkyWiIgZmlsbD0iIzgxODE4OCIvPgo8L3N2Zz4K"
                        style={{ color: "transparent" }}
                      />
                      246 Burnt
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-active"
            style={{ width: "420.5px", marginRight: "15px" }}
          >
            <div className="big-slide">
              <a href="/collection/doodlepunkchicx/">
                <div className="big-slide__data">
                  <div className="big-slide__image">
                    <img
                      alt="hero-slider"
                      fetchpriority="high"
                      width="420"
                      height="420"
                      decoding="async"
                      data-nimg="1"
                      className="hero-slider_img"
                      src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1687597477410doodlepunkchicx-profile.png&amp;width=840&amp;height=840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="big-slide__content">
                    <div className="big-slide__collection">
                      <h3>
                        DoodlePunkChicX
                        <span>
                          <div className="collection-checkmark">
                            <img
                              alt="Verified"
                              loading="lazy"
                              width="18"
                              height="18"
                              decoding="async"
                              data-nimg="1"
                              className="icon-verified"
                              src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </span>
                      </h3>
                    </div>
                    <div className="big-slide__price">
                      <div className="price price-element white">
                        <h4 className="heading-4 price__label"> Floor:</h4>
                        <h4 className="heading-4">
                          <i className="price-currency-icon"></i> 11
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="big-slide__boosts">
                    <span className="big-slide__boosts__rank">Rank 6</span>
                    <span className="big-slide__boosts__burnt">
                      <img
                        alt="oxp"
                        width="14"
                        height="14"
                        decoding="async"
                        data-nimg="1"
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMjg2MjkgMjAuODA1OEg0LjI3MDIzQzMuNTYzODggMjAuNzMwOCAyLjk4NTk1IDIwLjQzNjEgMi42MzI3OCAxOS45N0MwLjkzMTEwNCAxNy44Mzc4IDAgMTUuMTQ4NSAwIDEyLjQwNTZDMCA5LjY2MjYzIDAuOTMxMTA0IDYuOTc4NjQgMi42Mjc0MiA0Ljg0NjQ1QzMuMDEyNzEgNC4zMzIxNSAzLjY0NDE1IDQuMDE2MDcgNC4yODYyOSA0LjAxMDcxQzQuMzQ1MTUgNC4wMDUzNiA0LjQwNDAxIDQgNC40NjgyMyA0QzUuMDQwOCA0IDUuNjA4MDMgNC4yNTE3OSA2LjA1NzUyIDQuNzAxOEwxMC4zNTQ1IDkuMDAzNjlDMTAuNzk4NyA5LjQ0ODM0IDExLjM4MTkgOS42ODk0MiAxMi4wMDI3IDkuNjg5NDJDMTIuNjIzNCA5LjY4OTQyIDEzLjIwNjcgOS40NDI5OSAxMy42NTA4IDkuMDAzNjlMMTcuOTQyNSA0LjcwMThDMTguMzkyIDQuMjU3MTUgMTkuMDEyNyA0LjAwNTM2IDE5LjY5NzcgNC4wMDUzNkgxOS43MzUxQzIwLjQ0MTUgNC4wODAzNiAyMS4wMTk0IDQuMzc1MDEgMjEuMzcyNiA0Ljg0MTA5QzIzLjA2MzUgNi45NzMyOCAyNCA5LjY0MTIgMjQgMTIuMzUyQzI0IDE1LjA2MjggMjMuMDY4OSAxNy43Nzg5IDIxLjM3MjYgMTkuODYyOUMyMC45ODczIDIwLjM3MTggMjAuMzU1OSAyMC42OTMzIDE5LjcxMzcgMjAuNjk4NkMxOS42NTQ4IDIwLjcwNCAxOS41OTYgMjAuNzA5MyAxOS41MzE4IDIwLjcwOTNDMTguOTU5MiAyMC43MDkzIDE4LjM5MiAyMC40NTc1IDE3Ljk0MjUgMjAuMDA3NUwxMy42NDU1IDE1LjcwNTZDMTMuMjAxMyAxNS4yNjEgMTIuNjE4MSAxNS4wMTk5IDExLjk5NzMgMTUuMDE5OUMxMS4zNzY2IDE1LjAxOTkgMTAuNzkzMyAxNS4yNjYzIDEwLjM0OTIgMTUuNzA1Nkw2LjA1NzUyIDIwLjAwMjJDNS41ODY2MiAyMC41MzI1IDUuMDE0MDUgMjAuODExMSA0LjQwNDAxIDIwLjgxMTFINC4yODA5NEw0LjI4NjI5IDIwLjgwNThaTTExLjk0OTIgMTIuNzc1MkMxMy4yMTIgMTIuNzc1MiAxNC40IDEzLjI2ODEgMTUuMjkzNiAxNC4xNjI3TDE5LjQ3ODMgMTguMzUyMUMyMC44MTYxIDE2LjY3NTMgMjEuNTU0NSAxNC41NjQ1IDIxLjU1NDUgMTIuNDA1NkMyMS41NTQ1IDEwLjI0NjYgMjAuODM3NSA4LjIxMDgxIDE5LjQ3ODMgNi40NTg5OUwxNS4yOTM2IDEwLjY0ODRDMTQuNCAxMS41NDMgMTMuMjEyIDEyLjAzNTkgMTEuOTQ5MiAxMi4wMzU5QzEwLjY4NjMgMTIuMDM1OSA5LjQ5ODMzIDExLjU0MyA4LjYwNDY4IDEwLjY0ODRMNC40MTQ3MiA2LjQ1ODk5QzMuMDc2OTIgOC4xMzU4MSAyLjMzODQ2IDEwLjI0NjYgMi4zMzg0NiAxMi40MDU2QzIuMzM4NDYgMTQuNTY0NSAzLjA1NTUyIDE2LjYwMDMgNC40MTQ3MiAxOC4zNTIxTDguNTk5MzMgMTQuMTYyN0M5LjQ5Mjk4IDEzLjI2ODEgMTAuNjgwOSAxMi43NzUyIDExLjk0MzggMTIuNzc1MkgxMS45NDkyWiIgZmlsbD0iIzgxODE4OCIvPgo8L3N2Zz4K"
                        style={{ color: "transparent" }}
                      />
                      237 Burnt
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-next"
            style={{ width: "420.5px", marginRight: "15px" }}
          >
            <div className="big-slide">
              <a href="/collection/doodlepunkpetz/">
                <div className="big-slide__data">
                  <div className="big-slide__image">
                    <img
                      alt="hero-slider"
                      fetchpriority="high"
                      width="420"
                      height="420"
                      decoding="async"
                      data-nimg="1"
                      className="hero-slider_img"
                      src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1704895352057front.png&amp;width=840&amp;height=840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="big-slide__content">
                    <div className="big-slide__collection">
                      <h3>
                        DoodlePunkPetz
                        <span>
                          <div className="collection-checkmark">
                            <img
                              alt="Verified"
                              loading="lazy"
                              width="18"
                              height="18"
                              decoding="async"
                              data-nimg="1"
                              className="icon-verified"
                              src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </span>
                      </h3>
                    </div>
                    <div className="big-slide__price">
                      <div className="price price-element white">
                        <h4 className="heading-4 price__label"> Floor:</h4>
                        <h4 className="heading-4">
                          <i className="price-currency-icon"></i> 8
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="big-slide__boosts">
                    <span className="big-slide__boosts__rank">Rank 7</span>
                    <span className="big-slide__boosts__burnt">
                      <img
                        alt="oxp"
                        width="14"
                        height="14"
                        decoding="async"
                        data-nimg="1"
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMjg2MjkgMjAuODA1OEg0LjI3MDIzQzMuNTYzODggMjAuNzMwOCAyLjk4NTk1IDIwLjQzNjEgMi42MzI3OCAxOS45N0MwLjkzMTEwNCAxNy44Mzc4IDAgMTUuMTQ4NSAwIDEyLjQwNTZDMCA5LjY2MjYzIDAuOTMxMTA0IDYuOTc4NjQgMi42Mjc0MiA0Ljg0NjQ1QzMuMDEyNzEgNC4zMzIxNSAzLjY0NDE1IDQuMDE2MDcgNC4yODYyOSA0LjAxMDcxQzQuMzQ1MTUgNC4wMDUzNiA0LjQwNDAxIDQgNC40NjgyMyA0QzUuMDQwOCA0IDUuNjA4MDMgNC4yNTE3OSA2LjA1NzUyIDQuNzAxOEwxMC4zNTQ1IDkuMDAzNjlDMTAuNzk4NyA5LjQ0ODM0IDExLjM4MTkgOS42ODk0MiAxMi4wMDI3IDkuNjg5NDJDMTIuNjIzNCA5LjY4OTQyIDEzLjIwNjcgOS40NDI5OSAxMy42NTA4IDkuMDAzNjlMMTcuOTQyNSA0LjcwMThDMTguMzkyIDQuMjU3MTUgMTkuMDEyNyA0LjAwNTM2IDE5LjY5NzcgNC4wMDUzNkgxOS43MzUxQzIwLjQ0MTUgNC4wODAzNiAyMS4wMTk0IDQuMzc1MDEgMjEuMzcyNiA0Ljg0MTA5QzIzLjA2MzUgNi45NzMyOCAyNCA5LjY0MTIgMjQgMTIuMzUyQzI0IDE1LjA2MjggMjMuMDY4OSAxNy43Nzg5IDIxLjM3MjYgMTkuODYyOUMyMC45ODczIDIwLjM3MTggMjAuMzU1OSAyMC42OTMzIDE5LjcxMzcgMjAuNjk4NkMxOS42NTQ4IDIwLjcwNCAxOS41OTYgMjAuNzA5MyAxOS41MzE4IDIwLjcwOTNDMTguOTU5MiAyMC43MDkzIDE4LjM5MiAyMC40NTc1IDE3Ljk0MjUgMjAuMDA3NUwxMy42NDU1IDE1LjcwNTZDMTMuMjAxMyAxNS4yNjEgMTIuNjE4MSAxNS4wMTk5IDExLjk5NzMgMTUuMDE5OUMxMS4zNzY2IDE1LjAxOTkgMTAuNzkzMyAxNS4yNjYzIDEwLjM0OTIgMTUuNzA1Nkw2LjA1NzUyIDIwLjAwMjJDNS41ODY2MiAyMC41MzI1IDUuMDE0MDUgMjAuODExMSA0LjQwNDAxIDIwLjgxMTFINC4yODA5NEw0LjI4NjI5IDIwLjgwNThaTTExLjk0OTIgMTIuNzc1MkMxMy4yMTIgMTIuNzc1MiAxNC40IDEzLjI2ODEgMTUuMjkzNiAxNC4xNjI3TDE5LjQ3ODMgMTguMzUyMUMyMC44MTYxIDE2LjY3NTMgMjEuNTU0NSAxNC41NjQ1IDIxLjU1NDUgMTIuNDA1NkMyMS41NTQ1IDEwLjI0NjYgMjAuODM3NSA4LjIxMDgxIDE5LjQ3ODMgNi40NTg5OUwxNS4yOTM2IDEwLjY0ODRDMTQuNCAxMS41NDMgMTMuMjEyIDEyLjAzNTkgMTEuOTQ5MiAxMi4wMzU5QzEwLjY4NjMgMTIuMDM1OSA5LjQ5ODMzIDExLjU0MyA4LjYwNDY4IDEwLjY0ODRMNC40MTQ3MiA2LjQ1ODk5QzMuMDc2OTIgOC4xMzU4MSAyLjMzODQ2IDEwLjI0NjYgMi4zMzg0NiAxMi40MDU2QzIuMzM4NDYgMTQuNTY0NSAzLjA1NTUyIDE2LjYwMDMgNC40MTQ3MiAxOC4zNTIxTDguNTk5MzMgMTQuMTYyN0M5LjQ5Mjk4IDEzLjI2ODEgMTAuNjgwOSAxMi43NzUyIDExLjk0MzggMTIuNzc1MkgxMS45NDkyWiIgZmlsbD0iIzgxODE4OCIvPgo8L3N2Zz4K"
                        style={{ color: "transparent" }}
                      />
                      237 Burnt
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            className="swiper-slide"
            style={{ width: "420.5px", marginRight: "15px" }}
          >
            <div className="big-slide">
              <a href="/collection/lamboxapes-veneno/">
                <div className="big-slide__data">
                  <div className="big-slide__image">
                    <img
                      alt="hero-slider"
                      fetchpriority="high"
                      width="420"
                      height="420"
                      decoding="async"
                      data-nimg="1"
                      className="hero-slider_img"
                      src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1714446036412photoroom_20240429_220030.png&amp;width=840&amp;height=840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="big-slide__content">
                    <div className="big-slide__collection">
                      <h3>
                        LamboXApes Veneno
                        <span>
                          <div className="collection-checkmark">
                            <img
                              alt="Verified"
                              loading="lazy"
                              width="18"
                              height="18"
                              decoding="async"
                              data-nimg="1"
                              className="icon-verified"
                              src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </span>
                      </h3>
                    </div>
                    <div className="big-slide__price">
                      <div className="price price-element white">
                        <h4 className="heading-4 price__label"> Floor:</h4>
                        <h4 className="heading-4">
                          <i className="price-currency-icon"></i> 30
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="big-slide__boosts">
                    <span className="big-slide__boosts__rank">Rank 8</span>
                    <span className="big-slide__boosts__burnt">
                      <img
                        alt="oxp"
                        width="14"
                        height="14"
                        decoding="async"
                        data-nimg="1"
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMjg2MjkgMjAuODA1OEg0LjI3MDIzQzMuNTYzODggMjAuNzMwOCAyLjk4NTk1IDIwLjQzNjEgMi42MzI3OCAxOS45N0MwLjkzMTEwNCAxNy44Mzc4IDAgMTUuMTQ4NSAwIDEyLjQwNTZDMCA5LjY2MjYzIDAuOTMxMTA0IDYuOTc4NjQgMi42Mjc0MiA0Ljg0NjQ1QzMuMDEyNzEgNC4zMzIxNSAzLjY0NDE1IDQuMDE2MDcgNC4yODYyOSA0LjAxMDcxQzQuMzQ1MTUgNC4wMDUzNiA0LjQwNDAxIDQgNC40NjgyMyA0QzUuMDQwOCA0IDUuNjA4MDMgNC4yNTE3OSA2LjA1NzUyIDQuNzAxOEwxMC4zNTQ1IDkuMDAzNjlDMTAuNzk4NyA5LjQ0ODM0IDExLjM4MTkgOS42ODk0MiAxMi4wMDI3IDkuNjg5NDJDMTIuNjIzNCA5LjY4OTQyIDEzLjIwNjcgOS40NDI5OSAxMy42NTA4IDkuMDAzNjlMMTcuOTQyNSA0LjcwMThDMTguMzkyIDQuMjU3MTUgMTkuMDEyNyA0LjAwNTM2IDE5LjY5NzcgNC4wMDUzNkgxOS43MzUxQzIwLjQ0MTUgNC4wODAzNiAyMS4wMTk0IDQuMzc1MDEgMjEuMzcyNiA0Ljg0MTA5QzIzLjA2MzUgNi45NzMyOCAyNCA5LjY0MTIgMjQgMTIuMzUyQzI0IDE1LjA2MjggMjMuMDY4OSAxNy43Nzg5IDIxLjM3MjYgMTkuODYyOUMyMC45ODczIDIwLjM3MTggMjAuMzU1OSAyMC42OTMzIDE5LjcxMzcgMjAuNjk4NkMxOS42NTQ4IDIwLjcwNCAxOS41OTYgMjAuNzA5MyAxOS41MzE4IDIwLjcwOTNDMTguOTU5MiAyMC43MDkzIDE4LjM5MiAyMC40NTc1IDE3Ljk0MjUgMjAuMDA3NUwxMy42NDU1IDE1LjcwNTZDMTMuMjAxMyAxNS4yNjEgMTIuNjE4MSAxNS4wMTk5IDExLjk5NzMgMTUuMDE5OUMxMS4zNzY2IDE1LjAxOTkgMTAuNzkzMyAxNS4yNjYzIDEwLjM0OTIgMTUuNzA1Nkw2LjA1NzUyIDIwLjAwMjJDNS41ODY2MiAyMC41MzI1IDUuMDE0MDUgMjAuODExMSA0LjQwNDAxIDIwLjgxMTFINC4yODA5NEw0LjI4NjI5IDIwLjgwNThaTTExLjk0OTIgMTIuNzc1MkMxMy4yMTIgMTIuNzc1MiAxNC40IDEzLjI2ODEgMTUuMjkzNiAxNC4xNjI3TDE5LjQ3ODMgMTguMzUyMUMyMC44MTYxIDE2LjY3NTMgMjEuNTU0NSAxNC41NjQ1IDIxLjU1NDUgMTIuNDA1NkMyMS41NTQ1IDEwLjI0NjYgMjAuODM3NSA4LjIxMDgxIDE5LjQ3ODMgNi40NTg5OUwxNS4yOTM2IDEwLjY0ODRDMTQuNCAxMS41NDMgMTMuMjEyIDEyLjAzNTkgMTEuOTQ5MiAxMi4wMzU5QzEwLjY4NjMgMTIuMDM1OSA5LjQ5ODMzIDExLjU0MyA4LjYwNDY4IDEwLjY0ODRMNC40MTQ3MiA2LjQ1ODk5QzMuMDc2OTIgOC4xMzU4MSAyLjMzODQ2IDEwLjI0NjYgMi4zMzg0NiAxMi40MDU2QzIuMzM4NDYgMTQuNTY0NSAzLjA1NTUyIDE2LjYwMDMgNC40MTQ3MiAxOC4zNTIxTDguNTk5MzMgMTQuMTYyN0M5LjQ5Mjk4IDEzLjI2ODEgMTAuNjgwOSAxMi43NzUyIDExLjk0MzggMTIuNzc1MkgxMS45NDkyWiIgZmlsbD0iIzgxODE4OCIvPgo8L3N2Zz4K"
                        style={{ color: "transparent" }}
                      />
                      210 Burnt
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            className="swiper-slide"
            style={{ width: "420.5px", marginRight: "15px" }}
          >
            <div className="big-slide">
              <a href="/collection/lamboxapes-sian/">
                <div className="big-slide__data">
                  <div className="big-slide__image">
                    <img
                      alt="hero-slider"
                      fetchpriority="high"
                      width="420"
                      height="420"
                      decoding="async"
                      data-nimg="1"
                      className="hero-slider_img"
                      src="https://marketplace-image.onxrp.com/?uri=https%3A%2F%2Fnftimg.onxrp.com%2F1714446489882photoroom_20240429_220759.png&amp;width=840&amp;height=840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="big-slide__content">
                    <div className="big-slide__collection">
                      <h3>
                        LamboXApes Sian
                        <span>
                          <div className="collection-checkmark">
                            <img
                              alt="Verified"
                              loading="lazy"
                              width="18"
                              height="18"
                              decoding="async"
                              data-nimg="1"
                              className="icon-verified"
                              src="https://nft.onxrp.com/images/icon-checked-circle-blue.svg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </span>
                      </h3>
                    </div>
                    <div className="big-slide__price">
                      <div className="price price-element white">
                        <h4 className="heading-4 price__label"> Floor:</h4>
                        <h4 className="heading-4">
                          <i className="price-currency-icon"></i> 27
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="big-slide__boosts">
                    <span className="big-slide__boosts__rank">Rank 9</span>
                    <span className="big-slide__boosts__burnt">
                      <img
                        alt="oxp"
                        width="14"
                        height="14"
                        decoding="async"
                        data-nimg="1"
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMjg2MjkgMjAuODA1OEg0LjI3MDIzQzMuNTYzODggMjAuNzMwOCAyLjk4NTk1IDIwLjQzNjEgMi42MzI3OCAxOS45N0MwLjkzMTEwNCAxNy44Mzc4IDAgMTUuMTQ4NSAwIDEyLjQwNTZDMCA5LjY2MjYzIDAuOTMxMTA0IDYuOTc4NjQgMi42Mjc0MiA0Ljg0NjQ1QzMuMDEyNzEgNC4zMzIxNSAzLjY0NDE1IDQuMDE2MDcgNC4yODYyOSA0LjAxMDcxQzQuMzQ1MTUgNC4wMDUzNiA0LjQwNDAxIDQgNC40NjgyMyA0QzUuMDQwOCA0IDUuNjA4MDMgNC4yNTE3OSA2LjA1NzUyIDQuNzAxOEwxMC4zNTQ1IDkuMDAzNjlDMTAuNzk4NyA5LjQ0ODM0IDExLjM4MTkgOS42ODk0MiAxMi4wMDI3IDkuNjg5NDJDMTIuNjIzNCA5LjY4OTQyIDEzLjIwNjcgOS40NDI5OSAxMy42NTA4IDkuMDAzNjlMMTcuOTQyNSA0LjcwMThDMTguMzkyIDQuMjU3MTUgMTkuMDEyNyA0LjAwNTM2IDE5LjY5NzcgNC4wMDUzNkgxOS43MzUxQzIwLjQ0MTUgNC4wODAzNiAyMS4wMTk0IDQuMzc1MDEgMjEuMzcyNiA0Ljg0MTA5QzIzLjA2MzUgNi45NzMyOCAyNCA5LjY0MTIgMjQgMTIuMzUyQzI0IDE1LjA2MjggMjMuMDY4OSAxNy43Nzg5IDIxLjM3MjYgMTkuODYyOUMyMC45ODczIDIwLjM3MTggMjAuMzU1OSAyMC42OTMzIDE5LjcxMzcgMjAuNjk4NkMxOS42NTQ4IDIwLjcwNCAxOS41OTYgMjAuNzA5MyAxOS41MzE4IDIwLjcwOTNDMTguOTU5MiAyMC43MDkzIDE4LjM5MiAyMC40NTc1IDE3Ljk0MjUgMjAuMDA3NUwxMy42NDU1IDE1LjcwNTZDMTMuMjAxMyAxNS4yNjEgMTIuNjE4MSAxNS4wMTk5IDExLjk5NzMgMTUuMDE5OUMxMS4zNzY2IDE1LjAxOTkgMTAuNzkzMyAxNS4yNjYzIDEwLjM0OTIgMTUuNzA1Nkw2LjA1NzUyIDIwLjAwMjJDNS41ODY2MiAyMC41MzI1IDUuMDE0MDUgMjAuODExMSA0LjQwNDAxIDIwLjgxMTFINC4yODA5NEw0LjI4NjI5IDIwLjgwNThaTTExLjk0OTIgMTIuNzc1MkMxMy4yMTIgMTIuNzc1MiAxNC40IDEzLjI2ODEgMTUuMjkzNiAxNC4xNjI3TDE5LjQ3ODMgMTguMzUyMUMyMC44MTYxIDE2LjY3NTMgMjEuNTU0NSAxNC41NjQ1IDIxLjU1NDUgMTIuNDA1NkMyMS41NTQ1IDEwLjI0NjYgMjAuODM3NSA4LjIxMDgxIDE5LjQ3ODMgNi40NTg5OUwxNS4yOTM2IDEwLjY0ODRDMTQuNCAxMS41NDMgMTMuMjEyIDEyLjAzNTkgMTEuOTQ5MiAxMi4wMzU5QzEwLjY4NjMgMTIuMDM1OSA5LjQ5ODMzIDExLjU0MyA4LjYwNDY4IDEwLjY0ODRMNC40MTQ3MiA2LjQ1ODk5QzMuMDc2OTIgOC4xMzU4MSAyLjMzODQ2IDEwLjI0NjYgMi4zMzg0NiAxMi40MDU2QzIuMzM4NDYgMTQuNTY0NSAzLjA1NTUyIDE2LjYwMDMgNC40MTQ3MiAxOC4zNTIxTDguNTk5MzMgMTQuMTYyN0M5LjQ5Mjk4IDEzLjI2ODEgMTAuNjgwOSAxMi43NzUyIDExLjk0MzggMTIuNzc1MkgxMS45NDkyWiIgZmlsbD0iIzgxODE4OCIvPgo8L3N2Zz4K"
                        style={{ color: "transparent" }}
                      />
                      205 Burnt
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="swiper-button-prev">
        <i className="chevron-left"></i>
      </button>
      <button
        type="button"
        className="swiper-button-next swiper-button-disabled"
        disabled=""
      >
        <i className="chevron-right"></i>
      </button>
    </section>
  );
};
export default Nfts;