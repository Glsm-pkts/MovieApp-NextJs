"use client";
import Header from "@/components/Header";
import "./globals.css";
import React from 'react';
import Provider from "./Provider";
import Tabs from "@/components/Tabs";

const Layout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Provider> 
        <Header/>
        <Tabs/>
        {children}
        </Provider>
      </body>
    </html>
  );
}

export default Layout;
