/**
 * This is the entry point for developing and debugging.
 * This file is not bundled with the block during the build process.
 */
import React from "react";
import ReactDOM from "react-dom";
import Component from "./index";

const node = document.getElementById("app");

const App = () => <Component text="Hello, world!" caption="Hello" cite="World" />;

ReactDOM.render(<App />, node);
