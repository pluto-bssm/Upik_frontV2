import styled from '@emotion/styled'

import Vote from '@/app/Images/Vote.svg'
import Guide from '@/app/Images/Guide.svg'
import Home from '@/app/Images/Home.svg'
import Shop from '@/app/Images/Shop.svg'


import Image from 'next/image';

const NavItem = styled.div`
    width: 100vw;
    max-width: 600px;
    position: fixed;
    bottom: 0;

    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;

`


export default function NavigationBar() {
    return (
       <NavItem>

                <Image src={Vote} alt="Vote" width={40} height={40}/>
                <Image src={Guide} alt="Guide" width={40} height={40}/>
                <Image src={Home} alt="Home" width={40} height={40}/>
                <Image src={Shop} alt="Shop" width={40} height={40}/>
 
       </NavItem>
    )
}