import Image from "next/image";
import styled from '@emotion/styled'

import Logo from '@/app/Images/Logo.svg'

import Bell from '@/app/Images/Bell.svg'
import Search from '@/app/Images/Search.svg'
import User from '@/app/Images/User.svg'

import HeaderNavigaion from "../HeaderNavigation/page";

const Headers = styled.div`
  width : 100%;
  display: flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  `

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  border-bottom : 1px solid #E6E6E6;
  height : 54px;
  width : 100%;
  position: sticky;
  top: 0;
  justify-content: space-between;
  padding: 0 24px;

  flex-direction : column;

`

const IconDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap : 1vw;
`

const HeaderItems = styled.div`
    display: flex;
    flex-direction: row;
    width : 100%;
    justify-content: space-between;
    
`

export default function Header() {
    return (
        <Headers>
        <HeaderDiv>
            <HeaderItems>
                <Image src={Logo} alt="Logo" width={60} height={50} />

                <IconDiv>
                    <Image src={Search} alt="Search" width={24} height={24}/>
                    <Image src={Bell} alt="Bell" width={24} height={24}/>
                    <Image src={User} alt="User" width={24} height={24}/>
                </IconDiv>
            </HeaderItems>
        </HeaderDiv>
        <HeaderNavigaion />
        </Headers>
    );
}