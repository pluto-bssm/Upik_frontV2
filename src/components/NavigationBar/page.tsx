import styled from '@emotion/styled'
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

import { Home, Vote, Guide, Dashboard } from '@/app/Library/Images';


const NavItem = styled.div`
    width: 100vw;
    max-width: 600px;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
    background-color: #FDFFFC;
`

const filterStyle = "invert(13%) sepia(97%) saturate(7472%) hue-rotate(192deg) brightness(20%) contrast(130%)";

const navs = [
  { name: "Home", path: "/" , icon: Home },
  { name: "VoteMake", path: "/VoteMake", icon: Vote },
  { name: "Guide", path: "/Guide", icon: Guide },
  { name: "Shop", path: "/Shop", icon: Dashboard },
];

export default function NavigationBar() {
    const router = useRouter();
    const pathname = usePathname();
    const page = pathname.replace("/", "");


    switch (page) {
        case "VoteMake":
          return (
            <div>

            </div>
          );
        case "Guide":
          return (
            <div>
    
            </div>
          );
        default:
            return (
                  <NavItem>
                    {navs.map(nav => (
                      <Image
                        key={nav.name}
                        src={nav.icon}
                        alt={nav.name}
                        width={40}
                        height={40}
                        style={{
                          cursor: "pointer",
                          filter: pathname === nav.path ? filterStyle : undefined
                        }}
                        onClick={() => router.push(nav.path)}
                      />
                    ))}
                  </NavItem>
                )
      }

}