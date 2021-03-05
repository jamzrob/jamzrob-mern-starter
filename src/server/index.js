/* Copyright G. Hemingway, 2020 - All rights reserved */
"use strict";

const path = require("path");
const fs = require("fs");
const http = require("http");
const https = require("https");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const session = require("express-session");
const envConfig = require("simple-env-config");

/**********************************************************************************************************/

const setupServer = async () => {
  // Get the app config

  // Setup our Express pipeline
  let app = express();
  app.engine("pug", require("pug").__express);
  app.set("views", __dirname);
  app.use(express.static(path.join(__dirname, "../../public")));

  // Finish with the body parser
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Give them the SPA base page
  app.get("*", (req, res) => {
    res.render("base.pug");
  });

  // Run the server itself
  let server = app.listen(8000, () => {
    console.log(` Listening on: ${server.address().port}`);
  });
};

/**********************************************************************************************************/

// Run the server
setupServer();
