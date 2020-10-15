import React from 'react';
import { LayoutWrap, Container} from './style';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function Layout () {
  return (
    <LayoutWrap>
      <Header />
      <Container>
        <Sidebar />
      </Container>
    </LayoutWrap>
  );
}

export default Layout;