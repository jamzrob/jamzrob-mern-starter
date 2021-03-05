/* Copyright G. Hemingway, @2020 - All rights reserved */
"use strict";

import React from "react";
import styled from "styled-components";

const LandingBase = styled.div`
  display: flex;
  justify-content: center;
  grid-area: main;
`;

export const Landing = () => (
  <LandingBase>
    <h1>This is my landing page!</h1>
    <ul>
      <li>Modular Code</li>
      <li>HTTPs</li>
      <li>User Profile Modification</li>
      <li>Working results page</li>
      <li>Moves are clickable and renders state after each move</li>
      <li>Github SSO</li>
      <li>Autocomplete</li>
    </ul>
  </LandingBase>
);
