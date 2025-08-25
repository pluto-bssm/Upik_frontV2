import Image from "next/image";
import styled from '@emotion/styled'

import { Bell, Back, Close, Logo, Search, User } from "@/app/Library/Images";

import HeaderNavigaion from "../HeaderNavigation/page";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Headers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E6E6E6;
  height: 54px;
  width: 100%;
  position: sticky;
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

export default function Header() {
  const pathname = usePathname();
  const page = pathname.replace("/", "");

  const router = useRouter();

  switch (page) {
    case "VoteMake":
      return (
        <Headers>
          <VoteHeaderDiv>
            <HeaderItems>
              <VoteIconDiv>
                <Image src={Back} alt="Search" width={24} height={24} onClick={() => {router.back()}}/>
                <Image src={Close} alt="User" width={24} height={24} onClick={() => {router.replace("/")}}/>
              </VoteIconDiv>
            </HeaderItems>
          </VoteHeaderDiv>
        </Headers>
      );
    case "Guide":
      return (
        <div>

        </div>
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