"use strict";

import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

const MyApp = () => {
  return <div>Hello World</div>;
};

render(<MyApp />, document.getElementById("mainDiv"));
