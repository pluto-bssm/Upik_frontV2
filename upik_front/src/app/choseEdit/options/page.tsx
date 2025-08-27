'use client'

import styled from "@emotion/styled";
import { useRouter,usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import MemberChose from "@/components/Modal/MemberChose";

import { Nexts } from "@/app/Library/Images"
import { motion, AnimatePresence } from "framer-motion";

export default
function OptionsPage() {   
  
  const router = useRouter()
  const pathname = usePathname()

  const [isOpen,setIsOpen] = useState(false);

  return (

    <Option>
    <OptionsDiv onClick={() => {
      setIsOpen(true)}
      }>
      <Options>
        <OptionsP>
        <TilteP>투표 종료 조건</TilteP>
        </OptionsP>

        <OptionButton>
          <SubP>투표 종료 조건 설정하기</SubP>
          <Image src={Nexts} alt="next" width={20} height={20}/>
        </OptionButton>
      </Options>
    </OptionsDiv>

        <OptionsDiv>
      <Options>
        <OptionsP>
        <TilteP>선지 작성하기</TilteP>
        </OptionsP>
        <OptionButton>
          <SubP>AI 자동 선지 추천 기능 사용하기</SubP>
          <Image src={Nexts} alt="next" width={24} height={24}/>
        </OptionButton>
      </Options>
    </OptionsDiv>


    <MemberChose isOpen = {isOpen} setIsOpen ={setIsOpen} />


    </Option>

  );
}

const Option =  styled.div`
  display :flex;
  flex-direction : column;
  margin-top : 100px;

`

const OptionsDiv = styled.div`
  max-width : 600px;
  width : 100%;
  display : flex;
  justify-content: center;   
  align-items: center;
  
  padding : 20px 0px;
  border-bottom : 1px solid #F0F0F0;
`


const Options = styled.div`
  width : 90%;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content: center;
  gap : 20px;
`

const OptionButton = styled.div`
  display : flex;
  flex-direction : row;
  width : 100%;
  justify-content: space-between;
  
`

const OptionsP = styled.div`
  display : flex;
  flex-direction : row;
  width : 100%;
  justify-content: space-between;

`

const TilteP = styled.p`
  font-size : 12px;
  color : #B3B3B3;
  font-weight : 600;
`

const SubP = styled.p`
  font-size : 16px;
  color : #011627;
  font-weight : 600;
`