import styled from '@emotion/styled'

import Image from 'next/image';
import Divider from '@/app/images/Divider.svg';

import { useState } from 'react';
import React from 'react';

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  height: 40px;
  width: 100%;
  gap: 12px;
  margin-left: 50px;
  
`

const NavItem = styled.p<{ active?: boolean }>`
  color: ${({ active }) => (active ? '#FF9900' : '#D3D3D3')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  font-size: ${({ active }) => (active ? '16px' : '14px')};
  width: auto;
  cursor: pointer;
  transition: all 0.3s ease;
`

const navs = ['전체', '학교생활', '기숙사', '유머'];


export default function HeaderNavigaion() {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <NavWrapper>
            {navs.map((nav, idx) => (
                <React.Fragment key={nav}>
                    <NavItem
                        active={activeIdx === idx}
                        onClick={() => setActiveIdx(idx)}
                    >
                        {nav}
                    </NavItem>
                    {idx < navs.length - 1 && (
                        <Image src={Divider} alt="Divider" width={2} height={20} key={`divider-${idx}`} />
                    )}
                </React.Fragment>
            ))}
        </NavWrapper>
    );
}