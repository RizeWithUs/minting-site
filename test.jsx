const Test = () => {
  return (
    <div id="__next">
      <header
        id="js-site-header"
        className="site-header fixed fixed--scroll-effect"
      >
        <div className="container">
          <div className="navbar">
            <div className="navbar__desktop hide-on-xs">
              <a className="logo-wrapper" href="/">
                <img
                  alt="Logo"
                  width="157"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  className="logo"
                  style={{ color: "transparent" }}
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU3IiBoZWlnaHQ9IjI4IiB2aWV3Qm94PSIwIDAgMTU3IDI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ib254cHItbG9nby1saWdodC1tb2RlIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0iZ283andoY2t5YyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFRUUiIG9mZnNldD0iMCUiLz4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Q4RDhEOCIgb2Zmc2V0PSIxMDAlIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ii0uMDAxJSIgeTE9IjQ5Ljk5OCUiIHgyPSIxMDAuMDAxJSIgeTI9IjQ5Ljk5OCUiIGlkPSJ6cGdmcWR6aTFlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAzMDFGNyIgb2Zmc2V0PSIwJSIvPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjMwMUVBIiBvZmZzZXQ9IjEzJSIvPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNTAwMUQ4IiBvZmZzZXQ9IjMzJSIvPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNzMwMENBIiBvZmZzZXQ9IjUyJSIvPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOEMwMEMwIiBvZmZzZXQ9IjcwJSIvPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOUMwMEJBIiBvZmZzZXQ9Ijg3JSIvPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQTEwMEI4IiBvZmZzZXQ9IjEwMCUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik03LjEzMyAwYTMuMDQ2IDMuMDQ2IDAgMCAwLS4yMjYuMDE0Yy0uOTMzIDAtMS44NjcuNDYzLTIuNDI3IDEuMjA1QTIwLjUyNiAyMC41MjYgMCAwIDAgMCAxNC4wMDdjMCA0LjYzMyAxLjU4NyA5LjE3NCA0LjQ4IDEyLjc4OC41Ni43NDIgMS40OTQgMS4xMTIgMi40MjcgMS4yMDVoLjE4N2MuODQgMCAxLjY4LS4zNyAyLjQyNy0xLjIwNWw3LjU2LTcuNTA2YTQuNzU3IDQuNzU3IDAgMCAxIDYuNzIxIDBsNy41NiA3LjUwNmMuNzQ3Ljc0MiAxLjY4IDEuMTEyIDIuNjE0IDEuMDIuOTM0IDAgMS44NjctLjQ2NCAyLjQyNy0xLjIwNSAyLjg5NC0zLjUyMSA0LjQ4LTguMDYyIDQuNDgtMTIuNjk2IDAtNC41NC0xLjU4Ni05LjA4MS00LjQ4LTEyLjY5NUMzNS44NDMuNDc3IDM0LjkxLjEwNyAzMy45NzYuMDE0Yy0xLjAyNyAwLTEuOTYuMzctMi42MTMgMS4wMmwtNy41NjEgNy41MDVhNC43NTcgNC43NTcgMCAwIDEtNi43MiAwTDkuNTIgMS4wMzNDOC44NjQuMzgyIDguMDYzLjAxNiA3LjI0NSAwaC0uMTEyem0xOC42MyAxMC40ODYgNy41Ni03LjUwN2MuMTg3LS4wOTIuMjgtLjA5Mi4zNzMtLjA5Mi4wOTQgMCAuMTg3LjA5Mi4yOC4xODUgMi41MiAzLjE1IDMuOTIgNi45NSAzLjkyIDEwLjkzNSAwIDMuOTg1LTEuNCA3Ljg3Ny0zLjkyIDEwLjkzNS0uMDkzLjE4NS0uMTg2LjE4NS0uMjguMTg1LS4wOTMgMC0uMjggMC0uMzczLS4wOTJsLTcuNTYtNy41MDdjLTIuOTg4LTIuOTY1LTcuODQxLTIuOTY1LTEwLjgyOCAwbC03LjU2MSA3LjUwN2MtLjE4Ny4wOTItLjI4LjA5Mi0uMzczLjA5Mi0uMDk0IDAtLjE4Ny0uMDkyLS4yOC0uMTg1LTIuNTItMy4xNS0zLjkyLTYuOTUtMy45Mi0xMC45MzUgMC0zLjk4NSAxLjQtNy44NzcgMy45Mi0xMC45MzUuMDkzLS4xODUuMjgtLjE4NS4zNzMtLjE4NSAwIDAgLjE4NyAwIC4yOC4wOTJsNy41NiA3LjUwN2E3LjY2IDcuNjYgMCAwIDAgNS40MTQgMi4yMjQgNy42NiA3LjY2IDAgMCAwIDUuNDE0LTIuMjI0eiIgaWQ9InNnYTlubTV4eWEiLz4KICAgICAgICA8cGF0aCBkPSJNNy4xMzMgMGEzLjA0NiAzLjA0NiAwIDAgMC0uMjI2LjAxNGMtLjkzMyAwLTEuODY3LjQ2My0yLjQyNyAxLjIwNUEyMC41MjYgMjAuNTI2IDAgMCAwIDAgMTQuMDA3YzAgNC42MzMgMS41ODcgOS4xNzQgNC40OCAxMi43ODguNTYuNzQyIDEuNDk0IDEuMTEyIDIuNDI3IDEuMjA1aC4xODdjLjg0IDAgMS42OC0uMzcgMi40MjctMS4yMDVsNy41Ni03LjUwNmE0Ljc1NyA0Ljc1NyAwIDAgMSA2LjcyMSAwbDcuNTYgNy41MDZjLjc0Ny43NDIgMS42OCAxLjExMiAyLjYxNCAxLjAyLjkzNCAwIDEuODY3LS40NjQgMi40MjctMS4yMDUgMi44OTQtMy41MjEgNC40OC04LjA2MiA0LjQ4LTEyLjY5NiAwLTQuNTQtMS41ODYtOS4wODEtNC40OC0xMi42OTVDMzUuODQzLjQ3NyAzNC45MS4xMDcgMzMuOTc2LjAxNGMtMS4wMjcgMC0xLjk2LjM3LTIuNjEzIDEuMDJsLTcuNTYxIDcuNTA1YTQuNzU3IDQuNzU3IDAgMCAxLTYuNzIgMEw5LjUyIDEuMDMzQzguODY0LjM4MiA4LjA2My4wMTYgNy4yNDUgMGgtLjExMnptMTguNjMgMTAuNDg2IDcuNTYtNy41MDdjLjE4Ny0uMDkyLjI4LS4wOTIuMzczLS4wOTIuMDk0IDAgLjE4Ny4wOTIuMjguMTg1IDIuNTIgMy4xNSAzLjkyIDYuOTUgMy45MiAxMC45MzUgMCAzLjk4NS0xLjQgNy44NzctMy45MiAxMC45MzUtLjA5My4xODUtLjE4Ni4xODUtLjI4LjE4NS0uMDkzIDAtLjI4IDAtLjM3My0uMDkybC03LjU2LTcuNTA3Yy0yLjk4OC0yLjk2NS03Ljg0MS0yLjk2NS0xMC44MjggMGwtNy41NjEgNy41MDdjLS4xODcuMDkyLS4yOC4wOTItLjM3My4wOTItLjA5NCAwLS4xODctLjA5Mi0uMjgtLjE4NS0yLjUyLTMuMTUtMy45Mi02Ljk1LTMuOTItMTAuOTM1IDAtMy45ODUgMS40LTcuODc3IDMuOTItMTAuOTM1LjA5My0uMTg1LjI4LS4xODUuMzczLS4xODUgMCAwIC4xODcgMCAuMjguMDkybDcuNTYgNy41MDdhNy42NiA3LjY2IDAgMCAwIDUuNDE0IDIuMjI0IDcuNjYgNy42NiAwIDAgMCA1LjQxNC0yLjIyNHoiIGlkPSJvMDNnMDd0ejNkIi8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnPgogICAgICAgICAgICA8bWFzayBpZD0iZ204cjQ5aG1kYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNzZ2E5bm01eHlhIi8+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPGcgbWFzaz0idXJsKCNnbThyNDlobWRiKSI+CiAgICAgICAgICAgICAgICA8dXNlIGZpbGw9InVybCgjZ283andoY2t5YykiIHhsaW5rOmhyZWY9IiNvMDNnMDd0ejNkIi8+CiAgICAgICAgICAgICAgICA8dXNlIGZpbGw9InVybCgjenBnZnFkemkxZSkiIHhsaW5rOmhyZWY9IiNvMDNnMDd0ejNkIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgZmlsbD0iIzE3MTczMyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Im0xMDYuNjkgMTEuNTk4LTYuNDQxLTYuMzAyaC0yLjMzNFY3LjUybDYuNDQgNi4zOTQtNi40NCA2LjMwMnYyLjQxaDIuMTQ3bDYuNjI3LTYuNDg4IDYuNjI3IDYuNDg3aDIuMTQ3di0yLjQxbC02LjQ0LTYuMyA2LjQ0LTYuMzk1VjUuMjk2aC0yLjMzM3pNNzIuMjQ2IDE4LjU0OGMtLjU2LjU1Ni0xLjMwNy45MjYtMi4xNDcuOTI2aC0yLjUyYy0uODQgMC0xLjQ5My0uMjc4LTIuMTQ3LS45MjYtLjU2LS41NTYtLjkzMy0xLjI5OC0uOTMzLTIuMTMyIDAtLjgzNC4yOC0xLjU3NS45MzMtMi4xMzEuNTYtLjU1NiAxLjMwNy0uODM0IDIuMTQ3LS44MzRoMi41MmMuODQgMCAxLjQ5NC4yNzggMi4xNDcuODM0LjU2LjU1Ni45MzQgMS4yOTcuOTM0IDIuMTMxIDAgLjgzNC0uMjggMS41NzYtLjkzNCAyLjEzMm0xLjAyNy03LjUwNmMtLjkzNC0uNTU2LTIuMDU0LS44MzQtMy4xNzQtLjgzNGgtMi41MmMtMS4xMiAwLTIuMTQ3LjI3OC0zLjE3NC44MzQtLjkzMy41NTYtMS43NzMgMS4yOTctMi4yNCAyLjIyNC0uNTYuOTI2LS44NCAyLjAzOC0uODQgMy4xNXMuMjggMi4xMzIuODQgMy4xNTFjLjU2LjkyNyAxLjMwNyAxLjc2IDIuMjQgMi4yMjQuOTM0LjU1NiAyLjA1NC44MzQgMy4xNzQuODM0aDIuNTJjMS4xMiAwIDIuMTQ3LS4yNzggMy4xNzQtLjgzNC45MzMtLjU1NiAxLjc3My0xLjI5NyAyLjI0LTIuMjI0LjU2LS45MjcuODQtMi4wMzkuODQtMy4xNSAwLTEuMTEzLS4yOC0yLjEzMi0uODQtMy4xNTEtLjQ2Ny0uOTI3LTEuMjEzLTEuNjY4LTIuMjQtMi4yMjRNMTUzLjM2IDEyLjg5NWMtLjI4LjQ2My0uNjU0LjgzNC0xLjEyIDEuMTEyLS40NjcuMjc4LTEuMDI3LjM3LTEuNDk0LjM3aC04LjAyN1Y4LjU0aDguMDI3Yy41NiAwIDEuMDI3LjA5MyAxLjQ5NC4zNzEuNDY2LjI3OC44NC41NTYgMS4xMiAxLjAyLjI4LjQ2My40NjYuOTI2LjQ2NiAxLjM5IDAgLjU1Ni0uMTg2IDEuMTEyLS40NjYgMS41NzVtMi44LTQuNTRhNi40MTIgNi40MTIgMCAwIDAtMi4yNC0yLjIyNSA1LjkwNyA1LjkwNyAwIDAgMC0zLjA4LS44MzRoLTExLjI5NXYxNy4zM2gzLjI2N3YtNS4wOThoOC4wMjdjMS4xMiAwIDIuMTQ3LS4yNzggMy4wOC0uODM0YTYuNDEyIDYuNDEyIDAgMCAwIDIuMjQtMi4yMjRjLjU2MS0uOTI2Ljg0MS0yLjAzOC44NDEtMy4wNThhNS44IDUuOCAwIDAgMC0uODQtMy4wNThNMTMyLjYzOCAxMi44OTVjLS4yOC40NjMtLjY1My44MzQtMS4xMiAxLjExMi0uNDY3LjI3OC0uOTM0LjM3LTEuNDk0LjM3aC04LjEyVjguNTRoOC4wMjdjLjU2IDAgMS4wMjcuMDkzIDEuNDkzLjM3MS40NjcuMjc4Ljg0LjU1NiAxLjEyIDEuMDIuMjguNDYzLjQ2Ny45MjYuNDY3IDEuMzkuMDk0LjU1Ni0uMDkzIDEuMTEyLS4zNzMgMS41NzVtMi43MDcgMS41NzVjLjU2LS45MjYuODQtMi4wMzguODQtMy4wNThhNS44IDUuOCAwIDAgMC0uODQtMy4wNTggNi40MTIgNi40MTIgMCAwIDAtMi4yNC0yLjIyNCA1LjkwNyA1LjkwNyAwIDAgMC0zLjA4LS44MzRIMTE4LjczdjE3LjMzaDMuMjY3di01LjA5OGg1Ljc4N2w1LjIyNyA1LjA5N2gzLjI2N3YtMS4yOTdsLTQuMi00LjE3Yy4zNzMtLjA5My43NDctLjI3OCAxLjEyLS40NjRhNy4wMjUgNy4wMjUgMCAwIDAgMi4xNDctMi4yMjRNOTEuNTY4IDExLjA0MmMtLjkzNC0uNTU2LTIuMDU0LS44MzQtMy4xNzQtLjgzNGgtMi41MmMtMS4xMiAwLTIuMTQ3LjI3OC0yLjk4Ny43NHYtLjc0SDc5LjYydjEyLjQxN2gzLjI2N3YtNi4yMDljMC0uODM0LjI4LTEuNDgyLjg0LTIuMTMxLjU2LS41NTYgMS4zMDctLjgzNCAyLjE0Ny0uODM0aDIuNTJjLjg0IDAgMS41ODcuMjc4IDIuMTQ3LjgzNC41Ni41NTYuODQgMS4yOTcuODQgMi4xMzF2Ni4yMWgzLjI2N3YtNi4yMWMwLTEuMTEyLS4yOC0yLjEzMS0uODQtMy4xNS0uNDY3LS45MjctMS4zMDctMS42NjgtMi4yNC0yLjIyNCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                />
              </a>
              <nav>
                <a className="nav-item " href="/explore/">
                  explore
                </a>
                <a className="nav-item " href="/statistics/">
                  Statistics
                </a>
                <a className="nav-item " href="/launchpad/">
                  launchpad
                </a>
              </nav>
              <div className="react-select-wrapper">
                <div className="react-select-container css-b62m3t-container">
                  <span
                    id="react-select-onXRPSearch-live-region"
                    className="css-7pg0cj-a11yText"
                  ></span>
                  <span
                    aria-live="polite"
                    aria-atomic="false"
                    aria-relevant="additions text"
                    role="log"
                    className="css-7pg0cj-a11yText"
                  ></span>
                  <div className="react-select__control css-13cymwt-control">
                    <img
                      alt="search icon"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent", marginLeft: "12px" }}
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMzMzMzMgMTQuMTY2N0MxMS41NTUgMTQuMTY2NyAxNC4xNjY3IDExLjU1NSAxNC4xNjY3IDguMzMzMzNDMTQuMTY2NyA1LjExMTY3IDExLjU1NSAyLjUgOC4zMzMzMyAyLjVDNS4xMTE2NyAyLjUgMi41IDUuMTExNjcgMi41IDguMzMzMzNDMi41IDExLjU1NSA1LjExMTY3IDE0LjE2NjcgOC4zMzMzMyAxNC4xNjY3WiIgc3Ryb2tlPSIjOUM5Q0E4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNy41IDE3LjVMMTIuNSAxMi41IiBzdHJva2U9IiM5QzlDQTgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                    />
                    <div className="react-select__value-container css-hlgwow">
                      <div
                        className="react-select__placeholder css-1jqq78o-placeholder"
                        id="react-select-onXRPSearch-placeholder"
                      >
                        NFTs, collections and users
                      </div>
                      <div
                        className="react-select__input-container css-u5u7qf"
                        data-value=""
                      >
                        <input
                          className="react-select__input"
                          style={{
                            label: "input",
                            color: "inherit",
                            background: 0,
                            opacity: 1,
                            width: "100%",
                            gridArea: "1 / 2",
                            font: "inherit",
                            minWidth: "2px",
                            border: 0,
                            margin: 0,
                            outline: 0,
                            padding: 0,
                          }}
                          autocapitalize="none"
                          autocomplete="off"
                          autocorrect="off"
                          id="react-select-onXRPSearch-input"
                          spellcheck="false"
                          tabindex="0"
                          type="search"
                          aria-autocomplete="list"
                          aria-expanded="false"
                          aria-haspopup="true"
                          role="combobox"
                          aria-activedescendant=""
                          aria-describedby="react-select-onXRPSearch-placeholder"
                          enterkeyhint="go"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="react-select__indicators css-1wy0on6"></div>
                  </div>
                </div>
              </div>
              <div className="nav-wrapper-container ">
                <div className="nav-wrapper">
                  <div className="theme-mode-toggle-switch-button">
                    <button type="button" className="slider-wrapper">
                      <span className="slider"></span>
                    </button>
                  </div>
                  <div className="navbar__btns">
                    <button className="btn btn--primary" aria-label="Log In">
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar__mobile">
              <div className="navbar__mobile-top">
                <a className="logo-wrapper" href="/">
                  <img
                    alt="Logo"
                    width="157"
                    height="28"
                    decoding="async"
                    data-nimg="1"
                    className="logo"
                    style={{ color: "transparent" }}
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU3IiBoZWlnaHQ9IjI4IiB2aWV3Qm94PSIwIDAgMTU3IDI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ib254cHItbG9nby1saWdodC1tb2RlIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0iZ283andoY2t5YyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFRUUiIG9mZnNldD0iMCUiLz4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Q4RDhEOCIgb2Zmc2V0PSIxMDAlIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ii0uMDAxJSIgeTE9IjQ5Ljk5OCUiIHgyPSIxMDAuMDAxJSIgeTI9IjQ5Ljk5OCUiIGlkPSJ6cGdmcWR6aTFlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAzMDFGNyIgb2Zmc2V0PSIwJSIvPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjMwMUVBIiBvZmZzZXQ9IjEzJSIvPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNTAwMUQ4IiBvZmZzZXQ9IjMzJSIvPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNzMwMENBIiBvZmZzZXQ9IjUyJSIvPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOEMwMEMwIiBvZmZzZXQ9IjcwJSIvPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOUMwMEJBIiBvZmZzZXQ9Ijg3JSIvPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQTEwMEI4IiBvZmZzZXQ9IjEwMCUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik03LjEzMyAwYTMuMDQ2IDMuMDQ2IDAgMCAwLS4yMjYuMDE0Yy0uOTMzIDAtMS44NjcuNDYzLTIuNDI3IDEuMjA1QTIwLjUyNiAyMC41MjYgMCAwIDAgMCAxNC4wMDdjMCA0LjYzMyAxLjU4NyA5LjE3NCA0LjQ4IDEyLjc4OC41Ni43NDIgMS40OTQgMS4xMTIgMi40MjcgMS4yMDVoLjE4N2MuODQgMCAxLjY4LS4zNyAyLjQyNy0xLjIwNWw3LjU2LTcuNTA2YTQuNzU3IDQuNzU3IDAgMCAxIDYuNzIxIDBsNy41NiA3LjUwNmMuNzQ3Ljc0MiAxLjY4IDEuMTEyIDIuNjE0IDEuMDIuOTM0IDAgMS44NjctLjQ2NCAyLjQyNy0xLjIwNSAyLjg5NC0zLjUyMSA0LjQ4LTguMDYyIDQuNDgtMTIuNjk2IDAtNC41NC0xLjU4Ni05LjA4MS00LjQ4LTEyLjY5NUMzNS44NDMuNDc3IDM0LjkxLjEwNyAzMy45NzYuMDE0Yy0xLjAyNyAwLTEuOTYuMzctMi42MTMgMS4wMmwtNy41NjEgNy41MDVhNC43NTcgNC43NTcgMCAwIDEtNi43MiAwTDkuNTIgMS4wMzNDOC44NjQuMzgyIDguMDYzLjAxNiA3LjI0NSAwaC0uMTEyem0xOC42MyAxMC40ODYgNy41Ni03LjUwN2MuMTg3LS4wOTIuMjgtLjA5Mi4zNzMtLjA5Mi4wOTQgMCAuMTg3LjA5Mi4yOC4xODUgMi41MiAzLjE1IDMuOTIgNi45NSAzLjkyIDEwLjkzNSAwIDMuOTg1LTEuNCA3Ljg3Ny0zLjkyIDEwLjkzNS0uMDkzLjE4NS0uMTg2LjE4NS0uMjguMTg1LS4wOTMgMC0uMjggMC0uMzczLS4wOTJsLTcuNTYtNy41MDdjLTIuOTg4LTIuOTY1LTcuODQxLTIuOTY1LTEwLjgyOCAwbC03LjU2MSA3LjUwN2MtLjE4Ny4wOTItLjI4LjA5Mi0uMzczLjA5Mi0uMDk0IDAtLjE4Ny0uMDkyLS4yOC0uMTg1LTIuNTItMy4xNS0zLjkyLTYuOTUtMy45Mi0xMC45MzUgMC0zLjk4NSAxLjQtNy44NzcgMy45Mi0xMC45MzUuMDkzLS4xODUuMjgtLjE4NS4zNzMtLjE4NSAwIDAgLjE4NyAwIC4yOC4wOTJsNy41NiA3LjUwN2E3LjY2IDcuNjYgMCAwIDAgNS40MTQgMi4yMjQgNy42NiA3LjY2IDAgMCAwIDUuNDE0LTIuMjI0eiIgaWQ9InNnYTlubTV4eWEiLz4KICAgICAgICA8cGF0aCBkPSJNNy4xMzMgMGEzLjA0NiAzLjA0NiAwIDAgMC0uMjI2LjAxNGMtLjkzMyAwLTEuODY3LjQ2My0yLjQyNyAxLjIwNUEyMC41MjYgMjAuNTI2IDAgMCAwIDAgMTQuMDA3YzAgNC42MzMgMS41ODcgOS4xNzQgNC40OCAxMi43ODguNTYuNzQyIDEuNDk0IDEuMTEyIDIuNDI3IDEuMjA1aC4xODdjLjg0IDAgMS42OC0uMzcgMi40MjctMS4yMDVsNy41Ni03LjUwNmE0Ljc1NyA0Ljc1NyAwIDAgMSA2LjcyMSAwbDcuNTYgNy41MDZjLjc0Ny43NDIgMS42OCAxLjExMiAyLjYxNCAxLjAyLjkzNCAwIDEuODY3LS40NjQgMi40MjctMS4yMDUgMi44OTQtMy41MjEgNC40OC04LjA2MiA0LjQ4LTEyLjY5NiAwLTQuNTQtMS41ODYtOS4wODEtNC40OC0xMi42OTVDMzUuODQzLjQ3NyAzNC45MS4xMDcgMzMuOTc2LjAxNGMtMS4wMjcgMC0xLjk2LjM3LTIuNjEzIDEuMDJsLTcuNTYxIDcuNTA1YTQuNzU3IDQuNzU3IDAgMCAxLTYuNzIgMEw5LjUyIDEuMDMzQzguODY0LjM4MiA4LjA2My4wMTYgNy4yNDUgMGgtLjExMnptMTguNjMgMTAuNDg2IDcuNTYtNy41MDdjLjE4Ny0uMDkyLjI4LS4wOTIuMzczLS4wOTIuMDk0IDAgLjE4Ny4wOTIuMjguMTg1IDIuNTIgMy4xNSAzLjkyIDYuOTUgMy45MiAxMC45MzUgMCAzLjk4NS0xLjQgNy44NzctMy45MiAxMC45MzUtLjA5My4xODUtLjE4Ni4xODUtLjI4LjE4NS0uMDkzIDAtLjI4IDAtLjM3My0uMDkybC03LjU2LTcuNTA3Yy0yLjk4OC0yLjk2NS03Ljg0MS0yLjk2NS0xMC44MjggMGwtNy41NjEgNy41MDdjLS4xODcuMDkyLS4yOC4wOTItLjM3My4wOTItLjA5NCAwLS4xODctLjA5Mi0uMjgtLjE4NS0yLjUyLTMuMTUtMy45Mi02Ljk1LTMuOTItMTAuOTM1IDAtMy45ODUgMS40LTcuODc3IDMuOTItMTAuOTM1LjA5My0uMTg1LjI4LS4xODUuMzczLS4xODUgMCAwIC4xODcgMCAuMjguMDkybDcuNTYgNy41MDdhNy42NiA3LjY2IDAgMCAwIDUuNDE0IDIuMjI0IDcuNjYgNy42NiAwIDAgMCA1LjQxNC0yLjIyNHoiIGlkPSJvMDNnMDd0ejNkIi8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnPgogICAgICAgICAgICA8bWFzayBpZD0iZ204cjQ5aG1kYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNzZ2E5bm01eHlhIi8+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPGcgbWFzaz0idXJsKCNnbThyNDlobWRiKSI+CiAgICAgICAgICAgICAgICA8dXNlIGZpbGw9InVybCgjZ283andoY2t5YykiIHhsaW5rOmhyZWY9IiNvMDNnMDd0ejNkIi8+CiAgICAgICAgICAgICAgICA8dXNlIGZpbGw9InVybCgjenBnZnFkemkxZSkiIHhsaW5rOmhyZWY9IiNvMDNnMDd0ejNkIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgZmlsbD0iIzE3MTczMyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Im0xMDYuNjkgMTEuNTk4LTYuNDQxLTYuMzAyaC0yLjMzNFY3LjUybDYuNDQgNi4zOTQtNi40NCA2LjMwMnYyLjQxaDIuMTQ3bDYuNjI3LTYuNDg4IDYuNjI3IDYuNDg3aDIuMTQ3di0yLjQxbC02LjQ0LTYuMyA2LjQ0LTYuMzk1VjUuMjk2aC0yLjMzM3pNNzIuMjQ2IDE4LjU0OGMtLjU2LjU1Ni0xLjMwNy45MjYtMi4xNDcuOTI2aC0yLjUyYy0uODQgMC0xLjQ5My0uMjc4LTIuMTQ3LS45MjYtLjU2LS41NTYtLjkzMy0xLjI5OC0uOTMzLTIuMTMyIDAtLjgzNC4yOC0xLjU3NS45MzMtMi4xMzEuNTYtLjU1NiAxLjMwNy0uODM0IDIuMTQ3LS44MzRoMi41MmMuODQgMCAxLjQ5NC4yNzggMi4xNDcuODM0LjU2LjU1Ni45MzQgMS4yOTcuOTM0IDIuMTMxIDAgLjgzNC0uMjggMS41NzYtLjkzNCAyLjEzMm0xLjAyNy03LjUwNmMtLjkzNC0uNTU2LTIuMDU0LS44MzQtMy4xNzQtLjgzNGgtMi41MmMtMS4xMiAwLTIuMTQ3LjI3OC0zLjE3NC44MzQtLjkzMy41NTYtMS43NzMgMS4yOTctMi4yNCAyLjIyNC0uNTYuOTI2LS44NCAyLjAzOC0uODQgMy4xNXMuMjggMi4xMzIuODQgMy4xNTFjLjU2LjkyNyAxLjMwNyAxLjc2IDIuMjQgMi4yMjQuOTM0LjU1NiAyLjA1NC44MzQgMy4xNzQuODM0aDIuNTJjMS4xMiAwIDIuMTQ3LS4yNzggMy4xNzQtLjgzNC45MzMtLjU1NiAxLjc3My0xLjI5NyAyLjI0LTIuMjI0LjU2LS45MjcuODQtMi4wMzkuODQtMy4xNSAwLTEuMTEzLS4yOC0yLjEzMi0uODQtMy4xNTEtLjQ2Ny0uOTI3LTEuMjEzLTEuNjY4LTIuMjQtMi4yMjRNMTUzLjM2IDEyLjg5NWMtLjI4LjQ2My0uNjU0LjgzNC0xLjEyIDEuMTEyLS40NjcuMjc4LTEuMDI3LjM3LTEuNDk0LjM3aC04LjAyN1Y4LjU0aDguMDI3Yy41NiAwIDEuMDI3LjA5MyAxLjQ5NC4zNzEuNDY2LjI3OC44NC41NTYgMS4xMiAxLjAyLjI4LjQ2My40NjYuOTI2LjQ2NiAxLjM5IDAgLjU1Ni0uMTg2IDEuMTEyLS40NjYgMS41NzVtMi44LTQuNTRhNi40MTIgNi40MTIgMCAwIDAtMi4yNC0yLjIyNSA1LjkwNyA1LjkwNyAwIDAgMC0zLjA4LS44MzRoLTExLjI5NXYxNy4zM2gzLjI2N3YtNS4wOThoOC4wMjdjMS4xMiAwIDIuMTQ3LS4yNzggMy4wOC0uODM0YTYuNDEyIDYuNDEyIDAgMCAwIDIuMjQtMi4yMjRjLjU2MS0uOTI2Ljg0MS0yLjAzOC44NDEtMy4wNThhNS44IDUuOCAwIDAgMC0uODQtMy4wNThNMTMyLjYzOCAxMi44OTVjLS4yOC40NjMtLjY1My44MzQtMS4xMiAxLjExMi0uNDY3LjI3OC0uOTM0LjM3LTEuNDk0LjM3aC04LjEyVjguNTRoOC4wMjdjLjU2IDAgMS4wMjcuMDkzIDEuNDkzLjM3MS40NjcuMjc4Ljg0LjU1NiAxLjEyIDEuMDIuMjguNDYzLjQ2Ny45MjYuNDY3IDEuMzkuMDk0LjU1Ni0uMDkzIDEuMTEyLS4zNzMgMS41NzVtMi43MDcgMS41NzVjLjU2LS45MjYuODQtMi4wMzguODQtMy4wNThhNS44IDUuOCAwIDAgMC0uODQtMy4wNTggNi40MTIgNi40MTIgMCAwIDAtMi4yNC0yLjIyNCA1LjkwNyA1LjkwNyAwIDAgMC0zLjA4LS44MzRIMTE4LjczdjE3LjMzaDMuMjY3di01LjA5OGg1Ljc4N2w1LjIyNyA1LjA5N2gzLjI2N3YtMS4yOTdsLTQuMi00LjE3Yy4zNzMtLjA5My43NDctLjI3OCAxLjEyLS40NjRhNy4wMjUgNy4wMjUgMCAwIDAgMi4xNDctMi4yMjRNOTEuNTY4IDExLjA0MmMtLjkzNC0uNTU2LTIuMDU0LS44MzQtMy4xNzQtLjgzNGgtMi41MmMtMS4xMiAwLTIuMTQ3LjI3OC0yLjk4Ny43NHYtLjc0SDc5LjYydjEyLjQxN2gzLjI2N3YtNi4yMDljMC0uODM0LjI4LTEuNDgyLjg0LTIuMTMxLjU2LS41NTYgMS4zMDctLjgzNCAyLjE0Ny0uODM0aDIuNTJjLjg0IDAgMS41ODcuMjc4IDIuMTQ3LjgzNC41Ni41NTYuODQgMS4yOTcuODQgMi4xMzF2Ni4yMWgzLjI2N3YtNi4yMWMwLTEuMTEyLS4yOC0yLjEzMS0uODQtMy4xNS0uNDY3LS45MjctMS4zMDctMS42NjgtMi4yNC0yLjIyNCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                  />
                </a>
                <div className="search-n-hamburger d-flex justify-content-end">
                  <div className="bulk-list">
                    <div className="bulk-cart-wrapper">
                      <img
                        alt="shopping-cart"
                        width="24"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjc2NDcgMjMuNTg4MkMyMC43NjQ3IDI0LjM2NzkgMjAuMTMyNiAyNSAxOS4zNTI5IDI1QzE4LjU3MzIgMjUgMTcuOTQxMiAyNC4zNjc5IDE3Ljk0MTIgMjMuNTg4MkMxNy45NDEyIDIyLjgwODUgMTguNTczMiAyMi4xNzY1IDE5LjM1MjkgMjIuMTc2NUMyMC4xMzI2IDIyLjE3NjUgMjAuNzY0NyAyMi44MDg1IDIwLjc2NDcgMjMuNTg4MloiIGZpbGw9IiMzMzMzM0EiLz4KPHBhdGggZD0iTTguMDU4ODIgMjMuNTg4MkM4LjA1ODgyIDI0LjM2NzkgNy40MjY3NSAyNSA2LjY0NzA2IDI1QzUuODY3MzYgMjUgNS4yMzUyOSAyNC4zNjc5IDUuMjM1MjkgMjMuNTg4MkM1LjIzNTI5IDIyLjgwODUgNS44NjczNiAyMi4xNzY1IDYuNjQ3MDYgMjIuMTc2NUM3LjQyNjc1IDIyLjE3NjUgOC4wNTg4MiAyMi44MDg1IDguMDU4ODIgMjMuNTg4MloiIGZpbGw9IiMzMzMzM0EiLz4KPHBhdGggZD0iTTMuODIzNTMgMTQuNTI5NEMzLjgyMzUzIDE1LjYzNCA0LjcxODk2IDE2LjUyOTQgNS44MjM1MyAxNi41Mjk0SDIxLjc5ODJDMjIuODE3MiAxNi41Mjk0IDIzLjY3MzQgMTUuNzYzMSAyMy43ODU5IDE0Ljc1MDNMMjQuNzUzMiA2LjA0NDM5QzI0Ljg4NDkgNC44NTk2NiAyMy45NTc1IDMuODIzNTMgMjIuNzY1NSAzLjgyMzUzSDMuODIzNTNWMTQuNTI5NFoiIGZpbGw9IiMzMzMzM0EiLz4KPHBhdGggZD0iTTEgMUgxLjE3NTUzQzEuOTMzMDIgMSAyLjYyNTUxIDEuNDI3OTQgMi45NjQzMiAyLjEwNTQ0TDMuODIzNTMgMy44MjM1M00zLjgyMzUzIDMuODIzNTNIMjIuNzY1NUMyMy45NTc1IDMuODIzNTMgMjQuODg0OSA0Ljg1OTY2IDI0Ljc1MzIgNi4wNDQzOUwyMy43ODU5IDE0Ljc1MDNDMjMuNjczNCAxNS43NjMxIDIyLjgxNzMgMTYuNTI5NCAyMS43OTgyIDE2LjUyOTRINS44MjM1M0M0LjcxODk2IDE2LjUyOTQgMy44MjM1MyAxNS42MzQgMy44MjM1MyAxNC41Mjk0VjMuODIzNTNaTTIwLjc2NDcgMjMuNTg4MkMyMC43NjQ3IDI0LjM2NzkgMjAuMTMyNiAyNSAxOS4zNTI5IDI1QzE4LjU3MzIgMjUgMTcuOTQxMiAyNC4zNjc5IDE3Ljk0MTIgMjMuNTg4MkMxNy45NDEyIDIyLjgwODUgMTguNTczMiAyMi4xNzY1IDE5LjM1MjkgMjIuMTc2NUMyMC4xMzI2IDIyLjE3NjUgMjAuNzY0NyAyMi44MDg1IDIwLjc2NDcgMjMuNTg4MlpNOC4wNTg4MiAyMy41ODgyQzguMDU4ODIgMjQuMzY3OSA3LjQyNjc2IDI1IDYuNjQ3MDYgMjVDNS44NjczNiAyNSA1LjIzNTI5IDI0LjM2NzkgNS4yMzUyOSAyMy41ODgyQzUuMjM1MjkgMjIuODA4NSA1Ljg2NzM2IDIyLjE3NjUgNi42NDcwNiAyMi4xNzY1QzcuNDI2NzYgMjIuMTc2NSA4LjA1ODgyIDIyLjgwODUgOC4wNTg4MiAyMy41ODgyWiIgc3Ryb2tlPSIjMzMzMzNBIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                      />
                    </div>
                  </div>
                  <button className="btn-search">
                    <img
                      alt="search icon"
                      width="22"
                      height="22"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOS4xNjY2NyIgY3k9IjkuMTY2NjciIHI9IjYuNDE2NjciIHN0cm9rZT0iIzMzMzMzQSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE5LjI1IDE5LjI1TDEzLjc1IDEzLjc1IiBzdHJva2U9IiMzMzMzM0EiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                    />
                  </button>
                  <button type="button" className="btn-hamburger">
                    <img
                      alt="menu icon"
                      width="16"
                      height="14"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOC4yIDE1LjkiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMzMzMzNBO308L3N0eWxlPjwvZGVmcz48cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSIxOC4yIiBoZWlnaHQ9IjIuMyIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeT0iMTMuNyIgd2lkdGg9IjE4LjIiIGhlaWdodD0iMi4zIi8+PHJlY3QgY2xhc3M9ImNscy0xIiB5PSI2LjgiIHdpZHRoPSIxMy43IiBoZWlnaHQ9IjIuMyIvPjwvc3ZnPg=="
                    />
                  </button>
                </div>
              </div>
              <div className="navbar__mobile-bottom ">
                <div className="mobile-menu">
                  <nav className="main-menu">
                    <a className="nav-item active" href="/">
                      <div className="menu-icon">
                        <img
                          alt="marketplace"
                          width="16"
                          height="16"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEyXzM4MykiPgo8cGF0aCBkPSJNNi4zMzMzMyA4LjExMTExTDcuMjIyMzMgMU03LjIyMjMzIDFIMy41NTg2NUMzLjA5OTc4IDEgMi42OTk4IDEuMzEyMjkgMi41ODg1MSAxLjc1NzQ1TDEuMzEwNjYgNi44Njg1NkMxLjE1Mjg2IDcuNDk5NzEgMS42MzAyMiA4LjExMTExIDIuMjgwNzkgOC4xMTExMUgyLjc3Nzg4TTcuMjIyMzMgMUgxMC43Nzc5TTExLjY2NjcgOC4xMTExMUwxMC43Nzc5IDFNMTAuNzc3OSAxSDE0LjQ0MTVDMTQuOTAwNCAxIDE1LjMwMDQgMS4zMTIzIDE1LjQxMTcgMS43NTc0N0wxNi42ODk0IDYuODY4NThDMTYuODQ3MiA3LjQ5OTczIDE2LjM2OTggOC4xMTExMSAxNS43MTkyIDguMTExMTFIMTUuMjIyM00xNS4yMjIzIDguMTExMTFWMTZDMTUuMjIyMyAxNi41NTIzIDE0Ljc3NDYgMTcgMTQuMjIyMyAxN0gxMC43Nzc5TTE1LjIyMjMgOC4xMTExMUgyLjc3Nzg4TTEwLjc3NzkgMTdWMTIuNjY2N0MxMC43Nzc5IDEyLjExNDQgMTAuMzMwMiAxMS42NjY3IDkuNzc3OSAxMS42NjY3SDguMjIyMzNDNy42NzAwNCAxMS42NjY3IDcuMjIyMzMgMTIuMTE0NCA3LjIyMjMzIDEyLjY2NjdWMTdNMTAuNzc3OSAxN0g3LjIyMjMzTTIuNzc3ODggOC4xMTExMVYxNkMyLjc3Nzg4IDE2LjU1MjMgMy4yMjU2IDE3IDMuNzc3ODggMTdINy4yMjIzMyIgc3Ryb2tlPSIjMzMzMzNBIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik03LjIxOTk3IDE1Ljk5MzNDNy4yMTk5NyAxNi41NDU2IDcuNjY3NjkgMTYuOTkzMyA4LjIxOTk3IDE2Ljk5MzNIOS43NzU1M003LjIxOTk3IDE1Ljk5MzNDNy4yMTk5NyAxNi41NDU2IDcuNjY3NjkgMTYuOTkzMyA4LjIxOTk3IDE2Ljk5MzNIOS43NzU1M003LjIxOTk3IDE1Ljk5MzNDNy4yMTk5NyAxNi41NDU2IDcuNjY3NjkgMTYuOTkzMyA4LjIxOTk3IDE2Ljk5MzNIOS43NzU1M003LjIxOTk3IDE1Ljk5MzNDNy4yMTk5NyAxNi41NDU2IDcuNjY3NjkgMTYuOTkzMyA4LjIxOTk3IDE2Ljk5MzNIOS43NzU1M005Ljc3NTUzIDE2Ljk5MzNDMTAuMzI3OCAxNi45OTMzIDEwLjc3NTUgMTYuNTQ1NiAxMC43NzU1IDE1Ljk5MzNWMTIuNjZDMTAuNzc1NSAxMi4xMDc3IDEwLjMyNzggMTEuNjYgOS43NzU1MyAxMS42Nkg4LjIxOTk3QzcuNjY3NjkgMTEuNjYgNy4yMTk5NyAxMi4xMDc3IDcuMjE5OTcgMTIuNjZWMTUuOTkzM003LjIxOTk3IDE1Ljk5MzNDNy4yMTk5NyAxNi41NDU2IDcuNjY3NjkgMTYuOTkzMyA4LjIxOTk3IDE2Ljk5MzNIOS43NzU1MyIgc3Ryb2tlPSJ1cmwoI3BhaW50MF9saW5lYXJfMTJfMzgzKSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTJfMzgzIiB4MT0iNy4yMTAzIiB5MT0iMTQuMzI2MSIgeDI9IjEwLjc3MDkiIHkyPSIxNC4zMjYxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMzAxRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjEiIHN0b3AtY29sb3I9IiMyNzAwRjMiLz4KPHN0b3Agb2Zmc2V0PSIwLjMiIHN0b3AtY29sb3I9IiM1ODAwRTAiLz4KPHN0b3Agb2Zmc2V0PSIwLjUiIHN0b3AtY29sb3I9IiM3RTAwRDEiLz4KPHN0b3Agb2Zmc2V0PSIwLjciIHN0b3AtY29sb3I9IiM5OTAwQzYiLz4KPHN0b3Agb2Zmc2V0PSIwLjkiIHN0b3AtY29sb3I9IiNBQTAwQzAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQUYwMEJFIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTJfMzgzIj4KPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                        />
                      </div>
                      <h4>Marketplace</h4>
                    </a>
                    <a className="nav-item " href="/explore/">
                      <div className="menu-icon">
                        <img
                          alt="explore"
                          width="16"
                          height="16"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEyXzM5MikiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDE5QzE0Ljk3MDYgMTkgMTkgMTQuOTcwNiAxOSAxMEMxOSA1LjAyOTQ0IDE0Ljk3MDYgMSAxMCAxQzUuMDI5NDQgMSAxIDUuMDI5NDQgMSAxMEMxIDE0Ljk3MDYgNS4wMjk0NCAxOSAxMCAxOVpNOCA4TDYgMTRMMTIgMTJMMTQgNkw4IDhaIiBzdHJva2U9IiMzMzMzM0EiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggOEw2IDE0TDEyIDEyTDE0IDZMOCA4WiIgc3Ryb2tlPSJ1cmwoI3BhaW50MF9saW5lYXJfMTJfMzkyKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xMl8zOTIiIHgxPSI1Ljk3ODI0IiB5MT0iOS45OTkxMyIgeDI9IjEzLjk4OTUiIHkyPSI5Ljk5OTEzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMzAxRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjEiIHN0b3AtY29sb3I9IiMyNzAwRjMiLz4KPHN0b3Agb2Zmc2V0PSIwLjMiIHN0b3AtY29sb3I9IiM1ODAwRTAiLz4KPHN0b3Agb2Zmc2V0PSIwLjUiIHN0b3AtY29sb3I9IiM3RTAwRDEiLz4KPHN0b3Agb2Zmc2V0PSIwLjciIHN0b3AtY29sb3I9IiM5OTAwQzYiLz4KPHN0b3Agb2Zmc2V0PSIwLjkiIHN0b3AtY29sb3I9IiNBQTAwQzAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQUYwMEJFIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTJfMzkyIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                        />
                      </div>
                      <h4>Explore</h4>
                    </a>
                    <a className="nav-item " href="/statistics/">
                      <div className="menu-icon">
                        <img
                          alt="statistics"
                          width="16"
                          height="16"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOSAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEyXzM3NSkiPgo8cGF0aCBkPSJNMTAuMyAxLjEwMDAxSDguMDk5OThDNy44MjM4MyAxLjEwMDAxIDcuNTk5OTggMS4zMjM4NiA3LjU5OTk4IDEuNjAwMDFWMTUuN0M3LjU5OTk4IDE1Ljk3NjEgNy44MjM4MyAxNi4yIDguMDk5OTggMTYuMkgxMC4zQzEwLjU3NjEgMTYuMiAxMC44IDE1Ljk3NjEgMTAuOCAxNS43VjEuNjAwMDFDMTAuOCAxLjMyMzg2IDEwLjU3NjEgMS4xMDAwMSAxMC4zIDEuMTAwMDFaIiBzdHJva2U9IiMzMzMzM0EiLz4KPHBhdGggZD0iTTMuNzk5OTggNC4yOTk5OUgxLjU5OTk4QzEuMzIzODMgNC4yOTk5OSAxLjA5OTk4IDQuNTIzODUgMS4wOTk5OCA0Ljc5OTk5VjE1LjdDMS4wOTk5OCAxNS45NzYxIDEuMzIzODMgMTYuMiAxLjU5OTk4IDE2LjJIMy43OTk5OEM0LjA3NjEyIDE2LjIgNC4yOTk5OCAxNS45NzYxIDQuMjk5OTggMTUuN1Y0Ljc5OTk5QzQuMjk5OTggNC41MjM4NSA0LjA3NjEyIDQuMjk5OTkgMy43OTk5OCA0LjI5OTk5WiIgc3Ryb2tlPSIjMzMzMzNBIi8+CjxwYXRoIGQ9Ik0xNi44IDguNjAwMDFIMTQuNkMxNC4zMjM4IDguNjAwMDEgMTQuMSA4LjgyMzg2IDE0LjEgOS4xMDAwMVYxNS43QzE0LjEgMTUuOTc2MSAxNC4zMjM4IDE2LjIgMTQuNiAxNi4ySDE2LjhDMTcuMDc2MSAxNi4yIDE3LjMgMTUuOTc2MSAxNy4zIDE1LjdWOS4xMDAwMUMxNy4zIDguODIzODYgMTcuMDc2MSA4LjYwMDAxIDE2LjggOC42MDAwMVoiIHN0cm9rZT0iIzMzMzMzQSIvPgo8cGF0aCBkPSJNMCAxM0w0LjUgN0w5IDlMMTMuNSA0TDE4IDgiIHN0cm9rZT0idXJsKCNwYWludDBfbGluZWFyXzEyXzM3NSkiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzEyXzM3NSIgeDE9Ii0wLjA0ODk1NzQiIHkxPSI4LjQ5OTAyIiB4Mj0iMTcuOTc2NCIgeTI9IjguNDk5MDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAzMDFGRiIvPgo8c3RvcCBvZmZzZXQ9IjAuMSIgc3RvcC1jb2xvcj0iIzI3MDBGMyIvPgo8c3RvcCBvZmZzZXQ9IjAuMyIgc3RvcC1jb2xvcj0iIzU4MDBFMCIvPgo8c3RvcCBvZmZzZXQ9IjAuNSIgc3RvcC1jb2xvcj0iIzdFMDBEMSIvPgo8c3RvcCBvZmZzZXQ9IjAuNyIgc3RvcC1jb2xvcj0iIzk5MDBDNiIvPgo8c3RvcCBvZmZzZXQ9IjAuOSIgc3RvcC1jb2xvcj0iI0FBMDBDMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNBRjAwQkUiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMl8zNzUiPgo8cmVjdCB3aWR0aD0iMTguNCIgaGVpZ2h0PSIxNy4zIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                        />
                      </div>
                      <h4>Statistics</h4>
                    </a>
                    <a className="nav-item " href="/launchpad/">
                      <div className="menu-icon">
                        <img
                          alt="launchpad"
                          width="16"
                          height="16"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDEwTDE2LjcwNzEgNi4yOTI4OUMxNi44OTQ2IDYuMTA1MzYgMTcgNS44NTEgMTcgNS41ODU3OVYyQzE3IDEuNDQ3NzIgMTYuNTUyMyAxIDE2IDFIMTIuNDE0MkMxMi4xNDkgMSAxMS44OTQ2IDEuMTA1MzYgMTEuNzA3MSAxLjI5Mjg5TDggNU0xMyAxMFYxMy41QzEzIDEzLjgxNDggMTIuODUxOCAxNC4xMTExIDEyLjYgMTQuM0wxMC4yMDQ5IDE2LjA5NjRDOS42MzI3MiAxNi41MjU1IDguODA4MTggMTYuMjMyNyA4LjYzNDcyIDE1LjUzODlMOCAxM00xMyAxMEw4IDEzTTggNUg0LjVDNC4xODUyNCA1IDMuODg4ODUgNS4xNDgxOSAzLjcgNS40TDEuOTAzNjUgNy43OTUxNEMxLjQ3NDU0IDguMzY3MjggMS43NjcyOSA5LjE5MTgyIDIuNDYxMTEgOS4zNjUyOEw1IDEwTTggNUw1IDEwTTggMTNMNy4yOTI4OSAxMy43MDcxQzcuMTA1MzYgMTMuODk0NiA2Ljg1MSAxNCA2LjU4NTc5IDE0SDVDNC40NDc3MiAxNCA0IDEzLjU1MjMgNCAxM1YxMS40MTQyQzQgMTEuMTQ5IDQuMTA1MzYgMTAuODk0NiA0LjI5Mjg5IDEwLjcwNzFMNSAxME04IDEzTDkuMTMzNDIgMTAuMTY2NEM5LjQ1OTk1IDkuMzUwMTMgOC42NDk4NyA4LjU0MDA1IDcuODMzNTUgOC44NjY1OEw1IDEwTTEzIDVIMTMuMDA5IiBzdHJva2U9IiMzMzMzM0EiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIuOTkxIDVIMTNNNC44NDU4NiAxMC4xNDUxTDQuMjgzODkgMTAuNzA3MUM0LjA5NjM2IDEwLjg5NDYgMy45OTEgMTEuMTQ5IDMuOTkxIDExLjQxNDJWMTNDMy45OTEgMTMuNTUyMyA0LjQzODcyIDE0IDQuOTkxIDE0SDYuNTc2NzlDNi44NDIgMTQgNy4wOTYzNiAxMy44OTQ2IDcuMjgzODkgMTMuNzA3MUw3Ljg0NTg2IDEzLjE0NTFDNy45NDE2MiAxMy4wNDk0IDguMDE2OTMgMTIuOTM1MiA4LjA2NzIzIDEyLjgwOTRMOS4xMjQ0MiAxMC4xNjY0QzkuNDUwOTUgOS4zNTAxMyA4LjY0MDg3IDguNTQwMDUgNy44MjQ1NSA4Ljg2NjU4TDUuMTgxNTggOS45MjM3N0M1LjA1NTg0IDkuOTc0MDcgNC45NDE2MiAxMC4wNDk0IDQuODQ1ODYgMTAuMTQ1MVoiIHN0cm9rZT0idXJsKCNwYWludDBfbGluZWFyXzEyXzQzOSkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzEyXzQzOSIgeDE9IjMuOTY2NTIiIHkxPSI5LjQ5OTAyIiB4Mj0iMTIuOTg4MiIgeTI9IjkuNDk5MDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAzMDFGRiIvPgo8c3RvcCBvZmZzZXQ9IjAuMSIgc3RvcC1jb2xvcj0iIzI3MDBGMyIvPgo8c3RvcCBvZmZzZXQ9IjAuMyIgc3RvcC1jb2xvcj0iIzU4MDBFMCIvPgo8c3RvcCBvZmZzZXQ9IjAuNSIgc3RvcC1jb2xvcj0iIzdFMDBEMSIvPgo8c3RvcCBvZmZzZXQ9IjAuNyIgc3RvcC1jb2xvcj0iIzk5MDBDNiIvPgo8c3RvcCBvZmZzZXQ9IjAuOSIgc3RvcC1jb2xvcj0iI0FBMDBDMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNBRjAwQkUiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
                        />
                      </div>
                      <h4>Launchpad</h4>
                    </a>
                    <div className="nav-item">
                      <div className="menu-icon">
                        <img
                          alt="create"
                          width="16"
                          height="16"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3IDExLjE5OTdDMTYuMjQ4NSAxMS40Mjc0IDE1LjQ1MTEgMTEuNTQ5OSAxNC42MjUyIDExLjU0OTlDMTAuMTEwMiAxMS41NDk5IDYuNDUwMDkgNy44ODk3OCA2LjQ1MDA5IDMuMzc0NzhDNi40NTAwOSAyLjU0ODg2IDYuNTcyNTcgMS43NTE1NCA2LjgwMDM1IDFDMy40NDM1MiAyLjAxNzQzIDEgNS4xMzU3OSAxIDguODI0ODdDMSAxMy4zMzk5IDQuNjYwMTMgMTcgOS4xNzUxMyAxN0MxMi44NjQyIDE3IDE1Ljk4MjYgMTQuNTU2NSAxNyAxMS4xOTk3WiIgZmlsbD0iIzMzMzMzQSIgc3Ryb2tlPSIjMzMzMzNBIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                        />
                      </div>
                      <h4>Dark Mode</h4>
                      <div className="theme-mode-toggle-switch-button">
                        <button type="button" className="slider-wrapper">
                          <span className="slider"></span>
                        </button>
                      </div>
                    </div>
                  </nav>
                  <nav className="profile-menu">
                    <div className="profile-back">
                      <div className="nav-item ">
                        <i className="chevron-left"></i>
                        <h4>Profile</h4>
                      </div>
                      <a
                        className="nav-item profile-edit "
                        href="/my-profile/edit/"
                      >
                        <h4>Edit</h4>
                      </a>
                    </div>
                    <a className="nav-item " href="/my-profile/">
                      <h4>NFTs Owned</h4>
                    </a>
                    <a className="nav-item " href="/my-profile/created/">
                      <h4>NFTs Created</h4>
                    </a>
                    <a className="nav-item " href="/my-profile/offers_made/">
                      <h4>Offers made</h4>
                    </a>
                    <a
                      className="nav-item "
                      href="/my-profile/offers_received/"
                    >
                      <h4>Offers received</h4>
                    </a>
                    <a className="nav-item " href="/my-profile/transfers/">
                      <h4>Transfers</h4>
                    </a>
                  </nav>
                </div>
                <div className="container">
                  <div className="btn-auth">
                    <button className="btn btn--primary" aria-label="Log In">
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
