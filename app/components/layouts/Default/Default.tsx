import React from 'react';
import Content from '../../modules/page/Content/Content';
import Footer from '../../modules/page/Footer/Footer';
import Header from '../../modules/page/Header/Header';

interface Props {
  children: React.ReactNode | Array<React.ReactNode>;
}

const Default: React.FunctionComponent<Props> = ({ children }) => (
  <>
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </>
);

export default Default;
