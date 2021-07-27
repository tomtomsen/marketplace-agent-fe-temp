import React from 'react';
import Content from '../../modules/Page/Content/Content';
import Footer from '../../modules/Page/Footer/Footer';
import Header from '../../modules/Page/Header/Header';

interface Properties {
  children: React.ReactNode | Array<React.ReactNode>;
}

const Default: React.FunctionComponent<Properties> = ({ children }) => (
  <>
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </>
);

export default Default;
