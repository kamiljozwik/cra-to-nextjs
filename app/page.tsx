"use client";

import React from "react";

import App from "./_src/App";
import { BrowserRouter } from "react-router-dom";

const Page = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Page;
