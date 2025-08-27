import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { Plus } from '@/app/Library/Images'


import { useRouter } from "next/navigation";

export default function ChoseButton( ) {

  const router = useRouter();



  return (
    <ButtonDiv>
        <Button onClick={() => router.push(`/choseEdit`)}>
            <Image src={Plus} alt="plus" />
            <p>투표 제작하기</p>
        </Button>
    </ButtonDiv>
  )
}

const ButtonDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Button = styled.button`
    width: 90%;
    height: 54px;
    background: #FF9F1C;
    border: none;
    border-radius: 32px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    
    p {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #ffffffff;
    }
    `