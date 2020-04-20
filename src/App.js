import React from "react"
import "./App.css"
import "bulma/css/bulma.min.css"
import { useRoutes, A } from "hookrouter"
import routes from "./router"

function App() {
  const routeResult = useRoutes(routes)
  console.log(routeResult)
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="menu sticky" style={{ marginTop: "10%" }}>
            <img src="/logo.jpg" style={{ marginBottom: "10%" }} alt="images" />
            <ul className="menu-list">
              <li>
                <A href="/" className="is-active">
                  <span className="icon pr-10">
                    <i className="fa fa-info-square"></i>
                  </span>
                  Scoreboard
                </A>
              </li>
              <li>
                <A href="patching">
                  <span className="icon pr-10">
                    <i className="fa fa-info-square"></i>
                  </span>
                  Patching Guide
                </A>
              </li>
              <li>
                <a href="#">
                  <span className="icon pr-10">
                    <i className="fa fa-pennant"></i>
                  </span>
                  Flagger
                </a>
                <ul>
                  <li>
                    <a href="/submit">Submit Flag</a>
                  </li>
                  <li>
                    <a href="#">Accepted Flag</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <span className="icon pr-10">
                    <i className="fa fa-cogs"></i>
                  </span>{" "}
                  Services
                </a>
                <ul>
                  <li>
                    <a href="#">S01 - Firmware</a>
                  </li>
                  <li>
                    <a href="#">S02 - Sandbox</a>
                  </li>
                  <li>
                    <a href="#">S03 - Image Manipulator</a>
                  </li>
                  <li>
                    <a href="#">S04 - Code Runner</a>
                  </li>
                  <li>
                    <a href="#">S05 - Crypto</a>
                  </li>
                  <li>
                    <a href="#">S06 - Hades</a>
                  </li>
                  <li>
                    <a href="#">S07 - Exif Reader</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {routeResult}
      </div>
    </div>
  )
}

export default App
