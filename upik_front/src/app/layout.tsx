"use client";
import React, { useState } from "react";

import { CacheProvider } from "@emotion/react";
import { cache } from "./emotionCache";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

import "./globals.css";
import Header from "../components/Header/page";
import NavigationBar from "../components/NavigationBar/page";
import CancelButton  from "@/components/Modal/MakeCancel";

const MotionCancelButton = motion(CancelButton);

const Appdiv = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fdfffc;
  display: flex;
  flex-direction: column;

`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{

  const [isOpen, setIsOpen] = useState(false);
  return (
    <html lang="en">
      <body>
        <AnimatePresence>
        <CacheProvider value={cache}>
          <Appdiv>
            <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && (
          <CancelButton
            key="bg"
            setIsOpen={setIsOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
            {children}
            <NavigationBar />
          </Appdiv>
        </CacheProvider>
      </AnimatePresence>
      </body>
    </html>
  );
}