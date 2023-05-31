"use client";

import React, { useEffect, useState } from "react";

import App from "./_src/App";
import { BrowserRouter } from "react-router-dom";

const Page = () => {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);

  return render ? (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ) : null;
};

export default Page;
