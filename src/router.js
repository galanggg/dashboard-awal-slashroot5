import React from "react"
import Scoreboard from "./components/Scoreboard"
import Patching from "./components/Patching"
import SubmitFlag from "./components/SubmitFlag"

const routes = {
  "/": () => <Scoreboard />,
  "/patching": () => <Patching />,
  "/submit": () => <SubmitFlag />,
}

export default routes
