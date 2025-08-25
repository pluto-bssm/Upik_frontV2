"use client";

import React, { useState } from "react";

import styled from '@emotion/styled'
import GuideCategoryImage from "@/components/GuideCategoryImage";
import GuideCategoryText from "@/components/GuideCategoryText";
import CategoryChoseBox from "@/components/CategoryChoseBox";
import CategoryChose from "@/components/Modal/CategoryChose";


const Appdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 36px;
  margin-top: 54px;

`

const UIdataDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 36px;
`


export default function VoteMakePage() {
  const [GuideCategory, setGuideCategory] = useState('학교생활');
  const [isOpen , setIsOpen] = useState(false);

  return (
    <Appdiv> 
      <UIdataDiv>
        <GuideCategoryImage category={GuideCategory} />
        <GuideCategoryText />
      </UIdataDiv>

      <CategoryChoseBox category={GuideCategory} setIsOpen={setIsOpen} isOpen={isOpen} />
      {isOpen && <CategoryChose setGuideCategory={setGuideCategory} category={GuideCategory} />}

    </Appdiv>
  );
}