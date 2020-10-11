import React from 'react';
import LayoutWrap from './style';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function Layout () {
  return (
    <LayoutWrap>
      <Header />
      <Sidebar />
    </LayoutWrap>
  );
}

export default Layout;