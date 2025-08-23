"use client"

import styled from '@emotion/styled'
import Header from '../components/Header/page';
import NavigationBar from '../components/NavigationBar/page';


const HomeDiv = styled.div`
  background-color : #FDFFFC;
  height : 100vh;
  width : 600px;
  display : flex;
  justify-content :flex-start;
  flex-direction : column;
  align-items : center;
  overflow-x : hidden;
`

export default function Home() {
  return (
    <HomeDiv>
       <Header/>
       <section>
        {/* Main content goes here */}
        <div style={{ flex: 1, width: '100%' }}>
          {/* Replace with your main content */}
          <p style={{ textAlign: 'center', marginTop: '20px' }}>Main Content Area</p>
        </div>
       </section>
       <NavigationBar/>
    </HomeDiv>
  );
}
