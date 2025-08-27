import Image from "next/image";
import styled from '@emotion/styled'

import { Bell, Back, Close, Logo, Search, User , Options } from "@/app/Library/Images";

import HeaderNavigaion from "../HeaderNavigation/page";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";




type Props = {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
};

export default function Header({ isOpen, setIsOpen }: Props) {
  const pathname = usePathname();
  const page = pathname.replace("/", "");

  const router = useRouter();

  switch (page) {
    case "votemake":
      return (
        <Headers>
          <VoteHeaderDiv>
            <HeaderItems>
              <VoteIconDiv>
                <Image src={Back} alt="Search" width={24} height={24} onClick={() => {router.back()}}/>
                <Image src={Close} alt="User" width={24} height={24} onClick={() => setIsOpen && setIsOpen(true)}/>
              </VoteIconDiv>
            </HeaderItems>
          </VoteHeaderDiv>
        </Headers>
      );
    case "choseEdit/options":
      return (
        <Headers>
          <VoteHeaderDiv>
            <VoteHeaderItems>
                <Image src={Back} alt="Search" width={24} height={24} onClick={() => {router.back()}}/>
              <VoteP>투표 설정하기</VoteP>
            </VoteHeaderItems>
          </VoteHeaderDiv>
        </Headers>
      );
    case "choseEdit":
      return (
        <Headers>
          <VoteHeaderDiv>
            <HeaderItems>
              <VoteIconDiv>
                <Image src={Back} alt="Back" width={24} height={24} onClick={() => {router.back()}}/>

                <ChoseEditHeaderDiv>
                  <Image src={Close} alt="Close" width={24} height={24} onClick={() => setIsOpen && setIsOpen(true)}/>
                  <Image src={Options} alt="Options" width={24} height={24} onClick={() => {router.push("/choseEdit/options")}}/>
                </ChoseEditHeaderDiv>
              </VoteIconDiv>
            </HeaderItems>
          </VoteHeaderDiv>
        </Headers>
      );
    default:
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
}

const VoteP = styled.p`
  font-size: 13px;
  font-weight: 600;
`

const ChoseEditHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  gap : 30px;
  
  `


const Headers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width:600px;
  position: fixed;

  background-color : #FFFFFF;
`

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E6E6E6;
  height: 54px;
  width: 100%;

  top: 0;
  justify-content: space-between;
  padding: 0 24px;
  flex-direction: row;
`

const VoteHeaderDiv = styled.div`
  display: flex;
  align-items: center;

  height: 54px;
  width: 100%;
  position: sticky;
  top: 0;
  justify-content: space-between;
  padding: 0 24px;
  flex-direction: row;
`

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
`

const VoteIconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const HeaderItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`


const VoteHeaderItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: cneter;
  align-items: center;
  gap : 38%;
`