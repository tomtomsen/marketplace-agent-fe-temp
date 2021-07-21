import React from 'react';

type Props = {
  children: React.ReactNode | Array<React.ReactNode>
};

const Content: React.FunctionComponent<Props> = ({ children }) => (
  <>
    <div data-testid="content">
      {children}
    </div>
  </>
);

export default Content;
