import React from 'react';

type Properties = {
  children: React.ReactNode | Array<React.ReactNode>
};

const Content: React.FunctionComponent<Properties> = ({ children }) => (
  <>
    <div data-testid="content" style={{ marginLeft: 20, marginRight: 20 }}>
      {children}
    </div>
  </>
);

export default Content;
