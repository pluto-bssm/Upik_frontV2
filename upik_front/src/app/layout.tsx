"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

import "./globals.css";
import Header from "../components/Header/page";
import NavigationBar from "../components/NavigationBar/page";


const DynamicStyledComponents = dynamic(
  () => import("@/components/StyledComponents"),
  { 
    ssr: false,
    
    loading: () => (
      <div style={{
        width: '100%',
        maxWidth: '600px',
        minHeight: '100vh',
        margin: '0 auto',
        backgroundColor: '#fdfffc',
        display: 'flex',
        flexDirection: 'column'
      }}>
        Loading...
      </div>
    )
  }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <DynamicStyledComponents 
          isOpen={isOpen} 
          setIsOpen={setIsOpen}
          Header={Header}
          NavigationBar={NavigationBar}
        >
          {children}
        </DynamicStyledComponents>
      </body>
    </html>
  );
}