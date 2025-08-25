"use client";

import { CacheProvider } from "@emotion/react";
import { cache } from "./emotionCache";
import styled from "@emotion/styled";

import "./globals.css";
import Header from "../components/Header/page";
import NavigationBar from "../components/NavigationBar/page";

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
}>) {
  return (
    <html lang="en">
      <body>
        <CacheProvider value={cache}>
          <Appdiv>
            <Header />
            {children}
            <NavigationBar />
          </Appdiv>
        </CacheProvider>
      </body>
    </html>
  );
}