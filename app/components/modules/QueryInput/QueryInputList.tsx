import React from 'react';
import { QueryConfiguration } from '../../../types';
import QueryInput from './QueryInput';

type Properties = {
  queries: Array<QueryConfiguration>;
};

const QueryInputList: React.FunctionComponent<Properties> = ({ queries }) => {
  const [items, setItems] = React.useState(queries);

  const handleRemoved = (query: QueryConfiguration) => {
    setItems(items.filter((q: QueryConfiguration) => q.id !== query.id));
  };

  if (items.length === 0) {
    return (
      <>
        <div data-testid="query-input-list">
          empty
        </div>
      </>
    );
  }

  return (
    <>
      <div data-testid="query-input-list">
        {items.map((query: QueryConfiguration) => (
          <div key={query.id}>
            <QueryInput query={query} onRemoved={() => handleRemoved(query)} />
          </div>
        ))}
      </div>
    </>
  );
};

export default QueryInputList;
