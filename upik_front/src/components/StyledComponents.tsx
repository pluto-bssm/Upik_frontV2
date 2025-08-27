import React from "react";
import { CacheProvider } from "@emotion/react";
import { cache } from "../app/emotionCache";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import CancelButton from "./Modal/MakeCancel";

const Appdiv = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fdfffc;
  display: flex;
  flex-direction: column;
`;

interface StyledComponentsProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  Header: React.ComponentType<any>;
  NavigationBar: React.ComponentType<any>;
}

export default function StyledComponents({
  children,
  isOpen,
  setIsOpen,
  Header,
  NavigationBar
}: StyledComponentsProps) {
  return (
    <AnimatePresence>
      <CacheProvider value={cache}>
        <Appdiv>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
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
  );
}