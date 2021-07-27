import React from 'react';

type Properties = {
  children: React.ReactNode | Array<React.ReactNode>
};

const Content: React.FunctionComponent<Properties> = ({ children }) => (
  <>
    <div data-testid="content">
      {children}
    </div>
  </>
);

export default Content;
